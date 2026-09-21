import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import * as ui_tooltip from '../libs/js/react-native/ui-tooltip'

import ui_toggle_button from './ui-toggle-button'

import * as r from '../libs/js/react'

import * as n from '../libs/js/react-native'

import ui_group from './ui-group'

import ui_button from './ui-button'

import k from '../libs/xt/lang/base-lib'

import base_palette from './base-palette'

import base_theme from './base-theme'

import ui_static from './ui-static'

// melbourne.ui-text/Row [26] 
function Row({style,children,...rprops}){
  return (
    <ReactNative.View
      style={[
        {
            "flexDirection":"row",
            "alignItems":"center",
            "padding":3,
            "height":30
          },
        ...(Array.isArray(style) ? style : ((null == style) ? [] : [style]))
      ]}
      {...rprops}>{children}
    </ReactNative.View>);
}

// melbourne.ui-text/createHeaderFn [42] 
function createHeaderFn(font){
  return function ({design,variant,...rprops}){
    return (
      <ui_static.Text
        design={design}
        variant={Object.assign(
          {"font":font,"fg":{"key":"primary","tone":"flatten"}},
          variant
        )}
        {...rprops}>
      </ui_static.Text>);
  };
}

// melbourne.ui-text/createTextFn [60] 
function createTextFn(font,fontStyle,fontOverride){
  return function ({design,variant,style,...rprops}){
    return (
      <ui_static.Text
        design={design}
        variant={Object.assign(
          {"font":font,"fg":{"key":"neutral","tone":"flatten"}},
          fontOverride,
          variant
        )}
        style={[
          fontStyle,
          ...(Array.isArray(style) ? style : ((null == style) ? [] : [style]))
        ]}
        {...rprops}>
      </ui_static.Text>);
  };
}

// melbourne.ui-text/H1 [82] 
var H1 = createHeaderFn("h1");

// melbourne.ui-text/H2 [87] 
var H2 = createHeaderFn("h2");

// melbourne.ui-text/H3 [92] 
var H3 = createHeaderFn("h3");

// melbourne.ui-text/H4 [97] 
var H4 = createHeaderFn("h4");

// melbourne.ui-text/H5 [102] 
var H5 = createHeaderFn("h5");

// melbourne.ui-text/H6 [107] 
var H6 = createHeaderFn("h6");

// melbourne.ui-text/Bold [112] 
var Bold = createTextFn("bold");

// melbourne.ui-text/P [117] 
var P = createTextFn("p");

// melbourne.ui-text/Caption [122] 
var Caption = createTextFn("caption",Object.assign({"opacity":0.8,"fontSize":10,"fontWeight":"500","padding":15},ReactNative.Platform.select({
  "ios":{"fontFamily":"Courier"},
  "default":{"fontFamily":"monospace"}
})),{"bg":{"key":"background","mix":"primary","ratio":4}});

// melbourne.ui-text/ActivityIndicator [137] 
function ActivityIndicator({refLink,name,size,style,design,variant,...rprops}){
  let palette = base_palette.designPalette(design);
  let {fg} = Object.assign({"fg":{"key":"primary"}},variant);
  return (
    <ReactNative.ActivityIndicator
      ref={refLink}
      style={style}
      size={size}
      color={base_palette.getColor(palette,fg)}
      {...rprops}>
    </ReactNative.ActivityIndicator>);
}

// melbourne.ui-text/Icon [159] 
function Icon({refLink,name,size,style,design,variant,...rprops}){
  let palette = base_palette.designPalette(design);
  let {bg,fg} = Object.assign({"fg":{"key":"neutral"}},variant);
  return (
    <RNIcon
      ref={refLink}
      style={[
        {
            "backgroundColor":bg ? base_palette.getColor(palette,bg) : null,
            "color":base_palette.getColor(palette,fg)
          },
        ...(Array.isArray(style) ? style : ((null == style) ? [] : [style]))
      ]}
      size={size}
      name={name}
      {...rprops}>
    </RNIcon>);
}

