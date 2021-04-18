<script>
export default {
  data() {
    return {
      input: "",
    };
  },
  methods: {
    async getCountryData(country) {
      if (!country) {
        alert("Please write a country name. Do not leave blank !☢");
      } else {
        await fetch(`https://restcountries.eu/rest/v2/name/${country}`)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            if (data.status === 404) {
              alert("The country name you typed is incorrect.💥");
              this.input = "";
            }
            // this.emitData(data[0]);
            this.$emit("res-data", data[0]);
          });
      }
    },
  },
};
</script>

<template>
  <div class="info">
    <div class="container" id="inputContanier">
      <h1>Capitals</h1>
      <div class="input">
        <label for="city-input"
          >Please write the country you want to call !!!</label
        >
        <span>(Please write the English names of the countries.)</span>
        <input
          type="text"
          name=""
          id="city-input"
          placeholder="Turkey"
          v-model="input"
          v-on:keyup.enter="getCountryData(input)"
        />
        <button id="button" @click="getCountryData(input)">Find</button>
      </div>
      <div class="answer">
        <h1>Capital:</h1>
        <div class="answer-container">
          <h1 class="answer-city" id="answerText">
            <a href="#">{{ input }}</a>
          </h1>
        </div>
      </div>
      <div class="author">
        <a href="https://github.com/cihatdev/">@cihatdev</a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.info {
  background-color: rgba(#fff, 0.8);
  flex-grow: 0.5;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-right: 1rem;
  // border: 1px solid #000;

  .container {
    max-height: calc(90vh);
    height: calc(75vh);
    max-width: calc(90vw);
    display: flex;
    justify-content: space-between;

    align-items: center;
    text-align: center;
    flex-direction: column;
    margin: 1rem auto 1rem;

    h1 {
      letter-spacing: 0.2rem;
      text-transform: uppercase;
      font-weight: bold;
    }

    .input {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      padding: 0.5rem;
      margin-bottom: 1rem;

      label {
        margin-bottom: 0.5rem;
        font-size: 1rem;
        letter-spacing: 0.1rem;
        font-weight: 500;
        cursor: pointer;
      }

      span {
        margin-bottom: 1rem;
        font-size: 1rem;
        letter-spacing: 0.05rem;
      }

      input {
        width: 19rem;
        height: 3rem;
        padding-left: 1rem;
        border-radius: 4rem;
        margin-bottom: 1.5rem;
        font-size: 1.4rem;
        border: 1px solid #000;
      }

      button {
        width: 10rem;
        font-size: 2rem;
        margin-bottom: 0.5rem;
        cursor: pointer;
        padding: 0.9rem;
        border-radius: 4rem;
        color: white;
        background-color: #28a745;
        &:hover {
          border: 1px solid #000;
          color: black;
          background-color: white;
        }
      }
    }
    .answer {
      // border: 1px dashed #000;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-bottom: 1rem;
      padding: 1rem;

      h1 {
        margin: 0 auto 1rem auto;
        padding-top: 1rem;
        text-transform: uppercase;
      }

      .answer-container {
        max-height: 300px;
        max-width: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        h1 {
          a {
            font-size: 1.5rem;
            letter-spacing: 0.1px;
            color: #000;
          }
        }
      }
    }

    .author {
      margin-top: 1rem;
      margin-bottom: 1rem;
      a {
        font-size: 1.5rem;
        color: #000;
      }
    }
  }
}
</style>