import React from 'react'

import * as ReactNative from 'react-native'

import * as n from '../libs/js/react-native'

import ui_toggle_button from './ui-toggle-button'

import base_palette from './base-palette'

// melbourne.ui-toggle-button-test/ToggleButtonDemo [21] 
function ToggleButtonDemo(){
  let [s0,setS0] = React.useState();
  let [s1,setS1] = React.useState(true);
  let [s2,setS2] = React.useState(true);
  let [color,setColor] = React.useState("blue");
  let [type,setType] = React.useState("dark");
  let [foil,setFoil] = React.useState("primary");
  let palette = base_palette.createPalette(type,color);
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-button/ToggleButton"
      code={function (){
        return "(\n  <n.Row>\n    <n.Tabs\n      data={[\"purple\",\"teal\",\"blue\",\"green\"]}\n      value={color}\n      setValue={setColor}>\n    </n.Tabs>\n    <ReactNative.Text>   </ReactNative.Text>\n    <n.Tabs data={[\"light\",\"dark\"]} value={type} setValue={setType}></n.Tabs>\n  </n.Row>);\n(\n  <n.Tabs\n    data={[\"background\",\"primary\",\"neutral\",\"error\"]}\n    value={foil}\n    setValue={setFoil}>\n  </n.Tabs>);\n(\n  <ReactNative.View\n    key={type + \".\" + color}\n    style={{\n      \"backgroundColor\":base_palette.getColorRaw(palette,foil || \"background\"),\n      \"flex\":1,\n      \"padding\":20\n    }}>\n    <n.Row style={{\"margin\":5}}>\n      <ui_toggle_button.ToggleButton\n        selected={s0}\n        onPress={function (){\n          return setS0(!s0);\n        }}\n        design={{color,type}}\n        variant={{\"active\":{\"bg\":{\"key\":\"neutral\"}},\"font\":\"h2\"}}\n        text=\"H2 Button\">\n      </ui_toggle_button.ToggleButton>\n    </n.Row>\n    <n.Row style={{\"margin\":5}}>\n      <ui_toggle_button.ToggleButton\n        selected={s1}\n        onPress={function (){\n          return setS1(!s1);\n        }}\n        design={{color,type}}\n        variant={{\n          \"fg\":{\"key\":\"primary\"},\n          \"active\":{\"bg\":{\"key\":\"primary\"},\"fg\":{\"key\":\"background\"}}\n        }}\n        text=\"Secondary Light\">\n      </ui_toggle_button.ToggleButton>\n    </n.Row>\n    <n.Row style={{\"margin\":5}}>\n      <ui_toggle_button.ToggleButton\n        selected={s2}\n        onPress={function (){\n          return setS2(!s2);\n        }}\n        design={{color,type}}\n        variant={{\n          \"fg\":{\"key\":\"primary\"},\n          \"pressed\":{\"bg\":{\"raw\":1}},\n          \"active\":{\"bg\":{\"key\":\"background\"},\"fg\":{\"key\":\"primary\"}}\n        }}\n        outlined={s2}\n        style={[{\"fontSize\":12},{\"borderWidth\":1,\"borderStyle\":\"solid\"}]}\n        text=\"Minor Light\">\n      </ui_toggle_button.ToggleButton>\n    </n.Row>\n    <n.Row style={{\"margin\":5}}>\n      <ui_toggle_button.ToggleButton\n        selected={s2}\n        onPress={function (){\n          return setS2(!s2);\n        }}\n        design={{color,type}}\n        variant={{\n          \"fg\":{\"key\":\"background\"},\n          \"bg\":{\"key\":\"primary\"},\n          \"hovered\":{\"bg\":{\"raw\":1}},\n          \"pressed\":{\"bg\":{\"raw\":1}},\n          \"active\":{\"bg\":{\"key\":\"primary\"},\"fg\":{\"key\":\"background\"}}\n        }}\n        outlined={s2}\n        style={[{\"fontSize\":12},{\"borderWidth\":1,\"borderStyle\":\"solid\"}]}\n        text=\"Color Light\">\n      </ui_toggle_button.ToggleButton>\n    </n.Row>\n    <n.Row style={{\"margin\":5}}>\n      <ui_toggle_button.ToggleButton\n        selected={s2}\n        onPress={function (){\n          return setS2(!s2);\n        }}\n        design={{color,type}}\n        variant={{\n          \"fg\":{\"key\":\"background\"},\n          \"bg\":{\"key\":\"error\"},\n          \"pressed\":{\"bg\":{\"raw\":1}},\n          \"active\":{\"bg\":{\"key\":\"error\"},\"fg\":{\"key\":\"background\"}}\n        }}\n        outlined={s2}\n        style={[{\"fontSize\":12},{\"borderWidth\":1,\"borderStyle\":\"solid\"}]}\n        text=\"Color Light\">\n      </ui_toggle_button.ToggleButton>\n    </n.Row>\n    <n.TextDisplay s1={s1} s2={s2} s0={s0}></n.TextDisplay>\n  </ReactNative.View>);";
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
        key={type + "." + color}
        style={{
          "backgroundColor":base_palette.getColorRaw(palette,foil || "background"),
          "flex":1,
          "padding":20
        }}>
        <n.Row style={{"margin":5}}>
          <ui_toggle_button.ToggleButton
            selected={s0}
            onPress={function (){
              return setS0(!s0);
            }}
            design={{color,type}}
            variant={{"active":{"bg":{"key":"neutral"}},"font":"h2"}}
            text="H2 Button">
          </ui_toggle_button.ToggleButton>
        </n.Row>
        <n.Row style={{"margin":5}}>
          <ui_toggle_button.ToggleButton
            selected={s1}
            onPress={function (){
              return setS1(!s1);
            }}
            design={{color,type}}
            variant={{
              "fg":{"key":"primary"},
              "active":{"bg":{"key":"primary"},"fg":{"key":"background"}}
            }}
            text="Secondary Light">
          </ui_toggle_button.ToggleButton>
        </n.Row>
        <n.Row style={{"margin":5}}>
          <ui_toggle_button.ToggleButton
            selected={s2}
            onPress={function (){
              return setS2(!s2);
            }}
            design={{color,type}}
            variant={{
              "fg":{"key":"primary"},
              "pressed":{"bg":{"raw":1}},
              "active":{"bg":{"key":"background"},"fg":{"key":"primary"}}
            }}
            outlined={s2}
            style={[{"fontSize":12},{"borderWidth":1,"borderStyle":"solid"}]}
            text="Minor Light">
          </ui_toggle_button.ToggleButton>
        </n.Row>
        <n.Row style={{"margin":5}}>
          <ui_toggle_button.ToggleButton
            selected={s2}
            onPress={function (){
              return setS2(!s2);
            }}
            design={{color,type}}
            variant={{
              "fg":{"key":"background"},
              "bg":{"key":"primary"},
              "hovered":{"bg":{"raw":1}},
              "pressed":{"bg":{"raw":1}},
              "active":{"bg":{"key":"primary"},"fg":{"key":"background"}}
            }}
            outlined={s2}
            style={[{"fontSize":12},{"borderWidth":1,"borderStyle":"solid"}]}
            text="Color Light">
          </ui_toggle_button.ToggleButton>
        </n.Row>
        <n.Row style={{"margin":5}}>
          <ui_toggle_button.ToggleButton
            selected={s2}
            onPress={function (){
              return setS2(!s2);
            }}
            design={{color,type}}
            variant={{
              "fg":{"key":"background"},
              "bg":{"key":"error"},
              "pressed":{"bg":{"raw":1}},
              "active":{"bg":{"key":"error"},"fg":{"key":"background"}}
            }}
            outlined={s2}
            style={[{"fontSize":12},{"borderWidth":1,"borderStyle":"solid"}]}
            text="Color Light">
          </ui_toggle_button.ToggleButton>
        </n.Row>
        <n.TextDisplay s1={s1} s2={s2} s0={s0}></n.TextDisplay>
      </ReactNative.View>
    </n.EnclosedCodeContainer>);
}

var MODULE = {"ToggleButtonDemo":ToggleButtonDemo};

export default MODULE