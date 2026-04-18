/**
 * Sovereign Text Formatter (v2.0)
 * Handles universal Markdown-style emphasis and line breaks for component props.
 * Optimized for High-Contrast Cinematic standards.
 */
export const formatText = (text: string | undefined): string => {
  if (!text) return '';
  
  return text
    // Handle Markdown bold: **text** -> <strong class="text-brand-secondary">text</strong>
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-brand-secondary">$1</strong>')
    // Handle Markdown italic: *text* -> <em class="italic">text</em>
    .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
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
