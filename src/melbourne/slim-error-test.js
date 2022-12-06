import * as ReactNative from 'react-native'

import n from '../js/react-native'

import slim_error from './slim-error'

// melbourne.slim-error-test/ErrorInfoDemo [20] 
function ErrorInfoDemo(){
  return (
    <n.PortalSink>
      <n.Enclosed label="melbourne.slim-error/ErrorInfo">
        <n.Row>
          <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
            <slim_error.ErrorInfo brand={{"type":"light"}}></slim_error.ErrorInfo>
            <ReactNative.View style={{"height":5}}></ReactNative.View>
            <slim_error.ErrorInfo
              brand={{"type":"light"}}
              result={{"tag":"user.account/incorrect_password"}}>
            </slim_error.ErrorInfo>
            <ReactNative.View style={{"height":5}}></ReactNative.View>
            <n.Row>
              <slim_error.ErrorInfo brand={{"type":"light"}}></slim_error.ErrorInfo>
              <ReactNative.View style={{"width":5}}></ReactNative.View>
              <slim_error.ErrorInfo brand={{"type":"light"}}></slim_error.ErrorInfo>
            </n.Row>
          </ReactNative.View>
          <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
            <slim_error.ErrorInfo brand={{"type":"dark"}}></slim_error.ErrorInfo>
            <ReactNative.View style={{"height":5}}></ReactNative.View>
            <slim_error.ErrorInfo
              brand={{"type":"dark"}}
              result={{"tag":"user.account/incorrect_password"}}>
            </slim_error.ErrorInfo>
            <ReactNative.View style={{"height":5}}></ReactNative.View>
            <n.Row>
              <slim_error.ErrorInfo brand={{"type":"dark"}}></slim_error.ErrorInfo>
              <ReactNative.View style={{"width":5}}></ReactNative.View>
              <slim_error.ErrorInfo brand={{"type":"dark"}}></slim_error.ErrorInfo>
            </n.Row>
          </ReactNative.View>
        </n.Row>
      </n.Enclosed>
    </n.PortalSink>);
}

var MODULE = {"ErrorInfoDemo":ErrorInfoDemo};

export default MODULE