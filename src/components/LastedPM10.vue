<template>
  <div >
    <h2>{{ pm10 }}</h2>
    <label>PM 10</label>
  </div>
</template>

<script>
export default {
  name: 'lastedpm10',
  props: ['pm10']
}
</script>