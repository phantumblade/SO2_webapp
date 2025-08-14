declare module 'dompurify' {
  export interface Config { [key: string]: any }
  export function sanitize(dirty: string, config?: Config): string;
  const _default: { sanitize: typeof sanitize };
  export default _default;
}

declare module 'marked' {
  export function parse(src: string, options?: any): string;
}

