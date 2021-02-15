const button = document.querySelector("#button");
const input = document.querySelector("#city-input");
const answerText = document.querySelector("#answerText");
const mapElement = document.querySelector("#map");

button.addEventListener("click", () => {
  const inputValue = input.value;
  getCountryData(`${inputValue}`);
});

const logCountry = (data) => {
  console.log(data.latlng);
  console.log(data.capital);
  answerText.textContent = data.capital;
  openPopUp(data.latlng);
};

const getCountryData = (country) => {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then((response) => {
      // console.log(response);
      return response.json();
    })
    .then((data) => {
      // console.log([data]);
      logCountry(data[0]);
    });
};

// console.log(getCountryData("Turkey"));

const openPopUp = (position, check) => {
  // L.marker(position).addTo(map).bindPopup("You're here").openPopup();
  L.marker(position).addTo(mapElement).bindPopup("Capital").openPopup();
};

const loadMap = (position, check = true) => {
  console.log(position);

  var map = L.map("map").setView(position, 6);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker(position)
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
      })
    )
    .setPopupContent(`You're here`)
    .openPopup();
};

const convert = (value) => {
  console.log(value);
  const { latitude } = value.coords;
  const { longitude } = value.coords;
  console.log(latitude);
  loadMap([latitude, longitude]);
};

const getPosition = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(convert),
      () => {
        alert(`Could not get your position`);
      };
  }
};

getPosition();
