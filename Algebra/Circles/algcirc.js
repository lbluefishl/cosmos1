
  let algcirc1But = document.getElementById('sa-algcirc-1');
  let algcirc2But = document.getElementById('sa-algcirc-2');
  let algcirc3But = document.getElementById('sa-algcirc-3');
  let algcirc4But = document.getElementById('sa-algcirc-4');
  let algcirc5But = document.getElementById('sa-algcirc-5');
  let algcirc6But = document.getElementById('sa-algcirc-6');
  let algcirc7But = document.getElementById('sa-algcirc-7');
  let algcirc8But = document.getElementById('sa-algcirc-8');
  let algcirc9But = document.getElementById('sa-algcirc-9');
  let algcirc10But = document.getElementById('sa-algcirc-10');


  showExplanation1 = function() {
    document.getElementById('e-algcirc-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-algcirc-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-algcirc-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-algcirc-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-algcirc-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-algcirc-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-algcirc-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-algcirc-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-algcirc-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-algcirc-10').style.display = 'block';
     } 



     if (document.getElementById('sa-algcirc-1') != null) {
      algcirc1But.onclick = function () {
        if (document.getElementById('o-algcirc-11').checked) {
          document.getElementById('r-algcirc-11').style.color = 'red'
          document.getElementById('r-algcirc-11').innerHTML = 'Incorrect!'
          document.getElementById('r-algcirc-14').style.color = 'blue'
          document.getElementById('r-algcirc-14').innerHTML = 'Correct!'
    
          document.getElementById('b-algcirc-14').classList.add("correct")
          document.getElementById('b-algcirc-12').classList.add("incorrect")
          document.getElementById('b-algcirc-13').classList.add("incorrect")
          document.getElementById('b-algcirc-11').classList.add("incorrect")
    
          document.getElementById('sa-algcirc-1').disabled = true;
          document.getElementById('o-algcirc-11').disabled = true;
          document.getElementById('o-algcirc-12').disabled = true;
          document.getElementById('o-algcirc-13').disabled = true;
          document.getElementById('o-algcirc-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algcirc1', 0)
        }
    
        if (document.getElementById('o-algcirc-12').checked) {
         
          document.getElementById('r-algcirc-12').style.color = 'red'
          document.getElementById('r-algcirc-12').innerHTML = 'Incorrect!'
          document.getElementById('r-algcirc-14').style.color = 'blue'
          document.getElementById('r-algcirc-14').innerHTML = 'Correct!'
    
          document.getElementById('b-algcirc-14').classList.add("correct")
          document.getElementById('b-algcirc-12').classList.add("incorrect")
          document.getElementById('b-algcirc-13').classList.add("incorrect")
          document.getElementById('b-algcirc-11').classList.add("incorrect")
    
          document.getElementById('sa-algcirc-1').disabled = true;
          document.getElementById('o-algcirc-11').disabled = true;
          document.getElementById('o-algcirc-12').disabled = true;
          document.getElementById('o-algcirc-13').disabled = true;
          document.getElementById('o-algcirc-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algcirc1', 0)
        }
        if (document.getElementById('o-algcirc-13').checked) {
          document.getElementById('r-algcirc-13').style.color = 'red'
          document.getElementById('r-algcirc-13').innerHTML = 'Incorrect!'
          document.getElementById('r-algcirc-14').style.color = 'blue'
          document.getElementById('r-algcirc-14').innerHTML = 'Correct!'
          
          document.getElementById('b-algcirc-14').classList.add("correct")
          document.getElementById('b-algcirc-12').classList.add("incorrect")
          document.getElementById('b-algcirc-13').classList.add("incorrect")
          document.getElementById('b-algcirc-11').classList.add("incorrect")
    
          document.getElementById('sa-algcirc-1').disabled = true;
          document.getElementById('o-algcirc-11').disabled = true;
          document.getElementById('o-algcirc-12').disabled = true;
          document.getElementById('o-algcirc-13').disabled = true;
          document.getElementById('o-algcirc-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algcirc1', 0)
        }
        if (document.getElementById('o-algcirc-14').checked) {
          document.getElementById('r-algcirc-14').style.color = 'blue'
          document.getElementById('r-algcirc-14').innerHTML = 'Correct!'
          
          document.getElementById('b-algcirc-14').classList.add("correct")
          document.getElementById('b-algcirc-12').classList.add("incorrect")
          document.getElementById('b-algcirc-13').classList.add("incorrect")
          document.getElementById('b-algcirc-11').classList.add("incorrect")
    
          document.getElementById('sa-algcirc-1').disabled = true;
          document.getElementById('o-algcirc-11').disabled = true;
          document.getElementById('o-algcirc-12').disabled = true;
          document.getElementById('o-algcirc-13').disabled = true;
          document.getElementById('o-algcirc-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algcirc1', 1)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-algcirc-2') != null) {
      algcirc2But.onclick = function() {
        if (document.getElementById('o-algcirc-21').checked) {
          document.getElementById('r-algcirc-21').style.color = 'red'
          document.getElementById('r-algcirc-21').innerHTML = 'Incorrect!'
          document.getElementById('r-algcirc-24').style.color = 'blue'
          document.getElementById('r-algcirc-24').innerHTML = 'Correct!'
          
          document.getElementById('b-algcirc-24').classList.add("correct")
          document.getElementById('b-algcirc-21').classList.add("incorrect")
          document.getElementById('b-algcirc-23').classList.add("incorrect")
          document.getElementById('b-algcirc-24').classList.add("incorrect")
    
          document.getElementById('sa-algcirc-2').disabled = true;
          document.getElementById('o-algcirc-21').disabled = true;
          document.getElementById('o-algcirc-22').disabled = true;
          document.getElementById('o-algcirc-23').disabled = true;
          document.getElementById('o-algcirc-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algcirc2', 0)
        }
        if (document.getElementById('o-algcirc-22').checked) {
          document.getElementById('r-algcirc-22').style.color = 'red'
          document.getElementById('r-algcirc-22').innerHTML = 'Incorrect!'
          document.getElementById('r-algcirc-24').style.color = 'blue'
          document.getElementById('r-algcirc-24').innerHTML = 'Correct!'
          
          document.getElementById('b-algcirc-24').classList.add("correct")
          document.getElementById('b-algcirc-21').classList.add("incorrect")
          document.getElementById('b-algcirc-23').classList.add("incorrect")
          document.getElementById('b-algcirc-24').classList.add("incorrect")
    
          document.getElementById('sa-algcirc-2').disabled = true;
          document.getElementById('o-algcirc-21').disabled = true;
          document.getElementById('o-algcirc-22').disabled = true;
          document.getElementById('o-algcirc-23').disabled = true;
          document.getElementById('o-algcirc-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algcirc2', 0)
        }
        if (document.getElementById('o-algcirc-23').checked) {
          document.getElementById('r-algcirc-23').style.color = 'red'
          document.getElementById('r-algcirc-23').innerHTML = 'Incorrect!'
          document.getElementById('r-algcirc-24').style.color = 'blue'
          document.getElementById('r-algcirc-24').innerHTML = 'Correct!'
          
          document.getElementById('b-algcirc-24').classList.add("correct")
          document.getElementById('b-algcirc-21').classList.add("incorrect")
          document.getElementById('b-algcirc-23').classList.add("incorrect")
          document.getElementById('b-algcirc-24').classList.add("incorrect")
    
          document.getElementById('sa-algcirc-2').disabled = true;
          document.getElementById('o-algcirc-21').disabled = true;
          document.getElementById('o-algcirc-22').disabled = true;
          document.getElementById('o-algcirc-23').disabled = true;
          document.getElementById('o-algcirc-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algcirc2', 0)
        }
        if (document.getElementById('o-algcirc-24').checked) {
          document.getElementById('r-algcirc-24').style.color = 'blue'
          document.getElementById('r-algcirc-24').innerHTML = 'Correct!'
          
          document.getElementById('b-algcirc-24').classList.add("correct")
          document.getElementById('b-algcirc-21').classList.add("incorrect")
          document.getElementById('b-algcirc-23').classList.add("incorrect")
          document.getElementById('b-algcirc-24').classList.add("incorrect")
    
          document.getElementById('sa-algcirc-2').disabled = true;
          document.getElementById('o-algcirc-21').disabled = true;
          document.getElementById('o-algcirc-22').disabled = true;
          document.getElementById('o-algcirc-23').disabled = true;
          document.getElementById('o-algcirc-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algcirc2', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algcirc-3') != null) {
      algcirc3But.onclick = function() {
        if (document.getElementById('o-algcirc-31').checked) {
          document.getElementById('r-algcirc-31').style.color = 'red'
          document.getElementById('r-algcirc-31').innerHTML = 'Incorrect!'
          document.getElementById('r-algcirc-32').style.color = 'blue'
          document.getElementById('r-algcirc-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algcirc-32').classList.add("correct")
          document.getElementById('b-algcirc-31').classList.add("incorrect")
          document.getElementById('b-algcirc-33').classList.add("incorrect")
          document.getElementById('b-algcirc-34').classList.add("incorrect")
    
          document.getElementById('sa-algcirc-3').disabled = true;
          document.getElementById('o-algcirc-31').disabled = true;
          document.getElementById('o-algcirc-32').disabled = true;
          document.getElementById('o-algcirc-33').disabled = true;
          document.getElementById('o-algcirc-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algcirc3', 0)
        }
        if (document.getElementById('o-algcirc-32').checked) {
    
          document.getElementById('r-algcirc-32').style.color = 'blue'
          document.getElementById('r-algcirc-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algcirc-32').classList.add("correct")
          document.getElementById('b-algcirc-31').classList.add("incorrect")
          document.getElementById('b-algcirc-33').classList.add("incorrect")
          document.getElementById('b-algcirc-34').classList.add("incorrect")
    
          document.getElementById('sa-algcirc-3').disabled = true;
          document.getElementById('o-algcirc-31').disabled = true;
          document.getElementById('o-algcirc-32').disabled = true;
          document.getElementById('o-algcirc-33').disabled = true;
          document.getElementById('o-algcirc-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algcirc3', 1)
        }
        if (document.getElementById('o-algcirc-33').checked) {
          document.getElementById('r-algcirc-33').style.color = 'red'
          document.getElementById('r-algcirc-33').innerHTML = 'Incorrect!'
          document.getElementById('r-algcirc-32').style.color = 'blue'
          document.getElementById('r-algcirc-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algcirc-32').classList.add("correct")
          document.getElementById('b-algcirc-31').classList.add("incorrect")
          document.getElementById('b-algcirc-33').classList.add("incorrect")
          document.getElementById('b-algcirc-34').classList.add("incorrect")
    
          document.getElementById('sa-algcirc-3').disabled = true;
          document.getElementById('o-algcirc-31').disabled = true;
          document.getElementById('o-algcirc-32').disabled = true;
          document.getElementById('o-algcirc-33').disabled = true;
          document.getElementById('o-algcirc-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algcirc3', 0)
        }
        if (document.getElementById('o-algcirc-34').checked) {
          document.getElementById('r-algcirc-34').style.color = 'red'
          document.getElementById('r-algcirc-34').innerHTML = 'Incorrect!'
          document.getElementById('r-algcirc-32').style.color = 'blue'
          document.getElementById('r-algcirc-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algcirc-32').classList.add("correct")
          document.getElementById('b-algcirc-31').classList.add("incorrect")
          document.getElementById('b-algcirc-33').classList.add("incorrect")
          document.getElementById('b-algcirc-34').classList.add("incorrect")
    
          document.getElementById('sa-algcirc-3').disabled = true;
          document.getElementById('o-algcirc-31').disabled = true;
          document.getElementById('o-algcirc-32').disabled = true;
          document.getElementById('o-algcirc-33').disabled = true;
          document.getElementById('o-algcirc-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algcirc3', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algcirc-4') != null) {
      algcirc4But.onclick = function() {
        if (document.getElementById('o-algcirc-41').checked) {
          document.getElementById('r-algcirc-41').style.color = 'red'
          document.getElementById('r-algcirc-41').innerHTML = 'Incorrect!'
          document.getElementById('r-algcirc-44').style.color = 'blue'
          document.getElementById('r-algcirc-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algcirc-44').classList.add("correct")
          document.getElementById('b-algcirc-41').classList.add("incorrect")
          document.getElementById('b-algcirc-42').classList.add("incorrect")
          document.getElementById('b-algcirc-43').classList.add("incorrect")
    
          document.getElementById('sa-algcirc-4').disabled = true;
          document.getElementById('o-algcirc-41').disabled = true;
          document.getElementById('o-algcirc-42').disabled = true;
          document.getElementById('o-algcirc-43').disabled = true;
          document.getElementById('o-algcirc-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algcirc4', 0)
        }
        if (document.getElementById('o-algcirc-42').checked) {
          document.getElementById('r-algcirc-42').style.color = 'red'
          document.getElementById('r-algcirc-42').innerHTML = 'Incorrect!'
          document.getElementById('r-algcirc-44').style.color = 'blue'
          document.getElementById('r-algcirc-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algcirc-44').classList.add("correct")
          document.getElementById('b-algcirc-41').classList.add("incorrect")
          document.getElementById('b-algcirc-42').classList.add("incorrect")
          document.getElementById('b-algcirc-43').classList.add("incorrect")
    
          document.getElementById('sa-algcirc-4').disabled = true;
          document.getElementById('o-algcirc-41').disabled = true;
          document.getElementById('o-algcirc-42').disabled = true;
          document.getElementById('o-algcirc-43').disabled = true;
          document.getElementById('o-algcirc-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algcirc4', 0)
        }
        if (document.getElementById('o-algcirc-43').checked) {
          document.getElementById('r-algcirc-43').style.color = 'red'
          document.getElementById('r-algcirc-43').innerHTML = 'Incorrect!'
          document.getElementById('r-algcirc-44').style.color = 'blue'
          document.getElementById('r-algcirc-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algcirc-44').classList.add("correct")
          document.getElementById('b-algcirc-41').classList.add("incorrect")
          document.getElementById('b-algcirc-42').classList.add("incorrect")
          document.getElementById('b-algcirc-43').classList.add("incorrect")
    
          document.getElementById('sa-algcirc-4').disabled = true;
          document.getElementById('o-algcirc-41').disabled = true;
          document.getElementById('o-algcirc-42').disabled = true;
          document.getElementById('o-algcirc-43').disabled = true;
          document.getElementById('o-algcirc-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algcirc4', 0)
        }
        if (document.getElementById('o-algcirc-44').checked) {
          document.getElementById('r-algcirc-44').style.color = 'blue'
          document.getElementById('r-algcirc-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algcirc-44').classList.add("correct")
          document.getElementById('b-algcirc-41').classList.add("incorrect")
          document.getElementById('b-algcirc-42').classList.add("incorrect")
          document.getElementById('b-algcirc-43').classList.add("incorrect")
    
          document.getElementById('sa-algcirc-4').disabled = true;
          document.getElementById('o-algcirc-41').disabled = true;
          document.getElementById('o-algcirc-42').disabled = true;
          document.getElementById('o-algcirc-43').disabled = true;
          document.getElementById('o-algcirc-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algcirc4', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algcirc-5') != null) {
      algcirc5But.onclick = function() {
        if (document.getElementById('o-algcirc-51').checked) {
          document.getElementById('r-algcirc-51').style.color = 'red'
          document.getElementById('r-algcirc-51').innerHTML = 'Incorrect!'
          document.getElementById('r-algcirc-53').style.color = 'blue'
          document.getElementById('r-algcirc-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algcirc-53').classList.add("correct")
          document.getElementById('b-algcirc-51').classList.add("incorrect")
          document.getElementById('b-algcirc-52').classList.add("incorrect")
          document.getElementById('b-algcirc-54').classList.add("incorrect")
    
          document.getElementById('sa-algcirc-5').disabled = true;
          document.getElementById('o-algcirc-51').disabled = true;
          document.getElementById('o-algcirc-52').disabled = true;
          document.getElementById('o-algcirc-53').disabled = true;
          document.getElementById('o-algcirc-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algcirc5', 0)
        }
        if (document.getElementById('o-algcirc-52').checked) {
          document.getElementById('r-algcirc-52').style.color = 'red'
          document.getElementById('r-algcirc-52').innerHTML = 'Incorrect!'
          document.getElementById('r-algcirc-53').style.color = 'blue'
          document.getElementById('r-algcirc-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algcirc-53').classList.add("correct")
          document.getElementById('b-algcirc-51').classList.add("incorrect")
          document.getElementById('b-algcirc-52').classList.add("incorrect")
          document.getElementById('b-algcirc-54').classList.add("incorrect")
    
          document.getElementById('sa-algcirc-5').disabled = true;
          document.getElementById('o-algcirc-51').disabled = true;
          document.getElementById('o-algcirc-52').disabled = true;
          document.getElementById('o-algcirc-53').disabled = true;
          document.getElementById('o-algcirc-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algcirc5', 0)
        }
        if (document.getElementById('o-algcirc-53').checked) {
          document.getElementById('r-algcirc-53').style.color = 'blue'
          document.getElementById('r-algcirc-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algcirc-53').classList.add("correct")
          document.getElementById('b-algcirc-51').classList.add("incorrect")
          document.getElementById('b-algcirc-52').classList.add("incorrect")
          document.getElementById('b-algcirc-54').classList.add("incorrect")
    
          document.getElementById('sa-algcirc-5').disabled = true;
          document.getElementById('o-algcirc-51').disabled = true;
          document.getElementById('o-algcirc-52').disabled = true;
          document.getElementById('o-algcirc-53').disabled = true;
          document.getElementById('o-algcirc-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algcirc5', 1)
        }
        if (document.getElementById('o-algcirc-54').checked) {
          document.getElementById('r-algcirc-54').style.color = 'red'
          document.getElementById('r-algcirc-54').innerHTML = 'Incorrect!'
          document.getElementById('r-algcirc-53').style.color = 'blue'
          document.getElementById('r-algcirc-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algcirc-53').classList.add("correct")
          document.getElementById('b-algcirc-51').classList.add("incorrect")
          document.getElementById('b-algcirc-52').classList.add("incorrect")
          document.getElementById('b-algcirc-54').classList.add("incorrect")
    
          document.getElementById('sa-algcirc-5').disabled = true;
          document.getElementById('o-algcirc-51').disabled = true;
          document.getElementById('o-algcirc-52').disabled = true;
          document.getElementById('o-algcirc-53').disabled = true;
          document.getElementById('o-algcirc-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algcirc5', 0)
        }
      }
    }
        
         
      if (document.getElementById('sa-algcirc-6') != null) {
      algcirc6But.onclick = function() {
        if (document.getElementById('o-algcirc-61').checked) {
          document.getElementById('r-algcirc-61').style.color = 'red'
          document.getElementById('r-algcirc-61').innerHTML = 'Incorrect!'
          document.getElementById('r-algcirc-64').style.color = 'blue'
          document.getElementById('r-algcirc-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algcirc-64').classList.add("correct")
          document.getElementById('b-algcirc-61').classList.add("incorrect")
          document.getElementById('b-algcirc-62').classList.add("incorrect")
          document.getElementById('b-algcirc-63').classList.add("incorrect")
    
          document.getElementById('sa-algcirc-6').disabled = true;
          document.getElementById('o-algcirc-61').disabled = true;
          document.getElementById('o-algcirc-62').disabled = true;
          document.getElementById('o-algcirc-63').disabled = true;
          document.getElementById('o-algcirc-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algcirc6', 0)
        }
        if (document.getElementById('o-algcirc-62').checked) {
          document.getElementById('r-algcirc-62').style.color = 'red'
          document.getElementById('r-algcirc-62').innerHTML = 'Incorrect!'
          document.getElementById('r-algcirc-64').style.color = 'blue'
          document.getElementById('r-algcirc-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algcirc-64').classList.add("correct")
          document.getElementById('b-algcirc-61').classList.add("incorrect")
          document.getElementById('b-algcirc-62').classList.add("incorrect")
          document.getElementById('b-algcirc-63').classList.add("incorrect")
    
          document.getElementById('sa-algcirc-6').disabled = true;
          document.getElementById('o-algcirc-61').disabled = true;
          document.getElementById('o-algcirc-62').disabled = true;
          document.getElementById('o-algcirc-63').disabled = true;
          document.getElementById('o-algcirc-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algcirc6', 0)
        }
        if (document.getElementById('o-algcirc-63').checked) {
          document.getElementById('r-algcirc-63').style.color = 'red'
          document.getElementById('r-algcirc-63').innerHTML = 'Incorrect!'
          document.getElementById('r-algcirc-64').style.color = 'blue'
          document.getElementById('r-algcirc-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algcirc-64').classList.add("correct")
          document.getElementById('b-algcirc-61').classList.add("incorrect")
          document.getElementById('b-algcirc-62').classList.add("incorrect")
          document.getElementById('b-algcirc-63').classList.add("incorrect")
    
          document.getElementById('sa-algcirc-6').disabled = true;
          document.getElementById('o-algcirc-61').disabled = true;
          document.getElementById('o-algcirc-62').disabled = true;
          document.getElementById('o-algcirc-63').disabled = true;
          document.getElementById('o-algcirc-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algcirc6', 0)
        }
        if (document.getElementById('o-algcirc-64').checked) {
          document.getElementById('r-algcirc-64').style.color = 'blue'
          document.getElementById('r-algcirc-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algcirc-64').classList.add("correct")
          document.getElementById('b-algcirc-61').classList.add("incorrect")
          document.getElementById('b-algcirc-62').classList.add("incorrect")
          document.getElementById('b-algcirc-63').classList.add("incorrect")
    
          document.getElementById('sa-algcirc-6').disabled = true;
          document.getElementById('o-algcirc-61').disabled = true;
          document.getElementById('o-algcirc-62').disabled = true;
          document.getElementById('o-algcirc-63').disabled = true;
          document.getElementById('o-algcirc-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algcirc6', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algcirc-7') != null) {
      algcirc7But.onclick = function() {
        if (document.getElementById('o-algcirc-71').checked) {
          document.getElementById('r-algcirc-71').style.color = 'red'
          document.getElementById('r-algcirc-71').innerHTML = 'Incorrect!'
          document.getElementById('r-algcirc-74').style.color = 'blue'
          document.getElementById('r-algcirc-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algcirc-74').classList.add("correct")
          document.getElementById('b-algcirc-71').classList.add("incorrect")
          document.getElementById('b-algcirc-72').classList.add("incorrect")
          document.getElementById('b-algcirc-73').classList.add("incorrect")
    
          document.getElementById('sa-algcirc-7').disabled = true;
          document.getElementById('o-algcirc-71').disabled = true;
          document.getElementById('o-algcirc-72').disabled = true;
          document.getElementById('o-algcirc-73').disabled = true;
          document.getElementById('o-algcirc-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algcirc7', 0)
        }
        if (document.getElementById('o-algcirc-72').checked) {
          document.getElementById('r-algcirc-72').style.color = 'red'
          document.getElementById('r-algcirc-72').innerHTML = 'Incorrect!'
          document.getElementById('r-algcirc-74').style.color = 'blue'
          document.getElementById('r-algcirc-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algcirc-74').classList.add("correct")
          document.getElementById('b-algcirc-71').classList.add("incorrect")
          document.getElementById('b-algcirc-72').classList.add("incorrect")
          document.getElementById('b-algcirc-73').classList.add("incorrect")
    
          document.getElementById('sa-algcirc-7').disabled = true;
          document.getElementById('o-algcirc-71').disabled = true;
          document.getElementById('o-algcirc-72').disabled = true;
          document.getElementById('o-algcirc-73').disabled = true;
          document.getElementById('o-algcirc-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algcirc7', 0)
        }
        if (document.getElementById('o-algcirc-73').checked) {
          document.getElementById('r-algcirc-73').style.color = 'red'
          document.getElementById('r-algcirc-73').innerHTML = 'Incorrect!'
          document.getElementById('r-algcirc-74').style.color = 'blue'
          document.getElementById('r-algcirc-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algcirc-74').classList.add("correct")
          document.getElementById('b-algcirc-71').classList.add("incorrect")
          document.getElementById('b-algcirc-72').classList.add("incorrect")
          document.getElementById('b-algcirc-73').classList.add("incorrect")
    
          document.getElementById('sa-algcirc-7').disabled = true;
          document.getElementById('o-algcirc-71').disabled = true;
          document.getElementById('o-algcirc-72').disabled = true;
          document.getElementById('o-algcirc-73').disabled = true;
          document.getElementById('o-algcirc-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algcirc7', 0)
        }
        if (document.getElementById('o-algcirc-74').checked) {
          document.getElementById('r-algcirc-74').style.color = 'blue'
          document.getElementById('r-algcirc-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algcirc-74').classList.add("correct")
          document.getElementById('b-algcirc-71').classList.add("incorrect")
          document.getElementById('b-algcirc-72').classList.add("incorrect")
          document.getElementById('b-algcirc-73').classList.add("incorrect")
    
          document.getElementById('sa-algcirc-7').disabled = true;
          document.getElementById('o-algcirc-71').disabled = true;
          document.getElementById('o-algcirc-72').disabled = true;
          document.getElementById('o-algcirc-73').disabled = true;
          document.getElementById('o-algcirc-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algcirc7', 1)
        }
      }
    }
    
    
    if (document.getElementById('sa-algcirc-8') != null) {
      algcirc8But.onclick = function() {
        if (document.getElementById('o-algcirc-81').checked) {
          document.getElementById('r-algcirc-81').style.color = 'red'
          document.getElementById('r-algcirc-81').innerHTML = 'Incorrect!'
          document.getElementById('r-algcirc-82').style.color = 'blue'
          document.getElementById('r-algcirc-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algcirc-82').classList.add("correct")
          document.getElementById('b-algcirc-81').classList.add("incorrect")
          document.getElementById('b-algcirc-83').classList.add("incorrect")
          document.getElementById('b-algcirc-84').classList.add("incorrect")
    
          document.getElementById('sa-algcirc-8').disabled = true;
          document.getElementById('o-algcirc-81').disabled = true;
          document.getElementById('o-algcirc-82').disabled = true;
          document.getElementById('o-algcirc-83').disabled = true;
          document.getElementById('o-algcirc-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algcirc8', 0)
        }
        if (document.getElementById('o-algcirc-82').checked) {
          document.getElementById('r-algcirc-82').style.color = 'blue'
          document.getElementById('r-algcirc-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algcirc-82').classList.add("correct")
          document.getElementById('b-algcirc-81').classList.add("incorrect")
          document.getElementById('b-algcirc-83').classList.add("incorrect")
          document.getElementById('b-algcirc-84').classList.add("incorrect")
    
          document.getElementById('sa-algcirc-8').disabled = true;
          document.getElementById('o-algcirc-81').disabled = true;
          document.getElementById('o-algcirc-82').disabled = true;
          document.getElementById('o-algcirc-83').disabled = true;
          document.getElementById('o-algcirc-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algcirc8', 1)
        }
        if (document.getElementById('o-algcirc-83').checked) {
          document.getElementById('r-algcirc-83').style.color = 'red'
          document.getElementById('r-algcirc-83').innerHTML = 'Incorrect!'
          document.getElementById('r-algcirc-82').style.color = 'blue'
          document.getElementById('r-algcirc-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algcirc-82').classList.add("correct")
          document.getElementById('b-algcirc-81').classList.add("incorrect")
          document.getElementById('b-algcirc-83').classList.add("incorrect")
          document.getElementById('b-algcirc-84').classList.add("incorrect")
    
          document.getElementById('sa-algcirc-8').disabled = true;
          document.getElementById('o-algcirc-81').disabled = true;
          document.getElementById('o-algcirc-82').disabled = true;
          document.getElementById('o-algcirc-83').disabled = true;
          document.getElementById('o-algcirc-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algcirc8', 0)
        }
        if (document.getElementById('o-algcirc-84').checked) {
          document.getElementById('r-algcirc-84').style.color = 'red'
          document.getElementById('r-algcirc-84').innerHTML = 'Incorrect!'
          document.getElementById('r-algcirc-82').style.color = 'blue'
          document.getElementById('r-algcirc-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algcirc-82').classList.add("correct")
          document.getElementById('b-algcirc-81').classList.add("incorrect")
          document.getElementById('b-algcirc-83').classList.add("incorrect")
          document.getElementById('b-algcirc-84').classList.add("incorrect")
    
          document.getElementById('sa-algcirc-8').disabled = true;
          document.getElementById('o-algcirc-81').disabled = true;
          document.getElementById('o-algcirc-82').disabled = true;
          document.getElementById('o-algcirc-83').disabled = true;
          document.getElementById('o-algcirc-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algcirc8', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-algcirc-9') != null) {
      algcirc9But.onclick = function() {
        if (document.getElementById('o-algcirc-91').checked) {
          document.getElementById('r-algcirc-91').style.color = 'red'
          document.getElementById('r-algcirc-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algcirc-94').style.color = 'blue'
          document.getElementById('r-algcirc-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algcirc-94').classList.add("correct")
          document.getElementById('b-algcirc-91').classList.add("incorrect")
          document.getElementById('b-algcirc-92').classList.add("incorrect")
          document.getElementById('b-algcirc-93').classList.add("incorrect")
    
          document.getElementById('sa-algcirc-9').disabled = true;
          document.getElementById('o-algcirc-91').disabled = true;
          document.getElementById('o-algcirc-92').disabled = true;
          document.getElementById('o-algcirc-93').disabled = true;
          document.getElementById('o-algcirc-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algcirc9', 0)
        }
        if (document.getElementById('o-algcirc-92').checked) {
          document.getElementById('r-algcirc-91').style.color = 'red'
          document.getElementById('r-algcirc-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algcirc-94').style.color = 'blue'
          document.getElementById('r-algcirc-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algcirc-94').classList.add("correct")
          document.getElementById('b-algcirc-91').classList.add("incorrect")
          document.getElementById('b-algcirc-92').classList.add("incorrect")
          document.getElementById('b-algcirc-93').classList.add("incorrect")
    
          document.getElementById('sa-algcirc-9').disabled = true;
          document.getElementById('o-algcirc-91').disabled = true;
          document.getElementById('o-algcirc-92').disabled = true;
          document.getElementById('o-algcirc-93').disabled = true;
          document.getElementById('o-algcirc-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algcirc9', 0)
        }
        if (document.getElementById('o-algcirc-93').checked) {
          document.getElementById('r-algcirc-91').style.color = 'red'
          document.getElementById('r-algcirc-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algcirc-94').style.color = 'blue'
          document.getElementById('r-algcirc-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algcirc-94').classList.add("correct")
          document.getElementById('b-algcirc-91').classList.add("incorrect")
          document.getElementById('b-algcirc-92').classList.add("incorrect")
          document.getElementById('b-algcirc-93').classList.add("incorrect")
    
          document.getElementById('sa-algcirc-9').disabled = true;
          document.getElementById('o-algcirc-91').disabled = true;
          document.getElementById('o-algcirc-92').disabled = true;
          document.getElementById('o-algcirc-93').disabled = true;
          document.getElementById('o-algcirc-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algcirc9', 0)
        }
        if (document.getElementById('o-algcirc-94').checked) {
          document.getElementById('r-algcirc-94').style.color = 'blue'
          document.getElementById('r-algcirc-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algcirc-94').classList.add("correct")
          document.getElementById('b-algcirc-91').classList.add("incorrect")
          document.getElementById('b-algcirc-92').classList.add("incorrect")
          document.getElementById('b-algcirc-93').classList.add("incorrect")
    
          document.getElementById('sa-algcirc-9').disabled = true;
          document.getElementById('o-algcirc-91').disabled = true;
          document.getElementById('o-algcirc-92').disabled = true;
          document.getElementById('o-algcirc-93').disabled = true;
          document.getElementById('o-algcirc-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algcirc9', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algcirc-10') != null) {
      algcirc10But.onclick = function() {
        if (document.getElementById('o-algcirc-101').checked) {
          document.getElementById('r-algcirc-101').style.color = 'red'
          document.getElementById('r-algcirc-101').innerHTML = 'Incorrect!'
          document.getElementById('r-algcirc-102').style.color = 'blue'
          document.getElementById('r-algcirc-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algcirc-102').classList.add("correct")
          document.getElementById('b-algcirc-101').classList.add("incorrect")
          document.getElementById('b-algcirc-103').classList.add("incorrect")
          document.getElementById('b-algcirc-104').classList.add("incorrect")
    
          document.getElementById('sa-algcirc-10').disabled = true;
          document.getElementById('o-algcirc-101').disabled = true;
          document.getElementById('o-algcirc-102').disabled = true;
          document.getElementById('o-algcirc-103').disabled = true;
          document.getElementById('o-algcirc-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algcirc10', 0)
        }
        if (document.getElementById('o-algcirc-102').checked) {
          document.getElementById('r-algcirc-102').style.color = 'blue'
          document.getElementById('r-algcirc-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algcirc-102').classList.add("correct")
          document.getElementById('b-algcirc-101').classList.add("incorrect")
          document.getElementById('b-algcirc-103').classList.add("incorrect")
          document.getElementById('b-algcirc-104').classList.add("incorrect")
    
          document.getElementById('sa-algcirc-10').disabled = true;
          document.getElementById('o-algcirc-101').disabled = true;
          document.getElementById('o-algcirc-102').disabled = true;
          document.getElementById('o-algcirc-103').disabled = true;
          document.getElementById('o-algcirc-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algcirc10', 1)
        }
        if (document.getElementById('o-algcirc-103').checked) {
          document.getElementById('r-algcirc-103').style.color = 'red'
          document.getElementById('r-algcirc-103').innerHTML = 'Incorrect!'
          document.getElementById('r-algcirc-102').style.color = 'blue'
          document.getElementById('r-algcirc-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algcirc-102').classList.add("correct")
          document.getElementById('b-algcirc-101').classList.add("incorrect")
          document.getElementById('b-algcirc-103').classList.add("incorrect")
          document.getElementById('b-algcirc-104').classList.add("incorrect")
    
          document.getElementById('sa-algcirc-10').disabled = true;
          document.getElementById('o-algcirc-101').disabled = true;
          document.getElementById('o-algcirc-102').disabled = true;
          document.getElementById('o-algcirc-103').disabled = true;
          document.getElementById('o-algcirc-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algcirc10', 0)
        }
        if (document.getElementById('o-algcirc-104').checked) {
          document.getElementById('r-algcirc-104').style.color = 'red'
          document.getElementById('r-algcirc-104').innerHTML = 'Incorrect!'
          document.getElementById('r-algcirc-102').style.color = 'blue'
          document.getElementById('r-algcirc-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algcirc-102').classList.add("correct")
          document.getElementById('b-algcirc-101').classList.add("incorrect")
          document.getElementById('b-algcirc-103').classList.add("incorrect")
          document.getElementById('b-algcirc-104').classList.add("incorrect")
    
          document.getElementById('sa-algcirc-10').disabled = true;
          document.getElementById('o-algcirc-101').disabled = true;
          document.getElementById('o-algcirc-102').disabled = true;
          document.getElementById('o-algcirc-103').disabled = true;
          document.getElementById('o-algcirc-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algcirc10', 0)
        }
      }
    }
    