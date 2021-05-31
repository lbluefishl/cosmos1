
  let alg1But = document.getElementById('sa-alg-1');
  let alg2But = document.getElementById('sa-alg-2');
  let alg3But = document.getElementById('sa-alg-3');
  let alg4But = document.getElementById('sa-alg-4');
  let alg5But = document.getElementById('sa-alg-5');
  let alg6But = document.getElementById('sa-alg-6');
  let alg7But = document.getElementById('sa-alg-7');
  let alg8But = document.getElementById('sa-alg-8');
  let alg9But = document.getElementById('sa-alg-9');
  let alg10But = document.getElementById('sa-alg-10');


  showExplanation1 = function() {
    document.getElementById('e-alg-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-alg-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-alg-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-alg-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-alg-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-alg-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-alg-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-alg-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-alg-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-alg-10').style.display = 'block';
     } 




if (document.getElementById('sa-alg-1') != null) {
  alg1But.onclick = function () {
    if (document.getElementById('o-alg-11').checked) {
      document.getElementById('r-alg-11').style.color = 'blue'
      document.getElementById('r-alg-11').innerHTML = 'Correct!'

      document.getElementById('b-alg-11').classList.add("correct")
      document.getElementById('b-alg-12').classList.add("incorrect")
      document.getElementById('b-alg-13').classList.add("incorrect")
      document.getElementById('b-alg-14').classList.add("incorrect")

      document.getElementById('sa-alg-1').disabled = true;
      document.getElementById('o-alg-11').disabled = true;
      document.getElementById('o-alg-12').disabled = true;
      document.getElementById('o-alg-13').disabled = true;
      document.getElementById('o-alg-14').disabled = true;
      showExplanation1()
      localStorage.setItem('alg1', 1)
    }

    if (document.getElementById('o-alg-12').checked) {
     
      document.getElementById('r-alg-12').style.color = 'red'
      document.getElementById('r-alg-12').innerHTML = 'Incorrect!'
      document.getElementById('r-alg-11').style.color = 'blue'
      document.getElementById('r-alg-11').innerHTML = 'Correct!'

      document.getElementById('b-alg-11').classList.add("correct")
      document.getElementById('b-alg-12').classList.add("incorrect")
      document.getElementById('b-alg-13').classList.add("incorrect")
      document.getElementById('b-alg-14').classList.add("incorrect")

      document.getElementById('sa-alg-1').disabled = true;
      document.getElementById('o-alg-11').disabled = true;
      document.getElementById('o-alg-12').disabled = true;
      document.getElementById('o-alg-13').disabled = true;
      document.getElementById('o-alg-14').disabled = true;
      showExplanation1()
      localStorage.setItem('alg1', 0)
    }
    if (document.getElementById('o-alg-13').checked) {
      document.getElementById('r-alg-13').style.color = 'red'
      document.getElementById('r-alg-13').innerHTML = 'Incorrect!'
      document.getElementById('r-alg-11').style.color = 'blue'
      document.getElementById('r-alg-11').innerHTML = 'Correct!'
      
      document.getElementById('b-alg-11').classList.add("correct")
      document.getElementById('b-alg-12').classList.add("incorrect")
      document.getElementById('b-alg-13').classList.add("incorrect")
      document.getElementById('b-alg-14').classList.add("incorrect")

      document.getElementById('sa-alg-1').disabled = true;
      document.getElementById('o-alg-11').disabled = true;
      document.getElementById('o-alg-12').disabled = true;
      document.getElementById('o-alg-13').disabled = true;
      document.getElementById('o-alg-14').disabled = true;
      showExplanation1()
      localStorage.setItem('alg1', 0)
    }
    if (document.getElementById('o-alg-14').checked) {
      document.getElementById('r-alg-14').style.color = 'red'
      document.getElementById('r-alg-14').innerHTML = 'Incorrect!'
      document.getElementById('r-alg-11').style.color = 'blue'
      document.getElementById('r-alg-11').innerHTML = 'Correct!'
      
      document.getElementById('b-alg-11').classList.add("correct")
      document.getElementById('b-alg-12').classList.add("incorrect")
      document.getElementById('b-alg-13').classList.add("incorrect")
      document.getElementById('b-alg-14').classList.add("incorrect")

      document.getElementById('sa-alg-1').disabled = true;
      document.getElementById('o-alg-11').disabled = true;
      document.getElementById('o-alg-12').disabled = true;
      document.getElementById('o-alg-13').disabled = true;
      document.getElementById('o-alg-14').disabled = true;
      showExplanation1()
      localStorage.setItem('alg1', 0)
    }
    
  }
}




