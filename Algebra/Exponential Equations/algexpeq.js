
  let algexpeq1But = document.getElementById('sa-algexpeq-1');
  let algexpeq2But = document.getElementById('sa-algexpeq-2');
  let algexpeq3But = document.getElementById('sa-algexpeq-3');
  let algexpeq4But = document.getElementById('sa-algexpeq-4');
  let algexpeq5But = document.getElementById('sa-algexpeq-5');
  let algexpeq6But = document.getElementById('sa-algexpeq-6');
  let algexpeq7But = document.getElementById('sa-algexpeq-7');
  let algexpeq8But = document.getElementById('sa-algexpeq-8');
  let algexpeq9But = document.getElementById('sa-algexpeq-9');
  let algexpeq10But = document.getElementById('sa-algexpeq-10');


  showExplanation1 = function() {
    document.getElementById('e-algexpeq-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-algexpeq-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-algexpeq-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-algexpeq-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-algexpeq-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-algexpeq-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-algexpeq-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-algexpeq-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-algexpeq-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-algexpeq-10').style.display = 'block';
     } 



     if (document.getElementById('sa-algexpeq-1') != null) {
      algexpeq1But.onclick = function () {
        if (document.getElementById('o-algexpeq-11').checked) {
          document.getElementById('r-algexpeq-11').style.color = 'red'
          document.getElementById('r-algexpeq-11').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpeq-13').style.color = 'blue'
          document.getElementById('r-algexpeq-13').innerHTML = 'Correct!'
    
          document.getElementById('b-algexpeq-13').classList.add("correct")
          document.getElementById('b-algexpeq-11').classList.add("incorrect")
          document.getElementById('b-algexpeq-12').classList.add("incorrect")
          document.getElementById('b-algexpeq-14').classList.add("incorrect")
    
          document.getElementById('sa-algexpeq-1').disabled = true;
          document.getElementById('o-algexpeq-11').disabled = true;
          document.getElementById('o-algexpeq-12').disabled = true;
          document.getElementById('o-algexpeq-13').disabled = true;
          document.getElementById('o-algexpeq-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algexpeq1', 0)
        }
    
        if (document.getElementById('o-algexpeq-12').checked) {
         
          document.getElementById('r-algexpeq-12').style.color = 'red'
          document.getElementById('r-algexpeq-12').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpeq-13').style.color = 'blue'
          document.getElementById('r-algexpeq-13').innerHTML = 'Correct!'
    
          document.getElementById('b-algexpeq-13').classList.add("correct")
          document.getElementById('b-algexpeq-12').classList.add("incorrect")
          document.getElementById('b-algexpeq-11').classList.add("incorrect")
          document.getElementById('b-algexpeq-14').classList.add("incorrect")
    
          document.getElementById('sa-algexpeq-1').disabled = true;
          document.getElementById('o-algexpeq-11').disabled = true;
          document.getElementById('o-algexpeq-12').disabled = true;
          document.getElementById('o-algexpeq-13').disabled = true;
          document.getElementById('o-algexpeq-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algexpeq1', 0)
        }
        if (document.getElementById('o-algexpeq-13').checked) {
          document.getElementById('r-algexpeq-13').style.color = 'blue'
          document.getElementById('r-algexpeq-13').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpeq-13').classList.add("correct")
          document.getElementById('b-algexpeq-12').classList.add("incorrect")
          document.getElementById('b-algexpeq-11').classList.add("incorrect")
          document.getElementById('b-algexpeq-14').classList.add("incorrect")
    
          document.getElementById('sa-algexpeq-1').disabled = true;
          document.getElementById('o-algexpeq-11').disabled = true;
          document.getElementById('o-algexpeq-12').disabled = true;
          document.getElementById('o-algexpeq-13').disabled = true;
          document.getElementById('o-algexpeq-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algexpeq1', 1)
        }
        if (document.getElementById('o-algexpeq-14').checked) {
          document.getElementById('r-algexpeq-14').style.color = 'red'
          document.getElementById('r-algexpeq-14').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpeq-13').style.color = 'blue'
          document.getElementById('r-algexpeq-13').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpeq-13').classList.add("correct")
          document.getElementById('b-algexpeq-12').classList.add("incorrect")
          document.getElementById('b-algexpeq-11').classList.add("incorrect")
          document.getElementById('b-algexpeq-14').classList.add("incorrect")
    
          document.getElementById('sa-algexpeq-1').disabled = true;
          document.getElementById('o-algexpeq-11').disabled = true;
          document.getElementById('o-algexpeq-12').disabled = true;
          document.getElementById('o-algexpeq-13').disabled = true;
          document.getElementById('o-algexpeq-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algexpeq1', 0)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-algexpeq-2') != null) {
      algexpeq2But.onclick = function() {
        if (document.getElementById('o-algexpeq-21').checked) {
          document.getElementById('r-algexpeq-21').style.color = 'red'
          document.getElementById('r-algexpeq-21').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpeq-23').style.color = 'blue'
          document.getElementById('r-algexpeq-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpeq-23').classList.add("correct")
          document.getElementById('b-algexpeq-21').classList.add("incorrect")
          document.getElementById('b-algexpeq-22').classList.add("incorrect")
          document.getElementById('b-algexpeq-24').classList.add("incorrect")
    
          document.getElementById('sa-algexpeq-2').disabled = true;
          document.getElementById('o-algexpeq-21').disabled = true;
          document.getElementById('o-algexpeq-22').disabled = true;
          document.getElementById('o-algexpeq-23').disabled = true;
          document.getElementById('o-algexpeq-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algexpeq2', 0)
        }
        if (document.getElementById('o-algexpeq-22').checked) {
          document.getElementById('r-algexpeq-22').style.color = 'red'
          document.getElementById('r-algexpeq-22').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpeq-23').style.color = 'blue'
          document.getElementById('r-algexpeq-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpeq-23').classList.add("correct")
          document.getElementById('b-algexpeq-21').classList.add("incorrect")
          document.getElementById('b-algexpeq-22').classList.add("incorrect")
          document.getElementById('b-algexpeq-24').classList.add("incorrect")
    
          document.getElementById('sa-algexpeq-2').disabled = true;
          document.getElementById('o-algexpeq-21').disabled = true;
          document.getElementById('o-algexpeq-22').disabled = true;
          document.getElementById('o-algexpeq-23').disabled = true;
          document.getElementById('o-algexpeq-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algexpeq2', 0)
        }
        if (document.getElementById('o-algexpeq-23').checked) {
          document.getElementById('r-algexpeq-23').style.color = 'blue'
          document.getElementById('r-algexpeq-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpeq-23').classList.add("correct")
          document.getElementById('b-algexpeq-21').classList.add("incorrect")
          document.getElementById('b-algexpeq-22').classList.add("incorrect")
          document.getElementById('b-algexpeq-24').classList.add("incorrect")
    
          document.getElementById('sa-algexpeq-2').disabled = true;
          document.getElementById('o-algexpeq-21').disabled = true;
          document.getElementById('o-algexpeq-22').disabled = true;
          document.getElementById('o-algexpeq-23').disabled = true;
          document.getElementById('o-algexpeq-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algexpeq2', 1)
        }
        if (document.getElementById('o-algexpeq-24').checked) {
          document.getElementById('r-algexpeq-24').style.color = 'red'
          document.getElementById('r-algexpeq-24').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpeq-23').style.color = 'blue'
          document.getElementById('r-algexpeq-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpeq-23').classList.add("correct")
          document.getElementById('b-algexpeq-21').classList.add("incorrect")
          document.getElementById('b-algexpeq-22').classList.add("incorrect")
          document.getElementById('b-algexpeq-24').classList.add("incorrect")
    
          document.getElementById('sa-algexpeq-2').disabled = true;
          document.getElementById('o-algexpeq-21').disabled = true;
          document.getElementById('o-algexpeq-22').disabled = true;
          document.getElementById('o-algexpeq-23').disabled = true;
          document.getElementById('o-algexpeq-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algexpeq2', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algexpeq-3') != null) {
      algexpeq3But.onclick = function() {
        if (document.getElementById('o-algexpeq-31').checked) {
          document.getElementById('r-algexpeq-31').style.color = 'red'
          document.getElementById('r-algexpeq-31').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpeq-33').style.color = 'blue'
          document.getElementById('r-algexpeq-33').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpeq-33').classList.add("correct")
          document.getElementById('b-algexpeq-31').classList.add("incorrect")
          document.getElementById('b-algexpeq-32').classList.add("incorrect")
          document.getElementById('b-algexpeq-34').classList.add("incorrect")
    
          document.getElementById('sa-algexpeq-3').disabled = true;
          document.getElementById('o-algexpeq-31').disabled = true;
          document.getElementById('o-algexpeq-32').disabled = true;
          document.getElementById('o-algexpeq-33').disabled = true;
          document.getElementById('o-algexpeq-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algexpeq3', 0)
        }
        if (document.getElementById('o-algexpeq-32').checked) {
          document.getElementById('r-algexpeq-32').style.color = 'red'
          document.getElementById('r-algexpeq-32').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpeq-33').style.color = 'blue'
          document.getElementById('r-algexpeq-33').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpeq-33').classList.add("correct")
          document.getElementById('b-algexpeq-31').classList.add("incorrect")
          document.getElementById('b-algexpeq-32').classList.add("incorrect")
          document.getElementById('b-algexpeq-34').classList.add("incorrect")
    
          document.getElementById('sa-algexpeq-3').disabled = true;
          document.getElementById('o-algexpeq-31').disabled = true;
          document.getElementById('o-algexpeq-32').disabled = true;
          document.getElementById('o-algexpeq-33').disabled = true;
          document.getElementById('o-algexpeq-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algexpeq3', 0)
        }
        if (document.getElementById('o-algexpeq-33').checked) {
          document.getElementById('r-algexpeq-33').style.color = 'blue'
          document.getElementById('r-algexpeq-33').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpeq-33').classList.add("correct")
          document.getElementById('b-algexpeq-31').classList.add("incorrect")
          document.getElementById('b-algexpeq-32').classList.add("incorrect")
          document.getElementById('b-algexpeq-34').classList.add("incorrect")
    
          document.getElementById('sa-algexpeq-3').disabled = true;
          document.getElementById('o-algexpeq-31').disabled = true;
          document.getElementById('o-algexpeq-32').disabled = true;
          document.getElementById('o-algexpeq-33').disabled = true;
          document.getElementById('o-algexpeq-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algexpeq3', 1)
        }
        if (document.getElementById('o-algexpeq-34').checked) {
          document.getElementById('r-algexpeq-34').style.color = 'red'
          document.getElementById('r-algexpeq-34').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpeq-33').style.color = 'blue'
          document.getElementById('r-algexpeq-33').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpeq-33').classList.add("correct")
          document.getElementById('b-algexpeq-31').classList.add("incorrect")
          document.getElementById('b-algexpeq-32').classList.add("incorrect")
          document.getElementById('b-algexpeq-34').classList.add("incorrect")
    
          document.getElementById('sa-algexpeq-3').disabled = true;
          document.getElementById('o-algexpeq-31').disabled = true;
          document.getElementById('o-algexpeq-32').disabled = true;
          document.getElementById('o-algexpeq-33').disabled = true;
          document.getElementById('o-algexpeq-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algexpeq3', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algexpeq-4') != null) {
      algexpeq4But.onclick = function() {
        if (document.getElementById('o-algexpeq-41').checked) {
          document.getElementById('r-algexpeq-41').style.color = 'red'
          document.getElementById('r-algexpeq-41').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpeq-44').style.color = 'blue'
          document.getElementById('r-algexpeq-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpeq-44').classList.add("correct")
          document.getElementById('b-algexpeq-41').classList.add("incorrect")
          document.getElementById('b-algexpeq-42').classList.add("incorrect")
          document.getElementById('b-algexpeq-43').classList.add("incorrect")
    
          document.getElementById('sa-algexpeq-4').disabled = true;
          document.getElementById('o-algexpeq-41').disabled = true;
          document.getElementById('o-algexpeq-42').disabled = true;
          document.getElementById('o-algexpeq-43').disabled = true;
          document.getElementById('o-algexpeq-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algexpeq4', 0)
        }
        if (document.getElementById('o-algexpeq-42').checked) {
          document.getElementById('r-algexpeq-42').style.color = 'red'
          document.getElementById('r-algexpeq-42').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpeq-44').style.color = 'blue'
          document.getElementById('r-algexpeq-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpeq-44').classList.add("correct")
          document.getElementById('b-algexpeq-41').classList.add("incorrect")
          document.getElementById('b-algexpeq-42').classList.add("incorrect")
          document.getElementById('b-algexpeq-43').classList.add("incorrect")
    
          document.getElementById('sa-algexpeq-4').disabled = true;
          document.getElementById('o-algexpeq-41').disabled = true;
          document.getElementById('o-algexpeq-42').disabled = true;
          document.getElementById('o-algexpeq-43').disabled = true;
          document.getElementById('o-algexpeq-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algexpeq4', 0)
        }
        if (document.getElementById('o-algexpeq-43').checked) {
          document.getElementById('r-algexpeq-43').style.color = 'red'
          document.getElementById('r-algexpeq-43').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpeq-44').style.color = 'blue'
          document.getElementById('r-algexpeq-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpeq-44').classList.add("correct")
          document.getElementById('b-algexpeq-41').classList.add("incorrect")
          document.getElementById('b-algexpeq-42').classList.add("incorrect")
          document.getElementById('b-algexpeq-43').classList.add("incorrect")
    
          document.getElementById('sa-algexpeq-4').disabled = true;
          document.getElementById('o-algexpeq-41').disabled = true;
          document.getElementById('o-algexpeq-42').disabled = true;
          document.getElementById('o-algexpeq-43').disabled = true;
          document.getElementById('o-algexpeq-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algexpeq4', 0)
        }
        if (document.getElementById('o-algexpeq-44').checked) {
          document.getElementById('r-algexpeq-44').style.color = 'blue'
          document.getElementById('r-algexpeq-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpeq-44').classList.add("correct")
          document.getElementById('b-algexpeq-41').classList.add("incorrect")
          document.getElementById('b-algexpeq-42').classList.add("incorrect")
          document.getElementById('b-algexpeq-43').classList.add("incorrect")
    
          document.getElementById('sa-algexpeq-4').disabled = true;
          document.getElementById('o-algexpeq-41').disabled = true;
          document.getElementById('o-algexpeq-42').disabled = true;
          document.getElementById('o-algexpeq-43').disabled = true;
          document.getElementById('o-algexpeq-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algexpeq4', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algexpeq-5') != null) {
      algexpeq5But.onclick = function() {
        if (document.getElementById('o-algexpeq-51').checked) {
          document.getElementById('r-algexpeq-51').style.color = 'red'
          document.getElementById('r-algexpeq-51').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpeq-52').style.color = 'blue'
          document.getElementById('r-algexpeq-52').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpeq-52').classList.add("correct")
          document.getElementById('b-algexpeq-51').classList.add("incorrect")
          document.getElementById('b-algexpeq-53').classList.add("incorrect")
          document.getElementById('b-algexpeq-54').classList.add("incorrect")
    
          document.getElementById('sa-algexpeq-5').disabled = true;
          document.getElementById('o-algexpeq-51').disabled = true;
          document.getElementById('o-algexpeq-52').disabled = true;
          document.getElementById('o-algexpeq-53').disabled = true;
          document.getElementById('o-algexpeq-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algexpeq5', 0)
        }
        if (document.getElementById('o-algexpeq-52').checked) {
          document.getElementById('r-algexpeq-52').style.color = 'blue'
          document.getElementById('r-algexpeq-52').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpeq-52').classList.add("correct")
          document.getElementById('b-algexpeq-51').classList.add("incorrect")
          document.getElementById('b-algexpeq-53').classList.add("incorrect")
          document.getElementById('b-algexpeq-54').classList.add("incorrect")
    
          document.getElementById('sa-algexpeq-5').disabled = true;
          document.getElementById('o-algexpeq-51').disabled = true;
          document.getElementById('o-algexpeq-52').disabled = true;
          document.getElementById('o-algexpeq-53').disabled = true;
          document.getElementById('o-algexpeq-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algexpeq5', 1)
        }
        if (document.getElementById('o-algexpeq-53').checked) {
          document.getElementById('r-algexpeq-53').style.color = 'red'
          document.getElementById('r-algexpeq-53').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpeq-52').style.color = 'blue'
          document.getElementById('r-algexpeq-52').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpeq-52').classList.add("correct")
          document.getElementById('b-algexpeq-51').classList.add("incorrect")
          document.getElementById('b-algexpeq-53').classList.add("incorrect")
          document.getElementById('b-algexpeq-54').classList.add("incorrect")
    
          document.getElementById('sa-algexpeq-5').disabled = true;
          document.getElementById('o-algexpeq-51').disabled = true;
          document.getElementById('o-algexpeq-52').disabled = true;
          document.getElementById('o-algexpeq-53').disabled = true;
          document.getElementById('o-algexpeq-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algexpeq5', 0)
        }
        if (document.getElementById('o-algexpeq-54').checked) {
          document.getElementById('r-algexpeq-54').style.color = 'red'
          document.getElementById('r-algexpeq-54').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpeq-52').style.color = 'blue'
          document.getElementById('r-algexpeq-52').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpeq-52').classList.add("correct")
          document.getElementById('b-algexpeq-51').classList.add("incorrect")
          document.getElementById('b-algexpeq-53').classList.add("incorrect")
          document.getElementById('b-algexpeq-54').classList.add("incorrect")
    
          document.getElementById('sa-algexpeq-5').disabled = true;
          document.getElementById('o-algexpeq-51').disabled = true;
          document.getElementById('o-algexpeq-52').disabled = true;
          document.getElementById('o-algexpeq-53').disabled = true;
          document.getElementById('o-algexpeq-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algexpeq5', 0)
        }
      }
    }
        
         
      if (document.getElementById('sa-algexpeq-6') != null) {
      algexpeq6But.onclick = function() {
        if (document.getElementById('o-algexpeq-61').checked) {
          document.getElementById('r-algexpeq-61').style.color = 'red'
          document.getElementById('r-algexpeq-61').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpeq-64').style.color = 'blue'
          document.getElementById('r-algexpeq-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpeq-64').classList.add("correct")
          document.getElementById('b-algexpeq-61').classList.add("incorrect")
          document.getElementById('b-algexpeq-62').classList.add("incorrect")
          document.getElementById('b-algexpeq-63').classList.add("incorrect")
    
          document.getElementById('sa-algexpeq-6').disabled = true;
          document.getElementById('o-algexpeq-61').disabled = true;
          document.getElementById('o-algexpeq-62').disabled = true;
          document.getElementById('o-algexpeq-63').disabled = true;
          document.getElementById('o-algexpeq-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algexpeq6', 0)
        }
        if (document.getElementById('o-algexpeq-62').checked) {
          document.getElementById('r-algexpeq-62').style.color = 'red'
          document.getElementById('r-algexpeq-62').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpeq-64').style.color = 'blue'
          document.getElementById('r-algexpeq-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpeq-64').classList.add("correct")
          document.getElementById('b-algexpeq-61').classList.add("incorrect")
          document.getElementById('b-algexpeq-62').classList.add("incorrect")
          document.getElementById('b-algexpeq-63').classList.add("incorrect")
    
          document.getElementById('sa-algexpeq-6').disabled = true;
          document.getElementById('o-algexpeq-61').disabled = true;
          document.getElementById('o-algexpeq-62').disabled = true;
          document.getElementById('o-algexpeq-63').disabled = true;
          document.getElementById('o-algexpeq-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algexpeq6', 0)
        }
        if (document.getElementById('o-algexpeq-63').checked) {
          document.getElementById('r-algexpeq-63').style.color = 'red'
          document.getElementById('r-algexpeq-63').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpeq-64').style.color = 'blue'
          document.getElementById('r-algexpeq-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpeq-64').classList.add("correct")
          document.getElementById('b-algexpeq-61').classList.add("incorrect")
          document.getElementById('b-algexpeq-62').classList.add("incorrect")
          document.getElementById('b-algexpeq-63').classList.add("incorrect")
    
          document.getElementById('sa-algexpeq-6').disabled = true;
          document.getElementById('o-algexpeq-61').disabled = true;
          document.getElementById('o-algexpeq-62').disabled = true;
          document.getElementById('o-algexpeq-63').disabled = true;
          document.getElementById('o-algexpeq-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algexpeq6', 0)
        }
        if (document.getElementById('o-algexpeq-64').checked) {
          document.getElementById('r-algexpeq-64').style.color = 'blue'
          document.getElementById('r-algexpeq-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpeq-64').classList.add("correct")
          document.getElementById('b-algexpeq-61').classList.add("incorrect")
          document.getElementById('b-algexpeq-62').classList.add("incorrect")
          document.getElementById('b-algexpeq-63').classList.add("incorrect")
    
          document.getElementById('sa-algexpeq-6').disabled = true;
          document.getElementById('o-algexpeq-61').disabled = true;
          document.getElementById('o-algexpeq-62').disabled = true;
          document.getElementById('o-algexpeq-63').disabled = true;
          document.getElementById('o-algexpeq-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algexpeq6', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algexpeq-7') != null) {
      algexpeq7But.onclick = function() {
        if (document.getElementById('o-algexpeq-71').checked) {
          document.getElementById('r-algexpeq-71').style.color = 'red'
          document.getElementById('r-algexpeq-71').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpeq-74').style.color = 'blue'
          document.getElementById('r-algexpeq-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpeq-74').classList.add("correct")
          document.getElementById('b-algexpeq-71').classList.add("incorrect")
          document.getElementById('b-algexpeq-72').classList.add("incorrect")
          document.getElementById('b-algexpeq-73').classList.add("incorrect")
    
          document.getElementById('sa-algexpeq-7').disabled = true;
          document.getElementById('o-algexpeq-71').disabled = true;
          document.getElementById('o-algexpeq-72').disabled = true;
          document.getElementById('o-algexpeq-73').disabled = true;
          document.getElementById('o-algexpeq-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algexpeq7', 0)
        }
        if (document.getElementById('o-algexpeq-72').checked) {
          document.getElementById('r-algexpeq-72').style.color = 'red'
          document.getElementById('r-algexpeq-72').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpeq-74').style.color = 'blue'
          document.getElementById('r-algexpeq-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpeq-74').classList.add("correct")
          document.getElementById('b-algexpeq-71').classList.add("incorrect")
          document.getElementById('b-algexpeq-72').classList.add("incorrect")
          document.getElementById('b-algexpeq-73').classList.add("incorrect")
    
          document.getElementById('sa-algexpeq-7').disabled = true;
          document.getElementById('o-algexpeq-71').disabled = true;
          document.getElementById('o-algexpeq-72').disabled = true;
          document.getElementById('o-algexpeq-73').disabled = true;
          document.getElementById('o-algexpeq-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algexpeq7', 0)
        }
        if (document.getElementById('o-algexpeq-73').checked) {
          document.getElementById('r-algexpeq-73').style.color = 'red'
          document.getElementById('r-algexpeq-73').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpeq-74').style.color = 'blue'
          document.getElementById('r-algexpeq-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpeq-74').classList.add("correct")
          document.getElementById('b-algexpeq-71').classList.add("incorrect")
          document.getElementById('b-algexpeq-72').classList.add("incorrect")
          document.getElementById('b-algexpeq-73').classList.add("incorrect")
    
          document.getElementById('sa-algexpeq-7').disabled = true;
          document.getElementById('o-algexpeq-71').disabled = true;
          document.getElementById('o-algexpeq-72').disabled = true;
          document.getElementById('o-algexpeq-73').disabled = true;
          document.getElementById('o-algexpeq-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algexpeq7', 0)
        }
        if (document.getElementById('o-algexpeq-74').checked) {
          document.getElementById('r-algexpeq-74').style.color = 'blue'
          document.getElementById('r-algexpeq-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpeq-74').classList.add("correct")
          document.getElementById('b-algexpeq-71').classList.add("incorrect")
          document.getElementById('b-algexpeq-72').classList.add("incorrect")
          document.getElementById('b-algexpeq-73').classList.add("incorrect")
    
          document.getElementById('sa-algexpeq-7').disabled = true;
          document.getElementById('o-algexpeq-71').disabled = true;
          document.getElementById('o-algexpeq-72').disabled = true;
          document.getElementById('o-algexpeq-73').disabled = true;
          document.getElementById('o-algexpeq-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algexpeq7', 1)
        }
      }
    }
    
    
    if (document.getElementById('sa-algexpeq-8') != null) {
      algexpeq8But.onclick = function() {
        if (document.getElementById('o-algexpeq-81').checked) {
          document.getElementById('r-algexpeq-81').style.color = 'red'
          document.getElementById('r-algexpeq-81').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpeq-82').style.color = 'blue'
          document.getElementById('r-algexpeq-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpeq-82').classList.add("correct")
          document.getElementById('b-algexpeq-81').classList.add("incorrect")
          document.getElementById('b-algexpeq-83').classList.add("incorrect")
          document.getElementById('b-algexpeq-84').classList.add("incorrect")
    
          document.getElementById('sa-algexpeq-8').disabled = true;
          document.getElementById('o-algexpeq-81').disabled = true;
          document.getElementById('o-algexpeq-82').disabled = true;
          document.getElementById('o-algexpeq-83').disabled = true;
          document.getElementById('o-algexpeq-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algexpeq8', 0)
        }
        if (document.getElementById('o-algexpeq-82').checked) {
          document.getElementById('r-algexpeq-82').style.color = 'blue'
          document.getElementById('r-algexpeq-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpeq-82').classList.add("correct")
          document.getElementById('b-algexpeq-81').classList.add("incorrect")
          document.getElementById('b-algexpeq-83').classList.add("incorrect")
          document.getElementById('b-algexpeq-84').classList.add("incorrect")
    
          document.getElementById('sa-algexpeq-8').disabled = true;
          document.getElementById('o-algexpeq-81').disabled = true;
          document.getElementById('o-algexpeq-82').disabled = true;
          document.getElementById('o-algexpeq-83').disabled = true;
          document.getElementById('o-algexpeq-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algexpeq8', 1)
        }
        if (document.getElementById('o-algexpeq-83').checked) {
          document.getElementById('r-algexpeq-83').style.color = 'red'
          document.getElementById('r-algexpeq-83').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpeq-82').style.color = 'blue'
          document.getElementById('r-algexpeq-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpeq-82').classList.add("correct")
          document.getElementById('b-algexpeq-81').classList.add("incorrect")
          document.getElementById('b-algexpeq-83').classList.add("incorrect")
          document.getElementById('b-algexpeq-84').classList.add("incorrect")
    
          document.getElementById('sa-algexpeq-8').disabled = true;
          document.getElementById('o-algexpeq-81').disabled = true;
          document.getElementById('o-algexpeq-82').disabled = true;
          document.getElementById('o-algexpeq-83').disabled = true;
          document.getElementById('o-algexpeq-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algexpeq8', 0)
        }
        if (document.getElementById('o-algexpeq-84').checked) {
          document.getElementById('r-algexpeq-84').style.color = 'red'
          document.getElementById('r-algexpeq-84').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpeq-82').style.color = 'blue'
          document.getElementById('r-algexpeq-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpeq-82').classList.add("correct")
          document.getElementById('b-algexpeq-81').classList.add("incorrect")
          document.getElementById('b-algexpeq-83').classList.add("incorrect")
          document.getElementById('b-algexpeq-84').classList.add("incorrect")
    
          document.getElementById('sa-algexpeq-8').disabled = true;
          document.getElementById('o-algexpeq-81').disabled = true;
          document.getElementById('o-algexpeq-82').disabled = true;
          document.getElementById('o-algexpeq-83').disabled = true;
          document.getElementById('o-algexpeq-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algexpeq8', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-algexpeq-9') != null) {
      algexpeq9But.onclick = function() {
        if (document.getElementById('o-algexpeq-91').checked) {
          document.getElementById('r-algexpeq-91').style.color = 'red'
          document.getElementById('r-algexpeq-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpeq-94').style.color = 'blue'
          document.getElementById('r-algexpeq-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpeq-94').classList.add("correct")
          document.getElementById('b-algexpeq-91').classList.add("incorrect")
          document.getElementById('b-algexpeq-92').classList.add("incorrect")
          document.getElementById('b-algexpeq-93').classList.add("incorrect")
    
          document.getElementById('sa-algexpeq-9').disabled = true;
          document.getElementById('o-algexpeq-91').disabled = true;
          document.getElementById('o-algexpeq-92').disabled = true;
          document.getElementById('o-algexpeq-93').disabled = true;
          document.getElementById('o-algexpeq-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algexpeq9', 0)
        }
        if (document.getElementById('o-algexpeq-92').checked) {
          document.getElementById('r-algexpeq-91').style.color = 'red'
          document.getElementById('r-algexpeq-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpeq-94').style.color = 'blue'
          document.getElementById('r-algexpeq-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpeq-94').classList.add("correct")
          document.getElementById('b-algexpeq-91').classList.add("incorrect")
          document.getElementById('b-algexpeq-92').classList.add("incorrect")
          document.getElementById('b-algexpeq-93').classList.add("incorrect")
    
          document.getElementById('sa-algexpeq-9').disabled = true;
          document.getElementById('o-algexpeq-91').disabled = true;
          document.getElementById('o-algexpeq-92').disabled = true;
          document.getElementById('o-algexpeq-93').disabled = true;
          document.getElementById('o-algexpeq-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algexpeq9', 0)
        }
        if (document.getElementById('o-algexpeq-93').checked) {
          document.getElementById('r-algexpeq-91').style.color = 'red'
          document.getElementById('r-algexpeq-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpeq-94').style.color = 'blue'
          document.getElementById('r-algexpeq-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpeq-94').classList.add("correct")
          document.getElementById('b-algexpeq-91').classList.add("incorrect")
          document.getElementById('b-algexpeq-92').classList.add("incorrect")
          document.getElementById('b-algexpeq-93').classList.add("incorrect")
    
          document.getElementById('sa-algexpeq-9').disabled = true;
          document.getElementById('o-algexpeq-91').disabled = true;
          document.getElementById('o-algexpeq-92').disabled = true;
          document.getElementById('o-algexpeq-93').disabled = true;
          document.getElementById('o-algexpeq-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algexpeq9', 0)
        }
        if (document.getElementById('o-algexpeq-94').checked) {
          document.getElementById('r-algexpeq-94').style.color = 'blue'
          document.getElementById('r-algexpeq-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpeq-94').classList.add("correct")
          document.getElementById('b-algexpeq-91').classList.add("incorrect")
          document.getElementById('b-algexpeq-92').classList.add("incorrect")
          document.getElementById('b-algexpeq-93').classList.add("incorrect")
    
          document.getElementById('sa-algexpeq-9').disabled = true;
          document.getElementById('o-algexpeq-91').disabled = true;
          document.getElementById('o-algexpeq-92').disabled = true;
          document.getElementById('o-algexpeq-93').disabled = true;
          document.getElementById('o-algexpeq-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algexpeq9', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algexpeq-10') != null) {
      algexpeq10But.onclick = function() {
        if (document.getElementById('o-algexpeq-101').checked) {
          document.getElementById('r-algexpeq-101').style.color = 'red'
          document.getElementById('r-algexpeq-101').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpeq-102').style.color = 'blue'
          document.getElementById('r-algexpeq-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpeq-102').classList.add("correct")
          document.getElementById('b-algexpeq-101').classList.add("incorrect")
          document.getElementById('b-algexpeq-103').classList.add("incorrect")
          document.getElementById('b-algexpeq-104').classList.add("incorrect")
    
          document.getElementById('sa-algexpeq-10').disabled = true;
          document.getElementById('o-algexpeq-101').disabled = true;
          document.getElementById('o-algexpeq-102').disabled = true;
          document.getElementById('o-algexpeq-103').disabled = true;
          document.getElementById('o-algexpeq-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algexpeq10', 0)
        }
        if (document.getElementById('o-algexpeq-102').checked) {
          document.getElementById('r-algexpeq-102').style.color = 'blue'
          document.getElementById('r-algexpeq-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpeq-102').classList.add("correct")
          document.getElementById('b-algexpeq-101').classList.add("incorrect")
          document.getElementById('b-algexpeq-103').classList.add("incorrect")
          document.getElementById('b-algexpeq-104').classList.add("incorrect")
    
          document.getElementById('sa-algexpeq-10').disabled = true;
          document.getElementById('o-algexpeq-101').disabled = true;
          document.getElementById('o-algexpeq-102').disabled = true;
          document.getElementById('o-algexpeq-103').disabled = true;
          document.getElementById('o-algexpeq-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algexpeq10', 1)
        }
        if (document.getElementById('o-algexpeq-103').checked) {
          document.getElementById('r-algexpeq-103').style.color = 'red'
          document.getElementById('r-algexpeq-103').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpeq-102').style.color = 'blue'
          document.getElementById('r-algexpeq-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpeq-102').classList.add("correct")
          document.getElementById('b-algexpeq-101').classList.add("incorrect")
          document.getElementById('b-algexpeq-103').classList.add("incorrect")
          document.getElementById('b-algexpeq-104').classList.add("incorrect")
    
          document.getElementById('sa-algexpeq-10').disabled = true;
          document.getElementById('o-algexpeq-101').disabled = true;
          document.getElementById('o-algexpeq-102').disabled = true;
          document.getElementById('o-algexpeq-103').disabled = true;
          document.getElementById('o-algexpeq-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algexpeq10', 0)
        }
        if (document.getElementById('o-algexpeq-104').checked) {
          document.getElementById('r-algexpeq-104').style.color = 'red'
          document.getElementById('r-algexpeq-104').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpeq-102').style.color = 'blue'
          document.getElementById('r-algexpeq-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpeq-102').classList.add("correct")
          document.getElementById('b-algexpeq-101').classList.add("incorrect")
          document.getElementById('b-algexpeq-103').classList.add("incorrect")
          document.getElementById('b-algexpeq-104').classList.add("incorrect")
    
          document.getElementById('sa-algexpeq-10').disabled = true;
          document.getElementById('o-algexpeq-101').disabled = true;
          document.getElementById('o-algexpeq-102').disabled = true;
          document.getElementById('o-algexpeq-103').disabled = true;
          document.getElementById('o-algexpeq-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algexpeq10', 0)
        }
      }
    }
    