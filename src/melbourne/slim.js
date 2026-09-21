import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import slim_entry from './slim-entry'

import slim_table_toolbar from './slim-table-toolbar'

import ui_toolbar from './ui-toolbar'

import slim_table from './slim-table'

import * as r from '../libs/js/react'

import * as n from '../libs/js/react-native'

import slim_sheet from './slim-sheet'

import * as ext_view from '../libs/js/react/ext-model'

import k from '../libs/xt/lang/base-lib'

import * as ext_route from '../libs/js/react/ext-route'

import slim_table_list from './slim-table-list'

import ui_static from './ui-static'

// melbourne.slim/TableToolbar [21] 
var TableToolbar = slim_table_toolbar.TableToolbar;

// melbourne.slim/Entry [23] 
var Entry = slim_entry.Entry;

// melbourne.slim/Table [25] 
var Table = slim_table.Table;

// melbourne.slim/TableList [27] 
var TableList = slim_table_list.TableList;

// melbourne.slim/TableStandard [29] 
var TableStandard = slim_table.TableStandard;

// melbourne.slim/TableEmbedded [31] 
var TableEmbedded = slim_table.TableEmbedded;

// melbourne.slim/Sheet [33] 
var Sheet = slim_sheet.Sheet;

// melbourne.slim/SheetHeader [35] 
var SheetHeader = slim_sheet.SheetHeader;

// melbourne.slim/SheetRow [37] 
var SheetRow = slim_sheet.SheetRow;

// melbourne.slim/SheetBasic [39] 
var SheetBasic = slim_sheet.SheetBasic;

// melbourne.slim/createEntry [41] 
function createEntry(props,...args){
  return React.createElement(slim_entry.Entry,props,...args);
}

// melbourne.slim/entry [46] 
function entry(props,impl,opts){
  return React.createElement(slim_entry.Entry,Object.assign({},props,{impl},opts));
}

// melbourne.slim/useLocalPrimitives [51] 
function useLocalPrimitives(override){
  override = (override || {});
  let [showCreate,setShowCreate] = override.create || React.useState();
  let [showModify,setShowModify] = override.modify || React.useState();
  let [showDetail,setShowDetail] = override.detail || React.useState();
  let [orderBy,setOrderBy] = override.orderBy || React.useState(true);
  let [showScroll,setShowScroll] = override.scroll || React.useState(true);
  let [showHeader,setShowHeader] = override.header || React.useState(true);
  return {orderBy,setOrderBy,setShowCreate,setShowDetail,setShowHeader,setShowModify,setShowScroll,showCreate,showDetail,showHeader,showModify,showScroll};
}

// melbourne.slim/useRoutePrimitives [87] 
function useRoutePrimitives(route,override){
  override = (override || {});
  let [showCreate,setShowCreate] = override.create || ext_route.useRouteParamFlag(route,"section","create");
  let [showModify,setShowModify] = override.modify || ext_route.useRouteParam(route,"modify");
  let [showDetail,setShowDetail] = override.detail || ext_route.useRouteParam(route,"detail");
  let [showHeader,setShowHeader] = override.header || React.useState(true);
  let [showScroll,setShowScroll] = override.scroll || React.useState(true);
  let [orderBy,setOrderBy] = override.orderBy || ext_route.useRouteParam(route,"orderBy");
  return {orderBy,setOrderBy,setShowCreate,setShowDetail,setShowHeader,setShowModify,setShowScroll,showCreate,showDetail,showHeader,showModify,showScroll};
}

// melbourne.slim/useListControl [134] 
function useListControl({orderBy,setOrderBy,setShowCreate,setShowDetail,setShowModify,showCreate,showDetail,showModify}){
  let routeKey = showModify ? "modify" : (showDetail ? "detail" : (showCreate ? "create" : "list"));
  let [backAction,setBackAction] = React.useState();
  let [showList,setShowList] = [
    routeKey == "list",
    function (){
      if(showDetail && setShowDetail){
        setShowDetail(null);
      }
      if(showModify && setShowModify){
        setShowModify(null);
      }
      if(showCreate && setShowCreate){
        setShowCreate(false);
      }
    }
  ];
  return {backAction,routeKey,setBackAction,setShowList,showList};
}

// melbourne.slim/useRouteControl [175] 
function useRouteControl(route,override,m){
  let control = useRoutePrimitives(route,override);
  return Object.assign(useListControl(control),control);
}

// melbourne.slim/useLocalControl [183] 
function useLocalControl(m){
  let control = useLocalPrimitives();
  return Object.assign(useListControl(control),control,m);
}

// melbourne.slim/getParentProps [192] 
function getParentProps(props){
  let parentKeys = ["entry","data","parent","display","control","actions"];
  return k.obj_pick(props,parentKeys);
}

// melbourne.slim/useParentControl [202] 
function useParentControl(props,control,opts){
  let {showCreate,showDetail,showList,showModify} = control;
  let parent = getParentProps(props);
  React.useEffect(function (){
    parent.control.setShowScroll(false);
    return function (){
      return parent.control.setShowScroll(true);
    };
  },[]);
  React.useEffect(function (){
    if((showCreate && ("disable" != k.get_in(opts,["create"]))) || (showModify && ("disable" != k.get_in(opts,["modify"]))) || (showDetail && ("disable" != k.get_in(opts,["detail"])))){
      parent.control.setShowHeader(false);
    }
    else{
      parent.control.setShowHeader(true);
    }
    return function (){
      return parent.control.setShowHeader(true);
    };
  },[showDetail,showCreate,showModify]);
  return parent;
}

var MODULE = {
  "TableToolbar":TableToolbar,
  "Entry":Entry,
  "Table":Table,
  "TableList":TableList,
  "TableStandard":TableStandard,
  "TableEmbedded":TableEmbedded,
  "Sheet":Sheet,
  "SheetHeader":SheetHeader,
  "SheetRow":SheetRow,
  "SheetBasic":SheetBasic,
  "createEntry":createEntry,
  "entry":entry,
  "useLocalPrimitives":useLocalPrimitives,
  "useRoutePrimitives":useRoutePrimitives,
  "useListControl":useListControl,
  "useRouteControl":useRouteControl,
  "useLocalControl":useLocalControl,
  "getParentProps":getParentProps,
  "useParentControl":useParentControl
};

export default MODULE