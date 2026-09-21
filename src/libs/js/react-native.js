import React from 'react'

import * as ReactNative from 'react-native'

import * as xtd from '../xt/lang/common-data.js'

import * as k from '../xt/lang/common-lib.js'

import * as r from './react.js'

import * as helper_portal from './react/helper-portal.js'

import * as str from '../xt/lang/common-string.js'

// js.react-native/format-obj [457]
export function format_obj(e){
  let s = JSON.stringify(e,null,2) || "";
  let arr = str.split(s,"\n");
  let lines = xtd.arr_map(xtd.arr_slice(arr,1,arr.length - 1),function (l){
    return str.substring(l,2);
  });
  return str.join("\n",lines);
}

// js.react-native/format-entry [469]
export function format_entry(e){
  let out = format_obj(e);
  return str.replace(str.replace(out,"\"",""),",","");
}

// js.react-native/measure [478]
export function measure(elem,f){
  f = (f || (function (){
    return null;
  }));
  return new Promise(function (resolve,reject){
    if(elem && elem.measure){
      elem.measure(function (fx,fy,width,height,px,py){
        let out = {fx,fy,height,px,py,width};
        f(out);
        resolve(out);
      });
    }
    else{
      console.log(" js.react-native/measure 493\n\n","NOT MEASURED",elem);
      resolve({"fx":0,"fy":0,"width":0,"height":0,"px":0,"py":0});
    }
  });
}

// js.react-native/measureRef [496]
export function measureRef(ref,f){
  return ref.current ? measure(ref.current,f) : null;
}

// js.react-native/Enclosed [509]
export function Enclosed({label,styleLabel,children,style,...rprops}){
  return (
    <ReactNative.View
      style={[
          {
                "margin":10,
                "padding":10,
                "borderStyle":"solid",
                "borderWidth":1,
                "borderColor":"#aaa",
                "maxWidth":600
              },
          ...xtd.arrayify(style)
        ]}
      {...rprops}>
      <ReactNative.Text
        style={[
            {
              "position":"absolute",
              "top":-12,
              "fontSize":10,
              "padding":5,
              "color":"#666",
              "backgroundColor":"#fff"
            },
            ReactNative.Platform.select({"web":{"userSelect":"none"}}),
            ...xtd.arrayify(styleLabel)
          ]}>{label}
      </ReactNative.Text>
      {children}
    </ReactNative.View>);
}

// js.react-native/EnclosedCodeContainer [540]
export function EnclosedCodeContainer({code,label,children}){
  let [showCode,setShowCode] = React.useState();
  return (
    <Enclosed label={label}>
      <ReactNative.View
        style={{
            "position":"absolute",
            "right":-10,
            "top":-20,
            "transform":[{"scale":0.6}],
            "zIndex":10
          }}>
        <ReactNative.Button
          title={showCode ? "DEMO" : "CODE"}
          onPress={function (){
              setShowCode(!showCode);
            }}/>
      </ReactNative.View>
      {showCode ? (
        <ReactNative.Text>{code}</ReactNative.Text>) : children}
    </Enclosed>);
}

// js.react-native/Row [578]
export function Row({refLink,style,...rprops}){
  return React.createElement(ReactNative.View,Object.assign({
    "ref":refLink,
    "style":[{"flexDirection":"row"},...xtd.arrayify(style)]
  },rprops));
}

// js.react-native/Fill [591]
export function Fill({style,...rprops}){
  return (
    <ReactNative.View
      style={[{"flex":1,"zIndex":-10000},...xtd.arrayify(style)]}
      {...rprops}/>);
}

// js.react-native/H1 [602]
export function H1({text,style,...rprops}){
  return (
    <ReactNative.Text
      style={[
          {
                "color":"#555",
                "marginTop":20,
                "margin":10,
                "fontSize":28,
                "fontWeight":"800"
              },
          ...xtd.arrayify(style)
        ]}
      {...rprops}>{text}
    </ReactNative.Text>);
}

// js.react-native/H2 [618]
export function H2({text,style,...rprops}){
  return (
    <ReactNative.Text
      style={[
          {
                "color":"#555",
                "marginTop":20,
                "margin":10,
                "fontSize":24,
                "fontWeight":"800"
              },
          ...xtd.arrayify(style)
        ]}
      {...rprops}>{text}
    </ReactNative.Text>);
}

