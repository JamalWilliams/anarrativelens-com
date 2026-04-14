/**
 * Sovereign Text Formatter (v1.0)
 * Handles universal Markdown-style emphasis and line breaks for component props.
 * Standardizes parsing across the "Sovereign Architect" library.
 */
export const formatText = (text: string | undefined): string => {
  if (!text) return '';
  
  return text
    // Handle Markdown bold: **text** -> <span class="eyebrow-accent text-brand-primary font-bold">text</span>
    .replace(/\*\*(.*?)\*\*/g, '<span class="eyebrow-accent">$1</span>')
    // Handle Markdown italic: *text* -> <span class="italic text-white/80">text</span>
    .replace(/\*(.*?)\*/g, '<span class="italic opacity-80">$1</span>')
    // Handle newline characters: \n -> <br />
    .replace(/\n/g, '<br />');
};

/**
 * Strips formatting for cases where raw text is required (e.g., aria-labels).
 */
export const stripFormatting = (text: string | undefined): string => {
  if (!text) return '';
  return text.replace(/\*\*|\*/g, '');
};
