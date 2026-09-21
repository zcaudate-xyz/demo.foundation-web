import React from 'react'

import * as ReactNative from 'react-native'

import * as n from '../libs/js/react-native'

import * as ext_form from '../libs/js/react/ext-form'

import * as event_form from '../libs/xt/event/base-form'

import slim_common from './slim-common'

import validators from './base-validators'

// melbourne.slim-common-test/FormEnclosedDemo [23] 
function FormEnclosedDemo(){
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-common/FormEnclosed"
      code={function (){
        return "(\n  <n.Row>\n    <ReactNative.View style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":8}}>\n      <slim_common.FormEnclosed\n        designNeutral=\"#333\"\n        label=\"HELLO\"\n        styleLabel={{}}\n        minWidth={150}>\n        <ReactNative.View style={{\"paddingTop\":10}}><ReactNative.Text>WORLD</ReactNative.Text></ReactNative.View>\n      </slim_common.FormEnclosed>\n    </ReactNative.View>\n    <ReactNative.View style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":10}}>\n      <slim_common.FormEnclosed\n        designNeutral=\"#eee\"\n        label=\"HELLO\"\n        styleLabel={{}}\n        minWidth={150}>\n        <ReactNative.View style={{\"paddingTop\":10}}><ReactNative.Text>WORLD</ReactNative.Text></ReactNative.View>\n      </slim_common.FormEnclosed>\n    </ReactNative.View>\n  </n.Row>);";
      }()}>
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":8}}>
          <slim_common.FormEnclosed
            designNeutral="#333"
            label="HELLO"
            styleLabel={{}}
            minWidth={150}>
            <ReactNative.View style={{"paddingTop":10}}><ReactNative.Text>WORLD</ReactNative.Text></ReactNative.View>
          </slim_common.FormEnclosed>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <slim_common.FormEnclosed
            designNeutral="#eee"
            label="HELLO"
            styleLabel={{}}
            minWidth={150}>
            <ReactNative.View style={{"paddingTop":10}}><ReactNative.Text>WORLD</ReactNative.Text></ReactNative.View>
          </slim_common.FormEnclosed>
        </ReactNative.View>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-common-test/FormReadOnlyDemo [60] 
