import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import * as r from '../libs/js/react'

import * as event_form from '../libs/xt/event/base-form'

import slim_select from './slim-select'

import slim_common from './slim-common'

import * as n from '../libs/js/react-native'

import * as ext_form from '../libs/js/react/ext-form'

import * as ext_view from '../libs/js/react/ext-model'

import k from '../libs/xt/lang/base-lib'

import * as ui_util from '../libs/js/react-native/ui-util'

import ui_static from './ui-static'

// melbourne.slim-link/useViewLink [19] 
function useViewLink(props){
  let {field,form,viewArgs,viewKey,viewOpts,views} = props;
  let links = ext_view.listenView(views[viewKey],"success");
  let {lookup,results} = links;
  let args = null;
  let link_id = ext_form.listenFieldValue(form,field);
  React.useEffect(function (){
    if(k.not_emptyp(results) && (null == link_id)){
      event_form.set_field(form,field,k.id_fn(results[0]));
    }
  },[results]);
  if(viewArgs){
    let data = ext_form.listenFormData(form);
    args = viewArgs(data,props);
    ext_view.useRefreshArgs(views[viewKey],args,viewOpts || {"remote":"none"});
  }
  return {args,links};
}

// melbourne.slim-link/FormLinkDropdown [48] 
function FormLinkDropdown(props){
  let aprops = Object.assign({},props,props.fieldProps);
  let {field,form,viewArgs,viewKey,viewOpts,viewTemplate,views} = aprops;
  let {args,links} = useViewLink(aprops);
  return React.createElement(slim_select.FormDropdown,Object.assign({},{},props,{
    "key":JSON.stringify(args),
    "data":links.results,
    "fieldProps":{
        "valueFn":k.id_fn,
        "format":function (id){
            return k.template_entry(k.get_in(links,["lookup",id]),viewTemplate);
          }
      }
  }));
}

// melbourne.slim-link/FormLinkReadOnly [73] 
function FormLinkReadOnly(props){
  let {field,form,viewArgs,viewKey,viewOpts,viewTemplate,views} = Object.assign({},props,props.fieldProps);
  let {args,links} = useViewLink({field,form,viewArgs,viewKey,viewOpts,views});
  return React.createElement(slim_common.FormReadOnly,Object.assign({},props,{
    "template":function (e){
        return k.template_entry(k.get_in(links,["lookup",e[field]]),viewTemplate);
      }
  }));
}

// melbourne.slim-link/useViewLinkEntry [96] 
function useViewLinkEntry({viewArgs,viewKey,viewOpts,views},entry,field){
  let links = ext_view.listenView(views[viewKey],"success");
  let {lookup,results} = links;
  let args = null;
  if(viewArgs){
    args = viewArgs(entry);
    ext_view.useRefreshArgs(views[viewKey],args,viewOpts || {});
  }
  return {args,links};
}

// melbourne.slim-link/FormLinkEntryReadOnly [118] 
function FormLinkEntryReadOnly(props){
  let {entry,field,viewArgs,viewKey,viewOpts,viewTemplate,views} = Object.assign({},props,props.fieldProps);
  let {args,links} = useViewLinkEntry({viewArgs,viewKey,viewOpts,views},entry,field);
  return React.createElement(slim_common.FormReadOnly,Object.assign({},props,{
    "template":function (e){
        return k.template_entry(k.get_in(links,["lookup",e[field]]),viewTemplate);
      }
  }));
}

var MODULE = {
  "useViewLink":useViewLink,
  "FormLinkDropdown":FormLinkDropdown,
  "FormLinkReadOnly":FormLinkReadOnly,
  "useViewLinkEntry":useViewLinkEntry,
  "FormLinkEntryReadOnly":FormLinkEntryReadOnly
};

export default MODULE