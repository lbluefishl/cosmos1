
  let calcint1But = document.getElementById('sa-calcint-1');
  let calcint2But = document.getElementById('sa-calcint-2');
  let calcint3But = document.getElementById('sa-calcint-3');
  let calcint4But = document.getElementById('sa-calcint-4');
  let calcint5But = document.getElementById('sa-calcint-5');
  let calcint6But = document.getElementById('sa-calcint-6');
  let calcint7But = document.getElementById('sa-calcint-7');
  let calcint8But = document.getElementById('sa-calcint-8');
  let calcint9But = document.getElementById('sa-calcint-9');
  let calcint10But = document.getElementById('sa-calcint-10');


  showExplanation1 = function() {
    document.getElementById('e-calcint-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-calcint-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-calcint-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-calcint-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-calcint-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-calcint-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-calcint-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-calcint-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-calcint-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-calcint-10').style.display = 'block';
     } 



     if (document.getElementById('sa-calcint-1') != null) {
      calcint1But.onclick = function () {
        if (document.getElementById('o-calcint-11').checked) {
          document.getElementById('r-calcint-11').style.color = 'blue'
          document.getElementById('r-calcint-11').innerHTML = 'Correct!'
    
          document.getElementById('b-calcint-11').classList.add("correct")
          document.getElementById('b-calcint-12').classList.add("incorrect")
          document.getElementById('b-calcint-13').classList.add("incorrect")
          document.getElementById('b-calcint-14').classList.add("incorrect")
    
          document.getElementById('sa-calcint-1').disabled = true;
          document.getElementById('o-calcint-11').disabled = true;
          document.getElementById('o-calcint-12').disabled = true;
          document.getElementById('o-calcint-13').disabled = true;
          document.getElementById('o-calcint-14').disabled = true;
          showExplanation1()
          localStorage.setItem('calcint1', 1)
        }
    
        if (document.getElementById('o-calcint-12').checked) {
         
          document.getElementById('r-calcint-12').style.color = 'red'
          document.getElementById('r-calcint-12').innerHTML = 'Incorrect!'
          document.getElementById('r-calcint-11').style.color = 'blue'
          document.getElementById('r-calcint-11').innerHTML = 'Correct!'
    
          document.getElementById('b-calcint-11').classList.add("correct")
          document.getElementById('b-calcint-12').classList.add("incorrect")
          document.getElementById('b-calcint-13').classList.add("incorrect")
          document.getElementById('b-calcint-14').classList.add("incorrect")
    
          document.getElementById('sa-calcint-1').disabled = true;
          document.getElementById('o-calcint-11').disabled = true;
          document.getElementById('o-calcint-12').disabled = true;
          document.getElementById('o-calcint-13').disabled = true;
          document.getElementById('o-calcint-14').disabled = true;
          showExplanation1()
          localStorage.setItem('calcint1', 0)
        }
        if (document.getElementById('o-calcint-13').checked) {
          document.getElementById('r-calcint-13').style.color = 'red'
          document.getElementById('r-calcint-13').innerHTML = 'Incorrect!'
          document.getElementById('r-calcint-11').style.color = 'blue'
          document.getElementById('r-calcint-11').innerHTML = 'Correct!'
          
          document.getElementById('b-calcint-11').classList.add("correct")
          document.getElementById('b-calcint-12').classList.add("incorrect")
          document.getElementById('b-calcint-13').classList.add("incorrect")
          document.getElementById('b-calcint-14').classList.add("incorrect")
    
          document.getElementById('sa-calcint-1').disabled = true;
          document.getElementById('o-calcint-11').disabled = true;
          document.getElementById('o-calcint-12').disabled = true;
          document.getElementById('o-calcint-13').disabled = true;
          document.getElementById('o-calcint-14').disabled = true;
          showExplanation1()
          localStorage.setItem('calcint1', 0)
        }
        if (document.getElementById('o-calcint-14').checked) {
          document.getElementById('r-calcint-14').style.color = 'red'
          document.getElementById('r-calcint-14').innerHTML = 'Incorrect!'
          document.getElementById('r-calcint-11').style.color = 'blue'
          document.getElementById('r-calcint-11').innerHTML = 'Correct!'
          
          document.getElementById('b-calcint-11').classList.add("correct")
          document.getElementById('b-calcint-12').classList.add("incorrect")
          document.getElementById('b-calcint-13').classList.add("incorrect")
          document.getElementById('b-calcint-14').classList.add("incorrect")
    
          document.getElementById('sa-calcint-1').disabled = true;
          document.getElementById('o-calcint-11').disabled = true;
          document.getElementById('o-calcint-12').disabled = true;
          document.getElementById('o-calcint-13').disabled = true;
          document.getElementById('o-calcint-14').disabled = true;
          showExplanation1()
          localStorage.setItem('calcint1', 0)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-calcint-2') != null) {
      calcint2But.onclick = function() {
        if (document.getElementById('o-calcint-21').checked) {
          document.getElementById('r-calcint-21').style.color = 'red'
          document.getElementById('r-calcint-21').innerHTML = 'Incorrect!'
          document.getElementById('r-calcint-23').style.color = 'blue'
          document.getElementById('r-calcint-23').innerHTML = 'Correct!'
          
          document.getElementById('b-calcint-23').classList.add("correct")
          document.getElementById('b-calcint-21').classList.add("incorrect")
          document.getElementById('b-calcint-22').classList.add("incorrect")
          document.getElementById('b-calcint-24').classList.add("incorrect")
    
          document.getElementById('sa-calcint-2').disabled = true;
          document.getElementById('o-calcint-21').disabled = true;
          document.getElementById('o-calcint-22').disabled = true;
          document.getElementById('o-calcint-23').disabled = true;
          document.getElementById('o-calcint-24').disabled = true;
          showExplanation2()
          localStorage.setItem('calcint2', 0)
        }
        if (document.getElementById('o-calcint-22').checked) {
          document.getElementById('r-calcint-22').style.color = 'red'
          document.getElementById('r-calcint-22').innerHTML = 'Incorrect!'
          document.getElementById('r-calcint-23').style.color = 'blue'
          document.getElementById('r-calcint-23').innerHTML = 'Correct!'
          
          document.getElementById('b-calcint-23').classList.add("correct")
          document.getElementById('b-calcint-21').classList.add("incorrect")
          document.getElementById('b-calcint-22').classList.add("incorrect")
          document.getElementById('b-calcint-24').classList.add("incorrect")
    
          document.getElementById('sa-calcint-2').disabled = true;
          document.getElementById('o-calcint-21').disabled = true;
          document.getElementById('o-calcint-22').disabled = true;
          document.getElementById('o-calcint-23').disabled = true;
          document.getElementById('o-calcint-24').disabled = true;
          showExplanation2()
          localStorage.setItem('calcint2', 0)
        }
        if (document.getElementById('o-calcint-23').checked) {
          document.getElementById('r-calcint-23').style.color = 'blue'
          document.getElementById('r-calcint-23').innerHTML = 'Correct!'
          
          document.getElementById('b-calcint-23').classList.add("correct")
          document.getElementById('b-calcint-21').classList.add("incorrect")
          document.getElementById('b-calcint-22').classList.add("incorrect")
          document.getElementById('b-calcint-24').classList.add("incorrect")
    
          document.getElementById('sa-calcint-2').disabled = true;
          document.getElementById('o-calcint-21').disabled = true;
          document.getElementById('o-calcint-22').disabled = true;
          document.getElementById('o-calcint-23').disabled = true;
          document.getElementById('o-calcint-24').disabled = true;
          showExplanation2()
          localStorage.setItem('calcint2', 1)
        }
        if (document.getElementById('o-calcint-24').checked) {
          document.getElementById('r-calcint-24').style.color = 'red'
          document.getElementById('r-calcint-24').innerHTML = 'Incorrect!'
          document.getElementById('r-calcint-23').style.color = 'blue'
          document.getElementById('r-calcint-23').innerHTML = 'Correct!'
          
          document.getElementById('b-calcint-23').classList.add("correct")
          document.getElementById('b-calcint-21').classList.add("incorrect")
          document.getElementById('b-calcint-22').classList.add("incorrect")
          document.getElementById('b-calcint-24').classList.add("incorrect")
    
          document.getElementById('sa-calcint-2').disabled = true;
          document.getElementById('o-calcint-21').disabled = true;
          document.getElementById('o-calcint-22').disabled = true;
          document.getElementById('o-calcint-23').disabled = true;
          document.getElementById('o-calcint-24').disabled = true;
          showExplanation2()
          localStorage.setItem('calcint2', 0)
        }
      }
    }
    
    if (document.getElementById('sa-calcint-3') != null) {
      calcint3But.onclick = function() {
        if (document.getElementById('o-calcint-31').checked) {
          document.getElementById('r-calcint-31').style.color = 'red'
          document.getElementById('r-calcint-31').innerHTML = 'Incorrect!'
          document.getElementById('r-calcint-32').style.color = 'blue'
          document.getElementById('r-calcint-32').innerHTML = 'Correct!'
          
          document.getElementById('b-calcint-32').classList.add("correct")
          document.getElementById('b-calcint-31').classList.add("incorrect")
          document.getElementById('b-calcint-33').classList.add("incorrect")
          document.getElementById('b-calcint-34').classList.add("incorrect")
    
          document.getElementById('sa-calcint-3').disabled = true;
          document.getElementById('o-calcint-31').disabled = true;
          document.getElementById('o-calcint-32').disabled = true;
          document.getElementById('o-calcint-33').disabled = true;
          document.getElementById('o-calcint-34').disabled = true;
          showExplanation3()
          localStorage.setItem('calcint3', 0)
        }
        if (document.getElementById('o-calcint-32').checked) {
    
          document.getElementById('r-calcint-32').style.color = 'blue'
          document.getElementById('r-calcint-32').innerHTML = 'Correct!'
          
          document.getElementById('b-calcint-32').classList.add("correct")
          document.getElementById('b-calcint-31').classList.add("incorrect")
          document.getElementById('b-calcint-33').classList.add("incorrect")
          document.getElementById('b-calcint-34').classList.add("incorrect")
    
          document.getElementById('sa-calcint-3').disabled = true;
          document.getElementById('o-calcint-31').disabled = true;
          document.getElementById('o-calcint-32').disabled = true;
          document.getElementById('o-calcint-33').disabled = true;
          document.getElementById('o-calcint-34').disabled = true;
          showExplanation3()
          localStorage.setItem('calcint3', 1)
        }
        if (document.getElementById('o-calcint-33').checked) {
          document.getElementById('r-calcint-33').style.color = 'red'
          document.getElementById('r-calcint-33').innerHTML = 'Incorrect!'
          document.getElementById('r-calcint-32').style.color = 'blue'
          document.getElementById('r-calcint-32').innerHTML = 'Correct!'
          
          document.getElementById('b-calcint-32').classList.add("correct")
          document.getElementById('b-calcint-31').classList.add("incorrect")
          document.getElementById('b-calcint-33').classList.add("incorrect")
          document.getElementById('b-calcint-34').classList.add("incorrect")
    
          document.getElementById('sa-calcint-3').disabled = true;
          document.getElementById('o-calcint-31').disabled = true;
          document.getElementById('o-calcint-32').disabled = true;
          document.getElementById('o-calcint-33').disabled = true;
          document.getElementById('o-calcint-34').disabled = true;
          showExplanation3()
          localStorage.setItem('calcint3', 0)
        }
        if (document.getElementById('o-calcint-34').checked) {
          document.getElementById('r-calcint-34').style.color = 'red'
          document.getElementById('r-calcint-34').innerHTML = 'Incorrect!'
          document.getElementById('r-calcint-32').style.color = 'blue'
          document.getElementById('r-calcint-32').innerHTML = 'Correct!'
          
          document.getElementById('b-calcint-32').classList.add("correct")
          document.getElementById('b-calcint-31').classList.add("incorrect")
          document.getElementById('b-calcint-33').classList.add("incorrect")
          document.getElementById('b-calcint-34').classList.add("incorrect")
    
          document.getElementById('sa-calcint-3').disabled = true;
          document.getElementById('o-calcint-31').disabled = true;
          document.getElementById('o-calcint-32').disabled = true;
          document.getElementById('o-calcint-33').disabled = true;
          document.getElementById('o-calcint-34').disabled = true;
          showExplanation3()
          localStorage.setItem('calcint3', 0)
        }
      }
    }
    
    if (document.getElementById('sa-calcint-4') != null) {
      calcint4But.onclick = function() {
        if (document.getElementById('o-calcint-41').checked) {
          document.getElementById('r-calcint-41').style.color = 'red'
          document.getElementById('r-calcint-41').innerHTML = 'Incorrect!'
          document.getElementById('r-calcint-44').style.color = 'blue'
          document.getElementById('r-calcint-44').innerHTML = 'Correct!'
          
          document.getElementById('b-calcint-44').classList.add("correct")
          document.getElementById('b-calcint-41').classList.add("incorrect")
          document.getElementById('b-calcint-42').classList.add("incorrect")
          document.getElementById('b-calcint-43').classList.add("incorrect")
    
          document.getElementById('sa-calcint-4').disabled = true;
          document.getElementById('o-calcint-41').disabled = true;
          document.getElementById('o-calcint-42').disabled = true;
          document.getElementById('o-calcint-43').disabled = true;
          document.getElementById('o-calcint-44').disabled = true;
          showExplanation4()
          localStorage.setItem('calcint4', 0)
        }
        if (document.getElementById('o-calcint-42').checked) {
          document.getElementById('r-calcint-42').style.color = 'red'
          document.getElementById('r-calcint-42').innerHTML = 'Incorrect!'
          document.getElementById('r-calcint-44').style.color = 'blue'
          document.getElementById('r-calcint-44').innerHTML = 'Correct!'
          
          document.getElementById('b-calcint-44').classList.add("correct")
          document.getElementById('b-calcint-41').classList.add("incorrect")
          document.getElementById('b-calcint-42').classList.add("incorrect")
          document.getElementById('b-calcint-43').classList.add("incorrect")
    
          document.getElementById('sa-calcint-4').disabled = true;
          document.getElementById('o-calcint-41').disabled = true;
          document.getElementById('o-calcint-42').disabled = true;
          document.getElementById('o-calcint-43').disabled = true;
          document.getElementById('o-calcint-44').disabled = true;
          showExplanation4()
          localStorage.setItem('calcint4', 0)
        }
        if (document.getElementById('o-calcint-43').checked) {
          document.getElementById('r-calcint-43').style.color = 'red'
          document.getElementById('r-calcint-43').innerHTML = 'Incorrect!'
          document.getElementById('r-calcint-44').style.color = 'blue'
          document.getElementById('r-calcint-44').innerHTML = 'Correct!'
          
          document.getElementById('b-calcint-44').classList.add("correct")
          document.getElementById('b-calcint-41').classList.add("incorrect")
          document.getElementById('b-calcint-42').classList.add("incorrect")
          document.getElementById('b-calcint-43').classList.add("incorrect")
    
          document.getElementById('sa-calcint-4').disabled = true;
          document.getElementById('o-calcint-41').disabled = true;
          document.getElementById('o-calcint-42').disabled = true;
          document.getElementById('o-calcint-43').disabled = true;
          document.getElementById('o-calcint-44').disabled = true;
          showExplanation4()
          localStorage.setItem('calcint4', 0)
        }
        if (document.getElementById('o-calcint-44').checked) {
          document.getElementById('r-calcint-44').style.color = 'blue'
          document.getElementById('r-calcint-44').innerHTML = 'Correct!'
          
          document.getElementById('b-calcint-44').classList.add("correct")
          document.getElementById('b-calcint-41').classList.add("incorrect")
          document.getElementById('b-calcint-42').classList.add("incorrect")
          document.getElementById('b-calcint-43').classList.add("incorrect")
    
          document.getElementById('sa-calcint-4').disabled = true;
          document.getElementById('o-calcint-41').disabled = true;
          document.getElementById('o-calcint-42').disabled = true;
          document.getElementById('o-calcint-43').disabled = true;
          document.getElementById('o-calcint-44').disabled = true;
          showExplanation4()
          localStorage.setItem('calcint4', 1)
        }
      }
    }
    
    if (document.getElementById('sa-calcint-5') != null) {
      calcint5But.onclick = function() {
        if (document.getElementById('o-calcint-51').checked) {
          document.getElementById('r-calcint-51').style.color = 'red'
          document.getElementById('r-calcint-51').innerHTML = 'Incorrect!'
          document.getElementById('r-calcint-53').style.color = 'blue'
          document.getElementById('r-calcint-53').innerHTML = 'Correct!'
          
          document.getElementById('b-calcint-53').classList.add("correct")
          document.getElementById('b-calcint-51').classList.add("incorrect")
          document.getElementById('b-calcint-52').classList.add("incorrect")
          document.getElementById('b-calcint-54').classList.add("incorrect")
    
          document.getElementById('sa-calcint-5').disabled = true;
          document.getElementById('o-calcint-51').disabled = true;
          document.getElementById('o-calcint-52').disabled = true;
          document.getElementById('o-calcint-53').disabled = true;
          document.getElementById('o-calcint-54').disabled = true;
          showExplanation5()
          localStorage.setItem('calcint5', 0)
        }
        if (document.getElementById('o-calcint-52').checked) {
          document.getElementById('r-calcint-52').style.color = 'red'
          document.getElementById('r-calcint-52').innerHTML = 'Incorrect!'
          document.getElementById('r-calcint-53').style.color = 'blue'
          document.getElementById('r-calcint-53').innerHTML = 'Correct!'
          
          document.getElementById('b-calcint-53').classList.add("correct")
          document.getElementById('b-calcint-51').classList.add("incorrect")
          document.getElementById('b-calcint-52').classList.add("incorrect")
          document.getElementById('b-calcint-54').classList.add("incorrect")
    
          document.getElementById('sa-calcint-5').disabled = true;
          document.getElementById('o-calcint-51').disabled = true;
          document.getElementById('o-calcint-52').disabled = true;
          document.getElementById('o-calcint-53').disabled = true;
          document.getElementById('o-calcint-54').disabled = true;
          showExplanation5()
          localStorage.setItem('calcint5', 0)
        }
        if (document.getElementById('o-calcint-53').checked) {
          document.getElementById('r-calcint-53').style.color = 'blue'
          document.getElementById('r-calcint-53').innerHTML = 'Correct!'
          
          document.getElementById('b-calcint-53').classList.add("correct")
          document.getElementById('b-calcint-51').classList.add("incorrect")
          document.getElementById('b-calcint-52').classList.add("incorrect")
          document.getElementById('b-calcint-54').classList.add("incorrect")
    
          document.getElementById('sa-calcint-5').disabled = true;
          document.getElementById('o-calcint-51').disabled = true;
          document.getElementById('o-calcint-52').disabled = true;
          document.getElementById('o-calcint-53').disabled = true;
          document.getElementById('o-calcint-54').disabled = true;
          showExplanation5()
          localStorage.setItem('calcint5', 1)
        }
        if (document.getElementById('o-calcint-54').checked) {
          document.getElementById('r-calcint-54').style.color = 'red'
          document.getElementById('r-calcint-54').innerHTML = 'Incorrect!'
          document.getElementById('r-calcint-53').style.color = 'blue'
          document.getElementById('r-calcint-53').innerHTML = 'Correct!'
          
          document.getElementById('b-calcint-53').classList.add("correct")
          document.getElementById('b-calcint-51').classList.add("incorrect")
          document.getElementById('b-calcint-52').classList.add("incorrect")
          document.getElementById('b-calcint-54').classList.add("incorrect")
    
          document.getElementById('sa-calcint-5').disabled = true;
          document.getElementById('o-calcint-51').disabled = true;
          document.getElementById('o-calcint-52').disabled = true;
          document.getElementById('o-calcint-53').disabled = true;
          document.getElementById('o-calcint-54').disabled = true;
          showExplanation5()
          localStorage.setItem('calcint5', 0)
        }
      }
    }
        
         
      if (document.getElementById('sa-calcint-6') != null) {
      calcint6But.onclick = function() {
        if (document.getElementById('o-calcint-61').checked) {
          document.getElementById('r-calcint-61').style.color = 'red'
          document.getElementById('r-calcint-61').innerHTML = 'Incorrect!'
          document.getElementById('r-calcint-64').style.color = 'blue'
          document.getElementById('r-calcint-64').innerHTML = 'Correct!'
          
          document.getElementById('b-calcint-64').classList.add("correct")
          document.getElementById('b-calcint-61').classList.add("incorrect")
          document.getElementById('b-calcint-62').classList.add("incorrect")
          document.getElementById('b-calcint-63').classList.add("incorrect")
    
          document.getElementById('sa-calcint-6').disabled = true;
          document.getElementById('o-calcint-61').disabled = true;
          document.getElementById('o-calcint-62').disabled = true;
          document.getElementById('o-calcint-63').disabled = true;
          document.getElementById('o-calcint-64').disabled = true;
          showExplanation6()
          localStorage.setItem('calcint6', 0)
        }
        if (document.getElementById('o-calcint-62').checked) {
          document.getElementById('r-calcint-62').style.color = 'red'
          document.getElementById('r-calcint-62').innerHTML = 'Incorrect!'
          document.getElementById('r-calcint-64').style.color = 'blue'
          document.getElementById('r-calcint-64').innerHTML = 'Correct!'
          
          document.getElementById('b-calcint-64').classList.add("correct")
          document.getElementById('b-calcint-61').classList.add("incorrect")
          document.getElementById('b-calcint-62').classList.add("incorrect")
          document.getElementById('b-calcint-63').classList.add("incorrect")
    
          document.getElementById('sa-calcint-6').disabled = true;
          document.getElementById('o-calcint-61').disabled = true;
          document.getElementById('o-calcint-62').disabled = true;
          document.getElementById('o-calcint-63').disabled = true;
          document.getElementById('o-calcint-64').disabled = true;
          showExplanation6()
          localStorage.setItem('calcint6', 0)
        }
        if (document.getElementById('o-calcint-63').checked) {
          document.getElementById('r-calcint-63').style.color = 'red'
          document.getElementById('r-calcint-63').innerHTML = 'Incorrect!'
          document.getElementById('r-calcint-64').style.color = 'blue'
          document.getElementById('r-calcint-64').innerHTML = 'Correct!'
          
          document.getElementById('b-calcint-64').classList.add("correct")
          document.getElementById('b-calcint-61').classList.add("incorrect")
          document.getElementById('b-calcint-62').classList.add("incorrect")
          document.getElementById('b-calcint-63').classList.add("incorrect")
    
          document.getElementById('sa-calcint-6').disabled = true;
          document.getElementById('o-calcint-61').disabled = true;
          document.getElementById('o-calcint-62').disabled = true;
          document.getElementById('o-calcint-63').disabled = true;
          document.getElementById('o-calcint-64').disabled = true;
          showExplanation6()
          localStorage.setItem('calcint6', 0)
        }
        if (document.getElementById('o-calcint-64').checked) {
          document.getElementById('r-calcint-64').style.color = 'blue'
          document.getElementById('r-calcint-64').innerHTML = 'Correct!'
          
          document.getElementById('b-calcint-64').classList.add("correct")
          document.getElementById('b-calcint-61').classList.add("incorrect")
          document.getElementById('b-calcint-62').classList.add("incorrect")
          document.getElementById('b-calcint-63').classList.add("incorrect")
    
          document.getElementById('sa-calcint-6').disabled = true;
          document.getElementById('o-calcint-61').disabled = true;
          document.getElementById('o-calcint-62').disabled = true;
          document.getElementById('o-calcint-63').disabled = true;
          document.getElementById('o-calcint-64').disabled = true;
          showExplanation6()
          localStorage.setItem('calcint6', 1)
        }
      }
    }
    
    if (document.getElementById('sa-calcint-7') != null) {
      calcint7But.onclick = function() {
        if (document.getElementById('o-calcint-71').checked) {
          document.getElementById('r-calcint-71').style.color = 'red'
          document.getElementById('r-calcint-71').innerHTML = 'Incorrect!'
          document.getElementById('r-calcint-74').style.color = 'blue'
          document.getElementById('r-calcint-74').innerHTML = 'Correct!'
          
          document.getElementById('b-calcint-74').classList.add("correct")
          document.getElementById('b-calcint-71').classList.add("incorrect")
          document.getElementById('b-calcint-72').classList.add("incorrect")
          document.getElementById('b-calcint-73').classList.add("incorrect")
    
          document.getElementById('sa-calcint-7').disabled = true;
          document.getElementById('o-calcint-71').disabled = true;
          document.getElementById('o-calcint-72').disabled = true;
          document.getElementById('o-calcint-73').disabled = true;
          document.getElementById('o-calcint-74').disabled = true;
          showExplanation7()
          localStorage.setItem('calcint7', 0)
        }
        if (document.getElementById('o-calcint-72').checked) {
          document.getElementById('r-calcint-72').style.color = 'red'
          document.getElementById('r-calcint-72').innerHTML = 'Incorrect!'
          document.getElementById('r-calcint-74').style.color = 'blue'
          document.getElementById('r-calcint-74').innerHTML = 'Correct!'
          
          document.getElementById('b-calcint-74').classList.add("correct")
          document.getElementById('b-calcint-71').classList.add("incorrect")
          document.getElementById('b-calcint-72').classList.add("incorrect")
          document.getElementById('b-calcint-73').classList.add("incorrect")
    
          document.getElementById('sa-calcint-7').disabled = true;
          document.getElementById('o-calcint-71').disabled = true;
          document.getElementById('o-calcint-72').disabled = true;
          document.getElementById('o-calcint-73').disabled = true;
          document.getElementById('o-calcint-74').disabled = true;
          showExplanation7()
          localStorage.setItem('calcint7', 0)
        }
        if (document.getElementById('o-calcint-73').checked) {
          document.getElementById('r-calcint-73').style.color = 'red'
          document.getElementById('r-calcint-73').innerHTML = 'Incorrect!'
          document.getElementById('r-calcint-74').style.color = 'blue'
          document.getElementById('r-calcint-74').innerHTML = 'Correct!'
          
          document.getElementById('b-calcint-74').classList.add("correct")
          document.getElementById('b-calcint-71').classList.add("incorrect")
          document.getElementById('b-calcint-72').classList.add("incorrect")
          document.getElementById('b-calcint-73').classList.add("incorrect")
    
          document.getElementById('sa-calcint-7').disabled = true;
          document.getElementById('o-calcint-71').disabled = true;
          document.getElementById('o-calcint-72').disabled = true;
          document.getElementById('o-calcint-73').disabled = true;
          document.getElementById('o-calcint-74').disabled = true;
          showExplanation7()
          localStorage.setItem('calcint7', 0)
        }
        if (document.getElementById('o-calcint-74').checked) {
          document.getElementById('r-calcint-74').style.color = 'blue'
          document.getElementById('r-calcint-74').innerHTML = 'Correct!'
          
          document.getElementById('b-calcint-74').classList.add("correct")
          document.getElementById('b-calcint-71').classList.add("incorrect")
          document.getElementById('b-calcint-72').classList.add("incorrect")
          document.getElementById('b-calcint-73').classList.add("incorrect")
    
          document.getElementById('sa-calcint-7').disabled = true;
          document.getElementById('o-calcint-71').disabled = true;
          document.getElementById('o-calcint-72').disabled = true;
          document.getElementById('o-calcint-73').disabled = true;
          document.getElementById('o-calcint-74').disabled = true;
          showExplanation7()
          localStorage.setItem('calcint7', 1)
        }
      }
    }
    
    
    if (document.getElementById('sa-calcint-8') != null) {
      calcint8But.onclick = function() {
        if (document.getElementById('o-calcint-81').checked) {
          document.getElementById('r-calcint-81').style.color = 'red'
          document.getElementById('r-calcint-81').innerHTML = 'Incorrect!'
          document.getElementById('r-calcint-82').style.color = 'blue'
          document.getElementById('r-calcint-82').innerHTML = 'Correct!'
          
          document.getElementById('b-calcint-82').classList.add("correct")
          document.getElementById('b-calcint-81').classList.add("incorrect")
          document.getElementById('b-calcint-83').classList.add("incorrect")
          document.getElementById('b-calcint-84').classList.add("incorrect")
    
          document.getElementById('sa-calcint-8').disabled = true;
          document.getElementById('o-calcint-81').disabled = true;
          document.getElementById('o-calcint-82').disabled = true;
          document.getElementById('o-calcint-83').disabled = true;
          document.getElementById('o-calcint-84').disabled = true;
          showExplanation8()
          localStorage.setItem('calcint8', 0)
        }
        if (document.getElementById('o-calcint-82').checked) {
          document.getElementById('r-calcint-82').style.color = 'blue'
          document.getElementById('r-calcint-82').innerHTML = 'Correct!'
          
          document.getElementById('b-calcint-82').classList.add("correct")
          document.getElementById('b-calcint-81').classList.add("incorrect")
          document.getElementById('b-calcint-83').classList.add("incorrect")
          document.getElementById('b-calcint-84').classList.add("incorrect")
    
          document.getElementById('sa-calcint-8').disabled = true;
          document.getElementById('o-calcint-81').disabled = true;
          document.getElementById('o-calcint-82').disabled = true;
          document.getElementById('o-calcint-83').disabled = true;
          document.getElementById('o-calcint-84').disabled = true;
          showExplanation8()
          localStorage.setItem('calcint8', 1)
        }
        if (document.getElementById('o-calcint-83').checked) {
          document.getElementById('r-calcint-83').style.color = 'red'
          document.getElementById('r-calcint-83').innerHTML = 'Incorrect!'
          document.getElementById('r-calcint-82').style.color = 'blue'
          document.getElementById('r-calcint-82').innerHTML = 'Correct!'
          
          document.getElementById('b-calcint-82').classList.add("correct")
          document.getElementById('b-calcint-81').classList.add("incorrect")
          document.getElementById('b-calcint-83').classList.add("incorrect")
          document.getElementById('b-calcint-84').classList.add("incorrect")
    
          document.getElementById('sa-calcint-8').disabled = true;
          document.getElementById('o-calcint-81').disabled = true;
          document.getElementById('o-calcint-82').disabled = true;
          document.getElementById('o-calcint-83').disabled = true;
          document.getElementById('o-calcint-84').disabled = true;
          showExplanation8()
          localStorage.setItem('calcint8', 0)
        }
        if (document.getElementById('o-calcint-84').checked) {
          document.getElementById('r-calcint-84').style.color = 'red'
          document.getElementById('r-calcint-84').innerHTML = 'Incorrect!'
          document.getElementById('r-calcint-82').style.color = 'blue'
          document.getElementById('r-calcint-82').innerHTML = 'Correct!'
          
          document.getElementById('b-calcint-82').classList.add("correct")
          document.getElementById('b-calcint-81').classList.add("incorrect")
          document.getElementById('b-calcint-83').classList.add("incorrect")
          document.getElementById('b-calcint-84').classList.add("incorrect")
    
          document.getElementById('sa-calcint-8').disabled = true;
          document.getElementById('o-calcint-81').disabled = true;
          document.getElementById('o-calcint-82').disabled = true;
          document.getElementById('o-calcint-83').disabled = true;
          document.getElementById('o-calcint-84').disabled = true;
          showExplanation8()
          localStorage.setItem('calcint8', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-calcint-9') != null) {
      calcint9But.onclick = function() {
        if (document.getElementById('o-calcint-91').checked) {
          document.getElementById('r-calcint-91').style.color = 'red'
          document.getElementById('r-calcint-91').innerHTML = 'Incorrect!'
          document.getElementById('r-calcint-94').style.color = 'blue'
          document.getElementById('r-calcint-94').innerHTML = 'Correct!'
          
          document.getElementById('b-calcint-94').classList.add("correct")
          document.getElementById('b-calcint-91').classList.add("incorrect")
          document.getElementById('b-calcint-92').classList.add("incorrect")
          document.getElementById('b-calcint-93').classList.add("incorrect")
    
          document.getElementById('sa-calcint-9').disabled = true;
          document.getElementById('o-calcint-91').disabled = true;
          document.getElementById('o-calcint-92').disabled = true;
          document.getElementById('o-calcint-93').disabled = true;
          document.getElementById('o-calcint-94').disabled = true;
          showExplanation9()
          localStorage.setItem('calcint9', 0)
        }
        if (document.getElementById('o-calcint-92').checked) {
          document.getElementById('r-calcint-91').style.color = 'red'
          document.getElementById('r-calcint-91').innerHTML = 'Incorrect!'
          document.getElementById('r-calcint-94').style.color = 'blue'
          document.getElementById('r-calcint-94').innerHTML = 'Correct!'
          
          document.getElementById('b-calcint-94').classList.add("correct")
          document.getElementById('b-calcint-91').classList.add("incorrect")
          document.getElementById('b-calcint-92').classList.add("incorrect")
          document.getElementById('b-calcint-93').classList.add("incorrect")
    
          document.getElementById('sa-calcint-9').disabled = true;
          document.getElementById('o-calcint-91').disabled = true;
          document.getElementById('o-calcint-92').disabled = true;
          document.getElementById('o-calcint-93').disabled = true;
          document.getElementById('o-calcint-94').disabled = true;
          showExplanation9()
          localStorage.setItem('calcint9', 0)
        }
        if (document.getElementById('o-calcint-93').checked) {
          document.getElementById('r-calcint-91').style.color = 'red'
          document.getElementById('r-calcint-91').innerHTML = 'Incorrect!'
          document.getElementById('r-calcint-94').style.color = 'blue'
          document.getElementById('r-calcint-94').innerHTML = 'Correct!'
          
          document.getElementById('b-calcint-94').classList.add("correct")
          document.getElementById('b-calcint-91').classList.add("incorrect")
          document.getElementById('b-calcint-92').classList.add("incorrect")
          document.getElementById('b-calcint-93').classList.add("incorrect")
    
          document.getElementById('sa-calcint-9').disabled = true;
          document.getElementById('o-calcint-91').disabled = true;
          document.getElementById('o-calcint-92').disabled = true;
          document.getElementById('o-calcint-93').disabled = true;
          document.getElementById('o-calcint-94').disabled = true;
          showExplanation9()
          localStorage.setItem('calcint9', 0)
        }
        if (document.getElementById('o-calcint-94').checked) {
          document.getElementById('r-calcint-94').style.color = 'blue'
          document.getElementById('r-calcint-94').innerHTML = 'Correct!'
          
          document.getElementById('b-calcint-94').classList.add("correct")
          document.getElementById('b-calcint-91').classList.add("incorrect")
          document.getElementById('b-calcint-92').classList.add("incorrect")
          document.getElementById('b-calcint-93').classList.add("incorrect")
    
          document.getElementById('sa-calcint-9').disabled = true;
          document.getElementById('o-calcint-91').disabled = true;
          document.getElementById('o-calcint-92').disabled = true;
          document.getElementById('o-calcint-93').disabled = true;
          document.getElementById('o-calcint-94').disabled = true;
          showExplanation9()
          localStorage.setItem('calcint9', 1)
        }
      }
    }
    
    if (document.getElementById('sa-calcint-10') != null) {
      calcint10But.onclick = function() {
        if (document.getElementById('o-calcint-101').checked) {
          document.getElementById('r-calcint-101').style.color = 'red'
          document.getElementById('r-calcint-101').innerHTML = 'Incorrect!'
          document.getElementById('r-calcint-102').style.color = 'blue'
          document.getElementById('r-calcint-102').innerHTML = 'Correct!'
          
          document.getElementById('b-calcint-102').classList.add("correct")
          document.getElementById('b-calcint-101').classList.add("incorrect")
          document.getElementById('b-calcint-103').classList.add("incorrect")
          document.getElementById('b-calcint-104').classList.add("incorrect")
    
          document.getElementById('sa-calcint-10').disabled = true;
          document.getElementById('o-calcint-101').disabled = true;
          document.getElementById('o-calcint-102').disabled = true;
          document.getElementById('o-calcint-103').disabled = true;
          document.getElementById('o-calcint-104').disabled = true;
          showExplanation10()
          localStorage.setItem('calcint10', 0)
        }
        if (document.getElementById('o-calcint-102').checked) {
          document.getElementById('r-calcint-102').style.color = 'blue'
          document.getElementById('r-calcint-102').innerHTML = 'Correct!'
          
          document.getElementById('b-calcint-102').classList.add("correct")
          document.getElementById('b-calcint-101').classList.add("incorrect")
          document.getElementById('b-calcint-103').classList.add("incorrect")
          document.getElementById('b-calcint-104').classList.add("incorrect")
    
          document.getElementById('sa-calcint-10').disabled = true;
          document.getElementById('o-calcint-101').disabled = true;
          document.getElementById('o-calcint-102').disabled = true;
          document.getElementById('o-calcint-103').disabled = true;
          document.getElementById('o-calcint-104').disabled = true;
          showExplanation10()
          localStorage.setItem('calcint10', 1)
        }
        if (document.getElementById('o-calcint-103').checked) {
          document.getElementById('r-calcint-103').style.color = 'red'
          document.getElementById('r-calcint-103').innerHTML = 'Incorrect!'
          document.getElementById('r-calcint-102').style.color = 'blue'
          document.getElementById('r-calcint-102').innerHTML = 'Correct!'
          
          document.getElementById('b-calcint-102').classList.add("correct")
          document.getElementById('b-calcint-101').classList.add("incorrect")
          document.getElementById('b-calcint-103').classList.add("incorrect")
          document.getElementById('b-calcint-104').classList.add("incorrect")
    
          document.getElementById('sa-calcint-10').disabled = true;
          document.getElementById('o-calcint-101').disabled = true;
          document.getElementById('o-calcint-102').disabled = true;
          document.getElementById('o-calcint-103').disabled = true;
          document.getElementById('o-calcint-104').disabled = true;
          showExplanation10()
          localStorage.setItem('calcint10', 0)
        }
        if (document.getElementById('o-calcint-104').checked) {
          document.getElementById('r-calcint-104').style.color = 'red'
          document.getElementById('r-calcint-104').innerHTML = 'Incorrect!'
          document.getElementById('r-calcint-102').style.color = 'blue'
          document.getElementById('r-calcint-102').innerHTML = 'Correct!'
          
          document.getElementById('b-calcint-102').classList.add("correct")
          document.getElementById('b-calcint-101').classList.add("incorrect")
          document.getElementById('b-calcint-103').classList.add("incorrect")
          document.getElementById('b-calcint-104').classList.add("incorrect")
    
          document.getElementById('sa-calcint-10').disabled = true;
          document.getElementById('o-calcint-101').disabled = true;
          document.getElementById('o-calcint-102').disabled = true;
          document.getElementById('o-calcint-103').disabled = true;
          document.getElementById('o-calcint-104').disabled = true;
          showExplanation10()
          localStorage.setItem('calcint10', 0)
        }
      }
    }
    