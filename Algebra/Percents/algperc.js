
  let algperc1But = document.getElementById('sa-algperc-1');
  let algperc2But = document.getElementById('sa-algperc-2');
  let algperc3But = document.getElementById('sa-algperc-3');
  let algperc4But = document.getElementById('sa-algperc-4');
  let algperc5But = document.getElementById('sa-algperc-5');
  let algperc6But = document.getElementById('sa-algperc-6');
  let algperc7But = document.getElementById('sa-algperc-7');
  let algperc8But = document.getElementById('sa-algperc-8');
  let algperc9But = document.getElementById('sa-algperc-9');
  let algperc10But = document.getElementById('sa-algperc-10');


  showExplanation1 = function() {
    document.getElementById('e-algperc-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-algperc-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-algperc-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-algperc-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-algperc-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-algperc-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-algperc-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-algperc-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-algperc-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-algperc-10').style.display = 'block';
     } 



     if (document.getElementById('sa-algperc-1') != null) {
      algperc1But.onclick = function () {
        if (document.getElementById('o-algperc-11').checked) {
          document.getElementById('r-algperc-11').style.color = 'red'
          document.getElementById('r-algperc-11').innerHTML = 'Incorrect!'
          document.getElementById('r-algperc-13').style.color = 'blue'
          document.getElementById('r-algperc-13').innerHTML = 'Correct!'
    
          document.getElementById('b-algperc-13').classList.add("correct")
          document.getElementById('b-algperc-12').classList.add("incorrect")
          document.getElementById('b-algperc-14').classList.add("incorrect")
          document.getElementById('b-algperc-11').classList.add("incorrect")
    
          document.getElementById('sa-algperc-1').disabled = true;
          document.getElementById('o-algperc-11').disabled = true;
          document.getElementById('o-algperc-12').disabled = true;
          document.getElementById('o-algperc-13').disabled = true;
          document.getElementById('o-algperc-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algperc1', 0)
        }
    
        if (document.getElementById('o-algperc-12').checked) {
         
          document.getElementById('r-algperc-12').style.color = 'red'
          document.getElementById('r-algperc-12').innerHTML = 'Incorrect!'
          document.getElementById('r-algperc-13').style.color = 'blue'
          document.getElementById('r-algperc-13').innerHTML = 'Correct!'
    
          document.getElementById('b-algperc-13').classList.add("correct")
          document.getElementById('b-algperc-12').classList.add("incorrect")
          document.getElementById('b-algperc-14').classList.add("incorrect")
          document.getElementById('b-algperc-11').classList.add("incorrect")
    
          document.getElementById('sa-algperc-1').disabled = true;
          document.getElementById('o-algperc-11').disabled = true;
          document.getElementById('o-algperc-12').disabled = true;
          document.getElementById('o-algperc-13').disabled = true;
          document.getElementById('o-algperc-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algperc1', 0)
        }
        if (document.getElementById('o-algperc-13').checked) {
          document.getElementById('r-algperc-13').style.color = 'blue'
          document.getElementById('r-algperc-13').innerHTML = 'Correct!'
          
          document.getElementById('b-algperc-13').classList.add("correct")
          document.getElementById('b-algperc-12').classList.add("incorrect")
          document.getElementById('b-algperc-14').classList.add("incorrect")
          document.getElementById('b-algperc-11').classList.add("incorrect")
    
          document.getElementById('sa-algperc-1').disabled = true;
          document.getElementById('o-algperc-11').disabled = true;
          document.getElementById('o-algperc-12').disabled = true;
          document.getElementById('o-algperc-13').disabled = true;
          document.getElementById('o-algperc-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algperc1', 1)
        }
        if (document.getElementById('o-algperc-14').checked) {
          document.getElementById('r-algperc-14').style.color = 'red'
          document.getElementById('r-algperc-14').innerHTML = 'Incorrect!'
          document.getElementById('r-algperc-13').style.color = 'blue'
          document.getElementById('r-algperc-13').innerHTML = 'Correct!'
          
          document.getElementById('b-algperc-13').classList.add("correct")
          document.getElementById('b-algperc-12').classList.add("incorrect")
          document.getElementById('b-algperc-14').classList.add("incorrect")
          document.getElementById('b-algperc-11').classList.add("incorrect")
    
          document.getElementById('sa-algperc-1').disabled = true;
          document.getElementById('o-algperc-11').disabled = true;
          document.getElementById('o-algperc-12').disabled = true;
          document.getElementById('o-algperc-13').disabled = true;
          document.getElementById('o-algperc-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algperc1', 0)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-algperc-2') != null) {
      algperc2But.onclick = function() {
        if (document.getElementById('o-algperc-21').checked) {
          document.getElementById('r-algperc-21').style.color = 'red'
          document.getElementById('r-algperc-21').innerHTML = 'Incorrect!'
          document.getElementById('r-algperc-24').style.color = 'blue'
          document.getElementById('r-algperc-24').innerHTML = 'Correct!'
          
          document.getElementById('b-algperc-24').classList.add("correct")
          document.getElementById('b-algperc-21').classList.add("incorrect")
          document.getElementById('b-algperc-22').classList.add("incorrect")
          document.getElementById('b-algperc-23').classList.add("incorrect")
    
          document.getElementById('sa-algperc-2').disabled = true;
          document.getElementById('o-algperc-21').disabled = true;
          document.getElementById('o-algperc-22').disabled = true;
          document.getElementById('o-algperc-23').disabled = true;
          document.getElementById('o-algperc-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algperc2', 0)
        }
        if (document.getElementById('o-algperc-22').checked) {
          document.getElementById('r-algperc-22').style.color = 'red'
          document.getElementById('r-algperc-22').innerHTML = 'Incorrect!'
          document.getElementById('r-algperc-24').style.color = 'blue'
          document.getElementById('r-algperc-24').innerHTML = 'Correct!'
          
          document.getElementById('b-algperc-24').classList.add("correct")
          document.getElementById('b-algperc-21').classList.add("incorrect")
          document.getElementById('b-algperc-22').classList.add("incorrect")
          document.getElementById('b-algperc-23').classList.add("incorrect")
    
          document.getElementById('sa-algperc-2').disabled = true;
          document.getElementById('o-algperc-21').disabled = true;
          document.getElementById('o-algperc-22').disabled = true;
          document.getElementById('o-algperc-23').disabled = true;
          document.getElementById('o-algperc-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algperc2', 0)
        }
        if (document.getElementById('o-algperc-23').checked) {
          document.getElementById('r-algperc-23').style.color = 'red'
          document.getElementById('r-algperc-23').innerHTML = 'Incorrect!'
          document.getElementById('r-algperc-24').style.color = 'blue'
          document.getElementById('r-algperc-24').innerHTML = 'Correct!'
          
          document.getElementById('b-algperc-24').classList.add("correct")
          document.getElementById('b-algperc-21').classList.add("incorrect")
          document.getElementById('b-algperc-22').classList.add("incorrect")
          document.getElementById('b-algperc-23').classList.add("incorrect")
    
          document.getElementById('sa-algperc-2').disabled = true;
          document.getElementById('o-algperc-21').disabled = true;
          document.getElementById('o-algperc-22').disabled = true;
          document.getElementById('o-algperc-23').disabled = true;
          document.getElementById('o-algperc-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algperc2', 0)
        }
        if (document.getElementById('o-algperc-24').checked) {
          document.getElementById('r-algperc-24').style.color = 'blue'
          document.getElementById('r-algperc-24').innerHTML = 'Correct!'
          
          document.getElementById('b-algperc-24').classList.add("correct")
          document.getElementById('b-algperc-21').classList.add("incorrect")
          document.getElementById('b-algperc-22').classList.add("incorrect")
          document.getElementById('b-algperc-23').classList.add("incorrect")
    
          document.getElementById('sa-algperc-2').disabled = true;
          document.getElementById('o-algperc-21').disabled = true;
          document.getElementById('o-algperc-22').disabled = true;
          document.getElementById('o-algperc-23').disabled = true;
          document.getElementById('o-algperc-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algperc2', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algperc-3') != null) {
      algperc3But.onclick = function() {
        if (document.getElementById('o-algperc-31').checked) {
          document.getElementById('r-algperc-31').style.color = 'red'
          document.getElementById('r-algperc-31').innerHTML = 'Incorrect!'
          document.getElementById('r-algperc-33').style.color = 'blue'
          document.getElementById('r-algperc-33').innerHTML = 'Correct!'
          
          document.getElementById('b-algperc-33').classList.add("correct")
          document.getElementById('b-algperc-31').classList.add("incorrect")
          document.getElementById('b-algperc-32').classList.add("incorrect")
          document.getElementById('b-algperc-34').classList.add("incorrect")
    
          document.getElementById('sa-algperc-3').disabled = true;
          document.getElementById('o-algperc-31').disabled = true;
          document.getElementById('o-algperc-32').disabled = true;
          document.getElementById('o-algperc-33').disabled = true;
          document.getElementById('o-algperc-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algperc3', 0)
        }
        if (document.getElementById('o-algperc-32').checked) {
          document.getElementById('r-algperc-32').style.color = 'red'
          document.getElementById('r-algperc-32').innerHTML = 'Incorrect!'
          document.getElementById('r-algperc-33').style.color = 'blue'
          document.getElementById('r-algperc-33').innerHTML = 'Correct!'
          
          document.getElementById('b-algperc-33').classList.add("correct")
          document.getElementById('b-algperc-31').classList.add("incorrect")
          document.getElementById('b-algperc-32').classList.add("incorrect")
          document.getElementById('b-algperc-34').classList.add("incorrect")
    
          document.getElementById('sa-algperc-3').disabled = true;
          document.getElementById('o-algperc-31').disabled = true;
          document.getElementById('o-algperc-32').disabled = true;
          document.getElementById('o-algperc-33').disabled = true;
          document.getElementById('o-algperc-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algperc3', 0)
        }
        if (document.getElementById('o-algperc-33').checked) {
          document.getElementById('r-algperc-33').style.color = 'blue'
          document.getElementById('r-algperc-33').innerHTML = 'Correct!'
          
          document.getElementById('b-algperc-33').classList.add("correct")
          document.getElementById('b-algperc-31').classList.add("incorrect")
          document.getElementById('b-algperc-32').classList.add("incorrect")
          document.getElementById('b-algperc-34').classList.add("incorrect")
    
          document.getElementById('sa-algperc-3').disabled = true;
          document.getElementById('o-algperc-31').disabled = true;
          document.getElementById('o-algperc-32').disabled = true;
          document.getElementById('o-algperc-33').disabled = true;
          document.getElementById('o-algperc-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algperc3', 1)
        }
        if (document.getElementById('o-algperc-34').checked) {
          document.getElementById('r-algperc-34').style.color = 'red'
          document.getElementById('r-algperc-34').innerHTML = 'Incorrect!'
          document.getElementById('r-algperc-33').style.color = 'blue'
          document.getElementById('r-algperc-33').innerHTML = 'Correct!'
          
          document.getElementById('b-algperc-33').classList.add("correct")
          document.getElementById('b-algperc-31').classList.add("incorrect")
          document.getElementById('b-algperc-32').classList.add("incorrect")
          document.getElementById('b-algperc-34').classList.add("incorrect")
    
          document.getElementById('sa-algperc-3').disabled = true;
          document.getElementById('o-algperc-31').disabled = true;
          document.getElementById('o-algperc-32').disabled = true;
          document.getElementById('o-algperc-33').disabled = true;
          document.getElementById('o-algperc-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algperc3', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algperc-4') != null) {
      algperc4But.onclick = function() {
        if (document.getElementById('o-algperc-41').checked) {
          document.getElementById('r-algperc-41').style.color = 'red'
          document.getElementById('r-algperc-41').innerHTML = 'Incorrect!'
          document.getElementById('r-algperc-43').style.color = 'blue'
          document.getElementById('r-algperc-43').innerHTML = 'Correct!'
          
          document.getElementById('b-algperc-43').classList.add("correct")
          document.getElementById('b-algperc-41').classList.add("incorrect")
          document.getElementById('b-algperc-42').classList.add("incorrect")
          document.getElementById('b-algperc-44').classList.add("incorrect")
    
          document.getElementById('sa-algperc-4').disabled = true;
          document.getElementById('o-algperc-41').disabled = true;
          document.getElementById('o-algperc-42').disabled = true;
          document.getElementById('o-algperc-43').disabled = true;
          document.getElementById('o-algperc-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algperc4', 0)
        }
        if (document.getElementById('o-algperc-42').checked) {
          document.getElementById('r-algperc-42').style.color = 'red'
          document.getElementById('r-algperc-42').innerHTML = 'Incorrect!'
          document.getElementById('r-algperc-43').style.color = 'blue'
          document.getElementById('r-algperc-43').innerHTML = 'Correct!'
          
          document.getElementById('b-algperc-43').classList.add("correct")
          document.getElementById('b-algperc-41').classList.add("incorrect")
          document.getElementById('b-algperc-42').classList.add("incorrect")
          document.getElementById('b-algperc-44').classList.add("incorrect")
    
          document.getElementById('sa-algperc-4').disabled = true;
          document.getElementById('o-algperc-41').disabled = true;
          document.getElementById('o-algperc-42').disabled = true;
          document.getElementById('o-algperc-43').disabled = true;
          document.getElementById('o-algperc-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algperc4', 0)
        }
        if (document.getElementById('o-algperc-43').checked) {
          document.getElementById('r-algperc-43').style.color = 'blue'
          document.getElementById('r-algperc-43').innerHTML = 'Correct!'
          
          document.getElementById('b-algperc-43').classList.add("correct")
          document.getElementById('b-algperc-41').classList.add("incorrect")
          document.getElementById('b-algperc-42').classList.add("incorrect")
          document.getElementById('b-algperc-44').classList.add("incorrect")
    
          document.getElementById('sa-algperc-4').disabled = true;
          document.getElementById('o-algperc-41').disabled = true;
          document.getElementById('o-algperc-42').disabled = true;
          document.getElementById('o-algperc-43').disabled = true;
          document.getElementById('o-algperc-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algperc4', 1)
        }
        if (document.getElementById('o-algperc-44').checked) {
          document.getElementById('r-algperc-43').style.color = 'red'
          document.getElementById('r-algperc-43').innerHTML = 'Incorrect!'
          document.getElementById('r-algperc-44').style.color = 'blue'
          document.getElementById('r-algperc-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algperc-44').classList.add("correct")
          document.getElementById('b-algperc-41').classList.add("incorrect")
          document.getElementById('b-algperc-42').classList.add("incorrect")
          document.getElementById('b-algperc-43').classList.add("incorrect")
    
          document.getElementById('sa-algperc-4').disabled = true;
          document.getElementById('o-algperc-41').disabled = true;
          document.getElementById('o-algperc-42').disabled = true;
          document.getElementById('o-algperc-43').disabled = true;
          document.getElementById('o-algperc-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algperc4', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algperc-5') != null) {
      algperc5But.onclick = function() {
        if (document.getElementById('o-algperc-51').checked) {
          document.getElementById('r-algperc-51').style.color = 'red'
          document.getElementById('r-algperc-51').innerHTML = 'Incorrect!'
          document.getElementById('r-algperc-52').style.color = 'blue'
          document.getElementById('r-algperc-52').innerHTML = 'Correct!'
          
          document.getElementById('b-algperc-52').classList.add("correct")
          document.getElementById('b-algperc-51').classList.add("incorrect")
          document.getElementById('b-algperc-53').classList.add("incorrect")
          document.getElementById('b-algperc-54').classList.add("incorrect")
    
          document.getElementById('sa-algperc-5').disabled = true;
          document.getElementById('o-algperc-51').disabled = true;
          document.getElementById('o-algperc-52').disabled = true;
          document.getElementById('o-algperc-53').disabled = true;
          document.getElementById('o-algperc-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algperc5', 0)
        }
        if (document.getElementById('o-algperc-52').checked) {
          document.getElementById('r-algperc-52').style.color = 'blue'
          document.getElementById('r-algperc-52').innerHTML = 'Correct!'
          
          document.getElementById('b-algperc-52').classList.add("correct")
          document.getElementById('b-algperc-51').classList.add("incorrect")
          document.getElementById('b-algperc-53').classList.add("incorrect")
          document.getElementById('b-algperc-54').classList.add("incorrect")
    
          document.getElementById('sa-algperc-5').disabled = true;
          document.getElementById('o-algperc-51').disabled = true;
          document.getElementById('o-algperc-52').disabled = true;
          document.getElementById('o-algperc-53').disabled = true;
          document.getElementById('o-algperc-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algperc5', 1)
        }
        if (document.getElementById('o-algperc-53').checked) {
          document.getElementById('r-algperc-53').style.color = 'red'
          document.getElementById('r-algperc-53').innerHTML = 'Incorrect!'
          document.getElementById('r-algperc-52').style.color = 'blue'
          document.getElementById('r-algperc-52').innerHTML = 'Correct!'
          
          document.getElementById('b-algperc-52').classList.add("correct")
          document.getElementById('b-algperc-51').classList.add("incorrect")
          document.getElementById('b-algperc-53').classList.add("incorrect")
          document.getElementById('b-algperc-54').classList.add("incorrect")
    
          document.getElementById('sa-algperc-5').disabled = true;
          document.getElementById('o-algperc-51').disabled = true;
          document.getElementById('o-algperc-52').disabled = true;
          document.getElementById('o-algperc-53').disabled = true;
          document.getElementById('o-algperc-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algperc5', 0)
        }
        if (document.getElementById('o-algperc-54').checked) {
          document.getElementById('r-algperc-54').style.color = 'red'
          document.getElementById('r-algperc-54').innerHTML = 'Incorrect!'
          document.getElementById('r-algperc-52').style.color = 'blue'
          document.getElementById('r-algperc-52').innerHTML = 'Correct!'
          
          document.getElementById('b-algperc-52').classList.add("correct")
          document.getElementById('b-algperc-51').classList.add("incorrect")
          document.getElementById('b-algperc-53').classList.add("incorrect")
          document.getElementById('b-algperc-54').classList.add("incorrect")
    
          document.getElementById('sa-algperc-5').disabled = true;
          document.getElementById('o-algperc-51').disabled = true;
          document.getElementById('o-algperc-52').disabled = true;
          document.getElementById('o-algperc-53').disabled = true;
          document.getElementById('o-algperc-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algperc5', 0)
        }
      }
    }
        
         
      if (document.getElementById('sa-algperc-6') != null) {
      algperc6But.onclick = function() {
        if (document.getElementById('o-algperc-61').checked) {
          document.getElementById('r-algperc-61').style.color = 'red'
          document.getElementById('r-algperc-61').innerHTML = 'Incorrect!'
          document.getElementById('r-algperc-64').style.color = 'blue'
          document.getElementById('r-algperc-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algperc-64').classList.add("correct")
          document.getElementById('b-algperc-61').classList.add("incorrect")
          document.getElementById('b-algperc-62').classList.add("incorrect")
          document.getElementById('b-algperc-63').classList.add("incorrect")
    
          document.getElementById('sa-algperc-6').disabled = true;
          document.getElementById('o-algperc-61').disabled = true;
          document.getElementById('o-algperc-62').disabled = true;
          document.getElementById('o-algperc-63').disabled = true;
          document.getElementById('o-algperc-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algperc6', 0)
        }
        if (document.getElementById('o-algperc-62').checked) {
          document.getElementById('r-algperc-62').style.color = 'red'
          document.getElementById('r-algperc-62').innerHTML = 'Incorrect!'
          document.getElementById('r-algperc-64').style.color = 'blue'
          document.getElementById('r-algperc-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algperc-64').classList.add("correct")
          document.getElementById('b-algperc-61').classList.add("incorrect")
          document.getElementById('b-algperc-62').classList.add("incorrect")
          document.getElementById('b-algperc-63').classList.add("incorrect")
    
          document.getElementById('sa-algperc-6').disabled = true;
          document.getElementById('o-algperc-61').disabled = true;
          document.getElementById('o-algperc-62').disabled = true;
          document.getElementById('o-algperc-63').disabled = true;
          document.getElementById('o-algperc-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algperc6', 0)
        }
        if (document.getElementById('o-algperc-63').checked) {
          document.getElementById('r-algperc-63').style.color = 'red'
          document.getElementById('r-algperc-63').innerHTML = 'Incorrect!'
          document.getElementById('r-algperc-64').style.color = 'blue'
          document.getElementById('r-algperc-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algperc-64').classList.add("correct")
          document.getElementById('b-algperc-61').classList.add("incorrect")
          document.getElementById('b-algperc-62').classList.add("incorrect")
          document.getElementById('b-algperc-63').classList.add("incorrect")
    
          document.getElementById('sa-algperc-6').disabled = true;
          document.getElementById('o-algperc-61').disabled = true;
          document.getElementById('o-algperc-62').disabled = true;
          document.getElementById('o-algperc-63').disabled = true;
          document.getElementById('o-algperc-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algperc6', 0)
        }
        if (document.getElementById('o-algperc-64').checked) {
          document.getElementById('r-algperc-64').style.color = 'blue'
          document.getElementById('r-algperc-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algperc-64').classList.add("correct")
          document.getElementById('b-algperc-61').classList.add("incorrect")
          document.getElementById('b-algperc-62').classList.add("incorrect")
          document.getElementById('b-algperc-63').classList.add("incorrect")
    
          document.getElementById('sa-algperc-6').disabled = true;
          document.getElementById('o-algperc-61').disabled = true;
          document.getElementById('o-algperc-62').disabled = true;
          document.getElementById('o-algperc-63').disabled = true;
          document.getElementById('o-algperc-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algperc6', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algperc-7') != null) {
      algperc7But.onclick = function() {
        if (document.getElementById('o-algperc-71').checked) {
          document.getElementById('r-algperc-71').style.color = 'red'
          document.getElementById('r-algperc-71').innerHTML = 'Incorrect!'
          document.getElementById('r-algperc-72').style.color = 'blue'
          document.getElementById('r-algperc-72').innerHTML = 'Correct!'
          
          document.getElementById('b-algperc-72').classList.add("correct")
          document.getElementById('b-algperc-71').classList.add("incorrect")
          document.getElementById('b-algperc-74').classList.add("incorrect")
          document.getElementById('b-algperc-73').classList.add("incorrect")
    
          document.getElementById('sa-algperc-7').disabled = true;
          document.getElementById('o-algperc-71').disabled = true;
          document.getElementById('o-algperc-72').disabled = true;
          document.getElementById('o-algperc-73').disabled = true;
          document.getElementById('o-algperc-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algperc7', 0)
        }
        if (document.getElementById('o-algperc-72').checked) {
          document.getElementById('r-algperc-72').style.color = 'blue'
          document.getElementById('r-algperc-72').innerHTML = 'Correct!'
          
          document.getElementById('b-algperc-72').classList.add("correct")
          document.getElementById('b-algperc-71').classList.add("incorrect")
          document.getElementById('b-algperc-74').classList.add("incorrect")
          document.getElementById('b-algperc-73').classList.add("incorrect")
    
          document.getElementById('sa-algperc-7').disabled = true;
          document.getElementById('o-algperc-71').disabled = true;
          document.getElementById('o-algperc-72').disabled = true;
          document.getElementById('o-algperc-73').disabled = true;
          document.getElementById('o-algperc-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algperc7', 1)
        }
        if (document.getElementById('o-algperc-73').checked) {
          document.getElementById('r-algperc-73').style.color = 'red'
          document.getElementById('r-algperc-73').innerHTML = 'Incorrect!'
          document.getElementById('r-algperc-72').style.color = 'blue'
          document.getElementById('r-algperc-72').innerHTML = 'Correct!'
          
          document.getElementById('b-algperc-72').classList.add("correct")
          document.getElementById('b-algperc-71').classList.add("incorrect")
          document.getElementById('b-algperc-74').classList.add("incorrect")
          document.getElementById('b-algperc-73').classList.add("incorrect")
    
          document.getElementById('sa-algperc-7').disabled = true;
          document.getElementById('o-algperc-71').disabled = true;
          document.getElementById('o-algperc-72').disabled = true;
          document.getElementById('o-algperc-73').disabled = true;
          document.getElementById('o-algperc-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algperc7', 0)
        }
        if (document.getElementById('o-algperc-74').checked) {
          document.getElementById('r-algperc-74').style.color = 'red'
          document.getElementById('r-algperc-74').innerHTML = 'Incorrect!'
          document.getElementById('r-algperc-72').style.color = 'blue'
          document.getElementById('r-algperc-72').innerHTML = 'Correct!'
          
          document.getElementById('b-algperc-72').classList.add("correct")
          document.getElementById('b-algperc-71').classList.add("incorrect")
          document.getElementById('b-algperc-74').classList.add("incorrect")
          document.getElementById('b-algperc-73').classList.add("incorrect")
    
          document.getElementById('sa-algperc-7').disabled = true;
          document.getElementById('o-algperc-71').disabled = true;
          document.getElementById('o-algperc-72').disabled = true;
          document.getElementById('o-algperc-73').disabled = true;
          document.getElementById('o-algperc-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algperc7', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-algperc-8') != null) {
      algperc8But.onclick = function() {
        if (document.getElementById('o-algperc-81').checked) {
          document.getElementById('r-algperc-81').style.color = 'red'
          document.getElementById('r-algperc-81').innerHTML = 'Incorrect!'
          document.getElementById('r-algperc-82').style.color = 'blue'
          document.getElementById('r-algperc-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algperc-82').classList.add("correct")
          document.getElementById('b-algperc-81').classList.add("incorrect")
          document.getElementById('b-algperc-83').classList.add("incorrect")
          document.getElementById('b-algperc-84').classList.add("incorrect")
    
          document.getElementById('sa-algperc-8').disabled = true;
          document.getElementById('o-algperc-81').disabled = true;
          document.getElementById('o-algperc-82').disabled = true;
          document.getElementById('o-algperc-83').disabled = true;
          document.getElementById('o-algperc-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algperc8', 0)
        }
        if (document.getElementById('o-algperc-82').checked) {
          document.getElementById('r-algperc-82').style.color = 'blue'
          document.getElementById('r-algperc-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algperc-82').classList.add("correct")
          document.getElementById('b-algperc-81').classList.add("incorrect")
          document.getElementById('b-algperc-83').classList.add("incorrect")
          document.getElementById('b-algperc-84').classList.add("incorrect")
    
          document.getElementById('sa-algperc-8').disabled = true;
          document.getElementById('o-algperc-81').disabled = true;
          document.getElementById('o-algperc-82').disabled = true;
          document.getElementById('o-algperc-83').disabled = true;
          document.getElementById('o-algperc-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algperc8', 1)
        }
        if (document.getElementById('o-algperc-83').checked) {
          document.getElementById('r-algperc-83').style.color = 'red'
          document.getElementById('r-algperc-83').innerHTML = 'Incorrect!'
          document.getElementById('r-algperc-82').style.color = 'blue'
          document.getElementById('r-algperc-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algperc-82').classList.add("correct")
          document.getElementById('b-algperc-81').classList.add("incorrect")
          document.getElementById('b-algperc-83').classList.add("incorrect")
          document.getElementById('b-algperc-84').classList.add("incorrect")
    
          document.getElementById('sa-algperc-8').disabled = true;
          document.getElementById('o-algperc-81').disabled = true;
          document.getElementById('o-algperc-82').disabled = true;
          document.getElementById('o-algperc-83').disabled = true;
          document.getElementById('o-algperc-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algperc8', 0)
        }
        if (document.getElementById('o-algperc-84').checked) {
          document.getElementById('r-algperc-84').style.color = 'red'
          document.getElementById('r-algperc-84').innerHTML = 'Incorrect!'
          document.getElementById('r-algperc-82').style.color = 'blue'
          document.getElementById('r-algperc-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algperc-82').classList.add("correct")
          document.getElementById('b-algperc-81').classList.add("incorrect")
          document.getElementById('b-algperc-83').classList.add("incorrect")
          document.getElementById('b-algperc-84').classList.add("incorrect")
    
          document.getElementById('sa-algperc-8').disabled = true;
          document.getElementById('o-algperc-81').disabled = true;
          document.getElementById('o-algperc-82').disabled = true;
          document.getElementById('o-algperc-83').disabled = true;
          document.getElementById('o-algperc-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algperc8', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-algperc-9') != null) {
      algperc9But.onclick = function() {
        if (document.getElementById('o-algperc-91').checked) {
          document.getElementById('r-algperc-91').style.color = 'red'
          document.getElementById('r-algperc-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algperc-94').style.color = 'blue'
          document.getElementById('r-algperc-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algperc-94').classList.add("correct")
          document.getElementById('b-algperc-91').classList.add("incorrect")
          document.getElementById('b-algperc-92').classList.add("incorrect")
          document.getElementById('b-algperc-93').classList.add("incorrect")
    
          document.getElementById('sa-algperc-9').disabled = true;
          document.getElementById('o-algperc-91').disabled = true;
          document.getElementById('o-algperc-92').disabled = true;
          document.getElementById('o-algperc-93').disabled = true;
          document.getElementById('o-algperc-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algperc9', 0)
        }
        if (document.getElementById('o-algperc-92').checked) {
          document.getElementById('r-algperc-91').style.color = 'red'
          document.getElementById('r-algperc-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algperc-94').style.color = 'blue'
          document.getElementById('r-algperc-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algperc-94').classList.add("correct")
          document.getElementById('b-algperc-91').classList.add("incorrect")
          document.getElementById('b-algperc-92').classList.add("incorrect")
          document.getElementById('b-algperc-93').classList.add("incorrect")
    
          document.getElementById('sa-algperc-9').disabled = true;
          document.getElementById('o-algperc-91').disabled = true;
          document.getElementById('o-algperc-92').disabled = true;
          document.getElementById('o-algperc-93').disabled = true;
          document.getElementById('o-algperc-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algperc9', 0)
        }
        if (document.getElementById('o-algperc-93').checked) {
          document.getElementById('r-algperc-91').style.color = 'red'
          document.getElementById('r-algperc-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algperc-94').style.color = 'blue'
          document.getElementById('r-algperc-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algperc-94').classList.add("correct")
          document.getElementById('b-algperc-91').classList.add("incorrect")
          document.getElementById('b-algperc-92').classList.add("incorrect")
          document.getElementById('b-algperc-93').classList.add("incorrect")
    
          document.getElementById('sa-algperc-9').disabled = true;
          document.getElementById('o-algperc-91').disabled = true;
          document.getElementById('o-algperc-92').disabled = true;
          document.getElementById('o-algperc-93').disabled = true;
          document.getElementById('o-algperc-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algperc9', 0)
        }
        if (document.getElementById('o-algperc-94').checked) {
          document.getElementById('r-algperc-94').style.color = 'blue'
          document.getElementById('r-algperc-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algperc-94').classList.add("correct")
          document.getElementById('b-algperc-91').classList.add("incorrect")
          document.getElementById('b-algperc-92').classList.add("incorrect")
          document.getElementById('b-algperc-93').classList.add("incorrect")
    
          document.getElementById('sa-algperc-9').disabled = true;
          document.getElementById('o-algperc-91').disabled = true;
          document.getElementById('o-algperc-92').disabled = true;
          document.getElementById('o-algperc-93').disabled = true;
          document.getElementById('o-algperc-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algperc9', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algperc-10') != null) {
      algperc10But.onclick = function() {
        if (document.getElementById('o-algperc-101').checked) {
          document.getElementById('r-algperc-101').style.color = 'red'
          document.getElementById('r-algperc-101').innerHTML = 'Incorrect!'
          document.getElementById('r-algperc-102').style.color = 'blue'
          document.getElementById('r-algperc-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algperc-102').classList.add("correct")
          document.getElementById('b-algperc-101').classList.add("incorrect")
          document.getElementById('b-algperc-103').classList.add("incorrect")
          document.getElementById('b-algperc-104').classList.add("incorrect")
    
          document.getElementById('sa-algperc-10').disabled = true;
          document.getElementById('o-algperc-101').disabled = true;
          document.getElementById('o-algperc-102').disabled = true;
          document.getElementById('o-algperc-103').disabled = true;
          document.getElementById('o-algperc-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algperc10', 0)
        }
        if (document.getElementById('o-algperc-102').checked) {
          document.getElementById('r-algperc-102').style.color = 'blue'
          document.getElementById('r-algperc-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algperc-102').classList.add("correct")
          document.getElementById('b-algperc-101').classList.add("incorrect")
          document.getElementById('b-algperc-103').classList.add("incorrect")
          document.getElementById('b-algperc-104').classList.add("incorrect")
    
          document.getElementById('sa-algperc-10').disabled = true;
          document.getElementById('o-algperc-101').disabled = true;
          document.getElementById('o-algperc-102').disabled = true;
          document.getElementById('o-algperc-103').disabled = true;
          document.getElementById('o-algperc-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algperc10', 1)
        }
        if (document.getElementById('o-algperc-103').checked) {
          document.getElementById('r-algperc-103').style.color = 'red'
          document.getElementById('r-algperc-103').innerHTML = 'Incorrect!'
          document.getElementById('r-algperc-102').style.color = 'blue'
          document.getElementById('r-algperc-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algperc-102').classList.add("correct")
          document.getElementById('b-algperc-101').classList.add("incorrect")
          document.getElementById('b-algperc-103').classList.add("incorrect")
          document.getElementById('b-algperc-104').classList.add("incorrect")
    
          document.getElementById('sa-algperc-10').disabled = true;
          document.getElementById('o-algperc-101').disabled = true;
          document.getElementById('o-algperc-102').disabled = true;
          document.getElementById('o-algperc-103').disabled = true;
          document.getElementById('o-algperc-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algperc10', 0)
        }
        if (document.getElementById('o-algperc-104').checked) {
          document.getElementById('r-algperc-104').style.color = 'red'
          document.getElementById('r-algperc-104').innerHTML = 'Incorrect!'
          document.getElementById('r-algperc-102').style.color = 'blue'
          document.getElementById('r-algperc-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algperc-102').classList.add("correct")
          document.getElementById('b-algperc-101').classList.add("incorrect")
          document.getElementById('b-algperc-103').classList.add("incorrect")
          document.getElementById('b-algperc-104').classList.add("incorrect")
    
          document.getElementById('sa-algperc-10').disabled = true;
          document.getElementById('o-algperc-101').disabled = true;
          document.getElementById('o-algperc-102').disabled = true;
          document.getElementById('o-algperc-103').disabled = true;
          document.getElementById('o-algperc-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algperc10', 0)
        }
      }
    }
    