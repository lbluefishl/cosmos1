
  let algsimeq1But = document.getElementById('sa-algsimeq-1');
  let algsimeq2But = document.getElementById('sa-algsimeq-2');
  let algsimeq3But = document.getElementById('sa-algsimeq-3');
  let algsimeq4But = document.getElementById('sa-algsimeq-4');
  let algsimeq5But = document.getElementById('sa-algsimeq-5');
  let algsimeq6But = document.getElementById('sa-algsimeq-6');
  let algsimeq7But = document.getElementById('sa-algsimeq-7');
  let algsimeq8But = document.getElementById('sa-algsimeq-8');
  let algsimeq9But = document.getElementById('sa-algsimeq-9');
  let algsimeq10But = document.getElementById('sa-algsimeq-10');


  showExplanation1 = function() {
    document.getElementById('e-algsimeq-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-algsimeq-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-algsimeq-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-algsimeq-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-algsimeq-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-algsimeq-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-algsimeq-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-algsimeq-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-algsimeq-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-algsimeq-10').style.display = 'block';
     } 




if (document.getElementById('sa-algsimeq-1') != null) {
 algsimeq1But.onclick = function() {
    if (document.getElementById('o-algsimeq-11').checked) {
      document.getElementById('b-algsimeq-11').style.border = '3px solid red'
      document.getElementById('r-algsimeq-11').style.color = 'red'
      document.getElementById('r-algsimeq-11').innerHTML = 'Incorrect!'
      document.getElementById('b-algsimeq-14').style.border = '3px solid limegreen'
      document.getElementById('r-algsimeq-14').style.color = 'limegreen'
      document.getElementById('r-algsimeq-14').innerHTML = 'Correct!'
	    document.getElementById('sa-algsimeq-1').disabled = true;
      showExplanation1()
      localStorage.setItem('algsimeq1', 0)
    }
    if (document.getElementById('o-algsimeq-12').checked) {
      document.getElementById('b-algsimeq-12').style.border = '3px solid red'
      document.getElementById('r-algsimeq-12').style.color = 'red'
      document.getElementById('r-algsimeq-12').innerHTML = 'Incorrect!'
      document.getElementById('b-algsimeq-14').style.border = '3px solid limegreen'
      document.getElementById('r-algsimeq-14').style.color = 'limegreen'
      document.getElementById('r-algsimeq-14').innerHTML = 'Correct!'
      document.getElementById('sa-algsimeq-1').disabled = true;
      showExplanation1()
      localStorage.setItem('algsimeq1', 0)
    }
    if (document.getElementById('o-algsimeq-13').checked) {
      document.getElementById('b-algsimeq-13').style.border = '3px solid red'
      document.getElementById('r-algsimeq-13').style.color = 'red'
      document.getElementById('r-algsimeq-13').innerHTML = 'Incorrect!'
      document.getElementById('b-algsimeq-14').style.border = '3px solid limegreen'
      document.getElementById('r-algsimeq-14').style.color = 'limegreen'
      document.getElementById('r-algsimeq-14').innerHTML = 'Correct!'
      document.getElementById('sa-algsimeq-1').disabled = true;
      showExplanation1()
      localStorage.setItem('algsimeq1', 0)
    }
    if (document.getElementById('o-algsimeq-14').checked) {
      document.getElementById('b-algsimeq-14').style.border = '3px solid limegreen'
      document.getElementById('r-algsimeq-14').style.color = 'limegreen'
      document.getElementById('r-algsimeq-14').innerHTML = 'Correct!'
      document.getElementById('sa-algsimeq-1').disabled = true;
      showExplanation1()
      localStorage.setItem('algsimeq1', 1)
    }
    
  }
}




