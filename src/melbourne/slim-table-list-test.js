import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import slim_entry from './slim-entry'

import ui_text from './ui-text'

import n from '../js/react-native'

import ui_group from './ui-group'

import ext_view from '../js/react/ext-view'

import k from '../xt/lang/base-lib'

import base_palette from './base-palette'

import event_route from '../xt/lang/event-route'

import slim_table_list from './slim-table-list'

import ui_static from './ui-static'

import slim from './slim'

// melbourne.slim-table-list-test/TableListCardBriefDemo [30] 
function TableListCardBriefDemo(){
  let entry = {"id":"id-0","currency_id":"STATS","balance":1000,"escrow":50.5};
  let control = slim.useLocalControl();
  let design = {"type":"light"};
  let impl = {
    "type":"card",
    "body":{
        "title":{"type":"title","template":["currency_id"]},
        "main":{
            "type":"v",
            "body":[
                {
                  "type":"pair",
                  "title":{"template":"B"},
                  "text":{"template":["balance"]}
                },
                {
                  "type":"pair",
                  "title":{"template":"E"},
                  "text":{"template":["escrow"]}
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
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-table-list/TableListCardBrief"
      code={function (){
        return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"width\":200}}>\n      <slim_table_list.TableListCardBrief design={{\"type\":\"light\"}} control={control} entry={entry}>\n        <slim_entry.Entry design={{\"type\":\"light\"}} impl={impl} entry={entry}></slim_entry.Entry>\n      </slim_table_list.TableListCardBrief>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"width\":200}}>\n      <slim_table_list.TableListCardBrief design={{\"type\":\"dark\"}} control={control} entry={entry}>\n        <slim_entry.Entry design={{\"type\":\"dark\"}} impl={impl} entry={entry}></slim_entry.Entry>\n      </slim_table_list.TableListCardBrief>\n    </ui_static.Div>\n  </n.Row>);";
      }()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"width":200}}>
          <slim_table_list.TableListCardBrief design={{"type":"light"}} control={control} entry={entry}>
            <slim_entry.Entry design={{"type":"light"}} impl={impl} entry={entry}></slim_entry.Entry>
          </slim_table_list.TableListCardBrief>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"width":200}}>
          <slim_table_list.TableListCardBrief design={{"type":"dark"}} control={control} entry={entry}>
            <slim_entry.Entry design={{"type":"dark"}} impl={impl} entry={entry}></slim_entry.Entry>
          </slim_table_list.TableListCardBrief>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-table-list-test/TableListCardNavDemo [78] 
function TableListCardNavDemo(){
  let entry = {"id":"id-0","currency_id":"STATS","balance":1000,"escrow":50.5};
  let control = slim.useLocalControl();
  let design = {"type":"light"};
  let impl = {
    "type":"card",
    "body":{
        "title":{"type":"title","template":["currency_id"]},
        "main":{
            "type":"v",
            "body":[
                {
                  "type":"pair",
                  "title":{"template":"B"},
                  "text":{"template":["balance"]}
                },
                {
                  "type":"pair",
                  "title":{"template":"E"},
                  "text":{"template":["escrow"]}
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
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-table-list/TableListCardNav"
      code={function (){
        return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"width\":200}}>\n      <slim_table_list.TableListCardNav design={{\"type\":\"light\"}} control={control} entry={entry}>\n        <slim_entry.Entry design={{\"type\":\"light\"}} impl={impl} entry={entry}></slim_entry.Entry>\n      </slim_table_list.TableListCardNav>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"width\":200}}>\n      <slim_table_list.TableListCardNav design={{\"type\":\"dark\"}} control={control} entry={entry}>\n        <slim_entry.Entry design={{\"type\":\"dark\"}} impl={impl} entry={entry}></slim_entry.Entry>\n      </slim_table_list.TableListCardNav>\n    </ui_static.Div>\n  </n.Row>);";
      }()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"width":200}}>
          <slim_table_list.TableListCardNav design={{"type":"light"}} control={control} entry={entry}>
            <slim_entry.Entry design={{"type":"light"}} impl={impl} entry={entry}></slim_entry.Entry>
          </slim_table_list.TableListCardNav>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"width":200}}>
          <slim_table_list.TableListCardNav design={{"type":"dark"}} control={control} entry={entry}>
            <slim_entry.Entry design={{"type":"dark"}} impl={impl} entry={entry}></slim_entry.Entry>
          </slim_table_list.TableListCardNav>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-table-list-test/TableListCardSwipeDemo [126] 
function TableListCardSwipeDemo(){
  let entry = {"id":"id-0","currency_id":"STATS","balance":1000,"escrow":50.5};
  let control = slim.useLocalControl();
  let design = {"type":"light"};
  let impl = {
    "type":"card",
    "body":{
        "title":{"type":"title","template":["currency_id"]},
        "main":{
            "type":"v",
            "body":[
                {
                  "type":"pair",
                  "title":{"template":"B"},
                  "text":{"template":["balance"]}
                },
                {
                  "type":"pair",
                  "title":{"template":"E"},
                  "text":{"template":["escrow"]}
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
  return (
    <n.Isolation>
      <n.EnclosedCodeContainer
        label="melbourne.slim-table-list/TableListCardSwipe"
        code={function (){
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}}>\n      <slim_table_list.TableListCardSwipe\n        design={{\"type\":\"light\"}}\n        style={{\"width\":200}}\n        control={control}\n        entry={entry}>\n        <slim_entry.Entry design={{\"type\":\"light\"}} impl={impl} entry={entry}></slim_entry.Entry>\n      </slim_table_list.TableListCardSwipe>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}}>\n      <slim_table_list.TableListCardSwipe\n        design={{\"type\":\"dark\"}}\n        style={{\"width\":200}}\n        control={control}\n        entry={entry}>\n        <slim_entry.Entry design={{\"type\":\"dark\"}} impl={impl} entry={entry}></slim_entry.Entry>\n      </slim_table_list.TableListCardSwipe>\n    </ui_static.Div>\n  </n.Row>);";
        }()}>
        <n.Row>
          <ui_static.Div design={{"type":"light"}}>
            <slim_table_list.TableListCardSwipe
              design={{"type":"light"}}
              style={{"width":200}}
              control={control}
              entry={entry}>
              <slim_entry.Entry design={{"type":"light"}} impl={impl} entry={entry}></slim_entry.Entry>
            </slim_table_list.TableListCardSwipe>
          </ui_static.Div>
          <ui_static.Div design={{"type":"dark"}}>
            <slim_table_list.TableListCardSwipe
              design={{"type":"dark"}}
              style={{"width":200}}
              control={control}
              entry={entry}>
              <slim_entry.Entry design={{"type":"dark"}} impl={impl} entry={entry}></slim_entry.Entry>
            </slim_table_list.TableListCardSwipe>
          </ui_static.Div>
        </n.Row>
      </n.EnclosedCodeContainer>
    </n.Isolation>);
}

// melbourne.slim-table-list-test/TableListCardFoldDemo [175] 
function TableListCardFoldDemo(){
  let entry = {"id":"id-0","currency_id":"STATS","balance":1000,"escrow":50.5};
  let control = slim.useLocalControl();
  let design = {"type":"light"};
  let impl = {
    "type":"card",
    "body":{
        "title":{"type":"title","template":["currency_id"]},
        "main":{
            "type":"v",
            "body":[
                {
                  "type":"pair",
                  "title":{"template":"B"},
                  "text":{"template":["balance"]}
                },
                {
                  "type":"pair",
                  "title":{"template":"E"},
                  "text":{"template":["escrow"]}
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
  let EntryDetail = React.useCallback(function (props){
    return React.createElement(slim_entry.Entry,Object.assign({},props,{impl}));
  },[]);
  let components = {"entry_detail":EntryDetail};
  return (
    <n.Isolation>
      <n.EnclosedCodeContainer
        label="melbourne.slim-table-list/TableListCardFold"
        code={function (){
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}}>\n      <slim_table_list.TableListCardFold\n        design={{\"type\":\"light\"}}\n        style={{\"width\":200}}\n        components={components}\n        control={control}\n        entry={entry}>\n        <slim_entry.Entry\n          design={{\"type\":\"light\"}}\n          impl={{\"type\":\"card\",\"body\":{\"title\":{\"template\":[\"currency_id\"]}}}}\n          entry={entry}>\n        </slim_entry.Entry>\n      </slim_table_list.TableListCardFold>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}}>\n      <slim_table_list.TableListCardFold\n        design={{\"type\":\"dark\"}}\n        style={{\"width\":200}}\n        components={components}\n        control={control}\n        entry={entry}>\n        <slim_entry.Entry\n          design={{\"type\":\"dark\"}}\n          impl={{\"type\":\"card\",\"body\":{\"title\":{\"template\":[\"currency_id\"]}}}}\n          entry={entry}>\n        </slim_entry.Entry>\n      </slim_table_list.TableListCardFold>\n    </ui_static.Div>\n  </n.Row>);";
        }()}>
        <n.Row>
          <ui_static.Div design={{"type":"light"}}>
            <slim_table_list.TableListCardFold
              design={{"type":"light"}}
              style={{"width":200}}
              components={components}
              control={control}
              entry={entry}>
              <slim_entry.Entry
                design={{"type":"light"}}
                impl={{"type":"card","body":{"title":{"template":["currency_id"]}}}}
                entry={entry}>
              </slim_entry.Entry>
            </slim_table_list.TableListCardFold>
          </ui_static.Div>
          <ui_static.Div design={{"type":"dark"}}>
            <slim_table_list.TableListCardFold
              design={{"type":"dark"}}
              style={{"width":200}}
              components={components}
              control={control}
              entry={entry}>
              <slim_entry.Entry
                design={{"type":"dark"}}
                impl={{"type":"card","body":{"title":{"template":["currency_id"]}}}}
                entry={entry}>
              </slim_entry.Entry>
            </slim_table_list.TableListCardFold>
          </ui_static.Div>
        </n.Row>
      </n.EnclosedCodeContainer>
    </n.Isolation>);
}

// melbourne.slim-table-list-test/TableListCardDemo [236] 
function TableListCardDemo(){
  let entry = {"id":"id-0","currency_id":"STATS","balance":1000,"escrow":50.5};
  let control = slim.useLocalControl();
  let design = {"type":"light"};
  let impl = {
    "type":"card",
    "body":{
        "title":{"type":"title","template":["currency_id"]},
        "main":{
            "type":"v",
            "body":[
                {
                  "type":"pair",
                  "title":{"template":"B"},
                  "text":{"template":["balance"]}
                },
                {
                  "type":"pair",
                  "title":{"template":"E"},
                  "text":{"template":["escrow"]}
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
    return React.createElement(slim_entry.Entry,Object.assign({},props,{
      "impl":{"type":"card","body":{"title":{"template":["currency_id"]}}}
    }));
  },[]);
  let EntryDetail = React.useCallback(function (props){
    return React.createElement(slim_entry.Entry,Object.assign({},props,{impl}));
  },[]);
  let components = {"entry_brief":EntryBrief,"entry_detail":EntryDetail};
  let [type,setType] = React.useState("fold");
  let [swipe,setSwipe] = React.useState("left");
  return (
    <n.Isolation>
      <n.EnclosedCodeContainer
        label="melbourne.slim-table-list/TableListCard"
        code={function (){
          return "(\n  <n.Row>\n    <ui_text.TabsAccent\n      value={type}\n      setValue={setType}\n      data={[\"fold\",\"mini\",\"swipe\"]}>\n    </ui_text.TabsAccent>\n    <ui_text.TabsAccent value={swipe} setValue={setSwipe} data={[\"left\",\"right\"]}></ui_text.TabsAccent>\n  </n.Row>);\n(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}}>\n      <slim_table_list.TableListCard\n        key={swipe}\n        design={{\"type\":\"light\"}}\n        style={{\"width\":200}}\n        display={{\n          \"brief\":{\"card\":{\"component\":type}},\n          \"swipe\":{\"direction\":swipe,\"showDelete\":false}\n        }}\n        components={components}\n        control={control}\n        entry={entry}>\n        <slim_entry.Entry\n          design={{\"type\":\"light\"}}\n          impl={{\"type\":\"card\",\"body\":{\"title\":{\"template\":[\"currency_id\"]}}}}\n          entry={entry}>\n        </slim_entry.Entry>\n      </slim_table_list.TableListCard>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}}>\n      <slim_table_list.TableListCard\n        key={swipe}\n        design={{\"type\":\"dark\"}}\n        style={{\"width\":200}}\n        display={{\n          \"brief\":{\"card\":{\"component\":type}},\n          \"swipe\":{\"direction\":swipe,\"showDelete\":false}\n        }}\n        components={components}\n        control={control}\n        entry={entry}>\n        <slim_entry.Entry\n          design={{\"type\":\"dark\"}}\n          impl={{\"type\":\"card\",\"body\":{\"title\":{\"template\":[\"currency_id\"]}}}}\n          entry={entry}>\n        </slim_entry.Entry>\n      </slim_table_list.TableListCard>\n    </ui_static.Div>\n  </n.Row>);";
        }()}>
        <n.Row>
          <ui_text.TabsAccent
            value={type}
            setValue={setType}
            data={["fold","mini","swipe"]}>
          </ui_text.TabsAccent>
          <ui_text.TabsAccent value={swipe} setValue={setSwipe} data={["left","right"]}></ui_text.TabsAccent>
        </n.Row>
        <n.Row>
          <ui_static.Div design={{"type":"light"}}>
            <slim_table_list.TableListCard
              key={swipe}
              design={{"type":"light"}}
              style={{"width":200}}
              display={{
                "brief":{"card":{"component":type}},
                "swipe":{"direction":swipe,"showDelete":false}
              }}
              components={components}
              control={control}
              entry={entry}>
              <slim_entry.Entry
                design={{"type":"light"}}
                impl={{"type":"card","body":{"title":{"template":["currency_id"]}}}}
                entry={entry}>
              </slim_entry.Entry>
            </slim_table_list.TableListCard>
          </ui_static.Div>
          <ui_static.Div design={{"type":"dark"}}>
            <slim_table_list.TableListCard
              key={swipe}
              design={{"type":"dark"}}
              style={{"width":200}}
              display={{
                "brief":{"card":{"component":type}},
                "swipe":{"direction":swipe,"showDelete":false}
              }}
              components={components}
              control={control}
              entry={entry}>
              <slim_entry.Entry
                design={{"type":"dark"}}
                impl={{"type":"card","body":{"title":{"template":["currency_id"]}}}}
                entry={entry}>
              </slim_entry.Entry>
            </slim_table_list.TableListCard>
          </ui_static.Div>
        </n.Row>
      </n.EnclosedCodeContainer>
    </n.Isolation>);
}

// melbourne.slim-table-list-test/TableListViewEntriesDemo [340] 
function TableListViewEntriesDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-table-list/TableListViewEntries"
      code={function (){
        return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1,\"padding\":5}}>\n      <slim_table_list.TableListViewEntries\n        design={{\"type\":\"light\"}}\n        entries={[\n          {\n          \"currency_id\":\"STATS\",\n          \"name\":\"HIJ\",\n          \"balance\":130400,\n          \"escrow\":1250.5\n        },\n          {\"currency_id\":\"STATS\",\"name\":\"TUV\",\"balance\":79,\"escrow\":37},\n          {\n          \"currency_id\":\"STATS\",\n          \"name\":\"NOP\",\n          \"balance\":1000,\n          \"escrow\":50.5\n        },\n          {\"currency_id\":\"STATS\",\"name\":\"ABC\",\"balance\":506,\"escrow\":50.5}\n        ]}\n        display={{\n          \"brief\":{\n            \"type\":\"v\",\n            \"body\":[\n              {\"template\":[\"name\"]},\n              {\"template\":[\"balance\"]},\n              {\"template\":[\"escrow\"],\"style\":{\"textAlign\":\"right\"}}\n            ]\n          }\n        }}\n        impl={{}}>\n      </slim_table_list.TableListViewEntries>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1,\"padding\":5}}>\n      <slim_table_list.TableListViewEntries\n        design={{\"type\":\"dark\"}}\n        entries={[\n          {\n          \"currency_id\":\"STATS\",\n          \"name\":\"HIJ\",\n          \"balance\":130400,\n          \"escrow\":1250.5\n        },\n          {\"currency_id\":\"STATS\",\"name\":\"TUV\",\"balance\":79,\"escrow\":37},\n          {\n          \"currency_id\":\"STATS\",\n          \"name\":\"NOP\",\n          \"balance\":1000,\n          \"escrow\":50.5\n        },\n          {\"currency_id\":\"STATS\",\"name\":\"ABC\",\"balance\":506,\"escrow\":50.5}\n        ]}\n        display={{\n          \"brief\":{\n            \"type\":\"v\",\n            \"body\":[\n              {\"template\":[\"name\"]},\n              {\"template\":[\"balance\"]},\n              {\"template\":[\"escrow\"],\"style\":{\"textAlign\":\"right\"}}\n            ]\n          }\n        }}\n        impl={{}}>\n      </slim_table_list.TableListViewEntries>\n    </ui_static.Div>\n  </n.Row>);";
      }()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1,"padding":5}}>
          <slim_table_list.TableListViewEntries
            design={{"type":"light"}}
            entries={[
              {
              "currency_id":"STATS",
              "name":"HIJ",
              "balance":130400,
              "escrow":1250.5
            },
              {"currency_id":"STATS","name":"TUV","balance":79,"escrow":37},
              {
              "currency_id":"STATS",
              "name":"NOP",
              "balance":1000,
              "escrow":50.5
            },
              {"currency_id":"STATS","name":"ABC","balance":506,"escrow":50.5}
            ]}
            display={{
              "brief":{
                "type":"v",
                "body":[
                  {"template":["name"]},
                  {"template":["balance"]},
                  {"template":["escrow"],"style":{"textAlign":"right"}}
                ]
              }
            }}
            impl={{}}>
          </slim_table_list.TableListViewEntries>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1,"padding":5}}>
          <slim_table_list.TableListViewEntries
            design={{"type":"dark"}}
            entries={[
              {
              "currency_id":"STATS",
              "name":"HIJ",
              "balance":130400,
              "escrow":1250.5
            },
              {"currency_id":"STATS","name":"TUV","balance":79,"escrow":37},
              {
              "currency_id":"STATS",
              "name":"NOP",
              "balance":1000,
              "escrow":50.5
            },
              {"currency_id":"STATS","name":"ABC","balance":506,"escrow":50.5}
            ]}
            display={{
              "brief":{
                "type":"v",
                "body":[
                  {"template":["name"]},
                  {"template":["balance"]},
                  {"template":["escrow"],"style":{"textAlign":"right"}}
                ]
              }
            }}
            impl={{}}>
          </slim_table_list.TableListViewEntries>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-table-list-test/TableListViewGroupDemo [399] 
function TableListViewGroupDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-table-list/TableListViewGroup"
      code={function (){
        return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1,\"padding\":5}}>\n      <slim_table_list.TableListViewGroup\n        design={{\"type\":\"light\"}}\n        group={{\n          \"name\":\"STATS\",\n          \"entries\":[\n            {\n            \"currency_id\":\"STATS\",\n            \"name\":\"NOP\",\n            \"balance\":1000,\n            \"escrow\":50.5\n          },\n            {\"currency_id\":\"STATS\",\"name\":\"TUV\",\"balance\":79,\"escrow\":37},\n            {\n            \"currency_id\":\"STATS\",\n            \"name\":\"HIJ\",\n            \"balance\":130400,\n            \"escrow\":1250.5\n          },\n            {\"currency_id\":\"STATS\",\"name\":\"ABC\",\"balance\":506,\"escrow\":50.5}\n          ]\n        }}\n        display={{\n          \"brief\":{\n            \"type\":\"v\",\n            \"body\":[\n              {\"template\":[\"name\"]},\n              {\"template\":[\"balance\"]},\n              {\"template\":[\"escrow\"],\"style\":{\"textAlign\":\"right\"}}\n            ]\n          }\n        }}\n        impl={{}}>\n      </slim_table_list.TableListViewGroup>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1,\"padding\":5}}>\n      <slim_table_list.TableListViewGroup\n        design={{\"type\":\"dark\"}}\n        group={{\n          \"name\":\"STATS\",\n          \"entries\":[\n            {\n            \"currency_id\":\"STATS\",\n            \"name\":\"NOP\",\n            \"balance\":1000,\n            \"escrow\":50.5\n          },\n            {\"currency_id\":\"STATS\",\"name\":\"TUV\",\"balance\":79,\"escrow\":37},\n            {\n            \"currency_id\":\"STATS\",\n            \"name\":\"HIJ\",\n            \"balance\":130400,\n            \"escrow\":1250.5\n          },\n            {\"currency_id\":\"STATS\",\"name\":\"ABC\",\"balance\":506,\"escrow\":50.5}\n          ]\n        }}\n        display={{\n          \"brief\":{\n            \"type\":\"v\",\n            \"body\":[\n              {\"template\":[\"name\"]},\n              {\"template\":[\"balance\"]},\n              {\"template\":[\"escrow\"],\"style\":{\"textAlign\":\"right\"}}\n            ]\n          }\n        }}\n        impl={{}}>\n      </slim_table_list.TableListViewGroup>\n    </ui_static.Div>\n  </n.Row>);";
      }()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1,"padding":5}}>
          <slim_table_list.TableListViewGroup
            design={{"type":"light"}}
            group={{
              "name":"STATS",
              "entries":[
                {
                "currency_id":"STATS",
                "name":"NOP",
                "balance":1000,
                "escrow":50.5
              },
                {"currency_id":"STATS","name":"TUV","balance":79,"escrow":37},
                {
                "currency_id":"STATS",
                "name":"HIJ",
                "balance":130400,
                "escrow":1250.5
              },
                {"currency_id":"STATS","name":"ABC","balance":506,"escrow":50.5}
              ]
            }}
            display={{
              "brief":{
                "type":"v",
                "body":[
                  {"template":["name"]},
                  {"template":["balance"]},
                  {"template":["escrow"],"style":{"textAlign":"right"}}
                ]
              }
            }}
            impl={{}}>
          </slim_table_list.TableListViewGroup>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1,"padding":5}}>
          <slim_table_list.TableListViewGroup
            design={{"type":"dark"}}
            group={{
              "name":"STATS",
              "entries":[
                {
                "currency_id":"STATS",
                "name":"NOP",
                "balance":1000,
                "escrow":50.5
              },
                {"currency_id":"STATS","name":"TUV","balance":79,"escrow":37},
                {
                "currency_id":"STATS",
                "name":"HIJ",
                "balance":130400,
                "escrow":1250.5
              },
                {"currency_id":"STATS","name":"ABC","balance":506,"escrow":50.5}
              ]
            }}
            display={{
              "brief":{
                "type":"v",
                "body":[
                  {"template":["name"]},
                  {"template":["balance"]},
                  {"template":["escrow"],"style":{"textAlign":"right"}}
                ]
              }
            }}
            impl={{}}>
          </slim_table_list.TableListViewGroup>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-table-list-test/TableListViewPagedDemo [454] 
function TableListViewPagedDemo(){
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-table-list/TableListViewPaged"
      code={function (){
        return "(\n  <ReactNative.View>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1,\"padding\":5}}>\n      <slim_table_list.TableListViewPaged\n        design={{\"type\":\"light\"}}\n        control={{}}\n        impl={{\n          \"page\":{\"display\":5},\n          \"header\":{\n            \"format\":function (s){\n              return s.toUpperCase();\n            }\n          }\n        }}\n        display={{\n          \"brief\":{\n            \"type\":\"v\",\n            \"body\":[{\"template\":[\"name\"]},{\"template\":[\"amount\"]}]\n          }\n        }}\n        entries={[\n          {\"id\":\"id-0\",\"name\":\"name-0\",\"amount\":0.4698591823230268},\n          {\"id\":\"id-1\",\"name\":\"name-1\",\"amount\":0.8326679649381208},\n          {\"id\":\"id-2\",\"name\":\"name-2\",\"amount\":0.45607635846062966},\n          {\"id\":\"id-3\",\"name\":\"name-3\",\"amount\":0.9588514809435459},\n          {\"id\":\"id-4\",\"name\":\"name-4\",\"amount\":0.811290516042649},\n          {\"id\":\"id-5\",\"name\":\"name-5\",\"amount\":0.1081713384599845},\n          {\"id\":\"id-6\",\"name\":\"name-6\",\"amount\":0.9064037795723356},\n          {\"id\":\"id-7\",\"name\":\"name-7\",\"amount\":0.4044530565403974},\n          {\"id\":\"id-8\",\"name\":\"name-8\",\"amount\":0.32591339405072883},\n          {\"id\":\"id-9\",\"name\":\"name-9\",\"amount\":0.5514758060894902},\n          {\"id\":\"id-10\",\"name\":\"name-10\",\"amount\":0.3132063912077995},\n          {\"id\":\"id-11\",\"name\":\"name-11\",\"amount\":0.7835465487503939},\n          {\"id\":\"id-12\",\"name\":\"name-12\",\"amount\":0.2752671500040297},\n          {\"id\":\"id-13\",\"name\":\"name-13\",\"amount\":0.49507459680317134},\n          {\"id\":\"id-14\",\"name\":\"name-14\",\"amount\":0.9171810205854535},\n          {\"id\":\"id-15\",\"name\":\"name-15\",\"amount\":0.12066853488176954},\n          {\"id\":\"id-16\",\"name\":\"name-16\",\"amount\":0.6125575155779568},\n          {\"id\":\"id-17\",\"name\":\"name-17\",\"amount\":0.08410752408133015},\n          {\"id\":\"id-18\",\"name\":\"name-18\",\"amount\":0.4179101039939944},\n          {\"id\":\"id-19\",\"name\":\"name-19\",\"amount\":0.7359221362124161},\n          {\"id\":\"id-20\",\"name\":\"name-20\",\"amount\":0.32528290539968796},\n          {\"id\":\"id-21\",\"name\":\"name-21\",\"amount\":0.5624830335229222},\n          {\"id\":\"id-22\",\"name\":\"name-22\",\"amount\":0.17679423441454312},\n          {\"id\":\"id-23\",\"name\":\"name-23\",\"amount\":0.24728983222218925},\n          {\"id\":\"id-24\",\"name\":\"name-24\",\"amount\":0.28668858222251836},\n          {\"id\":\"id-25\",\"name\":\"name-25\",\"amount\":0.586055106951701},\n          {\"id\":\"id-26\",\"name\":\"name-26\",\"amount\":0.5209908746307647},\n          {\"id\":\"id-27\",\"name\":\"name-27\",\"amount\":0.7552899367551358},\n          {\"id\":\"id-28\",\"name\":\"name-28\",\"amount\":0.052603102684956604},\n          {\"id\":\"id-29\",\"name\":\"name-29\",\"amount\":0.9791452845730505},\n          {\"id\":\"id-30\",\"name\":\"name-30\",\"amount\":0.5619646595425268},\n          {\"id\":\"id-31\",\"name\":\"name-31\",\"amount\":0.4665988105623011},\n          {\"id\":\"id-32\",\"name\":\"name-32\",\"amount\":0.5021248783937962},\n          {\"id\":\"id-33\",\"name\":\"name-33\",\"amount\":0.3516764594637327},\n          {\"id\":\"id-34\",\"name\":\"name-34\",\"amount\":0.5447924354280691},\n          {\"id\":\"id-35\",\"name\":\"name-35\",\"amount\":0.7798627460866704},\n          {\"id\":\"id-36\",\"name\":\"name-36\",\"amount\":0.21379088002830138},\n          {\"id\":\"id-37\",\"name\":\"name-37\",\"amount\":0.7764121940824699},\n          {\"id\":\"id-38\",\"name\":\"name-38\",\"amount\":0.37815650678468304},\n          {\"id\":\"id-39\",\"name\":\"name-39\",\"amount\":0.9047748994078956},\n          {\"id\":\"id-40\",\"name\":\"name-40\",\"amount\":0.9932738527352011},\n          {\"id\":\"id-41\",\"name\":\"name-41\",\"amount\":0.28927118432805377},\n          {\"id\":\"id-42\",\"name\":\"name-42\",\"amount\":0.6599974018226205},\n          {\"id\":\"id-43\",\"name\":\"name-43\",\"amount\":0.41459451033196937},\n          {\"id\":\"id-44\",\"name\":\"name-44\",\"amount\":0.024317871091230403},\n          {\"id\":\"id-45\",\"name\":\"name-45\",\"amount\":0.3204134924258474},\n          {\"id\":\"id-46\",\"name\":\"name-46\",\"amount\":0.21008768346987994},\n          {\"id\":\"id-47\",\"name\":\"name-47\",\"amount\":0.7426366035853988},\n          {\"id\":\"id-48\",\"name\":\"name-48\",\"amount\":0.7015369361303512},\n          {\"id\":\"id-49\",\"name\":\"name-49\",\"amount\":0.2897719891920908},\n          {\"id\":\"id-50\",\"name\":\"name-50\",\"amount\":0.8483265131229749},\n          {\"id\":\"id-51\",\"name\":\"name-51\",\"amount\":0.5248626222277419},\n          {\"id\":\"id-52\",\"name\":\"name-52\",\"amount\":0.3218646102330879},\n          {\"id\":\"id-53\",\"name\":\"name-53\",\"amount\":0.5079280310258891},\n          {\"id\":\"id-54\",\"name\":\"name-54\",\"amount\":0.9163442317166635},\n          {\"id\":\"id-55\",\"name\":\"name-55\",\"amount\":0.8635535649401519},\n          {\"id\":\"id-56\",\"name\":\"name-56\",\"amount\":0.4608573037820973},\n          {\"id\":\"id-57\",\"name\":\"name-57\",\"amount\":0.2117081894794035},\n          {\"id\":\"id-58\",\"name\":\"name-58\",\"amount\":0.8300451006236782},\n          {\"id\":\"id-59\",\"name\":\"name-59\",\"amount\":0.04114874640275734},\n          {\"id\":\"id-60\",\"name\":\"name-60\",\"amount\":0.040717401116493135},\n          {\"id\":\"id-61\",\"name\":\"name-61\",\"amount\":0.03360441091151789},\n          {\"id\":\"id-62\",\"name\":\"name-62\",\"amount\":0.7720053331952813},\n          {\"id\":\"id-63\",\"name\":\"name-63\",\"amount\":0.94868527454029},\n          {\"id\":\"id-64\",\"name\":\"name-64\",\"amount\":0.8088171180371246},\n          {\"id\":\"id-65\",\"name\":\"name-65\",\"amount\":0.4550972146433866},\n          {\"id\":\"id-66\",\"name\":\"name-66\",\"amount\":0.4851829444381994},\n          {\"id\":\"id-67\",\"name\":\"name-67\",\"amount\":0.5098743988888469},\n          {\"id\":\"id-68\",\"name\":\"name-68\",\"amount\":0.18866730062970805},\n          {\"id\":\"id-69\",\"name\":\"name-69\",\"amount\":0.8261877281944049},\n          {\"id\":\"id-70\",\"name\":\"name-70\",\"amount\":0.013184559300283172},\n          {\"id\":\"id-71\",\"name\":\"name-71\",\"amount\":0.6797026549436175},\n          {\"id\":\"id-72\",\"name\":\"name-72\",\"amount\":0.23969012180189675},\n          {\"id\":\"id-73\",\"name\":\"name-73\",\"amount\":0.3469208486888248},\n          {\"id\":\"id-74\",\"name\":\"name-74\",\"amount\":0.14737369902683806},\n          {\"id\":\"id-75\",\"name\":\"name-75\",\"amount\":0.17554761404135488},\n          {\"id\":\"id-76\",\"name\":\"name-76\",\"amount\":0.767818050959243},\n          {\"id\":\"id-77\",\"name\":\"name-77\",\"amount\":0.0014090723224391422},\n          {\"id\":\"id-78\",\"name\":\"name-78\",\"amount\":0.2873940477614242},\n          {\"id\":\"id-79\",\"name\":\"name-79\",\"amount\":0.9591487805136462},\n          {\"id\":\"id-80\",\"name\":\"name-80\",\"amount\":0.4658562458825425},\n          {\"id\":\"id-81\",\"name\":\"name-81\",\"amount\":0.8108419709646011},\n          {\"id\":\"id-82\",\"name\":\"name-82\",\"amount\":0.3992202052315269},\n          {\"id\":\"id-83\",\"name\":\"name-83\",\"amount\":0.6293768867614652},\n          {\"id\":\"id-84\",\"name\":\"name-84\",\"amount\":0.3307088128946608},\n          {\"id\":\"id-85\",\"name\":\"name-85\",\"amount\":0.9291938653510455},\n          {\"id\":\"id-86\",\"name\":\"name-86\",\"amount\":0.7636375751901562},\n          {\"id\":\"id-87\",\"name\":\"name-87\",\"amount\":0.30859508200205743},\n          {\"id\":\"id-88\",\"name\":\"name-88\",\"amount\":0.5039841820508396},\n          {\"id\":\"id-89\",\"name\":\"name-89\",\"amount\":0.0438184014211751},\n          {\"id\":\"id-90\",\"name\":\"name-90\",\"amount\":0.24809202525591},\n          {\"id\":\"id-91\",\"name\":\"name-91\",\"amount\":0.3095085667369567},\n          {\"id\":\"id-92\",\"name\":\"name-92\",\"amount\":0.11315818302159875},\n          {\"id\":\"id-93\",\"name\":\"name-93\",\"amount\":0.2628451043962282},\n          {\"id\":\"id-94\",\"name\":\"name-94\",\"amount\":0.9061389905225958},\n          {\"id\":\"id-95\",\"name\":\"name-95\",\"amount\":0.8547491618227278},\n          {\"id\":\"id-96\",\"name\":\"name-96\",\"amount\":0.6523882796950892},\n          {\"id\":\"id-97\",\"name\":\"name-97\",\"amount\":0.17226996651341786},\n          {\"id\":\"id-98\",\"name\":\"name-98\",\"amount\":0.8112611682253303},\n          {\"id\":\"id-99\",\"name\":\"name-99\",\"amount\":0.3880442725734252}\n        ]}>\n      </slim_table_list.TableListViewPaged>\n    </ui_static.Div>\n  </ReactNative.View>);";
      }()}>
      <ReactNative.View>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1,"padding":5}}>
          <slim_table_list.TableListViewPaged
            design={{"type":"light"}}
            control={{}}
            impl={{
              "page":{"display":5},
              "header":{
                "format":function (s){
                  return s.toUpperCase();
                }
              }
            }}
            display={{
              "brief":{
                "type":"v",
                "body":[{"template":["name"]},{"template":["amount"]}]
              }
            }}
            entries={[
              {"id":"id-0","name":"name-0","amount":0.4698591823230268},
              {"id":"id-1","name":"name-1","amount":0.8326679649381208},
              {"id":"id-2","name":"name-2","amount":0.45607635846062966},
              {"id":"id-3","name":"name-3","amount":0.9588514809435459},
              {"id":"id-4","name":"name-4","amount":0.811290516042649},
              {"id":"id-5","name":"name-5","amount":0.1081713384599845},
              {"id":"id-6","name":"name-6","amount":0.9064037795723356},
              {"id":"id-7","name":"name-7","amount":0.4044530565403974},
              {"id":"id-8","name":"name-8","amount":0.32591339405072883},
              {"id":"id-9","name":"name-9","amount":0.5514758060894902},
              {"id":"id-10","name":"name-10","amount":0.3132063912077995},
              {"id":"id-11","name":"name-11","amount":0.7835465487503939},
              {"id":"id-12","name":"name-12","amount":0.2752671500040297},
              {"id":"id-13","name":"name-13","amount":0.49507459680317134},
              {"id":"id-14","name":"name-14","amount":0.9171810205854535},
              {"id":"id-15","name":"name-15","amount":0.12066853488176954},
              {"id":"id-16","name":"name-16","amount":0.6125575155779568},
              {"id":"id-17","name":"name-17","amount":0.08410752408133015},
              {"id":"id-18","name":"name-18","amount":0.4179101039939944},
              {"id":"id-19","name":"name-19","amount":0.7359221362124161},
              {"id":"id-20","name":"name-20","amount":0.32528290539968796},
              {"id":"id-21","name":"name-21","amount":0.5624830335229222},
              {"id":"id-22","name":"name-22","amount":0.17679423441454312},
              {"id":"id-23","name":"name-23","amount":0.24728983222218925},
              {"id":"id-24","name":"name-24","amount":0.28668858222251836},
              {"id":"id-25","name":"name-25","amount":0.586055106951701},
              {"id":"id-26","name":"name-26","amount":0.5209908746307647},
              {"id":"id-27","name":"name-27","amount":0.7552899367551358},
              {"id":"id-28","name":"name-28","amount":0.052603102684956604},
              {"id":"id-29","name":"name-29","amount":0.9791452845730505},
              {"id":"id-30","name":"name-30","amount":0.5619646595425268},
              {"id":"id-31","name":"name-31","amount":0.4665988105623011},
              {"id":"id-32","name":"name-32","amount":0.5021248783937962},
              {"id":"id-33","name":"name-33","amount":0.3516764594637327},
              {"id":"id-34","name":"name-34","amount":0.5447924354280691},
              {"id":"id-35","name":"name-35","amount":0.7798627460866704},
              {"id":"id-36","name":"name-36","amount":0.21379088002830138},
              {"id":"id-37","name":"name-37","amount":0.7764121940824699},
              {"id":"id-38","name":"name-38","amount":0.37815650678468304},
              {"id":"id-39","name":"name-39","amount":0.9047748994078956},
              {"id":"id-40","name":"name-40","amount":0.9932738527352011},
              {"id":"id-41","name":"name-41","amount":0.28927118432805377},
              {"id":"id-42","name":"name-42","amount":0.6599974018226205},
              {"id":"id-43","name":"name-43","amount":0.41459451033196937},
              {"id":"id-44","name":"name-44","amount":0.024317871091230403},
              {"id":"id-45","name":"name-45","amount":0.3204134924258474},
              {"id":"id-46","name":"name-46","amount":0.21008768346987994},
              {"id":"id-47","name":"name-47","amount":0.7426366035853988},
              {"id":"id-48","name":"name-48","amount":0.7015369361303512},
              {"id":"id-49","name":"name-49","amount":0.2897719891920908},
              {"id":"id-50","name":"name-50","amount":0.8483265131229749},
              {"id":"id-51","name":"name-51","amount":0.5248626222277419},
              {"id":"id-52","name":"name-52","amount":0.3218646102330879},
              {"id":"id-53","name":"name-53","amount":0.5079280310258891},
              {"id":"id-54","name":"name-54","amount":0.9163442317166635},
              {"id":"id-55","name":"name-55","amount":0.8635535649401519},
              {"id":"id-56","name":"name-56","amount":0.4608573037820973},
              {"id":"id-57","name":"name-57","amount":0.2117081894794035},
              {"id":"id-58","name":"name-58","amount":0.8300451006236782},
              {"id":"id-59","name":"name-59","amount":0.04114874640275734},
              {"id":"id-60","name":"name-60","amount":0.040717401116493135},
              {"id":"id-61","name":"name-61","amount":0.03360441091151789},
              {"id":"id-62","name":"name-62","amount":0.7720053331952813},
              {"id":"id-63","name":"name-63","amount":0.94868527454029},
              {"id":"id-64","name":"name-64","amount":0.8088171180371246},
              {"id":"id-65","name":"name-65","amount":0.4550972146433866},
              {"id":"id-66","name":"name-66","amount":0.4851829444381994},
              {"id":"id-67","name":"name-67","amount":0.5098743988888469},
              {"id":"id-68","name":"name-68","amount":0.18866730062970805},
              {"id":"id-69","name":"name-69","amount":0.8261877281944049},
              {"id":"id-70","name":"name-70","amount":0.013184559300283172},
              {"id":"id-71","name":"name-71","amount":0.6797026549436175},
              {"id":"id-72","name":"name-72","amount":0.23969012180189675},
              {"id":"id-73","name":"name-73","amount":0.3469208486888248},
              {"id":"id-74","name":"name-74","amount":0.14737369902683806},
              {"id":"id-75","name":"name-75","amount":0.17554761404135488},
              {"id":"id-76","name":"name-76","amount":0.767818050959243},
              {"id":"id-77","name":"name-77","amount":0.0014090723224391422},
              {"id":"id-78","name":"name-78","amount":0.2873940477614242},
              {"id":"id-79","name":"name-79","amount":0.9591487805136462},
              {"id":"id-80","name":"name-80","amount":0.4658562458825425},
              {"id":"id-81","name":"name-81","amount":0.8108419709646011},
              {"id":"id-82","name":"name-82","amount":0.3992202052315269},
              {"id":"id-83","name":"name-83","amount":0.6293768867614652},
              {"id":"id-84","name":"name-84","amount":0.3307088128946608},
              {"id":"id-85","name":"name-85","amount":0.9291938653510455},
              {"id":"id-86","name":"name-86","amount":0.7636375751901562},
              {"id":"id-87","name":"name-87","amount":0.30859508200205743},
              {"id":"id-88","name":"name-88","amount":0.5039841820508396},
              {"id":"id-89","name":"name-89","amount":0.0438184014211751},
              {"id":"id-90","name":"name-90","amount":0.24809202525591},
              {"id":"id-91","name":"name-91","amount":0.3095085667369567},
              {"id":"id-92","name":"name-92","amount":0.11315818302159875},
              {"id":"id-93","name":"name-93","amount":0.2628451043962282},
              {"id":"id-94","name":"name-94","amount":0.9061389905225958},
              {"id":"id-95","name":"name-95","amount":0.8547491618227278},
              {"id":"id-96","name":"name-96","amount":0.6523882796950892},
              {"id":"id-97","name":"name-97","amount":0.17226996651341786},
              {"id":"id-98","name":"name-98","amount":0.8112611682253303},
              {"id":"id-99","name":"name-99","amount":0.3880442725734252}
            ]}>
          </slim_table_list.TableListViewPaged>
        </ui_static.Div>
      </ReactNative.View>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-table-list-test/TableListViewRemotePagedDemo [484] 
function TableListViewRemotePagedDemo(){
  let views = {
    "list":ext_view.makeView({
        "handler":function (showPage,display){
            return new Promise(function (resolve,reject){
              setTimeout(function (){
                try{
                  resolve(          (function (){
                              return k.arr_map(k.arr_range(display),function (i){
                                return {
                                  "id":"id-" + (((showPage - 2) * display) + display + i),
                                  "name":"name-" + (((showPage - 2) * display) + display + i),
                                  "amount":Math.random()
                                };
                              });
                            })());
                }
                catch(e){
                  reject(e);
                }
              },200);
            });
          },
        "options":{"init":false}
      })
  };
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-table-list/TableListViewRemotePaged"
      code={function (){
        return "(\n  <ReactNative.View>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1,\"padding\":5}}>\n      <slim_table_list.TableListViewRemotePaged\n        design={{\"type\":\"light\"}}\n        control={{}}\n        views={views}\n        impl={{\n          \"page\":{\"display\":5,\"total\":100},\n          \"header\":{\n            \"format\":function (s){\n              return s.toUpperCase();\n            }\n          }\n        }}\n        display={{\n          \"brief\":{\n            \"type\":\"v\",\n            \"body\":[{\"template\":[\"name\"]},{\"template\":[\"amount\"]}]\n          }\n        }}>\n      </slim_table_list.TableListViewRemotePaged>\n    </ui_static.Div>\n  </ReactNative.View>);";
      }()}>
      <ReactNative.View>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1,"padding":5}}>
          <slim_table_list.TableListViewRemotePaged
            design={{"type":"light"}}
            control={{}}
            views={views}
            impl={{
              "page":{"display":5,"total":100},
              "header":{
                "format":function (s){
                  return s.toUpperCase();
                }
              }
            }}
            display={{
              "brief":{
                "type":"v",
                "body":[{"template":["name"]},{"template":["amount"]}]
              }
            }}>
          </slim_table_list.TableListViewRemotePaged>
        </ui_static.Div>
      </ReactNative.View>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-table-list-test/TableListViewDemo [561] 
function TableListViewDemo(){
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-table-list/TableListView"
      code={function (){
        return "(\n  <ReactNative.View>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1,\"padding\":5}}>\n      <slim_table_list.TableListView\n        design={{\"type\":\"light\"}}\n        impl={{\n          \"groups\":{\"split\":[\"currency_id\"]},\n          \"items\":{\n            \"sort\":function (arr){\n              return k.sort_by(arr,[[\"name\",true],\"balance\"]);\n            }\n          },\n          \"header\":{\n            \"format\":function (s){\n              return s.toUpperCase();\n            }\n          }\n        }}\n        display={{\n          \"brief\":{\n            \"type\":\"v\",\n            \"body\":[\n              {\"template\":[\"name\"]},\n              {\"template\":[\"balance\"]},\n              {\"template\":[\"escrow\"],\"style\":{\"textAlign\":\"right\"}}\n            ]\n          }\n        }}\n        entries={[\n          {\"currency_id\":\"STATS\",\"name\":\"ABC\",\"balance\":506,\"escrow\":50.5},\n          {\"currency_id\":\"STATS\",\"name\":\"TUV\",\"balance\":79,\"escrow\":37},\n          {\"currency_id\":\"DOGE\",\"name\":\"WXY\",\"balance\":456,\"escrow\":63},\n          {\n          \"currency_id\":\"STATS\",\n          \"name\":\"HIJ\",\n          \"balance\":130400,\n          \"escrow\":1250.5\n        },\n          {\n          \"currency_id\":\"STATS\",\n          \"name\":\"NOP\",\n          \"balance\":1000,\n          \"escrow\":50.5\n        },\n          {\"currency_id\":\"DOGE\",\"name\":\"KLM\",\"balance\":100,\"escrow\":0.5},\n          {\n          \"currency_id\":\"DOGE\",\n          \"name\":\"EFG\",\n          \"balance\":34050,\n          \"escrow\":50.5\n        },\n          {\"currency_id\":\"DOGE\",\"name\":\"QRS\",\"balance\":490,\"escrow\":34.0}\n        ]}>\n      </slim_table_list.TableListView>\n    </ui_static.Div>\n  </ReactNative.View>);";
      }()}>
      <ReactNative.View>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1,"padding":5}}>
          <slim_table_list.TableListView
            design={{"type":"light"}}
            impl={{
              "groups":{"split":["currency_id"]},
              "items":{
                "sort":function (arr){
                  return k.sort_by(arr,[["name",true],"balance"]);
                }
              },
              "header":{
                "format":function (s){
                  return s.toUpperCase();
                }
              }
            }}
            display={{
              "brief":{
                "type":"v",
                "body":[
                  {"template":["name"]},
                  {"template":["balance"]},
                  {"template":["escrow"],"style":{"textAlign":"right"}}
                ]
              }
            }}
            entries={[
              {"currency_id":"STATS","name":"ABC","balance":506,"escrow":50.5},
              {"currency_id":"STATS","name":"TUV","balance":79,"escrow":37},
              {"currency_id":"DOGE","name":"WXY","balance":456,"escrow":63},
              {
              "currency_id":"STATS",
              "name":"HIJ",
              "balance":130400,
              "escrow":1250.5
            },
              {
              "currency_id":"STATS",
              "name":"NOP",
              "balance":1000,
              "escrow":50.5
            },
              {"currency_id":"DOGE","name":"KLM","balance":100,"escrow":0.5},
              {
              "currency_id":"DOGE",
              "name":"EFG",
              "balance":34050,
              "escrow":50.5
            },
              {"currency_id":"DOGE","name":"QRS","balance":490,"escrow":34.0}
            ]}>
          </slim_table_list.TableListView>
        </ui_static.Div>
      </ReactNative.View>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-table-list-test/TableListDemo [587] 
function TableListDemo(){
  let views = React.useCallback({
    "list":ext_view.makeView({
        "defaultArgs":[],
        "handler":function (){
            return new Promise(function (resolve,reject){
              setTimeout(function (){
                try{
                  resolve(          (function (){
                              return [
                                {"id":"id-0","currency_id":"STATS","balance":1000,"escrow":50.5},
                                {"id":"id-1","currency_id":"USA","balance":300,"escrow":10.5},
                                {"id":"id-2","currency_id":"XLM","balance":50,"escrow":0.0}
                              ];
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
                  "type":"pair",
                  "title":{"template":"B"},
                  "text":{"template":["balance"]}
                },
                {
                  "type":"pair",
                  "title":{"template":"E"},
                  "text":{"template":["escrow"]}
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
    return React.createElement(slim_entry.Entry,Object.assign({},props,{
      "impl":{"type":"card","body":{"title":{"template":["currency_id"]}}}
    }));
  },[]);
  let EntryDetail = React.useCallback(function (props){
    return React.createElement(slim_entry.Entry,Object.assign({},props,{impl}));
  },[]);
  let components = {"entry_brief":EntryBrief,"entry_detail":EntryDetail};
  let [type,setType] = React.useState("fold");
  let [swipe,setSwipe] = React.useState("left");
  return (
    <n.Isolation>
      <n.EnclosedCodeContainer
        label="melbourne.slim-table-list/TableList"
        code={function (){
          return "(\n  <n.Row>\n    <ui_text.TabsAccent\n      value={type}\n      setValue={setType}\n      data={[\"fold\",\"swipe\",\"mini\"]}>\n    </ui_text.TabsAccent>\n    <ui_text.TabsAccent value={swipe} setValue={setSwipe} data={[\"left\",\"right\"]}></ui_text.TabsAccent>\n  </n.Row>);\n(\n  <n.Row>\n    <slim_table_list.TableList\n      mini={true}\n      design={{\"type\":\"light\"}}\n      style={{\"width\":200}}\n      display={{\n        \"brief\":{\"card\":{\"component\":type}},\n        \"swipe\":{\"direction\":swipe,\"showDelete\":false}\n      }}\n      views={views}\n      components={components}\n      control={control}>\n    </slim_table_list.TableList>\n    <slim_table_list.TableList\n      mini={true}\n      design={{\"type\":\"dark\"}}\n      style={{\"width\":200}}\n      display={{\n        \"brief\":{\"card\":{\"component\":type}},\n        \"swipe\":{\"direction\":swipe,\"showDelete\":false}\n      }}\n      views={views}\n      components={components}\n      control={control}>\n    </slim_table_list.TableList>\n  </n.Row>);";
        }()}>
        <n.Row>
          <ui_text.TabsAccent
            value={type}
            setValue={setType}
            data={["fold","swipe","mini"]}>
          </ui_text.TabsAccent>
          <ui_text.TabsAccent value={swipe} setValue={setSwipe} data={["left","right"]}></ui_text.TabsAccent>
        </n.Row>
        <n.Row>
          <slim_table_list.TableList
            mini={true}
            design={{"type":"light"}}
            style={{"width":200}}
            display={{
              "brief":{"card":{"component":type}},
              "swipe":{"direction":swipe,"showDelete":false}
            }}
            views={views}
            components={components}
            control={control}>
          </slim_table_list.TableList>
          <slim_table_list.TableList
            mini={true}
            design={{"type":"dark"}}
            style={{"width":200}}
            display={{
              "brief":{"card":{"component":type}},
              "swipe":{"direction":swipe,"showDelete":false}
            }}
            views={views}
            components={components}
            control={control}>
          </slim_table_list.TableList>
        </n.Row>
      </n.EnclosedCodeContainer>
    </n.Isolation>);
}

var MODULE = {
  "TableListCardBriefDemo":TableListCardBriefDemo,
  "TableListCardNavDemo":TableListCardNavDemo,
  "TableListCardSwipeDemo":TableListCardSwipeDemo,
  "TableListCardFoldDemo":TableListCardFoldDemo,
  "TableListCardDemo":TableListCardDemo,
  "TableListViewEntriesDemo":TableListViewEntriesDemo,
  "TableListViewGroupDemo":TableListViewGroupDemo,
  "TableListViewPagedDemo":TableListViewPagedDemo,
  "TableListViewRemotePagedDemo":TableListViewRemotePagedDemo,
  "TableListViewDemo":TableListViewDemo,
  "TableListDemo":TableListDemo
};

export default MODULE