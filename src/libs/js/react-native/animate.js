import * as ReactNative from 'react-native'

import React from 'react'

import * as xtd from '../../xt/lang/common-data.js'

import * as k from '../../xt/lang/common-lib.js'

import * as r from '../react.js'

import * as event_animate from '../../xt/event/base-animate.js'

// js.react-native.animate/isAnimatedValue [100]
export function isAnimatedValue(x){
  return (null != x) && k.is_objectp(x["_listeners"]);
}

// js.react-native.animate/createTransition [111]
export function createTransition(indicator,tparams,[prev,curr],tf){
  return function (callback){
    if(indicator._value == curr){
      return;
    }
    let fparams = tparams[[prev,curr]] || tparams["default"] || {};
    let {type = "timing",onChange} = fparams;
    let f = {
      "timing":ReactNative.Animated.timing,
      "spring":ReactNative.Animated.spring,
      "decay":ReactNative.Animated.decay
    }[type];
    let params = Object.assign({"toValue":tf(curr),"useNativeDriver":false},fparams);
    let anim = f(indicator,params);
    anim.start(callback);
    return anim
  };
}

// js.react-native.animate/webUnitlessStyle [134]
export function webUnitlessStyle(key){
  return (key == "aspectRatio") || (key == "flex") || (key == "flexGrow") || (key == "flexShrink") || (key == "fontWeight") || (key == "lineHeight") || (key == "opacity") || (key == "order") || (key == "zIndex");
}

// js.react-native.animate/webTransformValue [148]
export function webTransformValue(key,value){
  if(k.is_arrayp(value)){
    let out = [];
    for(let v of value){
      out.push(webTransformValue(key,v));
    };
    return out.join(" ");
  }
  else if(("number" == (typeof value)) && ((key == "translate") || (key == "translate3d") || (key == "translateX") || (key == "translateY") || (key == "translateZ") || (key == "perspective"))){
    return value + "px";
  }
  else if(("number" == (typeof value)) && ((key == "rotate") || (key == "rotateX") || (key == "rotateY") || (key == "rotateZ") || (key == "skewX") || (key == "skewY"))){
    return value + "deg";
  }
  else{
    return value;
  }
}

// js.react-native.animate/webTransform [179]
export function webTransform(value){
  let out = [];
  for(let entry of xtd.arrayify(value)){
    if(k.is_objectp(entry)){
      for(let [key,v] of Object.entries(entry)){
        out.push(key + "(" + webTransformValue(key,v) + ")");
      };
    }
  };
  return out.join(" ");
}

// js.react-native.animate/webStyleValue [194]
export function webStyleValue(key,value){
  if(key == "transform"){
    return webTransform(value);
  }
  else if(("number" == (typeof value)) && !webUnitlessStyle(key)){
    return value + "px";
  }
  else{
    return value;
  }
}

// js.react-native.animate/webStyle [208]
export function webStyle(value){
  let out = {};
  for(let entry of xtd.arrayify(value)){
    if(k.is_objectp(entry)){
      xtd.obj_assign(out,entry);
    }
  };
  for(let [key,v] of Object.entries(out)){
    out[key] = webStyleValue(key,v);
  };
  return out;
}

// js.react-native.animate/setPropsWeb [220]
export function setPropsWeb(elem,props){
  if(elem && elem.style){
    for(let [k0,v0] of Object.entries(props || {})){
      if(props && props.hasOwnProperty && props.hasOwnProperty(k0)){
        if((k0 == "style") && (k.is_objectp(v0) || k.is_arrayp(v0))){
          xtd.obj_assign(elem.style,webStyle(v0));
        }
        else if((k0 == "text") && (("INPUT" == elem.tagName) || ("TEXTAREA" == elem.tagName))){
          elem.value = v0;
        }
        else if(k0 == "text"){
          elem.textContent = v0;
        }
        else{
          elem[k0] = v0;
        }
      }
    };
    return true;
  }
  return false;
}

// js.react-native.animate/getNativePropsTarget [248]
export function getNativePropsTarget(elem){
  let target = elem;
  if(target && target.getNativeRef && k.is_functionp(target.getNativeRef)){
    try{
      let nativeRef = target.getNativeRef();
      if(nativeRef){
        target = nativeRef;
      }
    }
    catch(e){

    }
  }
  if(target && !(target.setNativeProps && k.is_functionp(target.setNativeProps)) && target.getNode && k.is_functionp(target.getNode)){
    try{
      let nativeRef = target.getNode();
      if(nativeRef){
        target = nativeRef;
      }
    }
    catch(e){

    }
  }
  if(target && !(target.setNativeProps && k.is_functionp(target.setNativeProps)) && target._component){
    target = target._component;
  }
  return target;
}

