import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import * as ui_tooltip from '../libs/js/react-native/ui-tooltip'

import * as ui_modal from '../libs/js/react-native/ui-modal'

import ui_toggle_button from './ui-toggle-button'

import * as r from '../libs/js/react'

import * as n from '../libs/js/react-native'

import ui_group from './ui-group'

import k from '../libs/xt/lang/base-lib'

import base_palette from './base-palette'

// melbourne.ui-dropdown/DropdownIndexedModal [18] 
function DropdownIndexedModal({
  design,
  variant,
  theme,
  items,
  setIndex,
  index,
  visible,
  setVisible,
  display,
  displayType,
  format,
  styleMenu,
  styleMenuItem,
  itemTransformations,
  modalProps,
  hostRef
}){
  let {mainBackground,mainColor,mainNeutral} = base_palette.designPalette(design);
  let [dims,setDims] = React.useState({});
  let wrap = r.useIsMountedWrap();
  React.useEffect(function (){
    n.measureRef(hostRef,wrap(setDims));
  },[visible]);
  let listElem = (
    <ui_group.ListIndexed
      items={items}
      format={format}
      onPress={function (){
        return setVisible(false);
      }}
      key="list"
      transformations={{"bg":null} || itemTransformations}
      index={index}
      variant={variant}
      style={[
        {
            "marginVertical":0,
            "borderRadius":0,
            "fontSize":13,
            "width":dims.width,
            "fontWeight":"400"
          },
        ...(Array.isArray(styleMenuItem) ? styleMenuItem : ((null == styleMenuItem) ? [] : [styleMenuItem]))
      ]}
      styleContainer={[
        {"overflow":"auto","flex":1},
        ...(Array.isArray(styleMenu) ? styleMenu : ((null == styleMenu) ? [] : [styleMenu]))
      ]}
      theme={theme}
      design={design}
      setIndex={setIndex}>
    </ui_group.ListIndexed>);
  let modelElem = (
    <ui_modal.Modal
      onClose={function (){
        return setVisible(false);
      }}
      styleBackdrop={{"backgroundColor":mainNeutral}}
      visible={visible}>
      <ReactNative.View style={{"width":300,"height":500}}>{listElem}</ReactNative.View>
    </ui_modal.Modal>);
  let tooltipElem = (
    <ui_tooltip.Tooltip
      hostRef={hostRef}
      visible={visible}
      setVisible={setVisible}
      position="bottom"
      alignment="start"
      arrow={{
        "backdrop":true,
        "backdropStyle":{"backgroundColor":mainNeutral,"opacity":0.1},
        "baseHeight":0,
        "color":mainBackground,
        "placement":"none"
      }}>
      <ReactNative.View
        style={{
          "backgroundColor":mainBackground,
          "borderRadius":3,
          "maxWidth":400
        }}>{listElem}
      </ReactNative.View>
    </ui_tooltip.Tooltip>);
  return ("screen" == displayType) ? modelElem : tooltipElem;
}

// melbourne.ui-dropdown/DropdownIndexed [100] 
function DropdownIndexed({
  design,
  variant,
  theme,
  index,
  setIndex,
  items,
  displayType,
  style,
  styleContainer,
  styleText,
  styleMenu,
  styleMenuItem,
  itemTransformations,
  format = k.identity,
  ...rprops
}){
  let [visible,setVisible] = React.useState(function (){
    return false;
  });
  let hostRef = React.useRef();
  return (
    <ReactNative.View style={styleContainer}>
      <ui_toggle_button.ToggleButton
        selected={visible}
        onPress={function (){
          return setVisible(!visible);
        }}
        variant={Object.assign({
          "bg":{"key":"background","mix":"primary","ratio":1},
          "hovered":{"bg":{"raw":1}}
        },variant)}
        transformations={{"bg":null}}
        style={[
          {
          "marginVertical":0,
          "borderRadius":0,
          "paddingVertical":6,
          "alignItems":"center",
          "justifyContent":"center",
          "fontSize":13,
          "fontWeight":"400"
        },
          ...(Array.isArray(style) ? style : ((null == style) ? [] : [style]))
        ]}
        theme={theme}
        refLink={hostRef}
        design={design}
        text={(
          <n.Row
            key="text"
            style={{
              "width":"100%",
              "alignItems":"center",
              "justifyContent":"center"
            }}>
            <ReactNative.Text>{format(items[index],index)}</ReactNative.Text>
            <n.Fill style={{"minWidth":10}}></n.Fill>
            <RNIcon name="chevron-down"></RNIcon>
          </n.Row>)}
        {...rprops}>
      </ui_toggle_button.ToggleButton>
      <DropdownIndexedModal
        items={items}
        styleMenu={styleMenu}
        visible={visible}
        itemTransformations={itemTransformations}
        setVisible={setVisible}
        format={format}
        styleMenuItem={styleMenuItem}
        index={index}
        variant={variant}
        displayType={displayType}
        hostRef={hostRef}
        theme={theme}
        design={design}
        setIndex={setIndex}>
      </DropdownIndexedModal>
    </ReactNative.View>);
}

// melbourne.ui-dropdown/Dropdown [170] 
function Dropdown(props){
  let {data,valueFn,value,setValue,...rprops} = props;
  let {index,items,setIndex} = r.convertIndex({data,setValue,value,valueFn});
  React.useEffect(function (){
    if(k.is_emptyp(value) && (null != index) && k.not_emptyp(data)){
      setValue((valueFn || k.identity)(data[index]));
    }
  },[value,index,data]);
  return (
    <DropdownIndexed setIndex={setIndex} items={items} index={index} {...rprops}></DropdownIndexed>);
}

var MODULE = {
  "DropdownIndexedModal":DropdownIndexedModal,
  "DropdownIndexed":DropdownIndexed,
  "Dropdown":Dropdown
};

export default MODULE