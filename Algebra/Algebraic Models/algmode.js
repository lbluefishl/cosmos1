
  let algmode1But = document.getElementById('sa-algmode-1');
  let algmode2But = document.getElementById('sa-algmode-2');
  let algmode3But = document.getElementById('sa-algmode-3');
  let algmode4But = document.getElementById('sa-algmode-4');
  let algmode5But = document.getElementById('sa-algmode-5');
  let algmode6But = document.getElementById('sa-algmode-6');
  let algmode7But = document.getElementById('sa-algmode-7');
  let algmode8But = document.getElementById('sa-algmode-8');
  let algmode9But = document.getElementById('sa-algmode-9');
  let algmode10But = document.getElementById('sa-algmode-10');


  showExplanation1 = function() {
    document.getElementById('e-algmode-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-algmode-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-algmode-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-algmode-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-algmode-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-algmode-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-algmode-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-algmode-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-algmode-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-algmode-10').style.display = 'block';
     } 



     if (document.getElementById('sa-algmode-1') != null) {
      algmode1But.onclick = function () {
        if (document.getElementById('o-algmode-11').checked) {
          document.getElementById('r-algmode-11').style.color = 'red'
          document.getElementById('r-algmode-11').innerHTML = 'Incorrect!'
          document.getElementById('r-algmode-14').style.color = 'blue'
          document.getElementById('r-algmode-14').innerHTML = 'Correct!'
    
          document.getElementById('b-algmode-14').classList.add("correct")
          document.getElementById('b-algmode-12').classList.add("incorrect")
          document.getElementById('b-algmode-13').classList.add("incorrect")
          document.getElementById('b-algmode-11').classList.add("incorrect")
    
          document.getElementById('sa-algmode-1').disabled = true;
          document.getElementById('o-algmode-11').disabled = true;
          document.getElementById('o-algmode-12').disabled = true;
          document.getElementById('o-algmode-13').disabled = true;
          document.getElementById('o-algmode-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algmode1', 0)
        }
    
        if (document.getElementById('o-algmode-12').checked) {
         
          document.getElementById('r-algmode-12').style.color = 'red'
          document.getElementById('r-algmode-12').innerHTML = 'Incorrect!'
          document.getElementById('r-algmode-14').style.color = 'blue'
          document.getElementById('r-algmode-14').innerHTML = 'Correct!'
    
          document.getElementById('b-algmode-14').classList.add("correct")
          document.getElementById('b-algmode-12').classList.add("incorrect")
          document.getElementById('b-algmode-13').classList.add("incorrect")
          document.getElementById('b-algmode-11').classList.add("incorrect")
    
          document.getElementById('sa-algmode-1').disabled = true;
          document.getElementById('o-algmode-11').disabled = true;
          document.getElementById('o-algmode-12').disabled = true;
          document.getElementById('o-algmode-13').disabled = true;
          document.getElementById('o-algmode-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algmode1', 0)
        }
        if (document.getElementById('o-algmode-13').checked) {
          document.getElementById('r-algmode-13').style.color = 'red'
          document.getElementById('r-algmode-13').innerHTML = 'Incorrect!'
          document.getElementById('r-algmode-14').style.color = 'blue'
          document.getElementById('r-algmode-14').innerHTML = 'Correct!'
          
          document.getElementById('b-algmode-14').classList.add("correct")
          document.getElementById('b-algmode-12').classList.add("incorrect")
          document.getElementById('b-algmode-13').classList.add("incorrect")
          document.getElementById('b-algmode-11').classList.add("incorrect")
    
          document.getElementById('sa-algmode-1').disabled = true;
          document.getElementById('o-algmode-11').disabled = true;
          document.getElementById('o-algmode-12').disabled = true;
          document.getElementById('o-algmode-13').disabled = true;
          document.getElementById('o-algmode-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algmode1', 0)
        }
        if (document.getElementById('o-algmode-14').checked) {
          document.getElementById('r-algmode-14').style.color = 'blue'
          document.getElementById('r-algmode-14').innerHTML = 'Correct!'
          
          document.getElementById('b-algmode-14').classList.add("correct")
          document.getElementById('b-algmode-12').classList.add("incorrect")
          document.getElementById('b-algmode-13').classList.add("incorrect")
          document.getElementById('b-algmode-11').classList.add("incorrect")
    
          document.getElementById('sa-algmode-1').disabled = true;
          document.getElementById('o-algmode-11').disabled = true;
          document.getElementById('o-algmode-12').disabled = true;
          document.getElementById('o-algmode-13').disabled = true;
          document.getElementById('o-algmode-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algmode1', 1)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-algmode-2') != null) {
      algmode2But.onclick = function() {
        if (document.getElementById('o-algmode-21').checked) {
          document.getElementById('r-algmode-21').style.color = 'red'
          document.getElementById('r-algmode-21').innerHTML = 'Incorrect!'
          document.getElementById('r-algmode-22').style.color = 'blue'
          document.getElementById('r-algmode-22').innerHTML = 'Correct!'
          
          document.getElementById('b-algmode-22').classList.add("correct")
          document.getElementById('b-algmode-21').classList.add("incorrect")
          document.getElementById('b-algmode-23').classList.add("incorrect")
          document.getElementById('b-algmode-24').classList.add("incorrect")
    
          document.getElementById('sa-algmode-2').disabled = true;
          document.getElementById('o-algmode-21').disabled = true;
          document.getElementById('o-algmode-22').disabled = true;
          document.getElementById('o-algmode-23').disabled = true;
          document.getElementById('o-algmode-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algmode2', 0)
        }
        if (document.getElementById('o-algmode-22').checked) {
          document.getElementById('r-algmode-22').style.color = 'blue'
          document.getElementById('r-algmode-22').innerHTML = 'Correct!'
          
          document.getElementById('b-algmode-22').classList.add("correct")
          document.getElementById('b-algmode-21').classList.add("incorrect")
          document.getElementById('b-algmode-23').classList.add("incorrect")
          document.getElementById('b-algmode-24').classList.add("incorrect")
    
          document.getElementById('sa-algmode-2').disabled = true;
          document.getElementById('o-algmode-21').disabled = true;
          document.getElementById('o-algmode-22').disabled = true;
          document.getElementById('o-algmode-23').disabled = true;
          document.getElementById('o-algmode-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algmode2', 1)
        }
        if (document.getElementById('o-algmode-23').checked) {
          document.getElementById('r-algmode-23').style.color = 'red'
          document.getElementById('r-algmode-23').innerHTML = 'Incorrect!'
          document.getElementById('r-algmode-22').style.color = 'blue'
          document.getElementById('r-algmode-22').innerHTML = 'Correct!'
          
          document.getElementById('b-algmode-22').classList.add("correct")
          document.getElementById('b-algmode-21').classList.add("incorrect")
          document.getElementById('b-algmode-22').classList.add("incorrect")
          document.getElementById('b-algmode-23').classList.add("incorrect")
    
          document.getElementById('sa-algmode-2').disabled = true;
          document.getElementById('o-algmode-21').disabled = true;
          document.getElementById('o-algmode-22').disabled = true;
          document.getElementById('o-algmode-23').disabled = true;
          document.getElementById('o-algmode-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algmode2', 0)
        }
        if (document.getElementById('o-algmode-24').checked) {
          document.getElementById('r-algmode-24').style.color = 'red'
          document.getElementById('r-algmode-24').innerHTML = 'Incorrect!'
          document.getElementById('r-algmode-22').style.color = 'blue'
          document.getElementById('r-algmode-22').innerHTML = 'Correct!'
          
          document.getElementById('b-algmode-22').classList.add("correct")
          document.getElementById('b-algmode-21').classList.add("incorrect")
          document.getElementById('b-algmode-23').classList.add("incorrect")
          document.getElementById('b-algmode-24').classList.add("incorrect")
    
          document.getElementById('sa-algmode-2').disabled = true;
          document.getElementById('o-algmode-21').disabled = true;
          document.getElementById('o-algmode-22').disabled = true;
          document.getElementById('o-algmode-23').disabled = true;
          document.getElementById('o-algmode-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algmode2', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algmode-3') != null) {
      algmode3But.onclick = function() {
        if (document.getElementById('o-algmode-31').checked) {
          document.getElementById('r-algmode-31').style.color = 'red'
          document.getElementById('r-algmode-31').innerHTML = 'Incorrect!'
          document.getElementById('r-algmode-33').style.color = 'blue'
          document.getElementById('r-algmode-33').innerHTML = 'Correct!'
          
          document.getElementById('b-algmode-33').classList.add("correct")
          document.getElementById('b-algmode-31').classList.add("incorrect")
          document.getElementById('b-algmode-32').classList.add("incorrect")
          document.getElementById('b-algmode-34').classList.add("incorrect")
    
          document.getElementById('sa-algmode-3').disabled = true;
          document.getElementById('o-algmode-31').disabled = true;
          document.getElementById('o-algmode-32').disabled = true;
          document.getElementById('o-algmode-33').disabled = true;
          document.getElementById('o-algmode-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algmode3', 0)
        }
        if (document.getElementById('o-algmode-32').checked) {
          document.getElementById('r-algmode-32').style.color = 'red'
          document.getElementById('r-algmode-32').innerHTML = 'Incorrect!'
          document.getElementById('r-algmode-33').style.color = 'blue'
          document.getElementById('r-algmode-33').innerHTML = 'Correct!'
          
          document.getElementById('b-algmode-33').classList.add("correct")
          document.getElementById('b-algmode-31').classList.add("incorrect")
          document.getElementById('b-algmode-32').classList.add("incorrect")
          document.getElementById('b-algmode-34').classList.add("incorrect")
    
          document.getElementById('sa-algmode-3').disabled = true;
          document.getElementById('o-algmode-31').disabled = true;
          document.getElementById('o-algmode-32').disabled = true;
          document.getElementById('o-algmode-33').disabled = true;
          document.getElementById('o-algmode-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algmode3', 0)
        }
        if (document.getElementById('o-algmode-33').checked) {
          document.getElementById('r-algmode-33').style.color = 'blue'
          document.getElementById('r-algmode-33').innerHTML = 'Correct!'
          
          document.getElementById('b-algmode-33').classList.add("correct")
          document.getElementById('b-algmode-31').classList.add("incorrect")
          document.getElementById('b-algmode-32').classList.add("incorrect")
          document.getElementById('b-algmode-34').classList.add("incorrect")
    
          document.getElementById('sa-algmode-3').disabled = true;
          document.getElementById('o-algmode-31').disabled = true;
          document.getElementById('o-algmode-32').disabled = true;
          document.getElementById('o-algmode-33').disabled = true;
          document.getElementById('o-algmode-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algmode3', 1)
        }
        if (document.getElementById('o-algmode-34').checked) {
          document.getElementById('r-algmode-34').style.color = 'red'
          document.getElementById('r-algmode-34').innerHTML = 'Incorrect!'
          document.getElementById('r-algmode-33').style.color = 'blue'
          document.getElementById('r-algmode-33').innerHTML = 'Correct!'
          
          document.getElementById('b-algmode-33').classList.add("correct")
          document.getElementById('b-algmode-31').classList.add("incorrect")
          document.getElementById('b-algmode-32').classList.add("incorrect")
          document.getElementById('b-algmode-34').classList.add("incorrect")
    
          document.getElementById('sa-algmode-3').disabled = true;
          document.getElementById('o-algmode-31').disabled = true;
          document.getElementById('o-algmode-32').disabled = true;
          document.getElementById('o-algmode-33').disabled = true;
          document.getElementById('o-algmode-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algmode3', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algmode-4') != null) {
      algmode4But.onclick = function() {
        if (document.getElementById('o-algmode-41').checked) {
          document.getElementById('r-algmode-41').style.color = 'red'
          document.getElementById('r-algmode-41').innerHTML = 'Incorrect!'
          document.getElementById('r-algmode-43').style.color = 'blue'
          document.getElementById('r-algmode-43').innerHTML = 'Correct!'
          
          document.getElementById('b-algmode-43').classList.add("correct")
          document.getElementById('b-algmode-41').classList.add("incorrect")
          document.getElementById('b-algmode-42').classList.add("incorrect")
          document.getElementById('b-algmode-44').classList.add("incorrect")
    
          document.getElementById('sa-algmode-4').disabled = true;
          document.getElementById('o-algmode-41').disabled = true;
          document.getElementById('o-algmode-42').disabled = true;
          document.getElementById('o-algmode-43').disabled = true;
          document.getElementById('o-algmode-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algmode4', 0)
        }
        if (document.getElementById('o-algmode-42').checked) {
          document.getElementById('r-algmode-42').style.color = 'red'
          document.getElementById('r-algmode-42').innerHTML = 'Incorrect!'
          document.getElementById('r-algmode-43').style.color = 'blue'
          document.getElementById('r-algmode-43').innerHTML = 'Correct!'
          
          document.getElementById('b-algmode-43').classList.add("correct")
          document.getElementById('b-algmode-41').classList.add("incorrect")
          document.getElementById('b-algmode-42').classList.add("incorrect")
          document.getElementById('b-algmode-44').classList.add("incorrect")
    
          document.getElementById('sa-algmode-4').disabled = true;
          document.getElementById('o-algmode-41').disabled = true;
          document.getElementById('o-algmode-42').disabled = true;
          document.getElementById('o-algmode-43').disabled = true;
          document.getElementById('o-algmode-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algmode4', 0)
        }
        if (document.getElementById('o-algmode-43').checked) {
          document.getElementById('r-algmode-43').style.color = 'blue'
          document.getElementById('r-algmode-43').innerHTML = 'Correct!'
          
          document.getElementById('b-algmode-43').classList.add("correct")
          document.getElementById('b-algmode-41').classList.add("incorrect")
          document.getElementById('b-algmode-42').classList.add("incorrect")
          document.getElementById('b-algmode-44').classList.add("incorrect")
    
          document.getElementById('sa-algmode-4').disabled = true;
          document.getElementById('o-algmode-41').disabled = true;
          document.getElementById('o-algmode-42').disabled = true;
          document.getElementById('o-algmode-43').disabled = true;
          document.getElementById('o-algmode-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algmode4', 1)
        }
        if (document.getElementById('o-algmode-44').checked) {
          document.getElementById('r-algmode-44').style.color = 'red'
          document.getElementById('r-algmode-44').innerHTML = 'Incorrect!'
          document.getElementById('r-algmode-43').style.color = 'blue'
          document.getElementById('r-algmode-43').innerHTML = 'Correct!'
          
          document.getElementById('b-algmode-43').classList.add("correct")
          document.getElementById('b-algmode-41').classList.add("incorrect")
          document.getElementById('b-algmode-42').classList.add("incorrect")
          document.getElementById('b-algmode-44').classList.add("incorrect")
    
          document.getElementById('sa-algmode-4').disabled = true;
          document.getElementById('o-algmode-41').disabled = true;
          document.getElementById('o-algmode-42').disabled = true;
          document.getElementById('o-algmode-43').disabled = true;
          document.getElementById('o-algmode-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algmode4', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algmode-5') != null) {
      algmode5But.onclick = function() {
        if (document.getElementById('o-algmode-51').checked) {
          document.getElementById('r-algmode-51').style.color = 'red'
          document.getElementById('r-algmode-51').innerHTML = 'Incorrect!'
          document.getElementById('r-algmode-53').style.color = 'blue'
          document.getElementById('r-algmode-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algmode-53').classList.add("correct")
          document.getElementById('b-algmode-51').classList.add("incorrect")
          document.getElementById('b-algmode-52').classList.add("incorrect")
          document.getElementById('b-algmode-54').classList.add("incorrect")
    
          document.getElementById('sa-algmode-5').disabled = true;
          document.getElementById('o-algmode-51').disabled = true;
          document.getElementById('o-algmode-52').disabled = true;
          document.getElementById('o-algmode-53').disabled = true;
          document.getElementById('o-algmode-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algmode5', 0)
        }
        if (document.getElementById('o-algmode-52').checked) {
          document.getElementById('r-algmode-52').style.color = 'red'
          document.getElementById('r-algmode-52').innerHTML = 'Incorrect!'
          document.getElementById('r-algmode-53').style.color = 'blue'
          document.getElementById('r-algmode-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algmode-53').classList.add("correct")
          document.getElementById('b-algmode-51').classList.add("incorrect")
          document.getElementById('b-algmode-52').classList.add("incorrect")
          document.getElementById('b-algmode-54').classList.add("incorrect")
    
          document.getElementById('sa-algmode-5').disabled = true;
          document.getElementById('o-algmode-51').disabled = true;
          document.getElementById('o-algmode-52').disabled = true;
          document.getElementById('o-algmode-53').disabled = true;
          document.getElementById('o-algmode-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algmode5', 0)
        }
        if (document.getElementById('o-algmode-53').checked) {
          document.getElementById('r-algmode-53').style.color = 'blue'
          document.getElementById('r-algmode-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algmode-53').classList.add("correct")
          document.getElementById('b-algmode-51').classList.add("incorrect")
          document.getElementById('b-algmode-52').classList.add("incorrect")
          document.getElementById('b-algmode-54').classList.add("incorrect")
    
          document.getElementById('sa-algmode-5').disabled = true;
          document.getElementById('o-algmode-51').disabled = true;
          document.getElementById('o-algmode-52').disabled = true;
          document.getElementById('o-algmode-53').disabled = true;
          document.getElementById('o-algmode-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algmode5', 1)
        }
        if (document.getElementById('o-algmode-54').checked) {
          document.getElementById('r-algmode-54').style.color = 'red'
          document.getElementById('r-algmode-54').innerHTML = 'Incorrect!'
          document.getElementById('r-algmode-53').style.color = 'blue'
          document.getElementById('r-algmode-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algmode-53').classList.add("correct")
          document.getElementById('b-algmode-51').classList.add("incorrect")
          document.getElementById('b-algmode-52').classList.add("incorrect")
          document.getElementById('b-algmode-54').classList.add("incorrect")
    
          document.getElementById('sa-algmode-5').disabled = true;
          document.getElementById('o-algmode-51').disabled = true;
          document.getElementById('o-algmode-52').disabled = true;
          document.getElementById('o-algmode-53').disabled = true;
          document.getElementById('o-algmode-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algmode5', 0)
        }
      }
    }
        
         
      if (document.getElementById('sa-algmode-6') != null) {
      algmode6But.onclick = function() {
        if (document.getElementById('o-algmode-61').checked) {
          document.getElementById('r-algmode-61').style.color = 'blue'
          document.getElementById('r-algmode-61').innerHTML = 'Correct!'
          
          document.getElementById('b-algmode-61').classList.add("correct")
          document.getElementById('b-algmode-64').classList.add("incorrect")
          document.getElementById('b-algmode-62').classList.add("incorrect")
          document.getElementById('b-algmode-63').classList.add("incorrect")
    
          document.getElementById('sa-algmode-6').disabled = true;
          document.getElementById('o-algmode-61').disabled = true;
          document.getElementById('o-algmode-62').disabled = true;
          document.getElementById('o-algmode-63').disabled = true;
          document.getElementById('o-algmode-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algmode6', 1)
        }
        if (document.getElementById('o-algmode-62').checked) {
          document.getElementById('r-algmode-62').style.color = 'red'
          document.getElementById('r-algmode-62').innerHTML = 'Incorrect!'
          document.getElementById('r-algmode-61').style.color = 'blue'
          document.getElementById('r-algmode-61').innerHTML = 'Correct!'
          
          document.getElementById('b-algmode-61').classList.add("correct")
          document.getElementById('b-algmode-64').classList.add("incorrect")
          document.getElementById('b-algmode-62').classList.add("incorrect")
          document.getElementById('b-algmode-63').classList.add("incorrect")
    
          document.getElementById('sa-algmode-6').disabled = true;
          document.getElementById('o-algmode-61').disabled = true;
          document.getElementById('o-algmode-62').disabled = true;
          document.getElementById('o-algmode-63').disabled = true;
          document.getElementById('o-algmode-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algmode6', 0)
        }
        if (document.getElementById('o-algmode-63').checked) {
          document.getElementById('r-algmode-63').style.color = 'red'
          document.getElementById('r-algmode-63').innerHTML = 'Incorrect!'
          document.getElementById('r-algmode-61').style.color = 'blue'
          document.getElementById('r-algmode-61').innerHTML = 'Correct!'
          
          document.getElementById('b-algmode-61').classList.add("correct")
          document.getElementById('b-algmode-64').classList.add("incorrect")
          document.getElementById('b-algmode-62').classList.add("incorrect")
          document.getElementById('b-algmode-63').classList.add("incorrect")
    
          document.getElementById('sa-algmode-6').disabled = true;
          document.getElementById('o-algmode-61').disabled = true;
          document.getElementById('o-algmode-62').disabled = true;
          document.getElementById('o-algmode-63').disabled = true;
          document.getElementById('o-algmode-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algmode6', 0)
        }
        if (document.getElementById('o-algmode-64').checked) {
          document.getElementById('r-algmode-64').style.color = 'red'
          document.getElementById('r-algmode-64').innerHTML = 'Incorrect!'
          document.getElementById('r-algmode-61').style.color = 'blue'
          document.getElementById('r-algmode-61').innerHTML = 'Correct!'
          
          document.getElementById('b-algmode-61').classList.add("correct")
          document.getElementById('b-algmode-64').classList.add("incorrect")
          document.getElementById('b-algmode-62').classList.add("incorrect")
          document.getElementById('b-algmode-63').classList.add("incorrect")
    
          document.getElementById('sa-algmode-6').disabled = true;
          document.getElementById('o-algmode-61').disabled = true;
          document.getElementById('o-algmode-62').disabled = true;
          document.getElementById('o-algmode-63').disabled = true;
          document.getElementById('o-algmode-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algmode6', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algmode-7') != null) {
      algmode7But.onclick = function() {
        if (document.getElementById('o-algmode-71').checked) {
          document.getElementById('r-algmode-71').style.color = 'red'
          document.getElementById('r-algmode-71').innerHTML = 'Incorrect!'
          document.getElementById('r-algmode-73').style.color = 'blue'
          document.getElementById('r-algmode-73').innerHTML = 'Correct!'
          
          document.getElementById('b-algmode-73').classList.add("correct")
          document.getElementById('b-algmode-71').classList.add("incorrect")
          document.getElementById('b-algmode-72').classList.add("incorrect")
          document.getElementById('b-algmode-74').classList.add("incorrect")
    
          document.getElementById('sa-algmode-7').disabled = true;
          document.getElementById('o-algmode-71').disabled = true;
          document.getElementById('o-algmode-72').disabled = true;
          document.getElementById('o-algmode-73').disabled = true;
          document.getElementById('o-algmode-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algmode7', 0)
        }
        if (document.getElementById('o-algmode-72').checked) {
          document.getElementById('r-algmode-72').style.color = 'red'
          document.getElementById('r-algmode-72').innerHTML = 'Incorrect!'
          document.getElementById('r-algmode-73').style.color = 'blue'
          document.getElementById('r-algmode-73').innerHTML = 'Correct!'
          
          document.getElementById('b-algmode-73').classList.add("correct")
          document.getElementById('b-algmode-71').classList.add("incorrect")
          document.getElementById('b-algmode-72').classList.add("incorrect")
          document.getElementById('b-algmode-74').classList.add("incorrect")
    
          document.getElementById('sa-algmode-7').disabled = true;
          document.getElementById('o-algmode-71').disabled = true;
          document.getElementById('o-algmode-72').disabled = true;
          document.getElementById('o-algmode-73').disabled = true;
          document.getElementById('o-algmode-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algmode7', 0)
        }
        if (document.getElementById('o-algmode-73').checked) {
          document.getElementById('r-algmode-73').style.color = 'blue'
          document.getElementById('r-algmode-73').innerHTML = 'Correct!'
          
          document.getElementById('b-algmode-73').classList.add("correct")
          document.getElementById('b-algmode-71').classList.add("incorrect")
          document.getElementById('b-algmode-72').classList.add("incorrect")
          document.getElementById('b-algmode-74').classList.add("incorrect")
    
          document.getElementById('sa-algmode-7').disabled = true;
          document.getElementById('o-algmode-71').disabled = true;
          document.getElementById('o-algmode-72').disabled = true;
          document.getElementById('o-algmode-73').disabled = true;
          document.getElementById('o-algmode-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algmode7', 1)
        }
        if (document.getElementById('o-algmode-74').checked) {
          document.getElementById('r-algmode-74').style.color = 'red'
          document.getElementById('r-algmode-74').innerHTML = 'Incorrect!'
          document.getElementById('r-algmode-73').style.color = 'blue'
          document.getElementById('r-algmode-73').innerHTML = 'Correct!'
          
          document.getElementById('b-algmode-73').classList.add("correct")
          document.getElementById('b-algmode-71').classList.add("incorrect")
          document.getElementById('b-algmode-72').classList.add("incorrect")
          document.getElementById('b-algmode-74').classList.add("incorrect")
    
          document.getElementById('sa-algmode-7').disabled = true;
          document.getElementById('o-algmode-71').disabled = true;
          document.getElementById('o-algmode-72').disabled = true;
          document.getElementById('o-algmode-73').disabled = true;
          document.getElementById('o-algmode-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algmode7', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-algmode-8') != null) {
      algmode8But.onclick = function() {
        if (document.getElementById('o-algmode-81').checked) {
          document.getElementById('r-algmode-81').style.color = 'red'
          document.getElementById('r-algmode-81').innerHTML = 'Incorrect!'
          document.getElementById('r-algmode-83').style.color = 'blue'
          document.getElementById('r-algmode-83').innerHTML = 'Correct!'
          
          document.getElementById('b-algmode-83').classList.add("correct")
          document.getElementById('b-algmode-81').classList.add("incorrect")
          document.getElementById('b-algmode-82').classList.add("incorrect")
          document.getElementById('b-algmode-84').classList.add("incorrect")
    
          document.getElementById('sa-algmode-8').disabled = true;
          document.getElementById('o-algmode-81').disabled = true;
          document.getElementById('o-algmode-82').disabled = true;
          document.getElementById('o-algmode-83').disabled = true;
          document.getElementById('o-algmode-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algmode8', 0)
        }
        if (document.getElementById('o-algmode-82').checked) {
          document.getElementById('r-algmode-82').style.color = 'red'
          document.getElementById('r-algmode-82').innerHTML = 'Incorrect!'
          document.getElementById('r-algmode-83').style.color = 'blue'
          document.getElementById('r-algmode-83').innerHTML = 'Correct!'
          
          document.getElementById('b-algmode-83').classList.add("correct")
          document.getElementById('b-algmode-81').classList.add("incorrect")
          document.getElementById('b-algmode-82').classList.add("incorrect")
          document.getElementById('b-algmode-84').classList.add("incorrect")
    
          document.getElementById('sa-algmode-8').disabled = true;
          document.getElementById('o-algmode-81').disabled = true;
          document.getElementById('o-algmode-82').disabled = true;
          document.getElementById('o-algmode-83').disabled = true;
          document.getElementById('o-algmode-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algmode8', 0)
        }
        if (document.getElementById('o-algmode-83').checked) {
          document.getElementById('r-algmode-83').style.color = 'blue'
          document.getElementById('r-algmode-83').innerHTML = 'Correct!'
          
          document.getElementById('b-algmode-83').classList.add("correct")
          document.getElementById('b-algmode-81').classList.add("incorrect")
          document.getElementById('b-algmode-82').classList.add("incorrect")
          document.getElementById('b-algmode-84').classList.add("incorrect")
    
          document.getElementById('sa-algmode-8').disabled = true;
          document.getElementById('o-algmode-81').disabled = true;
          document.getElementById('o-algmode-82').disabled = true;
          document.getElementById('o-algmode-83').disabled = true;
          document.getElementById('o-algmode-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algmode8', 1)
        }
        if (document.getElementById('o-algmode-84').checked) {
          document.getElementById('r-algmode-84').style.color = 'red'
          document.getElementById('r-algmode-84').innerHTML = 'Incorrect!'
          document.getElementById('r-algmode-83').style.color = 'blue'
          document.getElementById('r-algmode-83').innerHTML = 'Correct!'
          
          document.getElementById('b-algmode-83').classList.add("correct")
          document.getElementById('b-algmode-81').classList.add("incorrect")
          document.getElementById('b-algmode-82').classList.add("incorrect")
          document.getElementById('b-algmode-84').classList.add("incorrect")
    
          document.getElementById('sa-algmode-8').disabled = true;
          document.getElementById('o-algmode-81').disabled = true;
          document.getElementById('o-algmode-82').disabled = true;
          document.getElementById('o-algmode-83').disabled = true;
          document.getElementById('o-algmode-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algmode8', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-algmode-9') != null) {
      algmode9But.onclick = function() {
        if (document.getElementById('o-algmode-91').checked) {
          document.getElementById('r-algmode-91').style.color = 'red'
          document.getElementById('r-algmode-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algmode-94').style.color = 'blue'
          document.getElementById('r-algmode-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algmode-94').classList.add("correct")
          document.getElementById('b-algmode-91').classList.add("incorrect")
          document.getElementById('b-algmode-92').classList.add("incorrect")
          document.getElementById('b-algmode-93').classList.add("incorrect")
    
          document.getElementById('sa-algmode-9').disabled = true;
          document.getElementById('o-algmode-91').disabled = true;
          document.getElementById('o-algmode-92').disabled = true;
          document.getElementById('o-algmode-93').disabled = true;
          document.getElementById('o-algmode-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algmode9', 0)
        }
        if (document.getElementById('o-algmode-92').checked) {
          document.getElementById('r-algmode-91').style.color = 'red'
          document.getElementById('r-algmode-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algmode-94').style.color = 'blue'
          document.getElementById('r-algmode-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algmode-94').classList.add("correct")
          document.getElementById('b-algmode-91').classList.add("incorrect")
          document.getElementById('b-algmode-92').classList.add("incorrect")
          document.getElementById('b-algmode-93').classList.add("incorrect")
    
          document.getElementById('sa-algmode-9').disabled = true;
          document.getElementById('o-algmode-91').disabled = true;
          document.getElementById('o-algmode-92').disabled = true;
          document.getElementById('o-algmode-93').disabled = true;
          document.getElementById('o-algmode-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algmode9', 0)
        }
        if (document.getElementById('o-algmode-93').checked) {
          document.getElementById('r-algmode-91').style.color = 'red'
          document.getElementById('r-algmode-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algmode-94').style.color = 'blue'
          document.getElementById('r-algmode-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algmode-94').classList.add("correct")
          document.getElementById('b-algmode-91').classList.add("incorrect")
          document.getElementById('b-algmode-92').classList.add("incorrect")
          document.getElementById('b-algmode-93').classList.add("incorrect")
    
          document.getElementById('sa-algmode-9').disabled = true;
          document.getElementById('o-algmode-91').disabled = true;
          document.getElementById('o-algmode-92').disabled = true;
          document.getElementById('o-algmode-93').disabled = true;
          document.getElementById('o-algmode-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algmode9', 0)
        }
        if (document.getElementById('o-algmode-94').checked) {
          document.getElementById('r-algmode-94').style.color = 'blue'
          document.getElementById('r-algmode-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algmode-94').classList.add("correct")
          document.getElementById('b-algmode-91').classList.add("incorrect")
          document.getElementById('b-algmode-92').classList.add("incorrect")
          document.getElementById('b-algmode-93').classList.add("incorrect")
    
          document.getElementById('sa-algmode-9').disabled = true;
          document.getElementById('o-algmode-91').disabled = true;
          document.getElementById('o-algmode-92').disabled = true;
          document.getElementById('o-algmode-93').disabled = true;
          document.getElementById('o-algmode-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algmode9', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algmode-10') != null) {
      algmode10But.onclick = function() {
        if (document.getElementById('o-algmode-101').checked) {
          document.getElementById('r-algmode-101').style.color = 'red'
          document.getElementById('r-algmode-101').innerHTML = 'Incorrect!'
          document.getElementById('r-algmode-102').style.color = 'blue'
          document.getElementById('r-algmode-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algmode-102').classList.add("correct")
          document.getElementById('b-algmode-101').classList.add("incorrect")
          document.getElementById('b-algmode-103').classList.add("incorrect")
          document.getElementById('b-algmode-104').classList.add("incorrect")
    
          document.getElementById('sa-algmode-10').disabled = true;
          document.getElementById('o-algmode-101').disabled = true;
          document.getElementById('o-algmode-102').disabled = true;
          document.getElementById('o-algmode-103').disabled = true;
          document.getElementById('o-algmode-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algmode10', 0)
        }
        if (document.getElementById('o-algmode-102').checked) {
          document.getElementById('r-algmode-102').style.color = 'blue'
          document.getElementById('r-algmode-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algmode-102').classList.add("correct")
          document.getElementById('b-algmode-101').classList.add("incorrect")
          document.getElementById('b-algmode-103').classList.add("incorrect")
          document.getElementById('b-algmode-104').classList.add("incorrect")
    
          document.getElementById('sa-algmode-10').disabled = true;
          document.getElementById('o-algmode-101').disabled = true;
          document.getElementById('o-algmode-102').disabled = true;
          document.getElementById('o-algmode-103').disabled = true;
          document.getElementById('o-algmode-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algmode10', 1)
        }
        if (document.getElementById('o-algmode-103').checked) {
          document.getElementById('r-algmode-103').style.color = 'red'
          document.getElementById('r-algmode-103').innerHTML = 'Incorrect!'
          document.getElementById('r-algmode-102').style.color = 'blue'
          document.getElementById('r-algmode-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algmode-102').classList.add("correct")
          document.getElementById('b-algmode-101').classList.add("incorrect")
          document.getElementById('b-algmode-103').classList.add("incorrect")
          document.getElementById('b-algmode-104').classList.add("incorrect")
    
          document.getElementById('sa-algmode-10').disabled = true;
          document.getElementById('o-algmode-101').disabled = true;
          document.getElementById('o-algmode-102').disabled = true;
          document.getElementById('o-algmode-103').disabled = true;
          document.getElementById('o-algmode-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algmode10', 0)
        }
        if (document.getElementById('o-algmode-104').checked) {
          document.getElementById('r-algmode-104').style.color = 'red'
          document.getElementById('r-algmode-104').innerHTML = 'Incorrect!'
          document.getElementById('r-algmode-102').style.color = 'blue'
          document.getElementById('r-algmode-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algmode-102').classList.add("correct")
          document.getElementById('b-algmode-101').classList.add("incorrect")
          document.getElementById('b-algmode-103').classList.add("incorrect")
          document.getElementById('b-algmode-104').classList.add("incorrect")
    
          document.getElementById('sa-algmode-10').disabled = true;
          document.getElementById('o-algmode-101').disabled = true;
          document.getElementById('o-algmode-102').disabled = true;
          document.getElementById('o-algmode-103').disabled = true;
          document.getElementById('o-algmode-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algmode10', 0)
        }
      }
    }
    