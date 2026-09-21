import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import slim_entry from './slim-entry'

import ui_text from './ui-text'

import slim_table_common from './slim-table-common'

import * as n from '../libs/js/react-native'

import ui_group from './ui-group'

import * as ext_view from '../libs/js/react/ext-model'

import k from '../libs/xt/lang/base-lib'

import base_palette from './base-palette'

import * as event_route from '../libs/xt/event/base-route'

import ui_static from './ui-static'

import slim from './slim'

// melbourne.slim-table-common-test/TableDefaultNotFoundDemo [33] 
function TableDefaultNotFoundDemo(){
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-table-common/TableDefaultNotFound"
      code={function (){
        return "(\n  <n.Row>\n    <slim_table_common.TableDefaultNotFound design={{\"type\":\"light\"}}></slim_table_common.TableDefaultNotFound>\n  </n.Row>);";
      }()}>
      <n.Row>
        <slim_table_common.TableDefaultNotFound design={{"type":"light"}}></slim_table_common.TableDefaultNotFound>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-table-common-test/TableDefaultIsLoadingDemo [46] 
function TableDefaultIsLoadingDemo(){
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-table-common/TableDefaultIsLoading"
      code={function (){
        return "(\n  <n.Row>\n    <slim_table_common.TableDefaultIsLoading design={{\"type\":\"light\"}}></slim_table_common.TableDefaultIsLoading>\n  </n.Row>);";
      }()}>
      <n.Row>
        <slim_table_common.TableDefaultIsLoading design={{"type":"light"}}></slim_table_common.TableDefaultIsLoading>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-table-common-test/TableBackButtonDemo [59] 
function TableBackButtonDemo(){
  let control = slim.useLocalControl();
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-table-common/TableBackButton"
      code={function (){
        return "(\n  <n.Row>\n    <slim_table_common.TableBackButton design={{\"type\":\"light\"}} control={control}></slim_table_common.TableBackButton>\n  </n.Row>);";
      }()}>
      <n.Row>
        <slim_table_common.TableBackButton design={{"type":"light"}} control={control}></slim_table_common.TableBackButton>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-table-common-test/TablePageViewDemo [77] 
function TablePageViewDemo(){
  let control = slim.useLocalControl();
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-table-common/tablePageView"
      code={function (){
        return "(\n  <n.Row></n.Row>);";
      }()}><n.Row></n.Row>
    </n.EnclosedCodeContainer>);
}

var MODULE = {
  "TableDefaultNotFoundDemo":TableDefaultNotFoundDemo,
  "TableDefaultIsLoadingDemo":TableDefaultIsLoadingDemo,
  "TableBackButtonDemo":TableBackButtonDemo,
  "TablePageViewDemo":TablePageViewDemo
};

export default MODULE