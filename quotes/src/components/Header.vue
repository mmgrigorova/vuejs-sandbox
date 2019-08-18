<template>
  <div class="container">
    <h2>Quotes Added</h2>
    <p>Quotes count: {{ quotesCount }}</p>
    <div class="row">
      <div class="col-sm-12">
        <div class="progress">
          <div class="progress-bar" role="progressbar" :style="{width: (quotesCount / maxQuotes) * 100 + '%'}"
               aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
            {{ quotesCount }} / {{ maxQuotes}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['quotesCount', 'maxQuotes']
  }
</script>
