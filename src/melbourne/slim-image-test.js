import * as ReactNative from 'react-native'

import * as n from '../libs/js/react-native'

import * as ext_form from '../libs/js/react/ext-form'

import slim_image from './slim-image'

// melbourne.slim-image-test/FormImageDemo [21] 
function FormImageDemo(){
  let form = ext_form.makeForm(function (){
    return {"price":null};
  },{"price":[]});
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-image/FormImage"
      code={function (){
        return "(\n  <n.Row>\n    <ReactNative.View style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":10}}>\n      <slim_image.FormImage\n        brand={{\"type\":\"light\"}}\n        label=\"Picture\"\n        form={form}\n        field=\"price\">\n      </slim_image.FormImage>\n    </ReactNative.View>\n    <ReactNative.View style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":10}}>\n      <slim_image.FormImage\n        brand={{\"type\":\"dark\"}}\n        label=\"Picture\"\n        form={form}\n        field=\"price\">\n      </slim_image.FormImage>\n    </ReactNative.View>\n  </n.Row>);";
      }()}>
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <slim_image.FormImage
            brand={{"type":"light"}}
            label="Picture"
            form={form}
            field="price">
          </slim_image.FormImage>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <slim_image.FormImage
            brand={{"type":"dark"}}
            label="Picture"
            form={form}
            field="price">
          </slim_image.FormImage>
        </ReactNative.View>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

var MODULE = {"FormImageDemo":FormImageDemo};

export default MODULE