// Redirects for pages that were moved or merged into other pages.
// Every entry maps an old path (without locale) to the new path per locale.
const patterns = "software-development/design-patterns";

const moved = {
  "languages/": {
    de: "languages/german_text_types/",
    en: "languages/german_text_types/",
  },
  [`${patterns}/creational-design-patterns/`]: {
    de: `${patterns}/#erzeugungsmuster`,
    en: `${patterns}/#creational-patterns`,
  },
  [`${patterns}/structural-design-patterns/`]: {
    de: `${patterns}/#strukturmuster`,
    en: `${patterns}/#structural-patterns`,
  },
  [`${patterns}/behavioral-design-patterns/`]: {
    de: `${patterns}/#verhaltensmuster`,
    en: `${patterns}/#behavioural-patterns`,
  },
  [`${patterns}/creational-design-patterns/singleton/`]: `${patterns}/#singleton`,
  [`${patterns}/structural-design-patterns/adapter/`]: `${patterns}/#adapter`,
  [`${patterns}/structural-design-patterns/decorator/`]: `${patterns}/#decorator`,
  [`${patterns}/behavioral-design-patterns/command/`]: `${patterns}/#command`,
  [`${patterns}/behavioral-design-patterns/strategy/`]: `${patterns}/#strategy`,
};

export const redirects = {
  "/": "/en/",
  ...Object.fromEntries(
    ["de", "en"].flatMap((locale) =>
      Object.entries(moved).map(([from, to]) => [
        `/${locale}/${from}`,
        `/${locale}/${typeof to === "string" ? to : to[locale]}`,
      ])
    )
  ),
};
