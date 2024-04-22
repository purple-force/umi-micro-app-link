import { defineConfig } from "@umijs/max";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
    {
      path: "/:id/app1/*",
      microApp: "app1",
      microAppProps: {
        autoSetLoading: true,
        autoCaptureError: true,
      },
    },
    {
      path: "/:id/app2/*",
      microApp: "app2",
      microAppProps: {
        autoSetLoading: true,
        autoCaptureError: true,
      },
    },
  ],
  npmClient: "npm",
  qiankun: {
    master: {
      apps: [
        {
          name: "app1",
          entry: "//localhost:3001",
        },
        {
          name: "app2",
          entry: "//localhost:3002",
        },
      ],
    },
  },
});
