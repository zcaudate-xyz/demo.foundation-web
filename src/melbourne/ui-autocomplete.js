import React from 'react'

import * as ReactNative from 'react-native'

import base_font from './base-font'

import ui_text from './ui-text'

import * as r from '../libs/js/react'

import * as ui_autocomplete from '../libs/js/react-native/ui-autocomplete'

import ui_input from './ui-input'

import * as n from '../libs/js/react-native'

import * as ext_view from '../libs/js/react/ext-model'

import k from '../libs/xt/lang/base-lib'

import ui_static from './ui-static'

// melbourne.ui-autocomplete/SelectComponentEmpty [19] 
function SelectComponentEmpty({design}){
  return (
    <ui_text.H5 design={design}>Not Found</ui_text.H5>);
}

// melbourne.ui-autocomplete/SelectComponentBusy [26] 
function SelectComponentBusy({design}){
  return (
    <ui_text.H5 design={design}>Fetching Data...</ui_text.H5>);
}

// melbourne.ui-autocomplete/SelectComponentEntry [33] 
function SelectComponentEntry({design,entry,selected,setSelected,source}){
  return (
    <ui_text.ButtonAccent
      onPress={function (){
        return setSelected(entry);
      }}
      text={JSON.stringify(entry)}
      design={design}>
    </ui_text.ButtonAccent>);
}

// melbourne.ui-autocomplete/SelectSingle [45] 
function SelectSingle({design,selected,setSelected,source,...rprops}){
  let hostRef = React.useRef();
  let [value,setValue] = React.useState("");
  let [visible,setVisible] = React.useState();
  return selected ? (
    <ui_text.ButtonAccent
      onPress={function (){
        return setSelected(null);
      }}
      text={JSON.stringify(selected)}
      design={design}>
    </ui_text.ButtonAccent>) : (
    <>
      <ui_input.Input
        design={{"type":"dark"}}
        refLink={hostRef}
        value={value}
        onChangeText={setValue}
        onFocus={function (){
          return setVisible(true);
        }}
        onBlur={function (){
          return setVisible(false);
        }}>
      </ui_input.Input>
      <ui_autocomplete.Autocomplete
        visible={visible}
        sourceInput={[value]}
        sourceView={source.view}
        componentEmpty={SelectComponentEmpty}
        setVisible={setVisible}
        selected={selected}
        component={SelectComponentEntry}
        componentBusy={SelectComponentBusy}
        setSelected={setSelected}
        hostRef={hostRef}>
      </ui_autocomplete.Autocomplete>
    </>);
}

var MODULE = {
  "SelectComponentEmpty":SelectComponentEmpty,
  "SelectComponentBusy":SelectComponentBusy,
  "SelectComponentEntry":SelectComponentEntry,
  "SelectSingle":SelectSingle
};

export default MODULE