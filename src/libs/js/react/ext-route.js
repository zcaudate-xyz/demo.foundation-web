import React from 'react'

import * as event_route from '../../xt/event/base-route.js'

import * as xtd from '../../xt/lang/common-data.js'

import * as r from '../react.js'

// js.react.ext-route/makeRoute [7]
export function makeRoute(initial){
  return React.useRef(event_route.make_route(initial)).current;
}

// js.react.ext-route/listenRouteTree [13]
export function listenRouteTree(route){
  let getFn = React.useRef(function (){
    return xtd.clone_nested(route["tree"]);
  }).current;
  let [tree,changeTree] = React.useState(getFn);
  React.useEffect(function (){
    let listener_id = Math.random().toString(36).substr(2,4);
    event_route.add_url_listener(route,listener_id,function (__unused0,__unused1,__unused2,__unused3){
      return changeTree(getFn);
    });
    return function (){
      return event_route.remove_listener(route,listener_id);
    };
  },[]);
  return tree;
}

// js.react.ext-route/listenRouteUrl [28]
export function listenRouteUrl(route){
  let getFn = React.useRef(function (){
    return event_route.get_url(route);
  }).current;
  let [url,changeUrl] = React.useState(getFn);
  React.useEffect(function (){
    let listener_id = Math.random().toString(36).substr(2,4);
    event_route.add_url_listener(route,listener_id,function (__unused0,__unused1,__unused2,__unused3){
      return changeUrl(getFn);
    });
    return function (){
      return event_route.remove_listener(route,listener_id);
    };
  },[]);
  return url;
}

// js.react.ext-route/useRouteUrl [43]
export function useRouteUrl(route){
  let url = listenRouteUrl(route);
  let setUrl = React.useRef(function (url,terminate){
    return event_route.set_url(route,url,terminate);
  }).current;
  return [url,setUrl];
}

// js.react.ext-route/listenRouteSegment [53]
export function listenRouteSegment(route,path,defaultSegment){
  let listener_id = React.useRef(Math.random().toString(36).substr(2,4)).current;
  let [segment,changeSegment] = React.useState(event_route.get_segment(route,path) || defaultSegment);
  React.useEffect(function (){
    event_route.add_path_listener(route,path,listener_id,function (__unused0,__unused1,__unused2,__unused3){
      return changeSegment(event_route.get_segment(route,path) || defaultSegment);
    });
    return function (){
      return event_route.remove_listener(route,listener_id);
    };
  },[path]);
  return segment;
}

// js.react.ext-route/useRouteSegment [71]
export function useRouteSegment(route,path,defaultSegment){
  let pathRef = r.useFollowRef(path);
  let segment = listenRouteSegment(route,pathRef.current);
  let setSegment = React.useRef(function (segment){
    return event_route.set_segment(route,pathRef.current,segment);
  }).current;
  React.useEffect(function (){
    if((null == segment) && defaultSegment){
      setSegment(defaultSegment);
    }
  },[]);
  return [segment || defaultSegment,setSegment];
}

// js.react.ext-route/listenRouteParam [87]
export function listenRouteParam(route,param,defaultVal){
  let listener_id = React.useRef(Math.random().toString(36).substr(2,4)).current;
  let [value,changeValue] = React.useState(event_route.get_param(route,param) || defaultVal);
  React.useEffect(function (){
    event_route.add_param_listener(route,param,listener_id,function (__unused0,__unused1,__unused2,__unused3){
      return changeValue(event_route.get_param(route,param) || defaultVal);
    });
    return function (){
      return event_route.remove_listener(route,listener_id);
    };
  },[param]);
  return value;
}

// js.react.ext-route/useRouteParam [104]
export function useRouteParam(route,param,defaultVal,defaultFn){
  defaultFn = (defaultFn || (function (x){
    return x;
  }));
  let paramRef = r.useFollowRef(param);
  let value = defaultFn(listenRouteParam(route,param));
  let setValue = React.useRef(function (value){
    return event_route.set_param(route,paramRef.current,value);
  }).current;
  React.useEffect(function (){
    if((null == value) && defaultVal){
      setValue(defaultVal);
    }
  },[]);
  return [value || defaultVal,setValue];
}

// js.react.ext-route/useRouteParamFlag [122]
export function useRouteParamFlag(route,param,flagVal,defaultVal){
  let [value,setValue] = useRouteParam(route,param,defaultVal);
  let [flag,setFlag] = [
    value == flagVal,
    function (flag){
      flag ? setValue(flagVal) : setValue(null);
    }
  ];
  return [flag,setFlag];
}