import React from 'react'

import * as ReactNative from 'react-native'

import * as r from '../libs/js/react'

import * as n from '../libs/js/react-native'

import base_palette from '../melbourne/base-palette'

import ui_page from './ui-page'

// pune.ui-page-test/PageLayoutHeaderDemo [21] 
function PageLayoutHeaderDemo(){
  let [routeKey,setRouteKey] = React.useState("world");
  let routeRoot = ["HELLO"];
  let headerId = r.id();
  let palette = base_palette.designPalette({"type":"light"});
  return (
    <n.EnclosedCodeContainer
      label="pune.ui-page/PageLayoutHeader"
      style={{"height":100}}
      code={function (){
        return "(\n  <n.Row>\n    <ReactNative.View style={{\"width\":300}}>\n      <ui_page.PageLayoutHeader\n        routeKey={routeKey}\n        headerId={headerId}\n        palette={palette}\n        routeRoot={routeRoot}>\n      </ui_page.PageLayoutHeader>\n    </ReactNative.View>\n    <ReactNative.View style={{\"width\":300}}>\n      <ui_page.PageLayoutHeader\n        design={{\"type\":\"dark\"}}\n        palette={base_palette.designPalette({\"type\":\"dark\"})}\n        routeKey={routeKey}\n        routeRoot={routeRoot}>\n      </ui_page.PageLayoutHeader>\n    </ReactNative.View>\n  </n.Row>);\n(\n  <n.Portal target={headerId}><ReactNative.Text>TOOLBAR</ReactNative.Text></n.Portal>);";
      }()}>
      <n.Row>
        <ReactNative.View style={{"width":300}}>
          <ui_page.PageLayoutHeader
            routeKey={routeKey}
            headerId={headerId}
            palette={palette}
            routeRoot={routeRoot}>
          </ui_page.PageLayoutHeader>
        </ReactNative.View>
        <ReactNative.View style={{"width":300}}>
          <ui_page.PageLayoutHeader
            design={{"type":"dark"}}
            palette={base_palette.designPalette({"type":"dark"})}
            routeKey={routeKey}
            routeRoot={routeRoot}>
          </ui_page.PageLayoutHeader>
        </ReactNative.View>
      </n.Row>
      <n.Portal target={headerId}><ReactNative.Text>TOOLBAR</ReactNative.Text></n.Portal>
    </n.EnclosedCodeContainer>);
}

// pune.ui-page-test/PageLayoutMenuDemo [54] 
function PageLayoutMenuDemo(){
  let [routeKey,setRouteKey] = React.useState("world");
  let appendId = r.id();
  let palette = base_palette.designPalette({"type":"light"});
  return (
    <n.EnclosedCodeContainer
      label="pune.ui-page/PageLayoutMenu"
      style={{"height":200}}
      code={function (){
        return "(\n  <n.Row>\n    <ReactNative.View style={{\"width\":300}}>\n      <ui_page.PageLayoutMenu\n        design={{\"type\":\"light\"}}\n        sections={[\"hello\",\"world\"]}\n        routeKey={routeKey}\n        palette={palette}\n        setRouteKey={setRouteKey}\n        appendId={appendId}>\n      </ui_page.PageLayoutMenu>\n    </ReactNative.View>\n    <ReactNative.View style={{\"width\":300}}>\n      <ui_page.PageLayoutMenu\n        design={{\"type\":\"dark\"}}\n        palette={base_palette.designPalette({\"type\":\"dark\"})}\n        sections={[\"hello\",\"world\"]}\n        routeKey={routeKey}\n        setRouteKey={setRouteKey}>\n      </ui_page.PageLayoutMenu>\n    </ReactNative.View>\n  </n.Row>);";
      }()}>
      <n.Row>
        <ReactNative.View style={{"width":300}}>
          <ui_page.PageLayoutMenu
            design={{"type":"light"}}
            sections={["hello","world"]}
            routeKey={routeKey}
            palette={palette}
            setRouteKey={setRouteKey}
            appendId={appendId}>
          </ui_page.PageLayoutMenu>
        </ReactNative.View>
        <ReactNative.View style={{"width":300}}>
          <ui_page.PageLayoutMenu
            design={{"type":"dark"}}
            palette={base_palette.designPalette({"type":"dark"})}
            sections={["hello","world"]}
            routeKey={routeKey}
            setRouteKey={setRouteKey}>
          </ui_page.PageLayoutMenu>
        </ReactNative.View>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// pune.ui-page-test/PageLayoutDemo [87] 
function PageLayoutDemo(){
  let [routeKey,setRouteKey] = React.useState("world");
  let routeRoot = ["HELLO"];
  let Id = r.id();
  return (
    <n.EnclosedCodeContainer
      label="pune.ui-page/PageLayout"
      style={{"height":200}}
      code={function (){
        return "(\n  <n.Row>\n    <ReactNative.View style={{\"width\":300}}>\n      <ui_page.PageLayout\n        design={{\"type\":\"light\"}}\n        sections={[\"hello\",\"world\"]}\n        sectionRoutes={{\n          \"hello\":function (){\n            return (\n              <ReactNative.Text>HELLO</ReactNative.Text>);\n          },\n          \"world\":function (){\n            return (\n              <ReactNative.Text>WORLD</ReactNative.Text>);\n          }\n        }}\n        routeRoot={[\"HOME\"]}\n        routeKey={routeKey}\n        setRouteKey={setRouteKey}>\n      </ui_page.PageLayout>\n    </ReactNative.View>\n    <ReactNative.View style={{\"width\":300}}>\n      <ui_page.PageLayout\n        design={{\"type\":\"dark\"}}\n        sections={[\"hello\",\"world\"]}\n        sectionRoutes={{\n          \"hello\":function (){\n            return (\n              <ReactNative.Text>HELLO</ReactNative.Text>);\n          },\n          \"world\":function (){\n            return (\n              <ReactNative.Text>WORLD</ReactNative.Text>);\n          }\n        }}\n        routeRoot={[\"HOME\"]}\n        routeKey={routeKey}\n        setRouteKey={setRouteKey}>\n      </ui_page.PageLayout>\n    </ReactNative.View>\n  </n.Row>);";
      }()}>
      <n.Row>
        <ReactNative.View style={{"width":300}}>
          <ui_page.PageLayout
            design={{"type":"light"}}
            sections={["hello","world"]}
            sectionRoutes={{
              "hello":function (){
                return (
                  <ReactNative.Text>HELLO</ReactNative.Text>);
              },
              "world":function (){
                return (
                  <ReactNative.Text>WORLD</ReactNative.Text>);
              }
            }}
            routeRoot={["HOME"]}
            routeKey={routeKey}
            setRouteKey={setRouteKey}>
          </ui_page.PageLayout>
        </ReactNative.View>
        <ReactNative.View style={{"width":300}}>
          <ui_page.PageLayout
            design={{"type":"dark"}}
            sections={["hello","world"]}
            sectionRoutes={{
              "hello":function (){
                return (
                  <ReactNative.Text>HELLO</ReactNative.Text>);
              },
              "world":function (){
                return (
                  <ReactNative.Text>WORLD</ReactNative.Text>);
              }
            }}
            routeRoot={["HOME"]}
            routeKey={routeKey}
            setRouteKey={setRouteKey}>
          </ui_page.PageLayout>
        </ReactNative.View>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

var MODULE = {
  "PageLayoutHeaderDemo":PageLayoutHeaderDemo,
  "PageLayoutMenuDemo":PageLayoutMenuDemo,
  "PageLayoutDemo":PageLayoutDemo
};

export default MODULE