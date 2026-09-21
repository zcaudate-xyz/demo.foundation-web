import React from 'react'

import * as ReactNative from 'react-native'

import ui_toggle_switch from './ui-toggle-switch'

import base_font from './base-font'

import ui_checkbox from './ui-checkbox'

import ui_text from './ui-text'

import ui_toggle_button from './ui-toggle-button'

import * as r from '../libs/js/react'

import * as event_form from '../libs/xt/event/base-form'

import addon_validation from './addon-validation'

import ui_input_xl from './ui-input-xl'

import ui_input from './ui-input'

import * as n from '../libs/js/react-native'

import ui_group from './ui-group'

import * as ext_form from '../libs/js/react/ext-form'

import k from '../libs/xt/lang/base-lib'

import base_palette from './base-palette'

import ui_color_input from './ui-color-input'

import ui_static from './ui-static'

import ui_chip_input from './ui-chip-input'

// melbourne.slim-common/StyleButtonXL [34] 
var StyleButtonXL = {"fontSize":15,"paddingVertical":12,"paddingHorizontal":20};

// melbourne.slim-common/FormEnclosed [39] 
function FormEnclosed({
  design,
  variant,
  mini,
  label,
  labelHide,
  labelNone,
  styleLabel,
  children,
  minWidth = 120
}){
  let labelElem = !labelHide ? (
    <ReactNative.View
      key="label"
      style={mini ? {"paddingLeft":5,"paddingTop":10} : {"paddingLeft":5,"paddingTop":8}}>
      <ui_static.Text
        variant={variant || {"fg":{"key":"primary","mix":"neutral","ratio":5}}}
        style={[
          mini ? {} : {"paddingBottom":0,"width":110},
          ...(Array.isArray(styleLabel) ? styleLabel : ((null == styleLabel) ? [] : [styleLabel]))
        ]}
        design={design}>{label}
      </ui_static.Text>
    </ReactNative.View>) : null;
  let formElem = (
    <ReactNative.View key="form" style={{"minWidth":minWidth,"flex":1}}>{children}</ReactNative.View>);
  return labelNone ? formElem : (mini ? (
    <ReactNative.View style={{"flex":1,"margin":2}}>{labelElem}{formElem}</ReactNative.View>) : (
    <n.Row style={{"margin":2,"flex":1,"flexWrap":"wrap"}}>{labelElem}{formElem}</n.Row>));
}

// melbourne.slim-common/FormReadOnly [87] 
function FormReadOnly(props){
  let {
    design,
    mini,
    variant,
    meta,
    label,
    labelHide,
    labelNone,
    styleLabel,
    entry,
    format,
    template,
    fieldProps,
    minWidth
  } = props;
  let value = k.template_entry(entry,template,props);
  if(value && format){
    value = format(value);
  }
  let {style,...rprops} = fieldProps || {};
  return (
    <FormEnclosed
      variant={k.get_in(design,["variant","label"])}
      styleLabel={styleLabel}
      labelHide={labelHide}
      minWidth={minWidth}
      mini={mini}
      label={label}
      design={design}
      labelNone={labelNone}>
      <ReactNative.View style={{"margin":5}}>
        {React.createElement(ui_static.Text,Object.assign(
          {design,variant},
          {"style":[{"fontSize":13},...k.arrayify(style)]},
          rprops
        ),(value || " - ").toString())}
      </ReactNative.View>
    </FormEnclosed>);
}

// melbourne.slim-common/FormInput [125] 
function FormInput({
  design,
  mini,
  variant,
  form,
  meta,
  label,
  labelHide,
  labelNone,
  styleLabel,
  field,
  fieldProps,
  minWidth,
  hideValidation
}){
  let {result,value} = ext_form.listenField(
    form,
    field,
    Object.assign({"slim/type":"input","fn/type":"field"},meta)
  );
  return (
    <FormEnclosed
      variant={k.get_in(design,["variant","label"])}
      styleLabel={styleLabel}
      labelHide={labelHide}
      minWidth={minWidth}
      mini={mini}
      label={label}
      design={design}
      labelNone={labelNone}>
      <ui_input.Input
        onChangeText={function (v){
          event_form.set_field(form,field,v);
          event_form.validate_field(form,field);
        }}
        value={((null == value) ? "" : value).toString()}
        indicatorParams={{"focusing":{"default":{"duration":100}}}}
        variant={variant}
        highlighted={result["status"] == "errored"}
        addons={[
          !hideValidation ? addon_validation.addonValidation({
          result,
          design,
          "style":{"position":"absolute","right":0,"top":-5}
        }) : null
        ]}
        outlined={false}
        onFocus={function (){
          event_form.validate_field(form,field);
        }}
        design={design}
        {...fieldProps}>
      </ui_input.Input>
    </FormEnclosed>);
}

