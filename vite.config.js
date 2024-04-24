import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@pages": "/src/pages",
      "@components": "/src/components",
      "@redux": "/src/redux",
    },
  },
  build: {
    chunkFileNames: ({ name }) => {
      if (name.includes("/pages/")) {
        // If the chunk is a page component, name it based on the page name
        return `pages/${name.replace(/.*\/pages\/(.*)\..*/, "$1")}.js`;
      } else if (name.includes("/components/")) {
        // If the chunk is a component, name it based on the component name
        return `components/${name.replace(
          /.*\/components\/(.*)\..*/,
          "$1"
        )}.js`;
      }
      // For other chunks, use the default naming strategy
      return `chunks/${name}.js`;
    },
  },
});
