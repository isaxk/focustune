<script lang="ts">
  import { playstate, volume} from "../stores/index";

  export let disabled:boolean = false;

  function togglePlayback() {
    if ($playstate === false) {
      playstate.set(true);
    } else {
      playstate.set(false);
    }
  }
</script>

<div class="controls" class:disabled={disabled}>
  <div class="playpause-container">
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="playpause" on:click={togglePlayback}>
      <span class="material-symbols-outlined">
        {#if !$playstate}
          play_arrow
        {:else}
          pause
        {/if}
      </span>
    </div>
  </div>
  <div class="volume">
    <div class="icon">
      <span class="material-symbols-outlined">volume_up</span>
    </div>
    <input type="range" min="0" max="100" bind:value={$volume} class="slider" />
  </div>
</div>

<style>
  .playpause {
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
  .disabled .playpause {
	color: grey;
	pointer-events: none;
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
