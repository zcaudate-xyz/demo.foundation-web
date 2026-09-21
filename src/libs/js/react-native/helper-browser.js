import React from 'react'

import * as ReactNative from 'react-native'

import * as event_route from '../../xt/event/base-route.js'

import * as ext_route from '../react/ext-route.js'

import * as k from '../../xt/lang/common-lib.js'

import * as str from '../../xt/lang/common-string.js'

// js.react-native.helper-browser/getHash [12]
export function getHash(){
  if(window && window.location){
    return window.location.hash;
  }
}

// js.react-native.helper-browser/getHashRoute [20]
export function getHashRoute(){
  let hash = getHash();
  return hash ? str.substring(hash,2) : "";
}

// js.react-native.helper-browser/useHashRoute [30]
export function useHashRoute(route){
  let [routeUrl,setRouteUrl] = ext_route.useRouteUrl(route);
  React.useEffect(function (){
    let listener = function (){
      let hash = getHash();
      if(k.not_nilp(hash) && (hash != ("#/" + event_route.get_url(route)))){
        setRouteUrl(getHashRoute(),true);
      }
    };
    if("web" == ReactNative.Platform.OS){
      window.addEventListener("popstate",listener);
      return function (){
        return window.removeEventListener("popstate",listener);
      };
    }
  },[]);
  React.useEffect(function (){
    if(k.not_nilp(routeUrl) && ("web" == ReactNative.Platform.OS)){
      window.location.hash = ("/" + routeUrl);
    }
  },[routeUrl]);
}

// js.react-native.helper-browser/setHashParam [53]
export function setHashParam(key,value,path){
  let route = event_route.make_route(getHashRoute());
  event_route.set_param(route,key,value,path);
  window.location.hash = ("/" + event_route.get_url(route));
}