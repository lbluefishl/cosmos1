
  let algineq1But = document.getElementById('sa-algineq-1');
  let algineq2But = document.getElementById('sa-algineq-2');
  let algineq3But = document.getElementById('sa-algineq-3');
  let algineq4But = document.getElementById('sa-algineq-4');
  let algineq5But = document.getElementById('sa-algineq-5');
  let algineq6But = document.getElementById('sa-algineq-6');
  let algineq7But = document.getElementById('sa-algineq-7');
  let algineq8But = document.getElementById('sa-algineq-8');
  let algineq9But = document.getElementById('sa-algineq-9');
  let algineq10But = document.getElementById('sa-algineq-10');


  showExplanation1 = function() {
    document.getElementById('e-algineq-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-algineq-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-algineq-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-algineq-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-algineq-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-algineq-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-algineq-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-algineq-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-algineq-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-algineq-10').style.display = 'block';
     } 



     if (document.getElementById('sa-algineq-1') != null) {
      algineq1But.onclick = function () {
        if (document.getElementById('o-algineq-11').checked) {
          document.getElementById('r-algineq-11').style.color = 'red'
          document.getElementById('r-algineq-11').innerHTML = 'Incorrect!'
          document.getElementById('r-algineq-14').style.color = 'blue'
          document.getElementById('r-algineq-14').innerHTML = 'Correct!'
    
          document.getElementById('b-algineq-14').classList.add("correct")
          document.getElementById('b-algineq-12').classList.add("incorrect")
          document.getElementById('b-algineq-13').classList.add("incorrect")
          document.getElementById('b-algineq-11').classList.add("incorrect")
    
          document.getElementById('sa-algineq-1').disabled = true;
          document.getElementById('o-algineq-11').disabled = true;
          document.getElementById('o-algineq-12').disabled = true;
          document.getElementById('o-algineq-13').disabled = true;
          document.getElementById('o-algineq-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algineq1', 0)
        }
    
        if (document.getElementById('o-algineq-12').checked) {
         
          document.getElementById('r-algineq-12').style.color = 'red'
          document.getElementById('r-algineq-12').innerHTML = 'Incorrect!'
          document.getElementById('r-algineq-14').style.color = 'blue'
          document.getElementById('r-algineq-14').innerHTML = 'Correct!'
    
          document.getElementById('b-algineq-14').classList.add("correct")
          document.getElementById('b-algineq-12').classList.add("incorrect")
          document.getElementById('b-algineq-13').classList.add("incorrect")
          document.getElementById('b-algineq-11').classList.add("incorrect")
    
          document.getElementById('sa-algineq-1').disabled = true;
          document.getElementById('o-algineq-11').disabled = true;
          document.getElementById('o-algineq-12').disabled = true;
          document.getElementById('o-algineq-13').disabled = true;
          document.getElementById('o-algineq-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algineq1', 0)
        }
        if (document.getElementById('o-algineq-13').checked) {
          document.getElementById('r-algineq-13').style.color = 'red'
          document.getElementById('r-algineq-13').innerHTML = 'Incorrect!'
          document.getElementById('r-algineq-14').style.color = 'blue'
          document.getElementById('r-algineq-14').innerHTML = 'Correct!'
          
          document.getElementById('b-algineq-14').classList.add("correct")
          document.getElementById('b-algineq-12').classList.add("incorrect")
          document.getElementById('b-algineq-13').classList.add("incorrect")
          document.getElementById('b-algineq-11').classList.add("incorrect")
    
          document.getElementById('sa-algineq-1').disabled = true;
          document.getElementById('o-algineq-11').disabled = true;
          document.getElementById('o-algineq-12').disabled = true;
          document.getElementById('o-algineq-13').disabled = true;
          document.getElementById('o-algineq-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algineq1', 0)
        }
        if (document.getElementById('o-algineq-14').checked) {
          document.getElementById('r-algineq-14').style.color = 'blue'
          document.getElementById('r-algineq-14').innerHTML = 'Correct!'
          
          document.getElementById('b-algineq-14').classList.add("correct")
          document.getElementById('b-algineq-12').classList.add("incorrect")
          document.getElementById('b-algineq-13').classList.add("incorrect")
          document.getElementById('b-algineq-11').classList.add("incorrect")
    
          document.getElementById('sa-algineq-1').disabled = true;
          document.getElementById('o-algineq-11').disabled = true;
          document.getElementById('o-algineq-12').disabled = true;
          document.getElementById('o-algineq-13').disabled = true;
          document.getElementById('o-algineq-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algineq1', 1)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-algineq-2') != null) {
      algineq2But.onclick = function() {
        if (document.getElementById('o-algineq-21').checked) {
          document.getElementById('r-algineq-21').style.color = 'blue'
          document.getElementById('r-algineq-21').innerHTML = 'Correct!'
          
          document.getElementById('b-algineq-21').classList.add("correct")
          document.getElementById('b-algineq-23').classList.add("incorrect")
          document.getElementById('b-algineq-22').classList.add("incorrect")
          document.getElementById('b-algineq-24').classList.add("incorrect")
    
          document.getElementById('sa-algineq-2').disabled = true;
          document.getElementById('o-algineq-21').disabled = true;
          document.getElementById('o-algineq-22').disabled = true;
          document.getElementById('o-algineq-23').disabled = true;
          document.getElementById('o-algineq-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algineq2', 1)
        }
        if (document.getElementById('o-algineq-22').checked) {
          document.getElementById('r-algineq-22').style.color = 'red'
          document.getElementById('r-algineq-22').innerHTML = 'Incorrect!'
          document.getElementById('r-algineq-21').style.color = 'blue'
          document.getElementById('r-algineq-21').innerHTML = 'Correct!'
          
          document.getElementById('b-algineq-21').classList.add("correct")
          document.getElementById('b-algineq-22').classList.add("incorrect")
          document.getElementById('b-algineq-23').classList.add("incorrect")
          document.getElementById('b-algineq-24').classList.add("incorrect")
    
          document.getElementById('sa-algineq-2').disabled = true;
          document.getElementById('o-algineq-21').disabled = true;
          document.getElementById('o-algineq-22').disabled = true;
          document.getElementById('o-algineq-23').disabled = true;
          document.getElementById('o-algineq-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algineq2', 0)
        }
        if (document.getElementById('o-algineq-23').checked) {
          document.getElementById('r-algineq-23').style.color = 'red'
          document.getElementById('r-algineq-23').innerHTML = 'Incorrect!'
          document.getElementById('r-algineq-21').style.color = 'blue'
          document.getElementById('r-algineq-21').innerHTML = 'Correct!'
          
          document.getElementById('b-algineq-21').classList.add("correct")
          document.getElementById('b-algineq-23').classList.add("incorrect")
          document.getElementById('b-algineq-22').classList.add("incorrect")
          document.getElementById('b-algineq-24').classList.add("incorrect")
    
          document.getElementById('sa-algineq-2').disabled = true;
          document.getElementById('o-algineq-21').disabled = true;
          document.getElementById('o-algineq-22').disabled = true;
          document.getElementById('o-algineq-23').disabled = true;
          document.getElementById('o-algineq-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algineq2', 0)
        }
        if (document.getElementById('o-algineq-24').checked) {
          document.getElementById('r-algineq-24').style.color = 'red'
          document.getElementById('r-algineq-24').innerHTML = 'Incorrect!'
          document.getElementById('r-algineq-21').style.color = 'blue'
          document.getElementById('r-algineq-21').innerHTML = 'Correct!'
          
          document.getElementById('b-algineq-21').classList.add("correct")
          document.getElementById('b-algineq-23').classList.add("incorrect")
          document.getElementById('b-algineq-22').classList.add("incorrect")
          document.getElementById('b-algineq-24').classList.add("incorrect")
    
          document.getElementById('sa-algineq-2').disabled = true;
          document.getElementById('o-algineq-21').disabled = true;
          document.getElementById('o-algineq-22').disabled = true;
          document.getElementById('o-algineq-23').disabled = true;
          document.getElementById('o-algineq-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algineq2', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algineq-3') != null) {
      algineq3But.onclick = function() {
        if (document.getElementById('o-algineq-31').checked) {
          document.getElementById('r-algineq-31').style.color = 'blue'
          document.getElementById('r-algineq-31').innerHTML = 'Correct!'
          
          document.getElementById('b-algineq-31').classList.add("correct")
          document.getElementById('b-algineq-32').classList.add("incorrect")
          document.getElementById('b-algineq-33').classList.add("incorrect")
          document.getElementById('b-algineq-34').classList.add("incorrect")
    
          document.getElementById('sa-algineq-3').disabled = true;
          document.getElementById('o-algineq-31').disabled = true;
          document.getElementById('o-algineq-32').disabled = true;
          document.getElementById('o-algineq-33').disabled = true;
          document.getElementById('o-algineq-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algineq3', 1)
        }
        if (document.getElementById('o-algineq-32').checked) {
          document.getElementById('r-algineq-32').style.color = 'red'
          document.getElementById('r-algineq-32').innerHTML = 'Incorrect!'
          document.getElementById('r-algineq-31').style.color = 'blue'
          document.getElementById('r-algineq-31').innerHTML = 'Correct!'
          
          document.getElementById('b-algineq-31').classList.add("correct")
          document.getElementById('b-algineq-32').classList.add("incorrect")
          document.getElementById('b-algineq-33').classList.add("incorrect")
          document.getElementById('b-algineq-34').classList.add("incorrect")
    
          document.getElementById('sa-algineq-3').disabled = true;
          document.getElementById('o-algineq-31').disabled = true;
          document.getElementById('o-algineq-32').disabled = true;
          document.getElementById('o-algineq-33').disabled = true;
          document.getElementById('o-algineq-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algineq3', 0)
        }
        if (document.getElementById('o-algineq-33').checked) {
          document.getElementById('r-algineq-33').style.color = 'red'
          document.getElementById('r-algineq-33').innerHTML = 'Incorrect!'
          document.getElementById('r-algineq-31').style.color = 'blue'
          document.getElementById('r-algineq-31').innerHTML = 'Correct!'
          
          document.getElementById('b-algineq-31').classList.add("correct")
          document.getElementById('b-algineq-32').classList.add("incorrect")
          document.getElementById('b-algineq-33').classList.add("incorrect")
          document.getElementById('b-algineq-34').classList.add("incorrect")
    
          document.getElementById('sa-algineq-3').disabled = true;
          document.getElementById('o-algineq-31').disabled = true;
          document.getElementById('o-algineq-32').disabled = true;
          document.getElementById('o-algineq-33').disabled = true;
          document.getElementById('o-algineq-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algineq3', 0)
        }
        if (document.getElementById('o-algineq-34').checked) {
          document.getElementById('r-algineq-34').style.color = 'red'
          document.getElementById('r-algineq-34').innerHTML = 'Incorrect!'
          document.getElementById('r-algineq-31').style.color = 'blue'
          document.getElementById('r-algineq-31').innerHTML = 'Correct!'
          
          document.getElementById('b-algineq-31').classList.add("correct")
          document.getElementById('b-algineq-32').classList.add("incorrect")
          document.getElementById('b-algineq-33').classList.add("incorrect")
          document.getElementById('b-algineq-34').classList.add("incorrect")
    
          document.getElementById('sa-algineq-3').disabled = true;
          document.getElementById('o-algineq-31').disabled = true;
          document.getElementById('o-algineq-32').disabled = true;
          document.getElementById('o-algineq-33').disabled = true;
          document.getElementById('o-algineq-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algineq3', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algineq-4') != null) {
      algineq4But.onclick = function() {
        if (document.getElementById('o-algineq-41').checked) {
          document.getElementById('r-algineq-41').style.color = 'red'
          document.getElementById('r-algineq-41').innerHTML = 'Incorrect!'
          document.getElementById('r-algineq-42').style.color = 'blue'
          document.getElementById('r-algineq-42').innerHTML = 'Correct!'
          
          document.getElementById('b-algineq-42').classList.add("correct")
          document.getElementById('b-algineq-41').classList.add("incorrect")
          document.getElementById('b-algineq-44').classList.add("incorrect")
          document.getElementById('b-algineq-43').classList.add("incorrect")
    
          document.getElementById('sa-algineq-4').disabled = true;
          document.getElementById('o-algineq-41').disabled = true;
          document.getElementById('o-algineq-42').disabled = true;
          document.getElementById('o-algineq-43').disabled = true;
          document.getElementById('o-algineq-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algineq4', 0)
        }
        if (document.getElementById('o-algineq-42').checked) {
          document.getElementById('r-algineq-42').style.color = 'blue'
          document.getElementById('r-algineq-42').innerHTML = 'Correct!'
          
          document.getElementById('b-algineq-42').classList.add("correct")
          document.getElementById('b-algineq-41').classList.add("incorrect")
          document.getElementById('b-algineq-44').classList.add("incorrect")
          document.getElementById('b-algineq-43').classList.add("incorrect")
    
          document.getElementById('sa-algineq-4').disabled = true;
          document.getElementById('o-algineq-41').disabled = true;
          document.getElementById('o-algineq-42').disabled = true;
          document.getElementById('o-algineq-43').disabled = true;
          document.getElementById('o-algineq-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algineq4', 1)
        }
        if (document.getElementById('o-algineq-43').checked) {
          document.getElementById('r-algineq-43').style.color = 'red'
          document.getElementById('r-algineq-43').innerHTML = 'Incorrect!'
          document.getElementById('r-algineq-42').style.color = 'blue'
          document.getElementById('r-algineq-42').innerHTML = 'Correct!'
          
          document.getElementById('b-algineq-42').classList.add("correct")
          document.getElementById('b-algineq-41').classList.add("incorrect")
          document.getElementById('b-algineq-44').classList.add("incorrect")
          document.getElementById('b-algineq-43').classList.add("incorrect")
    
          document.getElementById('sa-algineq-4').disabled = true;
          document.getElementById('o-algineq-41').disabled = true;
          document.getElementById('o-algineq-42').disabled = true;
          document.getElementById('o-algineq-43').disabled = true;
          document.getElementById('o-algineq-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algineq4', 0)
        }
        if (document.getElementById('o-algineq-44').checked) {
          document.getElementById('r-algineq-44').style.color = 'red'
          document.getElementById('r-algineq-44').innerHTML = 'Incorrect!'
          document.getElementById('r-algineq-42').style.color = 'blue'
          document.getElementById('r-algineq-42').innerHTML = 'Correct!'
          
          document.getElementById('b-algineq-42').classList.add("correct")
          document.getElementById('b-algineq-41').classList.add("incorrect")
          document.getElementById('b-algineq-44').classList.add("incorrect")
          document.getElementById('b-algineq-43').classList.add("incorrect")
    
          document.getElementById('sa-algineq-4').disabled = true;
          document.getElementById('o-algineq-41').disabled = true;
          document.getElementById('o-algineq-42').disabled = true;
          document.getElementById('o-algineq-43').disabled = true;
          document.getElementById('o-algineq-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algineq4', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algineq-5') != null) {
      algineq5But.onclick = function() {
        if (document.getElementById('o-algineq-51').checked) {
          document.getElementById('r-algineq-51').style.color = 'red'
          document.getElementById('r-algineq-51').innerHTML = 'Incorrect!'
          document.getElementById('r-algineq-54').style.color = 'blue'
          document.getElementById('r-algineq-54').innerHTML = 'Correct!'
          
          document.getElementById('b-algineq-54').classList.add("correct")
          document.getElementById('b-algineq-51').classList.add("incorrect")
          document.getElementById('b-algineq-52').classList.add("incorrect")
          document.getElementById('b-algineq-53').classList.add("incorrect")
    
          document.getElementById('sa-algineq-5').disabled = true;
          document.getElementById('o-algineq-51').disabled = true;
          document.getElementById('o-algineq-52').disabled = true;
          document.getElementById('o-algineq-53').disabled = true;
          document.getElementById('o-algineq-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algineq5', 0)
        }
        if (document.getElementById('o-algineq-52').checked) {
          document.getElementById('r-algineq-52').style.color = 'red'
          document.getElementById('r-algineq-52').innerHTML = 'Incorrect!'
          document.getElementById('r-algineq-54').style.color = 'blue'
          document.getElementById('r-algineq-54').innerHTML = 'Correct!'
          
          document.getElementById('b-algineq-54').classList.add("correct")
          document.getElementById('b-algineq-51').classList.add("incorrect")
          document.getElementById('b-algineq-52').classList.add("incorrect")
          document.getElementById('b-algineq-53').classList.add("incorrect")
    
          document.getElementById('sa-algineq-5').disabled = true;
          document.getElementById('o-algineq-51').disabled = true;
          document.getElementById('o-algineq-52').disabled = true;
          document.getElementById('o-algineq-53').disabled = true;
          document.getElementById('o-algineq-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algineq5', 0)
        }
        if (document.getElementById('o-algineq-53').checked) {
          document.getElementById('r-algineq-53').style.color = 'red'
          document.getElementById('r-algineq-53').innerHTML = 'Incorrect!'
          document.getElementById('r-algineq-54').style.color = 'blue'
          document.getElementById('r-algineq-54').innerHTML = 'Correct!'
          
          document.getElementById('b-algineq-54').classList.add("correct")
          document.getElementById('b-algineq-51').classList.add("incorrect")
          document.getElementById('b-algineq-52').classList.add("incorrect")
          document.getElementById('b-algineq-53').classList.add("incorrect")
    
          document.getElementById('sa-algineq-5').disabled = true;
          document.getElementById('o-algineq-51').disabled = true;
          document.getElementById('o-algineq-52').disabled = true;
          document.getElementById('o-algineq-53').disabled = true;
          document.getElementById('o-algineq-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algineq5', 0)
        }
        if (document.getElementById('o-algineq-54').checked) {
          document.getElementById('r-algineq-54').style.color = 'blue'
          document.getElementById('r-algineq-54').innerHTML = 'Correct!'
          
          document.getElementById('b-algineq-54').classList.add("correct")
          document.getElementById('b-algineq-51').classList.add("incorrect")
          document.getElementById('b-algineq-52').classList.add("incorrect")
          document.getElementById('b-algineq-53').classList.add("incorrect")
    
          document.getElementById('sa-algineq-5').disabled = true;
          document.getElementById('o-algineq-51').disabled = true;
          document.getElementById('o-algineq-52').disabled = true;
          document.getElementById('o-algineq-53').disabled = true;
          document.getElementById('o-algineq-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algineq5', 1)
        }
      }
    }
        
         
      if (document.getElementById('sa-algineq-6') != null) {
      algineq6But.onclick = function() {
        if (document.getElementById('o-algineq-61').checked) {
          document.getElementById('r-algineq-61').style.color = 'red'
          document.getElementById('r-algineq-61').innerHTML = 'Incorrect!'
          document.getElementById('r-algineq-63').style.color = 'blue'
          document.getElementById('r-algineq-63').innerHTML = 'Correct!'
          
          document.getElementById('b-algineq-63').classList.add("correct")
          document.getElementById('b-algineq-61').classList.add("incorrect")
          document.getElementById('b-algineq-62').classList.add("incorrect")
          document.getElementById('b-algineq-64').classList.add("incorrect")
    
          document.getElementById('sa-algineq-6').disabled = true;
          document.getElementById('o-algineq-61').disabled = true;
          document.getElementById('o-algineq-62').disabled = true;
          document.getElementById('o-algineq-63').disabled = true;
          document.getElementById('o-algineq-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algineq6', 0)
        }
        if (document.getElementById('o-algineq-62').checked) {
          document.getElementById('r-algineq-62').style.color = 'red'
          document.getElementById('r-algineq-62').innerHTML = 'Incorrect!'
          document.getElementById('r-algineq-63').style.color = 'blue'
          document.getElementById('r-algineq-63').innerHTML = 'Correct!'
          
          document.getElementById('b-algineq-63').classList.add("correct")
          document.getElementById('b-algineq-61').classList.add("incorrect")
          document.getElementById('b-algineq-62').classList.add("incorrect")
          document.getElementById('b-algineq-64').classList.add("incorrect")
    
          document.getElementById('sa-algineq-6').disabled = true;
          document.getElementById('o-algineq-61').disabled = true;
          document.getElementById('o-algineq-62').disabled = true;
          document.getElementById('o-algineq-63').disabled = true;
          document.getElementById('o-algineq-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algineq6', 0)
        }
        if (document.getElementById('o-algineq-63').checked) {
          document.getElementById('r-algineq-63').style.color = 'blue'
          document.getElementById('r-algineq-63').innerHTML = 'Correct!'
          
          document.getElementById('b-algineq-63').classList.add("correct")
          document.getElementById('b-algineq-61').classList.add("incorrect")
          document.getElementById('b-algineq-62').classList.add("incorrect")
          document.getElementById('b-algineq-64').classList.add("incorrect")
    
          document.getElementById('sa-algineq-6').disabled = true;
          document.getElementById('o-algineq-61').disabled = true;
          document.getElementById('o-algineq-62').disabled = true;
          document.getElementById('o-algineq-63').disabled = true;
          document.getElementById('o-algineq-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algineq6', 1)
        }
        if (document.getElementById('o-algineq-64').checked) {
          document.getElementById('r-algineq-64').style.color = 'red'
          document.getElementById('r-algineq-64').innerHTML = 'Incorrect!'
          document.getElementById('r-algineq-63').style.color = 'blue'
          document.getElementById('r-algineq-63').innerHTML = 'Correct!'
          
          document.getElementById('b-algineq-63').classList.add("correct")
          document.getElementById('b-algineq-61').classList.add("incorrect")
          document.getElementById('b-algineq-62').classList.add("incorrect")
          document.getElementById('b-algineq-64').classList.add("incorrect")
    
          document.getElementById('sa-algineq-6').disabled = true;
          document.getElementById('o-algineq-61').disabled = true;
          document.getElementById('o-algineq-62').disabled = true;
          document.getElementById('o-algineq-63').disabled = true;
          document.getElementById('o-algineq-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algineq6', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algineq-7') != null) {
      algineq7But.onclick = function() {
        if (document.getElementById('o-algineq-71').checked) {
          document.getElementById('r-algineq-71').style.color = 'red'
          document.getElementById('r-algineq-71').innerHTML = 'Incorrect!'
          document.getElementById('r-algineq-74').style.color = 'blue'
          document.getElementById('r-algineq-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algineq-74').classList.add("correct")
          document.getElementById('b-algineq-71').classList.add("incorrect")
          document.getElementById('b-algineq-72').classList.add("incorrect")
          document.getElementById('b-algineq-73').classList.add("incorrect")
    
          document.getElementById('sa-algineq-7').disabled = true;
          document.getElementById('o-algineq-71').disabled = true;
          document.getElementById('o-algineq-72').disabled = true;
          document.getElementById('o-algineq-73').disabled = true;
          document.getElementById('o-algineq-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algineq7', 0)
        }
        if (document.getElementById('o-algineq-72').checked) {
          document.getElementById('r-algineq-72').style.color = 'red'
          document.getElementById('r-algineq-72').innerHTML = 'Incorrect!'
          document.getElementById('r-algineq-74').style.color = 'blue'
          document.getElementById('r-algineq-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algineq-74').classList.add("correct")
          document.getElementById('b-algineq-71').classList.add("incorrect")
          document.getElementById('b-algineq-72').classList.add("incorrect")
          document.getElementById('b-algineq-73').classList.add("incorrect")
    
          document.getElementById('sa-algineq-7').disabled = true;
          document.getElementById('o-algineq-71').disabled = true;
          document.getElementById('o-algineq-72').disabled = true;
          document.getElementById('o-algineq-73').disabled = true;
          document.getElementById('o-algineq-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algineq7', 0)
        }
        if (document.getElementById('o-algineq-73').checked) {
          document.getElementById('r-algineq-73').style.color = 'red'
          document.getElementById('r-algineq-73').innerHTML = 'Incorrect!'
          document.getElementById('r-algineq-74').style.color = 'blue'
          document.getElementById('r-algineq-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algineq-74').classList.add("correct")
          document.getElementById('b-algineq-71').classList.add("incorrect")
          document.getElementById('b-algineq-72').classList.add("incorrect")
          document.getElementById('b-algineq-73').classList.add("incorrect")
    
          document.getElementById('sa-algineq-7').disabled = true;
          document.getElementById('o-algineq-71').disabled = true;
          document.getElementById('o-algineq-72').disabled = true;
          document.getElementById('o-algineq-73').disabled = true;
          document.getElementById('o-algineq-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algineq7', 0)
        }
        if (document.getElementById('o-algineq-74').checked) {
          document.getElementById('r-algineq-74').style.color = 'blue'
          document.getElementById('r-algineq-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algineq-74').classList.add("correct")
          document.getElementById('b-algineq-71').classList.add("incorrect")
          document.getElementById('b-algineq-72').classList.add("incorrect")
          document.getElementById('b-algineq-73').classList.add("incorrect")
    
          document.getElementById('sa-algineq-7').disabled = true;
          document.getElementById('o-algineq-71').disabled = true;
          document.getElementById('o-algineq-72').disabled = true;
          document.getElementById('o-algineq-73').disabled = true;
          document.getElementById('o-algineq-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algineq7', 1)
        }
      }
    }
    
    
    if (document.getElementById('sa-algineq-8') != null) {
      algineq8But.onclick = function() {
        if (document.getElementById('o-algineq-81').checked) {
          document.getElementById('r-algineq-81').style.color = 'red'
          document.getElementById('r-algineq-81').innerHTML = 'Incorrect!'
          document.getElementById('r-algineq-82').style.color = 'blue'
          document.getElementById('r-algineq-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algineq-82').classList.add("correct")
          document.getElementById('b-algineq-81').classList.add("incorrect")
          document.getElementById('b-algineq-83').classList.add("incorrect")
          document.getElementById('b-algineq-84').classList.add("incorrect")
    
          document.getElementById('sa-algineq-8').disabled = true;
          document.getElementById('o-algineq-81').disabled = true;
          document.getElementById('o-algineq-82').disabled = true;
          document.getElementById('o-algineq-83').disabled = true;
          document.getElementById('o-algineq-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algineq8', 0)
        }
        if (document.getElementById('o-algineq-82').checked) {
          document.getElementById('r-algineq-82').style.color = 'blue'
          document.getElementById('r-algineq-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algineq-82').classList.add("correct")
          document.getElementById('b-algineq-81').classList.add("incorrect")
          document.getElementById('b-algineq-83').classList.add("incorrect")
          document.getElementById('b-algineq-84').classList.add("incorrect")
    
          document.getElementById('sa-algineq-8').disabled = true;
          document.getElementById('o-algineq-81').disabled = true;
          document.getElementById('o-algineq-82').disabled = true;
          document.getElementById('o-algineq-83').disabled = true;
          document.getElementById('o-algineq-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algineq8', 1)
        }
        if (document.getElementById('o-algineq-83').checked) {
          document.getElementById('r-algineq-83').style.color = 'red'
          document.getElementById('r-algineq-83').innerHTML = 'Incorrect!'
          document.getElementById('r-algineq-82').style.color = 'blue'
          document.getElementById('r-algineq-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algineq-82').classList.add("correct")
          document.getElementById('b-algineq-81').classList.add("incorrect")
          document.getElementById('b-algineq-83').classList.add("incorrect")
          document.getElementById('b-algineq-84').classList.add("incorrect")
    
          document.getElementById('sa-algineq-8').disabled = true;
          document.getElementById('o-algineq-81').disabled = true;
          document.getElementById('o-algineq-82').disabled = true;
          document.getElementById('o-algineq-83').disabled = true;
          document.getElementById('o-algineq-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algineq8', 0)
        }
        if (document.getElementById('o-algineq-84').checked) {
          document.getElementById('r-algineq-84').style.color = 'red'
          document.getElementById('r-algineq-84').innerHTML = 'Incorrect!'
          document.getElementById('r-algineq-82').style.color = 'blue'
          document.getElementById('r-algineq-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algineq-82').classList.add("correct")
          document.getElementById('b-algineq-81').classList.add("incorrect")
          document.getElementById('b-algineq-83').classList.add("incorrect")
          document.getElementById('b-algineq-84').classList.add("incorrect")
    
          document.getElementById('sa-algineq-8').disabled = true;
          document.getElementById('o-algineq-81').disabled = true;
          document.getElementById('o-algineq-82').disabled = true;
          document.getElementById('o-algineq-83').disabled = true;
          document.getElementById('o-algineq-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algineq8', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-algineq-9') != null) {
      algineq9But.onclick = function() {
        if (document.getElementById('o-algineq-91').checked) {
          document.getElementById('r-algineq-91').style.color = 'red'
          document.getElementById('r-algineq-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algineq-93').style.color = 'blue'
          document.getElementById('r-algineq-93').innerHTML = 'Correct!'
          
          document.getElementById('b-algineq-93').classList.add("correct")
          document.getElementById('b-algineq-91').classList.add("incorrect")
          document.getElementById('b-algineq-92').classList.add("incorrect")
          document.getElementById('b-algineq-94').classList.add("incorrect")
    
          document.getElementById('sa-algineq-9').disabled = true;
          document.getElementById('o-algineq-91').disabled = true;
          document.getElementById('o-algineq-92').disabled = true;
          document.getElementById('o-algineq-93').disabled = true;
          document.getElementById('o-algineq-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algineq9', 0)
        }
        if (document.getElementById('o-algineq-92').checked) {
          document.getElementById('r-algineq-92').style.color = 'red'
          document.getElementById('r-algineq-92').innerHTML = 'Incorrect!'
          document.getElementById('r-algineq-93').style.color = 'blue'
          document.getElementById('r-algineq-93').innerHTML = 'Correct!'
          
          document.getElementById('b-algineq-93').classList.add("correct")
          document.getElementById('b-algineq-91').classList.add("incorrect")
          document.getElementById('b-algineq-92').classList.add("incorrect")
          document.getElementById('b-algineq-94').classList.add("incorrect")
    
          document.getElementById('sa-algineq-9').disabled = true;
          document.getElementById('o-algineq-91').disabled = true;
          document.getElementById('o-algineq-92').disabled = true;
          document.getElementById('o-algineq-93').disabled = true;
          document.getElementById('o-algineq-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algineq9', 0)
        }
        if (document.getElementById('o-algineq-93').checked) {
          document.getElementById('r-algineq-93').style.color = 'blue'
          document.getElementById('r-algineq-93').innerHTML = 'Correct!'
          
          document.getElementById('b-algineq-93').classList.add("correct")
          document.getElementById('b-algineq-91').classList.add("incorrect")
          document.getElementById('b-algineq-92').classList.add("incorrect")
          document.getElementById('b-algineq-94').classList.add("incorrect")
    
          document.getElementById('sa-algineq-9').disabled = true;
          document.getElementById('o-algineq-91').disabled = true;
          document.getElementById('o-algineq-92').disabled = true;
          document.getElementById('o-algineq-93').disabled = true;
          document.getElementById('o-algineq-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algineq9', 1)
        }
        if (document.getElementById('o-algineq-94').checked) {
          document.getElementById('r-algineq-94').style.color = 'red'
          document.getElementById('r-algineq-94').innerHTML = 'Incorrect!'
          document.getElementById('r-algineq-93').style.color = 'blue'
          document.getElementById('r-algineq-93').innerHTML = 'Correct!'
          
          document.getElementById('b-algineq-93').classList.add("correct")
          document.getElementById('b-algineq-91').classList.add("incorrect")
          document.getElementById('b-algineq-92').classList.add("incorrect")
          document.getElementById('b-algineq-94').classList.add("incorrect")
    
          document.getElementById('sa-algineq-9').disabled = true;
          document.getElementById('o-algineq-91').disabled = true;
          document.getElementById('o-algineq-92').disabled = true;
          document.getElementById('o-algineq-93').disabled = true;
          document.getElementById('o-algineq-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algineq9', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algineq-10') != null) {
      algineq10But.onclick = function() {
        if (document.getElementById('o-algineq-101').checked) {
          document.getElementById('r-algineq-101').style.color = 'red'
          document.getElementById('r-algineq-101').innerHTML = 'Incorrect!'
          document.getElementById('r-algineq-102').style.color = 'blue'
          document.getElementById('r-algineq-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algineq-102').classList.add("correct")
          document.getElementById('b-algineq-101').classList.add("incorrect")
          document.getElementById('b-algineq-103').classList.add("incorrect")
          document.getElementById('b-algineq-104').classList.add("incorrect")
    
          document.getElementById('sa-algineq-10').disabled = true;
          document.getElementById('o-algineq-101').disabled = true;
          document.getElementById('o-algineq-102').disabled = true;
          document.getElementById('o-algineq-103').disabled = true;
          document.getElementById('o-algineq-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algineq10', 0)
        }
        if (document.getElementById('o-algineq-102').checked) {
          document.getElementById('r-algineq-102').style.color = 'blue'
          document.getElementById('r-algineq-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algineq-102').classList.add("correct")
          document.getElementById('b-algineq-101').classList.add("incorrect")
          document.getElementById('b-algineq-103').classList.add("incorrect")
          document.getElementById('b-algineq-104').classList.add("incorrect")
    
          document.getElementById('sa-algineq-10').disabled = true;
          document.getElementById('o-algineq-101').disabled = true;
          document.getElementById('o-algineq-102').disabled = true;
          document.getElementById('o-algineq-103').disabled = true;
          document.getElementById('o-algineq-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algineq10', 1)
        }
        if (document.getElementById('o-algineq-103').checked) {
          document.getElementById('r-algineq-103').style.color = 'red'
          document.getElementById('r-algineq-103').innerHTML = 'Incorrect!'
          document.getElementById('r-algineq-102').style.color = 'blue'
          document.getElementById('r-algineq-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algineq-102').classList.add("correct")
          document.getElementById('b-algineq-101').classList.add("incorrect")
          document.getElementById('b-algineq-103').classList.add("incorrect")
          document.getElementById('b-algineq-104').classList.add("incorrect")
    
          document.getElementById('sa-algineq-10').disabled = true;
          document.getElementById('o-algineq-101').disabled = true;
          document.getElementById('o-algineq-102').disabled = true;
          document.getElementById('o-algineq-103').disabled = true;
          document.getElementById('o-algineq-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algineq10', 0)
        }
        if (document.getElementById('o-algineq-104').checked) {
          document.getElementById('r-algineq-104').style.color = 'red'
          document.getElementById('r-algineq-104').innerHTML = 'Incorrect!'
          document.getElementById('r-algineq-102').style.color = 'blue'
          document.getElementById('r-algineq-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algineq-102').classList.add("correct")
          document.getElementById('b-algineq-101').classList.add("incorrect")
          document.getElementById('b-algineq-103').classList.add("incorrect")
          document.getElementById('b-algineq-104').classList.add("incorrect")
    
          document.getElementById('sa-algineq-10').disabled = true;
          document.getElementById('o-algineq-101').disabled = true;
          document.getElementById('o-algineq-102').disabled = true;
          document.getElementById('o-algineq-103').disabled = true;
          document.getElementById('o-algineq-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algineq10', 0)
        }
      }
    }
    