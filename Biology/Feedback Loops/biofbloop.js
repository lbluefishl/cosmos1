
  let biofbloop1But = document.getElementById('sa-biofbloop-1');
  let biofbloop2But = document.getElementById('sa-biofbloop-2');
  let biofbloop3But = document.getElementById('sa-biofbloop-3');
  let biofbloop4But = document.getElementById('sa-biofbloop-4');
  let biofbloop5But = document.getElementById('sa-biofbloop-5');
  let biofbloop6But = document.getElementById('sa-biofbloop-6');
  let biofbloop7But = document.getElementById('sa-biofbloop-7');
  let biofbloop8But = document.getElementById('sa-biofbloop-8');
  let biofbloop9But = document.getElementById('sa-biofbloop-9');
  let biofbloop10But = document.getElementById('sa-biofbloop-10');


  showExplanation1 = function() {
    document.getElementById('e-biofbloop-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-biofbloop-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-biofbloop-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-biofbloop-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-biofbloop-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-biofbloop-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-biofbloop-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-biofbloop-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-biofbloop-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-biofbloop-10').style.display = 'block';
     } 




if (document.getElementById('sa-biofbloop-1') != null) {
 biofbloop1But.onclick = function() {
    if (document.getElementById('o-biofbloop-11').checked) {
      document.getElementById('b-biofbloop-11').style.border = '3px solid limegreen'
      document.getElementById('r-biofbloop-11').style.color = 'limegreen'
      document.getElementById('r-biofbloop-11').innerHTML = 'Correct!'
	    document.getElementById('sa-biofbloop-1').disabled = true;
      showExplanation1()
      localStorage.setItem('biofbloop1', 1)
    }
    if (document.getElementById('o-biofbloop-12').checked) {
      document.getElementById('b-biofbloop-12').style.border = '3px solid red'
      document.getElementById('r-biofbloop-12').style.color = 'red'
      document.getElementById('r-biofbloop-12').innerHTML = 'Incorrect!'
      document.getElementById('b-biofbloop-11').style.border = '3px solid limegreen'
      document.getElementById('r-biofbloop-11').style.color = 'limegreen'
      document.getElementById('r-biofbloop-11').innerHTML = 'Correct!'
      document.getElementById('sa-biofbloop-1').disabled = true;
      showExplanation1()
      localStorage.setItem('biofbloop1', 0)
    }
    if (document.getElementById('o-biofbloop-13').checked) {
      document.getElementById('b-biofbloop-13').style.border = '3px solid red'
      document.getElementById('r-biofbloop-13').style.color = 'red'
      document.getElementById('r-biofbloop-13').innerHTML = 'Incorrect!'
      document.getElementById('b-biofbloop-11').style.border = '3px solid limegreen'
      document.getElementById('r-biofbloop-11').style.color = 'limegreen'
      document.getElementById('r-biofbloop-11').innerHTML = 'Correct!'
      document.getElementById('sa-biofbloop-1').disabled = true;
      showExplanation1()
      localStorage.setItem('biofbloop1', 0)
    }
    if (document.getElementById('o-biofbloop-14').checked) {
      document.getElementById('b-biofbloop-14').style.border = '3px solid red'
      document.getElementById('r-biofbloop-14').style.color = 'red'
      document.getElementById('r-biofbloop-14').innerHTML = 'Incorrect!'
      document.getElementById('b-biofbloop-11').style.border = '3px solid limegreen'
      document.getElementById('r-biofbloop-11').style.color = 'limegreen'
      document.getElementById('r-biofbloop-11').innerHTML = 'Correct!'
      document.getElementById('sa-biofbloop-1').disabled = true;
      showExplanation1()
      localStorage.setItem('biofbloop1', 0)
    }
    
  }
}




