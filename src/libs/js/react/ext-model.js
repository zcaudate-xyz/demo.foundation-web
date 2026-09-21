import React from 'react'

import * as xtt from '../../xt/lang/common-tree.js'

import * as xtd from '../../xt/lang/common-data.js'

import * as k from '../../xt/lang/common-lib.js'

import * as r from '../react.js'

import * as event_model from '../../xt/event/base-model.js'

// js.react.ext-model/throttled-setter [14]
export function throttled_setter(setResult,delay){
  let throttle = {"val":null,"thread":null,"mounted":true};
  let throttled_fn = function (result){
    let t = Date.now();
    if(k.not_nilp(throttle["thread"])){
      throttle["val"] = result;
    }
    else{
      throttle["val"] = result;
      setResult(result);
      throttle["thread"] = new Promise(function (resolve,reject){
        setTimeout(function (){
          new Promise(function (inner_resolve){
            inner_resolve((function (){
              if((throttle["val"] != result) && throttle["mounted"]){
                setResult(throttle["val"]);
              }
              delete(throttle["thread"]);
            })());
          }).then(function (value){
            resolve(value);
          }).catch(function (err){
            reject(err);
          });
        },delay);
      });
    }
  };
  return [throttled_fn,throttle];
}

// js.react.ext-model/refresh-view [40]
export function refresh_view(view,opts){
  let [context,disabled] = event_model.pipeline_prep(view,opts);
  let {acc} = context;
  return event_model.pipeline_run(context,disabled,function (handler_fn,context,{error,success}){
    return Promise.resolve().then(function (){
      return handler_fn(context);
    }).then(success).catch(error);
  },null,k.identity).then(function (){
    return acc;
  });
}

// js.react.ext-model/refresh-args [60]
export function refresh_args(view,args,opts){
  event_model.set_input(view,{"data":args});
  return refresh_view(view,opts);
}

// js.react.ext-model/refresh-view-remote [68]
export function refresh_view_remote(view,save_output,opts){
  if(xtd.get_in(view,["pipeline","remote","handler"])){
    let [context,disabled] = event_model.pipeline_prep(view,opts);
    let {acc} = context;
    return event_model.pipeline_run_remote(context,save_output,function (handler_fn,context,{error,success}){
      return Promise.resolve().then(function (){
        return handler_fn(context);
      }).then(success).catch(error);
    },null,k.identity).then(function (){
      return acc;
    });
  }
}

// js.react.ext-model/refresh-args-remote [89]
export function refresh_args_remote(view,args,save_output,opts){
  event_model.set_input(view,{"data":args});
  return refresh_view_remote(view,save_output,opts);
}

// js.react.ext-model/refresh-view-sync [96]
export function refresh_view_sync(view,save_output,opts){
  if(xtd.get_in(view,["pipeline","sync","handler"])){
    let [context,disabled] = event_model.pipeline_prep(view,opts);
    let {acc} = context;
    return event_model.pipeline_run_sync(context,save_output,function (handler_fn,context,{error,success}){
      return Promise.resolve().then(function (){
        return handler_fn(context);
      }).then(success).catch(error);
    },null,k.identity).then(function (){
      return acc;
    });
  }
}

// js.react.ext-model/refresh-args-sync [116]
export function refresh_args_sync(view,args,save_output,opts){
  event_model.set_input(view,{"data":args});
  return refresh_view_sync(view,save_output,opts);
}

// js.react.ext-model/make-view [123]
export function make_view(main_handler,pipeline,default_args,default_output,default_process,options){
  let view = event_model.create_model(
    main_handler,
    pipeline,
    default_args,
    default_output,
    default_process,
    options
  );
  event_model.init_model(view);
  view["init"] = refresh_view(view);
  return view;
}

// js.react.ext-model/makeViewRaw [143]
export function makeViewRaw({defaultArgs,defaultOutput,defaultProcess,handler,options,pipeline}){
  return make_view(
    handler,
    pipeline || {},
    defaultArgs,
    defaultOutput,
    defaultProcess,
    options
  );
}

// js.react.ext-model/makeView [160]
export function makeView({defaultArgs,defaultOutput,defaultProcess,handler,options,pipeline}){
  return React.useRef(makeViewRaw(
    {defaultArgs,defaultOutput,defaultProcess,handler,options,pipeline}
  )).current;
}

// js.react.ext-model/TYPES [177]
export var TYPES = {
  "input":[event_model.get_input,"current"],
  "output":[event_model.get_output,"current"],
  "pending":[event_model.get_output,"pending"],
  "elapsed":[event_model.get_output,"elapsed"],
  "disabled":[event_model.get_output,"disabled"],
  "success":[event_model.get_success,null,"output"]
};

// js.react.ext-model/initViewBase [185]
export function initViewBase(view,dest_key,{getResult,meta,pred,resultRef,resultTag,setResult}){
  let {resultFn,resultPrint} = meta || {};
  React.useEffect(function (){
    let listener_id = Math.random().toString(36).substr(2,4);
    event_model.add_listener(view,listener_id,function (id,data,t,meta){
      let event = xtd.obj_clone(data);
      event["meta"] = meta;
      let nresult = getResult();
      if((k.nilp(resultTag) || (resultTag == event.data.tag)) && (("view.output" != event.type) || (event.data.type == (dest_key || "output"))) && !xtt.eq_nested(resultRef.current,nresult)){
        setResult(nresult);
      }
      if(resultFn){
        resultFn(event);
      }
      if(k.is_functionp(resultPrint)){
        resultPrint({event,nresult,resultTag});
      }
    },meta,pred);
    return function (){
      return event_model.remove_listener(view,listener_id);
    };
  },[]);
}

