import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import slim_entry from './slim-entry'

import ui_text from './ui-text'

import * as event_form from '../libs/xt/event/base-form'

import * as n from '../libs/js/react-native'

import * as ext_form from '../libs/js/react/ext-form'

import * as ext_view from '../libs/js/react/ext-model'

import k from '../libs/xt/lang/base-lib'

import * as ui_util from '../libs/js/react-native/ui-util'

import ui_static from './ui-static'

// melbourne.slim-table-common/useTableEntry [19] 
function useTableEntry(props){
  let {control,displayKey,views} = props;
  let entryId = control.showDetail || control.showModify;
  let entries = props.entries || ext_view.listenView(views[displayKey || "list"],"success") || [];
  let entry = entries.find(function (e){
    return entryId == e.id;
  }) || {};
  return entry;
}

// melbourne.slim-table-common/TableDefaultNotFound [33] 
function TableDefaultNotFound({design}){
  return (
    <ui_text.H4 design={design}>NOT FOUND</ui_text.H4>);
}

// melbourne.slim-table-common/TableDefaultIsLoading [39] 
function TableDefaultIsLoading({design}){
  return (
    <ui_text.H4 design={design}>LOADING...</ui_text.H4>);
}

// melbourne.slim-table-common/TableBackButton [45] 
function TableBackButton({control,design}){
  return (
    <ui_text.ButtonMinor
      text={(
        <RNIcon key="back" name="chevron-thin-left" style={{"padding":0}}></RNIcon>)}
      style={{
        "width":30,
        "height":27,
        "paddingHorizontal":0,
        "textAlign":"center"
      }}
      onPress={function (){
        if(control.showModify){
          control.setShowModify(false);
        }
        else{
          control.setShowCreate(false);
          control.setShowDetail(null);
        }
      }}
      design={design}>
    </ui_text.ButtonMinor>);
}

// melbourne.slim-table-common/tablePageHooks [69] 
function tablePageHooks(props,hooks){
  if(k.fnp(hooks)){
    return hooks(props);
  }
  else if(k.arrp(hooks)){
    return k.arr_foldl(hooks,function (init,f){
      let out = f(init);
      return Object.assign(init,out);
    },Object.assign({},props));
  }
}

// melbourne.slim-table-common/tablePageView [83] 
function tablePageView(props,page){
  let {
    display = {},
    displayKey = "list",
    design,
    views,
    entries,
    control,
    components
  } = props;
  let variant = {"bg":{"key":"background","tone":"sharpen"}};
  let entry = (views && useTableEntry({control,displayKey,entries,views})) || props.entry;
  let impl = display[page];
  let implForm = k.get_in(impl,["form"]);
  let form = props.form || implForm;
  if(k.arrp(form)){
    form = ext_form.makeForm(function (){
      return implForm[0](entry,props);
    },implForm[1](entry,props));
    ext_form.listenFormData(form);
  }
  let hooks = components["hooks_" + page];
  let hprops = tablePageHooks(Object.assign({},props,{entry}),hooks);
  if(k.is_emptyp(entry) && (page == "detail")){
    return (
      <ReactNative.View
        style={{"flex":1,"alignItems":"center","justifyContent":"center"}}>
        <ReactNative.ActivityIndicator></ReactNative.ActivityIndicator>
      </ReactNative.View>);
  }
  let HeaderComponent = components["header_" + page] || (impl && impl.header && slim_entry.Entry);
  let PageComponent = components["entry_" + page] || (impl && slim_entry.Entry) || TableDefaultNotFound;
  let implHeader = impl.header || {};
  implHeader = {
    "main":{
        "type":"v",
        "style":{
            "paddingTop":10,
            "paddingBottom":5,
            "minHeight":30,
            "maxWidth":500
          },
        "body":k.arrayify(implHeader.main)
      }
  };
  let implHeaderActions = impl.header_actions;
  let headerElem = HeaderComponent ? React.createElement(HeaderComponent,Object.assign({},props,hprops,{
    "entry":entry,
    "form":form,
    "impl":k.get_in(impl,["header","link"]) ? Object.assign({"type":"link"},impl.header) : (implHeader ? {
        "type":"card",
        "body":Object.assign({"isHeader":true},implHeader)
      } : null)
  })) : null;
  let headerActionsElem = (control.showHeader && implHeaderActions) ? (
    <ReactNative.View style={{}}>
      {React.createElement(slim_entry.Entry,Object.assign(
        {},
        props,
        hprops,
        {"entry":entry,"form":form,"impl":implHeaderActions}
      ))}
    </ReactNative.View>) : null;
  let pageElem = React.createElement(PageComponent,Object.assign(
    {},
    props,
    hprops,
    {"entry":entry,"form":form,"impl":display[page]}
  ));
  return (
    <ui_static.Div style={{"flex":1}} design={design}>
      {control.showHeader ? (
        <n.Row>{headerElem}</n.Row>) : null}
      {headerActionsElem}
      {(control.showScroll && (false != impl.scroll)) ? React.createElement(ui_static.ScrollView,{design},pageElem) : pageElem}
    </ui_static.Div>);
}

var MODULE = {
  "useTableEntry":useTableEntry,
  "TableDefaultNotFound":TableDefaultNotFound,
  "TableDefaultIsLoading":TableDefaultIsLoading,
  "TableBackButton":TableBackButton,
  "tablePageHooks":tablePageHooks,
  "tablePageView":tablePageView
};

export default MODULE