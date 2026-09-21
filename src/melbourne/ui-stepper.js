import React from 'react'

import * as ReactNative from 'react-native'

import * as physical_base from '../libs/js/react-native/physical-base'

import * as a from '../libs/js/react-native/animate'

import * as model_roller from '../libs/js/react-native/model-roller'

import ui_group from './ui-group'

import k from '../libs/xt/lang/base-lib'

// melbourne.ui-stepper/StepperTabs [16] 
function StepperTabs({design,variant,total,style,styleContainer,index,setIndex,...rprops}){
  return (
    <ui_group.TabsIndexed
      style={[
        {
            "height":10,
            "width":10,
            "borderRadius":10,
            "padding":2,
            "marginHorizontal":6
          },
        ...(Array.isArray(style) ? style : ((null == style) ? [] : [style]))
      ]}
      items={k.arr_repeat("",total)}
      design={design}
      variant={variant}
      setIndex={setIndex}
      index={index}
      {...rprops}>
    </ui_group.TabsIndexed>);
}

// melbourne.ui-stepper/stepperOffset [42] 
function stepperOffset(modelFn,total,offset,index){
  let v = offset - index;
  let {scale,translate,visible} = modelFn(v);
  return {
    "style":{
        "opacity":visible ? k.mix(0,1,scale) : 0,
        "zIndex":visible ? (100 * scale) : -100
      }
  };
}

// melbourne.ui-stepper/Stepper [56] 
function Stepper({
  index,
  setIndex,
  style,
  pageStyle,
  offsetFn = stepperOffset,
  pages = [],
  ...rprops
}){
  let total = Math.max((pages).length,1);
  let iindicator = a.useCircularIndicator(index,{
    "default":{
        "type":"timing",
        "duration":500,
        "easing":ReactNative.Easing.linear
      }
  },null,null,total,null);
  let modelFn = React.useCallback(model_roller.roller_model(total,10),[]);
  let pageFn = function (page,i){
    return (
      <physical_base.Box
        key={"page" + i}
        style={[
          {"position":"absolute"},
          ...(Array.isArray(pageStyle) ? pageStyle : ((null == pageStyle) ? [] : [pageStyle]))
        ]}
        indicators={{"offset":iindicator}}
        children={[
          (
                <ReactNative.View key="parent">{page}</ReactNative.View>)
        ]}
        transformations={{
          "offset":function (offset){
                  return offsetFn(modelFn,total,offset,i);
                }
        }}>
      </physical_base.Box>);
  };
  return (
    <ReactNative.View
      style={[
        {"overflow":"hidden"},
        ...(Array.isArray(style) ? style : ((null == style) ? [] : [style]))
      ]}>{pages.map(pageFn)}
    </ReactNative.View>);
}

var MODULE = {
  "StepperTabs":StepperTabs,
  "stepperOffset":stepperOffset,
  "Stepper":Stepper
};

export default MODULE