import { visit } from 'unist-util-visit';

const LATEX_COMMAND_PATTERN = /\\(?:int|frac|sqrt|sum|prod|lim|sin|cos|tan|log|ln|arcsin|arccos|arctan|cdot|times|left|right|begin|end|alpha|beta|gamma|delta|theta|lambda|pi|omega|infty|leq|geq|neq|to|partial|nabla|vec|hat|bar|overline|underline|displaystyle)\b/;
const STRONG_MATH_FEATURE_PATTERN = /[=^_]|\\(?:frac|sqrt|int|sum|prod|lim|begin|end)\b/;
const INLINE_WRAPPED_PATTERN = /\[([^\[\]\n]+)\]|\(([^()\n]+)\)/g;

function looksLikeBareLatex(text) {
  const trimmed = text.trim();
  if (!trimmed) return false;
  if (trimmed.startsWith('$')) return false;
  if (trimmed.startsWith('`')) return false;
  if (trimmed.includes('http://') || trimmed.includes('https://')) return false;

  return LATEX_COMMAND_PATTERN.test(trimmed) && STRONG_MATH_FEATURE_PATTERN.test(trimmed);
}

function looksLikeInlineLatex(text) {
  const trimmed = text.trim();
  if (!trimmed) return false;
  if (trimmed.length < 3) return false;
  if (trimmed.includes('http://') || trimmed.includes('https://')) return false;

  return LATEX_COMMAND_PATTERN.test(trimmed) || STRONG_MATH_FEATURE_PATTERN.test(trimmed);
}

function splitInlineMathNodes(text) {
  const nodes = [];
  let lastIndex = 0;
  let match;

  while ((match = INLINE_WRAPPED_PATTERN.exec(text)) !== null) {
    const fullMatch = match[0];
    const candidate = (match[1] ?? match[2] ?? '').trim();

    if (!looksLikeInlineLatex(candidate)) {
      continue;
    }

    if (match.index > lastIndex) {
      nodes.push({ type: 'text', value: text.slice(lastIndex, match.index) });
    }

    nodes.push({ type: 'inlineMath', value: candidate });
    lastIndex = match.index + fullMatch.length;
  }

  if (lastIndex < text.length) {
    nodes.push({ type: 'text', value: text.slice(lastIndex) });
  }

  return nodes.length ? nodes : [{ type: 'text', value: text }];
}

export function remarkAutoMath() {
  return (tree) => {
    visit(tree, 'text', (node, index, parent) => {
      if (!parent || typeof index !== 'number') return;

      if (parent.type === 'inlineCode' || parent.type === 'code' || parent.type === 'math' || parent.type === 'inlineMath') {
        return;
      }

      const value = String(node.value || '');
      if (!value) return;

      INLINE_WRAPPED_PATTERN.lastIndex = 0;
      if (!INLINE_WRAPPED_PATTERN.test(value)) return;

      const replacement = splitInlineMathNodes(value);
      if (replacement.length === 1 && replacement[0].type === 'text') return;

      parent.children.splice(index, 1, ...replacement);
      return index + replacement.length;
    });

    visit(tree, 'paragraph', (node, index, parent) => {
      if (!parent || typeof index !== 'number') return;
      if (!Array.isArray(node.children) || node.children.length !== 1) return;

      const onlyChild = node.children[0];
      if (onlyChild.type !== 'text') return;

      const value = String(onlyChild.value || '').trim();
      if (!looksLikeBareLatex(value)) return;

      parent.children.splice(index, 1, {
        type: 'math',
        value,
      });

      return index + 1;
    });
  };
}
