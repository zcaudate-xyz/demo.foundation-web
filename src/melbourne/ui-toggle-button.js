import React from 'react'

import base_font from './base-font'

import * as ui_toggle_button from '../libs/js/react-native/ui-toggle-button'

import addon_tooltip from './addon-tooltip'

import k from '../libs/xt/lang/base-lib'

import base_palette from './base-palette'

import base_theme from './base-theme'

// melbourne.ui-toggle-button/ToggleButton [17] 
function ToggleButton({
  refLink = React.useRef(),
  design,
  variant,
  style,
  theme,
  transformations,
  addons,
  tooltip,
  ...rprops
}){
  let palette = base_palette.designPalette(design);
  let __variant = Object.assign({
    "fg":{"key":"neutral"},
    "bg":{"key":"background"},
    "active":{"fg":{"key":"background"},"bg":{"key":"primary"}}
  },variant);
  let __style = base_font.getFontStyle(__variant.font || "h6");
  let __theme = Object.assign(
    base_theme.themeUiState(base_palette.designPalette(design),__variant),
    theme
  );
  let [chord,setChord] = React.useState({});
  return (
    <ui_toggle_button.ToggleButton
      refLink={refLink}
      onChord={setChord}
      theme={__theme}
      style={[
        {"padding":8,"borderRadius":3},
        __style,
        ...(Array.isArray(style) ? style : ((null == style) ? [] : [style]))
      ]}
      addons={[
        tooltip ? addon_tooltip.addonTooltip(
            refLink,
            chord.hovering,
            {design,tooltip,"variant":k.get_in(design,["variant","tooltip"])}
          ) : null,
        ...k.arrayify(addons)
      ]}
      transformations={Object.assign({
        "bg":function ({pressing}){
              return {"style":{"transform":[{"scale":1 + (0.08 * pressing)}]}};
            }
      },transformations)}
      {...rprops}>
    </ui_toggle_button.ToggleButton>);
}

var MODULE = {"ToggleButton":ToggleButton};

export default MODULE