// js.react-native/H3 [634]
export function H3({text,style,...rprops}){
  return (
    <ReactNative.Text
      style={[
          {"color":"#555","fontSize":20,"fontWeight":"800"},
          ...xtd.arrayify(style)
        ]}
      {...rprops}>{text}
    </ReactNative.Text>);
}

// js.react-native/H4 [648]
export function H4({text,style,...rprops}){
  return (
    <ReactNative.Text
      style={[
          {"color":"#555","fontSize":16,"fontWeight":"400"},
          ...xtd.arrayify(style)
        ]}
      {...rprops}>{text}
    </ReactNative.Text>);
}

// js.react-native/H5 [662]
export function H5({text,style,...rprops}){
  return (
    <ReactNative.Text
      style={[{"color":"#555","fontSize":12},...xtd.arrayify(style)]}
      {...rprops}>{text}
    </ReactNative.Text>);
}

// js.react-native/Caption [675]
export function Caption({text,styleText,textProps,style,...rprops}){
  return (
    <ReactNative.View
      style={[{"backgroundColor":"#ddd"},...xtd.arrayify(style)]}
      {...rprops}>
      <ReactNative.Text
        style={[
            {"fontSize":11,"padding":5,"color":"#666"},
            ReactNative.Platform.select({
              "ios":{"fontFamily":"Courier"},
              "default":{"fontFamily":"monospace"}
            }),
            ...xtd.arrayify(styleText)
          ]}
        {...textProps}>{text}
      </ReactNative.Text>
    </ReactNative.View>);
}

// js.react-native/useTree [702]
export function useTree({branchesFn,displayFn,formatFn,initial,parents,root,setInitial,targetFn,tree}){
  formatFn = (formatFn || format_entry);
  displayFn = (displayFn || (function (target,_branch,_parents,_root){
    return (
      <Caption text={formatFn(target)} style={{"flex":1}}/>);
  }));
  return r.useTree(
    {branchesFn,displayFn,formatFn,initial,parents,root,setInitial,targetFn,tree}
  );
}

// js.react-native/TabsIndexed [730]
export function TabsIndexed({
  items,
  onChange,
  checkIndex,
  setIndex,
  index,
  styleText,
  styleSelected,
  format = k.identity
}){
  let [internal,setInternal] = React.useState(index || 0);
  React.useEffect(function (){
    if(k.is_numberp(index) && (internal != index)){
      setInternal(index);
    }
  });
  return (
    <ReactNative.View style={{"flexDirection":"row","flexWrap":"wrap"}}>
      {xtd.arr_map(items,function (item,i){
        let text = format(item);
        let selected = i == internal;
        return (
          <ReactNative.TouchableOpacity
            key={item}
            style={{"transform":[{"scale":0.8}]}}
            onPress={function (){
                setInternal(i);
                if(setIndex){
                  setIndex(i);
                }
                if(onChange){
                  onChange(items[i]);
                }
              }}>
            <ReactNative.Text
              key={item}
              style={[
                  Object.assign({"color":"#888","padding":2},styleText),
                  selected ? Object.assign({
                    "backgroundColor":"#888",
                    "borderRadius":3,
                    "color":"white",
                    "padding":2
                  },styleSelected) : null
                ]}>{text}
            </ReactNative.Text>
          </ReactNative.TouchableOpacity>);
      })}
    </ReactNative.View>);
}

// js.react-native/Tabs [774]
export function Tabs({data,valueFn,value,setValue,...rprops}){
  let {index,items,setIndex} = r.convertIndex({data,setValue,value,valueFn});
  return (
    <TabsIndexed setIndex={setIndex} items={items} index={index} {...rprops}/>);
}

// js.react-native/TabsPane [794]
export function TabsPane({
  listWidth,
  tabsFormat,
  styleTabs,
  styleTabsText,
  styleTabsSelected,
  scroll,
  tree,
  parents,
  root,
  initial,
  setInitial,
  branchesFn,
  targetFn,
  formatFn,
  displayFn
}){
  let {branch,branches,setBranch,view} = useTree(
    {branchesFn,displayFn,formatFn,initial,parents,root,setInitial,targetFn,tree}
  );
  return (
    <ReactNative.View style={{"flex":1}}>
      <Tabs
        value={branch}
        setValue={function (k){
            setBranch(k);
          }}
        data={branches}
        format={tabsFormat}
        style={styleTabs}
        styleText={styleTabsText}
        styleSelected={styleTabsSelected}/>
      {scroll ? (
        <ReactNative.ScrollView>{view}</ReactNative.ScrollView>) : view}
    </ReactNative.View>);
}

