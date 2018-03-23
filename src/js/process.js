// Process raw weather data and return it in useful forms.

import * as Convert from './convert.js';

const dayLabels = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`],
      conditionIcons = {
        Thunderstorm: `🌩️`,
        Drizzle: `🌦️`,
        Rain: `🌧️`,
        Snow: `❄️`,
        Atmosphere: `🌫️`,
        Clear: `🌞`,
        Night: `🌜`,
        Clouds: `☁️`,
        Extreme: `☢️`
      };

const dt2day = (dt)=> {
  const date = new Date(dt*1000);
  date.setTime(date.getTime() + date.getTimezoneOffset()*60*1000);
  return dayLabels[date.getDay()];
};

export const forecastHours = (data, tempUnit)=> {
  const hours = [];

  for(const [index, item] of data.list.entries()) {
    const time = item.dt_txt.split(` `)[1].split(`:`)[0];

    hours.push({
      time,
      conditions: {
        label: item.weather[0].main,
        icon: conditionIcons[
          Number(time) >= 18 && item.weather[0].main === `Clear`
            ? `Night`
            : item.weather[0].main
        ]
      },
      temp: Convert.k2f(item.main.temp)
    });

    if(tempUnit === `c`) {
      hours[index].temp = Convert.f2c(hours[index].temp);
    }
  }

  return hours;
};

const forecastDays = (data)=> {
  const days = [];

  for(const [index, item] of data.list.entries()) {
    if(index === 0 || item.dt_txt.includes(`00:00:00`)) {
      days.push(dt2day(item.dt));
    }
  }

  return days;
};

const forecastLowHi = (data, tempUnit)=> {
  let currentDay = data.list[0].dt_txt.split(` `)[0];
  const lowhi = {};
  lowhi[currentDay] = {};

  for(const [index, item] of data.list.entries()) {
    const day = item.dt_txt.split(` `)[0];

    if(day !== currentDay) {
      currentDay = day;
      lowhi[currentDay] = {};
    }

    lowhi[currentDay].low = Math.min(
      lowhi[currentDay].low || Infinity,
      item.main.temp_min
    );

    lowhi[currentDay].high = Math.max(
      lowhi[currentDay].high || 0,
      item.main.temp_max
    );
  }

  for(const [day, {low, high}] of Object.entries(lowhi)) {
    lowhi[day].low = Convert.k2f(low);
    tempUnit === `c` && (lowhi[day].low = Convert.f2c(lowhi[day].low));

    lowhi[day].high = Convert.k2f(high);
    tempUnit === `c` && (lowhi[day].high = Convert.f2c(lowhi[day].high));
  }

  return lowhi;
};

const forecastCondition = (data)=> {
  const conditions = [];

  const now = data.list[0],
        time = new Date(now.dt_txt);

  if(time.getHours() > 12) {
    conditions.push({
      label: now.weather[0].main,
      icon: conditionIcons[now.weather[0].main === `Clear` ? `Night` : now.weather[0].main]
    });
  }

  for(const [index, item] of data.list.entries()) {
    if(item.dt_txt.includes(`12:00:00`)) {
      conditions.push({
        label: item.weather[0].main,
        icon: conditionIcons[item.weather[0].main]
      });
    }
  }

  return conditions;
};

const forecast = (data, tempUnit)=> {
  const days = forecastDays(data),
        lowhi = forecastLowHi(data, tempUnit),
        conditions = forecastCondition(data);

  return Object.values(lowhi).map(({low, high}, index)=> ({
    day: days[index],
    low,
    high,
    conditionLabel: conditions[index].label,
    conditionIcon: conditions[index].icon
  }));
};

export default forecast;
