// Application entry point.
// Include non-JS dependencies.
// Get user's location, accept input, and retrieve API data.

import 'file-loader?name=[name].[ext]!./index.html';
import './index.scss';

import './js/visual/visual.js';
import * as Dom from './js/dom.js';
import render from './js/render.js';

let tempUnit = `f`;
let weatherData = undefined;

Dom.unit.addEventListener(`click`, ()=> {
  const {classList} = Dom.unit;

  classList.toggle(`active`);

  tempUnit =
    classList.contains(`active`)
      ? `c`
      : `f`;

  render(tempUnit, weatherData);
});

render();

// Get the user's location and display appropriate weather info.
navigator.geolocation.getCurrentPosition((position) => {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${
    position.coords.latitude
  }&lon=${
    position.coords.longitude
  }&APPID=8d0f401501a283d54a9f3c1dfc698466`)
    .then(function(response) {
      return response.json();
    })
    .then(function(apiData) {
      weatherData = apiData;
      render(tempUnit, apiData);
    });
}, (err)=> {
  console.info(`err`, err);

  render(tempUnit);
}, {
  timeout: 5000
});


