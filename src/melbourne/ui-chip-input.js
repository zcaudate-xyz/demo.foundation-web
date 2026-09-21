import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import ui_chip from './ui-chip'

import ui_input from './ui-input'

import * as n from '../libs/js/react-native'

import ui_button from './ui-button'

import k from '../libs/xt/lang/base-lib'

import * as ui_util from '../libs/js/react-native/ui-util'

// melbourne.ui-chip-input/ChipInput [17] 
function ChipInput({
  design,
  variant,
  theme,
  styleContainer,
  style,
  values,
  setValues,
  ...rprops
}){
  if("string" == (typeof values)){
    values = JSON.parse(values);
  }
  if(k.is_emptyp(values)){
    values = [];
  }
  let [showInput,setShowInput] = React.useState();
  let [currentText,setCurrentText] = React.useState("");
  let refInput = React.useRef();
  let visibleInput = showInput || k.is_emptyp(values);
  return (
    <n.Row style={styleContainer}>
      <ReactNative.View>
        <ui_util.Fold visible={visibleInput}>
          <ui_input.Input
            design={design}
            refLink={refInput}
            value={currentText}
            onFocus={function (){
              return setShowInput(true);
            }}
            onBlur={function (){
              return setShowInput(false);
            }}
            onSubmitEditing={function (){
              if(k.not_emptyp(currentText)){
                setValues([...values,currentText]);
                setCurrentText("");
                setShowInput(false);
              }
              else if(k.not_emptyp(values)){
                setShowInput(false);
              }
            }}
            onChangeText={function (text){
              if(text.endsWith(",")){
                let out = (text.split(","))[0].trim();
                if(k.not_emptyp(out)){
                  setValues([...values,out]);
                  setCurrentText("");
                }
              }
              else{
                setCurrentText(text);
              }
            }}>
          </ui_input.Input>
        </ui_util.Fold>
        <n.Row style={{"flexWrap":"wrap","alignItems":"center"}}>
          {values.map(function (value,i){
            return (
              <ui_chip.Chip
                key={i}
                text={value}
                onClose={function (){
                  return setValues(k.arr_omit(values,i));
                }}
                design={design}>
              </ui_chip.Chip>);
          })}
          {k.not_emptyp(values) ? (
            <ui_button.Button
              variant={{
                "fg":{"key":"primary"},
                "bg":{"key":"background"},
                "pressed":{"bg":{"key":"background"}}
              }}
              outlined={true}
              onPress={function (){
                return k.not_emptyp(values) ? setShowInput(!showInput) : null;
              }}
              style={{
                "borderRadius":0,
                "margin":3,
                "padding":4,
                "paddingHorizontal":7,
                "width":30,
                "borderWidth":1,
                "textAlign":"center"
              }}
              text={(
                <RNIcon key="icon" name={visibleInput ? "minus" : "plus"}></RNIcon>)}
              design={design}>
            </ui_button.Button>) : null}
        </n.Row>
      </ReactNative.View>
    </n.Row>);
}

var MODULE = {"ChipInput":ChipInput};

export default MODULE