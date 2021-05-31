
  let biopropwater1But = document.getElementById('sa-biopropwater-1');
  let biopropwater2But = document.getElementById('sa-biopropwater-2');
  let biopropwater3But = document.getElementById('sa-biopropwater-3');
  let biopropwater4But = document.getElementById('sa-biopropwater-4');
  let biopropwater5But = document.getElementById('sa-biopropwater-5');
  let biopropwater6But = document.getElementById('sa-biopropwater-6');
  let biopropwater7But = document.getElementById('sa-biopropwater-7');
  let biopropwater8But = document.getElementById('sa-biopropwater-8');
  let biopropwater9But = document.getElementById('sa-biopropwater-9');
  let biopropwater10But = document.getElementById('sa-biopropwater-10');


  showExplanation1 = function() {
    document.getElementById('e-biopropwater-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-biopropwater-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-biopropwater-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-biopropwater-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-biopropwater-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-biopropwater-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-biopropwater-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-biopropwater-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-biopropwater-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-biopropwater-10').style.display = 'block';
     } 




if (document.getElementById('sa-biopropwater-1') != null) {
 biopropwater1But.onclick = function() {
    if (document.getElementById('o-biopropwater-11').checked) {
      document.getElementById('b-biopropwater-11').style.border = '3px solid red'
      document.getElementById('r-biopropwater-11').style.color = 'red'
      document.getElementById('r-biopropwater-11').innerHTML = 'Incorrect!'
      document.getElementById('b-biopropwater-13').style.border = '3px solid limegreen'
      document.getElementById('r-biopropwater-13').style.color = 'limegreen'
      document.getElementById('r-biopropwater-13').innerHTML = 'Correct!'
	    document.getElementById('sa-biopropwater-1').disabled = true;
      showExplanation1()
      localStorage.setItem('biopropwater1', 0)
    }
    if (document.getElementById('o-biopropwater-12').checked) {
      document.getElementById('b-biopropwater-12').style.border = '3px solid red'
      document.getElementById('r-biopropwater-12').style.color = 'red'
      document.getElementById('r-biopropwater-12').innerHTML = 'Incorrect!'
      document.getElementById('b-biopropwater-13').style.border = '3px solid limegreen'
      document.getElementById('r-biopropwater-13').style.color = 'limegreen'
      document.getElementById('r-biopropwater-13').innerHTML = 'Correct!'
      document.getElementById('sa-biopropwater-1').disabled = true;
      showExplanation1()
      localStorage.setItem('biopropwater1', 0)
    }
    if (document.getElementById('o-biopropwater-13').checked) {
      document.getElementById('b-biopropwater-13').style.border = '3px solid limegreen'
      document.getElementById('r-biopropwater-13').style.color = 'limegreen'
      document.getElementById('r-biopropwater-13').innerHTML = 'Correct!'
      document.getElementById('sa-biopropwater-1').disabled = true;
      showExplanation1()
      localStorage.setItem('biopropwater1', 1)
    }
    if (document.getElementById('o-biopropwater-14').checked) {
      document.getElementById('b-biopropwater-14').style.border = '3px solid red'
      document.getElementById('r-biopropwater-14').style.color = 'red'
      document.getElementById('r-biopropwater-14').innerHTML = 'Incorrect!'
      document.getElementById('b-biopropwater-13').style.border = '3px solid limegreen'
      document.getElementById('r-biopropwater-13').style.color = 'limegreen'
      document.getElementById('r-biopropwater-13').innerHTML = 'Correct!'
      document.getElementById('sa-biopropwater-1').disabled = true;
      showExplanation1()
      localStorage.setItem('biopropwater1', 0)
    }
    
  }
}




