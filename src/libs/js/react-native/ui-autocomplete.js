import React from 'react'

import * as ReactNative from 'react-native'

import * as xtt from '../../xt/lang/common-tree.js'

import * as xtd from '../../xt/lang/common-data.js'

import * as ui_tooltip from './ui-tooltip.js'

import * as ext_model from '../react/ext-model.js'

import * as n from '../react-native.js'

// js.react-native.ui-autocomplete/AutocompleteModal [8]
export function AutocompleteModal({
  hostRef,
  visible,
  setVisible,
  isBusy,
  styleContainer,
  entries,
  componentBusy = ReactNative.View,
  componentEmpty = ReactNative.View,
  component,
  ...rprops
}){
  let [dims,setDims] = React.useState({});
  React.useEffect(function (){
    n.measureRef(hostRef,setDims);
  },[visible]);
  return (
    <ui_tooltip.Tooltip
      hostRef={hostRef}
      visible={visible}
      setVisible={setVisible}
      position="bottom"
      alignment="start"
      arrow={{"placement":"none"}}>
      <ReactNative.View
        style={[{"width":dims.width},...xtd.arrayify(styleContainer)]}>
        {isBusy ? React.createElement(componentBusy,rprops) : (xtd.is_emptyp(entries) ? React.createElement(componentEmpty,rprops) : entries.map(function (entry,i){
          return React.createElement(component,Object.assign({entry,"key":i},rprops));
        }))}
      </ReactNative.View>
    </ui_tooltip.Tooltip>);
}

// js.react-native.ui-autocomplete/Autocomplete [48]
export function Autocomplete({sourceView,sourceInput,...rprops}){
  let entries = ext_model.listenView(sourceView,"success");
  let isBusy = ext_model.listenView(sourceView,"pending");
  let refInput = React.useRef();
  React.useEffect(function (){
    if(!isBusy && !xtt.eq_nested(sourceInput,refInput.current)){
      ext_model.refresh_args(sourceView,sourceInput);
      refInput.current = sourceInput;
    }
  },[sourceInput,isBusy]);
  return React.createElement(AutocompleteModal,Object.assign({entries,isBusy},rprops));
}