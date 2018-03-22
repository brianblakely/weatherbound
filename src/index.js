// Application entry point.
// Include non-JS dependencies.
// Get user's location, accept input, and retrieve API data.

import 'file-loader?name=[name].[ext]!./index.html';
import './index.scss';

import render from './js/render.js';

render();

// Get the user's location and display appropriate weather info.
navigator.geolocation.getCurrentPosition((position) => {
  // fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${
  //   position.coords.latitude
  // }&lon=${
  //   position.coords.longitude
  // }&APPID=8d0f401501a283d54a9f3c1dfc698466`)
  //   .then(function(response) {
  //     return response.json();
  //   })
  //   .then(function(api) {
  //   });
}, (err)=> console.error(`err`, err));


