import * as ReactNative from 'react-native'

import ui_sidemenu_test from './pune/ui-sidemenu-test'

import ui_submenu_test from './pune/ui-submenu-test'

import ui_market_delta_test from './pune/ui-market-delta-test'

import web_pune_frame_graph from './web-pune-frame-graph'

import * as n from './libs/js/react-native'

import ui_topnotify_test from './pune/ui-notify-base-test'

import ui_sidebar_test from './pune/ui-sidebar-test'

import ui_page_test from './pune/ui-page-test'

import k from './libs/xt/lang/base-lib'

import ui_depthchart_test from './pune/ui-depthchart-test'

import ui_breadcrumb_test from './pune/ui-breadcrumb-test'

import ui_menu_vert_test from './pune/ui-menu-vert-test'

import ui_market_ladder_old_test from './pune/ui-market-ladder-test'

import ui_sparkline_test from './pune/ui-sparkline-test'

import ui_console_test from './pune/ui-console-test'

import ui_market_live_test from './pune/ui-market-live-test'

// component.web-pune-frame/BreadcrumbExamples [36] 
function BreadcrumbExamples(){
  return (
    <>
      <ui_breadcrumb_test.BreadcrumbDemo></ui_breadcrumb_test.BreadcrumbDemo>
    </>);
}

// component.web-pune-frame/ConsoleExamples [42] 
function ConsoleExamples(){
  return (
    <><ui_console_test.ConsoleDemo></ui_console_test.ConsoleDemo></>);
}

// component.web-pune-frame/DepthchartExamples [48] 
function DepthchartExamples(){
  return (
    <>
      <ui_depthchart_test.MarketDepthChartDemo></ui_depthchart_test.MarketDepthChartDemo>
    </>);
}

// component.web-pune-frame/MainMenuExamples [55] 
function MainMenuExamples(){
  return (
    <>
      <ui_menu_vert_test.MainMenuSeperatorDemo></ui_menu_vert_test.MainMenuSeperatorDemo>
      <ui_menu_vert_test.MainMenuButtonDemo></ui_menu_vert_test.MainMenuButtonDemo>
      <ui_menu_vert_test.MainMenuToggleDemo></ui_menu_vert_test.MainMenuToggleDemo>
      <ui_menu_vert_test.MainMenuRouteDemo></ui_menu_vert_test.MainMenuRouteDemo>
      <ui_menu_vert_test.MainMenuMiniContextDemo></ui_menu_vert_test.MainMenuMiniContextDemo>
      <ui_menu_vert_test.MainMenuDemo></ui_menu_vert_test.MainMenuDemo>
    </>);
}

// component.web-pune-frame/SubMenuExamples [66] 
function SubMenuExamples(){
  return (
    <>
      <ui_submenu_test.SubMenuToggleDemo></ui_submenu_test.SubMenuToggleDemo>
      <ui_submenu_test.SubMenuRouteDemo></ui_submenu_test.SubMenuRouteDemo>
      <ui_submenu_test.SubMenuDemo></ui_submenu_test.SubMenuDemo>
    </>);
}

// component.web-pune-frame/SideBarExamples [74] 
function SideBarExamples(){
  return (
    <></>);
}

// component.web-pune-frame/SideMenuExamples [80] 
function SideMenuExamples(){
  return (
    <>
      <ui_sidemenu_test.SideMenuTitleDemo></ui_sidemenu_test.SideMenuTitleDemo>
      <ui_sidemenu_test.SideMenuListDemo></ui_sidemenu_test.SideMenuListDemo>
      <ui_sidemenu_test.SideMenuFloatingDemo></ui_sidemenu_test.SideMenuFloatingDemo>
    </>);
}

// component.web-pune-frame/NotifyAlertsExamples [88] 
function NotifyAlertsExamples(){
  return (
    <></>);
}

// component.web-pune-frame/TopNotifyExamples [102] 
function TopNotifyExamples(){
  return (
    <>
      <ui_topnotify_test.TopNotifyInnerDemo></ui_topnotify_test.TopNotifyInnerDemo>
      <ui_topnotify_test.TopNotifyDemo></ui_topnotify_test.TopNotifyDemo>
    </>);
}

