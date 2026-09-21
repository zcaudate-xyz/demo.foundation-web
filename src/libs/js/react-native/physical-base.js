import React from 'react'

import * as ReactNative from 'react-native'

import * as xtd from '../../xt/lang/common-data.js'

import * as k from '../../xt/lang/common-lib.js'

import * as r from '../react.js'

import * as a from './animate.js'

import * as helper_theme_default from './helper-theme-default.js'

// js.react-native.physical-base/Tag [7]
export function Tag({
  indicator,
  style,
  format = (function (v){
  return v.toFixed(4);
}),
  ...rprops
}){
  let refLabel = a.useListenSingle(indicator,function (v){
    return {"text":format(v)};
  });
  return (
    <ReactNative.TextInput
      ref={refLabel}
      editable={false}
      style={[
          {"width":50,"fontSize":12},
          ReactNative.Platform.select({
                "ios":{"fontFamily":"Courier"},
                "default":{"fontFamily":"monospace"}
              }),
          ReactNative.Platform.select({"web":{"userSelect":"none","cursor":"default"}}),
          ...xtd.arrayify(style)
        ]}
      {...rprops}/>);
}

// js.react-native.physical-base/transformInner [30]
export function transformInner(indicators,chord,inner,transformFn){
  return inner.filter(k.identity).map(function ({component,...iprops},i){
    let tprops = transformFn(Object.assign({
      "key":i,
      "component":component,
      "indicators":indicators,
      "chord":chord
    },iprops));
    return React.createElement(component,tprops);
  });
}

// js.react-native.physical-base/transformProps [48]
export function transformProps(props){
  let {
    chord,
    style,
    allowRef,
    component,
    indicators = {},
    refLink = React.useRef(),
    children = [],
    inner = [],
    size = "md",
    transformations = {},
    ...rprops
  } = props;
  let ostyles = k.is_arrayp(style) ? style : [style];
  let sstyle = helper_theme_default.FontSize[size] || {"fontSize":size};
  let refChord = r.useFollowRef(chord);
  let getChord = React.useRef(function (){
    return refChord.current;
  }).current;
  React.useEffect(function (){
    a.listenTransformations(refLink,indicators,transformations,getChord);
  },[]);
  let tchildren = [
    ...xtd.arrayify(children),
    ...transformInner(indicators,chord,inner,transformProps)
  ];
  return Object.assign({
    [(allowRef || !k.is_functionp(component)) ? "ref" : "refLink"]:refLink,
    "style":[sstyle,...ostyles]
  },rprops,xtd.not_emptyp(tchildren) ? {"children":tchildren} : null)
}

// js.react-native.physical-base/transformInnerFn [86]
export function transformInnerFn({chord,indicators}){
  return function (inner){
    return transformInner(indicators,chord,inner,transformProps);
  };
}

// js.react-native.physical-base/Box [98]
export function Box({addons = [],...props}){
  let tprops = transformProps(props);
  let innerFn = transformInnerFn(props);
  return (
    <React.Fragment><ReactNative.View {...tprops}/>{innerFn(addons)}</React.Fragment>);
}

// js.react-native.physical-base/Text [109]
export function Text({addons = [],...props}){
  let tprops = transformProps(props);
  let innerFn = transformInnerFn(props);
  return (
    <React.Fragment>
      <ReactNative.TextInput editable={false} multiline={true} {...tprops}/>
      {innerFn(addons)}
    </React.Fragment>);
}

// js.react-native.physical-base/useChordDisabled [123]
export function useChordDisabled({disabled,indicatorParams = {}}){
  let dindicator = a.useBinaryIndicator(
    disabled,
    indicatorParams["disabled"] || {"default":{"duration":400}}
  );
  return {"indicators":{"disabled":dindicator},"chord":{disabled}};
}

// js.react-native.physical-base/useChordHighlighted [133]
export function useChordHighlighted({highlighted,indicatorParams = {}}){
  let hindicator = a.useBinaryIndicator(
    highlighted,
    indicatorParams["highlighted"] || {"default":{"duration":200}}
  );
  return {
    "indicators":{"highlighted":hindicator},
    "chord":{highlighted}
  };
}

// js.react-native.physical-base/useChordHoverable [143]
export function useChordHoverable({indicatorParams = {}}){
  let [hovering,setHovering] = React.useState();
  let hindicator = a.usePressIndicator(
    hovering,
    indicatorParams["hovering"] || {"default":{"duration":200}}
  );
  return {
    "indicators":{"hovering":hindicator},
    "chord":{hovering},
    hovering,
    setHovering
  };
}

// js.react-native.physical-base/useChordPressable [154]
export function useChordPressable({indicatorParams = {}}){
  let [pressing,setPressing] = React.useState();
  let pindicator = a.usePressIndicator(
    pressing,
    indicatorParams["pressing"] || {"default":{"duration":250}}
  );
  return {
    "indicators":{"pressing":pindicator},
    "chord":{pressing},
    pressing,
    setPressing
  };
}

