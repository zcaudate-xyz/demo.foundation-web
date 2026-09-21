import * as ReactNative from 'react-native'

import base_font from './base-font'

import ui_helper from './ui-helper'

import * as n from '../libs/js/react-native'

import * as ui_spinner from '../libs/js/react-native/ui-spinner'

import k from '../libs/xt/lang/base-lib'

import base_palette from './base-palette'

import base_theme from './base-theme'

// melbourne.ui-spinner/SpinnerControls [16] 
function SpinnerControls({setValue,value,step,max,min,...rprops}){
  return (
    <ui_helper.HelperControl
      leftDisabled={value <= min}
      rightDisabled={value >= max}
      onLeft={function (){
        return setValue(Math.max(min,Math.min(max,value - step)));
      }}
      onRight={function (){
        return setValue(Math.max(min,Math.min(max,value + step)));
      }}
      {...rprops}>
    </ui_helper.HelperControl>);
}

// melbourne.ui-spinner/SpinnerValues [33] 
function SpinnerValues({
  design,
  variant,
  theme,
  max,
  min,
  step,
  value,
  style,
  styleDigit,
  styleDigitText,
  styleDecimal,
  styleDecimalText,
  ...rprops
}){
  let __variant = k.obj_assign_nested({
    "fg":{"key":"primary","tone":"flatten"},
    "bg":{"key":"background","tone":"augment"}
  },variant);
  let __style = base_font.getFontStyle(__variant.font || "h6");
  let __theme = Object.assign(
    base_theme.themeNormal(base_palette.designPalette(design),__variant),
    theme
  );
  let {bgNormal,fgNormal} = __theme;
  return (
    <n.Row
      style={[
        {"padding":0,"backgroundColor":bgNormal},
        __style,
        ...(Array.isArray(style) ? style : ((null == style) ? [] : [style]))
      ]}>
      <ui_spinner.SpinnerValues
        styleDigit={[
          {"backgroundColor":null},
          ...(Array.isArray(styleDigit) ? styleDigit : ((null == styleDigit) ? [] : [styleDigit]))
        ]}
        styleDigitText={[
          {"color":fgNormal,"backgroundColor":null},
          ...(Array.isArray(styleDigitText) ? styleDigitText : ((null == styleDigitText) ? [] : [styleDigitText]))
        ]}
        styleDecimal={[
          {"backgroundColor":null},
          ...(Array.isArray(styleDecimal) ? styleDecimal : ((null == styleDecimal) ? [] : [styleDecimal]))
        ]}
        styleDecimalText={[
          {"color":fgNormal,"backgroundColor":null},
          ...(Array.isArray(styleDecimalText) ? styleDecimalText : ((null == styleDecimalText) ? [] : [styleDecimalText]))
        ]}
        max={max}
        min={min}
        value={value}
        {...rprops}>
      </ui_spinner.SpinnerValues>
    </n.Row>);
}

// melbourne.ui-spinner/Spinner [85] 
function Spinner({
  design,
  variant,
  theme,
  max,
  min,
  step,
  value,
  setValue,
  style,
  styleDigit,
  styleDigitText,
  styleDecimal,
  styleDecimalText,
  ...rprops
}){
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
  let {fgNormal} = __theme;
  return (
    <ui_spinner.Spinner
      step={step}
      styleDecimalText={[
        {"color":fgNormal,"backgroundColor":null},
        ...(Array.isArray(styleDecimalText) ? styleDecimalText : ((null == styleDecimalText) ? [] : [styleDecimalText]))
      ]}
      styleDecimal={[
        {"backgroundColor":null},
        ...(Array.isArray(styleDecimal) ? styleDecimal : ((null == styleDecimal) ? [] : [styleDecimal]))
      ]}
      min={min}
      style={[
        {"padding":0},
        __style,
        ...(Array.isArray(style) ? style : ((null == style) ? [] : [style]))
      ]}
      theme={__theme}
      value={value}
      setValue={setValue}
      styleDigit={[
        {"backgroundColor":null},
        ...(Array.isArray(styleDigit) ? styleDigit : ((null == styleDigit) ? [] : [styleDigit]))
      ]}
      max={max}
      styleDigitText={[
        {"color":fgNormal,"backgroundColor":null},
        ...(Array.isArray(styleDigitText) ? styleDigitText : ((null == styleDigitText) ? [] : [styleDigitText]))
      ]}
      {...rprops}>
    </ui_spinner.Spinner>);
}

var MODULE = {
  "SpinnerControls":SpinnerControls,
  "SpinnerValues":SpinnerValues,
  "Spinner":Spinner
};

export default MODULE