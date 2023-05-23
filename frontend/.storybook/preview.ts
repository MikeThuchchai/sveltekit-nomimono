import type { Preview } from '@storybook/svelte'

import '@nomimono/nomimono-css/reset.css'
import '@nomimono/nomimono-css/atomic.css'
import '@nomimono/nomimono-css/utility.css'
import '@nomimono/nomimono-css/layout.css'
import '@nomimono/nomimono-css/component.css'
import '../src/style/light.scss'

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
}

export default preview
