import React from 'react'

import * as ReactNative from 'react-native'

import * as r from '../libs/js/react'

import * as n from '../libs/js/react-native'

import ui_static from '../melbourne/ui-static'

import ui_sidemenu from './ui-sidemenu'

import ui_breadcrumb from './ui-breadcrumb'

import k from '../libs/xt/lang/base-lib'

// pune.ui-page/PageLayoutHeader [22] 
function PageLayoutHeader({
  design,
  mini,
  headerId,
  routeKey,
  routeRoot,
  singleRoute,
  noBanner,
  noBreadcrumb,
  overrideBreadcrumb,
  overrideToolbar = {},
  children
}){
  let [toolbar,setToolbar] = React.useState();
  let bprops = Object.assign({design,mini,noBanner},singleRoute ? {"root":[],"path":routeRoot[0]} : {
    "root":routeRoot,
    "path":routeKey ? ("" + routeKey).toUpperCase() : null
  },overrideBreadcrumb);
  let tprops = Object.assign({"design":design},overrideToolbar,{
    "style":[
        {"zIndex":100,"overflow":"hidden"},
        ...k.arrayify(overrideToolbar.style)
      ]
  });
  return React.createElement(ui_static.Div,tprops,!noBreadcrumb ? React.createElement(ui_breadcrumb.Breadcrumb,Object.assign(
    bprops,
    {"variant":{"bg":{"key":"primary"}},"style":{"padding":10}}
  )) : children,(
    <n.Row>
      <n.PortalSink name={headerId} onSource={setToolbar} style={{"flex":1}}></n.PortalSink>
    </n.Row>));
}

// pune.ui-page/PageLayoutMenu [77] 
function PageLayoutMenu({appendId,design,mini,overrideSideMenu,routeKey,routeRoot,sections,setRouteKey}){
  let dimensions = ReactNative.useWindowDimensions();
  let override = overrideSideMenu ? overrideSideMenu(routeKey,mini) : null;
  let menuProps = Object.assign(
    {design,mini,routeKey,setRouteKey,"miniTitle":routeRoot && (routeRoot[0] || "").toUpperCase(),"data":sections,"narrowed":dimensions.width < 720},
    override
  );
  return (
    <>
      <ui_sidemenu.SideMenu {...menuProps}></ui_sidemenu.SideMenu>
      <ReactNative.View
        style={{"bottom":10,"right":10,"zIndex":100,"position":"absolute"}}><n.PortalSink name={appendId}></n.PortalSink>
      </ReactNative.View>
    </>);
}

// pune.ui-page/PageLayout [112] 
function PageLayout({
  design,
  mini,
  sections,
  sectionRoutes,
  sectionPropsFn = function (){
  return null;
},
  noBanner,
  noSideMenu,
  route,
  routeRoot,
  routeKey,
  setRouteKey,
  children,
  overrideToolbar,
  overrideSideMenu,
  overrideBreadcrumb,
  noBreadcrumb
}){
  let headerId = r.id();
  let appendId = r.id();
  let Component = sectionRoutes[routeKey];
  let cprops = Object.assign(
    {appendId,design,headerId,mini,route},
    sectionPropsFn(routeKey)
  );
  return (
    <ReactNative.View style={{"flexDirection":"row-reverse","flex":1}}>
      {!noSideMenu ? (
        <PageLayoutMenu
          routeKey={routeKey}
          sections={sections}
          mini={mini}
          route={route}
          setRouteKey={setRouteKey}
          routeRoot={routeRoot}
          appendId={appendId}
          design={design}
          overrideSideMenu={overrideSideMenu}>
        </PageLayoutMenu>) : null}
      <ReactNative.View style={{"flex":1}}>
        <PageLayoutHeader
          noBanner={noBanner}
          noBreadcrumb={noBreadcrumb}
          routeKey={routeKey}
          overrideBreadcrumb={overrideBreadcrumb}
          headerId={headerId}
          overrideToolbar={overrideToolbar}
          mini={mini}
          routeRoot={routeRoot}
          design={design}>
        </PageLayoutHeader>
        {children}
        {Component ? (
          <Component {...cprops}></Component>) : null}
      </ReactNative.View>
    </ReactNative.View>);
}

// pune.ui-page/PageLayoutSingle [167] 
function PageLayoutSingle({
  design,
  mini,
  sectionPropsFn = function (){
  return null;
},
  noBanner,
  noSideMenu,
  route,
  routeRoot,
  children
}){
  let headerId = r.id();
  return (
    <ReactNative.View style={{"flexDirection":"row-reverse","flex":1}}>
      <ReactNative.View style={{"flex":1}}>
        <PageLayoutHeader
          singleRoute={true}
          noBanner={noBanner}
          headerId={headerId}
          routeRoot={routeRoot}
          design={design}>
        </PageLayoutHeader>
        {children}
      </ReactNative.View>
    </ReactNative.View>);
}

var MODULE = {
  "PageLayoutHeader":PageLayoutHeader,
  "PageLayoutMenu":PageLayoutMenu,
  "PageLayout":PageLayout,
  "PageLayoutSingle":PageLayoutSingle
};

export default MODULE