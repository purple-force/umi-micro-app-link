import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  qiankun: {
    slave: {},
  },
  npmClient: 'npm',
});