if (document.getElementById('sa-algsimeq-2') != null) {
  algsimeq2But.onclick = function() {
    if (document.getElementById('o-algsimeq-21').checked) {
      document.getElementById('b-algsimeq-21').style.border = '3px solid red'
      document.getElementById('r-algsimeq-21').style.color = 'red'
      document.getElementById('r-algsimeq-21').innerHTML = 'Incorrect!'
      document.getElementById('b-algsimeq-23').style.border = '3px solid limegreen'
      document.getElementById('r-algsimeq-23').style.color = 'limegreen'
      document.getElementById('r-algsimeq-23').innerHTML = 'Correct!'
	    document.getElementById('sa-algsimeq-2').disabled = true;
      showExplanation2()
      localStorage.setItem('algsimeq2', 0)
    }
    if (document.getElementById('o-algsimeq-22').checked) {
      document.getElementById('b-algsimeq-22').style.border = '3px solid red'
      document.getElementById('r-algsimeq-22').style.color = 'red'
      document.getElementById('r-algsimeq-22').innerHTML = 'Incorrect!'
      document.getElementById('b-algsimeq-23').style.border = '3px solid limegreen'
      document.getElementById('r-algsimeq-23').style.color = 'limegreen'
      document.getElementById('r-algsimeq-23').innerHTML = 'Correct!'
      document.getElementById('sa-algsimeq-2').disabled = true;
      showExplanation2()
      localStorage.setItem('algsimeq2', 0)
    }
    if (document.getElementById('o-algsimeq-23').checked) {
      document.getElementById('b-algsimeq-23').style.border = '3px solid limegreen'
      document.getElementById('r-algsimeq-23').style.color = 'limegreen'
      document.getElementById('r-algsimeq-23').innerHTML = 'Correct!'
      document.getElementById('sa-algsimeq-2').disabled = true;
      showExplanation2()
      localStorage.setItem('algsimeq2', 1)
    }
    if (document.getElementById('o-algsimeq-24').checked) {
      document.getElementById('b-algsimeq-24').style.border = '3px solid red'
      document.getElementById('r-algsimeq-24').style.color = 'red'
      document.getElementById('r-algsimeq-24').innerHTML = 'Incorrect!'
      document.getElementById('b-algsimeq-23').style.border = '3px solid limegreen'
      document.getElementById('r-algsimeq-23').style.color = 'limegreen'
      document.getElementById('r-algsimeq-23').innerHTML = 'Correct!'
      document.getElementById('sa-algsimeq-2').disabled = true;
      showExplanation2()
      localStorage.setItem('algsimeq2', 0)
    }
  }
}

if (document.getElementById('sa-algsimeq-3') != null) {
  algsimeq3But.onclick = function() {
    if (document.getElementById('o-algsimeq-31').checked) {
      document.getElementById('b-algsimeq-31').style.border = '3px solid red'
      document.getElementById('r-algsimeq-31').style.color = 'red'
      document.getElementById('r-algsimeq-31').innerHTML = 'Incorrect!'
      document.getElementById('b-algsimeq-33').style.border = '3px solid limegreen'
      document.getElementById('r-algsimeq-33').style.color = 'limegreen'
      document.getElementById('r-algsimeq-33').innerHTML = 'Correct!'
	    document.getElementById('sa-algsimeq-3').disabled = true;
      showExplanation3()
      localStorage.setItem('algsimeq3', 0)
    }
    if (document.getElementById('o-algsimeq-32').checked) {
      document.getElementById('b-algsimeq-32').style.border = '3px solid red'
      document.getElementById('r-algsimeq-32').style.color = 'red'
      document.getElementById('r-algsimeq-32').innerHTML = 'Incorrect!'
      document.getElementById('b-algsimeq-33').style.border = '3px solid limegreen'
      document.getElementById('r-algsimeq-33').style.color = 'limegreen'
      document.getElementById('r-algsimeq-33').innerHTML = 'Correct!'
      document.getElementById('sa-algsimeq-3').disabled = true;
      showExplanation3()
      localStorage.setItem('algsimeq3', 0)
    }
    if (document.getElementById('o-algsimeq-33').checked) {
      document.getElementById('b-algsimeq-33').style.border = '3px solid limegreen'
      document.getElementById('r-algsimeq-33').style.color = 'limegreen'
      document.getElementById('r-algsimeq-33').innerHTML = 'Correct!'
      document.getElementById('sa-algsimeq-3').disabled = true;
      showExplanation3()
      localStorage.setItem('algsimeq3', 1)
    }
    if (document.getElementById('o-algsimeq-34').checked) {
      document.getElementById('b-algsimeq-34').style.border = '3px solid red'
      document.getElementById('r-algsimeq-34').style.color = 'red'
      document.getElementById('r-algsimeq-34').innerHTML = 'Incorrect!'
      document.getElementById('b-algsimeq-33').style.border = '3px solid limegreen'
      document.getElementById('r-algsimeq-33').style.color = 'limegreen'
      document.getElementById('r-algsimeq-33').innerHTML = 'Correct!'
      document.getElementById('sa-algsimeq-3').disabled = true;
      showExplanation3()
      localStorage.setItem('algsimeq3', 0)
    }
  }
}

