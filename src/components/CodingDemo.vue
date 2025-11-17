<template>
  <div class="coding-demo">
    <div class="code-editor">
      <div class="editor-header">
        <div class="editor-controls">
          <span class="control red"></span>
          <span class="control yellow"></span>
          <span class="control green"></span>
        </div>
        <span class="editor-title">solution.js</span>
      </div>
      <div class="editor-body">
        <div class="code-line">
          <span class="line-number">1</span>
          <span class="code-text"
            ><span class="keyword">function</span>
            <span class="function">debounce</span>(<span class="param"
              >func</span
            >, <span class="param">delay</span>) {</span
          >
        </div>
        <div class="code-line">
          <span class="line-number">2</span>
          <span class="code-text">
            <span class="keyword">let</span>
            <span class="variable">timeout</span>;</span
          >
        </div>
        <div class="code-line">
          <span class="line-number">3</span>
          <span class="code-text"> </span>
        </div>
        <div class="code-line">
          <span class="line-number">4</span>
          <span class="code-text">
            <span class="keyword">return</span>
            <span class="keyword">function</span>(...<span class="param"
              >args</span
            >) {</span
          >
        </div>
        <div class="code-line">
          <span class="line-number">5</span>
          <span class="code-text">
            <span class="function">clearTimeout</span>(<span class="variable"
              >timeout</span
            >);</span
          >
        </div>
        <div class="code-line">
          <span class="line-number">6</span>
          <span class="code-text">
            <span class="variable">timeout</span> =
            <span class="function">setTimeout</span>(() => {</span
          >
        </div>
        <div class="code-line">
          <span class="line-number">7</span>
          <span class="code-text">
            <span class="function">func</span>.<span class="function"
              >apply</span
            >(<span class="keyword">this</span>,
            <span class="param">args</span>);</span
          >
        </div>
        <div class="code-line">
          <span class="line-number">8</span>
          <span class="code-text">
            }, <span class="variable">delay</span>);</span
          >
        </div>
        <div class="code-line">
          <span class="line-number">9</span>
          <span class="code-text"> };</span>
        </div>
        <div class="code-line">
          <span class="line-number">10</span>
          <span class="code-text">}</span>
        </div>
      </div>
      <div class="editor-footer">
        <button class="run-button">
          <span class="play-icon">▶</span>
          Run Code
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.coding-demo {
  width: 100%;
  max-width: 600px;
}

.code-editor {
  background: #18181b;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  border: 1px solid #374151;
}

.editor-header {
  background: #2d2d2d;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #1a1a1a;
}

.editor-controls {
  display: flex;
  gap: 8px;
  align-items: center;
}

.control {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.control.red {
  background: #ff5f56;
}

.control.yellow {
  background: #ffbd2e;
}

.control.green {
  background: #27c93f;
}

.editor-title {
  color: #9ca3af;
  font-size: 13px;
  font-family: "Consolas", "Monaco", "Courier New", monospace;
}

.editor-body {
  padding: 20px;
  font-family: "Consolas", "Monaco", "Courier New", monospace;
  font-size: 14px;
  line-height: 1.8;
  background: #18181b;
  min-height: 250px;
}

.code-line {
  display: flex;
  align-items: center;
  margin-bottom: 4px;
}

.line-number {
  color: #6b7280;
  margin-right: 24px;
  user-select: none;
  min-width: 20px;
  text-align: right;
  font-size: 13px;
}

.code-text {
  color: #e5e7eb;
}

.keyword {
  color: #c678dd;
  font-weight: 600;
}

.function {
  color: #61afef;
}

.param {
  color: #e06c75;
}

.variable {
  color: #e5c07b;
}

.editor-footer {
  background: #2d2d2d;
  padding: 12px 16px;
  border-top: 1px solid #1a1a1a;
  display: flex;
  justify-content: flex-end;
}

.run-button {
  background: #22c55e;
  color: #000000;
  border: none;
  padding: 8px 20px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 8px;
}

.run-button:hover {
  background: #16a34a;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);
}

.play-icon {
  font-size: 10px;
}

@media (max-width: 768px) {
  .coding-demo {
    max-width: 100%;
  }

  .editor-body {
    font-size: 12px;
    padding: 16px;
  }

  .line-number {
    margin-right: 16px;
  }
}
</style>
