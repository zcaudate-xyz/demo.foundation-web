import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import * as n from '../libs/js/react-native'

import ui_submenu from './ui-submenu'

// pune.ui-submenu-test/SubMenuToggleDemo [20] 
function SubMenuToggleDemo(){
  let [selected0,setSelected0] = React.useState(true);
  let [selected1,setSelected1] = React.useState();
  return (
    <n.EnclosedCodeContainer
      label="pune.ui-submenu/SubMenuToggle"
      code={function (){
        return "(\n  <n.Row>\n    <ReactNative.View\n      style={{\"padding\":5,\"paddingRight\":100,\"backgroundColor\":\"#eee\"}}>\n      <ui_submenu.SubMenuToggle\n        design={{\"type\":\"light\"}}\n        item={{\"key\":\"info\",\"icon\":\"appstore-o\",\"label\":\"INFO\"}}\n        selected={selected0}\n        onPress={function (){\n          return setSelected0(!selected0);\n        }}>\n      </ui_submenu.SubMenuToggle>\n    </ReactNative.View>\n    <ReactNative.View\n      style={{\"padding\":5,\"paddingRight\":100,\"backgroundColor\":\"#333\"}}>\n      <ui_submenu.SubMenuToggle\n        design={{\"type\":\"dark\"}}\n        item={{\"key\":\"info\",\"icon\":\"appstore-o\",\"label\":\"INFO\"}}\n        selected={selected1}\n        onPress={function (){\n          return setSelected1(!selected1);\n        }}>\n      </ui_submenu.SubMenuToggle>\n    </ReactNative.View>\n  </n.Row>);";
      }()}>
      <n.Row>
        <ReactNative.View
          style={{"padding":5,"paddingRight":100,"backgroundColor":"#eee"}}>
          <ui_submenu.SubMenuToggle
            design={{"type":"light"}}
            item={{"key":"info","icon":"appstore-o","label":"INFO"}}
            selected={selected0}
            onPress={function (){
              return setSelected0(!selected0);
            }}>
          </ui_submenu.SubMenuToggle>
        </ReactNative.View>
        <ReactNative.View
          style={{"padding":5,"paddingRight":100,"backgroundColor":"#333"}}>
          <ui_submenu.SubMenuToggle
            design={{"type":"dark"}}
            item={{"key":"info","icon":"appstore-o","label":"INFO"}}
            selected={selected1}
            onPress={function (){
              return setSelected1(!selected1);
            }}>
          </ui_submenu.SubMenuToggle>
        </ReactNative.View>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// pune.ui-submenu-test/SubMenuRouteDemo [55] 
function SubMenuRouteDemo(){
  let [routeKey0,setRouteKey0] = React.useState("home");
  let [routeKey1,setRouteKey1] = React.useState("account");
  return (
    <n.EnclosedCodeContainer
      label="pune.ui-submenu/SubMenuRoute"
      code={function (){
        return "(\n  <n.Row>\n    <ReactNative.View\n      style={{\"padding\":5,\"paddingRight\":100,\"backgroundColor\":\"#eee\"}}>\n      <ui_submenu.SubMenuRoute\n        design={{\"type\":\"light\"}}\n        item={{\"key\":\"info\",\"icon\":\"appstore-o\",\"label\":\"INFO\"}}\n        routeKey={routeKey0}\n        setRouteKey={setRouteKey0}>\n      </ui_submenu.SubMenuRoute>\n      <ui_submenu.SubMenuRoute\n        design={{\"type\":\"light\"}}\n        item={{\"key\":\"stats\",\"icon\":\"dashboard\",\"label\":\"STC\"}}\n        routeKey={routeKey0}\n        setRouteKey={setRouteKey0}>\n      </ui_submenu.SubMenuRoute>\n    </ReactNative.View>\n    <ReactNative.View\n      style={{\"padding\":5,\"paddingRight\":100,\"backgroundColor\":\"#333\"}}>\n      <ui_submenu.SubMenuRoute\n        design={{\"type\":\"dark\"}}\n        item={{\"key\":\"info\",\"icon\":\"appstore-o\",\"label\":\"INFO\"}}\n        routeKey={routeKey1}\n        setRouteKey={setRouteKey1}>\n      </ui_submenu.SubMenuRoute>\n      <ui_submenu.SubMenuRoute\n        design={{\"type\":\"dark\"}}\n        item={{\"key\":\"stats\",\"icon\":\"dashboard\",\"label\":\"STC\"}}\n        routeKey={routeKey1}\n        setRouteKey={setRouteKey1}>\n      </ui_submenu.SubMenuRoute>\n    </ReactNative.View>\n  </n.Row>);";
      }()}>
      <n.Row>
        <ReactNative.View
          style={{"padding":5,"paddingRight":100,"backgroundColor":"#eee"}}>
          <ui_submenu.SubMenuRoute
            design={{"type":"light"}}
            item={{"key":"info","icon":"appstore-o","label":"INFO"}}
            routeKey={routeKey0}
            setRouteKey={setRouteKey0}>
          </ui_submenu.SubMenuRoute>
          <ui_submenu.SubMenuRoute
            design={{"type":"light"}}
            item={{"key":"stats","icon":"dashboard","label":"STC"}}
            routeKey={routeKey0}
            setRouteKey={setRouteKey0}>
          </ui_submenu.SubMenuRoute>
        </ReactNative.View>
        <ReactNative.View
          style={{"padding":5,"paddingRight":100,"backgroundColor":"#333"}}>
          <ui_submenu.SubMenuRoute
            design={{"type":"dark"}}
            item={{"key":"info","icon":"appstore-o","label":"INFO"}}
            routeKey={routeKey1}
            setRouteKey={setRouteKey1}>
          </ui_submenu.SubMenuRoute>
          <ui_submenu.SubMenuRoute
            design={{"type":"dark"}}
            item={{"key":"stats","icon":"dashboard","label":"STC"}}
            routeKey={routeKey1}
            setRouteKey={setRouteKey1}>
          </ui_submenu.SubMenuRoute>
        </ReactNative.View>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// pune.ui-submenu-test/SubMenuDemo [104] 
function SubMenuDemo(){
  let [routeKey0,setRouteKey0] = React.useState("home");
  let [routeKey1,setRouteKey1] = React.useState("user");
  return (
    <n.EnclosedCodeContainer
      label="pune.ui-submenu/SubMenu"
      code={function (){
        return "(\n  <n.PortalSink>\n    <n.Row>\n      <ReactNative.View style={{\"paddingRight\":90,\"backgroundColor\":\"#eee\"}}>\n        <ui_submenu.SubMenu\n          design={{\"type\":\"light\"}}\n          items={[\n            {\"key\":\"info\",\"icon\":\"appstore-o\",\"label\":\"INFO\"},\n            {\"key\":\"stats\",\"icon\":\"dashboard\",\"label\":\"STC\"}\n          ]}\n          routeKey={routeKey0}\n          setRouteKey={setRouteKey0}>\n        </ui_submenu.SubMenu>\n      </ReactNative.View>\n      <ReactNative.View style={{\"paddingRight\":90,\"backgroundColor\":\"#333\"}}>\n        <ui_submenu.SubMenu\n          design={{\"type\":\"dark\"}}\n          items={[\n            {\"key\":\"info\",\"icon\":\"appstore-o\",\"label\":\"INFO\"},\n            {\"key\":\"stats\",\"icon\":\"dashboard\",\"label\":\"STC\"}\n          ]}\n          routeKey={routeKey1}\n          setRouteKey={setRouteKey1}>\n        </ui_submenu.SubMenu>\n      </ReactNative.View>\n    </n.Row>\n  </n.PortalSink>);";
      }()}>
      <n.PortalSink>
        <n.Row>
          <ReactNative.View style={{"paddingRight":90,"backgroundColor":"#eee"}}>
            <ui_submenu.SubMenu
              design={{"type":"light"}}
              items={[
                {"key":"info","icon":"appstore-o","label":"INFO"},
                {"key":"stats","icon":"dashboard","label":"STC"}
              ]}
              routeKey={routeKey0}
              setRouteKey={setRouteKey0}>
            </ui_submenu.SubMenu>
          </ReactNative.View>
          <ReactNative.View style={{"paddingRight":90,"backgroundColor":"#333"}}>
            <ui_submenu.SubMenu
              design={{"type":"dark"}}
              items={[
                {"key":"info","icon":"appstore-o","label":"INFO"},
                {"key":"stats","icon":"dashboard","label":"STC"}
              ]}
              routeKey={routeKey1}
              setRouteKey={setRouteKey1}>
            </ui_submenu.SubMenu>
          </ReactNative.View>
        </n.Row>
      </n.PortalSink>
    </n.EnclosedCodeContainer>);
}

var MODULE = {
  "SubMenuToggleDemo":SubMenuToggleDemo,
  "SubMenuRouteDemo":SubMenuRouteDemo,
  "SubMenuDemo":SubMenuDemo
};

export default MODULE