// js.react-native/ListIndexed [845]
export function ListIndexed({
  items,
  onChange,
  index,
  setIndex,
  initial,
  style,
  styleText,
  styleSelected,
  format = k.identity
}){
  if(!initial){
    initial = index;
  }
  let [internal,setInternal] = React.useState(initial || 0);
  React.useEffect(function (){
    if(internal != index){
      if(onChange){
        onChange(index);
      }
      setInternal(index);
    }
  },[index]);
  return (
    <ReactNative.FlatList
      data={xtd.arr_map(items,format)}
      keyExtractor={k.identity}
      renderItem={function (e){
          let {item} = e;
          let selected = e["index"] == internal;
          return (
            <ReactNative.TouchableOpacity
              key={e["index"]}
              onPress={function (){
                  setInternal(e["index"]);
                  setIndex(e["index"]);
                }}>
              <ReactNative.Text
                style={[
                    ReactNative.Platform.select({
                      "ios":{"fontFamily":"Courier"},
                      "default":{"fontFamily":"monospace"}
                    }),
                    Object.assign({"fontSize":10,"padding":2,"color":"#888"},styleText),
                    selected ? Object.assign({"backgroundColor":"#888","color":"white"},styleSelected) : null
                  ]}>{format(item)}
              </ReactNative.Text>
            </ReactNative.TouchableOpacity>);
        }}/>);
}

// js.react-native/List [889]
export function List({data,valueFn,value,setValue,...rprops}){
  let {index,items,setIndex} = r.convertIndex({data,setValue,value,valueFn});
  return (
    <ListIndexed setIndex={setIndex} items={items} index={index} {...rprops}/>);
}

// js.react-native/ListPane [909]
export function ListPane({
  listWidth,
  listFormat,
  styleList,
  styleListText,
  styleListSelected,
  direction = "row",
  scroll,
  tree,
  parents,
  root,
  initial,
  setInitial,
  branchesFn,
  targetFn,
  formatFn,
  displayFn
}){
  let {branch,branches,setBranch,view} = useTree(
    {branchesFn,displayFn,formatFn,initial,parents,root,setInitial,targetFn,tree}
  );
  return (
    <ReactNative.View style={{"flexDirection":direction,"flex":1}}>
      <ReactNative.View
        style={{"width":listWidth || 200,"height":"100%","overflow":"auto"}}>
        <List
          value={branch}
          setValue={function (k){
              setBranch(k);
            }}
          format={listFormat}
          data={branches}
          style={styleList}
          styleText={styleListText}
          styleSelected={styleListSelected}/>
      </ReactNative.View>
      {scroll ? (
        <ReactNative.ScrollView>{view}</ReactNative.ScrollView>) : (
        <ReactNative.View style={{"flex":1}}>{view}</ReactNative.View>)}
    </ReactNative.View>);
}

// js.react-native/TabsMultiIndexed [969]
export function TabsMultiIndexed({
  items,
  setIndices,
  indices,
  style,
  onChange,
  styleText,
  styleSelected,
  format = k.identity
}){
  let itemFn = function (item,i){
    let text = format(item);
    let selected = indices[i];
    return (
      <ReactNative.TouchableOpacity
        key={item}
        style={{"transform":[{"scale":0.8}]}}
        onPress={function (){
            let changed = xtd.arr_map(indices,function (e,ei){
              return (ei == i) ? !e : e;
            });
            setIndices(changed);
            if(onChange){
              onChange(changed);
            }
          }}>
        <ReactNative.Text
          key={item}
          style={[
              Object.assign({"color":"#888","padding":2},styleText),
              selected ? Object.assign({
                "backgroundColor":"#888",
                "borderRadius":3,
                "color":"white",
                "padding":2
              },styleSelected) : null
            ]}>{text}
        </ReactNative.Text>
      </ReactNative.TouchableOpacity>);
  };
  return (
    <ReactNative.View style={{"flexDirection":"row","flexWrap":"wrap"}}>{xtd.arr_map(items,itemFn)}</ReactNative.View>);
}

// js.react-native/TabsMulti [1011]
export function TabsMulti({data,valueFn,values,setValues,...rprops}){
  let {indices,items,setIndices} = r.convertIndices({data,setValues,valueFn,values});
  return (
    <TabsMultiIndexed
      setIndices={setIndices}
      items={items}
      indices={indices}
      {...rprops}/>)
}

