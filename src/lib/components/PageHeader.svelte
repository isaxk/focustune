<script lang="ts">
	import { fade, slide } from 'svelte/transition';

	export let data: any;
	export let isHome: boolean = false;

	let showInfo = false;

	function toggleInfo() {
		console.log('toggle!');
		showInfo = !showInfo;
	}
</script>

<div class="header">
	<div class="top">
		<div class="title">{data.name}</div>
		{#if !isHome}
			<div class="actions">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="info-btn clickable" on:click={toggleInfo}>
					<span class="icon material-symbols-outlined" transition:fade>
						{#if showInfo}
							expand_less
						{:else}
							info
						{/if}
					</span>
				</div>
			</div>
		{/if}
	</div>

	{#if showInfo === true}
		<div class="info" transition:slide>
			<div class="artist">By: Lofi Girl</div>
			<div class="ytlink">
				<a href="https://www.youtube.com/watch?v={data.vidid}" target="_blank">
					View on YouTube
				</a>
			</div>
		</div>
	{/if}
</div>

<style>
	.header {
		background-color: #121212a5;
		color: white;
		display: grid;
		align-items: center;
		min-height: 50px;
	}
	.top {
		padding: 0px 15px;
		font-size: 20px;
		-webkit-app-region: drag;
		display: grid;
		align-items: center;
		height: 50px;
		grid-template-columns: 1fr max-content;
	}
	.info-btn {
		display: grid;
		place-items: center;
	}
	.info {
		padding: 20px 15px 30px 15px;
	}
	.info div {
		margin-top: 10px;
	}
	.icon {
		display: grid;
		align-items: center;
		cursor: default;
		user-select: none;
	}
	.title {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.actions {
		text-align: right;
	}
	a {
		color: currentColor;
	}
</style>