// js.react-native.physical-base/useChordEmptyable [165]
export function useChordEmptyable({value,indicatorParams = {}}){
  let [emptying,setEmptying] = React.useState(xtd.is_emptyp(value));
  let eindicator = a.useBinaryIndicator(
    emptying,
    indicatorParams["emptying"] || {"default":{"duration":200}}
  );
  return {
    "indicators":{"emptying":eindicator},
    "chord":{emptying},
    emptying,
    setEmptying
  };
}

// js.react-native.physical-base/useChordFocusable [178]
export function useChordFocusable({indicatorParams = {}}){
  let [focusing,setFocusing] = React.useState();
  let findicator = a.useBinaryIndicator(
    focusing,
    indicatorParams["focusing"] || {"type":"spring","default":{"damping":20,"mass":2}}
  );
  return {
    "indicators":{"focusing":findicator},
    "chord":{focusing},
    focusing,
    setFocusing
  };
}

// js.react-native.physical-base/useChordDraggable [192]
export function useChordDraggable({indicatorParams = {}}){
  let [dragEnabled,setDragEnabled] = React.useState();
  let [dragCaptured,setDragCaptured] = React.useState();
  let eindicator = a.useBinaryIndicator(
    dragEnabled,
    indicatorParams["dragEnabled"] || {"default":{"duration":200}}
  );
  let cindicator = a.useBinaryIndicator(
    dragCaptured,
    indicatorParams["dragCaptured"] || {"default":{"duration":400}}
  );
  return {
    "indicators":{"dragEnabled":eindicator,"dragCaptured":cindicator},
    "chord":{dragCaptured,dragEnabled},
    dragEnabled,
    setDragEnabled,
    dragCaptured,
    setDragCaptured
  };
}

// js.react-native.physical-base/mergeChords [211]
export function mergeChords(chords){
  let allIndicators = {};
  let allChord = {};
  let out = {};
  for(let e of chords){
    let {indicators,chord,...rprops} = e;
    Object.assign(out,rprops);
    Object.assign(allIndicators,indicators);
    Object.assign(allChord,chord);
  };
  return Object.assign(out,{"indicators":allIndicators,"chord":allChord});
}

// js.react-native.physical-base/useIndicatorCapture [229]
export function useIndicatorCapture({chord,indicators,onChord,onIndicators}){
  React.useEffect(function (){
    if(onIndicators){
      onIndicators(indicators);
    }
  },[]);
  React.useEffect(function (){
    if(onChord){
      onChord(chord);
    }
  },[JSON.stringify(chord)]);
}

// js.react-native.physical-base/useHoverable [246]
export function useHoverable({indicators,chord,...rprops}){
  let disabled = useChordDisabled(rprops);
  let hoverable = useChordHoverable(rprops);
  let merged = mergeChords([disabled,hoverable,{chord,indicators}]);
  let props = Object.assign({},rprops,merged);
  useIndicatorCapture(props);
  return props;
}

// js.react-native.physical-base/HoverableTarget [262]
export function HoverableTarget({
  disabled,
  outlined,
  chord,
  onChord,
  onHoverIn,
  onHoverOut,
  indicators,
  onIndicators,
  indicatorParams = {},
  addons = [],
  refLink = React.useRef(),
  ...rprops
}){
  let hoverable = useHoverable({
    disabled,
    "chord":Object.assign({outlined},chord),
    onChord,
    indicators,
    indicatorParams,
    onIndicators
  });
  let {hovering,setHovering} = hoverable;
  let innerFn = transformInnerFn(hoverable);
  let tprops = transformProps(Object.assign(rprops,hoverable));
  return (
    <React.Fragment>
      <ReactNative.View
        ref={refLink}
        onMouseEnter={function (e){
            setHovering(true);
            if(onHoverIn){
              onHoverIn(e);
            }
          }}
        onMouseLeave={function (e){
            setHovering(false);
            if(onHoverOut){
              onHoverOut(e);
            }
          }}
        {...tprops}/>
      {innerFn(addons)}
    </React.Fragment>);
}

// js.react-native.physical-base/useTouchable [298]
export function useTouchable({indicators,chord,...rprops}){
  let disabled = useChordDisabled(rprops);
  let highlighted = useChordHighlighted(rprops);
  let hoverable = useChordHoverable(rprops);
  let pressable = useChordPressable(rprops);
  let merged = mergeChords(
    [disabled,highlighted,hoverable,pressable,{chord,indicators}]
  );
  let props = Object.assign({},rprops,merged);
  useIndicatorCapture(props);
  return props;
}

