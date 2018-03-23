# Weatherbound

https://brianblakely.github.io/weatherbound/dist/

Fully-clientside Web Platform application with a focus on a modular JS architecture.

Implements the bleeding-edge versions of toolchain members like Webpack and Babel, while adhering to their latest best practices.

## Scripts

* Install: `yarn`
* Dev: `npm start`
* Run tests: `npm test`
* Build for deploy: `npm run build`

## Trade-offs

If this applicaiton were broadened a bit, it would be a great use case for a view manager like React and/or data context tools like Redux.

## Plus-ups

* Add WebGL-animated backgrounds for all weather conditions. Currently it only displays the "Rain" background, and this fails to render on some iPhones for esoteric reasons.

* A "Loading" state, before geolocation and/or API data are resolved.

* Offline and progressive webapp support.

* Use service workers to enable background refresh and extreme weather notifications.

* Support legacy browsers (mostly IE11).
