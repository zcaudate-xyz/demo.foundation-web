import ui_static from '../melbourne/ui-static'

import * as base_text from '../libs/xt/lang/common-string'

import k from '../libs/xt/lang/base-lib'

// pune.ui-breadcrumb/Breadcrumb [19] 
function Breadcrumb({
  design,
  mini,
  variant,
  style,
  root,
  rootOnly,
  branchOnly,
  path,
  text,
  noBanner
}){
  let routePath = k.arr_append([
    ...(Array.isArray(branchOnly ? [] : root) ? (branchOnly ? [] : root) : ((null == (branchOnly ? [] : root)) ? [] : [branchOnly ? [] : root]))
  ],Array.isArray(rootOnly ? [] : path) ? (rootOnly ? [] : path) : ((null == (rootOnly ? [] : path)) ? [] : [rootOnly ? [] : path]));
  let routeString = routePath.map(function (s){
    s;
    return base_text.tag_string(s).toUpperCase();
  });
  text = (text || routeString.join("   /   "));
  return (
    <ui_static.Text
      design={design}
      variant={Object.assign({
        "font":"h3",
        "fg":noBanner ? {"key":"primary","tone":"flatten"} : {"key":"background","tone":"sharpen"}
      },variant)}
      numberOfLines={1}
      style={[
        {"paddingVertical":5,"fontWeight":"900"},
        Array.isArray(style) ? style : ((null == style) ? [] : [style])
      ]}>{text}
    </ui_static.Text>);
}

var MODULE = {"Breadcrumb":Breadcrumb};

export default MODULE