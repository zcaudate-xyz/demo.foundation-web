import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import base_font from './base-font'

import ui_text from './ui-text'

import slim_error from './slim-error'

import * as r from '../libs/js/react'

import * as n from '../libs/js/react-native'

import * as ext_form from '../libs/js/react/ext-form'

import ui_button from './ui-button'

import k from '../libs/xt/lang/base-lib'

import base_palette from './base-palette'

// melbourne.slim-submit/SubmitButton [25] 
function SubmitButton({
  design,
  variant,
  component,
  disabled,
  reset,
  resetText,
  waiting,
  waitingText,
  text,
  style,
  ...rprops
}){
  let {mainBackground,mainPrimary} = base_palette.designPalette(design);
  return React.createElement(component || ui_text.ButtonMinor,{
    design,
    variant,
    "disabled":disabled || waiting,
    "style":[
      {"textAlign":"center","minWidth":100},
      ...(Array.isArray(style) ? style : ((null == style) ? [] : [style]))
    ],
    "text":reset ? (resetText || "BACK") : (waiting ? (waitingText || (
      <ReactNative.ActivityIndicator key="busy" color={mainPrimary} size={12}></ReactNative.ActivityIndicator>)) : (text || "SUBMIT")),
    ...rprops
  });
}

// melbourne.slim-submit/SubmitLine [61] 
function SubmitLine({
  design,
  mini,
  variant,
  form,
  styleContainer,
  styleSubmit,
  submitText,
  errorProps = {},
  result,
  errored,
  onAction,
  onActionPress,
  onActionReset,
  onActionCheck = function (){
  return true;
},
  children,
  disabled,
  ...rprops
}){
  let {row} = errorProps;
  let errorElem = errored ? (
    <slim_error.ErrorInfo
      design={design}
      style={(!row || mini) ? {} : {"flex":1}}
      result={result}
      onClose={onActionReset}
      {...errorProps}>
    </slim_error.ErrorInfo>) : null;
  globalThis["CHECK"] = onActionCheck;
  return (
    <ReactNative.View style={{"marginTop":3}}>
      {(!row || mini) ? errorElem : null}
      <n.Row
        style={[
          mini ? {"flexDirection":"column"} : {"flexDirection":"row-reverse"},
          ...(Array.isArray(styleContainer) ? styleContainer : ((null == styleContainer) ? [] : [styleContainer]))
        ]}>
        {!errored ? (
          <SubmitButton
            disabled={disabled || !onActionCheck()}
            reset={errored}
            style={styleSubmit}
            onPress={onActionPress}
            text={submitText}
            design={design}
            variant={variant}
            {...rprops}>
          </SubmitButton>) : null}
        {children}
        {(errored && (row && !mini)) ? (
          <>
            <ReactNative.View style={{"width":10}}></ReactNative.View>
            {errorElem}
          </>) : null}
      </n.Row>
    </ReactNative.View>);
}

// melbourne.slim-submit/SubmitLineHelpers [123] 
function SubmitLineHelpers({
  design,
  errored,
  clearText,
  clearStyle,
  onClear,
  clearShow = false,
  clearProps = {},
  cancelText,
  cancelStyle,
  onCancel,
  cancelShow = false,
  cancelProps = {}
}){
  return (
    <>
      {(clearShow && !errored) ? (
        <>
          <ReactNative.View style={{"width":10}}></ReactNative.View>
          <ui_text.ButtonMinor
            variant={Object.assign(
              {"bg":{"key":"background"},"fg":{"key":"neutral"}},
              k.get_in(design,["variant","clear"])
            )}
            style={[
              base_font.fontH6,
              ...(Array.isArray(clearStyle) ? clearStyle : ((null == clearStyle) ? [] : [clearStyle]))
            ]}
            text={clearText || "Clear"}
            onPress={onClear}
            design={design}
            {...clearProps}>
          </ui_text.ButtonMinor>
        </>) : null}
      {(cancelShow && !errored) ? (
        <>
          <ReactNative.View style={{"width":10}}></ReactNative.View>
          <ui_text.ButtonAccent
            variant={k.get_in(design,["variant","cancel"])}
            style={[
              base_font.fontH6,
              ...(Array.isArray(cancelStyle) ? cancelStyle : ((null == cancelStyle) ? [] : [cancelStyle]))
            ]}
            text={cancelText || "Cancel"}
            onPress={onCancel}
            design={design}
            {...cancelProps}>
          </ui_text.ButtonAccent>
        </>) : null}
    </>);
}

// melbourne.slim-submit/SubmitLineActions [168] 
function SubmitLineActions({
  design,
  mini,
  variant,
  form,
  errored,
  onActionReset,
  clearText,
  clearStyle,
  onClear,
  clearShow,
  clearProps,
  cancelText,
  cancelStyle,
  onCancel,
  cancelShow,
  cancelProps,
  children,
  ...rprops
}){
  return (
    <SubmitLine
      design={design}
      variant={variant}
      errored={errored}
      onActionReset={onActionReset}
      {...rprops}>
      {!mini ? (
        <SubmitLineHelpers
          cancelStyle={cancelStyle}
          cancelShow={cancelShow}
          clearProps={clearProps}
          cancelProps={cancelProps}
          clearStyle={clearStyle}
          clearText={clearText}
          onCancel={onCancel}
          onClear={onClear || onActionReset}
          cancelText={cancelText}
          clearShow={clearShow}
          errored={errored}
          design={design}>
        </SubmitLineHelpers>) : null}
      {children}
    </SubmitLine>);
}

// melbourne.slim-submit/useSubmitField [214] 
function useSubmitField({
  form,
  meta,
  field,
  explicit,
  keep = true,
  onCheck,
  onResult,
  onSubmit,
  onError,
  onSuccess,
  ...rprops
}){
  let {errored,isMounted,onAction,result,setResult,setWaiting,waiting} = r.useSubmitResult({onResult,onSubmit,onError,onSuccess,...rprops});
  let {onActionCheck,onActionReset} = ext_form.useSubmitField({explicit,field,form,isMounted,keep,onCheck,setResult,"meta":Object.assign({
      "slim/type":"submit_field",
      "fn/type":"submit",
      "validation/changes":true
    },meta)});
  let onActionPress = errored ? onActionReset : onAction;
  return {errored,onAction,onActionCheck,onActionPress,onActionReset,result,setResult,setWaiting,waiting};
}

// melbourne.slim-submit/useSubmitForm [263] 
function useSubmitForm({
  form,
  meta,
  explicit,
  keep = true,
  onCheck,
  onResult,
  onSubmit,
  onSuccess,
  onError,
  ...rprops
}){
  let {errored,isMounted,onAction,result,setResult,setWaiting,waiting} = r.useSubmitResult({onResult,onSubmit,onError,onSuccess,...rprops});
  let {onActionCheck,onActionReset} = ext_form.useSubmitForm(
    {explicit,form,isMounted,keep,onCheck,setResult,"meta":Object.assign({"slim/type":"submit_form","fn/type":"submit"},meta)}
  );
  let onActionPress = errored ? onActionReset : (onActionCheck() ? onAction : null);
  return {errored,onAction,onActionCheck,onActionPress,onActionReset,result,setResult,setWaiting,waiting};
}

var MODULE = {
  "SubmitButton":SubmitButton,
  "SubmitLine":SubmitLine,
  "SubmitLineHelpers":SubmitLineHelpers,
  "SubmitLineActions":SubmitLineActions,
  "useSubmitField":useSubmitField,
  "useSubmitForm":useSubmitForm
};

export default MODULE