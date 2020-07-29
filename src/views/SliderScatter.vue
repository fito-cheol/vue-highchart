<template>
  <div class="about">
    <range-slider @changeRange="show" />
    <v2-position-scatter />
  </div>
</template>

<script>
export default {  

  methods: {
    show(a,b){
      console.log(a,b)
    }
  },
}
</script>
