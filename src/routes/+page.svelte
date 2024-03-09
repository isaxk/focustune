<script lang="ts">
	import Iframe from '$lib/components/Iframe.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import SideBar from '$lib/components/SideBar.svelte';
	import { items } from '$lib/data/items';

	import { currentItem, isHome } from '$lib/stores';
	import { fade } from 'svelte/transition';
</script>

<div class="container">
	<SideBar />
	{#key $currentItem}
		<main>
			{#if $isHome}
				<PageHeader
					data={{
						name: 'FocusTune',
					}}
					isHome={$isHome}
				/>
				<div class="home">
					<h1>FocusTune</h1>
					<h3>Simple, no frills, distraction-free focus tunes.</h3>
				</div>
			{:else}
				<PageHeader data={items[$currentItem]} />

				<Iframe src={items[$currentItem].vidid} />
			{/if}
		</main>
	{/key}
</div>

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
	}

	.container {
		display: grid;
		grid-template-columns: 175px 1fr;
	}
</style>
