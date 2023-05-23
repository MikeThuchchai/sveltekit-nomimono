import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /**
             * Is this the principal call to action on the page?
             */ variant?: "is-variant-primary" | "is-variant-secondary" | "is-variant-tertiary" | "is-variant-accent" | "is-variant-ghost" | "is-variant-positive" | "is-variant-negative" | undefined;
        /**
             * What background color to use
             */ backgroundColor?: string | undefined;
        /**
             * How large should the button be?
             */ size?: "is-size-small" | "is-size-medium" | "is-size-large" | undefined;
        /**
             * Button contents
             */ label?: string | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ButtonProps = typeof __propDef.props;
export type ButtonEvents = typeof __propDef.events;
export type ButtonSlots = typeof __propDef.slots;
export default class Button extends SvelteComponentTyped<ButtonProps, ButtonEvents, ButtonSlots> {
}
export {};
