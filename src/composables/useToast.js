import { ref, createApp } from "vue";
import Toast from "@/components/Toast.vue";

const toasts = ref([]);

const showToast = (message, type = "info", duration = 3000) => {
  const toastApp = createApp(Toast, {
    message,
    type,
    duration,
    onClose: () => {
      const index = toasts.value.findIndex((t) => t.id === toastId);
      if (index > -1) {
        toasts.value.splice(index, 1);
      }
    },
  });

  const toastId = Date.now();
  const container = document.createElement("div");
  document.body.appendChild(container);

  toastApp.mount(container);

  toasts.value.push({
    id: toastId,
    app: toastApp,
    container,
  });

  // Auto remove after duration
  setTimeout(() => {
    const index = toasts.value.findIndex((t) => t.id === toastId);
    if (index > -1) {
      toasts.value[index].app.unmount();
      document.body.removeChild(toasts.value[index].container);
      toasts.value.splice(index, 1);
    }
  }, duration);
};

export const useToast = () => {
  return {
    showToast,
  };
};
