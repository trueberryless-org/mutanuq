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

Maintaining Mutanuq requires writing new content, fixing existing typos and addressing accessibility.
Help writing docs, catching typos and errors, as well as translating docs into other languages is always welcome.

You can also get involved by leaving feedback on [issues][issues] or reviewing [pull requests][pulls] by other contributors.

We encourage you to:

-   [**Open an issue**][new-issue] to let us know of bugs in Mutanuq, documentation you found unclear, or other issues you run into.

-   [**Look at existing issues**][issues] (especially those labelled [“good first issue”][gfi]) to find ways to contribute.

-   **Make a pull request (PR)** to address an open issue or to fix obvious problems.
    Read more about [making a PR in GitHub’s docs][pr-docs]

-   [**Review existing PRs**][pulls] to help us merge contributions sooner.

-   [**Add or update translations**](#translations). We need help translating Mutanuq’s documentation.

Anyone can contribute to this repository. You can contribute by creating new content, fixing typos or errors in the meaning of the content.

## Creating new content

To create new pages, go to the [docs folder](https://github.com/trueberryless-org/mutanuq/tree/main/starlight/src/content/docs). It is recommended to start creating new content in German, as this is the default language of [Mutanuq](https://github.com/trueberryless-org/mutanuq). Find a suitable folder inside the `de/` directory and follow these steps:

1. Click `Add File` -> `Create New File` in the top right corner of the GitHub page.
2. The filename must end in `.md` or `.mdx` to work properly. If you are not sure which extension to choose, `.md` is recommended.
3. Add and edit this content as the first content in the new file:
   
    ```Markdown
    ---
    title: Title of the new page
    ---

    Short introduction to this topic.

    ## First heading
    ```
    
5. When you have finished creating the content of the new page, click `Commit changes...` at the top right of the page, choose a commit message and confirm your action again.
6. Press the `Create Pull Request` button and there you go.

Once a maintainer has reviewed your changes, you will be one of the contributors on the [Main Page](https://mutanuq.trueberryless.org/#our-contributors).

## Fixing errors

If you are browsing the site and see an error, we would be very grateful if you could fix it. The process of fixing it is very simple, as you don't need to download the entire GitHub repository.

1. Scroll to the bottom of the page and click `✏️ Edit Page`.
2. Login to GitHub if necessary.
3. Click the ✏️ icon at the top right of the file view.
4. Click `Fork this repository`. This will create a copy of the repository `trueberryless-org/mutanuq` and save it under your account (`{username}/mutanuq`).
5. You should now see the edit view of the file, where you can fix the error you spotted earlier.
6. Click `Commit changes...` at the top right of the page, choose a commit message and confirm your action again.
7. Now all you need to do is spam the `Create pull request` button a few times, and that's it...

Soon after you submit your pull request, a maintainer will review it and merge it if everything is OK.

## Translations

Translations help make Mutanuq accessible to more people.

### Translating Mutanuq’s docs

Mutanuq’s documentation is also translated into multiple languages. You can find the source code for the site in [the `starlight/` directory](./starlight/) of this repository.

Help out by:

-   Reviewing [open translation PRs][pulls]
-   Updating out-of-date translated pages
-   Adding an untranslated page

Visit **<https://mutanuq.trueberryless.org/lunaria>** to track translation progress for the currently supported languages.

#### Adding a new language to Mutanuq’s docs

To add a language, you will need its BCP-47 tag and a label. See [“Adding a new language”](https://contribute.docs.astro.build/guides/i18n/#adding-a-new-language) in the Astro docs repo for some helpful tips around choosing these.

-   Add your language to the `locales` config in `starlight/astro.config.mjs`
-   Add your language to the `locales` config in `starlight/lunaria.config.json`
-   Add your language’s subtag to the `🌏 i18n` label config in `.github/labeler.yml`
-   Create the first translated page for your language.
    This must be the Mutanuq landing page: `starlight/src/content/docs/{language}/index.mdx`.
-   Open a pull request on GitHub to add your changes to Mutanuq!

[issues]: https://github.com/trueberryless-org/mutanuq/issues
[pulls]: https://github.com/trueberryless-org/mutanuq/pulls
[new-issue]: https://github.com/trueberryless-org/mutanuq/issues/new/choose
[pr-docs]: https://docs.github.com/en/get-started/quickstart/contributing-to-projects#making-a-pull-request
[gfi]: https://github.com/trueberryless-org/mutanuq/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22+
[vitest]: https://vitest.dev/
[playwright]: https://playwright.dev/
