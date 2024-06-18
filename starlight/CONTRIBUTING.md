# Contributor Manual

We welcome contributions of any size and contributors of any skill level.
As an open source project, we believe in giving back to our contributors.
We are happy to help with guidance on PRs, technical writing, and turning any feature idea into a reality.

> **Tip for new contributors:**
> Take a look at [GitHub’s Docs](https://docs.github.com/en/get-started/quickstart/hello-world) for helpful information on working with GitHub.

## Reference to Starlight Framework

This document focuses on contributing only to the content of Mutanuq itself, not the styling, the coding or any UX concerns. Because Mutanuq is built with [Starlight](https://starlight.astro.build/), we recommend checking out [Starlight’s Contributor Manual](https://github.com/withastro/starlight/blob/main/CONTRIBUTING.md) for all framework related contributions!

## Types of contributions

There are lots of ways to contribute to Mutanuq.

Maintaining Mutanuq requires writting new content, fixing existing typos and addressing accessibility.
Help writing docs, catching typos and errors, as well as translating docs into other languages is always welcome.

You can also get involved by leaving feedback on [issues][issues] or reviewing [pull requests][pulls] by other contributors.

We encourage you to:

-   [**Open an issue**][new-issue] to let us know of bugs in Mutanuq, documentation you found unclear, or other issues you run into.

-   [**Look at existing issues**][issues] (especially those labelled [“good first issue”][gfi]) to find ways to contribute.

-   **Make a pull request (PR)** to address an open issue or to fix obvious problems.
    Read more about [making a PR in GitHub’s docs][pr-docs]

-   [**Review existing PRs**][pulls] to help us merge contributions sooner.

-   [**Add or update translations**](#translations). We need help translating Mutanuq’s documentation.

## Translations

Translations help make Mutanuq accessible to more people.

### Translating Mutanuq’s docs

Mutanuq’s documentation is also translated into multiple languages. You can find the source code for the site in [the `starlight/` directory](./starlight/) of this repository.

Help out by:

-   Reviewing [open translation PRs][pulls]
-   Updating out-of-date translated pages
-   Adding an untranslated page

Visit **<https://i18n.mutanuq.trueberryless.org>** to track translation progress for the currently supported languages.

#### Adding a new language to Mutanuq’s docs

To add a language, you will need its BCP-47 tag and a label. See [“Adding a new language”](https://contribute.docs.astro.build/guides/i18n/#adding-a-new-language) in the Astro docs repo for some helpful tips around choosing these.

-   Add your language to the `locales` config in `starlight/astro.config.mjs`
-   Add your language to the `locales` config in `starlight/lunaria.config.json`
-   Add your language’s subtag to the `🌏 i18n` label config in `.github/labeler.yml`
-   Create the first translated page for your language.
    This must be the Mutanuq landing page: `starlight/src/content/docs/{language}/index.mdx`.
-   Open a pull request on GitHub to add your changes to Mutanuq!
