<template>
  <div id="Location">
    <label for=""><h1><img src="../assets/gps.png" alt>{{ stationData.dustboy_name }}</h1></label>
  </div>
</template>

<script>
//import StationApi from "@/api-services/stations.service";

export default {
  name: 'Location',
  data () {
    return {
      stationData: {}
    }
  }
}
</script>
