import React from 'react'

import * as ReactNative from 'react-native'

import market_delta from './ui-market-delta'

import * as a from '../libs/js/react-native/animate'

import * as n from '../libs/js/react-native'

import k from '../libs/xt/lang/base-lib'

import * as c from '../libs/js/react-native/helper-color'

import * as ui from '../libs/js/react-native/physical-base'

// pune.ui-market-delta-test/DeltaDemo [27] 
function DeltaDemo(){
  let [value,setValue] = React.useState(100);
  return (
    <n.EnclosedCodeContainer
      label="pune.ui-market-delta/Delta"
      code={function (){
        return "(\n  <n.Row>\n    <market_delta.Delta value={value}></market_delta.Delta>\n    <n.Fill></n.Fill>\n    <n.Row>\n      <ReactNative.Button\n        title=\"-1\"\n        style={{\"fontSize\":10}}\n        onPress={function (){\n          setValue(value - 1);\n        }}>\n      </ReactNative.Button>\n      <ReactNative.View style={{\"width\":10}}></ReactNative.View>\n      <ReactNative.Button\n        title=\"+1\"\n        onPress={function (){\n          setValue(value + 1);\n        }}>\n      </ReactNative.Button>\n    </n.Row>\n  </n.Row>);\n(\n  <n.Caption\n    text={JSON.stringify({value})}\n    style={{\"marginTop\":10,\"zIndex\":-100}}>\n  </n.Caption>);";
      }()}>
      <n.Row>
        <market_delta.Delta value={value}></market_delta.Delta>
        <n.Fill></n.Fill>
        <n.Row>
          <ReactNative.Button
            title="-1"
            style={{"fontSize":10}}
            onPress={function (){
              setValue(value - 1);
            }}>
          </ReactNative.Button>
          <ReactNative.View style={{"width":10}}></ReactNative.View>
          <ReactNative.Button
            title="+1"
            onPress={function (){
              setValue(value + 1);
            }}>
          </ReactNative.Button>
        </n.Row>
      </n.Row>
      <n.Caption
        text={JSON.stringify({value})}
        style={{"marginTop":10,"zIndex":-100}}>
      </n.Caption>
    </n.EnclosedCodeContainer>);
}

var MODULE = {"DeltaDemo":DeltaDemo};

export default MODULE