if (document.getElementById('sa-biofbloop-2') != null) {
  biofbloop2But.onclick = function() {
    if (document.getElementById('o-biofbloop-21').checked) {
      document.getElementById('b-biofbloop-21').style.border = '3px solid red'
      document.getElementById('r-biofbloop-21').style.color = 'red'
      document.getElementById('r-biofbloop-21').innerHTML = 'Incorrect!'
      document.getElementById('b-biofbloop-23').style.border = '3px solid limegreen'
      document.getElementById('r-biofbloop-23').style.color = 'limegreen'
      document.getElementById('r-biofbloop-23').innerHTML = 'Correct!'
	    document.getElementById('sa-biofbloop-2').disabled = true;
      showExplanation2()
      localStorage.setItem('biofbloop2', 0)
    }
    if (document.getElementById('o-biofbloop-22').checked) {
      document.getElementById('b-biofbloop-22').style.border = '3px solid red'
      document.getElementById('r-biofbloop-22').style.color = 'red'
      document.getElementById('r-biofbloop-22').innerHTML = 'Incorrect!'
      document.getElementById('b-biofbloop-23').style.border = '3px solid limegreen'
      document.getElementById('r-biofbloop-23').style.color = 'limegreen'
      document.getElementById('r-biofbloop-23').innerHTML = 'Correct!'
      document.getElementById('sa-biofbloop-2').disabled = true;
      showExplanation2()
      localStorage.setItem('biofbloop2', 0)
    }
    if (document.getElementById('o-biofbloop-23').checked) {
      document.getElementById('b-biofbloop-23').style.border = '3px solid limegreen'
      document.getElementById('r-biofbloop-23').style.color = 'limegreen'
      document.getElementById('r-biofbloop-23').innerHTML = 'Correct!'
      document.getElementById('sa-biofbloop-2').disabled = true;
      showExplanation2()
      localStorage.setItem('biofbloop2', 1)
    }
    if (document.getElementById('o-biofbloop-24').checked) {
      document.getElementById('b-biofbloop-24').style.border = '3px solid red'
      document.getElementById('r-biofbloop-24').style.color = 'red'
      document.getElementById('r-biofbloop-24').innerHTML = 'Incorrect!'
      document.getElementById('b-biofbloop-23').style.border = '3px solid limegreen'
      document.getElementById('r-biofbloop-23').style.color = 'limegreen'
      document.getElementById('r-biofbloop-23').innerHTML = 'Correct!'
      document.getElementById('sa-biofbloop-2').disabled = true;
      showExplanation2()
      localStorage.setItem('biofbloop2', 0)
    }
  }
}

if (document.getElementById('sa-biofbloop-3') != null) {
  biofbloop3But.onclick = function() {
    if (document.getElementById('o-biofbloop-31').checked) {
      document.getElementById('b-biofbloop-31').style.border = '3px solid red'
      document.getElementById('r-biofbloop-31').style.color = 'red'
      document.getElementById('r-biofbloop-31').innerHTML = 'Incorrect!'
      document.getElementById('b-biofbloop-32').style.border = '3px solid limegreen'
      document.getElementById('r-biofbloop-32').style.color = 'limegreen'
      document.getElementById('r-biofbloop-32').innerHTML = 'Correct!'
	    document.getElementById('sa-biofbloop-3').disabled = true;
      showExplanation3()
      localStorage.setItem('biofbloop3', 0)
    }
    if (document.getElementById('o-biofbloop-32').checked) {
      document.getElementById('b-biofbloop-32').style.border = '3px solid limegreen'
      document.getElementById('r-biofbloop-32').style.color = 'limegreen'
      document.getElementById('r-biofbloop-32').innerHTML = 'Correct!'
      document.getElementById('sa-biofbloop-3').disabled = true;
      showExplanation3()
      localStorage.setItem('biofbloop3', 1)
    }
    if (document.getElementById('o-biofbloop-33').checked) {
      document.getElementById('b-biofbloop-33').style.border = '3px solid red'
      document.getElementById('r-biofbloop-33').style.color = 'red'
      document.getElementById('r-biofbloop-33').innerHTML = 'Incorrect!'
      document.getElementById('b-biofbloop-32').style.border = '3px solid limegreen'
      document.getElementById('r-biofbloop-32').style.color = 'limegreen'
      document.getElementById('r-biofbloop-32').innerHTML = 'Correct!'
      document.getElementById('sa-biofbloop-3').disabled = true;
      showExplanation3()
      localStorage.setItem('biofbloop3', 0)
    }
    if (document.getElementById('o-biofbloop-34').checked) {
      document.getElementById('b-biofbloop-34').style.border = '3px solid red'
      document.getElementById('r-biofbloop-34').style.color = 'red'
      document.getElementById('r-biofbloop-34').innerHTML = 'Incorrect!'
      document.getElementById('b-biofbloop-32').style.border = '3px solid limegreen'
      document.getElementById('r-biofbloop-32').style.color = 'limegreen'
      document.getElementById('r-biofbloop-32').innerHTML = 'Correct!'
      document.getElementById('sa-biofbloop-3').disabled = true;
      showExplanation3()
      localStorage.setItem('biofbloop3', 0)
    }
  }
}

