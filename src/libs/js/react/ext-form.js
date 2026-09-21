import React from 'react'

import * as xtt from '../../xt/lang/common-tree.js'

import * as xtd from '../../xt/lang/common-data.js'

import * as event_form from '../../xt/event/base-form.js'

import * as k from '../../xt/lang/common-lib.js'

import * as r from '../react.js'

// js.react.ext-form/makeFree [17]
export function makeFree(initial,keys){
  let initialRef = r.useFollowRef(initial);
  return React.useRef(event_form.make_form(function (){
    return xtd.obj_pick(initialRef.current(),keys);
  },xtd.arr_juxt(keys,k.identity,function (){
    return [];
  }))).current;
}

// js.react.ext-form/makeFreeEdit [29]
export function makeFreeEdit(dataFn,dataKeys,dataArgs){
  let getData = function (){
    let data = dataFn(...dataArgs);
    let out = {};
    for(let k of dataKeys){
      out[k] = data[k];
    };
    return out;
  };
  let form = makeFree(getData,dataKeys);
  let isChanged = function (){
    return xtd.not_emptyp(xtd.obj_difference(event_form.get_data(form),getData()));
  };
  return {form,isChanged};
}

// js.react.ext-form/checkPrint [49]
export function checkPrint(meta){
  let print = meta["debug/print"];
  if(true == print){
    return true;
  }
  else if((null != print) && ("object" == (typeof print)) && !Array.isArray(print)){
    for(let [key,v] of Object.entries(print)){
      let term = meta[key];
      if(xtd.is_emptyp(xtd.arr_intersection(xtd.arrayify(v),xtd.arrayify(term)))){
        return false;
      }
    };
    return true;
  }
  return false;
}

// js.react.ext-form/makeForm [66]
export function makeForm(initial,validators){
  let initialRef = r.useFollowRef(initial);
  return React.useRef(event_form.make_form(function (){
    return initialRef.current();
  },validators)).current;
}

// js.react.ext-form/useListener [75]
export function useListener(form,fields,{dataField,getData,getPassed,getResult,getStatus},meta){
  dataField = (dataField || "data");
  let [data,setData] = React.useState(getData);
  let [result,setResult] = React.useState(getResult);
  let passedRef = React.useRef();
  let statusRef = React.useRef();
  React.useEffect(function (){
    let listener_id = Math.random().toString(36).substr(2,4);
    event_form.add_listener(form,listener_id,fields,function (id,data,t,meta){
      let {type} = data;
      if(checkPrint(meta)){
        console.log("PRINTFORM",getData(),meta);
      }
      if((type == "form.data") && getData){
        setData(getData);
      }
      else if(type == "form.validation"){
        if(getResult){
          let nresult = getResult();
          if(meta["validation/all"]){
            setResult(nresult);
          }
          else if(meta["validation/passed"]){
            let npassed = getPassed(nresult);
            if(npassed != passedRef.current){
              setResult(nresult);
              passedRef.current = npassed;
            }
          }
          else{
            let nstatus = getStatus(nresult);
            if(!xtt.eq_nested(nstatus,statusRef.current)){
              setResult(nresult);
              statusRef.current = nstatus;
            }
          }
        }
      }
    },meta);
    return function (){
      event_form.remove_listener(form,listener_id);
    };
  },[]);
  return {[dataField]:data,"result":result};
}

// js.react.ext-form/getFieldPassed [131]
export function getFieldPassed(field){
  return "ok" == field["status"];
}

// js.react.ext-form/getFieldStatus [137]
export function getFieldStatus(field){
  let {id,status} = field;
  return {id,status};
}

// js.react.ext-form/listenFields [144]
export function listenFields(form,fields,meta){
  let getData = function (){
    return xtd.arr_juxt(fields,k.identity,function (field){
      return event_form.get_field(form,field);
    });
  };
  let getResult = function (){
    return xtd.arr_juxt(fields,k.identity,function (field){
      return event_form.get_field_result(form,field);
    });
  };
  let getStatus = function (result){
    return xtd.obj_map(result,getFieldStatus);
  };
  let getPassed = function (result){
    return xtd.arr_every(xtd.obj_vals(result),getFieldPassed);
  };
  return useListener(
    form,
    fields,
    {getData,getPassed,getResult,getStatus,"dataField":"data"},
    Object.assign({"fn/fields":fields},meta)
  );
}

// js.react.ext-form/listenFieldsData [167]
export function listenFieldsData(form,fields,meta){
  let getData = function (){
    return xtd.arr_juxt(fields,k.identity,function (field){
      return event_form.get_field(form,field);
    });
  };
  return useListener(
    form,
    fields,
    {getData,"dataField":"data"},
    Object.assign({"fn/fields":fields},meta)
  );
}

// js.react.ext-form/listenField [180]
export function listenField(form,field,meta){
  let getValue = function (){
    return event_form.get_field(form,field);
  };
  let getResult = function (){
    return Object.assign({},event_form.get_field_result(form,field));
  };
  return useListener(
    form,
    [field],
    {getResult,"getData":getValue,"getStatus":getFieldStatus,"getPassed":getFieldPassed,"dataField":"value"},
    Object.assign({"fn/fields":[field]},meta)
  );
}

// js.react.ext-form/listenFieldValue [196]
export function listenFieldValue(form,field,meta){
  let getValue = function (){
    return event_form.get_field(form,field);
  };
  let {value} = useListener(
    form,
    [field],
    {"getData":getValue,"dataField":"value"},
    Object.assign({"fn/fields":[field]},meta)
  );
  return value;
}

