<script lang="ts">
	/**
	 * Is this the principal call to action on the page?
	 */
	export let variant:
		| 'is-variant-primary'
		| 'is-variant-secondary'
		| 'is-variant-tertiary'
		| 'is-variant-accent'
		| 'is-variant-ghost'
		| 'is-variant-positive'
		| 'is-variant-negative' = 'is-variant-primary'

	/**
	 * What background color to use
	 */
	export let backgroundColor: string | undefined = undefined
	/**
	 * How large should the button be?
	 */
	export let size: 'is-size-small' | 'is-size-medium' | 'is-size-large' = 'is-size-medium'
	/**
	 * Button contents
	 */
	export let label = ''

	$: style = backgroundColor ? `background-color: ${backgroundColor}` : ''
</script>

<button type="button" class={['nm-button', size, variant].join(' ')} {style} on:click>
	OK - <slot>{label}</slot>
</button>
