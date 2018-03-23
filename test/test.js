const assert = require(`assert`);

require(`babel-register`)({
  "plugins": [`transform-es2015-modules-commonjs`]
});

const weather = require(`../src/js/weather.js`).default,
      forecast = require(`../src/js/process.js`).default;

describe(`Weatherbound`, ()=> {
  describe(`Weather data processing`, ()=> {
    it(`forecasts at least 5 days into the future`, ()=> {
      assert.ok(forecast(weather).length >= 5);
    });
  });
});
