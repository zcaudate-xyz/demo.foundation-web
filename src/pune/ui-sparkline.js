import * as ReactNative from 'react-native'

import * as RNSvg from 'react-native-svg'

import React from 'react'

import * as n from '../libs/js/react-native'

import * as r from '../libs/js/react'

import base_palette from '../melbourne/base-palette'

import k from '../libs/xt/lang/base-lib'

// pune.ui-sparkline/getPath [19] 
function getPath(values,width,height,maxValue,minValue){
  if(k.is_emptyp(values)){
    return "";
  }
  let out = [];
  let maxX = (values).length - 1;
  let maxY = (maxValue || Math.max(...values)) + 2;
  let minY = (minValue || Math.min(...values)) - 2;
  for(let i = 0; i < values.length; ++i){
    let v = values[i];
    out.push(
      Math.round((width * i) / maxX) + "," + (height - (height * ((v - minY) / (maxY - minY))))
    );
  };
  return "M " + out.join(" L ");
}

// pune.ui-sparkline/Sparkline [41] 
function Sparkline({design,height,maxValue,minValue,pathStyle,style,values,variant,width}){
  let path = getPath(values,width,height,maxValue,minValue);
  let palette = base_palette.designPalette(design);
  let __variant = Object.assign({"fg":{"key":"primary"}},variant);
  return (
    <RNSvg.default
      height={height}
      width={width}
      style={Object.assign({
        "backgroundColor":__variant.bg ? base_palette.getColor(palette,__variant.bg) : null
      },style)}>
      {React.createElement(RNSvg.Path,Object.assign({
        "d":path,
        "fill":"none",
        "stroke":base_palette.getColor(palette,__variant.fg),
        "strokeWidth":1
      },pathStyle))}
    </RNSvg.default>);
}

var MODULE = {"getPath":getPath,"Sparkline":Sparkline};

export default MODULE