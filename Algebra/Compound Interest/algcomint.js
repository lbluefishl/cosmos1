
  let algcomint1But = document.getElementById('sa-algcomint-1');
  let algcomint2But = document.getElementById('sa-algcomint-2');
  let algcomint3But = document.getElementById('sa-algcomint-3');
  let algcomint4But = document.getElementById('sa-algcomint-4');
  let algcomint5But = document.getElementById('sa-algcomint-5');
  let algcomint6But = document.getElementById('sa-algcomint-6');
  let algcomint7But = document.getElementById('sa-algcomint-7');
  let algcomint8But = document.getElementById('sa-algcomint-8');
  let algcomint9But = document.getElementById('sa-algcomint-9');
  let algcomint10But = document.getElementById('sa-algcomint-10');


  showExplanation1 = function() {
    document.getElementById('e-algcomint-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-algcomint-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-algcomint-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-algcomint-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-algcomint-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-algcomint-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-algcomint-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-algcomint-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-algcomint-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-algcomint-10').style.display = 'block';
     } 



     if (document.getElementById('sa-algcomint-1') != null) {
      algcomint1But.onclick = function () {
        if (document.getElementById('o-algcomint-11').checked) {
          document.getElementById('r-algcomint-11').style.color = 'red'
          document.getElementById('r-algcomint-11').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomint-13').style.color = 'blue'
          document.getElementById('r-algcomint-13').innerHTML = 'Correct!'
    
          document.getElementById('b-algcomint-13').classList.add("correct")
          document.getElementById('b-algcomint-11').classList.add("incorrect")
          document.getElementById('b-algcomint-12').classList.add("incorrect")
          document.getElementById('b-algcomint-14').classList.add("incorrect")
    
          document.getElementById('sa-algcomint-1').disabled = true;
          document.getElementById('o-algcomint-11').disabled = true;
          document.getElementById('o-algcomint-12').disabled = true;
          document.getElementById('o-algcomint-13').disabled = true;
          document.getElementById('o-algcomint-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algcomint1', 0)
        }
    
        if (document.getElementById('o-algcomint-12').checked) {
         
          document.getElementById('r-algcomint-12').style.color = 'red'
          document.getElementById('r-algcomint-12').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomint-13').style.color = 'blue'
          document.getElementById('r-algcomint-13').innerHTML = 'Correct!'
    
          document.getElementById('b-algcomint-13').classList.add("correct")
          document.getElementById('b-algcomint-12').classList.add("incorrect")
          document.getElementById('b-algcomint-11').classList.add("incorrect")
          document.getElementById('b-algcomint-14').classList.add("incorrect")
    
          document.getElementById('sa-algcomint-1').disabled = true;
          document.getElementById('o-algcomint-11').disabled = true;
          document.getElementById('o-algcomint-12').disabled = true;
          document.getElementById('o-algcomint-13').disabled = true;
          document.getElementById('o-algcomint-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algcomint1', 0)
        }
        if (document.getElementById('o-algcomint-13').checked) {
          document.getElementById('r-algcomint-13').style.color = 'blue'
          document.getElementById('r-algcomint-13').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomint-13').classList.add("correct")
          document.getElementById('b-algcomint-12').classList.add("incorrect")
          document.getElementById('b-algcomint-11').classList.add("incorrect")
          document.getElementById('b-algcomint-14').classList.add("incorrect")
    
          document.getElementById('sa-algcomint-1').disabled = true;
          document.getElementById('o-algcomint-11').disabled = true;
          document.getElementById('o-algcomint-12').disabled = true;
          document.getElementById('o-algcomint-13').disabled = true;
          document.getElementById('o-algcomint-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algcomint1', 1)
        }
        if (document.getElementById('o-algcomint-14').checked) {
          document.getElementById('r-algcomint-14').style.color = 'red'
          document.getElementById('r-algcomint-14').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomint-13').style.color = 'blue'
          document.getElementById('r-algcomint-13').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomint-13').classList.add("correct")
          document.getElementById('b-algcomint-12').classList.add("incorrect")
          document.getElementById('b-algcomint-11').classList.add("incorrect")
          document.getElementById('b-algcomint-14').classList.add("incorrect")
    
          document.getElementById('sa-algcomint-1').disabled = true;
          document.getElementById('o-algcomint-11').disabled = true;
          document.getElementById('o-algcomint-12').disabled = true;
          document.getElementById('o-algcomint-13').disabled = true;
          document.getElementById('o-algcomint-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algcomint1', 0)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-algcomint-2') != null) {
      algcomint2But.onclick = function() {
        if (document.getElementById('o-algcomint-21').checked) {
          document.getElementById('r-algcomint-21').style.color = 'red'
          document.getElementById('r-algcomint-21').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomint-23').style.color = 'blue'
          document.getElementById('r-algcomint-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomint-23').classList.add("correct")
          document.getElementById('b-algcomint-21').classList.add("incorrect")
          document.getElementById('b-algcomint-22').classList.add("incorrect")
          document.getElementById('b-algcomint-24').classList.add("incorrect")
    
          document.getElementById('sa-algcomint-2').disabled = true;
          document.getElementById('o-algcomint-21').disabled = true;
          document.getElementById('o-algcomint-22').disabled = true;
          document.getElementById('o-algcomint-23').disabled = true;
          document.getElementById('o-algcomint-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algcomint2', 0)
        }
        if (document.getElementById('o-algcomint-22').checked) {
          document.getElementById('r-algcomint-22').style.color = 'red'
          document.getElementById('r-algcomint-22').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomint-23').style.color = 'blue'
          document.getElementById('r-algcomint-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomint-23').classList.add("correct")
          document.getElementById('b-algcomint-21').classList.add("incorrect")
          document.getElementById('b-algcomint-22').classList.add("incorrect")
          document.getElementById('b-algcomint-24').classList.add("incorrect")
    
          document.getElementById('sa-algcomint-2').disabled = true;
          document.getElementById('o-algcomint-21').disabled = true;
          document.getElementById('o-algcomint-22').disabled = true;
          document.getElementById('o-algcomint-23').disabled = true;
          document.getElementById('o-algcomint-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algcomint2', 0)
        }
        if (document.getElementById('o-algcomint-23').checked) {
          document.getElementById('r-algcomint-23').style.color = 'blue'
          document.getElementById('r-algcomint-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomint-23').classList.add("correct")
          document.getElementById('b-algcomint-21').classList.add("incorrect")
          document.getElementById('b-algcomint-22').classList.add("incorrect")
          document.getElementById('b-algcomint-24').classList.add("incorrect")
    
          document.getElementById('sa-algcomint-2').disabled = true;
          document.getElementById('o-algcomint-21').disabled = true;
          document.getElementById('o-algcomint-22').disabled = true;
          document.getElementById('o-algcomint-23').disabled = true;
          document.getElementById('o-algcomint-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algcomint2', 1)
        }
        if (document.getElementById('o-algcomint-24').checked) {
          document.getElementById('r-algcomint-24').style.color = 'red'
          document.getElementById('r-algcomint-24').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomint-23').style.color = 'blue'
          document.getElementById('r-algcomint-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomint-23').classList.add("correct")
          document.getElementById('b-algcomint-21').classList.add("incorrect")
          document.getElementById('b-algcomint-22').classList.add("incorrect")
          document.getElementById('b-algcomint-24').classList.add("incorrect")
    
          document.getElementById('sa-algcomint-2').disabled = true;
          document.getElementById('o-algcomint-21').disabled = true;
          document.getElementById('o-algcomint-22').disabled = true;
          document.getElementById('o-algcomint-23').disabled = true;
          document.getElementById('o-algcomint-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algcomint2', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algcomint-3') != null) {
      algcomint3But.onclick = function() {
        if (document.getElementById('o-algcomint-31').checked) {
          document.getElementById('r-algcomint-31').style.color = 'red'
          document.getElementById('r-algcomint-31').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomint-32').style.color = 'blue'
          document.getElementById('r-algcomint-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomint-32').classList.add("correct")
          document.getElementById('b-algcomint-31').classList.add("incorrect")
          document.getElementById('b-algcomint-33').classList.add("incorrect")
          document.getElementById('b-algcomint-34').classList.add("incorrect")
    
          document.getElementById('sa-algcomint-3').disabled = true;
          document.getElementById('o-algcomint-31').disabled = true;
          document.getElementById('o-algcomint-32').disabled = true;
          document.getElementById('o-algcomint-33').disabled = true;
          document.getElementById('o-algcomint-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algcomint3', 0)
        }
        if (document.getElementById('o-algcomint-32').checked) {
    
          document.getElementById('r-algcomint-32').style.color = 'blue'
          document.getElementById('r-algcomint-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomint-32').classList.add("correct")
          document.getElementById('b-algcomint-31').classList.add("incorrect")
          document.getElementById('b-algcomint-33').classList.add("incorrect")
          document.getElementById('b-algcomint-34').classList.add("incorrect")
    
          document.getElementById('sa-algcomint-3').disabled = true;
          document.getElementById('o-algcomint-31').disabled = true;
          document.getElementById('o-algcomint-32').disabled = true;
          document.getElementById('o-algcomint-33').disabled = true;
          document.getElementById('o-algcomint-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algcomint3', 1)
        }
        if (document.getElementById('o-algcomint-33').checked) {
          document.getElementById('r-algcomint-33').style.color = 'red'
          document.getElementById('r-algcomint-33').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomint-32').style.color = 'blue'
          document.getElementById('r-algcomint-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomint-32').classList.add("correct")
          document.getElementById('b-algcomint-31').classList.add("incorrect")
          document.getElementById('b-algcomint-33').classList.add("incorrect")
          document.getElementById('b-algcomint-34').classList.add("incorrect")
    
          document.getElementById('sa-algcomint-3').disabled = true;
          document.getElementById('o-algcomint-31').disabled = true;
          document.getElementById('o-algcomint-32').disabled = true;
          document.getElementById('o-algcomint-33').disabled = true;
          document.getElementById('o-algcomint-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algcomint3', 0)
        }
        if (document.getElementById('o-algcomint-34').checked) {
          document.getElementById('r-algcomint-34').style.color = 'red'
          document.getElementById('r-algcomint-34').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomint-32').style.color = 'blue'
          document.getElementById('r-algcomint-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomint-32').classList.add("correct")
          document.getElementById('b-algcomint-31').classList.add("incorrect")
          document.getElementById('b-algcomint-33').classList.add("incorrect")
          document.getElementById('b-algcomint-34').classList.add("incorrect")
    
          document.getElementById('sa-algcomint-3').disabled = true;
          document.getElementById('o-algcomint-31').disabled = true;
          document.getElementById('o-algcomint-32').disabled = true;
          document.getElementById('o-algcomint-33').disabled = true;
          document.getElementById('o-algcomint-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algcomint3', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algcomint-4') != null) {
      algcomint4But.onclick = function() {
        if (document.getElementById('o-algcomint-41').checked) {
          document.getElementById('r-algcomint-41').style.color = 'red'
          document.getElementById('r-algcomint-41').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomint-44').style.color = 'blue'
          document.getElementById('r-algcomint-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomint-44').classList.add("correct")
          document.getElementById('b-algcomint-41').classList.add("incorrect")
          document.getElementById('b-algcomint-42').classList.add("incorrect")
          document.getElementById('b-algcomint-43').classList.add("incorrect")
    
          document.getElementById('sa-algcomint-4').disabled = true;
          document.getElementById('o-algcomint-41').disabled = true;
          document.getElementById('o-algcomint-42').disabled = true;
          document.getElementById('o-algcomint-43').disabled = true;
          document.getElementById('o-algcomint-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algcomint4', 0)
        }
        if (document.getElementById('o-algcomint-42').checked) {
          document.getElementById('r-algcomint-42').style.color = 'red'
          document.getElementById('r-algcomint-42').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomint-44').style.color = 'blue'
          document.getElementById('r-algcomint-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomint-44').classList.add("correct")
          document.getElementById('b-algcomint-41').classList.add("incorrect")
          document.getElementById('b-algcomint-42').classList.add("incorrect")
          document.getElementById('b-algcomint-43').classList.add("incorrect")
    
          document.getElementById('sa-algcomint-4').disabled = true;
          document.getElementById('o-algcomint-41').disabled = true;
          document.getElementById('o-algcomint-42').disabled = true;
          document.getElementById('o-algcomint-43').disabled = true;
          document.getElementById('o-algcomint-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algcomint4', 0)
        }
        if (document.getElementById('o-algcomint-43').checked) {
          document.getElementById('r-algcomint-43').style.color = 'red'
          document.getElementById('r-algcomint-43').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomint-44').style.color = 'blue'
          document.getElementById('r-algcomint-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomint-44').classList.add("correct")
          document.getElementById('b-algcomint-41').classList.add("incorrect")
          document.getElementById('b-algcomint-42').classList.add("incorrect")
          document.getElementById('b-algcomint-43').classList.add("incorrect")
    
          document.getElementById('sa-algcomint-4').disabled = true;
          document.getElementById('o-algcomint-41').disabled = true;
          document.getElementById('o-algcomint-42').disabled = true;
          document.getElementById('o-algcomint-43').disabled = true;
          document.getElementById('o-algcomint-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algcomint4', 0)
        }
        if (document.getElementById('o-algcomint-44').checked) {
          document.getElementById('r-algcomint-44').style.color = 'blue'
          document.getElementById('r-algcomint-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomint-44').classList.add("correct")
          document.getElementById('b-algcomint-41').classList.add("incorrect")
          document.getElementById('b-algcomint-42').classList.add("incorrect")
          document.getElementById('b-algcomint-43').classList.add("incorrect")
    
          document.getElementById('sa-algcomint-4').disabled = true;
          document.getElementById('o-algcomint-41').disabled = true;
          document.getElementById('o-algcomint-42').disabled = true;
          document.getElementById('o-algcomint-43').disabled = true;
          document.getElementById('o-algcomint-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algcomint4', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algcomint-5') != null) {
      algcomint5But.onclick = function() {
        if (document.getElementById('o-algcomint-51').checked) {
          document.getElementById('r-algcomint-51').style.color = 'red'
          document.getElementById('r-algcomint-51').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomint-53').style.color = 'blue'
          document.getElementById('r-algcomint-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomint-53').classList.add("correct")
          document.getElementById('b-algcomint-51').classList.add("incorrect")
          document.getElementById('b-algcomint-52').classList.add("incorrect")
          document.getElementById('b-algcomint-54').classList.add("incorrect")
    
          document.getElementById('sa-algcomint-5').disabled = true;
          document.getElementById('o-algcomint-51').disabled = true;
          document.getElementById('o-algcomint-52').disabled = true;
          document.getElementById('o-algcomint-53').disabled = true;
          document.getElementById('o-algcomint-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algcomint5', 0)
        }
        if (document.getElementById('o-algcomint-52').checked) {
          document.getElementById('r-algcomint-52').style.color = 'red'
          document.getElementById('r-algcomint-52').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomint-53').style.color = 'blue'
          document.getElementById('r-algcomint-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomint-53').classList.add("correct")
          document.getElementById('b-algcomint-51').classList.add("incorrect")
          document.getElementById('b-algcomint-52').classList.add("incorrect")
          document.getElementById('b-algcomint-54').classList.add("incorrect")
    
          document.getElementById('sa-algcomint-5').disabled = true;
          document.getElementById('o-algcomint-51').disabled = true;
          document.getElementById('o-algcomint-52').disabled = true;
          document.getElementById('o-algcomint-53').disabled = true;
          document.getElementById('o-algcomint-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algcomint5', 0)
        }
        if (document.getElementById('o-algcomint-53').checked) {
          document.getElementById('r-algcomint-53').style.color = 'blue'
          document.getElementById('r-algcomint-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomint-53').classList.add("correct")
          document.getElementById('b-algcomint-51').classList.add("incorrect")
          document.getElementById('b-algcomint-52').classList.add("incorrect")
          document.getElementById('b-algcomint-54').classList.add("incorrect")
    
          document.getElementById('sa-algcomint-5').disabled = true;
          document.getElementById('o-algcomint-51').disabled = true;
          document.getElementById('o-algcomint-52').disabled = true;
          document.getElementById('o-algcomint-53').disabled = true;
          document.getElementById('o-algcomint-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algcomint5', 1)
        }
        if (document.getElementById('o-algcomint-54').checked) {
          document.getElementById('r-algcomint-54').style.color = 'red'
          document.getElementById('r-algcomint-54').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomint-53').style.color = 'blue'
          document.getElementById('r-algcomint-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomint-53').classList.add("correct")
          document.getElementById('b-algcomint-51').classList.add("incorrect")
          document.getElementById('b-algcomint-52').classList.add("incorrect")
          document.getElementById('b-algcomint-54').classList.add("incorrect")
    
          document.getElementById('sa-algcomint-5').disabled = true;
          document.getElementById('o-algcomint-51').disabled = true;
          document.getElementById('o-algcomint-52').disabled = true;
          document.getElementById('o-algcomint-53').disabled = true;
          document.getElementById('o-algcomint-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algcomint5', 0)
        }
      }
    }
        
         
      if (document.getElementById('sa-algcomint-6') != null) {
      algcomint6But.onclick = function() {
        if (document.getElementById('o-algcomint-61').checked) {
          document.getElementById('r-algcomint-61').style.color = 'red'
          document.getElementById('r-algcomint-61').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomint-64').style.color = 'blue'
          document.getElementById('r-algcomint-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomint-64').classList.add("correct")
          document.getElementById('b-algcomint-61').classList.add("incorrect")
          document.getElementById('b-algcomint-62').classList.add("incorrect")
          document.getElementById('b-algcomint-63').classList.add("incorrect")
    
          document.getElementById('sa-algcomint-6').disabled = true;
          document.getElementById('o-algcomint-61').disabled = true;
          document.getElementById('o-algcomint-62').disabled = true;
          document.getElementById('o-algcomint-63').disabled = true;
          document.getElementById('o-algcomint-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algcomint6', 0)
        }
        if (document.getElementById('o-algcomint-62').checked) {
          document.getElementById('r-algcomint-62').style.color = 'red'
          document.getElementById('r-algcomint-62').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomint-64').style.color = 'blue'
          document.getElementById('r-algcomint-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomint-64').classList.add("correct")
          document.getElementById('b-algcomint-61').classList.add("incorrect")
          document.getElementById('b-algcomint-62').classList.add("incorrect")
          document.getElementById('b-algcomint-63').classList.add("incorrect")
    
          document.getElementById('sa-algcomint-6').disabled = true;
          document.getElementById('o-algcomint-61').disabled = true;
          document.getElementById('o-algcomint-62').disabled = true;
          document.getElementById('o-algcomint-63').disabled = true;
          document.getElementById('o-algcomint-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algcomint6', 0)
        }
        if (document.getElementById('o-algcomint-63').checked) {
          document.getElementById('r-algcomint-63').style.color = 'red'
          document.getElementById('r-algcomint-63').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomint-64').style.color = 'blue'
          document.getElementById('r-algcomint-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomint-64').classList.add("correct")
          document.getElementById('b-algcomint-61').classList.add("incorrect")
          document.getElementById('b-algcomint-62').classList.add("incorrect")
          document.getElementById('b-algcomint-63').classList.add("incorrect")
    
          document.getElementById('sa-algcomint-6').disabled = true;
          document.getElementById('o-algcomint-61').disabled = true;
          document.getElementById('o-algcomint-62').disabled = true;
          document.getElementById('o-algcomint-63').disabled = true;
          document.getElementById('o-algcomint-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algcomint6', 0)
        }
        if (document.getElementById('o-algcomint-64').checked) {
          document.getElementById('r-algcomint-64').style.color = 'blue'
          document.getElementById('r-algcomint-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomint-64').classList.add("correct")
          document.getElementById('b-algcomint-61').classList.add("incorrect")
          document.getElementById('b-algcomint-62').classList.add("incorrect")
          document.getElementById('b-algcomint-63').classList.add("incorrect")
    
          document.getElementById('sa-algcomint-6').disabled = true;
          document.getElementById('o-algcomint-61').disabled = true;
          document.getElementById('o-algcomint-62').disabled = true;
          document.getElementById('o-algcomint-63').disabled = true;
          document.getElementById('o-algcomint-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algcomint6', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algcomint-7') != null) {
      algcomint7But.onclick = function() {
        if (document.getElementById('o-algcomint-71').checked) {
          document.getElementById('r-algcomint-71').style.color = 'red'
          document.getElementById('r-algcomint-71').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomint-74').style.color = 'blue'
          document.getElementById('r-algcomint-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomint-74').classList.add("correct")
          document.getElementById('b-algcomint-71').classList.add("incorrect")
          document.getElementById('b-algcomint-72').classList.add("incorrect")
          document.getElementById('b-algcomint-73').classList.add("incorrect")
    
          document.getElementById('sa-algcomint-7').disabled = true;
          document.getElementById('o-algcomint-71').disabled = true;
          document.getElementById('o-algcomint-72').disabled = true;
          document.getElementById('o-algcomint-73').disabled = true;
          document.getElementById('o-algcomint-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algcomint7', 0)
        }
        if (document.getElementById('o-algcomint-72').checked) {
          document.getElementById('r-algcomint-72').style.color = 'red'
          document.getElementById('r-algcomint-72').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomint-74').style.color = 'blue'
          document.getElementById('r-algcomint-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomint-74').classList.add("correct")
          document.getElementById('b-algcomint-71').classList.add("incorrect")
          document.getElementById('b-algcomint-72').classList.add("incorrect")
          document.getElementById('b-algcomint-73').classList.add("incorrect")
    
          document.getElementById('sa-algcomint-7').disabled = true;
          document.getElementById('o-algcomint-71').disabled = true;
          document.getElementById('o-algcomint-72').disabled = true;
          document.getElementById('o-algcomint-73').disabled = true;
          document.getElementById('o-algcomint-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algcomint7', 0)
        }
        if (document.getElementById('o-algcomint-73').checked) {
          document.getElementById('r-algcomint-73').style.color = 'red'
          document.getElementById('r-algcomint-73').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomint-74').style.color = 'blue'
          document.getElementById('r-algcomint-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomint-74').classList.add("correct")
          document.getElementById('b-algcomint-71').classList.add("incorrect")
          document.getElementById('b-algcomint-72').classList.add("incorrect")
          document.getElementById('b-algcomint-73').classList.add("incorrect")
    
          document.getElementById('sa-algcomint-7').disabled = true;
          document.getElementById('o-algcomint-71').disabled = true;
          document.getElementById('o-algcomint-72').disabled = true;
          document.getElementById('o-algcomint-73').disabled = true;
          document.getElementById('o-algcomint-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algcomint7', 0)
        }
        if (document.getElementById('o-algcomint-74').checked) {
          document.getElementById('r-algcomint-74').style.color = 'blue'
          document.getElementById('r-algcomint-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomint-74').classList.add("correct")
          document.getElementById('b-algcomint-71').classList.add("incorrect")
          document.getElementById('b-algcomint-72').classList.add("incorrect")
          document.getElementById('b-algcomint-73').classList.add("incorrect")
    
          document.getElementById('sa-algcomint-7').disabled = true;
          document.getElementById('o-algcomint-71').disabled = true;
          document.getElementById('o-algcomint-72').disabled = true;
          document.getElementById('o-algcomint-73').disabled = true;
          document.getElementById('o-algcomint-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algcomint7', 1)
        }
      }
    }
    
    
    if (document.getElementById('sa-algcomint-8') != null) {
      algcomint8But.onclick = function() {
        if (document.getElementById('o-algcomint-81').checked) {
          document.getElementById('r-algcomint-81').style.color = 'red'
          document.getElementById('r-algcomint-81').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomint-82').style.color = 'blue'
          document.getElementById('r-algcomint-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomint-82').classList.add("correct")
          document.getElementById('b-algcomint-81').classList.add("incorrect")
          document.getElementById('b-algcomint-83').classList.add("incorrect")
          document.getElementById('b-algcomint-84').classList.add("incorrect")
    
          document.getElementById('sa-algcomint-8').disabled = true;
          document.getElementById('o-algcomint-81').disabled = true;
          document.getElementById('o-algcomint-82').disabled = true;
          document.getElementById('o-algcomint-83').disabled = true;
          document.getElementById('o-algcomint-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algcomint8', 0)
        }
        if (document.getElementById('o-algcomint-82').checked) {
          document.getElementById('r-algcomint-82').style.color = 'blue'
          document.getElementById('r-algcomint-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomint-82').classList.add("correct")
          document.getElementById('b-algcomint-81').classList.add("incorrect")
          document.getElementById('b-algcomint-83').classList.add("incorrect")
          document.getElementById('b-algcomint-84').classList.add("incorrect")
    
          document.getElementById('sa-algcomint-8').disabled = true;
          document.getElementById('o-algcomint-81').disabled = true;
          document.getElementById('o-algcomint-82').disabled = true;
          document.getElementById('o-algcomint-83').disabled = true;
          document.getElementById('o-algcomint-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algcomint8', 1)
        }
        if (document.getElementById('o-algcomint-83').checked) {
          document.getElementById('r-algcomint-83').style.color = 'red'
          document.getElementById('r-algcomint-83').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomint-82').style.color = 'blue'
          document.getElementById('r-algcomint-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomint-82').classList.add("correct")
          document.getElementById('b-algcomint-81').classList.add("incorrect")
          document.getElementById('b-algcomint-83').classList.add("incorrect")
          document.getElementById('b-algcomint-84').classList.add("incorrect")
    
          document.getElementById('sa-algcomint-8').disabled = true;
          document.getElementById('o-algcomint-81').disabled = true;
          document.getElementById('o-algcomint-82').disabled = true;
          document.getElementById('o-algcomint-83').disabled = true;
          document.getElementById('o-algcomint-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algcomint8', 0)
        }
        if (document.getElementById('o-algcomint-84').checked) {
          document.getElementById('r-algcomint-84').style.color = 'red'
          document.getElementById('r-algcomint-84').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomint-82').style.color = 'blue'
          document.getElementById('r-algcomint-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomint-82').classList.add("correct")
          document.getElementById('b-algcomint-81').classList.add("incorrect")
          document.getElementById('b-algcomint-83').classList.add("incorrect")
          document.getElementById('b-algcomint-84').classList.add("incorrect")
    
          document.getElementById('sa-algcomint-8').disabled = true;
          document.getElementById('o-algcomint-81').disabled = true;
          document.getElementById('o-algcomint-82').disabled = true;
          document.getElementById('o-algcomint-83').disabled = true;
          document.getElementById('o-algcomint-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algcomint8', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-algcomint-9') != null) {
      algcomint9But.onclick = function() {
        if (document.getElementById('o-algcomint-91').checked) {
          document.getElementById('r-algcomint-91').style.color = 'red'
          document.getElementById('r-algcomint-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomint-94').style.color = 'blue'
          document.getElementById('r-algcomint-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomint-94').classList.add("correct")
          document.getElementById('b-algcomint-91').classList.add("incorrect")
          document.getElementById('b-algcomint-92').classList.add("incorrect")
          document.getElementById('b-algcomint-93').classList.add("incorrect")
    
          document.getElementById('sa-algcomint-9').disabled = true;
          document.getElementById('o-algcomint-91').disabled = true;
          document.getElementById('o-algcomint-92').disabled = true;
          document.getElementById('o-algcomint-93').disabled = true;
          document.getElementById('o-algcomint-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algcomint9', 0)
        }
        if (document.getElementById('o-algcomint-92').checked) {
          document.getElementById('r-algcomint-91').style.color = 'red'
          document.getElementById('r-algcomint-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomint-94').style.color = 'blue'
          document.getElementById('r-algcomint-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomint-94').classList.add("correct")
          document.getElementById('b-algcomint-91').classList.add("incorrect")
          document.getElementById('b-algcomint-92').classList.add("incorrect")
          document.getElementById('b-algcomint-93').classList.add("incorrect")
    
          document.getElementById('sa-algcomint-9').disabled = true;
          document.getElementById('o-algcomint-91').disabled = true;
          document.getElementById('o-algcomint-92').disabled = true;
          document.getElementById('o-algcomint-93').disabled = true;
          document.getElementById('o-algcomint-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algcomint9', 0)
        }
        if (document.getElementById('o-algcomint-93').checked) {
          document.getElementById('r-algcomint-91').style.color = 'red'
          document.getElementById('r-algcomint-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomint-94').style.color = 'blue'
          document.getElementById('r-algcomint-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomint-94').classList.add("correct")
          document.getElementById('b-algcomint-91').classList.add("incorrect")
          document.getElementById('b-algcomint-92').classList.add("incorrect")
          document.getElementById('b-algcomint-93').classList.add("incorrect")
    
          document.getElementById('sa-algcomint-9').disabled = true;
          document.getElementById('o-algcomint-91').disabled = true;
          document.getElementById('o-algcomint-92').disabled = true;
          document.getElementById('o-algcomint-93').disabled = true;
          document.getElementById('o-algcomint-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algcomint9', 0)
        }
        if (document.getElementById('o-algcomint-94').checked) {
          document.getElementById('r-algcomint-94').style.color = 'blue'
          document.getElementById('r-algcomint-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomint-94').classList.add("correct")
          document.getElementById('b-algcomint-91').classList.add("incorrect")
          document.getElementById('b-algcomint-92').classList.add("incorrect")
          document.getElementById('b-algcomint-93').classList.add("incorrect")
    
          document.getElementById('sa-algcomint-9').disabled = true;
          document.getElementById('o-algcomint-91').disabled = true;
          document.getElementById('o-algcomint-92').disabled = true;
          document.getElementById('o-algcomint-93').disabled = true;
          document.getElementById('o-algcomint-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algcomint9', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algcomint-10') != null) {
      algcomint10But.onclick = function() {
        if (document.getElementById('o-algcomint-101').checked) {
          document.getElementById('r-algcomint-101').style.color = 'red'
          document.getElementById('r-algcomint-101').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomint-102').style.color = 'blue'
          document.getElementById('r-algcomint-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomint-102').classList.add("correct")
          document.getElementById('b-algcomint-101').classList.add("incorrect")
          document.getElementById('b-algcomint-103').classList.add("incorrect")
          document.getElementById('b-algcomint-104').classList.add("incorrect")
    
          document.getElementById('sa-algcomint-10').disabled = true;
          document.getElementById('o-algcomint-101').disabled = true;
          document.getElementById('o-algcomint-102').disabled = true;
          document.getElementById('o-algcomint-103').disabled = true;
          document.getElementById('o-algcomint-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algcomint10', 0)
        }
        if (document.getElementById('o-algcomint-102').checked) {
          document.getElementById('r-algcomint-102').style.color = 'blue'
          document.getElementById('r-algcomint-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomint-102').classList.add("correct")
          document.getElementById('b-algcomint-101').classList.add("incorrect")
          document.getElementById('b-algcomint-103').classList.add("incorrect")
          document.getElementById('b-algcomint-104').classList.add("incorrect")
    
          document.getElementById('sa-algcomint-10').disabled = true;
          document.getElementById('o-algcomint-101').disabled = true;
          document.getElementById('o-algcomint-102').disabled = true;
          document.getElementById('o-algcomint-103').disabled = true;
          document.getElementById('o-algcomint-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algcomint10', 1)
        }
        if (document.getElementById('o-algcomint-103').checked) {
          document.getElementById('r-algcomint-103').style.color = 'red'
          document.getElementById('r-algcomint-103').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomint-102').style.color = 'blue'
          document.getElementById('r-algcomint-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomint-102').classList.add("correct")
          document.getElementById('b-algcomint-101').classList.add("incorrect")
          document.getElementById('b-algcomint-103').classList.add("incorrect")
          document.getElementById('b-algcomint-104').classList.add("incorrect")
    
          document.getElementById('sa-algcomint-10').disabled = true;
          document.getElementById('o-algcomint-101').disabled = true;
          document.getElementById('o-algcomint-102').disabled = true;
          document.getElementById('o-algcomint-103').disabled = true;
          document.getElementById('o-algcomint-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algcomint10', 0)
        }
        if (document.getElementById('o-algcomint-104').checked) {
          document.getElementById('r-algcomint-104').style.color = 'red'
          document.getElementById('r-algcomint-104').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomint-102').style.color = 'blue'
          document.getElementById('r-algcomint-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomint-102').classList.add("correct")
          document.getElementById('b-algcomint-101').classList.add("incorrect")
          document.getElementById('b-algcomint-103').classList.add("incorrect")
          document.getElementById('b-algcomint-104').classList.add("incorrect")
    
          document.getElementById('sa-algcomint-10').disabled = true;
          document.getElementById('o-algcomint-101').disabled = true;
          document.getElementById('o-algcomint-102').disabled = true;
          document.getElementById('o-algcomint-103').disabled = true;
          document.getElementById('o-algcomint-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algcomint10', 0)
        }
      }
    }
    