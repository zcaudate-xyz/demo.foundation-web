import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import * as n from '../libs/js/react-native'

import ui_sidemenu from './ui-sidemenu'

// pune.ui-sidemenu-test/SideMenuTitleDemo [20] 
function SideMenuTitleDemo(){
  let [routeKey,setRouteKey] = React.useState();
  return (
    <n.EnclosedCodeContainer
      label="pune.ui-sidemenu/SideMenuTitle"
      code={function (){
        return "(\n  <n.Row>\n    <ReactNative.View\n      style={{\n        \"padding\":10,\n        \"height\":100,\n        \"flexDirection\":\"column-reverse\",\n        \"paddingRight\":40,\n        \"backgroundColor\":\"#eee\"\n      }}>\n      <ui_sidemenu.SideMenuTitle\n        design={{\"type\":\"light\"}}\n        style={{\"height\":100}}\n        title=\"HELLO\">\n      </ui_sidemenu.SideMenuTitle>\n    </ReactNative.View>\n    <ReactNative.View\n      style={{\n        \"padding\":10,\n        \"height\":100,\n        \"flexDirection\":\"column-reverse\",\n        \"paddingRight\":40,\n        \"backgroundColor\":\"#333\"\n      }}>\n      <ui_sidemenu.SideMenuTitle design={{\"type\":\"dark\"}} style={{\"height\":100}} title=\"HELLO\"></ui_sidemenu.SideMenuTitle>\n    </ReactNative.View>\n  </n.Row>);";
      }()}>
      <n.Row>
        <ReactNative.View
          style={{
            "padding":10,
            "height":100,
            "flexDirection":"column-reverse",
            "paddingRight":40,
            "backgroundColor":"#eee"
          }}>
          <ui_sidemenu.SideMenuTitle
            design={{"type":"light"}}
            style={{"height":100}}
            title="HELLO">
          </ui_sidemenu.SideMenuTitle>
        </ReactNative.View>
        <ReactNative.View
          style={{
            "padding":10,
            "height":100,
            "flexDirection":"column-reverse",
            "paddingRight":40,
            "backgroundColor":"#333"
          }}>
          <ui_sidemenu.SideMenuTitle design={{"type":"dark"}} style={{"height":100}} title="HELLO"></ui_sidemenu.SideMenuTitle>
        </ReactNative.View>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// pune.ui-sidemenu-test/SideMenuListDemo [52] 
function SideMenuListDemo(){
  let [routeKey,setRouteKey] = React.useState();
  return (
    <n.EnclosedCodeContainer
      label="pune.ui-sidemenu/SideMenuList"
      code={function (){
        return "(\n  <n.Row>\n    <ReactNative.View\n      style={{\"padding\":10,\"paddingRight\":40,\"backgroundColor\":\"#eee\"}}>\n      <ui_sidemenu.SideMenuList\n        design={{\"type\":\"light\"}}\n        data={[\"Security\",\"Profile\",\"Notifications\",\"Organisation\"]}\n        routeKey={routeKey}\n        setRouteKey={setRouteKey}>\n      </ui_sidemenu.SideMenuList>\n    </ReactNative.View>\n    <ReactNative.View\n      style={{\"padding\":10,\"paddingRight\":40,\"backgroundColor\":\"#333\"}}>\n      <ui_sidemenu.SideMenuList\n        design={{\"type\":\"dark\"}}\n        data={[\"Security\",\"Profile\",\"Notifications\",\"Organisation\"]}\n        routeKey={routeKey}\n        setRouteKey={setRouteKey}>\n      </ui_sidemenu.SideMenuList>\n    </ReactNative.View>\n  </n.Row>);";
      }()}>
      <n.Row>
        <ReactNative.View
          style={{"padding":10,"paddingRight":40,"backgroundColor":"#eee"}}>
          <ui_sidemenu.SideMenuList
            design={{"type":"light"}}
            data={["Security","Profile","Notifications","Organisation"]}
            routeKey={routeKey}
            setRouteKey={setRouteKey}>
          </ui_sidemenu.SideMenuList>
        </ReactNative.View>
        <ReactNative.View
          style={{"padding":10,"paddingRight":40,"backgroundColor":"#333"}}>
          <ui_sidemenu.SideMenuList
            design={{"type":"dark"}}
            data={["Security","Profile","Notifications","Organisation"]}
            routeKey={routeKey}
            setRouteKey={setRouteKey}>
          </ui_sidemenu.SideMenuList>
        </ReactNative.View>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// pune.ui-sidemenu-test/SideMenuFloatingDemo [89] 
function SideMenuFloatingDemo(){
  let [routeKey,setRouteKey] = React.useState();
  return (
    <n.Isolation>
      <n.EnclosedCodeContainer
        label="pune.ui-sidemenu/SideMenuFloating"
        code={function (){
          return "(\n  <n.Row>\n    <ReactNative.View\n      style={{\n        \"flex\":1,\n        \"flexDirection\":\"row-reverse\",\n        \"padding\":10,\n        \"paddingRight\":40,\n        \"backgroundColor\":\"#eee\"\n      }}>\n      <ui_sidemenu.SideMenuFloating\n        design={{\"type\":\"light\"}}\n        data={[\"Security\",\"Profile\",\"Notifications\",\"Organisation\"]}\n        routeKey={routeKey}\n        setRouteKey={setRouteKey}>\n      </ui_sidemenu.SideMenuFloating>\n    </ReactNative.View>\n    <ReactNative.View\n      style={{\n        \"flex\":1,\n        \"flexDirection\":\"row-reverse\",\n        \"padding\":10,\n        \"paddingRight\":40,\n        \"backgroundColor\":\"#333\"\n      }}>\n      <ui_sidemenu.SideMenuFloating\n        design={{\"type\":\"dark\"}}\n        data={[\"Security\",\"Profile\",\"Notifications\",\"Organisation\"]}\n        routeKey={routeKey}\n        setRouteKey={setRouteKey}>\n      </ui_sidemenu.SideMenuFloating>\n    </ReactNative.View>\n  </n.Row>);\n(\n  <n.TextDisplay routeKey={routeKey}></n.TextDisplay>);";
        }()}>
        <n.Row>
          <ReactNative.View
            style={{
              "flex":1,
              "flexDirection":"row-reverse",
              "padding":10,
              "paddingRight":40,
              "backgroundColor":"#eee"
            }}>
            <ui_sidemenu.SideMenuFloating
              design={{"type":"light"}}
              data={["Security","Profile","Notifications","Organisation"]}
              routeKey={routeKey}
              setRouteKey={setRouteKey}>
            </ui_sidemenu.SideMenuFloating>
          </ReactNative.View>
          <ReactNative.View
            style={{
              "flex":1,
              "flexDirection":"row-reverse",
              "padding":10,
              "paddingRight":40,
              "backgroundColor":"#333"
            }}>
            <ui_sidemenu.SideMenuFloating
              design={{"type":"dark"}}
              data={["Security","Profile","Notifications","Organisation"]}
              routeKey={routeKey}
              setRouteKey={setRouteKey}>
            </ui_sidemenu.SideMenuFloating>
          </ReactNative.View>
        </n.Row>
        <n.TextDisplay routeKey={routeKey}></n.TextDisplay>
      </n.EnclosedCodeContainer>
    </n.Isolation>);
}

var MODULE = {
  "SideMenuTitleDemo":SideMenuTitleDemo,
  "SideMenuListDemo":SideMenuListDemo,
  "SideMenuFloatingDemo":SideMenuFloatingDemo
};

export default MODULE