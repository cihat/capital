// // geolocation api
// const getPosition = () => {
//   if (navigator.geolocation)
//     navigator.geolocation.getCurrentPosition(loadMap(this), () => {
//       alert(`Could not get your position`);
//     });
// };

// getPosition();

// const loadMap = (position) => {
//   const { latitude } = position.coords;
//   const { longitude } = position.coords;
//   // console.log(latitude, longitude);
//   console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
//   const coords = [latitude, longitude];

//   this.#map = L.map("map").setView(coords, this.#mapZoomLevel);
//   L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//     attribution:
//       '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//   }).addTo(this.#map);

//   // Handling clicks on map
//   this.#map.on("click", this._showForm.bind(this));

//   this.#workouts.forEach((work) => {
//     this._renderWorkoutMarker(work);
//   });
// };

const loadMap = (position) => {
  const { latitude } = position.coords;
  const { longitude } = position.coords;
  console.log(latitude, longitude);
  console.log(position);

  // leaflet
  var map = L.map("map").setView([latitude, longitude], 5);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([latitude, longitude])
    .addTo(map)
    .bindPopup("You're here")
    .openPopup();
};

const getPosition = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(loadMap),
      () => {
        alert(`Could not get your position`);
      };
  }
};

getPosition();
