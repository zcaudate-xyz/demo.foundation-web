import k from '../libs/xt/lang/base-lib'

// melbourne.base-validators/is-true [9] 
function is_true(message){
  return [
    "is-true",
    {
      "message":message || "Always true.",
      "check":function (){
          return true;
        }
    }
  ];
}

// melbourne.base-validators/is-accepted [14] 
function is_accepted(message){
  return [
    "is-accepted",
    {
      "message":message || "Must be accepted.",
      "check":function (v,rec){
          return true == v;
        }
    }
  ];
}

// melbourne.base-validators/is-required [21] 
function is_required(message){
  return [
    "is-required",
    {
      "message":message || "Required field.",
      "check":function (v,rec){
          return (null != v) && (0 < (v).length);
        }
    }
  ];
}

// melbourne.base-validators/is-not-empty [29] 
function is_not_empty(message){
  return [
    "is-not-empty",
    {
      "message":message || "Must not be empty.",
      "check":function (v,rec){
          return (null != v) && (0 < (v).length);
        }
    }
  ];
}

// melbourne.base-validators/is-at-most [37] 
function is_at_most(n,message){
  return [
    "is-at-most",
    {
      "message":message || ("Must have " + String(n) + " or less characters."),
      "check":function (v,rec){
          return (null != v) && (n >= (v).length);
        }
    }
  ];
}

// melbourne.base-validators/is-at-least [47] 
function is_at_least(n,message){
  return [
    "is-at-least",
    {
      "message":message || ("Must have " + String(n) + " or more characters."),
      "check":function (v,rec){
          return (null != v) && (n <= (v).length);
        }
    }
  ];
}

// melbourne.base-validators/is-length-n [57] 
function is_length_n(n,message){
  return [
    "is-length-n",
    {
      "message":message || ("Must be " + String(n) + " characters."),
      "check":function (v,rec){
          return (null != v) && (n == (v).length);
        }
    }
  ];
}

// melbourne.base-validators/is-same-as [67] 
function is_same_as(field,message){
  return [
    "is-same-as",
    {
      "message":message || ("Must be same as " + field + "."),
      "check":function (v,rec){
          return v == rec[field];
        }
    }
  ];
}

// melbourne.base-validators/is-valid-email [77] 
function is_valid_email(message){
  return [
    "is-valid-email",
    {
      "message":message || "Must be a valid email.",
      "check":function (v,rec){
          return (null != v) && /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9-]{2,}$/.test(v);
        }
    }
  ];
}

var MODULE = {
  "is_true":is_true,
  "is_accepted":is_accepted,
  "is_required":is_required,
  "is_not_empty":is_not_empty,
  "is_at_most":is_at_most,
  "is_at_least":is_at_least,
  "is_length_n":is_length_n,
  "is_same_as":is_same_as,
  "is_valid_email":is_valid_email
};

export default MODULE