import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import * as ui_tooltip from '../libs/js/react-native/ui-tooltip'

import ui_text from './ui-text'

import * as r from '../libs/js/react'

import * as n from '../libs/js/react-native'

import k from '../libs/xt/lang/base-lib'

import base_palette from './base-palette'

import base_theme from './base-theme'

import slim_dialog from './slim-dialog'

// melbourne.ui-text-dialog/ConfirmDialog [24] 
function ConfirmDialog(props){
  let {
    component = "minor",
    confirm = {},
    design,
    variant,
    text,
    onPressIn,
    onPress,
    style,
    ...rprops
  } = props;
  let [visible,setVisible] = React.useState(function (){
    return false;
  });
  let hostRef = React.useRef();
  let ButtonComponent = {"minor":ui_text.ButtonMinor,"accent":ui_text.ButtonAccent}[component] || component;
  return (
    <>
      {React.createElement(ButtonComponent,{
        "refLink":hostRef,
        design,
        variant,
        text,
        style,
        "onPress":function (){
          if(onPressIn){
            onPressIn();
          }
          setVisible(!visible);
        },
        ...rprops
      })}
      <slim_dialog.Dialog
        design={Object.assign({},design,{"invert":true})}
        title={confirm.title || "CONFIRM"}
        body={confirm.body || "Do you wish to proceed?"}
        modalProps={{"transition":"none","effect":{"fade":0.1,"zoom":0.1}}}
        onSubmit={function (){
          setVisible(false);
          onPress();
        }}
        onCancel={function (){
          return setVisible(false);
        }}
        visible={visible}>
      </slim_dialog.Dialog>
    </>);
}

var MODULE = {"ConfirmDialog":ConfirmDialog};

export default MODULE