// melbourne.slim-common/FormInputXL [172] 
function FormInputXL({
  design,
  variant,
  mini,
  form,
  meta,
  field,
  fieldProps,
  minWidth,
  hideValidation
}){
  let {result,value} = ext_form.listenField(
    form,
    field,
    Object.assign({"slim/type":"input_xl","fn/type":"field"},meta)
  );
  let {placeholder} = fieldProps;
  let validation = !hideValidation ? addon_validation.addonValidation({
    result,
    design,
    "style":{"position":"absolute","right":2,"top":-2}
  }) : null;
  return (
    <ui_input_xl.InputXL
      onChangeText={function (v){
        event_form.set_field(form,field,v);
        event_form.validate_field(form,field);
      }}
      value={(value || "").toString()}
      placeholder={placeholder}
      variant={variant}
      highlighted={result["status"] == "errored"}
      addons={[validation]}
      outlined={false}
      onFocus={function (){
        event_form.validate_field(form,field);
      }}
      design={design}
      {...fieldProps}>
    </ui_input_xl.InputXL>);
}

// melbourne.slim-common/FormTextArea [225] 
function FormTextArea({
  design,
  variant,
  mini,
  form,
  meta,
  label,
  styleLabel,
  labelHide,
  labelNone,
  field,
  fieldProps,
  minWidth,
  styleContainer,
  hideValidation
}){
  return (
    <FormInput
      form={form}
      fieldProps={Object.assign(
        {"multiline":true,"style":{"height":60,"flex":null}},
        fieldProps
      )}
      meta={Object.assign({"slim/type":"textarea"},meta)}
      styleLabel={styleLabel}
      labelHide={labelHide}
      variant={variant}
      minWidth={minWidth}
      styleContainer={[
        {"flexDirection":"column"},
        ...(Array.isArray(styleContainer) ? styleContainer : ((null == styleContainer) ? [] : [styleContainer]))
      ]}
      field={field}
      mini={mini}
      hideValidation={hideValidation}
      label={label}
      design={design}
      labelNone={labelNone}>
    </FormInput>);
}

// melbourne.slim-common/FormCheckBox [262] 
function FormCheckBox({
  design,
  variant,
  mini,
  form,
  meta,
  style,
  styleLabel,
  stylePadding,
  label,
  field,
  fieldProps,
  ...rprops
}){
  let {result,value} = ext_form.listenField(
    form,
    field,
    Object.assign({"slim/type":"checkbox","fn/type":"field"},meta)
  );
  return (
    <n.Row>
      <ReactNative.View
        style={[
          {"width":5},
          ...(Array.isArray(stylePadding) ? stylePadding : ((null == stylePadding) ? [] : [stylePadding]))
        ]}>
      </ReactNative.View>
      <n.Row style={{"paddingVertical":3}}>
        <ui_checkbox.CheckBox
          indicatorParams={{"active":{"default":{"duration":100}}}}
          selected={value}
          style={style}
          onPress={function (){
            event_form.toggle_field(form,field);
            event_form.validate_field(form,field);
          }}
          design={design}
          variant={variant}
          {...fieldProps}>
        </ui_checkbox.CheckBox>
        <ReactNative.View style={{"width":15}}></ReactNative.View>
        <ui_static.Text
          variant={k.get_in(design,["variant","label"])}
          style={[
            base_font.fontH6,
            {"padding":3},
            ...(Array.isArray(styleLabel) ? styleLabel : ((null == styleLabel) ? [] : [styleLabel]))
          ]}
          design={design}>{label}
        </ui_static.Text>
      </n.Row>
    </n.Row>);
}

