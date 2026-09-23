// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const pagesBase = process.env.PAGES_BASE?.replace(/\/$/, "") ?? "";

export default defineConfig({
  ...(pagesBase
    ? {
        vite: { base: `/${pagesBase}/` },
        // Nitro's Cloudflare bundle is not what GitHub Pages can serve.
        // Skip it so TanStack Start writes a static client build instead.
        nitro: false,
      }
    : {}),
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // GitHub Pages only serves static files. Prerender the marketing pages
    // when PAGES_BASE is set so the Actions deploy has real HTML.
    ...(pagesBase
      ? {
          prerender: {
            enabled: true,
            crawlLinks: true,
            autoStaticPathsDiscovery: true,
          },
        }
      : {}),
  },
});
