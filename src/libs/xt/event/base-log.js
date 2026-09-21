import * as event_common from './base-listener.js'

import * as xtd from '../lang/common-data.js'

// xt.event.base-log/new-log [9]
export function new_log(m){
  return event_common.blank_container("event.log",Object.assign({
    "last":null,
    "processed":[],
    "cache":{},
    "interval":30000,
    "maximum":100,
    "callback":null,
    "listeners":{}
  },m));
}

// xt.event.base-log/get-count [26]
export function get_count(log){
  let {processed} = log;
  return processed.length;
}

// xt.event.base-log/get-last [33]
export function get_last(log){
  let {processed} = log;
  return processed[processed.length + -1];
}

// xt.event.base-log/get-head [40]
export function get_head(log,n){
  let {processed} = log;
  let total = processed.length;
  return processed.slice(0,Math.min(n,total));
}

// xt.event.base-log/get-filtered [49]
export function get_filtered(log,pred){
  let {processed} = log;
  return processed.filter(pred);
}

// xt.event.base-log/get-tail [56]
export function get_tail(log,n){
  let {processed} = log;
  let total = processed.length;
  return processed.slice(Math.max(0,total - n),total);
}

// xt.event.base-log/get-slice [66]
export function get_slice(log,start,finish){
  let {processed} = log;
  let total = processed.length;
  return processed.slice(
    Math.min(Math.max(0,start),total),
    Math.min(Math.max(0,finish),total)
  );
}

// xt.event.base-log/clear [76]
export function clear(log){
  let {processed} = log;
  log["processed"] = [];
  return processed;
}

// xt.event.base-log/clear-cache [84]
export function clear_cache(log,t){
  if(null == t){
    t = Date.now();
  }
  let {cache,interval,last} = log;
  let out = [];
  if((null != last) && (interval >= (t - last))){
    return out;
  }
  log["last"] = t;
  let stale = [];
  for(let [k,kt] of Object.entries(cache)){
    if(interval < (t - kt)){
      stale.push(k);
    }
  };
  for(let k of stale){
    delete(cache[k]);
    out.push(k);
  };
  return out;
}

// xt.event.base-log/METHODS [107]
export var METHODS = {
  "count":{"handler":get_count,"input":[]},
  "last":{"handler":get_last,"input":[]},
  "tail":{"handler":get_tail,"input":[{"symbol":"n","type":"integer"}]},
  "head":{"handler":get_head,"input":[{"symbol":"n","type":"integer"}]},
  "slice":{
    "handler":get_slice,
    "input":[
      {"symbol":"start","type":"integer"},
      {"symbol":"finish","type":"integer"}
    ]
  },
  "clear":{"handler":clear,"input":[]},
  "clear_cache":{
    "handler":clear_cache,
    "input":[{"symbol":"t","type":"integer"}]
  }
};

// xt.event.base-log/queue-entry [133]
export function queue_entry(log,input,key_fn,data_fn,t){
  if(null == t){
    t = Date.now();
  }
  let {cache,callback,listeners,maximum,processed} = log;
  let key = key_fn ? key_fn(input,t) : t;
  let data = data_fn(input);
  clear_cache(log,t);
  if((null == key) || !(null == cache[key])){
    return null;
  }
  else{
    cache[key] = t;
    xtd.arr_pushl(processed,xtd.clone_nested(data),maximum);
    if(callback){
      callback(data,t);
    }
    for(let [id,listener_entry] of Object.entries(listeners)){
      let {callback,meta} = listener_entry;
      if(callback){
        callback(id,data,t,meta);
      }
    };
    return data;
  }
}

// xt.event.base-log/add-listener [163]
export function add_listener(log,listener_id,callback,meta){
  return event_common.add_listener(log,listener_id,"log",callback,meta,null);
}

// xt.event.base-log/remove-listener [173]
export var remove_listener = event_common.remove_listener;

// xt.event.base-log/list-listeners [177]
export var list_listeners = event_common.list_listeners;