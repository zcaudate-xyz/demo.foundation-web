import * as ReactNative from 'react-native'

import React from 'react'

import * as physical_base from './physical-base.js'

import * as r from '../react.js'

// js.react-native.physical-edit/createPan [7]
export function createPan({
  pan,
  absolute,
  setPressing,
  onPressIn,
  onPressOut,
  disabledRef = {"current":false},
  ...rprops
}){
  return ReactNative.PanResponder.create(Object.assign({
    "onStartShouldSetPanResponderCapture":function (){
        if(!disabledRef.current){
          if(setPressing){
            setPressing(true);
          }
        }
        if(onPressIn){
          onPressIn();
        }
      },
    "onMoveShouldSetPanResponder":function (){
        if(!disabledRef.current){
          return true;
        }
      },
    "onPanResponderGrant":function (){
        if(!disabledRef.current){
          for(let [dk,ind] of Object.entries(pan)){
            ind.setOffset(ind._value);
          };
        }
      },
    "onPanResponderMove":function (e,state){
        if(!disabledRef.current){
          if(absolute){
            for(let [dk,ind] of Object.entries(pan)){
              let dv = state[dk];
              ind.setValue(ind._offset + dv);
            };
          }
          else{
            for(let [dk,ind] of Object.entries(pan)){
              let dv = state[dk];
              ind.setValue(dv);
            };
          }
        }
      },
    "onPanResponderRelease":function (){
        if(setPressing){
          setPressing(false);
        }
        if(onPressOut){
          onPressOut();
        }
        if(!absolute){
          for(let [dk,ind] of Object.entries(pan)){
            ind.flattenOffset();
          };
        }
      }
  },rprops));
}

// js.react-native.physical-edit/usePanTouchable [54]
export function usePanTouchable({disabled,highlighted,outlined,indicators,chord,...rprops},layout,position,absolute){
  let disabledRef = r.useFollowRef(disabled);
  let touchable = physical_base.useTouchable({
    disabled,
    highlighted,
    "indicators":Object.assign({position},indicators),
    "chord":Object.assign({outlined},chord),
    ...rprops
  });
  let {hovering,pressing,setHovering,setPressing} = touchable;
  let pan = React.useRef(
    (layout == "horizontal") ? {"dx":position} : {"dy":position}
  ).current;
  let {panHandlers} = React.useRef(
    createPan({disabledRef,pressing,setPressing,pan,absolute,...rprops})
  ).current;
  return {panHandlers,touchable};
}