import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import * as ui_tooltip from '../libs/js/react-native/ui-tooltip'

import * as text from '../libs/xt/lang/common-string'

import ui_toggle_button from '../melbourne/ui-toggle-button'

import * as r from '../libs/js/react'

import * as n from '../libs/js/react-native'

import ui_group from '../melbourne/ui-group'

import k from '../libs/xt/lang/base-lib'

import base_palette from '../melbourne/base-palette'

import ui_static from '../melbourne/ui-static'

// pune.ui-sidemenu/SideMenuTitle [19] 
function SideMenuTitle({design,title}){
  return (
    <ui_static.Div
      variant={{"bg":{"key":"primary","mix":"background","ratio":6}}}
      style={{"width":40,"flexDirection":"column-reverse"}}
      design={design}>
      <ReactNative.View
        style={{"transform":[{"rotate":"-90deg"},{"translateX":20}]}}>
        <ui_static.Text
          style={{"width":100}}
          variant={{
            "font":"h4",
            "bg":{"key":"primary","mix":"background","ratio":6},
            "fg":{"key":"neutral"}
          }}
          design={design}>{title}
        </ui_static.Text>
      </ReactNative.View>
    </ui_static.Div>);
}

// pune.ui-sidemenu/SideMenuList [43] 
function SideMenuList({
  design,
  mini,
  miniTitle,
  variant,
  routeKey,
  setRouteKey,
  data,
  children,
  styleContainer,
  floating,
  ...rprops
}){
  let __design = design;
  let __variant = Object.assign({
    "font":"h4",
    "bg":{"key":"background","tone":"diminish"},
    "fg":{"key":"neutral","tone":"diminish"},
    "pressed":{"bg":{"raw":1},"fg":{"raw":1}},
    "hovered":{"bg":{"raw":1},"fg":{"raw":1}},
    "active":{"bg":{"key":"primary"}}
  },variant);
  return (
    <n.Row
      style={[
        {"width":140,"minHeight":80},
        ...(Array.isArray(styleContainer) ? styleContainer : ((null == styleContainer) ? [] : [styleContainer]))
      ]}>
      <ui_static.Div
        design={__design}
        variant={__variant}
        style={{"paddingHorizontal":10,"paddingVertical":5,"flex":1}}>
        <ui_group.List
          design={__design}
          variant={__variant}
          value={routeKey}
          setValue={setRouteKey}
          style={{
            "width":120,
            "fontWeight":"600",
            "fontSize":12.5,
            "borderRadius":1
          }}
          format={function (s){
            return k.capitalize(text.tag_string(s));
          }}
          transformations={{"bg":null}}
          data={data}
          {...rprops}>
        </ui_group.List>
        {children}
      </ui_static.Div>
    </n.Row>);
}

// pune.ui-sidemenu/SideMenuFloating [99] 
function SideMenuFloating({children,design,mini,setVisible,visible}){
  let palette = base_palette.designPalette(design);
  let buttonRef = React.useRef();
  return (
    <>
      <ui_toggle_button.ToggleButton
        selected={visible}
        onPress={function (){
          return setVisible(!visible);
        }}
        key={mini}
        variant={mini ? {
          "bg":{"key":"neutral"},
          "fg":{"key":"background"},
          "pressing":{"bg":1},
          "active":{"bg":{"key":"neutral"}}
        } : {
          "bg":{"key":"neutral"},
          "fg":{"key":"background"},
          "pressing":{"bg":1},
          "active":{"bg":{"key":"neutral"}}
        }}
        transformations={{
          "bg":function ({active}){
            return {"style":{"transform":[{"scale":1 - active}]}};
          }
        }}
        style={{"paddingVertical":6,"borderRadius":2}}
        design={design}
        refLink={buttonRef}
        text={(
          <RNIcon key="menu" name="menu" size={18}></RNIcon>)}>
      </ui_toggle_button.ToggleButton>
      <ui_tooltip.Tooltip
        hostRef={buttonRef}
        visible={visible}
        setVisible={setVisible}
        position="right_edge"
        alignment="start"
        arrow={{
          "animate":true,
          "placement":"none",
          "backdrop":true,
          "backdropStyle":{
            "backgroundColor":base_palette.getColor(palette,{"key":"neutral"}),
            "opacity":0.4
          }
        }}>{children}
      </ui_tooltip.Tooltip>
    </>);
}

// pune.ui-sidemenu/SideMenu [151] 
function SideMenu({
  design,
  mini,
  miniTitle,
  routeKey,
  setRouteKey,
  data,
  narrowed,
  children,
  ...rprops
}){
  let [visible,setVisible] = React.useState();
  let listProps = Object.assign({data,design,routeKey,setRouteKey},narrowed ? {
    "floating":true,
    "styleContainer":{"padding":5,"borderRadius":3,"paddingLeft":10},
    "onChange":function (){
        return setVisible(false);
      }
  } : null);
  let listElem = React.createElement(SideMenuList,listProps);
  return (
    <ReactNative.View
      style={[
        {"zIndex":100,"top":5,"position":"absolute"},
        ReactNative.Platform.select({"ios":{"left":5},"default":{"right":5}})
      ]}>
      {narrowed ? React.createElement(
        SideMenuFloating,
        {design,mini,setVisible,visible,"children":React.createElement(SideMenuList,listProps)}
      ) : React.createElement(SideMenuList,listProps)}
    </ReactNative.View>);
}

var MODULE = {
  "SideMenuTitle":SideMenuTitle,
  "SideMenuList":SideMenuList,
  "SideMenuFloating":SideMenuFloating,
  "SideMenu":SideMenu
};

export default MODULE