import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import ui_text from './ui-text'

import ui_toolbar from './ui-toolbar'

import * as r from '../libs/js/react'

import * as n from '../libs/js/react-native'

import ui_text_dialog from './ui-text-dialog'

import k from '../libs/xt/lang/base-lib'

import * as ui_util from '../libs/js/react-native/ui-util'

// melbourne.slim-table-toolbar/TableToolbar [17] 
function TableToolbar({toolbarOpts = {},...rprops}){
  let {actions,children,control,design,mini} = rprops;
  let {showCreate = true,showOrderBy = true} = toolbarOpts;
  let createElem = (
    <ui_text.ToggleAccent
      variant={ui_toolbar.accentStandard()}
      text={(
        <RNIcon key="create" name={!control.showList ? "left" : "plus"}></RNIcon>)}
      onPress={function (){
        if(!control.showList || control.showCreate){
          control.setShowCreate(false);
          control.setShowList(true);
        }
        else{
          control.setShowCreate(true);
        }
      }}
      design={design}>
    </ui_text.ToggleAccent>);
  let editElem = (
    <ui_text.ToggleAccent
      variant={ui_toolbar.accentStandard()}
      text="EDIT"
      onPress={function (){
        
      }}
      design={design}>
    </ui_text.ToggleAccent>);
  let deleteElem = (
    <ui_text_dialog.ConfirmDialog
      variant={ui_toolbar.accentStandard()}
      text="DELETE"
      onPress={function (){
        return actions.delete(control.showDetail);
      }}
      design={design}>
    </ui_text_dialog.ConfirmDialog>);
  let orderByElem = (
    <ui_util.Fade visible={!mini || control.showList}>
      <ui_text.TabsMinor
        variant={ui_toolbar.minorStandard()}
        styleContainer={{"margin":0}}
        style={{"marginHorizontal":3}}
        data={["name","time"]}
        value={control.orderBy}
        setValue={control.setOrderBy}
        format={function (s){
          return s.toUpperCase();
        }}
        design={design}>
      </ui_text.TabsMinor>
    </ui_util.Fade>);
  return (
    <ui_toolbar.Toolbar style={{"paddingTop":3,"height":36}} design={design}>
      {showCreate ? createElem : null}
      {children}
      {(!control.showDetail && showOrderBy) ? orderByElem : null}
      <n.Fill></n.Fill>
    </ui_toolbar.Toolbar>);
}

var MODULE = {"TableToolbar":TableToolbar};

export default MODULE