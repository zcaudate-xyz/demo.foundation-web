import React from 'react'

import * as ReactNative from 'react-native'

import * as n from '../libs/js/react-native'

import ui_group from './ui-group'

// melbourne.ui-group-test/EnumMultiIndexedDemo [20] 
function EnumMultiIndexedDemo(){
  let [indices,setIndices] = React.useState([false,true,false]);
  return (
    <n.EnclosedCodeContainer
      label="ui-group/EnumMultiIndexed"
      code={function (){
        return "(\n  <ui_group.EnumMultiIndexed\n    design={{\"type\":\"light\"}}\n    items={[\" STATS \",\" XLM \",\" USD \"]}\n    indices={indices}\n    setIndices={setIndices}>\n  </ui_group.EnumMultiIndexed>);";
      }()}>
      <ui_group.EnumMultiIndexed
        design={{"type":"light"}}
        items={[" STATS "," XLM "," USD "]}
        indices={indices}
        setIndices={setIndices}>
      </ui_group.EnumMultiIndexed>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-group-test/EnumMultiDemo [37] 
function EnumMultiDemo(){
  let [values,setValues] = React.useState(["USD"]);
  return (
    <n.EnclosedCodeContainer
      label="ui-group/EnumMulti"
      code={function (){
        return "(\n  <ui_group.EnumMulti\n    design={{\"type\":\"light\"}}\n    data={[\"STATS\",\"XLM\",\"USD\"]}\n    values={values}\n    setValues={setValues}>\n  </ui_group.EnumMulti>);";
      }()}>
      <ui_group.EnumMulti
        design={{"type":"light"}}
        data={["STATS","XLM","USD"]}
        values={values}
        setValues={setValues}>
      </ui_group.EnumMulti>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-group-test/TabsIndexedDemo [53] 
function TabsIndexedDemo(){
  let [index0,setIndex0] = React.useState(1);
  let [index1,setIndex1] = React.useState(2);
  let [index2,setIndex2] = React.useState(0);
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-group/TabsIndexed"
      code={function (){
        return "(\n  <ReactNative.View style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":20}}>\n    <ui_group.TabsIndexed\n      design={{\"type\":\"light\"}}\n      items={[\"A\",\"B\",\"C\",\"D\"]}\n      index={index0}\n      setIndex={setIndex0}>\n    </ui_group.TabsIndexed>\n    <ui_group.TabsIndexed\n      design={{\"type\":\"light\",\"mode\":\"secondary\"}}\n      style={{\"marginHorizontal\":10}}\n      items={[\"AA\",\"BB\",\"CC\",\"DD\"]}\n      index={index1}\n      setIndex={setIndex1}>\n    </ui_group.TabsIndexed>\n    <ui_group.TabsIndexed\n      design={{\"type\":\"light\"}}\n      style={{\"marginHorizontal\":1,\"paddingVertical\":2}}\n      items={[\"123\",\"456\",\"789\",\"abc\"]}\n      index={index2}\n      setIndex={setIndex2}>\n    </ui_group.TabsIndexed>\n  </ReactNative.View>);\n(\n  <n.Row\n    style={{\n      \"backgroundColor\":\"#333\",\n      \"flex\":1,\n      \"padding\":10,\n      \"paddingBottom\":30\n    }}>\n    <ReactNative.View style={{\"width\":50,\"marginRight\":50}}>\n      <ui_group.TabsIndexed\n        design={{\"type\":\"dark\"}}\n        items={[\"A\",\"B\",\"C\",\"D\"]}\n        index={index0}\n        setIndex={setIndex0}\n        style={{\"marginHorizontal\":1,\"paddingVertical\":5,\"marginVertical\":5}}\n        styleContainer={{\"flexDirection\":\"column\"}}>\n      </ui_group.TabsIndexed>\n    </ReactNative.View>\n    <ReactNative.View style={{\"width\":100,\"marginRight\":50}}>\n      <ui_group.TabsIndexed\n        design={{\"type\":\"dark\",\"mode\":\"secondary\"}}\n        items={[\"AA\",\"BB\",\"CC\",\"DD\"]}\n        index={index1}\n        setIndex={setIndex1}\n        style={{\"marginHorizontal\":1,\"paddingVertical\":5,\"marginVertical\":5}}\n        styleContainer={{\"flexDirection\":\"column\"}}>\n      </ui_group.TabsIndexed>\n    </ReactNative.View>\n    <ReactNative.View style={{\"width\":100,\"marginRight\":50}}>\n      <ui_group.TabsIndexed\n        design={{\"type\":\"dark\"}}\n        style={{\"marginHorizontal\":1,\"paddingVertical\":5,\"marginVertical\":5}}\n        styleContainer={{\"flexDirection\":\"column\"}}\n        items={[\"123\",\"456\",\"789\",\"abc\"]}\n        index={index2}\n        setIndex={setIndex2}>\n      </ui_group.TabsIndexed>\n    </ReactNative.View>\n  </n.Row>);";
      }()}>
      <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":20}}>
        <ui_group.TabsIndexed
          design={{"type":"light"}}
          items={["A","B","C","D"]}
          index={index0}
          setIndex={setIndex0}>
        </ui_group.TabsIndexed>
        <ui_group.TabsIndexed
          design={{"type":"light","mode":"secondary"}}
          style={{"marginHorizontal":10}}
          items={["AA","BB","CC","DD"]}
          index={index1}
          setIndex={setIndex1}>
        </ui_group.TabsIndexed>
        <ui_group.TabsIndexed
          design={{"type":"light"}}
          style={{"marginHorizontal":1,"paddingVertical":2}}
          items={["123","456","789","abc"]}
          index={index2}
          setIndex={setIndex2}>
        </ui_group.TabsIndexed>
      </ReactNative.View>
      <n.Row
        style={{
          "backgroundColor":"#333",
          "flex":1,
          "padding":10,
          "paddingBottom":30
        }}>
        <ReactNative.View style={{"width":50,"marginRight":50}}>
          <ui_group.TabsIndexed
            design={{"type":"dark"}}
            items={["A","B","C","D"]}
            index={index0}
            setIndex={setIndex0}
            style={{"marginHorizontal":1,"paddingVertical":5,"marginVertical":5}}
            styleContainer={{"flexDirection":"column"}}>
          </ui_group.TabsIndexed>
        </ReactNative.View>
        <ReactNative.View style={{"width":100,"marginRight":50}}>
          <ui_group.TabsIndexed
            design={{"type":"dark","mode":"secondary"}}
            items={["AA","BB","CC","DD"]}
            index={index1}
            setIndex={setIndex1}
            style={{"marginHorizontal":1,"paddingVertical":5,"marginVertical":5}}
            styleContainer={{"flexDirection":"column"}}>
          </ui_group.TabsIndexed>
        </ReactNative.View>
        <ReactNative.View style={{"width":100,"marginRight":50}}>
          <ui_group.TabsIndexed
            design={{"type":"dark"}}
            style={{"marginHorizontal":1,"paddingVertical":5,"marginVertical":5}}
            styleContainer={{"flexDirection":"column"}}
            items={["123","456","789","abc"]}
            index={index2}
            setIndex={setIndex2}>
          </ui_group.TabsIndexed>
        </ReactNative.View>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-group-test/TabsDemo [135] 
function TabsDemo(){
  let [value0,setValue0] = React.useState("A");
  let [value1,setValue1] = React.useState("CC");
  let [value2,setValue2] = React.useState("789");
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-group/Tabs"
      code={function (){
        return "(\n  <ReactNative.View style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":20}}>\n    <ui_group.Tabs\n      design={{\"type\":\"dark\"}}\n      data={[\"A\",\"B\",\"C\",\"D\"]}\n      value={value0}\n      setValue={setValue0}>\n    </ui_group.Tabs>\n    <ui_group.Tabs\n      design={{\"type\":\"dark\",\"mode\":\"secondary\"}}\n      style={{\"marginHorizontal\":5,\"paddingVertical\":2}}\n      data={[\"AA\",\"BB\",\"CC\",\"DD\"]}\n      value={value1}\n      setValue={setValue1}>\n    </ui_group.Tabs>\n    <ui_group.Tabs\n      design={{\"type\":\"dark\"}}\n      style={{\"marginHorizontal\":1,\"paddingVertical\":2}}\n      data={[\"123\",\"456\",\"789\",\"abc\"]}\n      value={value2}\n      setValue={setValue2}>\n    </ui_group.Tabs>\n  </ReactNative.View>);\n(\n  <n.Row\n    style={{\n      \"backgroundColor\":\"#eee\",\n      \"flex\":1,\n      \"padding\":10,\n      \"paddingBottom\":30\n    }}>\n    <ReactNative.View style={{\"width\":50,\"marginRight\":50}}>\n      <ui_group.Tabs\n        design={{\"type\":\"light\"}}\n        data={[\"A\",\"B\",\"C\",\"D\"]}\n        value={value0}\n        setValue={setValue0}\n        style={{\"marginHorizontal\":1,\"paddingVertical\":5,\"marginVertical\":5}}\n        styleContainer={{\"flexDirection\":\"column\"}}>\n      </ui_group.Tabs>\n    </ReactNative.View>\n    <ReactNative.View style={{\"width\":100,\"marginRight\":50}}>\n      <ui_group.Tabs\n        design={{\"type\":\"light\",\"mode\":\"secondary\"}}\n        data={[\"AA\",\"BB\",\"CC\",\"DD\"]}\n        value={value1}\n        setValue={setValue1}\n        style={{\"marginHorizontal\":1,\"paddingVertical\":5,\"marginVertical\":5}}\n        styleContainer={{\"flexDirection\":\"column\"}}>\n      </ui_group.Tabs>\n    </ReactNative.View>\n    <ReactNative.View style={{\"width\":100,\"marginRight\":50}}>\n      <ui_group.Tabs\n        design={{\"type\":\"light\"}}\n        style={{\"marginHorizontal\":1,\"paddingVertical\":5,\"marginVertical\":5}}\n        styleContainer={{\"flexDirection\":\"column\"}}\n        data={[\"123\",\"456\",\"789\",\"abc\"]}\n        value={value2}\n        setValue={setValue2}>\n      </ui_group.Tabs>\n    </ReactNative.View>\n  </n.Row>);";
      }()}>
      <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":20}}>
        <ui_group.Tabs
          design={{"type":"dark"}}
          data={["A","B","C","D"]}
          value={value0}
          setValue={setValue0}>
        </ui_group.Tabs>
        <ui_group.Tabs
          design={{"type":"dark","mode":"secondary"}}
          style={{"marginHorizontal":5,"paddingVertical":2}}
          data={["AA","BB","CC","DD"]}
          value={value1}
          setValue={setValue1}>
        </ui_group.Tabs>
        <ui_group.Tabs
          design={{"type":"dark"}}
          style={{"marginHorizontal":1,"paddingVertical":2}}
          data={["123","456","789","abc"]}
          value={value2}
          setValue={setValue2}>
        </ui_group.Tabs>
      </ReactNative.View>
      <n.Row
        style={{
          "backgroundColor":"#eee",
          "flex":1,
          "padding":10,
          "paddingBottom":30
        }}>
        <ReactNative.View style={{"width":50,"marginRight":50}}>
          <ui_group.Tabs
            design={{"type":"light"}}
            data={["A","B","C","D"]}
            value={value0}
            setValue={setValue0}
            style={{"marginHorizontal":1,"paddingVertical":5,"marginVertical":5}}
            styleContainer={{"flexDirection":"column"}}>
          </ui_group.Tabs>
        </ReactNative.View>
        <ReactNative.View style={{"width":100,"marginRight":50}}>
          <ui_group.Tabs
            design={{"type":"light","mode":"secondary"}}
            data={["AA","BB","CC","DD"]}
            value={value1}
            setValue={setValue1}
            style={{"marginHorizontal":1,"paddingVertical":5,"marginVertical":5}}
            styleContainer={{"flexDirection":"column"}}>
          </ui_group.Tabs>
        </ReactNative.View>
        <ReactNative.View style={{"width":100,"marginRight":50}}>
          <ui_group.Tabs
            design={{"type":"light"}}
            style={{"marginHorizontal":1,"paddingVertical":5,"marginVertical":5}}
            styleContainer={{"flexDirection":"column"}}
            data={["123","456","789","abc"]}
            value={value2}
            setValue={setValue2}>
          </ui_group.Tabs>
        </ReactNative.View>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-group-test/ListIndexedDemo [218] 
function ListIndexedDemo(){
  let [index0,setIndex0] = React.useState(1);
  let [index1,setIndex1] = React.useState(2);
  let [index2,setIndex2] = React.useState(0);
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-group/ListIndexed"
      code={function (){
        return "(\n  <n.Row style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":20}}>\n    <ReactNative.View style={{\"width\":100}}>\n      <ui_group.ListIndexed\n        design={{\"type\":\"light\"}}\n        items={[\"A\",\"B\",\"C\",\"D\"]}\n        index={index0}\n        setIndex={setIndex0}>\n      </ui_group.ListIndexed>\n    </ReactNative.View>\n    <ReactNative.View style={{\"width\":100}}>\n      <ui_group.ListIndexed\n        design={{\"type\":\"light\",\"mode\":\"secondary\"}}\n        style={{\"marginHorizontal\":10}}\n        items={[\"AA\",\"BB\",\"CC\",\"DD\"]}\n        index={index1}\n        setIndex={setIndex1}>\n      </ui_group.ListIndexed>\n    </ReactNative.View>\n    <ReactNative.View style={{\"width\":100}}>\n      <ui_group.ListIndexed\n        design={{\"type\":\"light\"}}\n        style={{\"marginHorizontal\":1,\"paddingVertical\":2}}\n        items={[\"123\",\"456\",\"789\",\"abc\"]}\n        index={index2}\n        setIndex={setIndex2}>\n      </ui_group.ListIndexed>\n    </ReactNative.View>\n  </n.Row>);";
      }()}>
      <n.Row style={{"backgroundColor":"#eee","flex":1,"padding":20}}>
        <ReactNative.View style={{"width":100}}>
          <ui_group.ListIndexed
            design={{"type":"light"}}
            items={["A","B","C","D"]}
            index={index0}
            setIndex={setIndex0}>
          </ui_group.ListIndexed>
        </ReactNative.View>
        <ReactNative.View style={{"width":100}}>
          <ui_group.ListIndexed
            design={{"type":"light","mode":"secondary"}}
            style={{"marginHorizontal":10}}
            items={["AA","BB","CC","DD"]}
            index={index1}
            setIndex={setIndex1}>
          </ui_group.ListIndexed>
        </ReactNative.View>
        <ReactNative.View style={{"width":100}}>
          <ui_group.ListIndexed
            design={{"type":"light"}}
            style={{"marginHorizontal":1,"paddingVertical":2}}
            items={["123","456","789","abc"]}
            index={index2}
            setIndex={setIndex2}>
          </ui_group.ListIndexed>
        </ReactNative.View>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-group-test/ListDemo [262] 
function ListDemo(){
  let [value0,setValue0] = React.useState("A");
  let [value1,setValue1] = React.useState("CC");
  let [value2,setValue2] = React.useState("789");
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-group/List"
      code={function (){
        return "(\n  <n.Row style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":20}}>\n    <ReactNative.View style={{\"width\":100}}>\n      <ui_group.List\n        design={{\"type\":\"dark\"}}\n        data={[\"A\",\"B\",\"C\",\"D\"]}\n        value={value0}\n        setValue={setValue0}>\n      </ui_group.List>\n    </ReactNative.View>\n    <ReactNative.View style={{\"width\":100}}>\n      <ui_group.List\n        design={{\"type\":\"dark\",\"mode\":\"secondary\"}}\n        style={{\"marginHorizontal\":5,\"paddingVertical\":2}}\n        data={[\"AA\",\"BB\",\"CC\",\"DD\"]}\n        value={value1}\n        setValue={setValue1}>\n      </ui_group.List>\n    </ReactNative.View>\n    <ReactNative.View style={{\"width\":100}}>\n      <ui_group.List\n        design={{\"type\":\"dark\"}}\n        style={{\"marginHorizontal\":1,\"paddingVertical\":2}}\n        data={[\"123\",\"456\",\"789\",\"abc\"]}\n        value={value2}\n        setValue={setValue2}>\n      </ui_group.List>\n    </ReactNative.View>\n  </n.Row>);";
      }()}>
      <n.Row style={{"backgroundColor":"#333","flex":1,"padding":20}}>
        <ReactNative.View style={{"width":100}}>
          <ui_group.List
            design={{"type":"dark"}}
            data={["A","B","C","D"]}
            value={value0}
            setValue={setValue0}>
          </ui_group.List>
        </ReactNative.View>
        <ReactNative.View style={{"width":100}}>
          <ui_group.List
            design={{"type":"dark","mode":"secondary"}}
            style={{"marginHorizontal":5,"paddingVertical":2}}
            data={["AA","BB","CC","DD"]}
            value={value1}
            setValue={setValue1}>
          </ui_group.List>
        </ReactNative.View>
        <ReactNative.View style={{"width":100}}>
          <ui_group.List
            design={{"type":"dark"}}
            style={{"marginHorizontal":1,"paddingVertical":2}}
            data={["123","456","789","abc"]}
            value={value2}
            setValue={setValue2}>
          </ui_group.List>
        </ReactNative.View>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

var MODULE = {
  "EnumMultiIndexedDemo":EnumMultiIndexedDemo,
  "EnumMultiDemo":EnumMultiDemo,
  "TabsIndexedDemo":TabsIndexedDemo,
  "TabsDemo":TabsDemo,
  "ListIndexedDemo":ListIndexedDemo,
  "ListDemo":ListDemo
};

export default MODULE