<script lang="ts">
    import { fade } from "svelte/transition";

    import { showInfo } from "../../stores";

    function toggleInfo() {
        console.log("toggle!");
        showInfo.set(!$showInfo);
    }
</script>

<div class="actions">
    <button class="info-btn clickable" on:click={toggleInfo}>
        <span class="icon material-symbols-outlined" transition:fade>
            {#if $showInfo}
                expand_less
            {:else}
                info
            {/if}
        </span>
    </button>
</div>

<style>
    .actions {
        display: grid;
        grid-template-columns: 1fr 1fr;
        font-size: 17px;
    }
    .info-btn {
        all: unset;
        -webkit-app-region: no-drag;
        display: grid;
        place-items: center;
    }
    .icon {
        display: grid;
        align-items: center;
        cursor: default;
        user-select: none;
    }
    .actions {
        text-align: right;
        color: rgb(205, 205, 205);
    }
</style>
