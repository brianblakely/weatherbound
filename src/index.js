import 'file-loader?name=[name].[ext]!./index.html';
import './index.scss';

import render from './js/render.js';

render();

// Get the user's location and display appropriate weather info.
navigator.geolocation.getCurrentPosition((position) => {
  fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${
    position.coords.latitude
  }&lon=${
    position.coords.longitude
  }&APPID=8d0f401501a283d54a9f3c1dfc698466`)
    .then(function(response) {
      return response.json();
    })
    .then(function(api) {
      // The API doesn't actually work, so we're just using dummy data called
      // from within the render module.
    });
}, (err)=> console.error(`err`, err));


