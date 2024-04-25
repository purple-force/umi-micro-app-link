import { defineConfig } from "umi";

export default defineConfig({
  model: {},
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'npm',
  qiankun: {
    slave: {},
  },
});
