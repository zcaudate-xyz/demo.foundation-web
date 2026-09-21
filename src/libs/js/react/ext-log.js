import React from 'react'

import * as event_log from '../../xt/event/base-log.js'

// js.react.ext-log/makeLog [8]
export function makeLog(m){
  return React.useRef(event_log.new_log(m)).current;
}

// js.react.ext-log/listenLogLatest [14]
export function listenLogLatest(log,meta){
  let [latest,setLatest] = React.useState(event_log.get_last(log));
  React.useEffect(function (){
    let listener_id = Math.random().toString(36).substr(2,4);
    event_log.add_listener(log,listener_id,function (id,data,t,meta){
      setLatest({data,id,meta,t});
    },meta);
    return function (){
      event_log.remove_listener(log,listener_id);
    };
  },[log]);
  return latest;
}