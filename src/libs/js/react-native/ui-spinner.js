import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import * as xtd from '../../xt/lang/common-data.js'

import * as physical_base from './physical-base.js'

import * as helper_theme from './helper-theme.js'

import * as physical_edit from './physical-edit.js'

import * as math from '../../xt/lang/common-math.js'

import * as helper_theme_default from './helper-theme-default.js'

import * as helper_roller from './helper-roller.js'

// js.react-native.ui-spinner/ITEMS [7]
export var ITEMS = ["0","1","2","3","4","5","6","7","8","9"];

// js.react-native.ui-spinner/styleDigit [10]
export var styleDigit = {
  "height":25,
  "width":10,
  "overflow":"hidden",
  "backgroundColor":"blue"
};

// js.react-native.ui-spinner/styleDigitText [16]
export var styleDigitText = {
  "height":25,
  "position":"absolute",
  "width":10,
  "fontSize":16,
  "fontWeight":"400",
  "backgroundColor":"red",
  "color":"#333"
};

// js.react-native.ui-spinner/spinnerTheme [25]
export function spinnerTheme({theme,themePipeline,...rprops}){
  let __theme = Object.assign({},helper_theme_default.ButtonDefaultTheme,theme);
  let __themePipeline = Object.assign({},helper_theme_default.PressDefaultPipeline,themePipeline);
  let [styleStatic,transformFn] = helper_theme.prepThemeCombined({"theme":__theme,"themePipeline":__themePipeline,...rprops});
  return [styleStatic,transformFn];
}

// js.react-native.ui-spinner/SpinnerStatic [42]
export function SpinnerStatic({text,styleText,style,editable}){
  return (
    <ReactNative.View style={[styleDigit,...xtd.arrayify(style)]}>
      <ReactNative.Text
        style={[
            styleDigitText,
            ReactNative.Platform.select({
              "web":{
                  "userSelect":"none",
                  "cursor":editable ? "ns-resize" : "default"
                }
            }),
            ...xtd.arrayify(styleText)
          ]}>{text}
      </ReactNative.Text>
    </ReactNative.View>);
}

// js.react-native.ui-spinner/SpinnerDigit [63]
export function SpinnerDigit({
  index,
  style,
  styleText,
  brand = {},
  items = ITEMS,
  divisions = 5,
  editable
}){
  let {labels,labelsLu,modelFn,offset} = helper_roller.useRoller({divisions,index,items});
  return (
    <ReactNative.View style={[styleDigit,...xtd.arrayify(style)]}>
      {xtd.arr_range(divisions).map(function (index,i){
        return (
          <physical_base.Text
            key={i}
            indicators={{"offset":offset,"value":labels[index]}}
            style={[
                styleDigitText,
                ReactNative.Platform.select({
                      "web":{
                              "userSelect":"none",
                              "cursor":editable ? "ns-resize" : "default"
                            }
                    }),
                ...xtd.arrayify(styleText)
              ]}
            transformations={function ({offset,value}){
                let v = offset - index;
                let {scale,translate,visible} = modelFn(v);
                return {
                  "text":items[value],
                  "style":{
                            "opacity":visible ? math.mix(-2,1,scale) : 0,
                            "zIndex":10 * scale,
                            "transform":[{"translateY":-2 * translate}]
                          }
                };
              }}/>);
      })}
    </ReactNative.View>);
}

// js.react-native.ui-spinner/SpinnerValues [108]
export function SpinnerValues({
  max,
  min,
  onChange,
  value,
  editable,
  setValue,
  styleDigit,
  styleDigitText,
  styleDecimal,
  styleDecimalText,
  decimal = 0
}){
  let arrDigits = [];
  let arrTotal = Math.ceil(Math.log10(max + 1.0E-4));
  for(let i = 0; i < Math.max(arrTotal,1 + decimal); i = (i + 1)){
    if((i == decimal) && (0 < i)){
      arrDigits.unshift({"type":"decimal"});
    }
    arrDigits.unshift({"type":"digit","order":i});
  };
  let digitFn = function ({order,type},i){
    let limit = Math.pow(10,order);
    let hideDigit = (0 == decimal) ? (value < limit) : false;
    if(type == "digit"){
      return (
        <ReactNative.View key={"digit" + i} style={hideDigit ? {"opacity":0} : null}>
          <SpinnerDigit
            index={Math.floor(value / Math.round(Math.pow(10,order)))}
            style={styleDigit}
            styleText={styleDigitText}
            editable={editable}/>
        </ReactNative.View>);
    }
    else if(type == "decimal"){
      return (
        <SpinnerStatic
          key={"decimal" + i}
          text="."
          style={[{"width":5},styleDecimal]}
          styleText={styleDecimalText}
          editable={editable}/>);
    }
  };
  return (
    <React.Fragment>{arrDigits.map(digitFn)}</React.Fragment>);
}

