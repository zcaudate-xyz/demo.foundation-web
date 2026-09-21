import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import * as n from '../libs/js/react-native'

import base_palette from './base-palette'

import ui_text from './ui-text'

import ui_section from './ui-section'

// melbourne.ui-text-test/EnumMinorDemo [23] 
function EnumMinorDemo(){
  let [values,setValues] = React.useState(["USD"]);
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-text/EnumMinor"
      code={function (){
        return "(\n  <n.Row>\n    <ui_section.SectionBase design={{\"type\":\"light\"}}>\n      <ui_text.EnumMinor\n        design={{\"type\":\"light\"}}\n        data={[\"STATS\",\"XLM\",\"USD\"]}\n        values={values}\n        setValues={setValues}>\n      </ui_text.EnumMinor>\n    </ui_section.SectionBase>\n    <ui_section.SectionBase design={{\"type\":\"dark\"}}>\n      <ui_text.EnumMinor\n        design={{\"type\":\"dark\"}}\n        data={[\"STATS\",\"XLM\",\"USD\"]}\n        values={values}\n        setValues={setValues}>\n      </ui_text.EnumMinor>\n    </ui_section.SectionBase>\n  </n.Row>);";
      }()}>
      <n.Row>
        <ui_section.SectionBase design={{"type":"light"}}>
          <ui_text.EnumMinor
            design={{"type":"light"}}
            data={["STATS","XLM","USD"]}
            values={values}
            setValues={setValues}>
          </ui_text.EnumMinor>
        </ui_section.SectionBase>
        <ui_section.SectionBase design={{"type":"dark"}}>
          <ui_text.EnumMinor
            design={{"type":"dark"}}
            data={["STATS","XLM","USD"]}
            values={values}
            setValues={setValues}>
          </ui_text.EnumMinor>
        </ui_section.SectionBase>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-text-test/TabsMinorDemo [49] 
function TabsMinorDemo(){
  let [value,setValue] = React.useState("USD");
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-text/TabsMinor"
      code={function (){
        return "(\n  <n.Row>\n    <ui_section.SectionBase design={{\"type\":\"light\"}}>\n      <ui_text.TabsMinor\n        design={{\"type\":\"light\"}}\n        data={[\"STATS\",\"XLM\",\"USD\"]}\n        value={value}\n        setValue={setValue}>\n      </ui_text.TabsMinor>\n    </ui_section.SectionBase>\n    <ui_section.SectionBase design={{\"type\":\"dark\"}}>\n      <ui_text.TabsMinor\n        design={{\"type\":\"dark\"}}\n        data={[\"STATS\",\"XLM\",\"USD\"]}\n        value={value}\n        setValue={setValue}>\n      </ui_text.TabsMinor>\n    </ui_section.SectionBase>\n  </n.Row>);";
      }()}>
      <n.Row>
        <ui_section.SectionBase design={{"type":"light"}}>
          <ui_text.TabsMinor
            design={{"type":"light"}}
            data={["STATS","XLM","USD"]}
            value={value}
            setValue={setValue}>
          </ui_text.TabsMinor>
        </ui_section.SectionBase>
        <ui_section.SectionBase design={{"type":"dark"}}>
          <ui_text.TabsMinor
            design={{"type":"dark"}}
            data={["STATS","XLM","USD"]}
            value={value}
            setValue={setValue}>
          </ui_text.TabsMinor>
        </ui_section.SectionBase>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-text-test/EnumAccentDemo [75] 
function EnumAccentDemo(){
  let [values,setValues] = React.useState(["USD"]);
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-text/EnumAccent"
      code={function (){
        return "(\n  <n.Row>\n    <ui_section.SectionBase design={{\"type\":\"light\"}}>\n      <ui_text.EnumAccent\n        design={{\"type\":\"light\"}}\n        data={[\"STATS\",\"XLM\",\"USD\"]}\n        values={values}\n        setValues={setValues}>\n      </ui_text.EnumAccent>\n    </ui_section.SectionBase>\n    <ui_section.SectionBase design={{\"type\":\"dark\"}}>\n      <ui_text.EnumAccent\n        design={{\"type\":\"dark\"}}\n        data={[\"STATS\",\"XLM\",\"USD\"]}\n        values={values}\n        setValues={setValues}>\n      </ui_text.EnumAccent>\n    </ui_section.SectionBase>\n  </n.Row>);";
      }()}>
      <n.Row>
        <ui_section.SectionBase design={{"type":"light"}}>
          <ui_text.EnumAccent
            design={{"type":"light"}}
            data={["STATS","XLM","USD"]}
            values={values}
            setValues={setValues}>
          </ui_text.EnumAccent>
        </ui_section.SectionBase>
        <ui_section.SectionBase design={{"type":"dark"}}>
          <ui_text.EnumAccent
            design={{"type":"dark"}}
            data={["STATS","XLM","USD"]}
            values={values}
            setValues={setValues}>
          </ui_text.EnumAccent>
        </ui_section.SectionBase>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-text-test/TabsAccentDemo [101] 
function TabsAccentDemo(){
  let [value,setValue] = React.useState("USD");
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-text/TabsAccent"
      code={function (){
        return "(\n  <n.Row>\n    <ui_section.SectionBase design={{\"type\":\"light\"}}>\n      <ui_text.TabsAccent\n        design={{\"type\":\"light\"}}\n        data={[\"STATS\",\"XLM\",\"USD\"]}\n        value={value}\n        setValue={setValue}>\n      </ui_text.TabsAccent>\n    </ui_section.SectionBase>\n    <ui_section.SectionBase design={{\"type\":\"dark\"}}>\n      <ui_text.TabsAccent\n        design={{\"type\":\"dark\"}}\n        data={[\"STATS\",\"XLM\",\"USD\"]}\n        value={value}\n        setValue={setValue}>\n      </ui_text.TabsAccent>\n    </ui_section.SectionBase>\n  </n.Row>);";
      }()}>
      <n.Row>
        <ui_section.SectionBase design={{"type":"light"}}>
          <ui_text.TabsAccent
            design={{"type":"light"}}
            data={["STATS","XLM","USD"]}
            value={value}
            setValue={setValue}>
          </ui_text.TabsAccent>
        </ui_section.SectionBase>
        <ui_section.SectionBase design={{"type":"dark"}}>
          <ui_text.TabsAccent
            design={{"type":"dark"}}
            data={["STATS","XLM","USD"]}
            value={value}
            setValue={setValue}>
          </ui_text.TabsAccent>
        </ui_section.SectionBase>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-text-test/HeaderBaseDemo [130] 
function HeaderBaseDemo(){
  let [color,setColor] = React.useState("purple");
  let [type,setType] = React.useState("dark");
  let [foil,setFoil] = React.useState("background");
  let palette = base_palette.createPalette(type,color);
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-text/createHeaderFn"
      code={function (){
        return "(\n  <n.Row>\n    <n.Tabs\n      data={[\"purple\",\"teal\",\"blue\",\"green\"]}\n      value={color}\n      setValue={setColor}>\n    </n.Tabs>\n    <ReactNative.Text>   </ReactNative.Text>\n    <n.Tabs data={[\"light\",\"dark\"]} value={type} setValue={setType}></n.Tabs>\n  </n.Row>);\n(\n  <n.Tabs\n    data={[\"background\",\"primary\",\"neutral\",\"error\"]}\n    value={foil}\n    setValue={setFoil}>\n  </n.Tabs>);\n(\n  <n.Row>\n    <ReactNative.View\n      style={{\n        \"backgroundColor\":base_palette.getColorRaw(palette,foil || \"background\")\n      }}>\n      {[\n        ui_text.H1,\n        ui_text.H2,\n        ui_text.H3,\n        ui_text.H4,\n        ui_text.H5,\n        ui_text.H6\n      ].map(function (Component,i){\n        return (\n          <ReactNative.View key={i} style={{\"padding\":10}}><Component design={{color,type}}>HELLO</Component></ReactNative.View>);\n      })}\n    </ReactNative.View>\n    <ReactNative.View\n      style={{\n        \"backgroundColor\":base_palette.getColorRaw(palette,foil || \"background\")\n      }}>\n      {[\n        ui_text.H1,\n        ui_text.H2,\n        ui_text.H3,\n        ui_text.H4,\n        ui_text.H5,\n        ui_text.H6\n      ].map(function (Component,i){\n        return (\n          <ReactNative.View key={i} style={{\"padding\":10}}>\n            <Component\n              design={{color,type}}\n              designOverride={{\"variant\":{\"fg\":{\"key\":\"neutral\",\"tone\":\"sharpen\"}}}}>HELLO\n            </Component>\n          </ReactNative.View>);\n      })}\n    </ReactNative.View>\n    <ReactNative.View\n      style={{\n        \"backgroundColor\":base_palette.getColorRaw(palette,foil || \"background\")\n      }}>\n      {[\n        ui_text.H1,\n        ui_text.H2,\n        ui_text.H3,\n        ui_text.H4,\n        ui_text.H5,\n        ui_text.H6\n      ].map(function (Component,i){\n        return (\n          <ReactNative.View key={i} style={{\"padding\":10}}>\n            <Component\n              design={{color,type}}\n              designOverride={{\"variant\":{\"fg\":{\"key\":\"background\",\"tone\":\"flatten\"}}}}>HELLO\n            </Component>\n          </ReactNative.View>);\n      })}\n    </ReactNative.View>\n    <ReactNative.View\n      style={{\n        \"backgroundColor\":base_palette.getColorRaw(palette,foil || \"background\")\n      }}>\n      {[\n        ui_text.H1,\n        ui_text.H2,\n        ui_text.H3,\n        ui_text.H4,\n        ui_text.H5,\n        ui_text.H6\n      ].map(function (Component,i){\n        return (\n          <ReactNative.View key={i} style={{\"padding\":10}}>\n            <Component\n              design={{color,type}}\n              designOverride={{\"variant\":{\"fg\":{\"key\":\"error\"}}}}>HELLO\n            </Component>\n          </ReactNative.View>);\n      })}\n    </ReactNative.View>\n  </n.Row>);";
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
      <n.Row>
        <ReactNative.View
          style={{
            "backgroundColor":base_palette.getColorRaw(palette,foil || "background")
          }}>
          {[
            ui_text.H1,
            ui_text.H2,
            ui_text.H3,
            ui_text.H4,
            ui_text.H5,
            ui_text.H6
          ].map(function (Component,i){
            return (
              <ReactNative.View key={i} style={{"padding":10}}><Component design={{color,type}}>HELLO</Component></ReactNative.View>);
          })}
        </ReactNative.View>
        <ReactNative.View
          style={{
            "backgroundColor":base_palette.getColorRaw(palette,foil || "background")
          }}>
          {[
            ui_text.H1,
            ui_text.H2,
            ui_text.H3,
            ui_text.H4,
            ui_text.H5,
            ui_text.H6
          ].map(function (Component,i){
            return (
              <ReactNative.View key={i} style={{"padding":10}}>
                <Component
                  design={{color,type}}
                  designOverride={{"variant":{"fg":{"key":"neutral","tone":"sharpen"}}}}>HELLO
                </Component>
              </ReactNative.View>);
          })}
        </ReactNative.View>
        <ReactNative.View
          style={{
            "backgroundColor":base_palette.getColorRaw(palette,foil || "background")
          }}>
          {[
            ui_text.H1,
            ui_text.H2,
            ui_text.H3,
            ui_text.H4,
            ui_text.H5,
            ui_text.H6
          ].map(function (Component,i){
            return (
              <ReactNative.View key={i} style={{"padding":10}}>
                <Component
                  design={{color,type}}
                  designOverride={{"variant":{"fg":{"key":"background","tone":"flatten"}}}}>HELLO
                </Component>
              </ReactNative.View>);
          })}
        </ReactNative.View>
        <ReactNative.View
          style={{
            "backgroundColor":base_palette.getColorRaw(palette,foil || "background")
          }}>
          {[
            ui_text.H1,
            ui_text.H2,
            ui_text.H3,
            ui_text.H4,
            ui_text.H5,
            ui_text.H6
          ].map(function (Component,i){
            return (
              <ReactNative.View key={i} style={{"padding":10}}>
                <Component
                  design={{color,type}}
                  designOverride={{"variant":{"fg":{"key":"error"}}}}>HELLO
                </Component>
              </ReactNative.View>);
          })}
        </ReactNative.View>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-text-test/TextBaseDemo [236] 
function TextBaseDemo(){
  let [color,setColor] = React.useState("purple");
  let [type,setType] = React.useState("dark");
  let [foil,setFoil] = React.useState("background");
  let palette = base_palette.createPalette(type,color);
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-text/createTextFn"
      code={function (){
        return "(\n  <n.Row>\n    <n.Tabs\n      data={[\"purple\",\"teal\",\"blue\",\"green\"]}\n      value={color}\n      setValue={setColor}>\n    </n.Tabs>\n    <ReactNative.Text>   </ReactNative.Text>\n    <n.Tabs data={[\"light\",\"dark\"]} value={type} setValue={setType}></n.Tabs>\n  </n.Row>);\n(\n  <n.Tabs\n    data={[\"background\",\"primary\",\"neutral\",\"error\"]}\n    value={foil}\n    setValue={setFoil}>\n  </n.Tabs>);\n(\n  <n.Row>\n    <ReactNative.View\n      style={{\n        \"backgroundColor\":base_palette.getColorRaw(palette,foil || \"background\")\n      }}>\n      {[ui_text.P,ui_text.Caption].map(function (Component,i){\n        return (\n          <ReactNative.View key={i} style={{\"padding\":10}}><Component design={{color,type}}>HELLO</Component></ReactNative.View>);\n      })}\n    </ReactNative.View>\n    <ReactNative.View\n      style={{\n        \"backgroundColor\":base_palette.getColorRaw(palette,foil || \"background\")\n      }}>\n      {[ui_text.P,ui_text.Caption].map(function (Component,i){\n        return (\n          <ReactNative.View key={i} style={{\"padding\":10}}>\n            <Component\n              design={{color,type}}\n              variant={{\"fg\":{\"key\":\"background\"},\"bg\":{\"key\":\"primary\"}}}>HELLO\n            </Component>\n          </ReactNative.View>);\n      })}\n    </ReactNative.View>\n  </n.Row>);";
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
      <n.Row>
        <ReactNative.View
          style={{
            "backgroundColor":base_palette.getColorRaw(palette,foil || "background")
          }}>
          {[ui_text.P,ui_text.Caption].map(function (Component,i){
            return (
              <ReactNative.View key={i} style={{"padding":10}}><Component design={{color,type}}>HELLO</Component></ReactNative.View>);
          })}
        </ReactNative.View>
        <ReactNative.View
          style={{
            "backgroundColor":base_palette.getColorRaw(palette,foil || "background")
          }}>
          {[ui_text.P,ui_text.Caption].map(function (Component,i){
            return (
              <ReactNative.View key={i} style={{"padding":10}}>
                <Component
                  design={{color,type}}
                  variant={{"fg":{"key":"background"},"bg":{"key":"primary"}}}>HELLO
                </Component>
              </ReactNative.View>);
          })}
        </ReactNative.View>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-text-test/ActivityIndicatorDemo [295] 
function ActivityIndicatorDemo(){
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-text/ActivityIndicator"
      code={function (){
        return "(\n  <n.Row>\n    <ui_section.SectionBase design={{\"type\":\"light\"}}>\n      <ui_text.ActivityIndicator design={{\"type\":\"light\"}}></ui_text.ActivityIndicator>\n      <ui_text.ActivityIndicator design={{\"type\":\"light\"}} size={100}></ui_text.ActivityIndicator>\n    </ui_section.SectionBase>\n    <ui_section.SectionBase design={{\"type\":\"dark\"}}>\n      <ui_text.ActivityIndicator design={{\"type\":\"dark\"}}></ui_text.ActivityIndicator>\n      <ui_text.ActivityIndicator design={{\"type\":\"light\"}} size={100}></ui_text.ActivityIndicator>\n    </ui_section.SectionBase>\n  </n.Row>);";
      }()}>
      <n.Row>
        <ui_section.SectionBase design={{"type":"light"}}>
          <ui_text.ActivityIndicator design={{"type":"light"}}></ui_text.ActivityIndicator>
          <ui_text.ActivityIndicator design={{"type":"light"}} size={100}></ui_text.ActivityIndicator>
        </ui_section.SectionBase>
        <ui_section.SectionBase design={{"type":"dark"}}>
          <ui_text.ActivityIndicator design={{"type":"dark"}}></ui_text.ActivityIndicator>
          <ui_text.ActivityIndicator design={{"type":"light"}} size={100}></ui_text.ActivityIndicator>
        </ui_section.SectionBase>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-text-test/IconDemo [320] 
function IconDemo(){
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-text/Icon"
      code={function (){
        return "(\n  <n.Row>\n    <ui_section.SectionBase design={{\"type\":\"light\"}}>\n      <ui_text.Icon design={{\"type\":\"light\"}} name=\"close\"></ui_text.Icon>\n      <ui_text.Icon design={{\"type\":\"light\"}} name=\"close\" size={100}></ui_text.Icon>\n    </ui_section.SectionBase>\n    <ui_section.SectionBase design={{\"type\":\"dark\"}}>\n      <ui_text.Icon design={{\"type\":\"dark\"}} name=\"close\"></ui_text.Icon>\n      <ui_text.Icon design={{\"type\":\"light\"}} name=\"close\" size={100}></ui_text.Icon>\n    </ui_section.SectionBase>\n  </n.Row>);";
      }()}>
      <n.Row>
        <ui_section.SectionBase design={{"type":"light"}}>
          <ui_text.Icon design={{"type":"light"}} name="close"></ui_text.Icon>
          <ui_text.Icon design={{"type":"light"}} name="close" size={100}></ui_text.Icon>
        </ui_section.SectionBase>
        <ui_section.SectionBase design={{"type":"dark"}}>
          <ui_text.Icon design={{"type":"dark"}} name="close"></ui_text.Icon>
          <ui_text.Icon design={{"type":"light"}} name="close" size={100}></ui_text.Icon>
        </ui_section.SectionBase>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-text-test/AvatarDemo [349] 
function AvatarDemo(){
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-text/Avatar"
      code={function (){
        return "(\n  <n.Row>\n    <ui_section.SectionBase design={{\"type\":\"light\"}}>\n      <ui_text.Avatar design={{\"type\":\"light\"}} text=\"H\"></ui_text.Avatar>\n      <ui_text.Avatar design={{\"type\":\"light\"}} text=\"H\" size={100}></ui_text.Avatar>\n    </ui_section.SectionBase>\n    <ui_section.SectionBase design={{\"type\":\"dark\"}}>\n      <ui_text.Avatar design={{\"type\":\"dark\"}} text=\"H\"></ui_text.Avatar>\n      <ui_text.Avatar design={{\"type\":\"light\"}} text=\"H\" size={100}></ui_text.Avatar>\n    </ui_section.SectionBase>\n  </n.Row>);";
      }()}>
      <n.Row>
        <ui_section.SectionBase design={{"type":"light"}}>
          <ui_text.Avatar design={{"type":"light"}} text="H"></ui_text.Avatar>
          <ui_text.Avatar design={{"type":"light"}} text="H" size={100}></ui_text.Avatar>
        </ui_section.SectionBase>
        <ui_section.SectionBase design={{"type":"dark"}}>
          <ui_text.Avatar design={{"type":"dark"}} text="H"></ui_text.Avatar>
          <ui_text.Avatar design={{"type":"light"}} text="H" size={100}></ui_text.Avatar>
        </ui_section.SectionBase>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-text-test/MinorBaseDemo [387] 
function MinorBaseDemo(){
  let [color,setColor] = React.useState("purple");
  let [type,setType] = React.useState("dark");
  let [foil,setFoil] = React.useState("background");
  let [selected,setSelected] = React.useState();
  let palette = base_palette.createPalette(type,color);
  let components = [ui_text.ButtonMinor,ui_text.ToggleMinor];
  let overrides = [
    ui_text.minorToggleTheme(
      {"key":"background","tone":"standard"},
      {"key":"primary","tone":"sharpen"}
    ),
    ui_text.minorToggleTheme(
      {"key":"primary","tone":"standard"},
      {"key":"background","tone":"sharpen"}
    ),
    ui_text.minorToggleTheme(
      {"key":"neutral","tone":"standard"},
      {"key":"background","tone":"sharpen"}
    ),
    ui_text.minorToggleTheme(
      {"key":"error","tone":"standard"},
      {"key":"background","tone":"sharpen"}
    )
  ];
  return (
    <n.EnclosedCodeContainer
      key={type + "." + color}
      label="melbourne.ui-text/createMinorFn"
      code={function (){
        return "(\n  <n.Row>\n    <n.Tabs\n      data={[\"purple\",\"teal\",\"blue\",\"green\"]}\n      value={color}\n      setValue={setColor}>\n    </n.Tabs>\n    <ReactNative.Text>   </ReactNative.Text>\n    <n.Tabs data={[\"light\",\"dark\"]} value={type} setValue={setType}></n.Tabs>\n  </n.Row>);\n(\n  <n.Tabs\n    data={[\"background\",\"primary\",\"neutral\",\"error\"]}\n    value={foil}\n    setValue={setFoil}>\n  </n.Tabs>);\n(\n  <n.Row>\n    {overrides.map(function (override,i){\n      return (\n        <ReactNative.View\n          key={i}\n          style={{\n            \"backgroundColor\":base_palette.getColorRaw(palette,foil || \"background\")\n          }}>\n          {components.map(function (Component,i){\n            return (\n              <ReactNative.View key={i} style={{\"padding\":10}}>\n                <Component\n                  design={{color,type}}\n                  variant={override}\n                  selected={selected}\n                  onPress={function (){\n                    return setSelected(!selected);\n                  }}\n                  text=\"HELLO\">\n                </Component>\n              </ReactNative.View>);\n          })}\n        </ReactNative.View>);\n    })}\n  </n.Row>);";
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
      <n.Row>
        {overrides.map(function (override,i){
          return (
            <ReactNative.View
              key={i}
              style={{
                "backgroundColor":base_palette.getColorRaw(palette,foil || "background")
              }}>
              {components.map(function (Component,i){
                return (
                  <ReactNative.View key={i} style={{"padding":10}}>
                    <Component
                      design={{color,type}}
                      variant={override}
                      selected={selected}
                      onPress={function (){
                        return setSelected(!selected);
                      }}
                      text="HELLO">
                    </Component>
                  </ReactNative.View>);
              })}
            </ReactNative.View>);
        })}
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-text-test/AccentBaseDemo [469] 
function AccentBaseDemo(){
  let [color,setColor] = React.useState("purple");
  let [type,setType] = React.useState("dark");
  let [foil,setFoil] = React.useState("background");
  let [selected,setSelected] = React.useState();
  let palette = base_palette.createPalette(type,color);
  let components = [ui_text.ButtonAccent,ui_text.ToggleAccent];
  let overrides = [
    ui_text.accentToggleTheme(
      {"key":"neutral","tone":"standard"},
      {"key":"primary","tone":"sharpen"}
    ),
    ui_text.accentToggleTheme(
      {"key":"primary","tone":"standard"},
      {"key":"background","tone":"sharpen"}
    ),
    ui_text.accentToggleTheme(
      {"key":"neutral","tone":"standard"},
      {"key":"background","tone":"sharpen"}
    ),
    ui_text.accentToggleTheme(
      {"key":"error","tone":"standard"},
      {"key":"background","tone":"sharpen"}
    )
  ];
  return (
    <n.EnclosedCodeContainer
      key={type + "." + color}
      label="melbourne.ui-text/createAccentFn"
      code={function (){
        return "(\n  <n.Row>\n    <n.Tabs\n      data={[\"purple\",\"teal\",\"blue\",\"green\"]}\n      value={color}\n      setValue={setColor}>\n    </n.Tabs>\n    <ReactNative.Text>   </ReactNative.Text>\n    <n.Tabs data={[\"light\",\"dark\"]} value={type} setValue={setType}></n.Tabs>\n  </n.Row>);\n(\n  <n.Tabs\n    data={[\"background\",\"primary\",\"neutral\",\"error\"]}\n    value={foil}\n    setValue={setFoil}>\n  </n.Tabs>);\n(\n  <n.Row>\n    {overrides.map(function (override,i){\n      return (\n        <ReactNative.View\n          key={i}\n          style={{\n            \"backgroundColor\":base_palette.getColorRaw(palette,foil || \"background\")\n          }}>\n          {components.map(function (Component,i){\n            return (\n              <ReactNative.View key={i} style={{\"padding\":10}}>\n                <Component\n                  design={{color,type}}\n                  variant={override}\n                  selected={selected}\n                  onPress={function (){\n                    return setSelected(!selected);\n                  }}\n                  text=\"HELLO\">\n                </Component>\n              </ReactNative.View>);\n          })}\n        </ReactNative.View>);\n    })}\n  </n.Row>);";
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
      <n.Row>
        {overrides.map(function (override,i){
          return (
            <ReactNative.View
              key={i}
              style={{
                "backgroundColor":base_palette.getColorRaw(palette,foil || "background")
              }}>
              {components.map(function (Component,i){
                return (
                  <ReactNative.View key={i} style={{"padding":10}}>
                    <Component
                      design={{color,type}}
                      variant={override}
                      selected={selected}
                      onPress={function (){
                        return setSelected(!selected);
                      }}
                      text="HELLO">
                    </Component>
                  </ReactNative.View>);
              })}
            </ReactNative.View>);
        })}
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-text-test/ButtonTooltipDemo [548] 
function ButtonTooltipDemo(){
  let mainComponent = React.useCallback(function (){
    return (
      <ReactNative.View style={{"height":100,"width":100,"backgroundColor":"red"}}></ReactNative.View>);
  },[]);
  return (
    <n.Isolation>
      <n.EnclosedCodeContainer
        label="melbourne.ui-text/ButtonTooltip"
        code={function (){
          return "(\n  <n.Row>\n    <ui_section.SectionBase design={{\"type\":\"light\"}}>\n      <n.Row>\n        <ui_text.ButtonTooltip\n          design={{\"type\":\"light\"}}\n          mainComponent={mainComponent}\n          text=\"Press\"\n          tooltip={{\"position\":\"top\"}}\n          onPress={function (){\n            return alert(\"HELLO\");\n          }}>\n        </ui_text.ButtonTooltip>\n        <ui_text.ButtonTooltip\n          design={{\"type\":\"light\"}}\n          mainComponent={mainComponent}\n          component=\"accent\"\n          text=\"Press\"\n          tooltip={{\"position\":\"left\"}}\n          onPress={function (){\n            return alert(\"HELLO\");\n          }}>\n        </ui_text.ButtonTooltip>\n      </n.Row>\n    </ui_section.SectionBase>\n    <ui_section.SectionBase design={{\"type\":\"dark\"}}>\n      <n.Row>\n        <ui_text.ButtonTooltip\n          design={{\"type\":\"dark\"}}\n          mainComponent={mainComponent}\n          text=\"Press\"\n          onPress={function (){\n            return alert(\"HELLO\");\n          }}>\n        </ui_text.ButtonTooltip>\n        <ui_text.ButtonTooltip\n          design={{\"type\":\"dark\"}}\n          mainComponent={mainComponent}\n          component=\"accent\"\n          tooltip={{\"position\":\"right\"}}\n          text=\"Press\"\n          onPress={function (){\n            return alert(\"HELLO\");\n          }}>\n        </ui_text.ButtonTooltip>\n      </n.Row>\n    </ui_section.SectionBase>\n  </n.Row>);";
        }()}>
        <n.Row>
          <ui_section.SectionBase design={{"type":"light"}}>
            <n.Row>
              <ui_text.ButtonTooltip
                design={{"type":"light"}}
                mainComponent={mainComponent}
                text="Press"
                tooltip={{"position":"top"}}
                onPress={function (){
                  return alert("HELLO");
                }}>
              </ui_text.ButtonTooltip>
              <ui_text.ButtonTooltip
                design={{"type":"light"}}
                mainComponent={mainComponent}
                component="accent"
                text="Press"
                tooltip={{"position":"left"}}
                onPress={function (){
                  return alert("HELLO");
                }}>
              </ui_text.ButtonTooltip>
            </n.Row>
          </ui_section.SectionBase>
          <ui_section.SectionBase design={{"type":"dark"}}>
            <n.Row>
              <ui_text.ButtonTooltip
                design={{"type":"dark"}}
                mainComponent={mainComponent}
                text="Press"
                onPress={function (){
                  return alert("HELLO");
                }}>
              </ui_text.ButtonTooltip>
              <ui_text.ButtonTooltip
                design={{"type":"dark"}}
                mainComponent={mainComponent}
                component="accent"
                tooltip={{"position":"right"}}
                text="Press"
                onPress={function (){
                  return alert("HELLO");
                }}>
              </ui_text.ButtonTooltip>
            </n.Row>
          </ui_section.SectionBase>
        </n.Row>
      </n.EnclosedCodeContainer>
    </n.Isolation>);
}

// melbourne.ui-text-test/ConfirmTooltipDemo [596] 
function ConfirmTooltipDemo(){
  return (
    <n.Isolation>
      <n.EnclosedCodeContainer
        label="melbourne.ui-text/ConfirmTooltip"
        code={function (){
          return "(\n  <n.Row>\n    <ui_section.SectionBase design={{\"type\":\"light\"}}>\n      <n.Row>\n        <ui_text.ConfirmTooltip\n          design={{\"type\":\"light\"}}\n          text=\"Press\"\n          onPress={function (){\n            return alert(\"HELLO\");\n          }}>\n        </ui_text.ConfirmTooltip>\n        <ui_text.ConfirmTooltip\n          design={{\"type\":\"light\"}}\n          component=\"accent\"\n          text=\"Press\"\n          onPress={function (){\n            return alert(\"HELLO\");\n          }}>\n        </ui_text.ConfirmTooltip>\n      </n.Row>\n    </ui_section.SectionBase>\n    <ui_section.SectionBase design={{\"type\":\"dark\"}}>\n      <n.Row>\n        <ui_text.ConfirmTooltip\n          design={{\"type\":\"dark\"}}\n          text=\"Press\"\n          onPress={function (){\n            return alert(\"HELLO\");\n          }}>\n        </ui_text.ConfirmTooltip>\n        <ui_text.ConfirmTooltip\n          design={{\"type\":\"dark\"}}\n          component=\"accent\"\n          text=\"Press\"\n          onPress={function (){\n            return alert(\"HELLO\");\n          }}>\n        </ui_text.ConfirmTooltip>\n      </n.Row>\n    </ui_section.SectionBase>\n  </n.Row>);";
        }()}>
        <n.Row>
          <ui_section.SectionBase design={{"type":"light"}}>
            <n.Row>
              <ui_text.ConfirmTooltip
                design={{"type":"light"}}
                text="Press"
                onPress={function (){
                  return alert("HELLO");
                }}>
              </ui_text.ConfirmTooltip>
              <ui_text.ConfirmTooltip
                design={{"type":"light"}}
                component="accent"
                text="Press"
                onPress={function (){
                  return alert("HELLO");
                }}>
              </ui_text.ConfirmTooltip>
            </n.Row>
          </ui_section.SectionBase>
          <ui_section.SectionBase design={{"type":"dark"}}>
            <n.Row>
              <ui_text.ConfirmTooltip
                design={{"type":"dark"}}
                text="Press"
                onPress={function (){
                  return alert("HELLO");
                }}>
              </ui_text.ConfirmTooltip>
              <ui_text.ConfirmTooltip
                design={{"type":"dark"}}
                component="accent"
                text="Press"
                onPress={function (){
                  return alert("HELLO");
                }}>
              </ui_text.ConfirmTooltip>
            </n.Row>
          </ui_section.SectionBase>
        </n.Row>
      </n.EnclosedCodeContainer>
    </n.Isolation>);
}

// melbourne.ui-text-test/TextAltDemo [635] 
function TextAltDemo(){
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-text/TextAlt"
      code={function (){
        return "(\n  <n.Row>\n    <ui_section.SectionBase design={{\"type\":\"light\"}}>\n      <n.Row>\n        <ui_text.TextAlt design={{\"type\":\"light\"}} value={{\"a\":1,\"b\":2}}></ui_text.TextAlt>\n      </n.Row>\n    </ui_section.SectionBase>\n    <ui_section.SectionBase design={{\"type\":\"dark\"}}>\n      <n.Row>\n        <ui_text.TextAlt design={{\"type\":\"dark\"}} value={{\"a\":1,\"b\":2}}></ui_text.TextAlt>\n      </n.Row>\n    </ui_section.SectionBase>\n  </n.Row>);";
      }()}>
      <n.Row>
        <ui_section.SectionBase design={{"type":"light"}}>
          <n.Row>
            <ui_text.TextAlt design={{"type":"light"}} value={{"a":1,"b":2}}></ui_text.TextAlt>
          </n.Row>
        </ui_section.SectionBase>
        <ui_section.SectionBase design={{"type":"dark"}}>
          <n.Row>
            <ui_text.TextAlt design={{"type":"dark"}} value={{"a":1,"b":2}}></ui_text.TextAlt>
          </n.Row>
        </ui_section.SectionBase>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

var MODULE = {
  "EnumMinorDemo":EnumMinorDemo,
  "TabsMinorDemo":TabsMinorDemo,
  "EnumAccentDemo":EnumAccentDemo,
  "TabsAccentDemo":TabsAccentDemo,
  "HeaderBaseDemo":HeaderBaseDemo,
  "TextBaseDemo":TextBaseDemo,
  "ActivityIndicatorDemo":ActivityIndicatorDemo,
  "IconDemo":IconDemo,
  "AvatarDemo":AvatarDemo,
  "MinorBaseDemo":MinorBaseDemo,
  "AccentBaseDemo":AccentBaseDemo,
  "ButtonTooltipDemo":ButtonTooltipDemo,
  "ConfirmTooltipDemo":ConfirmTooltipDemo,
  "TextAltDemo":TextAltDemo
};

export default MODULE