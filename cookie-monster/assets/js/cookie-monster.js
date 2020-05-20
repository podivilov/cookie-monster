function setCrossSubdomainCookie(name, value, days) {
  const assign = name + "=" + escape(value) + ";";
  const d = new Date();
  d.setTime(d.getTime() + (days*24*60*60*1000));
  const expires = "expires="+ d.toUTCString() + ";";
  const path = "path=/;";
  const domain = "domain=" + (document.domain.match(/[^\.]*\.[^.]*$/)[0]) + ";";
  document.cookie = assign + expires + path + domain;
}
function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    return decodeURI(dc.substring(begin + prefix.length, end));
}
var cookieMonster = getCookie("cookie-monster");

if (cookieMonster != null) {
    if (cookieMonster.includes("hide")) {
        document.getElementsByClassName("cookie-monster")[0].style.display = "none";
    }
    if (cookieMonster.includes("eat")) {
        // Замените example.com на вашу страницу с информацией
        // о том, что сайт без cookies не работает
        window.location.replace("example.com");
    }
}