// melbourne.slim-common/FormToggleButton [306] 
function FormToggleButton({
  design,
  variant,
  mini,
  form,
  meta,
  label,
  styleLabel,
  labelHide,
  labelNone,
  field,
  fieldProps,
  text,
  minWidth
}){
  let {result,value} = ext_form.listenField(
    form,
    field,
    Object.assign({"slim/type":"toggle_button","fn/type":"field"},meta)
  );
  return (
    <FormEnclosed
      variant={k.get_in(design,["variant","label"])}
      styleLabel={styleLabel}
      labelHide={labelHide}
      minWidth={minWidth}
      mini={mini}
      label={label}
      design={design}
      labelNone={labelNone}>
      <n.Row>
        <ui_toggle_button.ToggleButton
          selected={value}
          onPress={function (){
            event_form.toggle_field(form,field);
            event_form.validate_field(form,field);
          }}
          style={{"marginTop":5,"marginHorizontal":5,"padding":5}}
          design={design}
          variant={variant}
          text={text}
          {...fieldProps}>
        </ui_toggle_button.ToggleButton>
      </n.Row>
    </FormEnclosed>);
}

// melbourne.slim-common/FormToggleSwitch [347] 
function FormToggleSwitch({
  design,
  variant,
  mini,
  form,
  meta,
  label,
  styleLabel,
  labelHide,
  labelNone,
  field,
  fieldProps,
  text,
  minWidth
}){
  let {result,value} = ext_form.listenField(
    form,
    field,
    Object.assign({"slim/type":"toggle_switch","fn/type":"field"},meta)
  );
  return (
    <FormEnclosed
      variant={k.get_in(design,["variant","label"])}
      styleLabel={styleLabel}
      labelHide={labelHide}
      minWidth={minWidth}
      mini={mini}
      label={label}
      design={design}
      labelNone={labelNone}>
      <n.Row style={{"marginVertical":7}}>
        <ui_toggle_switch.ToggleSwitch
          selected={value}
          onPress={function (){
            event_form.toggle_field(form,field);
            event_form.validate_field(form,field);
          }}
          style={{"marginTop":5,"marginHorizontal":5,"padding":10}}
          design={design}
          variant={variant}
          {...fieldProps}>
        </ui_toggle_switch.ToggleSwitch>
      </n.Row>
    </FormEnclosed>);
}

// melbourne.slim-common/FormEnumSingle [388] 
function FormEnumSingle({
  design,
  variant,
  mini,
  form,
  meta,
  label,
  styleLabel,
  labelHide,
  labelNone,
  field,
  fieldProps,
  minWidth,
  options = []
}){
  let {result,value} = ext_form.listenField(
    form,
    field,
    Object.assign({"slim/type":"enum_single","fn/type":"field"},meta)
  );
  let {mainNeutral} = base_palette.designPalette(design);
  return (
    <FormEnclosed
      variant={k.get_in(design,["variant","label"])}
      styleLabel={styleLabel}
      labelHide={labelHide}
      minWidth={minWidth}
      mini={mini}
      label={label}
      design={design}
      labelNone={labelNone}>
      <ui_text.TabsMinor
        styleContainer={{"left":-10}}
        style={{"marginHorizontal":5,"padding":3}}
        data={options}
        value={value}
        setValue={function (value){
          event_form.set_field(form,field,value);
          event_form.validate_field(form,field);
        }}
        design={design}
        variant={variant}
        {...fieldProps}>
      </ui_text.TabsMinor>
    </FormEnclosed>);
}

// melbourne.slim-common/FormEnumMulti [430] 
function FormEnumMulti({
  design,
  variant,
  mini,
  form,
  meta,
  label,
  styleLabel,
  labelHide,
  labelNone,
  field,
  fieldProps,
  minWidth,
  options = []
}){
  let {result,value} = ext_form.listenField(
    form,
    field,
    Object.assign({"slim/type":"enum_multi","fn/type":"field"},meta)
  );
  let {mainNeutral} = base_palette.designPalette(design);
  return (
    <FormEnclosed
      variant={k.get_in(design,["variant","label"])}
      styleLabel={styleLabel}
      labelHide={labelHide}
      minWidth={minWidth}
      mini={mini}
      label={label}
      design={design}
      labelNone={labelNone}>
      <ui_text.EnumMinor
        style={{}}
        data={options}
        values={value}
        setValues={function (values){
          event_form.set_field(form,field,values);
          event_form.validate_field(form,field);
        }}
        design={design}
        variant={variant}
        {...fieldProps}>
      </ui_text.EnumMinor>
    </FormEnclosed>);
}

