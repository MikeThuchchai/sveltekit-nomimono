import Header from './Header.svelte';
const meta = {
    title: 'Example/Header',
    component: Header,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/svelte/configure/story-layout
        layout: 'fullscreen',
    },
};
export default meta;
export const LoggedIn = {
    args: {
        user: {
            name: 'Jane Doe',
        },
    },
};
export const LoggedOut = {};
