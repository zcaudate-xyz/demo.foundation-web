import * as ReactNative from 'react-native'

import * as xtd from '../../xt/lang/common-data.js'

import * as physical_base from './physical-base.js'

import * as helper_theme from './helper-theme.js'

import * as helper_theme_default from './helper-theme-default.js'

// js.react-native.ui-button/buttonTheme [18]
export function buttonTheme({theme,themePipeline,...rprops}){
  let __theme = Object.assign({},helper_theme_default.ButtonDefaultTheme,theme);
  let __themePipeline = Object.assign({},helper_theme_default.PressDefaultPipeline,themePipeline);
  let [styleStatic,transformFn] = helper_theme.prepThemeCombined({"theme":__theme,"themePipeline":__themePipeline,...rprops});
  return [styleStatic,transformFn];
}

// js.react-native.ui-button/Button [35]
export function Button({
  text,
  textProps,
  style,
  styleContainer,
  theme,
  themePipeline,
  inner = [],
  ...rprops
}){
  let [styleStatic,transformFn] = buttonTheme({theme,themePipeline,...rprops});
  return (
    <physical_base.TouchableBasePressing
      inner={[
          Object.assign({
                "component":ReactNative.Text,
                "key":"text",
                "numberOfLines":1,
                "children":xtd.arrayify(text),
                "style":[
                        helper_theme_default.ButtonDefaultStyle,
                        ...styleStatic,
                        ...xtd.arrayify(style)
                      ],
                "transformations":transformFn
              },textProps),
          ...inner
        ]}
      style={styleContainer}
      {...rprops}/>);
}