if (document.getElementById('sa-alg-2') != null) {
  alg2But.onclick = function() {
    if (document.getElementById('o-alg-21').checked) {
      document.getElementById('r-alg-21').style.color = 'red'
      document.getElementById('r-alg-21').innerHTML = 'Incorrect!'
      document.getElementById('r-alg-23').style.color = 'blue'
      document.getElementById('r-alg-23').innerHTML = 'Correct!'
      
      document.getElementById('b-alg-23').classList.add("correct")
      document.getElementById('b-alg-21').classList.add("incorrect")
      document.getElementById('b-alg-22').classList.add("incorrect")
      document.getElementById('b-alg-24').classList.add("incorrect")

      document.getElementById('sa-alg-2').disabled = true;
      document.getElementById('o-alg-21').disabled = true;
      document.getElementById('o-alg-22').disabled = true;
      document.getElementById('o-alg-23').disabled = true;
      document.getElementById('o-alg-24').disabled = true;
      showExplanation2()
      localStorage.setItem('alg2', 0)
    }
    if (document.getElementById('o-alg-22').checked) {
      document.getElementById('r-alg-22').style.color = 'red'
      document.getElementById('r-alg-22').innerHTML = 'Incorrect!'
      document.getElementById('r-alg-23').style.color = 'blue'
      document.getElementById('r-alg-23').innerHTML = 'Correct!'
      
      document.getElementById('b-alg-23').classList.add("correct")
      document.getElementById('b-alg-21').classList.add("incorrect")
      document.getElementById('b-alg-22').classList.add("incorrect")
      document.getElementById('b-alg-24').classList.add("incorrect")

      document.getElementById('sa-alg-2').disabled = true;
      document.getElementById('o-alg-21').disabled = true;
      document.getElementById('o-alg-22').disabled = true;
      document.getElementById('o-alg-23').disabled = true;
      document.getElementById('o-alg-24').disabled = true;
      showExplanation2()
      localStorage.setItem('alg2', 0)
    }
    if (document.getElementById('o-alg-23').checked) {
      document.getElementById('r-alg-23').style.color = 'blue'
      document.getElementById('r-alg-23').innerHTML = 'Correct!'
      
      document.getElementById('b-alg-23').classList.add("correct")
      document.getElementById('b-alg-21').classList.add("incorrect")
      document.getElementById('b-alg-22').classList.add("incorrect")
      document.getElementById('b-alg-24').classList.add("incorrect")

      document.getElementById('sa-alg-2').disabled = true;
      document.getElementById('o-alg-21').disabled = true;
      document.getElementById('o-alg-22').disabled = true;
      document.getElementById('o-alg-23').disabled = true;
      document.getElementById('o-alg-24').disabled = true;
      showExplanation2()
      localStorage.setItem('alg2', 1)
    }
    if (document.getElementById('o-alg-24').checked) {
      document.getElementById('r-alg-24').style.color = 'red'
      document.getElementById('r-alg-24').innerHTML = 'Incorrect!'
      document.getElementById('r-alg-23').style.color = 'blue'
      document.getElementById('r-alg-23').innerHTML = 'Correct!'
      
      document.getElementById('b-alg-23').classList.add("correct")
      document.getElementById('b-alg-21').classList.add("incorrect")
      document.getElementById('b-alg-22').classList.add("incorrect")
      document.getElementById('b-alg-24').classList.add("incorrect")

      document.getElementById('sa-alg-2').disabled = true;
      document.getElementById('o-alg-21').disabled = true;
      document.getElementById('o-alg-22').disabled = true;
      document.getElementById('o-alg-23').disabled = true;
      document.getElementById('o-alg-24').disabled = true;
      showExplanation2()
      localStorage.setItem('alg2', 0)
    }
  }
}

