import { writable, type Writable } from "svelte/store";

export const isHome:Writable<boolean> = writable(true);
export const currentItem:Writable<number> = writable(0);
export const playstate:Writable<"paused"|"playing"|"loading"> = writable("playing");
export const volume:Writable<number> = writable(80);
export const isLoading:Writable<boolean> = writable(false);