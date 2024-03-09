<script lang="ts">
	import { browser } from '$app/environment';
	import Controls from '$lib/components/Controls.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import SideBar from '$lib/components/SideBar.svelte';
	import YtPlayer from '$lib/components/YtPlayer.svelte';
	import { items } from '$lib/data/items';

	import { currentItem, isHome } from '$lib/stores';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	$: console.log($currentItem);
</script>

<div class="container">
	<SideBar />
	<main>
		{#if $isHome}
			<PageHeader
				data={{
					name: 'FocusTune',
				}}
				isHome={$isHome}
			/>
		{:else}
			<div class="page-container" style="background-image: url({items[$currentItem].bgsrc});">
				<div class="content">
					<PageHeader data={items[$currentItem]} />
					<div class="spacer" />
					<Controls />
				</div>
			</div>
		{/if}
	</main>
</div>

<YtPlayer />

<style>
	main {
		height: 100vh;
		box-sizing: border-box;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 35px 1fr;
	}
	.home {
		padding-left: 20px;
		margin-top: 50px;
	}

	.container {
		display: grid;
		grid-template-columns: 175px 1fr;
	}
	.page-container {
		background-size: cover;
		background-position: center;
		height: 100vh;
	}
	.content {
		height: 100%;
		display: grid;
		grid-template-rows: max-content 1fr 80px;
		background-image: linear-gradient(to top, #121212fb 0%, #121212ee 80px, #12121265 100%);
	}
	h1 {
		font-weight: 600;
		margin-top: 0px;
	}
	h3 {
		font-weight: 500;
	}
</style>
