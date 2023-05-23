import type { StoryObj } from '@storybook/svelte';
import Button from './Button.svelte';
declare const meta: {
    title: string;
    component: typeof Button;
    tags: string[];
    argTypes: {
        backgroundColor: {
            control: string;
        };
        size: {
            control: {
                type: string;
            };
            options: string[];
        };
        variant: {
            control: {
                type: string;
            };
            options: string[];
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Large: Story;
export declare const Small: Story;