if (document.getElementById('sa-biopropwater-2') != null) {
  biopropwater2But.onclick = function() {
    if (document.getElementById('o-biopropwater-21').checked) {
      document.getElementById('b-biopropwater-21').style.border = '3px solid red'
      document.getElementById('r-biopropwater-21').style.color = 'red'
      document.getElementById('r-biopropwater-21').innerHTML = 'Incorrect!'
      document.getElementById('b-biopropwater-22').style.border = '3px solid limegreen'
      document.getElementById('r-biopropwater-22').style.color = 'limegreen'
      document.getElementById('r-biopropwater-22').innerHTML = 'Correct!'
	    document.getElementById('sa-biopropwater-2').disabled = true;
      showExplanation2()
      localStorage.setItem('biopropwater2', 0)
    }
    if (document.getElementById('o-biopropwater-22').checked) {
      document.getElementById('b-biopropwater-22').style.border = '3px solid limegreen'
      document.getElementById('r-biopropwater-22').style.color = 'limegreen'
      document.getElementById('r-biopropwater-22').innerHTML = 'Correct!'
      document.getElementById('sa-biopropwater-2').disabled = true;
      showExplanation2()
      localStorage.setItem('biopropwater2', 1)
    }
    if (document.getElementById('o-biopropwater-23').checked) {
      document.getElementById('b-biopropwater-23').style.border = '3px solid red'
      document.getElementById('r-biopropwater-23').style.color = 'red'
      document.getElementById('r-biopropwater-23').innerHTML = 'Incorrect!'
      document.getElementById('b-biopropwater-22').style.border = '3px solid limegreen'
      document.getElementById('r-biopropwater-22').style.color = 'limegreen'
      document.getElementById('r-biopropwater-22').innerHTML = 'Correct!'
      document.getElementById('sa-biopropwater-2').disabled = true;
      showExplanation2()
      localStorage.setItem('biopropwater2', 0)
    }
    if (document.getElementById('o-biopropwater-24').checked) {
      document.getElementById('b-biopropwater-24').style.border = '3px solid red'
      document.getElementById('r-biopropwater-24').style.color = 'red'
      document.getElementById('r-biopropwater-24').innerHTML = 'Incorrect!'
      document.getElementById('b-biopropwater-22').style.border = '3px solid limegreen'
      document.getElementById('r-biopropwater-22').style.color = 'limegreen'
      document.getElementById('r-biopropwater-22').innerHTML = 'Correct!'
      document.getElementById('sa-biopropwater-2').disabled = true;
      showExplanation2()
      localStorage.setItem('biopropwater2', 0)
    }
  }
}

if (document.getElementById('sa-biopropwater-3') != null) {
  biopropwater3But.onclick = function() {
    if (document.getElementById('o-biopropwater-31').checked) {
      document.getElementById('b-biopropwater-31').style.border = '3px solid red'
      document.getElementById('r-biopropwater-31').style.color = 'red'
      document.getElementById('r-biopropwater-31').innerHTML = 'Incorrect!'
      document.getElementById('b-biopropwater-33').style.border = '3px solid limegreen'
      document.getElementById('r-biopropwater-33').style.color = 'limegreen'
      document.getElementById('r-biopropwater-33').innerHTML = 'Correct!'
	    document.getElementById('sa-biopropwater-3').disabled = true;
      showExplanation3()
      localStorage.setItem('biopropwater3', 0)
    }
    if (document.getElementById('o-biopropwater-32').checked) {
      document.getElementById('b-biopropwater-32').style.border = '3px solid red'
      document.getElementById('r-biopropwater-32').style.color = 'red'
      document.getElementById('r-biopropwater-32').innerHTML = 'Incorrect!'
      document.getElementById('b-biopropwater-33').style.border = '3px solid limegreen'
      document.getElementById('r-biopropwater-33').style.color = 'limegreen'
      document.getElementById('r-biopropwater-33').innerHTML = 'Correct!'
      document.getElementById('sa-biopropwater-3').disabled = true;
      showExplanation3()
      localStorage.setItem('biopropwater3', 0)
    }
    if (document.getElementById('o-biopropwater-33').checked) {
      document.getElementById('b-biopropwater-33').style.border = '3px solid limegreen'
      document.getElementById('r-biopropwater-33').style.color = 'limegreen'
      document.getElementById('r-biopropwater-33').innerHTML = 'Correct!'
      document.getElementById('sa-biopropwater-3').disabled = true;
      showExplanation3()
      localStorage.setItem('biopropwater3', 1)
    }
    if (document.getElementById('o-biopropwater-34').checked) {
      document.getElementById('b-biopropwater-34').style.border = '3px solid red'
      document.getElementById('r-biopropwater-34').style.color = 'red'
      document.getElementById('r-biopropwater-34').innerHTML = 'Incorrect!'
      document.getElementById('b-biopropwater-33').style.border = '3px solid limegreen'
      document.getElementById('r-biopropwater-33').style.color = 'limegreen'
      document.getElementById('r-biopropwater-33').innerHTML = 'Correct!'
      document.getElementById('sa-biopropwater-3').disabled = true;
      showExplanation3()
      localStorage.setItem('biopropwater3', 0)
    }
  }
}

