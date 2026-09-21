import React from 'react'

import base_font from './base-font'

import addon_tooltip from './addon-tooltip'

import * as ui_button from '../libs/js/react-native/ui-button'

import k from '../libs/xt/lang/base-lib'

import base_palette from './base-palette'

import base_theme from './base-theme'

// melbourne.ui-button/Button [17] 
function Button({
  design,
  variant,
  theme,
  style,
  transformations,
  addons,
  tooltip,
  refLink = React.useRef(),
  ...rprops
}){
  let [chord,setChord] = React.useState({});
  let __variant = Object.assign({"fg":{"key":"background"},"bg":{"key":"primary"}},variant);
  let __style = base_font.getFontStyle(__variant.font || "h6");
  let __theme = Object.assign(
    base_theme.themeUiButton(base_palette.designPalette(design),__variant),
    theme
  );
  return (
    <ui_button.Button
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
    </ui_button.Button>);
}

var MODULE = {"Button":Button};

export default MODULE