// melbourne.slim-common/FormColorInput [469] 
function FormColorInput({
  design,
  variant,
  mini,
  form,
  meta,
  label,
  styleLabel,
  labelHide,
  labelNone,
  field,
  fieldProps,
  minWidth,
  options = []
}){
  let {result,value} = ext_form.listenField(
    form,
    field,
    Object.assign({"slim/type":"color_input","fn/type":"field"},meta)
  );
  let {mainNeutral} = base_palette.designPalette(design);
  return (
    <FormEnclosed
      variant={k.get_in(design,["variant","label"])}
      styleLabel={styleLabel}
      labelHide={labelHide}
      minWidth={minWidth}
      mini={mini}
      label={label}
      design={design}
      labelNone={labelNone}>
      <ui_color_input.ColorInput
        value={value}
        setValue={function (value){
          event_form.set_field(form,field,value);
          event_form.validate_field(form,field);
        }}
        design={design}
        variant={variant}
        {...fieldProps}>
      </ui_color_input.ColorInput>
    </FormEnclosed>);
}

// melbourne.slim-common/FormChipInput [507] 
function FormChipInput({
  design,
  variant,
  mini,
  form,
  meta,
  label,
  styleLabel,
  labelHide,
  labelNone,
  field,
  fieldProps,
  minWidth,
  options = []
}){
  let {result,value} = ext_form.listenField(
    form,
    field,
    Object.assign({"slim/type":"chip_input","fn/type":"field"},meta)
  );
  let {mainNeutral} = base_palette.designPalette(design);
  return (
    <FormEnclosed
      variant={k.get_in(design,["variant","label"])}
      styleLabel={styleLabel}
      labelHide={labelHide}
      minWidth={minWidth}
      mini={mini}
      label={label}
      design={design}
      labelNone={labelNone}>
      <ui_chip_input.ChipInput
        values={value}
        setValues={function (values){
          event_form.set_field(form,field,values);
          event_form.validate_field(form,field);
        }}
        design={design}
        variant={variant}
        {...fieldProps}>
      </ui_chip_input.ChipInput>
    </FormEnclosed>);
}

// melbourne.slim-common/FormLayout [545] 
function FormLayout({
  design,
  form,
  mini,
  meta,
  fieldProps = {},
  fieldStyle = {},
  rowStyle,
  rows,
  children,
  ...rprops
}){
  let formElement = function ({component,field,...rprops},i){
    let props = Object.assign(
      rprops,
      {design,field,form,mini,"meta":Object.assign({},meta,rprops.meta)}
    );
    let style = k.arr_append([
      ...(Array.isArray(rowStyle) ? rowStyle : ((null == rowStyle) ? [] : [rowStyle]))
    ],Array.isArray(fieldStyle.field) ? fieldStyle.field : ((null == fieldStyle.field) ? [] : [fieldStyle.field]));
    return (
      <n.Row
        key={field || i}
        style={[
          {"marginVertical":4},
          ...(Array.isArray(style) ? style : ((null == style) ? [] : [style]))
        ]}
        {...(fieldProps[field] || {})}>{React.createElement(component,props)}
      </n.Row>);
  };
  return (
    <ReactNative.View {...rprops}>
      {(Array.isArray(rows) ? rows : ((null == rows) ? [] : [rows])).filter(function (x){
        return x;
      }).map(formElement)}
      {k.not_emptyp(children) ? (
        <ReactNative.View style={{"height":16}}></ReactNative.View>) : null}
      {children}
    </ReactNative.View>);
}

var MODULE = {
  "StyleButtonXL":StyleButtonXL,
  "FormEnclosed":FormEnclosed,
  "FormReadOnly":FormReadOnly,
  "FormInput":FormInput,
  "FormInputXL":FormInputXL,
  "FormTextArea":FormTextArea,
  "FormCheckBox":FormCheckBox,
  "FormToggleButton":FormToggleButton,
  "FormToggleSwitch":FormToggleSwitch,
  "FormEnumSingle":FormEnumSingle,
  "FormEnumMulti":FormEnumMulti,
  "FormColorInput":FormColorInput,
  "FormChipInput":FormChipInput,
  "FormLayout":FormLayout
};

export default MODULE