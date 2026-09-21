import * as ReactNative from 'react-native'

import * as xtd from '../../xt/lang/common-data.js'

import * as physical_base from './physical-base.js'

import * as helper_theme from './helper-theme.js'

import * as helper_theme_default from './helper-theme-default.js'

// js.react-native.ui-toggle-switch/toggleSwitchTheme [18]
export function toggleSwitchTheme({theme,themePipeline,transformations = {},...rprops},size){
  let __theme = Object.assign({},helper_theme_default.ToggleSwitchDefaultTheme,theme);
  let __themePipeline = Object.assign({},helper_theme_default.BinaryDefaultPipeline,themePipeline);
  let {axis,knob} = transformations;
  let [bgStyleStatic,bgTransformFn] = helper_theme.prepThemeCombined({
    "theme":__theme,
    "themePipeline":__themePipeline,
    "transformations":axis || {},
    ...rprops
  });
  let [fgStyleStatic,fgTransformFn] = helper_theme.prepThemeSingle({
    "theme":__theme,
    "themePipeline":__themePipeline,
    "transformations":Object.assign({
      "fg":function ({active}){
        return {"style":{"transform":[{"translateX":(active * size) - 1}]}};
      }
    },knob),
    ...rprops
  },"fg",["backgroundColor"]);
  return {bgStyleStatic,bgTransformFn,fgStyleStatic,fgTransformFn};
}

// js.react-native.ui-toggle-switch/ToggleSwitch [49]
export function ToggleSwitch({
  style,
  selected,
  setSelected,
  outlined,
  knobProps,
  knobStyle,
  axisProps,
  axisStyle,
  theme,
  themePipeline,
  transformations = {},
  inner = [],
  size = 24,
  ...rprops
}){
  let {bgStyleStatic,bgTransformFn,fgStyleStatic,fgTransformFn} = toggleSwitchTheme({theme,themePipeline,transformations,...rprops},size);
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
                "key":"axis",
                "style":[
                        {
                              "marginVertical":size / 4,
                              "borderRadius":size / 2,
                              "height":size / 2,
                              "width":size * 2
                            },
                        bgStyleStatic,
                        ...xtd.arrayify(axisStyle)
                      ],
                "transformations":bgTransformFn
              },axisProps),
          Object.assign({
                "component":ReactNative.View,
                "key":"knob",
                "style":[
                        {
                              "borderRadius":size / 2,
                              "height":size,
                              "position":"absolute",
                              "width":size
                            },
                        fgStyleStatic,
                        ...xtd.arrayify(knobStyle)
                      ],
                "transformations":fgTransformFn
              },knobProps),
          ...inner
        ]}
      {...rprops}/>);
}