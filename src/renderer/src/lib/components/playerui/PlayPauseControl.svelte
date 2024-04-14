<script lang="ts">
    import { playstate } from "../../stores/index";


    function togglePlayback() {
        if ($playstate === false) {
            playstate.set(true);
        } else {
            playstate.set(false);
        }
    }
</script>

<div class="playpause-container">
        <button class="playpause" on:click={togglePlayback}>
            <span class="material-symbols-outlined">
                {#if !$playstate}
                    play_arrow
                {:else}
                    pause
                {/if}
            </span>
        </button>
    </div>

<style>
    .playpause {
        all: unset;
        font-size: 30px;
        padding: 10px;
        cursor: default;
        display: grid;
        align-items: center;
        border-radius: 30%;
        transition: 0.3s;
        outline-color: #80808044;
    }

    .playpause:hover {
        background-color: #80808044;
        border-radius: 50%;
    }
    .playpause:active {
        scale: 0.9;
        transition: 0.1s;
    }
    .playpause-container {
        display: grid;
        justify-items: left;
    }
</style>

