<script lang="ts">
  import { onMount } from "svelte";
  import { playstate, volume, isHome, currentItem, isLoading } from "../stores";

  import YoutubePlayer from "youtube-player";
  import { items } from "../data/items";

  let player: any;
  let mounted: boolean = false;
  let src: string;

  onMount(() => {
    player = YoutubePlayer("player");
    player.setVolume($volume);
    mounted = true;

    player.on("stateChange", (event: any) => {
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
      } else {
        isLoading.set(false);
      }
    });
  });

  $: if (!$isHome) {
    src = items[$currentItem].vidid;
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
