
  let algrate1But = document.getElementById('sa-algrate-1');
  let algrate2But = document.getElementById('sa-algrate-2');
  let algrate3But = document.getElementById('sa-algrate-3');
  let algrate4But = document.getElementById('sa-algrate-4');
  let algrate5But = document.getElementById('sa-algrate-5');
  let algrate6But = document.getElementById('sa-algrate-6');
  let algrate7But = document.getElementById('sa-algrate-7');
  let algrate8But = document.getElementById('sa-algrate-8');
  let algrate9But = document.getElementById('sa-algrate-9');
  let algrate10But = document.getElementById('sa-algrate-10');


  showExplanation1 = function() {
    document.getElementById('e-algrate-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-algrate-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-algrate-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-algrate-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-algrate-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-algrate-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-algrate-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-algrate-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-algrate-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-algrate-10').style.display = 'block';
     } 



     if (document.getElementById('sa-algrate-1') != null) {
      algrate1But.onclick = function () {
        if (document.getElementById('o-algrate-11').checked) {
          document.getElementById('r-algrate-11').style.color = 'red'
          document.getElementById('r-algrate-11').innerHTML = 'Incorrect!'
          document.getElementById('r-algrate-13').style.color = 'blue'
          document.getElementById('r-algrate-13').innerHTML = 'Correct!'
    
          document.getElementById('b-algrate-13').classList.add("correct")
          document.getElementById('b-algrate-12').classList.add("incorrect")
          document.getElementById('b-algrate-11').classList.add("incorrect")
          document.getElementById('b-algrate-14').classList.add("incorrect")
    
          document.getElementById('sa-algrate-1').disabled = true;
          document.getElementById('o-algrate-11').disabled = true;
          document.getElementById('o-algrate-12').disabled = true;
          document.getElementById('o-algrate-13').disabled = true;
          document.getElementById('o-algrate-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algrate1', 0)
        }
    
        if (document.getElementById('o-algrate-12').checked) {
         
          document.getElementById('r-algrate-12').style.color = 'red'
          document.getElementById('r-algrate-12').innerHTML = 'Incorrect!'
          document.getElementById('r-algrate-13').style.color = 'blue'
          document.getElementById('r-algrate-13').innerHTML = 'Correct!'
    
          document.getElementById('b-algrate-13').classList.add("correct")
          document.getElementById('b-algrate-12').classList.add("incorrect")
          document.getElementById('b-algrate-11').classList.add("incorrect")
          document.getElementById('b-algrate-14').classList.add("incorrect")
    
          document.getElementById('sa-algrate-1').disabled = true;
          document.getElementById('o-algrate-11').disabled = true;
          document.getElementById('o-algrate-12').disabled = true;
          document.getElementById('o-algrate-13').disabled = true;
          document.getElementById('o-algrate-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algrate1', 0)
        }
        if (document.getElementById('o-algrate-13').checked) {
          document.getElementById('r-algrate-13').style.color = 'blue'
          document.getElementById('r-algrate-13').innerHTML = 'Correct!'
          
          document.getElementById('b-algrate-13').classList.add("correct")
          document.getElementById('b-algrate-12').classList.add("incorrect")
          document.getElementById('b-algrate-11').classList.add("incorrect")
          document.getElementById('b-algrate-14').classList.add("incorrect")
    
          document.getElementById('sa-algrate-1').disabled = true;
          document.getElementById('o-algrate-11').disabled = true;
          document.getElementById('o-algrate-12').disabled = true;
          document.getElementById('o-algrate-13').disabled = true;
          document.getElementById('o-algrate-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algrate1', 1)
        }
        if (document.getElementById('o-algrate-14').checked) {
          document.getElementById('r-algrate-14').style.color = 'red'
          document.getElementById('r-algrate-14').innerHTML = 'Incorrect!'
          document.getElementById('r-algrate-13').style.color = 'blue'
          document.getElementById('r-algrate-13').innerHTML = 'Correct!'
          
          document.getElementById('b-algrate-13').classList.add("correct")
          document.getElementById('b-algrate-12').classList.add("incorrect")
          document.getElementById('b-algrate-11').classList.add("incorrect")
          document.getElementById('b-algrate-14').classList.add("incorrect")
    
          document.getElementById('sa-algrate-1').disabled = true;
          document.getElementById('o-algrate-11').disabled = true;
          document.getElementById('o-algrate-12').disabled = true;
          document.getElementById('o-algrate-13').disabled = true;
          document.getElementById('o-algrate-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algrate1', 0)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-algrate-2') != null) {
      algrate2But.onclick = function() {
        if (document.getElementById('o-algrate-21').checked) {
          document.getElementById('r-algrate-21').style.color = 'blue'
          document.getElementById('r-algrate-21').innerHTML = 'Correct!'
          
          document.getElementById('b-algrate-21').classList.add("correct")
          document.getElementById('b-algrate-23').classList.add("incorrect")
          document.getElementById('b-algrate-22').classList.add("incorrect")
          document.getElementById('b-algrate-24').classList.add("incorrect")
    
          document.getElementById('sa-algrate-2').disabled = true;
          document.getElementById('o-algrate-21').disabled = true;
          document.getElementById('o-algrate-22').disabled = true;
          document.getElementById('o-algrate-23').disabled = true;
          document.getElementById('o-algrate-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algrate2', 1)
        }
        if (document.getElementById('o-algrate-22').checked) {
          document.getElementById('r-algrate-22').style.color = 'red'
          document.getElementById('r-algrate-22').innerHTML = 'Incorrect!'
          document.getElementById('r-algrate-21').style.color = 'blue'
          document.getElementById('r-algrate-21').innerHTML = 'Correct!'
          
          document.getElementById('b-algrate-21').classList.add("correct")
          document.getElementById('b-algrate-23').classList.add("incorrect")
          document.getElementById('b-algrate-22').classList.add("incorrect")
          document.getElementById('b-algrate-24').classList.add("incorrect")
    
          document.getElementById('sa-algrate-2').disabled = true;
          document.getElementById('o-algrate-21').disabled = true;
          document.getElementById('o-algrate-22').disabled = true;
          document.getElementById('o-algrate-23').disabled = true;
          document.getElementById('o-algrate-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algrate2', 0)
        }
        if (document.getElementById('o-algrate-23').checked) {
          document.getElementById('r-algrate-23').style.color = 'red'
          document.getElementById('r-algrate-23').innerHTML = 'Incorrect!'
          document.getElementById('r-algrate-21').style.color = 'blue'
          document.getElementById('r-algrate-21').innerHTML = 'Correct!'
          
          document.getElementById('b-algrate-21').classList.add("correct")
          document.getElementById('b-algrate-23').classList.add("incorrect")
          document.getElementById('b-algrate-22').classList.add("incorrect")
          document.getElementById('b-algrate-24').classList.add("incorrect")
    
          document.getElementById('sa-algrate-2').disabled = true;
          document.getElementById('o-algrate-21').disabled = true;
          document.getElementById('o-algrate-22').disabled = true;
          document.getElementById('o-algrate-23').disabled = true;
          document.getElementById('o-algrate-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algrate2', 0)
        }
        if (document.getElementById('o-algrate-24').checked) {
          document.getElementById('r-algrate-24').style.color = 'red'
          document.getElementById('r-algrate-24').innerHTML = 'Incorrect!'
          document.getElementById('r-algrate-21').style.color = 'blue'
          document.getElementById('r-algrate-21').innerHTML = 'Correct!'
          
          document.getElementById('b-algrate-21').classList.add("correct")
          document.getElementById('b-algrate-23').classList.add("incorrect")
          document.getElementById('b-algrate-22').classList.add("incorrect")
          document.getElementById('b-algrate-24').classList.add("incorrect")
    
          document.getElementById('sa-algrate-2').disabled = true;
          document.getElementById('o-algrate-21').disabled = true;
          document.getElementById('o-algrate-22').disabled = true;
          document.getElementById('o-algrate-23').disabled = true;
          document.getElementById('o-algrate-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algrate2', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algrate-3') != null) {
      algrate3But.onclick = function() {
        if (document.getElementById('o-algrate-31').checked) {
          document.getElementById('r-algrate-31').style.color = 'red'
          document.getElementById('r-algrate-31').innerHTML = 'Incorrect!'
          document.getElementById('r-algrate-32').style.color = 'blue'
          document.getElementById('r-algrate-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algrate-32').classList.add("correct")
          document.getElementById('b-algrate-31').classList.add("incorrect")
          document.getElementById('b-algrate-33').classList.add("incorrect")
          document.getElementById('b-algrate-34').classList.add("incorrect")
    
          document.getElementById('sa-algrate-3').disabled = true;
          document.getElementById('o-algrate-31').disabled = true;
          document.getElementById('o-algrate-32').disabled = true;
          document.getElementById('o-algrate-33').disabled = true;
          document.getElementById('o-algrate-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algrate3', 0)
        }
        if (document.getElementById('o-algrate-32').checked) {
    
          document.getElementById('r-algrate-32').style.color = 'blue'
          document.getElementById('r-algrate-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algrate-32').classList.add("correct")
          document.getElementById('b-algrate-31').classList.add("incorrect")
          document.getElementById('b-algrate-33').classList.add("incorrect")
          document.getElementById('b-algrate-34').classList.add("incorrect")
    
          document.getElementById('sa-algrate-3').disabled = true;
          document.getElementById('o-algrate-31').disabled = true;
          document.getElementById('o-algrate-32').disabled = true;
          document.getElementById('o-algrate-33').disabled = true;
          document.getElementById('o-algrate-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algrate3', 1)
        }
        if (document.getElementById('o-algrate-33').checked) {
          document.getElementById('r-algrate-33').style.color = 'red'
          document.getElementById('r-algrate-33').innerHTML = 'Incorrect!'
          document.getElementById('r-algrate-32').style.color = 'blue'
          document.getElementById('r-algrate-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algrate-32').classList.add("correct")
          document.getElementById('b-algrate-31').classList.add("incorrect")
          document.getElementById('b-algrate-33').classList.add("incorrect")
          document.getElementById('b-algrate-34').classList.add("incorrect")
    
          document.getElementById('sa-algrate-3').disabled = true;
          document.getElementById('o-algrate-31').disabled = true;
          document.getElementById('o-algrate-32').disabled = true;
          document.getElementById('o-algrate-33').disabled = true;
          document.getElementById('o-algrate-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algrate3', 0)
        }
        if (document.getElementById('o-algrate-34').checked) {
          document.getElementById('r-algrate-34').style.color = 'red'
          document.getElementById('r-algrate-34').innerHTML = 'Incorrect!'
          document.getElementById('r-algrate-32').style.color = 'blue'
          document.getElementById('r-algrate-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algrate-32').classList.add("correct")
          document.getElementById('b-algrate-31').classList.add("incorrect")
          document.getElementById('b-algrate-33').classList.add("incorrect")
          document.getElementById('b-algrate-34').classList.add("incorrect")
    
          document.getElementById('sa-algrate-3').disabled = true;
          document.getElementById('o-algrate-31').disabled = true;
          document.getElementById('o-algrate-32').disabled = true;
          document.getElementById('o-algrate-33').disabled = true;
          document.getElementById('o-algrate-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algrate3', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algrate-4') != null) {
      algrate4But.onclick = function() {
        if (document.getElementById('o-algrate-41').checked) {
          document.getElementById('r-algrate-41').style.color = 'red'
          document.getElementById('r-algrate-41').innerHTML = 'Incorrect!'
          document.getElementById('r-algrate-43').style.color = 'blue'
          document.getElementById('r-algrate-43').innerHTML = 'Correct!'
          
          document.getElementById('b-algrate-43').classList.add("correct")
          document.getElementById('b-algrate-41').classList.add("incorrect")
          document.getElementById('b-algrate-42').classList.add("incorrect")
          document.getElementById('b-algrate-44').classList.add("incorrect")
    
          document.getElementById('sa-algrate-4').disabled = true;
          document.getElementById('o-algrate-41').disabled = true;
          document.getElementById('o-algrate-42').disabled = true;
          document.getElementById('o-algrate-43').disabled = true;
          document.getElementById('o-algrate-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algrate4', 0)
        }
        if (document.getElementById('o-algrate-42').checked) {
          document.getElementById('r-algrate-42').style.color = 'red'
          document.getElementById('r-algrate-42').innerHTML = 'Incorrect!'
          document.getElementById('r-algrate-43').style.color = 'blue'
          document.getElementById('r-algrate-43').innerHTML = 'Correct!'
          
          document.getElementById('b-algrate-43').classList.add("correct")
          document.getElementById('b-algrate-41').classList.add("incorrect")
          document.getElementById('b-algrate-42').classList.add("incorrect")
          document.getElementById('b-algrate-44').classList.add("incorrect")
    
          document.getElementById('sa-algrate-4').disabled = true;
          document.getElementById('o-algrate-41').disabled = true;
          document.getElementById('o-algrate-42').disabled = true;
          document.getElementById('o-algrate-43').disabled = true;
          document.getElementById('o-algrate-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algrate4', 0)
        }
        if (document.getElementById('o-algrate-43').checked) {
          document.getElementById('r-algrate-43').style.color = 'blue'
          document.getElementById('r-algrate-43').innerHTML = 'Correct!'
          
          document.getElementById('b-algrate-43').classList.add("correct")
          document.getElementById('b-algrate-41').classList.add("incorrect")
          document.getElementById('b-algrate-42').classList.add("incorrect")
          document.getElementById('b-algrate-44').classList.add("incorrect")
    
          document.getElementById('sa-algrate-4').disabled = true;
          document.getElementById('o-algrate-41').disabled = true;
          document.getElementById('o-algrate-42').disabled = true;
          document.getElementById('o-algrate-43').disabled = true;
          document.getElementById('o-algrate-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algrate4', 1)
        }
        if (document.getElementById('o-algrate-44').checked) {
          document.getElementById('r-algrate-44').style.color = 'red'
          document.getElementById('r-algrate-44').innerHTML = 'Incorrect!'
          document.getElementById('r-algrate-43').style.color = 'blue'
          document.getElementById('r-algrate-43').innerHTML = 'Correct!'
          
          document.getElementById('b-algrate-43').classList.add("correct")
          document.getElementById('b-algrate-41').classList.add("incorrect")
          document.getElementById('b-algrate-42').classList.add("incorrect")
          document.getElementById('b-algrate-44').classList.add("incorrect")
    
          document.getElementById('sa-algrate-4').disabled = true;
          document.getElementById('o-algrate-41').disabled = true;
          document.getElementById('o-algrate-42').disabled = true;
          document.getElementById('o-algrate-43').disabled = true;
          document.getElementById('o-algrate-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algrate4', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algrate-5') != null) {
      algrate5But.onclick = function() {
        if (document.getElementById('o-algrate-51').checked) {
          document.getElementById('r-algrate-51').style.color = 'red'
          document.getElementById('r-algrate-51').innerHTML = 'Incorrect!'
          document.getElementById('r-algrate-53').style.color = 'blue'
          document.getElementById('r-algrate-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algrate-53').classList.add("correct")
          document.getElementById('b-algrate-51').classList.add("incorrect")
          document.getElementById('b-algrate-52').classList.add("incorrect")
          document.getElementById('b-algrate-54').classList.add("incorrect")
    
          document.getElementById('sa-algrate-5').disabled = true;
          document.getElementById('o-algrate-51').disabled = true;
          document.getElementById('o-algrate-52').disabled = true;
          document.getElementById('o-algrate-53').disabled = true;
          document.getElementById('o-algrate-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algrate5', 0)
        }
        if (document.getElementById('o-algrate-52').checked) {
          document.getElementById('r-algrate-52').style.color = 'red'
          document.getElementById('r-algrate-52').innerHTML = 'Incorrect!'
          document.getElementById('r-algrate-53').style.color = 'blue'
          document.getElementById('r-algrate-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algrate-53').classList.add("correct")
          document.getElementById('b-algrate-51').classList.add("incorrect")
          document.getElementById('b-algrate-52').classList.add("incorrect")
          document.getElementById('b-algrate-54').classList.add("incorrect")
    
          document.getElementById('sa-algrate-5').disabled = true;
          document.getElementById('o-algrate-51').disabled = true;
          document.getElementById('o-algrate-52').disabled = true;
          document.getElementById('o-algrate-53').disabled = true;
          document.getElementById('o-algrate-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algrate5', 0)
        }
        if (document.getElementById('o-algrate-53').checked) {
          document.getElementById('r-algrate-53').style.color = 'blue'
          document.getElementById('r-algrate-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algrate-53').classList.add("correct")
          document.getElementById('b-algrate-51').classList.add("incorrect")
          document.getElementById('b-algrate-52').classList.add("incorrect")
          document.getElementById('b-algrate-54').classList.add("incorrect")
    
          document.getElementById('sa-algrate-5').disabled = true;
          document.getElementById('o-algrate-51').disabled = true;
          document.getElementById('o-algrate-52').disabled = true;
          document.getElementById('o-algrate-53').disabled = true;
          document.getElementById('o-algrate-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algrate5', 1)
        }
        if (document.getElementById('o-algrate-54').checked) {
          document.getElementById('r-algrate-54').style.color = 'red'
          document.getElementById('r-algrate-54').innerHTML = 'Incorrect!'
          document.getElementById('r-algrate-53').style.color = 'blue'
          document.getElementById('r-algrate-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algrate-53').classList.add("correct")
          document.getElementById('b-algrate-51').classList.add("incorrect")
          document.getElementById('b-algrate-52').classList.add("incorrect")
          document.getElementById('b-algrate-54').classList.add("incorrect")
    
          document.getElementById('sa-algrate-5').disabled = true;
          document.getElementById('o-algrate-51').disabled = true;
          document.getElementById('o-algrate-52').disabled = true;
          document.getElementById('o-algrate-53').disabled = true;
          document.getElementById('o-algrate-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algrate5', 0)
        }
      }
    }
        
         
      if (document.getElementById('sa-algrate-6') != null) {
      algrate6But.onclick = function() {
        if (document.getElementById('o-algrate-61').checked) {
          document.getElementById('r-algrate-61').style.color = 'red'
          document.getElementById('r-algrate-61').innerHTML = 'Incorrect!'
          document.getElementById('r-algrate-62').style.color = 'blue'
          document.getElementById('r-algrate-62').innerHTML = 'Correct!'
          
          document.getElementById('b-algrate-62').classList.add("correct")
          document.getElementById('b-algrate-61').classList.add("incorrect")
          document.getElementById('b-algrate-64').classList.add("incorrect")
          document.getElementById('b-algrate-63').classList.add("incorrect")
    
          document.getElementById('sa-algrate-6').disabled = true;
          document.getElementById('o-algrate-61').disabled = true;
          document.getElementById('o-algrate-62').disabled = true;
          document.getElementById('o-algrate-63').disabled = true;
          document.getElementById('o-algrate-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algrate6', 0)
        }
        if (document.getElementById('o-algrate-62').checked) {
          document.getElementById('r-algrate-62').style.color = 'blue'
          document.getElementById('r-algrate-62').innerHTML = 'Correct!'
          
          document.getElementById('b-algrate-62').classList.add("correct")
          document.getElementById('b-algrate-61').classList.add("incorrect")
          document.getElementById('b-algrate-64').classList.add("incorrect")
          document.getElementById('b-algrate-63').classList.add("incorrect")
    
          document.getElementById('sa-algrate-6').disabled = true;
          document.getElementById('o-algrate-61').disabled = true;
          document.getElementById('o-algrate-62').disabled = true;
          document.getElementById('o-algrate-63').disabled = true;
          document.getElementById('o-algrate-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algrate6', 1)
        }
        if (document.getElementById('o-algrate-63').checked) {
          document.getElementById('r-algrate-63').style.color = 'red'
          document.getElementById('r-algrate-63').innerHTML = 'Incorrect!'
          document.getElementById('r-algrate-62').style.color = 'blue'
          document.getElementById('r-algrate-62').innerHTML = 'Correct!'
          
          document.getElementById('b-algrate-62').classList.add("correct")
          document.getElementById('b-algrate-61').classList.add("incorrect")
          document.getElementById('b-algrate-64').classList.add("incorrect")
          document.getElementById('b-algrate-63').classList.add("incorrect")
    
          document.getElementById('sa-algrate-6').disabled = true;
          document.getElementById('o-algrate-61').disabled = true;
          document.getElementById('o-algrate-62').disabled = true;
          document.getElementById('o-algrate-63').disabled = true;
          document.getElementById('o-algrate-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algrate6', 0)
        }
        if (document.getElementById('o-algrate-64').checked) {
          document.getElementById('r-algrate-64').style.color = 'red'
          document.getElementById('r-algrate-64').innerHTML = 'Incorrect!'
          document.getElementById('r-algrate-62').style.color = 'blue'
          document.getElementById('r-algrate-62').innerHTML = 'Correct!'
          
          document.getElementById('b-algrate-62').classList.add("correct")
          document.getElementById('b-algrate-61').classList.add("incorrect")
          document.getElementById('b-algrate-64').classList.add("incorrect")
          document.getElementById('b-algrate-63').classList.add("incorrect")
    
          document.getElementById('sa-algrate-6').disabled = true;
          document.getElementById('o-algrate-61').disabled = true;
          document.getElementById('o-algrate-62').disabled = true;
          document.getElementById('o-algrate-63').disabled = true;
          document.getElementById('o-algrate-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algrate6', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algrate-7') != null) {
      algrate7But.onclick = function() {
        if (document.getElementById('o-algrate-71').checked) {
          document.getElementById('r-algrate-71').style.color = 'red'
          document.getElementById('r-algrate-71').innerHTML = 'Incorrect!'
          document.getElementById('r-algrate-72').style.color = 'blue'
          document.getElementById('r-algrate-72').innerHTML = 'Correct!'
          
          document.getElementById('b-algrate-72').classList.add("correct")
          document.getElementById('b-algrate-71').classList.add("incorrect")
          document.getElementById('b-algrate-74').classList.add("incorrect")
          document.getElementById('b-algrate-73').classList.add("incorrect")
    
          document.getElementById('sa-algrate-7').disabled = true;
          document.getElementById('o-algrate-71').disabled = true;
          document.getElementById('o-algrate-72').disabled = true;
          document.getElementById('o-algrate-73').disabled = true;
          document.getElementById('o-algrate-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algrate7', 0)
        }
        if (document.getElementById('o-algrate-72').checked) {
          document.getElementById('r-algrate-72').style.color = 'blue'
          document.getElementById('r-algrate-72').innerHTML = 'Correct!'
          
          document.getElementById('b-algrate-72').classList.add("correct")
          document.getElementById('b-algrate-71').classList.add("incorrect")
          document.getElementById('b-algrate-74').classList.add("incorrect")
          document.getElementById('b-algrate-73').classList.add("incorrect")
    
          document.getElementById('sa-algrate-7').disabled = true;
          document.getElementById('o-algrate-71').disabled = true;
          document.getElementById('o-algrate-72').disabled = true;
          document.getElementById('o-algrate-73').disabled = true;
          document.getElementById('o-algrate-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algrate7', 1)
        }
        if (document.getElementById('o-algrate-73').checked) {
          document.getElementById('r-algrate-73').style.color = 'red'
          document.getElementById('r-algrate-73').innerHTML = 'Incorrect!'
          document.getElementById('r-algrate-72').style.color = 'blue'
          document.getElementById('r-algrate-72').innerHTML = 'Correct!'
          
          document.getElementById('b-algrate-72').classList.add("correct")
          document.getElementById('b-algrate-71').classList.add("incorrect")
          document.getElementById('b-algrate-74').classList.add("incorrect")
          document.getElementById('b-algrate-73').classList.add("incorrect")
    
          document.getElementById('sa-algrate-7').disabled = true;
          document.getElementById('o-algrate-71').disabled = true;
          document.getElementById('o-algrate-72').disabled = true;
          document.getElementById('o-algrate-73').disabled = true;
          document.getElementById('o-algrate-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algrate7', 0)
        }
        if (document.getElementById('o-algrate-74').checked) {
          document.getElementById('r-algrate-74').style.color = 'red'
          document.getElementById('r-algrate-74').innerHTML = 'Incorrect!'
          document.getElementById('r-algrate-72').style.color = 'blue'
          document.getElementById('r-algrate-72').innerHTML = 'Correct!'
          
          document.getElementById('b-algrate-72').classList.add("correct")
          document.getElementById('b-algrate-71').classList.add("incorrect")
          document.getElementById('b-algrate-74').classList.add("incorrect")
          document.getElementById('b-algrate-73').classList.add("incorrect")
    
          document.getElementById('sa-algrate-7').disabled = true;
          document.getElementById('o-algrate-71').disabled = true;
          document.getElementById('o-algrate-72').disabled = true;
          document.getElementById('o-algrate-73').disabled = true;
          document.getElementById('o-algrate-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algrate7', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-algrate-8') != null) {
      algrate8But.onclick = function() {
        if (document.getElementById('o-algrate-81').checked) {
          document.getElementById('r-algrate-81').style.color = 'red'
          document.getElementById('r-algrate-81').innerHTML = 'Incorrect!'
          document.getElementById('r-algrate-83').style.color = 'blue'
          document.getElementById('r-algrate-83').innerHTML = 'Correct!'
          
          document.getElementById('b-algrate-83').classList.add("correct")
          document.getElementById('b-algrate-81').classList.add("incorrect")
          document.getElementById('b-algrate-82').classList.add("incorrect")
          document.getElementById('b-algrate-84').classList.add("incorrect")
    
          document.getElementById('sa-algrate-8').disabled = true;
          document.getElementById('o-algrate-81').disabled = true;
          document.getElementById('o-algrate-82').disabled = true;
          document.getElementById('o-algrate-83').disabled = true;
          document.getElementById('o-algrate-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algrate8', 0)
        }
        if (document.getElementById('o-algrate-82').checked) {
          document.getElementById('r-algrate-82').style.color = 'red'
          document.getElementById('r-algrate-82').innerHTML = 'Incorrect!'
          document.getElementById('r-algrate-83').style.color = 'blue'
          document.getElementById('r-algrate-83').innerHTML = 'Correct!'
          
          document.getElementById('b-algrate-83').classList.add("correct")
          document.getElementById('b-algrate-81').classList.add("incorrect")
          document.getElementById('b-algrate-82').classList.add("incorrect")
          document.getElementById('b-algrate-84').classList.add("incorrect")
    
          document.getElementById('sa-algrate-8').disabled = true;
          document.getElementById('o-algrate-81').disabled = true;
          document.getElementById('o-algrate-82').disabled = true;
          document.getElementById('o-algrate-83').disabled = true;
          document.getElementById('o-algrate-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algrate8', 0)
        }
        if (document.getElementById('o-algrate-83').checked) {
          document.getElementById('r-algrate-83').style.color = 'blue'
          document.getElementById('r-algrate-83').innerHTML = 'Correct!'
          
          document.getElementById('b-algrate-83').classList.add("correct")
          document.getElementById('b-algrate-81').classList.add("incorrect")
          document.getElementById('b-algrate-82').classList.add("incorrect")
          document.getElementById('b-algrate-84').classList.add("incorrect")
    
          document.getElementById('sa-algrate-8').disabled = true;
          document.getElementById('o-algrate-81').disabled = true;
          document.getElementById('o-algrate-82').disabled = true;
          document.getElementById('o-algrate-83').disabled = true;
          document.getElementById('o-algrate-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algrate8', 1)
        }
        if (document.getElementById('o-algrate-84').checked) {
          document.getElementById('r-algrate-84').style.color = 'red'
          document.getElementById('r-algrate-84').innerHTML = 'Incorrect!'
          document.getElementById('r-algrate-83').style.color = 'blue'
          document.getElementById('r-algrate-83').innerHTML = 'Correct!'
          
          document.getElementById('b-algrate-83').classList.add("correct")
          document.getElementById('b-algrate-81').classList.add("incorrect")
          document.getElementById('b-algrate-82').classList.add("incorrect")
          document.getElementById('b-algrate-84').classList.add("incorrect")
    
          document.getElementById('sa-algrate-8').disabled = true;
          document.getElementById('o-algrate-81').disabled = true;
          document.getElementById('o-algrate-82').disabled = true;
          document.getElementById('o-algrate-83').disabled = true;
          document.getElementById('o-algrate-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algrate8', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-algrate-9') != null) {
      algrate9But.onclick = function() {
        if (document.getElementById('o-algrate-91').checked) {
          document.getElementById('r-algrate-91').style.color = 'red'
          document.getElementById('r-algrate-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algrate-92').style.color = 'blue'
          document.getElementById('r-algrate-92').innerHTML = 'Correct!'
          
          document.getElementById('b-algrate-92').classList.add("correct")
          document.getElementById('b-algrate-91').classList.add("incorrect")
          document.getElementById('b-algrate-94').classList.add("incorrect")
          document.getElementById('b-algrate-93').classList.add("incorrect")
    
          document.getElementById('sa-algrate-9').disabled = true;
          document.getElementById('o-algrate-91').disabled = true;
          document.getElementById('o-algrate-92').disabled = true;
          document.getElementById('o-algrate-93').disabled = true;
          document.getElementById('o-algrate-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algrate9', 0)
        }
        if (document.getElementById('o-algrate-92').checked) {
          document.getElementById('r-algrate-92').style.color = 'blue'
          document.getElementById('r-algrate-92').innerHTML = 'Correct!'
          
          document.getElementById('b-algrate-92').classList.add("correct")
          document.getElementById('b-algrate-91').classList.add("incorrect")
          document.getElementById('b-algrate-94').classList.add("incorrect")
          document.getElementById('b-algrate-93').classList.add("incorrect")
    
          document.getElementById('sa-algrate-9').disabled = true;
          document.getElementById('o-algrate-91').disabled = true;
          document.getElementById('o-algrate-92').disabled = true;
          document.getElementById('o-algrate-93').disabled = true;
          document.getElementById('o-algrate-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algrate9', 1)
        }
        if (document.getElementById('o-algrate-93').checked) {
          document.getElementById('r-algrate-93').style.color = 'red'
          document.getElementById('r-algrate-93').innerHTML = 'Incorrect!'
          document.getElementById('r-algrate-92').style.color = 'blue'
          document.getElementById('r-algrate-92').innerHTML = 'Correct!'
          
          document.getElementById('b-algrate-92').classList.add("correct")
          document.getElementById('b-algrate-91').classList.add("incorrect")
          document.getElementById('b-algrate-94').classList.add("incorrect")
          document.getElementById('b-algrate-93').classList.add("incorrect")
    
          document.getElementById('sa-algrate-9').disabled = true;
          document.getElementById('o-algrate-91').disabled = true;
          document.getElementById('o-algrate-92').disabled = true;
          document.getElementById('o-algrate-93').disabled = true;
          document.getElementById('o-algrate-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algrate9', 0)
        }
        if (document.getElementById('o-algrate-94').checked) {
          document.getElementById('r-algrate-94').style.color = 'red'
          document.getElementById('r-algrate-94').innerHTML = 'Incorrect!'
          document.getElementById('r-algrate-92').style.color = 'blue'
          document.getElementById('r-algrate-92').innerHTML = 'Correct!'
          
          document.getElementById('b-algrate-92').classList.add("correct")
          document.getElementById('b-algrate-91').classList.add("incorrect")
          document.getElementById('b-algrate-94').classList.add("incorrect")
          document.getElementById('b-algrate-93').classList.add("incorrect")
    
          document.getElementById('sa-algrate-9').disabled = true;
          document.getElementById('o-algrate-91').disabled = true;
          document.getElementById('o-algrate-92').disabled = true;
          document.getElementById('o-algrate-93').disabled = true;
          document.getElementById('o-algrate-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algrate9', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algrate-10') != null) {
      algrate10But.onclick = function() {
        if (document.getElementById('o-algrate-101').checked) {
          document.getElementById('r-algrate-101').style.color = 'red'
          document.getElementById('r-algrate-101').innerHTML = 'Incorrect!'
          document.getElementById('r-algrate-103').style.color = 'blue'
          document.getElementById('r-algrate-103').innerHTML = 'Correct!'
          
          document.getElementById('b-algrate-103').classList.add("correct")
          document.getElementById('b-algrate-101').classList.add("incorrect")
          document.getElementById('b-algrate-102').classList.add("incorrect")
          document.getElementById('b-algrate-104').classList.add("incorrect")
    
          document.getElementById('sa-algrate-10').disabled = true;
          document.getElementById('o-algrate-101').disabled = true;
          document.getElementById('o-algrate-102').disabled = true;
          document.getElementById('o-algrate-103').disabled = true;
          document.getElementById('o-algrate-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algrate10', 0)
        }
        if (document.getElementById('o-algrate-102').checked) {
          document.getElementById('r-algrate-102').style.color = 'red'
          document.getElementById('r-algrate-102').innerHTML = 'Incorrect!'
          document.getElementById('r-algrate-103').style.color = 'blue'
          document.getElementById('r-algrate-103').innerHTML = 'Correct!'
          
          document.getElementById('b-algrate-103').classList.add("correct")
          document.getElementById('b-algrate-101').classList.add("incorrect")
          document.getElementById('b-algrate-102').classList.add("incorrect")
          document.getElementById('b-algrate-104').classList.add("incorrect")
    
          document.getElementById('sa-algrate-10').disabled = true;
          document.getElementById('o-algrate-101').disabled = true;
          document.getElementById('o-algrate-102').disabled = true;
          document.getElementById('o-algrate-103').disabled = true;
          document.getElementById('o-algrate-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algrate10', 0)
        }
        if (document.getElementById('o-algrate-103').checked) {
          document.getElementById('r-algrate-103').style.color = 'blue'
          document.getElementById('r-algrate-103').innerHTML = 'Correct!'
          
          document.getElementById('b-algrate-103').classList.add("correct")
          document.getElementById('b-algrate-101').classList.add("incorrect")
          document.getElementById('b-algrate-102').classList.add("incorrect")
          document.getElementById('b-algrate-104').classList.add("incorrect")
    
          document.getElementById('sa-algrate-10').disabled = true;
          document.getElementById('o-algrate-101').disabled = true;
          document.getElementById('o-algrate-102').disabled = true;
          document.getElementById('o-algrate-103').disabled = true;
          document.getElementById('o-algrate-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algrate10', 1)
        }
        if (document.getElementById('o-algrate-104').checked) {
          document.getElementById('r-algrate-104').style.color = 'red'
          document.getElementById('r-algrate-104').innerHTML = 'Incorrect!'
          document.getElementById('r-algrate-103').style.color = 'blue'
          document.getElementById('r-algrate-103').innerHTML = 'Correct!'
          
          document.getElementById('b-algrate-103').classList.add("correct")
          document.getElementById('b-algrate-101').classList.add("incorrect")
          document.getElementById('b-algrate-102').classList.add("incorrect")
          document.getElementById('b-algrate-104').classList.add("incorrect")
    
          document.getElementById('sa-algrate-10').disabled = true;
          document.getElementById('o-algrate-101').disabled = true;
          document.getElementById('o-algrate-102').disabled = true;
          document.getElementById('o-algrate-103').disabled = true;
          document.getElementById('o-algrate-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algrate10', 0)
        }
      }
    }
    