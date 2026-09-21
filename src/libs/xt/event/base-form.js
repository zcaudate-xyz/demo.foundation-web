import * as event_common from './base-listener.js'

import * as xtd from '../lang/common-data.js'

import * as validate from './util-validate.js'

// xt.event.base-form/make-form [115]
export function make_form(initial,validators){
  let result = validate.create_result(validators);
  return event_common.make_container(
    initial,
    "event.form",
    {"result":result,"validators":validators}
  );
}

// xt.event.base-form/check-event [126]
export function check_event(event,fields){
  for(let field of fields){
    for(let evfield of event["fields"]){
      if(evfield == field){
        return true;
      }
    };
  };
  return false;
}

// xt.event.base-form/add-listener [136]
export function add_listener(form,listener_id,fields,callback,meta){
  fields = event_common.arrayify_path(fields);
  return event_common.add_listener(form,listener_id,"form",callback,Object.assign({"form/fields":fields},meta),function (event){
    return check_event(event,fields);
  });
}

// xt.event.base-form/remove-listener [150]
export var remove_listener = event_common.remove_listener;

// xt.event.base-form/list-listeners [154]
export var list_listeners = event_common.list_listeners;

// xt.event.base-form/trigger-all [158]
export function trigger_all(form,event_type){
  let {validators} = form;
  let fields = Object.keys(validators);
  return event_common.trigger_listeners(form,{"type":event_type,"fields":fields});
}

// xt.event.base-form/trigger-field [170]
export function trigger_field(form,fields,event_type){
  return event_common.trigger_listeners(form,{
    "type":event_type,
    "fields":event_common.arrayify_path(fields)
  });
}

// xt.event.base-form/set-field [180]
export function set_field(form,field,value){
  let {data} = form;
  data[field] = value;
  return trigger_field(form,field,"form.data");
}

// xt.event.base-form/get-field [188]
export function get_field(form,field){
  let {data} = form;
  return data[field];
}

// xt.event.base-form/toggle-field [195]
export function toggle_field(form,field){
  return set_field(form,field,!get_field(form,field));
}

// xt.event.base-form/field-fn [204]
export function field_fn(form,field){
  return function (value){
    return set_field(form,field,value);
  };
}

// xt.event.base-form/get-result [212]
export function get_result(form){
  return form["result"];
}

// xt.event.base-form/get-field-result [218]
export function get_field_result(form,field){
  let {result} = form;
  let {fields} = result;
  return fields[field];
}

// xt.event.base-form/get-data [226]
export function get_data(form){
  return form["data"];
}

// xt.event.base-form/set-data [232]
export function set_data(form,m){
  let {data} = form;
  Object.assign(data,m);
  let fields = Object.keys(m);
  return trigger_field(form,fields,"form.data");
}

// xt.event.base-form/reset-all-data [241]
export function reset_all_data(form){
  let {initial} = form;
  let data = initial();
  form["data"] = data;
  return trigger_all(form,"form.data");
}

// xt.event.base-form/reset-field-data [250]
export function reset_field_data(form,field){
  let {data,initial} = form;
  let value = (initial())[field];
  data[field] = value;
  return trigger_field(form,field,"form.data");
}

// xt.event.base-form/validate-all [259]
export function validate_all(form,hook_fn,complete_fn){
  let {data,result,validators} = form;
  return validate.validate_all(data,validators,result,hook_fn,null).then(function (res){
    trigger_all(form,"form.validation");
    if(complete_fn){
      complete_fn("ok" == res["status"],res);
    }
    return res;
  });
}

// xt.event.base-form/validate-field [280]
export function validate_field(form,field,hook_fn,complete_fn){
  let {data,result,validators} = form;
  return validate.validate_field(data,field,validators,result,hook_fn,null).then(function (res){
    trigger_field(form,field,"form.validation");
    if(complete_fn){
      complete_fn("ok" == xtd.get_in(res["fields"],[field,"status"]),res);
    }
    return res;
  });
}

// xt.event.base-form/reset-field-validator [303]
export function reset_field_validator(form,field){
  let {result} = form;
  result[field] = {"status":"pending"};
  trigger_field(form,field,"form.validation");
  return result;
}

// xt.event.base-form/reset-all-validators [312]
export function reset_all_validators(form){
  let {result,validators} = form;
  form["result"] = validate.create_result(validators);
  trigger_all(form,"form.validation");
  return result;
}

// xt.event.base-form/reset-all [321]
export function reset_all(form){
  reset_all_data(form);
  reset_all_validators(form);
}

// xt.event.base-form/check-field-passed [328]
export function check_field_passed(form,field){
  let {result} = form;
  let {fields} = result;
  return "ok" == xtd.get_in(fields,[field,"status"]);
}

// xt.event.base-form/check-field-errored [336]
export function check_field_errored(form,field){
  let {result} = form;
  let {fields} = result;
  return "errored" == xtd.get_in(fields,[field,"status"]);
}

// xt.event.base-form/check-all-passed [344]
export function check_all_passed(form){
  let {result} = form;
  let {fields} = result;
  for(let v of Object.values(fields)){
    if("ok" != v["status"]){
      return false;
    }
  };
  return true;
}

// xt.event.base-form/check-any-errored [355]
export function check_any_errored(form){
  let {result} = form;
  let {fields} = result;
  for(let v of Object.values(fields)){
    if("errored" == v["status"]){
      return true;
    }
  };
  return false;
}