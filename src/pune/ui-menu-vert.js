import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import * as ui_tooltip from '../libs/js/react-native/ui-tooltip'

import ui_toggle_button from '../melbourne/ui-toggle-button'

import * as n from '../libs/js/react-native'

import ui_button from '../melbourne/ui-button'

import k from '../libs/xt/lang/base-lib'

import base_palette from '../melbourne/base-palette'

import ui_static from '../melbourne/ui-static'

// pune.ui-menu-vert/styleMenuButton [24] 
function styleMenuButton(mini){
  return {"padding":3,"margin":5,"marginVertical":!mini ? 8 : null};
}

// pune.ui-menu-vert/MainMenuSeperator [31] 
function MainMenuSeperator({design,mini}){
  return (
    <ui_static.Separator
      design={design}
      variant={{"fg":{"key":"neutral","tone":"sharpen"}}}
      style={mini ? {
        "height":32,
        "marginHorizontal":15,
        "marginVertical":12,
        "width":1
      } : {
        "height":1,
        "marginHorizontal":12,
        "marginVertical":10,
        "width":32
      }}>
    </ui_static.Separator>);
}

// pune.ui-menu-vert/MainMenuButton [45] 
function MainMenuButton({design,mini,item,...rprops}){
  let {label,icon,key,...ritems} = item;
  return (
    <ui_button.Button
      design={design}
      variant={{
        "bg":{"key":"background","tone":mini ? "sharpen" : "diminish"},
        "fg":{"key":"neutral"},
        "hovered":{"bg":{"key":"background","mix":"neutral","ratio":2}},
        "pressed":{"bg":{"key":"neutral"},"fg":{"key":"background"}},
        "tooltip":{"fg":{"key":"background"},"bg":{"key":"neutral"}}
      }}
      style={styleMenuButton(mini)}
      text={(
        <RNIcon key="icon" name={icon} size={24}></RNIcon>)}
      tooltip={{"text":label}}
      {...Object.assign(rprops,ritems)}>
    </ui_button.Button>);
}

// pune.ui-menu-vert/MainMenuToggle [75] 
function MainMenuToggle({design,mini,variant,item,...rprops}){
  let {label,icon,key,...ritems} = item;
  return (
    <ui_toggle_button.ToggleButton
      design={design}
      variant={Object.assign({
        "bg":{"key":"background","tone":mini ? "sharpen" : "diminish"},
        "active":{"bg":{"key":"neutral"}},
        "hovered":{"bg":{"raw":1},"fg":{"raw":1}},
        "pressed":{"bg":{"raw":1},"fg":{"raw":1}}
      },variant)}
      style={styleMenuButton(mini)}
      text={(
        <RNIcon key="icon" name={icon} size={24}></RNIcon>)}
      tooltip={{"text":label}}
      {...Object.assign(rprops,ritems)}>
    </ui_toggle_button.ToggleButton>);
}

// pune.ui-menu-vert/MainMenuRoute [105] 
function MainMenuRoute({design,mini,theme,item,routeKey,setRouteKey,setVisible}){
  let {key} = item;
  return (
    <MainMenuToggle
      design={design}
      variant={{"active":{"bg":{"key":"primary"}}}}
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
    </MainMenuToggle>);
}

// pune.ui-menu-vert/MainMenuMiniContext [129] 
function MainMenuMiniContext({design,variant,visible,setVisible,children}){
  let hostRef = React.useRef();
  let palette = base_palette.designPalette(design);
  return (
    <>
      <MainMenuToggle
        refLink={hostRef}
        mini={true}
        selected={visible}
        onPress={function (){
          return setVisible(!visible);
        }}
        item={{"key":"more","icon":"dots-three-horizontal"}}
        variant={variant}
        design={design}>
      </MainMenuToggle>
      <ui_tooltip.Tooltip
        hostRef={hostRef}
        visible={visible}
        setVisible={setVisible}
        position="top"
        alignment="end"
        arrow={{
          "placement":"none",
          "backdrop":true,
          "baseHeight":5,
          "baseLength":20,
          "backdropStyle":{
            "backgroundColor":base_palette.getColor(palette,{"key":"background"}),
            "opacity":0.3
          }
        }}>
        <ReactNative.View style={{"width":60}}>{children}</ReactNative.View>
      </ui_tooltip.Tooltip>
    </>);
}

// pune.ui-menu-vert/MainMenu [167] 
function MainMenu({mini,routeKey,setRouteKey,design = {},items = []}){
  let [visible,setVisible] = React.useState();
  let itemFn = function (mini){
    return function (item,i){
      let {component = MainMenuRoute} = item;
      return React.createElement(
        component,
        {design,item,mini,routeKey,setRouteKey,setVisible,"key":i}
      );
    };
  };
  if(mini){
    return (
      <ui_static.Div
        design={design}
        variant={{"bg":{"key":"background","tone":"sharpen"}}}
        style={[
          {
                "padding":2,
                "flex":1,
                "overflow":"hidden",
                "flexDirection":"row",
                "justifyContent":"space-between"
              }
        ]}>
        {items.filter(k.key_fn("mini")).map(itemFn(true))}
        <MainMenuMiniContext visible={visible} setVisible={setVisible} design={design}>
          <ui_static.Div
            design={design}
            variant={{"bg":{"key":"background","tone":"sharpen"}}}
            style={[{"padding":2}]}>
            {items.filter(function (e){
              return !e.mini && e.key;
            }).map(itemFn(true))}
          </ui_static.Div>
        </MainMenuMiniContext>
      </ui_static.Div>);
  }
  else{
    return (
      <ui_static.Div
        design={design}
        variant={{"bg":{"key":"background","tone":"diminish"}}}
        style={[{"padding":2,"flex":1,"overflow":"hidden"}]}>{items.map(itemFn(mini))}
      </ui_static.Div>);
  }
}

var MODULE = {
  "styleMenuButton":styleMenuButton,
  "MainMenuSeperator":MainMenuSeperator,
  "MainMenuButton":MainMenuButton,
  "MainMenuToggle":MainMenuToggle,
  "MainMenuRoute":MainMenuRoute,
  "MainMenuMiniContext":MainMenuMiniContext,
  "MainMenu":MainMenu
};

export default MODULE