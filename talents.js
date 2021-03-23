function talentFunc(click,element) {
  if (arguments.length == 0) {
    var affTree = document.getElementById("afflictionTree").children[0].children;
    var demTree = document.getElementById("demonologyTree").children[0].children;
    var desTree = document.getElementById("destructionTree").children[0].children;
    for (var q=1; q<=3; q++) {
      if (q==1)
        var tree = affTree;
      else if (q==2)
        var tree = demTree;
      else if (q==3)
        var tree = desTree;

      for (var i=1; i<tree.length; i++) {
        for (var j=0; j<4; j++) {
          try {
            var element = tree[i].children[j].children[0].children[0];
            var text = tree[i].children[j].children[0].children[0].children[1];
            var talent = tree[i].children[j].children[0].children[0].children[0];
          }
          catch(err) {}
          if (element !== undefined && text !== undefined && talent !== undefined) {
            if (talent.id == "talentAmpCurse" || talent.id == "talentSiphon" || talent.id == "talentExhaust" || talent.id == "talentDarkPact" || talent.id == "talentFelDomination" || talent.id == "talentDemonicSacrifice" || talent.id == "talentSoulLink" || talent.id == "talentShadowburn" || talent.id == "talentRuin" || talent.id == "talentConflagrate")
              var max = 1;
            else if (talent.id == "talentLifeTap" || talent.id == "talentDrainSoul" || talent.id == "talentGrimReach" || talent.id == "talentNightfall" || talent.id == "talentDrainMana" || talent.id == "talentHealthstone" || talent.id == "talentHealthFunnel" || talent.id == "talentMasterSummon" || talent.id == "talentFirestone" || talent.id == "talentSpellstone" || talent.id == "talentImpFirebolt" || talent.id == "talentImpLash" || talent.id == "talentIntensity" || talent.id == "talentDestructiveReach" || talent.id == "talentPyroclasm")
              var max = 2;
            else if (talent.id == "talentWeakness" || talent.id == "talentAgony" || talent.id == "talentImpImp" || talent.id == "talentImpVoid" || talent.id == "talentImpSuccubus")
              var max = 3;
            else if (talent.id == "talentImpExhaust")
              var max = 4;
            else
              var max = 5;

            if (text.innerHTML > 0 && text.innerHTML < max) {
              element.style.filter = "grayscale(0%)";
              element.style.color = "green";
              talent.style.border = "2px solid green";
            }  
            else if (text.innerHTML >= max) {
              element.style.filter = "grayscale(0%)";
              element.style.color = "orange";
              talent.style.border = "2px solid orange";
            }
            else if (text.innerHTML <= 0) {
              element.style.filter = "grayscale(100%)";
              element.style.color = "orange";
              talent.style.border = "2px solid orange";
            }
          }
        }
      }
    }
  }
  else {
    var text = element.children[1];
    var talent = element.children[0];
    if (talent.id == "talentAmpCurse" || talent.id == "talentSiphon" || talent.id == "talentExhaust" || talent.id == "talentDarkPact" || talent.id == "talentFelDomination" || talent.id == "talentDemonicSacrifice" || talent.id == "talentSoulLink" || talent.id == "talentShadowburn" || talent.id == "talentRuin" || talent.id == "talentConflagrate")
      var max = 1;
    else if (talent.id == "talentLifeTap" || talent.id == "talentDrainSoul" || talent.id == "talentGrimReach" || talent.id == "talentNightfall" || talent.id == "talentDrainMana" || talent.id == "talentHealthstone" || talent.id == "talentHealthFunnel" || talent.id == "talentMasterSummon" || talent.id == "talentFirestone" || talent.id == "talentSpellstone" || talent.id == "talentImpFirebolt" || talent.id == "talentImpLash" || talent.id == "talentIntensity" || talent.id == "talentDestructiveReach" || talent.id == "talentPyroclasm")
      var max = 2;
    else if (talent.id == "talentWeakness" || talent.id == "talentAgony" || talent.id == "talentImpImp" || talent.id == "talentImpVoid" || talent.id == "talentImpSuccubus")
      var max = 3;
    else if (talent.id == "talentImpExhaust")
      var max = 4;
    else
      var max = 5;

    if (click == "left") {
      text.innerHTML = Number(text.innerHTML) + 1;}
    else if (click == "right") {
      text.innerHTML = Number(text.innerHTML) - 1;}

    if (text.innerHTML > 0 && text.innerHTML < max) {
      element.style.filter = "grayscale(0%)";
      element.style.color = "green";
      talent.style.border = "2px solid green";
    }  
    else if (text.innerHTML >= max) {
      element.style.filter = "grayscale(0%)";
      element.style.color = "orange";
      talent.style.border = "2px solid orange";
      text.innerHTML = max;
    }
    else if (text.innerHTML <= 0) {
      element.style.filter = "grayscale(100%)";
      element.style.color = "orange";
      talent.style.border = "2px solid orange";
      text.innerHTML = 0;
    }
  }
  countTalents()
}