if (document.getElementById('sa-algsimeq-4') != null) {
  algsimeq4But.onclick = function() {
    if (document.getElementById('o-algsimeq-41').checked) {
      document.getElementById('b-algsimeq-41').style.border = '3px solid red'
      document.getElementById('r-algsimeq-41').style.color = 'red'
      document.getElementById('r-algsimeq-41').innerHTML = 'Incorrect!'
      document.getElementById('b-algsimeq-42').style.border = '3px solid limegreen'
      document.getElementById('r-algsimeq-42').style.color = 'limegreen'
      document.getElementById('r-algsimeq-42').innerHTML = 'Correct!'
	    document.getElementById('sa-algsimeq-4').disabled = true;
      showExplanation4()
      localStorage.setItem('algsimeq4', 0)
    }
    if (document.getElementById('o-algsimeq-42').checked) {
      document.getElementById('b-algsimeq-42').style.border = '3px solid limegreen'
      document.getElementById('r-algsimeq-42').style.color = 'limegreen'
      document.getElementById('r-algsimeq-42').innerHTML = 'Correct!'
      document.getElementById('sa-algsimeq-4').disabled = true;
      showExplanation4()
      localStorage.setItem('algsimeq4', 1)
    }
    if (document.getElementById('o-algsimeq-43').checked) {
      document.getElementById('b-algsimeq-43').style.border = '3px solid red'
      document.getElementById('r-algsimeq-43').style.color = 'red'
      document.getElementById('r-algsimeq-43').innerHTML = 'Incorrect!'
      document.getElementById('b-algsimeq-42').style.border = '3px solid limegreen'
      document.getElementById('r-algsimeq-42').style.color = 'limegreen'
      document.getElementById('r-algsimeq-42').innerHTML = 'Correct!'
      document.getElementById('sa-algsimeq-4').disabled = true;
      showExplanation4()
      localStorage.setItem('algsimeq4', 0)
    }
    if (document.getElementById('o-algsimeq-44').checked) {
      document.getElementById('b-algsimeq-44').style.border = '3px solid red'
      document.getElementById('r-algsimeq-44').style.color = 'red'
      document.getElementById('r-algsimeq-44').innerHTML = 'Incorrect!'
      document.getElementById('b-algsimeq-42').style.border = '3px solid limegreen'
      document.getElementById('r-algsimeq-42').style.color = 'limegreen'
      document.getElementById('r-algsimeq-42').innerHTML = 'Correct!'
      document.getElementById('sa-algsimeq-4').disabled = true;
      showExplanation4()
      localStorage.setItem('algsimeq4', 0)
    }
  }
}

