
  let algconprotwotab1But = document.getElementById('sa-algconprotwotab-1');
  let algconprotwotab2But = document.getElementById('sa-algconprotwotab-2');
  let algconprotwotab3But = document.getElementById('sa-algconprotwotab-3');
  let algconprotwotab4But = document.getElementById('sa-algconprotwotab-4');
  let algconprotwotab5But = document.getElementById('sa-algconprotwotab-5');
  let algconprotwotab6But = document.getElementById('sa-algconprotwotab-6');
  let algconprotwotab7But = document.getElementById('sa-algconprotwotab-7');
  let algconprotwotab8But = document.getElementById('sa-algconprotwotab-8');
  let algconprotwotab9But = document.getElementById('sa-algconprotwotab-9');
  let algconprotwotab10But = document.getElementById('sa-algconprotwotab-10');


  showExplanation1 = function() {
    document.getElementById('e-algconprotwotab-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-algconprotwotab-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-algconprotwotab-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-algconprotwotab-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-algconprotwotab-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-algconprotwotab-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-algconprotwotab-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-algconprotwotab-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-algconprotwotab-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-algconprotwotab-10').style.display = 'block';
     } 



     if (document.getElementById('sa-algconprotwotab-1') != null) {
      algconprotwotab1But.onclick = function () {
        if (document.getElementById('o-algconprotwotab-11').checked) {
          document.getElementById('r-algconprotwotab-11').style.color = 'blue'
          document.getElementById('r-algconprotwotab-11').innerHTML = 'Correct!'
    
          document.getElementById('b-algconprotwotab-11').classList.add("correct")
          document.getElementById('b-algconprotwotab-12').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-13').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-14').classList.add("incorrect")
    
          document.getElementById('sa-algconprotwotab-1').disabled = true;
          document.getElementById('o-algconprotwotab-11').disabled = true;
          document.getElementById('o-algconprotwotab-12').disabled = true;
          document.getElementById('o-algconprotwotab-13').disabled = true;
          document.getElementById('o-algconprotwotab-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algconprotwotab1', 1)
        }
    
        if (document.getElementById('o-algconprotwotab-12').checked) {
         
          document.getElementById('r-algconprotwotab-12').style.color = 'red'
          document.getElementById('r-algconprotwotab-12').innerHTML = 'Incorrect!'
          document.getElementById('r-algconprotwotab-11').style.color = 'blue'
          document.getElementById('r-algconprotwotab-11').innerHTML = 'Correct!'
    
          document.getElementById('b-algconprotwotab-11').classList.add("correct")
          document.getElementById('b-algconprotwotab-12').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-13').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-14').classList.add("incorrect")
    
          document.getElementById('sa-algconprotwotab-1').disabled = true;
          document.getElementById('o-algconprotwotab-11').disabled = true;
          document.getElementById('o-algconprotwotab-12').disabled = true;
          document.getElementById('o-algconprotwotab-13').disabled = true;
          document.getElementById('o-algconprotwotab-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algconprotwotab1', 0)
        }
        if (document.getElementById('o-algconprotwotab-13').checked) {
          document.getElementById('r-algconprotwotab-13').style.color = 'red'
          document.getElementById('r-algconprotwotab-13').innerHTML = 'Incorrect!'
          document.getElementById('r-algconprotwotab-11').style.color = 'blue'
          document.getElementById('r-algconprotwotab-11').innerHTML = 'Correct!'
          
          document.getElementById('b-algconprotwotab-11').classList.add("correct")
          document.getElementById('b-algconprotwotab-12').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-13').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-14').classList.add("incorrect")
    
          document.getElementById('sa-algconprotwotab-1').disabled = true;
          document.getElementById('o-algconprotwotab-11').disabled = true;
          document.getElementById('o-algconprotwotab-12').disabled = true;
          document.getElementById('o-algconprotwotab-13').disabled = true;
          document.getElementById('o-algconprotwotab-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algconprotwotab1', 0)
        }
        if (document.getElementById('o-algconprotwotab-14').checked) {
          document.getElementById('r-algconprotwotab-14').style.color = 'red'
          document.getElementById('r-algconprotwotab-14').innerHTML = 'Incorrect!'
          document.getElementById('r-algconprotwotab-11').style.color = 'blue'
          document.getElementById('r-algconprotwotab-11').innerHTML = 'Correct!'
          
          document.getElementById('b-algconprotwotab-11').classList.add("correct")
          document.getElementById('b-algconprotwotab-12').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-13').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-14').classList.add("incorrect")
    
          document.getElementById('sa-algconprotwotab-1').disabled = true;
          document.getElementById('o-algconprotwotab-11').disabled = true;
          document.getElementById('o-algconprotwotab-12').disabled = true;
          document.getElementById('o-algconprotwotab-13').disabled = true;
          document.getElementById('o-algconprotwotab-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algconprotwotab1', 0)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-algconprotwotab-2') != null) {
      algconprotwotab2But.onclick = function() {
        if (document.getElementById('o-algconprotwotab-21').checked) {
          document.getElementById('r-algconprotwotab-21').style.color = 'red'
          document.getElementById('r-algconprotwotab-21').innerHTML = 'Incorrect!'
          document.getElementById('r-algconprotwotab-23').style.color = 'blue'
          document.getElementById('r-algconprotwotab-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algconprotwotab-23').classList.add("correct")
          document.getElementById('b-algconprotwotab-21').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-22').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-24').classList.add("incorrect")
    
          document.getElementById('sa-algconprotwotab-2').disabled = true;
          document.getElementById('o-algconprotwotab-21').disabled = true;
          document.getElementById('o-algconprotwotab-22').disabled = true;
          document.getElementById('o-algconprotwotab-23').disabled = true;
          document.getElementById('o-algconprotwotab-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algconprotwotab2', 0)
        }
        if (document.getElementById('o-algconprotwotab-22').checked) {
          document.getElementById('r-algconprotwotab-22').style.color = 'red'
          document.getElementById('r-algconprotwotab-22').innerHTML = 'Incorrect!'
          document.getElementById('r-algconprotwotab-23').style.color = 'blue'
          document.getElementById('r-algconprotwotab-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algconprotwotab-23').classList.add("correct")
          document.getElementById('b-algconprotwotab-21').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-22').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-24').classList.add("incorrect")
    
          document.getElementById('sa-algconprotwotab-2').disabled = true;
          document.getElementById('o-algconprotwotab-21').disabled = true;
          document.getElementById('o-algconprotwotab-22').disabled = true;
          document.getElementById('o-algconprotwotab-23').disabled = true;
          document.getElementById('o-algconprotwotab-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algconprotwotab2', 0)
        }
        if (document.getElementById('o-algconprotwotab-23').checked) {
          document.getElementById('r-algconprotwotab-23').style.color = 'blue'
          document.getElementById('r-algconprotwotab-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algconprotwotab-23').classList.add("correct")
          document.getElementById('b-algconprotwotab-21').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-22').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-24').classList.add("incorrect")
    
          document.getElementById('sa-algconprotwotab-2').disabled = true;
          document.getElementById('o-algconprotwotab-21').disabled = true;
          document.getElementById('o-algconprotwotab-22').disabled = true;
          document.getElementById('o-algconprotwotab-23').disabled = true;
          document.getElementById('o-algconprotwotab-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algconprotwotab2', 1)
        }
        if (document.getElementById('o-algconprotwotab-24').checked) {
          document.getElementById('r-algconprotwotab-24').style.color = 'red'
          document.getElementById('r-algconprotwotab-24').innerHTML = 'Incorrect!'
          document.getElementById('r-algconprotwotab-23').style.color = 'blue'
          document.getElementById('r-algconprotwotab-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algconprotwotab-23').classList.add("correct")
          document.getElementById('b-algconprotwotab-21').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-22').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-24').classList.add("incorrect")
    
          document.getElementById('sa-algconprotwotab-2').disabled = true;
          document.getElementById('o-algconprotwotab-21').disabled = true;
          document.getElementById('o-algconprotwotab-22').disabled = true;
          document.getElementById('o-algconprotwotab-23').disabled = true;
          document.getElementById('o-algconprotwotab-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algconprotwotab2', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algconprotwotab-3') != null) {
      algconprotwotab3But.onclick = function() {
        if (document.getElementById('o-algconprotwotab-31').checked) {
          document.getElementById('r-algconprotwotab-31').style.color = 'red'
          document.getElementById('r-algconprotwotab-31').innerHTML = 'Incorrect!'
          document.getElementById('r-algconprotwotab-32').style.color = 'blue'
          document.getElementById('r-algconprotwotab-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algconprotwotab-32').classList.add("correct")
          document.getElementById('b-algconprotwotab-31').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-33').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-34').classList.add("incorrect")
    
          document.getElementById('sa-algconprotwotab-3').disabled = true;
          document.getElementById('o-algconprotwotab-31').disabled = true;
          document.getElementById('o-algconprotwotab-32').disabled = true;
          document.getElementById('o-algconprotwotab-33').disabled = true;
          document.getElementById('o-algconprotwotab-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algconprotwotab3', 0)
        }
        if (document.getElementById('o-algconprotwotab-32').checked) {
    
          document.getElementById('r-algconprotwotab-32').style.color = 'blue'
          document.getElementById('r-algconprotwotab-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algconprotwotab-32').classList.add("correct")
          document.getElementById('b-algconprotwotab-31').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-33').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-34').classList.add("incorrect")
    
          document.getElementById('sa-algconprotwotab-3').disabled = true;
          document.getElementById('o-algconprotwotab-31').disabled = true;
          document.getElementById('o-algconprotwotab-32').disabled = true;
          document.getElementById('o-algconprotwotab-33').disabled = true;
          document.getElementById('o-algconprotwotab-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algconprotwotab3', 1)
        }
        if (document.getElementById('o-algconprotwotab-33').checked) {
          document.getElementById('r-algconprotwotab-33').style.color = 'red'
          document.getElementById('r-algconprotwotab-33').innerHTML = 'Incorrect!'
          document.getElementById('r-algconprotwotab-32').style.color = 'blue'
          document.getElementById('r-algconprotwotab-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algconprotwotab-32').classList.add("correct")
          document.getElementById('b-algconprotwotab-31').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-33').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-34').classList.add("incorrect")
    
          document.getElementById('sa-algconprotwotab-3').disabled = true;
          document.getElementById('o-algconprotwotab-31').disabled = true;
          document.getElementById('o-algconprotwotab-32').disabled = true;
          document.getElementById('o-algconprotwotab-33').disabled = true;
          document.getElementById('o-algconprotwotab-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algconprotwotab3', 0)
        }
        if (document.getElementById('o-algconprotwotab-34').checked) {
          document.getElementById('r-algconprotwotab-34').style.color = 'red'
          document.getElementById('r-algconprotwotab-34').innerHTML = 'Incorrect!'
          document.getElementById('r-algconprotwotab-32').style.color = 'blue'
          document.getElementById('r-algconprotwotab-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algconprotwotab-32').classList.add("correct")
          document.getElementById('b-algconprotwotab-31').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-33').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-34').classList.add("incorrect")
    
          document.getElementById('sa-algconprotwotab-3').disabled = true;
          document.getElementById('o-algconprotwotab-31').disabled = true;
          document.getElementById('o-algconprotwotab-32').disabled = true;
          document.getElementById('o-algconprotwotab-33').disabled = true;
          document.getElementById('o-algconprotwotab-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algconprotwotab3', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algconprotwotab-4') != null) {
      algconprotwotab4But.onclick = function() {
        if (document.getElementById('o-algconprotwotab-41').checked) {
          document.getElementById('r-algconprotwotab-41').style.color = 'red'
          document.getElementById('r-algconprotwotab-41').innerHTML = 'Incorrect!'
          document.getElementById('r-algconprotwotab-43').style.color = 'blue'
          document.getElementById('r-algconprotwotab-43').innerHTML = 'Correct!'
          
          document.getElementById('b-algconprotwotab-43').classList.add("correct")
          document.getElementById('b-algconprotwotab-41').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-42').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-44').classList.add("incorrect")
    
          document.getElementById('sa-algconprotwotab-4').disabled = true;
          document.getElementById('o-algconprotwotab-41').disabled = true;
          document.getElementById('o-algconprotwotab-42').disabled = true;
          document.getElementById('o-algconprotwotab-43').disabled = true;
          document.getElementById('o-algconprotwotab-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algconprotwotab4', 0)
        }
        if (document.getElementById('o-algconprotwotab-42').checked) {
          document.getElementById('r-algconprotwotab-42').style.color = 'red'
          document.getElementById('r-algconprotwotab-42').innerHTML = 'Incorrect!'
          document.getElementById('r-algconprotwotab-43').style.color = 'blue'
          document.getElementById('r-algconprotwotab-43').innerHTML = 'Correct!'
          
          document.getElementById('b-algconprotwotab-43').classList.add("correct")
          document.getElementById('b-algconprotwotab-41').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-42').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-44').classList.add("incorrect")
    
          document.getElementById('sa-algconprotwotab-4').disabled = true;
          document.getElementById('o-algconprotwotab-41').disabled = true;
          document.getElementById('o-algconprotwotab-42').disabled = true;
          document.getElementById('o-algconprotwotab-43').disabled = true;
          document.getElementById('o-algconprotwotab-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algconprotwotab4', 0)
        }
        if (document.getElementById('o-algconprotwotab-43').checked) {
          document.getElementById('r-algconprotwotab-43').style.color = 'blue'
          document.getElementById('r-algconprotwotab-43').innerHTML = 'Correct!'
          
          document.getElementById('b-algconprotwotab-43').classList.add("correct")
          document.getElementById('b-algconprotwotab-41').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-42').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-44').classList.add("incorrect")
    
          document.getElementById('sa-algconprotwotab-4').disabled = true;
          document.getElementById('o-algconprotwotab-41').disabled = true;
          document.getElementById('o-algconprotwotab-42').disabled = true;
          document.getElementById('o-algconprotwotab-43').disabled = true;
          document.getElementById('o-algconprotwotab-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algconprotwotab4', 1)
        }
        if (document.getElementById('o-algconprotwotab-44').checked) {
          document.getElementById('r-algconprotwotab-44').style.color = 'red'
          document.getElementById('r-algconprotwotab-44').innerHTML = 'Incorrect!'
          document.getElementById('r-algconprotwotab-43').style.color = 'blue'
          document.getElementById('r-algconprotwotab-43').innerHTML = 'Correct!'
          
          document.getElementById('b-algconprotwotab-43').classList.add("correct")
          document.getElementById('b-algconprotwotab-41').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-42').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-44').classList.add("incorrect")
    
          document.getElementById('sa-algconprotwotab-4').disabled = true;
          document.getElementById('o-algconprotwotab-41').disabled = true;
          document.getElementById('o-algconprotwotab-42').disabled = true;
          document.getElementById('o-algconprotwotab-43').disabled = true;
          document.getElementById('o-algconprotwotab-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algconprotwotab4', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algconprotwotab-5') != null) {
      algconprotwotab5But.onclick = function() {
        if (document.getElementById('o-algconprotwotab-51').checked) {
          document.getElementById('r-algconprotwotab-51').style.color = 'blue'
          document.getElementById('r-algconprotwotab-51').innerHTML = 'Correct!'
          
          document.getElementById('b-algconprotwotab-51').classList.add("correct")
          document.getElementById('b-algconprotwotab-53').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-52').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-54').classList.add("incorrect")
    
          document.getElementById('sa-algconprotwotab-5').disabled = true;
          document.getElementById('o-algconprotwotab-51').disabled = true;
          document.getElementById('o-algconprotwotab-52').disabled = true;
          document.getElementById('o-algconprotwotab-53').disabled = true;
          document.getElementById('o-algconprotwotab-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algconprotwotab5', 1)
        }
        if (document.getElementById('o-algconprotwotab-52').checked) {
          document.getElementById('r-algconprotwotab-52').style.color = 'red'
          document.getElementById('r-algconprotwotab-52').innerHTML = 'Incorrect!'
          document.getElementById('r-algconprotwotab-51').style.color = 'blue'
          document.getElementById('r-algconprotwotab-51').innerHTML = 'Correct!'
          
          document.getElementById('b-algconprotwotab-51').classList.add("correct")
          document.getElementById('b-algconprotwotab-53').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-52').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-54').classList.add("incorrect")
    
          document.getElementById('sa-algconprotwotab-5').disabled = true;
          document.getElementById('o-algconprotwotab-51').disabled = true;
          document.getElementById('o-algconprotwotab-52').disabled = true;
          document.getElementById('o-algconprotwotab-53').disabled = true;
          document.getElementById('o-algconprotwotab-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algconprotwotab5', 0)
        }
        if (document.getElementById('o-algconprotwotab-53').checked) {
          document.getElementById('r-algconprotwotab-53').style.color = 'red'
          document.getElementById('r-algconprotwotab-53').innerHTML = 'Incorrect!'
          document.getElementById('r-algconprotwotab-51').style.color = 'blue'
          document.getElementById('r-algconprotwotab-51').innerHTML = 'Correct!'
          
          document.getElementById('b-algconprotwotab-51').classList.add("correct")
          document.getElementById('b-algconprotwotab-53').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-52').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-54').classList.add("incorrect")
    
          document.getElementById('sa-algconprotwotab-5').disabled = true;
          document.getElementById('o-algconprotwotab-51').disabled = true;
          document.getElementById('o-algconprotwotab-52').disabled = true;
          document.getElementById('o-algconprotwotab-53').disabled = true;
          document.getElementById('o-algconprotwotab-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algconprotwotab5', 0)
        }
        if (document.getElementById('o-algconprotwotab-54').checked) {
          document.getElementById('r-algconprotwotab-54').style.color = 'red'
          document.getElementById('r-algconprotwotab-54').innerHTML = 'Incorrect!'
          document.getElementById('r-algconprotwotab-51').style.color = 'blue'
          document.getElementById('r-algconprotwotab-51').innerHTML = 'Correct!'
          
          document.getElementById('b-algconprotwotab-51').classList.add("correct")
          document.getElementById('b-algconprotwotab-53').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-52').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-54').classList.add("incorrect")
    
          document.getElementById('sa-algconprotwotab-5').disabled = true;
          document.getElementById('o-algconprotwotab-51').disabled = true;
          document.getElementById('o-algconprotwotab-52').disabled = true;
          document.getElementById('o-algconprotwotab-53').disabled = true;
          document.getElementById('o-algconprotwotab-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algconprotwotab5', 0)
        }
      }
    }
        
         
      if (document.getElementById('sa-algconprotwotab-6') != null) {
      algconprotwotab6But.onclick = function() {
        if (document.getElementById('o-algconprotwotab-61').checked) {
          document.getElementById('r-algconprotwotab-61').style.color = 'red'
          document.getElementById('r-algconprotwotab-61').innerHTML = 'Incorrect!'
          document.getElementById('r-algconprotwotab-63').style.color = 'blue'
          document.getElementById('r-algconprotwotab-63').innerHTML = 'Correct!'
          
          document.getElementById('b-algconprotwotab-63').classList.add("correct")
          document.getElementById('b-algconprotwotab-61').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-62').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-64').classList.add("incorrect")
    
          document.getElementById('sa-algconprotwotab-6').disabled = true;
          document.getElementById('o-algconprotwotab-61').disabled = true;
          document.getElementById('o-algconprotwotab-62').disabled = true;
          document.getElementById('o-algconprotwotab-63').disabled = true;
          document.getElementById('o-algconprotwotab-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algconprotwotab6', 0)
        }
        if (document.getElementById('o-algconprotwotab-62').checked) {
          document.getElementById('r-algconprotwotab-62').style.color = 'red'
          document.getElementById('r-algconprotwotab-62').innerHTML = 'Incorrect!'
          document.getElementById('r-algconprotwotab-63').style.color = 'blue'
          document.getElementById('r-algconprotwotab-63').innerHTML = 'Correct!'
          
          document.getElementById('b-algconprotwotab-63').classList.add("correct")
          document.getElementById('b-algconprotwotab-61').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-62').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-64').classList.add("incorrect")
    
          document.getElementById('sa-algconprotwotab-6').disabled = true;
          document.getElementById('o-algconprotwotab-61').disabled = true;
          document.getElementById('o-algconprotwotab-62').disabled = true;
          document.getElementById('o-algconprotwotab-63').disabled = true;
          document.getElementById('o-algconprotwotab-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algconprotwotab6', 0)
        }
        if (document.getElementById('o-algconprotwotab-63').checked) {
          document.getElementById('r-algconprotwotab-63').style.color = 'blue'
          document.getElementById('r-algconprotwotab-63').innerHTML = 'Correct!'
          
          document.getElementById('b-algconprotwotab-63').classList.add("correct")
          document.getElementById('b-algconprotwotab-61').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-62').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-64').classList.add("incorrect")
    
          document.getElementById('sa-algconprotwotab-6').disabled = true;
          document.getElementById('o-algconprotwotab-61').disabled = true;
          document.getElementById('o-algconprotwotab-62').disabled = true;
          document.getElementById('o-algconprotwotab-63').disabled = true;
          document.getElementById('o-algconprotwotab-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algconprotwotab6', 1)
        }
        if (document.getElementById('o-algconprotwotab-64').checked) {
          document.getElementById('r-algconprotwotab-64').style.color = 'red'
          document.getElementById('r-algconprotwotab-64').innerHTML = 'Incorrect!'
          document.getElementById('r-algconprotwotab-63').style.color = 'blue'
          document.getElementById('r-algconprotwotab-63').innerHTML = 'Correct!'
          
          document.getElementById('b-algconprotwotab-63').classList.add("correct")
          document.getElementById('b-algconprotwotab-61').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-62').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-64').classList.add("incorrect")
    
          document.getElementById('sa-algconprotwotab-6').disabled = true;
          document.getElementById('o-algconprotwotab-61').disabled = true;
          document.getElementById('o-algconprotwotab-62').disabled = true;
          document.getElementById('o-algconprotwotab-63').disabled = true;
          document.getElementById('o-algconprotwotab-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algconprotwotab6', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algconprotwotab-7') != null) {
      algconprotwotab7But.onclick = function() {
        if (document.getElementById('o-algconprotwotab-71').checked) {
          document.getElementById('r-algconprotwotab-71').style.color = 'red'
          document.getElementById('r-algconprotwotab-71').innerHTML = 'Incorrect!'
          document.getElementById('r-algconprotwotab-73').style.color = 'blue'
          document.getElementById('r-algconprotwotab-73').innerHTML = 'Correct!'
          
          document.getElementById('b-algconprotwotab-73').classList.add("correct")
          document.getElementById('b-algconprotwotab-71').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-72').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-74').classList.add("incorrect")
    
          document.getElementById('sa-algconprotwotab-7').disabled = true;
          document.getElementById('o-algconprotwotab-71').disabled = true;
          document.getElementById('o-algconprotwotab-72').disabled = true;
          document.getElementById('o-algconprotwotab-73').disabled = true;
          document.getElementById('o-algconprotwotab-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algconprotwotab7', 0)
        }
        if (document.getElementById('o-algconprotwotab-72').checked) {
          document.getElementById('r-algconprotwotab-72').style.color = 'red'
          document.getElementById('r-algconprotwotab-72').innerHTML = 'Incorrect!'
          document.getElementById('r-algconprotwotab-73').style.color = 'blue'
          document.getElementById('r-algconprotwotab-73').innerHTML = 'Correct!'
          
          document.getElementById('b-algconprotwotab-73').classList.add("correct")
          document.getElementById('b-algconprotwotab-71').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-72').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-74').classList.add("incorrect")
    
          document.getElementById('sa-algconprotwotab-7').disabled = true;
          document.getElementById('o-algconprotwotab-71').disabled = true;
          document.getElementById('o-algconprotwotab-72').disabled = true;
          document.getElementById('o-algconprotwotab-73').disabled = true;
          document.getElementById('o-algconprotwotab-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algconprotwotab7', 0)
        }
        if (document.getElementById('o-algconprotwotab-73').checked) {
          document.getElementById('r-algconprotwotab-73').style.color = 'blue'
          document.getElementById('r-algconprotwotab-73').innerHTML = 'Correct!'
          
          document.getElementById('b-algconprotwotab-73').classList.add("correct")
          document.getElementById('b-algconprotwotab-71').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-72').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-74').classList.add("incorrect")
    
          document.getElementById('sa-algconprotwotab-7').disabled = true;
          document.getElementById('o-algconprotwotab-71').disabled = true;
          document.getElementById('o-algconprotwotab-72').disabled = true;
          document.getElementById('o-algconprotwotab-73').disabled = true;
          document.getElementById('o-algconprotwotab-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algconprotwotab7', 1)
        }
        if (document.getElementById('o-algconprotwotab-74').checked) {
          document.getElementById('r-algconprotwotab-74').style.color = 'red'
          document.getElementById('r-algconprotwotab-74').innerHTML = 'Incorrect!'
          document.getElementById('r-algconprotwotab-73').style.color = 'blue'
          document.getElementById('r-algconprotwotab-73').innerHTML = 'Correct!'
          
          document.getElementById('b-algconprotwotab-73').classList.add("correct")
          document.getElementById('b-algconprotwotab-71').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-72').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-74').classList.add("incorrect")
    
          document.getElementById('sa-algconprotwotab-7').disabled = true;
          document.getElementById('o-algconprotwotab-71').disabled = true;
          document.getElementById('o-algconprotwotab-72').disabled = true;
          document.getElementById('o-algconprotwotab-73').disabled = true;
          document.getElementById('o-algconprotwotab-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algconprotwotab7', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-algconprotwotab-8') != null) {
      algconprotwotab8But.onclick = function() {
        if (document.getElementById('o-algconprotwotab-81').checked) {
          document.getElementById('r-algconprotwotab-81').style.color = 'red'
          document.getElementById('r-algconprotwotab-81').innerHTML = 'Incorrect!'
          document.getElementById('r-algconprotwotab-84').style.color = 'blue'
          document.getElementById('r-algconprotwotab-84').innerHTML = 'Correct!'
          
          document.getElementById('b-algconprotwotab-84').classList.add("correct")
          document.getElementById('b-algconprotwotab-81').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-83').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-82').classList.add("incorrect")
    
          document.getElementById('sa-algconprotwotab-8').disabled = true;
          document.getElementById('o-algconprotwotab-81').disabled = true;
          document.getElementById('o-algconprotwotab-82').disabled = true;
          document.getElementById('o-algconprotwotab-83').disabled = true;
          document.getElementById('o-algconprotwotab-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algconprotwotab8', 0)
        }
        if (document.getElementById('o-algconprotwotab-82').checked) {
          document.getElementById('r-algconprotwotab-82').style.color = 'red'
          document.getElementById('r-algconprotwotab-82').innerHTML = 'Incorrect!'
          document.getElementById('r-algconprotwotab-84').style.color = 'blue'
          document.getElementById('r-algconprotwotab-84').innerHTML = 'Correct!'
          
          document.getElementById('b-algconprotwotab-84').classList.add("correct")
          document.getElementById('b-algconprotwotab-81').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-83').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-82').classList.add("incorrect")
    
          document.getElementById('sa-algconprotwotab-8').disabled = true;
          document.getElementById('o-algconprotwotab-81').disabled = true;
          document.getElementById('o-algconprotwotab-82').disabled = true;
          document.getElementById('o-algconprotwotab-83').disabled = true;
          document.getElementById('o-algconprotwotab-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algconprotwotab8', 0)
        }
        if (document.getElementById('o-algconprotwotab-83').checked) {
          document.getElementById('r-algconprotwotab-83').style.color = 'red'
          document.getElementById('r-algconprotwotab-83').innerHTML = 'Incorrect!'
          document.getElementById('r-algconprotwotab-84').style.color = 'blue'
          document.getElementById('r-algconprotwotab-84').innerHTML = 'Correct!'
          
          document.getElementById('b-algconprotwotab-84').classList.add("correct")
          document.getElementById('b-algconprotwotab-81').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-83').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-82').classList.add("incorrect")
    
          document.getElementById('sa-algconprotwotab-8').disabled = true;
          document.getElementById('o-algconprotwotab-81').disabled = true;
          document.getElementById('o-algconprotwotab-82').disabled = true;
          document.getElementById('o-algconprotwotab-83').disabled = true;
          document.getElementById('o-algconprotwotab-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algconprotwotab8', 0)
        }
        if (document.getElementById('o-algconprotwotab-84').checked) {
          document.getElementById('r-algconprotwotab-84').style.color = 'blue'
          document.getElementById('r-algconprotwotab-84').innerHTML = 'Correct!'
          
          document.getElementById('b-algconprotwotab-84').classList.add("correct")
          document.getElementById('b-algconprotwotab-81').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-83').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-82').classList.add("incorrect")
    
          document.getElementById('sa-algconprotwotab-8').disabled = true;
          document.getElementById('o-algconprotwotab-81').disabled = true;
          document.getElementById('o-algconprotwotab-82').disabled = true;
          document.getElementById('o-algconprotwotab-83').disabled = true;
          document.getElementById('o-algconprotwotab-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algconprotwotab8', 1)
        }
      }
    }
    
    
    if (document.getElementById('sa-algconprotwotab-9') != null) {
      algconprotwotab9But.onclick = function() {
        if (document.getElementById('o-algconprotwotab-91').checked) {
          document.getElementById('r-algconprotwotab-91').style.color = 'red'
          document.getElementById('r-algconprotwotab-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algconprotwotab-94').style.color = 'blue'
          document.getElementById('r-algconprotwotab-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algconprotwotab-94').classList.add("correct")
          document.getElementById('b-algconprotwotab-91').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-92').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-93').classList.add("incorrect")
    
          document.getElementById('sa-algconprotwotab-9').disabled = true;
          document.getElementById('o-algconprotwotab-91').disabled = true;
          document.getElementById('o-algconprotwotab-92').disabled = true;
          document.getElementById('o-algconprotwotab-93').disabled = true;
          document.getElementById('o-algconprotwotab-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algconprotwotab9', 0)
        }
        if (document.getElementById('o-algconprotwotab-92').checked) {
          document.getElementById('r-algconprotwotab-91').style.color = 'red'
          document.getElementById('r-algconprotwotab-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algconprotwotab-94').style.color = 'blue'
          document.getElementById('r-algconprotwotab-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algconprotwotab-94').classList.add("correct")
          document.getElementById('b-algconprotwotab-91').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-92').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-93').classList.add("incorrect")
    
          document.getElementById('sa-algconprotwotab-9').disabled = true;
          document.getElementById('o-algconprotwotab-91').disabled = true;
          document.getElementById('o-algconprotwotab-92').disabled = true;
          document.getElementById('o-algconprotwotab-93').disabled = true;
          document.getElementById('o-algconprotwotab-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algconprotwotab9', 0)
        }
        if (document.getElementById('o-algconprotwotab-93').checked) {
          document.getElementById('r-algconprotwotab-91').style.color = 'red'
          document.getElementById('r-algconprotwotab-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algconprotwotab-94').style.color = 'blue'
          document.getElementById('r-algconprotwotab-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algconprotwotab-94').classList.add("correct")
          document.getElementById('b-algconprotwotab-91').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-92').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-93').classList.add("incorrect")
    
          document.getElementById('sa-algconprotwotab-9').disabled = true;
          document.getElementById('o-algconprotwotab-91').disabled = true;
          document.getElementById('o-algconprotwotab-92').disabled = true;
          document.getElementById('o-algconprotwotab-93').disabled = true;
          document.getElementById('o-algconprotwotab-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algconprotwotab9', 0)
        }
        if (document.getElementById('o-algconprotwotab-94').checked) {
          document.getElementById('r-algconprotwotab-94').style.color = 'blue'
          document.getElementById('r-algconprotwotab-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algconprotwotab-94').classList.add("correct")
          document.getElementById('b-algconprotwotab-91').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-92').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-93').classList.add("incorrect")
    
          document.getElementById('sa-algconprotwotab-9').disabled = true;
          document.getElementById('o-algconprotwotab-91').disabled = true;
          document.getElementById('o-algconprotwotab-92').disabled = true;
          document.getElementById('o-algconprotwotab-93').disabled = true;
          document.getElementById('o-algconprotwotab-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algconprotwotab9', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algconprotwotab-10') != null) {
      algconprotwotab10But.onclick = function() {
        if (document.getElementById('o-algconprotwotab-101').checked) {
          document.getElementById('r-algconprotwotab-101').style.color = 'red'
          document.getElementById('r-algconprotwotab-101').innerHTML = 'Incorrect!'
          document.getElementById('r-algconprotwotab-102').style.color = 'blue'
          document.getElementById('r-algconprotwotab-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algconprotwotab-102').classList.add("correct")
          document.getElementById('b-algconprotwotab-101').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-103').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-104').classList.add("incorrect")
    
          document.getElementById('sa-algconprotwotab-10').disabled = true;
          document.getElementById('o-algconprotwotab-101').disabled = true;
          document.getElementById('o-algconprotwotab-102').disabled = true;
          document.getElementById('o-algconprotwotab-103').disabled = true;
          document.getElementById('o-algconprotwotab-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algconprotwotab10', 0)
        }
        if (document.getElementById('o-algconprotwotab-102').checked) {
          document.getElementById('r-algconprotwotab-102').style.color = 'blue'
          document.getElementById('r-algconprotwotab-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algconprotwotab-102').classList.add("correct")
          document.getElementById('b-algconprotwotab-101').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-103').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-104').classList.add("incorrect")
    
          document.getElementById('sa-algconprotwotab-10').disabled = true;
          document.getElementById('o-algconprotwotab-101').disabled = true;
          document.getElementById('o-algconprotwotab-102').disabled = true;
          document.getElementById('o-algconprotwotab-103').disabled = true;
          document.getElementById('o-algconprotwotab-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algconprotwotab10', 1)
        }
        if (document.getElementById('o-algconprotwotab-103').checked) {
          document.getElementById('r-algconprotwotab-103').style.color = 'red'
          document.getElementById('r-algconprotwotab-103').innerHTML = 'Incorrect!'
          document.getElementById('r-algconprotwotab-102').style.color = 'blue'
          document.getElementById('r-algconprotwotab-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algconprotwotab-102').classList.add("correct")
          document.getElementById('b-algconprotwotab-101').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-103').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-104').classList.add("incorrect")
    
          document.getElementById('sa-algconprotwotab-10').disabled = true;
          document.getElementById('o-algconprotwotab-101').disabled = true;
          document.getElementById('o-algconprotwotab-102').disabled = true;
          document.getElementById('o-algconprotwotab-103').disabled = true;
          document.getElementById('o-algconprotwotab-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algconprotwotab10', 0)
        }
        if (document.getElementById('o-algconprotwotab-104').checked) {
          document.getElementById('r-algconprotwotab-104').style.color = 'red'
          document.getElementById('r-algconprotwotab-104').innerHTML = 'Incorrect!'
          document.getElementById('r-algconprotwotab-102').style.color = 'blue'
          document.getElementById('r-algconprotwotab-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algconprotwotab-102').classList.add("correct")
          document.getElementById('b-algconprotwotab-101').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-103').classList.add("incorrect")
          document.getElementById('b-algconprotwotab-104').classList.add("incorrect")
    
          document.getElementById('sa-algconprotwotab-10').disabled = true;
          document.getElementById('o-algconprotwotab-101').disabled = true;
          document.getElementById('o-algconprotwotab-102').disabled = true;
          document.getElementById('o-algconprotwotab-103').disabled = true;
          document.getElementById('o-algconprotwotab-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algconprotwotab10', 0)
        }
      }
    }
    