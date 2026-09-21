// js.react-native.helper-theme-default/FontSize [7]
export var FontSize = {
  "xxl":{"fontSize":40},
  "xl":{"fontSize":32},
  "lg":{"fontSize":24},
  "md":{"fontSize":18},
  "sm":{"fontSize":14},
  "xs":{"fontSize":12},
  "xxs":{"fontSize":10}
};

// js.react-native.helper-theme-default/defaultPressing [16]
export var defaultPressing = function (pressing,{disabled}){
  return Math.max(pressing,disabled);
};

// js.react-native.helper-theme-default/defaultHovering [20]
export var defaultHovering = function (hovering,{focusing}){
  return Math.max(hovering,focusing);
};

// js.react-native.helper-theme-default/PressDefaultPipeline [24]
export var PressDefaultPipeline = {
  "fg":{
    "initial":"default",
    "stages":["highlighted","hovering","pressing","disabled"],
    "values":{"pressing":defaultPressing}
  },
  "bg":{
    "initial":"default",
    "stages":["highlighted","hovering","pressing","disabled"],
    "values":{"pressing":defaultPressing}
  }
};

// js.react-native.helper-theme-default/BinaryDefaultPipeline [38]
export var BinaryDefaultPipeline = {
  "fg":{
    "initial":"default",
    "stages":["active","highlighted","hovering","pressing","disabled"],
    "values":{"pressing":defaultPressing}
  },
  "bg":{
    "initial":"default",
    "stages":["active","highlighted","hovering","pressing","disabled"],
    "values":{"pressing":defaultPressing}
  }
};

// js.react-native.helper-theme-default/InputDefaultPipeline [54]
export var InputDefaultPipeline = {
  "fg":{
    "initial":"default",
    "stages":["highlighted","focusing","disabled"],
    "values":{"hovering":defaultHovering}
  },
  "bg":{
    "initial":"default",
    "stages":["highlighted","focusing","disabled"],
    "values":{"hovering":defaultHovering}
  }
};

// js.react-native.helper-theme-default/centerFn [72]
export var centerFn = function (n){
  return function (x){
    if(x < 50){
      return x + n;
    }
    else{
      return x - n;
    }
  };
};

// js.react-native.helper-theme-default/BaseBg [79]
export var BaseBg = {
  "bgNormal":"#f4f4f4",
  "bgHovered":centerFn(10),
  "bgPressed":"#333",
  "bgDisabled":"#ccc",
  "bgHighlighted":"yellow",
  "bgActive":"#555"
};

// js.react-native.helper-theme-default/BaseFg [87]
export var BaseFg = {
  "fgNormal":"#333",
  "fgHovered":centerFn(20),
  "fgPressed":"#ccc",
  "fgDisabled":"#888",
  "fgHighlighted":"black",
  "fgActive":"white"
};

// js.react-native.helper-theme-default/BaseTheme [95]
export var BaseTheme = Object.assign({},BaseBg,BaseFg);

// js.react-native.helper-theme-default/InputDefaultFgTheme [104]
export var InputDefaultFgTheme = Object.assign({},BaseFg,{"fgActive":"white","bgActive":"#333"});

// js.react-native.helper-theme-default/InputDefaultBgTheme [110]
export var InputDefaultBgTheme = Object.assign({},BaseBg,{"bgActive":"#333"});

// js.react-native.helper-theme-default/InputDefaultTheme [115]
export var InputDefaultTheme = Object.assign({},InputDefaultBgTheme,InputDefaultFgTheme);

// js.react-native.helper-theme-default/InputDefaultStyle [120]
export var InputDefaultStyle = {"padding":6,"margin":2,"borderRadius":2};

// js.react-native.helper-theme-default/ButtonDefaultTheme [129]
export var ButtonDefaultTheme = Object.assign({},BaseTheme);

// js.react-native.helper-theme-default/ButtonDefaultStyle [133]
export var ButtonDefaultStyle = {
  "padding":6,
  "fontWeight":"500",
  "fontSize":16,
  "paddingHorizontal":10
};

// js.react-native.helper-theme-default/CheckBoxDefaultTheme [143]
export var CheckBoxDefaultTheme = Object.assign({},BaseTheme);

// js.react-native.helper-theme-default/CheckBoxDefaultStyle [146]
export var CheckBoxDefaultStyle = {
  "padding":0,
  "borderRadius":2,
  "fontSize":16,
  "borderStyle":"solid",
  "borderWidth":2
};

// js.react-native.helper-theme-default/RadioBoxDefaultTheme [154]
export var RadioBoxDefaultTheme = Object.assign({},BaseTheme);

// js.react-native.helper-theme-default/ToggleSwitchDefaultTheme [158]
export var ToggleSwitchDefaultTheme = Object.assign({},BaseTheme);