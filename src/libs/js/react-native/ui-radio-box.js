import * as ReactNative from 'react-native'

import * as xtd from '../../xt/lang/common-data.js'

import * as physical_base from './physical-base.js'

import * as helper_theme from './helper-theme.js'

import * as helper_theme_default from './helper-theme-default.js'

// js.react-native.ui-radio-box/radioBoxTheme [18]
export function radioBoxTheme({theme,themePipeline,transformations,...rprops}){
  let __theme = Object.assign({},helper_theme_default.RadioBoxDefaultTheme,theme);
  let __themePipeline = Object.assign({},helper_theme_default.BinaryDefaultPipeline,themePipeline);
  let {inside,outside} = transformations;
  let [bgStyleStatic,bgTransformFn] = helper_theme.prepThemeCombined({
    "theme":__theme,
    "themePipeline":__themePipeline,
    "transformations":outside,
    ...rprops
  });
  let [fgStyleStatic,fgTransformFn] = helper_theme.prepThemeSingle({
    "theme":__theme,
    "themePipeline":__themePipeline,
    "transformations":Object.assign({
      "fg":function ({active}){
        return {
          "style":{
              "opacity":active,
              "transform":[{"scale":0.2 + (0.8 * active)}]
            }
        };
      }
    },inside),
    ...rprops
  },"fg",["backgroundColor"]);
  return {bgStyleStatic,bgTransformFn,fgStyleStatic,fgTransformFn};
}

// js.react-native.ui-radio-box/RadioBox [49]
export function RadioBox({
  selected,
  setSelected,
  theme,
  themePipeline,
  insideProps,
  insideStyle,
  outsideProps,
  outsideStyle,
  transformations = {},
  size = 24,
  sizeInside = 10,
  inner = [],
  ...rprops
}){
  let {bgStyleStatic,bgTransformFn,fgStyleStatic,fgTransformFn} = radioBoxTheme({theme,themePipeline,transformations,...rprops});
  return (
    <physical_base.TouchableBinary
      active={selected}
      onPress={function (){
          if(setSelected){
            setSelected(!selected);
          }
        }}
      inner={[
          Object.assign({
                "component":ReactNative.View,
                "key":"outside",
                "style":[
                        {
                              "borderRadius":size / 2,
                              "height":size,
                              "width":size,
                              "borderStyle":"solid",
                              "borderWidth":2
                            },
                        bgStyleStatic,
                        ...xtd.arrayify(outsideStyle)
                      ],
                "transformations":bgTransformFn
              },outsideProps),
          Object.assign({
                "component":ReactNative.View,
                "key":"inside",
                "style":[
                        {
                              "position":"absolute",
                              "borderRadius":sizeInside / 2,
                              "top":(size - sizeInside) / 2,
                              "left":(size - sizeInside) / 2,
                              "height":sizeInside,
                              "width":sizeInside
                            },
                        fgStyleStatic,
                        ...xtd.arrayify(insideStyle)
                      ],
                "transformations":fgTransformFn
              },insideProps),
          ...inner
        ]}
      {...rprops}/>);
}