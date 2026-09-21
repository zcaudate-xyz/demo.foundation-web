import * as math from '../../xt/lang/common-math.js'

// js.react-native.model-roller/roller-model [46]
export function roller_model(divisions,radius){
  let UNIT = 2 * (Math.PI / divisions);
  let HALF_PI = Math.PI / 2;
  return function (offset){
    let raw = math.mod_pos(offset,divisions);
    let theta = raw * UNIT;
    let visible = (Math.abs(theta) < HALF_PI) || (Math.abs(theta) > (3 * HALF_PI));
    return {
      "raw":raw,
      "visible":visible,
      "offset":offset,
      "theta":theta,
      "translate":radius * Math.sin(theta),
      "scale":Math.abs(Math.cos(theta))
    };
  };
}

// js.react-native.model-roller/roller-shifted-norm [65]
export function roller_shifted_norm(divisions,roller_index,center){
  let shifted = roller_index - center;
  let shifted_mod = math.mod_pos(shifted,divisions);
  let shifted_norm = (shifted_mod < (divisions / 2)) ? shifted_mod : (shifted_mod - divisions);
  return shifted_norm;
}

// js.react-native.model-roller/roller-shifted-index [78]
export function roller_shifted_index(divisions,roller_index,input_raw,input_total){
  let input_index = math.mod_pos(input_raw,input_total);
  let center = math.mod_pos(input_raw,divisions);
  let shifted_norm = roller_shifted_norm(divisions,roller_index,center);
  let shifted_index = math.mod_pos(input_index + shifted_norm,input_total);
  return shifted_index;
}

// js.react-native.model-roller/roller-set-values [100]
export function roller_set_values(ind_array,divisions,input_raw,input_total){
  for(let i = 0; i < ind_array.length; ++i){
    let ind = ind_array[i];
    let shifted = roller_shifted_index(divisions,i,input_raw,input_total);
    if(shifted != ind._value){
      ind.setValue(shifted);
    }
  };
  return true;
}