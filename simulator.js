function runSim() {
  
  var SP = Number(document.getElementById("spellPower").value);
  var crit = Number(document.getElementById("spellCrit").value);
  var hit = Number(document.getElementById("spellHit").value);
  var int = Number(document.getElementById("intellect").value);
  var mp5 = Number(document.getElementById("mp5").value);
  
  var useAgony = false;
  var useCorruption = false;
  var ZHC = false;
  var PI = 0;
  
  var raid = false;
  var gnome = false;
  
  var timeVec = new Array;
  timeVec[0] = 30;
  for (var i=30.5; i<=120; i=i+0.5)
    timeVec[timeVec.length] = i;
  var threatTime = 0;

  var hakkarBuff = document.getElementById("hakkarBuff").checked;
  var onyxiaBuff = document.getElementById("onyxiaBuff").checked;
  var songflower = document.getElementById("songflower").checked;
  var diremaulBuff = document.getElementById("diremaulBuff").checked;
  
  var manaExtra = 0;
  SP = SP + 150*document.getElementById("supremeFlask").checked + 36*document.getElementById("brilliantOil").checked + 35*document.getElementById("arcaneElixir").checked + 40*document.getElementById("shadowElixir").checked;
  crit = crit + 1*document.getElementById("brilliantOil").checked;
  
  var sbCost = 380; 
  var sbTime = 2.5;
  var GCD = 1.5;
  var corruptionCost = 290;
  var corruptionDuration = 18;
  var corruption = false;
  var agonyCost = 215;
  var agonyDuration = 24;
  var agony = false;
  
  var shadowMultiplier = 1.15 * (1 + 0.1*document.getElementById("curseShadow").checked) * (1 + 0.15*document.getElementById("shadowWeaving").checked); //DS, CoS, Weaving
  var fireMultiplier = 1.15 * (1 + 0.1*document.getElementById("curseElements").checked) * (1 + 0.15*document.getElementById("Scorch").checked); //DS, CoE, Scorch
  
  for (var q=1; q<=6; q++) {
    if (q==1) {
      SP = SP + 1;}
    else if (q==2) {
      SP = SP - 1; 
      int = int + 10 + 0.5*gnome;}
    else if (q==3) {
      int = int - 10 - 0.5*gnome; 
      crit = crit + 1;}
    else if (q==4) {
      crit = crit - 1;
      hit = hit + 1;}
    else if (q==5) {
      hit = hit - 1;
      mp5 = mp5 + 3;}
    else if (q==6) {
      mp5 = mp5 - 3;}
    
    var intel = Math.round((int/(1 + 0.05*gnome)+raid*47)*(1 + 0.1*raid)*(1 + 0.05*gnome)*(1 + 0.15*hakkarBuff));
    var manaMain = 1093 + intel*15 + manaExtra;
    var tapGain = (424+SP*0.8)*1.2;
    var avgNonCrit = (510.5+(SP*3/3.5)) * shadowMultiplier;
    var avgBurn = (488+(SP*1.5/3.5)) * shadowMultiplier;
    if (hit <= 16)
      var miss = 100 - 83 - hit;
    else
      var miss = 1;
    var critChance = (1.7 + crit + 5 + (intel/60.6) + 10*onyxiaBuff + 5*songflower + 3*diremaulBuff);
    var critFinal = (1.7 + crit + 5 + (intel/60.6) + 10*onyxiaBuff + 5*songflower + 3*diremaulBuff) * (100-miss)/100;
    var regularHit = 100-miss-critFinal;
    var shadowVuln = 1 - Math.pow(1 - critChance/100, 4/(1-miss/100));
    
    var DPS = new Array;
    var lifeTaps = new Array;
    var manaLeft = new Array;
    var time = threatTime;
    var damage = 0;
    var mana = manaMain;
    var timePast = 0;
    var burn = false;
    var SBC = 0;
    for (var i=0; i<timeVec.length; i++) {
      agony = false; corruption = false; time = threatTime; damage = 0; mana = manaMain; timePast = 0; burn = false; SBC = 0;
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
      
      while (time <= timeVec[i]) {
        var timeLeft = timeVec[i]-time;
        mana = mana + (time-timePast)*(mp5+36*raid)/5;
        timePast = time;
        
        if (agony == true && time>=agonyUse*agonyDuration)
          agony = false;
        if (corruption == true && time>=corruptionUse*corruptionDuration)
          corruption = false;
        if (mana < sbCost || (timeLeft<5)+(mana<sbCost+365)+(timeLeft>1.5)==3) {
          if (timeLeft >= 2) {
              mana = mana + tapGain;
              lifeTaps[i]++;}
          time = time+GCD;}
        
        else if (agony == false && agonyDuration <= timeLeft) {
          agony = true; agonyUse++;
          //damage = damage + (1044*1.06);
          mana = mana - agonyCost;
          time = time + GCD;}
        
        else if (corruption == false && corruptionDuration <= timeLeft) {
          corruption = true; agonyUse++;
          //damage = damage + 888;
          mana = mana - corruptionCost;
          time = time + GCD;}
        
        else if (sbTime <= timeLeft) {
          damage += (avgNonCrit*critFinal*2 + avgNonCrit*regularHit)/100 * ((shadowVuln*0.2)+1);
          if (SBC == 0)
            damage -= (avgNonCrit*critFinal*2 + avgNonCrit*regularHit)/100 * ((shadowVuln*0.2));
          else if (SBC == 1)
            damage -= (avgNonCrit*critFinal*2 + avgNonCrit*regularHit)/100 * ((shadowVuln*0.2)) * (1-critFinal/100);
          else if (SBC == 2)
            damage -= (avgNonCrit*critFinal*2 + avgNonCrit*regularHit)/100 * ((shadowVuln*0.2)) * Math.pow(1-critFinal/100,2);
          else if (SBC == 3)
            damage -= (avgNonCrit*critFinal*2 + avgNonCrit*regularHit)/100 * ((shadowVuln*0.2)) * Math.pow(1-critFinal/100,3);
          mana -= sbCost;
          time += sbTime;
          SBC++;}
        
        else if (sbTime > timeLeft) {
          damage += (avgBurn*critFinal*2 + avgBurn*regularHit)/100 * ((shadowVuln*0.2)+1);
          mana -= 365;
          time += GCD*2;
          burn = true;
        }
      }
      damage = damage*0.94;
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
      var baseDPS = math.sum(DPS)/DPS.length;
      var baseVec = DPS;}
  } //Loop with q
  var SPVal   = (SPDPS-baseDPS);
  var intVal  = (intDPS-baseDPS);
  var critVal = (critDPS-baseDPS);
  var hitVal  = (hitDPS-baseDPS);
  
  var output = "Average dps from fight duration span of " + timeVec[0] + " to " + timeVec[timeVec.length-1] + " seconds is " + formatNumber(math.sum(DPS)/DPS.length,2) + " dps<br>";
  output += "Stat Weights:<br>Crit = " + formatNumber(critVal/SPVal,2) + " SP<br>Hit &nbsp= " + formatNumber(hitVal/SPVal,2) + " SP";
  
  document.getElementById("page").innerHTML = output;
  document.getElementById("finalStats").innerHTML = "<table><tr><th colspan='2'>Stats</th></tr><tr><td>Spell Power</td><td>" + SP + "</td></tr><tr><td>Crit Chance</td><td>" + formatNumber(critChance,2) + "%</td></tr><tr><td>Hit Chance</td><td>" + 100-miss + "%</td></tr></table>";
  
  console.log(critFinal)
  console.log(avgNonCrit)
  console.log(shadowVuln)
} //Function

function formatNumber(num, places) {
  return +(Math.round(num + "e+" + places)  + "e-" + places);
}