// js.react-native.animate/callNativeProps [278]
export function callNativeProps(elem,props){
  if(elem && elem.setNativeProps && k.is_functionp(elem.setNativeProps)){
    try{
      elem.setNativeProps(props);
      return true;
    }
    catch(e){

    }
  }
  return false;
}

// js.react-native.animate/setPropsNative [291]
export function setPropsNative(elem,props){
  let target = getNativePropsTarget(elem);
  if(callNativeProps(target,props)){
    return true;
  }
  if(target && (target != elem) && callNativeProps(elem,props)){
    return true;
  }
  return false;
}

// js.react-native.animate/setPropsAll [304]
export function setPropsAll(elem,props){
  if(("web" == ReactNative.Platform.OS) && elem && elem.style){
    setPropsWeb(elem,props);
  }
  else{
    setPropsNative(elem,props);
  }
}

// js.react-native.animate/IMPL [316]
export var IMPL = {
  "create_val":function (v){
    return React.useCallback(new ReactNative.Animated.Value(v),[]);
  },
  "add_listener":function (aval,f){
    return aval.addListener(f);
  },
  "get_value":("web" == ReactNative.Platform.OS) ? (function (aval){
    if(Number.isInteger(aval._value)){
      return aval._value;
    }
    else{
      return Math.round(aval._value * 10) / 10;
    }
  }) : (function (aval){
    if(Number.isInteger(aval._value)){
      return aval._value;
    }
    else{
      return Math.round(aval._value * 20) / 20;
    }
  }),
  "set_value":function (aval,v){
    return aval.setValue(v);
  },
  "set_props":setPropsAll,
  "is_animated":isAnimatedValue,
  "create_transition":createTransition,
  "stop_transition":function (anim){
    return anim.stop();
  }
};

// js.react-native.animate/derive [345]
export function derive(f,arr){
  return event_animate.new_derived(IMPL,f,arr);
}

// js.react-native.animate/listenSingle [351]
export function listenSingle(ref,ind,f = function (){
  return {};
}){
  return event_animate.listen_single(IMPL,ref,ind,f);
}

// js.react-native.animate/useListenSingle [359]
export function useListenSingle(ind,f){
  let ref = React.useRef();
  React.useEffect(function (){
    listenSingle(ref,ind,f);
  },[]);
  return ref
}

// js.react-native.animate/listenArray [367]
export function listenArray(ref,arr,f){
  return event_animate.listen_array(IMPL,ref,arr,f);
}

// js.react-native.animate/useListenArray [373]
export function useListenArray(arr,f){
  let ref = React.useRef();
  React.useEffect(function (){
    listenArray(ref,arr,f);
  },[]);
  return ref
}

// js.react-native.animate/listenMap [382]
export function listenMap(ref,m,f){
  return event_animate.listen_map(IMPL,ref,m,f);
}

// js.react-native.animate/listenTransformations [388]
export function listenTransformations(ref,indicators,transformations,getChord){
  return event_animate.listen_transformations(IMPL,ref,indicators,transformations,getChord);
}

// js.react-native.animate/runWithCancel [394]
export function runWithCancel(animateFn,progressing,progressFn){
  return event_animate.run_with_cancel(IMPL,animateFn,progressing,progressFn);
}

// js.react-native.animate/runWithChained [400]
export function runWithChained(type,animateFn,progressing,progressFn){
  return event_animate.run_with_chained(IMPL,type,animateFn,progressing,progressFn);
}

// js.react-native.animate/runWith [406]
export function runWith(type,animateFn,progressing,progressFn){
  return event_animate.run_with(IMPL,type,animateFn,progressing,progressFn);
}

// js.react-native.animate/useProgess [416]
export function useProgess(callback){
  let progressing = React.useRef(event_animate.new_progressing()).current;
  let progressFn = React.useRef(function (info){
    if(callback){
      callback(progressing,info);
    }
  }).current;
  return [progressing,progressFn];
}

// js.react-native.animate/useBinaryIndicator [426]
export function useBinaryIndicator(flag,tparams,callback,type){
  tparams = (tparams || {});
  let [progressing,progressFn] = useProgess(callback);
  let {indicator,trigger_fn} = React.useRef(
    event_animate.make_binary_indicator(IMPL,flag,tparams,type || "cancel",progressing,progressFn)
  ).current;
  React.useEffect(function (){
    trigger_fn(flag);
  },[flag]);
  return indicator;
}

