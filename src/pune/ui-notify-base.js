import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import ui_text from '../melbourne/ui-text'

import * as r from '../libs/js/react'

import * as n from '../libs/js/react-native'

import ui_spinner from '../melbourne/ui-spinner'

import ui_button from '../melbourne/ui-button'

import k from '../libs/xt/lang/base-lib'

import * as ui_notify_events from '../libs/js/react-native/ui-notify'

import * as ui_util from '../libs/js/react-native/ui-util'

import ui_static from '../melbourne/ui-static'

import ui_picker from '../melbourne/ui-picker'

// pune.ui-notify-base/getOutdated [26] 
function getOutdated(events,duration){
  return Object.values(events).filter(function (e){
    return !e.sticky && ((duration + e.time) < Date.now());
  }).map(k.id_fn);
}

// pune.ui-notify-base/useOutdated [38] 
function useOutdated({duration,events,setEvents}){
  let isMounted = r.useIsMounted();
  let refresh = r.useRefresh();
  let evictFn = function (ids){
    if(k.not_emptyp(ids)){
      setEvents(k.obj_omit(events,ids));
    }
  };
  React.useEffect(function (){
    if(0 < duration){
      if(k.not_emptyp(events)){
        new Promise(function (resolve,reject){
          setTimeout(function (){
            try{
              resolve(              (function (){
                              if(isMounted()){
                                refresh();
                              }
                            })());
            }
            catch(e){
              reject(e);
            }
          },500);
        });
      }
      let outdated = getOutdated(events,duration);
      if(k.not_emptyp(outdated)){
        evictFn(outdated);
      }
    }
  },[duration,events,refresh]);
  return evictFn;
}

// pune.ui-notify-base/TopNotifyInner [59] 
function TopNotifyInner({
  style,
  mini,
  design,
  variant,
  data = [],
  onClose = function (){
  return null;
},
  index = 0,
  setIndex = function (){
  return null;
}
}){
  let fgMix = {"key":"background"};
  let bgMix = {"key":"neutral","mix":"primary","ratio":1};
  let __variant = Object.assign({
    "bg":bgMix,
    "fg":fgMix,
    "hovered":{"fg":{"raw":1},"bg":{"raw":1}},
    "pressed":{"fg":{"raw":1},"bg":{"raw":1}},
    "disabled":{"bg":bgMix,"fg":bgMix}
  },variant);
  return (
    <ui_static.Div
      design={design}
      variant={__variant}
      style={[
        {"height":60,"padding":5},
        mini ? {"borderRadius":0} : {"borderRadius":3,"width":350},
        ...(Array.isArray(style) ? style : ((null == style) ? [] : [style]))
      ]}>
      <n.Row>
        <ui_button.Button
          design={design}
          variant={__variant}
          style={{
            "paddingVertical":3,
            "paddingHorizontal":3,
            "borderRadius":0,
            "marginHorizontal":3
          }}
          text={(
            <ui_text.Icon
              key="close"
              design={design}
              variant={__variant}
              name="minus"
              size={15}>
            </ui_text.Icon>)}
          onPress={function (){
            onClose();
          }}>
        </ui_button.Button>
        <ReactNative.View style={{"flex":1}}>
          <ui_picker.PickerValues
            key={(data).length}
            design={design}
            variant={__variant}
            items={k.not_emptyp(data) ? data.map(k.key_fn("title")) : ["NO NOTIFICATIONS"]}
            style={{"width":300}}
            styleText={{"width":300,"fontWeight":"800","fontSize":13}}
            index={index}
            setIndex={setIndex}>
          </ui_picker.PickerValues>
        </ReactNative.View>
        <ReactNative.View>
          {(1 < (data).length) ? (
            <n.Row style={{"alignItems":"center"}}>
              <ui_spinner.SpinnerControls
                min={0}
                iconProps={{"size":10}}
                key={(data).length}
                variant={__variant}
                value={index}
                setValue={setIndex}
                style={{"borderRadius":0,"paddingHorizontal":3,"paddingVertical":3}}
                max={(data).length - 1}
                decimal={0}
                design={design}
                step={1}>
                <ui_static.Text
                  design={design}
                  style={{"fontSize":11,"margin":5}}
                  variant={__variant}>{(index + 1) + " of " + (data).length}
                </ui_static.Text>
              </ui_spinner.SpinnerControls>
            </n.Row>) : null}
        </ReactNative.View>
      </n.Row>
      <n.Row style={{"flex":1,"paddingLeft":5}}>
        <ui_static.Text
          design={design}
          variant={__variant}
          style={[{"position":"absolute","top":5,"fontSize":11}]}>{k.get_in(data,[index,"message"])}
        </ui_static.Text>
      </n.Row>
    </ui_static.Div>);
}

// pune.ui-notify-base/TopNotify [159] 
function TopNotify({data,design,mini,onClose,variant}){
  let [index,setIndex] = React.useState(0);
  let visible = k.not_emptyp(data);
  let notifyElem = React.createElement(
    TopNotifyInner,
    {data,design,index,mini,onClose,setIndex,variant}
  );
  return mini ? React.createElement(ui_util.Fold,{visible},notifyElem) : React.createElement(
    ui_notify_events.Notify,
    {visible,"position":"bottom_left","transition":"from_bottom","margin":10},
    notifyElem
  );
}

var MODULE = {
  "getOutdated":getOutdated,
  "useOutdated":useOutdated,
  "TopNotifyInner":TopNotifyInner,
  "TopNotify":TopNotify
};

export default MODULE