if (document.getElementById('sa-alg-3') != null) {
  alg3But.onclick = function() {
    if (document.getElementById('o-alg-31').checked) {
      document.getElementById('r-alg-31').style.color = 'red'
      document.getElementById('r-alg-31').innerHTML = 'Incorrect!'
      document.getElementById('r-alg-32').style.color = 'blue'
      document.getElementById('r-alg-32').innerHTML = 'Correct!'
      
      document.getElementById('b-alg-32').classList.add("correct")
      document.getElementById('b-alg-31').classList.add("incorrect")
      document.getElementById('b-alg-33').classList.add("incorrect")
      document.getElementById('b-alg-34').classList.add("incorrect")

      document.getElementById('sa-alg-3').disabled = true;
      document.getElementById('o-alg-31').disabled = true;
      document.getElementById('o-alg-32').disabled = true;
      document.getElementById('o-alg-33').disabled = true;
      document.getElementById('o-alg-34').disabled = true;
      showExplanation3()
      localStorage.setItem('alg3', 0)
    }
    if (document.getElementById('o-alg-32').checked) {

      document.getElementById('r-alg-32').style.color = 'blue'
      document.getElementById('r-alg-32').innerHTML = 'Correct!'
      
      document.getElementById('b-alg-32').classList.add("correct")
      document.getElementById('b-alg-31').classList.add("incorrect")
      document.getElementById('b-alg-33').classList.add("incorrect")
      document.getElementById('b-alg-34').classList.add("incorrect")

      document.getElementById('sa-alg-3').disabled = true;
      document.getElementById('o-alg-31').disabled = true;
      document.getElementById('o-alg-32').disabled = true;
      document.getElementById('o-alg-33').disabled = true;
      document.getElementById('o-alg-34').disabled = true;
      showExplanation3()
      localStorage.setItem('alg3', 1)
    }
    if (document.getElementById('o-alg-33').checked) {
      document.getElementById('r-alg-33').style.color = 'red'
      document.getElementById('r-alg-33').innerHTML = 'Incorrect!'
      document.getElementById('r-alg-32').style.color = 'blue'
      document.getElementById('r-alg-32').innerHTML = 'Correct!'
      
      document.getElementById('b-alg-32').classList.add("correct")
      document.getElementById('b-alg-31').classList.add("incorrect")
      document.getElementById('b-alg-33').classList.add("incorrect")
      document.getElementById('b-alg-34').classList.add("incorrect")

      document.getElementById('sa-alg-3').disabled = true;
      document.getElementById('o-alg-31').disabled = true;
      document.getElementById('o-alg-32').disabled = true;
      document.getElementById('o-alg-33').disabled = true;
      document.getElementById('o-alg-34').disabled = true;
      showExplanation3()
      localStorage.setItem('alg3', 0)
    }
    if (document.getElementById('o-alg-34').checked) {
      document.getElementById('r-alg-34').style.color = 'red'
      document.getElementById('r-alg-34').innerHTML = 'Incorrect!'
      document.getElementById('r-alg-32').style.color = 'blue'
      document.getElementById('r-alg-32').innerHTML = 'Correct!'
      
      document.getElementById('b-alg-32').classList.add("correct")
      document.getElementById('b-alg-31').classList.add("incorrect")
      document.getElementById('b-alg-33').classList.add("incorrect")
      document.getElementById('b-alg-34').classList.add("incorrect")

      document.getElementById('sa-alg-3').disabled = true;
      document.getElementById('o-alg-31').disabled = true;
      document.getElementById('o-alg-32').disabled = true;
      document.getElementById('o-alg-33').disabled = true;
      document.getElementById('o-alg-34').disabled = true;
      showExplanation3()
      localStorage.setItem('alg3', 0)
    }
  }
}

if (document.getElementById('sa-alg-4') != null) {
  alg4But.onclick = function() {
    if (document.getElementById('o-alg-41').checked) {
      document.getElementById('r-alg-41').style.color = 'red'
      document.getElementById('r-alg-41').innerHTML = 'Incorrect!'
      document.getElementById('r-alg-44').style.color = 'blue'
      document.getElementById('r-alg-44').innerHTML = 'Correct!'
      
      document.getElementById('b-alg-44').classList.add("correct")
      document.getElementById('b-alg-41').classList.add("incorrect")
      document.getElementById('b-alg-42').classList.add("incorrect")
      document.getElementById('b-alg-43').classList.add("incorrect")

      document.getElementById('sa-alg-4').disabled = true;
      document.getElementById('o-alg-41').disabled = true;
      document.getElementById('o-alg-42').disabled = true;
      document.getElementById('o-alg-43').disabled = true;
      document.getElementById('o-alg-44').disabled = true;
      showExplanation4()
      localStorage.setItem('alg4', 0)
    }
    if (document.getElementById('o-alg-42').checked) {
      document.getElementById('r-alg-42').style.color = 'red'
      document.getElementById('r-alg-42').innerHTML = 'Incorrect!'
      document.getElementById('r-alg-44').style.color = 'blue'
      document.getElementById('r-alg-44').innerHTML = 'Correct!'
      
      document.getElementById('b-alg-44').classList.add("correct")
      document.getElementById('b-alg-41').classList.add("incorrect")
      document.getElementById('b-alg-42').classList.add("incorrect")
      document.getElementById('b-alg-43').classList.add("incorrect")

      document.getElementById('sa-alg-4').disabled = true;
      document.getElementById('o-alg-41').disabled = true;
      document.getElementById('o-alg-42').disabled = true;
      document.getElementById('o-alg-43').disabled = true;
      document.getElementById('o-alg-44').disabled = true;
      showExplanation4()
      localStorage.setItem('alg4', 0)
    }
    if (document.getElementById('o-alg-43').checked) {
      document.getElementById('r-alg-43').style.color = 'red'
      document.getElementById('r-alg-43').innerHTML = 'Incorrect!'
      document.getElementById('r-alg-44').style.color = 'blue'
      document.getElementById('r-alg-44').innerHTML = 'Correct!'
      
      document.getElementById('b-alg-44').classList.add("correct")
      document.getElementById('b-alg-41').classList.add("incorrect")
      document.getElementById('b-alg-42').classList.add("incorrect")
      document.getElementById('b-alg-43').classList.add("incorrect")

      document.getElementById('sa-alg-4').disabled = true;
      document.getElementById('o-alg-41').disabled = true;
      document.getElementById('o-alg-42').disabled = true;
      document.getElementById('o-alg-43').disabled = true;
      document.getElementById('o-alg-44').disabled = true;
      showExplanation4()
      localStorage.setItem('alg4', 0)
    }
    if (document.getElementById('o-alg-44').checked) {
      document.getElementById('r-alg-44').style.color = 'blue'
      document.getElementById('r-alg-44').innerHTML = 'Correct!'
      
      document.getElementById('b-alg-44').classList.add("correct")
      document.getElementById('b-alg-41').classList.add("incorrect")
      document.getElementById('b-alg-42').classList.add("incorrect")
      document.getElementById('b-alg-43').classList.add("incorrect")

      document.getElementById('sa-alg-4').disabled = true;
      document.getElementById('o-alg-41').disabled = true;
      document.getElementById('o-alg-42').disabled = true;
      document.getElementById('o-alg-43').disabled = true;
      document.getElementById('o-alg-44').disabled = true;
      showExplanation4()
      localStorage.setItem('alg4', 1)
    }
  }
}

