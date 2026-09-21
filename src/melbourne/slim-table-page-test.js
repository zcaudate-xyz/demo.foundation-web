import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import slim_entry from './slim-entry'

import ui_text from './ui-text'

import * as n from '../libs/js/react-native'

import ui_group from './ui-group'

import * as ext_view from '../libs/js/react/ext-model'

import k from '../libs/xt/lang/base-lib'

import base_palette from './base-palette'

import * as event_route from '../libs/xt/event/base-route'

import slim_table_list from './slim-table-list'

import ui_static from './ui-static'

import slim from './slim'

// melbourne.slim-table-page-test/TableListPagedDemo [30] 
function TableListPagedDemo(){
  let views = React.useCallback({
    "list":ext_view.makeView({
        "defaultArgs":[],
        "handler":function (){
            return new Promise(function (resolve,reject){
              setTimeout(function (){
                try{
                  resolve(          (function (){
                              return k.arr_map(k.arr_range(200),function (i){
                                return {"id":"id-" + i,"balance":Math.random(),"escrow":Math.random()};
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
  let control = slim.useLocalControl();
  let impl = {
    "type":"card",
    "body":{
        "title":{"type":"title","template":["currency_id"]},
        "main":{
            "type":"v",
            "body":[
                {
                  "type":"h",
                  "body":[
                      {"type":"title","template":"B"},
                      {
                        "template":["balance"],
                        "style":{"marginLeft":10},
                        "format":function (n){
                            return ("number" == (typeof n)) ? n.toFixed(2) : null;
                          }
                      }
                    ]
                },
                {
                  "type":"h",
                  "body":[
                      {"type":"title","template":"E"},
                      {
                        "template":["escrow"],
                        "style":{"marginLeft":10},
                        "format":function (n){
                            return ("number" == (typeof n)) ? n.toFixed(2) : null;
                          }
                      }
                    ]
                }
              ]
          },
        "avatar":{
            "type":"image",
            "text":{"template":["currency_id"]},
            "image":{"template":["picture"]}
          }
      }
  };
  let EntryBrief = React.useCallback(function (props){
    return React.createElement(slim_entry.Entry,Object.assign({},props,{"impl":impl}));
  },[]);
  let components = {"entry_brief":EntryBrief};
  return (
    <n.Isolation>
      <n.EnclosedCodeContainer
        label="melbourne.slim-table-page/TableListPaged"
        code={function (){
          return "(\n  <n.Row style={{\"height\":400}}>\n    <ReactNative.ScrollView>\n      <slim_table_list.TableList\n        mini={true}\n        design={{\"type\":\"light\"}}\n        style={{\"minWidth\":200}}\n        display={{\n          \"brief\":{\"card\":{\"component\":\"mini\"}},\n          \"list\":{\"page\":{\"display\":5}}\n        }}\n        views={views}\n        components={components}\n        control={control}>\n      </slim_table_list.TableList>\n    </ReactNative.ScrollView>\n  </n.Row>);";
        }()}>
        <n.Row style={{"height":400}}>
          <ReactNative.ScrollView>
            <slim_table_list.TableList
              mini={true}
              design={{"type":"light"}}
              style={{"minWidth":200}}
              display={{
                "brief":{"card":{"component":"mini"}},
                "list":{"page":{"display":5}}
              }}
              views={views}
              components={components}
              control={control}>
            </slim_table_list.TableList>
          </ReactNative.ScrollView>
        </n.Row>
      </n.EnclosedCodeContainer>
    </n.Isolation>);
}

// melbourne.slim-table-page-test/TableListRemotePagedDemo [90] 
function TableListRemotePagedDemo(){
  let views = React.useCallback({
    "list":ext_view.makeView({
        "defaultArgs":[],
        "handler":function (showPage,display){
            return new Promise(function (resolve,reject){
              setTimeout(function (){
                try{
                  resolve(          (function (){
                              return k.arr_map(k.arr_range(display),function (i){
                                return {
                                  "id":"id-" + (((showPage - 2) * display) + display + i),
                                  "balance":Math.random(),
                                  "escrow":Math.random()
                                };
                              });
                            })());
                }
                catch(e){
                  reject(e);
                }
              },200);
            });
          }
      })
  },[]);
  let control = slim.useLocalControl();
  let impl = {
    "type":"card",
    "body":{
        "title":{"type":"title","template":["currency_id"]},
        "main":{
            "type":"v",
            "body":[
                {
                  "type":"h",
                  "body":[
                      {"type":"title","template":"B"},
                      {
                        "template":["balance"],
                        "style":{"marginLeft":10},
                        "format":function (n){
                            return ("number" == (typeof n)) ? n.toFixed(2) : null;
                          }
                      }
                    ]
                },
                {
                  "type":"h",
                  "body":[
                      {"type":"title","template":"E"},
                      {
                        "template":["escrow"],
                        "style":{"marginLeft":10},
                        "format":function (n){
                            return ("number" == (typeof n)) ? n.toFixed(2) : null;
                          }
                      }
                    ]
                }
              ]
          },
        "avatar":{
            "type":"image",
            "text":{"template":["currency_id"]},
            "image":{"template":["picture"]}
          }
      }
  };
  let EntryBrief = React.useCallback(function (props){
    return React.createElement(slim_entry.Entry,Object.assign({},props,{"impl":impl}));
  },[]);
  let components = {"entry_brief":EntryBrief};
  return (
    <n.Isolation>
      <n.EnclosedCodeContainer
        label="melbourne.slim-table-page/TableListRemotePaged"
        code={function (){
          return "(\n  <n.Row style={{\"height\":400}}>\n    <ReactNative.ScrollView>\n      <slim_table_list.TableList\n        mini={true}\n        design={{\"type\":\"light\"}}\n        style={{\"minWidth\":200}}\n        display={{\n          \"brief\":{\"card\":{\"component\":\"mini\"}},\n          \"list\":{\"page\":{\"remote\":true,\"total\":200,\"display\":5}}\n        }}\n        views={views}\n        components={components}\n        control={control}>\n      </slim_table_list.TableList>\n    </ReactNative.ScrollView>\n  </n.Row>);";
        }()}>
        <n.Row style={{"height":400}}>
          <ReactNative.ScrollView>
            <slim_table_list.TableList
              mini={true}
              design={{"type":"light"}}
              style={{"minWidth":200}}
              display={{
                "brief":{"card":{"component":"mini"}},
                "list":{"page":{"remote":true,"total":200,"display":5}}
              }}
              views={views}
              components={components}
              control={control}>
            </slim_table_list.TableList>
          </ReactNative.ScrollView>
        </n.Row>
      </n.EnclosedCodeContainer>
    </n.Isolation>);
}

var MODULE = {
  "TableListPagedDemo":TableListPagedDemo,
  "TableListRemotePagedDemo":TableListRemotePagedDemo
};

export default MODULE