// js.react.ext-form/listenFieldResult [208]
export function listenFieldResult(form,field,meta){
  let getResult = function (){
    return Object.assign({},event_form.get_field_result(form,field));
  };
  let {result} = useListener(
    form,
    [field],
    {getResult,"getStatus":getFieldStatus,"getPassed":getFieldPassed,"dataField":"value"},
    Object.assign({"fn/fields":[field]},meta)
  );
  return result;
}

// js.react.ext-form/listenForm [222]
export function listenForm(form,meta){
  let {validators} = form;
  let fields = Object.keys(validators);
  let getData = function (){
    return Object.assign({},event_form.get_data(form));
  };
  let getResult = function (){
    return Object.assign({},event_form.get_result(form));
  };
  let getStatus = function (result){
    let {fields} = result;
    return xtd.obj_map(fields,getFieldStatus);
  };
  let getPassed = function (result){
    return event_form.check_all_passed({"result":result});
  };
  return useListener(
    form,
    fields,
    {getData,getPassed,getResult,getStatus,"dataField":"data"},
    Object.assign({"fn/fields":fields},meta)
  );
}

// js.react.ext-form/listenFormData [243]
export function listenFormData(form,meta){
  let {validators} = form;
  let fields = Object.keys(validators);
  let getData = function (){
    return Object.assign({},event_form.get_data(form));
  };
  return useListener(
    form,
    fields,
    {getData,"dataField":"data"},
    Object.assign({"fn/fields":fields},meta)
  )["data"];
}

// js.react.ext-form/listenFormResult [257]
export function listenFormResult(form,meta){
  let {validators} = form;
  let fields = Object.keys(validators);
  let getResult = function (){
    return Object.assign({},event_form.get_result(form));
  };
  let getStatus = function (result){
    let {fields} = result;
    return xtd.obj_map(fields,getFieldStatus);
  };
  let getPassed = function (result){
    return event_form.check_all_passed({"result":result});
  };
  return useListener(
    form,
    fields,
    {getPassed,getResult,getStatus,"dataField":"data"},
    Object.assign({"fn/fields":fields},meta)
  )["result"];
}

// js.react.ext-form/useSubmitField [277]
export function useSubmitField({
  form,
  field,
  setResult,
  explicit,
  keep,
  meta,
  onCheck = (function (){
  return true;
}),
  isMounted = (function (){
  return true;
})
}){
  let fields = xtd.arrayify(field);
  let [clearing,setClearing] = React.useState(function (){
    return false;
  });
  let {data} = listenFields(form,fields,meta);
  let validateFields = function (){
    for(let field of fields){
      let fdata = event_form.get_field(form,field);
      if(explicit || k.is_booleanp(fdata) || k.is_numberp(fdata) || xtd.not_emptyp(fdata)){
        event_form.validate_field(form,field);
      }
    };
  };
  let onActionReset = function (){
    setResult(null);
    if(!keep){
      for(let field of fields){
        event_form.reset_field_data(form,field);
      };
    }
    new Promise(function (resolve,reject){
      setTimeout(function (){
        new Promise(function (inner_resolve){
          inner_resolve((function (){
            for(let field of fields){
              event_form.reset_field_validator(form,field);
            };
            if(isMounted()){
              setClearing(true);
            }
          })());
        }).then(function (value){
          resolve(value);
        }).catch(function (err){
          reject(err);
        });
      },100);
    });
  };
  let onActionCheck = function (){
    return onCheck() && fields.every(function (field){
      return event_form.check_field_passed(form,field);
    });
  };
  React.useEffect(function (){
    validateFields();
  },[]);
  React.useEffect(function (){
    if(clearing){
      setTimeout(function (){
        if(isMounted()){
          validateFields();
        }
      },100);
      setClearing(false);
    }
  },[clearing]);
  return {onActionCheck,onActionReset};
}

// js.react.ext-form/useSubmitForm [329]
export function useSubmitForm({
  form,
  setResult,
  explicit,
  keep,
  meta,
  onCheck = (function (){
  return true;
}),
  isMounted = (function (){
  return true;
})
}){
  let [clearing,setClearing] = React.useState(function (){
    return false;
  });
  let {data} = listenForm(form,meta);
  let onActionReset = function (){
    setResult(null);
    if(!keep){
      event_form.reset_all_data(form);
    }
    new Promise(function (resolve,reject){
      setTimeout(function (){
        new Promise(function (inner_resolve){
          inner_resolve((function (){
            event_form.reset_all_validators(form);
            if(isMounted()){
              setClearing(true);
            }
          })());
        }).then(function (value){
          resolve(value);
        }).catch(function (err){
          reject(err);
        });
      },100);
    });
  };
  let onActionCheck = function (){
    return onCheck() && event_form.check_all_passed(form);
  };
  let validateFilled = function (){
    for(let vkey of xtd.obj_keys(form.validators)){
      let v = data[vkey];
      if(!k.is_booleanp(v) && !k.is_numberp(v) && xtd.not_emptyp(v)){
        event_form.validate_all(form);
        return;
      }
    };
  };
  React.useEffect(function (){
    if(explicit){
      event_form.validate_all(form);
    }
    else{
      validateFilled();
    }
  },[]);
  React.useEffect(function (){
    if(clearing){
      setTimeout(function (){
        if(explicit){
          event_form.validate_all(form);
        }
        else{
          validateFilled();
        }
      },100);
      setClearing(false);
    }
  },[clearing]);
  return {onActionCheck,onActionReset};
}