export function estimateReadingMinutes(content: string): number {
  if (!content) return 1;

  const cjkChars = (content.match(/[\u3400-\u9FFF]/g) || []).length;
  const cleaned = content
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/<[^>]+>/g, " ");
  const latinWords = (cleaned.match(/[A-Za-z0-9]+(?:[-'][A-Za-z0-9]+)*/g) || []).length;

  const cjkMinutes = cjkChars / 300;
  const latinMinutes = latinWords / 200;
  const minutes = Math.ceil(cjkMinutes + latinMinutes);

  return Math.max(1, minutes);
}
