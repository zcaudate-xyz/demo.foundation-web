import * as ReactNative from 'react-native'

import React from 'react'

import * as n from '../libs/js/react-native'

import ui_button from './ui-button'

import base_palette from './base-palette'

// melbourne.ui-button-test/ButtonDemo [21] 
function ButtonDemo(){
  let [color,setColor] = React.useState("teal");
  let [type,setType] = React.useState("light");
  let [foil,setFoil] = React.useState("background");
  let palette = base_palette.createPalette(type,color);
  return (
    <n.Isolation>
      <n.EnclosedCodeContainer
        key={color + "." + type}
        label="melbourne.ui-button/Button"
        code={function (){
          return "(\n  <n.Row>\n    <n.Tabs\n      data={[\"purple\",\"teal\",\"blue\",\"green\"]}\n      value={color}\n      setValue={setColor}>\n    </n.Tabs>\n    <ReactNative.Text>   </ReactNative.Text>\n    <n.Tabs data={[\"light\",\"dark\"]} value={type} setValue={setType}></n.Tabs>\n  </n.Row>);\n(\n  <n.Tabs\n    data={[\"background\",\"primary\",\"neutral\",\"error\"]}\n    value={foil}\n    setValue={setFoil}>\n  </n.Tabs>);\n(\n  <ReactNative.View\n    style={{\n      \"backgroundColor\":base_palette.getColorRaw(palette,foil || \"background\"),\n      \"flex\":1,\n      \"padding\":20\n    }}>\n    <n.Row style={{\"margin\":5,\"flexWrap\":\"wrap\"}}>\n      <ui_button.Button\n        tooltip={{\"label\":\"HELLO THERE\",\"position\":\"top\"}}\n        design={{\"type\":type,\"color\":color}}\n        style={{\"margin\":5,\"border\":\"1px solid\"}}\n        outlined={true}\n        text=\"NORMAL\">\n      </ui_button.Button>\n      <ui_button.Button\n        design={{\"type\":type,\"color\":color,\"font\":\"h3\"}}\n        style={{\"margin\":5}}\n        text=\"H3 BUTTON\">\n      </ui_button.Button>\n      <ui_button.Button\n        tooltip={{\"label\":\"HELLO THERE\",\"position\":\"top\"}}\n        design={{\"type\":type,\"color\":color}}\n        variant={{\n          \"fg\":{\"key\":\"neutral\"},\n          \"bg\":{\"key\":\"background\"},\n          \"hovered\":{\"bg\":{\"key\":\"background\"}},\n          \"pressed\":{\"bg\":{\"key\":\"background\"}}\n        }}\n        style={{\"margin\":5}}\n        text=\"MINOR\">\n      </ui_button.Button>\n      <ui_button.Button\n        tooltip={{\"label\":\"HELLO THERE\",\"position\":\"top\"}}\n        design={{\"type\":type,\"color\":color}}\n        variant={{\n          \"fg\":{\"key\":\"neutral\"},\n          \"bg\":{\"key\":\"background\"},\n          \"pressed\":{\"bg\":{\"key\":\"background\"}}\n        }}\n        outlined={true}\n        style={{\"margin\":5,\"border\":\"1px solid\"}}\n        text=\"OUTLINED\">\n      </ui_button.Button>\n      <ui_button.Button\n        tooltip={{\"label\":\"HELLO THERE\",\"position\":\"top\"}}\n        design={{\"type\":type,\"color\":color}}\n        variant={{\n          \"fg\":{\"key\":\"background\"},\n          \"bg\":{\"key\":\"neutral\"},\n          \"pressed\":{\"bg\":{\"key\":\"neutral\"}}\n        }}\n        style={{\"margin\":5}}\n        text=\"UTIL\">\n      </ui_button.Button>\n      <ui_button.Button\n        design={{\"type\":type,\"color\":color}}\n        variant={{\n          \"fg\":{\"key\":\"primary\",\"tone\":\"lighten\",\"ratio\":3},\n          \"bg\":{\"key\":\"neutral\",\"tone\":\"lighten\",\"ratio\":7},\n          \"pressed\":{\"bg\":{\"key\":\"neutral\"}}\n        }}\n        style={{\"margin\":5}}\n        text=\"INVERT\">\n      </ui_button.Button>\n      <ui_button.Button\n        design={{\"type\":type,\"color\":color}}\n        variant={{\n          \"fg\":{\"key\":\"neutral\",\"tone\":\"flatten\"},\n          \"bg\":{\"key\":\"primary\",\"tone\":\"mix\",\"mix\":\"background\",\"ratio\":2},\n          \"pressed\":{\"bg\":{\"key\":\"primary\",\"tone\":\"lighten\",\"ratio\":4}}\n        }}\n        outlined={true}\n        style={{\"margin\":5}}\n        text=\"ACCENT\">\n      </ui_button.Button>\n      <ui_button.Button\n        design={{\"type\":type,\"color\":color}}\n        variant={{\n          \"fg\":{\"key\":\"background\",\"tone\":\"sharpen\"},\n          \"bg\":{\"key\":\"error\"},\n          \"pressed\":{\"bg\":{\"key\":\"error\",\"tone\":\"lighten\",\"ratio\":4}}\n        }}\n        style={{\"margin\":5}}\n        text=\"ERRORED\">\n      </ui_button.Button>\n      <ui_button.Button\n        design={{\"type\":type,\"color\":color}}\n        variant={{\n          \"fg\":{\"key\":\"neutral\",\"tone\":\"sharpen\"},\n          \"bg\":{\"key\":\"primary\"},\n          \"pressed\":{\"bg\":{\"key\":\"background\"}}\n        }}\n        style={{\"margin\":5}}\n        disabled={true}\n        text=\"DISABLED\">\n      </ui_button.Button>\n    </n.Row>\n  </ReactNative.View>);";
        }()}>
        <n.Row>
          <n.Tabs
            data={["purple","teal","blue","green"]}
            value={color}
            setValue={setColor}>
          </n.Tabs>
          <ReactNative.Text>   </ReactNative.Text>
          <n.Tabs data={["light","dark"]} value={type} setValue={setType}></n.Tabs>
        </n.Row>
        <n.Tabs
          data={["background","primary","neutral","error"]}
          value={foil}
          setValue={setFoil}>
        </n.Tabs>
        <ReactNative.View
          style={{
            "backgroundColor":base_palette.getColorRaw(palette,foil || "background"),
            "flex":1,
            "padding":20
          }}>
          <n.Row style={{"margin":5,"flexWrap":"wrap"}}>
            <ui_button.Button
              tooltip={{"label":"HELLO THERE","position":"top"}}
              design={{"type":type,"color":color}}
              style={{"margin":5,"border":"1px solid"}}
              outlined={true}
              text="NORMAL">
            </ui_button.Button>
            <ui_button.Button
              design={{"type":type,"color":color,"font":"h3"}}
              style={{"margin":5}}
              text="H3 BUTTON">
            </ui_button.Button>
            <ui_button.Button
              tooltip={{"label":"HELLO THERE","position":"top"}}
              design={{"type":type,"color":color}}
              variant={{
                "fg":{"key":"neutral"},
                "bg":{"key":"background"},
                "hovered":{"bg":{"key":"background"}},
                "pressed":{"bg":{"key":"background"}}
              }}
              style={{"margin":5}}
              text="MINOR">
            </ui_button.Button>
            <ui_button.Button
              tooltip={{"label":"HELLO THERE","position":"top"}}
              design={{"type":type,"color":color}}
              variant={{
                "fg":{"key":"neutral"},
                "bg":{"key":"background"},
                "pressed":{"bg":{"key":"background"}}
              }}
              outlined={true}
              style={{"margin":5,"border":"1px solid"}}
              text="OUTLINED">
            </ui_button.Button>
            <ui_button.Button
              tooltip={{"label":"HELLO THERE","position":"top"}}
              design={{"type":type,"color":color}}
              variant={{
                "fg":{"key":"background"},
                "bg":{"key":"neutral"},
                "pressed":{"bg":{"key":"neutral"}}
              }}
              style={{"margin":5}}
              text="UTIL">
            </ui_button.Button>
            <ui_button.Button
              design={{"type":type,"color":color}}
              variant={{
                "fg":{"key":"primary","tone":"lighten","ratio":3},
                "bg":{"key":"neutral","tone":"lighten","ratio":7},
                "pressed":{"bg":{"key":"neutral"}}
              }}
              style={{"margin":5}}
              text="INVERT">
            </ui_button.Button>
            <ui_button.Button
              design={{"type":type,"color":color}}
              variant={{
                "fg":{"key":"neutral","tone":"flatten"},
                "bg":{"key":"primary","tone":"mix","mix":"background","ratio":2},
                "pressed":{"bg":{"key":"primary","tone":"lighten","ratio":4}}
              }}
              outlined={true}
              style={{"margin":5}}
              text="ACCENT">
            </ui_button.Button>
            <ui_button.Button
              design={{"type":type,"color":color}}
              variant={{
                "fg":{"key":"background","tone":"sharpen"},
                "bg":{"key":"error"},
                "pressed":{"bg":{"key":"error","tone":"lighten","ratio":4}}
              }}
              style={{"margin":5}}
              text="ERRORED">
            </ui_button.Button>
            <ui_button.Button
              design={{"type":type,"color":color}}
              variant={{
                "fg":{"key":"neutral","tone":"sharpen"},
                "bg":{"key":"primary"},
                "pressed":{"bg":{"key":"background"}}
              }}
              style={{"margin":5}}
              disabled={true}
              text="DISABLED">
            </ui_button.Button>
          </n.Row>
        </ReactNative.View>
      </n.EnclosedCodeContainer>
    </n.Isolation>);
}

var MODULE = {"ButtonDemo":ButtonDemo};

export default MODULE