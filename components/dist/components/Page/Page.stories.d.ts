import type { StoryObj } from '@storybook/svelte';
import Page from './Page.svelte';
declare const meta: {
    title: string;
    component: typeof Page;
    parameters: {
        layout: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const LoggedOut: Story;
export declare const LoggedIn: Story;
