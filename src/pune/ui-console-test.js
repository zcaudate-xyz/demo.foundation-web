import React from 'react'

import * as ReactNative from 'react-native'

import * as n from '../libs/js/react-native'

import ui_console from './ui-console'

// pune.ui-console-test/ConsoleDemo [21] 
function ConsoleDemo(){
  let [current,setCurrent] = React.useState(true);
  return (
    <n.EnclosedCodeContainer
      label="pune.ui-console/Console"
      code={function (){
        return "(\n  <n.Row style={{\"marginTop\":30}}>\n    <ui_console.Console\n      screens={{\n        \"a_screen\":function (){\n          return (\n            <ReactNative.Text>A</ReactNative.Text>);\n        },\n        \"b_screen\":function (){\n          return (\n            <ReactNative.Text>B</ReactNative.Text>);\n        },\n        \"c_screen\":function (){\n          return (\n            <ReactNative.Text>C</ReactNative.Text>);\n        }\n      }}\n      current={current}\n      setCurrent={setCurrent}>\n    </ui_console.Console>\n  </n.Row>);";
      }()}>
      <n.Row style={{"marginTop":30}}>
        <ui_console.Console
          screens={{
            "a_screen":function (){
              return (
                <ReactNative.Text>A</ReactNative.Text>);
            },
            "b_screen":function (){
              return (
                <ReactNative.Text>B</ReactNative.Text>);
            },
            "c_screen":function (){
              return (
                <ReactNative.Text>C</ReactNative.Text>);
            }
          }}
          current={current}
          setCurrent={setCurrent}>
        </ui_console.Console>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

var MODULE = {"ConsoleDemo":ConsoleDemo};

export default MODULE