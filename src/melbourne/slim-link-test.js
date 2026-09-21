import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import * as event_view from '../libs/xt/event/base-model'

import * as n from '../libs/js/react-native'

import * as ext_form from '../libs/js/react/ext-form'

import * as ext_view from '../libs/js/react/ext-model'

import k from '../libs/xt/lang/base-lib'

import slim_link from './slim-link'

// melbourne.slim-link-test/FormLinkDropdownDemo [28] 
function FormLinkDropdownDemo(){
  let form = ext_form.makeForm(function (){
    return {"account_id":null};
  },{"account_id":[]});
  let views = React.useCallback({
    "account":ext_view.makeView({
        "defaultOutput":[],
        "defaultArgs":[],
        "defaultProcess":event_view.sorted_lookup("name"),
        "handler":function (args){
            return new Promise(function (resolve,reject){
              setTimeout(function (){
                try{
                  resolve(          (function (){
                              return k.arr_map(k.arr_range(5),function (i){
                                return {"id":"id-" + i,"name":"name-" + i,"balance":Math.random()};
                              });
                            })());
                }
                catch(e){
                  reject(e);
                }
              },100);
            });
          }
      })
  },[]);
  return (
    <n.Isolation>
      <n.EnclosedCodeContainer
        label="melbourne.slim-link/FormLinkDropdown"
        style={{"height":200}}
        code={function (){
          return "(\n  <n.Row>\n    {React.createElement(slim_link.FormLinkDropdown,Object.assign({form,views},{\n      \"design\":{\"type\":\"light\"},\n      \"label\":\"Account\",\n      \"field\":\"account_id\",\n      \"fieldProps\":{\n        \"style\":{\"width\":500},\n        \"viewKey\":\"account\",\n        \"viewTemplate\":[\"name\"]\n      }\n    }))}\n  </n.Row>);";
        }()}>
        <n.Row>
          {React.createElement(slim_link.FormLinkDropdown,Object.assign({form,views},{
            "design":{"type":"light"},
            "label":"Account",
            "field":"account_id",
            "fieldProps":{
              "style":{"width":500},
              "viewKey":"account",
              "viewTemplate":["name"]
            }
          }))}
        </n.Row>
      </n.EnclosedCodeContainer>
    </n.Isolation>);
}

// melbourne.slim-link-test/FormLinkReadOnlyDemo [67] 
function FormLinkReadOnlyDemo(){
  let form = ext_form.makeForm(function (){
    return {"account_id":"id-2"};
  },{"account_id":[]});
  let views = React.useCallback({
    "account":ext_view.makeView({
        "defaultOutput":[],
        "defaultArgs":[],
        "defaultProcess":event_view.sorted_lookup("name"),
        "handler":function (args){
            return new Promise(function (resolve,reject){
              setTimeout(function (){
                try{
                  resolve(          (function (){
                              return k.arr_map(k.arr_range(5),function (i){
                                return {"id":"id-" + i,"name":"name-" + i,"balance":Math.random()};
                              });
                            })());
                }
                catch(e){
                  reject(e);
                }
              },100);
            });
          }
      })
  },[]);
  let entry = {"account_id":"id-3"};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-link/FormLinkReadOnly"
      code={function (){
        return "(\n  <n.Row>\n    {React.createElement(slim_link.FormLinkReadOnly,Object.assign({entry,form,views},{\n      \"design\":{\"type\":\"light\"},\n      \"label\":\"Account\",\n      \"field\":\"account_id\",\n      \"fieldProps\":{\n        \"style\":{\"width\":500},\n        \"viewKey\":\"account\",\n        \"viewTemplate\":[\"name\"]\n      }\n    }))}\n  </n.Row>);";
      }()}>
      <n.Row>
        {React.createElement(slim_link.FormLinkReadOnly,Object.assign({entry,form,views},{
          "design":{"type":"light"},
          "label":"Account",
          "field":"account_id",
          "fieldProps":{
            "style":{"width":500},
            "viewKey":"account",
            "viewTemplate":["name"]
          }
        }))}
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-link-test/FormLinkEntryReadOnlyDemo [106] 
function FormLinkEntryReadOnlyDemo(){
  let form = ext_form.makeForm(function (){
    return {"account_id":"id-4"};
  },{"account_id":[]});
  let views = React.useCallback({
    "account":ext_view.makeView({
        "defaultOutput":[],
        "defaultArgs":[],
        "defaultProcess":event_view.sorted_lookup("name"),
        "handler":function (args){
            return new Promise(function (resolve,reject){
              setTimeout(function (){
                try{
                  resolve(          (function (){
                              return k.arr_map(k.arr_range(5),function (i){
                                return {"id":"id-" + i,"name":"name-" + i,"balance":Math.random()};
                              });
                            })());
                }
                catch(e){
                  reject(e);
                }
              },100);
            });
          }
      })
  },[]);
  let entry = {"account_id":"id-2"};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-link/FormLinkEntryReadOnly"
      code={function (){
        return "(\n  <n.Row>\n    {React.createElement(slim_link.FormLinkEntryReadOnly,Object.assign({entry,form,views},{\n      \"design\":{\"type\":\"light\"},\n      \"label\":\"Account\",\n      \"field\":\"account_id\",\n      \"fieldProps\":{\n        \"style\":{\"width\":500},\n        \"viewKey\":\"account\",\n        \"viewTemplate\":[\"name\"]\n      }\n    }))}\n  </n.Row>);";
      }()}>
      <n.Row>
        {React.createElement(slim_link.FormLinkEntryReadOnly,Object.assign({entry,form,views},{
          "design":{"type":"light"},
          "label":"Account",
          "field":"account_id",
          "fieldProps":{
            "style":{"width":500},
            "viewKey":"account",
            "viewTemplate":["name"]
          }
        }))}
      </n.Row>
    </n.EnclosedCodeContainer>);
}

var MODULE = {
  "FormLinkDropdownDemo":FormLinkDropdownDemo,
  "FormLinkReadOnlyDemo":FormLinkReadOnlyDemo,
  "FormLinkEntryReadOnlyDemo":FormLinkEntryReadOnlyDemo
};

export default MODULE