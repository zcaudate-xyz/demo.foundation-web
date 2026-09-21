import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import * as n from '../libs/js/react-native'

import base_palette from './base-palette'

import ui_text_dialog from './ui-text-dialog'

import ui_section from './ui-section'

// melbourne.ui-text-dialog-test/ConfirmDialogDemo [23] 
function ConfirmDialogDemo(){
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-text-dialog/ConfirmDialog"
      code={function (){
        return "(\n  <n.Row>\n    <ui_section.SectionBase design={{\"type\":\"light\"}}>\n      <n.Row>\n        <ui_text_dialog.ConfirmDialog\n          design={{\"type\":\"light\"}}\n          text=\"Press\"\n          onPress={function (){\n            return alert(\"HELLO\");\n          }}>\n        </ui_text_dialog.ConfirmDialog>\n        <ui_text_dialog.ConfirmDialog\n          design={{\"type\":\"light\"}}\n          component=\"accent\"\n          text=\"Press\"\n          onPress={function (){\n            return alert(\"HELLO\");\n          }}>\n        </ui_text_dialog.ConfirmDialog>\n      </n.Row>\n    </ui_section.SectionBase>\n    <ui_section.SectionBase design={{\"type\":\"dark\"}}>\n      <n.Row>\n        <ui_text_dialog.ConfirmDialog\n          design={{\"type\":\"dark\"}}\n          text=\"Press\"\n          onPress={function (){\n            return alert(\"HELLO\");\n          }}>\n        </ui_text_dialog.ConfirmDialog>\n        <ui_text_dialog.ConfirmDialog\n          design={{\"type\":\"dark\"}}\n          component=\"accent\"\n          text=\"Press\"\n          onPress={function (){\n            return alert(\"HELLO\");\n          }}>\n        </ui_text_dialog.ConfirmDialog>\n      </n.Row>\n    </ui_section.SectionBase>\n  </n.Row>);";
      }()}>
      <n.Row>
        <ui_section.SectionBase design={{"type":"light"}}>
          <n.Row>
            <ui_text_dialog.ConfirmDialog
              design={{"type":"light"}}
              text="Press"
              onPress={function (){
                return alert("HELLO");
              }}>
            </ui_text_dialog.ConfirmDialog>
            <ui_text_dialog.ConfirmDialog
              design={{"type":"light"}}
              component="accent"
              text="Press"
              onPress={function (){
                return alert("HELLO");
              }}>
            </ui_text_dialog.ConfirmDialog>
          </n.Row>
        </ui_section.SectionBase>
        <ui_section.SectionBase design={{"type":"dark"}}>
          <n.Row>
            <ui_text_dialog.ConfirmDialog
              design={{"type":"dark"}}
              text="Press"
              onPress={function (){
                return alert("HELLO");
              }}>
            </ui_text_dialog.ConfirmDialog>
            <ui_text_dialog.ConfirmDialog
              design={{"type":"dark"}}
              component="accent"
              text="Press"
              onPress={function (){
                return alert("HELLO");
              }}>
            </ui_text_dialog.ConfirmDialog>
          </n.Row>
        </ui_section.SectionBase>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

var MODULE = {"ConfirmDialogDemo":ConfirmDialogDemo};

export default MODULE