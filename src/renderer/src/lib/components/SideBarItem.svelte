<script lang="ts">
    import { isHome, currentItem, playstate } from "../stores";

    export let data: { name: string; vidid: string };
    export let i: number;

    import playinggif from "../../assets/playing.gif";
    import pausedpng from "../../assets/paused.png";

    let active: boolean = false;

    $: if ($currentItem === i && !$isHome) {
        active = true;
    } else {
        active = false;
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class="item"
    on:click={() => {
        isHome.set(false);
        currentItem.set(i);
    }}
    class:active
    title={data.name}
>
    <div class="icon">
        {#if active}
            {#if $playstate}
                <img src={playinggif} alt="equalizer" />
            {:else}
                <img src={pausedpng} alt="equalizer" />
            {/if}
        {:else}<span class="material-symbols-outlined"> play_circle </span>
        {/if}
    </div>
    <div class="text">{data.name}</div>
</div>

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
    .icon img {
        width: 100%;
    }
    .icon span {
        margin-top: 2px;
    }
    .item {
        display: grid;
        grid-template-columns: 20px 1fr;
        gap: 5px;
        padding: 0px 15px;
        margin: 2px 0px;
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
        background-color: rgba(128, 128, 128, 0.157);
    }
    .item.active {
        background-color: #b5b5b56f;
    }
    .text {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        cursor: default;
    }
</style>
