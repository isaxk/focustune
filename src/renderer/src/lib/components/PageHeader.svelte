<script lang="ts">
    import { fade } from "svelte/transition";
    import { showInfo } from "../stores";
    import InfoPanel from "./InfoPanel.svelte";

    export let data: any;
    export let isHome: boolean = false;

    $: if (data) {
        showInfo.set(false);
    }

    $: console.log($showInfo);

    function toggleInfo() {
        console.log("toggle!");
        showInfo.set(!$showInfo);
    }
</script>

<div class="header">
    <div class="top">
        <div class="main">
            <div class="title">
                {#if window.electronAPI.isWindows}
                    <div class="app">FocusTune</div>
                    {#if !isHome}
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
            {#if !isHome}
                <div class="actions">
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div class="info-btn clickable" on:click={toggleInfo}>
                        <span
                            class="icon material-symbols-outlined"
                            transition:fade
                        >
                            {#if $showInfo}
                                expand_less
                            {:else}
                                info
                            {/if}
                        </span>
                    </div>
                </div>
            {/if}
        </div>
        {#if window.electronAPI.isWindows}
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="windows">
                <div class="button minimize">
                    <span
                        class="material-symbols-outlined"
                        on:click={() => {
                            window.electronAPI.windowControl("minimize");
                        }}
                    >
                        remove
                    </span>
                </div>
                <div
                    class="button maximise"
                    on:click={() => {
                        window.electronAPI.windowControl("maximize");
                    }}
                >
                    <span class="material-symbols-outlined">
                        check_box_outline_blank
                    </span>
                </div>
                <div
                    class="button close"
                    on:click={() => {
                        window.electronAPI.windowControl("close");
                    }}
                >
                    <span class="material-symbols-outlined"> close </span>
                </div>
            </div>
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
    .app {
        font-weight: 550;
        width: max-content;
    }
    .radio .gap {
        padding: 0px 8px 0px 12px;
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
    .actions {
        display: grid;
        grid-template-columns: 1fr 1fr;
        font-size: 17px;
    }
    .windows {
        display: grid;
        grid-template-columns: 50px 50px 50px;
        box-sizing: border-box;
        padding: 0px 0px;
        height: 45px;
        align-items: center;
        background-color: rgba(35, 35, 35, 0.652);
        font-size: 15px;
        -webkit-app-region: no-drag;
        user-select: none;
    }
    .windows .button {
        display: grid;
        place-items: center;
        height: 100%;
    }
    .windows .button:hover {
        background-color: rgb(70, 70, 70);
    }
    .windows .maximise {
        font-size: 13px;
    }
    .windows .close:hover {
        background-color: red;
    }
    .info-btn {
        display: grid;
        place-items: center;
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
        display: grid;
        grid-template-columns: max-content 1fr;
    }
    .actions {
        text-align: right;
        color: rgb(205, 205, 205);
    }
    a {
        color: currentColor;
    }
</style>
