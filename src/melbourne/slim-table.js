import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import slim_entry from './slim-entry'

import ui_text from './ui-text'

import ui_toolbar from './ui-toolbar'

import * as r from '../libs/js/react'

import slim_table_common from './slim-table-common'

import * as n from '../libs/js/react-native'

import * as ui_router from '../libs/js/react-native/ui-router'

import slim_sheet from './slim-sheet'

import * as ext_view from '../libs/js/react/ext-model'

import k from '../libs/xt/lang/base-lib'

import * as ext_route from '../libs/js/react/ext-route'

import ui_section from './ui-section'

import * as ui_util from '../libs/js/react-native/ui-util'

import ui_swiper from './ui-swiper'

import slim_table_list from './slim-table-list'

import ui_static from './ui-static'

// melbourne.slim-table/TableModifyView [36] 
function TableModifyView(props){
  return slim_table_common.tablePageView(props,"modify");
}

// melbourne.slim-table/TableDetailView [41] 
function TableDetailView(props){
  return slim_table_common.tablePageView(props,"detail");
}

// melbourne.slim-table/TableCreateView [46] 
function TableCreateView(props){
  return slim_table_common.tablePageView(props,"create");
}

// melbourne.slim-table/TableRouterLu [51] 
var TableRouterLu = {
  "detail":TableDetailView,
  "create":TableCreateView,
  "modify":TableModifyView
};

// melbourne.slim-table/TableRouterView [56] 
function TableRouterView(props){
  let {
    design,
    control,
    components = {},
    displayKey = "list",
    display = {},
    custom = {},
    views = {}
  } = props;
  let {routeKey} = control;
  let routeComponent = slim_table_common.TableDefaultNotFound;
  if(components[routeKey]){
    routeComponent = components[routeKey];
  }
  else if((routeKey == "list") && views[displayKey]){
    routeComponent = slim_table_list.TableList;
  }
  else if(display[routeKey]){
    routeComponent = (TableRouterLu[routeKey] || slim_table_common.TableDefaultNotFound);
  }
  let routeElem = (
    <React.Suspense
      fallback={(
        <slim_table_common.TableDefaultIsLoading design={design}></slim_table_common.TableDefaultIsLoading>)}>
      {React.createElement(routeComponent,Object.assign({},props,custom[routeKey]))}
    </React.Suspense>);
  return ((routeKey == "list") && (false != k.get_in(display,["list","scroll"]))) ? (
    <ui_static.ScrollView design={design}>{routeElem}</ui_static.ScrollView>) : routeElem;
}

// melbourne.slim-table/TableRouter [93] 
function TableRouter(props){
  let {control} = props;
  let routeComponentFn = function (){
    return TableRouterView;
  };
  let routePropsFn = function (routeKey){
    return Object.assign({routeKey},props);
  };
  let transitionMap = {
    "list":{"detail":"from_right","create":"from_left"},
    "detail":{"list":"from_left","modify":"flip_horizontal"},
    "modify":{"detail":"flip_horizontal"},
    "create":{"list":"from_right"}
  };
  return (
    <ui_router.Router
      routeKey={control.routeKey}
      style={{"flex":1}}
      noTransition={true}
      routeComponentFn={routeComponentFn}
      routePropsFn={routePropsFn}
      transitionMap={transitionMap}>
    </ui_router.Router>);
}

// melbourne.slim-table/Table [116] 
function Table(props){
  let {design,mini,control,components,views,custom = {}} = props;
  return React.createElement(TableRouter,props);
}

// melbourne.slim-table/TableStandard [129] 
function TableStandard(props){
  let {design,control,impl,views,display,displayKey = "list"} = props;
  let entries = ext_view.listenView(views[displayKey],"success");
  let embedded = k.get_in(display,["list","embedded"]) || {};
  return (
    <ReactNative.View style={{"flex":1}}>
      {(k.is_emptyp(entries) && control.showList) ? (
        <ReactNative.View
          style={{"flex":1,"justifyContent":"center","alignItems":"center"}}>
          <ui_section.EmptyButton
            textButton={embedded.emptyText || "ADD"}
            onPress={function (){
              return control.setShowCreate(true);
            }}
            design={design}>
          </ui_section.EmptyButton>
        </ReactNative.View>) : null}
      {(k.not_emptyp(entries) || !control.showList) ? React.createElement(Table,props) : null}
    </ReactNative.View>);
}

// melbourne.slim-table/TableEmbedded [160] 
function TableEmbedded(props){
  let {design,control,impl,views,display,displayKey = "list"} = props;
  let entries = props.entries || ext_view.listenView(views[displayKey],"success");
  let embedded = k.get_in(display,["list","embedded"]) || {};
  return (
    <n.Row style={{"flex":1}}>
      {(k.not_emptyp(entries) && control.showList) ? (
        <ReactNative.View style={{"marginTop":10}}>
          <ui_text.ButtonMinor
            text={(
              <RNIcon key="plus" name="plus"></RNIcon>)}
            onPress={function (){
              return control.setShowCreate(true);
            }}
            design={design}>
          </ui_text.ButtonMinor>
        </ReactNative.View>) : null}
      <ReactNative.View style={{"flex":1}}>
        {(k.is_emptyp(entries) && control.showList) ? (
          <ReactNative.View
            style={{"flex":1,"justifyContent":"center","alignItems":"center"}}>
            <ui_section.EmptyButton
              textButton={embedded.emptyText || "ADD"}
              onPress={function (){
                return control.setShowCreate(true);
              }}
              design={design}>
            </ui_section.EmptyButton>
          </ReactNative.View>) : null}
        {(k.not_emptyp(entries) || !control.showList) ? React.createElement(Table,props) : null}
      </ReactNative.View>
    </n.Row>);
}

var MODULE = {
  "TableModifyView":TableModifyView,
  "TableDetailView":TableDetailView,
  "TableCreateView":TableCreateView,
  "TableRouterLu":TableRouterLu,
  "TableRouterView":TableRouterView,
  "TableRouter":TableRouter,
  "Table":Table,
  "TableStandard":TableStandard,
  "TableEmbedded":TableEmbedded
};

export default MODULE