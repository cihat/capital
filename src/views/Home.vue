<script>
import Input from "../components/Input";
import Map from "../components/Map";
export default {
  data() {
    return {
      countryData: null,
    };
  },
  components: {
    Input,
    Map,
  },
  methods: {
    resData(data) {
      this.countryData = data;
      console.log(data);
    },
  },
};
</script>

<template>
  <div id="home">
    <Input @res-data="resData" />
    <Map :countryAllData="countryData" />
  </div>
</template>
<style lang="scss">
#home {
  max-width: calc(100vw);
  height: calc(100vh);
  padding: 1.5rem;
  display: flex;
  text-align: center;
  margin: auto;
}
</style>