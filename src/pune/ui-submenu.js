import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import * as n from '../libs/js/react-native'

import ui_toggle_button from '../melbourne/ui-toggle-button'

import ui_static from '../melbourne/ui-static'

import ui_text from '../melbourne/ui-text'

import k from '../libs/xt/lang/base-lib'

// pune.ui-submenu/SubMenuToggle [22] 
function SubMenuToggle({design,mini,variant,item,...rprops}){
  let {label,icon,key,...ritems} = item;
  let [value,setValue] = React.useState("STATS");
  return (
    <ui_text.TabsMinor
      design={{"type":"dark"}}
      styleContainer={{"flexDirection":"column"}}
      data={["STATS","XLM","USD"]}
      value={value}
      setValue={setValue}>
    </ui_text.TabsMinor>);
}

// pune.ui-submenu/SubMenuRoute [63] 
function SubMenuRoute({design,mini,theme,item,routeKey,setRouteKey,setVisible}){
  let {key} = item;
  return (
    <SubMenuToggle
      design={design}
      variant={{"active":{"bg":{"key":"background"},"fg":{"key":"neutral"}}}}
      item={Object.assign({
        "selected":routeKey == key,
        "onPress":function (){
              setRouteKey(key);
              if(setVisible){
                setVisible(false);
              }
            }
      },item)}
      mini={mini}
      theme={theme}>
    </SubMenuToggle>);
}

// pune.ui-submenu/SubMenu [88] 
function SubMenu({mini,routeKey,setRouteKey,design = {},items = []}){
  let [visible,setVisible] = React.useState();
  let itemFn = function (mini){
    return function (item,i){
      let {component = SubMenuRoute} = item;
      return React.createElement(
        component,
        {design,item,mini,routeKey,setRouteKey,setVisible,"key":i}
      );
    };
  };
  return (
    <ui_static.Div
      design={design}
      variant={{"bg":{"key":"background"}}}
      style={[{"margin":4,"overflow":"hidden"}]}>{items.map(itemFn(mini))}
    </ui_static.Div>);
}

var MODULE = {
  "SubMenuToggle":SubMenuToggle,
  "SubMenuRoute":SubMenuRoute,
  "SubMenu":SubMenu
};

export default MODULE