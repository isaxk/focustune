import { writable, type Writable } from "svelte/store";

export const isHome:Writable<boolean> = writable(true);
export const currentItem:Writable<number> = writable(0);
export const playstate:Writable<boolean> = writable(false);
export const volume:Writable<number> = writable(80);
export const isLoading:Writable<boolean> = writable(false);
export const showInfo:Writable<boolean> = writable(false);

if(localStorage.volume) {
    volume.set(parseInt(localStorage.volume));
}

volume.subscribe((v:any)=>{
    localStorage.volume = parseInt(v);
})

