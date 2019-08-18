<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <p class="card-text">"{{ quote }}"</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Quote",
    props: ['quote']
  }
</script>

<style scoped>

</style>
