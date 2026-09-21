import * as model_context from './model-context.js'

import * as math from '../../xt/lang/common-math.js'

// js.react-native.helper-transition/DefaultTransitions [9]
export var DefaultTransitions = {
  "bottom":"from_bottom",
  "top":"from_top",
  "top_right":"from_right",
  "top_left":"from_top",
  "bottom_right":"from_bottom",
  "bottom_left":"from_left",
  "right":"from_right",
  "centered":"from_top",
  "left":"from_left"
};

// js.react-native.helper-transition/absoluteAnimateFn [20]
export function absoluteAnimateFn({transition,effect,position,margin,height = 0,width = 0}){
  transition = (transition || DefaultTransitions[position]);
  let [translateKey,magnitude] = model_context.getTranslationOffset({height,margin,position,transition,width});
  let zoomFn = model_context.getScalarFn(effect,"zoom");
  let fadeFn = model_context.getScalarFn(effect,"fade");
  return function (visible){
    let style = {
      "opacity":fadeFn ? fadeFn(visible) : visible,
      "transform":[
            ...(translateKey ? [{[translateKey]:(1 - visible) * magnitude}] : []),
            ...(zoomFn ? [{"scale":zoomFn(visible)}] : [])
          ]
    };
    return {"style":style};
  };
}

// js.react-native.helper-transition/absoluteAnimateProgress [54]
export function absoluteAnimateProgress({transition,effect = {},position,margin,height,width},visible){
  transition = (transition || DefaultTransitions[position]);
  let [translateKey,magnitude] = model_context.getTranslationOffset({height,margin,position,transition,width});
  let opacity = math.mix(effect.fade || 0,1,visible);
  let style = {
    "opacity":opacity * opacity,
    "transform":[
        ...(translateKey ? [{[translateKey]:(1 - visible) * magnitude}] : []),
        ...(effect.zoom ? [{"scale":math.mix(effect.zoom,1,visible)}] : [])
      ]
  };
  return {"style":style};
}

// js.react-native.helper-transition/relativeAnimateProgress [88]
export function relativeAnimateProgress({transition,effect = {},xOffset,yOffset},visible){
  let style = {
    "opacity":math.mix(effect.fade || 0,1,visible),
    "transform":[
        {"translateX":(1 - visible) * xOffset},
        {"translateY":(1 - visible) * yOffset},
        ...(effect.zoom ? [{"scale":math.mix(effect.zoom,1,visible)}] : [])
      ]
  };
  return {"style":style};
}