
  let algexprules1But = document.getElementById('sa-algexprules-1');
  let algexprules2But = document.getElementById('sa-algexprules-2');
  let algexprules3But = document.getElementById('sa-algexprules-3');
  let algexprules4But = document.getElementById('sa-algexprules-4');
  let algexprules5But = document.getElementById('sa-algexprules-5');
  let algexprules6But = document.getElementById('sa-algexprules-6');
  let algexprules7But = document.getElementById('sa-algexprules-7');
  let algexprules8But = document.getElementById('sa-algexprules-8');
  let algexprules9But = document.getElementById('sa-algexprules-9');
  let algexprules10But = document.getElementById('sa-algexprules-10');


  showExplanation1 = function() {
    document.getElementById('e-algexprules-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-algexprules-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-algexprules-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-algexprules-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-algexprules-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-algexprules-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-algexprules-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-algexprules-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-algexprules-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-algexprules-10').style.display = 'block';
     } 



     if (document.getElementById('sa-algexprules-1') != null) {
      algexprules1But.onclick = function () {
        if (document.getElementById('o-algexprules-11').checked) {
          document.getElementById('r-algexprules-11').style.color = 'red'
          document.getElementById('r-algexprules-11').innerHTML = 'Incorrect!'
          document.getElementById('r-algexprules-13').style.color = 'blue'
          document.getElementById('r-algexprules-13').innerHTML = 'Correct!'
    
          document.getElementById('b-algexprules-13').classList.add("correct")
          document.getElementById('b-algexprules-11').classList.add("incorrect")
          document.getElementById('b-algexprules-12').classList.add("incorrect")
          document.getElementById('b-algexprules-14').classList.add("incorrect")
    
          document.getElementById('sa-algexprules-1').disabled = true;
          document.getElementById('o-algexprules-11').disabled = true;
          document.getElementById('o-algexprules-12').disabled = true;
          document.getElementById('o-algexprules-13').disabled = true;
          document.getElementById('o-algexprules-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algexprules1', 0)
        }
    
        if (document.getElementById('o-algexprules-12').checked) {
         
          document.getElementById('r-algexprules-12').style.color = 'red'
          document.getElementById('r-algexprules-12').innerHTML = 'Incorrect!'
          document.getElementById('r-algexprules-13').style.color = 'blue'
          document.getElementById('r-algexprules-13').innerHTML = 'Correct!'
    
          document.getElementById('b-algexprules-13').classList.add("correct")
          document.getElementById('b-algexprules-11').classList.add("incorrect")
          document.getElementById('b-algexprules-12').classList.add("incorrect")
          document.getElementById('b-algexprules-14').classList.add("incorrect")
    
          document.getElementById('sa-algexprules-1').disabled = true;
          document.getElementById('o-algexprules-11').disabled = true;
          document.getElementById('o-algexprules-12').disabled = true;
          document.getElementById('o-algexprules-13').disabled = true;
          document.getElementById('o-algexprules-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algexprules1', 0)
        }
        if (document.getElementById('o-algexprules-13').checked) {
          document.getElementById('r-algexprules-13').style.color = 'blue'
          document.getElementById('r-algexprules-13').innerHTML = 'Correct!'
          
          document.getElementById('b-algexprules-13').classList.add("correct")
          document.getElementById('b-algexprules-11').classList.add("incorrect")
          document.getElementById('b-algexprules-12').classList.add("incorrect")
          document.getElementById('b-algexprules-14').classList.add("incorrect")
    
          document.getElementById('sa-algexprules-1').disabled = true;
          document.getElementById('o-algexprules-11').disabled = true;
          document.getElementById('o-algexprules-12').disabled = true;
          document.getElementById('o-algexprules-13').disabled = true;
          document.getElementById('o-algexprules-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algexprules1', 1)
        }
        if (document.getElementById('o-algexprules-14').checked) {
          document.getElementById('r-algexprules-14').style.color = 'red'
          document.getElementById('r-algexprules-14').innerHTML = 'Incorrect!'
          document.getElementById('r-algexprules-13').style.color = 'blue'
          document.getElementById('r-algexprules-13').innerHTML = 'Correct!'
          
          document.getElementById('b-algexprules-13').classList.add("correct")
          document.getElementById('b-algexprules-12').classList.add("incorrect")
          document.getElementById('b-algexprules-11').classList.add("incorrect")
          document.getElementById('b-algexprules-14').classList.add("incorrect")
    
          document.getElementById('sa-algexprules-1').disabled = true;
          document.getElementById('o-algexprules-11').disabled = true;
          document.getElementById('o-algexprules-12').disabled = true;
          document.getElementById('o-algexprules-13').disabled = true;
          document.getElementById('o-algexprules-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algexprules1', 0)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-algexprules-2') != null) {
      algexprules2But.onclick = function() {
        if (document.getElementById('o-algexprules-21').checked) {
          document.getElementById('r-algexprules-21').style.color = 'red'
          document.getElementById('r-algexprules-21').innerHTML = 'Incorrect!'
          document.getElementById('r-algexprules-24').style.color = 'blue'
          document.getElementById('r-algexprules-24').innerHTML = 'Correct!'
          
          document.getElementById('b-algexprules-24').classList.add("correct")
          document.getElementById('b-algexprules-21').classList.add("incorrect")
          document.getElementById('b-algexprules-22').classList.add("incorrect")
          document.getElementById('b-algexprules-23').classList.add("incorrect")
    
          document.getElementById('sa-algexprules-2').disabled = true;
          document.getElementById('o-algexprules-21').disabled = true;
          document.getElementById('o-algexprules-22').disabled = true;
          document.getElementById('o-algexprules-23').disabled = true;
          document.getElementById('o-algexprules-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algexprules2', 0)
        }
        if (document.getElementById('o-algexprules-22').checked) {
          document.getElementById('r-algexprules-22').style.color = 'red'
          document.getElementById('r-algexprules-22').innerHTML = 'Incorrect!'
          document.getElementById('r-algexprules-24').style.color = 'blue'
          document.getElementById('r-algexprules-24').innerHTML = 'Correct!'
          
          document.getElementById('b-algexprules-24').classList.add("correct")
          document.getElementById('b-algexprules-21').classList.add("incorrect")
          document.getElementById('b-algexprules-22').classList.add("incorrect")
          document.getElementById('b-algexprules-23').classList.add("incorrect")
    
          document.getElementById('sa-algexprules-2').disabled = true;
          document.getElementById('o-algexprules-21').disabled = true;
          document.getElementById('o-algexprules-22').disabled = true;
          document.getElementById('o-algexprules-23').disabled = true;
          document.getElementById('o-algexprules-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algexprules2', 0)
        }
        if (document.getElementById('o-algexprules-23').checked) {
          document.getElementById('r-algexprules-23').style.color = 'red'
          document.getElementById('r-algexprules-23').innerHTML = 'Incorrect!'
          document.getElementById('r-algexprules-24').style.color = 'blue'
          document.getElementById('r-algexprules-24').innerHTML = 'Correct!'
          
          document.getElementById('b-algexprules-24').classList.add("correct")
          document.getElementById('b-algexprules-21').classList.add("incorrect")
          document.getElementById('b-algexprules-22').classList.add("incorrect")
          document.getElementById('b-algexprules-23').classList.add("incorrect")
    
          document.getElementById('sa-algexprules-2').disabled = true;
          document.getElementById('o-algexprules-21').disabled = true;
          document.getElementById('o-algexprules-22').disabled = true;
          document.getElementById('o-algexprules-23').disabled = true;
          document.getElementById('o-algexprules-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algexprules2', 0)
        }
        if (document.getElementById('o-algexprules-24').checked) {
          document.getElementById('r-algexprules-24').style.color = 'blue'
          document.getElementById('r-algexprules-24').innerHTML = 'Correct!'
          
          document.getElementById('b-algexprules-24').classList.add("correct")
          document.getElementById('b-algexprules-21').classList.add("incorrect")
          document.getElementById('b-algexprules-22').classList.add("incorrect")
          document.getElementById('b-algexprules-23').classList.add("incorrect")
    
          document.getElementById('sa-algexprules-2').disabled = true;
          document.getElementById('o-algexprules-21').disabled = true;
          document.getElementById('o-algexprules-22').disabled = true;
          document.getElementById('o-algexprules-23').disabled = true;
          document.getElementById('o-algexprules-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algexprules2', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algexprules-3') != null) {
      algexprules3But.onclick = function() {
        if (document.getElementById('o-algexprules-31').checked) {
          document.getElementById('r-algexprules-31').style.color = 'blue'
          document.getElementById('r-algexprules-31').innerHTML = 'Correct!'
          
          document.getElementById('b-algexprules-31').classList.add("correct")
          document.getElementById('b-algexprules-32').classList.add("incorrect")
          document.getElementById('b-algexprules-33').classList.add("incorrect")
          document.getElementById('b-algexprules-34').classList.add("incorrect")
    
          document.getElementById('sa-algexprules-3').disabled = true;
          document.getElementById('o-algexprules-31').disabled = true;
          document.getElementById('o-algexprules-32').disabled = true;
          document.getElementById('o-algexprules-33').disabled = true;
          document.getElementById('o-algexprules-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algexprules3', 1)
        }
        if (document.getElementById('o-algexprules-32').checked) {
          document.getElementById('r-algexprules-32').style.color = 'red'
          document.getElementById('r-algexprules-32').innerHTML = 'Incorrect!'
          document.getElementById('r-algexprules-31').style.color = 'blue'
          document.getElementById('r-algexprules-31').innerHTML = 'Correct!'
          
          document.getElementById('b-algexprules-31').classList.add("correct")
          document.getElementById('b-algexprules-32').classList.add("incorrect")
          document.getElementById('b-algexprules-33').classList.add("incorrect")
          document.getElementById('b-algexprules-34').classList.add("incorrect")
    
          document.getElementById('sa-algexprules-3').disabled = true;
          document.getElementById('o-algexprules-31').disabled = true;
          document.getElementById('o-algexprules-32').disabled = true;
          document.getElementById('o-algexprules-33').disabled = true;
          document.getElementById('o-algexprules-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algexprules3', 0)
        }
        if (document.getElementById('o-algexprules-33').checked) {
          document.getElementById('r-algexprules-33').style.color = 'red'
          document.getElementById('r-algexprules-33').innerHTML = 'Incorrect!'
          document.getElementById('r-algexprules-31').style.color = 'blue'
          document.getElementById('r-algexprules-31').innerHTML = 'Correct!'
          
          document.getElementById('b-algexprules-31').classList.add("correct")
          document.getElementById('b-algexprules-32').classList.add("incorrect")
          document.getElementById('b-algexprules-33').classList.add("incorrect")
          document.getElementById('b-algexprules-34').classList.add("incorrect")
    
          document.getElementById('sa-algexprules-3').disabled = true;
          document.getElementById('o-algexprules-31').disabled = true;
          document.getElementById('o-algexprules-32').disabled = true;
          document.getElementById('o-algexprules-33').disabled = true;
          document.getElementById('o-algexprules-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algexprules3', 0)
        }
        if (document.getElementById('o-algexprules-34').checked) {
          document.getElementById('r-algexprules-34').style.color = 'red'
          document.getElementById('r-algexprules-34').innerHTML = 'Incorrect!'
          document.getElementById('r-algexprules-31').style.color = 'blue'
          document.getElementById('r-algexprules-31').innerHTML = 'Correct!'
          
          document.getElementById('b-algexprules-31').classList.add("correct")
          document.getElementById('b-algexprules-32').classList.add("incorrect")
          document.getElementById('b-algexprules-33').classList.add("incorrect")
          document.getElementById('b-algexprules-34').classList.add("incorrect")
    
          document.getElementById('sa-algexprules-3').disabled = true;
          document.getElementById('o-algexprules-31').disabled = true;
          document.getElementById('o-algexprules-32').disabled = true;
          document.getElementById('o-algexprules-33').disabled = true;
          document.getElementById('o-algexprules-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algexprules3', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algexprules-4') != null) {
      algexprules4But.onclick = function() {
        if (document.getElementById('o-algexprules-41').checked) {
          document.getElementById('r-algexprules-41').style.color = 'blue'
          document.getElementById('r-algexprules-41').innerHTML = 'Correct!'
          
          document.getElementById('b-algexprules-41').classList.add("correct")
          document.getElementById('b-algexprules-44').classList.add("incorrect")
          document.getElementById('b-algexprules-42').classList.add("incorrect")
          document.getElementById('b-algexprules-43').classList.add("incorrect")
    
          document.getElementById('sa-algexprules-4').disabled = true;
          document.getElementById('o-algexprules-41').disabled = true;
          document.getElementById('o-algexprules-42').disabled = true;
          document.getElementById('o-algexprules-43').disabled = true;
          document.getElementById('o-algexprules-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algexprules4', 1)
        }
        if (document.getElementById('o-algexprules-42').checked) {
          document.getElementById('r-algexprules-42').style.color = 'red'
          document.getElementById('r-algexprules-42').innerHTML = 'Incorrect!'
          document.getElementById('r-algexprules-41').style.color = 'blue'
          document.getElementById('r-algexprules-41').innerHTML = 'Correct!'
          
          document.getElementById('b-algexprules-41').classList.add("correct")
          document.getElementById('b-algexprules-44').classList.add("incorrect")
          document.getElementById('b-algexprules-42').classList.add("incorrect")
          document.getElementById('b-algexprules-43').classList.add("incorrect")
    
          document.getElementById('sa-algexprules-4').disabled = true;
          document.getElementById('o-algexprules-41').disabled = true;
          document.getElementById('o-algexprules-42').disabled = true;
          document.getElementById('o-algexprules-43').disabled = true;
          document.getElementById('o-algexprules-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algexprules4', 0)
        }
        if (document.getElementById('o-algexprules-43').checked) {
          document.getElementById('r-algexprules-43').style.color = 'red'
          document.getElementById('r-algexprules-43').innerHTML = 'Incorrect!'
          document.getElementById('r-algexprules-41').style.color = 'blue'
          document.getElementById('r-algexprules-41').innerHTML = 'Correct!'
          
          document.getElementById('b-algexprules-41').classList.add("correct")
          document.getElementById('b-algexprules-44').classList.add("incorrect")
          document.getElementById('b-algexprules-42').classList.add("incorrect")
          document.getElementById('b-algexprules-43').classList.add("incorrect")
    
          document.getElementById('sa-algexprules-4').disabled = true;
          document.getElementById('o-algexprules-41').disabled = true;
          document.getElementById('o-algexprules-42').disabled = true;
          document.getElementById('o-algexprules-43').disabled = true;
          document.getElementById('o-algexprules-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algexprules4', 0)
        }
        if (document.getElementById('o-algexprules-44').checked) {
          document.getElementById('r-algexprules-44').style.color = 'red'
          document.getElementById('r-algexprules-44').innerHTML = 'Incorrect!'
          document.getElementById('r-algexprules-41').style.color = 'blue'
          document.getElementById('r-algexprules-41').innerHTML = 'Correct!'
          
          document.getElementById('b-algexprules-41').classList.add("correct")
          document.getElementById('b-algexprules-44').classList.add("incorrect")
          document.getElementById('b-algexprules-42').classList.add("incorrect")
          document.getElementById('b-algexprules-43').classList.add("incorrect")
    
          document.getElementById('sa-algexprules-4').disabled = true;
          document.getElementById('o-algexprules-41').disabled = true;
          document.getElementById('o-algexprules-42').disabled = true;
          document.getElementById('o-algexprules-43').disabled = true;
          document.getElementById('o-algexprules-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algexprules4', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algexprules-5') != null) {
      algexprules5But.onclick = function() {
        if (document.getElementById('o-algexprules-51').checked) {
          document.getElementById('r-algexprules-51').style.color = 'red'
          document.getElementById('r-algexprules-51').innerHTML = 'Incorrect!'
          document.getElementById('r-algexprules-54').style.color = 'blue'
          document.getElementById('r-algexprules-54').innerHTML = 'Correct!'
          
          document.getElementById('b-algexprules-54').classList.add("correct")
          document.getElementById('b-algexprules-51').classList.add("incorrect")
          document.getElementById('b-algexprules-52').classList.add("incorrect")
          document.getElementById('b-algexprules-53').classList.add("incorrect")
    
          document.getElementById('sa-algexprules-5').disabled = true;
          document.getElementById('o-algexprules-51').disabled = true;
          document.getElementById('o-algexprules-52').disabled = true;
          document.getElementById('o-algexprules-53').disabled = true;
          document.getElementById('o-algexprules-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algexprules5', 0)
        }
        if (document.getElementById('o-algexprules-52').checked) {
          document.getElementById('r-algexprules-52').style.color = 'red'
          document.getElementById('r-algexprules-52').innerHTML = 'Incorrect!'
          document.getElementById('r-algexprules-54').style.color = 'blue'
          document.getElementById('r-algexprules-54').innerHTML = 'Correct!'
          
          document.getElementById('b-algexprules-54').classList.add("correct")
          document.getElementById('b-algexprules-51').classList.add("incorrect")
          document.getElementById('b-algexprules-53').classList.add("incorrect")
          document.getElementById('b-algexprules-54').classList.add("incorrect")
    
          document.getElementById('sa-algexprules-5').disabled = true;
          document.getElementById('o-algexprules-51').disabled = true;
          document.getElementById('o-algexprules-52').disabled = true;
          document.getElementById('o-algexprules-53').disabled = true;
          document.getElementById('o-algexprules-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algexprules5', 0)
        }
        if (document.getElementById('o-algexprules-53').checked) {
          document.getElementById('r-algexprules-53').style.color = 'red'
          document.getElementById('r-algexprules-53').innerHTML = 'Incorrect!'
          document.getElementById('r-algexprules-54').style.color = 'blue'
          document.getElementById('r-algexprules-54').innerHTML = 'Correct!'
          
          document.getElementById('b-algexprules-54').classList.add("correct")
          document.getElementById('b-algexprules-51').classList.add("incorrect")
          document.getElementById('b-algexprules-52').classList.add("incorrect")
          document.getElementById('b-algexprules-53').classList.add("incorrect")
    
          document.getElementById('sa-algexprules-5').disabled = true;
          document.getElementById('o-algexprules-51').disabled = true;
          document.getElementById('o-algexprules-52').disabled = true;
          document.getElementById('o-algexprules-53').disabled = true;
          document.getElementById('o-algexprules-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algexprules5', 0)
        }
        if (document.getElementById('o-algexprules-54').checked) {
          document.getElementById('r-algexprules-54').style.color = 'blue'
          document.getElementById('r-algexprules-54').innerHTML = 'Correct!'
          
          document.getElementById('b-algexprules-54').classList.add("correct")
          document.getElementById('b-algexprules-51').classList.add("incorrect")
          document.getElementById('b-algexprules-53').classList.add("incorrect")
          document.getElementById('b-algexprules-54').classList.add("incorrect")
    
          document.getElementById('sa-algexprules-5').disabled = true;
          document.getElementById('o-algexprules-51').disabled = true;
          document.getElementById('o-algexprules-52').disabled = true;
          document.getElementById('o-algexprules-53').disabled = true;
          document.getElementById('o-algexprules-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algexprules5', 1)
        }
      }
    }
        
         
      if (document.getElementById('sa-algexprules-6') != null) {
      algexprules6But.onclick = function() {
        if (document.getElementById('o-algexprules-61').checked) {
          document.getElementById('r-algexprules-61').style.color = 'red'
          document.getElementById('r-algexprules-61').innerHTML = 'Incorrect!'
          document.getElementById('r-algexprules-63').style.color = 'blue'
          document.getElementById('r-algexprules-63').innerHTML = 'Correct!'
          
          document.getElementById('b-algexprules-63').classList.add("correct")
          document.getElementById('b-algexprules-61').classList.add("incorrect")
          document.getElementById('b-algexprules-62').classList.add("incorrect")
          document.getElementById('b-algexprules-64').classList.add("incorrect")
    
          document.getElementById('sa-algexprules-6').disabled = true;
          document.getElementById('o-algexprules-61').disabled = true;
          document.getElementById('o-algexprules-62').disabled = true;
          document.getElementById('o-algexprules-63').disabled = true;
          document.getElementById('o-algexprules-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algexprules6', 0)
        }
        if (document.getElementById('o-algexprules-62').checked) {
          document.getElementById('r-algexprules-62').style.color = 'red'
          document.getElementById('r-algexprules-62').innerHTML = 'Incorrect!'
          document.getElementById('r-algexprules-63').style.color = 'blue'
          document.getElementById('r-algexprules-63').innerHTML = 'Correct!'
          
          document.getElementById('b-algexprules-63').classList.add("correct")
          document.getElementById('b-algexprules-61').classList.add("incorrect")
          document.getElementById('b-algexprules-62').classList.add("incorrect")
          document.getElementById('b-algexprules-64').classList.add("incorrect")
    
          document.getElementById('sa-algexprules-6').disabled = true;
          document.getElementById('o-algexprules-61').disabled = true;
          document.getElementById('o-algexprules-62').disabled = true;
          document.getElementById('o-algexprules-63').disabled = true;
          document.getElementById('o-algexprules-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algexprules6', 0)
        }
        if (document.getElementById('o-algexprules-63').checked) {
          document.getElementById('r-algexprules-63').style.color = 'blue'
          document.getElementById('r-algexprules-63').innerHTML = 'Correct!'
          
          document.getElementById('b-algexprules-63').classList.add("correct")
          document.getElementById('b-algexprules-61').classList.add("incorrect")
          document.getElementById('b-algexprules-62').classList.add("incorrect")
          document.getElementById('b-algexprules-64').classList.add("incorrect")
    
          document.getElementById('sa-algexprules-6').disabled = true;
          document.getElementById('o-algexprules-61').disabled = true;
          document.getElementById('o-algexprules-62').disabled = true;
          document.getElementById('o-algexprules-63').disabled = true;
          document.getElementById('o-algexprules-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algexprules6', 1)
        }
        if (document.getElementById('o-algexprules-64').checked) {
          document.getElementById('r-algexprules-64').style.color = 'red'
          document.getElementById('r-algexprules-64').innerHTML = 'Incorrect!'
          document.getElementById('r-algexprules-63').style.color = 'blue'
          document.getElementById('r-algexprules-63').innerHTML = 'Correct!'
          
          document.getElementById('b-algexprules-63').classList.add("correct")
          document.getElementById('b-algexprules-61').classList.add("incorrect")
          document.getElementById('b-algexprules-62').classList.add("incorrect")
          document.getElementById('b-algexprules-64').classList.add("incorrect")
    
          document.getElementById('sa-algexprules-6').disabled = true;
          document.getElementById('o-algexprules-61').disabled = true;
          document.getElementById('o-algexprules-62').disabled = true;
          document.getElementById('o-algexprules-63').disabled = true;
          document.getElementById('o-algexprules-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algexprules6', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algexprules-7') != null) {
      algexprules7But.onclick = function() {
        if (document.getElementById('o-algexprules-71').checked) {
          document.getElementById('r-algexprules-71').style.color = 'red'
          document.getElementById('r-algexprules-71').innerHTML = 'Incorrect!'
          document.getElementById('r-algexprules-73').style.color = 'blue'
          document.getElementById('r-algexprules-73').innerHTML = 'Correct!'
          
          document.getElementById('b-algexprules-73').classList.add("correct")
          document.getElementById('b-algexprules-71').classList.add("incorrect")
          document.getElementById('b-algexprules-72').classList.add("incorrect")
          document.getElementById('b-algexprules-74').classList.add("incorrect")
    
          document.getElementById('sa-algexprules-7').disabled = true;
          document.getElementById('o-algexprules-71').disabled = true;
          document.getElementById('o-algexprules-72').disabled = true;
          document.getElementById('o-algexprules-73').disabled = true;
          document.getElementById('o-algexprules-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algexprules7', 0)
        }
        if (document.getElementById('o-algexprules-72').checked) {
          document.getElementById('r-algexprules-72').style.color = 'red'
          document.getElementById('r-algexprules-72').innerHTML = 'Incorrect!'
          document.getElementById('r-algexprules-73').style.color = 'blue'
          document.getElementById('r-algexprules-73').innerHTML = 'Correct!'
          
          document.getElementById('b-algexprules-73').classList.add("correct")
          document.getElementById('b-algexprules-71').classList.add("incorrect")
          document.getElementById('b-algexprules-72').classList.add("incorrect")
          document.getElementById('b-algexprules-74').classList.add("incorrect")
    
          document.getElementById('sa-algexprules-7').disabled = true;
          document.getElementById('o-algexprules-71').disabled = true;
          document.getElementById('o-algexprules-72').disabled = true;
          document.getElementById('o-algexprules-73').disabled = true;
          document.getElementById('o-algexprules-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algexprules7', 0)
        }
        if (document.getElementById('o-algexprules-73').checked) {
          document.getElementById('r-algexprules-73').style.color = 'blue'
          document.getElementById('r-algexprules-73').innerHTML = 'Correct!'
          
          document.getElementById('b-algexprules-73').classList.add("correct")
          document.getElementById('b-algexprules-71').classList.add("incorrect")
          document.getElementById('b-algexprules-72').classList.add("incorrect")
          document.getElementById('b-algexprules-74').classList.add("incorrect")
    
          document.getElementById('sa-algexprules-7').disabled = true;
          document.getElementById('o-algexprules-71').disabled = true;
          document.getElementById('o-algexprules-72').disabled = true;
          document.getElementById('o-algexprules-73').disabled = true;
          document.getElementById('o-algexprules-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algexprules7', 1)
        }
        if (document.getElementById('o-algexprules-74').checked) {
          document.getElementById('r-algexprules-74').style.color = 'red'
          document.getElementById('r-algexprules-74').innerHTML = 'Incorrect!'
          document.getElementById('r-algexprules-73').style.color = 'blue'
          document.getElementById('r-algexprules-73').innerHTML = 'Correct!'
          
          document.getElementById('b-algexprules-73').classList.add("correct")
          document.getElementById('b-algexprules-71').classList.add("incorrect")
          document.getElementById('b-algexprules-72').classList.add("incorrect")
          document.getElementById('b-algexprules-74').classList.add("incorrect")
    
          document.getElementById('sa-algexprules-7').disabled = true;
          document.getElementById('o-algexprules-71').disabled = true;
          document.getElementById('o-algexprules-72').disabled = true;
          document.getElementById('o-algexprules-73').disabled = true;
          document.getElementById('o-algexprules-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algexprules7', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-algexprules-8') != null) {
      algexprules8But.onclick = function() {
        if (document.getElementById('o-algexprules-81').checked) {
          document.getElementById('r-algexprules-81').style.color = 'red'
          document.getElementById('r-algexprules-81').innerHTML = 'Incorrect!'
          document.getElementById('r-algexprules-82').style.color = 'blue'
          document.getElementById('r-algexprules-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algexprules-82').classList.add("correct")
          document.getElementById('b-algexprules-81').classList.add("incorrect")
          document.getElementById('b-algexprules-83').classList.add("incorrect")
          document.getElementById('b-algexprules-84').classList.add("incorrect")
    
          document.getElementById('sa-algexprules-8').disabled = true;
          document.getElementById('o-algexprules-81').disabled = true;
          document.getElementById('o-algexprules-82').disabled = true;
          document.getElementById('o-algexprules-83').disabled = true;
          document.getElementById('o-algexprules-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algexprules8', 0)
        }
        if (document.getElementById('o-algexprules-82').checked) {
          document.getElementById('r-algexprules-82').style.color = 'blue'
          document.getElementById('r-algexprules-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algexprules-82').classList.add("correct")
          document.getElementById('b-algexprules-81').classList.add("incorrect")
          document.getElementById('b-algexprules-83').classList.add("incorrect")
          document.getElementById('b-algexprules-84').classList.add("incorrect")
    
          document.getElementById('sa-algexprules-8').disabled = true;
          document.getElementById('o-algexprules-81').disabled = true;
          document.getElementById('o-algexprules-82').disabled = true;
          document.getElementById('o-algexprules-83').disabled = true;
          document.getElementById('o-algexprules-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algexprules8', 1)
        }
        if (document.getElementById('o-algexprules-83').checked) {
          document.getElementById('r-algexprules-83').style.color = 'red'
          document.getElementById('r-algexprules-83').innerHTML = 'Incorrect!'
          document.getElementById('r-algexprules-82').style.color = 'blue'
          document.getElementById('r-algexprules-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algexprules-82').classList.add("correct")
          document.getElementById('b-algexprules-81').classList.add("incorrect")
          document.getElementById('b-algexprules-83').classList.add("incorrect")
          document.getElementById('b-algexprules-84').classList.add("incorrect")
    
          document.getElementById('sa-algexprules-8').disabled = true;
          document.getElementById('o-algexprules-81').disabled = true;
          document.getElementById('o-algexprules-82').disabled = true;
          document.getElementById('o-algexprules-83').disabled = true;
          document.getElementById('o-algexprules-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algexprules8', 0)
        }
        if (document.getElementById('o-algexprules-84').checked) {
          document.getElementById('r-algexprules-84').style.color = 'red'
          document.getElementById('r-algexprules-84').innerHTML = 'Incorrect!'
          document.getElementById('r-algexprules-82').style.color = 'blue'
          document.getElementById('r-algexprules-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algexprules-82').classList.add("correct")
          document.getElementById('b-algexprules-81').classList.add("incorrect")
          document.getElementById('b-algexprules-83').classList.add("incorrect")
          document.getElementById('b-algexprules-84').classList.add("incorrect")
    
          document.getElementById('sa-algexprules-8').disabled = true;
          document.getElementById('o-algexprules-81').disabled = true;
          document.getElementById('o-algexprules-82').disabled = true;
          document.getElementById('o-algexprules-83').disabled = true;
          document.getElementById('o-algexprules-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algexprules8', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-algexprules-9') != null) {
      algexprules9But.onclick = function() {
        if (document.getElementById('o-algexprules-91').checked) {
          document.getElementById('r-algexprules-91').style.color = 'red'
          document.getElementById('r-algexprules-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algexprules-94').style.color = 'blue'
          document.getElementById('r-algexprules-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algexprules-94').classList.add("correct")
          document.getElementById('b-algexprules-91').classList.add("incorrect")
          document.getElementById('b-algexprules-92').classList.add("incorrect")
          document.getElementById('b-algexprules-93').classList.add("incorrect")
    
          document.getElementById('sa-algexprules-9').disabled = true;
          document.getElementById('o-algexprules-91').disabled = true;
          document.getElementById('o-algexprules-92').disabled = true;
          document.getElementById('o-algexprules-93').disabled = true;
          document.getElementById('o-algexprules-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algexprules9', 0)
        }
        if (document.getElementById('o-algexprules-92').checked) {
          document.getElementById('r-algexprules-91').style.color = 'red'
          document.getElementById('r-algexprules-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algexprules-94').style.color = 'blue'
          document.getElementById('r-algexprules-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algexprules-94').classList.add("correct")
          document.getElementById('b-algexprules-91').classList.add("incorrect")
          document.getElementById('b-algexprules-92').classList.add("incorrect")
          document.getElementById('b-algexprules-93').classList.add("incorrect")
    
          document.getElementById('sa-algexprules-9').disabled = true;
          document.getElementById('o-algexprules-91').disabled = true;
          document.getElementById('o-algexprules-92').disabled = true;
          document.getElementById('o-algexprules-93').disabled = true;
          document.getElementById('o-algexprules-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algexprules9', 0)
        }
        if (document.getElementById('o-algexprules-93').checked) {
          document.getElementById('r-algexprules-91').style.color = 'red'
          document.getElementById('r-algexprules-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algexprules-94').style.color = 'blue'
          document.getElementById('r-algexprules-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algexprules-94').classList.add("correct")
          document.getElementById('b-algexprules-91').classList.add("incorrect")
          document.getElementById('b-algexprules-92').classList.add("incorrect")
          document.getElementById('b-algexprules-93').classList.add("incorrect")
    
          document.getElementById('sa-algexprules-9').disabled = true;
          document.getElementById('o-algexprules-91').disabled = true;
          document.getElementById('o-algexprules-92').disabled = true;
          document.getElementById('o-algexprules-93').disabled = true;
          document.getElementById('o-algexprules-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algexprules9', 0)
        }
        if (document.getElementById('o-algexprules-94').checked) {
          document.getElementById('r-algexprules-94').style.color = 'blue'
          document.getElementById('r-algexprules-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algexprules-94').classList.add("correct")
          document.getElementById('b-algexprules-91').classList.add("incorrect")
          document.getElementById('b-algexprules-92').classList.add("incorrect")
          document.getElementById('b-algexprules-93').classList.add("incorrect")
    
          document.getElementById('sa-algexprules-9').disabled = true;
          document.getElementById('o-algexprules-91').disabled = true;
          document.getElementById('o-algexprules-92').disabled = true;
          document.getElementById('o-algexprules-93').disabled = true;
          document.getElementById('o-algexprules-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algexprules9', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algexprules-10') != null) {
      algexprules10But.onclick = function() {
        if (document.getElementById('o-algexprules-101').checked) {
          document.getElementById('r-algexprules-101').style.color = 'red'
          document.getElementById('r-algexprules-101').innerHTML = 'Incorrect!'
          document.getElementById('r-algexprules-102').style.color = 'blue'
          document.getElementById('r-algexprules-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algexprules-102').classList.add("correct")
          document.getElementById('b-algexprules-101').classList.add("incorrect")
          document.getElementById('b-algexprules-103').classList.add("incorrect")
          document.getElementById('b-algexprules-104').classList.add("incorrect")
    
          document.getElementById('sa-algexprules-10').disabled = true;
          document.getElementById('o-algexprules-101').disabled = true;
          document.getElementById('o-algexprules-102').disabled = true;
          document.getElementById('o-algexprules-103').disabled = true;
          document.getElementById('o-algexprules-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algexprules10', 0)
        }
        if (document.getElementById('o-algexprules-102').checked) {
          document.getElementById('r-algexprules-102').style.color = 'blue'
          document.getElementById('r-algexprules-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algexprules-102').classList.add("correct")
          document.getElementById('b-algexprules-101').classList.add("incorrect")
          document.getElementById('b-algexprules-103').classList.add("incorrect")
          document.getElementById('b-algexprules-104').classList.add("incorrect")
    
          document.getElementById('sa-algexprules-10').disabled = true;
          document.getElementById('o-algexprules-101').disabled = true;
          document.getElementById('o-algexprules-102').disabled = true;
          document.getElementById('o-algexprules-103').disabled = true;
          document.getElementById('o-algexprules-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algexprules10', 1)
        }
        if (document.getElementById('o-algexprules-103').checked) {
          document.getElementById('r-algexprules-103').style.color = 'red'
          document.getElementById('r-algexprules-103').innerHTML = 'Incorrect!'
          document.getElementById('r-algexprules-102').style.color = 'blue'
          document.getElementById('r-algexprules-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algexprules-102').classList.add("correct")
          document.getElementById('b-algexprules-101').classList.add("incorrect")
          document.getElementById('b-algexprules-103').classList.add("incorrect")
          document.getElementById('b-algexprules-104').classList.add("incorrect")
    
          document.getElementById('sa-algexprules-10').disabled = true;
          document.getElementById('o-algexprules-101').disabled = true;
          document.getElementById('o-algexprules-102').disabled = true;
          document.getElementById('o-algexprules-103').disabled = true;
          document.getElementById('o-algexprules-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algexprules10', 0)
        }
        if (document.getElementById('o-algexprules-104').checked) {
          document.getElementById('r-algexprules-104').style.color = 'red'
          document.getElementById('r-algexprules-104').innerHTML = 'Incorrect!'
          document.getElementById('r-algexprules-102').style.color = 'blue'
          document.getElementById('r-algexprules-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algexprules-102').classList.add("correct")
          document.getElementById('b-algexprules-101').classList.add("incorrect")
          document.getElementById('b-algexprules-103').classList.add("incorrect")
          document.getElementById('b-algexprules-104').classList.add("incorrect")
    
          document.getElementById('sa-algexprules-10').disabled = true;
          document.getElementById('o-algexprules-101').disabled = true;
          document.getElementById('o-algexprules-102').disabled = true;
          document.getElementById('o-algexprules-103').disabled = true;
          document.getElementById('o-algexprules-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algexprules10', 0)
        }
      }
    }
    