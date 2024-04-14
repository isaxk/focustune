<script lang="ts">
    import VolumeControl from "./VolumeControl.svelte";
    import PlayPauseControl from "./PlayPauseControl.svelte";

    export let disabled: boolean = false;
</script>

<div class="controls" class:disabled>
    <PlayPauseControl />
    <VolumeControl />
</div>

<style>
    .controls {
        display: grid;
        align-items: center;
        grid-template-columns: 1fr max-content;
        padding: 0px 20px;
        user-select: none;
    }
    .disabled {
        color: #a8a8a8;
    }
</style>
