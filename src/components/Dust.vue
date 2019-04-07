<template>
    <div id="Dust">
        <location v-bind:locationname="stationData.dustboy_name"/>
        <div class="row" id="displaypm">
            <div class="column" id="displaynum">
                <lastedpm10 v-bind:pm10="stationData.value[0].pm10"/>
            </div>
            <div class="column" id="displaytext">
                <lastedpm25 v-bind:pm25="stationData.value[0].pm25"/>
            </div>
        </div>
        <div>
            <current-time v-bind:logdatetime="stationData.value[0].log_datetime"/>
        </div>
        <br/>
        <div>
          <img src="../assets/toon1.png" alt>
        </div>
    </div>
</template>
<script>

import StationApi from '@/api-services/stations.service'
import lastedpm25 from '@/components/LastedPM25.vue'
import lastedpm10 from '@/components/LastedPM10.vue'
import CurrentTime from '@/components/CurrentTime.vue'
import Location from '@/components/Location.vue'
export default {
  name: 'Dust',
  data () {
    return {
      stations: [],
      stationData: {},
      defaultStation: '9',
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null
    }
  },
  created () {
    this.getAllStation()
    this.getStationById()
  },
  methods: {
    getAllStation: function () {
      StationApi.getAll().then((response) => {
        this.stations = response.data
      })
    },
    getStationById: function (id = 9, type = 'avghr') {
      StationApi.get(id, type).then((response) => {
        this.stationData = response.data[0]
        this.center = {
          lat: parseFloat(this.stationData.dustboy_lat),
          lng: parseFloat(this.stationData.dustboy_lon)
        }
        this.markers.push({ position: this.center })
      })
    },
    changeStation: function (event) {
      this.getStationById(event.target.value)
    }
  },
  components: {
    lastedpm25,
    lastedpm10,
    CurrentTime,
    Location
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Kanit');
* {
  box-sizing: border-box;
  font-family: 'Kanit', sans-serif;
}
#station{
    padding-left: 25px;
    padding-right: 25px;
    font-family: 'Kanit', sans-serif;
}
h2{
    font-size: 2.5em;
    font-weight: bold;
    font-family: 'Kanit', sans-serif;
}
label {
    font-weight: bold;
    font-family: 'Kanit', sans-serif;
}
.column {
  float: left;
  width: 50%;
  padding: 10px;
  background-color: #ddd;
  line-height: 0.2;
  padding-bottom: 25px;
  font-family: 'Kanit', sans-serif;
}
.row:after {
  content: "";
  display: table;
  clear: both;
  background-color: #ddd;
  font-family: 'Kanit', sans-serif;
}
.column2 {
  float: left;
  width: 50%;
  padding: 10px;
  font-family: 'Kanit', sans-serif;
}
.row2:after {
  content: "";
  display: table;
  clear: both;
  font-family: 'Kanit', sans-serif;
}
select{
  width: 100%;
  font-family: 'Kanit', sans-serif;
  font-size: 1.5em;
  cursor: pointer;
}
</style>
