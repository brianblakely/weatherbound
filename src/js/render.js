// Combine data with DOM templates.

import * as Dom from './dom.js';
import * as Template from './templates.js';
import weather from './weather.js';
import * as Convert from './convert.js';

const render = ()=> {
  Dom.current.innerHTML = Template.compile(
    Template.current,
    {}
  );

  Dom.week.innerHTML = ``;
  for(const day of Array(5).keys()) {
    Dom.week.innerHTML += Template.compile(
      Template.day,
      {}
    );
  }
};

export default render;
