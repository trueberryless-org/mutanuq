import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import rehypeMathjax from "rehype-mathjax";
import remarkMath from "remark-math";
import starlightImageZoom from "starlight-image-zoom";
import starlightLinksValidator from "starlight-links-validator";
import starlightSidebarTopicsDropdown from "starlight-sidebar-topics-dropdown";
import starlightViewModes from "starlight-view-modes";

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
      defaultLocale: "de",
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
              { slug: "software-development/object-oriented-programming" },
              { slug: "software-development/software-metrics" },
              {
                label: "Entwurfsmuster",
                translations: {
                  en: "Design Patterns",
                },
                items: [
                  {
                    slug: "software-development/design-patterns",
                  },
                  {
                    label: "Verhaltensbasierte Entwurfsmuster",
                    translations: {
                      en: "Behavioral Design Patterns",
                    },
                    items: [
                      {
                        slug: "software-development/design-patterns/behavioral-design-patterns/command",
                      },
                      {
                        slug: "software-development/design-patterns/behavioral-design-patterns/strategy",
                      },
                    ],
                  },
                  {
                    label: "Schöpferische Entwurfsmuster",
                    translations: {
                      en: "Creational Design Patterns",
                    },
                    items: [
                      {
                        slug: "software-development/design-patterns/creational-design-patterns/singleton",
                      },
                    ],
                  },
                  {
                    label: "Strukturelle Entwurfsmuster",
                    translations: {
                      en: "Structural Design Patterns",
                    },
                    items: [
                      {
                        slug: "software-development/design-patterns/structural-design-patterns/adapter",
                      },
                      {
                        slug: "software-development/design-patterns/structural-design-patterns/decorator",
                      },
                    ],
                  },
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
              { slug: "databases/relational-databases" },
              { slug: "databases/document-oriented-databases" },
              { slug: "databases/schema" },
              { slug: "databases/cap-theorem" },
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
              { slug: "artificial-intelligence" },
              { slug: "artificial-intelligence/python" },
              { slug: "artificial-intelligence/numpy" },
              { slug: "artificial-intelligence/pandas" },
              { slug: "artificial-intelligence/matplotlib" },
              { slug: "artificial-intelligence/seaborn" },
              { slug: "artificial-intelligence/machine-learning" },
              { slug: "artificial-intelligence/deep-learning" },
              { slug: "artificial-intelligence/supervised-learning" },
              { slug: "artificial-intelligence/natural-language-processing" },
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
              { slug: "decentralised-systems/cloud-computing" },
              { slug: "decentralised-systems/storage-account" },
              { slug: "decentralised-systems/azure-functions" },
              { slug: "decentralised-systems/durable-functions" },
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
              { slug: "embedded-programming" },
              { slug: "embedded-programming/basic-programm" },
              { slug: "embedded-programming/special-function-register" },
              { slug: "embedded-programming/light-emitting-diode" },
              { slug: "embedded-programming/button" },
              { slug: "embedded-programming/liquid-crystal-display" },
              { slug: "embedded-programming/interrupts" },
              { slug: "embedded-programming/analogue-digital-converter" },
              { slug: "embedded-programming/timer" },
              { slug: "embedded-programming/pointer" },
              { slug: "embedded-programming/usart" },
              { slug: "embedded-programming/spi" },
              { slug: "embedded-programming/eeprom" },
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
              { slug: "deployment/virtualisation" },
              { slug: "deployment/storage-systems" },
              { slug: "deployment/security-strategies" },
            ],
          },
          {
            label: {
              en: "Languages",
              de: "Sprachen",
            },
            icon: "translate",
            link: "/languages/german_text_types/",
            items: [
              { slug: "languages/german_text_types" },
              { slug: "languages/literature" },
              { slug: "languages/text_types" },
            ],
          },
          {
            label: {
              en: "Economy and Law",
              de: "Wirtschaft und Recht",
            },
            icon: "approve-check-circle",
            link: "/economy_and_law/company_foundation/",
            items: [
              { slug: "economy_and_law/company_foundation" },
              { slug: "economy_and_law/marketing" },
            ],
          },
          {
            label: {
              en: "Project Management",
              de: "Projektmanagement",
            },
            icon: "list-format",
            link: "/project_management/magic_triangle/",
            items: [
              { slug: "project_management/magic_triangle" },
              { slug: "project_management/project_controlling" },
            ],
          },
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