if (document.getElementById('sa-alg-5') != null) {
  alg5But.onclick = function() {
    if (document.getElementById('o-alg-51').checked) {
      document.getElementById('r-alg-51').style.color = 'red'
      document.getElementById('r-alg-51').innerHTML = 'Incorrect!'
      document.getElementById('r-alg-53').style.color = 'blue'
      document.getElementById('r-alg-53').innerHTML = 'Correct!'
      
      document.getElementById('b-alg-53').classList.add("correct")
      document.getElementById('b-alg-51').classList.add("incorrect")
      document.getElementById('b-alg-52').classList.add("incorrect")
      document.getElementById('b-alg-54').classList.add("incorrect")

      document.getElementById('sa-alg-5').disabled = true;
      document.getElementById('o-alg-51').disabled = true;
      document.getElementById('o-alg-52').disabled = true;
      document.getElementById('o-alg-53').disabled = true;
      document.getElementById('o-alg-54').disabled = true;
      showExplanation5()
      localStorage.setItem('alg5', 0)
    }
    if (document.getElementById('o-alg-52').checked) {
      document.getElementById('r-alg-52').style.color = 'red'
      document.getElementById('r-alg-52').innerHTML = 'Incorrect!'
      document.getElementById('r-alg-53').style.color = 'blue'
      document.getElementById('r-alg-53').innerHTML = 'Correct!'
      
      document.getElementById('b-alg-53').classList.add("correct")
      document.getElementById('b-alg-51').classList.add("incorrect")
      document.getElementById('b-alg-52').classList.add("incorrect")
      document.getElementById('b-alg-54').classList.add("incorrect")

      document.getElementById('sa-alg-5').disabled = true;
      document.getElementById('o-alg-51').disabled = true;
      document.getElementById('o-alg-52').disabled = true;
      document.getElementById('o-alg-53').disabled = true;
      document.getElementById('o-alg-54').disabled = true;
      showExplanation5()
      localStorage.setItem('alg5', 0)
    }
    if (document.getElementById('o-alg-53').checked) {
      document.getElementById('r-alg-53').style.color = 'blue'
      document.getElementById('r-alg-53').innerHTML = 'Correct!'
      
      document.getElementById('b-alg-53').classList.add("correct")
      document.getElementById('b-alg-51').classList.add("incorrect")
      document.getElementById('b-alg-52').classList.add("incorrect")
      document.getElementById('b-alg-54').classList.add("incorrect")

      document.getElementById('sa-alg-5').disabled = true;
      document.getElementById('o-alg-51').disabled = true;
      document.getElementById('o-alg-52').disabled = true;
      document.getElementById('o-alg-53').disabled = true;
      document.getElementById('o-alg-54').disabled = true;
      showExplanation5()
      localStorage.setItem('alg5', 1)
    }
    if (document.getElementById('o-alg-54').checked) {
      document.getElementById('r-alg-54').style.color = 'red'
      document.getElementById('r-alg-54').innerHTML = 'Incorrect!'
      document.getElementById('r-alg-53').style.color = 'blue'
      document.getElementById('r-alg-53').innerHTML = 'Correct!'
      
      document.getElementById('b-alg-53').classList.add("correct")
      document.getElementById('b-alg-51').classList.add("incorrect")
      document.getElementById('b-alg-52').classList.add("incorrect")
      document.getElementById('b-alg-54').classList.add("incorrect")

      document.getElementById('sa-alg-5').disabled = true;
      document.getElementById('o-alg-51').disabled = true;
      document.getElementById('o-alg-52').disabled = true;
      document.getElementById('o-alg-53').disabled = true;
      document.getElementById('o-alg-54').disabled = true;
      showExplanation5()
      localStorage.setItem('alg5', 0)
    }
  }
}
    
     
  if (document.getElementById('sa-alg-6') != null) {
  alg6But.onclick = function() {
    if (document.getElementById('o-alg-61').checked) {
      document.getElementById('r-alg-61').style.color = 'red'
      document.getElementById('r-alg-61').innerHTML = 'Incorrect!'
      document.getElementById('r-alg-64').style.color = 'blue'
      document.getElementById('r-alg-64').innerHTML = 'Correct!'
      
      document.getElementById('b-alg-64').classList.add("correct")
      document.getElementById('b-alg-61').classList.add("incorrect")
      document.getElementById('b-alg-62').classList.add("incorrect")
      document.getElementById('b-alg-63').classList.add("incorrect")

      document.getElementById('sa-alg-6').disabled = true;
      document.getElementById('o-alg-61').disabled = true;
      document.getElementById('o-alg-62').disabled = true;
      document.getElementById('o-alg-63').disabled = true;
      document.getElementById('o-alg-64').disabled = true;
      showExplanation6()
      localStorage.setItem('alg6', 0)
    }
    if (document.getElementById('o-alg-62').checked) {
      document.getElementById('r-alg-62').style.color = 'red'
      document.getElementById('r-alg-62').innerHTML = 'Incorrect!'
      document.getElementById('r-alg-64').style.color = 'blue'
      document.getElementById('r-alg-64').innerHTML = 'Correct!'
      
      document.getElementById('b-alg-64').classList.add("correct")
      document.getElementById('b-alg-61').classList.add("incorrect")
      document.getElementById('b-alg-62').classList.add("incorrect")
      document.getElementById('b-alg-63').classList.add("incorrect")

      document.getElementById('sa-alg-6').disabled = true;
      document.getElementById('o-alg-61').disabled = true;
      document.getElementById('o-alg-62').disabled = true;
      document.getElementById('o-alg-63').disabled = true;
      document.getElementById('o-alg-64').disabled = true;
      showExplanation6()
      localStorage.setItem('alg6', 0)
    }
    if (document.getElementById('o-alg-63').checked) {
      document.getElementById('r-alg-63').style.color = 'red'
      document.getElementById('r-alg-63').innerHTML = 'Incorrect!'
      document.getElementById('r-alg-64').style.color = 'blue'
      document.getElementById('r-alg-64').innerHTML = 'Correct!'
      
      document.getElementById('b-alg-64').classList.add("correct")
      document.getElementById('b-alg-61').classList.add("incorrect")
      document.getElementById('b-alg-62').classList.add("incorrect")
      document.getElementById('b-alg-63').classList.add("incorrect")

      document.getElementById('sa-alg-6').disabled = true;
      document.getElementById('o-alg-61').disabled = true;
      document.getElementById('o-alg-62').disabled = true;
      document.getElementById('o-alg-63').disabled = true;
      document.getElementById('o-alg-64').disabled = true;
      showExplanation6()
      localStorage.setItem('alg6', 0)
    }
    if (document.getElementById('o-alg-64').checked) {
      document.getElementById('r-alg-64').style.color = 'blue'
      document.getElementById('r-alg-64').innerHTML = 'Correct!'
      
      document.getElementById('b-alg-64').classList.add("correct")
      document.getElementById('b-alg-61').classList.add("incorrect")
      document.getElementById('b-alg-62').classList.add("incorrect")
      document.getElementById('b-alg-63').classList.add("incorrect")

      document.getElementById('sa-alg-6').disabled = true;
      document.getElementById('o-alg-61').disabled = true;
      document.getElementById('o-alg-62').disabled = true;
      document.getElementById('o-alg-63').disabled = true;
      document.getElementById('o-alg-64').disabled = true;
      showExplanation6()
      localStorage.setItem('alg6', 1)
    }
  }
}

