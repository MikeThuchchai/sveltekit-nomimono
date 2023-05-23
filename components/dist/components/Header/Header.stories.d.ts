import type { StoryObj } from '@storybook/svelte';
import Header from './Header.svelte';
declare const meta: {
    title: string;
    component: typeof Header;
    tags: string[];
    parameters: {
        layout: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const LoggedIn: Story;
export declare const LoggedOut: Story;
