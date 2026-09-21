import * as ReactNative from 'react-native'

import * as n from '../libs/js/react-native'

import * as ui_util from '../libs/js/react-native/ui-util'

import ui_static from './ui-static'

import ui_button from './ui-button'

import ui_text from './ui-text'

import k from '../libs/xt/lang/base-lib'

// melbourne.ui-section/styleSection [26] 
var styleSection = {
  "borderRadius":3,
  "marginHorizontal":5,
  "marginVertical":5,
  "paddingVertical":5,
  "paddingHorizontal":15,
  "minWidth":260,
  "maxWidth":500,
  "justifyItems":"center"
};

// melbourne.ui-section/SectionBase [36] 
function SectionBase({design,variant,mini,style,styleTitle,title,action,children}){
  let Text = mini ? ui_text.H4 : ui_text.H3;
  return (
    <ui_static.Div
      design={design}
      variant={Object.assign({},variant)}
      style={[
        styleSection,
        ...(Array.isArray(style) ? style : ((null == style) ? [] : [style])),
        mini ? {"padding":4} : null
      ]}>
      <n.Row
        style={{
          "marginBottom":5,
          "alignItems":"center",
          "alignContent":"center"
        }}>
        <Text
          style={[
            {"fontFamily":"impact"},
            ...(Array.isArray(styleTitle) ? styleTitle : ((null == styleTitle) ? [] : [styleTitle]))
          ]}
          variant={{"fg":{"key":"neutral"}}}
          children={title}
          design={design}>
        </Text>
        <ReactNative.View style={{"flex":1}}></ReactNative.View>
        {action}
      </n.Row>
      {children}
    </ui_static.Div>);
}

// melbourne.ui-section/SectionSeparator [76] 
function SectionSeparator({design,variant}){
  return (
    <ui_static.Separator
      design={design}
      variant={Object.assign(
        {"fg":{"key":"background","mix":"neutral","ratio":1}},
        variant
      )}
      style={[{"marginVertical":3}]}>
    </ui_static.Separator>);
}

// melbourne.ui-section/Section [91] 
function Section({design,variant,mini,title,action,children}){
  return (
    <SectionBase
      variant={variant}
      mini={mini}
      title={title}
      design={design}
      action={action}>
      {children}
      <ReactNative.View style={{"height":10}}></ReactNative.View>
      <SectionSeparator design={design}></SectionSeparator>
    </SectionBase>);
}

// melbourne.ui-section/SectionFold [107] 
function SectionFold({design,variant,mini,title,action,children,visible = false}){
  return (
    <SectionBase
      variant={variant}
      mini={mini}
      title={title}
      design={design}
      action={action}>
      <ui_util.Fold visible={visible}>
        <ReactNative.View style={mini ? {"paddingVertical":5} : null}>{children}</ReactNative.View>
      </ui_util.Fold>
      <ReactNative.View style={{"height":10}}></ReactNative.View>
      <SectionSeparator design={design}></SectionSeparator>
    </SectionBase>);
}

// melbourne.ui-section/CardBoundary [130] 
function CardBoundary({children,style}){
  return (
    <ReactNative.View
      style={[
        {"marginHorizontal":10,"marginBottom":0,"maxWidth":500},
        style
      ]}>{children}
    </ReactNative.View>);
}

// melbourne.ui-section/EmptyButton [143] 
function EmptyButton({design,onPress,textButton,textHeader}){
  return (
    <>
      {k.not_emptyp(textButton) ? (
        <ui_text.ButtonMinor
          text={textButton}
          style={{"textAlign":"center","padding":10,"paddingHorizontal":50}}
          onPress={onPress}
          design={design}>
        </ui_text.ButtonMinor>) : null}
    </>);
}

var MODULE = {
  "styleSection":styleSection,
  "SectionBase":SectionBase,
  "SectionSeparator":SectionSeparator,
  "Section":Section,
  "SectionFold":SectionFold,
  "CardBoundary":CardBoundary,
  "EmptyButton":EmptyButton
};

export default MODULE