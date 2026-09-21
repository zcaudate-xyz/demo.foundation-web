import * as ReactNative from 'react-native'

import * as xtd from '../../xt/lang/common-data.js'

import * as physical_base from './physical-base.js'

import * as helper_theme from './helper-theme.js'

import * as helper_theme_default from './helper-theme-default.js'

// js.react-native.ui-input/inputTheme [18]
export function inputTheme({theme,themePipeline,...rprops}){
  let __theme = Object.assign({},helper_theme_default.InputDefaultTheme,theme);
  let __themePipeline = Object.assign({},helper_theme_default.InputDefaultPipeline,themePipeline);
  let [fgStyleStatic,fgTransformFn] = helper_theme.prepThemeSingle(
    {"theme":__theme,"themePipeline":__themePipeline,...rprops},
    "fg",
    ["color"]
  );
  let [bgStyleStatic,bgTransformFn] = helper_theme.prepThemeCombined({"theme":__theme,"themePipeline":__themePipeline,...rprops});
  return {bgStyleStatic,bgTransformFn,fgStyleStatic,fgTransformFn};
}

// js.react-native.ui-input/Input [41]
export function Input({
  theme,
  themePipeline,
  style,
  onChangeText,
  styleContainer,
  containerProps,
  ...rprops
}){
  let {bgStyleStatic,bgTransformFn,fgStyleStatic,fgTransformFn} = inputTheme({theme,themePipeline,...rprops});
  return (
    <physical_base.TouchableInput
      styleContainer={[
          helper_theme_default.InputDefaultStyle,
          ...bgStyleStatic,
          ...xtd.arrayify(styleContainer)
        ]}
      containerProps={Object.assign({"transformations":bgTransformFn},containerProps)}
      transformations={fgTransformFn}
      onChangeText={function (v){
          return xtd.arrayify(onChangeText).map(function (f){
            return f(v);
          });
        }}
      size="sm"
      style={[
          {"flex":1},
          ...fgStyleStatic,
          ReactNative.Platform.select({"web":{"outlineWidth":0,"outline":"none"}}),
          ...xtd.arrayify(style)
        ]}
      {...rprops}/>);
}