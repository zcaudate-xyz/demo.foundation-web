import k from '../../libs/xt/lang/base-lib'

// pune.common.data-market/price-to-float [9] 
function price_to_float(price){
  if("string" == (typeof price)){
    return Number(price);
  }
  else{
    return price;
  }
}

// pune.common.data-market/frac-to-decimal [17] 
function frac_to_decimal(frac){
  return Math.floor(0.5 + (-Math.log10(frac)));
}

// pune.common.data-market/decimal-to-frac [23] 
function decimal_to_frac(decimal){
  return Math.pow(10,-decimal);
}

// pune.common.data-market/position-to-rate [29] 
function position_to_rate(prediction,allotment,position){
  return (prediction == "yes") ? position : (allotment - position);
}

// pune.common.data-market/position-to-price [37] 
function position_to_price(prediction,allotment,frac,decimal,position){
  return ((prediction == "yes") ? (position * frac) : ((allotment - position) * frac)).toFixed(decimal);
}

// pune.common.data-market/price-to-position [48] 
function price_to_position(prediction,allotment,frac,price){
  if(prediction == "yes"){
    return Math.floor(0.5 + (price_to_float(price) / frac));
  }
  else{
    return allotment - Math.floor(0.5 + (price_to_float(price) / frac));
  }
}

// pune.common.data-market/book-enrich [59] 
function book_enrich(book){
  let {allotment,decimal} = book;
  let frac = Math.pow(10,-decimal);
  let max = allotment * frac;
  return k.obj_assign({"frac":frac,"max":max},book);
}

// pune.common.data-market/live-summary [70] 
function live_summary(live,book){
  let {allotment,decimal,frac,max} = book;
  let {ask,bid} = live;
  let all_pos = k.arr_mapcat([bid["volume"] || [],ask["volume"] || []],k.identity);
  let volume = k.arr_foldl(all_pos,function (acc,e){
    return acc + (e[1] || 0);
  },0);
  let ask_pos = (ask["range"] || [])[0];
  let bid_pos = (bid["range"] || [])[1];
  let yes_sell = ask_pos ? (frac * ask_pos).toFixed(decimal) : "-";
  let yes_buy = bid_pos ? (frac * bid_pos).toFixed(decimal) : "-";
  let no_sell = bid_pos ? (max - (frac * bid_pos)).toFixed(decimal) : "-";
  let no_buy = ask_pos ? (max - (frac * ask_pos)).toFixed(decimal) : "-";
  return {
    "no_sell":no_sell,
    "no_buy":no_buy,
    "yes_sell":yes_sell,
    "yes_buy":yes_buy,
    "volume":volume,
    "ask_pos":ask_pos,
    "bid_pos":bid_pos
  };
}

// pune.common.data-market/live-offers-raw [98] 
function live_offers_raw(live,prediction,retrieve){
  retrieve = (retrieve || 7);
  let {ask,bid} = live;
  let avol = k.arr_sort(ask["volume"] || [],function (arr){
    return arr[0];
  },function (a,b){
    return a < b;
  });
  let bvol = k.arr_sort(bid["volume"] || [],function (arr){
    return arr[0];
  },function (a,b){
    return a < b;
  });
  let buy_offers = (prediction == "yes") ? k.arr_rslice(avol,0,Math.min(retrieve,(avol).length)) : k.arr_slice(bvol,Math.max(0,(bvol).length - retrieve),(bvol).length);
  let sell_offers = (prediction == "yes") ? k.arr_rslice(bvol,Math.max(0,(bvol).length - retrieve),(bvol).length) : k.arr_slice(avol,0,Math.min(retrieve,(avol).length));
  return {"buy":buy_offers,"sell":sell_offers};
}

// pune.common.data-market/live-offers-rate [119] 
function live_offers_rate(live,allotment,prediction,retrieve){
  let rate_fn = function (pair){
    let [pos,vol] = pair;
    return [position_to_rate(prediction,allotment,pos),vol];
  };
  let raw = live_offers_raw(live,prediction,retrieve);
  let {buy,sell} = raw;
  return {"buy":k.arr_map(buy,rate_fn),"sell":k.arr_map(sell,rate_fn)};
}

