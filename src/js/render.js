// Combine weather data with DOM templates.

import * as Dom from './dom.js';
import * as Template from './templates.js';
import weatherData from './weather.js';
import * as Convert from './convert.js';
import forecast, {forecastHours} from './process.js';

const render = (tempUnit, weather=weatherData)=> {
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

  const hours = forecastHours(weather, tempUnit),
        hourHTML = [];

  for(const hour of hours) {
    hourHTML.push(Template.compile(
      Template.hour,
      {
        time: hour.time,
        conditionLabel: hour.conditions.label,
        conditionIcon: hour.conditions.icon,
        temp: hour.temp
      }
    ));
  }
  Dom.hourly.innerHTML = hourHTML.join(``);

  const weekHTML = [];
  for(const day of prediction) {
    weekHTML.push(Template.compile(
      Template.day,
      day
    ));
  }
  Dom.week.innerHTML = weekHTML.join(``);
};

export default render;
