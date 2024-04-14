<script lang="ts">
</script>

<div class="windows">
    <button
        class="button minimize"
        on:click={() => {
            window.electronAPI.windowControl("minimize");
        }}
    >
        <span class="material-symbols-outlined"> remove </span>
    </button>
    <button
        class="button maximise"
        on:click={() => {
            window.electronAPI.windowControl("maximize");
        }}
    >
        <span class="material-symbols-outlined"> check_box_outline_blank </span>
    </button>
    <button
        class="button close"
        on:click={() => {
            window.electronAPI.windowControl("close");
        }}
    >
        <span class="material-symbols-outlined"> close </span>
    </button>
</div>

<style>
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
        all: unset;
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
</style>
