import React from 'react'

import * as ReactNative from 'react-native'

import * as event_form from '../libs/xt/event/base-form'

import ui_image from './ui-image'

import slim_common from './slim-common'

import * as ext_form from '../libs/js/react/ext-form'

import k from '../libs/xt/lang/base-lib'

import base_palette from './base-palette'

// melbourne.slim-image/FormImage [24] 
function FormImage({
  design,
  mini,
  palette,
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
    Object.assign({"slim/type":"image","fn/type":"field"},meta)
  );
  if(k.is_emptyp(value)){
    value = {};
  }
  if("string" == (typeof value)){
    value = JSON.parse(value);
  }
  palette = base_palette.getPalette(design,palette);
  let {mainNeutral} = palette;
  let [data,setData] = React.useState(value);
  let [photo,setPhoto] = React.useState();
  let [blob,setBlob] = React.useState();
  let [waiting,setWaiting] = React.useState();
  let uri = (photo && photo["uri"]) || (data && (data["url"] || data["thumbnailUrl"]));
  return (
    <slim_common.FormEnclosed
      styleLabel={styleLabel}
      labelHide={labelHide}
      minWidth={minWidth}
      mini={mini}
      label={label}
      design={design}
      labelNone={labelNone}>
      <ReactNative.View style={{"marginLeft":1,"marginVertical":3}}>
        <ui_image.ImagePicker
          setBlob={setBlob}
          setPhoto={setPhoto}
          data={data}
          setWaiting={setWaiting}
          size={mini ? 120 : 140}
          setData={setData}
          waiting={waiting}
          blob={blob}
          photo={photo}
          design={design}
          {...fieldProps}>
        </ui_image.ImagePicker>
      </ReactNative.View>
    </slim_common.FormEnclosed>);
}

var MODULE = {"FormImage":FormImage};

export default MODULE