<script>
  export let index;
  export let label;
</script>

<li class="legend__entry">
  <a class="legend__entryLink" href="" data-index="${index}">
    {index + 1}: {label}
  </a>
</li>

<style>
  .legend__entry {
    font-size: 0.75rem;
    list-style: none;
  }
  .legend__entryLink {
    color: var(--ci-gray);
  }
</style>
