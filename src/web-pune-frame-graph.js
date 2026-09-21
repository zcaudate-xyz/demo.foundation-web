import React from 'react'

import * as ReactNative from 'react-native'

import * as LWCharts from 'lightweight-charts'

import k from './libs/xt/lang/base-lib'

// component.web-pune-frame-graph/DATA [13] 
var DATA = [
  {
  "low":178.57,
  "high":180.99,
  "time":"2021-10-19",
  "close":179.85,
  "open":180.34
},
  {
  "low":177.56,
  "high":181.4,
  "time":"2021-10-22",
  "close":178.75,
  "open":180.82
},
  {
  "low":175.44,
  "high":179.49,
  "time":"2021-10-23",
  "close":178.53,
  "open":175.77
},
  {
  "low":176.31,
  "high":182.37,
  "time":"2021-10-24",
  "close":176.97,
  "open":178.58
},
  {
  "low":176.83,
  "high":180.5,
  "time":"2021-10-25",
  "close":179.07,
  "open":177.52
},
  {
  "low":170.91,
  "high":177.34,
  "time":"2021-10-26",
  "close":172.23,
  "open":176.88
},
  {
  "low":170.95,
  "high":175.99,
  "time":"2021-10-29",
  "close":173.2,
  "open":173.74
},
  {
  "low":172.64,
  "high":176.43,
  "time":"2021-10-30",
  "close":176.24,
  "open":173.16
},
  {
  "low":175.59,
  "high":178.85,
  "time":"2021-10-31",
  "close":175.88,
  "open":177.98
},
  {
  "low":175.9,
  "high":180.86,
  "time":"2021-11-01",
  "close":180.46,
  "open":176.84
},
  {
  "low":177.39,
  "high":183.01,
  "time":"2021-11-02",
  "close":179.93,
  "open":182.47
},
  {
  "low":179.3,
  "high":182.41,
  "time":"2021-11-05",
  "close":182.19,
  "open":181.02
}
];

// component.web-pune-frame-graph/OPTIONS [75] 
var OPTIONS = {
  "timeScale":{
    "timeVisible":true,
    "secondsVisible":true,
    "lockVisibleTimeRangeOnResize":true,
    "barSpacing":50
  }
};

// component.web-pune-frame-graph/Demo002LightweightCharts [81] 
function Demo002LightweightCharts(){
  let chartRef = React.useRef();
  React.useEffect(function (){
    let chart = LWCharts.createChart(
      chartRef.current,
      {"width":chartRef.current.clientWidth,"height":300}
    );
    let handleResize = function (){
      return chart.applyOptions({"width":chartRef.current.clientWidth});
    };
    chart.timeScale().fitContent();
    let newSeries = chart.addCandlestickSeries({
      "lineColor":"#2962FF",
      "topColor":"#2962FF",
      "bottomColor":"rgba(41, 98, 255, 0.28)"
    });
    newSeries.setData(DATA);
    window.addEventListener("resize",handleResize);
    return function (){
      window.removeEventListener("resize",handleResize);
      chart.remove();
    };
  },[]);
  return (
    <ReactNative.View ref={chartRef}></ReactNative.View>);
}

var MODULE = {
  "DATA":DATA,
  "OPTIONS":OPTIONS,
  "Demo002LightweightCharts":Demo002LightweightCharts
};

export default MODULE