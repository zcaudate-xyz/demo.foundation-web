import React from 'react'

import * as ReactNative from 'react-native'

import * as a from '../libs/js/react-native/animate'

import ui_text from '../melbourne/ui-text'

import * as r from '../libs/js/react'

import * as ui_base from '../libs/js/react-native/physical-base'

import base_market from './common/data-market'

import * as n from '../libs/js/react-native'

import k from '../libs/xt/lang/base-lib'

import ui_section from '../melbourne/ui-section'

import ui_static from '../melbourne/ui-static'

import slim from '../melbourne/slim'

// pune.ui-market-live/live-priority-rate [20] 
function live_priority_rate(market,allotment,prediction){
  let rate_fn = function (pair){
    let [pos,vol] = pair;
    return [base_market.position_to_rate(prediction,allotment,pos),vol];
  };
  let {ask,bid} = market || {"ask":[],"bid":[]};
  let [buy,sell] = (prediction == "yes") ? [bid,ask] : [ask,bid];
  return {
    "buy":k.arr_reverse(k.arr_map(sell,rate_fn)),
    "sell":k.arr_reverse(k.arr_map(buy,rate_fn))
  };
}

// pune.ui-market-live/ORDER_IMPL [39] 
var ORDER_IMPL = {
  "type":"v",
  "body":[
    {
    "type":"h",
    "body":[
      {
      "type":"p",
      "variant":{"fg":{"key":"neutral"}},
      "template":["id"]
    }
    ]
  }
  ]
};

// pune.ui-market-live/MarketLiveOrder [46] 
function MarketLiveOrder({amount,design,orderFn,orderId,orderLookup}){
  let [changed,setChanged] = React.useState();
  let [prev,setPrev] = React.useState(amount);
  let changing = a.useBinaryIndicator(changed);
  React.useEffect(function (){
    if(prev != amount){
      setChanged(true);
      setTimeout(function (){
        setChanged(false);
      },600);
    }
  },[amount]);
  return (
    <ui_base.Box
      indicators={{changing}}
      transformations={{
        "changing":function (v){
              return {"style":{"opacity":1 - (0.7 * v)}};
            }
      }}>
      <ui_text.ButtonAccent
        design={design}
        text={"" + amount}
        onPress={function (){
          if(orderFn){
            orderFn(orderId,orderLookup);
          }
        }}
        style={{
          "paddingVertical":0,
          "paddingHorizontal":0,
          "marginHorizontal":2,
          "marginVertical":2,
          "borderWidth":0,
          "width":40,
          "textAlign":"center"
        }}>
      </ui_text.ButtonAccent>
    </ui_base.Box>);
}

// pune.ui-market-live/MarketLiveRow [83] 
function MarketLiveRow({control,design,lookup,orderFn,priority,rate}){
  let {decimal,fraction,prediction} = control;
  return (
    <n.Row
      style={{"alignItems":"center","marginHorizontal":5,"marginVertical":5}}>
      <ui_static.Text design={design} variant={{"font":"h6"}} style={{"width":50}}>{(rate * fraction).toFixed(decimal)}</ui_static.Text>
      <ReactNative.View style={{"flex":1}}>
        <n.Row style={{"flexWrap":"wrap"}}>
          {priority.map(function ([order_id,amount]){
            return (
              <MarketLiveOrder
                design={design}
                amount={amount}
                orderId={order_id}
                orderFn={orderFn}
                orderLookup={lookup}
                key={order_id}>
              </MarketLiveOrder>);
          })}
        </n.Row>
      </ReactNative.View>
    </n.Row>);
}

// pune.ui-market-live/MarketLive [120] 
function MarketLive({design,market,control,orderFn,published}){
  let {
    allotment = 100,
    decimal = 2,
    trade = "buy",
    prediction = "yes",
    rate,
    setRate
  } = control;
  let lookup = k.arr_juxt(published,k.id_fn,k.identity);
  let fraction = Math.pow(10,-decimal);
  let priorities = live_priority_rate(market,allotment,prediction);
  let lineFn = function ([rate,priority],i){
    return (
      <MarketLiveRow
        key={rate}
        lookup={lookup}
        rate={rate}
        priority={priority}
        control={control}
        orderFn={orderFn}
        design={design}>
      </MarketLiveRow>);
  };
  return (
    <ReactNative.View style={{"padding":3,"flex":1,"overflow":"auto"}}>
      <ReactNative.View style={{"minHeight":60,"flexDirection":"column-reverse"}}>{[...priorities.buy].reverse().map(lineFn)}</ReactNative.View>
      <ui_section.SectionSeparator
        design={design}
        variant={{"fg":{"key":"neutral"}}}
        style={{"marginVertical":3}}>
      </ui_section.SectionSeparator>
      <ReactNative.View style={{"minHeight":60,"flexDirection":"column"}}>{priorities.sell.map(lineFn)}</ReactNative.View>
    </ReactNative.View>);
}

var MODULE = {
  "live_priority_rate":live_priority_rate,
  "ORDER_IMPL":ORDER_IMPL,
  "MarketLiveOrder":MarketLiveOrder,
  "MarketLiveRow":MarketLiveRow,
  "MarketLive":MarketLive
};

export default MODULE