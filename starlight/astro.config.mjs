import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";
import starlightImageZoom from "starlight-image-zoom";
import starlightViewModes from "starlight-view-modes";
import starlightLinksValidator from "starlight-links-validator";
import starlightSidebarTopicsDropdown from "starlight-sidebar-topics-dropdown";

// https://astro.build/config
// https://starlight.astro.build/reference/configuration/
export default defineConfig({
  site: "https://mutanuq.trueberryless.org",
  integrations: [
    starlight({
      title: "Mutanuq",
      logo: {
        light: "./src/assets/light-logo.png",
        dark: "./src/assets/dark-logo.png",
        replacesTitle: true,
      },
      social: {
        github: "https://github.com/trueberryless-org/mutanuq",
        patreon: "https://www.patreon.com/trueberryless",
      },
      editLink: {
        baseUrl:
          "https://github.com/trueberryless-org/mutanuq/tree/main/starlight/",
      },
      lastUpdated: true,
      defaultLocale: "en",
      locales: {
        en: {
          label: "English",
        },
        de: {
          label: "Deutsch",
        },
      },
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      expressiveCode: {},
      customCss: [
        "./src/styles/custom.css",
        "./src/styles/landing.css",
        "./src/styles/print.css",
        "@fontsource-variable/jetbrains-mono/wght.css",
      ],
      components: {
        // DownloadFile: "./src/components/DownloadFile.astro",
        Pagination: "./src/components/CustomPagination.astro",
      },
      plugins: [
        starlightImageZoom(),
        starlightLinksValidator(),
        // starlightViewModes(),
        starlightSidebarTopicsDropdown([
          {
            label: {
              en: "Software Development",
              de: "Softwareentwicklung",
            },
            icon: "puzzle",
            link: "/software-development/object-oriented-programming",
            items: [
              {
                label: "",
                items: [
                  "software-development/object-oriented-programming",
                  "software-development/software-metrics",
                  "software-development/design-patterns/behavioral-design-patterns/command",
                  "software-development/design-patterns/behavioral-design-patterns/strategy",
                  "software-development/design-patterns/creational-design-patterns/singleton",
                  "software-development/design-patterns/structural-design-patterns/adapter",
                  "software-development/design-patterns/structural-design-patterns/decorator",
                ],
              },
            ],
          },
          {
            label: {
              en: "Databases",
              de: "Datenbanken",
            },
            icon: "document",
            link: "/databases/relational-databases/",
            items: [
              {
                label: "",
                items: [
                  "databases/relational-databases",
                  "databases/document-oriented-databases",
                  "databases/schema",
                  "databases/cap-theorem",
                ],
              },
            ],
          },
          {
            label: {
              en: "Artificial Intelligence",
              de: "Künstliche Intelligenz",
            },
            icon: "star",
            link: "/artificial-intelligence/",
            items: [
              {
                label: "",
                items: [
                  "artificial-intelligence",
                  "artificial-intelligence/python",
                  "artificial-intelligence/numpy",
                  "artificial-intelligence/pandas",
                  "artificial-intelligence/matplotlib",
                  "artificial-intelligence/seaborn",
                  "artificial-intelligence/machine-learning",
                  "artificial-intelligence/deep-learning",
                  "artificial-intelligence/supervised-learning",
                  "artificial-intelligence/natural-language-processing",
                ],
              },
            ],
          },
          {
            label: {
              en: "Decentralised Systems",
              de: "Dezentrale Systeme",
            },
            icon: "cloud-download",
            link: "/decentralised-systems/cloud-computing/",
            items: [
              {
                label: "",
                items: [
                  "decentralised-systems/cloud-computing",
                  "decentralised-systems/storage-account",
                  "decentralised-systems/azure-functions",
                  "decentralised-systems/durable-functions",
                ],
              },
            ],
          },
          {
            label: {
              en: "Embedded Systems",
              de: "Hardwarenahe Programmierung",
            },
            icon: "laptop",
            link: "/embedded-programming/",
            items: [
              {
                label: "",
                items: [
                  "embedded-programming",
                  "embedded-programming/basic-programm",
                  "embedded-programming/special-function-register",
                  "embedded-programming/light-emitting-diode",
                  "embedded-programming/button",
                  "embedded-programming/liquid-crystal-display",
                  "embedded-programming/interrupts",
                  "embedded-programming/analogue-digital-converter",
                  "embedded-programming/timer",
                  "embedded-programming/pointer",
                  "embedded-programming/usart",
                  "embedded-programming/spi",
                  "embedded-programming/eeprom",
                ],
              },
            ],
          },
          {
            label: {
              en: "Deployment",
              de: "Bereitstellung",
            },
            icon: "rocket",
            link: "/deployment/virtualisation/",
            items: [
              {
                label: "",
                items: [
                  "deployment/virtualisation",
                  "deployment/storage-systems",
                  "deployment/security-strategies",
                ],
              },
            ],
          },
          // {
          //   label: {
          //     de: "Überblick",
          //     en: "Overview",
          //   },
          //   icon: "magnifier",
          //   link: "/overview/",
          //   items: [
          //     {
          //       label: "",
          //       items: ["overview"],
          //     },
          //   ],
          // },
        ]),
      ],
      credits: true,
    }),
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathjax],
  },
  redirects: {
    "/": "/en/",
  },
});
