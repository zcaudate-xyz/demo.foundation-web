import * as c from '../libs/js/react-native/helper-color'

import k from '../libs/xt/lang/base-lib'

// melbourne.base-palette/PaletteRatio [11] 
var PaletteRatio = {
  "ionian":1 / 8,
  "dorian":2 / 8,
  "phrygian":3 / 8,
  "lydian":4 / 8,
  "mixolydian":5 / 8,
  "aeolian":6 / 8,
  "locrian":7 / 8
};

// melbourne.base-palette/PaletteBase [20] 
var PaletteBase = {
  "lightNeutral":"#333",
  "lightError":"#9c1f1f",
  "lightWarn":"#ffffe0",
  "darkNeutral":"#eee",
  "darkError":"#f55151",
  "darkWarn":"#aaaae0"
};

// melbourne.base-palette/PalettePrimary [28] 
var PalettePrimary = {
  "purple":{"lightPrimary":"#5f4abd","darkPrimary":"#aa97fc"},
  "blue":{"lightPrimary":"#2c5d94","darkPrimary":"#6c9fd9"},
  "default":{"lightPrimary":"#378E75","darkPrimary":"#38e8b6"},
  "green":{"lightPrimary":"#3D9735","darkPrimary":"#5DDE51"}
};

// melbourne.base-palette/createPalette [38] 
function createPalette(type,color){
  if(type == "dark"){
    return {
      "mainPrimary":(PalettePrimary[color] || PalettePrimary.default).darkPrimary,
      "mainNeutral":PaletteBase.darkNeutral,
      "mainError":PaletteBase.darkError,
      "mainWarn":PaletteBase.darkWarn,
      "mainBackground":PaletteBase.lightNeutral,
      "isDark":true
    };
  }
  else{
    return {
      "mainPrimary":(PalettePrimary[color] || PalettePrimary.default).lightPrimary,
      "mainNeutral":PaletteBase.lightNeutral,
      "mainError":PaletteBase.lightError,
      "mainWarn":PaletteBase.lightWarn,
      "mainBackground":PaletteBase.darkNeutral,
      "isDark":false
    };
  }
}

// melbourne.base-palette/toneFlatten [64] 
function toneFlatten(color,isDark){
  return c.lighten(color,isDark ? -0.8 : 0.8);
}

// melbourne.base-palette/toneDiminish [72] 
function toneDiminish(color,isDark){
  return c.lighten(color,isDark ? -0.98 : 0.98);
}

// melbourne.base-palette/toneAugment [80] 
function toneAugment(color,isDark){
  return c.lighten(color,isDark ? 0.9 : -0.9);
}

// melbourne.base-palette/toneSharpen [88] 
function toneSharpen(color,isDark){
  return c.lighten(color,isDark ? 0.8 : -0.6);
}

// melbourne.base-palette/toneRatio [97] 
function toneRatio(ratio){
  if("number" == (typeof ratio)){
    if((0 < ratio) && (ratio < 1)){
      return ratio;
    }
    else{
      return ratio / 8;
    }
  }
  else{
    return PaletteRatio[ratio] || 0;
  }
}

// melbourne.base-palette/getColorRaw [114] 
function getColorRaw(palette,colorKey,tone,mixKey,ratio){
  let {isDark} = palette;
  let color = palette["main" + k.capitalize(colorKey || "primary")] || colorKey;
  if(mixKey || (tone == "mix")){
    let colorTo = palette["main" + k.capitalize(mixKey || "background")] || mixKey || palette.mainPrimary;
    return c.mix([color,colorTo],toneRatio(ratio));
  }
  else if(null == tone){
    return color;
  }
  else if(tone == "sharpen"){
    return toneSharpen(color,isDark);
  }
  else if(tone == "flatten"){
    return toneFlatten(color,isDark);
  }
  else if(tone == "augment"){
    return toneAugment(color,isDark);
  }
  else if(tone == "diminish"){
    return toneDiminish(color,isDark);
  }
  else if(tone == "lighten"){
    return c.lighten(
      color,
      isDark ? (1 - toneRatio(ratio)) : (toneRatio(ratio) - 1)
    );
  }
  else if(tone == "darken"){
    return c.lighten(
      color,
      isDark ? (toneRatio(ratio) - 1) : (1 - toneRatio(ratio))
    );
  }
  else if(tone == "saturate"){
    return c.saturate(color,toneRatio(ratio) - 1);
  }
  else if(tone == "desaturate"){
    return c.saturate(color,1 - toneRatio(ratio));
  }
  else{
    return color;
  }
}

// melbourne.base-palette/getColor [165] 
function getColor(palette,m){
  let {raw} = m;
  if(null == raw){
    return getColorRaw(palette,m.key,m.tone,m.mix || m.mixKey,m.ratio);
  }
  else{
    return raw;
  }
}

// melbourne.base-palette/invertDesign [185] 
function invertDesign(design){
  let {invert} = design;
  return Object.assign({},design,{"invert":!invert});
}

// melbourne.base-palette/designPalette [193] 
function designPalette(design){
  let {color,invert,override,type} = design || {};
  type = (invert ? ((type == "dark") ? "light" : "dark") : (type || "light"));
  return Object.assign(createPalette(type,color),override);
}

// melbourne.base-palette/getPalette [206] 
function getPalette(design,palette){
  return palette || designPalette(design,palette);
}

var MODULE = {
  "PaletteRatio":PaletteRatio,
  "PaletteBase":PaletteBase,
  "PalettePrimary":PalettePrimary,
  "createPalette":createPalette,
  "toneFlatten":toneFlatten,
  "toneDiminish":toneDiminish,
  "toneAugment":toneAugment,
  "toneSharpen":toneSharpen,
  "toneRatio":toneRatio,
  "getColorRaw":getColorRaw,
  "getColor":getColor,
  "invertDesign":invertDesign,
  "designPalette":designPalette,
  "getPalette":getPalette
};

export default MODULE