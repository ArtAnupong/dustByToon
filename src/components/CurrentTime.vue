<template>
    <div>
       <!-- <h3>{{ stationData.value[0].log_datetime }}</h3>!-->
        <h3>{{ log_datetime }}</h3>
    </div>
</template>
<script>

export default {
    name:"CurrentTime",
    props:["log_datetime"] /* เปลี่ยนขื่อนตาม api ส่งมา */
}
</script>
