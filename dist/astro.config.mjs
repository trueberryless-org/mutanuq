import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://mutanuq.trueberryless.org',
	integrations: [
		starlight({
			title: 'Mutanuq',
			social: {
				github: 'https://github.com/trueberryless-org/mutanuq',
			}
		}),
	],
});