// melbourne.ui-text/Avatar [183] 
function Avatar(props){
  let {
    design,
    variant,
    image,
    color,
    text,
    style,
    styleImage,
    styleText,
    size = 40,
    imageProps = {},
    textProps = {}
  } = props;
  if("string" == (typeof image)){
    image = JSON.parse(image);
  }
  let imageElem = k.not_emptyp(image) ? (
    <ReactNative.Image
      style={[
        {"height":size,"width":size,"borderRadius":size / 2},
        styleImage
      ]}
      source={image.url}
      {...imageProps}>
    </ReactNative.Image>) : (
    <ui_static.Text
      design={design}
      variant={Object.assign(
        {"fg":{"key":"background"}},
        k.get_in(design,["variant","text"])
      )}
      style={[
        ReactNative.Platform.select({"web":{"cursor":"default","userSelect":"none"}}),
        {"fontWeight":500},
        ...(Array.isArray(styleText) ? styleText : ((null == styleText) ? [] : [styleText]))
      ]}
      {...textProps}>{(text || "").toUpperCase()}
    </ui_static.Text>);
  let styleInput = [
    {
      "height":size,
      "width":size,
      "borderRadius":size / 2,
      "justifyContent":"center",
      "alignItems":"center"
    },
    ...(Array.isArray(style) ? style : ((null == style) ? [] : [style]))
  ];
  if(color){
    return (
      <ReactNative.View style={styleInput}>{imageElem}</ReactNative.View>);
  }
  else{
    return (
      <ui_static.Div
        design={design}
        variant={Object.assign(
          k.not_emptyp(image) ? {} : {"bg":{"key":"neutral","mix":"primary","ratio":2}},
          variant
        )}
        style={styleInput}>{imageElem}
      </ui_static.Div>);
  }
}

// melbourne.ui-text/activeButtonTheme [240] 
function activeButtonTheme(bg,fg,bgPressed,fgPressed){
  return {
    "fg":fg,
    "bg":bg,
    "disabled":{"bg":bg,"fg":{"key":bg.key,"mix":fg.key,"ratio":2}},
    "hovered":{"bg":{"raw":1},"fg":{"raw":1}},
    "pressed":{"bg":bgPressed || fg,"fg":fgPressed || bg}
  };
}

// melbourne.ui-text/minorButtonTheme [256] 
function minorButtonTheme(bg,fg){
  return {
    "fg":fg,
    "bg":bg,
    "disabled":{"bg":bg,"fg":{"key":bg.key,"mix":fg.key,"ratio":3}},
    "hovered":{"bg":{"raw":1},"fg":{"raw":1}},
    "pressed":{"bg":{"raw":1},"fg":{"key":fg.key,"mix":bg.key,"ratio":2}}
  };
}

// melbourne.ui-text/minorToggleTheme [275] 
function minorToggleTheme(bg,fg,fgActive){
  return {
    "fg":fg,
    "bg":bg,
    "disabled":{"bg":bg,"fg":{"key":bg.key,"mix":fg.key,"ratio":3}},
    "hovered":{"bg":{"raw":1},"fg":{"raw":1}},
    "pressed":{"bg":{"raw":1},"fg":{"raw":1}},
    "active":{"fg":fgActive || fg,"bg":bg,"outlined":true}
  };
}

