import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import slim_entry from './slim-entry'

import * as event_view from '../libs/xt/event/base-model'

import ui_text from './ui-text'

import ui_input from './ui-input'

import * as n from '../libs/js/react-native'

import ui_group from './ui-group'

import * as ext_view from '../libs/js/react/ext-model'

import k from '../libs/xt/lang/base-lib'

import base_palette from './base-palette'

import * as event_route from '../libs/xt/event/base-route'

import slim_table_list from './slim-table-list'

import ui_static from './ui-static'

import slim from './slim'

// melbourne.slim-table-search-test/TableListSearchDemo [32] 
function TableListSearchDemo(){
  let views = React.useCallback({
    "list":ext_view.makeView({
        "handler":function (args){
            return new Promise(function (resolve,reject){
              setTimeout(function (){
                try{
                  resolve(          (function (){
                              return k.arr_map(k.arr_range(40),function (i){
                                return {"id":"id-" + i,"balance":Math.random(),"escrow":args};
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
                      {"template":["balance"],"style":{"marginLeft":10}}
                    ]
                },
                {
                  "type":"h",
                  "body":[
                      {"type":"title","template":"E"},
                      {"template":["escrow"],"style":{"marginLeft":10}}
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
  let [example,setExample] = React.useState("A");
  let components = {"entry_brief":EntryBrief};
  React.useEffect(function (){
    if(example){
      setTimeout(function (){
        new Promise(function (){
          ext_view.refresh_args(views.list,[example]);
        });
      },100);
    }
  },[example]);
  return (
    <n.Isolation>
      <n.EnclosedCodeContainer
        label="melbourne.slim-table-search/TableListSearch"
        code={function (){
          return "(\n  <ui_input.Input\n    design={{\"type\":\"light\"}}\n    value={example}\n    onChangeText={setExample}>\n  </ui_input.Input>);\n(\n  <n.Row style={{\"height\":400}}>\n    <ReactNative.ScrollView>\n      <slim_table_list.TableList\n        mini={true}\n        design={{\"type\":\"light\"}}\n        style={{\"minWidth\":200}}\n        display={{\"brief\":{\"card\":{\"component\":\"mini\"}},\"list\":{}}}\n        views={views}\n        components={components}\n        control={control}>\n      </slim_table_list.TableList>\n    </ReactNative.ScrollView>\n  </n.Row>);";
        }()}>
        <ui_input.Input
          design={{"type":"light"}}
          value={example}
          onChangeText={setExample}>
        </ui_input.Input>
        <n.Row style={{"height":400}}>
          <ReactNative.ScrollView>
            <slim_table_list.TableList
              mini={true}
              design={{"type":"light"}}
              style={{"minWidth":200}}
              display={{"brief":{"card":{"component":"mini"}},"list":{}}}
              views={views}
              components={components}
              control={control}>
            </slim_table_list.TableList>
          </ReactNative.ScrollView>
        </n.Row>
      </n.EnclosedCodeContainer>
    </n.Isolation>);
}

var MODULE = {"TableListSearchDemo":TableListSearchDemo};

export default MODULE