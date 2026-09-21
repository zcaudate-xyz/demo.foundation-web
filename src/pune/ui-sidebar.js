import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/Entypo'

import * as n from '../libs/js/react-native'

import ui_text from '../melbourne/ui-text'

import ui_static from '../melbourne/ui-static'

// pune.ui-sidebar/SidebarMenu [13] 
function SidebarMenu({design,sectionKey,setSectionKey,sections = []}){
  let itemProps = sections.map(function (){
    return {"styleContainer":{"width":52},"transformations":{"bg":null}};
  });
  return (
    <ui_static.Div
      design={design}
      variant={{"fg":{"key":"primary","tone":"flatten"}}}
      style={{"borderWidth":1,"borderStyle":"solid","margin":0}}>
      <ui_text.TabsAccent
        itemProps={itemProps}
        format={function (s){
          return s.toUpperCase();
        }}
        variant={{
          "bg":{"key":"background","tone":"augment"},
          "active":{
            "fg":{"key":"background","tone":"augment"},
            "bg":{"key":"primary","tone":"flatten"}
          }
        }}
        value={sectionKey}
        setValue={setSectionKey}
        style={{
          "fontSize":10,
          "fontWeight":"500",
          "paddingHorizontal":2,
          "padding":0,
          "textAlign":"center",
          "paddingVertical":5,
          "marginHorizontal":0,
          "borderRadius":0
        }}
        styleContainer={{"margin":0}}
        design={design}
        data={sections}>
      </ui_text.TabsAccent>
    </ui_static.Div>);
}

// pune.ui-sidebar/Sidebar [52] 
function Sidebar({children,design,sectionKey,sections,setSectionKey}){
  return (
    <ui_static.Div
      design={design}
      variant={{"bg":{"key":"background","tone":"augment"}}}
      style={{"width":158,"marginHorizontal":1}}>
      {children}
      <n.Fill></n.Fill>
      <SidebarMenu
        sections={sections}
        setSectionKey={setSectionKey}
        sectionKey={sectionKey}
        design={design}>
      </SidebarMenu>
    </ui_static.Div>);
}

var MODULE = {"SidebarMenu":SidebarMenu,"Sidebar":Sidebar};

export default MODULE