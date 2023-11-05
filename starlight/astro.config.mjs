import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
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
            },
            editLink: {
                baseUrl: "https://github.com/trueberryless-org/mutanuq/tree/main/starlight/",
            },
            defaultLocale: "de",
            locales: {
                de: {
                    label: "Deutsch",
                },
                en: {
                    label: "English",
                },
            },
            sidebar: [
                {
                    label: "Projektmanagement",
                    translations: {
                        en: "Project Manangement",
                    },
                    autogenerate: { directory: "project_management" },
                },
                {
                    label: "Dezentrale Systeme",
                    translations: {
                        en: "Decentralised Systems",
                    },
                    autogenerate: { directory: "decentralised_systems" },
                },
                {
                    label: "Eingebettete Programmierung",
                    translations: {
                        en: "Embedded Programming",
                    },
                    autogenerate: { directory: "embedded_programming" },
                },
                {
                    label: "Sprachen",
                    translations: {
                        en: "Languages",
                    },
                    items: [
                        {
                            label: "Textsorten",
                            translations: {
                                en: "Text Types",
                            },
                            autogenerate: { directory: "languages/text_types" },
                        },
                    ],
                },
            ],
            tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 4 },
            lastUpdated: true,
            customCss: ["./src/styles/custom.css"],
            components: {
                DownloadFile: "./src/components/DownloadFile.astro",
            },
        }),
        expressiveCode(),
    ],
    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeMathjax],
    },
});
