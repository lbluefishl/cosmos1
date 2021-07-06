
  let algfunc1But = document.getElementById('sa-algfunc-1');
  let algfunc2But = document.getElementById('sa-algfunc-2');
  let algfunc3But = document.getElementById('sa-algfunc-3');
  let algfunc4But = document.getElementById('sa-algfunc-4');
  let algfunc5But = document.getElementById('sa-algfunc-5');
  let algfunc6But = document.getElementById('sa-algfunc-6');
  let algfunc7But = document.getElementById('sa-algfunc-7');
  let algfunc8But = document.getElementById('sa-algfunc-8');
  let algfunc9But = document.getElementById('sa-algfunc-9');
  let algfunc10But = document.getElementById('sa-algfunc-10');


  showExplanation1 = function() {
    document.getElementById('e-algfunc-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-algfunc-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-algfunc-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-algfunc-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-algfunc-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-algfunc-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-algfunc-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-algfunc-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-algfunc-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-algfunc-10').style.display = 'block';
     } 



     if (document.getElementById('sa-algfunc-1') != null) {
      algfunc1But.onclick = function () {
        if (document.getElementById('o-algfunc-11').checked) {
          document.getElementById('r-algfunc-11').style.color = 'blue'
          document.getElementById('r-algfunc-11').innerHTML = 'Correct!'
    
          document.getElementById('b-algfunc-11').classList.add("correct")
          document.getElementById('b-algfunc-12').classList.add("incorrect")
          document.getElementById('b-algfunc-13').classList.add("incorrect")
          document.getElementById('b-algfunc-14').classList.add("incorrect")
    
          document.getElementById('sa-algfunc-1').disabled = true;
          document.getElementById('o-algfunc-11').disabled = true;
          document.getElementById('o-algfunc-12').disabled = true;
          document.getElementById('o-algfunc-13').disabled = true;
          document.getElementById('o-algfunc-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algfunc1', 1)
        }
    
        if (document.getElementById('o-algfunc-12').checked) {
         
          document.getElementById('r-algfunc-12').style.color = 'red'
          document.getElementById('r-algfunc-12').innerHTML = 'Incorrect!'
          document.getElementById('r-algfunc-11').style.color = 'blue'
          document.getElementById('r-algfunc-11').innerHTML = 'Correct!'
    
          document.getElementById('b-algfunc-11').classList.add("correct")
          document.getElementById('b-algfunc-12').classList.add("incorrect")
          document.getElementById('b-algfunc-13').classList.add("incorrect")
          document.getElementById('b-algfunc-14').classList.add("incorrect")
    
          document.getElementById('sa-algfunc-1').disabled = true;
          document.getElementById('o-algfunc-11').disabled = true;
          document.getElementById('o-algfunc-12').disabled = true;
          document.getElementById('o-algfunc-13').disabled = true;
          document.getElementById('o-algfunc-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algfunc1', 0)
        }
        if (document.getElementById('o-algfunc-13').checked) {
          document.getElementById('r-algfunc-13').style.color = 'red'
          document.getElementById('r-algfunc-13').innerHTML = 'Incorrect!'
          document.getElementById('r-algfunc-11').style.color = 'blue'
          document.getElementById('r-algfunc-11').innerHTML = 'Correct!'
          
          document.getElementById('b-algfunc-11').classList.add("correct")
          document.getElementById('b-algfunc-12').classList.add("incorrect")
          document.getElementById('b-algfunc-13').classList.add("incorrect")
          document.getElementById('b-algfunc-14').classList.add("incorrect")
    
          document.getElementById('sa-algfunc-1').disabled = true;
          document.getElementById('o-algfunc-11').disabled = true;
          document.getElementById('o-algfunc-12').disabled = true;
          document.getElementById('o-algfunc-13').disabled = true;
          document.getElementById('o-algfunc-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algfunc1', 0)
        }
        if (document.getElementById('o-algfunc-14').checked) {
          document.getElementById('r-algfunc-14').style.color = 'red'
          document.getElementById('r-algfunc-14').innerHTML = 'Incorrect!'
          document.getElementById('r-algfunc-11').style.color = 'blue'
          document.getElementById('r-algfunc-11').innerHTML = 'Correct!'
          
          document.getElementById('b-algfunc-11').classList.add("correct")
          document.getElementById('b-algfunc-12').classList.add("incorrect")
          document.getElementById('b-algfunc-13').classList.add("incorrect")
          document.getElementById('b-algfunc-14').classList.add("incorrect")
    
          document.getElementById('sa-algfunc-1').disabled = true;
          document.getElementById('o-algfunc-11').disabled = true;
          document.getElementById('o-algfunc-12').disabled = true;
          document.getElementById('o-algfunc-13').disabled = true;
          document.getElementById('o-algfunc-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algfunc1', 0)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-algfunc-2') != null) {
      algfunc2But.onclick = function() {
        if (document.getElementById('o-algfunc-21').checked) {
          document.getElementById('r-algfunc-21').style.color = 'red'
          document.getElementById('r-algfunc-21').innerHTML = 'Incorrect!'
          document.getElementById('r-algfunc-22').style.color = 'blue'
          document.getElementById('r-algfunc-22').innerHTML = 'Correct!'
          
          document.getElementById('b-algfunc-22').classList.add("correct")
          document.getElementById('b-algfunc-21').classList.add("incorrect")
          document.getElementById('b-algfunc-23').classList.add("incorrect")
          document.getElementById('b-algfunc-24').classList.add("incorrect")
    
          document.getElementById('sa-algfunc-2').disabled = true;
          document.getElementById('o-algfunc-21').disabled = true;
          document.getElementById('o-algfunc-22').disabled = true;
          document.getElementById('o-algfunc-23').disabled = true;
          document.getElementById('o-algfunc-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algfunc2', 0)
        }
        if (document.getElementById('o-algfunc-22').checked) {
          document.getElementById('r-algfunc-22').style.color = 'blue'
          document.getElementById('r-algfunc-22').innerHTML = 'Correct!'
          
          document.getElementById('b-algfunc-22').classList.add("correct")
          document.getElementById('b-algfunc-21').classList.add("incorrect")
          document.getElementById('b-algfunc-23').classList.add("incorrect")
          document.getElementById('b-algfunc-24').classList.add("incorrect")
    
          document.getElementById('sa-algfunc-2').disabled = true;
          document.getElementById('o-algfunc-21').disabled = true;
          document.getElementById('o-algfunc-22').disabled = true;
          document.getElementById('o-algfunc-23').disabled = true;
          document.getElementById('o-algfunc-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algfunc2', 1)
        }
        if (document.getElementById('o-algfunc-23').checked) {
          document.getElementById('r-algfunc-23').style.color = 'red'
          document.getElementById('r-algfunc-23').innerHTML = 'Incorrect!'
          document.getElementById('r-algfunc-22').style.color = 'blue'
          document.getElementById('r-algfunc-22').innerHTML = 'Correct!'
          
          document.getElementById('b-algfunc-22').classList.add("correct")
          document.getElementById('b-algfunc-21').classList.add("incorrect")
          document.getElementById('b-algfunc-23').classList.add("incorrect")
          document.getElementById('b-algfunc-24').classList.add("incorrect")
    
          document.getElementById('sa-algfunc-2').disabled = true;
          document.getElementById('o-algfunc-21').disabled = true;
          document.getElementById('o-algfunc-22').disabled = true;
          document.getElementById('o-algfunc-23').disabled = true;
          document.getElementById('o-algfunc-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algfunc2', 0)
        }
        if (document.getElementById('o-algfunc-24').checked) {
          document.getElementById('r-algfunc-24').style.color = 'red'
          document.getElementById('r-algfunc-24').innerHTML = 'Incorrect!'
          document.getElementById('r-algfunc-22').style.color = 'blue'
          document.getElementById('r-algfunc-22').innerHTML = 'Correct!'
          
          document.getElementById('b-algfunc-22').classList.add("correct")
          document.getElementById('b-algfunc-21').classList.add("incorrect")
          document.getElementById('b-algfunc-23').classList.add("incorrect")
          document.getElementById('b-algfunc-24').classList.add("incorrect")
    
          document.getElementById('sa-algfunc-2').disabled = true;
          document.getElementById('o-algfunc-21').disabled = true;
          document.getElementById('o-algfunc-22').disabled = true;
          document.getElementById('o-algfunc-23').disabled = true;
          document.getElementById('o-algfunc-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algfunc2', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algfunc-3') != null) {
      algfunc3But.onclick = function() {
        if (document.getElementById('o-algfunc-31').checked) {
          document.getElementById('r-algfunc-31').style.color = 'red'
          document.getElementById('r-algfunc-31').innerHTML = 'Incorrect!'
          document.getElementById('r-algfunc-33').style.color = 'blue'
          document.getElementById('r-algfunc-33').innerHTML = 'Correct!'
          
          document.getElementById('b-algfunc-33').classList.add("correct")
          document.getElementById('b-algfunc-31').classList.add("incorrect")
          document.getElementById('b-algfunc-32').classList.add("incorrect")
          document.getElementById('b-algfunc-34').classList.add("incorrect")
    
          document.getElementById('sa-algfunc-3').disabled = true;
          document.getElementById('o-algfunc-31').disabled = true;
          document.getElementById('o-algfunc-32').disabled = true;
          document.getElementById('o-algfunc-33').disabled = true;
          document.getElementById('o-algfunc-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algfunc3', 0)
        }
        if (document.getElementById('o-algfunc-32').checked) {
          document.getElementById('r-algfunc-32').style.color = 'red'
          document.getElementById('r-algfunc-32').innerHTML = 'Incorrect!'
          document.getElementById('r-algfunc-33').style.color = 'blue'
          document.getElementById('r-algfunc-33').innerHTML = 'Correct!'
          
          document.getElementById('b-algfunc-33').classList.add("correct")
          document.getElementById('b-algfunc-31').classList.add("incorrect")
          document.getElementById('b-algfunc-32').classList.add("incorrect")
          document.getElementById('b-algfunc-34').classList.add("incorrect")
    
          document.getElementById('sa-algfunc-3').disabled = true;
          document.getElementById('o-algfunc-31').disabled = true;
          document.getElementById('o-algfunc-32').disabled = true;
          document.getElementById('o-algfunc-33').disabled = true;
          document.getElementById('o-algfunc-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algfunc3', 0)
        }
        if (document.getElementById('o-algfunc-33').checked) {
          document.getElementById('r-algfunc-33').style.color = 'blue'
          document.getElementById('r-algfunc-33').innerHTML = 'Correct!'
          
          document.getElementById('b-algfunc-33').classList.add("correct")
          document.getElementById('b-algfunc-31').classList.add("incorrect")
          document.getElementById('b-algfunc-32').classList.add("incorrect")
          document.getElementById('b-algfunc-34').classList.add("incorrect")
    
          document.getElementById('sa-algfunc-3').disabled = true;
          document.getElementById('o-algfunc-31').disabled = true;
          document.getElementById('o-algfunc-32').disabled = true;
          document.getElementById('o-algfunc-33').disabled = true;
          document.getElementById('o-algfunc-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algfunc3', 1)
        }
        if (document.getElementById('o-algfunc-34').checked) {
          document.getElementById('r-algfunc-34').style.color = 'red'
          document.getElementById('r-algfunc-34').innerHTML = 'Incorrect!'
          document.getElementById('r-algfunc-33').style.color = 'blue'
          document.getElementById('r-algfunc-33').innerHTML = 'Correct!'
          
          document.getElementById('b-algfunc-33').classList.add("correct")
          document.getElementById('b-algfunc-31').classList.add("incorrect")
          document.getElementById('b-algfunc-32').classList.add("incorrect")
          document.getElementById('b-algfunc-34').classList.add("incorrect")
    
          document.getElementById('sa-algfunc-3').disabled = true;
          document.getElementById('o-algfunc-31').disabled = true;
          document.getElementById('o-algfunc-32').disabled = true;
          document.getElementById('o-algfunc-33').disabled = true;
          document.getElementById('o-algfunc-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algfunc3', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algfunc-4') != null) {
      algfunc4But.onclick = function() {
        if (document.getElementById('o-algfunc-41').checked) {
          document.getElementById('r-algfunc-41').style.color = 'blue'
          document.getElementById('r-algfunc-41').innerHTML = 'Correct!'
          
          document.getElementById('b-algfunc-41').classList.add("correct")
          document.getElementById('b-algfunc-44').classList.add("incorrect")
          document.getElementById('b-algfunc-42').classList.add("incorrect")
          document.getElementById('b-algfunc-43').classList.add("incorrect")
    
          document.getElementById('sa-algfunc-4').disabled = true;
          document.getElementById('o-algfunc-41').disabled = true;
          document.getElementById('o-algfunc-42').disabled = true;
          document.getElementById('o-algfunc-43').disabled = true;
          document.getElementById('o-algfunc-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algfunc4', 1)
        }
        if (document.getElementById('o-algfunc-42').checked) {
          document.getElementById('r-algfunc-42').style.color = 'red'
          document.getElementById('r-algfunc-42').innerHTML = 'Incorrect!'
          document.getElementById('r-algfunc-41').style.color = 'blue'
          document.getElementById('r-algfunc-41').innerHTML = 'Correct!'
          
          document.getElementById('b-algfunc-41').classList.add("correct")
          document.getElementById('b-algfunc-44').classList.add("incorrect")
          document.getElementById('b-algfunc-42').classList.add("incorrect")
          document.getElementById('b-algfunc-43').classList.add("incorrect")
    
          document.getElementById('sa-algfunc-4').disabled = true;
          document.getElementById('o-algfunc-41').disabled = true;
          document.getElementById('o-algfunc-42').disabled = true;
          document.getElementById('o-algfunc-43').disabled = true;
          document.getElementById('o-algfunc-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algfunc4', 0)
        }
        if (document.getElementById('o-algfunc-43').checked) {
          document.getElementById('r-algfunc-43').style.color = 'red'
          document.getElementById('r-algfunc-43').innerHTML = 'Incorrect!'
          document.getElementById('r-algfunc-41').style.color = 'blue'
          document.getElementById('r-algfunc-41').innerHTML = 'Correct!'
          
          document.getElementById('b-algfunc-41').classList.add("correct")
          document.getElementById('b-algfunc-44').classList.add("incorrect")
          document.getElementById('b-algfunc-42').classList.add("incorrect")
          document.getElementById('b-algfunc-43').classList.add("incorrect")
    
          document.getElementById('sa-algfunc-4').disabled = true;
          document.getElementById('o-algfunc-41').disabled = true;
          document.getElementById('o-algfunc-42').disabled = true;
          document.getElementById('o-algfunc-43').disabled = true;
          document.getElementById('o-algfunc-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algfunc4', 0)
        }
        if (document.getElementById('o-algfunc-44').checked) {
          document.getElementById('r-algfunc-44').style.color = 'red'
          document.getElementById('r-algfunc-44').innerHTML = 'Incorrect!'
          document.getElementById('r-algfunc-41').style.color = 'blue'
          document.getElementById('r-algfunc-41').innerHTML = 'Correct!'
          
          document.getElementById('b-algfunc-44').classList.add("correct")
          document.getElementById('b-algfunc-41').classList.add("incorrect")
          document.getElementById('b-algfunc-42').classList.add("incorrect")
          document.getElementById('b-algfunc-43').classList.add("incorrect")
    
          document.getElementById('sa-algfunc-4').disabled = true;
          document.getElementById('o-algfunc-41').disabled = true;
          document.getElementById('o-algfunc-42').disabled = true;
          document.getElementById('o-algfunc-43').disabled = true;
          document.getElementById('o-algfunc-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algfunc4', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algfunc-5') != null) {
      algfunc5But.onclick = function() {
        if (document.getElementById('o-algfunc-51').checked) {
          document.getElementById('r-algfunc-51').style.color = 'red'
          document.getElementById('r-algfunc-51').innerHTML = 'Incorrect!'
          document.getElementById('r-algfunc-52').style.color = 'blue'
          document.getElementById('r-algfunc-52').innerHTML = 'Correct!'
          
          document.getElementById('b-algfunc-52').classList.add("correct")
          document.getElementById('b-algfunc-51').classList.add("incorrect")
          document.getElementById('b-algfunc-53').classList.add("incorrect")
          document.getElementById('b-algfunc-54').classList.add("incorrect")
    
          document.getElementById('sa-algfunc-5').disabled = true;
          document.getElementById('o-algfunc-51').disabled = true;
          document.getElementById('o-algfunc-52').disabled = true;
          document.getElementById('o-algfunc-53').disabled = true;
          document.getElementById('o-algfunc-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algfunc5', 0)
        }
        if (document.getElementById('o-algfunc-52').checked) {
          document.getElementById('r-algfunc-52').style.color = 'blue'
          document.getElementById('r-algfunc-52').innerHTML = 'Correct!'
          
          document.getElementById('b-algfunc-52').classList.add("correct")
          document.getElementById('b-algfunc-51').classList.add("incorrect")
          document.getElementById('b-algfunc-53').classList.add("incorrect")
          document.getElementById('b-algfunc-54').classList.add("incorrect")
    
          document.getElementById('sa-algfunc-5').disabled = true;
          document.getElementById('o-algfunc-51').disabled = true;
          document.getElementById('o-algfunc-52').disabled = true;
          document.getElementById('o-algfunc-53').disabled = true;
          document.getElementById('o-algfunc-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algfunc5', 1)
        }
        if (document.getElementById('o-algfunc-53').checked) {
          document.getElementById('r-algfunc-53').style.color = 'red'
          document.getElementById('r-algfunc-53').innerHTML = 'Incorrect!'
          document.getElementById('r-algfunc-52').style.color = 'blue'
          document.getElementById('r-algfunc-52').innerHTML = 'Correct!'
          
          document.getElementById('b-algfunc-52').classList.add("correct")
          document.getElementById('b-algfunc-51').classList.add("incorrect")
          document.getElementById('b-algfunc-53').classList.add("incorrect")
          document.getElementById('b-algfunc-54').classList.add("incorrect")
    
          document.getElementById('sa-algfunc-5').disabled = true;
          document.getElementById('o-algfunc-51').disabled = true;
          document.getElementById('o-algfunc-52').disabled = true;
          document.getElementById('o-algfunc-53').disabled = true;
          document.getElementById('o-algfunc-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algfunc5', 0)
        }
        if (document.getElementById('o-algfunc-54').checked) {
          document.getElementById('r-algfunc-54').style.color = 'red'
          document.getElementById('r-algfunc-54').innerHTML = 'Incorrect!'
          document.getElementById('r-algfunc-52').style.color = 'blue'
          document.getElementById('r-algfunc-52').innerHTML = 'Correct!'
          
          document.getElementById('b-algfunc-52').classList.add("correct")
          document.getElementById('b-algfunc-51').classList.add("incorrect")
          document.getElementById('b-algfunc-53').classList.add("incorrect")
          document.getElementById('b-algfunc-54').classList.add("incorrect")
    
          document.getElementById('sa-algfunc-5').disabled = true;
          document.getElementById('o-algfunc-51').disabled = true;
          document.getElementById('o-algfunc-52').disabled = true;
          document.getElementById('o-algfunc-53').disabled = true;
          document.getElementById('o-algfunc-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algfunc5', 0)
        }
      }
    }
        
         
      if (document.getElementById('sa-algfunc-6') != null) {
      algfunc6But.onclick = function() {
        if (document.getElementById('o-algfunc-61').checked) {
          document.getElementById('r-algfunc-61').style.color = 'red'
          document.getElementById('r-algfunc-61').innerHTML = 'Incorrect!'
          document.getElementById('r-algfunc-64').style.color = 'blue'
          document.getElementById('r-algfunc-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algfunc-64').classList.add("correct")
          document.getElementById('b-algfunc-61').classList.add("incorrect")
          document.getElementById('b-algfunc-62').classList.add("incorrect")
          document.getElementById('b-algfunc-63').classList.add("incorrect")
    
          document.getElementById('sa-algfunc-6').disabled = true;
          document.getElementById('o-algfunc-61').disabled = true;
          document.getElementById('o-algfunc-62').disabled = true;
          document.getElementById('o-algfunc-63').disabled = true;
          document.getElementById('o-algfunc-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algfunc6', 0)
        }
        if (document.getElementById('o-algfunc-62').checked) {
          document.getElementById('r-algfunc-62').style.color = 'red'
          document.getElementById('r-algfunc-62').innerHTML = 'Incorrect!'
          document.getElementById('r-algfunc-64').style.color = 'blue'
          document.getElementById('r-algfunc-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algfunc-64').classList.add("correct")
          document.getElementById('b-algfunc-61').classList.add("incorrect")
          document.getElementById('b-algfunc-62').classList.add("incorrect")
          document.getElementById('b-algfunc-63').classList.add("incorrect")
    
          document.getElementById('sa-algfunc-6').disabled = true;
          document.getElementById('o-algfunc-61').disabled = true;
          document.getElementById('o-algfunc-62').disabled = true;
          document.getElementById('o-algfunc-63').disabled = true;
          document.getElementById('o-algfunc-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algfunc6', 0)
        }
        if (document.getElementById('o-algfunc-63').checked) {
          document.getElementById('r-algfunc-63').style.color = 'red'
          document.getElementById('r-algfunc-63').innerHTML = 'Incorrect!'
          document.getElementById('r-algfunc-64').style.color = 'blue'
          document.getElementById('r-algfunc-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algfunc-64').classList.add("correct")
          document.getElementById('b-algfunc-61').classList.add("incorrect")
          document.getElementById('b-algfunc-62').classList.add("incorrect")
          document.getElementById('b-algfunc-63').classList.add("incorrect")
    
          document.getElementById('sa-algfunc-6').disabled = true;
          document.getElementById('o-algfunc-61').disabled = true;
          document.getElementById('o-algfunc-62').disabled = true;
          document.getElementById('o-algfunc-63').disabled = true;
          document.getElementById('o-algfunc-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algfunc6', 0)
        }
        if (document.getElementById('o-algfunc-64').checked) {
          document.getElementById('r-algfunc-64').style.color = 'blue'
          document.getElementById('r-algfunc-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algfunc-64').classList.add("correct")
          document.getElementById('b-algfunc-61').classList.add("incorrect")
          document.getElementById('b-algfunc-62').classList.add("incorrect")
          document.getElementById('b-algfunc-63').classList.add("incorrect")
    
          document.getElementById('sa-algfunc-6').disabled = true;
          document.getElementById('o-algfunc-61').disabled = true;
          document.getElementById('o-algfunc-62').disabled = true;
          document.getElementById('o-algfunc-63').disabled = true;
          document.getElementById('o-algfunc-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algfunc6', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algfunc-7') != null) {
      algfunc7But.onclick = function() {
        if (document.getElementById('o-algfunc-71').checked) {
          document.getElementById('r-algfunc-71').style.color = 'red'
          document.getElementById('r-algfunc-71').innerHTML = 'Incorrect!'
          document.getElementById('r-algfunc-74').style.color = 'blue'
          document.getElementById('r-algfunc-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algfunc-74').classList.add("correct")
          document.getElementById('b-algfunc-71').classList.add("incorrect")
          document.getElementById('b-algfunc-72').classList.add("incorrect")
          document.getElementById('b-algfunc-73').classList.add("incorrect")
    
          document.getElementById('sa-algfunc-7').disabled = true;
          document.getElementById('o-algfunc-71').disabled = true;
          document.getElementById('o-algfunc-72').disabled = true;
          document.getElementById('o-algfunc-73').disabled = true;
          document.getElementById('o-algfunc-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algfunc7', 0)
        }
        if (document.getElementById('o-algfunc-72').checked) {
          document.getElementById('r-algfunc-72').style.color = 'red'
          document.getElementById('r-algfunc-72').innerHTML = 'Incorrect!'
          document.getElementById('r-algfunc-74').style.color = 'blue'
          document.getElementById('r-algfunc-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algfunc-74').classList.add("correct")
          document.getElementById('b-algfunc-71').classList.add("incorrect")
          document.getElementById('b-algfunc-72').classList.add("incorrect")
          document.getElementById('b-algfunc-73').classList.add("incorrect")
    
          document.getElementById('sa-algfunc-7').disabled = true;
          document.getElementById('o-algfunc-71').disabled = true;
          document.getElementById('o-algfunc-72').disabled = true;
          document.getElementById('o-algfunc-73').disabled = true;
          document.getElementById('o-algfunc-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algfunc7', 0)
        }
        if (document.getElementById('o-algfunc-73').checked) {
          document.getElementById('r-algfunc-73').style.color = 'red'
          document.getElementById('r-algfunc-73').innerHTML = 'Incorrect!'
          document.getElementById('r-algfunc-74').style.color = 'blue'
          document.getElementById('r-algfunc-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algfunc-74').classList.add("correct")
          document.getElementById('b-algfunc-71').classList.add("incorrect")
          document.getElementById('b-algfunc-72').classList.add("incorrect")
          document.getElementById('b-algfunc-73').classList.add("incorrect")
    
          document.getElementById('sa-algfunc-7').disabled = true;
          document.getElementById('o-algfunc-71').disabled = true;
          document.getElementById('o-algfunc-72').disabled = true;
          document.getElementById('o-algfunc-73').disabled = true;
          document.getElementById('o-algfunc-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algfunc7', 0)
        }
        if (document.getElementById('o-algfunc-74').checked) {
          document.getElementById('r-algfunc-74').style.color = 'blue'
          document.getElementById('r-algfunc-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algfunc-74').classList.add("correct")
          document.getElementById('b-algfunc-71').classList.add("incorrect")
          document.getElementById('b-algfunc-72').classList.add("incorrect")
          document.getElementById('b-algfunc-73').classList.add("incorrect")
    
          document.getElementById('sa-algfunc-7').disabled = true;
          document.getElementById('o-algfunc-71').disabled = true;
          document.getElementById('o-algfunc-72').disabled = true;
          document.getElementById('o-algfunc-73').disabled = true;
          document.getElementById('o-algfunc-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algfunc7', 1)
        }
      }
    }
    
    
    if (document.getElementById('sa-algfunc-8') != null) {
      algfunc8But.onclick = function() {
        if (document.getElementById('o-algfunc-81').checked) {
          document.getElementById('r-algfunc-81').style.color = 'red'
          document.getElementById('r-algfunc-81').innerHTML = 'Incorrect!'
          document.getElementById('r-algfunc-83').style.color = 'blue'
          document.getElementById('r-algfunc-83').innerHTML = 'Correct!'
          
          document.getElementById('b-algfunc-83').classList.add("correct")
          document.getElementById('b-algfunc-81').classList.add("incorrect")
          document.getElementById('b-algfunc-82').classList.add("incorrect")
          document.getElementById('b-algfunc-84').classList.add("incorrect")
    
          document.getElementById('sa-algfunc-8').disabled = true;
          document.getElementById('o-algfunc-81').disabled = true;
          document.getElementById('o-algfunc-82').disabled = true;
          document.getElementById('o-algfunc-83').disabled = true;
          document.getElementById('o-algfunc-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algfunc8', 0)
        }
        if (document.getElementById('o-algfunc-82').checked) {
          document.getElementById('r-algfunc-82').style.color = 'red'
          document.getElementById('r-algfunc-82').innerHTML = 'Incorrect!'
          document.getElementById('r-algfunc-83').style.color = 'blue'
          document.getElementById('r-algfunc-83').innerHTML = 'Correct!'
          
          document.getElementById('b-algfunc-83').classList.add("correct")
          document.getElementById('b-algfunc-81').classList.add("incorrect")
          document.getElementById('b-algfunc-82').classList.add("incorrect")
          document.getElementById('b-algfunc-84').classList.add("incorrect")
    
          document.getElementById('sa-algfunc-8').disabled = true;
          document.getElementById('o-algfunc-81').disabled = true;
          document.getElementById('o-algfunc-82').disabled = true;
          document.getElementById('o-algfunc-83').disabled = true;
          document.getElementById('o-algfunc-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algfunc8', 0)
        }
        if (document.getElementById('o-algfunc-83').checked) {
          document.getElementById('r-algfunc-83').style.color = 'blue'
          document.getElementById('r-algfunc-83').innerHTML = 'Correct!'
          
          document.getElementById('b-algfunc-83').classList.add("correct")
          document.getElementById('b-algfunc-81').classList.add("incorrect")
          document.getElementById('b-algfunc-82').classList.add("incorrect")
          document.getElementById('b-algfunc-84').classList.add("incorrect")
    
          document.getElementById('sa-algfunc-8').disabled = true;
          document.getElementById('o-algfunc-81').disabled = true;
          document.getElementById('o-algfunc-82').disabled = true;
          document.getElementById('o-algfunc-83').disabled = true;
          document.getElementById('o-algfunc-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algfunc8', 1)
        }
        if (document.getElementById('o-algfunc-84').checked) {
          document.getElementById('r-algfunc-84').style.color = 'red'
          document.getElementById('r-algfunc-84').innerHTML = 'Incorrect!'
          document.getElementById('r-algfunc-83').style.color = 'blue'
          document.getElementById('r-algfunc-83').innerHTML = 'Correct!'
          
          document.getElementById('b-algfunc-83').classList.add("correct")
          document.getElementById('b-algfunc-81').classList.add("incorrect")
          document.getElementById('b-algfunc-82').classList.add("incorrect")
          document.getElementById('b-algfunc-84').classList.add("incorrect")
    
          document.getElementById('sa-algfunc-8').disabled = true;
          document.getElementById('o-algfunc-81').disabled = true;
          document.getElementById('o-algfunc-82').disabled = true;
          document.getElementById('o-algfunc-83').disabled = true;
          document.getElementById('o-algfunc-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algfunc8', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-algfunc-9') != null) {
      algfunc9But.onclick = function() {
        if (document.getElementById('o-algfunc-91').checked) {
          document.getElementById('r-algfunc-91').style.color = 'red'
          document.getElementById('r-algfunc-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algfunc-94').style.color = 'blue'
          document.getElementById('r-algfunc-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algfunc-94').classList.add("correct")
          document.getElementById('b-algfunc-91').classList.add("incorrect")
          document.getElementById('b-algfunc-92').classList.add("incorrect")
          document.getElementById('b-algfunc-93').classList.add("incorrect")
    
          document.getElementById('sa-algfunc-9').disabled = true;
          document.getElementById('o-algfunc-91').disabled = true;
          document.getElementById('o-algfunc-92').disabled = true;
          document.getElementById('o-algfunc-93').disabled = true;
          document.getElementById('o-algfunc-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algfunc9', 0)
        }
        if (document.getElementById('o-algfunc-92').checked) {
          document.getElementById('r-algfunc-91').style.color = 'red'
          document.getElementById('r-algfunc-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algfunc-94').style.color = 'blue'
          document.getElementById('r-algfunc-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algfunc-94').classList.add("correct")
          document.getElementById('b-algfunc-91').classList.add("incorrect")
          document.getElementById('b-algfunc-92').classList.add("incorrect")
          document.getElementById('b-algfunc-93').classList.add("incorrect")
    
          document.getElementById('sa-algfunc-9').disabled = true;
          document.getElementById('o-algfunc-91').disabled = true;
          document.getElementById('o-algfunc-92').disabled = true;
          document.getElementById('o-algfunc-93').disabled = true;
          document.getElementById('o-algfunc-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algfunc9', 0)
        }
        if (document.getElementById('o-algfunc-93').checked) {
          document.getElementById('r-algfunc-91').style.color = 'red'
          document.getElementById('r-algfunc-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algfunc-94').style.color = 'blue'
          document.getElementById('r-algfunc-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algfunc-94').classList.add("correct")
          document.getElementById('b-algfunc-91').classList.add("incorrect")
          document.getElementById('b-algfunc-92').classList.add("incorrect")
          document.getElementById('b-algfunc-93').classList.add("incorrect")
    
          document.getElementById('sa-algfunc-9').disabled = true;
          document.getElementById('o-algfunc-91').disabled = true;
          document.getElementById('o-algfunc-92').disabled = true;
          document.getElementById('o-algfunc-93').disabled = true;
          document.getElementById('o-algfunc-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algfunc9', 0)
        }
        if (document.getElementById('o-algfunc-94').checked) {
          document.getElementById('r-algfunc-94').style.color = 'blue'
          document.getElementById('r-algfunc-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algfunc-94').classList.add("correct")
          document.getElementById('b-algfunc-91').classList.add("incorrect")
          document.getElementById('b-algfunc-92').classList.add("incorrect")
          document.getElementById('b-algfunc-93').classList.add("incorrect")
    
          document.getElementById('sa-algfunc-9').disabled = true;
          document.getElementById('o-algfunc-91').disabled = true;
          document.getElementById('o-algfunc-92').disabled = true;
          document.getElementById('o-algfunc-93').disabled = true;
          document.getElementById('o-algfunc-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algfunc9', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algfunc-10') != null) {
      algfunc10But.onclick = function() {
        if (document.getElementById('o-algfunc-101').checked) {
          document.getElementById('r-algfunc-101').style.color = 'red'
          document.getElementById('r-algfunc-101').innerHTML = 'Incorrect!'
          document.getElementById('r-algfunc-102').style.color = 'blue'
          document.getElementById('r-algfunc-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algfunc-102').classList.add("correct")
          document.getElementById('b-algfunc-101').classList.add("incorrect")
          document.getElementById('b-algfunc-103').classList.add("incorrect")
          document.getElementById('b-algfunc-104').classList.add("incorrect")
    
          document.getElementById('sa-algfunc-10').disabled = true;
          document.getElementById('o-algfunc-101').disabled = true;
          document.getElementById('o-algfunc-102').disabled = true;
          document.getElementById('o-algfunc-103').disabled = true;
          document.getElementById('o-algfunc-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algfunc10', 0)
        }
        if (document.getElementById('o-algfunc-102').checked) {
          document.getElementById('r-algfunc-102').style.color = 'blue'
          document.getElementById('r-algfunc-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algfunc-102').classList.add("correct")
          document.getElementById('b-algfunc-101').classList.add("incorrect")
          document.getElementById('b-algfunc-103').classList.add("incorrect")
          document.getElementById('b-algfunc-104').classList.add("incorrect")
    
          document.getElementById('sa-algfunc-10').disabled = true;
          document.getElementById('o-algfunc-101').disabled = true;
          document.getElementById('o-algfunc-102').disabled = true;
          document.getElementById('o-algfunc-103').disabled = true;
          document.getElementById('o-algfunc-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algfunc10', 1)
        }
        if (document.getElementById('o-algfunc-103').checked) {
          document.getElementById('r-algfunc-103').style.color = 'red'
          document.getElementById('r-algfunc-103').innerHTML = 'Incorrect!'
          document.getElementById('r-algfunc-102').style.color = 'blue'
          document.getElementById('r-algfunc-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algfunc-102').classList.add("correct")
          document.getElementById('b-algfunc-101').classList.add("incorrect")
          document.getElementById('b-algfunc-103').classList.add("incorrect")
          document.getElementById('b-algfunc-104').classList.add("incorrect")
    
          document.getElementById('sa-algfunc-10').disabled = true;
          document.getElementById('o-algfunc-101').disabled = true;
          document.getElementById('o-algfunc-102').disabled = true;
          document.getElementById('o-algfunc-103').disabled = true;
          document.getElementById('o-algfunc-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algfunc10', 0)
        }
        if (document.getElementById('o-algfunc-104').checked) {
          document.getElementById('r-algfunc-104').style.color = 'red'
          document.getElementById('r-algfunc-104').innerHTML = 'Incorrect!'
          document.getElementById('r-algfunc-102').style.color = 'blue'
          document.getElementById('r-algfunc-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algfunc-102').classList.add("correct")
          document.getElementById('b-algfunc-101').classList.add("incorrect")
          document.getElementById('b-algfunc-103').classList.add("incorrect")
          document.getElementById('b-algfunc-104').classList.add("incorrect")
    
          document.getElementById('sa-algfunc-10').disabled = true;
          document.getElementById('o-algfunc-101').disabled = true;
          document.getElementById('o-algfunc-102').disabled = true;
          document.getElementById('o-algfunc-103').disabled = true;
          document.getElementById('o-algfunc-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algfunc10', 0)
        }
      }
    }
    