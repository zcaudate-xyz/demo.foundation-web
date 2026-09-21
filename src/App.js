import * as Expo from 'expo'

import React from 'react'

import * as ReactNative from 'react-native'

import web_pune_frame from './web-pune-frame'

import web_melbourne from './web-melbourne'

import * as n from './libs/js/react-native.js'

import * as base_box from './libs/xt/event/base-box.js'

import * as ext_box from './libs/js/react/ext-box.js'

// component.web-index/__import__ [28] 
import RNIcon from 'react-native-vector-icons/Entypo'
import * as ExpoImagePicker from 'expo-image-picker'
import * as RNSvg from 'react-native-svg'
import * as LWCharts from 'lightweight-charts'
Object.defineProperty((globalThis),"React",{"value":React,"writeable":true});
Object.defineProperty(
  (globalThis),
  "ReactNative",
  {"value":ReactNative,"writeable":true}
);
Object.defineProperty((globalThis),"RNIcon",{"value":RNIcon,"writeable":true});
Object.defineProperty(
  (globalThis),
  "ExpoImagePicker",
  {"value":ExpoImagePicker,"writeable":true}
);
Object.defineProperty((globalThis),"RNSvg",{"value":RNSvg,"writeable":true});
Object.defineProperty((globalThis),"LWCharts",{"value":LWCharts,"writeable":true});
Object.defineProperty((globalThis),"Expo",{"value":Expo,"writeable":true});

// component.web-index/Global [32] 
globalThis["component_web_index$$Global"] = base_box.make_box({"init":false,"l0":"01-melbourne","l1":"207a-spinner-basic"});

// component.web-index/Screens [38] 
globalThis["component_web_index$$Screens"] = base_box.make_box({});

// component.web-index/__screen__ [41] 
base_box.set_data(globalThis["component_web_index$$Screens"],[],{
  "01-melbourne":web_melbourne.melbourne_controls(),
  "02-slim":web_melbourne.slim_controls(),
  "03-pune-frame":web_pune_frame.pune_frame_controls()
});

// component.web-index/AppMain [51] 
function AppMain(){
  let [l0,setL0] = ext_box.useBox(globalThis["component_web_index$$Global"],["l0"]);
  let [l1,setL1] = ext_box.useBox(globalThis["component_web_index$$Global"],["l1"]);
  let tree = ext_box.listenBox(globalThis["component_web_index$$Screens"],[]);
  return (
    <ReactNative.View
      style={{"position":"absolute","top":0,"bottom":0,"width":"100%"}}>
      <n.TreePane
        tree={tree}
        levels={[
          {"type":"tabs","initial":l0,"setInitial":setL0},
          {
          "type":"list",
          "initial":l1,
          "setInitial":setL1,
          "listWidth":120,
          "displayFn":n.displayTarget
        }
        ]}>
      </n.TreePane>
    </ReactNative.View>);
}

// component.web-index/AppScratch [69] 
function AppScratch(){
  return (
    <ReactNative.View></ReactNative.View>);
}

// component.web-index/__main__ [73] 
base_box.set_data(globalThis["component_web_index$$Global"],["Main"],AppMain);

// component.web-index/App [77] 
function App(){
  let {Main} = ext_box.listenBox(globalThis["component_web_index$$Global"],[]);
  return (
    <Main></Main>);
}

export var MODULE = Expo.registerRootComponent(App);
