import React from 'react'

import * as ReactNative from 'react-native'

import * as xtd from '../../xt/lang/common-data.js'

import * as model_roller from './model-roller.js'

import * as k from '../../xt/lang/common-lib.js'

import * as a from './animate.js'

// js.react-native.helper-roller/useRoller [12]
export function useRoller({index = 0,radius = 10,items,divisions}){
  let labels = React.useRef(xtd.arr_map(xtd.arr_range(divisions),function (i){
    return new ReactNative.Animated.Value(i);
  })).current;
  let labelsLu = React.useRef(xtd.arr_juxt(labels,function (v){
    return "i" + v._value;
  },k.identity)).current;
  let indexRef = React.useRef(index);
  React.useEffect(function (){
    indexRef.current = index;
  },[index]);
  let offset = a.useIndexIndicator(index,{"default":{"duration":150}},function (progress,{status}){
    if(status == "stopped"){
      model_roller.roller_set_values(labels,divisions,indexRef.current,items.length);
    }
  });
  let modelFn = React.useRef(model_roller.roller_model(divisions,radius)).current;
  React.useEffect(function (){
    model_roller.roller_set_values(labels,divisions,index,items.length);
  },[]);
  return {labels,labelsLu,modelFn,offset};
}