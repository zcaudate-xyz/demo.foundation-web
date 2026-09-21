import * as xtd from '../../xt/lang/common-data.js'

import * as k from '../../xt/lang/common-lib.js'

import * as c from './helper-color.js'

// js.react-native.helper-theme/ThemeLookup [11]
export var ThemeLookup = {
  "bg":{
    "default":"bgNormal",
    "normal":"bgNormal",
    "pressing":"bgPressed",
    "hovering":"bgHovered",
    "active":"bgActive",
    "focusing":"bgActive",
    "disabled":"bgDisabled",
    "highlighted":"bgHighlighted"
  },
  "fg":{
    "default":"fgNormal",
    "normal":"fgNormal",
    "pressing":"fgPressed",
    "hovering":"fgHovered",
    "active":"fgActive",
    "focusing":"fgActive",
    "disabled":"fgDisabled",
    "highlighted":"fgHighlighted"
  }
};

// js.react-native.helper-theme/StageMap [29]
export var StageMap = {
  "pressing":k.identity,
  "focusing":k.identity,
  "active":k.identity,
  "hovering":function (hovering,{pressing}){
    return Math.max(hovering,pressing);
  },
  "disabled":k.identity,
  "highlighted":k.identity
};

// js.react-native.helper-theme/StageStatics [38]
export var StageStatics = {
  "pressing":false,
  "focusing":false,
  "hovering":false,
  "active":false
};

// js.react-native.helper-theme/transformColor [45]
export function transformColor(indValues,theme,type,initial,stages,stageMap){
  initial = (initial || "default");
  let __fns = k.nilp(stageMap) ? StageMap : xtd.obj_assign(xtd.obj_assign({},StageMap),stageMap);
  let lu = ThemeLookup[type];
  let colorInit = theme[lu[initial]];
  return xtd.arr_foldl(stages,function (colorOut,stageKey){
    let tf = __fns[stageKey];
    let val = indValues[stageKey];
    let colorStage = theme[lu[stageKey]];
    return c.interpolate([colorOut,colorStage],tf(val,indValues));
  },colorInit);
}

// js.react-native.helper-theme/mergeProps [73]
export function mergeProps(arr){
  let out = {"style":[]};
  for(let e of arr){
    let {style,...rprops} = e || {};
    for(let s of xtd.arrayify(style)){
      out.style.push(s);
    };
    Object.assign(out,rprops);
  };
  return out;
}

// js.react-native.helper-theme/createCombinedTransformations [86]
export function createCombinedTransformations({theme,themePipeline,transformations = {}}){
  let bgCustom = transformations["bg"] || (function (){
    return null;
  });
  let fgCustom = transformations["fg"] || (function (){
    return null;
  });
  if(!(k.is_functionp(bgCustom) && k.is_functionp(fgCustom))){
    throw "Themed transformations require functions.";
  }
  let {bg,fg} = themePipeline;
  let bgInitial = bg["initial"];
  let bgStages = bg["stages"];
  let bgStageMap = bg["values"];
  let fgInitial = fg["initial"];
  let fgStages = fg["stages"];
  let fgStageMap = fg["values"];
  return function (indValues,chord){
    let bgProps = bgCustom(indValues,chord);
    let fgProps = fgCustom(indValues,chord);
    let bgColor = c.toHSL(
      transformColor(indValues,theme,"bg",bgInitial,bgStages,bgStageMap)
    );
    let fgColor = c.toHSL(
      transformColor(indValues,theme,"fg",fgInitial,fgStages,fgStageMap)
    );
    let styleProps = {
      "style":{
            "backgroundColor":bgColor,
            "color":fgColor,
            "borderColor":chord["outlined"] ? fgColor : bgColor
          }
    };
    return mergeProps([bgProps,fgProps,styleProps]);
  };
}

// js.react-native.helper-theme/createSingleTransformations [120]
export function createSingleTransformations({theme,themePipeline,transformations = {}},type,colorKeys){
  let custom = transformations[type] || (function (){
    return null;
  });
  if(!k.is_functionp(custom)){
    throw "Themed transformations require functions.";
  }
  let pipe = themePipeline[type];
  let initial = pipe["initial"];
  let stages = pipe["stages"];
  let stageMap = pipe["values"];
  return function (indValues,chord){
    let customProps = custom(indValues,chord);
    let color = c.toHSL(
      transformColor(indValues,theme,type,initial,stages,stageMap)
    );
    let style = {};
    for(let key of colorKeys){
      style[key] = color;
    };
    return mergeProps([customProps,{"style":style}]);
  };
}

// js.react-native.helper-theme/combinedStatic [145]
export function combinedStatic({disabled,highlighted,...rprops},more,transformFn){
  let indFn = function (flag){
    return flag ? 1 : 0;
  };
  let chord = xtd.obj_assign(
    xtd.obj_assign(xtd.obj_assign({},StageStatics),{disabled,highlighted}),
    more
  );
  let indValues = xtd.obj_map(chord,indFn);
  return transformFn(indValues,chord)["style"];
}

// js.react-native.helper-theme/prepThemeCombined [164]
export function prepThemeCombined(props){
  let transformFn = createCombinedTransformations(props);
  let styleStatic = combinedStatic(props,{},transformFn);
  return [styleStatic,transformFn];
}

// js.react-native.helper-theme/prepThemeSingle [172]
export function prepThemeSingle(props,type,colorKeys){
  let transformFn = createSingleTransformations(props,type,colorKeys);
  let styleStatic = combinedStatic(props,{},transformFn);
  return [styleStatic,transformFn];
}