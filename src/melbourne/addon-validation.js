import React from 'react'

import * as ReactNative from 'react-native'

import * as c from '../libs/js/react-native/helper-color'

import base_palette from './base-palette'

import base_theme from './base-theme'

import k from '../libs/xt/lang/base-lib'

// melbourne.addon-validation/addonValidation [22] 
function addonValidation({design = {},palette,result,styleText,style}){
  let {message,status} = result;
  let [label,setLabel] = React.useState((status == "errored") ? message : "");
  React.useEffect(function (){
    if(status == "errored"){
      setLabel(message);
    }
  },[status,message]);
  palette = base_palette.getPalette(design,palette);
  let [fgColor,bgColor] = base_theme.themeBase(palette,Object.assign(
    {"fg":{"key":"neutral"},"bg":{"key":"primary"}},
    k.get_in(design,["theme","validation"])
  ));
  let {mainBackground,mainError,mainNeutral,mainPrimary} = palette;
  return {
    "component":ReactNative.View,
    "inner":[
        {
          "component":ReactNative.Text,
          "children":[label],
          "style":[
              {
                "color":"white",
                "textAlign":"right",
                "fontSize":12,
                "padding":2,
                "paddingHorizontal":5,
                "borderRadius":3,
                "backgroundColor":mainBackground
              },
              ...(Array.isArray(styleText) ? styleText : ((null == styleText) ? [] : [styleText]))
            ],
          "transformations":{
              "focusing":function (focusing){
                  return {
                    "style":{
                          "color":(0.5 < focusing) ? mainPrimary : mainBackground,
                          "backgroundColor":c.mix([mainError,mainBackground],focusing)
                        }
                  };
                }
            }
        }
      ],
    "style":[
        {
          "flexDirection":"row-reverse",
          "overflow":"hidden",
          "marginHorizontal":2,
          "height":0
        },
        ...(Array.isArray(style) ? style : ((null == style) ? [] : [style]))
      ],
    "transformations":{
        "highlighted":function (highlighted){
            return {
              "style":{"height":(0.3 < highlighted) ? (18 * highlighted) : 0}
            };
          }
      }
  };
}

var MODULE = {"addonValidation":addonValidation};

export default MODULE