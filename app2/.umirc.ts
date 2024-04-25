import { defineConfig } from "@umijs/max";

export default defineConfig({
  model: {},
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  qiankun: {
    slave: {},
  },
  npmClient: "npm",
});