if (document.getElementById('sa-alg-7') != null) {
  alg7But.onclick = function() {
    if (document.getElementById('o-alg-71').checked) {
      document.getElementById('r-alg-71').style.color = 'red'
      document.getElementById('r-alg-71').innerHTML = 'Incorrect!'
      document.getElementById('r-alg-74').style.color = 'blue'
      document.getElementById('r-alg-74').innerHTML = 'Correct!'
      
      document.getElementById('b-alg-74').classList.add("correct")
      document.getElementById('b-alg-71').classList.add("incorrect")
      document.getElementById('b-alg-72').classList.add("incorrect")
      document.getElementById('b-alg-73').classList.add("incorrect")

      document.getElementById('sa-alg-7').disabled = true;
      document.getElementById('o-alg-71').disabled = true;
      document.getElementById('o-alg-72').disabled = true;
      document.getElementById('o-alg-73').disabled = true;
      document.getElementById('o-alg-74').disabled = true;
      showExplanation7()
      localStorage.setItem('alg7', 0)
    }
    if (document.getElementById('o-alg-72').checked) {
      document.getElementById('r-alg-72').style.color = 'red'
      document.getElementById('r-alg-72').innerHTML = 'Incorrect!'
      document.getElementById('r-alg-74').style.color = 'blue'
      document.getElementById('r-alg-74').innerHTML = 'Correct!'
      
      document.getElementById('b-alg-74').classList.add("correct")
      document.getElementById('b-alg-71').classList.add("incorrect")
      document.getElementById('b-alg-72').classList.add("incorrect")
      document.getElementById('b-alg-73').classList.add("incorrect")

      document.getElementById('sa-alg-7').disabled = true;
      document.getElementById('o-alg-71').disabled = true;
      document.getElementById('o-alg-72').disabled = true;
      document.getElementById('o-alg-73').disabled = true;
      document.getElementById('o-alg-74').disabled = true;
      showExplanation7()
      localStorage.setItem('alg7', 0)
    }
    if (document.getElementById('o-alg-73').checked) {
      document.getElementById('r-alg-73').style.color = 'red'
      document.getElementById('r-alg-73').innerHTML = 'Incorrect!'
      document.getElementById('r-alg-74').style.color = 'blue'
      document.getElementById('r-alg-74').innerHTML = 'Correct!'
      
      document.getElementById('b-alg-74').classList.add("correct")
      document.getElementById('b-alg-71').classList.add("incorrect")
      document.getElementById('b-alg-72').classList.add("incorrect")
      document.getElementById('b-alg-73').classList.add("incorrect")

      document.getElementById('sa-alg-7').disabled = true;
      document.getElementById('o-alg-71').disabled = true;
      document.getElementById('o-alg-72').disabled = true;
      document.getElementById('o-alg-73').disabled = true;
      document.getElementById('o-alg-74').disabled = true;
      showExplanation7()
      localStorage.setItem('alg7', 0)
    }
    if (document.getElementById('o-alg-74').checked) {
      document.getElementById('r-alg-74').style.color = 'blue'
      document.getElementById('r-alg-74').innerHTML = 'Correct!'
      
      document.getElementById('b-alg-74').classList.add("correct")
      document.getElementById('b-alg-71').classList.add("incorrect")
      document.getElementById('b-alg-72').classList.add("incorrect")
      document.getElementById('b-alg-73').classList.add("incorrect")

      document.getElementById('sa-alg-7').disabled = true;
      document.getElementById('o-alg-71').disabled = true;
      document.getElementById('o-alg-72').disabled = true;
      document.getElementById('o-alg-73').disabled = true;
      document.getElementById('o-alg-74').disabled = true;
      showExplanation7()
      localStorage.setItem('alg7', 1)
    }
  }
}


