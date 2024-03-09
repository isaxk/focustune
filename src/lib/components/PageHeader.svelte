<script lang="ts">
	export let data: any;
	export let isHome: boolean = false;
</script>

<div class="header">
	<div class="title">{data.name}</div>
	{#if !isHome}
		<div class="actions">
			<span class="icon material-symbols-outlined">tune</span>
		</div>
	{/if}
</div>

<style>
	.header {
		background-color: rgb(35, 35, 35);
		color: grey;
		display: grid;
		grid-template-columns: 1fr 100px;
		align-items: center;
		padding: 0px 10px;
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
		text-align: center;
	}
	.actions {
		text-align: right;
	}
</style>
