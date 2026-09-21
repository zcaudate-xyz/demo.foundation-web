import React from 'react'

import * as ReactNative from 'react-native'

import * as xtd from '../../xt/lang/common-data.js'

import * as physical_base from './physical-base.js'

import * as r from '../react.js'

import * as a from './animate.js'

import * as n from '../react-native.js'

// js.react-native.ui-util/Page [7]
export function Page({
  style,
  styleContainer,
  styleBody,
  styleMenu,
  styleTitle,
  styleLeft,
  styleRight,
  headerComponent,
  headerProps,
  footerComponent,
  footerProps,
  titleComponent,
  titleProps,
  leftComponent,
  leftProps,
  rightComponent,
  rightProps,
  children
}){
  return (
    <ReactNative.View style={[{"flex":1},...xtd.arrayify(styleContainer)]}>
      {headerComponent ? React.createElement(headerComponent,headerProps) : null}
      <ReactNative.View style={[{"flex":1},...xtd.arrayify(style)]}>
        <n.Row style={styleMenu}>
          <ReactNative.View style={[{"flex":1},...xtd.arrayify(styleLeft)]}>
            {leftComponent ? React.createElement(leftComponent,leftProps) : null}
          </ReactNative.View>
          <ReactNative.View style={[{"flex":4},...xtd.arrayify(styleTitle)]}>
            {titleComponent ? React.createElement(titleComponent,titleProps) : null}
          </ReactNative.View>
          <ReactNative.View style={[{"flex":1},...xtd.arrayify(styleRight)]}>
            {rightComponent ? React.createElement(rightComponent,rightProps) : null}
          </ReactNative.View>
        </n.Row>
        <ReactNative.View style={[{"flex":1},...xtd.arrayify(styleBody)]}>{children}</ReactNative.View>
      </ReactNative.View>
      {footerComponent ? React.createElement(footerComponent,footerProps) : null}
    </ReactNative.View>);
}

// js.react-native.ui-util/Fade [66]
export function Fade({
  visible,
  children,
  indicatorParams = {
  "default":{
    "type":"timing",
    "duration":250,
    "easing":ReactNative.Easing.linear
  }
},
  ...rprops
}){
  let isMounted = r.useIsMounted();
  let [showing,vindicator] = a.useShowing(visible,indicatorParams,isMounted);
  return (
    <physical_base.Box
      chord={{visible}}
      indicators={{"visible":vindicator}}
      transformations={{
          "visible":function (visible){
                  return {"style":{"opacity":visible}};
                }
        }}
      children={(showing || visible) ? children : null}
      {...rprops}/>);
}

// js.react-native.ui-util/FadeIn [90]
export function FadeIn(props){
  let [visible,setVisible] = React.useState();
  React.useEffect(function (){
    setVisible(true);
  },[]);
  return React.createElement(Fade,Object.assign({},props,{visible}));
}

// js.react-native.ui-util/useFoldContent [104]
export function useFoldContent({children,indicators,visible}){
  let contentRef = React.useRef();
  let layoutRef = React.useRef({"height":0,"width":0});
  let vindicator = indicators["visible"];
  React.useEffect(function (){
    let contentElem = xtd.get_in(contentRef,["current","children",0]) || xtd.get_in(contentRef,["current","_children",0]);
    n.measure(contentElem).then(function (layout){
      layoutRef.current = layout;
    }).then(function (){
      setTimeout(function (){
        let curr = vindicator._value;
        if(curr == 1){
          vindicator.setValue(1);
        }
      },100);
    });
  },[visible,children]);
  return {contentRef,layoutRef};
}

// js.react-native.ui-util/FoldInner [136]
export function FoldInner({style,visible,chord,indicators,fade,children,aspect = "height"}){
  let {contentRef,layoutRef} = useFoldContent({children,indicators,visible});
  return (
    <physical_base.Box
      chord={chord}
      indicators={indicators}
      style={[{[aspect]:0,"overflow":"hidden"},...xtd.arrayify(style)]}
      transformations={{
          "visible":function (visible){
                  return {
                    "style":{
                              "opacity":fade ? visible : 1,
                              [aspect]:visible * layoutRef.current[aspect]
                            }
                  };
                }
        }}
      children={[
          (
                <ReactNative.View key="content" ref={contentRef}>{children}</ReactNative.View>)
        ]}/>);
}

// js.react-native.ui-util/FoldImpl [169]
export function FoldImpl({
  visible,
  chord,
  onComplete,
  indicators,
  indicatorParams = {
  "default":{
    "type":"timing",
    "duration":200,
    "easing":ReactNative.Easing.linear
  }
},
  ...rprops
}){
  let isMounted = r.useIsMounted();
  let [showing,vindicator] = a.useShowing(visible,indicatorParams,isMounted,onComplete);
  return showing ? (
    <FoldInner
      chord={Object.assign({"visible":visible},chord)}
      indicators={Object.assign({"visible":vindicator},indicators)}
      visible={visible}
      {...rprops}/>) : null;
}

// js.react-native.ui-util/Fold [194]
export function Fold(props){
  let {children,noTransition,visible} = props;
  if(noTransition){
    if(visible){
      return children;
    }
    else{
      return (
        <ReactNative.View/>);
    }
  }
  return React.createElement(FoldImpl,props);
}