if (document.getElementById('sa-biopropwater-4') != null) {
  biopropwater4But.onclick = function() {
    if (document.getElementById('o-biopropwater-41').checked) {
      document.getElementById('b-biopropwater-41').style.border = '3px solid red'
      document.getElementById('r-biopropwater-41').style.color = 'red'
      document.getElementById('r-biopropwater-41').innerHTML = 'Incorrect!'
      document.getElementById('b-biopropwater-44').style.border = '3px solid limegreen'
      document.getElementById('r-biopropwater-44').style.color = 'limegreen'
      document.getElementById('r-biopropwater-44').innerHTML = 'Correct!'
	    document.getElementById('sa-biopropwater-4').disabled = true;
      showExplanation4()
      localStorage.setItem('biopropwater4', 0)
    }
    if (document.getElementById('o-biopropwater-42').checked) {
      document.getElementById('b-biopropwater-42').style.border = '3px solid red'
      document.getElementById('r-biopropwater-42').style.color = 'red'
      document.getElementById('r-biopropwater-42').innerHTML = 'Incorrect!'
      document.getElementById('b-biopropwater-44').style.border = '3px solid limegreen'
      document.getElementById('r-biopropwater-44').style.color = 'limegreen'
      document.getElementById('r-biopropwater-44').innerHTML = 'Correct!'
      document.getElementById('sa-biopropwater-4').disabled = true;
      showExplanation4()
      localStorage.setItem('biopropwater4', 0)
    }
    if (document.getElementById('o-biopropwater-43').checked) {
      document.getElementById('b-biopropwater-43').style.border = '3px solid red'
      document.getElementById('r-biopropwater-43').style.color = 'red'
      document.getElementById('r-biopropwater-43').innerHTML = 'Incorrect!'
      document.getElementById('b-biopropwater-44').style.border = '3px solid limegreen'
      document.getElementById('r-biopropwater-44').style.color = 'limegreen'
      document.getElementById('r-biopropwater-44').innerHTML = 'Correct!'
      document.getElementById('sa-biopropwater-4').disabled = true;
      showExplanation4()
      localStorage.setItem('biopropwater4', 0)
    }
    if (document.getElementById('o-biopropwater-44').checked) {
      document.getElementById('b-biopropwater-44').style.border = '3px solid limegreen'
      document.getElementById('r-biopropwater-44').style.color = 'limegreen'
      document.getElementById('r-biopropwater-44').innerHTML = 'Correct!'
      document.getElementById('sa-biopropwater-4').disabled = true;
      showExplanation4()
      localStorage.setItem('biopropwater4', 1)
    }
  }
}

