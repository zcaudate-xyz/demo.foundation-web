import * as ReactNative from 'react-native'

import * as ExpoImagePicker from 'expo-image-picker'

import * as n from '../libs/js/react-native'

import ui_button from './ui-button'

import k from '../libs/xt/lang/base-lib'

import base_palette from './base-palette'

import ui_swiper from './ui-swiper'

// melbourne.ui-image/selectImage [23] 
function selectImage(props){
  let {
    onPhoto,
    setPhoto = function (){
    return null;
  },
    setBlob = function (){
    return null;
  }
  } = props;
  return new Promise(function (resolve,reject){
    ExpoImagePicker.launchImageLibraryAsync().then(function (res){
      if(!res.cancelled){
        setPhoto(res);
        return fetch(res.uri,{}).then(function (res){
          return res.blob();
        }).then(function (blob){
          let reader = new FileReader();
          reader.onload = function (){
            setBlob(reader.result);
            if(onPhoto){
              onPhoto({"blob":reader.result,"photo":res},props);
            }
            resolve({"blob":reader.result,"photo":res});
          };
          reader.readAsArrayBuffer(blob);
        });
      }
      else{
        resolve(null);
      }
    });
  });
}

// melbourne.ui-image/ImagePicker [60] 
function ImagePicker(props){
  let {
    design = {},
    setData,
    data,
    waiting,
    onPhoto,
    setPhoto,
    photo,
    setBlob,
    blob,
    textEmpty,
    onClear,
    size = 130,
    border = 0,
    inner,
    ...rprops
  } = props;
  let subSize = size - (2 * border);
  let {bgNormal,fgNormal} = base_palette.designPalette(design);
  let uri = (photo && photo["uri"]) || (data && (data["url"] || data["thumbnailUrl"]));
  let swipeElem = (
    <ui_swiper.Swiper
      variant={{
        "bg":{"key":"background","mix":"primary","ratio":1},
        "fg":{"key":"neutral","mix":"primary","ratio":4}
      }}
      onOpened={function (res){
        setPhoto(null);
        setBlob(null);
        setData(null);
        if(onClear){
          onClear();
        }
        return true;
      }}
      style={{"cursor":"grab","height":subSize,"width":subSize}}
      posEnabled={true}
      inner={[
        {
            "component":ReactNative.Image,
            "source":{"uri":uri},
            "style":[{"borderRadius":4,"height":subSize,"width":subSize}],
            "transformations":function ({position,pressing}){
                  return {
                    "style":{
                            "opacity":k.mix(1,0.8,pressing) * k.mix(1,0,Math.abs(position) / (2 * subSize)),
                            "transform":[{"scale":k.mix(1,2,Math.abs(position) / subSize)}]
                          }
                  };
                }
          },
        ...(Array.isArray(inner) ? inner : ((null == inner) ? [] : [inner]))
      ]}
      posThreshold={0.5 * subSize}
      negFull={-2 * subSize}
      styleContainer={{
        "backgroundColor":bgNormal,
        "borderRadius":4,
        "height":subSize,
        "overflow":"hidden",
        "width":subSize
      }}
      negEnabled={true}
      negThreshold={-0.5 * subSize}
      design={design}
      posFull={2 * subSize}
      {...rprops}>
    </ui_swiper.Swiper>);
  return (
    <ReactNative.View
      style={[
        {"height":size,"width":size,"borderRadius":4},
        {
            "justifyContent":"center",
            "alignContent":"center",
            "alignItems":"center"
          },
        {"backgroundColor":bgNormal}
      ]}>
      {(null == uri) ? (
        <ui_button.Button
          design={design}
          onPress={function (){
            return selectImage(props);
          }}
          style={[
            {
              "height":subSize,
              "width":subSize,
              "padding":0,
              "paddingHorizontal":0
            }
          ]}
          text={(
            <ReactNative.View
              key="label"
              style={[
                {"height":subSize,"width":subSize},
                {
                    "justifyContent":"center",
                    "alignContent":"center",
                    "alignItems":"center"
                  }
              ]}>
              <ReactNative.Text style={{"fontWeight":400,"fontSize":13}}>{textEmpty || "SELECT"}</ReactNative.Text>
            </ReactNative.View>)}
          transformations={{
            "bg":function ({pressing}){
                return {"style":{"transform":[{"scale":1 - (0.15 * pressing)}]}};
              }
          }}
          variant={{
            "bg":{"key":"background","mix":"primary","ratio":1},
            "fg":{"key":"neutral"}
          }}>
        </ui_button.Button>) : (waiting ? (
        <ReactNative.View style={{"opacity":0.3}}>
          {swipeElem}
          <ReactNative.View
            style={{
              "position":"absolute",
              "height":"100%",
              "width":"100%",
              "justifyContent":"center",
              "alignItems":"center"
            }}>
            <ReactNative.ActivityIndicator></ReactNative.ActivityIndicator>
          </ReactNative.View>
        </ReactNative.View>) : swipeElem)}
    </ReactNative.View>);
}

var MODULE = {"selectImage":selectImage,"ImagePicker":ImagePicker};

export default MODULE