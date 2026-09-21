import * as ReactNative from 'react-native'

import * as RNSvg from 'react-native-svg'

import React from 'react'

import * as n from '../libs/js/react-native'

import * as r from '../libs/js/react'

import base_palette from '../melbourne/base-palette'

import ui_sparkline from './ui-sparkline'

import k from '../libs/xt/lang/base-lib'

// pune.ui-depthchart/get-depth-histogram [21] 
function get_depth_histogram(domain,lu,step,cmp){
  let out = [0];
  let i = domain[0];
  while(cmp(i,domain[domain.length + -1])){
    let x = out[out.length + -1] + (lu[i] || 0);
    out.push(x);
    i = (i + step);
  }
  return out;
}

// pune.ui-depthchart/get-depth-data [34] 
function get_depth_data(offers){
  let {buy,sell} = offers;
  let buy_domain = k.is_emptyp(buy) ? [] : [(buy[buy.length + -1])[0],(buy[0])[0]];
  let sell_domain = k.is_emptyp(sell) ? [] : [(sell[sell.length + -1])[0],(sell[0])[0]];
  let max_steps = Math.max(
    k.is_emptyp(buy_domain) ? 0 : (buy_domain[1] - buy_domain[0]),
    k.is_emptyp(sell_domain) ? 0 : (sell_domain[1] - sell_domain[0]),
    10
  );
  let max_depth = Math.max(k.arr_foldl(buy,function (acc,[_,vol]){
    return acc + vol;
  },0),k.arr_foldl(sell,function (acc,[_,vol]){
    return acc + vol;
  },0),100);
  let buy_lu = k.arr_juxt(buy,function (arr){
    return arr[0];
  },function (arr){
    return arr[1];
  });
  let sell_lu = k.arr_juxt(sell,function (arr){
    return arr[0];
  },function (arr){
    return arr[1];
  });
  let buy_hist = k.is_emptyp(buy) ? k.arr_repeat(0,max_steps) : get_depth_histogram([buy_domain[0],buy_domain[0] + max_steps],buy_lu,1,function (a,b){
    return a <= b;
  });
  let sell_hist = k.is_emptyp(sell) ? k.arr_repeat(0,max_steps) : get_depth_histogram([
    sell_domain[sell_domain.length + -1],
    sell_domain[sell_domain.length + -1] - max_steps
  ],sell_lu,-1,function (a,b){
    return a >= b;
  });
  return {buy_domain,buy_hist,buy_lu,max_depth,max_steps,sell_domain,sell_hist,sell_lu};
}

// pune.ui-depthchart/MarketDepthChart [85] 
function MarketDepthChart({design,offers,control}){
  let {
    allotment = 100,
    decimal = 0,
    trade = "buy",
    prediction = "yes",
    fraction
  } = control;
  let m = get_depth_data(offers);
  let {buy_hist,max_depth,sell_hist} = m;
  return (
    <n.Row>
      <ui_sparkline.Sparkline
        maxValue={max_depth}
        variant={{
          "bg":{
            "key":(prediction == "yes") ? "primary" : "error",
            "mix":"background",
            "ratio":3
          },
          "fg":{"key":"neutral"}
        }}
        pathStyle={{"strokeWidth":1}}
        width={55}
        minValue={1}
        style={{"paddingVertical":4,"paddingLeft":2}}
        values={k.arr_reverse(sell_hist)}
        design={design}
        height={12}>
      </ui_sparkline.Sparkline>
      <ui_sparkline.Sparkline
        maxValue={max_depth}
        variant={{
          "bg":{"key":"neutral","mix":"background","ratio":3},
          "fg":{"key":"neutral"}
        }}
        pathStyle={{"strokeWidth":1}}
        width={50}
        minValue={1}
        style={{"paddingVertical":4,"paddingRight":2}}
        values={buy_hist}
        design={design}
        height={12}>
      </ui_sparkline.Sparkline>
    </n.Row>);
}

var MODULE = {
  "get_depth_histogram":get_depth_histogram,
  "get_depth_data":get_depth_data,
  "MarketDepthChart":MarketDepthChart
};

export default MODULE