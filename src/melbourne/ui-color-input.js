import React from 'react'

import * as ReactNative from 'react-native'

import * as n from '../libs/js/react-native'

import ui_static from './ui-static'

import ui_input from './ui-input'

import k from '../libs/xt/lang/base-lib'

// melbourne.ui-color-input/ColorInput [15] 
function ColorInput({design,variant,theme,styleContainer,style,value,setValue,...rprops}){
  let [currentText,setCurrentText] = React.useState(value);
  React.useEffect(function (){
    setCurrentText(value);
  },[value]);
  return (
    <n.Row style={[{"alignItems":"center"},styleContainer]}>
      <ui_input.Input
        value={currentText}
        onSubmitEditing={function (){
          setValue(currentText);
        }}
        onChangeText={setCurrentText}
        onBlur={function (){
          return setCurrentText(value);
        }}
        design={design}>
      </ui_input.Input>
      {k.not_emptyp(value) ? (
        <ReactNative.View style={{"backgroundColor":value,"height":30,"width":30}}></ReactNative.View>) : null}
    </n.Row>);
}

var MODULE = {"ColorInput":ColorInput};

export default MODULE