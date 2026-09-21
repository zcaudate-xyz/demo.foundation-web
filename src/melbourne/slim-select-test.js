import * as ReactNative from 'react-native'

import * as n from '../libs/js/react-native'

import * as ext_form from '../libs/js/react/ext-form'

import slim_select from './slim-select'

// melbourne.slim-select-test/FormPickerDemo [21] 
function FormPickerDemo(){
  let form = ext_form.makeForm(function (){
    return {"price":"Tasmania"};
  },{"price":[]});
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-select/FormPicker"
      code={function (){
        return "(\n  <n.Row>\n    <ReactNative.View style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":10}}>\n      <slim_select.FormPicker\n        brand={{\"type\":\"light\"}}\n        label=\"Price\"\n        field=\"price\"\n        data={[\n          \"Victoria\",\n          \"Queensland\",\n          \"Tasmania\",\n          \"New South Wales\",\n          \"Western Australia\",\n          \"South Australia\"\n        ]}\n        form={form}>\n      </slim_select.FormPicker>\n      <slim_select.FormPicker\n        brand={{\"type\":\"light\",\"mode\":\"secondary\"}}\n        label=\"Price\"\n        field=\"price\"\n        data={[\n          \"Victoria\",\n          \"Queensland\",\n          \"Tasmania\",\n          \"New South Wales\",\n          \"Western Australia\",\n          \"South Australia\"\n        ]}\n        form={form}>\n      </slim_select.FormPicker>\n      <slim_select.FormPicker\n        brand={{\"type\":\"light\"}}\n        label=\"Price\"\n        field=\"price\"\n        data={[\n          \"Victoria\",\n          \"Queensland\",\n          \"Tasmania\",\n          \"New South Wales\",\n          \"Western Australia\",\n          \"South Australia\"\n        ]}\n        form={form}>\n      </slim_select.FormPicker>\n    </ReactNative.View>\n    <ReactNative.View style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":10}}>\n      <slim_select.FormPicker\n        brand={{\"type\":\"dark\"}}\n        label=\"Price\"\n        field=\"price\"\n        data={[\n          \"Victoria\",\n          \"Queensland\",\n          \"Tasmania\",\n          \"New South Wales\",\n          \"Western Australia\",\n          \"South Australia\"\n        ]}\n        form={form}>\n      </slim_select.FormPicker>\n      <slim_select.FormPicker\n        brand={{\"type\":\"dark\",\"mode\":\"secondary\"}}\n        label=\"Price\"\n        field=\"price\"\n        data={[\n          \"Victoria\",\n          \"Queensland\",\n          \"Tasmania\",\n          \"New South Wales\",\n          \"Western Australia\",\n          \"South Australia\"\n        ]}\n        form={form}>\n      </slim_select.FormPicker>\n      <slim_select.FormPicker\n        brand={{\"type\":\"dark\"}}\n        label=\"Price\"\n        field=\"price\"\n        data={[\n          \"Victoria\",\n          \"Queensland\",\n          \"Tasmania\",\n          \"New South Wales\",\n          \"Western Australia\",\n          \"South Australia\"\n        ]}\n        form={form}>\n      </slim_select.FormPicker>\n    </ReactNative.View>\n  </n.Row>);";
      }()}>
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <slim_select.FormPicker
            brand={{"type":"light"}}
            label="Price"
            field="price"
            data={[
              "Victoria",
              "Queensland",
              "Tasmania",
              "New South Wales",
              "Western Australia",
              "South Australia"
            ]}
            form={form}>
          </slim_select.FormPicker>
          <slim_select.FormPicker
            brand={{"type":"light","mode":"secondary"}}
            label="Price"
            field="price"
            data={[
              "Victoria",
              "Queensland",
              "Tasmania",
              "New South Wales",
              "Western Australia",
              "South Australia"
            ]}
            form={form}>
          </slim_select.FormPicker>
          <slim_select.FormPicker
            brand={{"type":"light"}}
            label="Price"
            field="price"
            data={[
              "Victoria",
              "Queensland",
              "Tasmania",
              "New South Wales",
              "Western Australia",
              "South Australia"
            ]}
            form={form}>
          </slim_select.FormPicker>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <slim_select.FormPicker
            brand={{"type":"dark"}}
            label="Price"
            field="price"
            data={[
              "Victoria",
              "Queensland",
              "Tasmania",
              "New South Wales",
              "Western Australia",
              "South Australia"
            ]}
            form={form}>
          </slim_select.FormPicker>
          <slim_select.FormPicker
            brand={{"type":"dark","mode":"secondary"}}
            label="Price"
            field="price"
            data={[
              "Victoria",
              "Queensland",
              "Tasmania",
              "New South Wales",
              "Western Australia",
              "South Australia"
            ]}
            form={form}>
          </slim_select.FormPicker>
          <slim_select.FormPicker
            brand={{"type":"dark"}}
            label="Price"
            field="price"
            data={[
              "Victoria",
              "Queensland",
              "Tasmania",
              "New South Wales",
              "Western Australia",
              "South Australia"
            ]}
            form={form}>
          </slim_select.FormPicker>
        </ReactNative.View>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-select-test/FormDropdownDemo [115] 
function FormDropdownDemo(){
  let form = ext_form.makeForm(function (){
    return {"price":"Victoria"};
  },{"price":[]});
  return (
    <n.Isolation>
      <n.EnclosedCodeContainer
        label="melbourne.slim-select/FormDropdown"
        code={function (){
          return "(\n  <n.Row>\n    <ReactNative.View style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":10}}>\n      <slim_select.FormDropdown\n        brand={{\"type\":\"light\",\"mode\":\"secondary\"}}\n        label=\"Price\"\n        field=\"price\"\n        data={[\n          \"Victoria\",\n          \"Queensland\",\n          \"Tasmania\",\n          \"New South Wales\",\n          \"Western Australia\",\n          \"South Australia\"\n        ]}\n        form={form}>\n      </slim_select.FormDropdown>\n    </ReactNative.View>\n    <ReactNative.View style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":10}}>\n      <slim_select.FormDropdown\n        brand={{\"type\":\"dark\",\"mode\":\"secondary\"}}\n        label=\"Price\"\n        field=\"price\"\n        data={[\n          \"Victoria\",\n          \"Queensland\",\n          \"Tasmania\",\n          \"New South Wales\",\n          \"Western Australia\",\n          \"South Australia\"\n        ]}\n        form={form}>\n      </slim_select.FormDropdown>\n    </ReactNative.View>\n  </n.Row>);";
        }()}>
        <n.Row>
          <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
            <slim_select.FormDropdown
              brand={{"type":"light","mode":"secondary"}}
              label="Price"
              field="price"
              data={[
                "Victoria",
                "Queensland",
                "Tasmania",
                "New South Wales",
                "Western Australia",
                "South Australia"
              ]}
              form={form}>
            </slim_select.FormDropdown>
          </ReactNative.View>
          <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
            <slim_select.FormDropdown
              brand={{"type":"dark","mode":"secondary"}}
              label="Price"
              field="price"
              data={[
                "Victoria",
                "Queensland",
                "Tasmania",
                "New South Wales",
                "Western Australia",
                "South Australia"
              ]}
              form={form}>
            </slim_select.FormDropdown>
          </ReactNative.View>
        </n.Row>
      </n.EnclosedCodeContainer>
    </n.Isolation>);
}

var MODULE = {
  "FormPickerDemo":FormPickerDemo,
  "FormDropdownDemo":FormDropdownDemo
};

export default MODULE