const button = document.querySelector("#button");
const input = document.querySelector("#city-input");
const answerText = document.querySelector("#answerText");

button.addEventListener("click", () => {
  const inputValue = input.value;
  getCountryData(`${inputValue}`);
});

const logCountry = (data) => {
  console.log(data.latlng);
  console.log(data.capital);
  answerText.textContent = data.capital;
  loadMap(data.latlng);
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

const loadMap2 = (position) => {
  const { latitude } = position.coords;
  const { longitude } = position.coords;
  console.log(position);
  console.log(latitude, longitude);
  console.log(position);
  // leaflet
  var map = L.map("map").setView([latitude, longitude], 6);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
  L.marker([latitude, longitude])
    .addTo(map)
    .bindPopup("You're here")
    .openPopup();
};

const loadMap = (position) => {
  console.log(position);
  var map = L.map("map").setView(position, 6);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker(position).addTo(map).bindPopup("You're here").openPopup();
};

const getPosition = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(loadMap2),
      () => {
        alert(`Could not get your position`);
      };
  }
};

getPosition();

// loadMap2("");
