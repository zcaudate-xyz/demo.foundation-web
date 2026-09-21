import React from 'react'

import * as ReactNative from 'react-native'

import * as xtd from '../../xt/lang/common-data.js'

import * as r from '../react.js'

import * as math from '../../xt/lang/common-math.js'

import * as n from '../react-native.js'

// js.react-native.ui-scrollview/ScrollViewImpl [18]
export function ScrollViewImpl({
  brand,
  children,
  isTransition,
  style,
  styleContainer,
  styleBackground,
  styleIndicator,
  ...rprops
}){
  let [contentHeight,setContentHeight] = React.useState(1);
  let [visibleHeight,setVisibleHeight] = React.useState(0);
  let showScroll = contentHeight > visibleHeight;
  let visibleRatio = visibleHeight / contentHeight;
  let visibleDiff = 1 - visibleRatio;
  let contentOffset = React.useCallback(new ReactNative.Animated.Value(0),[]);
  let contentMargin = 1;
  let isMounted = r.useIsMounted();
  return (
    <ReactNative.View
      style={[
          {"flex":1,"flexDirection":"row-reverse"},
          ...xtd.arrayify(styleContainer)
        ]}>
      {!isTransition ? (
        <ReactNative.View
          style={[
              {
                  "backgroundColor":"red",
                  "flexDirection":"row-reverse",
                  "height":"100%",
                  "position":"absolute",
                  "width":showScroll ? 7 : 0,
                  "zIndex":10000
                },
              ...xtd.arrayify(styleBackground)
            ]}>
          {showScroll ? (
            <ReactNative.Animated.View
              key="indicator"
              style={[
                  {
                      "backgroundColor":"blue",
                      "height":visibleRatio * visibleHeight,
                      "marginTop":2 * contentMargin,
                      "transform":[{"translateY":contentOffset}],
                      "width":6
                    },
                  ...xtd.arrayify(styleIndicator)
                ]}/>) : null}
        </ReactNative.View>) : null}
      <ReactNative.ScrollView
        style={[{"flex":1},...xtd.arrayify(style)]}
        onContentSizeChange={function (contentWidth,contentHeight){
            if(isMounted()){
              setContentHeight(contentHeight);
            }
          }}
        showsVerticalScrollIndicator={false}
        onLayout={function ({nativeEvent}){
            if(isMounted()){
              setVisibleHeight(nativeEvent.layout.height);
            }
          }}
        onScroll={function ({nativeEvent}){
            contentOffset.setValue(math.clamp(
              0,
              visibleDiff * visibleHeight,
              nativeEvent.contentOffset.y * visibleRatio
            ) - contentMargin);
          }}
        scrollEventThrottle={16}>{children}
      </ReactNative.ScrollView>
    </ReactNative.View>);
}

// js.react-native.ui-scrollview/ScrollView [88]
export function ScrollView({
  brand,
  children,
  style,
  styleContainer,
  styleBackground,
  styleIndicator,
  ...rprops
}){
  let {Consumer} = globalThis["js_react_native$$Global"];
  return (
    <Consumer>
      {function ({isTransition}){
        return (
          <ScrollViewImpl
            brand={brand}
            children={children}
            isTransition={isTransition}
            style={style}
            styleContainer={styleContainer}
            styleBackground={styleBackground}
            styleIndicator={styleIndicator}
            {...rprops}/>);
      }}
    </Consumer>);
}