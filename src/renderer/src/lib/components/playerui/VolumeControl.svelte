<script lang="ts">
    import { volume } from "../../stores/index";

    let prevVolume = $volume;

    volume.subscribe((v) => {
        if (v === 1) {
            prevVolume = 25;
        }
    });

    function toggleMute() {
        if ($volume === 0) {
            volume.set(prevVolume);
        } else {
            prevVolume = $volume;
            volume.set(0);
        }
    }
</script>

<div class="volume">
    <button class="icon mute-btn" on:click={toggleMute}>
        <span class="material-symbols-outlined">
            {#if $volume === 0}
                volume_off
            {:else}
                volume_up
            {/if}
        </span>
    </button>
    <input type="range" min="0" max="100" bind:value={$volume} class="slider" />
</div>

<style>
    .mute-btn {
        all: unset;
    }
    .volume {
        overflow-y: visible;
        text-align: right;
        display: grid;
        grid-template-columns: max-content 1fr;
        align-items: center;
        gap: 5px;
    }
    .volume .icon {
        padding-top: 2.5px;
    }
    .slider {
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        height: 5px;
        border-radius: 5px;
        background: #a9a9a9;
        outline: none;
        opacity: 0.7;
        -webkit-transition: 0.2s;
        transition: opacity 0.2s;
    }

    .slider:hover {
        opacity: 1;
    }

    .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background: #ffffff;
        cursor: pointer;
    }
</style>
