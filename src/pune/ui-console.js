import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import * as n from '../libs/js/react-native'

import k from '../libs/xt/lang/base-lib'

import ui_static from '../melbourne/ui-static'

import ui_text from '../melbourne/ui-text'

// pune.ui-console/ConsoleTabStyle [14] 
var ConsoleTabStyle = {
  "padding":2,
  "paddingHorizontal":15,
  "fontSize":12,
  "borderWidth":1,
  "borderStyle":"solid"
};

// pune.ui-console/Console [21] 
function Console({design,variant,style,screens,current,setCurrent,onClose,...rprops}){
  let data = k.sort(k.obj_keys(screens));
  let target = screens[current] || screens[data[0]];
  return (
    <ui_static.Div
      design={design}
      style={[
        {"flex":1},
        ...(Array.isArray(style) ? style : ((null == style) ? [] : [style]))
      ]}>
      <ui_static.Div
        design={design}
        style={{"flexDirection":"row"}}
        variant={{"bg":{"key":"background","tone":"sharpen"}}}>
        <ui_text.ButtonAccent
          design={design}
          style={{"padding":2}}
          text="X"
          onPress={onClose}>
        </ui_text.ButtonAccent>
        <ui_text.TabsMinor
          design={design}
          style={ConsoleTabStyle}
          value={current}
          transformations={{"bg":null}}
          setValue={setCurrent}
          data={data}>
        </ui_text.TabsMinor>
      </ui_static.Div>
      {n.displayTarget(target)}
    </ui_static.Div>);
}

var MODULE = {"ConsoleTabStyle":ConsoleTabStyle,"Console":Console};

export default MODULE