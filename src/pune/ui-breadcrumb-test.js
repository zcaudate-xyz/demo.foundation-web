import React from 'react'

import * as ReactNative from 'react-native'

import * as r from '../libs/js/react'

import * as n from '../libs/js/react-native'

import * as ext_form from '../libs/js/react/ext-form'

import ui_breadcrumb from './ui-breadcrumb'

import k from '../libs/xt/lang/base-lib'

import validators from '../melbourne/base-validators'

import ui_page from './ui-page'

import ui_static from '../melbourne/ui-static'

// pune.ui-breadcrumb-test/BreadcrumbDemo [26] 
function BreadcrumbDemo(){
  return (
    <n.EnclosedCodeContainer
      label="pune.ui-breadcrumb/Breadcrumb"
      code={function (){
        return "(\n  <n.Row>\n    <ReactNative.View style={{\"width\":300}}>\n      <ui_page.PageLayoutHeader design={{\"type\":\"light\"}} noBreadcrumb={true}>\n        <ui_breadcrumb.Breadcrumb root={[\"HOME\"]} path={[\"A\",\"B\"]} design={{\"type\":\"light\"}}></ui_breadcrumb.Breadcrumb>\n      </ui_page.PageLayoutHeader>\n      <ui_page.PageLayoutHeader design={{\"type\":\"light\"}} noBanner={true} noBreadcrumb={true}>\n        <ui_breadcrumb.Breadcrumb\n          root={[\"HOME\"]}\n          path={[\"A\",\"B\"]}\n          noBanner={true}\n          design={{\"type\":\"light\"}}>\n        </ui_breadcrumb.Breadcrumb>\n      </ui_page.PageLayoutHeader>\n    </ReactNative.View>\n    <ReactNative.View style={{\"width\":300}}>\n      <ui_page.PageLayoutHeader design={{\"type\":\"dark\"}} noBreadcrumb={true}>\n        <ui_breadcrumb.Breadcrumb root={[\"HOME\"]} path={[\"A\",\"B\"]} design={{\"type\":\"dark\"}}></ui_breadcrumb.Breadcrumb>\n      </ui_page.PageLayoutHeader>\n      <ui_page.PageLayoutHeader design={{\"type\":\"dark\"}} noBanner={true} noBreadcrumb={true}>\n        <ui_breadcrumb.Breadcrumb\n          root={[\"HOME\"]}\n          path={[\"A\",\"B\"]}\n          noBanner={true}\n          design={{\"type\":\"dark\"}}>\n        </ui_breadcrumb.Breadcrumb>\n      </ui_page.PageLayoutHeader>\n    </ReactNative.View>\n  </n.Row>);";
      }()}>
      <n.Row>
        <ReactNative.View style={{"width":300}}>
          <ui_page.PageLayoutHeader design={{"type":"light"}} noBreadcrumb={true}>
            <ui_breadcrumb.Breadcrumb root={["HOME"]} path={["A","B"]} design={{"type":"light"}}></ui_breadcrumb.Breadcrumb>
          </ui_page.PageLayoutHeader>
          <ui_page.PageLayoutHeader design={{"type":"light"}} noBanner={true} noBreadcrumb={true}>
            <ui_breadcrumb.Breadcrumb
              root={["HOME"]}
              path={["A","B"]}
              noBanner={true}
              design={{"type":"light"}}>
            </ui_breadcrumb.Breadcrumb>
          </ui_page.PageLayoutHeader>
        </ReactNative.View>
        <ReactNative.View style={{"width":300}}>
          <ui_page.PageLayoutHeader design={{"type":"dark"}} noBreadcrumb={true}>
            <ui_breadcrumb.Breadcrumb root={["HOME"]} path={["A","B"]} design={{"type":"dark"}}></ui_breadcrumb.Breadcrumb>
          </ui_page.PageLayoutHeader>
          <ui_page.PageLayoutHeader design={{"type":"dark"}} noBanner={true} noBreadcrumb={true}>
            <ui_breadcrumb.Breadcrumb
              root={["HOME"]}
              path={["A","B"]}
              noBanner={true}
              design={{"type":"dark"}}>
            </ui_breadcrumb.Breadcrumb>
          </ui_page.PageLayoutHeader>
        </ReactNative.View>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

var MODULE = {"BreadcrumbDemo":BreadcrumbDemo};

export default MODULE