// melbourne.ui-text/createMinorFn [294] 
function createMinorFn(component,variantFn,themeSelected,styleOverride,propsOverride){
  return function ({design,variant,style,selected,text,icon,...rprops}){
    text = (icon ? React.createElement(RNIcon,Object.assign({"key":"icon"},icon)) : text);
    let mprops = Object.assign({
      "design":design,
      "variant":Object.assign({"font":"text"},variantFn(),variant),
      "text":text,
      "style":[
            {
                "padding":5,
                "marginTop":2,
                "marginHorizontal":5,
                "fontSize":12,
                "borderRadius":2,
                "borderStyle":"solid",
                "borderWidth":1
              },
            styleOverride,
            ...(Array.isArray(style) ? style : ((null == style) ? [] : [style]))
          ],
      "transformations":{"bg":null},
      "outlined":themeSelected || selected,
      "selected":selected
    },propsOverride);
    return React.createElement(component,Object.assign(mprops,rprops));
  };
}

// melbourne.ui-text/ButtonMinor [333] 
var ButtonMinor = createMinorFn(ui_button.Button,function (){
  return minorButtonTheme({"key":"background"},{"key":"primary"});
},true);

// melbourne.ui-text/ToggleMinor [343] 
var ToggleMinor = createMinorFn(ui_toggle_button.ToggleButton,function (){
  return minorToggleTheme({"key":"background"},{"key":"primary"},{"key":"primary"});
});

// melbourne.ui-text/ToggleTabMinor [353] 
var ToggleTabMinor = createMinorFn(ui_toggle_button.ToggleButton,function (){
  return minorToggleTheme({"key":"background"},{"key":"neutral"},{"key":"primary"});
});

// melbourne.ui-text/TabsMinor [363] 
var TabsMinor = createMinorFn(ui_group.Tabs,function (){
  return minorToggleTheme({"key":"background"},{"key":"neutral"},{"key":"primary"});
},true,{},{"styleContainer":{"margin":0,"marginHorizontal":2}});

// melbourne.ui-text/EnumMinor [377] 
var EnumMinor = createMinorFn(ui_group.EnumMulti,function (){
  return minorToggleTheme({"key":"background"},{"key":"neutral"},{"key":"primary"});
},true,{},{"styleContainer":{"margin":0,"marginHorizontal":2}});

// melbourne.ui-text/accentButtonTheme [396] 
function accentButtonTheme(bg,fg){
  return {
    "fg":fg,
    "bg":bg,
    "hovered":{"bg":{"raw":1},"fg":{"raw":1}},
    "pressed":{
        "bg":{"key":fg.key,"mix":bg.key,"ratio":4},
        "fg":{"key":bg.key,"mix":fg.key,"ratio":4}
      },
    "disabled":{
        "bg":{"key":fg.key,"mix":bg.key,"ratio":4},
        "fg":{"key":bg.key,"mix":fg.key,"ratio":7}
      }
  };
}

// melbourne.ui-text/accentToggleTheme [418] 
function accentToggleTheme(bg,fg,bgActive,fgActive){
  return {
    "fg":fg,
    "bg":bg,
    "hovered":{"bg":{"raw":1},"fg":{"raw":1}},
    "pressed":{"bg":{"raw":1},"fg":{"raw":1}},
    "disabled":{"bg":bg,"fg":{"key":bg.key,"mix":fg.key,"ratio":2}},
    "active":{"fg":fgActive || bg,"bg":bgActive || fg}
  };
}

// melbourne.ui-text/createAccentFn [436] 
function createAccentFn(component,variantFn,themeSelected,styleOverride,propsOverride){
  return function ({design,variant,style,selected,text,icon,...rprops}){
    text = (icon ? React.createElement(RNIcon,Object.assign({"key":"icon"},icon)) : text);
    let mprops = {
      "design":design,
      "variant":Object.assign({"font":"text"},variantFn(),variant),
      "text":text,
      "style":[
            {
                "padding":5,
                "marginTop":2,
                "marginHorizontal":5,
                "fontSize":12,
                "borderRadius":2,
                "borderStyle":"solid",
                "borderWidth":1
              },
            styleOverride,
            ...(Array.isArray(style) ? style : ((null == style) ? [] : [style]))
          ],
      "transformations":{"bg":null},
      "outlined":themeSelected || selected,
      "selected":selected
    };
    return React.createElement(component,Object.assign(mprops,propsOverride,rprops));
  };
}

