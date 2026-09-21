import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import slim_entry from './slim-entry'

import base_font from './base-font'

import ui_text from './ui-text'

import * as r from '../libs/js/react'

import * as n from '../libs/js/react-native'

import k from '../libs/xt/lang/base-lib'

import ui_static from './ui-static'

// melbourne.slim-sheet/SheetPagination [16] 
function SheetPagination(props){
  let {control,design,entries,impl} = props;
  let {page = {}} = impl;
  let {display = 20,total = (entries ? (entries).length : 0)} = page;
  let setShowPage = k.get_in(control,["setShowPage"]);
  let showPage = k.get_in(control,["showPage"]) || 1;
  let pageCount = Math.floor((total - 1) / display) + 1;
  let isMini = pageCount < 7;
  let isLeftEdge = showPage < 4;
  let isRightEdge = showPage > (pageCount - 3);
  let toggleFn = function (idx,ellipsis){
    return React.createElement(page.component || ui_text.ToggleTabMinor,{
      "design":design,
      "key":idx + 1,
      "style":{"marginHorizontal":0},
      "selected":showPage == (idx + 1),
      "text":ellipsis ? (
            <RNIcon key={idx + 1} name="dots-three-horizontal"></RNIcon>) : (idx + 1).toString(),
      "onPress":function (){
            return setShowPage(idx + 1);
          }
    });
  };
  return (
    <ReactNative.View key={pageCount}>
      {isMini ? (
        <n.Row>{k.arr_map(k.arr_range(pageCount),toggleFn)}</n.Row>) : (isLeftEdge ? (
        <n.Row>
          {k.arr_map(k.arr_range(4),toggleFn)}
          {toggleFn(showPage + 1,true)}
          {toggleFn(pageCount - 1)}
        </n.Row>) : (isRightEdge ? (
        <n.Row>
          {toggleFn(0)}
          {toggleFn(showPage - 3,true)}
          {k.arr_map(k.arr_range([pageCount - 4,pageCount]),toggleFn)}
        </n.Row>) : (
        <n.Row>
          {toggleFn(0)}
          {toggleFn(showPage - 3,true)}
          {k.arr_map(k.arr_range([showPage - 2,showPage + 1]),toggleFn)}
          {toggleFn(showPage + 1,true)}
          {toggleFn(pageCount - 1)}
        </n.Row>)))}
    </ReactNative.View>);
}

// melbourne.slim-sheet/SheetGroupHeader [82] 
function SheetGroupHeader({design,variant,group,style,styleContainer,...iprops}){
  let {name,format = k.identity} = group;
  return (
    <ReactNative.View style={{"marginTop":10}}>
      <n.Row style={styleContainer}>
        <ui_text.H6
          style={[
            {"fontWeight":900,"borderRadius":2,"paddingVertical":3},
            ...k.arrayify(style)
          ]}
          design={design}>{format(name)}
        </ui_text.H6>
      </n.Row>
      <ui_static.Separator
        variant={{"fg":{"key":"background","mix":"primary","ratio":1}}}
        style={{"marginBottom":10}}
        design={design}>
      </ui_static.Separator>
    </ReactNative.View>);
}

// melbourne.slim-sheet/SheetHeader [118] 
function SheetHeader({
  design,
  impl,
  variant = {"fg":{"key":"background"},"bg":{"key":"primary"}},
  custom = {},
  style,
  ...iprops
}){
  let {columns,header = {}} = impl;
  let columnFn = function (column,i){
    let {key} = column;
    let {style,...rprops} = k.get_in(custom,[key]) || {};
    let Component = slim_entry.EntryContentTitleH5;
    let oprops = Object.assign({},{
      design,
      "impl":Object.assign(
        {},
        column,
        header,
        {"variant":variant,"template":column.name},
        column.header
      ),
      "style":[
        {"paddingVertical":5,"paddingHorizontal":10},
        ...k.arrayify(style)
      ]
    },rprops);
    return (
      <ReactNative.View key={i} style={[{"flex":1},column.style]}>{React.createElement(Component,oprops)}</ReactNative.View>);
  };
  return (
    <ui_static.Div
      style={[{"flexDirection":"row","maxWidth":500},...k.arrayify(style)]}
      design={design}
      variant={variant}>
      {columns.map(columnFn)}
      {React.createElement(slim_entry.EntryContentSeparator,{design})}
    </ui_static.Div>);
}

