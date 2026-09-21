import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import * as n from '../libs/js/react-native'

import ui_sparkline from './ui-sparkline'

// pune.ui-sparkline-test/SparklineDemo [23] 
function SparklineDemo(){
  return (
    <n.EnclosedCodeContainer
      label="pune.ui-sparkline/Sparkline"
      code={function (){
        return "(\n  <n.Row>\n    <ReactNative.View\n      style={{\"padding\":5,\"paddingRight\":100,\"backgroundColor\":\"#eee\"}}>\n      <ui_sparkline.Sparkline\n        design={{\"type\":\"light\"}}\n        height={30}\n        width={150}\n        values={[45,42,42,45,62,59,59,58,57,59,53,53,41,41,59]}>\n      </ui_sparkline.Sparkline>\n    </ReactNative.View>\n    <ReactNative.View\n      style={{\"padding\":5,\"paddingRight\":100,\"backgroundColor\":\"#333\"}}>\n      <ui_sparkline.Sparkline\n        design={{\"type\":\"dark\"}}\n        height={30}\n        width={100}\n        values={[45,42,42,45,62,59,59,58,57,59,53,53,41,41,59]}>\n      </ui_sparkline.Sparkline>\n    </ReactNative.View>\n  </n.Row>);\nReact.createElement(\n  n.TextDisplay,\n  {\"data\":[45,42,42,45,62,59,59,58,57,59,53,53,41,41,59]}\n);";
      }()}>
      <n.Row>
        <ReactNative.View
          style={{"padding":5,"paddingRight":100,"backgroundColor":"#eee"}}>
          <ui_sparkline.Sparkline
            design={{"type":"light"}}
            height={30}
            width={150}
            values={[45,42,42,45,62,59,59,58,57,59,53,53,41,41,59]}>
          </ui_sparkline.Sparkline>
        </ReactNative.View>
        <ReactNative.View
          style={{"padding":5,"paddingRight":100,"backgroundColor":"#333"}}>
          <ui_sparkline.Sparkline
            design={{"type":"dark"}}
            height={30}
            width={100}
            values={[45,42,42,45,62,59,59,58,57,59,53,53,41,41,59]}>
          </ui_sparkline.Sparkline>
        </ReactNative.View>
      </n.Row>
      {React.createElement(
        n.TextDisplay,
        {"data":[45,42,42,45,62,59,59,58,57,59,53,53,41,41,59]}
      )}
    </n.EnclosedCodeContainer>);
}

var MODULE = {"SparklineDemo":SparklineDemo};

export default MODULE