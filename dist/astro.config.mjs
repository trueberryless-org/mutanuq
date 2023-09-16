import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";

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
                baseUrl: "https://github.com/trueberryless-org/mutanuq/tree/main/dist/",
            },
            lastUpdated: true,
            customCss: [
                // Relative path to your custom CSS file
                "./src/styles/custom.css",
            ],
        }),
    ],
    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeMathjax],
    },
});
