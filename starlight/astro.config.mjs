import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";

import starlightLinksValidator from "starlight-links-validator";

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
                baseUrl: "https://github.com/trueberryless-org/mutanuq/tree/main/starlight/",
            },
            lastUpdated: true,
            defaultLocale: "de",
            locales: {
                de: {
                    label: "Deutsch",
                },
                en: {
                    label: "English",
                },
            },
            tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 4 },
            expressiveCode: {},
            customCss: ["./src/styles/custom.css", "./src/styles/landing.css"],
            components: {
                DownloadFile: "./src/components/DownloadFile.astro",
            },
            sidebar: [
                {
                    label: "Softwareentwicklung",
                    collapsed: true,
                    translations: {
                        en: "Software Development",
                    },
                    items: [
                        {
                            label: "Design Patterns",
                            collapsed: false,
                            translations: {
                                en: "Design Patterns",
                            },
                            items: [
                                {
                                    label: "Creational Design Patterns",
                                    translations: {
                                        en: "Creational Design Patterns",
                                    },
                                    autogenerate: {
                                        directory:
                                            "software_development/design_patterns/creational_design_patterns",
                                    },
                                },
                                {
                                    label: "Structural Design Patterns",
                                    translations: {
                                        en: "Structural Design Patterns",
                                    },
                                    autogenerate: {
                                        directory:
                                            "software_development/design_patterns/structural_design_patterns",
                                    },
                                },
                                {
                                    label: "Behavioral Design Patterns",
                                    translations: {
                                        en: "Behavioral Design Patterns",
                                    },
                                    autogenerate: {
                                        directory:
                                            "software_development/design_patterns/behavioral_design_patterns",
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    label: "Informationssysteme",
                    collapsed: true,
                    translations: {
                        en: "Information systems",
                    },
                    items: [
                        {
                            label: "Relationale Datenbanken",
                            translations: {
                                en: "Relational Databases",
                            },
                            autogenerate: { directory: "information_systems/relational_databases" },
                        },
                    ],
                },
                {
                    label: "Dezentrale Systeme",
                    collapsed: true,
                    translations: {
                        en: "Decentralised Systems",
                    },
                    autogenerate: { directory: "decentralised_systems" },
                },
                {
                    label: "Eingebettete Programmierung",
                    collapsed: true,
                    translations: {
                        en: "Embedded Programming",
                    },
                    autogenerate: { directory: "embedded_programming" },
                },
                {
                    label: "Systemintegration und Infrastruktur",
                    collapsed: true,
                    translations: {
                        en: "System integration and infrastructure",
                    },
                    autogenerate: { directory: "system_integration_and_infrastructure" },
                },
                {
                    label: "Projektmanagement",
                    collapsed: true,
                    translations: {
                        en: "Project Management",
                    },
                    autogenerate: { directory: "project_management" },
                },
                {
                    label: "Sprachen",
                    collapsed: true,
                    translations: {
                        en: "Languages",
                    },
                    items: [
                        {
                            label: "Englisch",
                            translations: {
                                en: "English",
                            },
                            items: [
                                {
                                    label: "Textsorten",
                                    translations: {
                                        en: "Text Types",
                                    },
                                    autogenerate: { directory: "languages/english/text_types" },
                                },
                            ],
                        },
                        {
                            label: "Deutsch",
                            translations: {
                                en: "German",
                            },
                            items: [
                                {
                                    label: "Literatur",
                                    translations: {
                                        en: "Literature",
                                    },
                                    autogenerate: { directory: "languages/german/literature" },
                                },
                                {
                                    label: "Textsorten",
                                    translations: {
                                        en: "Text Types",
                                    },
                                    autogenerate: { directory: "languages/german/text_types" },
                                },
                            ],
                        },
                    ],
                },
                {
                    label: "Wirtschaft und Recht",
                    collapsed: true,
                    translations: {
                        en: "Economy and Law",
                    },
                    autogenerate: { directory: "economy_and_law" },
                },
            ],
        }),
        starlightLinksValidator(),
    ],
    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeMathjax],
    },
});