function FormReadOnlyDemo(){
  let entry = {"name":"abc"};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-common/FormReadOnly"
      code={function (){
        return "(\n  <n.Row>\n    <ReactNative.View style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":10}}>\n      <slim_common.FormReadOnly\n        design={{\"type\":\"light\"}}\n        label=\"Name\"\n        entry={entry}\n        fieldProps={{\"outlined\":true}}\n        template={[\"name\"]}>\n      </slim_common.FormReadOnly>\n    </ReactNative.View>\n    <ReactNative.View style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":10}}>\n      <slim_common.FormReadOnly\n        design={{\"type\":\"dark\"}}\n        label=\"Name\"\n        entry={entry}\n        fieldProps={{\"outlined\":true}}\n        template={[\"name\"]}>\n      </slim_common.FormReadOnly>\n    </ReactNative.View>\n  </n.Row>);";
      }()}>
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <slim_common.FormReadOnly
            design={{"type":"light"}}
            label="Name"
            entry={entry}
            fieldProps={{"outlined":true}}
            template={["name"]}>
          </slim_common.FormReadOnly>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <slim_common.FormReadOnly
            design={{"type":"dark"}}
            label="Name"
            entry={entry}
            fieldProps={{"outlined":true}}
            template={["name"]}>
          </slim_common.FormReadOnly>
        </ReactNative.View>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-common-test/FormInputDemo [92] 
function FormInputDemo(){
  let form = ext_form.makeForm(function (){
    return {"name":"abc"};
  },{"name":[validators.is_not_empty()]});
  React.useEffect(function (){
    event_form.validate_all(form);
  },[]);
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-common/FormInput"
      code={function (){
        return "(\n  <n.Row>\n    <ReactNative.Button\n      title=\"V\"\n      onPress={function (){\n        return event_form.validate_field(form,\"name\");\n      }}>\n    </ReactNative.Button>\n    <ReactNative.Text> </ReactNative.Text>\n    <ReactNative.Button\n      title=\"P\"\n      onPress={function (){\n        return console.log(form);\n      }}>\n    </ReactNative.Button>\n  </n.Row>);\n(\n  <n.Row>\n    <ReactNative.View style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":10}}>\n      <slim_common.FormInput\n        design={{\"type\":\"light\"}}\n        label=\"Name\"\n        form={form}\n        fieldProps={{\"outlined\":true}}\n        field=\"name\">\n      </slim_common.FormInput>\n    </ReactNative.View>\n    <ReactNative.View style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":10}}>\n      <slim_common.FormInput\n        design={{\"type\":\"dark\"}}\n        label=\"Name\"\n        form={form}\n        fieldProps={{\"outlined\":true}}\n        field=\"name\"\n        hideValidation={true}>\n      </slim_common.FormInput>\n    </ReactNative.View>\n  </n.Row>);";
      }()}>
      <n.Row>
        <ReactNative.Button
          title="V"
          onPress={function (){
            return event_form.validate_field(form,"name");
          }}>
        </ReactNative.Button>
        <ReactNative.Text> </ReactNative.Text>
        <ReactNative.Button
          title="P"
          onPress={function (){
            return console.log(form);
          }}>
        </ReactNative.Button>
      </n.Row>
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <slim_common.FormInput
            design={{"type":"light"}}
            label="Name"
            form={form}
            fieldProps={{"outlined":true}}
            field="name">
          </slim_common.FormInput>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <slim_common.FormInput
            design={{"type":"dark"}}
            label="Name"
            form={form}
            fieldProps={{"outlined":true}}
            field="name"
            hideValidation={true}>
          </slim_common.FormInput>
        </ReactNative.View>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-common-test/FormInputXLDemo [137] 
function FormInputXLDemo(){
  let form = ext_form.makeForm(function (){
    return {"name":"abc"};
  },{"name":[validators.is_not_empty()]});
  React.useEffect(function (){
    event_form.validate_all(form);
  },[]);
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-common/FormInputXL"
      code={function (){
        return "(\n  <n.Row>\n    <ReactNative.View style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":10}}>\n      <slim_common.FormInputXL\n        design={{\"type\":\"light\"}}\n        label=\"Name\"\n        form={form}\n        fieldProps={{\"outlined\":true}}\n        field=\"name\">\n      </slim_common.FormInputXL>\n    </ReactNative.View>\n    <ReactNative.View style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":10}}>\n      <slim_common.FormInputXL\n        design={{\"type\":\"dark\"}}\n        label=\"Name\"\n        form={form}\n        fieldProps={{\"outlined\":true}}\n        field=\"name\"\n        hideValidation={true}>\n      </slim_common.FormInputXL>\n    </ReactNative.View>\n  </n.Row>);";
      }()}>
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <slim_common.FormInputXL
            design={{"type":"light"}}
            label="Name"
            form={form}
            fieldProps={{"outlined":true}}
            field="name">
          </slim_common.FormInputXL>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <slim_common.FormInputXL
            design={{"type":"dark"}}
            label="Name"
            form={form}
            fieldProps={{"outlined":true}}
            field="name"
            hideValidation={true}>
          </slim_common.FormInputXL>
        </ReactNative.View>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-common-test/FormTextAreaDemo [174] 
function FormTextAreaDemo(){
  let form = ext_form.makeForm(function (){
    return {"name":"abc"};
  },{"name":[validators.is_not_empty()]});
  React.useEffect(function (){
    event_form.validate_all(form);
  },[]);
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-common/FormTextArea"
      code={function (){
        return "(\n  <n.Row>\n    <ReactNative.View style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":10}}>\n      <slim_common.FormTextArea\n        design={{\"type\":\"light\"}}\n        label=\"Name\"\n        form={form}\n        fieldProps={{\"outlined\":true}}\n        field=\"name\">\n      </slim_common.FormTextArea>\n    </ReactNative.View>\n    <ReactNative.View style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":10}}>\n      <slim_common.FormTextArea\n        design={{\"type\":\"dark\"}}\n        label=\"Name\"\n        form={form}\n        fieldProps={{\"outlined\":true}}\n        field=\"name\">\n      </slim_common.FormTextArea>\n    </ReactNative.View>\n  </n.Row>);";
      }()}>
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <slim_common.FormTextArea
            design={{"type":"light"}}
            label="Name"
            form={form}
            fieldProps={{"outlined":true}}
            field="name">
          </slim_common.FormTextArea>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <slim_common.FormTextArea
            design={{"type":"dark"}}
            label="Name"
            form={form}
            fieldProps={{"outlined":true}}
            field="name">
          </slim_common.FormTextArea>
        </ReactNative.View>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-common-test/FormCheckBoxDemo [210] 
function FormCheckBoxDemo(){
  let form = ext_form.makeForm(function (){
    return {"agree":false};
  },{"agree":[]});
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-common/FormCheckBox"
      code={function (){
        return "(\n  <n.Row>\n    <ReactNative.View style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":10}}>\n      <slim_common.FormCheckBox\n        design={{\"type\":\"light\"}}\n        label=\"I AGREE TO TERMS AND CONDITIONS\"\n        form={form}\n        field=\"agree\">\n      </slim_common.FormCheckBox>\n    </ReactNative.View>\n    <ReactNative.View style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":10}}>\n      <slim_common.FormCheckBox\n        design={{\"type\":\"dark\"}}\n        label=\"I AGREE TO TERMS AND CONDITIONS\"\n        form={form}\n        field=\"agree\">\n      </slim_common.FormCheckBox>\n    </ReactNative.View>\n  </n.Row>);\n(\n  <ReactNative.Text>{n.format_obj(form.data)}</ReactNative.Text>);";
      }()}>
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <slim_common.FormCheckBox
            design={{"type":"light"}}
            label="I AGREE TO TERMS AND CONDITIONS"
            form={form}
            field="agree">
          </slim_common.FormCheckBox>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <slim_common.FormCheckBox
            design={{"type":"dark"}}
            label="I AGREE TO TERMS AND CONDITIONS"
            form={form}
            field="agree">
          </slim_common.FormCheckBox>
        </ReactNative.View>
      </n.Row>
      <ReactNative.Text>{n.format_obj(form.data)}</ReactNative.Text>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-common-test/FormToggleButtonDemo [244] 
function FormToggleButtonDemo(){
  let form = ext_form.makeForm(function (){
    return {"agree":false};
  },{"agree":[]});
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-common/FormToggleButton"
      code={function (){
        return "(\n  <n.Row>\n    <ReactNative.View style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":10}}>\n      <slim_common.FormToggleButton\n        design={{\"type\":\"light\"}}\n        label=\"Agree\"\n        form={form}\n        field=\"agree\"\n        text=\"I AGREE TO TERMS AND CONDITIONS\">\n      </slim_common.FormToggleButton>\n    </ReactNative.View>\n    <ReactNative.View style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":10}}>\n      <slim_common.FormToggleButton\n        design={{\"type\":\"dark\"}}\n        label=\"Agree\"\n        form={form}\n        field=\"agree\"\n        text=\"I AGREE TO TERMS AND CONDITIONS\">\n      </slim_common.FormToggleButton>\n    </ReactNative.View>\n  </n.Row>);";
      }()}>
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <slim_common.FormToggleButton
            design={{"type":"light"}}
            label="Agree"
            form={form}
            field="agree"
            text="I AGREE TO TERMS AND CONDITIONS">
          </slim_common.FormToggleButton>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <slim_common.FormToggleButton
            design={{"type":"dark"}}
            label="Agree"
            form={form}
            field="agree"
            text="I AGREE TO TERMS AND CONDITIONS">
          </slim_common.FormToggleButton>
        </ReactNative.View>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-common-test/FormToggleSwitchDemo [278] 
function FormToggleSwitchDemo(){
  let form = ext_form.makeForm(function (){
    return {"agree":false};
  },{"agree":[]});
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-common/FormToggleSwitch"
      code={function (){
        return "(\n  <n.Row>\n    <ReactNative.View style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":10}}>\n      <slim_common.FormToggleSwitch\n        design={{\"type\":\"light\"}}\n        label=\"Agree\"\n        form={form}\n        field=\"agree\">\n      </slim_common.FormToggleSwitch>\n    </ReactNative.View>\n    <ReactNative.View style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":10}}>\n      <slim_common.FormToggleSwitch\n        design={{\"type\":\"dark\"}}\n        label=\"Agree\"\n        form={form}\n        field=\"agree\">\n      </slim_common.FormToggleSwitch>\n    </ReactNative.View>\n  </n.Row>);";
      }()}>
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <slim_common.FormToggleSwitch
            design={{"type":"light"}}
            label="Agree"
            form={form}
            field="agree">
          </slim_common.FormToggleSwitch>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <slim_common.FormToggleSwitch
            design={{"type":"dark"}}
            label="Agree"
            form={form}
            field="agree">
          </slim_common.FormToggleSwitch>
        </ReactNative.View>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-common-test/FormEnumSingleDemo [310] 
function FormEnumSingleDemo(){
  let form = ext_form.makeForm(function (){
    return {"currency":"XLM"};
  },{"currency":[]});
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-common/FormEnumSingle"
      code={function (){
        return "(\n  <n.Row>\n    <ReactNative.View style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":10}}>\n      <slim_common.FormEnumSingle\n        design={{\"type\":\"light\"}}\n        label=\"Currency\"\n        form={form}\n        field=\"currency\"\n        options={[\"XLM\",\"USD\",\"STATS\"]}>\n      </slim_common.FormEnumSingle>\n    </ReactNative.View>\n    <ReactNative.View style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":10}}>\n      <slim_common.FormEnumSingle\n        design={{\"type\":\"dark\"}}\n        label=\"Currency\"\n        form={form}\n        field=\"currency\"\n        options={[\"XLM\",\"USD\",\"STATS\"]}>\n      </slim_common.FormEnumSingle>\n    </ReactNative.View>\n  </n.Row>);";
      }()}>
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <slim_common.FormEnumSingle
            design={{"type":"light"}}
            label="Currency"
            form={form}
            field="currency"
            options={["XLM","USD","STATS"]}>
          </slim_common.FormEnumSingle>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <slim_common.FormEnumSingle
            design={{"type":"dark"}}
            label="Currency"
            form={form}
            field="currency"
            options={["XLM","USD","STATS"]}>
          </slim_common.FormEnumSingle>
        </ReactNative.View>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-common-test/FormEnumMultiDemo [344] 
function FormEnumMultiDemo(){
  let form = ext_form.makeForm(function (){
    return {"currency":["XLM","STATS"]};
  },{"currency":[]});
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-common/FormEnumMulti"
      code={function (){
        return "(\n  <n.Row>\n    <ReactNative.View style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":10}}>\n      <slim_common.FormEnumMulti\n        design={{\"type\":\"light\"}}\n        label=\"Currency\"\n        form={form}\n        field=\"currency\"\n        options={[\"XLM\",\"USD\",\"STATS\"]}>\n      </slim_common.FormEnumMulti>\n    </ReactNative.View>\n    <ReactNative.View style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":10}}>\n      <slim_common.FormEnumMulti\n        design={{\"type\":\"dark\"}}\n        label=\"Currency\"\n        form={form}\n        field=\"currency\"\n        options={[\"XLM\",\"USD\",\"STATS\"]}>\n      </slim_common.FormEnumMulti>\n    </ReactNative.View>\n  </n.Row>);";
      }()}>
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <slim_common.FormEnumMulti
            design={{"type":"light"}}
            label="Currency"
            form={form}
            field="currency"
            options={["XLM","USD","STATS"]}>
          </slim_common.FormEnumMulti>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <slim_common.FormEnumMulti
            design={{"type":"dark"}}
            label="Currency"
            form={form}
            field="currency"
            options={["XLM","USD","STATS"]}>
          </slim_common.FormEnumMulti>
        </ReactNative.View>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-common-test/FormColorInputDemo [378] 
function FormColorInputDemo(){
  let form = ext_form.makeForm(function (){
    return {"color":"#456789"};
  },{"color":[]});
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-common/FormColorInput"
      code={function (){
        return "(\n  <n.Row>\n    <ReactNative.View style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":10}}>\n      <slim_common.FormColorInput\n        design={{\"type\":\"light\"}}\n        label=\"Color\"\n        form={form}\n        field=\"color\">\n      </slim_common.FormColorInput>\n    </ReactNative.View>\n    <ReactNative.View style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":10}}>\n      <slim_common.FormColorInput\n        design={{\"type\":\"dark\"}}\n        label=\"Color\"\n        form={form}\n        field=\"color\">\n      </slim_common.FormColorInput>\n    </ReactNative.View>\n  </n.Row>);";
      }()}>
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <slim_common.FormColorInput
            design={{"type":"light"}}
            label="Color"
            form={form}
            field="color">
          </slim_common.FormColorInput>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <slim_common.FormColorInput
            design={{"type":"dark"}}
            label="Color"
            form={form}
            field="color">
          </slim_common.FormColorInput>
        </ReactNative.View>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-common-test/FormChipInputDemo [410] 
function FormChipInputDemo(){
  let form = ext_form.makeForm(function (){
    return {"tags":["football","sport"]};
  },{"tags":[]});
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-common/FormChipInput"
      code={function (){
        return "(\n  <n.Row>\n    <ReactNative.View style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":10}}>\n      <slim_common.FormChipInput\n        design={{\"type\":\"light\"}}\n        label=\"Tags\"\n        form={form}\n        field=\"tags\">\n      </slim_common.FormChipInput>\n    </ReactNative.View>\n    <ReactNative.View style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":10}}>\n      <slim_common.FormChipInput design={{\"type\":\"dark\"}} label=\"Tags\" form={form} field=\"tags\"></slim_common.FormChipInput>\n    </ReactNative.View>\n  </n.Row>);";
      }()}>
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <slim_common.FormChipInput
            design={{"type":"light"}}
            label="Tags"
            form={form}
            field="tags">
          </slim_common.FormChipInput>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <slim_common.FormChipInput design={{"type":"dark"}} label="Tags" form={form} field="tags"></slim_common.FormChipInput>
        </ReactNative.View>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-common-test/FormLayoutDemo [442] 
function FormLayoutDemo(){
  let form = ext_form.makeForm(function (){
    return {
      "currency":["XLM","STATS"],
      "currency1":"USD",
      "name":"",
      "about":""
    };
  },{"currency":[],"currency1":[],"name":[],"about":[]});
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-common/FormLayout"
      code={function (){
        return "(\n  <n.Row>\n    <ReactNative.View style={{\"backgroundColor\":\"#eee\",\"padding\":20,\"flex\":1}}>\n      <slim_common.FormLayout\n        design={{\"type\":\"light\"}}\n        form={form}\n        rows={[\n          {\n          \"component\":slim_common.FormEnumMulti,\n          \"label\":\"Currency\",\n          \"field\":\"currency\",\n          \"options\":[\"XLM\",\"USD\",\"STATS\"]\n        },\n          {\n          \"component\":slim_common.FormEnumSingle,\n          \"label\":\"Currency1\",\n          \"field\":\"currency1\",\n          \"options\":[\"USD\",\"STATS\"]\n        },\n          {\n          \"component\":slim_common.FormInput,\n          \"label\":\"Name\",\n          \"field\":\"name\"\n        },\n          {\n          \"component\":slim_common.FormTextArea,\n          \"label\":\"About\",\n          \"field\":\"about\"\n        }\n        ]}>\n      </slim_common.FormLayout>\n    </ReactNative.View>\n    <ReactNative.View style={{\"backgroundColor\":\"#333\",\"padding\":20,\"flex\":1}}>\n      <slim_common.FormLayout\n        design={{\"type\":\"dark\"}}\n        form={form}\n        rows={[\n          {\n          \"component\":slim_common.FormEnumMulti,\n          \"label\":\"Currency\",\n          \"field\":\"currency\",\n          \"options\":[\"XLM\",\"USD\",\"STATS\"]\n        },\n          {\n          \"component\":slim_common.FormEnumSingle,\n          \"label\":\"Currency1\",\n          \"field\":\"currency1\",\n          \"options\":[\"USD\",\"STATS\"]\n        },\n          {\n          \"component\":slim_common.FormInput,\n          \"label\":\"Name\",\n          \"field\":\"name\"\n        },\n          {\n          \"component\":slim_common.FormTextArea,\n          \"label\":\"About\",\n          \"field\":\"about\"\n        }\n        ]}>\n      </slim_common.FormLayout>\n    </ReactNative.View>\n  </n.Row>);";
      }()}>
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","padding":20,"flex":1}}>
          <slim_common.FormLayout
            design={{"type":"light"}}
            form={form}
            rows={[
              {
              "component":slim_common.FormEnumMulti,
              "label":"Currency",
              "field":"currency",
              "options":["XLM","USD","STATS"]
            },
              {
              "component":slim_common.FormEnumSingle,
              "label":"Currency1",
              "field":"currency1",
              "options":["USD","STATS"]
            },
              {
              "component":slim_common.FormInput,
              "label":"Name",
              "field":"name"
            },
              {
              "component":slim_common.FormTextArea,
              "label":"About",
              "field":"about"
            }
            ]}>
          </slim_common.FormLayout>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","padding":20,"flex":1}}>
          <slim_common.FormLayout
            design={{"type":"dark"}}
            form={form}
            rows={[
              {
              "component":slim_common.FormEnumMulti,
              "label":"Currency",
              "field":"currency",
              "options":["XLM","USD","STATS"]
            },
              {
              "component":slim_common.FormEnumSingle,
              "label":"Currency1",
              "field":"currency1",
              "options":["USD","STATS"]
            },
              {
              "component":slim_common.FormInput,
              "label":"Name",
              "field":"name"
            },
              {
              "component":slim_common.FormTextArea,
              "label":"About",
              "field":"about"
            }
            ]}>
          </slim_common.FormLayout>
        </ReactNative.View>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

var MODULE = {
  "FormEnclosedDemo":FormEnclosedDemo,
  "FormReadOnlyDemo":FormReadOnlyDemo,
  "FormInputDemo":FormInputDemo,
  "FormInputXLDemo":FormInputXLDemo,
  "FormTextAreaDemo":FormTextAreaDemo,
  "FormCheckBoxDemo":FormCheckBoxDemo,
  "FormToggleButtonDemo":FormToggleButtonDemo,
  "FormToggleSwitchDemo":FormToggleSwitchDemo,
  "FormEnumSingleDemo":FormEnumSingleDemo,
  "FormEnumMultiDemo":FormEnumMultiDemo,
  "FormColorInputDemo":FormColorInputDemo,
  "FormChipInputDemo":FormChipInputDemo,
  "FormLayoutDemo":FormLayoutDemo
};

export default MODULE