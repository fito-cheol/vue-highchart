<template>
  <div class='court_tool_wrap' >
    <div >
      <input v-model="minRange" class="range-slider_value min_value"  /> 
    </div>
    <div class="slider_control">
      <div id="slider" class="slider_range_button" ref="slider" />
    </div>
    <div >
      <input v-model="maxRange" class="range-slider_value max_value" />          
    </div>
  </div>
</template>


<script>
import noUiSlider from 'nouislider';
import 'nouislider/distribute/nouislider.css';
export default {
  data() {
    return {
      minRange: 0,
      maxRange: 120,
      slider: {
        startMin: 25,
        startMax: 75,
        min: 0,
        max: 100,
        start: 40,
        step: 1
      }
    }        
  },
  
  methods: {
    updateSlider: function updateSlider() {
      this.$refs.slider.noUiSlider.set([this.minRange, this.maxRange]);
    }
  },
  mounted: function() {
    var slider = document.getElementById('slider');
    let game_time = 90
    
    noUiSlider.create(slider, {
        start: [20, game_time],
        step: 5,
        animate: true,
        behaviour: 'drag',
        connect: true,
        range: {
            'min': 0,
            'max': game_time
        }
    }); 
    let _this = this            
    slider.noUiSlider.on('update',(values, handle) => {
      let range_min = parseInt(values[0]);
      let range_max = parseInt(values[1]);
      this.minRange = range_min;
      this.maxRange = range_max;

      this.change_range_time(range_min, range_max);
    }); 
  },
  methods: {
    change_range_time(range_min, range_max){
      this.$emit("changeRange", [range_min, range_max])
    }
    
  },

}
</script>
<style scoped>
.court_tool_wrap { 
  display: flex;
  flex-direction: row;
}
.range-slider_value {
  position: relative;
  color: #fff;
  text-align: center;
  border-radius: 3px;
  background: #2f425e;
  padding: 0px 22px;
}
.slider_control{
  width: 635px; margin: 0 10px;
}
</style>