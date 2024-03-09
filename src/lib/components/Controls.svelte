<script lang="ts">
	import { playstate, volume, isLoading } from '$lib/stores';

	function togglePlayback() {
		if ($playstate === 'paused') {
			playstate.set('playing');
		} else {
			playstate.set('paused');
		}
	}
</script>

<div class="controls">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="playpause-container">
		{#if !$isLoading}
			<div class="playpause" on:click={togglePlayback}>
				<span class="material-symbols-outlined">
					{#if $playstate === 'paused'}
						play_arrow
					{:else}
						pause
					{/if}
				</span>
			</div>
		{:else}
			<span class="material-symbols-outlined">sync</span>
		{/if}
	</div>
	<div class="volume">
		<div class="icon">
			<span class="material-symbols-outlined">volume_up</span>
		</div>
		<input type="range" min="0" max="100" bind:value={$volume} class="slider" />
	</div>
</div>

<style>
	.playpause {
		font-size: 30px;
		cursor: default;
	}
	.playpause-container {
		display: grid;
		justify-items: left;
	}
	.controls {
		display: grid;
		align-items: center;
		grid-template-columns: 1fr max-content;
		padding: 0px 20px;
	}
	.volume {
		overflow-y: visible;
		text-align: right;
		display: grid;
		grid-template-columns: max-content 1fr;
		align-items: center;
		gap: 5px;
	}
	.volume .icon {
		padding-top: 2.5px;
	}
	.slider {
		-webkit-appearance: none;
		appearance: none;
		width: 100%;
		height: 5px;
		border-radius: 5px;
		background: #a9a9a9;
		outline: none;
		opacity: 0.7;
		-webkit-transition: 0.2s;
		transition: opacity 0.2s;
	}

	.slider:hover {
		opacity: 1;
	}

	.slider::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 10px;
		height: 10px;
		border-radius: 5px;
		background: #ffffff;
		cursor: pointer;
	}
</style>
