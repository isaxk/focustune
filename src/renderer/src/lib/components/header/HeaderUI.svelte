<script lang="ts">
    import HeaderActions from "./HeaderActions.svelte";

    import PageTitle from "./PageTitle.svelte";
    import WindowControls from "./WindowControls.svelte";
    import InfoPanel from "./InfoPanel.svelte";

    import { showInfo, isHome } from "../../stores";


    export let data: any;
</script>

<div class="header" class:isHome={$isHome}>
    <div class="top">
        <div class="main">
            <PageTitle {data} />

            {#if !$isHome}
                <HeaderActions />
            {/if}
        </div>

        {#if window.electronAPI.isWindows}
            <WindowControls />
        {/if}
    </div>

    {#if $showInfo === true && window.electronAPI.isMac}
        <InfoPanel {data} />
    {/if}
</div>

<style>
    .header {
        background-image: linear-gradient(to top, #1212127a, #121212);
        color: white;
        display: grid;
        align-items: center;
        min-height: 45px;
    }
    .header.isHome {
        background: transparent;
    }
    .top {
        font-size: 18px;
        -webkit-app-region: drag;
        height: 45px;
        display: grid;
        grid-template-columns: 1fr max-content;
    }
    .main {
        padding: 0px 0px 0px 15px;
        display: grid;
        align-items: center;
        grid-template-columns: 1fr max-content;
    }
</style>
