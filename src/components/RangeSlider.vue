<template>
  <div>
    <div id="slider" ref="slider"></div>
    <br>
    <input v-model="minRange" />          
    <input v-model="maxRange" />
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
      this.$emit("ChangeRange", [range_min, range_max])
    }
    
  },

}
</script>
