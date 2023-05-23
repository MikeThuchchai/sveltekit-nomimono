<script>export let variant = "is-variant-primary";
export let backgroundColor = void 0;
export let size = "is-size-medium";
export let label = "";
$:
  style = backgroundColor ? `background-color: ${backgroundColor}` : "";
</script>

<button type="button" class={['nm-button', size, variant].join(' ')} {style} on:click>
	OK - <slot>{label}</slot>
</button>