if (document.getElementById('sa-biopropwater-5') != null) {
  biopropwater5But.onclick = function() {
    if (document.getElementById('o-biopropwater-51').checked) {
      document.getElementById('b-biopropwater-51').style.border = '3px solid red'
      document.getElementById('r-biopropwater-51').style.color = 'red'
      document.getElementById('r-biopropwater-51').innerHTML = 'Incorrect!'
      document.getElementById('b-biopropwater-54').style.border = '3px solid limegreen'
      document.getElementById('r-biopropwater-54').style.color = 'limegreen'
      document.getElementById('r-biopropwater-54').innerHTML = 'Correct!'
	    document.getElementById('sa-biopropwater-5').disabled = true;
      showExplanation5()
      localStorage.setItem('biopropwater5', 0)
    }
    if (document.getElementById('o-biopropwater-52').checked) {
      document.getElementById('b-biopropwater-52').style.border = '3px solid red'
      document.getElementById('r-biopropwater-52').style.color = 'red'
      document.getElementById('r-biopropwater-52').innerHTML = 'Incorrect!'
      document.getElementById('b-biopropwater-54').style.border = '3px solid limegreen'
      document.getElementById('r-biopropwater-54').style.color = 'limegreen'
      document.getElementById('r-biopropwater-54').innerHTML = 'Correct!'
      document.getElementById('sa-biopropwater-5').disabled = true;
      showExplanation5()
      localStorage.setItem('biopropwater5', 0)
    }
    if (document.getElementById('o-biopropwater-53').checked) {
      document.getElementById('b-biopropwater-53').style.border = '3px solid red'
      document.getElementById('r-biopropwater-53').style.color = 'red'
      document.getElementById('r-biopropwater-53').innerHTML = 'Incorrect!'
      document.getElementById('b-biopropwater-54').style.border = '3px solid limegreen'
      document.getElementById('r-biopropwater-54').style.color = 'limegreen'
      document.getElementById('r-biopropwater-54').innerHTML = 'Correct!'
      document.getElementById('sa-biopropwater-5').disabled = true;
      showExplanation5()
      localStorage.setItem('biopropwater5', 0)
    }
    if (document.getElementById('o-biopropwater-54').checked) {
      document.getElementById('b-biopropwater-54').style.border = '3px solid limegreen'
      document.getElementById('r-biopropwater-54').style.color = 'limegreen'
      document.getElementById('r-biopropwater-54').innerHTML = 'Correct!'
      document.getElementById('sa-biopropwater-5').disabled = true;
      showExplanation5()
      localStorage.setItem('biopropwater5', 1)
    }
  }
}
    
     
  if (document.getElementById('sa-biopropwater-6') != null) {
  biopropwater6But.onclick = function() {
    if (document.getElementById('o-biopropwater-61').checked) {
      document.getElementById('b-biopropwater-61').style.border = '3px solid red'
      document.getElementById('r-biopropwater-61').style.color = 'red'
      document.getElementById('r-biopropwater-61').innerHTML = 'Incorrect!'
      document.getElementById('b-biopropwater-62').style.border = '3px solid limegreen'
      document.getElementById('r-biopropwater-62').style.color = 'limegreen'
      document.getElementById('r-biopropwater-62').innerHTML = 'Correct!'
	    document.getElementById('sa-biopropwater-6').disabled = true;
      showExplanation6()
      localStorage.setItem('biopropwater6', 0)
    }
    if (document.getElementById('o-biopropwater-62').checked) {
      document.getElementById('b-biopropwater-62').style.border = '3px solid limegreen'
      document.getElementById('r-biopropwater-62').style.color = 'limegreen'
      document.getElementById('r-biopropwater-62').innerHTML = 'Correct!'
      document.getElementById('sa-biopropwater-6').disabled = true;
      showExplanation6()
      localStorage.setItem('biopropwater6', 1)
    }
    if (document.getElementById('o-biopropwater-63').checked) {
      document.getElementById('b-biopropwater-63').style.border = '3px solid red'
      document.getElementById('r-biopropwater-63').style.color = 'red'
      document.getElementById('r-biopropwater-63').innerHTML = 'Incorrect!'
      document.getElementById('b-biopropwater-62').style.border = '3px solid limegreen'
      document.getElementById('r-biopropwater-62').style.color = 'limegreen'
      document.getElementById('r-biopropwater-62').innerHTML = 'Correct!'
      document.getElementById('sa-biopropwater-6').disabled = true;
      showExplanation6()
      localStorage.setItem('biopropwater6', 0)
    }
    if (document.getElementById('o-biopropwater-64').checked) {
      document.getElementById('b-biopropwater-64').style.border = '3px solid red'
      document.getElementById('r-biopropwater-64').style.color = 'red'
      document.getElementById('r-biopropwater-64').innerHTML = 'Incorrect!'
      document.getElementById('b-biopropwater-62').style.border = '3px solid limegreen'
      document.getElementById('r-biopropwater-62').style.color = 'limegreen'
      document.getElementById('r-biopropwater-62').innerHTML = 'Correct!'
      document.getElementById('sa-biopropwater-6').disabled = true;
      showExplanation6()
      localStorage.setItem('biopropwater6', 0)
    }
  }
}

