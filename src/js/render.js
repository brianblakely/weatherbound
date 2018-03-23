// Combine weather data with DOM templates.

import * as Dom from './dom.js';
import * as Template from './templates.js';
import weather from './weather.js';
import * as Convert from './convert.js';
import forecast from './process.js';

const render = (tempUnit, weather=weather)=> {
  const current = weather.list[0],
        prediction = forecast(weather, tempUnit);

  let currentTemp = Convert.k2f(current.main.temp);
  tempUnit === `c` && (currentTemp = Convert.f2c(currentTemp));

  Dom.current.innerHTML = Template.compile(
    Template.current,
    {
      city: weather.city.name,
      conditionLabel: prediction[0].conditionLabel,
      conditionIcon: prediction[0].conditionIcon,
      temp: currentTemp
    }
  );

  Dom.week.innerHTML = ``;
  for(const day of prediction) {
    Dom.week.innerHTML += Template.compile(
      Template.day,
      day
    );
  }
};

export default render;