// pune.common.data-market/live-offers-price [138] 
function live_offers_price(live,book,prediction,retrieve){
  let {allotment,decimal,frac,max} = book;
  let price_fn = function (pair){
    let [pos,vol] = pair;
    return [position_to_price(prediction,allotment,frac,decimal,pos),vol];
  };
  let raw = live_offers_raw(live,prediction,retrieve);
  let {buy,sell} = raw;
  return {
    "buy":k.arr_map(buy,price_fn),
    "sell":k.arr_map(sell,price_fn)
  };
}

// pune.common.data-market/segment-price [158] 
function segment_price(price,offers){
  price = price_to_float(price);
  let {buy,sell} = offers;
  let higher_than = function (offers){
    return price > Number((offers[0])[0]);
  };
  let lower_than = function (offers){
    return price < Number((offers[offers.length + -1])[0]);
  };
  if((0 == (buy).length) && (0 == (sell).length)){
    return "center";
  }
  else if(0 == (sell).length){
    if(higher_than(buy)){
      return "top";
    }
    else if(lower_than(buy)){
      return "center";
    }
    else{
      return "none";
    }
  }
  else if(0 == (buy).length){
    if(higher_than(sell)){
      return "center";
    }
    else if(lower_than(sell)){
      return "bottom";
    }
    else{
      return "none";
    }
  }
  else{
    if(higher_than(buy)){
      return "top";
    }
    else if(lower_than(sell)){
      return "bottom";
    }
    else if(lower_than(buy) && higher_than(sell)){
      return "center";
    }
    else{
      return "none";
    }
  }
}

// pune.common.data-market/position-can-trade [208] 
function position_can_trade(pos,trade,prediction,book,summary){
  let {allotment} = book;
  let {ask_pos,bid_pos} = summary;
  if(trade == "buy"){
    return (prediction == "yes") ? (pos >= (ask_pos || allotment)) : (pos >= (allotment - (bid_pos || 0)));
  }
  else{
    return (prediction == "yes") ? (pos <= (bid_pos || 0)) : (pos <= (allotment - (ask_pos || allotment)));
  }
}

// pune.common.data-market/position-estimate [224] 
function position_estimate(trade,prediction,book,summary){
  let {allotment} = book;
  let {ask_pos,bid_pos} = summary;
  return (trade == "buy") ? ((prediction == "yes") ? (ask_pos || bid_pos || (allotment / 2)) : (allotment - (bid_pos || ask_pos || (allotment / 2)))) : ((prediction == "yes") ? (bid_pos || ask_pos || (allotment / 2)) : (allotment - (ask_pos || bid_pos || (allotment / 2))));
}

// pune.common.data-market/price-can-trade [240] 
function price_can_trade(price,trade,prediction,book,summary){
  let {allotment,frac} = book;
  let pos = Math.floor(0.5 + (price_to_float(price) / frac));
  return position_can_trade(pos,trade,prediction,book,summary);
}

// pune.common.data-market/price-estimate [252] 
function price_estimate(trade,prediction,book,summary){
  let {decimal,frac} = book;
  return (frac * position_estimate(trade,prediction,book,summary)).toFixed(decimal);
}

// pune.common.data-market/calc-rake [265] 
function calc_rake(rake,type_key,value_key,frac,amount,spend){
  let type = rake[type_key];
  let value = rake[value_key];
  if(type == "none"){
    return 0;
  }
  else if(type == "per_trade"){
    return value * frac;
  }
  else if(type == "per_contract"){
    return value * amount * frac;
  }
  else if(type == "percentage"){
    return spend * value * 0.01;
  }
}

var MODULE = {
  "price_to_float":price_to_float,
  "frac_to_decimal":frac_to_decimal,
  "decimal_to_frac":decimal_to_frac,
  "position_to_rate":position_to_rate,
  "position_to_price":position_to_price,
  "price_to_position":price_to_position,
  "book_enrich":book_enrich,
  "live_summary":live_summary,
  "live_offers_raw":live_offers_raw,
  "live_offers_rate":live_offers_rate,
  "live_offers_price":live_offers_price,
  "segment_price":segment_price,
  "position_can_trade":position_can_trade,
  "position_estimate":position_estimate,
  "price_can_trade":price_can_trade,
  "price_estimate":price_estimate,
  "calc_rake":calc_rake
};

export default MODULE