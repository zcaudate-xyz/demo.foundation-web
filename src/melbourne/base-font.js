import * as ReactNative from 'react-native'

import k from '../libs/xt/lang/base-lib'

// melbourne.base-font/fontH1 [11] 
var fontH1 = {"fontSize":30,"fontWeight":"900"};

// melbourne.base-font/fontH2 [15] 
var fontH2 = {"fontSize":24,"fontWeight":"900"};

// melbourne.base-font/fontH3 [19] 
var fontH3 = {"fontSize":20,"fontWeight":"900"};

// melbourne.base-font/fontH4 [23] 
var fontH4 = {"fontSize":16,"fontWeight":"900"};

// melbourne.base-font/fontH5 [27] 
var fontH5 = {"fontSize":14,"fontWeight":"700"};

// melbourne.base-font/fontH6 [31] 
var fontH6 = {"fontSize":12,"fontWeight":"700"};

// melbourne.base-font/fontP [35] 
var fontP = {"fontSize":12,"fontWeight":"400"};

// melbourne.base-font/fontText [39] 
var fontText = {"fontSize":11,"fontWeight":"400"};

// melbourne.base-font/fontItalic [43] 
var fontItalic = {"fontSize":11,"fontWeight":"400","fontVariant":"italic"};

// melbourne.base-font/fontBold [48] 
var fontBold = {"fontSize":11,"fontWeight":"800"};

// melbourne.base-font/fontCaption [52] 
var fontCaption = Object.assign({"fontSize":11,"fontWeight":"500"},ReactNative.Platform.select({
  "ios":{"fontFamily":"Courier"},
  "default":{"fontFamily":"monospace"}
}));

// melbourne.base-font/FontStyle [59] 
var FontStyle = {
  "bold":fontBold,
  "caption":fontCaption,
  "h5":fontH5,
  "h4":fontH4,
  "h6":fontH6,
  "h2":fontH2,
  "h1":fontH1,
  "h3":fontH3,
  "italic":fontItalic,
  "p":fontP
};

// melbourne.base-font/getFontStyle [71] 
function getFontStyle(font){
  if(k.objp(font)){
    return font;
  }
  else if("number" == (typeof font)){
    return {"fontSize":font};
  }
  else{
    return FontStyle[font] || fontText;
  }
}

var MODULE = {
  "fontH1":fontH1,
  "fontH2":fontH2,
  "fontH3":fontH3,
  "fontH4":fontH4,
  "fontH5":fontH5,
  "fontH6":fontH6,
  "fontP":fontP,
  "fontText":fontText,
  "fontItalic":fontItalic,
  "fontBold":fontBold,
  "fontCaption":fontCaption,
  "FontStyle":FontStyle,
  "getFontStyle":getFontStyle
};

export default MODULE