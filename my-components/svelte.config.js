import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/kit/vite'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$style: 'src/style',
			$services: 'src/services',
			$components: 'src/components',
			$stories: 'src/stories',
			$types: 'src/@types',
		},
	},
}

export default config
