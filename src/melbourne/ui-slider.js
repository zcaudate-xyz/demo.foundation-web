import * as ui_slider from '../libs/js/react-native/ui-slider'

import base_palette from './base-palette'

import base_theme from './base-theme'

import base_font from './base-font'

// melbourne.ui-slider/Slider [15] 
function Slider({
  design,
  variant,
  theme,
  style,
  max,
  min,
  step,
  value,
  setValue,
  layout,
  length = 150,
  ...rprops
}){
  let __variant = Object.assign({
    "fg":{"key":"primary"},
    "bg":{"key":"background","tone":"diminish"},
    "hovered":{"bg":{"raw":1}},
    "pressed":{"bg":{"key":"primary"},"fg":{"key":"background"}},
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
    <ui_slider.Slider
      step={step}
      min={min}
      layout={layout}
      style={[
        {"padding":0},
        __style,
        ...(Array.isArray(style) ? style : ((null == style) ? [] : [style]))
      ]}
      theme={__theme}
      value={value}
      setValue={setValue}
      max={max}
      length={length}
      {...rprops}>
    </ui_slider.Slider>);
}

var MODULE = {"Slider":Slider};

export default MODULE