if (document.getElementById('sa-algsimeq-5') != null) {
  algsimeq5But.onclick = function() {
    if (document.getElementById('o-algsimeq-51').checked) {
      document.getElementById('b-algsimeq-51').style.border = '3px solid limegreen'
      document.getElementById('r-algsimeq-51').style.color = 'limegreen'
      document.getElementById('r-algsimeq-51').innerHTML = 'Correct!'
	    document.getElementById('sa-algsimeq-5').disabled = true;
      showExplanation5()
      localStorage.setItem('algsimeq5', 1)
    }
    if (document.getElementById('o-algsimeq-52').checked) {
      document.getElementById('b-algsimeq-52').style.border = '3px solid red'
      document.getElementById('r-algsimeq-52').style.color = 'red'
      document.getElementById('r-algsimeq-52').innerHTML = 'Incorrect!'
      document.getElementById('b-algsimeq-51').style.border = '3px solid limegreen'
      document.getElementById('r-algsimeq-51').style.color = 'limegreen'
      document.getElementById('r-algsimeq-51').innerHTML = 'Correct!'
      document.getElementById('sa-algsimeq-5').disabled = true;
      showExplanation5()
      localStorage.setItem('algsimeq5', 0)
    }
    if (document.getElementById('o-algsimeq-53').checked) {
      document.getElementById('b-algsimeq-53').style.border = '3px solid red'
      document.getElementById('r-algsimeq-53').style.color = 'red'
      document.getElementById('r-algsimeq-53').innerHTML = 'Incorrect!'
      document.getElementById('b-algsimeq-51').style.border = '3px solid limegreen'
      document.getElementById('r-algsimeq-51').style.color = 'limegreen'
      document.getElementById('r-algsimeq-51').innerHTML = 'Correct!'
      document.getElementById('sa-algsimeq-5').disabled = true;
      showExplanation5()
      localStorage.setItem('algsimeq5', 0)
    }
    if (document.getElementById('o-algsimeq-54').checked) {
      document.getElementById('b-algsimeq-54').style.border = '3px solid red'
      document.getElementById('r-algsimeq-54').style.color = 'red'
      document.getElementById('r-algsimeq-54').innerHTML = 'Incorrect!'
      document.getElementById('b-algsimeq-51').style.border = '3px solid limegreen'
      document.getElementById('r-algsimeq-51').style.color = 'limegreen'
      document.getElementById('r-algsimeq-51').innerHTML = 'Correct!'
      document.getElementById('sa-algsimeq-5').disabled = true;
      showExplanation5()
      localStorage.setItem('algsimeq5', 0)
    }
  }
}
    
     
  if (document.getElementById('sa-algsimeq-6') != null) {
  algsimeq6But.onclick = function() {
    if (document.getElementById('o-algsimeq-61').checked) {
      document.getElementById('b-algsimeq-61').style.border = '3px solid red'
      document.getElementById('r-algsimeq-61').style.color = 'red'
      document.getElementById('r-algsimeq-61').innerHTML = 'Incorrect!'
      document.getElementById('b-algsimeq-63').style.border = '3px solid limegreen'
      document.getElementById('r-algsimeq-63').style.color = 'limegreen'
      document.getElementById('r-algsimeq-63').innerHTML = 'Correct!'
	    document.getElementById('sa-algsimeq-6').disabled = true;
      showExplanation6()
      localStorage.setItem('algsimeq6', 0)
    }
    if (document.getElementById('o-algsimeq-62').checked) {
      document.getElementById('b-algsimeq-62').style.border = '3px solid red'
      document.getElementById('r-algsimeq-62').style.color = 'red'
      document.getElementById('r-algsimeq-62').innerHTML = 'Incorrect!'
      document.getElementById('b-algsimeq-63').style.border = '3px solid limegreen'
      document.getElementById('r-algsimeq-63').style.color = 'limegreen'
      document.getElementById('r-algsimeq-63').innerHTML = 'Correct!'
      document.getElementById('sa-algsimeq-6').disabled = true;
      showExplanation6()
      localStorage.setItem('algsimeq6', 0)
    }
    if (document.getElementById('o-algsimeq-63').checked) {
      document.getElementById('b-algsimeq-63').style.border = '3px solid limegreen'
      document.getElementById('r-algsimeq-63').style.color = 'limegreen'
      document.getElementById('r-algsimeq-63').innerHTML = 'Correct!'
      document.getElementById('sa-algsimeq-6').disabled = true;
      showExplanation6()
      localStorage.setItem('algsimeq6', 1)
    }
    if (document.getElementById('o-algsimeq-64').checked) {
      document.getElementById('b-algsimeq-64').style.border = '3px solid red'
      document.getElementById('r-algsimeq-64').style.color = 'red'
      document.getElementById('r-algsimeq-64').innerHTML = 'Incorrect!'
      document.getElementById('b-algsimeq-63').style.border = '3px solid limegreen'
      document.getElementById('r-algsimeq-63').style.color = 'limegreen'
      document.getElementById('r-algsimeq-63').innerHTML = 'Correct!'
      document.getElementById('sa-algsimeq-6').disabled = true;
      showExplanation6()
      localStorage.setItem('algsimeq6', 0)
    }
  }
}

