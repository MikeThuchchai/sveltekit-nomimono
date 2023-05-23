<script lang="ts">
	import '$lib'

	import { browser } from '$app/environment'
	import Button from '$lib/components/Button/Button.svelte'

	let lightTheme = true

	$: lightTheme, reloadTheme()

	const reloadTheme = () => {
		if (!browser) {
			return
		}
		const theme = lightTheme ? 'light' : 'dark'
		document.documentElement.setAttribute('data-theme', theme)
	}
</script>

<div class="lo-container _pd-10">
	<div class="_dp-f _fdrt-r _alit-ct _g-6">
		<Button>Hello</Button>
		<div class="nm-switch">
			<input id="sw1" type="checkbox" bind:checked={lightTheme} />
		</div>
	</div>
</div>