if (document.getElementById('sa-alg-8') != null) {
  alg8But.onclick = function() {
    if (document.getElementById('o-alg-81').checked) {
      document.getElementById('r-alg-81').style.color = 'red'
      document.getElementById('r-alg-81').innerHTML = 'Incorrect!'
      document.getElementById('r-alg-82').style.color = 'blue'
      document.getElementById('r-alg-82').innerHTML = 'Correct!'
      
      document.getElementById('b-alg-82').classList.add("correct")
      document.getElementById('b-alg-81').classList.add("incorrect")
      document.getElementById('b-alg-83').classList.add("incorrect")
      document.getElementById('b-alg-84').classList.add("incorrect")

      document.getElementById('sa-alg-8').disabled = true;
      document.getElementById('o-alg-81').disabled = true;
      document.getElementById('o-alg-82').disabled = true;
      document.getElementById('o-alg-83').disabled = true;
      document.getElementById('o-alg-84').disabled = true;
      showExplanation8()
      localStorage.setItem('alg8', 0)
    }
    if (document.getElementById('o-alg-82').checked) {
      document.getElementById('r-alg-82').style.color = 'blue'
      document.getElementById('r-alg-82').innerHTML = 'Correct!'
      
      document.getElementById('b-alg-82').classList.add("correct")
      document.getElementById('b-alg-81').classList.add("incorrect")
      document.getElementById('b-alg-83').classList.add("incorrect")
      document.getElementById('b-alg-84').classList.add("incorrect")

      document.getElementById('sa-alg-8').disabled = true;
      document.getElementById('o-alg-81').disabled = true;
      document.getElementById('o-alg-82').disabled = true;
      document.getElementById('o-alg-83').disabled = true;
      document.getElementById('o-alg-84').disabled = true;
      showExplanation8()
      localStorage.setItem('alg8', 1)
    }
    if (document.getElementById('o-alg-83').checked) {
      document.getElementById('r-alg-83').style.color = 'red'
      document.getElementById('r-alg-83').innerHTML = 'Incorrect!'
      document.getElementById('r-alg-82').style.color = 'blue'
      document.getElementById('r-alg-82').innerHTML = 'Correct!'
      
      document.getElementById('b-alg-82').classList.add("correct")
      document.getElementById('b-alg-81').classList.add("incorrect")
      document.getElementById('b-alg-83').classList.add("incorrect")
      document.getElementById('b-alg-84').classList.add("incorrect")

      document.getElementById('sa-alg-8').disabled = true;
      document.getElementById('o-alg-81').disabled = true;
      document.getElementById('o-alg-82').disabled = true;
      document.getElementById('o-alg-83').disabled = true;
      document.getElementById('o-alg-84').disabled = true;
      showExplanation8()
      localStorage.setItem('alg8', 0)
    }
    if (document.getElementById('o-alg-84').checked) {
      document.getElementById('r-alg-84').style.color = 'red'
      document.getElementById('r-alg-84').innerHTML = 'Incorrect!'
      document.getElementById('r-alg-82').style.color = 'blue'
      document.getElementById('r-alg-82').innerHTML = 'Correct!'
      
      document.getElementById('b-alg-82').classList.add("correct")
      document.getElementById('b-alg-81').classList.add("incorrect")
      document.getElementById('b-alg-83').classList.add("incorrect")
      document.getElementById('b-alg-84').classList.add("incorrect")

      document.getElementById('sa-alg-8').disabled = true;
      document.getElementById('o-alg-81').disabled = true;
      document.getElementById('o-alg-82').disabled = true;
      document.getElementById('o-alg-83').disabled = true;
      document.getElementById('o-alg-84').disabled = true;
      showExplanation8()
      localStorage.setItem('alg8', 0)
    }
  }
}


