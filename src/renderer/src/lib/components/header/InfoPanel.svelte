<script lang="ts">
    import { slide } from "svelte/transition";

    export let data: any;
</script>

<div class="info" transition:slide class:windows={window.electronAPI.isWindows}>
    {#if window.electronAPI.isWindows}
        <h3>Info</h3>
    {/if}
    <div class="artist">By: Lofi Girl</div>
    <div class="ytlink">
        <a href="https://www.youtube.com/watch?v={data.vidid}" target="_blank">
            View on YouTube
        </a>
    </div>
</div>

<style>
    .info {
        padding: 20px 0px 30px 15px;
    }
    .info.windows {
        background-image: linear-gradient(to top, #1212127a, #121212);
        padding-bottom: 50px;
    }
    .info div {
        margin-top: 10px;
    }
    a {
        color: currentColor;
    }
</style>