// melbourne.ui-text/ButtonAccent [475] 
var ButtonAccent = createAccentFn(ui_button.Button,function (){
  return accentButtonTheme({"key":"primary"},{"key":"background","tone":"augment"});
});

// melbourne.ui-text/ToggleAccent [486] 
var ToggleAccent = createAccentFn(ui_toggle_button.ToggleButton,function (){
  return accentToggleTheme(
    {"key":"primary"},
    {"key":"background"},
    {"key":"background"},
    {"key":"primary"}
  );
});

// melbourne.ui-text/ToggleTabAccent [498] 
var ToggleTabAccent = createAccentFn(ui_toggle_button.ToggleButton,function (){
  return accentToggleTheme(
    {"key":"background"},
    {"key":"primary"},
    {"key":"primary"},
    {"key":"background"}
  );
});

// melbourne.ui-text/TabsAccent [510] 
var TabsAccent = createAccentFn(ui_group.Tabs,function (){
  return accentToggleTheme(
    {"key":"background"},
    {"key":"primary"},
    {"key":"primary"},
    {"key":"background"}
  );
},null,{},{"styleContainer":{"margin":0,"marginHorizontal":2}});

// melbourne.ui-text/TabsAccentNeutral [526] 
var TabsAccentNeutral = createAccentFn(ui_group.Tabs,function (){
  return accentToggleTheme(
    {"key":"background"},
    {"key":"neutral"},
    {"key":"neutral"},
    {"key":"background"}
  );
},null,{},{"styleContainer":{"margin":0,"marginHorizontal":2}});

// melbourne.ui-text/EnumAccent [542] 
var EnumAccent = createAccentFn(ui_group.EnumMulti,function (){
  return accentToggleTheme(
    {"key":"background"},
    {"key":"primary"},
    {"key":"primary"},
    {"key":"background"}
  );
},null,{},{"styleContainer":{"margin":0,"marginHorizontal":2}});

// melbourne.ui-text/ButtonTooltipOverlay [563] 
function ButtonTooltipOverlay(props){
  let {
    hostRef,
    visible,
    setVisible,
    onPress,
    design,
    variant,
    tooltip = {},
    mainComponent
  } = props;
  let palette = base_palette.designPalette(design);
  let {arrow = {},...rtooltip} = tooltip;
  let [fgColor,bgColor] = base_theme.themeBase(palette,Object.assign(
    {"fg":{"key":"neutral"},"bg":{"key":"primary"}},
    arrow.variant
  ));
  return React.createElement(ui_tooltip.Tooltip,Object.assign({setVisible,visible,"hostRef":hostRef,"position":"bottom","alignment":"center","arrow":Object.assign({
      "placement":"host",
      "baseHeight":5,
      "baselength":30,
      "color":bgColor,
      "backdrop":true
    },arrow)},rtooltip),React.createElement(mainComponent,props));
}

// melbourne.ui-text/ButtonTooltip [601] 
function ButtonTooltip({
  component = "minor",
  design,
  variant,
  text,
  icon,
  tooltip,
  onPress,
  onChange,
  style,
  ...rprops
}){
  let [visible,setVisible] = React.useState(function (){
    return false;
  });
  let hostRef = React.useRef();
  let ButtonComponent = {"minor":ButtonMinor,"accent":ButtonAccent}[component] || component;
  React.useEffect(function (){
    if(onChange){
      onChange(visible);
    }
  },[visible]);
  return (
    <>
      {React.createElement(ButtonComponent,{
        "refLink":hostRef,
        design,
        variant,
        icon,
        text,
        style,
        "selected":visible,
        "onPress":function (){
          return setVisible(!visible);
        }
      })}
      {React.createElement(ButtonTooltipOverlay,Object.assign({hostRef,onPress,setVisible,tooltip,visible,"design":design,"variant":Object.assign(
          {},
          k.get_in(design,["variant","tooltip"]),
          k.get_in(tooltip,["overlay","variant"])
        )},rprops))}
    </>);
}