// js.react-native/TreePane [1049]
export function TreePane({tree,root = tree,parents = [],levels}){
  if(xtd.is_emptyp(levels)){
    return (
      <ReactNative.Text>NO DATA</ReactNative.Text>);
  }
  let [level,...more] = levels;
  let {type} = level;
  let Pane = (type == "list") ? ListPane : TabsPane;
  let isFinal = 1 == levels.length;
  if(isFinal){
    return (
      <Pane tree={tree} root={root} parents={parents} {...level}/>);
  }
  let formatFn = k.identity;
  let displayFn = function (newTree,branch,parents,root){
    return (
      <TreePane
        key={branch}
        tree={newTree}
        root={root}
        parents={[...parents,branch]}
        levels={more}/>);
  };
  return (
    <Pane
      tree={tree}
      root={root}
      parents={parents}
      displayFn={displayFn}
      {...level}/>);
}

// js.react-native/displayTarget [1083]
export function displayTarget(Target){
  if(k.nilp(Target)){
    return (
      <ReactNative.View/>);
  }
  else{
    return (
      <ReactNative.View style={{"flex":1,"padding":10,"overflow":"auto"}}><Target/></ReactNative.View>);
  }
}

// js.react-native/BaseIndicator [1095]
export function BaseIndicator({cardStyle,color,content,label,onPress,styleText,waiting}){
  return (
    <ReactNative.TouchableOpacity onPress={onPress} disabled={waiting}>
      <ReactNative.View style={{"flexDirection":"row","alignItems":"center"}}>
        <ReactNative.Text
          style={{"fontSize":11,"padding":10,"fontWeight":"900","color":"#555"}}>{label}
        </ReactNative.Text>
        <ReactNative.View style={{"flex":1}}/>
        <ReactNative.Text
          style={[
              {
                "color":"white",
                "borderRadius":5,
                "paddingRight":8,
                "width":70,
                "paddingLeft":8,
                "padding":3,
                "fontWeight":"900",
                "fontSize":11,
                "backgroundColor":"rgb(112, 168, 195)",
                "marginRight":10
              },
              ...xtd.arrayify(styleText || []),
              waiting ? {"textAlign":"center"} : null
            ]}>
          {waiting ? (
            <ReactNative.ActivityIndicator
              animating={waiting}
              color="#aaa"
              style={{"height":5,"top":5,"transform":[{"scale":0.7}]}}/>) : content}
        </ReactNative.Text>
      </ReactNative.View>
    </ReactNative.TouchableOpacity>);
}

// js.react-native/ToggleIndicator [1136]
export function ToggleIndicator({active,label,onPress,waiting}){
  return (
    <BaseIndicator
      content={active ? "ON" : "OFF"}
      label={label}
      styleText={active ? {"textAlign":"left","backgroundColor":"rgb(134, 215, 134)"} : {"textAlign":"right","backgroundColor":"rgb(144, 55, 55)"}}
      waiting={waiting}
      onPress={onPress}/>);
}

// js.react-native/RecordList [1156]
export function RecordList({columns,entry}){
  return (
    <React.Fragment>
      {xtd.arr_map(columns,function ([label,key,f]){
        f = (f || k.identity);
        let val = entry[key];
        let output = f(val,entry);
        return (
          <ReactNative.View key={key} style={{"flexDirection":"row"}}>
            <ReactNative.Text style={{"fontSize":11,"fontWeight":"700","color":"#777"}}>{label}</ReactNative.Text>
            <ReactNative.View style={{"flex":1}}/>
            <ReactNative.Text style={{"fontSize":11,"color":"#777","fontWeight":"500"}}>{"" + output}</ReactNative.Text>
          </ReactNative.View>);
      })}
    </React.Fragment>);
}

// js.react-native/TextDisplay [1185]
export function TextDisplay({content,style,styleText,...rprops}){
  let text = content || format_entry(rprops);
  let clipboard = globalThis["navigator"] && globalThis["navigator"].clipboard;
  return (
    <React.Fragment>
      <ReactNative.View
        style={[
            {
              "flex":1,
              "padding":10,
              "backgroundColor":"#bbb",
              "overflow":"auto"
            },
            ...xtd.arrayify(style)
          ]}>
        <ReactNative.Text
          style={[
              ReactNative.Platform.select({
                "ios":{"fontFamily":"Courier"},
                "default":{"fontFamily":"monospace"}
              }),
              {"color":"#333","fontSize":10},
              ...xtd.arrayify(styleText)
            ]}>{text}
        </ReactNative.Text>
      </ReactNative.View>
      {clipboard ? (
        <ReactNative.View style={{"position":"absolute","top":10,"right":10}}>
          <ReactNative.Button
            title="Copy"
            onPress={function (){
                clipboard.writeText(format_obj(rprops));
              }}/>
        </ReactNative.View>) : null}
    </React.Fragment>);
}

