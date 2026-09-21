import * as xtd from '../../xt/lang/common-data.js'

import * as str from '../../xt/lang/common-string.js'

// js.react-native.model-geom/POSITION [7]
export var POSITION = {
  "top":{"opposite":"bottom","sides":["left","right"]},
  "bottom":{"opposite":"top","sides":["right","left"]},
  "left":{"opposite":"right","sides":["bottom","top"]},
  "right":{"opposite":"left","sides":["top","bottom"]}
};

// js.react-native.model-geom/oppositePosition [17]
export function oppositePosition(position){
  return xtd.get_in(POSITION,[position,"opposite"]);
}

// js.react-native.model-geom/triangleBaseStyle [23]
export function triangleBaseStyle(color,point,baseLength,baseHeight){
  let {opposite,sides} = POSITION[point];
  let [s0,s1] = sides;
  let Point = str.capitalize(point);
  let Opposite = str.capitalize(opposite);
  let S0 = str.capitalize(s0);
  let S1 = str.capitalize(s1);
  return {
    ["border" + Point + "Width"]:0,
    ["border" + Opposite + "Width"]:baseHeight,
    ["border" + S0 + "Width"]:baseLength * 0.5,
    ["border" + S1 + "Width"]:baseLength * 0.5,
    ["border" + Point + "Color"]:"transparent",
    ["border" + Opposite + "Color"]:color,
    ["border" + S0 + "Color"]:"transparent",
    ["border" + S1 + "Color"]:"transparent"
  };
}