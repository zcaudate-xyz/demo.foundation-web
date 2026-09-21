import React from 'react'

import * as ReactNative from 'react-native'

import * as ui_check_box from '../libs/js/react-native/ui-check-box'

import base_font from './base-font'

import * as r from '../libs/js/react'

import k from '../libs/xt/lang/base-lib'

import base_palette from './base-palette'

import base_theme from './base-theme'

import ui_static from './ui-static'

// melbourne.ui-checkbox/CheckBox [25] 
function CheckBox({design,variant,style,theme,...rprops}){
  let __variant = k.obj_assign_nested({
    "fg":{"key":"background","tone":"diminish"},
    "bg":{"key":"background","tone":"diminish"},
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
    <ui_check_box.CheckBox
      theme={__theme}
      style={[
        {"paddingHorizontal":3},
        __style,
        ...(Array.isArray(style) ? style : ((null == style) ? [] : [style]))
      ]}
      {...rprops}>
    </ui_check_box.CheckBox>);
}

// melbourne.ui-checkbox/CheckGroupIndexed [62] 
function CheckGroupIndexed({
  design,
  variant,
  theme,
  items,
  setIndices,
  indices,
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
        <CheckBox
          selected={indices[i]}
          onPress={function (){
            let changed = indices.map(function (e,ei){
              return (ei == i) ? !e : e;
            });
            setIndices(changed);
            if(onChange){
              onChange(changed);
            }
          }}
          design={design}
          variant={variant}
          theme={theme}
          style={style}
          {...(itemProps[i] || {})}>
        </CheckBox>
        <ui_static.Text
          design={design}
          variant={k.get_in(design,["variant","text"]) || {"fg":{"key":"neutral","mix":"primary","ratio":4}}}
          style={styleText}>{format(value,i)}
        </ui_static.Text>
      </ReactNative.View>);
  };
  return (
    <ReactNative.View style={styleContainer}>{items.map(itemFn)}</ReactNative.View>);
}

// melbourne.ui-checkbox/CheckGroup [112] 
function CheckGroup({data,valueFn,values,setValues,...rprops}){
  let {indices,items,setIndices} = r.convertIndices({data,setValues,valueFn,values});
  return (
    <CheckGroupIndexed
      setIndices={setIndices}
      items={items}
      indices={indices}
      {...rprops}>
    </CheckGroupIndexed>);
}

var MODULE = {
  "CheckBox":CheckBox,
  "CheckGroupIndexed":CheckGroupIndexed,
  "CheckGroup":CheckGroup
};

export default MODULE