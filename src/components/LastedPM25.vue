<template>
  <div>
    <h2>{{ pm25 }}</h2>
    <label>PM 2.5</label>
  </div>
</template>

<script>
export default {
    name: "LastedPM25",
    props: ["pm25"]
}
</script>