if (document.getElementById('sa-alg-9') != null) {
  alg9But.onclick = function() {
    if (document.getElementById('o-alg-91').checked) {
      document.getElementById('r-alg-91').style.color = 'red'
      document.getElementById('r-alg-91').innerHTML = 'Incorrect!'
      document.getElementById('r-alg-94').style.color = 'blue'
      document.getElementById('r-alg-94').innerHTML = 'Correct!'
      
      document.getElementById('b-alg-94').classList.add("correct")
      document.getElementById('b-alg-91').classList.add("incorrect")
      document.getElementById('b-alg-92').classList.add("incorrect")
      document.getElementById('b-alg-93').classList.add("incorrect")

      document.getElementById('sa-alg-9').disabled = true;
      document.getElementById('o-alg-91').disabled = true;
      document.getElementById('o-alg-92').disabled = true;
      document.getElementById('o-alg-93').disabled = true;
      document.getElementById('o-alg-94').disabled = true;
      showExplanation9()
      localStorage.setItem('alg9', 0)
    }
    if (document.getElementById('o-alg-92').checked) {
      document.getElementById('r-alg-91').style.color = 'red'
      document.getElementById('r-alg-91').innerHTML = 'Incorrect!'
      document.getElementById('r-alg-94').style.color = 'blue'
      document.getElementById('r-alg-94').innerHTML = 'Correct!'
      
      document.getElementById('b-alg-94').classList.add("correct")
      document.getElementById('b-alg-91').classList.add("incorrect")
      document.getElementById('b-alg-92').classList.add("incorrect")
      document.getElementById('b-alg-93').classList.add("incorrect")

      document.getElementById('sa-alg-9').disabled = true;
      document.getElementById('o-alg-91').disabled = true;
      document.getElementById('o-alg-92').disabled = true;
      document.getElementById('o-alg-93').disabled = true;
      document.getElementById('o-alg-94').disabled = true;
      showExplanation9()
      localStorage.setItem('alg9', 0)
    }
    if (document.getElementById('o-alg-93').checked) {
      document.getElementById('r-alg-91').style.color = 'red'
      document.getElementById('r-alg-91').innerHTML = 'Incorrect!'
      document.getElementById('r-alg-94').style.color = 'blue'
      document.getElementById('r-alg-94').innerHTML = 'Correct!'
      
      document.getElementById('b-alg-94').classList.add("correct")
      document.getElementById('b-alg-91').classList.add("incorrect")
      document.getElementById('b-alg-92').classList.add("incorrect")
      document.getElementById('b-alg-93').classList.add("incorrect")

      document.getElementById('sa-alg-9').disabled = true;
      document.getElementById('o-alg-91').disabled = true;
      document.getElementById('o-alg-92').disabled = true;
      document.getElementById('o-alg-93').disabled = true;
      document.getElementById('o-alg-94').disabled = true;
      showExplanation9()
      localStorage.setItem('alg9', 0)
    }
    if (document.getElementById('o-alg-94').checked) {
      document.getElementById('r-alg-94').style.color = 'blue'
      document.getElementById('r-alg-94').innerHTML = 'Correct!'
      
      document.getElementById('b-alg-94').classList.add("correct")
      document.getElementById('b-alg-91').classList.add("incorrect")
      document.getElementById('b-alg-92').classList.add("incorrect")
      document.getElementById('b-alg-93').classList.add("incorrect")

      document.getElementById('sa-alg-9').disabled = true;
      document.getElementById('o-alg-91').disabled = true;
      document.getElementById('o-alg-92').disabled = true;
      document.getElementById('o-alg-93').disabled = true;
      document.getElementById('o-alg-94').disabled = true;
      showExplanation9()
      localStorage.setItem('alg9', 1)
    }
  }
}

