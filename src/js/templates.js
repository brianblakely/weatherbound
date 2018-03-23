// Dynamic HTML templates.
// Data tokens denoted with `%`.

export const compile = (template, data)=> {
  let merged = template;

  for(const [key, value] of Object.entries(data)) {
    merged = merged.replace(new RegExp(`%${key}`, `g`), value);
  }

  return merged;
};

export const current = `
  <span class="city">%city</span>
  <span class="condition">%conditionLabel</span>
  <span class="temp">%temp&deg;</span>
`;

export const hour = `
  <li>
    <span class="time">%time</span>
    <span class="condition" role="img" title="%conditionLabel">%conditionIcon</span>
    <span class="temp">%temp&deg;</span>
  </li>
`;

export const day = `
  <li>
    <span class="day">%day</span>
    <span class="condition" role="img" title="%conditionLabel">%conditionIcon</span>
    <span class="high">%high</span>
    <span class="low">%low</span>
  </li>
`;