if (document.getElementById('sa-biofbloop-4') != null) {
  biofbloop4But.onclick = function() {
    if (document.getElementById('o-biofbloop-41').checked) {
      document.getElementById('b-biofbloop-41').style.border = '3px solid red'
      document.getElementById('r-biofbloop-41').style.color = 'red'
      document.getElementById('r-biofbloop-41').innerHTML = 'Incorrect!'
      document.getElementById('b-biofbloop-44').style.border = '3px solid limegreen'
      document.getElementById('r-biofbloop-44').style.color = 'limegreen'
      document.getElementById('r-biofbloop-44').innerHTML = 'Correct!'
	    document.getElementById('sa-biofbloop-4').disabled = true;
      showExplanation4()
      localStorage.setItem('biofbloop4', 0)
    }
    if (document.getElementById('o-biofbloop-42').checked) {
      document.getElementById('b-biofbloop-42').style.border = '3px solid red'
      document.getElementById('r-biofbloop-42').style.color = 'red'
      document.getElementById('r-biofbloop-42').innerHTML = 'Incorrect!'
      document.getElementById('b-biofbloop-44').style.border = '3px solid limegreen'
      document.getElementById('r-biofbloop-44').style.color = 'limegreen'
      document.getElementById('r-biofbloop-44').innerHTML = 'Correct!'
      document.getElementById('sa-biofbloop-4').disabled = true;
      showExplanation4()
      localStorage.setItem('biofbloop4', 0)
    }
    if (document.getElementById('o-biofbloop-43').checked) {
      document.getElementById('b-biofbloop-43').style.border = '3px solid red'
      document.getElementById('r-biofbloop-43').style.color = 'red'
      document.getElementById('r-biofbloop-43').innerHTML = 'Incorrect!'
      document.getElementById('b-biofbloop-44').style.border = '3px solid limegreen'
      document.getElementById('r-biofbloop-44').style.color = 'limegreen'
      document.getElementById('r-biofbloop-44').innerHTML = 'Correct!'
      document.getElementById('sa-biofbloop-4').disabled = true;
      showExplanation4()
      localStorage.setItem('biofbloop4', 0)
    }
    if (document.getElementById('o-biofbloop-44').checked) {
      document.getElementById('b-biofbloop-44').style.border = '3px solid limegreen'
      document.getElementById('r-biofbloop-44').style.color = 'limegreen'
      document.getElementById('r-biofbloop-44').innerHTML = 'Correct!'
      document.getElementById('sa-biofbloop-4').disabled = true;
      showExplanation4()
      localStorage.setItem('biofbloop4', 1)
    }
  }
}