if (document.getElementById('sa-biopropwater-7') != null) {
  biopropwater7But.onclick = function() {
    if (document.getElementById('o-biopropwater-71').checked) {
      document.getElementById('b-biopropwater-71').style.border = '3px solid red'
      document.getElementById('r-biopropwater-71').style.color = 'red'
      document.getElementById('r-biopropwater-71').innerHTML = 'Incorrect!'
      document.getElementById('b-biopropwater-74').style.border = '3px solid limegreen'
      document.getElementById('r-biopropwater-74').style.color = 'limegreen'
      document.getElementById('r-biopropwater-74').innerHTML = 'Correct!'
	    document.getElementById('sa-biopropwater-7').disabled = true;
      showExplanation7()
      localStorage.setItem('biopropwater7', 0)
    }
    if (document.getElementById('o-biopropwater-72').checked) {
      document.getElementById('b-biopropwater-72').style.border = '3px solid red'
      document.getElementById('r-biopropwater-72').style.color = 'red'
      document.getElementById('r-biopropwater-72').innerHTML = 'Incorrect!'
      document.getElementById('b-biopropwater-74').style.border = '3px solid limegreen'
      document.getElementById('r-biopropwater-74').style.color = 'limegreen'
      document.getElementById('r-biopropwater-74').innerHTML = 'Correct!'
      document.getElementById('sa-biopropwater-7').disabled = true;
      showExplanation7()
      localStorage.setItem('biopropwater7', 0)
    }
    if (document.getElementById('o-biopropwater-73').checked) {
      document.getElementById('b-biopropwater-73').style.border = '3px solid red'
      document.getElementById('r-biopropwater-73').style.color = 'red'
      document.getElementById('r-biopropwater-73').innerHTML = 'Incorrect!'
      document.getElementById('b-biopropwater-74').style.border = '3px solid limegreen'
      document.getElementById('r-biopropwater-74').style.color = 'limegreen'
      document.getElementById('r-biopropwater-74').innerHTML = 'Correct!'
      document.getElementById('sa-biopropwater-7').disabled = true;
      showExplanation7()
      localStorage.setItem('biopropwater7', 0)
    }
    if (document.getElementById('o-biopropwater-74').checked) {
      document.getElementById('b-biopropwater-74').style.border = '3px solid limegreen'
      document.getElementById('r-biopropwater-74').style.color = 'limegreen'
      document.getElementById('r-biopropwater-74').innerHTML = 'Correct!'
      document.getElementById('sa-biopropwater-7').disabled = true;
      showExplanation7()
      localStorage.setItem('biopropwater7', 1)
    }
  }
}