if (document.getElementById('sa-algsimeq-7') != null) {
  algsimeq7But.onclick = function() {
    if (document.getElementById('o-algsimeq-71').checked) {
      document.getElementById('b-algsimeq-71').style.border = '3px solid limegreen'
      document.getElementById('r-algsimeq-71').style.color = 'limegreen'
      document.getElementById('r-algsimeq-71').innerHTML = 'Correct!'
	    document.getElementById('sa-algsimeq-7').disabled = true;
      showExplanation7()
      localStorage.setItem('algsimeq7', 1)
    }
    if (document.getElementById('o-algsimeq-72').checked) {
      document.getElementById('b-algsimeq-72').style.border = '3px solid red'
      document.getElementById('r-algsimeq-72').style.color = 'red'
      document.getElementById('r-algsimeq-72').innerHTML = 'Incorrect!'
      document.getElementById('b-algsimeq-71').style.border = '3px solid limegreen'
      document.getElementById('r-algsimeq-71').style.color = 'limegreen'
      document.getElementById('r-algsimeq-71').innerHTML = 'Correct!'
      document.getElementById('sa-algsimeq-7').disabled = true;
      showExplanation7()
      localStorage.setItem('algsimeq7', 0)
    }
    if (document.getElementById('o-algsimeq-73').checked) {
      document.getElementById('b-algsimeq-73').style.border = '3px solid red'
      document.getElementById('r-algsimeq-73').style.color = 'red'
      document.getElementById('r-algsimeq-73').innerHTML = 'Incorrect!'
      document.getElementById('b-algsimeq-71').style.border = '3px solid limegreen'
      document.getElementById('r-algsimeq-71').style.color = 'limegreen'
      document.getElementById('r-algsimeq-71').innerHTML = 'Correct!'
      document.getElementById('sa-algsimeq-7').disabled = true;
      showExplanation7()
      localStorage.setItem('algsimeq7', 0)
    }
    if (document.getElementById('o-algsimeq-74').checked) {
      document.getElementById('b-algsimeq-74').style.border = '3px solid red'
      document.getElementById('r-algsimeq-74').style.color = 'red'
      document.getElementById('r-algsimeq-74').innerHTML = 'Incorrect!'
      document.getElementById('b-algsimeq-71').style.border = '3px solid limegreen'
      document.getElementById('r-algsimeq-71').style.color = 'limegreen'
      document.getElementById('r-algsimeq-71').innerHTML = 'Correct!'
      document.getElementById('sa-algsimeq-7').disabled = true;
      showExplanation7()
      localStorage.setItem('algsimeq7', 0)
    }
  }
}


