export const compile = (template, data)=> {
  let merged = template;

  for(const [key, value] of Object.entries(data)) {
    merged = merged.replace(new RegExp(`%${key}`, `g`), value);
  }

  return merged;
};

export const current = `
  <span class="city">%city</span>
  <span class="condition">%condition</span>
  <span class="temp">%temp</span>
`;

export const day = `
  <li>
    <span class="day">%day</span>
    <span class="condition">%condition</span>
    <span class="high">%high</span>
    <span class="low">%low</span>
  </li>
`;