if (document.getElementById('sa-biopropwater-8') != null) {
  biopropwater8But.onclick = function() {
    if (document.getElementById('o-biopropwater-81').checked) {
      document.getElementById('b-biopropwater-81').style.border = '3px solid red'
      document.getElementById('r-biopropwater-81').style.color = 'red'
      document.getElementById('r-biopropwater-81').innerHTML = 'Incorrect!'
      document.getElementById('b-biopropwater-82').style.border = '3px solid limegreen'
      document.getElementById('r-biopropwater-82').style.color = 'limegreen'
      document.getElementById('r-biopropwater-82').innerHTML = 'Correct!'
	    document.getElementById('sa-biopropwater-8').disabled = true;
      showExplanation8()
      localStorage.setItem('biopropwater8', 0)
    }
    if (document.getElementById('o-biopropwater-82').checked) {
      document.getElementById('b-biopropwater-82').style.border = '3px solid limegreen'
      document.getElementById('r-biopropwater-82').style.color = 'limegreen'
      document.getElementById('r-biopropwater-82').innerHTML = 'Correct!'
      document.getElementById('sa-biopropwater-8').disabled = true;
      showExplanation8()
      localStorage.setItem('biopropwater8', 0)
    }
    if (document.getElementById('o-biopropwater-83').checked) {
      document.getElementById('b-biopropwater-83').style.border = '3px solid red'
      document.getElementById('r-biopropwater-83').style.color = 'red'
      document.getElementById('r-biopropwater-83').innerHTML = 'Incorrect!'
      document.getElementById('b-biopropwater-82').style.border = '3px solid limegreen'
      document.getElementById('r-biopropwater-82').style.color = 'limegreen'
      document.getElementById('r-biopropwater-82').innerHTML = 'Correct!'
      document.getElementById('sa-biopropwater-8').disabled = true;
      showExplanation8()
      localStorage.setItem('biopropwater8', 0)
    }
    if (document.getElementById('o-biopropwater-84').checked) {
      document.getElementById('b-biopropwater-84').style.border = '3px solid red'
      document.getElementById('r-biopropwater-84').style.color = 'red'
      document.getElementById('r-biopropwater-84').innerHTML = 'Incorrect!'
      document.getElementById('b-biopropwater-82').style.border = '3px solid limegreen'
      document.getElementById('r-biopropwater-82').style.color = 'limegreen'
      document.getElementById('r-biopropwater-82').innerHTML = 'Correct!'
      document.getElementById('sa-biopropwater-8').disabled = true;
      showExplanation8()
      localStorage.setItem('biopropwater8', 1)
    }
  }
}


if (document.getElementById('sa-biopropwater-9') != null) {
  biopropwater9But.onclick = function() {
    if (document.getElementById('o-biopropwater-91').checked) {
      document.getElementById('b-biopropwater-91').style.border = '3px solid red'
      document.getElementById('r-biopropwater-91').style.color = 'red'
      document.getElementById('r-biopropwater-91').innerHTML = 'Incorrect!'
      document.getElementById('b-biopropwater-94').style.border = '3px solid limegreen'
      document.getElementById('r-biopropwater-94').style.color = 'limegreen'
      document.getElementById('r-biopropwater-94').innerHTML = 'Correct!'
      document.getElementById('sa-biopropwater-9').disabled = true;
      showExplanation9()
      localStorage.setItem('biopropwater9', 0)
    }
    if (document.getElementById('o-biopropwater-92').checked) {
      document.getElementById('b-biopropwater-92').style.border = '3px solid red'
      document.getElementById('r-biopropwater-92').style.color = 'red'
      document.getElementById('r-biopropwater-92').innerHTML = 'Incorrect!'
      document.getElementById('b-biopropwater-94').style.border = '3px solid limegreen'
      document.getElementById('r-biopropwater-94').style.color = 'limegreen'
      document.getElementById('r-biopropwater-94').innerHTML = 'Correct!'
      document.getElementById('sa-biopropwater-9').disabled = true;
      showExplanation9()
      localStorage.setItem('biopropwater9', 0)
    }
    if (document.getElementById('o-biopropwater-93').checked) {
      document.getElementById('b-biopropwater-93').style.border = '3px solid red'
      document.getElementById('r-biopropwater-93').style.color = 'red'
      document.getElementById('r-biopropwater-93').innerHTML = 'Incorrect!'
      document.getElementById('b-biopropwater-94').style.border = '3px solid limegreen'
      document.getElementById('r-biopropwater-94').style.color = 'limegreen'
      document.getElementById('r-biopropwater-94').innerHTML = 'Correct!'
      document.getElementById('sa-biopropwater-9').disabled = true;
      showExplanation9()
      localStorage.setItem('biopropwater9', 0)
    }
    if (document.getElementById('o-biopropwater-94').checked) {
      document.getElementById('b-biopropwater-94').style.border = '3px solid limegreen'
      document.getElementById('r-biopropwater-94').style.color = 'limegreen'
      document.getElementById('r-biopropwater-94').innerHTML = 'Correct!'
      document.getElementById('sa-biopropwater-9').disabled = true;
      showExplanation9()
      localStorage.setItem('biopropwater9', 1)
    }
  }
}

