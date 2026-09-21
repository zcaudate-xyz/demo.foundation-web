import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import * as ui_tooltip from '../libs/js/react-native/ui-tooltip'

import base_font from './base-font'

import * as r from '../libs/js/react'

import * as base_text from '../libs/xt/lang/common-string'

import * as n from '../libs/js/react-native'

import ui_button from './ui-button'

import k from '../libs/xt/lang/base-lib'

import base_palette from './base-palette'

// melbourne.slim-error/ErrorInfo [24] 
function ErrorInfo({design = {},result = {},style,onClose}){
  let {debug,message,status,tag} = result || {};
  let {mainBackground,mainError,mainNeutral} = base_palette.designPalette(design);
  let [visible,setVisible] = React.useState(function (){
    return false;
  });
  let buttonRef = React.useRef();
  let buttonLabel = base_text.tag_string(tag || "").toUpperCase() + (message ? (" - " + message) : "");
  let errorText = n.format_entry(result);
  let errorVariant = {"bg":{"key":"error"},"pressed":{"bg":{"key":"error"}}};
  return (
    <n.Row
      style={[
        {
            "backgroundColor":mainError,
            "borderRadius":3,
            "opacity":0.9,
            "alignItems":"center",
            "paddingHorizontal":10
          },
        ...(Array.isArray(style) ? style : ((null == style) ? [] : [style]))
      ]}>
      <>
        <ui_button.Button
          refLink={buttonRef}
          design={design}
          variant={errorVariant}
          style={{"padding":5,"fontWeight":"400","fontSize":12}}
          onPressIn={function (){
            return setVisible(true);
          }}
          onPressOut={function (){
            return setVisible(false);
          }}
          text={k.is_emptyp(buttonLabel) ? "UNKNOWN ERROR" : buttonLabel}
          transformations={{"bg":null}}>
        </ui_button.Button>
        <ui_tooltip.Tooltip
          hostRef={buttonRef}
          position="bottom"
          alignment="center"
          visible={visible}
          arrow={{"color":mainNeutral}}>
          <ReactNative.View
            style={{
              "backgroundColor":mainNeutral,
              "borderRadius":5,
              "padding":10,
              "minWidth":250
            }}>
            <ReactNative.Text
              style={[
                base_font.fontText,
                {"textAlign":"left","color":mainBackground}
              ]}>
              {k.is_emptyp(errorText) ? "tag: system/unknown_error" : errorText}
            </ReactNative.Text>
          </ReactNative.View>
        </ui_tooltip.Tooltip>
      </>
      <ReactNative.View style={{"flex":1}}></ReactNative.View>
      <ui_button.Button
        design={design}
        variant={errorVariant}
        onPress={onClose}
        text={(
          <RNIcon key="close" name="cross" size={15}></RNIcon>)}>
      </ui_button.Button>
    </n.Row>);
}

var MODULE = {"ErrorInfo":ErrorInfo};

export default MODULE