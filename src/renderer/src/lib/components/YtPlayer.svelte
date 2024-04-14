<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import {
        playstate,
        volume,
        isHome,
        currentItem,
        isLoading,
    } from "../stores";

    import YoutubePlayer from "youtube-player";
    import { items } from "../data/items";

    let player: any;
    let mounted: boolean = false;
    let src: string;

    let stateListener: any;

    onMount(() => {
        player = YoutubePlayer("player");
        player.setVolume($volume);
        mounted = true;

        stateListener = player.on("stateChange", (event: any) => {
            console.log(event.data);
            if (event.data === 3) {
                playstate.set(true);
                isLoading.set(true);
            } else if (event.data === 1) {
                isLoading.set(false);
                playstate.set(true);
            } else if (event.data === 2) {
                isLoading.set(false);
                playstate.set(false);
			} else if (event.data === -1 && !$isHome) {
				isLoading.set(true);
            } else {
                isLoading.set(false);
            }
        });
    });

    currentItem.subscribe(() => {
        setTimeout(() => {
            player.getPlayerState().then((response: number) => {
                if (response === -1 && !$isHome) {
                    alert(
                        "Something went wrong loading this radio. \n\n If the issue persists create an issue on GitHub. \n (github.com/isaxk/focustune/issues)",
                    );
                    currentItem.set(0);
                    isHome.set(true);
                }
            });
        }, 4000);
    });

    onDestroy(() => stateListener.off());

    $: if (!$isHome) {
        src = items[$currentItem].vidid;
    }
	else {
		isLoading.set(false);
	}


    $: if (mounted && src && !$isHome) {
        playstate.set(true);
        player.loadVideoById(src);
        player.playVideo();
    }

    $: if (!$playstate && mounted) {
        player.pauseVideo();
    }
    $: if ($playstate && mounted) {
        player.playVideo();
    }
    $: if (mounted) {
        player.setVolume($volume);
    }
</script>

<div id="player"></div>

<style>
    #player {
        display: none;
    }
</style>
