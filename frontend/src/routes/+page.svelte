<script lang="ts">
	import type { z } from 'zod'

	import { browser } from '$app/environment'
	// import Button from '$components/Button/Button.svelte'
	import api from '$lib/api'
	import { testSchema } from '$lib/schema'
	import swal from '$lib/swal'
	import toast from '$lib/toast'

	import { Button } from '../../../my-components'

	let form = {
		email: undefined,
	}
	let lightTheme = true
	let formError: z.ZodFormattedError<z.input<typeof testSchema>> | null = null
	let submitted: boolean

	$: lightTheme, reloadTheme()
	$: form, validate()

	$: console.log('lightTheme', lightTheme)

	const validate = () => {
		if (!submitted) {
			return false
		}

		const v = testSchema.safeParse(form)
		formError = v.success ? null : v.error.format()
	}

	const reloadTheme = () => {
		if (!browser) {
			return
		}
		const theme = lightTheme ? 'light' : 'dark'
		document.documentElement.setAttribute('data-theme', theme)
	}

	const showToast = () => {
		toast.success('Hello world')
	}

	const showSwal = () => {
		swal.confirm({
			title: 'Please confirm',
			text: 'Are you sure?',
		})
	}

	const submit = () => {
		submitted = true
		const v = testSchema.safeParse(form)
		formError = v.success ? null : v.error.format()

		if (!v.success) {
			return
		}

		swal.success({
			title: 'Email',
			text: form.email,
		})
	}

	let pokemonName: string
	let pokemon: any
	const getData = () => {
		if (!pokemonName) {
			return
		}

		api
			.invoke<any>(pokemonName, {}, fetch, {
				method: 'GET',
			})
			.then((r) => {
				pokemon = r
			})
	}
</script>

<div class="lo-container _pd-10">
	<div class="lo-12 _g-7">
		<div class="_dp-f _g-6 _alit-ct">
			<button class="nm-button" on:click={showToast}> Toast </button>
			<button class="nm-button" on:click={showSwal}> Alert </button>
			<Button>Hello</Button>
			<div class="nm-switch">
				<input id="sw1" type="checkbox" bind:checked={lightTheme} />
			</div>
			<a class="nm-link" href="/about">About</a>
		</div>

		<form on:submit|preventDefault={submit} class="nm-card lo-12 _g-7">
			<h4>Form validation</h4>
			<div class="nm-field">
				<label for="email">Email</label>
				<div class="nm-input">
					<input id="email" bind:value={form.email} type="text" placeholder="Enter email" />
				</div>
				{#if formError?.email}
					<small class="_cl-negative">{formError?.email._errors[0]}</small>
				{/if}
			</div>

			<button class="nm-button">Submit</button>
		</form>

		<div class="_dp-f _g-4">
			<div class="nm-input">
				<input type="text" bind:value={pokemonName} placeholder="Try 'pikachu'" />
			</div>
			<button class="nm-button is-variant-accent" on:click={getData}>Fetch</button>
		</div>

		{#if pokemon}
			<div>
				<div class="_fs-8 _fw-500 _cl-primary">
					{pokemon.name}
				</div>
				<img
					src={pokemon.sprites.other['official-artwork'].front_default}
					alt="Pokemon"
					width="500"
				/>
			</div>
		{/if}
	</div>
</div>