// js.react-native.physical-base/TouchableBasePressing [318]
export function TouchableBasePressing({
  style,
  children,
  disabled,
  highlighted,
  outlined,
  chord,
  onChord,
  onPressIn,
  onPressOut,
  onPress,
  onHoverIn,
  onHoverOut,
  indicators,
  onIndicators,
  indicatorParams = {},
  addons = [],
  inner = [],
  refLink = React.useRef(),
  ...rprops
}){
  let touchable = useTouchable({
    disabled,
    highlighted,
    outlined,
    "chord":Object.assign({outlined},chord),
    onChord,
    indicators,
    indicatorParams,
    onIndicators
  });
  let {hovering,pressing,setHovering,setPressing} = touchable;
  let innerFn = transformInnerFn(touchable);
  return (
    <React.Fragment>
      <ReactNative.Pressable
        onHoverIn={function (e){
            setHovering(true);
            if(onHoverIn){
              onHoverIn(e);
            }
          }}
        onPress={onPress}
        disabled={disabled}
        onMouseDown={function (e){
            e.nativeEvent.preventDefault();
          }}
        onHoverOut={function (e){
            setHovering(false);
            if(onHoverOut){
              onHoverOut(e);
            }
          }}
        onMouseMove={function (e){
            e.nativeEvent.preventDefault();
          }}
        style={xtd.arrayify(style)}
        onPressIn={function (e){
            setPressing(true);
            if(onPressIn){
              onPressIn(e);
            }
          }}
        onPressOut={function (e){
            setPressing(false);
            if(onPressOut){
              onPressOut(e);
            }
          }}
        onMouseUp={function (){
            setPressing(false);
          }}>
        <ReactNative.View
          ref={refLink}
          style={[ReactNative.Platform.select({"web":{"userSelect":"none"}})]}>{innerFn(inner)}{children}
        </ReactNative.View>
      </ReactNative.Pressable>
      {innerFn(addons)}
    </React.Fragment>);
}

// js.react-native.physical-base/TouchableBinary [385]
export function TouchableBinary({active,chord,indicators,indicatorParams = {},...rprops}){
  let aindicator = a.useBinaryIndicator(
    active,
    indicatorParams["active"] || {"default":{"duration":300}}
  );
  return (
    <TouchableBasePressing
      chord={Object.assign({},chord,{active})}
      indicators={Object.assign({},indicators,{"active":aindicator})}
      indicatorParams={indicatorParams}
      {...rprops}/>);
}

// js.react-native.physical-base/useInputable [403]
export function useInputable({indicators,chord,...rprops}){
  let disabled = useChordDisabled(rprops);
  let highlighted = useChordHighlighted(rprops);
  let hoverable = useChordHoverable(rprops);
  let focusable = useChordFocusable(rprops);
  let emptyable = useChordEmptyable(rprops);
  let merged = mergeChords([
    disabled,
    highlighted,
    hoverable,
    focusable,
    emptyable,
    {chord,indicators}
  ]);
  let props = Object.assign({},rprops,merged);
  useIndicatorCapture(props);
  return props;
}

// js.react-native.physical-base/TouchableInput [425]
export function TouchableInput({
  chord,
  disabled,
  highlighted,
  outlined,
  value,
  onChord,
  onFocus,
  onBlur,
  onHoverIn,
  onHoverOut,
  indicators,
  onIndicators,
  onChangeText,
  indicatorParams = {},
  addons = [],
  inner = [],
  styleContainer = {},
  containerProps = {},
  refLink = React.useRef(),
  refInput = React.useRef(),
  ...rprops
}){
  if(k.nilp(value)){
    value = "";
  }
  let inputable = useInputable({
    disabled,
    highlighted,
    value,
    "chord":Object.assign({outlined},chord),
    onChord,
    indicators,
    indicatorParams,
    onIndicators
  });
  let {emptying,focusing,hovering,setEmptying,setFocusing,setHovering} = inputable;
  let valueRef = React.useRef(value);
  React.useEffect(function (){
    if(value != valueRef.current){
      valueRef.current = value;
      if(onChangeText){
        onChangeText(value);
      }
      setEmptying(xtd.is_emptyp(value));
    }
  },[value]);
  return (
    <Box
      refLink={refLink}
      style={styleContainer}
      inner={[
          Object.assign({
                "onChangeText":function (v){
                        setEmptying(xtd.is_emptyp(v));
                        valueRef.current = v;
                        if(onChangeText){
                          onChangeText(v);
                        }
                      },
                "editable":!disabled,
                "value":value,
                "onMouseEnter":function (e){
                        setHovering(true);
                        if(onHoverIn){
                          onHoverIn(e);
                        }
                      },
                "onBlur":function (e){
                        setFocusing(false);
                        if(onBlur){
                          onBlur(e);
                        }
                      },
                "component":ReactNative.TextInput,
                "onMouseLeave":function (e){
                        setHovering(false);
                        if(onHoverOut){
                          onHoverOut(e);
                        }
                      },
                "refLink":refInput,
                "onFocus":function (e){
                        setFocusing(true);
                        if(onFocus){
                          onFocus(e);
                        }
                      }
              },rprops),
          ...inner
        ]}
      addons={addons}
      {...Object.assign(inputable,containerProps)}/>);
}