if (document.getElementById('sa-alg-10') != null) {
  alg10But.onclick = function() {
    if (document.getElementById('o-alg-101').checked) {
      document.getElementById('r-alg-101').style.color = 'red'
      document.getElementById('r-alg-101').innerHTML = 'Incorrect!'
      document.getElementById('r-alg-102').style.color = 'blue'
      document.getElementById('r-alg-102').innerHTML = 'Correct!'
      
      document.getElementById('b-alg-102').classList.add("correct")
      document.getElementById('b-alg-101').classList.add("incorrect")
      document.getElementById('b-alg-103').classList.add("incorrect")
      document.getElementById('b-alg-104').classList.add("incorrect")

      document.getElementById('sa-alg-10').disabled = true;
      document.getElementById('o-alg-101').disabled = true;
      document.getElementById('o-alg-102').disabled = true;
      document.getElementById('o-alg-103').disabled = true;
      document.getElementById('o-alg-104').disabled = true;
      showExplanation10()
      localStorage.setItem('alg10', 0)
    }
    if (document.getElementById('o-alg-102').checked) {
      document.getElementById('r-alg-102').style.color = 'blue'
      document.getElementById('r-alg-102').innerHTML = 'Correct!'
      
      document.getElementById('b-alg-102').classList.add("correct")
      document.getElementById('b-alg-101').classList.add("incorrect")
      document.getElementById('b-alg-103').classList.add("incorrect")
      document.getElementById('b-alg-104').classList.add("incorrect")

      document.getElementById('sa-alg-10').disabled = true;
      document.getElementById('o-alg-101').disabled = true;
      document.getElementById('o-alg-102').disabled = true;
      document.getElementById('o-alg-103').disabled = true;
      document.getElementById('o-alg-104').disabled = true;
      showExplanation10()
      localStorage.setItem('alg10', 1)
    }
    if (document.getElementById('o-alg-103').checked) {
      document.getElementById('r-alg-103').style.color = 'red'
      document.getElementById('r-alg-103').innerHTML = 'Incorrect!'
      document.getElementById('r-alg-102').style.color = 'blue'
      document.getElementById('r-alg-102').innerHTML = 'Correct!'
      
      document.getElementById('b-alg-102').classList.add("correct")
      document.getElementById('b-alg-101').classList.add("incorrect")
      document.getElementById('b-alg-103').classList.add("incorrect")
      document.getElementById('b-alg-104').classList.add("incorrect")

      document.getElementById('sa-alg-10').disabled = true;
      document.getElementById('o-alg-101').disabled = true;
      document.getElementById('o-alg-102').disabled = true;
      document.getElementById('o-alg-103').disabled = true;
      document.getElementById('o-alg-104').disabled = true;
      showExplanation10()
      localStorage.setItem('alg10', 0)
    }
    if (document.getElementById('o-alg-104').checked) {
      document.getElementById('r-alg-104').style.color = 'red'
      document.getElementById('r-alg-104').innerHTML = 'Incorrect!'
      document.getElementById('r-alg-102').style.color = 'blue'
      document.getElementById('r-alg-102').innerHTML = 'Correct!'
      
      document.getElementById('b-alg-102').classList.add("correct")
      document.getElementById('b-alg-101').classList.add("incorrect")
      document.getElementById('b-alg-103').classList.add("incorrect")
      document.getElementById('b-alg-104').classList.add("incorrect")

      document.getElementById('sa-alg-10').disabled = true;
      document.getElementById('o-alg-101').disabled = true;
      document.getElementById('o-alg-102').disabled = true;
      document.getElementById('o-alg-103').disabled = true;
      document.getElementById('o-alg-104').disabled = true;
      showExplanation10()
      localStorage.setItem('alg10', 0)
    }
  }
}

