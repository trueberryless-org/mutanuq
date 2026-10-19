import { unified } from "@astrojs/markdown-remark";
import starlight from "@astrojs/starlight";
import lunaria from "@lunariajs/starlight";
import { defineConfig } from "astro/config";
import rehypeMathjax from "rehype-mathjax";
import remarkMath from "remark-math";
import starlightGroupPages from "starlight-group-pages";
import starlightImageZoom from "starlight-image-zoom";
import starlightLinksValidator from "starlight-links-validator";
import starlightSidebarTopics from "starlight-sidebar-topics";
import starlightThemeRapide from "starlight-theme-rapide";
import starlightViewModes from "starlight-view-modes";

import { redirects } from "./redirects.config.mjs";
import { topics, unlistedPages } from "./sidebar.config.mjs";

// https://astro.build/config
// https://starlight.astro.build/reference/configuration/
export default defineConfig({
  site: "https://mutanuq.felixs.dev",
  integrations: [
    starlight({
      title: "Mutanuq",
      logo: {
        light: "./src/assets/light-logo.png",
        dark: "./src/assets/dark-logo.png",
        replacesTitle: true,
      },
      social: [
        {
          icon: "blueSky",
          label: "BlueSky",
          href: "https://bsky.app/profile/trueberryless.org",
        },
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/trueberryless-org/mutanuq",
        },
      ],
      editLink: {
        baseUrl: "https://github.com/trueberryless-org/mutanuq/tree/main/",
      },
      lastUpdated: true,
      defaultLocale: "de",
      locales: {
        en: {
          label: "English",
        },
        de: {
          label: "Deutsch",
        },
      },
      head: [
        {
          tag: "script",
          attrs: {
            src: "https://rybbit.lou.gg/api/script.js",
            "data-site-id": "4",
            defer: true,
          },
        },
      ],
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      expressiveCode: {},
      customCss: [
        "./src/styles/custom.css",
        "./src/styles/landing.css",
        "./src/styles/print.css",
        "@fontsource-variable/jetbrains-mono/wght.css",
      ],
      components: {
        MarkdownContent: "./src/components/MarkdownContent.astro",
        Pagination: "./src/components/Pagination.astro",
        TableOfContents: "./src/components/TableOfContents.astro",
        Sidebar: "./src/components/Sidebar.astro",
      },
      plugins: [
        lunaria({
          sync: true,
        }),
        starlightViewModes(),
        starlightImageZoom(),
        starlightGroupPages({
          extendIndexPages: false,
          sidebarLink: "label",
        }),
        starlightLinksValidator(),
        starlightSidebarTopics(topics, { topics: unlistedPages }),
        starlightThemeRapide(),
      ],
    }),
  ],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeMathjax],
    }),
  },
  redirects,
});
