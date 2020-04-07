<script>
  export let index;
  export let label;
</script>
<style>
  li {
    list-style: none;
  }
  a {
    color: #444444;
  }
</style>
<li>
  <a href="" data-index="${index}">
    {index + 1}: {label}
  </a>
</li>
