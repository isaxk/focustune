<script lang="ts">
	import { isHome, currentItem } from '$lib/stores';

	export let isActive: boolean = false;
	export let data: { name: string; vidid: string };
	export let i: number;
	export let home = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
{#if home}
	<div
		class="item"
		on:click={() => {
			isHome.set(true);
			currentItem.set(100000);
		}}
		class:active={isActive}
		title={data.name}
	>
		<div class="icon">
			<span class="material-symbols-outlined">home</span>
		</div>
		<div class="text">{data.name}</div>
	</div>
{:else}
	<div
		class="item"
		on:click={() => {
			isHome.set(false);
			currentItem.set(i);
		}}
		class:active={isActive}
		title={data.name}
	>
		<div class="icon">
			<span class="material-symbols-outlined">play_circle</span>
		</div>
		<div class="text">{data.name}</div>
	</div>
{/if}

<style>
	img {
		border-radius: 50%;
		width: 100%;
	}
	.icon {
		height: 100%;
		display: grid;
		place-items: center;
		padding-top: 1px;
	}
	.item {
		display: grid;
		grid-template-columns: max-content 1fr;
		gap: 5px;
		padding: 0px 15px;
		height: 30px;
		width: 100%;
		align-items: center;
		align-content: center;
		box-sizing: border-box;
		cursor: default;
		transition: 0.3s;
		font-size: 15px;
	}
	.item:hover {
		background-color: #2d2d2d;
	}
	.item.active {
		background-color: #3f3f3f;
	}
	.text {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		cursor: default;
	}
</style>
