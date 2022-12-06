import React from 'react'

import * as ReactNative from 'react-native'

import a from '../js/react-native/animate'

import n from '../js/react-native'

import k from '../xt/lang/base-lib'

import c from '../js/react-native/helper-color'

import ui from '../js/react-native/physical-base'

import depthchart from './ui-depthchart'

// pune.ui-depthchart-test/CHART [23] 
var CHART = {
  "control":{"allotment":100,"prediction":"yes","trade":"buy"},
  "market":{
    "last":65,
    "ask":{"total":2,"range":[66,67],"volume":[[66,60],[67,80]]},
    "meta":{
      "key":"BD95893A-2F41-435D-AD1D-DC48EC2926AB",
      "__type__":"TYPE/BOOK",
      "code":"NBA/MVP-2022/J.EMBID/BD95893A-2F41-435D-AD1D-DC48EC2926AB"
    },
    "bid":{"total":4,"range":[63,65],"volume":[[63,100],[64,60],[65,75]]},
    "frame":8,
    "spread":[1,65,66]
  }
};

// pune.ui-depthchart-test/MarketDepthChartDemo [65] 
function MarketDepthChartDemo(){
  return (
    <n.Enclosed
      label="pune.ui-depthchart/MarketDepthChart"
      style={{"height":500}}>
      {React.createElement(depthchart.MarketDepthChart,CHART)}
      <ReactNative.View style={{"height":10}}></ReactNative.View>
      {React.createElement(n.TextDisplay,CHART)}
    </n.Enclosed>);
}

var MODULE = {"CHART":CHART,"MarketDepthChartDemo":MarketDepthChartDemo};

export default MODULE