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
    
  if (getCookie("warlockCount") !== "noCookie")
    document.getElementById("warlockCount").value = getCookie("warlockCount");
  
  var buffArray = ["curseShadow", "shadowWeaving", "curseElements", "Scorch", "supremeFlask", "blessedOil", "brilliantOil", "arcaneElixir", "shadowElixir", "holiday", "fireElixir", 
                   "manaPotion", "demonicRune", "runnTumTuber", "nightfinSoup", "magebloodPotion", "hakkarBuff", "onyxiaBuff", "songflower", "diremaulBuff", 
                   "tracesOfSilithus", "arcaneIntellect", "markOfTheWild", "moonkinAura", "blessingOfWisdom", "blessingOfKings", "manaSpringTotem"];
  for (i=0; i<buffArray.length; i++) {
    if (getCookie(buffArray[i]) !== "noCookie")
      document.getElementById(buffArray[i]).checked = getCookie(buffArray[i]) == "true";
  }
  /*document.getElementById("curseShadow").checked = getCookie("curseShadow") == "true";
  document.getElementById("shadowWeaving").checked = getCookie("shadowWeaving") == "true";
  document.getElementById("curseElements").checked = getCookie("curseElements") == "true";
  document.getElementById("Scorch").checked = getCookie("Scorch") == "true";
  document.getElementById("supremeFlask").checked = getCookie("supremeFlask") == "true";
  document.getElementById("brilliantOil").checked = getCookie("brilliantOil") == "true";
  document.getElementById("arcaneElixir").checked = getCookie("arcaneElixir") == "true";
  document.getElementById("shadowElixir").checked = getCookie("shadowElixir") == "true";
  document.getElementById("holiday").checked = getCookie("holiday") == "true";
  document.getElementById("fireElixir").checked = getCookie("fireElixir") == "true";
  document.getElementById("manaPotion").checked = getCookie("manaPotion") == "true";
  document.getElementById("demonicRune").checked = getCookie("demonicRune") == "true";
  document.getElementById("runnTumTuber").checked = getCookie("runnTumTuber") == "true";
  document.getElementById("nightfinSoup").checked = getCookie("nightfinSoup") == "true";
  document.getElementById("magebloodPotion").checked = getCookie("magebloodPotion") == "true";
  document.getElementById("hakkarBuff").checked = getCookie("hakkarBuff") == "true";
  document.getElementById("onyxiaBuff").checked = getCookie("onyxiaBuff") == "true";
  document.getElementById("songflower").checked = getCookie("songflower") == "true";
  document.getElementById("diremaulBuff").checked = getCookie("diremaulBuff") == "true";
  document.getElementById("darkMoonFaire").checked = getCookie("darkMoonFaire") == "true";
  document.getElementById("tracesOfSilithus").checked = getCookie("tracesOfSilithus") == "true";
  document.getElementById("arcaneIntellect").checked = getCookie("arcaneIntellect") == "true";
  document.getElementById("markOfTheWild").checked = getCookie("markOfTheWild") == "true";
  document.getElementById("moonkinAura").checked = getCookie("moonkinAura") == "true";
  document.getElementById("blessingOfWisdom").checked = getCookie("blessingOfWisdom") == "true";
  document.getElementById("blessingOfKings").checked = getCookie("blessingOfKings") == "true";
  document.getElementById("manaSpringTotem").checked = getCookie("manaSpringTotem") == "true";*/
  
  document.getElementById("disableLifeTap").checked = getCookie("lifeTap") == "false";
  
  for (i=0; i<50; i++) {
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
  if (getCookie("itemStaff") == "false") {
    clickTable("tableStaff"); console.log("I was here")
  }
  
  var enchantArray = ["enchantSpellPower", "enchantZG1", "enchantFocus1", "enchantPowerScourge", "enchantZGShoulder", "enchantThreat", "enchantGreaterStats", "enchantStats", 
                      "enchantIntellect", "enchantStaminaWrists", "enchantShadow", "enchantFire", "enchantZG2", "enchantFocus2", "enchantMinorSpeed", "enchantStaminaFeet"];
  for (i=0; i<enchantArray.length; i++) {
    if (getCookie(enchantArray[i]) !== "noCookie")
      document.getElementById(enchantArray[i]).checked = getCookie(enchantArray[i]) == "true";
  }
  /*document.getElementById("enchantSpellPower").checked = getCookie("enchantSpellPower") == "true";
  document.getElementById("enchantZG1").checked = getCookie("enchantZG1") == "true";
  document.getElementById("enchantFocus1").checked = getCookie("enchantFocus1") == "true";
  document.getElementById("enchantPowerScourge").checked = getCookie("enchantPowerScourge") == "true";
  document.getElementById("enchantZGShoulder").checked = getCookie("enchantZGShoulder") == "true";
  document.getElementById("enchantThreat").checked = getCookie("enchantThreat") == "true";
  document.getElementById("enchantGreaterStats").checked = getCookie("enchantGreaterStats") == "true";
  document.getElementById("enchantStats").checked = getCookie("enchantStats") == "true";
  document.getElementById("enchantIntellect").checked = getCookie("enchantIntellect") == "true";
  document.getElementById("enchantStaminaWrists").checked = getCookie("enchantStaminaWrists") == "true";
  document.getElementById("enchantShadow").checked = getCookie("enchantShadow") == "true";
  document.getElementById("enchantFire").checked = getCookie("enchantFire") == "true";
  document.getElementById("enchantZG2").checked = getCookie("enchantZG2") == "true";
  document.getElementById("enchantFocus2").checked = getCookie("enchantFocus2") == "true";
  document.getElementById("enchantMinorSpeed").checked = getCookie("enchantMinorSpeed") == "true";
  document.getElementById("enchantStaminaFeet").checked = getCookie("enchantStaminaFeet") == "true";*/
  
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