if (document.getElementById('sa-biofbloop-5') != null) {
  biofbloop5But.onclick = function() {
    if (document.getElementById('o-biofbloop-51').checked) {
      document.getElementById('b-biofbloop-51').style.border = '3px solid red'
      document.getElementById('r-biofbloop-51').style.color = 'red'
      document.getElementById('r-biofbloop-51').innerHTML = 'Incorrect!'
      document.getElementById('b-biofbloop-53').style.border = '3px solid limegreen'
      document.getElementById('r-biofbloop-53').style.color = 'limegreen'
      document.getElementById('r-biofbloop-53').innerHTML = 'Correct!'
	    document.getElementById('sa-biofbloop-5').disabled = true;
      showExplanation5()
      localStorage.setItem('biofbloop5', 0)
    }
    if (document.getElementById('o-biofbloop-52').checked) {
      document.getElementById('b-biofbloop-52').style.border = '3px solid red'
      document.getElementById('r-biofbloop-52').style.color = 'red'
      document.getElementById('r-biofbloop-52').innerHTML = 'Incorrect!'
      document.getElementById('b-biofbloop-53').style.border = '3px solid limegreen'
      document.getElementById('r-biofbloop-53').style.color = 'limegreen'
      document.getElementById('r-biofbloop-53').innerHTML = 'Correct!'
      document.getElementById('sa-biofbloop-5').disabled = true;
      showExplanation5()
      localStorage.setItem('biofbloop5', 0)
    }
    if (document.getElementById('o-biofbloop-53').checked) {
      document.getElementById('b-biofbloop-53').style.border = '3px solid limegreen'
      document.getElementById('r-biofbloop-53').style.color = 'limegreen'
      document.getElementById('r-biofbloop-53').innerHTML = 'Correct!'
      document.getElementById('sa-biofbloop-5').disabled = true;
      showExplanation5()
      localStorage.setItem('biofbloop5', 1)
    }
    if (document.getElementById('o-biofbloop-54').checked) {
      document.getElementById('b-biofbloop-54').style.border = '3px solid red'
      document.getElementById('r-biofbloop-54').style.color = 'red'
      document.getElementById('r-biofbloop-54').innerHTML = 'Incorrect!'
      document.getElementById('b-biofbloop-53').style.border = '3px solid limegreen'
      document.getElementById('r-biofbloop-53').style.color = 'limegreen'
      document.getElementById('r-biofbloop-53').innerHTML = 'Correct!'
      document.getElementById('sa-biofbloop-5').disabled = true;
      showExplanation5()
      localStorage.setItem('biofbloop5', 0)
    }
  }
}
    
     
  if (document.getElementById('sa-biofbloop-6') != null) {
  biofbloop6But.onclick = function() {
    if (document.getElementById('o-biofbloop-61').checked) {
      document.getElementById('b-biofbloop-61').style.border = '3px solid red'
      document.getElementById('r-biofbloop-61').style.color = 'red'
      document.getElementById('r-biofbloop-61').innerHTML = 'Incorrect!'
      document.getElementById('b-biofbloop-64').style.border = '3px solid limegreen'
      document.getElementById('r-biofbloop-64').style.color = 'limegreen'
      document.getElementById('r-biofbloop-64').innerHTML = 'Correct!'
	    document.getElementById('sa-biofbloop-6').disabled = true;
      showExplanation6()
      localStorage.setItem('biofbloop6', 0)
    }
    if (document.getElementById('o-biofbloop-62').checked) {
      document.getElementById('b-biofbloop-62').style.border = '3px solid red'
      document.getElementById('r-biofbloop-62').style.color = 'red'
      document.getElementById('r-biofbloop-62').innerHTML = 'Incorrect!'
      document.getElementById('b-biofbloop-64').style.border = '3px solid limegreen'
      document.getElementById('r-biofbloop-64').style.color = 'limegreen'
      document.getElementById('r-biofbloop-64').innerHTML = 'Correct!'
      document.getElementById('sa-biofbloop-6').disabled = true;
      showExplanation6()
      localStorage.setItem('biofbloop6', 0)
    }
    if (document.getElementById('o-biofbloop-63').checked) {
      document.getElementById('b-biofbloop-63').style.border = '3px solid red'
      document.getElementById('r-biofbloop-63').style.color = 'red'
      document.getElementById('r-biofbloop-63').innerHTML = 'Incorrect!'
      document.getElementById('b-biofbloop-64').style.border = '3px solid limegreen'
      document.getElementById('r-biofbloop-64').style.color = 'limegreen'
      document.getElementById('r-biofbloop-64').innerHTML = 'Correct!'
      document.getElementById('sa-biofbloop-6').disabled = true;
      showExplanation6()
      localStorage.setItem('biofbloop6', 0)
    }
    if (document.getElementById('o-biofbloop-64').checked) {
      document.getElementById('b-biofbloop-64').style.border = '3px solid limegreen'
      document.getElementById('r-biofbloop-64').style.color = 'limegreen'
      document.getElementById('r-biofbloop-64').innerHTML = 'Correct!'
      document.getElementById('sa-biofbloop-6').disabled = true;
      showExplanation6()
      localStorage.setItem('biofbloop6', 1)
    }
  }
}