if (document.getElementById('sa-biopropwater-10') != null) {
  biopropwater10But.onclick = function() {
    if (document.getElementById('o-biopropwater-101').checked) {
      document.getElementById('b-biopropwater-101').style.border = '3px solid red'
      document.getElementById('r-biopropwater-101').style.color = 'red'
      document.getElementById('r-biopropwater-101').innerHTML = 'Incorrect!'
      document.getElementById('b-biopropwater-102').style.border = '3px solid limegreen'
      document.getElementById('r-biopropwater-102').style.color = 'limegreen'
      document.getElementById('r-biopropwater-102').innerHTML = 'Correct!'
      document.getElementById('sa-biopropwater-10').disabled = true;
      showExplanation10()
      localStorage.setItem('biopropwater10', 0)
    }
    if (document.getElementById('o-biopropwater-102').checked) {
      document.getElementById('b-biopropwater-102').style.border = '3px solid limegreen'
      document.getElementById('r-biopropwater-102').style.color = 'limegreen'
      document.getElementById('r-biopropwater-102').innerHTML = 'Correct!'
      document.getElementById('sa-biopropwater-10').disabled = true;
      showExplanation10()
      localStorage.setItem('biopropwater10', 1)
    }
    if (document.getElementById('o-biopropwater-103').checked) {
      document.getElementById('b-biopropwater-103').style.border = '3px solid red'
      document.getElementById('r-biopropwater-103').style.color = 'red'
      document.getElementById('r-biopropwater-103').innerHTML = 'Incorrect!'
      document.getElementById('b-biopropwater-102').style.border = '3px solid limegreen'
      document.getElementById('r-biopropwater-102').style.color = 'limegreen'
      document.getElementById('r-biopropwater-102').innerHTML = 'Correct!'
      document.getElementById('sa-biopropwater-10').disabled = true;
      showExplanation10()
      localStorage.setItem('biopropwater10', 0)
    }
    if (document.getElementById('o-biopropwater-104').checked) {
      document.getElementById('b-biopropwater-104').style.border = '3px solid red'
      document.getElementById('r-biopropwater-104').style.color = 'red'
      document.getElementById('r-biopropwater-104').innerHTML = 'Incorrect!'
      document.getElementById('b-biopropwater-102').style.border = '3px solid limegreen'
      document.getElementById('r-biopropwater-102').style.color = 'limegreen'
      document.getElementById('r-biopropwater-102').innerHTML = 'Correct!'
      document.getElementById('sa-biopropwater-10').disabled = true;
      showExplanation10()
      localStorage.setItem('biopropwater10', 0)
    }
  }
}




