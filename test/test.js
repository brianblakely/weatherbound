const assert = require(`assert`);

require(`babel-register`)({
  "plugins": [`transform-es2015-modules-commonjs`]
});

const weather = require(`../src/js/weather.js`).default,
      forecast = require(`../src/js/process.js`).default,
      Convert = require(`../src/js/convert.js`),
      {compile} = require(`../src/js/templates.js`);

describe(`Weatherbound`, ()=> {
  describe(`Unit conversion`, ()=> {
    it(`converts kelvin to fahrenheit (rounded figure)`, ()=> {
      assert.equal(Convert.k2f(0), -460);
    });

    it(`converts fahrenheit to celsius (rounded figure)`, ()=> {
      assert.equal(Convert.f2c(0), -18);
    });
  });

  describe(`Weather data processing`, ()=> {
    it(`forecasts at least 5 days into the future`, ()=> {
      assert.ok(forecast(weather).length >= 5);
    });
  });

  describe(`Template system`, ()=> {
    it(`replaces tokens with data`, ()=> {
      assert.equal(
        compile(`hello %location`, {
          location: `world`
        }),
        `hello world`
      );
    });
  });
});
