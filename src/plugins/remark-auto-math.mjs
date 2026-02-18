import { visit } from 'unist-util-visit';

const LATEX_COMMAND_PATTERN = /\\(?:int|frac|sqrt|sum|prod|lim|sin|cos|tan|log|ln|arcsin|arccos|arctan|cdot|times|left|right|begin|end|alpha|beta|gamma|delta|theta|lambda|pi|omega|infty|leq|geq|neq|to|partial|nabla|vec|hat|bar|overline|underline|displaystyle)\b/;
const STRONG_MATH_FEATURE_PATTERN = /[=^_]|\\(?:frac|sqrt|int|sum|prod|lim|begin|end)\b/;

function looksLikeBareLatex(text) {
  const trimmed = text.trim();
  if (!trimmed) return false;
  if (trimmed.startsWith('$')) return false;
  if (trimmed.startsWith('`')) return false;
  if (trimmed.includes('http://') || trimmed.includes('https://')) return false;

  return LATEX_COMMAND_PATTERN.test(trimmed) && STRONG_MATH_FEATURE_PATTERN.test(trimmed);
}

export function remarkAutoMath() {
  return (tree) => {
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
