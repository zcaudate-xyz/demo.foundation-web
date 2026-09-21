import * as ReactNative from 'react-native'

import React from 'react'

import * as n from '../libs/js/react-native'

import ui_static from './ui-static'

import base_palette from './base-palette'

import ui_chip_input from './ui-chip-input'

// melbourne.ui-chip-input-test/ChipInputDemo [23] 
function ChipInputDemo(){
  let [values,setValues] = React.useState(["hello","world"]);
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-chip-input/ChipInput"
      code={function (){
        return "(\n  <n.Row>\n    <ui_chip_input.ChipInput values={values} setValues={setValues}></ui_chip_input.ChipInput>\n  </n.Row>);";
      }()}>
      <n.Row>
        <ui_chip_input.ChipInput values={values} setValues={setValues}></ui_chip_input.ChipInput>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

var MODULE = {"ChipInputDemo":ChipInputDemo};

export default MODULE