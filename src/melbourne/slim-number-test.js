import * as ReactNative from 'react-native'

import * as n from '../libs/js/react-native'

import * as ext_form from '../libs/js/react/ext-form'

import slim_number from './slim-number'

// melbourne.slim-number-test/FormSpinnerDemo [20] 
function FormSpinnerDemo(){
  let form = ext_form.makeForm(function (){
    return {"price":50};
  },{"price":[]});
  let [max,min,step,decimal] = [1000,0,2,2];
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-number/FormSpinner"
      code={function (){
        return "(\n  <n.Row>\n    <ReactNative.View style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":10}}>\n      <slim_number.FormSpinner\n        brand={{\"type\":\"light\"}}\n        label=\"Price\"\n        field=\"price\"\n        form={form}\n        step={step}\n        min={min}\n        max={max}\n        decimal={decimal}>\n      </slim_number.FormSpinner>\n    </ReactNative.View>\n    <ReactNative.View style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":10}}>\n      <slim_number.FormSpinner\n        brand={{\"type\":\"dark\"}}\n        label=\"Price\"\n        field=\"price\"\n        form={form}\n        step={step}\n        min={min}\n        max={max}\n        decimal={decimal}>\n      </slim_number.FormSpinner>\n    </ReactNative.View>\n  </n.Row>);";
      }()}>
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <slim_number.FormSpinner
            brand={{"type":"light"}}
            label="Price"
            field="price"
            form={form}
            step={step}
            min={min}
            max={max}
            decimal={decimal}>
          </slim_number.FormSpinner>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <slim_number.FormSpinner
            brand={{"type":"dark"}}
            label="Price"
            field="price"
            form={form}
            step={step}
            min={min}
            max={max}
            decimal={decimal}>
          </slim_number.FormSpinner>
        </ReactNative.View>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-number-test/FormSliderDemo [53] 
function FormSliderDemo(){
  let form = ext_form.makeForm(function (){
    return {"price":50};
  },{"price":[]});
  let [max,min,step,decimal] = [100,0,1];
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-number/FormSlider"
      code={function (){
        return "(\n  <n.Row>\n    <ReactNative.View style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":10}}>\n      <slim_number.FormSlider\n        form={form}\n        step={step}\n        fieldProps={{\"addons\":[]}}\n        min={min}\n        field=\"price\"\n        brand={{\"type\":\"light\"}}\n        label=\"Price\"\n        length={150}\n        max={max}>\n      </slim_number.FormSlider>\n    </ReactNative.View>\n    <ReactNative.View style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":10}}>\n      <slim_number.FormSlider\n        length={150}\n        brand={{\"type\":\"dark\"}}\n        label=\"Price\"\n        field=\"price\"\n        form={form}\n        step={step}\n        min={min}\n        max={max}>\n      </slim_number.FormSlider>\n    </ReactNative.View>\n  </n.Row>);";
      }()}>
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <slim_number.FormSlider
            form={form}
            step={step}
            fieldProps={{"addons":[]}}
            min={min}
            field="price"
            brand={{"type":"light"}}
            label="Price"
            length={150}
            max={max}>
          </slim_number.FormSlider>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <slim_number.FormSlider
            length={150}
            brand={{"type":"dark"}}
            label="Price"
            field="price"
            form={form}
            step={step}
            min={min}
            max={max}>
          </slim_number.FormSlider>
        </ReactNative.View>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

var MODULE = {
  "FormSpinnerDemo":FormSpinnerDemo,
  "FormSliderDemo":FormSliderDemo
};

export default MODULE