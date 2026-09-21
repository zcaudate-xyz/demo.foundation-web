import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import ui_button from './ui-button'

import ui_static from './ui-static'

import k from '../libs/xt/lang/base-lib'

// melbourne.ui-chip/Chip [15] 
function Chip({design = {},result = {},variant,text,style,onClose}){
  let __variant = Object.assign({"bg":{"key":"primary"},"fg":{"key":"background"}},variant);
  return (
    <ui_static.Div
      variant={__variant}
      style={[
        {
            "flexDirection":"row",
            "margin":3,
            "opacity":0.9,
            "alignItems":"center",
            "overflow":"hidden"
          },
        ...(Array.isArray(style) ? style : ((null == style) ? [] : [style]))
      ]}
      design={design}>
      <ui_static.Text
        variant={__variant}
        style={{"padding":6,"paddingRight":onClose ? 0 : null}}
        design={design}>{text}
      </ui_static.Text>
      {onClose ? (
        <>
          <ui_button.Button
            design={design}
            variant={__variant.close}
            style={{
              "borderRadius":0,
              "marginLeft":5,
              "padding":5,
              "paddingLeft":4,
              "paddingRight":5
            }}
            onPress={onClose}
            text={(
              <RNIcon key="close" name="cross" size={12}></RNIcon>)}>
          </ui_button.Button>
        </>) : null}
    </ui_static.Div>);
}

var MODULE = {"Chip":Chip};

export default MODULE