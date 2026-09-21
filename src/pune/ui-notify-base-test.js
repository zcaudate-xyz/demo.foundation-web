import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import * as n from '../libs/js/react-native'

import ui_topnotify from './ui-notify-base'

import k from '../libs/xt/lang/base-lib'

// pune.ui-notify-base-test/TopNotifyInnerDemo [27] 
function TopNotifyInnerDemo(){
  let [index,setIndex] = React.useState(0);
  let [data,setData] = React.useState([
    {
      "id":"02",
      "topic":"user.account/place",
      "title":"Order Placed",
      "message":"NBA-MVP-2022/S.CURRY @ Y 1.34",
      "detail":{"id":"001-order"},
      "time":Date.now()
    },
    {
      "id":"01",
      "topic":"user.account/password-changed",
      "title":"Password Changed",
      "message":"user: test00001",
      "time":Date.now()
    }
  ]);
  return (
    <n.EnclosedCodeContainer
      label="pune.ui-notify-base/TopNotifyInner"
      style={{"backgroundColor":"#eee","padding":20}}
      code={function (){
        return "(\n  <ReactNative.View>\n    <ui_topnotify.TopNotifyInner data={[]} design={{\"type\":\"light\"}}></ui_topnotify.TopNotifyInner>\n  </ReactNative.View>);\n(\n  <ReactNative.View>\n    <n.Row style={{\"marginVertical\":5}}></n.Row>\n    <ui_topnotify.TopNotifyInner\n      data={[\n        {\n        \"id\":\"01\",\n        \"topic\":\"user.account/password-changed\",\n        \"title\":\"Password Changed\",\n        \"message\":\"user: test00001\",\n        \"time\":Date.now()\n      }\n      ]}\n      design={{\"type\":\"light\"}}>\n    </ui_topnotify.TopNotifyInner>\n  </ReactNative.View>);\n(\n  <ReactNative.View>\n    <n.Row style={{\"marginVertical\":5}}></n.Row>\n    <ui_topnotify.TopNotifyInner\n      data={data}\n      design={{\"type\":\"light\"}}\n      index={index}\n      setIndex={setIndex}>\n    </ui_topnotify.TopNotifyInner>\n  </ReactNative.View>);";
      }()}>
      <ReactNative.View>
        <ui_topnotify.TopNotifyInner data={[]} design={{"type":"light"}}></ui_topnotify.TopNotifyInner>
      </ReactNative.View>
      <ReactNative.View>
        <n.Row style={{"marginVertical":5}}></n.Row>
        <ui_topnotify.TopNotifyInner
          data={[
            {
            "id":"01",
            "topic":"user.account/password-changed",
            "title":"Password Changed",
            "message":"user: test00001",
            "time":Date.now()
          }
          ]}
          design={{"type":"light"}}>
        </ui_topnotify.TopNotifyInner>
      </ReactNative.View>
      <ReactNative.View>
        <n.Row style={{"marginVertical":5}}></n.Row>
        <ui_topnotify.TopNotifyInner
          data={data}
          design={{"type":"light"}}
          index={index}
          setIndex={setIndex}>
        </ui_topnotify.TopNotifyInner>
      </ReactNative.View>
    </n.EnclosedCodeContainer>);
}

// pune.ui-notify-base-test/TopNotifyDemo [74] 
function TopNotifyDemo(){
  let [index,setIndex] = React.useState(0);
  let [data,setData] = React.useState([
    {
      "id":"02",
      "topic":"user.account/place",
      "title":"Order Placed",
      "message":"NBA-MVP-2022/S.CURRY @ Y 1.34",
      "detail":{"id":"001-order"},
      "time":Date.now()
    },
    {
      "id":"01",
      "topic":"user.account/password-changed",
      "title":"Password Changed",
      "message":"user: test00001",
      "time":Date.now()
    }
  ]);
  return (
    <n.EnclosedCodeContainer
      label="pune.ui-notify-base/TopNotify"
      style={{"backgroundColor":"#333","padding":20}}
      code={function (){
        return "(\n  <n.Isolation>\n    <n.Row style={{\"marginVertical\":5,\"width\":300,\"height\":80}}>\n      <ui_topnotify.TopNotify\n        mini={true}\n        data={[\n          {\n          \"id\":\"01\",\n          \"topic\":\"user.account/password-changed\",\n          \"title\":\"Password Changed\",\n          \"message\":\"user: test00001\",\n          \"time\":Date.now()\n        }\n        ]}\n        design={{\"type\":\"dark\"}}>\n      </ui_topnotify.TopNotify>\n    </n.Row>\n  </n.Isolation>);\n(\n  <n.Isolation>\n    <n.Row style={{\"marginVertical\":5,\"width\":300,\"height\":80}}>\n      <ui_topnotify.TopNotify\n        mini={true}\n        data={data}\n        design={{\"type\":\"dark\"}}\n        index={index}\n        setIndex={setIndex}>\n      </ui_topnotify.TopNotify>\n    </n.Row>\n  </n.Isolation>);";
      }()}>
      <n.Isolation>
        <n.Row style={{"marginVertical":5,"width":300,"height":80}}>
          <ui_topnotify.TopNotify
            mini={true}
            data={[
              {
              "id":"01",
              "topic":"user.account/password-changed",
              "title":"Password Changed",
              "message":"user: test00001",
              "time":Date.now()
            }
            ]}
            design={{"type":"dark"}}>
          </ui_topnotify.TopNotify>
        </n.Row>
      </n.Isolation>
      <n.Isolation>
        <n.Row style={{"marginVertical":5,"width":300,"height":80}}>
          <ui_topnotify.TopNotify
            mini={true}
            data={data}
            design={{"type":"dark"}}
            index={index}
            setIndex={setIndex}>
          </ui_topnotify.TopNotify>
        </n.Row>
      </n.Isolation>
    </n.EnclosedCodeContainer>);
}

var MODULE = {
  "TopNotifyInnerDemo":TopNotifyInnerDemo,
  "TopNotifyDemo":TopNotifyDemo
};

export default MODULE