<script lang="ts">
	import '$style/main.scss'

	import { SvelteToast } from '@zerodevx/svelte-toast'

	import Navbar from '$components/Navbar.svelte'
</script>

<Navbar />
<div class="_mgh-10 _mgv-10">
	<slot />
</div>

<SvelteToast />

<style>
	:root {
		--navbar-height: 72px;
	}
</style>
