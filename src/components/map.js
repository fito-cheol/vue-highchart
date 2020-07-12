let googleApi
const callback = 'googleMapsApiLoadCallback'

function googleMapsApiLoader(key) {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&callback=${callback}`

  const head = document.querySelector('head')
  head.appendChild(script)
}

function load(key) {
  if (googleApi) return Promise.resolve(googleApi)
  return new Promise((resolve, reject) => {
    googleMapsApiLoader(key)
    window[callback] = function () {
      googleApi = window.google
      resolve(googleApi)
    }

    setTimeout(() => {
      if (!window.google) reject(new Error('Google maps api load failed'))
    }, 5000)
  })
}


export default (key) => {
  return {
    render(h) {
      const el = 'div'
      const options = {
        ref: 'map'
      }
      return h(el, options)
    },
    data() {
      return {
        google: null,
        map: null
      }
    },
    mounted() {
      load(key)
        .then((google) => {
          this.google = google
          this.drawMap()
        })
    },
    methods: {
      drawMap() {
        const el = this.$refs.map
        const map = new this.google.maps.Map(el, {
          center: {
            lat: 37,
            lng: 127
          },
          zoom: 14
        })

        this.map = map
      }
    }
  }
}