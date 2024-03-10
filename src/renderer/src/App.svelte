<script lang="ts">
    import { onMount } from "svelte";
    import Controls from "./lib/components/Controls.svelte";
    import Loader from "./lib/components/Loader.svelte";
    import PageHeader from "./lib/components/PageHeader.svelte";
    import SideBar from "./lib/components/SideBar.svelte";
    import YtPlayer from "./lib/components/YtPlayer.svelte";
    import { items } from "./lib/data/items";
    import gradient from "./assets/gradient.png";

    import { currentItem, isHome, isLoading, playstate, showInfo } from "./lib/stores";
    import InfoPanel from "./lib/components/InfoPanel.svelte";

    $: console.log($currentItem);

    let backgroundImage: string;

    $: if ($isHome) {
        backgroundImage = `url(${gradient}`;
    } else {
        backgroundImage = `url(${items[$currentItem].bgsrc})`;
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
        {#if $isHome}
            <PageHeader
                data={{
                    name: "FocusTune",
                }}
                isHome={$isHome}
            />
        {:else}
            <PageHeader data={items[$currentItem]} />
        {/if}
    {:else}
        <div class="space"></div>
    {/if}
    <div class="container" style:background-image={backgroundImage}>
        <SideBar />
        <div class="page-container">
            {#if window.electronAPI.isMac}
                {#if $isHome}
                    <PageHeader
                        data={{
                            name: "FocusTune",
                        }}
                        isHome={$isHome}
                    />
                {:else}
                    <PageHeader data={items[$currentItem]} />
                {/if}
            {:else}
                <div class="space">
                    {#if $showInfo && !$isHome}
                        <InfoPanel data={items[$currentItem]} />
                    {/if}
                </div>
            {/if}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="spacer" on:click={togglePlayback}>
                {#if $isLoading}<Loader />{/if}
            </div>
            <Controls disabled={$isHome} />
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
        transition: 0.3s;
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
    }
    .spacer {
        display: grid;
        place-items: center;
    }
</style>
