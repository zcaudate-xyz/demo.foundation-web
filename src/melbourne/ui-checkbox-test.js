import React from 'react'

import * as ReactNative from 'react-native'

import * as n from '../libs/js/react-native'

import ui_checkbox from './ui-checkbox'

import k from '../libs/xt/lang/base-lib'

// melbourne.ui-checkbox-test/CheckBoxDemo [22] 
function CheckBoxDemo(){
  let [s0,setS0] = React.useState();
  let [s1,setS1] = React.useState(true);
  let [s2,setS2] = React.useState(true);
  return (
    <n.EnclosedCodeContainer
      label=" melbourne.ui-checkbox/CheckBox"
      code={function (){
        return "(\n  <n.Row>\n    <n.Row style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":30}}>\n      <ui_checkbox.CheckBox\n        design={{\"type\":\"light\"}}\n        style={{\"margin\":2}}\n        selected={s0}\n        onPress={function (){\n          return setS0(!s0);\n        }}>\n      </ui_checkbox.CheckBox>\n      <ui_checkbox.CheckBox\n        design={{\"type\":\"light\",\"mode\":\"secondary\"}}\n        style={{\"margin\":2}}\n        selected={s1}\n        onPress={function (){\n          return setS1(!s1);\n        }}>\n      </ui_checkbox.CheckBox>\n      <ui_checkbox.CheckBox\n        design={{\"type\":\"light\"}}\n        style={{\"margin\":2}}\n        selected={s2}\n        onPress={function (){\n          return setS2(!s2);\n        }}>\n      </ui_checkbox.CheckBox>\n      <ui_checkbox.CheckBox\n        design={{\"type\":\"light\"}}\n        style={{\"margin\":2}}\n        selected={s2}\n        onPress={function (){\n          return setS2(!s2);\n        }}>\n      </ui_checkbox.CheckBox>\n    </n.Row>\n    <n.Row style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":30}}>\n      <ui_checkbox.CheckBox\n        design={{\"type\":\"dark\"}}\n        style={{\"margin\":2}}\n        selected={s0}\n        onPress={function (){\n          return setS0(!s0);\n        }}>\n      </ui_checkbox.CheckBox>\n      <ui_checkbox.CheckBox\n        design={{\"type\":\"dark\",\"mode\":\"secondary\"}}\n        style={{\"margin\":2}}\n        selected={s1}\n        onPress={function (){\n          return setS1(!s1);\n        }}>\n      </ui_checkbox.CheckBox>\n      <ui_checkbox.CheckBox\n        design={{\"type\":\"dark\"}}\n        style={{\"margin\":2}}\n        selected={s2}\n        onPress={function (){\n          return setS2(!s2);\n        }}>\n      </ui_checkbox.CheckBox>\n    </n.Row>\n  </n.Row>);";
      }()}>
      <n.Row>
        <n.Row style={{"backgroundColor":"#eee","flex":1,"padding":30}}>
          <ui_checkbox.CheckBox
            design={{"type":"light"}}
            style={{"margin":2}}
            selected={s0}
            onPress={function (){
              return setS0(!s0);
            }}>
          </ui_checkbox.CheckBox>
          <ui_checkbox.CheckBox
            design={{"type":"light","mode":"secondary"}}
            style={{"margin":2}}
            selected={s1}
            onPress={function (){
              return setS1(!s1);
            }}>
          </ui_checkbox.CheckBox>
          <ui_checkbox.CheckBox
            design={{"type":"light"}}
            style={{"margin":2}}
            selected={s2}
            onPress={function (){
              return setS2(!s2);
            }}>
          </ui_checkbox.CheckBox>
          <ui_checkbox.CheckBox
            design={{"type":"light"}}
            style={{"margin":2}}
            selected={s2}
            onPress={function (){
              return setS2(!s2);
            }}>
          </ui_checkbox.CheckBox>
        </n.Row>
        <n.Row style={{"backgroundColor":"#333","flex":1,"padding":30}}>
          <ui_checkbox.CheckBox
            design={{"type":"dark"}}
            style={{"margin":2}}
            selected={s0}
            onPress={function (){
              return setS0(!s0);
            }}>
          </ui_checkbox.CheckBox>
          <ui_checkbox.CheckBox
            design={{"type":"dark","mode":"secondary"}}
            style={{"margin":2}}
            selected={s1}
            onPress={function (){
              return setS1(!s1);
            }}>
          </ui_checkbox.CheckBox>
          <ui_checkbox.CheckBox
            design={{"type":"dark"}}
            style={{"margin":2}}
            selected={s2}
            onPress={function (){
              return setS2(!s2);
            }}>
          </ui_checkbox.CheckBox>
        </n.Row>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-checkbox-test/CheckGroupIndexedDemo [87] 
function CheckGroupIndexedDemo(){
  let [indices,setIndices] = React.useState([false,true,false]);
  return (
    <n.EnclosedCodeContainer
      label=" melbourne.ui-checkbox/CheckGroupIndexed"
      code={function (){
        return "(\n  <n.Row>\n    <n.Row style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":30}}>\n      <ui_checkbox.CheckGroupIndexed\n        design={{\"type\":\"light\"}}\n        items={[\" STATS \",\" XLM \",\" USD \"]}\n        indices={indices}\n        setIndices={setIndices}>\n      </ui_checkbox.CheckGroupIndexed>\n    </n.Row>\n    <n.Row style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":30}}>\n      <ui_checkbox.CheckGroupIndexed\n        design={{\"type\":\"dark\"}}\n        items={[\" STATS \",\" XLM \",\" USD \"]}\n        indices={indices}\n        setIndices={setIndices}>\n      </ui_checkbox.CheckGroupIndexed>\n    </n.Row>\n  </n.Row>);\n(\n  <n.TextDisplay content={JSON.stringify(indices)}></n.TextDisplay>);";
      }()}>
      <n.Row>
        <n.Row style={{"backgroundColor":"#eee","flex":1,"padding":30}}>
          <ui_checkbox.CheckGroupIndexed
            design={{"type":"light"}}
            items={[" STATS "," XLM "," USD "]}
            indices={indices}
            setIndices={setIndices}>
          </ui_checkbox.CheckGroupIndexed>
        </n.Row>
        <n.Row style={{"backgroundColor":"#333","flex":1,"padding":30}}>
          <ui_checkbox.CheckGroupIndexed
            design={{"type":"dark"}}
            items={[" STATS "," XLM "," USD "]}
            indices={indices}
            setIndices={setIndices}>
          </ui_checkbox.CheckGroupIndexed>
        </n.Row>
      </n.Row>
      <n.TextDisplay content={JSON.stringify(indices)}></n.TextDisplay>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-checkbox-test/CheckGroupDemo [121] 
function CheckGroupDemo(){
  let [values,setValues] = React.useState(["USD"]);
  return (
    <n.EnclosedCodeContainer
      label=" melbourne.ui-checkbox/CheckGroup"
      code={function (){
        return "(\n  <n.Row>\n    <n.Row style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":30}}>\n      <ui_checkbox.CheckGroup\n        design={{\"type\":\"light\"}}\n        data={[\"STATS\",\"XLM\",\"USD\"]}\n        values={values}\n        setValues={setValues}\n        format={function (s){\n          return \"  \" + s;\n        }}>\n      </ui_checkbox.CheckGroup>\n    </n.Row>\n    <n.Row style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":30}}>\n      <ui_checkbox.CheckGroup\n        design={{\"type\":\"dark\"}}\n        data={[\"STATS\",\"XLM\",\"USD\"]}\n        values={values}\n        setValues={setValues}\n        format={function (s){\n          return \"  \" + s;\n        }}>\n      </ui_checkbox.CheckGroup>\n    </n.Row>\n  </n.Row>);\n(\n  <n.TextDisplay content={JSON.stringify(values)}></n.TextDisplay>);";
      }()}>
      <n.Row>
        <n.Row style={{"backgroundColor":"#eee","flex":1,"padding":30}}>
          <ui_checkbox.CheckGroup
            design={{"type":"light"}}
            data={["STATS","XLM","USD"]}
            values={values}
            setValues={setValues}
            format={function (s){
              return "  " + s;
            }}>
          </ui_checkbox.CheckGroup>
        </n.Row>
        <n.Row style={{"backgroundColor":"#333","flex":1,"padding":30}}>
          <ui_checkbox.CheckGroup
            design={{"type":"dark"}}
            data={["STATS","XLM","USD"]}
            values={values}
            setValues={setValues}
            format={function (s){
              return "  " + s;
            }}>
          </ui_checkbox.CheckGroup>
        </n.Row>
      </n.Row>
      <n.TextDisplay content={JSON.stringify(values)}></n.TextDisplay>
    </n.EnclosedCodeContainer>);
}

var MODULE = {
  "CheckBoxDemo":CheckBoxDemo,
  "CheckGroupIndexedDemo":CheckGroupIndexedDemo,
  "CheckGroupDemo":CheckGroupDemo
};

export default MODULE