function setTalents(spec) {
  resetTalents();
  if (spec == "DS/Ruin") {
    document.getElementById("talentSuppression").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentCorruption").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentLifeTap").parentNode.children[1].innerHTML = 2;

    document.getElementById("talentHealthstone").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentStamina").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentImpImp").parentNode.children[1].innerHTML = 3;
    document.getElementById("talentImpImp").parentNode.children[1].innerHTML = 3;
    document.getElementById("talentImpVoid").parentNode.children[1].innerHTML = 3;
    document.getElementById("talentFelDomination").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentDemonicSacrifice").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentMasterSummon").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentFelStamina").parentNode.children[1].innerHTML = 4;

    document.getElementById("talentShadowBolt").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentBane").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentDevastation").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentShadowburn").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentDestructiveReach").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentIntensity").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentRuin").parentNode.children[1].innerHTML = 1;
  }
  else if (spec == "SM/Ruin") {
    document.getElementById("talentSuppression").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentCorruption").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentLifeTap").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentAgony").parentNode.children[1].innerHTML = 3;
    document.getElementById("talentFelConc").parentNode.children[1].innerHTML = 4;
    document.getElementById("talentAmpCurse").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentGrimReach").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentNightfall").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentSiphon").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentShadowMastery").parentNode.children[1].innerHTML = 5;

    document.getElementById("talentShadowBolt").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentBane").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentDevastation").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentShadowburn").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentDestructiveReach").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentIntensity").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentRuin").parentNode.children[1].innerHTML = 1;
  }
  else if (spec == "DS/ES") {
    document.getElementById("talentHealthstone").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentStamina").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentImpImp").parentNode.children[1].innerHTML = 3;
    document.getElementById("talentImpImp").parentNode.children[1].innerHTML = 3;
    document.getElementById("talentImpVoid").parentNode.children[1].innerHTML = 3;
    document.getElementById("talentFelDomination").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentDemonicSacrifice").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentMasterSummon").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentFelStamina").parentNode.children[1].innerHTML = 4;

    document.getElementById("talentShadowBolt").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentBane").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentDevastation").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentShadowburn").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentDestructiveReach").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentImmolate").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentRuin").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentSearingPain").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentEmberstorm").parentNode.children[1].innerHTML = 5;
  }
  else if (spec == "SM/DS") {
    document.getElementById("talentSuppression").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentCorruption").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentLifeTap").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentAgony").parentNode.children[1].innerHTML = 3;
    document.getElementById("talentFelConc").parentNode.children[1].innerHTML = 4;
    document.getElementById("talentAmpCurse").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentGrimReach").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentNightfall").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentSiphon").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentShadowMastery").parentNode.children[1].innerHTML = 5;

    document.getElementById("talentHealthstone").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentStamina").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentImpImp").parentNode.children[1].innerHTML = 3;
    document.getElementById("talentImpImp").parentNode.children[1].innerHTML = 3;
    document.getElementById("talentImpVoid").parentNode.children[1].innerHTML = 3;
    document.getElementById("talentFelDomination").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentDemonicSacrifice").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentMasterSummon").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentFelStamina").parentNode.children[1].innerHTML = 4;
  }
  else if (spec == "Conflagrate") {
    document.getElementById("talentSuppression").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentCorruption").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentLifeTap").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentAmpCurse").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentAgony").parentNode.children[1].innerHTML = 3;
    document.getElementById("talentNightfall").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentGrimReach").parentNode.children[1].innerHTML = 2;

    document.getElementById("talentShadowBolt").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentBane").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentDevastation").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentShadowburn").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentDestructiveReach").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentIntensity").parentNode.children[1].innerHTML = 2;
    document.getElementById("talentRuin").parentNode.children[1].innerHTML = 1;
    document.getElementById("talentEmberstorm").parentNode.children[1].innerHTML = 4;
    document.getElementById("talentImmolate").parentNode.children[1].innerHTML = 5;
    document.getElementById("talentConflagrate").parentNode.children[1].innerHTML = 1;
  }
  talentFunc();
}

