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
	}
	.item {
		display: grid;
		grid-template-columns: 1fr;
		gap: 5px;
		padding: 15px;
		height: 40px;
		width: 100%;
		align-items: center;
		align-content: center;
		box-sizing: border-box;
		cursor: default;
		transition: 0.3s;
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
