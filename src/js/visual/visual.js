// Animated weather background.

import * as PIXI from 'pixi.js';

import * as Dom from '../dom.js';

import rain from './shaders/rain.fs';

const pixi = new PIXI.Application({
  view: Dom.visual,
  width: Dom.visual.offsetWidth/2,
  height: Dom.visual.offsetHeight/2
});

pixi.renderer.autoResize = true;

const filter = new PIXI.Filter(null, rain);
filter.apply = function(filterManager, input, output) {
  this.uniforms.iResolution = [Dom.visual.offsetWidth, Dom.visual.offsetHeight];

  filterManager.applyFilter(this, input, output);
};

const graphics = new PIXI.Graphics();

graphics.beginFill(0xFF0000);
graphics.drawRect(0, 0, Dom.visual.offsetWidth, Dom.visual.offsetHeight);
graphics.endFill();

pixi.stage.addChild(graphics);

graphics.filters = [filter];

PIXI.ticker.shared.add((delt)=> {
  filter.uniforms.iTime += delt/100;
});