// melbourne.ui-text/ConfirmTooltip [649] 
function ConfirmTooltip(props){
  let {confirmText,...rprops} = props;
  let mainComponent = React.useCallback(function (props){
    let {design,onPress,setVisible,variant} = props;
    return (
      <ButtonAccent
        style={{"marginHorizontal":2,"marginVertical":0}}
        text={confirmText || "CONFIRM"}
        onPress={function (){
          new Promise(function (resolve,reject){
            try{
              resolve(            (function (){
                            return onPress();
                          })());
            }
            catch(e){
              reject(e);
            }
          }).then(function (){
            return setVisible(false);
          });
        }}
        design={design}
        variant={variant}>
      </ButtonAccent>);
  },[]);
  return React.createElement(ButtonTooltip,Object.assign({mainComponent},props));
}

// melbourne.ui-text/TextAltImpl [675] 
function TextAltImpl({design,init = false,disabled,value,children}){
  let [showText,setShowText] = React.useState(init);
  return (
    <>
      {!disabled ? React.createElement(ReactNative.View,{
        "style":{"position":"absolute","right":2,"top":2,"zIndex":100}
      },(
        <ButtonAccent
          text={showText ? "D" : "T"}
          onPress={function (){
            return setShowText(!showText);
          }}
          design={design}>
        </ButtonAccent>)) : null}
      {(!disabled && showText) ? React.createElement(ui_static.ScrollView,{design},(
        <ui_static.Text design={design}>{n.format_entry(value)}</ui_static.Text>)) : React.createElement(ReactNative.View,{"style":{"flex":1}},children)}
    </>);
}

// melbourne.ui-text/TextAlt [706] 
function TextAlt({design,init,disabled,value,children}){
  let {Consumer} = globalThis["js_react_native$$Global"];
  return (
    <Consumer>
      {function ({isDev}){
        return (
          <TextAltImpl
            disabled={disabled || !isDev}
            design={design}
            init={init}
            value={value}
            children={children}>
          </TextAltImpl>);
      }}
    </Consumer>);
}

var MODULE = {
  "Row":Row,
  "createHeaderFn":createHeaderFn,
  "createTextFn":createTextFn,
  "H1":H1,
  "H2":H2,
  "H3":H3,
  "H4":H4,
  "H5":H5,
  "H6":H6,
  "Bold":Bold,
  "P":P,
  "Caption":Caption,
  "ActivityIndicator":ActivityIndicator,
  "Icon":Icon,
  "Avatar":Avatar,
  "activeButtonTheme":activeButtonTheme,
  "minorButtonTheme":minorButtonTheme,
  "minorToggleTheme":minorToggleTheme,
  "createMinorFn":createMinorFn,
  "ButtonMinor":ButtonMinor,
  "ToggleMinor":ToggleMinor,
  "ToggleTabMinor":ToggleTabMinor,
  "TabsMinor":TabsMinor,
  "EnumMinor":EnumMinor,
  "accentButtonTheme":accentButtonTheme,
  "accentToggleTheme":accentToggleTheme,
  "createAccentFn":createAccentFn,
  "ButtonAccent":ButtonAccent,
  "ToggleAccent":ToggleAccent,
  "ToggleTabAccent":ToggleTabAccent,
  "TabsAccent":TabsAccent,
  "TabsAccentNeutral":TabsAccentNeutral,
  "EnumAccent":EnumAccent,
  "ButtonTooltipOverlay":ButtonTooltipOverlay,
  "ButtonTooltip":ButtonTooltip,
  "ConfirmTooltip":ConfirmTooltip,
  "TextAltImpl":TextAltImpl,
  "TextAlt":TextAlt
};

export default MODULE