// js.react-native.ui-spinner/useSpinnerPosition [163]
export function useSpinnerPosition(value,setValue,valueRef,min,max,stride){
  let position = React.useCallback(new ReactNative.Animated.Value(0),[]);
  let prevRef = React.useRef(value);
  React.useEffect(function (){
    position.addListener(function (){
      let {_offset,_value} = position;
      let nValue = math.clamp(min,max,valueRef.current - Math.round(_value / (stride || 8)));
      if(nValue != prevRef.current){
        setValue(nValue);
        prevRef.current = nValue;
      }
    });
  },[]);
  return position;
}

// js.react-native.ui-spinner/Spinner [183]
export function Spinner({
  theme,
  themePipeline,
  disabled,
  min,
  max,
  panDirection,
  panStride,
  value,
  setValue,
  style,
  styleText,
  chord,
  onHoverIn,
  onHoverOut,
  ...rprops
}){
  let [__value,__setValue] = React.useState(value);
  let __valueRef = React.useRef(__value);
  let [styleStatic,transformFn] = spinnerTheme({theme,themePipeline,...rprops});
  let position = useSpinnerPosition(__value,__setValue,__valueRef,min,max,panStride);
  let {panHandlers,touchable} = physical_edit.usePanTouchable({
    disabled,
    "chord":Object.assign({"value":__value},chord),
    ...rprops
  },panDirection || "vertical",position,false);
  let {hovering,pressing,setHovering,setPressing} = touchable;
  React.useEffect(function (){
    __valueRef.current = __value;
  },[pressing]);
  React.useEffect(function (){
    if(!pressing){
      setValue(__value);
    }
  },[pressing,__value]);
  React.useEffect(function (){
    if(value != __value){
      __setValue(value);
    }
  },[value]);
  let iconElem = (
    <ReactNative.View
      key="icon"
      style={{
          "zIndex":-10,
          "transform":[
                  {
                        "rotateZ":(panDirection == "horizontal") ? "45deg" : "-45deg"
                      }
                ]
        }}>
      <RNIcon
        name="resize-full-screen"
        style={{"color":xtd.get_in(styleStatic,[0,"color"]),"paddingLeft":5}}
        size={15}/>
    </ReactNative.View>);
  return (
    <physical_base.Box
      indicators={touchable.indicators}
      chord={touchable.chord}
      onMouseEnter={function (e){
          setHovering(true);
          if(onHoverIn){
            onHoverIn(e);
          }
        }}
      onMouseLeave={function (e){
          setHovering(false);
          if(onHoverOut){
            onHoverOut(e);
          }
        }}
      onMouseUp={function (){
          setPressing(false);
        }}
      style={[
          {
                "overflow":"hidden",
                "flexDirection":"row",
                "alignItems":"center",
                "padding":5
              },
          styleStatic,
          ReactNative.Platform.select({"web":{"userSelect":"none","cursor":"default"}}),
          ...xtd.arrayify(style)
        ]}
      transformations={transformFn}
      children={[
          (
                <SpinnerValues
                  key="values"
                  editable={true}
                  value={__value}
                  setValue={__setValue}
                  min={min}
                  max={max}
                  {...rprops}/>),
          iconElem,
          (
                <ReactNative.View
                  key="background"
                  style={{"position":"absolute","height":"100%","width":"100%"}}/>)
        ]}
      {...Object.assign(touchable,panHandlers)}/>);
}