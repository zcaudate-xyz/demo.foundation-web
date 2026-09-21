import * as ReactNative from 'react-native'

import React from 'react'

import * as n from '../libs/js/react-native'

import * as ext_form from '../libs/js/react/ext-form'

import ui_static from './ui-static'

import slim_sheet from './slim-sheet'

import k from '../libs/xt/lang/base-lib'

// melbourne.slim-sheet-test/SheetPaginationDemo [24] 
function SheetPaginationDemo(){
  let [showPage,setShowPage] = React.useState(3);
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-sheet/SheetPagination"
      code={function (){
        return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}>\n      <slim_sheet.SheetPagination\n        design={{\"type\":\"light\"}}\n        control={{setShowPage,showPage}}\n        impl={{\"page\":{\"total\":200}}}>\n      </slim_sheet.SheetPagination>\n      <slim_sheet.SheetPagination\n        design={{\"type\":\"light\"}}\n        control={{setShowPage,showPage}}\n        impl={{\"page\":{\"total\":70}}}>\n      </slim_sheet.SheetPagination>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1}}>\n      <slim_sheet.SheetPagination\n        design={{\"type\":\"dark\"}}\n        control={{setShowPage,showPage}}\n        impl={{\"page\":{\"total\":200}}}>\n      </slim_sheet.SheetPagination>\n      <slim_sheet.SheetPagination\n        design={{\"type\":\"dark\"}}\n        control={{setShowPage,showPage}}\n        impl={{\"page\":{\"total\":70}}}>\n      </slim_sheet.SheetPagination>\n    </ui_static.Div>\n  </n.Row>);";
      }()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_sheet.SheetPagination
            design={{"type":"light"}}
            control={{setShowPage,showPage}}
            impl={{"page":{"total":200}}}>
          </slim_sheet.SheetPagination>
          <slim_sheet.SheetPagination
            design={{"type":"light"}}
            control={{setShowPage,showPage}}
            impl={{"page":{"total":70}}}>
          </slim_sheet.SheetPagination>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_sheet.SheetPagination
            design={{"type":"dark"}}
            control={{setShowPage,showPage}}
            impl={{"page":{"total":200}}}>
          </slim_sheet.SheetPagination>
          <slim_sheet.SheetPagination
            design={{"type":"dark"}}
            control={{setShowPage,showPage}}
            impl={{"page":{"total":70}}}>
          </slim_sheet.SheetPagination>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-sheet-test/SheetGroupHeaderDemo [58] 
function SheetGroupHeaderDemo(){
  let [showPage,setShowPage] = React.useState(3);
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-sheet/SheetGroupHeader"
      code={function (){
        return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}>\n      <slim_sheet.SheetGroupHeader design={{\"type\":\"light\"}} group={{\"name\":\"WORLD\"}} impl={{}}></slim_sheet.SheetGroupHeader>\n      <slim_sheet.SheetGroupHeader design={{\"type\":\"light\"}} group={{\"name\":\"HELLO\"}} impl={{}}></slim_sheet.SheetGroupHeader>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1}}>\n      <slim_sheet.SheetGroupHeader design={{\"type\":\"dark\"}} group={{\"name\":\"WORLD\"}} impl={{}}></slim_sheet.SheetGroupHeader>\n      <slim_sheet.SheetGroupHeader design={{\"type\":\"dark\"}} group={{\"name\":\"HELLO\"}} impl={{}}></slim_sheet.SheetGroupHeader>\n    </ui_static.Div>\n  </n.Row>);";
      }()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_sheet.SheetGroupHeader design={{"type":"light"}} group={{"name":"WORLD"}} impl={{}}></slim_sheet.SheetGroupHeader>
          <slim_sheet.SheetGroupHeader design={{"type":"light"}} group={{"name":"HELLO"}} impl={{}}></slim_sheet.SheetGroupHeader>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_sheet.SheetGroupHeader design={{"type":"dark"}} group={{"name":"WORLD"}} impl={{}}></slim_sheet.SheetGroupHeader>
          <slim_sheet.SheetGroupHeader design={{"type":"dark"}} group={{"name":"HELLO"}} impl={{}}></slim_sheet.SheetGroupHeader>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-sheet-test/SheetHeaderDemo [92] 
function SheetHeaderDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-sheet/SheetHeader"
      code={function (){
        return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}>\n      <slim_sheet.SheetHeader\n        design={{\"type\":\"light\"}}\n        style={{\"padding\":10}}\n        entry={entry}\n        impl={{\n          \"header\":{\n            \"format\":function (s){\n              return s.toUpperCase();\n            }\n          },\n          \"columns\":[\n            {\"name\":\"title\",\"template\":[\"currency_id\"]},\n            {\"name\":\"balance\",\"template\":[\"balance\"]},\n            {\n            \"name\":\"escrow\",\n            \"template\":[\"escrow\"],\n            \"style\":{\"textAlign\":\"right\"}\n          }\n          ]\n        }}>\n      </slim_sheet.SheetHeader>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1}}>\n      <slim_sheet.SheetHeader\n        design={{\"type\":\"dark\"}}\n        style={{\"padding\":10}}\n        entry={entry}\n        impl={{\n          \"header\":{\n            \"format\":function (s){\n              return s.toUpperCase();\n            }\n          },\n          \"columns\":[\n            {\"name\":\"title\",\"template\":[\"currency_id\"]},\n            {\"name\":\"balance\",\"template\":[\"balance\"]},\n            {\n            \"name\":\"escrow\",\n            \"template\":[\"escrow\"],\n            \"style\":{\"textAlign\":\"right\"}\n          }\n          ]\n        }}>\n      </slim_sheet.SheetHeader>\n    </ui_static.Div>\n  </n.Row>);";
      }()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_sheet.SheetHeader
            design={{"type":"light"}}
            style={{"padding":10}}
            entry={entry}
            impl={{
              "header":{
                "format":function (s){
                  return s.toUpperCase();
                }
              },
              "columns":[
                {"name":"title","template":["currency_id"]},
                {"name":"balance","template":["balance"]},
                {
                "name":"escrow",
                "template":["escrow"],
                "style":{"textAlign":"right"}
              }
              ]
            }}>
          </slim_sheet.SheetHeader>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_sheet.SheetHeader
            design={{"type":"dark"}}
            style={{"padding":10}}
            entry={entry}
            impl={{
              "header":{
                "format":function (s){
                  return s.toUpperCase();
                }
              },
              "columns":[
                {"name":"title","template":["currency_id"]},
                {"name":"balance","template":["balance"]},
                {
                "name":"escrow",
                "template":["escrow"],
                "style":{"textAlign":"right"}
              }
              ]
            }}>
          </slim_sheet.SheetHeader>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-sheet-test/SheetRowDemo [136] 
function SheetRowDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-sheet/SheetRow"
      code={function (){
        return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}>\n      <slim_sheet.SheetRow\n        design={{\"type\":\"light\"}}\n        style={{\"padding\":10}}\n        entry={entry}\n        impl={{\n          \"header\":{\n            \"format\":function (s){\n              return s.toUpperCase();\n            }\n          },\n          \"columns\":[\n            {\"name\":\"title\",\"template\":[\"currency_id\"]},\n            {\"name\":\"balance\",\"template\":[\"balance\"]},\n            {\n            \"name\":\"escrow\",\n            \"template\":[\"escrow\"],\n            \"style\":{\"textAlign\":\"right\"}\n          }\n          ]\n        }}>\n      </slim_sheet.SheetRow>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1}}>\n      <slim_sheet.SheetRow\n        design={{\"type\":\"dark\"}}\n        style={{\"padding\":10}}\n        entry={entry}\n        impl={{\n          \"header\":{\n            \"format\":function (s){\n              return s.toUpperCase();\n            }\n          },\n          \"columns\":[\n            {\"name\":\"title\",\"template\":[\"currency_id\"]},\n            {\"name\":\"balance\",\"template\":[\"balance\"]},\n            {\n            \"name\":\"escrow\",\n            \"template\":[\"escrow\"],\n            \"style\":{\"textAlign\":\"right\"}\n          }\n          ]\n        }}>\n      </slim_sheet.SheetRow>\n    </ui_static.Div>\n  </n.Row>);";
      }()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_sheet.SheetRow
            design={{"type":"light"}}
            style={{"padding":10}}
            entry={entry}
            impl={{
              "header":{
                "format":function (s){
                  return s.toUpperCase();
                }
              },
              "columns":[
                {"name":"title","template":["currency_id"]},
                {"name":"balance","template":["balance"]},
                {
                "name":"escrow",
                "template":["escrow"],
                "style":{"textAlign":"right"}
              }
              ]
            }}>
          </slim_sheet.SheetRow>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_sheet.SheetRow
            design={{"type":"dark"}}
            style={{"padding":10}}
            entry={entry}
            impl={{
              "header":{
                "format":function (s){
                  return s.toUpperCase();
                }
              },
              "columns":[
                {"name":"title","template":["currency_id"]},
                {"name":"balance","template":["balance"]},
                {
                "name":"escrow",
                "template":["escrow"],
                "style":{"textAlign":"right"}
              }
              ]
            }}>
          </slim_sheet.SheetRow>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-sheet-test/SheetBasicRowsDemo [180] 
function SheetBasicRowsDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-sheet/SheetBasicRows"
      code={function (){
        return "(\n  <ReactNative.View>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1,\"padding\":5}}>\n      <slim_sheet.SheetBasicRows\n        design={{\"type\":\"light\"}}\n        entries={[\n          {\"currency_id\":\"STATS\",\"balance\":1000,\"escrow\":50.5},\n          {\"currency_id\":\"DOGE\",\"balance\":1000,\"escrow\":50.5}\n        ]}\n        impl={{\n          \"header\":{\n            \"format\":function (s){\n              return s.toUpperCase();\n            }\n          },\n          \"columns\":[\n            {\"name\":\"title\",\"template\":[\"currency_id\"]},\n            {\"name\":\"balance\",\"template\":[\"balance\"]},\n            {\n            \"name\":\"escrow\",\n            \"template\":[\"escrow\"],\n            \"style\":{\"textAlign\":\"right\"}\n          }\n          ]\n        }}>\n      </slim_sheet.SheetBasicRows>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1,\"padding\":5}}>\n      <slim_sheet.SheetBasicRows\n        design={{\"type\":\"dark\"}}\n        entries={[\n          {\"currency_id\":\"STATS\",\"balance\":1000,\"escrow\":50.5},\n          {\"currency_id\":\"DOGE\",\"balance\":1000,\"escrow\":50.5}\n        ]}\n        impl={{\n          \"header\":{\n            \"format\":function (s){\n              return s.toUpperCase();\n            }\n          },\n          \"columns\":[\n            {\"name\":\"title\",\"template\":[\"currency_id\"]},\n            {\"name\":\"balance\",\"template\":[\"balance\"]},\n            {\n            \"name\":\"escrow\",\n            \"template\":[\"escrow\"],\n            \"style\":{\"textAlign\":\"right\"}\n          }\n          ]\n        }}>\n      </slim_sheet.SheetBasicRows>\n    </ui_static.Div>\n  </ReactNative.View>);";
      }()}>
      <ReactNative.View>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1,"padding":5}}>
          <slim_sheet.SheetBasicRows
            design={{"type":"light"}}
            entries={[
              {"currency_id":"STATS","balance":1000,"escrow":50.5},
              {"currency_id":"DOGE","balance":1000,"escrow":50.5}
            ]}
            impl={{
              "header":{
                "format":function (s){
                  return s.toUpperCase();
                }
              },
              "columns":[
                {"name":"title","template":["currency_id"]},
                {"name":"balance","template":["balance"]},
                {
                "name":"escrow",
                "template":["escrow"],
                "style":{"textAlign":"right"}
              }
              ]
            }}>
          </slim_sheet.SheetBasicRows>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1,"padding":5}}>
          <slim_sheet.SheetBasicRows
            design={{"type":"dark"}}
            entries={[
              {"currency_id":"STATS","balance":1000,"escrow":50.5},
              {"currency_id":"DOGE","balance":1000,"escrow":50.5}
            ]}
            impl={{
              "header":{
                "format":function (s){
                  return s.toUpperCase();
                }
              },
              "columns":[
                {"name":"title","template":["currency_id"]},
                {"name":"balance","template":["balance"]},
                {
                "name":"escrow",
                "template":["escrow"],
                "style":{"textAlign":"right"}
              }
              ]
            }}>
          </slim_sheet.SheetBasicRows>
        </ui_static.Div>
      </ReactNative.View>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-sheet-test/SheetBasicDemo [234] 
function SheetBasicDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-sheet/SheetBasic"
      code={function (){
        return "(\n  <ReactNative.View>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1,\"padding\":5}}>\n      <slim_sheet.SheetBasic\n        design={{\"type\":\"light\"}}\n        entries={[\n          {\"currency_id\":\"STATS\",\"balance\":1000,\"escrow\":50.5},\n          {\"currency_id\":\"DOGE\",\"balance\":1000,\"escrow\":50.5}\n        ]}\n        impl={{\n          \"header\":{\n            \"format\":function (s){\n              return s.toUpperCase();\n            }\n          },\n          \"columns\":[\n            {\"name\":\"title\",\"template\":[\"currency_id\"]},\n            {\"name\":\"balance\",\"template\":[\"balance\"]},\n            {\n            \"name\":\"escrow\",\n            \"template\":[\"escrow\"],\n            \"style\":{\"textAlign\":\"right\"}\n          }\n          ]\n        }}>\n      </slim_sheet.SheetBasic>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1,\"padding\":5}}>\n      <slim_sheet.SheetBasic\n        design={{\"type\":\"dark\"}}\n        entries={[\n          {\"currency_id\":\"STATS\",\"balance\":1000,\"escrow\":50.5},\n          {\"currency_id\":\"DOGE\",\"balance\":1000,\"escrow\":50.5}\n        ]}\n        impl={{\n          \"header\":{\n            \"format\":function (s){\n              return s.toUpperCase();\n            }\n          },\n          \"columns\":[\n            {\"name\":\"title\",\"template\":[\"currency_id\"]},\n            {\"name\":\"balance\",\"template\":[\"balance\"]},\n            {\n            \"name\":\"escrow\",\n            \"template\":[\"escrow\"],\n            \"style\":{\"textAlign\":\"right\"}\n          }\n          ]\n        }}>\n      </slim_sheet.SheetBasic>\n    </ui_static.Div>\n  </ReactNative.View>);";
      }()}>
      <ReactNative.View>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1,"padding":5}}>
          <slim_sheet.SheetBasic
            design={{"type":"light"}}
            entries={[
              {"currency_id":"STATS","balance":1000,"escrow":50.5},
              {"currency_id":"DOGE","balance":1000,"escrow":50.5}
            ]}
            impl={{
              "header":{
                "format":function (s){
                  return s.toUpperCase();
                }
              },
              "columns":[
                {"name":"title","template":["currency_id"]},
                {"name":"balance","template":["balance"]},
                {
                "name":"escrow",
                "template":["escrow"],
                "style":{"textAlign":"right"}
              }
              ]
            }}>
          </slim_sheet.SheetBasic>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1,"padding":5}}>
          <slim_sheet.SheetBasic
            design={{"type":"dark"}}
            entries={[
              {"currency_id":"STATS","balance":1000,"escrow":50.5},
              {"currency_id":"DOGE","balance":1000,"escrow":50.5}
            ]}
            impl={{
              "header":{
                "format":function (s){
                  return s.toUpperCase();
                }
              },
              "columns":[
                {"name":"title","template":["currency_id"]},
                {"name":"balance","template":["balance"]},
                {
                "name":"escrow",
                "template":["escrow"],
                "style":{"textAlign":"right"}
              }
              ]
            }}>
          </slim_sheet.SheetBasic>
        </ui_static.Div>
      </ReactNative.View>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-sheet-test/SheetGroupRowsDemo [307] 
function SheetGroupRowsDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-sheet/SheetGroupRows"
      code={function (){
        return "(\n  <ReactNative.View>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1,\"padding\":5}}>\n      <slim_sheet.SheetGroupRows\n        design={{\"type\":\"light\"}}\n        group={{\n          \"name\":\"STATS\",\n          \"entries\":[\n            {\"currency_id\":\"STATS\",\"name\":\"ABC\",\"balance\":506,\"escrow\":50.5},\n            {\n            \"currency_id\":\"STATS\",\n            \"name\":\"NOP\",\n            \"balance\":1000,\n            \"escrow\":50.5\n          },\n            {\"currency_id\":\"STATS\",\"name\":\"TUV\",\"balance\":79,\"escrow\":37},\n            {\n            \"currency_id\":\"STATS\",\n            \"name\":\"HIJ\",\n            \"balance\":130400,\n            \"escrow\":1250.5\n          }\n          ]\n        }}\n        impl={{\n          \"header\":{\n            \"format\":function (s){\n              return s.toUpperCase();\n            }\n          },\n          \"columns\":[\n            {\"name\":\"title\",\"template\":[\"name\"]},\n            {\"name\":\"balance\",\"template\":[\"balance\"]},\n            {\n            \"name\":\"escrow\",\n            \"template\":[\"escrow\"],\n            \"style\":{\"textAlign\":\"right\"}\n          }\n          ]\n        }}>\n      </slim_sheet.SheetGroupRows>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1,\"padding\":5}}>\n      <slim_sheet.SheetGroupRows\n        design={{\"type\":\"dark\"}}\n        group={{\n          \"name\":\"STATS\",\n          \"entries\":[\n            {\"currency_id\":\"STATS\",\"name\":\"ABC\",\"balance\":506,\"escrow\":50.5},\n            {\n            \"currency_id\":\"STATS\",\n            \"name\":\"NOP\",\n            \"balance\":1000,\n            \"escrow\":50.5\n          },\n            {\"currency_id\":\"STATS\",\"name\":\"TUV\",\"balance\":79,\"escrow\":37},\n            {\n            \"currency_id\":\"STATS\",\n            \"name\":\"HIJ\",\n            \"balance\":130400,\n            \"escrow\":1250.5\n          }\n          ]\n        }}\n        impl={{\n          \"header\":{\n            \"format\":function (s){\n              return s.toUpperCase();\n            }\n          },\n          \"columns\":[\n            {\"name\":\"title\",\"template\":[\"name\"]},\n            {\"name\":\"balance\",\"template\":[\"balance\"]},\n            {\n            \"name\":\"escrow\",\n            \"template\":[\"escrow\"],\n            \"style\":{\"textAlign\":\"right\"}\n          }\n          ]\n        }}>\n      </slim_sheet.SheetGroupRows>\n    </ui_static.Div>\n  </ReactNative.View>);";
      }()}>
      <ReactNative.View>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1,"padding":5}}>
          <slim_sheet.SheetGroupRows
            design={{"type":"light"}}
            group={{
              "name":"STATS",
              "entries":[
                {"currency_id":"STATS","name":"ABC","balance":506,"escrow":50.5},
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
              }
              ]
            }}
            impl={{
              "header":{
                "format":function (s){
                  return s.toUpperCase();
                }
              },
              "columns":[
                {"name":"title","template":["name"]},
                {"name":"balance","template":["balance"]},
                {
                "name":"escrow",
                "template":["escrow"],
                "style":{"textAlign":"right"}
              }
              ]
            }}>
          </slim_sheet.SheetGroupRows>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1,"padding":5}}>
          <slim_sheet.SheetGroupRows
            design={{"type":"dark"}}
            group={{
              "name":"STATS",
              "entries":[
                {"currency_id":"STATS","name":"ABC","balance":506,"escrow":50.5},
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
              }
              ]
            }}
            impl={{
              "header":{
                "format":function (s){
                  return s.toUpperCase();
                }
              },
              "columns":[
                {"name":"title","template":["name"]},
                {"name":"balance","template":["balance"]},
                {
                "name":"escrow",
                "template":["escrow"],
                "style":{"textAlign":"right"}
              }
              ]
            }}>
          </slim_sheet.SheetGroupRows>
        </ui_static.Div>
      </ReactNative.View>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-sheet-test/SheetDemo [392] 
