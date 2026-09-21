import * as ui_swiper from '../libs/js/react-native/ui-swiper'

import base_palette from './base-palette'

import base_theme from './base-theme'

// melbourne.ui-swiper/Swiper [14] 
function Swiper({design,variant,theme,...rprops}){
  let __variant = Object.assign({
    "fg":{"key":"primary","tone":"flatten"},
    "bg":{"key":"primary","tone":"darken","ratio":1},
    "pressed":{
        "fg":{"key":"primary"},
        "bg":{"key":"primary","tone":"sharpen"}
      }
  },variant);
  let __theme = Object.assign(
    base_theme.themeUiButton(base_palette.designPalette(design),__variant),
    theme
  );
  return (
    <ui_swiper.Swiper theme={__theme} {...rprops}></ui_swiper.Swiper>);
}

var MODULE = {"Swiper":Swiper};

export default MODULE