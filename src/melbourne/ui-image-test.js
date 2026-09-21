import React from 'react'

import * as ReactNative from 'react-native'

import * as n from '../libs/js/react-native'

import ui_image from './ui-image'

import ui_button from './ui-button'

// melbourne.ui-image-test/SelectImageDemo [22] 
function SelectImageDemo(){
  let [active,setActive] = React.useState(function (){
    return false;
  });
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-image/selectImage"
      code={function (){
        return "(\n  <n.Row>\n    <n.Row style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":10}}>\n      <ui_button.Button\n        text=\"Click\"\n        onPress={function (){\n          return ui_image.selectImage({\"setBlob\":console.log,\"setPhoto\":console.log});\n        }}>\n      </ui_button.Button>\n    </n.Row>\n    <n.Row style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":10}}>\n      <ui_button.Button\n        text=\"Click\"\n        onPress={function (){\n          return ui_image.selectImage({\"setBlob\":console.log,\"setPhoto\":console.log});\n        }}>\n      </ui_button.Button>\n    </n.Row>\n  </n.Row>);";
      }()}>
      <n.Row>
        <n.Row style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <ui_button.Button
            text="Click"
            onPress={function (){
              return ui_image.selectImage({"setBlob":console.log,"setPhoto":console.log});
            }}>
          </ui_button.Button>
        </n.Row>
        <n.Row style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <ui_button.Button
            text="Click"
            onPress={function (){
              return ui_image.selectImage({"setBlob":console.log,"setPhoto":console.log});
            }}>
          </ui_button.Button>
        </n.Row>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-image-test/ImagePickerDemo [52] 
function ImagePickerDemo(){
  let [active,setActive] = React.useState(function (){
    return false;
  });
  let [data,setData] = React.useState();
  let [photo,setPhoto] = React.useState();
  let [blob,setBlob] = React.useState();
  let uri = (photo && photo["uri"]) || (data && (data["url"] || data["thumbnailUrl"]));
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-image/ImagePicker"
      code={function (){
        return "(\n  <n.Row>\n    <n.Row style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":10}}>\n      <ui_image.ImagePicker\n        design={{\"type\":\"light\"}}\n        setBlob={setBlob}\n        setPhoto={setPhoto}\n        data={data}\n        setData={setData}\n        blob={blob}\n        photo={photo}>\n      </ui_image.ImagePicker>\n    </n.Row>\n    <n.Row style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":10}}>\n      <ui_image.ImagePicker\n        design={{\"type\":\"dark\"}}\n        style={{\"backgroundColor\":\"blue\",\"height\":50,\"width\":50}}\n        setBlob={setBlob}\n        setPhoto={setPhoto}\n        data={data}\n        setData={setData}\n        blob={blob}\n        photo={photo}>\n      </ui_image.ImagePicker>\n    </n.Row>\n  </n.Row>);\n(\n  <n.TextDisplay content={data + \" \"}></n.TextDisplay>);";
      }()}>
      <n.Row>
        <n.Row style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <ui_image.ImagePicker
            design={{"type":"light"}}
            setBlob={setBlob}
            setPhoto={setPhoto}
            data={data}
            setData={setData}
            blob={blob}
            photo={photo}>
          </ui_image.ImagePicker>
        </n.Row>
        <n.Row style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <ui_image.ImagePicker
            design={{"type":"dark"}}
            style={{"backgroundColor":"blue","height":50,"width":50}}
            setBlob={setBlob}
            setPhoto={setPhoto}
            data={data}
            setData={setData}
            blob={blob}
            photo={photo}>
          </ui_image.ImagePicker>
        </n.Row>
      </n.Row>
      <n.TextDisplay content={data + " "}></n.TextDisplay>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-image-test/ImagePickerSecondaryDemo [92] 
function ImagePickerSecondaryDemo(){
  let [active,setActive] = React.useState(function (){
    return false;
  });
  let [data,setData] = React.useState();
  let [photo,setPhoto] = React.useState();
  let [blob,setBlob] = React.useState();
  let uri = (photo && photo["uri"]) || (data && (data["url"] || data["thumbnailUrl"]));
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-image/ImagePicker"
      code={function (){
        return "(\n  <n.Row>\n    <n.Row style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":10}}>\n      <ui_image.ImagePicker\n        setBlob={setBlob}\n        setPhoto={setPhoto}\n        data={data}\n        size={100}\n        setData={setData}\n        design={{\"type\":\"light\",\"mode\":\"secondary\"}}\n        blob={blob}\n        photo={photo}\n        border={5}>\n      </ui_image.ImagePicker>\n    </n.Row>\n    <n.Row style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":10}}>\n      <ui_image.ImagePicker\n        setBlob={setBlob}\n        setPhoto={setPhoto}\n        data={data}\n        size={100}\n        setData={setData}\n        design={{\"type\":\"dark\",\"mode\":\"secondary\"}}\n        blob={blob}\n        photo={photo}\n        border={5}>\n      </ui_image.ImagePicker>\n    </n.Row>\n  </n.Row>);\n(\n  <n.TextDisplay content={data + \" \"}></n.TextDisplay>);";
      }()}>
      <n.Row>
        <n.Row style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <ui_image.ImagePicker
            setBlob={setBlob}
            setPhoto={setPhoto}
            data={data}
            size={100}
            setData={setData}
            design={{"type":"light","mode":"secondary"}}
            blob={blob}
            photo={photo}
            border={5}>
          </ui_image.ImagePicker>
        </n.Row>
        <n.Row style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <ui_image.ImagePicker
            setBlob={setBlob}
            setPhoto={setPhoto}
            data={data}
            size={100}
            setData={setData}
            design={{"type":"dark","mode":"secondary"}}
            blob={blob}
            photo={photo}
            border={5}>
          </ui_image.ImagePicker>
        </n.Row>
      </n.Row>
      <n.TextDisplay content={data + " "}></n.TextDisplay>
    </n.EnclosedCodeContainer>);
}

var MODULE = {
  "SelectImageDemo":SelectImageDemo,
  "ImagePickerDemo":ImagePickerDemo,
  "ImagePickerSecondaryDemo":ImagePickerSecondaryDemo
};

export default MODULE