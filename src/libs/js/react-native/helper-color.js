import * as k from '../../xt/lang/common-lib.js'

import * as c from '../../xt/lang/common-color.js'

// js.react-native.helper-color/toHSL [14]
export function toHSL(x){
  if(k.is_stringp(x)){
    return x;
  }
  else if(k.is_arrayp(x)){
    let [h,s,l] = x;
    return "hsl(" + Math.floor(h) + "," + s.toFixed(2) + "%," + l.toFixed(2) + "%" + ")";
  }
}

// js.react-native.helper-color/hsl-parse-raw [28]
export function hsl_parse_raw(s,n,parseFn){
  let curr = s.substring(n);
  let arr = curr.split(/[,\(\)\%\s]/);
  return arr.filter(function (s){
    return s.length > 0;
  }).splice(0,3).map(function (s){
    return parseFn(s);
  });
}

// js.react-native.helper-color/hsl-parse [38]
export function hsl_parse(s){
  let parse_rgb = function (str,n){
    return c.rgb__gthsl(hsl_parse_raw(str,n,parseInt));
  };
  if(s.startsWith("#")){
    return c.hex__gthsl(s);
  }
  else if(s.startsWith("rgb(")){
    return parse_rgb(s,3);
  }
  else if(s.startsWith("rgba(")){
    return parse_rgb(s,4);
  }
  else if(s.startsWith("hsl(")){
    return hsl_parse_raw(s,3,parseFloat);
  }
  else if(s.startsWith("hsla(")){
    return hsl_parse_raw(s,4,parseFloat);
  }
  else{
    try{
      return c.named__gthsl(s);
    }
    catch(e){
      return [0,0,0];
    }
  }
}

// js.react-native.helper-color/hsl [66]
export function hsl(s){
  if(k.is_arrayp(s)){
    return s;
  }
  else if(k.is_stringp(s)){
    return hsl_parse(s);
  }
  else{
    return s;
  }
}

// js.react-native.helper-color/interpolateScalar [83]
export function interpolateScalar(from,to,fraction){
  return (from || 0) + (fraction * ((to || 0) - (from || 0)));
}

// js.react-native.helper-color/interpolateValue [90]
export function interpolateValue(from,to,fraction){
  if(k.is_functionp(from)){
    return interpolateScalar(from(to),to,fraction);
  }
  else if(k.is_functionp(to)){
    return interpolateScalar(from,to(from),fraction);
  }
  else{
    return interpolateScalar(from,to,fraction);
  }
}

// js.react-native.helper-color/interpolateNum [103]
export function interpolateNum(v,num){
  if((num < 1) && (num > 0)){
    return num * v;
  }
  else if((num > -1) && (num < 0)){
    return 100 + ((100 - v) * num);
  }
  else{
    return num + v;
  }
}

// js.react-native.helper-color/interpolateColorArray [118]
export function interpolateColorArray(from,to){
  if(k.is_numberp(to)){
    return [from,[from[0],from[1],interpolateNum(from[2],to)]];
  }
  else if(k.is_numberp(from)){
    return [[to[0],to[1],interpolateNum(to[2],from)],to];
  }
  else if(k.is_functionp(to)){
    return [from,[from[0],from[1],to]];
  }
  else if(k.is_functionp(from)){
    return [[to[0],to[1],from],to];
  }
  else if(k.nilp(to)){
    return [from,from];
  }
  else if(k.nilp(from)){
    return [to,to];
  }
  else if(to[1] == 0){
    return [from,[from[0],to[1],to[2]]];
  }
  else if(from[1] == 0){
    return [[to[0],from[1],from[2]],to];
  }
  else{
    return [from,to];
  }
}

// js.react-native.helper-color/interpolateColor [167]
export function interpolateColor(from,to,fraction){
  let [fromArr,toArr] = interpolateColorArray(hsl(from),hsl(to));
  if(fromArr){
    return fromArr.map(function (v,i){
      return interpolateValue(v,toArr[i],fraction);
    });
  }
  return toArr || [0,0,0];
}

// js.react-native.helper-color/interpolate [184]
export function interpolate(arr,num){
  let i = Math.max(0,Math.ceil(num - 1));
  let fraction = num - i;
  let from = arr[i];
  let to = arr[i + 1];
  return interpolateColor(from,to,fraction);
}

// js.react-native.helper-color/rotateHue [196]
export function rotateHue(color,fraction){
  let [h,s,l] = hsl(color);
  return toHSL([(h + (360 * fraction)) % 360,s,l]);
}

// js.react-native.helper-color/saturate [205]
export function saturate(color,fraction){
  let [h,s,l] = hsl(color);
  return toHSL([h,interpolateNum(s,fraction),l]);
}

// js.react-native.helper-color/lighten [212]
export function lighten(color,fraction){
  let [h,s,l] = hsl(color);
  return toHSL([h,s,interpolateNum(l,fraction)]);
}

// js.react-native.helper-color/transform [219]
export function transform(color,[hf,sf,lf]){
  let [h,s,l] = hsl(color);
  return toHSL([
    (h + (360 * hf)) % 360,
    interpolateNum(s,sf),
    interpolateNum(l,lf)
  ]);
}

// js.react-native.helper-color/mix [233]
export function mix(arr,num){
  return toHSL(interpolate(arr,num));
}

// js.react-native.helper-color/toRGB [239]
export function toRGB(s){
  let arr = c.hsl__gtrgb(hsl_parse(s));
  return arr, "#" + arr.map(function (x){
    return x.toString(16).padStart(2,"0");
  }).join("");
}