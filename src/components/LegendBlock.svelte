<script>
  import LegendEntry from "./LegendEntry.svelte";
  import { stored_data } from "../stores";

  export let index;
  export let label;
  export let dataset;

  const unsubscribe = stored_data.subscribe(value => {
    dataset = value;
  });
</script>

<div class="legend__block" data-ring="{index}">
  <h3 class="legend__blockHeadline">{label}</h3>
  <ul>
    {#each dataset as entry, i}
      {#if entry.quadrant === index}
        <LegendEntry index={i} label={entry.label} />
      {/if}
    {/each}
  </ul>
</div>

<style>
  .legend__blockHeadline {
    color: var(--primary-color);
  }
</style>