function resetTalents() {
  document.getElementById("talentSuppression").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentCorruption").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentWeakness").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentDrainSoul").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentLifeTap").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentDrainLife").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentAgony").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentFelConc").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentAmpCurse").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentGrimReach").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentNightfall").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentDrainMana").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentSiphon").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentExhaust").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentImpExhaust").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentShadowMastery").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentDarkPact").parentNode.children[1].innerHTML = 0;

  document.getElementById("talentHealthstone").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentImpImp").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentStamina").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentHealthFunnel").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentImpVoid").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentFelIntellect").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentImpSuccubus").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentFelDomination").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentFelStamina").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentMasterSummon").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentUnholyPower").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentEnslaveDemon").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentDemonicSacrifice").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentFirestone").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentMasterDemon").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentSoulLink").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentSpellstone").parentNode.children[1].innerHTML = 0;

  document.getElementById("talentShadowBolt").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentCataclysm").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentBane").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentAftermath").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentImpFirebolt").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentImpLash").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentDevastation").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentShadowburn").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentIntensity").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentDestructiveReach").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentSearingPain").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentPyroclasm").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentImmolate").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentRuin").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentEmberstorm").parentNode.children[1].innerHTML = 0;
  document.getElementById("talentConflagrate").parentNode.children[1].innerHTML = 0;
  talentFunc();
}

function countTalents() {
  var pointCount = Number(document.getElementById("talentSuppression").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentCorruption").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentWeakness").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentDrainSoul").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentLifeTap").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentDrainLife").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentAgony").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentFelConc").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentAmpCurse").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentGrimReach").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentNightfall").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentDrainMana").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentSiphon").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentExhaust").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentImpExhaust").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentShadowMastery").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentDarkPact").parentNode.children[1].innerHTML);

  pointCount += Number(document.getElementById("talentHealthstone").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentImpImp").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentStamina").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentHealthFunnel").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentImpVoid").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentFelIntellect").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentImpSuccubus").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentFelDomination").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentFelStamina").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentMasterSummon").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentUnholyPower").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentEnslaveDemon").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentDemonicSacrifice").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentFirestone").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentMasterDemon").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentSoulLink").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentSpellstone").parentNode.children[1].innerHTML);

  pointCount += Number(document.getElementById("talentShadowBolt").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentCataclysm").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentBane").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentAftermath").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentImpFirebolt").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentImpLash").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentDevastation").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentShadowburn").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentIntensity").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentDestructiveReach").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentSearingPain").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentPyroclasm").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentImmolate").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentRuin").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentEmberstorm").parentNode.children[1].innerHTML);
  pointCount += Number(document.getElementById("talentConflagrate").parentNode.children[1].innerHTML);
  
  if (pointCount < 51)
    var color = "green";
  else if (pointCount == 51)
    var color = "orange";
  else if (pointCount > 51)
    var color = "red";
  document.getElementById("totalTalentPoints").innerHTML = "Total Talent Points: <span style=color:" + color + ">" + pointCount + "</span>";
}