// js.react-native.animate/usePressIndicator [445]
export function usePressIndicator(flag,tparams,callback){
  return useBinaryIndicator(flag,tparams,callback,"chained-one");
}

// js.react-native.animate/useLinearIndicator [453]
export function useLinearIndicator(value,tparams,callback,type,checkFn){
  tparams = (tparams || {});
  let [progressing,progressFn] = useProgess(callback);
  let prev = React.useRef(value);
  let {indicator,trigger_fn} = React.useRef(event_animate.make_linear_indicator(IMPL,value,function (){
    return prev.current;
  },function (value){
    return prev.current = value;
  },tparams,type || "chained-all",progressing,progressFn,checkFn)).current;
  React.useEffect(function (){
    trigger_fn(value);
  },[value]);
  return indicator;
}

// js.react-native.animate/useIndexIndicator [478]
export function useIndexIndicator(value,tparams,callback){
  return useLinearIndicator(value,tparams,callback,"cancel");
}

// js.react-native.animate/useCircularIndicator [486]
export function useCircularIndicator(value,tparams,callback,type,modulo,checkFn){
  tparams = (tparams || {});
  let [progressing,progressFn] = useProgess(callback);
  let prev = React.useRef(value);
  let {indicator,trigger_fn} = React.useRef(event_animate.make_circular_indicator(IMPL,value,function (){
    return prev.current;
  },function (value){
    return prev.current = value;
  },tparams,type || "cancel",modulo,progressing,progressFn,checkFn)).current;
  React.useEffect(function (){
    trigger_fn(value);
  },[value]);
  return indicator;
}

// js.react-native.animate/usePosition [513]
export function usePosition({length,max = 10,min = 0,step = 1,value,setValue,flip}){
  let {forwardFn,reverseFn} = r.convertPosition(
    Object.assign({length,step},flip ? {"max":min,"min":max} : {max,min})
  );
  let position = React.useCallback(new ReactNative.Animated.Value(forwardFn(value)),[]);
  let prev = React.useRef();
  React.useEffect(function (){
    position.addListener(function (e){
      let nvalue = reverseFn(position._value);
      if(prev.current != nvalue){
        setValue(nvalue);
        prev.current = nvalue;
      }
    });
  },[]);
  return {forwardFn,position,reverseFn};
}

// js.react-native.animate/useRange [544]
export function useRange({
  length,
  max = 10,
  min = 0,
  step = 1,
  lower = 0,
  setLower,
  upper = 1,
  setUpper
}){
  let {forwardFn,reverseFn} = r.convertPosition({length,max,min,step});
  if(upper < lower){
    upper = (lower + step);
  }
  let positionUpper = React.useCallback(new ReactNative.Animated.Value(forwardFn(upper)),[]);
  let prevUpper = React.useRef();
  let positionLower = React.useCallback(new ReactNative.Animated.Value(forwardFn(lower)),[]);
  let prevLower = React.useRef();
  React.useEffect(function (){
    positionUpper.addListener(function (e){
      let nupper = reverseFn(positionUpper._value);
      if((prevUpper.current != nupper) && (lower <= nupper)){
        setUpper(nupper);
        prevUpper.current = nupper;
      }
    });
    positionLower.addListener(function (e){
      let nlower = reverseFn(positionLower._value);
      if((prevLower.current != nlower) && (nlower <= upper)){
        setLower(nlower);
        prevLower.current = nlower;
      }
    });
  },[]);
  return {forwardFn,positionLower,positionUpper,reverseFn};
}

// js.react-native.animate/useShowing [583]
export function useShowing(visible,indicatorParams,isMounted,onComplete){
  let vindicator = useBinaryIndicator(visible,indicatorParams);
  let [showing,setShowing] = React.useState(visible);
  let showingRef = r.useFollowRef(showing);
  React.useEffect(function (){
    if(visible){
      setShowing(true);
    }
  },[visible]);
  React.useEffect(function (){
    vindicator.addListener(function (){
      if(isMounted()){
        if(vindicator._value == 0){
          if(onComplete){
            onComplete(0);
          }
          if(showingRef.current){
            showingRef.current = false;
            setTimeout(function (){
              if(isMounted()){
                setShowing(false);
              }
            },100);
          }
        }
        if(vindicator._value == 1){
          if(onComplete){
            onComplete(1);
          }
        }
      }
    });
  },[]);
  return [visible || showing,vindicator];
}