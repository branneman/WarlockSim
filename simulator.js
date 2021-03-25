function runSim(gearTable, baseLine, makeBaseLine) {
  console.time('Timer')
  var SP   = Number(document.getElementById("spellPower").value) + 30*document.getElementById("enchantSpellPower").checked + 8*document.getElementById("enchantFocus1").checked + 8*document.getElementById("enchantFocus2").checked + 18*document.getElementById("enchantZG1").checked + 18*document.getElementById("enchantZG2").checked + 18*document.getElementById("enchantZGShoulder").checked + 15*document.getElementById("enchantPowerScourge").checked;
  var ShP  = Number(document.getElementById("shadowPower").value) + 20*document.getElementById("enchantShadow").checked;
  var FiP  = Number(document.getElementById("firePower").value) + 20*document.getElementById("enchantFire").checked;
  var crit = Number(document.getElementById("spellCrit").value) + 1*document.getElementById("enchantPowerScourge").checked;
  var hit  = Number(document.getElementById("spellHit").value);
  var int  = Number(document.getElementById("intellect").value) + 7*document.getElementById("enchantIntellect").checked + 3*document.getElementById("enchantStats").checked + 4*document.getElementById("enchantGreaterStats").checked;
  var pen  = Number(document.getElementById("spellPen").value);
  var mp5  = Number(document.getElementById("mp5").value);
  var tailoring = document.getElementById("tailoring").checked;
  
  var classList = new Array;
  var items = document.getElementsByName('activeItem');
  for (var i=0; i<items.length; i++) {
    if (arguments.length > 0 && gearTable.parentNode.parentNode.id === items[i].parentNode.parentNode.id) {
      var iIndex = i;
      if (arguments.length < 3) {
        SP   += Number(gearTable.children[4].innerHTML);
        ShP  += Number(gearTable.children[5].innerHTML);
        FiP  += Number(gearTable.children[6].innerHTML);
        crit += Number(gearTable.children[8].innerHTML.slice(0,1));
        hit  += Number(gearTable.children[7].innerHTML.slice(0,1));
        int  += Number(gearTable.children[3].innerHTML);
        pen  += Number(gearTable.children[9].innerHTML);
        mp5  += Number(gearTable.children[10].innerHTML);
        classList.push(gearTable.classList[0]);
      }
    }
    else {
      SP   += Number(items[i].children[4].innerHTML);
      ShP  += Number(items[i].children[5].innerHTML);
      FiP  += Number(items[i].children[6].innerHTML);
      crit += Number(items[i].children[8].innerHTML.slice(0,1));
      hit  += Number(items[i].children[7].innerHTML.slice(0,1));
      int  += Number(items[i].children[3].innerHTML);
      pen  += Number(items[i].children[9].innerHTML);
      mp5  += Number(items[i].children[10].innerHTML);
      classList.push(items[i].classList[0]);
    }
  }
  var itemName1 = false, itemName2 = false, itemName3 = false;
  if (arguments.length == 3)
    var tempItem = "Nope";
  else if (arguments.length > 0)
    var tempItem = gearTable.children[0].innerHTML;
  if (arguments.length > 0 && iIndex==13) {
    var itemName1 = tempItem;
    var itemName2 = items[14].children[0].innerHTML;
    var itemName3 = items[15].children[0].innerHTML;}
  else if (arguments.length > 0 && iIndex==14) {
    var itemName1 = items[13].children[0].innerHTML;
    var itemName2 = tempItem;
    var itemName3 = items[15].children[0].innerHTML;}
  else if (arguments.length > 0 && iIndex==15) {
    var itemName1 = items[13].children[0].innerHTML;
    var itemName2 = items[14].children[0].innerHTML;
    var itemName3 = tempItem;}
  else {
    var itemName1 = items[13].children[0].innerHTML;
    var itemName2 = items[14].children[0].innerHTML;
    var itemName3 = items[15].children[0].innerHTML;}
  //console.log(iIndex + ": " + itemName1 + ", " + itemName2 + ", " + itemName3)
  var TREOS = false, ZHC = false, TOEP = false, HCOD = false, REEL = false, EOM = false, trinket1 = false, trinket2 = false;
  if (itemName1 == "The Restrained Essence of Sapphiron" || itemName2 == "The Restrained Essence of Sapphiron" || itemName3 == "The Restrained Essence of Sapphiron") {
    TREOS = true;
    if (TREOS+ZHC+TOEP+HCOD+REEL+EOM == 1)
      trinket1 = "TREOS";
    else if (TREOS+ZHC+TOEP+HCOD+REEL+EOM == 2)
      trinket2 = "TREOS";
  }
  if (itemName1 == "Zandalarian Hero Charm" || itemName2 == "Zandalarian Hero Charm" || itemName3 == "Zandalarian Hero Charm") {
    ZHC = true;
    if (TREOS+ZHC+TOEP+HCOD+REEL+EOM == 1)
      trinket1 = "ZHC";
    else if (TREOS+ZHC+TOEP+HCOD+REEL+EOM == 2)
      trinket2 = "ZHC";
  }
  if (itemName1 == "Talisman of Ephemeral Power" || itemName2 == "Talisman of Ephemeral Power" || itemName3 == "Talisman of Ephemeral Power") {
    TOEP = true;
    if (TREOS+ZHC+TOEP+HCOD+REEL+EOM == 1)
      trinket1 = "TOEP";
    else if (TREOS+ZHC+TOEP+HCOD+REEL+EOM == 2)
      trinket2 = "TOEP";
  }
  if (itemName1 == "Hazza'rah's Charm of Destruction" || itemName2 == "Hazza'rah's Charm of Destruction" || itemName3 == "Hazza'rah's Charm of Destruction") {
    HCOD = true;
    if (TREOS+ZHC+TOEP+HCOD+REEL+EOM == 1)
      trinket1 = "HCOD";
    else if (TREOS+ZHC+TOEP+HCOD+REEL+EOM == 2)
      trinket2 = "HCOD";
  }
  if (itemName1 == "Nat Pagle's Broken Reel" || itemName2 == "Nat Pagle's Broken Reel" || itemName3 == "Nat Pagle's Broken Reel") {
    REEL = true;
    if (TREOS+ZHC+TOEP+HCOD+REEL+EOM == 1)
      trinket1 = "REEL";
    else if (TREOS+ZHC+TOEP+HCOD+REEL+EOM == 2)
      trinket2 = "REEL";
  }
  if (itemName1 == "Eye of Moam" || itemName2 == "Eye of Moam" || itemName3 == "Eye of Moam") {
    EOM = true;
    if (TREOS+ZHC+TOEP+HCOD+REEL+EOM == 1)
      trinket1 = "EOM";
    else if (TREOS+ZHC+TOEP+HCOD+REEL+EOM == 2)
      trinket2 = "EOM";
  }
  //console.log("TREOS:"+TREOS+" ZHC:"+ZHC+" TEOP:"+TOEP+" HCOD:"+HCOD+" REEL:"+REEL+" EOM:"+EOM); 
  //console.log(trinket1); console.log(trinket2)
  var setT05 = 0, setT1 = 0, setT2 = 0, setT25 = 0, setT3 = 0, setZGRing = 0, setZG = 0, setAQ20 = 0, setPvPRare = 0, setPvPEpic = 0, setBV = 0, setUDC = 0;
  for (i=0; i<classList.length; i++) {
    if (classList[i] == "setT05")
      setT05++
    else if (classList[i] == "setT1")
      setT1++
    else if (classList[i] == "setT2")
      setT2++
    else if (classList[i] == "setT25")
      setT25++
    else if (classList[i] == "setT3")
      setT3++
    else if (classList[i] == "setZGRing")
      setZGRing++
    else if (classList[i] == "setZG")
      setZG++
    else if (classList[i] == "setAQ20")
      setAQ20++
    else if (classList[i] == "setPvPRare")
      setPvPRare++
    else if (classList[i] == "setPvPEpic")
      setPvPEpic++
    else if (classList[i] == "setBV")
      setBV++
    else if (classList[i] == "setUDC")
      setUDC++
  }
  var bonusList = "", bonusDrainLife = false, bonusShadowCost = false, bonusImmolateDMG = false, bonusShadowBoltCost = false, bonusCorruption = false, bonusCorruptionZG = false, bonusImmolatePvP = false, UDC = false;
  if (setT05 >= 6) {
    SP += 23;
    bonusList += "<tr><td>Tier 0.5: 6-set</td></tr>";}
  if (setT1 >= 3) {
    bonusDrainLife = true;
    bonusList += "<tr><td>Tier 1: 3-set</td></tr>";}
  if (setT1 >= 8) {
    bonusShadowCost = true;
    bonusList += "<tr><td>Tier 1: 8-set</td></tr>";}
  if (setT2 >= 3) {
    SP += 23;
    bonusList += "<tr><td>Tier 2: 3-set</td></tr>";}
  if (setT25 >= 3) {
    bonusImmolateDMG = true;
    bonusList += "<tr><td>Tier 2.5: 3-set</td></tr>";}
  if (setT25 >= 5) {
    bonusShadowBoltCost = true;
    bonusList += "<tr><td>Tier 2.5: 5-set</td></tr>";}
  if (setT3 >= 4) {
    bonusCorruption = true;
    bonusList += "<tr><td>Tier 3: 4-set</td></tr>";}
  if (setZGRing >= 2) {
    SP += 6; hit += 1;
    bonusList += "<tr><td>Zanzil's Rings</td></tr>";}
  if (setZG >= 2) {
    SP += 12;
    bonusList += "<tr><td>ZG Gear: 2-set</td></tr>";}
  if (setZG >= 3) {
    bonusCorruptionZG = true;
    bonusList += "<tr><td>ZG Gear: 3-set</td></tr>";}
  if (setPvPRare >= 2) {
    SP += 23;
    bonusList += "<tr><td>PvP Rare: 2-set</td></tr>";}
  if (setPvPRare >= 4) {
    bonusImmolatePvP = true;
    bonusList += "<tr><td>PvP Rare: 4-set</td></tr>";}
  if (setPvPEpic >= 3) {
    bonusImmolatePvP = true;
    bonusList += "<tr><td>PvP Epic: 3-set</td></tr>";}
  if (setPvPEpic >= 6) {
    SP += 23;
    bonusList += "<tr><td>PvP Epic: 6-set</td></tr>";}
  if (setBV >= 3 && tailoring == true) {
    crit += 2;
    bonusList += "<tr><td>Bloodvine Set</td></tr>";}
  if (setUDC >= 3) {
    UDC = true;
    bonusList += "<tr><td>Undead Cleansing Set</td></tr>";}
  
  if (arguments.length == 0)
    document.getElementById("setBonuses").innerHTML = "<table class='finalStats' style=text-align:left><tr><th>Set Bonuses Active</th></tr>" + bonusList + "</table>";
  
  var race = document.getElementById("race").value, gnome = false;
  if (race == "gnome") {
    var gnome = true;
    int += 113;}
  else if (race == "human")
    int += 110;
  else if (race == "orc")
    int += 107;
  else if (race == "undead")
    int += 108;
  
  //console.log("SP:"+(SP+ShP)); console.log("ShP:"+ShP); console.log("FiP:"+FiP); console.log("Crit:"+crit); console.log("Hit:"+hit); console.log("Int:"+int); console.log(" ")
  
  /*var SP = Number(document.getElementById("spellPower").value);
  var crit = Number(document.getElementById("spellCrit").value);
  var hit = Number(document.getElementById("spellHit").value);
  var int = Number(document.getElementById("intellect").value);
  var mp5 = Number(document.getElementById("mp5").value);*/
  var fightStart = Number(document.getElementById("fightStart").value);
  var fightEnd = Number(document.getElementById("fightEnd").value);
  
  var curse = document.querySelector('input[name=curse]:checked').value;
  var primary = document.querySelector('input[name=primary]:checked').value;
  var finisher = document.querySelector('input[name=finisher]:checked').value;
  if (curse == "debuff") {
    var threatTime = 1.5;
    var useAgony = false;
    var useDoom = false;}
  else if (curse == "agony") {
    var threatTime = 0;
    var useAgony = true;
    var useDoom = false;}
  else if (curse == "doom") {
    var threatTime = 0;
    var useAgony = false;
    var useDoom = true;}
  else {
    var threatTime = 0;
    var useAgony = false;
    var useDoom = false;}
  
  var useCorruption = document.getElementById("rotationCorruption").checked;
  var useImmolate = document.getElementById("rotationImmolate").checked;
  var useSiphon = document.getElementById("rotationSiphonLife").checked;
  var lifeTap = document.getElementById("disableLifeTap").checked == false;
  
  var numPI = Number(document.getElementById("powerInfusion").value);
  var usePI = false;
  if (numPI > 0)
    usePI = true;
  
  var warlockAtiesh = Number(document.getElementById("warlockAtiesh").value);
  var mageAtiesh = Number(document.getElementById("mageAtiesh").value);
  var druidAtiesh = Number(document.getElementById("druidAtiesh").value);
  
  var warlockCount = Number(document.getElementById("warlockCount").value);

  var bossLevel = Number(document.getElementById("bossLevel").value);
  var levelRes = (bossLevel-60)*8;
  if (bossLevel == 63)
    var baseHit = 83;
  else if (bossLevel == 62)
    var baseHit = 94;
  else if (bossLevel == 61)
    var baseHit = 95;
  else if (bossLevel == 60)
    var baseHit = 96;
  
  var timeVec = new Array;
  timeVec[0] = fightStart;
  if (arguments.length > 0) {
    for (var i=fightStart+5; i<=fightEnd; i=i+5)
      timeVec[timeVec.length] = i;
  }
  else {
    for (var i=fightStart+0.5; i<=fightEnd; i=i+0.5)
      timeVec[timeVec.length] = i;
  }

  var hakkarBuff = document.getElementById("hakkarBuff").checked;
  var onyxiaBuff = document.getElementById("onyxiaBuff").checked;
  var songflower = document.getElementById("songflower").checked;
  var diremaulBuff = document.getElementById("diremaulBuff").checked;
  
  var manaExtra = 1800*document.getElementById("manaPotion").checked + 1200*document.getElementById("demonicRune").checked + 100*document.getElementById("enchantMana").checked;
  ShP += SP + 150*document.getElementById("supremeFlask").checked + 60*document.getElementById("blessedOil").checked + 36*document.getElementById("brilliantOil").checked + 35*document.getElementById("arcaneElixir").checked + 40*document.getElementById("shadowElixir").checked + 23*document.getElementById("holiday").checked + 33*warlockAtiesh;
  FiP += SP + 150*document.getElementById("supremeFlask").checked + 60*document.getElementById("blessedOil").checked + 36*document.getElementById("brilliantOil").checked + 35*document.getElementById("arcaneElixir").checked + 40*document.getElementById("fireElixir").checked + 23*document.getElementById("holiday").checked + 33*warlockAtiesh;
  var afflictionHit = hit + 2*document.getElementById("talentSuppression").parentNode.children[1].innerHTML;
  var afflictionChance = Math.min(99, baseHit+afflictionHit);
  crit += 10*onyxiaBuff + 5*songflower + 3*diremaulBuff + 1*document.getElementById("brilliantOil").checked + 3*document.getElementById("moonkinAura").checked + 1*document.getElementById("talentDevastation").parentNode.children[1].innerHTML + 2*mageAtiesh;
  int  += 31*document.getElementById("arcaneIntellect").checked + 16*document.getElementById("markOfTheWild").checked + 10*document.getElementById("runnTumTuber").checked + 15*songflower;
  mp5  += 8*document.getElementById("nightfinSoup").checked + 12*document.getElementById("magebloodPotion").checked + 42*document.getElementById("blessingOfWisdom").checked + 25*document.getElementById("manaSpringTotem").checked + 11*druidAtiesh;
  
  var sbCost = 380 * (1 - 0.01*document.getElementById("talentCataclysm").parentNode.children[1].innerHTML) * (1-0.15*bonusShadowBoltCost) * (1-0.15*bonusShadowCost);
  var sbTime = 3 - 0.1*document.getElementById("talentBane").parentNode.children[1].innerHTML;
  var burnCost = 365 * (1 - 0.01*document.getElementById("talentCataclysm").parentNode.children[1].innerHTML) * (1-0.15*bonusShadowCost);
  var searingCost = 168 * (1 - 0.01*document.getElementById("talentCataclysm").parentNode.children[1].innerHTML);
  var deathCoilCost = 565 * (1-0.15*bonusShadowCost);
  var drainLifeCost = 300 * (1-0.15*bonusShadowCost);
  var drainLifeTime = 5;
  var GCD = 1.5;
  var corruptionCost = 340 * (1-0.15*bonusShadowCost);
  var corruptionDuration = 18;
  var corruptionTime = Math.max(GCD, 2 - 0.4*document.getElementById("talentCorruption").parentNode.children[1].innerHTML);
  var agonyCost = 215 * (1-0.15*bonusShadowCost);
  var agonyDuration = 24;
  var doomCost = 300 * (1-0.15*bonusShadowCost);
  var doomDuration = 60;
  var immolateCost = 380 * (1 - 0.01*document.getElementById("talentCataclysm").parentNode.children[1].innerHTML);
  var immolateDuration = 15;
  var immolateTime = 2 - 0.1*document.getElementById("talentBane").parentNode.children[1].innerHTML - 0.2*bonusImmolatePvP;
  var immolateR7Cost = 370 * (1 - 0.01*document.getElementById("talentCataclysm").parentNode.children[1].innerHTML);
  var siphonCost = 365 * (1-0.15*bonusShadowCost);
  var siphonDuration = 30;
  
  if (primary == "shadowBolt") {
    var primaryCost = sbCost;
    var primaryTime = sbTime;
    var fireDS = false;
    var shadowDS = true;}
  else if (primary == "searingPain") {
    var primaryCost = searingCost;
    var primaryTime = GCD;
    var fireDS = true;
    var shadowDS = false;}
  else if (primary == "immolateR7") {
    var primaryCost = immolateR7Cost;
    var primaryTime = immolateTime;
    var fireDS = true;
    var shadowDS = false;}
  else if (primary == "immolateR8") {
    var primaryCost = immolateCost;
    var primaryTime = immolateTime;
    var fireDS = true;
    var shadowDS = false;}
  else if (primary == "drainLife") {
    var primaryCost = drainLifeTime;
    var primaryTime = drainLifeTime;
    var fireDS = false;
    var shadowDS = true;}
  
  if (finisher == "shadowburn") {
    var finisherCost = burnCost;
    var finisherTime = 0;}
  else if (finisher == "deathCoil") {
    var finisherCost = deathCoilCost;
    var finisherTime = 0;}
  else if (finisher == "searingPain") {
    var finisherCost = searingCost;
    var finisherTime = GCD;}
  else {
    var finisherCost = 0;
    var finisherTime = 0;}
  
  for (var q=1; q<=7; q++) {
    if (q==1) {
      ShP = ShP + 1;
      FiP = FiP + 1;}
    else if (q==2) {
      ShP = ShP - 1;
      FiP = FiP - 1;
      int = int + 10;}
    else if (q==3) {
      int = int - 10;
      crit = crit + 1;}
    else if (q==4) {
      crit = crit - 1;
      hit = hit + 1;}
    else if (q==5) {
      hit = hit - 1;
      mp5 = mp5 + 3;}
    else if (q==6) {
      mp5 = mp5 - 3;
      pen = pen + 1;}
    else if (q==7) {
      pen = pen - 1;}
    
    var shadowRes = levelRes + Math.max(0, Number(document.getElementById("bossShadowRes").value) - pen - 75*document.getElementById("curseShadow").checked);
    var fireRes = levelRes + Math.max(0, Number(document.getElementById("bossFireRes").value) - pen - 75*document.getElementById("curseElements").checked);
    var shadowReduction = 1 - shadowRes/400;
    var fireReduction = 1 - fireRes/400;
    var shadowMultiplier = shadowReduction * (1 + shadowDS*0.15*document.getElementById("talentDemonicSacrifice").parentNode.children[1].innerHTML) * (1 + 0.1*document.getElementById("curseShadow").checked) * (1 + 0.15*document.getElementById("shadowWeaving").checked) * (1 + 0.02*document.getElementById("talentShadowMastery").parentNode.children[1].innerHTML) * (1 + 0.10*document.getElementById("darkMoonFaire").checked) * (1 + 0.05*document.getElementById("tracesOfSilithus").checked); //DS, CoS, Weaving, SM
    var fireMultiplier = fireReduction * (1 + fireDS*0.15*document.getElementById("talentDemonicSacrifice").parentNode.children[1].innerHTML) * (1 + 0.1*document.getElementById("curseElements").checked) * (1 + 0.15*document.getElementById("Scorch").checked) * (1 + 0.02*document.getElementById("talentEmberstorm").parentNode.children[1].innerHTML) * (1 + 0.10*document.getElementById("darkMoonFaire").checked) * (1 + 0.05*document.getElementById("tracesOfSilithus").checked);; //DS, CoE, Scorch, Emberstorm
    var critMultiplier = (1.5 + 0.5*document.getElementById("talentRuin").parentNode.children[1].innerHTML) * (1 + 0.02*UDC);
    
    var intel = Math.round(int*(1 + 0.1*document.getElementById("blessingOfKings").checked)*(1 + 0.05*gnome)*(1 + 0.15*hakkarBuff));
    var manaMain = 1093 + intel*15 + manaExtra;
    var tapGain = (424+ShP*0.8) * (1 + 0.1*document.getElementById("talentLifeTap").parentNode.children[1].innerHTML) * lifeTap;
    var avgNonCrit = (510+(ShP*6/7)) * shadowMultiplier;
    var avgBurn = (488+(ShP*3/7)) * shadowMultiplier * document.getElementById("talentShadowburn").parentNode.children[1].innerHTML;
    var avgDeathCoil = (476+(ShP*1.5/7)) * shadowMultiplier;
    var avgSearing = (226+(FiP*3/7)) * fireMultiplier;
    var avgImmo = (279*(1+0.05*bonusImmolateDMG) + (FiP*0.2)) * fireMultiplier * (1 + 0.05*document.getElementById("talentImmolate").parentNode.children[1].innerHTML);
    var avgImmoR7 = (258*(1+0.05*bonusImmolateDMG) + (FiP*0.2)) * fireMultiplier * (1 + 0.05*document.getElementById("talentImmolate").parentNode.children[1].innerHTML);
    
    var miss = Math.max(1, 100 - baseHit - hit);
    var critChance = Math.min(100, (1.7 + crit + (intel/60.6)));
    var critFinal = critChance * (100-miss)/100;
    var critSearing = Math.min(100, (1.7 + crit + (intel/60.6) + 2*document.getElementById("talentSearingPain").parentNode.children[1].innerHTML)) * (100-miss)/100;
    var regularHit = 100-miss-critFinal;
    var shadowVuln = (1 - Math.pow(1 - critFinal/100*(1-miss/100), 4/(1-miss/100))) * 0.2*document.getElementById("talentShadowBolt").parentNode.children[1].innerHTML * (primary == "shadowBolt");
    
    var DPS = new Array;
    var lifeTaps = new Array;
    var manaLeft = new Array;
    var ShPOld = ShP, FiPOld = FiP, critOld = crit, hitOld = hit, penOld = pen;
    for (var i=0; i<timeVec.length; i++) {
      var doom = false, agony = false, corruption = false, immolate = false, siphon = false, time = threatTime, damage = 0, mana = manaMain, timePast = 0, SBC = 0, trinketTime = 0, trinket2Time, trinket1CD = 0, trinket2CD = 0, trinket1Bonus = false, trinket2Bonus = false, piTime = 0, piCD = 0, ZHCStacks = 0, piBonus = false;
      ShP = ShPOld, FiP = FiPOld, crit = critOld, hit = hitOld, pen = penOld;
      if (useDoom == true)
        var doomUse = 0;
      else {
        var doomUse = Infinity;
        doom = true;}
      if (useAgony == true)
        var agonyUse = 0;
      else {
        var agonyUse = Infinity;
        agony = true;}
      if (useCorruption == true)
        var corruptionUse = 0;
      else {
        var corruptionUse = Infinity;
        corruption = true;}
      if (useImmolate == true)
        var immolateUse = 0;
      else {
        var immolateUse = Infinity;
        immolate = true;}
      if (useSiphon == true)
        var siphonUse = 0;
      else {
        var siphonUse = Infinity;
        siphon = true;}
      
      while (time <= timeVec[i]) {
        var timeLeft = timeVec[i]-time;
        mana += (time-timePast) * mp5/5;
        trinketTime -= time-timePast;
        trinket2Time -= time-timePast;
        trinket1CD -= time-timePast;
        trinket2CD -= time-timePast;
        piTime -= time-timePast;
        piCD -= time-timePast;
        timePast = time;
        
        if (doom == true && time>=doomUse+doomDuration)
          doom = false;
        if (agony == true && time>=agonyUse+agonyDuration)
          agony = false;
        if (corruption == true && time>=corruptionUse+corruptionDuration)
          corruption = false;
        if (immolate == true && time>=immolateUse+immolateDuration)
          immolate = false;
        if (siphon == true && time>=siphonUse+siphonDuration)
          siphon = false;
        
        if (ZHCStacks > 0) {
          ZHCStacks--;
          ShP -= 17;
          FiP -= 17;
          tapGain = (424+ShP*0.8) * (1 + 0.1*document.getElementById("talentLifeTap").parentNode.children[1].innerHTML) * lifeTap;
          avgNonCrit = (510+(ShP*6/7)) * shadowMultiplier;
          avgBurn = (488+(ShP*3/7)) * shadowMultiplier * document.getElementById("talentShadowburn").parentNode.children[1].innerHTML;
          avgDeathCoil = (476+(ShP*1.5/7)) * shadowMultiplier;
          avgSearing = (226+(FiP*3/7)) * fireMultiplier;
          avgImmo = (279*(1+0.05*bonusImmolateDMG) + (FiP*0.2)) * fireMultiplier * (1 + 0.05*document.getElementById("talentImmolate").parentNode.children[1].innerHTML);
          avgImmoR7 = (258*(1+0.05*bonusImmolateDMG) + (FiP*0.2)) * fireMultiplier * (1 + 0.05*document.getElementById("talentImmolate").parentNode.children[1].innerHTML);
        }
        
        if (trinket1Bonus == true && trinketTime <= 0) {
          if (trinket1 == "TREOS") {
            trinket1Bonus = false;
            ShP -= 130;
            FiP -= 130;
          }
          else if (trinket1 == "ZHC") {
            trinket1Bonus = false;
            ShP -= 17*ZHCStacks;
            FiP -= 17*ZHCStacks;
            ZHCStacks = 0;
          }
          else if (trinket1 == "TOEP") {
            trinket1Bonus = false;
            ShP -= 175;
            FiP -= 175;
          }
          else if (trinket1 == "HCOD") {
            trinket1Bonus = false;
            crit -= 10;
          }
          else if (trinket1 == "REEL") {
            trinket1Bonus = false;
            hit -= 10;
          }
          else if (trinket1 == "EOM") {
            trinket1Bonus = false;
            ShP -= 50;
            FiP -= 50;
            pen -= 100;
          }
          shadowRes = levelRes + Math.max(0, Number(document.getElementById("bossShadowRes").value) - pen - 75*document.getElementById("curseShadow").checked);
          fireRes = levelRes + Math.max(0, Number(document.getElementById("bossFireRes").value) - pen - 75*document.getElementById("curseElements").checked);
          shadowReduction = 1 - shadowRes/400;
          fireReduction = 1 - fireRes/400;
          shadowMultiplier = (1 + piBonus*0.20) * shadowReduction * (1 + shadowDS*0.15*document.getElementById("talentDemonicSacrifice").parentNode.children[1].innerHTML) * (1 + 0.1*document.getElementById("curseShadow").checked) * (1 + 0.15*document.getElementById("shadowWeaving").checked) * (1 + 0.02*document.getElementById("talentShadowMastery").parentNode.children[1].innerHTML) * (1 + 0.10*document.getElementById("darkMoonFaire").checked) * (1 + 0.05*document.getElementById("tracesOfSilithus").checked); //DS, CoS, Weaving, SM
          fireMultiplier = (1 + piBonus*0.20) * fireReduction * (1 + fireDS*0.15*document.getElementById("talentDemonicSacrifice").parentNode.children[1].innerHTML) * (1 + 0.1*document.getElementById("curseElements").checked) * (1 + 0.15*document.getElementById("Scorch").checked) * (1 + 0.02*document.getElementById("talentEmberstorm").parentNode.children[1].innerHTML) * (1 + 0.10*document.getElementById("darkMoonFaire").checked) * (1 + 0.05*document.getElementById("tracesOfSilithus").checked);; //DS, CoE, Scorch, Emberstorm
          tapGain = (424+ShP*0.8) * (1 + 0.1*document.getElementById("talentLifeTap").parentNode.children[1].innerHTML) * lifeTap;
          avgNonCrit = (510+(ShP*6/7)) * shadowMultiplier;
          avgBurn = (488+(ShP*3/7)) * shadowMultiplier * document.getElementById("talentShadowburn").parentNode.children[1].innerHTML;
          avgDeathCoil = (476+(ShP*1.5/7)) * shadowMultiplier;
          avgSearing = (226+(FiP*3/7)) * fireMultiplier;
          avgImmo = (279*(1+0.05*bonusImmolateDMG) + (FiP*0.2)) * fireMultiplier * (1 + 0.05*document.getElementById("talentImmolate").parentNode.children[1].innerHTML);
          avgImmoR7 = (258*(1+0.05*bonusImmolateDMG) + (FiP*0.2)) * fireMultiplier * (1 + 0.05*document.getElementById("talentImmolate").parentNode.children[1].innerHTML);
          miss = Math.max(1, 100 - baseHit - hit);
          critChance = Math.min(100, (1.7 + crit + (intel/60.6)));
          critFinal = critChance * (100-miss)/100;
          critSearing = Math.min(100, (1.7 + crit + (intel/60.6) + 2*document.getElementById("talentSearingPain").parentNode.children[1].innerHTML)) * (100-miss)/100;
          regularHit = 100-miss-critFinal;
          shadowVuln = (1 - Math.pow(1 - critFinal/100*(1-miss/100), 4/(1-miss/100))) * 0.2*document.getElementById("talentShadowBolt").parentNode.children[1].innerHTML * (primary == "shadowBolt");
        }
        
        if (trinket2Bonus == true && trinketTime <= 0) {
          if (trinket2 == "TREOS") {
            trinket2Bonus = false;
            ShP -= 130;
            FiP -= 130;
          }
          else if (trinket2 == "ZHC") {
            trinket2Bonus = false;
            ShP -= 17*ZHCStacks;
            FiP -= 17*ZHCStacks;
            ZHCStacks = 0;
          }
          else if (trinket2 == "TOEP") {
            trinket2Bonus = false;
            ShP -= 175;
            FiP -= 175;
          }
          else if (trinket2 == "HCOD") {
            trinket2Bonus = false;
            crit -= 10;
          }
          else if (trinket2 == "REEL") {
            trinket2Bonus = false;
            hit -= 10;
          }
          else if (trinket2 == "EOM") {
            trinket2Bonus = false;
            ShP -= 50;
            FiP -= 50;
            pen -= 100;
          }
          shadowRes = levelRes + Math.max(0, Number(document.getElementById("bossShadowRes").value) - pen - 75*document.getElementById("curseShadow").checked);
          fireRes = levelRes + Math.max(0, Number(document.getElementById("bossFireRes").value) - pen - 75*document.getElementById("curseElements").checked);
          shadowReduction = 1 - shadowRes/400;
          fireReduction = 1 - fireRes/400;
          shadowMultiplier = (1 + piBonus*0.20) * shadowReduction * (1 + shadowDS*0.15*document.getElementById("talentDemonicSacrifice").parentNode.children[1].innerHTML) * (1 + 0.1*document.getElementById("curseShadow").checked) * (1 + 0.15*document.getElementById("shadowWeaving").checked) * (1 + 0.02*document.getElementById("talentShadowMastery").parentNode.children[1].innerHTML) * (1 + 0.10*document.getElementById("darkMoonFaire").checked) * (1 + 0.05*document.getElementById("tracesOfSilithus").checked); //DS, CoS, Weaving, SM
          fireMultiplier = (1 + piBonus*0.20) * fireReduction * (1 + fireDS*0.15*document.getElementById("talentDemonicSacrifice").parentNode.children[1].innerHTML) * (1 + 0.1*document.getElementById("curseElements").checked) * (1 + 0.15*document.getElementById("Scorch").checked) * (1 + 0.02*document.getElementById("talentEmberstorm").parentNode.children[1].innerHTML) * (1 + 0.10*document.getElementById("darkMoonFaire").checked) * (1 + 0.05*document.getElementById("tracesOfSilithus").checked);; //DS, CoE, Scorch, Emberstorm
          tapGain = (424+ShP*0.8) * (1 + 0.1*document.getElementById("talentLifeTap").parentNode.children[1].innerHTML) * lifeTap;
          avgNonCrit = (510+(ShP*6/7)) * shadowMultiplier;
          avgBurn = (488+(ShP*3/7)) * shadowMultiplier * document.getElementById("talentShadowburn").parentNode.children[1].innerHTML;
          avgDeathCoil = (476+(ShP*1.5/7)) * shadowMultiplier;
          avgSearing = (226+(FiP*3/7)) * fireMultiplier;
          avgImmo = (279*(1+0.05*bonusImmolateDMG) + (FiP*0.2)) * fireMultiplier * (1 + 0.05*document.getElementById("talentImmolate").parentNode.children[1].innerHTML);
          avgImmoR7 = (258*(1+0.05*bonusImmolateDMG) + (FiP*0.2)) * fireMultiplier * (1 + 0.05*document.getElementById("talentImmolate").parentNode.children[1].innerHTML);
          miss = Math.max(1, 100 - baseHit - hit);
          critChance = Math.min(100, (1.7 + crit + (intel/60.6)));
          critFinal = critChance * (100-miss)/100;
          critSearing = Math.min(100, (1.7 + crit + (intel/60.6) + 2*document.getElementById("talentSearingPain").parentNode.children[1].innerHTML)) * (100-miss)/100;
          regularHit = 100-miss-critFinal;
          shadowVuln = (1 - Math.pow(1 - critFinal/100*(1-miss/100), 4/(1-miss/100))) * 0.2*document.getElementById("talentShadowBolt").parentNode.children[1].innerHTML * (primary == "shadowBolt");
        }
        
        if (piBonus == true && piTime <= 0) {
          piBonus = false;
          shadowMultiplier = (1 + piBonus*0.20) * shadowReduction * (1 + shadowDS*0.15*document.getElementById("talentDemonicSacrifice").parentNode.children[1].innerHTML) * (1 + 0.1*document.getElementById("curseShadow").checked) * (1 + 0.15*document.getElementById("shadowWeaving").checked) * (1 + 0.02*document.getElementById("talentShadowMastery").parentNode.children[1].innerHTML) * (1 + 0.10*document.getElementById("darkMoonFaire").checked) * (1 + 0.05*document.getElementById("tracesOfSilithus").checked); //DS, CoS, Weaving, SM
          fireMultiplier = (1 + piBonus*0.20) * fireReduction * (1 + fireDS*0.15*document.getElementById("talentDemonicSacrifice").parentNode.children[1].innerHTML) * (1 + 0.1*document.getElementById("curseElements").checked) * (1 + 0.15*document.getElementById("Scorch").checked) * (1 + 0.02*document.getElementById("talentEmberstorm").parentNode.children[1].innerHTML) * (1 + 0.10*document.getElementById("darkMoonFaire").checked) * (1 + 0.05*document.getElementById("tracesOfSilithus").checked);; //DS, CoE, Scorch, Emberstorm
          avgNonCrit = (510+(ShP*6/7)) * shadowMultiplier;
          avgBurn = (488+(ShP*3/7)) * shadowMultiplier * document.getElementById("talentShadowburn").parentNode.children[1].innerHTML;
          avgDeathCoil = (476+(ShP*1.5/7)) * shadowMultiplier;
          avgSearing = (226+(FiP*3/7)) * fireMultiplier;
          avgImmo = (279*(1+0.05*bonusImmolateDMG) + (FiP*0.2)) * fireMultiplier * (1 + 0.05*document.getElementById("talentImmolate").parentNode.children[1].innerHTML);
          avgImmoR7 = (258*(1+0.05*bonusImmolateDMG) + (FiP*0.2)) * fireMultiplier * (1 + 0.05*document.getElementById("talentImmolate").parentNode.children[1].innerHTML);
        }
        
        if (TREOS+ZHC+TOEP+HCOD+REEL+EOM > 0 && trinketTime <= 0 && trinket1CD <= 0) {
          if ((primary == "shadowBolt")+(SBC > 4) == 2 || primary !== "shadowBolt") {
            if (trinket1 == "TREOS") {
              trinket1Bonus = true;
              trinketTime = 19.9;
              trinket1CD = 120;
              ShP += 130;
              FiP += 130;
            }
            else if (trinket1 == "ZHC") {
              trinket1Bonus = true;
              trinketTime = 19.9;
              trinket1CD = 120;
              ShP += 204;
              FiP += 204;
              ZHCStacks = 12;
            }
            else if (trinket1 == "TOEP") {
              trinket1Bonus = true;
              trinketTime = 14.9;
              trinket1CD = 90;
              ShP += 175;
              FiP += 175;
            }
            else if (trinket1 == "HCOD") {
              trinket1Bonus = true;
              trinketTime = 19.9;
              trinket1CD = 180;
              crit += 10;
            }
            else if (trinket1 == "REEL") {
              trinket1Bonus = true;
              trinketTime = 14.9;
              trinket1CD = 75;
              hit += 10;
            }
            else if (trinket1 == "EOM") {
              trinket1Bonus = true;
              trinketTime = 29.9;
              trinket1CD = 180;
              ShP += 50;
              FiP += 50;
              pen += 100;
            }
            shadowRes = levelRes + Math.max(0, Number(document.getElementById("bossShadowRes").value) - pen - 75*document.getElementById("curseShadow").checked);
            fireRes = levelRes + Math.max(0, Number(document.getElementById("bossFireRes").value) - pen - 75*document.getElementById("curseElements").checked);
            shadowReduction = 1 - shadowRes/400;
            fireReduction = 1 - fireRes/400;
            shadowMultiplier = (1 + piBonus*0.20) * shadowReduction * (1 + shadowDS*0.15*document.getElementById("talentDemonicSacrifice").parentNode.children[1].innerHTML) * (1 + 0.1*document.getElementById("curseShadow").checked) * (1 + 0.15*document.getElementById("shadowWeaving").checked) * (1 + 0.02*document.getElementById("talentShadowMastery").parentNode.children[1].innerHTML) * (1 + 0.10*document.getElementById("darkMoonFaire").checked) * (1 + 0.05*document.getElementById("tracesOfSilithus").checked); //DS, CoS, Weaving, SM
            fireMultiplier = (1 + piBonus*0.20) * fireReduction * (1 + fireDS*0.15*document.getElementById("talentDemonicSacrifice").parentNode.children[1].innerHTML) * (1 + 0.1*document.getElementById("curseElements").checked) * (1 + 0.15*document.getElementById("Scorch").checked) * (1 + 0.02*document.getElementById("talentEmberstorm").parentNode.children[1].innerHTML) * (1 + 0.10*document.getElementById("darkMoonFaire").checked) * (1 + 0.05*document.getElementById("tracesOfSilithus").checked);; //DS, CoE, Scorch, Emberstorm
            tapGain = (424+ShP*0.8) * (1 + 0.1*document.getElementById("talentLifeTap").parentNode.children[1].innerHTML) * lifeTap;
            avgNonCrit = (510+(ShP*6/7)) * shadowMultiplier;
            avgBurn = (488+(ShP*3/7)) * shadowMultiplier * document.getElementById("talentShadowburn").parentNode.children[1].innerHTML;
            avgDeathCoil = (476+(ShP*1.5/7)) * shadowMultiplier;
            avgSearing = (226+(FiP*3/7)) * fireMultiplier;
            avgImmo = (279*(1+0.05*bonusImmolateDMG) + (FiP*0.2)) * fireMultiplier * (1 + 0.05*document.getElementById("talentImmolate").parentNode.children[1].innerHTML);
            avgImmoR7 = (258*(1+0.05*bonusImmolateDMG) + (FiP*0.2)) * fireMultiplier * (1 + 0.05*document.getElementById("talentImmolate").parentNode.children[1].innerHTML);
            miss = Math.max(1, 100 - baseHit - hit);
            critChance = Math.min(100, (1.7 + crit + (intel/60.6)));
            critFinal = critChance * (100-miss)/100;
            critSearing = Math.min(100, (1.7 + crit + (intel/60.6) + 2*document.getElementById("talentSearingPain").parentNode.children[1].innerHTML)) * (100-miss)/100;
            regularHit = 100-miss-critFinal;
            shadowVuln = (1 - Math.pow(1 - critFinal/100*(1-miss/100), 4/(1-miss/100))) * 0.2*document.getElementById("talentShadowBolt").parentNode.children[1].innerHTML * (primary == "shadowBolt");
          }
        }
        
        if (TREOS+ZHC+TOEP+HCOD+REEL+EOM > 0 && trinketTime <= 0 && trinket2CD <= 0) {
          if ((primary == "shadowBolt")+(SBC > 4) == 2 || primary !== "shadowBolt") {
            if (trinket2 == "TREOS") {
              trinket2Bonus = true;
              trinketTime = 19.9;
              trinket2CD = 120;
              ShP += 130;
              FiP += 130;
            }
            else if (trinket2 == "ZHC") {
              trinket2Bonus = true;
              trinketTime = 19.9;
              trinket2CD = 120;
              ShP += 204;
              FiP += 204;
              ZHCStacks = 12;
            }
            else if (trinket2 == "TOEP") {
              trinket2Bonus = true;
              trinketTime = 14.9;
              trinket2CD = 90;
              ShP += 175;
              FiP += 175;
            }
            else if (trinket2 == "HCOD") {
              trinket2Bonus = true;
              trinketTime = 19.9;
              trinket2CD = 180;
              crit += 10;
            }
            else if (trinket2 == "REEL") {
              trinket2Bonus = true;
              trinketTime = 14.9;
              trinket2CD = 75;
              hit += 10;
            }
            else if (trinket2 == "EOM") {
              trinket2Bonus = true;
              trinketTime = 29.9;
              trinket2CD = 180;
              ShP += 50;
              FiP += 50;
              pen += 100;
            }
            shadowRes = levelRes + Math.max(0, Number(document.getElementById("bossShadowRes").value) - pen - 75*document.getElementById("curseShadow").checked);
            fireRes = levelRes + Math.max(0, Number(document.getElementById("bossFireRes").value) - pen - 75*document.getElementById("curseElements").checked);
            shadowReduction = 1 - shadowRes/400;
            fireReduction = 1 - fireRes/400;
            shadowMultiplier = (1 + piBonus*0.20) * shadowReduction * (1 + shadowDS*0.15*document.getElementById("talentDemonicSacrifice").parentNode.children[1].innerHTML) * (1 + 0.1*document.getElementById("curseShadow").checked) * (1 + 0.15*document.getElementById("shadowWeaving").checked) * (1 + 0.02*document.getElementById("talentShadowMastery").parentNode.children[1].innerHTML) * (1 + 0.10*document.getElementById("darkMoonFaire").checked) * (1 + 0.05*document.getElementById("tracesOfSilithus").checked); //DS, CoS, Weaving, SM
            fireMultiplier = (1 + piBonus*0.20) * fireReduction * (1 + fireDS*0.15*document.getElementById("talentDemonicSacrifice").parentNode.children[1].innerHTML) * (1 + 0.1*document.getElementById("curseElements").checked) * (1 + 0.15*document.getElementById("Scorch").checked) * (1 + 0.02*document.getElementById("talentEmberstorm").parentNode.children[1].innerHTML) * (1 + 0.10*document.getElementById("darkMoonFaire").checked) * (1 + 0.05*document.getElementById("tracesOfSilithus").checked);; //DS, CoE, Scorch, Emberstorm
            tapGain = (424+ShP*0.8) * (1 + 0.1*document.getElementById("talentLifeTap").parentNode.children[1].innerHTML) * lifeTap;
            avgNonCrit = (510+(ShP*6/7)) * shadowMultiplier;
            avgBurn = (488+(ShP*3/7)) * shadowMultiplier * document.getElementById("talentShadowburn").parentNode.children[1].innerHTML;
            avgDeathCoil = (476+(ShP*1.5/7)) * shadowMultiplier;
            avgSearing = (226+(FiP*3/7)) * fireMultiplier;
            avgImmo = (279*(1+0.05*bonusImmolateDMG) + (FiP*0.2)) * fireMultiplier * (1 + 0.05*document.getElementById("talentImmolate").parentNode.children[1].innerHTML);
            avgImmoR7 = (258*(1+0.05*bonusImmolateDMG) + (FiP*0.2)) * fireMultiplier * (1 + 0.05*document.getElementById("talentImmolate").parentNode.children[1].innerHTML);
            miss = Math.max(1, 100 - baseHit - hit);
            critChance = Math.min(100, (1.7 + crit + (intel/60.6)));
            critFinal = critChance * (100-miss)/100;
            critSearing = Math.min(100, (1.7 + crit + (intel/60.6) + 2*document.getElementById("talentSearingPain").parentNode.children[1].innerHTML)) * (100-miss)/100;
            regularHit = 100-miss-critFinal;
            shadowVuln = (1 - Math.pow(1 - critFinal/100*(1-miss/100), 4/(1-miss/100))) * 0.2*document.getElementById("talentShadowBolt").parentNode.children[1].innerHTML * (primary == "shadowBolt");
          }
        }
        
        if (usePI == true && piTime <= 0 && piCD <= 0) {
          if ((primary == "shadowBolt")+(SBC > 4) == 2 || primary !== "shadowBolt") {
            piBonus = true;
            piTime = 15.1*numPI;
            piCD = 180;
            shadowMultiplier = (1 + piBonus*0.20) * shadowReduction * (1 + shadowDS*0.15*document.getElementById("talentDemonicSacrifice").parentNode.children[1].innerHTML) * (1 + 0.1*document.getElementById("curseShadow").checked) * (1 + 0.15*document.getElementById("shadowWeaving").checked) * (1 + 0.02*document.getElementById("talentShadowMastery").parentNode.children[1].innerHTML) * (1 + 0.10*document.getElementById("darkMoonFaire").checked) * (1 + 0.05*document.getElementById("tracesOfSilithus").checked); //DS, CoS, Weaving, SM
            fireMultiplier = (1 + piBonus*0.20) * fireReduction * (1 + fireDS*0.15*document.getElementById("talentDemonicSacrifice").parentNode.children[1].innerHTML) * (1 + 0.1*document.getElementById("curseElements").checked) * (1 + 0.15*document.getElementById("Scorch").checked) * (1 + 0.02*document.getElementById("talentEmberstorm").parentNode.children[1].innerHTML) * (1 + 0.10*document.getElementById("darkMoonFaire").checked) * (1 + 0.05*document.getElementById("tracesOfSilithus").checked);; //DS, CoE, Scorch, Emberstorm
            avgNonCrit = (510+(ShP*6/7)) * shadowMultiplier;
            avgBurn = (488+(ShP*3/7)) * shadowMultiplier * document.getElementById("talentShadowburn").parentNode.children[1].innerHTML;
            avgDeathCoil = (476+(ShP*1.5/7)) * shadowMultiplier;
            avgSearing = (226+(FiP*3/7)) * fireMultiplier;
            avgImmo = (279*(1+0.05*bonusImmolateDMG) + (FiP*0.2)) * fireMultiplier * (1 + 0.05*document.getElementById("talentImmolate").parentNode.children[1].innerHTML);
            avgImmoR7 = (258*(1+0.05*bonusImmolateDMG) + (FiP*0.2)) * fireMultiplier * (1 + 0.05*document.getElementById("talentImmolate").parentNode.children[1].innerHTML);
          }
        }
        
        // If statement that adds time
        if ((mana<primaryCost) + (timeLeft>primaryTime) == 2 || (timeLeft<primaryTime*2) + (mana<primaryCost+finisherCost) + (timeLeft>=primaryTime+finisherTime) == 3) {
          mana += tapGain;
          lifeTaps[i]++;
          time += GCD;}
        
        else if (doom == false && doomDuration <= timeLeft) {
          doom = true;
          doomUse = time;
          damage += (3200 + ShP) * shadowMultiplier * ((shadowVuln*0.2)+1) * (afflictionChance/100);
          mana -= doomCost;
          time += GCD;}
        
        else if (agony == false && agonyDuration <= timeLeft) {
          agony = true; 
          agonyUse = time;
          damage += (1044 * (1+0.02*document.getElementById("talentAgony").parentNode.children[1].innerHTML) * (1+Math.abs(Math.sign(Math.max(0,time-15))-1)*0.5*document.getElementById("talentAmpCurse").parentNode.children[1].innerHTML) * (1+0.2*document.getElementById("talentShadowMastery").parentNode.children[1].innerHTML) + ShP) * shadowMultiplier * ((shadowVuln*0.2)+1)/(1+0.2*document.getElementById("talentShadowMastery").parentNode.children[1].innerHTML);
          mana -= agonyCost/(afflictionChance/100);
          time += GCD/(afflictionChance/100);}
        
        else if (corruption == false && corruptionDuration <= timeLeft) {
          corruption = true; 
          corruptionUse = time;
          damage += (822+ShP) * shadowMultiplier * ((shadowVuln*0.2)+1) * (1+0.12*bonusCorruption) * (1+0.02*bonusCorruptionZG);
          mana -= corruptionCost/(afflictionChance/100);
          time += corruptionTime/(afflictionChance/100);
          damage += (avgNonCrit*critFinal*critMultiplier + avgNonCrit*regularHit)/100 * ((shadowVuln*0.2)+1) * 6*0.02*document.getElementById("talentNightfall").parentNode.children[1].innerHTML;
          mana -= sbCost * 6*0.02*document.getElementById("talentNightfall").parentNode.children[1].innerHTML;
          time += GCD * 6*0.02*document.getElementById("talentNightfall").parentNode.children[1].innerHTML;}
        
        else if (immolate == false && immolateDuration <= timeLeft && primary !== "immolateR8") {
          immolate = true; 
          immolateUse = time;
          damage += (avgImmo*critFinal*critMultiplier + avgImmo*regularHit)/100;
          damage += (510 + FiP*0.65) * fireMultiplier * Number(100-miss)/100;
          mana -= immolateCost;
          time += GCD;}
        
        else if (siphon == false && siphonDuration <= timeLeft) {
          siphon = true;
          siphonUse = time;
          damage += (450 + ShP*0.5) * shadowMultiplier * ((shadowVuln*0.2)+1) * document.getElementById("talentShadowburn").parentNode.children[1].innerHTML;
          mana -= siphonCost/(afflictionChance/100);
          time += GCD/(afflictionChance/100);}
        
        else if (primary == "shadowBolt" && sbTime <= timeLeft) {
          damage += (avgNonCrit*critFinal*critMultiplier + avgNonCrit*regularHit)/100;// * ((shadowVuln*0.2)+1);
          if (SBC == 0)
            damage += (avgNonCrit*critFinal*critMultiplier + avgNonCrit*regularHit)/100 * ((1 - Math.pow(1 - critFinal/100*(1-miss/100), 0))*0.2);
          else if (SBC == 1)
            damage += (avgNonCrit*critFinal*critMultiplier + avgNonCrit*regularHit)/100 * ((1 - Math.pow(1 - critFinal/100*(1-miss/100), 1))*0.2);
          else if (SBC == 2)
            damage += (avgNonCrit*critFinal*critMultiplier + avgNonCrit*regularHit)/100 * ((1 - Math.pow(1 - critFinal/100*(1-miss/100), 2))*0.2);
          else if (SBC == 3)
            damage += (avgNonCrit*critFinal*critMultiplier + avgNonCrit*regularHit)/100 * ((1 - Math.pow(1 - critFinal/100*(1-miss/100), 3))*0.2);
          else if (SBC == 4)
            damage += (avgNonCrit*critFinal*critMultiplier + avgNonCrit*regularHit)/100 * ((1 - Math.pow(1 - critFinal/100*(1-miss/100), 4))*0.2);// * Math.pow(1-critFinal/100,4);
          else
            damage += (avgNonCrit*critFinal*critMultiplier + avgNonCrit*regularHit)/100 * ((shadowVuln)*0.2);
          mana -= sbCost;
          time += sbTime;
          SBC += warlockCount;}
        
        else if (primary == "searingPain" && GCD <= timeLeft) {
          damage += (avgSearing*critSearing*critMultiplier + avgSearing*(100-miss-critSearing))/100;
          mana -= searingCost;
          time += GCD;}
        
        else if (primary == "immolateR7" && immolateTime <= timeLeft) {
          damage += (avgImmoR7*critFinal*critMultiplier + avgImmoR7*regularHit)/100;
          mana -= immolateR7Cost;
          time += immolateTime;}
        
        else if (primary == "immolateR8" && immolateTime <= timeLeft) {
          damage += (avgImmo*critFinal*critMultiplier + avgImmo*regularHit)/100;
          mana -= immolateCost;
          time += immolateTime;}
        
        else if (primary == "drainLife" && drainLifeTime <= timeLeft) {
          damage += Math.min(5, Math.floor(timeLeft))*(71+ShP*0.1) * afflictionChance/100 * shadowMultiplier * (1+0.02*document.getElementById("talentDrainLife").parentNode.children[1].innerHTML) * (1+0.15*bonusDrainLife);
          mana -= drainLifeCost;
          time += drainLifeTime;
          damage += (avgNonCrit*critFinal*critMultiplier + avgNonCrit*regularHit)/100 * ((shadowVuln*0.2)+1) * 5*0.02*document.getElementById("talentNightfall").parentNode.children[1].innerHTML;
          mana -= sbCost * 5*0.02*document.getElementById("talentNightfall").parentNode.children[1].innerHTML;
          time += GCD * 5*0.02*document.getElementById("talentNightfall").parentNode.children[1].innerHTML;}
        
        else if (finisher == "shadowburn" && sbTime > timeLeft) {
          damage += (avgBurn*critFinal*critMultiplier + avgBurn*regularHit)/100 * ((shadowVuln*0.2)+1);
          mana -= burnCost;
          time += GCD*2;}
        
        else if (finisher == "deathCoil" && sbTime > timeLeft && mana>=deathCoilCost) {
          damage += avgDeathCoil*afflictionChance/100 * ((shadowVuln*0.2)+1);
          mana -= deathCoilCost;
          time += GCD*2;}
        
        else if (finisher == "searingPain" && sbTime > timeLeft && GCD <= timeLeft) {
          damage += (avgSearing*critSearing*critMultiplier + avgSearing*(100-miss-critSearing))/100;
          mana -= searingCost;
          time += GCD*2;}
        
        else
          time += 0.5;
      }
      damage = damage * (1 + 0.02*UDC);
      ShP = ShPOld, FiP = FiPOld, crit = critOld, hit = hitOld, pen = penOld;
      DPS[i] = damage/timeVec[i];
      manaLeft[i] = mana;
    } //Loop with timeVec
    
    if (q==1) {
      var SPDPS   = math.sum(DPS)/DPS.length;
      var SPVec   = DPS;}
    else if (q==2) {
      var intDPS  = math.sum(DPS)/DPS.length;
      var intVec  = DPS;}
    else if (q==3) {
      var critDPS = math.sum(DPS)/DPS.length;
      var critVec = DPS;}
    else if (q==4) {
      var hitDPS  = math.sum(DPS)/DPS.length;
      var hitVec  = DPS;}
    else if (q==5) {
      var mp5DPS  = math.sum(DPS)/DPS.length;
      var mp5Vec  = DPS;}
    else if (q==6) {
      var penDPS  = math.sum(DPS)/DPS.length;
      var penVec  = DPS;}
    else if (q==7) {
      var baseDPS = math.sum(DPS)/DPS.length;
      var baseVec = DPS;}
  } //Loop with q
  var SPVal   = (SPDPS-baseDPS);
  var intVal  = (intDPS-baseDPS)/10;
  var critVal = (critDPS-baseDPS);
  var hitVal  = (hitDPS-baseDPS);
  var penVal  = (penDPS-baseDPS);
  var mp5Val  = (mp5DPS-baseDPS)/3;

  var dpsOutput = "<br><br><b><span style='font-size:22px'>&nbsp;" + formatNumber(math.sum(baseVec)/baseVec.length,2) + " <span style='font-size:14px'>DPS</span></b>";
  var statWeightOutput = "<br><b><span style='font-size:18px'>Crit = " + formatNumber(critVal/SPVal,2) + " </span><span style='font-size:14px'>SP</span><br><span style='font-size:18px'>Hit &nbsp;= " + formatNumber(hitVal/SPVal,2) + " </span><span style='font-size:14px'>SP</span></b>";
  if (arguments.length == 3) {
    console.timeEnd('Timer')
    return formatNumber(math.sum(baseVec)/baseVec.length,2);
  }
  if (arguments.length == 2) {
    gearTable.children[12].innerHTML = Number(formatNumber(math.sum(baseVec)/baseVec.length,2));
    //var valueSP = Number(gearTable.children[4].innerHTML) + Number(gearTable.children[5].innerHTML)*shadowDS + Number(gearTable.children[6].innerHTML)*fireDS + Number(gearTable.children[8].innerHTML.slice(0,1))*critVal/SPVal + Number(gearTable.children[7].innerHTML.slice(0,1))*hitVal/SPVal + Number(gearTable.children[3].innerHTML)*intVal/SPVal + Number(gearTable.children[9].innerHTML)*penVal/SPVal + Number(gearTable.children[10].innerHTML)*mp5Val/SPVal;
    //gearTable.children[11].innerHTML = Number(formatNumber(valueSP,2));
    gearTable.children[11].innerHTML = Number(formatNumber((math.sum(baseVec)/baseVec.length-baseLine)/SPVal,2));
    console.timeEnd('Timer');
    return
  }

  document.getElementById("dps").innerHTML = dpsOutput;
  //document.getElementById('defaultOpen').innerHTML = "Main: " + "<b><span style='font-size:20px'>" + formatNumber(math.sum(baseVec)/baseVec.length,2) + " </span><span style='font-size:14px'>DPS</span></b>";;
  document.getElementById("statWeights").innerHTML = statWeightOutput;
  document.getElementById("finalStats").innerHTML = "<table class='finalStats' style=text-align:left><tr><th colspan=2>Stats</th></tr><tr><td>Shadow Power</td><td>&nbsp" + ShP + "</td></tr><tr><td>Fire Power</td><td>&nbsp" + FiP + "</td></tr><tr><td>Crit Chance</td><td>&nbsp" + formatNumber(critChance,2) + "%</td></tr><tr><td>Hit Chance</td><td>&nbsp" + Number(100-miss) + "%</td></tr><tr><td>Intellect</td><td>&nbsp" + intel + "</td></tr><tr><td>Spell Pen</td><td>&nbsp" + pen + "</td></tr><tr><td>Mana per 5</td><td>&nbsp" + mp5 + "</td></tr><tr><td>Total Mana</td><td>&nbsp" + manaMain + "</td></tr><tr><td>Shadow Multiplier</td><td>&nbsp" + formatNumber(shadowMultiplier,4) + "</td></tr><tr><td>Fire Multiplier</td><td>&nbsp" + formatNumber(fireMultiplier,4) + "</td></tr><tr><td>Shadow Vulnerability</td><td>&nbsp" + formatNumber(shadowVuln*100,2) + "%</td></tr></table>";

  document.getElementById('dpsCanvas').remove();
  document.getElementById('dpsWrapper').innerHTML = '<canvas id="dpsCanvas" style="background-color:#999999;" width=300px height=200px></canvas>';
  
  var dpsChart = new Chart(document.getElementById('dpsCanvas').getContext('2d'), {
    type: 'line',
    data: {
      labels: timeVec,
      datasets: [{
        label: "Current Settings",
        data: DPS,
        fill: false,
        backgroundColor: 'rgba(255, 0, 0, 0.4)',
        borderColor: 'rgba(255, 0, 0, 0.3)'
      }]
    },
    options: {
      scales: {xAxes: [{ticks: {autoSkipPadding: 2}, scaleLabel: {display: true, labelString: "Fight Duration", padding: 0}}], yAxes: [{ticks: {beginAtZero: true, max: 1600}, scaleLabel: {display: true, labelString: "DPS", padding: 0}}] },
      animation: {duration: 0},
      //events: ['click'],
      title: {display: true, fontSize: 20, text: "DPS Graph"},
      responsive: true,
      maintainAspectRatio: false
    }
  });
  
  SPVec = math.subtract(SPVec,baseVec);
  critVec = math.subtract(critVec,baseVec);
  hitVec = math.subtract(hitVec,baseVec);
  intVec = math.divide(math.subtract(intVec,baseVec),10);
  mp5Vec = math.divide(math.subtract(mp5Vec,baseVec),3);
  penVec = math.subtract(penVec,baseVec);
  
  document.getElementById('statWeightCanvas').remove();
  document.getElementById('statWeightWrapper').innerHTML = '<canvas id="statWeightCanvas" style="background-color:#999999;" width=300px height=200px></canvas>';
  
  var statWeightChart = new Chart(document.getElementById('statWeightCanvas').getContext('2d'), {
    type: 'line',
    data: {
      labels: timeVec,
      datasets: [{
        label: "Crit Value",
        data: math.dotDivide(critVec,SPVec),
        fill: false,
        lineTension: 0,
        backgroundColor: 'rgba(255, 0, 0, 0.4)',
        borderColor: 'rgba(255, 0, 0, 0.3)'},
                 {
        label: "Hit Value",
        data: math.dotDivide(hitVec,SPVec),
        fill: false,
        lineTension: 0,
        backgroundColor: 'rgba(255, 255, 0, 0.4)',
        borderColor: 'rgba(255, 255, 0, 0.3)'},
                 {
        label: "Int Value",
        data: math.dotDivide(intVec,SPVec),
        fill: false,
        lineTension: 0,
        backgroundColor: 'rgba(0, 0, 255, 0.4)',
        borderColor: 'rgba(0, 0, 255, 0.3)'},
                 {
        label: "Mp5 Value",
        data: math.dotDivide(mp5Vec,SPVec),
        fill: false,
        lineTension: 0,
        backgroundColor: 'rgba(255, 0, 255, 0.4)',
        borderColor: 'rgba(255, 0, 255, 0.3)'},
                 {
        label: "Pen Value",
        data: math.dotDivide(penVec,SPVec),
        fill: false,
        lineTension: 0,
        backgroundColor: 'rgba(255, 128, 0, 0.4)',
        borderColor: 'rgba(255, 128, 0, 0.3)'},
                 {
        label: "DPS per SP",
        data: SPVec,
        fill: false,
        lineTension: 0,
        backgroundColor: 'rgba(0, 255, 0, 0.4)',
        borderColor: 'rgba(0, 255, 0, 0.3)'}]
    },
    options: {
      scales: {xAxes: [{ticks: {autoSkipPadding: 2}, scaleLabel: {display: true, labelString: "Fight Duration", padding: 0}}], yAxes: [{ticks: {beginAtZero: true}, scaleLabel: {display: true, labelString: "Value", padding: 0}}] },
      animation: {duration: 0},
      //events: [],
      title: {display: true, fontSize: 20, text: "Stat Weights Graph"},
      responsive: true,
      maintainAspectRatio: false
    }
  });
  //Cookie Time
  setCookie("tailoring", tailoring);
  setCookie("fightStart", fightStart);
  setCookie("fightEnd", fightEnd);
  setCookie("bossShadowRes", Number(document.getElementById("bossShadowRes").value));
  setCookie("bossFireRes", Number(document.getElementById("bossFireRes").value));
  setCookie("bossLevel", Number(bossLevel));
  setCookie("race", race);
  
  setCookie("curseShadow", document.getElementById("curseShadow").checked);
  setCookie("shadowWeaving", document.getElementById("shadowWeaving").checked);
  setCookie("curseElements", document.getElementById("curseElements").checked);
  setCookie("Scorch", document.getElementById("Scorch").checked);
  setCookie("supremeFlask", document.getElementById("supremeFlask").checked);
  setCookie("blessedOil", document.getElementById("blessedOil").checked);
  setCookie("brilliantOil", document.getElementById("brilliantOil").checked);
  setCookie("arcaneElixir", document.getElementById("arcaneElixir").checked);
  setCookie("shadowElixir", document.getElementById("shadowElixir").checked);
  setCookie("holiday", document.getElementById("holiday").checked);
  setCookie("fireElixir", document.getElementById("fireElixir").checked);
  setCookie("manaPotion", document.getElementById("manaPotion").checked);
  setCookie("demonicRune", document.getElementById("demonicRune").checked);
  setCookie("runnTumTuber", document.getElementById("runnTumTuber").checked);
  setCookie("nightfinSoup", document.getElementById("nightfinSoup").checked);
  setCookie("magebloodPotion", document.getElementById("magebloodPotion").checked);
  setCookie("hakkarBuff", hakkarBuff);
  setCookie("onyxiaBuff", onyxiaBuff);
  setCookie("songflower", songflower);
  setCookie("diremaulBuff", diremaulBuff);
  setCookie("darkMoonFaire", document.getElementById("darkMoonFaire").checked);
  setCookie("tracesOfSilithus", document.getElementById("tracesOfSilithus").checked);
  setCookie("arcaneIntellect", document.getElementById("arcaneIntellect").checked);
  setCookie("markOfTheWild", document.getElementById("markOfTheWild").checked);
  setCookie("moonkinAura", document.getElementById("moonkinAura").checked);
  setCookie("blessingOfWisdom", document.getElementById("blessingOfWisdom").checked);
  setCookie("blessingOfKings", document.getElementById("blessingOfKings").checked);
  setCookie("manaSpringTotem", document.getElementById("manaSpringTotem").checked);
  setCookie("powerInfusion", Number(document.getElementById("powerInfusion").value));
  setCookie("warlockAtiesh", warlockAtiesh);
  setCookie("mageAtiesh", mageAtiesh);
  setCookie("druidAtiesh", druidAtiesh);
  setCookie("lifeTap", lifeTap);
  
  setCookie("talentSuppression", document.getElementById("talentSuppression").parentNode.children[1].innerHTML);
  setCookie("talentCorruption", document.getElementById("talentCorruption").parentNode.children[1].innerHTML);
  setCookie("talentWeakness", document.getElementById("talentWeakness").parentNode.children[1].innerHTML);
  setCookie("talentDrainSoul", document.getElementById("talentDrainSoul").parentNode.children[1].innerHTML);
  setCookie("talentLifeTap", document.getElementById("talentLifeTap").parentNode.children[1].innerHTML);
  setCookie("talentDrainLife", document.getElementById("talentDrainLife").parentNode.children[1].innerHTML);
  setCookie("talentAgony", document.getElementById("talentAgony").parentNode.children[1].innerHTML);
  setCookie("talentFelConc", document.getElementById("talentFelConc").parentNode.children[1].innerHTML);
  setCookie("talentAmpCurse", document.getElementById("talentAmpCurse").parentNode.children[1].innerHTML);
  setCookie("talentGrimReach", document.getElementById("talentGrimReach").parentNode.children[1].innerHTML);
  setCookie("talentNightfall", document.getElementById("talentNightfall").parentNode.children[1].innerHTML);
  setCookie("talentDrainMana", document.getElementById("talentDrainMana").parentNode.children[1].innerHTML);
  setCookie("talentSiphon", document.getElementById("talentSiphon").parentNode.children[1].innerHTML);
  setCookie("talentExhaust", document.getElementById("talentExhaust").parentNode.children[1].innerHTML);
  setCookie("talentImpExhaust", document.getElementById("talentImpExhaust").parentNode.children[1].innerHTML);
  setCookie("talentShadowMastery", document.getElementById("talentShadowMastery").parentNode.children[1].innerHTML);
  setCookie("talentDarkPact", document.getElementById("talentDarkPact").parentNode.children[1].innerHTML);

  setCookie("talentHealthstone", document.getElementById("talentHealthstone").parentNode.children[1].innerHTML);
  setCookie("talentImpImp", document.getElementById("talentImpImp").parentNode.children[1].innerHTML);
  setCookie("talentStamina", document.getElementById("talentStamina").parentNode.children[1].innerHTML);
  setCookie("talentHealthFunnel", document.getElementById("talentHealthFunnel").parentNode.children[1].innerHTML);
  setCookie("talentImpVoid", document.getElementById("talentImpVoid").parentNode.children[1].innerHTML);
  setCookie("talentFelIntellect", document.getElementById("talentFelIntellect").parentNode.children[1].innerHTML);
  setCookie("talentImpSuccubus", document.getElementById("talentImpSuccubus").parentNode.children[1].innerHTML);
  setCookie("talentFelDomination", document.getElementById("talentFelDomination").parentNode.children[1].innerHTML);
  setCookie("talentFelStamina", document.getElementById("talentFelStamina").parentNode.children[1].innerHTML);
  setCookie("talentMasterSummon", document.getElementById("talentMasterSummon").parentNode.children[1].innerHTML);
  setCookie("talentUnholyPower", document.getElementById("talentUnholyPower").parentNode.children[1].innerHTML);
  setCookie("talentEnslaveDemon", document.getElementById("talentEnslaveDemon").parentNode.children[1].innerHTML);
  setCookie("talentDemonicSacrifice", document.getElementById("talentDemonicSacrifice").parentNode.children[1].innerHTML);
  setCookie("talentFirestone", document.getElementById("talentFirestone").parentNode.children[1].innerHTML);
  setCookie("talentMasterDemon", document.getElementById("talentMasterDemon").parentNode.children[1].innerHTML);
  setCookie("talentSoulLink", document.getElementById("talentSoulLink").parentNode.children[1].innerHTML);
  setCookie("talentSpellstone", document.getElementById("talentSpellstone").parentNode.children[1].innerHTML);

  setCookie("talentShadowBolt", document.getElementById("talentShadowBolt").parentNode.children[1].innerHTML);
  setCookie("talentCataclysm", document.getElementById("talentCataclysm").parentNode.children[1].innerHTML);
  setCookie("talentBane", document.getElementById("talentBane").parentNode.children[1].innerHTML);
  setCookie("talentAftermath", document.getElementById("talentAftermath").parentNode.children[1].innerHTML);
  setCookie("talentImpFirebolt", document.getElementById("talentImpFirebolt").parentNode.children[1].innerHTML);
  setCookie("talentImpLash", document.getElementById("talentImpLash").parentNode.children[1].innerHTML);
  setCookie("talentDevastation", document.getElementById("talentDevastation").parentNode.children[1].innerHTML);
  setCookie("talentShadowburn", document.getElementById("talentShadowburn").parentNode.children[1].innerHTML);
  setCookie("talentIntensity", document.getElementById("talentIntensity").parentNode.children[1].innerHTML);
  setCookie("talentDestructiveReach", document.getElementById("talentDestructiveReach").parentNode.children[1].innerHTML);
  setCookie("talentSearingPain", document.getElementById("talentSearingPain").parentNode.children[1].innerHTML);
  setCookie("talentPyroclasm", document.getElementById("talentPyroclasm").parentNode.children[1].innerHTML);
  setCookie("talentImmolate", document.getElementById("talentImmolate").parentNode.children[1].innerHTML);
  setCookie("talentRuin", document.getElementById("talentRuin").parentNode.children[1].innerHTML);
  setCookie("talentEmberstorm", document.getElementById("talentEmberstorm").parentNode.children[1].innerHTML);
  setCookie("talentConflagrate", document.getElementById("talentConflagrate").parentNode.children[1].innerHTML);
  
  setCookie("rotationCurse", curse);
  setCookie("rotationCorruption", useCorruption);
  setCookie("rotationImmolate", useImmolate);
  setCookie("rotationSiphon", useSiphon);
  setCookie("rotationPrimary", primary);
  setCookie("rotationFinisher", finisher);
  
  setCookie("itemMainHand", false);
  setCookie("itemOffHand", false);
  setCookie("itemStaff", false);
  if (items.length == 17) {
    setCookie("itemMainHand", items[0].children[0].innerHTML);
    setCookie("itemOffHand", items[1].children[0].innerHTML);
    setCookie("itemHelmet", items[2].children[0].innerHTML);
    setCookie("itemNeck", items[3].children[0].innerHTML);
    setCookie("itemShoulders", items[4].children[0].innerHTML);
    setCookie("itemBack", items[5].children[0].innerHTML);
    setCookie("itemChest", items[6].children[0].innerHTML);
    setCookie("itemWrists", items[7].children[0].innerHTML);
    setCookie("itemHands", items[8].children[0].innerHTML);
    setCookie("itemWaist", items[9].children[0].innerHTML);
    setCookie("itemLegs", items[10].children[0].innerHTML);
    setCookie("itemFeet", items[11].children[0].innerHTML);
    setCookie("itemRing1", items[12].children[0].innerHTML);
    setCookie("itemRing2", items[13].children[0].innerHTML);
    setCookie("itemTrinket1", items[14].children[0].innerHTML);
    setCookie("itemTrinket2", items[15].children[0].innerHTML);
    setCookie("itemWand", items[16].children[0].innerHTML);
  }
  else if (items.length == 16) {
    setCookie("itemStaff", items[0].children[0].innerHTML);
    setCookie("itemHelmet", items[1].children[0].innerHTML);
    setCookie("itemNeck", items[2].children[0].innerHTML);
    setCookie("itemShoulders", items[3].children[0].innerHTML);
    setCookie("itemBack", items[4].children[0].innerHTML);
    setCookie("itemChest", items[5].children[0].innerHTML);
    setCookie("itemWrists", items[6].children[0].innerHTML);
    setCookie("itemHands", items[7].children[0].innerHTML);
    setCookie("itemWaist", items[8].children[0].innerHTML);
    setCookie("itemLegs", items[9].children[0].innerHTML);
    setCookie("itemFeet", items[10].children[0].innerHTML);
    setCookie("itemRing1", items[11].children[0].innerHTML);
    setCookie("itemRing2", items[12].children[0].innerHTML);
    setCookie("itemTrinket1", items[13].children[0].innerHTML);
    setCookie("itemTrinket2", items[14].children[0].innerHTML);
    setCookie("itemWand", items[15].children[0].innerHTML);
  }
  
  setCookie("enchantSpellPower", document.getElementById("enchantSpellPower").checked);
  setCookie("enchantZG1", document.getElementById("enchantZG1").checked);
  setCookie("enchantFocus1", document.getElementById("enchantFocus1").checked);
  setCookie("enchantPowerScourge", document.getElementById("enchantPowerScourge").checked);
  setCookie("enchantZGShoulder", document.getElementById("enchantZGShoulder").checked);
  setCookie("enchantThreat", document.getElementById("enchantThreat").checked);
  setCookie("enchantGreaterStats", document.getElementById("enchantGreaterStats").checked);
  setCookie("enchantStats", document.getElementById("enchantStats").checked);
  setCookie("enchantMana", document.getElementById("enchantMana").checked);
  setCookie("enchantIntellect", document.getElementById("enchantIntellect").checked);
  setCookie("enchantStaminaWrists", document.getElementById("enchantStaminaWrists").checked);
  setCookie("enchantShadow", document.getElementById("enchantShadow").checked);
  setCookie("enchantFire", document.getElementById("enchantFire").checked);
  setCookie("enchantZG2", document.getElementById("enchantZG2").checked);
  setCookie("enchantFocus2", document.getElementById("enchantFocus2").checked);
  setCookie("enchantMinorSpeed", document.getElementById("enchantMinorSpeed").checked);
  setCookie("enchantStaminaFeet", document.getElementById("enchantStaminaFeet").checked);
  
  setCookie("warlockCount", warlockCount);
  
  console.timeEnd('Timer')
} //Function

function formatNumber(num, places) {
  return +(Math.round(num + "e+" + places)  + "e-" + places);
}

function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}
