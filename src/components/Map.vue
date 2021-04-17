<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default {
  name: "Map",
  data() {
    return {
      center: [37, 7749, -122, 4194],
      mapDiv: null,
      text:
        "Ankara🌇 ✨ Languages: Turkish Native ✨ Name: Türkiye ✨ Borders: ARM,AZE,BGR,GEO,GRC,IRN,IRQ,SYR ✨ Alt Spellings: TR,Turkiye,Republic of Turkey,Türkiye Cumhuriyeti ✨ Currencies: Turkish lira ✨ Calling Codes: 90 ✨ Demonym: Turkish ✨ Population: 78741053 ✨ Region: Asia ✨",
    };
  },
  props: {
    countryAllData: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.mapDiv = L.map("map").setView([39, 35], 4.5, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.mapDiv);

    L.marker([39, 35])
      .addTo(this.mapDiv)
      .bindPopup(
        L.popup({
          maxWidth: 200,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
        })
      )
      .setPopupContent(this.text)
      .openPopup();
  },

  watch: {
    countryAllData() {
      this.text = `
          ✨ ${this.countryAllData.capital}🌇
          ✨ Languages: ${this.countryAllData.languages[0].name}
          ✨ Native Name: ${this.countryAllData.nativeName}
          ✨ Borders: ${[...this.countryAllData.borders]}
          ✨ Alt Spellings: ${[...this.countryAllData.altSpellings]}
          ✨ Currencies: ${this.countryAllData.currencies[0].name}
          ✨ Calling Codes: ${[...this.countryAllData.callingCodes]}
          ✨ Demonym: ${this.countryAllData.demonym}
          ✨ Population: ${this.countryAllData.population}
          ✨ Region: ${this.countryAllData.region} ✨
        `;
      L.marker(this.countryAllData.latlng)
        .addTo(this.mapDiv)
        .bindPopup(
          L.popup({
            maxWidth: 200,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
          })
        )
        .setPopupContent(this.text)
        .openPopup();
    },
  },

  methods: {
    setupLeafletMap() {
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(this.mapDiv);

      L.marker([39, 35])
        .addTo(this.mapDiv)
        .bindPopup(
          L.popup({
            maxWidth: 250,
            minWidth: 50,
            autoClose: false,
            closeOnClick: false,
          })
        )
        .setPopupContent(`Ankara🌆`)
        .openPopup();
    },
  },
};
</script>

<template>
  <div id="map"></div>
</template>

<style scoped lang="scss">
#map {
  width: 80vw;
  max-height: calc(95vh);

  flex-grow: 10;
}
</style>