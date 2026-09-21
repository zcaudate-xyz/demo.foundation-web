import React from 'react'

import * as ReactNative from 'react-native'

import * as n from '../libs/js/react-native'

import ui_swiper from './ui-swiper'

// melbourne.ui-swiper-test/SwiperDemo [21] 
function SwiperDemo(){
  let [first,setFirst] = React.useState(5);
  let [highlighted,setHighlighted] = React.useState();
  let [disabled,setDisabled] = React.useState();
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-swiper/Swiper"
      code={function (){
        return "(\n  <n.Row>\n    <n.Row style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":30}}>\n      <ui_swiper.Swiper\n        highlighted={highlighted}\n        disabled={disabled}\n        posEnabled={true}\n        posView={(\n          <ReactNative.View\n            key=\"pos\"\n            style={{\"backgroundColor\":\"red\",\"height\":100,\"width\":200}}>\n          </ReactNative.View>)}\n        negEnabled={true}\n        negView={(\n          <ReactNative.View\n            key=\"neg\"\n            style={{\"backgroundColor\":\"black\",\"height\":100,\"width\":200}}>\n          </ReactNative.View>)}\n        styleContainer={{\"height\":300,\"overflow\":\"hidden\"}}\n        style={{\"width\":300,\"height\":100,\"cursor\":\"grab\"}}>\n      </ui_swiper.Swiper>\n    </n.Row>\n    <n.Row style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":30}}>\n      <ui_swiper.Swiper\n        design={{\"type\":\"dark\"}}\n        highlighted={highlighted}\n        disabled={disabled}\n        posView={(\n          <ReactNative.View\n            key=\"pos\"\n            style={{\"backgroundColor\":\"red\",\"height\":100,\"width\":200}}>\n          </ReactNative.View>)}\n        negView={(\n          <ReactNative.View\n            key=\"neg\"\n            style={{\"backgroundColor\":\"black\",\"height\":100,\"width\":200}}>\n          </ReactNative.View>)}\n        styleContainer={{\"height\":300,\"overflow\":\"hidden\"}}\n        style={{\"width\":300,\"height\":100,\"cursor\":\"grab\"}}>\n      </ui_swiper.Swiper>\n    </n.Row>\n  </n.Row>);\n(\n  <n.Row>\n    <ReactNative.Button\n      title=\"+1\"\n      onPress={function (){\n        return setFirst(first + 1);\n      }}>\n    </ReactNative.Button>\n    <ReactNative.Button\n      title=\"-1\"\n      onPress={function (){\n        return setFirst(first - 1);\n      }}>\n    </ReactNative.Button>\n    <ReactNative.Button\n      title=\"H\"\n      onPress={function (){\n        return setHighlighted(!highlighted);\n      }}>\n    </ReactNative.Button>\n    <ReactNative.Text> </ReactNative.Text>\n    <ReactNative.Button\n      title=\"D\"\n      onPress={function (){\n        return setDisabled(!disabled);\n      }}>\n    </ReactNative.Button>\n    <ReactNative.Text>{n.format_entry({disabled,first,highlighted})}</ReactNative.Text>\n  </n.Row>);";
      }()}>
      <n.Row>
        <n.Row style={{"backgroundColor":"#eee","flex":1,"padding":30}}>
          <ui_swiper.Swiper
            highlighted={highlighted}
            disabled={disabled}
            posEnabled={true}
            posView={(
              <ReactNative.View
                key="pos"
                style={{"backgroundColor":"red","height":100,"width":200}}>
              </ReactNative.View>)}
            negEnabled={true}
            negView={(
              <ReactNative.View
                key="neg"
                style={{"backgroundColor":"black","height":100,"width":200}}>
              </ReactNative.View>)}
            styleContainer={{"height":300,"overflow":"hidden"}}
            style={{"width":300,"height":100,"cursor":"grab"}}>
          </ui_swiper.Swiper>
        </n.Row>
        <n.Row style={{"backgroundColor":"#333","flex":1,"padding":30}}>
          <ui_swiper.Swiper
            design={{"type":"dark"}}
            highlighted={highlighted}
            disabled={disabled}
            posView={(
              <ReactNative.View
                key="pos"
                style={{"backgroundColor":"red","height":100,"width":200}}>
              </ReactNative.View>)}
            negView={(
              <ReactNative.View
                key="neg"
                style={{"backgroundColor":"black","height":100,"width":200}}>
              </ReactNative.View>)}
            styleContainer={{"height":300,"overflow":"hidden"}}
            style={{"width":300,"height":100,"cursor":"grab"}}>
          </ui_swiper.Swiper>
        </n.Row>
      </n.Row>
      <n.Row>
        <ReactNative.Button
          title="+1"
          onPress={function (){
            return setFirst(first + 1);
          }}>
        </ReactNative.Button>
        <ReactNative.Button
          title="-1"
          onPress={function (){
            return setFirst(first - 1);
          }}>
        </ReactNative.Button>
        <ReactNative.Button
          title="H"
          onPress={function (){
            return setHighlighted(!highlighted);
          }}>
        </ReactNative.Button>
        <ReactNative.Text> </ReactNative.Text>
        <ReactNative.Button
          title="D"
          onPress={function (){
            return setDisabled(!disabled);
          }}>
        </ReactNative.Button>
        <ReactNative.Text>{n.format_entry({disabled,first,highlighted})}</ReactNative.Text>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

var MODULE = {"SwiperDemo":SwiperDemo};

export default MODULE