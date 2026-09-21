import * as ReactNative from 'react-native'

import * as n from '../libs/js/react-native'

import * as ui_tooltip from '../libs/js/react-native/ui-tooltip'

import * as ui_scrollview from '../libs/js/react-native/ui-scrollview'

import k from '../libs/xt/lang/base-lib'

import base_palette from './base-palette'

import base_font from './base-font'

// melbourne.ui-static/Div [22] 
function Div({refLink,design,variant,style,...rprops}){
  let palette = base_palette.designPalette(design);
  let __variant = Object.assign({"fg":{"key":"neutral"},"bg":{"key":"background"}},variant);
  return (
    <ReactNative.View
      ref={refLink}
      style={[
        {
            "backgroundColor":__variant.bg ? base_palette.getColor(palette,__variant.bg) : null,
            "borderColor":__variant.fg ? base_palette.getColor(palette,__variant.fg) : null
          },
        ...(Array.isArray(style) ? style : ((null == style) ? [] : [style]))
      ]}
      {...rprops}>
    </ReactNative.View>);
}

// melbourne.ui-static/Text [51] 
function Text({refLink,design,variant,style,...rprops}){
  let palette = base_palette.designPalette(design);
  let __variant = Object.assign({"fg":{"key":"neutral"}},variant);
  let __style = base_font.getFontStyle(__variant.font);
  return (
    <ReactNative.Text
      ref={refLink}
      style={[
        {
            "backgroundColor":__variant.bg ? base_palette.getColor(palette,__variant.bg) : null,
            "color":base_palette.getColor(palette,__variant.fg)
          },
        __style,
        ...(Array.isArray(style) ? style : ((null == style) ? [] : [style]))
      ]}
      {...rprops}>
    </ReactNative.Text>);
}

// melbourne.ui-static/Separator [78] 
function Separator({refLink,design,variant,style,...rprops}){
  let palette = base_palette.designPalette(design);
  let __variant = Object.assign({"fg":{"key":"neutral"}},variant);
  return (
    <ReactNative.View
      ref={refLink}
      style={[
        {
            "backgroundColor":base_palette.getColor(palette,__variant.fg),
            "height":1
          },
        ...(Array.isArray(style) ? style : ((null == style) ? [] : [style]))
      ]}>
    </ReactNative.View>);
}

// melbourne.ui-static/ScrollView [101] 
function ScrollView({design,variant,styleBackground,styleIndicator,...rprops}){
  let palette = base_palette.designPalette(design);
  let __variant = Object.assign({
    "bg":{"key":"background","tone":"augment"},
    "fg":{"key":"primary","mix":"background","ratio":6}
  },variant);
  return (
    <ui_scrollview.ScrollView
      styleBackground={[
        {
            "backgroundColor":base_palette.getColor(palette,__variant.bg)
          },
        ...(Array.isArray(styleBackground) ? styleBackground : ((null == styleBackground) ? [] : [styleBackground]))
      ]}
      styleIndicator={[
        {
            "backgroundColor":base_palette.getColor(palette,__variant.fg)
          },
        ...(Array.isArray(styleIndicator) ? styleIndicator : ((null == styleIndicator) ? [] : [styleIndicator]))
      ]}
      {...rprops}>
    </ui_scrollview.ScrollView>);
}

// melbourne.ui-static/TextTooltip [131] 
function TextTooltip({design,variant,text,textProps,arrow,style,...rprops}){
  let palette = base_palette.designPalette(design);
  let __variant = Object.assign({"fg":{"key":"background"},"bg":{"key":"neutral"}},variant);
  let __style = base_font.getFontStyle(__variant.font || "h6");
  return (
    <ui_tooltip.Tooltip
      arrow={Object.assign({"color":base_palette.getColor(palette,__variant.bg)},arrow)}
      {...rprops}>
      <Text
        design={design}
        variant={__variant}
        style={[
          __style,
          {"position":"absolute","borderRadius":5,"padding":10},
          ...(Array.isArray(style) ? style : ((null == style) ? [] : [style]))
        ]}
        {...textProps}>{text}
      </Text>
    </ui_tooltip.Tooltip>);
}

// melbourne.ui-static/TextDisplay [166] 
function TextDisplay({style,styleText,content,outlined,design,children,...rprops}){
  return (
    <ScrollView
      variant={k.get_in(design,["variant","scrollview"])}
      design={design}
      {...rprops}>
      <Text
        variant={k.get_in(design,["variant","text"])}
        style={[
          ReactNative.Platform.select({
          "ios":{"fontFamily":"Courier"},
          "default":{"fontFamily":"monospace"}
        }),
          {"fontSize":10},
          ...(Array.isArray(styleText) ? styleText : ((null == styleText) ? [] : [styleText]))
        ]}
        design={design}>{content || children}
      </Text>
    </ScrollView>);
}

var MODULE = {
  "Div":Div,
  "Text":Text,
  "Separator":Separator,
  "ScrollView":ScrollView,
  "TextTooltip":TextTooltip,
  "TextDisplay":TextDisplay
};

export default MODULE