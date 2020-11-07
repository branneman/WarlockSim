function loadCookie() {
  document.getElementById("tailoring").checked = getCookie("tailoring") == "true";
  
  if (getCookie("fightStart") !== "noCookie")
    document.getElementById("fightStart").value = Number(getCookie("fightStart"));
  
  if (getCookie("fightEnd") !== "noCookie")
    document.getElementById("fightEnd").value = Number(getCookie("fightEnd"));
  
  if (getCookie("bossShadowRes") !== "noCookie")
    document.getElementById("bossShadowRes").value = Number(getCookie("bossShadowRes"));
  
  if (getCookie("bossFireRes") !== "noCookie")
    document.getElementById("bossFireRes").value = Number(getCookie("bossFireRes"));
  
  if (getCookie("bossLevel") !== "noCookie")
    document.getElementById("bossLevel").value = Number(getCookie("bossLevel"));
  
  if (getCookie("race") !== "noCookie")
    document.getElementById("race").value = getCookie("race");
  
  
  console.log('Cookies Loaded')
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  if (arguments.length == 2) {
    exdays = 365;
  }
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires;// + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "noCookie";
}

function checkCookie() {
  var user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}
