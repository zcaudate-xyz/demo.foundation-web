import * as ReactNative from 'react-native'

import * as c from '../libs/js/react-native/helper-color'

import * as n from '../libs/js/react-native'

import k from '../libs/xt/lang/base-lib'

import ui_input from './ui-input'

import base_palette from './base-palette'

// melbourne.ui-input-xl/inputPlaceHolder [15] 
function inputPlaceHolder(placeholder,design){
  let {mainBackground,mainNeutral} = base_palette.designPalette(design);
  return {
    "component":ReactNative.Text,
    "key":"placeholder",
    "numberOfLines":1,
    "style":{
        "position":"absolute",
        "fontSize":20,
        "top":0,
        "zIndex":-100,
        "opacity":0,
        "fontWeight":"400",
        "textShadowColor":mainNeutral
      },
    "children":[placeholder],
    "transformations":function ({emptying,focusing,highlighted}){
        let active = Math.max(1 - emptying,focusing);
        let color = c.interpolateColor(mainNeutral,mainBackground,(1 - active) ? null : null);
        return {
          "style":{
                "fontSize":k.mix(18,10,active),
                "opacity":0.6,
                "color":c.toHSL(color),
                "transform":[
                      {"translateY":k.mix(15,53,active)},
                      {"translateX":k.mix(10,-5,active)}
                    ]
              }
        };
      }
  };
}

// melbourne.ui-input-xl/InputXL [51] 
function InputXL({design,variant,placeholder,style,styleContainer,inner,...rprops}){
  return (
    <ui_input.Input
      style={[
        {"height":50,"paddingLeft":8,"fontSize":20},
        ...(Array.isArray(style) ? style : ((null == style) ? [] : [style]))
      ]}
      styleContainer={[
        {"flex":1,"borderRadius":5,"height":50},
        ...(Array.isArray(styleContainer) ? styleContainer : ((null == styleContainer) ? [] : [styleContainer]))
      ]}
      inner={[
        inputPlaceHolder(placeholder,design),
        ...(Array.isArray(inner) ? inner : ((null == inner) ? [] : [inner]))
      ]}
      outlined={true}
      design={design}
      variant={variant}
      {...rprops}>
    </ui_input.Input>);
}

var MODULE = {"inputPlaceHolder":inputPlaceHolder,"InputXL":InputXL};

export default MODULE