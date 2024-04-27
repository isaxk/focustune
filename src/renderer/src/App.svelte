<script lang="ts">
    import PageHeader from "./lib/components/header/PageHeader.svelte";

    import { onMount } from "svelte";
    import Controls from "./lib/components/playerui/PlayerControls.svelte";
    import Loader from "./lib/components/playerui/Loader.svelte";
    import SideBar from "./lib/components/sidebar/SideBar.svelte";
    import YtPlayer from "./lib/components/logic/YtPlayer.svelte";
    import { items } from "./lib/data/items";
    import gradient from "./assets/gradient.png";
    import homeicon from "./assets/homeicon.png";

    import {
        currentItem,
        isHome,
        isLoading,
        playstate,
        showInfo,
    } from "./lib/stores";
    import InfoPanel from "./lib/components/header/InfoPanel.svelte";

    let backgroundImage: string;

    $: if ($isHome) {
        backgroundImage = gradient;
    } else {
        backgroundImage = items[$currentItem].bgsrc;
    }

    function togglePlayback() {
        if ($isHome) return;
        playstate.set(!$playstate);
    }

    onMount(() => {
        window.addEventListener("keypress", (e) => {
            console.log(e.key);
            if (e.key === " ") togglePlayback();
        });
    });
</script>

<main>
    {#if window.electronAPI.isWindows}
        <PageHeader />
    {:else}
        <div class="space"></div>
    {/if}
    <div class="container">
        <SideBar />
        <div class="background" style="--url: url({backgroundImage})">
            <div class="page-container" class:isHome={$isHome}>
                {#if window.electronAPI.isMac}
                    <PageHeader />
                {:else}
                    <div class="space">
                        {#if $showInfo && !$isHome}
                            <InfoPanel data={items[$currentItem]} />
                        {/if}
                    </div>
                {/if}

                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div
                    class="spacer"
                    on:click={togglePlayback}
                    class:home={$isHome}
                    style="--url: url({homeicon})"
                >
                    {#if $isLoading}<Loader />{/if}
                </div>
                <Controls disabled={$isHome} />
            </div>
        </div>
    </div>
</main>
<YtPlayer />

<style>
    main {
        height: 100vh;
        display: grid;
        grid-template-rows: max-content 1fr;
    }

    .container {
        background-size: cover;
        background-position: center;

        transition: 0.5s;
        display: grid;
        grid-template-columns: 175px 1fr;
    }
    .page-container {
        height: 100%;
        display: grid;
        grid-template-rows: max-content 1fr 80px;
        background-image: linear-gradient(
            to top,
            #121212fb 0%,
            #121212f6 60px,
            #12121242 100%
        );
        transition: .5s;
    }
    .page-container.isHome {
        background: transparent;
    }
    .background {
        background-color: #4a4a4a24;
        background-image: var(--url);
        background-size: cover;
        background-position: center;
        transition: .3s;
    }
    .spacer {
        display: grid;
        place-items: center;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 200px;
        transition: 0.3s;
    }
    .spacer.home {
        background-image: var(--url);
    }
</style>