// js.react-native/defaultGlobal [1227]
export function defaultGlobal(){
  return {"isDev":true,"isTransition":false};
}

// js.react-native/Global [1235]
globalThis["js_react_native$$Global"] = React.createContext(defaultGlobal());

// js.react-native/GlobalProvider [1238]
export function GlobalProvider({children,value}){
  let {Provider} = globalThis["js_react_native$$Global"];
  return (
    <Provider value={Object.assign(defaultGlobal(),value)}>{children}</Provider>);
}

// js.react-native/PortalRegistery [1254]
globalThis["js_react_native$$PortalRegistery"] = React.createContext(helper_portal.newRegistry());

// js.react-native/PortalProvider [1257]
export function PortalProvider({children,registry}){
  let {Provider} = globalThis["js_react_native$$PortalRegistery"];
  let value = React.useRef(registry || helper_portal.newRegistry()).current;
  return (
    <Provider value={value}>{children}</Provider>);
}

// js.react-native/PortalSinkImpl [1270]
export function PortalSinkImpl({name,registry,children,onSource,...rprops}){
  let [source,setSource] = React.useState();
  let sinkRef = React.useRef();
  React.useEffect(function (){
    helper_portal.addSink(registry,name,{setSource,sinkRef});
    return function (){
      helper_portal.removeSink(registry,name);
    };
  },[]);
  React.useEffect(function (){
    if(onSource){
      onSource(source);
    }
  },[source]);
  return (
    <ReactNative.View ref={sinkRef} {...rprops}>{children}{source}</ReactNative.View>);
}

// js.react-native/PortalSink [1295]
export function PortalSink({name = "default",children,...rprops}){
  let {Consumer} = globalThis["js_react_native$$PortalRegistery"];
  return (
    <Consumer>
      {function (registry){
        return React.createElement(PortalSinkImpl,{name,registry,children,...rprops});
      }}
    </Consumer>);
}

// js.react-native/Isolation [1308]
export function Isolation(props){
  return (
    <PortalProvider><PortalSink {...props}/></PortalProvider>);
}

// js.react-native/PortalImpl [1317]
export function PortalImpl({
  target,
  registry,
  children,
  onSink = (function (){
  return null;
})
}){
  let portalId = r.id();
  React.useEffect(function (){
    helper_portal.addSource(registry,target,portalId,children);
  });
  React.useEffect(function (){
    helper_portal.captureSink(registry,target,portalId,onSink);
    return function (){
      helper_portal.removeSource(registry,target,portalId);
      onSink(null);
    };
  },[]);
  return (
    <ReactNative.View/>);
}

// js.react-native/Portal [1337]
export function Portal({target = "default",...rprops}){
  let {Consumer} = globalThis["js_react_native$$PortalRegistery"];
  return (
    <Consumer>
      {function (registry){
        return (
          <PortalImpl target={target} registry={registry} {...rprops}/>);
      }}
    </Consumer>);
}

// js.react-native/usePortalLayouts [1350]
export function usePortalLayouts(hostRef,setLayouts){
  let [sinkRef,setSinkRef] = React.useState();
  let contentRef = React.useRef();
  let getLayouts = function (){
    let contentElem = xtd.get_in(contentRef,["current","children",0]) || xtd.get_in(contentRef,["current","_children",0]);
    if(contentElem && sinkRef){
      Promise.all([
        measureRef(sinkRef),
        hostRef ? measureRef(hostRef) : Promise.resolve().then(function (){
              return null;
            }),
        measure(contentElem)
      ]).then(function ([sinkLayout,hostLayout,contentLayout]){
        setLayouts(
          {"sink":sinkLayout,"host":hostLayout,"content":contentLayout}
        );
      });
    }
  };
  React.useEffect(function (){
    if(sinkRef){
      getLayouts();
    }
  },[sinkRef]);
  return {contentRef,getLayouts,setSinkRef,sinkRef};
}