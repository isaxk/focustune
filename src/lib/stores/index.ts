import { writable, type Writable } from "svelte/store";

export const isHome:Writable<boolean> = writable(true);
export const currentItem:Writable<number> = writable(0);