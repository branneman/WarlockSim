function loadCookie() {
  var i, q
  if (getCookie("tailoring") !== "noCookie")
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
  
  if (getCookie("powerInfusion") !== "noCookie")
    document.getElementById("powerInfusion").value = getCookie("powerInfusion");
  
  if (getCookie("warlockAtiesh") !== "noCookie")
    document.getElementById("warlockAtiesh").value = getCookie("warlockAtiesh");
  
  if (getCookie("mageAtiesh") !== "noCookie")
    document.getElementById("mageAtiesh").value = getCookie("mageAtiesh");
  
  if (getCookie("druidAtiesh") !== "noCookie")
    document.getElementById("druidAtiesh").value = getCookie("druidAtiesh");
    
  if (getCookie("warlockCount") !== "noCookie")
    document.getElementById("warlockCount").value = getCookie("warlockCount");
  
  var buffArray = ["curseShadow", "shadowWeaving", "curseElements", "Scorch", "supremeFlask", "blessedOil", "brilliantOil", "arcaneElixir", "shadowElixir", "holiday", "fireElixir", 
                   "manaPotion", "demonicRune", "runnTumTuber", "nightfinSoup", "magebloodPotion", "hakkarBuff", "onyxiaBuff", "songflower", "diremaulBuff", 
                   "tracesOfSilithus", "arcaneIntellect", "markOfTheWild", "moonkinAura", "blessingOfWisdom", "blessingOfKings", "manaSpringTotem"];
  for (i=0; i<buffArray.length; i++) {
    if (getCookie(buffArray[i]) !== "noCookie")
      document.getElementById(buffArray[i]).checked = getCookie(buffArray[i]) == "true";
  }
  document.getElementById("disableLifeTap").checked = getCookie("lifeTap") == "false";
  
  for (i=0; i<document.getElementsByClassName('wrapper').length; i++) {
    var currentID = document.getElementsByClassName('wrapper')[i].children[0].id;
    var currentCookie = getCookie(currentID);
    if (currentCookie !== "noCookie")
      document.getElementById(currentID).parentNode.children[1].innerHTML = currentCookie;
  }
  talentFunc();
  
  if (getCookie("rotationCurse") !== "noCookie")
    document.querySelector('input[value='+getCookie("rotationCurse")+']').checked = true
  document.getElementById("rotationCorruption").checked = getCookie("rotationCorruption") == "true";
  document.getElementById("rotationImmolate").checked = getCookie("rotationImmolate") == "true";
  document.getElementById("rotationSiphonLife").checked = getCookie("rotationSiphon") == "true";
  if (getCookie("rotationPrimary") !== "noCookie")
    document.querySelector('input[value='+getCookie("rotationPrimary")+']').checked = true
  if (getCookie("rotationFinisher") !== "noCookie")
    document.querySelector('input[value='+getCookie("rotationFinisher")+']').checked = true
  
  var itemArray = ["MainHand", "OffHand", "Staff", "Helmet", "Neck", "Shoulders", "Back", "Chest", "Wrists", 
                   "Hands", "Waist", "Legs", "Feet", "Ring1", "Ring2", "Trinket1", "Trinket2", "Wand"];
  for (q=0; q<itemArray.length; q++) {
    var currentTable = document.getElementById("table" + itemArray[q]).children[1].children;
    for (i=0; i<currentTable.length; i++) {
      if (getCookie("item" + itemArray[q]) == currentTable[i].children[0].innerHTML)
        clickTable("table" + itemArray[q], currentTable[i], true);
    }
  }
  var enchantArray = ["enchantSpellPower", "enchantZG1", "enchantFocus1", "enchantPowerScourge", "enchantZGShoulder", "enchantThreat", "enchantGreaterStats", "enchantStats", 
                      "enchantIntellect", "enchantStaminaWrists", "enchantShadow", "enchantFire", "enchantZG2", "enchantFocus2", "enchantMinorSpeed", "enchantStaminaFeet"];
  for (i=0; i<enchantArray.length; i++) {
    if (getCookie(enchantArray[i]) !== "noCookie")
      document.getElementById(enchantArray[i]).checked = getCookie(enchantArray[i]) == "true";
  }
  
  if (getCookie("itemStaff") == "false") {
    clickTable("tableStaff"); console.log("I was here")
  }
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
