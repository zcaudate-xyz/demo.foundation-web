import * as ReactNative from 'react-native'

import React from 'react'

import * as n from '../libs/js/react-native'

import ui_static from './ui-static'

import base_palette from './base-palette'

import ui_chip from './ui-chip'

// melbourne.ui-chip-test/ChipDemo [23] 
function ChipDemo(){
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-chip/Chip"
      code={function (){
        return "(\n  <n.Row>\n    <ui_chip.Chip\n      text=\"hello\"\n      onClose={function (){\n        return null;\n      }}>\n    </ui_chip.Chip>\n    <ui_chip.Chip text=\"world\" variant={{\"bg\":{\"key\":\"neutral\"}}}></ui_chip.Chip>\n  </n.Row>);\n(\n  <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flexDirection\":\"row\"}}>\n    <ui_chip.Chip\n      design={{\"type\":\"dark\"}}\n      text=\"hello\"\n      onClose={function (){\n        return null;\n      }}>\n    </ui_chip.Chip>\n    <ui_chip.Chip\n      design={{\"type\":\"dark\"}}\n      variant={{\"bg\":{\"key\":\"neutral\"}}}\n      text=\"world\">\n    </ui_chip.Chip>\n  </ui_static.Div>);";
      }()}>
      <n.Row>
        <ui_chip.Chip
          text="hello"
          onClose={function (){
            return null;
          }}>
        </ui_chip.Chip>
        <ui_chip.Chip text="world" variant={{"bg":{"key":"neutral"}}}></ui_chip.Chip>
      </n.Row>
      <ui_static.Div design={{"type":"dark"}} style={{"flexDirection":"row"}}>
        <ui_chip.Chip
          design={{"type":"dark"}}
          text="hello"
          onClose={function (){
            return null;
          }}>
        </ui_chip.Chip>
        <ui_chip.Chip
          design={{"type":"dark"}}
          variant={{"bg":{"key":"neutral"}}}
          text="world">
        </ui_chip.Chip>
      </ui_static.Div>
    </n.EnclosedCodeContainer>);
}

var MODULE = {"ChipDemo":ChipDemo};

export default MODULE