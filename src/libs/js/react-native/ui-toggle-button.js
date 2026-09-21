import * as ReactNative from 'react-native'

import * as xtd from '../../xt/lang/common-data.js'

import * as physical_base from './physical-base.js'

import * as helper_theme from './helper-theme.js'

import * as helper_theme_default from './helper-theme-default.js'

// js.react-native.ui-toggle-button/toggleButtonTheme [18]
export function toggleButtonTheme({theme,themePipeline,...rprops}){
  let __theme = Object.assign({},helper_theme_default.ButtonDefaultTheme,theme);
  let __themePipeline = Object.assign({},helper_theme_default.BinaryDefaultPipeline,themePipeline);
  let [styleStatic,transformFn] = helper_theme.prepThemeCombined({"theme":__theme,"themePipeline":__themePipeline,...rprops});
  return [styleStatic,transformFn];
}

// js.react-native.ui-toggle-button/ToggleButton [35]
export function ToggleButton({
  selected,
  text,
  textProps,
  style,
  styleContainer,
  theme,
  themePipeline,
  inner = [],
  ...rprops
}){
  let [styleStatic,transformFn] = toggleButtonTheme({theme,themePipeline,...rprops});
  return (
    <physical_base.TouchableBinary
      active={selected}
      style={styleContainer}
      inner={[
          Object.assign({
                "component":ReactNative.Text,
                "children":xtd.arrayify(text),
                "style":[
                        helper_theme_default.ButtonDefaultStyle,
                        ...xtd.arrayify(style),
                        styleStatic
                      ],
                "transformations":transformFn
              },textProps),
          ...inner
        ]}
      {...rprops}/>);
}