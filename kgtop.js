  // weight converter kg to pounds
  function weightConverter(valNum){
      var valNum = valNum * 2.2046;
      var n = valNum.toFixed(0);
      document.getElementById("outputPounds").innerHTML = n;
  }



  //weight converter pounds to kg
  function weightConverter1(valNum1){
      var valNum1 = valNum1 / 2.2046;
      var n1 = valNum1.toFixed(0);
      document.getElementById("outputKilograms").innerHTML = n1;
  }
