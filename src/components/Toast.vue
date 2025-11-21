<template>
  <div v-if="isVisible" class="toast-container">
    <div class="toast" :class="type">
      <div class="toast-content">
        <div class="toast-icon">
          <svg
            v-if="type === 'success'"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 6L9 17L4 12"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            v-else-if="type === 'error'"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            v-else
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="2"
            />
            <path
              d="M12 8V12M12 16H12.01"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div class="toast-message">{{ message }}</div>
      </div>
      <button class="toast-close" @click="close">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6L6 18M6 6L18 18"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  message: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "info",
    validator: (value) => ["success", "error", "info"].includes(value),
  },
  duration: {
    type: Number,
    default: 3000,
  },
  onClose: {
    type: Function,
    default: () => {},
  },
});

const isVisible = ref(true);

const close = () => {
  props.onClose();
  isVisible.value = false;
};

onMounted(() => {
  setTimeout(() => {
    close();
  }, props.duration);
});
</script>

<style scoped>
.toast-container {
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: 9999;
}

.toast {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-radius: 8px;
  border: 1px solid;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  min-width: 320px;
  max-width: 480px;
  animation: slideIn 0.3s ease-out;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.toast.success {
  background: #deef79;
  color: #1f2937;
  border-color: none;
}

.toast.error {
  background: #fee2e2;
  color: #991b1b;
  border-color: #fca5a5;
}

.toast.info {
  background: #ffffff;
  color: #1f2937;
  border-color: #6b7280;
}

.toast-content {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}

.toast-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.toast.success .toast-icon {
  color: #ddef78;
}

.toast.error .toast-icon {
  color: #dc2626;
}

.toast.info .toast-icon {
  color: #6b7280;
}

.toast-message {
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.4;
  flex: 1;
}

.toast-close {
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  padding: 4px;
  margin-left: 12px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.toast-close:hover {
  background: #f3f4f6;
  color: #6b7280;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .toast-container {
    left: 16px;
    right: 16px;
    top: 16px;
  }

  .toast {
    min-width: auto;
    max-width: none;
  }
}
</style>
