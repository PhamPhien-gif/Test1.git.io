/// <reference types="vite/client" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Test1.git.io/", // Đổi thành tên repo của bạn
});

