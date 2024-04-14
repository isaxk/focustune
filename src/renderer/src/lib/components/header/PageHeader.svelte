<script lang="ts">
    import HeaderUI from "./HeaderUI.svelte";
    import { items } from "../../data/items";

    import { currentItem, isHome } from "../../stores";
</script>

{#if $isHome}
    <HeaderUI
        data={{
            name: "FocusTune",
        }}
    />
{:else}
    <HeaderUI data={items[$currentItem]} />
{/if}
