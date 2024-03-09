<script>
	import SideBarItem from './SideBarItem.svelte';
	import { items } from '$lib/data/items';
</script>

<div class="sidebar">
	<div class="header" />
	{#each items as item, i}
		<SideBarItem data={item} {i} />
	{/each}
</div>

<style>
	.sidebar {
		background-color: #ffffff0b;
	}
	.header {
		-webkit-app-region: drag;
		height: 50px;
		margin-bottom: 0px;
	}
	hr {
		margin: 5px 10px;
		border-color: grey;
	}
</style>