// melbourne.slim-sheet/SheetRow [166] 
function SheetRow({design,variant,impl,style,custom = {},...iprops}){
  let {columns} = impl;
  let columnFn = function (column,i){
    let {key} = column;
    let {style,...rprops} = k.get_in(custom,[key]) || {};
    let Component = (column.type && slim_entry.Entry) || slim_entry.EntryContentParagraph;
    let oprops = Object.assign({},iprops,{
      design,
      variant,
      "impl":column,
      "style":[{"paddingHorizontal":10},...k.arrayify(style)]
    },rprops);
    return (
      <ReactNative.View key={i} style={[{"flex":1},column.style]}>{React.createElement(Component,oprops)}</ReactNative.View>);
  };
  return (
    <ui_static.Div
      style={[
        {
            "flexDirection":"row",
            "alignItems":"center",
            "maxWidth":500,
            "marginBottom":3
          },
        ...k.arrayify(style)
      ]}
      design={design}
      variant={variant}>{columns.map(columnFn)}
    </ui_static.Div>);
}

// melbourne.slim-sheet/SheetBasicRows [210] 
function SheetBasicRows(props){
  let {design,entries,impl,style} = props;
  return (
    <ReactNative.View style={{"flex":1}}>
      {entries.map(function (entry,i){
        return React.createElement(
          SheetRow,
          Object.assign({},props,{"key":(entry.id || "") + i,"entry":entry})
        );
      })}
    </ReactNative.View>);
}

// melbourne.slim-sheet/SheetBasic [231] 
function SheetBasic(props){
  let {design,entries,impl,style} = props;
  return (
    <>
      {React.createElement(SheetHeader,props)}
      <ui_static.ScrollView design={design} style={{"marginTop":10}}>{React.createElement(SheetBasicRows,props)}</ui_static.ScrollView>
    </>);
}

// melbourne.slim-sheet/SheetGroupRows [247] 
function SheetGroupRows(props){
  let {group,...rprops} = props;
  let {entries} = group;
  return (
    <ReactNative.View>
      {React.createElement(SheetGroupHeader,props)}
      {React.createElement(SheetBasicRows,Object.assign(rprops,{entries}))}
    </ReactNative.View>);
}

// melbourne.slim-sheet/groupEntries [257] 
function groupEntries(entries,impl){
  let itemsImpl = Object.assign(
    {"reverse":false,"sort":k.identity,"filter":k.identity},
    impl.items
  );
  let groupsImpl = Object.assign(
    {"reverse":false,"split":k.id_fn,"sort":k.identity,"filter":k.T},
    impl.groups
  );
  let groups = groupsImpl.sort(k.obj_pairs(k.obj_map(
    k.arr_group_by(entries,k.template_fn(groupsImpl.split),k.identity),
    itemsImpl.sort
  )));
  return groups;
}

// melbourne.slim-sheet/Sheet [276] 
function Sheet(props){
  let {entries,impl} = props;
  let itemsImpl = Object.assign(
    {"reverse":false,"sort":k.identity,"filter":k.identity},
    impl.items
  );
  let isGrouped = null != impl.groups;
  let isPaged = null != impl.page;
  if(isGrouped){
    let groups = groupEntries(entries,impl);
    return (
      <ReactNative.View>
        {React.createElement(SheetHeader,props)}
        {groups.map(function ([name,entries]){
          return React.createElement(
            SheetGroupRows,
            Object.assign({},props,{"group":{entries,name,"format":impl.groups.format}})
          );
        })}
      </ReactNative.View>);
  }
  else if(isPaged){
    return (
      <ReactNative.View></ReactNative.View>);
  }
  else{
    return (
      <ReactNative.View>
        {React.createElement(SheetHeader,props)}
        {React.createElement(
          SheetBasicRows,
          Object.assign({},props,{"entries":itemsImpl.sort(entries)})
        )}
      </ReactNative.View>);
  }
  return React.createElement(SheetBasicRows,props);
}

var MODULE = {
  "SheetPagination":SheetPagination,
  "SheetGroupHeader":SheetGroupHeader,
  "SheetHeader":SheetHeader,
  "SheetRow":SheetRow,
  "SheetBasicRows":SheetBasicRows,
  "SheetBasic":SheetBasic,
  "SheetGroupRows":SheetGroupRows,
  "groupEntries":groupEntries,
  "Sheet":Sheet
};

export default MODULE