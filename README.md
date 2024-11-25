[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/medium.svg)](https://starlight.astro.build)

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/L4L3QTFWA)

## Star History

<a href="https://star-history.com/#trueberryless-org/mutanuq&Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=trueberryless-org/mutanuq&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=trueberryless-org/mutanuq&type=Date" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=trueberryless-org/mutanuq&type=Date" />
 </picture>
</a>

## Project structure

```
.
├── CONTRIBUTING.md
├── Dockerfile
├── LICENSE
├── README.md
├── manifest
│   ├── certificate.yaml
│   ├── deployment.yaml
│   ├── ingress.yaml
│   ├── namespace.yaml
│   └── service.yaml
├── manifest-lunaria
│   ├── certificate.yaml
│   ├── deployment.yaml
│   ├── ingress.yaml
│   └── service.yaml
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── starlight
    ├── CHANGELOG.md
    ├── README.md
    ├── astro.config.mjs
    ├── lunaria
    │   ├── Dockerfile
    │   ├── components.ts
    │   ├── nginx.conf
    │   ├── renderer.config.ts
    │   └── styles.css
    ├── lunaria.config.json
    ├── package.json
    ├── pnpm-lock.yaml
    ├── public
    │   ├── embedded_programming
    │   │   └── lcd
    │   │       ├── lcd.c
    │   │       └── lcd.h
    │   ├── favicon.svg
    │   └── images
    │       ├── artificial_intelligence
    │       │   ├── cnn
    │       │   │   └── handwritten2.png
    │       │   ├── count_vectorizer_pandas_output.png
    │       │   ├── diagrams
    │       │   │   ├── bar.png
    │       │   │   ├── box.png
    │       │   │   ├── heatmap.png
    │       │   │   ├── hist.png
    │       │   │   ├── histplot.png
    │       │   │   ├── pairplot.png
    │       │   │   ├── plot.png
    │       │   │   ├── relplot.png
    │       │   │   ├── scatter.png
    │       │   │   ├── scatter_2.png
    │       │   │   └── violinplot.png
    │       │   ├── machine_learning_concept_dm.png
    │       │   ├── machine_learning_concept_lm.png
    │       │   ├── machine_learning_process_dm.png
    │       │   ├── machine_learning_process_lm.png
    │       │   ├── rfc_ensemble_dm.png
    │       │   ├── rfc_ensemble_lm.png
    │       │   ├── rfc_tree_dm.png
    │       │   ├── rfc_tree_lm.png
    │       │   └── series-and-dataframe.png
    │       ├── decentralised_systems
    │       │   ├── azure-function
    │       │   │   ├── durable-function-aggregator.png
    │       │   │   ├── durable-function-approval.png
    │       │   │   ├── durable-function-async-http-api.png
    │       │   │   ├── durable-function-chaining.png
    │       │   │   ├── durable-function-fan-out-fan-in.png
    │       │   │   └── durable-function-monitor.png
    │       │   └── iaas-paas-saas.png
    │       ├── economy_and_law
    │       │   ├── portfolioanalyse.png
    │       │   └── product_lifecycle.png
    │       ├── embedded_programming
    │       │   ├── adc
    │       │   │   ├── adc_left_adjust_result.png
    │       │   │   ├── adc_right_adjust_result.png
    │       │   │   └── analog_to_digital.webp
    │       │   ├── button
    │       │   │   ├── floating_point.png
    │       │   │   ├── internal_pull_up_widerstand.png
    │       │   │   ├── kurzschluss.png
    │       │   │   ├── pull_down_widerstand.png
    │       │   │   ├── pull_down_widerstand_closed.png
    │       │   │   ├── pull_up_widerstand.png
    │       │   │   └── pull_up_widerstand_closed.png
    │       │   ├── lcd
    │       │   │   ├── lcd_composition.png
    │       │   │   └── lcd_grid.png
    │       │   ├── spi
    │       │   │   ├── architecture.png
    │       │   │   ├── transfer_data.png
    │       │   │   ├── transfer_data_2.png
    │       │   │   ├── transfer_data_2_dark.png
    │       │   │   └── transfer_data_dark.png
    │       │   └── timer
    │       │       ├── timer_pwm_compare_register.png
    │       │       ├── timer_pwm_duty_cycle_average.png
    │       │       ├── timer_pwm_inverting_mode.png
    │       │       ├── timer_pwm_non_inverting_mode.png
    │       │       ├── timer_ueberlauf.png
    │       │       └── timer_vorladen.png
    │       ├── languages
    │       │   ├── Signature_black.png
    │       │   ├── Signature_white.png
    │       │   ├── dreischichtige_menschliche_persoenlichkeit.png
    │       │   └── fisches_nachtgesang.jpg
    │       ├── project_management
    │       │   ├── earned_value_analysis-2.png
    │       │   ├── earned_value_analysis.png
    │       │   ├── earned_value_analysis_key_figures.png
    │       │   ├── magic_triangle.jpg
    │       │   ├── magic_triangle_context.png
    │       │   ├── project_budget_controlling.png
    │       │   ├── project_controlling_necessity-2.png
    │       │   ├── project_controlling_necessity.png
    │       │   ├── project_controlling_process.png
    │       │   └── project_time_controlling.png
    │       └── system_integration_and_infrastructure
    │           ├── Container_Structure.svg
    │           ├── LTO_Roadmap.jpg
    │           ├── SAN-Aufbau.png
    │           ├── Typ-1-Virtualisierung.png
    │           ├── Typ-2-Virtualisierung.png
    │           ├── backup-differential.png
    │           ├── backup-full.png
    │           ├── backup-incremental.png
    │           └── generationenprinzip.png
    ├── src
    │   ├── assets
    │   │   ├── components
    │   │   │   ├── ContributorList.astro
    │   │   │   ├── FacePile.astro
    │   │   │   ├── ResponsiveTable.astro
    │   │   │   ├── getContributors.ts
    │   │   │   └── util-server.ts
    │   │   ├── dark-logo.png
    │   │   ├── light-logo.png
    │   │   ├── logo.png
    │   │   └── start_logo.svg
    │   ├── components
    │   │   ├── CustomPagination.astro
    │   │   └── FeedbackComponent.astro
    │   ├── content
    │   │   ├── config.ts
    │   │   └── docs
    │   │       ├── 404.md
    │   │       ├── de
    │   │       │   ├── 404.md
    │   │       │   ├── economy_and_law
    │   │       │   │   ├── company_foundation.md
    │   │       │   │   └── marketing.md
    │   │       │   ├── imprint.md
    │   │       │   ├── index.mdx
    │   │       │   ├── information_technology
    │   │       │   │   ├── artificial_intelligence.md
    │   │       │   │   ├── decentralised_systems.md
    │   │       │   │   ├── embedded_programming.md
    │   │       │   │   ├── information_systems.md
    │   │       │   │   ├── software_development.md
    │   │       │   │    ── system_integration_and_infrastructure.md
    │   │       │   ├── languages
    │   │       │   │   ├── german_text_types.md
    │   │       │   │   ├── literature.md
    │   │       │   │   └── text_types.md
    │   │       │   └── project_management
    │   │       │       ├── magic_triangle.md
    │   │       │       └── project_controlling.md
    │   │       └── en
    │   │           ├── 404.md
    │   │           ├── imprint.md
    │   │           ├── index.mdx
    │   │           └── languages
    │   │               └── text_types.md
    │   ├── env.d.ts
    │   └── styles
    │       ├── custom.css
    │       ├── landing.css
    │       └── print.css
    └── tsconfig.json

```

## Installation

Please install [PnPm](https://pnpm.io/) beforehand.

To get started, clone the repo with this command:

```
git clone https://github.com/trueberryless-org/mutanuq
```

Go into the starlight folder.

```
cd ./starlight/
```

Run

```
pnpm install
```

to install all packages found in package.json / all necessary packages.

## Workflow

Run

```
pnpm run dev
```

to run astro with live reload locally.

If you want to test the search functionality, run

```
pnpm run build
pnpm run preview
```

in order to run the project in build mode not in dev mode.

## Contribution

If you wanna contribute to the website, just edit or create the Markdown files you wanna change and create a pull request.  
This can either be done directly on GitHub or locally by following the steps above. Good luck and thank you for helping improve the internet day by day!

More information about contribution can be found unter [CONTRIBUTING.md](https://github.com/trueberryless-org/mutanuq/blob/main/CONTRIBUTING.md).

## License

Licensed under the MIT license, Copyright © trueberryless.

See [LICENSE](/LICENSE) for more information.
