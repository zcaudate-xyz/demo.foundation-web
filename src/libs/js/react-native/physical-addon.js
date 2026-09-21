import * as ReactNative from 'react-native'

import * as xtd from '../../xt/lang/common-data.js'

import * as n from '../react-native.js'

// js.react-native.physical-addon/tagBase [15]
export function tagBase({style,...rprops}){
  return {
    "component":ReactNative.TextInput,
    "editable":false,
    "style":[
      {"cursor":"default","width":50,"fontSize":12},
      ReactNative.Platform.select({
      "ios":{"fontFamily":"Courier"},
      "default":{"fontFamily":"monospace"}
    }),
      ReactNative.Platform.select({"web":{"userSelect":"none"}}),
      ...xtd.arrayify(style)
    ],
    ...rprops
  };
}

// js.react-native.physical-addon/tagSingle [32]
export function tagSingle({indicator,transformations,...rprops}){
  return Object.assign(tagBase(rprops),{
    "transformations":Object.assign({
        [indicator]:function (v){
            return {"value":v.toFixed(4)};
          }
      },transformations)
  });
}

// js.react-native.physical-addon/tagAll [44]
export function tagAll(props){
  let {transformations,keys,...rprops} = props || {};
  return Object.assign(tagBase(rprops),{
    "multiline":true,
    "transformations":function (m){
        let display = keys ? xtd.obj_pick(m,keys) : m;
        return {"value":n.format_entry(display)};
      }
  });
}