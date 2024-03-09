<script lang="ts">
	import { onMount } from 'svelte';
	import './app.css';

	let ready: boolean = false;
	onMount(() => (ready = true));
</script>

<div class="dragbar" />

{#if ready}
	<slot />
{/if}