if (document.getElementById('sa-biofbloop-7') != null) {
  biofbloop7But.onclick = function() {
    if (document.getElementById('o-biofbloop-71').checked) {
      document.getElementById('b-biofbloop-71').style.border = '3px solid red'
      document.getElementById('r-biofbloop-71').style.color = 'red'
      document.getElementById('r-biofbloop-71').innerHTML = 'Incorrect!'
      document.getElementById('b-biofbloop-74').style.border = '3px solid limegreen'
      document.getElementById('r-biofbloop-74').style.color = 'limegreen'
      document.getElementById('r-biofbloop-74').innerHTML = 'Correct!'
	    document.getElementById('sa-biofbloop-7').disabled = true;
      showExplanation7()
      localStorage.setItem('biofbloop7', 0)
    }
    if (document.getElementById('o-biofbloop-72').checked) {
      document.getElementById('b-biofbloop-72').style.border = '3px solid red'
      document.getElementById('r-biofbloop-72').style.color = 'red'
      document.getElementById('r-biofbloop-72').innerHTML = 'Incorrect!'
      document.getElementById('b-biofbloop-74').style.border = '3px solid limegreen'
      document.getElementById('r-biofbloop-74').style.color = 'limegreen'
      document.getElementById('r-biofbloop-74').innerHTML = 'Correct!'
      document.getElementById('sa-biofbloop-7').disabled = true;
      showExplanation7()
      localStorage.setItem('biofbloop7', 0)
    }
    if (document.getElementById('o-biofbloop-73').checked) {
      document.getElementById('b-biofbloop-73').style.border = '3px solid red'
      document.getElementById('r-biofbloop-73').style.color = 'red'
      document.getElementById('r-biofbloop-73').innerHTML = 'Incorrect!'
      document.getElementById('b-biofbloop-74').style.border = '3px solid limegreen'
      document.getElementById('r-biofbloop-74').style.color = 'limegreen'
      document.getElementById('r-biofbloop-74').innerHTML = 'Correct!'
      document.getElementById('sa-biofbloop-7').disabled = true;
      showExplanation7()
      localStorage.setItem('biofbloop7', 0)
    }
    if (document.getElementById('o-biofbloop-74').checked) {
      document.getElementById('b-biofbloop-74').style.border = '3px solid limegreen'
      document.getElementById('r-biofbloop-74').style.color = 'limegreen'
      document.getElementById('r-biofbloop-74').innerHTML = 'Correct!'
      document.getElementById('sa-biofbloop-7').disabled = true;
      showExplanation7()
      localStorage.setItem('biofbloop7', 1)
    }
  }
}


