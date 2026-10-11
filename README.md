# Mutanuq

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)
[![Netlify Status](https://api.netlify.com/api/v1/badges/ba3e3f10-7014-4900-91ba-5d40bc8df650/deploy-status)](https://app.netlify.com/sites/mutanuq/deploys)

The open knowledge platform for students of the HTL Krems, available in German and English.

Visit the website at [mutanuq.felixs.dev](https://mutanuq.felixs.dev).

## Project structure

This repository is a [pnpm](https://pnpm.io/) workspace. The website is a [Starlight](https://starlight.astro.build) site located in the [`starlight/`](https://github.com/trueberryless-org/mutanuq/tree/main/starlight) directory.

```
.
├── starlight/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   └── content/docs/
│   │       ├── de/
│   │       └── en/
│   └── astro.config.mjs
├── package.json
└── pnpm-workspace.yaml
```

## Development

Install the dependencies from the root of the repository:

```sh
pnpm install
```

Start the development server on `localhost:4444`:

```sh
pnpm dev
```

Build the website and type-check the project:

```sh
pnpm build
pnpm check
```

## Contribution

If you want to contribute to the website, edit or create the Markdown files you want to change and create a pull request. This can either be done directly on GitHub or locally by following the steps above. Thank you for helping to improve the internet day by day!

More information about contributing can be found in [CONTRIBUTING.md](https://github.com/trueberryless-org/mutanuq/blob/main/CONTRIBUTING.md).

## License

Licensed under the MIT license, Copyright © trueberryless.

See [LICENSE](https://github.com/trueberryless-org/mutanuq/blob/main/LICENSE) for more information.
