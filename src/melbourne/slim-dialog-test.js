import React from 'react'

import * as ReactNative from 'react-native'

import * as n from '../libs/js/react-native'

import slim_dialog from './slim-dialog'

// melbourne.slim-dialog-test/DialogDemo [20] 
function DialogDemo(){
  let [current,setCurrent] = React.useState(true);
  let [visible,setVisible] = React.useState();
  let buttonRef = React.useRef();
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-dialog/Dialog"
      code={function (){
        return "(\n  <n.Row style={{\"marginTop\":30}}>\n    <ReactNative.Button\n      ref={buttonRef}\n      title=\"ON\"\n      onPress={function (){\n        return setVisible(true);\n      }}>\n    </ReactNative.Button>\n  </n.Row>);\n(\n  <slim_dialog.Dialog\n    design={{\"type\":\"light\"}}\n    title=\"Confirm Delete\"\n    body={(\n      <>Are you sure you wish to delete?</>)}\n    modalProps={{}}\n    onSubmit={function (){\n      return setVisible(false);\n    }}\n    onCancel={function (){\n      return setVisible(false);\n    }}\n    visible={visible}>\n  </slim_dialog.Dialog>);";
      }()}>
      <n.Row style={{"marginTop":30}}>
        <ReactNative.Button
          ref={buttonRef}
          title="ON"
          onPress={function (){
            return setVisible(true);
          }}>
        </ReactNative.Button>
      </n.Row>
      <slim_dialog.Dialog
        design={{"type":"light"}}
        title="Confirm Delete"
        body={(
          <>Are you sure you wish to delete?</>)}
        modalProps={{}}
        onSubmit={function (){
          return setVisible(false);
        }}
        onCancel={function (){
          return setVisible(false);
        }}
        visible={visible}>
      </slim_dialog.Dialog>
    </n.EnclosedCodeContainer>);
}

var MODULE = {"DialogDemo":DialogDemo};

export default MODULE