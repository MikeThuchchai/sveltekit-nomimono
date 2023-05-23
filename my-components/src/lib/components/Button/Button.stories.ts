import type { Meta, StoryObj } from '@storybook/svelte'

import Button from './Button.svelte'

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'Example/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
		size: {
			control: { type: 'select' },
			options: ['is-size-small', 'is-size-medium', 'is-size-large'],
		},
		variant: {
			control: { type: 'select' },
			options: [
				'is-variant-primary',
				'is-variant-secondary',
				'is-variant-tertiary',
				'is-variant-accent',
				'is-variant-ghost',
				'is-variant-positive',
				'is-variant-negative',
			],
		},
	},
} satisfies Meta<Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary: Story = {
	args: {
		variant: 'is-variant-primary',
		label: 'Button',
	},
}

export const Secondary: Story = {
	args: {
		variant: 'is-variant-secondary',
		label: 'Button',
	},
}

export const Large: Story = {
	args: {
		size: 'is-size-large',
		label: 'Button',
	},
}

export const Small: Story = {
	args: {
		size: 'is-size-small',
		label: 'Button',
	},
}
