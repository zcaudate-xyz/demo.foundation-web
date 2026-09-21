import * as ui_input from '../libs/js/react-native/ui-input'

import base_palette from './base-palette'

import base_theme from './base-theme'

// melbourne.ui-input/Input [14] 
function Input({design,variant,theme,styleContainer,style,...rprops}){
  let palette = base_palette.designPalette(design);
  let __variant = Object.assign({
    "fg":{"key":"neutral"},
    "bg":{"key":"background","mix":"primary","ratio":1},
    "pressed":{"bg":{"key":"primary"}},
    "highlighted":{
        "fg":{"key":"neutral"},
        "bg":{"key":"background","mix":"primary","ratio":1}
      },
    "active":{
        "fg":{"key":"background"},
        "bg":{"key":"primary","mix":"neutral","ratio":4}
      }
  },variant);
  let __theme = Object.assign(base_theme.themeUiInput(palette,__variant),theme);
  return (
    <ui_input.Input
      theme={__theme}
      selectionColor={palette.mainColor}
      style={[
        {"fontFamily":"Helvetica"},
        ...(Array.isArray(style) ? style : ((null == style) ? [] : [style]))
      ]}
      styleContainer={[
        {
            "flex":1,
            "borderStyle":"solid",
            "borderWidth":1,
            "borderColor":"black"
          },
        ...(Array.isArray(styleContainer) ? styleContainer : ((null == styleContainer) ? [] : [styleContainer]))
      ]}
      {...rprops}>
    </ui_input.Input>);
}

var MODULE = {"Input":Input};

export default MODULE