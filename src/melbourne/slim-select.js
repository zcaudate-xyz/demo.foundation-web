import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import * as event_form from '../libs/xt/event/base-form'

import slim_common from './slim-common'

import * as n from '../libs/js/react-native'

import * as ext_form from '../libs/js/react/ext-form'

import k from '../libs/xt/lang/base-lib'

import ui_dropdown from './ui-dropdown'

import ui_picker from './ui-picker'

// melbourne.slim-select/FormPicker [18] 
function FormPicker({
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
  data,
  minWidth
}){
  let {result,value} = ext_form.listenField(
    form,
    field,
    Object.assign({"slim/type":"picker","fn/type":"field"},meta)
  );
  let setValue = React.useCallback(function (v){
    event_form.set_field(form,field,v);
    event_form.validate_field(form,field);
  },[]);
  return (
    <slim_common.FormEnclosed
      variant={k.get_in(design,["variant","label"])}
      styleLabel={styleLabel}
      labelHide={labelHide}
      minWidth={minWidth}
      mini={mini}
      label={label}
      design={design}
      labelNone={labelNone}>
      <n.Row style={{"marginTop":5}}>
        <ui_picker.PickerControls
          style={{"paddingHorizontal":5,"marginHorizontal":2}}
          value={value}
          setValue={setValue}
          design={design}>
          <ui_picker.Picker
            setValue={setValue}
            design={design}
            variant={variant}
            data={data}
            value={value}
            {...fieldProps}>
          </ui_picker.Picker>
        </ui_picker.PickerControls>
      </n.Row>
    </slim_common.FormEnclosed>);
}

// melbourne.slim-select/FormDropdown [65] 
function FormDropdown({
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
  data,
  minWidth,
  active,
  setActive
}){
  let {result,value} = ext_form.listenField(
    form,
    field,
    Object.assign({"slim/type":"dropdown","fn/type":"field"},meta)
  );
  let setValue = React.useCallback(function (v){
    event_form.set_field(form,field,v);
    event_form.validate_field(form,field);
  },[]);
  return (
    <slim_common.FormEnclosed
      variant={k.get_in(design,["variant","label"])}
      styleLabel={styleLabel}
      labelHide={labelHide}
      minWidth={minWidth}
      mini={mini}
      label={label}
      design={design}
      labelNone={labelNone}>
      <ui_dropdown.Dropdown
        styleContainer={{"marginVertical":2,"marginHorizontal":2}}
        setValue={setValue}
        design={design}
        variant={variant}
        data={data}
        value={value}
        active={active}
        setActive={setActive}
        {...fieldProps}>
      </ui_dropdown.Dropdown>
    </slim_common.FormEnclosed>);
}

var MODULE = {"FormPicker":FormPicker,"FormDropdown":FormDropdown};

export default MODULE