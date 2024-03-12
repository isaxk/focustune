<script lang="ts">
    import Info from "$lib/components/Info.svelte";
    import Screenshot from "$lib/components/Screenshot.svelte";

    import "$lib/app.css";
    
</script>

<svelte:head>
    <title>FocusTune</title>
</svelte:head>

<main>
    <div class="hero">
        <Info />
        <Screenshot/>
    </div>
</main>

<style>
    main {
        max-width: 1000px;
        margin: auto;
    }
    .hero {
        height: 600px;
        display: grid;
        grid-template-columns: 1fr 2fr;
        align-items: center;
    }
</style>
