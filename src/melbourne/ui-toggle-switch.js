import * as ui_toggle_switch from '../libs/js/react-native/ui-toggle-switch'

import base_palette from './base-palette'

import base_theme from './base-theme'

import base_font from './base-font'

import k from '../libs/xt/lang/base-lib'

// melbourne.ui-toggle-switch/ToggleSwitch [21] 
function ToggleSwitch({
  design,
  variant,
  style,
  theme,
  selected,
  onText = "",
  offText = "",
  ...rprops
}){
  let __variant = k.obj_assign_nested({
    "fg":{"key":"neutral","tone":"sharpen"},
    "bg":{"key":"background","tone":"flatten"},
    "hovered":{"bg":{"raw":1}},
    "active":{
        "fg":{"key":"primary","tone":"flatten"},
        "bg":{"key":"background","tone":"mix","mix":"primary","ratio":5}
      },
    "text":{"key":"background"}
  },variant);
  let __style = base_font.getFontStyle(__variant.font || "h6");
  let __theme = Object.assign(
    base_theme.themeUiState(base_palette.designPalette(design),__variant),
    theme
  );
  return (
    <ui_toggle_switch.ToggleSwitch
      theme={__theme}
      selected={selected}
      style={[
        {"padding":10},
        __style,
        ...(Array.isArray(style) ? style : ((null == style) ? [] : [style]))
      ]}
      knobStyle={{
        "width":22,
        "height":22,
        "justifyContent":"center",
        "alignItems":"center"
      }}
      axisStyle={{"height":22,"width":44,"marginVertical":0}}
      {...rprops}>
    </ui_toggle_switch.ToggleSwitch>);
}

var MODULE = {"ToggleSwitch":ToggleSwitch};

export default MODULE