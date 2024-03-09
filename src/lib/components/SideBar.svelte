<script>
	import SideBarItem from './SideBarItem.svelte';
	import { items } from '$lib/data/items';
</script>

<div class="sidebar">
	<div class="header" />
	<SideBarItem
		data={{
			name: 'Home',
		}}
		home
	/>
	<hr />
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
		height: 45px;
		margin-bottom: 0px;
	}
	hr {
		margin: 0px 10px;
		border-color: grey;
	}
</style>
