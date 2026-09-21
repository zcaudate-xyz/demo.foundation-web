import React from 'react'

import * as ReactNative from 'react-native'

import * as n from '../libs/js/react-native'

import * as ext_form from '../libs/js/react/ext-form'

import * as event_form from '../libs/xt/event/base-form'

import slim_common from './slim-common'

import base_palette from './base-palette'

// melbourne.ui-base-palette-test/PaletteBaseDemo [24] 
function PaletteBaseDemo(){
  let [color,setColor] = React.useState("purple");
  let [type,setType] = React.useState("dark");
  let [foil,setFoil] = React.useState("background");
  let palette = base_palette.createPalette(type,color);
  return (
    <n.EnclosedCodeContainer
      label="melbourne.base-palette/PaletteBase"
      code={function (){
        return "(\n  <n.Row>\n    <n.Tabs\n      data={[\"purple\",\"teal\",\"blue\",\"green\"]}\n      value={color}\n      setValue={setColor}>\n    </n.Tabs>\n    <ReactNative.Text>   </ReactNative.Text>\n    <n.Tabs data={[\"light\",\"dark\"]} value={type} setValue={setType}></n.Tabs>\n  </n.Row>);\n(\n  <n.Tabs\n    data={[\"background\",\"primary\",\"neutral\",\"error\"]}\n    value={foil}\n    setValue={setFoil}>\n  </n.Tabs>);\n(\n  <ReactNative.View\n    style={{\n      \"backgroundColor\":base_palette.getColorRaw(palette,foil || \"background\")\n    }}>\n    {[\"primary\",\"error\",\"neutral\",\"background\"].map(function (colorKey){\n      return (\n        <ReactNative.View key={colorKey} style={{\"padding\":10}}>\n          <ReactNative.Text\n            style={{\n              \"color\":base_palette.getColorRaw(palette,(foil == \"background\") ? \"neutral\" : \"background\"),\n              \"margin\":5\n            }}>{colorKey.toUpperCase()}\n          </ReactNative.Text>\n          <n.Row>\n            <ReactNative.View\n              style={{\n                \"backgroundColor\":base_palette.getColorRaw(palette,colorKey,\"flatten\"),\n                \"height\":30,\n                \"width\":30,\n                \"margin\":5\n              }}>\n            </ReactNative.View>\n            <ReactNative.View\n              style={{\n                \"backgroundColor\":base_palette.getColorRaw(palette,colorKey,\"diminish\"),\n                \"height\":30,\n                \"width\":30,\n                \"margin\":5\n              }}>\n            </ReactNative.View>\n            <ReactNative.View\n              style={{\n                \"backgroundColor\":base_palette.getColorRaw(palette,colorKey),\n                \"height\":30,\n                \"width\":30,\n                \"margin\":5\n              }}>\n            </ReactNative.View>\n            <ReactNative.View\n              style={{\n                \"backgroundColor\":base_palette.getColorRaw(palette,colorKey,\"augment\"),\n                \"height\":30,\n                \"width\":30,\n                \"margin\":5\n              }}>\n            </ReactNative.View>\n            <ReactNative.View\n              style={{\n                \"backgroundColor\":base_palette.getColorRaw(palette,colorKey,\"sharpen\"),\n                \"height\":30,\n                \"width\":30,\n                \"margin\":5\n              }}>\n            </ReactNative.View>\n          </n.Row>\n        </ReactNative.View>);\n    })}\n  </ReactNative.View>);";
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
          "backgroundColor":base_palette.getColorRaw(palette,foil || "background")
        }}>
        {["primary","error","neutral","background"].map(function (colorKey){
          return (
            <ReactNative.View key={colorKey} style={{"padding":10}}>
              <ReactNative.Text
                style={{
                  "color":base_palette.getColorRaw(palette,(foil == "background") ? "neutral" : "background"),
                  "margin":5
                }}>{colorKey.toUpperCase()}
              </ReactNative.Text>
              <n.Row>
                <ReactNative.View
                  style={{
                    "backgroundColor":base_palette.getColorRaw(palette,colorKey,"flatten"),
                    "height":30,
                    "width":30,
                    "margin":5
                  }}>
                </ReactNative.View>
                <ReactNative.View
                  style={{
                    "backgroundColor":base_palette.getColorRaw(palette,colorKey,"diminish"),
                    "height":30,
                    "width":30,
                    "margin":5
                  }}>
                </ReactNative.View>
                <ReactNative.View
                  style={{
                    "backgroundColor":base_palette.getColorRaw(palette,colorKey),
                    "height":30,
                    "width":30,
                    "margin":5
                  }}>
                </ReactNative.View>
                <ReactNative.View
                  style={{
                    "backgroundColor":base_palette.getColorRaw(palette,colorKey,"augment"),
                    "height":30,
                    "width":30,
                    "margin":5
                  }}>
                </ReactNative.View>
                <ReactNative.View
                  style={{
                    "backgroundColor":base_palette.getColorRaw(palette,colorKey,"sharpen"),
                    "height":30,
                    "width":30,
                    "margin":5
                  }}>
                </ReactNative.View>
              </n.Row>
            </ReactNative.View>);
        })}
      </ReactNative.View>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-base-palette-test/PaletteToneDemo [113] 
function PaletteToneDemo(){
  let [color,setColor] = React.useState("purple");
  let [type,setType] = React.useState("dark");
  let [foil,setFoil] = React.useState("background");
  let palette = base_palette.createPalette(type,color);
  return (
    <n.EnclosedCodeContainer
      label="melbourne.base-palette/PaletteTone"
      code={function (){
        return "(\n  <n.Row>\n    <n.Tabs\n      data={[\"purple\",\"teal\",\"blue\",\"green\"]}\n      value={color}\n      setValue={setColor}>\n    </n.Tabs>\n    <ReactNative.Text>   </ReactNative.Text>\n    <n.Tabs data={[\"light\",\"dark\"]} value={type} setValue={setType}></n.Tabs>\n  </n.Row>);\n(\n  <n.Tabs\n    data={[\"background\",\"primary\",\"neutral\",\"error\"]}\n    value={foil}\n    setValue={setFoil}>\n  </n.Tabs>);\n(\n  <ReactNative.View\n    style={{\n      \"backgroundColor\":base_palette.getColorRaw(palette,foil || \"background\")\n    }}>\n    <ReactNative.View style={{\"padding\":10}}>\n      <ReactNative.Text\n        style={{\n          \"color\":base_palette.getColorRaw(palette,(foil == \"background\") ? \"neutral\" : \"background\"),\n          \"margin\":5\n        }}>PRIMARY/BACKGROUND\n      </ReactNative.Text>\n      <n.Row>\n        {[0,1,2,3,4,5,6,7].map(function (i){\n          return (\n            <ReactNative.View\n              key={i}\n              style={{\n                \"backgroundColor\":base_palette.getColorRaw(palette,\"primary\",\"mix\",\"background\",i),\n                \"height\":30,\n                \"width\":30,\n                \"margin\":5\n              }}>\n            </ReactNative.View>);\n        })}\n      </n.Row>\n    </ReactNative.View>\n    <ReactNative.View style={{\"padding\":10}}>\n      <ReactNative.Text\n        style={{\n          \"color\":base_palette.getColorRaw(palette,(foil == \"background\") ? \"neutral\" : \"background\"),\n          \"margin\":5\n        }}>PRIMARY/NEUTRAL\n      </ReactNative.Text>\n      <n.Row>\n        {[0,1,2,3,4,5,6,7].map(function (i){\n          return (\n            <ReactNative.View\n              key={i}\n              style={{\n                \"backgroundColor\":base_palette.getColorRaw(palette,\"primary\",\"mix\",\"neutral\",i),\n                \"height\":30,\n                \"width\":30,\n                \"margin\":5\n              }}>\n            </ReactNative.View>);\n        })}\n      </n.Row>\n    </ReactNative.View>\n    <ReactNative.View style={{\"padding\":10}}>\n      <ReactNative.Text\n        style={{\n          \"color\":base_palette.getColorRaw(palette,(foil == \"background\") ? \"neutral\" : \"background\"),\n          \"margin\":5\n        }}>NEUTRAL/BACKGROUND\n      </ReactNative.Text>\n      <n.Row>\n        {[0,1,2,3,4,5,6,7].map(function (i){\n          return (\n            <ReactNative.View\n              key={i}\n              style={{\n                \"backgroundColor\":base_palette.getColorRaw(palette,\"neutral\",\"mix\",\"background\",i),\n                \"height\":30,\n                \"width\":30,\n                \"margin\":5\n              }}>\n            </ReactNative.View>);\n        })}\n      </n.Row>\n    </ReactNative.View>\n    <ReactNative.View style={{\"padding\":10}}>\n      <ReactNative.Text\n        style={{\n          \"color\":base_palette.getColorRaw(palette,(foil == \"background\") ? \"neutral\" : \"background\"),\n          \"margin\":5\n        }}>PRIMARY/LIGHTEN\n      </ReactNative.Text>\n      <n.Row>\n        {[0,1,2,3,4,5,6,7].map(function (i){\n          return (\n            <ReactNative.View\n              key={i}\n              style={{\n                \"backgroundColor\":base_palette.getColorRaw(palette,\"primary\",\"lighten\",null,i),\n                \"height\":30,\n                \"width\":30,\n                \"margin\":5\n              }}>\n            </ReactNative.View>);\n        })}\n      </n.Row>\n    </ReactNative.View>\n    <ReactNative.View style={{\"padding\":10}}>\n      <ReactNative.Text\n        style={{\n          \"color\":base_palette.getColorRaw(palette,(foil == \"background\") ? \"neutral\" : \"background\"),\n          \"margin\":5\n        }}>PRIMARY/DARKEN\n      </ReactNative.Text>\n      <n.Row>\n        {[0,1,2,3,4,5,6,7].map(function (i){\n          return (\n            <ReactNative.View\n              key={i}\n              style={{\n                \"backgroundColor\":base_palette.getColorRaw(palette,\"primary\",\"darken\",null,i),\n                \"height\":30,\n                \"width\":30,\n                \"margin\":5\n              }}>\n            </ReactNative.View>);\n        })}\n      </n.Row>\n    </ReactNative.View>\n    <ReactNative.View style={{\"padding\":10}}>\n      <ReactNative.Text\n        style={{\n          \"color\":base_palette.getColorRaw(palette,(foil == \"background\") ? \"neutral\" : \"background\"),\n          \"margin\":5\n        }}>PRIMARY/SATURATE\n      </ReactNative.Text>\n      <n.Row>\n        {[1,2,3,4,5,6,7].map(function (i){\n          return (\n            <ReactNative.View\n              key={i}\n              style={{\n                \"backgroundColor\":base_palette.getColorRaw(palette,\"primary\",\"saturate\",null,i),\n                \"height\":30,\n                \"width\":30,\n                \"margin\":5\n              }}>\n            </ReactNative.View>);\n        })}\n      </n.Row>\n    </ReactNative.View>\n    <ReactNative.View style={{\"padding\":10}}>\n      <ReactNative.Text\n        style={{\n          \"color\":base_palette.getColorRaw(palette,(foil == \"background\") ? \"neutral\" : \"background\"),\n          \"margin\":5\n        }}>PRIMARY/DESATURATE\n      </ReactNative.Text>\n      <n.Row>\n        {[1,2,3,4,5,6,7].map(function (i){\n          return (\n            <ReactNative.View\n              key={i}\n              style={{\n                \"backgroundColor\":base_palette.getColorRaw(palette,\"primary\",\"desaturate\",null,i),\n                \"height\":30,\n                \"width\":30,\n                \"margin\":5\n              }}>\n            </ReactNative.View>);\n        })}\n      </n.Row>\n    </ReactNative.View>\n  </ReactNative.View>);";
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
          "backgroundColor":base_palette.getColorRaw(palette,foil || "background")
        }}>
        <ReactNative.View style={{"padding":10}}>
          <ReactNative.Text
            style={{
              "color":base_palette.getColorRaw(palette,(foil == "background") ? "neutral" : "background"),
              "margin":5
            }}>PRIMARY/BACKGROUND
          </ReactNative.Text>
          <n.Row>
            {[0,1,2,3,4,5,6,7].map(function (i){
              return (
                <ReactNative.View
                  key={i}
                  style={{
                    "backgroundColor":base_palette.getColorRaw(palette,"primary","mix","background",i),
                    "height":30,
                    "width":30,
                    "margin":5
                  }}>
                </ReactNative.View>);
            })}
          </n.Row>
        </ReactNative.View>
        <ReactNative.View style={{"padding":10}}>
          <ReactNative.Text
            style={{
              "color":base_palette.getColorRaw(palette,(foil == "background") ? "neutral" : "background"),
              "margin":5
            }}>PRIMARY/NEUTRAL
          </ReactNative.Text>
          <n.Row>
            {[0,1,2,3,4,5,6,7].map(function (i){
              return (
                <ReactNative.View
                  key={i}
                  style={{
                    "backgroundColor":base_palette.getColorRaw(palette,"primary","mix","neutral",i),
                    "height":30,
                    "width":30,
                    "margin":5
                  }}>
                </ReactNative.View>);
            })}
          </n.Row>
        </ReactNative.View>
        <ReactNative.View style={{"padding":10}}>
          <ReactNative.Text
            style={{
              "color":base_palette.getColorRaw(palette,(foil == "background") ? "neutral" : "background"),
              "margin":5
            }}>NEUTRAL/BACKGROUND
          </ReactNative.Text>
          <n.Row>
            {[0,1,2,3,4,5,6,7].map(function (i){
              return (
                <ReactNative.View
                  key={i}
                  style={{
                    "backgroundColor":base_palette.getColorRaw(palette,"neutral","mix","background",i),
                    "height":30,
                    "width":30,
                    "margin":5
                  }}>
                </ReactNative.View>);
            })}
          </n.Row>
        </ReactNative.View>
        <ReactNative.View style={{"padding":10}}>
          <ReactNative.Text
            style={{
              "color":base_palette.getColorRaw(palette,(foil == "background") ? "neutral" : "background"),
              "margin":5
            }}>PRIMARY/LIGHTEN
          </ReactNative.Text>
          <n.Row>
            {[0,1,2,3,4,5,6,7].map(function (i){
              return (
                <ReactNative.View
                  key={i}
                  style={{
                    "backgroundColor":base_palette.getColorRaw(palette,"primary","lighten",null,i),
                    "height":30,
                    "width":30,
                    "margin":5
                  }}>
                </ReactNative.View>);
            })}
          </n.Row>
        </ReactNative.View>
        <ReactNative.View style={{"padding":10}}>
          <ReactNative.Text
            style={{
              "color":base_palette.getColorRaw(palette,(foil == "background") ? "neutral" : "background"),
              "margin":5
            }}>PRIMARY/DARKEN
          </ReactNative.Text>
          <n.Row>
            {[0,1,2,3,4,5,6,7].map(function (i){
              return (
                <ReactNative.View
                  key={i}
                  style={{
                    "backgroundColor":base_palette.getColorRaw(palette,"primary","darken",null,i),
                    "height":30,
                    "width":30,
                    "margin":5
                  }}>
                </ReactNative.View>);
            })}
          </n.Row>
        </ReactNative.View>
        <ReactNative.View style={{"padding":10}}>
          <ReactNative.Text
            style={{
              "color":base_palette.getColorRaw(palette,(foil == "background") ? "neutral" : "background"),
              "margin":5
            }}>PRIMARY/SATURATE
          </ReactNative.Text>
          <n.Row>
            {[1,2,3,4,5,6,7].map(function (i){
              return (
                <ReactNative.View
                  key={i}
                  style={{
                    "backgroundColor":base_palette.getColorRaw(palette,"primary","saturate",null,i),
                    "height":30,
                    "width":30,
                    "margin":5
                  }}>
                </ReactNative.View>);
            })}
          </n.Row>
        </ReactNative.View>
        <ReactNative.View style={{"padding":10}}>
          <ReactNative.Text
            style={{
              "color":base_palette.getColorRaw(palette,(foil == "background") ? "neutral" : "background"),
              "margin":5
            }}>PRIMARY/DESATURATE
          </ReactNative.Text>
          <n.Row>
            {[1,2,3,4,5,6,7].map(function (i){
              return (
                <ReactNative.View
                  key={i}
                  style={{
                    "backgroundColor":base_palette.getColorRaw(palette,"primary","desaturate",null,i),
                    "height":30,
                    "width":30,
                    "margin":5
                  }}>
                </ReactNative.View>);
            })}
          </n.Row>
        </ReactNative.View>
      </ReactNative.View>
    </n.EnclosedCodeContainer>);
}

var MODULE = {
  "PaletteBaseDemo":PaletteBaseDemo,
  "PaletteToneDemo":PaletteToneDemo
};

export default MODULE