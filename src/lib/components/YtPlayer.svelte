<script lang="ts">
	import { onMount } from 'svelte';
	import { playstate, volume, isHome, currentItem, isLoading } from '$lib/stores';

	import YoutubePlayer from 'youtube-player';
	import { items } from '$lib/data/items';

	let player: any;
	let mounted: boolean = false;
	let src: string;
	onMount(() => {
		player = YoutubePlayer('player');
		player.setVolume($volume);
		mounted = true;
	});

	$: if (!$isHome) {
		src = items[$currentItem].vidid;
	}

	$: if (mounted && src && !$isHome) {
		playstate.set('playing');
		isLoading.set(true);
		player.loadVideoById(src);
		player.playVideo().then(() => {
			isLoading.set(false);
		});
	}
	$: if ($playstate === 'paused' && mounted) {
		player.pauseVideo();
	}
	$: if ($playstate === 'playing' && mounted) {
		isLoading.set(true);
		player.playVideo().then(() => {
			isLoading.set(false);
		});
	}
	$: if (mounted) {
		player.setVolume($volume);
	}
</script>

<div id="player" />

<style>
	#player {
		display: none;
	}
</style>