if (document.getElementById('sa-algsimeq-8') != null) {
  algsimeq8But.onclick = function() {
    if (document.getElementById('o-algsimeq-81').checked) {
      document.getElementById('b-algsimeq-81').style.border = '3px solid red'
      document.getElementById('r-algsimeq-81').style.color = 'red'
      document.getElementById('r-algsimeq-81').innerHTML = 'Incorrect!'
      document.getElementById('b-algsimeq-82').style.border = '3px solid limegreen'
      document.getElementById('r-algsimeq-82').style.color = 'limegreen'
      document.getElementById('r-algsimeq-82').innerHTML = 'Correct!'
	    document.getElementById('sa-algsimeq-8').disabled = true;
      showExplanation8()
      localStorage.setItem('algsimeq8', 0)
    }
    if (document.getElementById('o-algsimeq-82').checked) {
      document.getElementById('b-algsimeq-82').style.border = '3px solid limegreen'
      document.getElementById('r-algsimeq-82').style.color = 'limegreen'
      document.getElementById('r-algsimeq-82').innerHTML = 'Correct!'
      document.getElementById('sa-algsimeq-8').disabled = true;
      showExplanation8()
      localStorage.setItem('algsimeq8', 1)
    }
    if (document.getElementById('o-algsimeq-83').checked) {
      document.getElementById('b-algsimeq-83').style.border = '3px solid red'
      document.getElementById('r-algsimeq-83').style.color = 'red'
      document.getElementById('r-algsimeq-83').innerHTML = 'Incorrect!'
      document.getElementById('b-algsimeq-82').style.border = '3px solid limegreen'
      document.getElementById('r-algsimeq-82').style.color = 'limegreen'
      document.getElementById('r-algsimeq-82').innerHTML = 'Correct!'
      document.getElementById('sa-algsimeq-8').disabled = true;
      showExplanation8()
      localStorage.setItem('algsimeq8', 0)
    }
    if (document.getElementById('o-algsimeq-84').checked) {
      document.getElementById('b-algsimeq-84').style.border = '3px solid red'
      document.getElementById('r-algsimeq-84').style.color = 'red'
      document.getElementById('r-algsimeq-84').innerHTML = 'Incorrect!'
      document.getElementById('b-algsimeq-82').style.border = '3px solid limegreen'
      document.getElementById('r-algsimeq-82').style.color = 'limegreen'
      document.getElementById('r-algsimeq-82').innerHTML = 'Correct!'
      document.getElementById('sa-algsimeq-8').disabled = true;
      showExplanation8()
      localStorage.setItem('algsimeq8', 0)
    }
  }
}


if (document.getElementById('sa-algsimeq-9') != null) {
  algsimeq9But.onclick = function() {
    if (document.getElementById('o-algsimeq-91').checked) {
      document.getElementById('b-algsimeq-91').style.border = '3px solid red'
      document.getElementById('r-algsimeq-91').style.color = 'red'
      document.getElementById('r-algsimeq-91').innerHTML = 'Incorrect!'
      document.getElementById('b-algsimeq-94').style.border = '3px solid limegreen'
      document.getElementById('r-algsimeq-94').style.color = 'limegreen'
      document.getElementById('r-algsimeq-94').innerHTML = 'Correct!'
      document.getElementById('sa-algsimeq-9').disabled = true;
      showExplanation9()
      localStorage.setItem('algsimeq9', 0)
    }
    if (document.getElementById('o-algsimeq-92').checked) {
      document.getElementById('b-algsimeq-92').style.border = '3px solid red'
      document.getElementById('r-algsimeq-92').style.color = 'red'
      document.getElementById('r-algsimeq-92').innerHTML = 'Incorrect!'
      document.getElementById('b-algsimeq-94').style.border = '3px solid limegreen'
      document.getElementById('r-algsimeq-94').style.color = 'limegreen'
      document.getElementById('r-algsimeq-94').innerHTML = 'Correct!'
      document.getElementById('sa-algsimeq-9').disabled = true;
      showExplanation9()
      localStorage.setItem('algsimeq9', 0)
    }
    if (document.getElementById('o-algsimeq-93').checked) {
      document.getElementById('b-algsimeq-93').style.border = '3px solid red'
      document.getElementById('r-algsimeq-93').style.color = 'red'
      document.getElementById('r-algsimeq-93').innerHTML = 'Incorrect!'
      document.getElementById('b-algsimeq-94').style.border = '3px solid limegreen'
      document.getElementById('r-algsimeq-94').style.color = 'limegreen'
      document.getElementById('r-algsimeq-94').innerHTML = 'Correct!'
      document.getElementById('sa-algsimeq-9').disabled = true;
      showExplanation9()
      localStorage.setItem('algsimeq9', 0)
    }
    if (document.getElementById('o-algsimeq-94').checked) {
      document.getElementById('b-algsimeq-94').style.border = '3px solid limegreen'
      document.getElementById('r-algsimeq-94').style.color = 'limegreen'
      document.getElementById('r-algsimeq-94').innerHTML = 'Correct!'
      document.getElementById('sa-algsimeq-9').disabled = true;
      showExplanation9()
      localStorage.setItem('algsimeq9', 1)
    }
  }
}

