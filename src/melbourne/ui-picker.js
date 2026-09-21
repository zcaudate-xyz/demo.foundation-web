import React from 'react'

import * as r from '../libs/js/react'

import * as ui_picker from '../libs/js/react-native/ui-picker'

import ui_helper from './ui-helper'

import base_palette from './base-palette'

import base_theme from './base-theme'

import base_font from './base-font'

// melbourne.ui-picker/PickerControls [16] 
function PickerControls({children,design,index,setIndex,style,variant}){
  return (
    <ui_helper.HelperControl
      onLeft={function (){
        return setIndex(index - 1);
      }}
      onRight={function (){
        return setIndex(index + 1);
      }}
      design={design}
      variant={variant}
      style={style}
      children={children}>
    </ui_helper.HelperControl>);
}

// melbourne.ui-picker/PickerValues [34] 
function PickerValues({design,variant,theme,index,items,style,styleText,...rprops}){
  let __variant = Object.assign({
    "fg":{"key":"primary","tone":"flatten"},
    "bg":{"key":"background","tone":"darken","ratio":1}
  },variant);
  let __style = base_font.getFontStyle(__variant.font || "h6");
  let __theme = Object.assign(
    base_theme.themeNormal(base_palette.designPalette(design),__variant),
    theme
  );
  let {bgNormal,fgNormal} = __theme;
  return (
    <ui_picker.PickerValues
      theme={__theme}
      style={[
        {"padding":0,"height":24,"backgroundColor":bgNormal},
        __style,
        ...(Array.isArray(style) ? style : ((null == style) ? [] : [style]))
      ]}
      styleText={[
        {
            "color":fgNormal,
            "padding":3,
            "paddingHorizontal":10,
            "fontSize":17
          },
        ...(Array.isArray(styleText) ? styleText : ((null == styleText) ? [] : [styleText]))
      ]}
      index={index}
      items={items}
      {...rprops}>
    </ui_picker.PickerValues>);
}

// melbourne.ui-picker/PickerIndexed [77] 
function PickerIndexed({design,variant,theme,index,setIndex,items,style,styleText,...rprops}){
  let __variant = Object.assign({
    "fg":{"key":"primary","tone":"flatten"},
    "bg":{"key":"background","tone":"darken","ratio":1},
    "pressed":{
        "fg":{"key":"primary"},
        "bg":{"key":"primary","tone":"sharpen"}
      },
    "highlighted":{
        "fg":{"key":"neutral"},
        "bg":{"key":"background","tone":"darken","ratio":1}
      },
    "active":{"fg":{"key":"background"},"bg":{"key":"primary"}}
  },variant);
  let __style = base_font.getFontStyle(__variant.font || "h6");
  let __theme = Object.assign(
    base_theme.themeUiInput(base_palette.designPalette(design),__variant),
    theme
  );
  let {bgNormal,fgNormal} = __theme;
  return (
    <ui_picker.PickerIndexed
      theme={__theme}
      style={[
        {"padding":0,"height":24,"backgroundColor":bgNormal},
        __style,
        ...(Array.isArray(style) ? style : ((null == style) ? [] : [style]))
      ]}
      styleText={[
        {
            "color":fgNormal,
            "padding":3,
            "paddingHorizontal":10,
            "fontSize":17
          },
        ...(Array.isArray(styleText) ? styleText : ((null == styleText) ? [] : [styleText]))
      ]}
      index={index}
      setIndex={setIndex}
      items={items}
      {...rprops}>
    </ui_picker.PickerIndexed>);
}

// melbourne.ui-picker/Picker [132] 
function Picker({data,valueEmpty,valueFn,value,setValue,...rprops}){
  let indexRef = React.useRef(0);
  let indexFn = function (){
    return indexRef.current;
  };
  let {index,items,setIndex} = r.convertModular({data,indexFn,setValue,value,valueFn});
  React.useEffect(function (){
    indexRef.current = index;
  },[index]);
  return (
    <PickerIndexed setIndex={setIndex} items={items} index={index} {...rprops}></PickerIndexed>);
}

var MODULE = {
  "PickerControls":PickerControls,
  "PickerValues":PickerValues,
  "PickerIndexed":PickerIndexed,
  "Picker":Picker
};

export default MODULE