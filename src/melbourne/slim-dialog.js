import * as ReactNative from 'react-native'

import * as n from '../libs/js/react-native'

import * as ui_modal from '../libs/js/react-native/ui-modal'

import base_palette from './base-palette'

import base_font from './base-font'

import ui_static from './ui-static'

import slim_submit from './slim-submit'

// melbourne.slim-dialog/Dialog [23] 
function Dialog({
  design,
  modalProps,
  submitProps,
  helperProps,
  title,
  titleRight,
  body,
  visible,
  setVisible,
  onSubmit,
  onCancel,
  children,
  ...rprops
}){
  let palette = base_palette.designPalette(design);
  return (
    <ui_modal.Modal
      position="centered"
      styleBackdrop={{
        "backgroundColor":base_palette.getColor(palette,{"key":"neutral"})
      }}
      onClose={onCancel}
      visible={visible}
      {...modalProps}>
      <ui_static.Div
        design={design}
        style={[
          {
          "maxWidth":400,
          "minHeight":150,
          "paddingHorizontal":15,
          "paddingVertical":10,
          "borderRadius":3
        }
        ]}>
        <n.Row>
          <ReactNative.Text
            style={[
              base_font.fontH4,
              {
              "color":base_palette.getColor(palette,{"key":"neutral"}),
              "marginVertical":10
            }
            ]}>{title}
          </ReactNative.Text>
          <n.Fill></n.Fill>
          {titleRight}
        </n.Row>
        <ReactNative.View style={{"flex":1,"justifyContent":"center"}}>
          <ReactNative.Text
            style={[
              base_font.fontText,
              {
              "color":base_palette.getColor(palette,{"key":"neutral"}),
              "marginVertical":10
            }
            ]}>{body}
          </ReactNative.Text>
        </ReactNative.View>
        <ReactNative.View style={{"flexDirection":"row-reverse","marginVertical":10}}>
          <slim_submit.SubmitButton text="OK" onPress={onSubmit} design={design} {...submitProps}></slim_submit.SubmitButton>
          <slim_submit.SubmitLineHelpers
            cancelShow={true}
            onCancel={onCancel}
            design={design}
            {...helperProps}>
          </slim_submit.SubmitLineHelpers>
        </ReactNative.View>
      </ui_static.Div>
    </ui_modal.Modal>);
}

var MODULE = {"Dialog":Dialog};

export default MODULE