function SheetDemo(){
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-sheet/Sheet"
      code={function (){
        return "(\n  <ReactNative.View>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1,\"padding\":5}}>\n      <slim_sheet.Sheet\n        design={{\"type\":\"light\"}}\n        impl={{\n          \"groups\":{\"split\":[\"currency_id\"]},\n          \"items\":{\n            \"sort\":function (arr){\n              return k.sort_by(arr,[\"balance\",\"name\"]);\n            }\n          },\n          \"header\":{\n            \"format\":function (s){\n              return s.toUpperCase();\n            }\n          },\n          \"columns\":[\n            {\"name\":\"name\",\"template\":[\"name\"]},\n            {\"name\":\"balance\",\"template\":[\"balance\"]},\n            {\n            \"name\":\"escrow\",\n            \"template\":[\"escrow\"],\n            \"style\":{\"textAlign\":\"right\"}\n          }\n          ]\n        }}\n        entries={[\n          {\"currency_id\":\"STATS\",\"name\":\"TUV\",\"balance\":79,\"escrow\":37},\n          {\n          \"currency_id\":\"STATS\",\n          \"name\":\"HIJ\",\n          \"balance\":130400,\n          \"escrow\":1250.5\n        },\n          {\"currency_id\":\"DOGE\",\"name\":\"QRS\",\"balance\":490,\"escrow\":34.0},\n          {\n          \"currency_id\":\"DOGE\",\n          \"name\":\"EFG\",\n          \"balance\":34050,\n          \"escrow\":50.5\n        },\n          {\"currency_id\":\"DOGE\",\"name\":\"WXY\",\"balance\":456,\"escrow\":63},\n          {\"currency_id\":\"DOGE\",\"name\":\"KLM\",\"balance\":100,\"escrow\":0.5},\n          {\n          \"currency_id\":\"STATS\",\n          \"name\":\"NOP\",\n          \"balance\":1000,\n          \"escrow\":50.5\n        },\n          {\"currency_id\":\"STATS\",\"name\":\"ABC\",\"balance\":506,\"escrow\":50.5}\n        ]}>\n      </slim_sheet.Sheet>\n    </ui_static.Div>\n  </ReactNative.View>);";
      }()}>
      <ReactNative.View>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1,"padding":5}}>
          <slim_sheet.Sheet
            design={{"type":"light"}}
            impl={{
              "groups":{"split":["currency_id"]},
              "items":{
                "sort":function (arr){
                  return k.sort_by(arr,["balance","name"]);
                }
              },
              "header":{
                "format":function (s){
                  return s.toUpperCase();
                }
              },
              "columns":[
                {"name":"name","template":["name"]},
                {"name":"balance","template":["balance"]},
                {
                "name":"escrow",
                "template":["escrow"],
                "style":{"textAlign":"right"}
              }
              ]
            }}
            entries={[
              {"currency_id":"STATS","name":"TUV","balance":79,"escrow":37},
              {
              "currency_id":"STATS",
              "name":"HIJ",
              "balance":130400,
              "escrow":1250.5
            },
              {"currency_id":"DOGE","name":"QRS","balance":490,"escrow":34.0},
              {
              "currency_id":"DOGE",
              "name":"EFG",
              "balance":34050,
              "escrow":50.5
            },
              {"currency_id":"DOGE","name":"WXY","balance":456,"escrow":63},
              {"currency_id":"DOGE","name":"KLM","balance":100,"escrow":0.5},
              {
              "currency_id":"STATS",
              "name":"NOP",
              "balance":1000,
              "escrow":50.5
            },
              {"currency_id":"STATS","name":"ABC","balance":506,"escrow":50.5}
            ]}>
          </slim_sheet.Sheet>
        </ui_static.Div>
      </ReactNative.View>
    </n.EnclosedCodeContainer>);
}

var MODULE = {
  "SheetPaginationDemo":SheetPaginationDemo,
  "SheetGroupHeaderDemo":SheetGroupHeaderDemo,
  "SheetHeaderDemo":SheetHeaderDemo,
  "SheetRowDemo":SheetRowDemo,
  "SheetBasicRowsDemo":SheetBasicRowsDemo,
  "SheetBasicDemo":SheetBasicDemo,
  "SheetGroupRowsDemo":SheetGroupRowsDemo,
  "SheetDemo":SheetDemo
};

export default MODULE