if (document.getElementById('sa-biofbloop-8') != null) {
  biofbloop8But.onclick = function() {
    if (document.getElementById('o-biofbloop-81').checked) {
      document.getElementById('b-biofbloop-81').style.border = '3px solid red'
      document.getElementById('r-biofbloop-81').style.color = 'red'
      document.getElementById('r-biofbloop-81').innerHTML = 'Incorrect!'
      document.getElementById('b-biofbloop-82').style.border = '3px solid limegreen'
      document.getElementById('r-biofbloop-82').style.color = 'limegreen'
      document.getElementById('r-biofbloop-82').innerHTML = 'Correct!'
	    document.getElementById('sa-biofbloop-8').disabled = true;
      showExplanation8()
      localStorage.setItem('biofbloop8', 0)
    }
    if (document.getElementById('o-biofbloop-82').checked) {
      document.getElementById('b-biofbloop-82').style.border = '3px solid limegreen'
      document.getElementById('r-biofbloop-82').style.color = 'limegreen'
      document.getElementById('r-biofbloop-82').innerHTML = 'Correct!'
      document.getElementById('sa-biofbloop-8').disabled = true;
      showExplanation8()
      localStorage.setItem('biofbloop8', 1)
    }
    if (document.getElementById('o-biofbloop-83').checked) {
      document.getElementById('b-biofbloop-83').style.border = '3px solid red'
      document.getElementById('r-biofbloop-83').style.color = 'red'
      document.getElementById('r-biofbloop-83').innerHTML = 'Incorrect!'
      document.getElementById('b-biofbloop-82').style.border = '3px solid limegreen'
      document.getElementById('r-biofbloop-82').style.color = 'limegreen'
      document.getElementById('r-biofbloop-82').innerHTML = 'Correct!'
      document.getElementById('sa-biofbloop-8').disabled = true;
      showExplanation8()
      localStorage.setItem('biofbloop8', 0)
    }
    if (document.getElementById('o-biofbloop-84').checked) {
      document.getElementById('b-biofbloop-84').style.border = '3px solid red'
      document.getElementById('r-biofbloop-84').style.color = 'red'
      document.getElementById('r-biofbloop-84').innerHTML = 'Incorrect!'
      document.getElementById('b-biofbloop-82').style.border = '3px solid limegreen'
      document.getElementById('r-biofbloop-82').style.color = 'limegreen'
      document.getElementById('r-biofbloop-82').innerHTML = 'Correct!'
      document.getElementById('sa-biofbloop-8').disabled = true;
      showExplanation8()
      localStorage.setItem('biofbloop8', 0)
    }
  }
}


if (document.getElementById('sa-biofbloop-9') != null) {
  biofbloop9But.onclick = function() {
    if (document.getElementById('o-biofbloop-91').checked) {
      document.getElementById('b-biofbloop-91').style.border = '3px solid red'
      document.getElementById('r-biofbloop-91').style.color = 'red'
      document.getElementById('r-biofbloop-91').innerHTML = 'Incorrect!'
      document.getElementById('b-biofbloop-94').style.border = '3px solid limegreen'
      document.getElementById('r-biofbloop-94').style.color = 'limegreen'
      document.getElementById('r-biofbloop-94').innerHTML = 'Correct!'
      document.getElementById('sa-biofbloop-9').disabled = true;
      showExplanation9()
      localStorage.setItem('biofbloop9', 0)
    }
    if (document.getElementById('o-biofbloop-92').checked) {
      document.getElementById('b-biofbloop-92').style.border = '3px solid red'
      document.getElementById('r-biofbloop-92').style.color = 'red'
      document.getElementById('r-biofbloop-92').innerHTML = 'Incorrect!'
      document.getElementById('b-biofbloop-94').style.border = '3px solid limegreen'
      document.getElementById('r-biofbloop-94').style.color = 'limegreen'
      document.getElementById('r-biofbloop-94').innerHTML = 'Correct!'
      document.getElementById('sa-biofbloop-9').disabled = true;
      showExplanation9()
      localStorage.setItem('biofbloop9', 0)
    }
    if (document.getElementById('o-biofbloop-93').checked) {
      document.getElementById('b-biofbloop-93').style.border = '3px solid red'
      document.getElementById('r-biofbloop-93').style.color = 'red'
      document.getElementById('r-biofbloop-93').innerHTML = 'Incorrect!'
      document.getElementById('b-biofbloop-94').style.border = '3px solid limegreen'
      document.getElementById('r-biofbloop-94').style.color = 'limegreen'
      document.getElementById('r-biofbloop-94').innerHTML = 'Correct!'
      document.getElementById('sa-biofbloop-9').disabled = true;
      showExplanation9()
      localStorage.setItem('biofbloop9', 0)
    }
    if (document.getElementById('o-biofbloop-94').checked) {
      document.getElementById('b-biofbloop-94').style.border = '3px solid limegreen'
      document.getElementById('r-biofbloop-94').style.color = 'limegreen'
      document.getElementById('r-biofbloop-94').innerHTML = 'Correct!'
      document.getElementById('sa-biofbloop-9').disabled = true;
      showExplanation9()
      localStorage.setItem('biofbloop9', 1)
    }
  }
}

