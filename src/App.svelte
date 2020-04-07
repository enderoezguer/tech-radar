<script>
  import LegendEntry from './components/LegendEntry.svelte'

  export let config;
  export let dataset;

  console.log(config);
  console.log(dataset);
</script>

<main>
  <h1>{config.title}</h1>
  <hr/>

  {#each dataset as entry, index}
    <LegendEntry index={index} label={entry.label} />
  {/each}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
