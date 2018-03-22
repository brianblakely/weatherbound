// Conversion algorithms.

export const k2f = (kelvin) => Math.round(kelvin * (9/5) - 459.67);
export const f2c = (fahrenheit) => Math.round((fahrenheit - 32) * (5/9));