if (document.getElementById('sa-biofbloop-10') != null) {
  biofbloop10But.onclick = function() {
    if (document.getElementById('o-biofbloop-101').checked) {
      document.getElementById('b-biofbloop-101').style.border = '3px solid red'
      document.getElementById('r-biofbloop-101').style.color = 'red'
      document.getElementById('r-biofbloop-101').innerHTML = 'Incorrect!'
      document.getElementById('b-biofbloop-102').style.border = '3px solid limegreen'
      document.getElementById('r-biofbloop-102').style.color = 'limegreen'
      document.getElementById('r-biofbloop-102').innerHTML = 'Correct!'
      document.getElementById('sa-biofbloop-10').disabled = true;
      showExplanation10()
      localStorage.setItem('biofbloop10', 0)
    }
    if (document.getElementById('o-biofbloop-102').checked) {
      document.getElementById('b-biofbloop-102').style.border = '3px solid limegreen'
      document.getElementById('r-biofbloop-102').style.color = 'limegreen'
      document.getElementById('r-biofbloop-102').innerHTML = 'Correct!'
      document.getElementById('sa-biofbloop-10').disabled = true;
      showExplanation10()
      localStorage.setItem('biofbloop10', 1)
    }
    if (document.getElementById('o-biofbloop-103').checked) {
      document.getElementById('b-biofbloop-103').style.border = '3px solid red'
      document.getElementById('r-biofbloop-103').style.color = 'red'
      document.getElementById('r-biofbloop-103').innerHTML = 'Incorrect!'
      document.getElementById('b-biofbloop-102').style.border = '3px solid limegreen'
      document.getElementById('r-biofbloop-102').style.color = 'limegreen'
      document.getElementById('r-biofbloop-102').innerHTML = 'Correct!'
      document.getElementById('sa-biofbloop-10').disabled = true;
      showExplanation10()
      localStorage.setItem('biofbloop10', 0)
    }
    if (document.getElementById('o-biofbloop-104').checked) {
      document.getElementById('b-biofbloop-104').style.border = '3px solid red'
      document.getElementById('r-biofbloop-104').style.color = 'red'
      document.getElementById('r-biofbloop-104').innerHTML = 'Incorrect!'
      document.getElementById('b-biofbloop-102').style.border = '3px solid limegreen'
      document.getElementById('r-biofbloop-102').style.color = 'limegreen'
      document.getElementById('r-biofbloop-102').innerHTML = 'Correct!'
      document.getElementById('sa-biofbloop-10').disabled = true;
      showExplanation10()
      localStorage.setItem('biofbloop10', 0)
    }
  }
}

