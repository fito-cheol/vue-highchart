<template>
  <div class="about">
    <range-slider @changeRange="show" />
    <v2-position-scatter :chartData="chartData" />
  </div>
</template>

<script>
export default {  
  data(){
    return {
      chartData:[
        {
          x:1000,
          y:1500,
          marker: {
            radius: 12
          },
          labelText: "123",
        },
        {
          x:4627,
          y:2503,
          marker: {
            radius: 10
          },
          labelText: "987",
        }
      ]
    }
  },

  methods: {
    show(a,b){
      this.chartData = [
        {
          x:1000,
          y:1500,
          marker: {
            radius: a[0]
          },
          labelText: "123",
        },
        {
          x:4627,
          y:2503,
          marker: {
            radius: a[1]
          },
          labelText: "987",
        }
      ]
    }
  },
}
</script>
