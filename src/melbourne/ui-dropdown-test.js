import React from 'react'

import * as ReactNative from 'react-native'

import * as n from '../libs/js/react-native'

import ui_dropdown from './ui-dropdown'

// melbourne.ui-dropdown-test/DropdownIndexedDemo [23] 
function DropdownIndexedDemo(){
  let [active,setActive] = React.useState();
  let [index,setIndex] = React.useState(2);
  return (
    <n.Isolation>
      <n.EnclosedCodeContainer
        label="melbourne.ui-dropdown/DropdownIndexed"
        code={function (){
          return "(\n  <n.TextDisplay content={n.format_entry({index})}></n.TextDisplay>);\n(\n  <n.Row>\n    <n.Row\n      style={{\n        \"backgroundColor\":\"#eee\",\n        \"flex\":1,\n        \"flexDirection\":\"row-reverese\",\n        \"padding\":30\n      }}>\n      <ui_dropdown.DropdownIndexed\n        design={{\"type\":\"light\"}}\n        items={[\"A\",\"B\",\"C\",\"D\"]}\n        active={active}\n        setActive={setActive}\n        index={index}\n        setIndex={setIndex}>\n      </ui_dropdown.DropdownIndexed>\n    </n.Row>\n    <n.Row\n      style={{\n        \"backgroundColor\":\"#333\",\n        \"flex\":1,\n        \"flexDirection\":\"row-reverese\",\n        \"padding\":30\n      }}>\n      <ui_dropdown.DropdownIndexed\n        design={{\"type\":\"dark\"}}\n        items={[\"A\",\"B\",\"C\",\"D\"]}\n        active={active}\n        setActive={setActive}\n        index={index}\n        setIndex={setIndex}>\n      </ui_dropdown.DropdownIndexed>\n    </n.Row>\n  </n.Row>);";
        }()}>
        <n.TextDisplay content={n.format_entry({index})}></n.TextDisplay>
        <n.Row>
          <n.Row
            style={{
              "backgroundColor":"#eee",
              "flex":1,
              "flexDirection":"row-reverese",
              "padding":30
            }}>
            <ui_dropdown.DropdownIndexed
              design={{"type":"light"}}
              items={["A","B","C","D"]}
              active={active}
              setActive={setActive}
              index={index}
              setIndex={setIndex}>
            </ui_dropdown.DropdownIndexed>
          </n.Row>
          <n.Row
            style={{
              "backgroundColor":"#333",
              "flex":1,
              "flexDirection":"row-reverese",
              "padding":30
            }}>
            <ui_dropdown.DropdownIndexed
              design={{"type":"dark"}}
              items={["A","B","C","D"]}
              active={active}
              setActive={setActive}
              index={index}
              setIndex={setIndex}>
            </ui_dropdown.DropdownIndexed>
          </n.Row>
        </n.Row>
      </n.EnclosedCodeContainer>
    </n.Isolation>);
}

// melbourne.ui-dropdown-test/DropdownDemo [59] 
function DropdownDemo(){
  let [active,setActive] = React.useState();
  let [value,setValue] = React.useState("C");
  let [display,setDisplay] = React.useState("screen");
  return (
    <n.Isolation>
      <n.EnclosedCodeContainer
        label="melbourne.ui-dropdown/Dropdown"
        code={function (){
          return "(\n  <n.Tabs\n    data={[\"screen\",\"dropdown\"]}\n    value={display}\n    setValue={setDisplay}>\n  </n.Tabs>);\n(\n  <n.TextDisplay content={n.format_entry({value})}></n.TextDisplay>);\n(\n  <n.Row>\n    <n.Row\n      style={{\n        \"backgroundColor\":\"#eee\",\n        \"flex\":1,\n        \"flexDirection\":\"row-reverese\",\n        \"padding\":30\n      }}>\n      <ui_dropdown.Dropdown\n        design={{\"type\":\"light\"}}\n        displayType={display}\n        data={[\"A\",\"B\",\"C\",\"D\"]}\n        active={active}\n        setActive={setActive}\n        value={value}\n        setValue={setValue}>\n      </ui_dropdown.Dropdown>\n    </n.Row>\n    <n.Row\n      style={{\n        \"backgroundColor\":\"#333\",\n        \"flex\":1,\n        \"flexDirection\":\"row-reverese\",\n        \"padding\":30\n      }}>\n      <ui_dropdown.Dropdown\n        design={{\"type\":\"dark\"}}\n        displayType={display}\n        data={[\"A\",\"B\",\"C\",\"D\"]}\n        active={active}\n        setActive={setActive}\n        value={value}\n        setValue={setValue}>\n      </ui_dropdown.Dropdown>\n    </n.Row>\n  </n.Row>);";
        }()}>
        <n.Tabs
          data={["screen","dropdown"]}
          value={display}
          setValue={setDisplay}>
        </n.Tabs>
        <n.TextDisplay content={n.format_entry({value})}></n.TextDisplay>
        <n.Row>
          <n.Row
            style={{
              "backgroundColor":"#eee",
              "flex":1,
              "flexDirection":"row-reverese",
              "padding":30
            }}>
            <ui_dropdown.Dropdown
              design={{"type":"light"}}
              displayType={display}
              data={["A","B","C","D"]}
              active={active}
              setActive={setActive}
              value={value}
              setValue={setValue}>
            </ui_dropdown.Dropdown>
          </n.Row>
          <n.Row
            style={{
              "backgroundColor":"#333",
              "flex":1,
              "flexDirection":"row-reverese",
              "padding":30
            }}>
            <ui_dropdown.Dropdown
              design={{"type":"dark"}}
              displayType={display}
              data={["A","B","C","D"]}
              active={active}
              setActive={setActive}
              value={value}
              setValue={setValue}>
            </ui_dropdown.Dropdown>
          </n.Row>
        </n.Row>
      </n.EnclosedCodeContainer>
    </n.Isolation>);
}

var MODULE = {
  "DropdownIndexedDemo":DropdownIndexedDemo,
  "DropdownDemo":DropdownDemo
};

export default MODULE