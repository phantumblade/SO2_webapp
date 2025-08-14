// Parser Markdown leggero senza dipendenze esterne
// Supporta: # titoli, > quote, liste, *italic* **bold**, `code`, ```fences```, link [t](u)

// Rimuove emoji e simboli non testuali per un look professionale
const emojiRegex = /[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu;

export type Section = {
  id: string;
  title: string;
  description: string;
  html: string;
};

export function stripEmojis(input: string): string {
  try {
    return input.replace(emojiRegex, '');
  } catch {
    return input;
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function extractTitle(md: string, fallback: string): string {
  const clean = stripEmojis(md);
  for (const line of clean.split(/\r?\n/)) {
    const m = line.match(/^#\s+(.+)/);
    if (m) return m[1].trim();
  }
  return fallback;
}

export function extractDescription(md: string): string {
  const clean = stripEmojis(md);
  const blocks = clean.split(/\n\s*\n/);
  for (const b of blocks) {
    const t = b.trim();
    if (!t || t.startsWith('#')) continue;
    if (t.startsWith('>')) return t.replace(/^>\s*/gm, '').replace(/\*\*|__/g, '').split(/\n/)[0].trim();
    return t.replace(/\*\*|__/g, '').split(/\n/)[0].trim();
  }
  return '';
}

export function mdToHtml(md: string): string {
  const src = stripEmojis(md).replace(/\r\n?/g, '\n');
  const lines = src.split('\n');
  let html = '';
  let inCode = false;
  let listType: 'ul' | 'ol' | null = null;
  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const line = raw.trimEnd();
    const fence = line.match(/^```/);
    if (fence) {
      if (!inCode) {
        inCode = true;
        html += '<pre><code>';
      } else {
        inCode = false;
        html += '</code></pre>';
      }
      continue;
    }
    if (inCode) {
      html += escapeHtml(raw) + '\n';
      continue;
    }

    // Headings
    const h = line.match(/^(#{1,3})\s+(.+)/);
    if (h) {
      if (listType) { html += `</${listType}>`; listType = null; }
      const level = h[1].length;
      html += `<h${level}>${escapeInline(h[2])}</h${level}>`;
      continue;
    }

    // Blockquote
    if (/^>\s*/.test(line)) {
      if (listType) { html += `</${listType}>`; listType = null; }
      html += `<blockquote>${escapeInline(line.replace(/^>\s*/, ''))}</blockquote>`;
      continue;
    }

    // Ordered list
    if (/^\d+\.\s+/.test(line)) {
      if (listType !== 'ol') { if (listType) html += `</${listType}>`; html += '<ol>'; listType = 'ol'; }
      html += `<li>${escapeInline(line.replace(/^\d+\.\s+/, ''))}</li>`;
      continue;
    }
    // Unordered list
    if (/^[-*]\s+/.test(line)) {
      if (listType !== 'ul') { if (listType) html += `</${listType}>`; html += '<ul>'; listType = 'ul'; }
      html += `<li>${escapeInline(line.replace(/^[-*]\s+/, ''))}</li>`;
      continue;
    }

    // Blank line ends lists
    if (line === '') {
      if (listType) { html += `</${listType}>`; listType = null; }
      html += '\n';
      continue;
    }

    // Paragraph
    if (listType) { html += `</${listType}>`; listType = null; }
    html += `<p>${escapeInline(line)}</p>`;
  }
  if (listType) html += `</${listType}>`;
  return html;
}

function escapeInline(s: string): string {
  // links [text](url)
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, t, u) => `<a href="${escapeHtml(u)}" target="_blank" rel="noopener noreferrer">${escapeHtml(t)}</a>`);
  // bold **text**
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  // italics *text*
  s = s.replace(/(^|\W)\*([^*]+)\*(?=\W|$)/g, '$1<em>$2</em>');
  // inline code `code`
  s = s.replace(/`([^`]+)`/g, (_, c) => `<code>${escapeHtml(c)}</code>`);
  return s;
}

export function buildSectionFromMarkdown(md: string, id: string, fallbackTitle: string): Section {
  return {
    id,
    title: extractTitle(md, fallbackTitle),
    description: extractDescription(md),
    html: mdToHtml(md),
  };
}
