import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        user?: {
            name: string;
        } | null | undefined;
    };
    events: {
        login: CustomEvent<any>;
        logout: CustomEvent<any>;
        createAccount: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type HeaderProps = typeof __propDef.props;
export type HeaderEvents = typeof __propDef.events;
export type HeaderSlots = typeof __propDef.slots;
export default class Header extends SvelteComponentTyped<HeaderProps, HeaderEvents, HeaderSlots> {
}
export {};
