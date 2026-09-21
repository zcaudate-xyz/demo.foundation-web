import * as ReactNative from 'react-native'

import React from 'react'

import * as xtd from '../../xt/lang/common-data.js'

import * as model_context from './model-context.js'

import * as physical_base from './physical-base.js'

import * as k from '../../xt/lang/common-lib.js'

import * as r from '../react.js'

import * as a from './animate.js'

import * as n from '../react-native.js'

import * as model_geom from './model-geom.js'

// js.react-native.ui-tooltip/tooltipPortalOffset [21]
export function tooltipPortalOffset(layouts){
  if(layouts){
    let {host,sink} = layouts;
    return {"left":host.px - sink.px,"top":host.py - sink.py};
  }
}

// js.react-native.ui-tooltip/tooltipContextOffset [34]
export function tooltipContextOffset(layouts,{alignment,margin,marginCross,position}){
  if(layouts){
    let {content,host} = layouts;
    return model_context.contextCoordinate({alignment,content,host,margin,marginCross,position});
  }
}

// js.react-native.ui-tooltip/TooltipRawArrow [53]
export function TooltipRawArrow({baseHeight,baseLength,color,point}){
  return (
    <ReactNative.View
      style={model_geom.triangleBaseStyle(color,point,baseLength,baseHeight)}/>);
}

// js.react-native.ui-tooltip/TooltipInnerContentArrow [67]
export function TooltipInnerContentArrow({alignment,arrow,arrowLayout,layouts,position}){
  return (
    <ReactNative.View
      key="arrow"
      style={[
          {"position":"absolute","zIndex":-100},
          tooltipContextOffset(layouts ? {"host":layouts.content,"content":arrowLayout} : null,{
                "position":arrow.point,
                "margin":-1,
                "marginCross":1,
                "alignment":alignment
              })
        ]}><TooltipRawArrow {...arrow}/>
    </ReactNative.View>);
}

// js.react-native.ui-tooltip/TooltipInnerHostArrow [91]
export function TooltipInnerHostArrow({alignment,arrow,arrowLayout,layouts,position}){
  return (
    <ReactNative.View
      key="arrow"
      style={[
          {"position":"absolute","zIndex":-100},
          tooltipContextOffset(layouts ? {"host":layouts.host,"content":arrowLayout} : null,{
                "position":position,
                "margin":1,
                "marginCross":-1,
                "alignment":alignment
              })
        ]}><TooltipRawArrow {...arrow}/>
    </ReactNative.View>);
}

// js.react-native.ui-tooltip/TooltipInner [115]
export function TooltipInner({
  hostRef,
  chord,
  indicators,
  position,
  alignment,
  style,
  arrow,
  setVisible,
  children
}){
  let [layouts,setLayouts] = React.useState();
  let dims = ReactNative.useWindowDimensions();
  let {contentRef,getLayouts,setSinkRef,sinkRef} = n.usePortalLayouts(hostRef,setLayouts);
  React.useEffect(function (){
    getLayouts();
  },[dims,children]);
  let arrowLayout = (("top" == position) || ("bottom" == position)) ? {"height":arrow.baseHeight,"width":arrow.baseLength} : {"height":arrow.baseLength,"width":arrow.baseHeight};
  let {backdrop,backdropStyle,placement} = arrow;
  return (
    <n.Portal onSink={setSinkRef}>
      <React.Fragment>
        {(backdrop && chord.visible) ? (
          <ReactNative.TouchableWithoutFeedback
            onPress={function (){
                setVisible(false);
              }}>
            <ReactNative.View
              style={{"position":"absolute","top":0,"bottom":0,"left":0,"right":0}}>
              <physical_base.Box
                chord={chord}
                indicators={indicators}
                style={{"flex":1,"opacity":arrow.animate ? 0 : 1}}
                transformations={arrow.animate ? {
                    "visible":function (v){
                        return {"style":{"opacity":v}};
                      }
                  } : null}>
                <ReactNative.View style={[{"flex":1},...xtd.arrayify(backdropStyle)]}/>
              </physical_base.Box>
            </ReactNative.View>
          </ReactNative.TouchableWithoutFeedback>) : null}
        <physical_base.Box
          style={[
              {"position":"absolute"},
              arrow.animate ? {"opacity":0,"transform":[{"scale":0}]} : null,
              tooltipPortalOffset(layouts)
            ]}
          chord={chord}
          onLayout={getLayouts}
          indicators={indicators}
          transformations={arrow.animate ? {
              "visible":function (v){
                  return {"style":{"opacity":v,"transform":[{"scale":v}]}};
                }
            } : null}>
          {(placement == "host") ? (
            <TooltipInnerHostArrow
              alignment="center"
              position={position}
              arrow={arrow}
              arrowLayout={arrowLayout}
              layouts={layouts}/>) : null}
          <ReactNative.View
            ref={contentRef}
            key="content"
            style={[
                {"position":"absolute","opacity":layouts ? 1 : 0},
                style,
                tooltipContextOffset(
                  layouts,
                  {alignment,position,"margin":arrow.baseHeight,"marginCross":0}
                )
              ]}>
            {children}
            {(placement == "content") ? (
              <TooltipInnerContentArrow
                arrow={arrow}
                arrowLayout={arrowLayout}
                alignment={alignment}
                layouts={layouts}
                position={position}/>) : null}
          </ReactNative.View>
        </physical_base.Box>
      </React.Fragment>
    </n.Portal>);
}

// js.react-native.ui-tooltip/Tooltip [207]
export function Tooltip({
  hostRef,
  position = "right",
  alignment = "center",
  visible,
  setVisible,
  delay = 0,
  style,
  arrow,
  children
}){
  let isMounted = r.useIsMounted();
  let [delayed,setDelayed] = r.useFollowDelayed(visible,delay,isMounted);
  let arrowPosition = model_geom.oppositePosition(position);
  arrow = Object.assign({
    "color":"black",
    "placement":"content",
    "baseLength":20,
    "point":arrowPosition,
    "baseHeight":5,
    "animate":false
  },arrow);
  if(k.nilp(arrow.point)){
    arrow["placement"] = "none";
  }
  let [showing,vindicator] = a.useShowing(visible && delayed,{
    "default":{
        "type":"timing",
        "duration":300,
        "easing":ReactNative.Easing.linear
      }
  },isMounted);
  let flag = arrow.animate ? showing : (visible && delayed);
  return flag ? (
    <TooltipInner
      chord={{"visible":visible && delayed}}
      indicators={{"visible":vindicator}}
      arrow={arrow}
      setVisible={setVisible}
      alignment={alignment}
      hostRef={hostRef}
      position={position}>{children}
    </TooltipInner>) : null;
}