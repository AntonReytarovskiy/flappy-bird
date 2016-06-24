var Helper = function() {
}

Helper.randomInt = function(min,max) {
    var rand = min + Math.random() * (max - min)
    rand = Math.round(rand);
    return rand;
}

Helper.randowColor = function() {
    switch(Helper.randomInt(1,10)) {
        case 1: return 'red';
        case 2: return 'green';
        case 3: return 'brown';
        case 4: return 'black';
        case 5: return 'blue';
        case 6: return 'orange';
        case 7: return 'aqua';
        case 8: return 'firebrick';
        case 9: return 'coral';
        case 10: return 'yellow';
    }
}

Helper.KEY_CODE = {
    UP: 38,
};

Helper.MacroCollision = function(obj1,obj2){
  var XColl=false;
  var YColl=false;

  if ((obj1.x + obj1.width >= obj2.x) && (obj1.x <= obj2.x + obj2.width)) XColl = true;
  if ((obj1.y + obj1.height >= obj2.y) && (obj1.y <= obj2.y + obj2.height)) YColl = true;

  if (XColl&YColl){return true;}
  return false;
}

Helper.setCookie = function (name, value, options) {
  options = options || {};

  var expires = options.expires;

  if (typeof expires == "number" && expires) {
    var d = new Date();
    d.setTime(d.getTime() + expires * 1000);
    expires = options.expires = d;
  }
  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }

  value = encodeURIComponent(value);

  var updatedCookie = name + "=" + value;

  for (var propName in options) {
    updatedCookie += "; " + propName;
    var propValue = options[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }

  document.cookie = updatedCookie;
}

Helper.getCookie = function (name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}