// js.react.ext-model/listenView [227]
export function listenView(view,type,meta,dest_key,tag_key){
  let [tfn,tkey,tevent] = TYPES[type];
  tevent = (tevent || type);
  let getResult = function (){
    let out = tfn(view);
    return xtd.clone_shallow(tkey ? out[tkey] : out);
  };
  let [result,setResult] = React.useState(getResult);
  let resultRef = r.useFollowRef(result);
  initViewBase(view,dest_key,{getResult,meta,resultRef,setResult,"resultTag":tag_key,"resultFn":xtd.get_in(meta,"resultFn"),"pred":function (event){
      return event["type"] == ("view." + tevent);
    }});
  return result;
}

// js.react.ext-model/listenViewOutput [253]
export function listenViewOutput(view,types,meta,dest_key,tag_key){
  let getOutput = function (){
    return xtd.obj_clone(event_model.get_output(view,dest_key));
  };
  let [output,setOutput] = React.useState(getOutput);
  let wrap = r.useIsMountedWrap();
  let outputRef = r.useFollowRef(output);
  let pred = function (event){
    return xtd.arr_some(types,function (type){
      return event["type"] == ("view." + type);
    });
  };
  initViewBase(
    view,
    dest_key,
    {meta,pred,"setResult":wrap(setOutput),"getResult":getOutput,"resultRef":outputRef,"resultTag":tag_key,"resultFn":xtd.get_in(meta,"resultFn")}
  );
  return output;
}

// js.react.ext-model/listenViewThrottled [279]
export function listenViewThrottled(view,delay,meta,dest_key){
  let getResult = function (){
    return xtd.clone_shallow(event_model.get_success(view));
  };
  let [result,setResult] = React.useState(getResult);
  let resultRef = r.useFollowRef(result);
  React.useEffect(function (){
    let listener_id = Math.random().toString(36).substr(2,4);
    let [setThrottled,throttle] = throttled_setter(setResult,delay);
    event_model.add_listener(view,listener_id,function (__unused0,__unused1,__unused2,__unused3){
      let nresult = getResult();
      if(!(resultRef.current == nresult)){
        setThrottled(nresult);
      }
    },meta,function (event){
      return "view.output" == event["type"];
    });
    return function (){
      throttle["mounted"] = false;
      event_model.remove_listener(view,listener_id);
    };
  },[]);
  return result;
}

// js.react.ext-model/wrap-pending [310]
export function wrap_pending(f,with_pending){
  if(with_pending){
    return f;
  }
  else{
    return function (view,...args){
      event_model.set_pending(view,true);
      return Promise.resolve().then(function (){
        return f(view,...args);
      }).then(function (res){
        event_model.set_pending(view,false);
        return res;
      });
    };
  }
}

// js.react.ext-model/refreshArgsFn [327]
export function refreshArgsFn(view,args,opts){
  if(xtd.arr_every(args,k.not_nilp)){
    return refresh_args(view,args,opts).then(function (acc){
      let [ok,data] = xtd.get_in(acc,["main"]);
      if(!ok){
        throw data;
      }
      if(opts.remote == "always"){
        return wrap_pending(refresh_args_remote,opts.with_pending)(view,args,true,opts);
      }
      else if(opts.remote == "none"){
        return null;
      }
      else{
        if(k.nilp(opts.remote_check) || opts.remote_check(args)){
          if(xtd.not_emptyp(data)){
            return refresh_args_sync(view,args,false,opts);
          }
          else{
            return refresh_args_remote(view,args,true,opts);
          }
        }
      }
    });
  }
  else{
    return function (){
      return event_model.set_output(view,null);
    };
  }
}

// js.react.ext-model/useRefreshArgs [357]
export function useRefreshArgs(view,args,opts){
  opts = (opts || {});
  React.useEffect(function (){
    return refreshArgsFn(view,args,opts);
  },[JSON.stringify(args)]);
}

// js.react.ext-model/listenSuccess [366]
export function listenSuccess(view,args,opts,meta,tag_key){
  opts = (opts || {});
  let output = r.useStablized(
    listenView(view,"success",meta,opts.dest,tag_key),
    opts.stablized
  );
  useRefreshArgs(view,args,opts);
  return (opts.then || k.identity)(output || opts.default);
}

// js.react.ext-model/handler-base [382]
export function handler_base(handler,m){
  return xtd.obj_assign_nested({
    "handler":handler,
    "defaultArgs":[],
    "defaultInit":{"disabled":true}
  },m);
}

// js.react.ext-model/oneshot-fn [393]
export function oneshot_fn(){
  let v = true;
  return function (ctx){
    if(v){
      v = false;
      return true;
    }
    return false;
  };
}

// js.react.ext-model/input-disabled? [404]
export function input_disabledp({input}){
  return k.nilp(input) || input["disabled"];
}

// js.react.ext-model/input-data [411]
export function input_data({input}){
  return input && input["data"];
}

// js.react.ext-model/input-data-nil? [417]
export function input_data_nilp({input}){
  return k.nilp(input) || input["disabled"] || k.nilp(input["data"]);
}

// js.react.ext-model/output-empty? [425]
export function output_emptyp({view}){
  return xtd.is_emptyp(event_model.get_current(view));
}