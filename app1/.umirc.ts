import { defineConfig } from "@umijs/max";

export default defineConfig({
  model: {},
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: "npm",
  publicPath: "/app1/",
  qiankun: {
    slave: {},
  },
});
