import * as ReactNative from 'react-native'

import * as event_form from '../libs/xt/event/base-form'

import slim_common from './slim-common'

import * as n from '../libs/js/react-native'

import ui_spinner from './ui-spinner'

import * as ext_form from '../libs/js/react/ext-form'

import k from '../libs/xt/lang/base-lib'

import ui_slider from './ui-slider'

// melbourne.slim-number/FormSpinner [17] 
function FormSpinner({
  design,
  mini,
  variant,
  form,
  meta,
  label,
  labelHide,
  labelNone,
  styleLabel,
  labelWidth,
  field,
  fieldProps,
  minWidth,
  max,
  min,
  step,
  decimal
}){
  let {result,value} = ext_form.listenField(
    form,
    field,
    Object.assign({"slim/type":"spinner","fn/type":"field"},meta)
  );
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
        <ui_spinner.SpinnerControls
          value={value}
          setValue={event_form.field_fn(form,field)}
          style={{"paddingHorizontal":5}}
          design={design}
          variant={variant}
          max={max}
          min={min}
          step={step}>
          <ui_spinner.Spinner
            step={step}
            min={min}
            value={value}
            variant={variant}
            setValue={event_form.field_fn(form,field)}
            style={{"marginHorizontal":5}}
            max={max}
            decimal={decimal}
            design={design}
            {...fieldProps}>
          </ui_spinner.Spinner>
        </ui_spinner.SpinnerControls>
      </n.Row>
    </slim_common.FormEnclosed>);
}

// melbourne.slim-number/FormSlider [73] 
function FormSlider({
  design,
  mini,
  variant,
  form,
  meta,
  styleLabel,
  label,
  labelHide,
  labelNone,
  field,
  fieldProps,
  minWidth,
  max,
  min,
  step,
  decimal
}){
  let {result,value} = ext_form.listenField(
    form,
    field,
    Object.assign({"slim/type":"slider","fn/type":"field"},meta)
  );
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
      <ui_slider.Slider
        step={step}
        min={min}
        value={value}
        variant={variant}
        setValue={event_form.field_fn(form,field)}
        style={{"marginTop":10,"marginBottom":5}}
        max={max}
        decimal={decimal}
        design={design}
        {...fieldProps}>
      </ui_slider.Slider>
    </slim_common.FormEnclosed>);
}

var MODULE = {"FormSpinner":FormSpinner,"FormSlider":FormSlider};

export default MODULE