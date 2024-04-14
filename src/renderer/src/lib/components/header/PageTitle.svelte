<script lang="ts">
    import { currentItem, showInfo, isHome } from "../../stores";

    export let data: any;

    currentItem.subscribe(() => {
        showInfo.set(false);
        if (isHome) {
            document.title = "FocusTune";
        } else {
            document.title = "FocusTune - " + data.name;
        }
    });
</script>

<div class="title">
    {#if window.electronAPI.isWindows}
        <div class="app">FocusTune</div>
        {#if !$isHome}
            <div class="radio">
                <span class="gap">-</span>
                {data.name}
            </div>
        {/if}
    {:else}
        <div class="space"></div>
        <div class="radio">{data.name}</div>
    {/if}
</div>

<style>
    .app {
        font-weight: 550;
        width: max-content;
    }
    .radio .gap {
        padding: 0px 8px 0px 12px;
    }
</style>
