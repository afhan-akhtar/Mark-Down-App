<template>
  <div>
    <div class="markdown-container">
      <div class="markdown-input-container">
        <h1>Mark Down Input</h1>
        <textarea v-model="markdownInput" cols="50" rows="20" class="markdown-input"></textarea>
      </div>
      <div class="markdown-output-container">
        <h1>Rendered Mark Down</h1>
        <textarea v-html="renderedMarkdown" cols="50" rows="20" class="markdown-output"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import { useMarkdownMixin } from './markdownMixin';

export default {
  setup() {
    const { markdownInput, renderedMarkdown } = useMarkdownMixin();

    return {
      markdownInput,
      renderedMarkdown,
    };
  },
};
</script>

<style scoped>
.markdown-container {
  display: flex;
  justify-content: space-between;
}

.markdown-input-container {
  flex: 1;
  margin-right: 10px;
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
}

.markdown-output-container {
  flex: 1;
  padding: 10px;
  background-color: #e0e0e0;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow-y: auto;
}
.markdown-input {
  font-size: 20px;
  font-weight: bold;
}
.markdown-output {
  font-size: 20px;
  font-weight: bold;
}
</style>

