function runSim(gearTable, baseLine, makeBaseLine) {
  console.time('Timer')
  var SP   = 0 + 30*document.getElementById("enchantSpellPower").checked + 8*document.getElementById("enchantFocus1").checked + 8*document.getElementById("enchantFocus2").checked + 18*document.getElementById("enchantZG1").checked + 18*document.getElementById("enchantZG2").checked + 18*document.getElementById("enchantZGShoulder").checked + 15*document.getElementById("enchantPowerScourge").checked;
  var ShP  = 0 + 20*document.getElementById("enchantShadow").checked;
  var FiP  = 0 + 20*document.getElementById("enchantFire").checked;
  var crit = 0 + 1*document.getElementById("enchantPowerScourge").checked;
  var hit  = 0;
  var int  = 0 + 7*document.getElementById("enchantIntellect").checked + 3*document.getElementById("enchantStats").checked + 4*document.getElementById("enchantGreaterStats").checked;
  var pen  = 0;
  var mp5  = 0;
  var classList = new Array;
  var items = document.getElementsByName('activeItem');
  for (var i=0; i<items.length; i++) {
    if (arguments.length > 0 && gearTable.parentNode.parentNode.id === items[i].parentNode.parentNode.id) {
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
  var TREOS = false, ZHC = false, TOEP = false, HCOD = false, REEL = false, EOM = false, trinket1 = false, trinket2 = false;
  if (items[13].children[0].innerHTML == "The Restrained Essence of Sapphiron" || items[14].children[0].innerHTML == "The Restrained Essence of Sapphiron" || items[15].children[0] == "The Restrained Essence of Sapphiron") {
    TREOS = true;
    if (TREOS+ZHC+TOEP+HCOD+REEL+EOM == 1)
      trinket1 = "TREOS";
    else if (TREOS+ZHC+TOEP+HCOD+REEL+EOM == 2)
      trinket2 = "TREOS";
  }
  if (items[13].children[0].innerHTML == "Zandalarian Hero Charm" || items[14].children[0].innerHTML == "Zandalarian Hero Charm" || items[15].children[0] == "Zandalarian Hero Charm") {
    ZHC = true;
    if (TREOS+ZHC+TOEP+HCOD+REEL+EOM == 1)
      trinket1 = "ZHC";
    else if (TREOS+ZHC+TOEP+HCOD+REEL+EOM == 2)
      trinket2 = "ZHC";
  }
  if (items[13].children[0].innerHTML == "Talisman of Ephemeral Power" || items[14].children[0].innerHTML == "Talisman of Ephemeral Power" || items[15].children[0] == "Talisman of Ephemeral Power") {
    TOEP = true;
    if (TREOS+ZHC+TOEP+HCOD+REEL+EOM == 1)
      trinket1 = "TOEP";
    else if (TREOS+ZHC+TOEP+HCOD+REEL+EOM == 2)
      trinket2 = "TOEP";
  }
  if (items[13].children[0].innerHTML == "Hazza'rah's Charm of Destruction" || items[14].children[0].innerHTML == "Hazza'rah's Charm of Destruction" || items[15].children[0] == "Hazza'rah's Charm of Destruction") {
    HCOD = true;
    if (TREOS+ZHC+TOEP+HCOD+REEL+EOM == 1)
      trinket1 = "HCOD";
    else if (TREOS+ZHC+TOEP+HCOD+REEL+EOM == 2)
      trinket2 = "HCOD";
  }
  if (items[13].children[0].innerHTML == "Nat Pagle's Broken Reel" || items[14].children[0].innerHTML == "Nat Pagle's Broken Reel" || items[15].children[0] == "Nat Pagle's Broken Reel") {
    REEL = true;
    if (TREOS+ZHC+TOEP+HCOD+REEL+EOM == 1)
      trinket1 = "REEL";
    else if (TREOS+ZHC+TOEP+HCOD+REEL+EOM == 2)
      trinket2 = "REEL";
  }
  if (items[13].children[0].innerHTML == "Eye of Moam" || items[14].children[0].innerHTML == "Eye of Moam" || items[15].children[0] == "Eye of Moam") {
    EOM = true;
    if (TREOS+ZHC+TOEP+HCOD+REEL+EOM == 1)
      trinket1 = "EOM";
    else if (TREOS+ZHC+TOEP+HCOD+REEL+EOM == 2)
      trinket2 = "EOM";
  }
  console.log("TREOS:"+TREOS+" ZHC:"+ZHC+" TEOP:"+TOEP+" HCOD:"+HCOD+" REEL:"+REEL+" EOM:"+EOM); console.log(trinket1); console.log(trinket2)
  var setT05 = 0, setT1 = 0, setT2 = 0, setT25 = 0, setT3 = 0, setZGRing = 0, setZG = 0, setAQ20 = 0, setPvPRare = 0, setPvPEpic = 0, setBV = 0;
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
  }
  var bonusList = "", bonusDrainLife = false, bonusShadowCost = false, bonusImmolateDMG = false, bonusShadowBoltCost = false, bonusCorruption = false, bonusCorruptionZG = false, bonusImmolatePvP = false;
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
  if (setBV >= 3) {
    crit += 2;
    bonusList += "<tr><td>Bloodvine Set</td></tr>";}
  
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
  var ZHC = false;
  var PI = 0;
  
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
  for (var i=fightStart+0.5; i<=fightEnd; i=i+0.5)
    timeVec[timeVec.length] = i;

  var hakkarBuff = document.getElementById("hakkarBuff").checked;
  var onyxiaBuff = document.getElementById("onyxiaBuff").checked;
  var songflower = document.getElementById("songflower").checked;
  var diremaulBuff = document.getElementById("diremaulBuff").checked;
  
  var manaExtra = 1800*document.getElementById("manaPotion").checked + 1200*document.getElementById("demonicRune").checked + 100*document.getElementById("enchantMana").checked;
  ShP += SP + 150*document.getElementById("supremeFlask").checked + 36*document.getElementById("brilliantOil").checked + 35*document.getElementById("arcaneElixir").checked + 40*document.getElementById("shadowElixir").checked + 23*document.getElementById("holiday").checked;
  FiP += SP + 150*document.getElementById("supremeFlask").checked + 36*document.getElementById("brilliantOil").checked + 35*document.getElementById("arcaneElixir").checked + 40*document.getElementById("fireElixir").checked + 23*document.getElementById("holiday").checked;
  var afflictionHit = hit + 2*document.getElementById("talentSuppression").parentNode.children[1].innerHTML;
  var afflictionChance = Math.min(99, baseHit+afflictionHit);
  crit += 10*onyxiaBuff + 5*songflower + 3*diremaulBuff + 1*document.getElementById("brilliantOil").checked + 3*document.getElementById("moonkinAura").checked + 1*document.getElementById("talentDevastation").parentNode.children[1].innerHTML;
  int  += 31*document.getElementById("arcaneIntellect").checked + 16*document.getElementById("markOfTheWild").checked + 10*document.getElementById("runnTumTuber").checked + 15*songflower;
  mp5  += 8*document.getElementById("nightfinSoup").checked + 12*document.getElementById("magebloodPotion").checked + 42*document.getElementById("blessingOfWisdom").checked + 25*document.getElementById("manaSpringTotem").checked;
  
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
    var critMultiplier = 1.5 + 0.5*document.getElementById("talentRuin").parentNode.children[1].innerHTML;
    
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
    var critChance = (1.7 + crit + (intel/60.6));
    var critFinal = (1.7 + crit + (intel/60.6)) * (100-miss)/100;
    var critSearing = (1.7 + crit + (intel/60.6) + 2*document.getElementById("talentSearingPain").parentNode.children[1].innerHTML) * (100-miss)/100;
    var regularHit = 100-miss-critFinal;
    var shadowVuln = (1 - Math.pow(1 - critFinal/100*(1-miss/100), 4/(1-miss/100))) * 0.2*document.getElementById("talentShadowBolt").parentNode.children[1].innerHTML * (primary == "shadowBolt");
    
    var DPS = new Array;
    var lifeTaps = new Array;
    var manaLeft = new Array;
    for (var i=0; i<timeVec.length; i++) {
      var doom = false, agony = false, corruption = false, immolate = false, siphon = false, time = threatTime, damage = 0, mana = manaMain, timePast = 0, SBC = 0, trinket1Time = 0, trinket2Time, trinket1CD = 0, trinket2CD = 0, trinket1Bonus = true, trinket2Bonus = false, piTime = 0, piCD = 0;
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
        trinket1Time -= time-timePast;
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
        
        if (trinket1Bonus == true && trinket1Time <= 0) {
          trinket1Bonus = false;
          if (trinket1 == "TREOS" && trinket1Bonus == true) {
            ShP -= 130;
            FiP -= 130; console.log("Minus, " + trinket1Bonus)
          }
          updateValues();
        }
        
        if (TREOS+ZHC+TOEP+HCOD+REEL+EOM > 0 && trinket1Time <= 0) {
          if (primary == "shadowBolt" && SBC > 4) {
            if (trinket1CD <= 0 && trinket1 == "TREOS") {
              trinket1Bonus = true;
              trinket1Time = 20;
              trinket1CD = 120;
              ShP += 130;
              FiP += 130; console.log("Plus, " + trinket1Bonus)
              updateValues();
            }
          }
          else if (primary !== "shadowBolt") {
          }
        }
        
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
          SBC++;}
        
        else if (primary == "searingPain" && GCD <= timeLeft) {
          damage += (avgSearing*critSearing*critMultiplier + avgSearing*regularHit)/100;
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
          damage += (avgSearing*critSearing*critMultiplier + avgSearing*regularHit)/100;
          mana -= searingCost;
          time += GCD*2;}
        
        else
          time += 0.5;
      }
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

  var dpsOutput = "<h2>" + formatNumber(math.sum(baseVec)/baseVec.length,2) + " <span style='font-size:14px'>DPS</span></h2>";
  var statWeightOutput = "<h2><span style='font-size:18px'>Crit = " + formatNumber(critVal/SPVal,2) + " SP, Hit = " + formatNumber(hitVal/SPVal,2) + " SP</span> </h2>";
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
  document.getElementById('defaultOpen').innerHTML = "Main: " + "<b><span style='font-size:20px'>" + formatNumber(math.sum(baseVec)/baseVec.length,2) + " </span><span style='font-size:14px'>DPS</span></b>";;
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
  console.timeEnd('Timer')
  
  // Nested Functions
  function updateValues() {
    var tapGain = (424+ShP*0.8) * (1 + 0.1*document.getElementById("talentLifeTap").parentNode.children[1].innerHTML) * lifeTap;
    var avgNonCrit = (510+(ShP*6/7)) * shadowMultiplier;
    var avgBurn = (488+(ShP*3/7)) * shadowMultiplier * document.getElementById("talentShadowburn").parentNode.children[1].innerHTML;
    var avgDeathCoil = (476+(ShP*1.5/7)) * shadowMultiplier;
    var avgSearing = (226+(FiP*3/7)) * fireMultiplier;
    var avgImmo = (279*(1+0.05*bonusImmolateDMG) + (FiP*0.2)) * fireMultiplier * (1 + 0.05*document.getElementById("talentImmolate").parentNode.children[1].innerHTML);
    var avgImmoR7 = (258*(1+0.05*bonusImmolateDMG) + (FiP*0.2)) * fireMultiplier * (1 + 0.05*document.getElementById("talentImmolate").parentNode.children[1].innerHTML);

    var miss = Math.max(1, 100 - baseHit - hit);
    var critChance = (1.7 + crit + (intel/60.6));
    var critFinal = (1.7 + crit + (intel/60.6)) * (100-miss)/100;
    var critSearing = (1.7 + crit + (intel/60.6) + 2*document.getElementById("talentSearingPain").parentNode.children[1].innerHTML) * (100-miss)/100;
    var regularHit = 100-miss-critFinal;
    var shadowVuln = (1 - Math.pow(1 - critFinal/100*(1-miss/100), 4/(1-miss/100))) * 0.2*document.getElementById("talentShadowBolt").parentNode.children[1].innerHTML * (primary == "shadowBolt");
  }
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
