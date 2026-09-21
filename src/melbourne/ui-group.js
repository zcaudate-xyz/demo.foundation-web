import React from 'react'

import * as ReactNative from 'react-native'

import k from '../libs/xt/lang/base-lib'

import * as r from '../libs/js/react'

import * as n from '../libs/js/react-native'

import ui_toggle_button from './ui-toggle-button'

// melbourne.ui-group/EnumMultiIndexed [17] 
function EnumMultiIndexed({
  design,
  variant,
  theme,
  items,
  setIndices,
  indices,
  style,
  onChange,
  styleContainer,
  itemProps = [],
  format = k.identity
}){
  let itemFn = function (value,i){
    return (
      <ui_toggle_button.ToggleButton
        selected={indices[i]}
        onPress={function (){
          let changed = indices.map(function (e,ei){
            return (ei == i) ? !e : e;
          });
          setIndices(changed);
          if(onChange){
            onChange(changed);
          }
        }}
        key={value + "-" + i}
        variant={variant}
        style={[
          {"marginHorizontal":5},
          ...(Array.isArray(style) ? style : ((null == style) ? [] : [style]))
        ]}
        outlined={indices[i]}
        theme={theme}
        design={design}
        text={format(value,i)}
        {...(itemProps[i] || {})}>
      </ui_toggle_button.ToggleButton>);
  };
  return (
    <n.Row
      style={[
        {"margin":5},
        ...(Array.isArray(styleContainer) ? styleContainer : ((null == styleContainer) ? [] : [styleContainer]))
      ]}>{items.map(itemFn)}
    </n.Row>);
}

// melbourne.ui-group/EnumMulti [55] 
function EnumMulti({data,valueFn,values,setValues,...rprops}){
  let {indices,items,setIndices} = r.convertIndices({data,setValues,valueFn,values});
  return (
    <EnumMultiIndexed
      setIndices={setIndices}
      items={items}
      indices={indices}
      {...rprops}>
    </EnumMultiIndexed>);
}

// melbourne.ui-group/TabsIndexed [79] 
function TabsIndexed({
  design,
  variant,
  theme,
  items,
  setIndex,
  index,
  style,
  onChange,
  styleContainer,
  outlined,
  itemProps = [],
  format = k.identity
}){
  let itemFn = function (value,i){
    return (
      <ui_toggle_button.ToggleButton
        selected={i == index}
        onPress={function (){
          if(i != index){
            setIndex(i);
            if(onChange){
              onChange(i);
            }
          }
        }}
        key={value + "-" + i}
        transformations={{"bg":null}}
        variant={variant}
        style={[
          {"marginHorizontal":5},
          ...(Array.isArray(style) ? style : ((null == style) ? [] : [style]))
        ]}
        outlined={outlined && (i == index)}
        theme={theme}
        design={design}
        text={format(value,i)}
        {...(itemProps[i] || {})}>
      </ui_toggle_button.ToggleButton>);
  };
  return (
    <n.Row
      style={[
        {"margin":5},
        ...(Array.isArray(styleContainer) ? styleContainer : ((null == styleContainer) ? [] : [styleContainer]))
      ]}>{items.map(itemFn)}
    </n.Row>);
}

// melbourne.ui-group/Tabs [116] 
function Tabs({data,valueFn,value,setValue,allowNotFound,...rprops}){
  let {index,items,setIndex} = r.convertIndex({allowNotFound,data,setValue,value,valueFn});
  return (
    <TabsIndexed setIndex={setIndex} items={items} index={index} {...rprops}></TabsIndexed>);
}

// melbourne.ui-group/ListIndexed [142] 
function ListIndexed({
  design,
  variant,
  theme,
  items,
  style,
  onChange,
  onPress,
  index,
  setIndex,
  styleContainer,
  transformations,
  itemProps = [],
  format = k.identity
}){
  let outlined = k.get_in(design,["theme","active","outlined"]);
  let itemFn = function (e){
    let {item} = e;
    let i = e["index"];
    return (
      <ui_toggle_button.ToggleButton
        selected={i == index}
        onPress={function (){
          if(i != index){
            setIndex(i);
            if(onChange){
              onChange(i);
            }
          }
          if(onPress){
            onPress();
          }
        }}
        key={i}
        variant={variant}
        transformations={transformations}
        style={[
          {
                "marginVertical":5,
                "alignItems":"center",
                "justifyContent":"center"
              },
          ...(Array.isArray(style) ? style : ((null == style) ? [] : [style]))
        ]}
        outlined={outlined && (i == index)}
        theme={theme}
        design={design}
        text={format(item,i)}
        {...(itemProps[i] || {})}>
      </ui_toggle_button.ToggleButton>);
  };
  return (
    <ReactNative.FlatList
      style={styleContainer}
      data={items}
      keyExtractor={k.identity}
      renderItem={itemFn}>
    </ReactNative.FlatList>);
}

// melbourne.ui-group/List [187] 
function List({data,valueFn,value,setValue,allowNotFound,...rprops}){
  let {index,items,setIndex} = r.convertIndex({allowNotFound,data,setValue,value,valueFn});
  return (
    <ListIndexed setIndex={setIndex} items={items} index={index} {...rprops}></ListIndexed>);
}

var MODULE = {
  "EnumMultiIndexed":EnumMultiIndexed,
  "EnumMulti":EnumMulti,
  "TabsIndexed":TabsIndexed,
  "Tabs":Tabs,
  "ListIndexed":ListIndexed,
  "List":List
};

export default MODULE