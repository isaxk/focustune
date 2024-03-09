<script lang="ts">
	export let src: string;

	let loaded: boolean = false;
</script>

<div class="frame-container">
	<iframe
		class:loaded
		width="100%"
		height="100%"
		on:load={() => (loaded = true)}
		src="https://www.youtube-nocookie.com/embed/{src}?si=qcdgdLsn7sClXTVc&amp;controls=0"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		allowfullscreen
	/>
</div>

<style>
	.frame-container {
	}
	iframe {
		opacity: 0;
		transition: 0.3s;
		border-radius: 5px;
	}
	iframe.loaded {
		opacity: 1;
	}
</style>
