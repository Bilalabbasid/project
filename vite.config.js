import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      vue(),
      {
        name: "html-transform",
        transformIndexHtml(html) {
          return html.replace(
            /%VITE_MEMBERSTACK_PUBLIC_KEY%/g,
            env.VITE_MEMBERSTACK_PUBLIC_KEY || ""
          );
        },
      },
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
});
