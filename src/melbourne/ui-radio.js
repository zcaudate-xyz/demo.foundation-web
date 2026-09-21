import React from 'react'

import * as ReactNative from 'react-native'

import base_font from './base-font'

import * as r from '../libs/js/react'

import * as ui_radio_box from '../libs/js/react-native/ui-radio-box'

import k from '../libs/xt/lang/base-lib'

import base_palette from './base-palette'

import base_theme from './base-theme'

import ui_static from './ui-static'

// melbourne.ui-radio/RadioBox [24] 
function RadioBox({design,variant,style,theme,...rprops}){
  let __variant = Object.assign({
    "fg":{"key":"neutral"},
    "bg":{"key":"background","tone":"darken","ratio":1},
    "pressed":{"bg":{"key":"primary"}},
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
  return (
    <ui_radio_box.RadioBox
      theme={__theme}
      style={[
        {"padding":0},
        __style,
        ...(Array.isArray(style) ? style : ((null == style) ? [] : [style]))
      ]}
      {...rprops}>
    </ui_radio_box.RadioBox>);
}

// melbourne.ui-radio/RadioGroupIndexed [59] 
function RadioGroupIndexed({
  design,
  variant,
  theme,
  items,
  setIndex,
  index,
  onChange,
  style,
  styleText,
  styleContainer,
  itemProps = [],
  format = k.identity
}){
  let itemFn = function (value,i){
    return (
      <ReactNative.View
        key={value}
        style={{"flexDirection":"row","alignItems":"center","padding":2}}>
        <RadioBox
          selected={index == i}
          onPress={function (){
            if(i != index){
              setIndex(i);
              if(onChange){
                onChange(i);
              }
            }
          }}
          design={design}
          variant={variant}
          theme={theme}
          style={style}
          {...(itemProps[i] || {})}>
        </RadioBox>
        <ui_static.Text
          variant={Object.assign({"fg":{"key":"primary"}},k.get_in(design,["variant","text"]))}
          style={styleText}
          design={design}>{format(value,i)}
        </ui_static.Text>
      </ReactNative.View>);
  };
  return (
    <ReactNative.View style={styleContainer}>{items.map(itemFn)}</ReactNative.View>);
}

// melbourne.ui-radio/RadioGroup [104] 
function RadioGroup({data,valueFn,value,setValue,...rprops}){
  let {index,items,setIndex} = r.convertIndex({data,setValue,value,valueFn});
  return (
    <RadioGroupIndexed setIndex={setIndex} items={items} index={index} {...rprops}></RadioGroupIndexed>);
}

var MODULE = {
  "RadioBox":RadioBox,
  "RadioGroupIndexed":RadioGroupIndexed,
  "RadioGroup":RadioGroup
};

export default MODULE