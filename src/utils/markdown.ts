import DOMPurify from 'dompurify';
import { marked } from 'marked';

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
    return input; // In caso di engine senza supporto Unicode property escapes
  }
}

export function extractTitle(md: string, fallback: string): string {
  const clean = stripEmojis(md);
  const lines = clean.split(/\r?\n/);
  for (const line of lines) {
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
    if (!t) continue;
    if (t.startsWith('#')) continue; // salta heading
    if (t.startsWith('>')) {
      // blockquote
      return t.replace(/^>\s*/gm, '').replace(/\*\*|__/g, '').split(/\n/)[0].trim();
    }
    // prima frase/paragrafo
    return t.replace(/\*\*|__/g, '').split(/\n/)[0].trim();
  }
  return '';
}

export function mdToHtml(md: string): string {
  const clean = stripEmojis(md);
  const rawHtml = marked.parse(clean, { breaks: true });
  const safe = DOMPurify.sanitize(rawHtml as string);
  return safe;
}

export function buildSectionFromMarkdown(md: string, id: string, fallbackTitle: string): Section {
  return {
    id,
    title: extractTitle(md, fallbackTitle),
    description: extractDescription(md),
    html: mdToHtml(md),
  };
}

