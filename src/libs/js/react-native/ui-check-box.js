import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import * as ReactNative from 'react-native'

import * as xtd from '../../xt/lang/common-data.js'

import * as physical_base from './physical-base.js'

import * as helper_theme from './helper-theme.js'

import * as helper_theme_default from './helper-theme-default.js'

// js.react-native.ui-check-box/checkBoxTheme [18]
export function checkBoxTheme({theme,themePipeline,...rprops}){
  let __theme = Object.assign({},helper_theme_default.CheckBoxDefaultTheme,theme);
  let __themePipeline = Object.assign({},helper_theme_default.BinaryDefaultPipeline,themePipeline);
  let [styleStatic,transformFn] = helper_theme.prepThemeCombined({"theme":__theme,"themePipeline":__themePipeline,...rprops});
  return [styleStatic,transformFn];
}

// js.react-native.ui-check-box/CheckBox [33]
export function CheckBox({
  selected,
  setSelected,
  style,
  icon,
  iconProps,
  styleContainer,
  theme,
  themePipeline,
  inner = [],
  ...rprops
}){
  let [styleStatic,transformFn] = checkBoxTheme({theme,themePipeline,...rprops});
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
                "component":RNIcon,
                "allowRef":true,
                "name":icon || "check",
                "style":[
                        helper_theme_default.CheckBoxDefaultStyle,
                        ...styleStatic,
                        ReactNative.Platform.select({"web":{"outlineWidth":0}}),
                        ...xtd.arrayify(style)
                      ],
                "transformations":transformFn
              },iconProps),
          ...inner
        ]}
      {...rprops}/>);
}