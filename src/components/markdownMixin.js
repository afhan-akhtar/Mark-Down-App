import { marked } from "marked";
import { ref, computed } from "vue";

export const useMarkdownMixin = () => {
  const markdownInput = ref('');

  const renderedMarkdown = computed(() => {
    return marked(markdownInput.value);
  });

  return {
    markdownInput,
    renderedMarkdown,
  };
};