if (document.getElementById('sa-algsimeq-10') != null) {
  algsimeq10But.onclick = function() {
    if (document.getElementById('o-algsimeq-101').checked) {
      document.getElementById('b-algsimeq-101').style.border = '3px solid red'
      document.getElementById('r-algsimeq-101').style.color = 'red'
      document.getElementById('r-algsimeq-101').innerHTML = 'Incorrect!'
      document.getElementById('b-algsimeq-102').style.border = '3px solid limegreen'
      document.getElementById('r-algsimeq-102').style.color = 'limegreen'
      document.getElementById('r-algsimeq-102').innerHTML = 'Correct!'
      document.getElementById('sa-algsimeq-10').disabled = true;
      showExplanation10()
      localStorage.setItem('algsimeq10', 0)
    }
    if (document.getElementById('o-algsimeq-102').checked) {
      document.getElementById('b-algsimeq-102').style.border = '3px solid limegreen'
      document.getElementById('r-algsimeq-102').style.color = 'limegreen'
      document.getElementById('r-algsimeq-102').innerHTML = 'Correct!'
      document.getElementById('sa-algsimeq-10').disabled = true;
      showExplanation10()
      localStorage.setItem('algsimeq10', 1)
    }
    if (document.getElementById('o-algsimeq-103').checked) {
      document.getElementById('b-algsimeq-103').style.border = '3px solid red'
      document.getElementById('r-algsimeq-103').style.color = 'red'
      document.getElementById('r-algsimeq-103').innerHTML = 'Incorrect!'
      document.getElementById('b-algsimeq-102').style.border = '3px solid limegreen'
      document.getElementById('r-algsimeq-102').style.color = 'limegreen'
      document.getElementById('r-algsimeq-102').innerHTML = 'Correct!'
      document.getElementById('sa-algsimeq-10').disabled = true;
      showExplanation10()
      localStorage.setItem('algsimeq10', 0)
    }
    if (document.getElementById('o-algsimeq-104').checked) {
      document.getElementById('b-algsimeq-104').style.border = '3px solid red'
      document.getElementById('r-algsimeq-104').style.color = 'red'
      document.getElementById('r-algsimeq-104').innerHTML = 'Incorrect!'
      document.getElementById('b-algsimeq-102').style.border = '3px solid limegreen'
      document.getElementById('r-algsimeq-102').style.color = 'limegreen'
      document.getElementById('r-algsimeq-102').innerHTML = 'Correct!'
      document.getElementById('sa-algsimeq-10').disabled = true;
      showExplanation10()
      localStorage.setItem('algsimeq10', 0)
    }
  }
}

