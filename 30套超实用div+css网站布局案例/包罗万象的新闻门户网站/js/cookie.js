function setCookie(CookieName, CookieString, Expires ,timeUnit){ if ((CookieName != null) && (CookieString != null)){ if (Expires == null){ document.cookie = CookieName + "=" + escape(CookieString); }else { Expires = eval(Expires); setDay = new Date();  if (timeUnit == null){ timeUnit = "day"; }  switch (timeUnit){ case "week": setDay.setTime(setDay.getTime()+(Expires*1000*60*60*24*7)); break; case "day": setDay.setTime(setDay.getTime()+(Expires*1000*60*60*24)); break; case "hour": setDay.setTime(setDay.getTime()+(Expires*1000*60*60)); break; case "minute": setDay.setTime(setDay.getTime()+(Expires*1000*60)); break; case "second": setDay.setTime(setDay.getTime()+(Expires*1000)); break; default: setDay.setTime(setDay.getTime()+(Expires*1000*60*60*24)); }  expTime = setDay.toGMTString(); document.cookie = CookieName + "=" + escape(CookieString) + ";expires=" + expTime ; }  return true; } return false; }
function getCookie(CookieName){ CookieName += "="; theCookie = document.cookie+";"; start = theCookie.indexOf(CookieName);  if (start != -1){ End = theCookie.indexOf(";",start); return unescape(theCookie.substring(start+CookieName.length,End)); } }
function deleteCookie(CookieName){ document.cookie = CookieName + "=;expires=Thu,01-Jan-70 00:00:01 GMT"; }