// component.web-pune-frame/PageExamples [110] 
function PageExamples(){
  return (
    <>
      <ui_page_test.PageLayoutHeaderDemo></ui_page_test.PageLayoutHeaderDemo>
      <ui_page_test.PageLayoutMenuDemo></ui_page_test.PageLayoutMenuDemo>
      <ui_page_test.PageLayoutDemo></ui_page_test.PageLayoutDemo>
    </>);
}

// component.web-pune-frame/SparklineExamples [118] 
function SparklineExamples(){
  return (
    <>
      <ui_sparkline_test.SparklineDemo></ui_sparkline_test.SparklineDemo>
    </>);
}

// component.web-pune-frame/DeltaExamples [124] 
function DeltaExamples(){
  return (
    <>
      <ui_market_delta_test.DeltaDemo></ui_market_delta_test.DeltaDemo>
    </>);
}

// component.web-pune-frame/LadderExamples [130] 
function LadderExamples(){
  return (
    <>
      <ui_market_ladder_old_test.MarketLadderTextDemo></ui_market_ladder_old_test.MarketLadderTextDemo>
      <ui_market_ladder_old_test.MarketLadderRowDemo></ui_market_ladder_old_test.MarketLadderRowDemo>
      <ui_market_ladder_old_test.MarketLadderDemo></ui_market_ladder_old_test.MarketLadderDemo>
    </>);
}

// component.web-pune-frame/LiveExamples [138] 
function LiveExamples(){
  return (
    <>
      <ui_market_live_test.MarketLiveRowDemo></ui_market_live_test.MarketLiveRowDemo>
      <ui_market_live_test.MarketLiveDemo></ui_market_live_test.MarketLiveDemo>
    </>);
}

// component.web-pune-frame/MetamaskContractExamples [147] 
function MetamaskContractExamples(){
  return (
    <></>);
}

// component.web-pune-frame/MetamaskUserExamples [153] 
function MetamaskUserExamples(){
  return (
    <></>);
}

// component.web-pune-frame/FrameDemo [159] 
function FrameDemo(){
  return (
    <ReactNative.View style={{"height":700,"maxWidth":650}}></ReactNative.View>);
}

// component.web-pune-frame/ChartDemo [167] 
function ChartDemo(){
  return (
    <ReactNative.View style={{"height":700,"maxWidth":650}}>
      <web_pune_frame_graph.Demo002LightweightCharts></web_pune_frame_graph.Demo002LightweightCharts>
    </ReactNative.View>);
}

// component.web-pune-frame/pune-frame-controls [175] 
function pune_frame_controls(){
  return {
    "101-sidemenu":SideMenuExamples,
    "102-mainmenu":MainMenuExamples,
    "103-submenu":SubMenuExamples,
    "104-topnotify":TopNotifyExamples,
    "104a-notifyalert":NotifyAlertsExamples,
    "105-console":ConsoleExamples,
    "106-breadcrumb":BreadcrumbExamples,
    "108-sidebar":SideBarExamples,
    "201-page":PageExamples,
    "600-sparkline":SparklineExamples,
    "601-depthchart":DepthchartExamples,
    "602-ladder":LadderExamples,
    "603-live":LiveExamples,
    "605-delta":DeltaExamples,
    "701-mm-contract":MetamaskContractExamples,
    "702-mm-user":MetamaskUserExamples,
    "900-frame":FrameDemo,
    "901-chart":ChartDemo
  };
}

var MODULE = {
  "BreadcrumbExamples":BreadcrumbExamples,
  "ConsoleExamples":ConsoleExamples,
  "DepthchartExamples":DepthchartExamples,
  "MainMenuExamples":MainMenuExamples,
  "SubMenuExamples":SubMenuExamples,
  "SideBarExamples":SideBarExamples,
  "SideMenuExamples":SideMenuExamples,
  "NotifyAlertsExamples":NotifyAlertsExamples,
  "TopNotifyExamples":TopNotifyExamples,
  "PageExamples":PageExamples,
  "SparklineExamples":SparklineExamples,
  "DeltaExamples":DeltaExamples,
  "LadderExamples":LadderExamples,
  "LiveExamples":LiveExamples,
  "MetamaskContractExamples":MetamaskContractExamples,
  "MetamaskUserExamples":MetamaskUserExamples,
  "FrameDemo":FrameDemo,
  "ChartDemo":ChartDemo,
  "pune_frame_controls":pune_frame_controls
};

export default MODULE