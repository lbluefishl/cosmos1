
  let algonevarsta1But = document.getElementById('sa-algonevarsta-1');
  let algonevarsta2But = document.getElementById('sa-algonevarsta-2');
  let algonevarsta3But = document.getElementById('sa-algonevarsta-3');
  let algonevarsta4But = document.getElementById('sa-algonevarsta-4');
  let algonevarsta5But = document.getElementById('sa-algonevarsta-5');
  let algonevarsta6But = document.getElementById('sa-algonevarsta-6');
  let algonevarsta7But = document.getElementById('sa-algonevarsta-7');
  let algonevarsta8But = document.getElementById('sa-algonevarsta-8');
  let algonevarsta9But = document.getElementById('sa-algonevarsta-9');
  let algonevarsta10But = document.getElementById('sa-algonevarsta-10');


  showExplanation1 = function() {
    document.getElementById('e-algonevarsta-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-algonevarsta-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-algonevarsta-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-algonevarsta-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-algonevarsta-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-algonevarsta-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-algonevarsta-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-algonevarsta-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-algonevarsta-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-algonevarsta-10').style.display = 'block';
     } 



     if (document.getElementById('sa-algonevarsta-1') != null) {
      algonevarsta1But.onclick = function () {
        if (document.getElementById('o-algonevarsta-11').checked) {
          document.getElementById('r-algonevarsta-11').style.color = 'red'
          document.getElementById('r-algonevarsta-11').innerHTML = 'Incorrect!'
          document.getElementById('r-algonevarsta-13').style.color = 'blue'
          document.getElementById('r-algonevarsta-13').innerHTML = 'Correct!'
    
          document.getElementById('b-algonevarsta-13').classList.add("correct")
          document.getElementById('b-algonevarsta-12').classList.add("incorrect")
          document.getElementById('b-algonevarsta-11').classList.add("incorrect")
          document.getElementById('b-algonevarsta-14').classList.add("incorrect")
    
          document.getElementById('sa-algonevarsta-1').disabled = true;
          document.getElementById('o-algonevarsta-11').disabled = true;
          document.getElementById('o-algonevarsta-12').disabled = true;
          document.getElementById('o-algonevarsta-13').disabled = true;
          document.getElementById('o-algonevarsta-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algonevarsta1', 0)
        }
    
        if (document.getElementById('o-algonevarsta-12').checked) {
         
          document.getElementById('r-algonevarsta-12').style.color = 'red'
          document.getElementById('r-algonevarsta-12').innerHTML = 'Incorrect!'
          document.getElementById('r-algonevarsta-13').style.color = 'blue'
          document.getElementById('r-algonevarsta-13').innerHTML = 'Correct!'
    
          document.getElementById('b-algonevarsta-13').classList.add("correct")
          document.getElementById('b-algonevarsta-12').classList.add("incorrect")
          document.getElementById('b-algonevarsta-11').classList.add("incorrect")
          document.getElementById('b-algonevarsta-14').classList.add("incorrect")
    
          document.getElementById('sa-algonevarsta-1').disabled = true;
          document.getElementById('o-algonevarsta-11').disabled = true;
          document.getElementById('o-algonevarsta-12').disabled = true;
          document.getElementById('o-algonevarsta-13').disabled = true;
          document.getElementById('o-algonevarsta-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algonevarsta1', 0)
        }
        if (document.getElementById('o-algonevarsta-13').checked) {
          document.getElementById('r-algonevarsta-13').style.color = 'blue'
          document.getElementById('r-algonevarsta-13').innerHTML = 'Correct!'
          
          document.getElementById('b-algonevarsta-13').classList.add("correct")
          document.getElementById('b-algonevarsta-12').classList.add("incorrect")
          document.getElementById('b-algonevarsta-11').classList.add("incorrect")
          document.getElementById('b-algonevarsta-14').classList.add("incorrect")
    
          document.getElementById('sa-algonevarsta-1').disabled = true;
          document.getElementById('o-algonevarsta-11').disabled = true;
          document.getElementById('o-algonevarsta-12').disabled = true;
          document.getElementById('o-algonevarsta-13').disabled = true;
          document.getElementById('o-algonevarsta-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algonevarsta1', 1)
        }
        if (document.getElementById('o-algonevarsta-14').checked) {
          document.getElementById('r-algonevarsta-14').style.color = 'red'
          document.getElementById('r-algonevarsta-14').innerHTML = 'Incorrect!'
          document.getElementById('r-algonevarsta-13').style.color = 'blue'
          document.getElementById('r-algonevarsta-13').innerHTML = 'Correct!'
          
          document.getElementById('b-algonevarsta-13').classList.add("correct")
          document.getElementById('b-algonevarsta-12').classList.add("incorrect")
          document.getElementById('b-algonevarsta-11').classList.add("incorrect")
          document.getElementById('b-algonevarsta-14').classList.add("incorrect")
    
          document.getElementById('sa-algonevarsta-1').disabled = true;
          document.getElementById('o-algonevarsta-11').disabled = true;
          document.getElementById('o-algonevarsta-12').disabled = true;
          document.getElementById('o-algonevarsta-13').disabled = true;
          document.getElementById('o-algonevarsta-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algonevarsta1', 0)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-algonevarsta-2') != null) {
      algonevarsta2But.onclick = function() {
        if (document.getElementById('o-algonevarsta-21').checked) {
          document.getElementById('r-algonevarsta-21').style.color = 'red'
          document.getElementById('r-algonevarsta-21').innerHTML = 'Incorrect!'
          document.getElementById('r-algonevarsta-22').style.color = 'blue'
          document.getElementById('r-algonevarsta-22').innerHTML = 'Correct!'
          
          document.getElementById('b-algonevarsta-22').classList.add("correct")
          document.getElementById('b-algonevarsta-21').classList.add("incorrect")
          document.getElementById('b-algonevarsta-23').classList.add("incorrect")
          document.getElementById('b-algonevarsta-24').classList.add("incorrect")
    
          document.getElementById('sa-algonevarsta-2').disabled = true;
          document.getElementById('o-algonevarsta-21').disabled = true;
          document.getElementById('o-algonevarsta-22').disabled = true;
          document.getElementById('o-algonevarsta-23').disabled = true;
          document.getElementById('o-algonevarsta-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algonevarsta2', 0)
        }
        if (document.getElementById('o-algonevarsta-22').checked) {
          document.getElementById('r-algonevarsta-22').style.color = 'blue'
          document.getElementById('r-algonevarsta-22').innerHTML = 'Correct!'
          
          document.getElementById('b-algonevarsta-22').classList.add("correct")
          document.getElementById('b-algonevarsta-21').classList.add("incorrect")
          document.getElementById('b-algonevarsta-23').classList.add("incorrect")
          document.getElementById('b-algonevarsta-24').classList.add("incorrect")
    
          document.getElementById('sa-algonevarsta-2').disabled = true;
          document.getElementById('o-algonevarsta-21').disabled = true;
          document.getElementById('o-algonevarsta-22').disabled = true;
          document.getElementById('o-algonevarsta-23').disabled = true;
          document.getElementById('o-algonevarsta-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algonevarsta2', 1)
        }
        if (document.getElementById('o-algonevarsta-23').checked) {
          document.getElementById('r-algonevarsta-23').style.color = 'red'
          document.getElementById('r-algonevarsta-23').innerHTML = 'Incorrect!'
          document.getElementById('r-algonevarsta-22').style.color = 'blue'
          document.getElementById('r-algonevarsta-22').innerHTML = 'Correct!'
          
          document.getElementById('b-algonevarsta-22').classList.add("correct")
          document.getElementById('b-algonevarsta-21').classList.add("incorrect")
          document.getElementById('b-algonevarsta-23').classList.add("incorrect")
          document.getElementById('b-algonevarsta-24').classList.add("incorrect")
    
          document.getElementById('sa-algonevarsta-2').disabled = true;
          document.getElementById('o-algonevarsta-21').disabled = true;
          document.getElementById('o-algonevarsta-22').disabled = true;
          document.getElementById('o-algonevarsta-23').disabled = true;
          document.getElementById('o-algonevarsta-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algonevarsta2', 0)
        }
        if (document.getElementById('o-algonevarsta-24').checked) {
          document.getElementById('r-algonevarsta-24').style.color = 'red'
          document.getElementById('r-algonevarsta-24').innerHTML = 'Incorrect!'
          document.getElementById('r-algonevarsta-22').style.color = 'blue'
          document.getElementById('r-algonevarsta-22').innerHTML = 'Correct!'
          
          document.getElementById('b-algonevarsta-22').classList.add("correct")
          document.getElementById('b-algonevarsta-21').classList.add("incorrect")
          document.getElementById('b-algonevarsta-23').classList.add("incorrect")
          document.getElementById('b-algonevarsta-24').classList.add("incorrect")
    
          document.getElementById('sa-algonevarsta-2').disabled = true;
          document.getElementById('o-algonevarsta-21').disabled = true;
          document.getElementById('o-algonevarsta-22').disabled = true;
          document.getElementById('o-algonevarsta-23').disabled = true;
          document.getElementById('o-algonevarsta-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algonevarsta2', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algonevarsta-3') != null) {
      algonevarsta3But.onclick = function() {
        if (document.getElementById('o-algonevarsta-31').checked) {
          document.getElementById('r-algonevarsta-31').style.color = 'red'
          document.getElementById('r-algonevarsta-31').innerHTML = 'Incorrect!'
          document.getElementById('r-algonevarsta-33').style.color = 'blue'
          document.getElementById('r-algonevarsta-33').innerHTML = 'Correct!'
          
          document.getElementById('b-algonevarsta-33').classList.add("correct")
          document.getElementById('b-algonevarsta-32').classList.add("incorrect")
          document.getElementById('b-algonevarsta-33').classList.add("incorrect")
          document.getElementById('b-algonevarsta-34').classList.add("incorrect")
    
          document.getElementById('sa-algonevarsta-3').disabled = true;
          document.getElementById('o-algonevarsta-31').disabled = true;
          document.getElementById('o-algonevarsta-32').disabled = true;
          document.getElementById('o-algonevarsta-33').disabled = true;
          document.getElementById('o-algonevarsta-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algonevarsta3', 0)
        }
        if (document.getElementById('o-algonevarsta-32').checked) {
          document.getElementById('r-algonevarsta-32').style.color = 'red'
          document.getElementById('r-algonevarsta-32').innerHTML = 'Incorrect!'
          document.getElementById('r-algonevarsta-33').style.color = 'blue'
          document.getElementById('r-algonevarsta-33').innerHTML = 'Correct!'
          
          document.getElementById('b-algonevarsta-33').classList.add("correct")
          document.getElementById('b-algonevarsta-31').classList.add("incorrect")
          document.getElementById('b-algonevarsta-32').classList.add("incorrect")
          document.getElementById('b-algonevarsta-34').classList.add("incorrect")
    
          document.getElementById('sa-algonevarsta-3').disabled = true;
          document.getElementById('o-algonevarsta-31').disabled = true;
          document.getElementById('o-algonevarsta-32').disabled = true;
          document.getElementById('o-algonevarsta-33').disabled = true;
          document.getElementById('o-algonevarsta-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algonevarsta3', 0)
        }
        if (document.getElementById('o-algonevarsta-33').checked) {
          document.getElementById('r-algonevarsta-33').style.color = 'blue'
          document.getElementById('r-algonevarsta-33').innerHTML = 'Correct!'
          
          document.getElementById('b-algonevarsta-33').classList.add("correct")
          document.getElementById('b-algonevarsta-31').classList.add("incorrect")
          document.getElementById('b-algonevarsta-32').classList.add("incorrect")
          document.getElementById('b-algonevarsta-34').classList.add("incorrect")
    
          document.getElementById('sa-algonevarsta-3').disabled = true;
          document.getElementById('o-algonevarsta-31').disabled = true;
          document.getElementById('o-algonevarsta-32').disabled = true;
          document.getElementById('o-algonevarsta-33').disabled = true;
          document.getElementById('o-algonevarsta-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algonevarsta3', 1)
        }
        if (document.getElementById('o-algonevarsta-34').checked) {
          document.getElementById('r-algonevarsta-34').style.color = 'red'
          document.getElementById('r-algonevarsta-34').innerHTML = 'Incorrect!'
          document.getElementById('r-algonevarsta-33').style.color = 'blue'
          document.getElementById('r-algonevarsta-33').innerHTML = 'Correct!'
          
          document.getElementById('b-algonevarsta-33').classList.add("correct")
          document.getElementById('b-algonevarsta-31').classList.add("incorrect")
          document.getElementById('b-algonevarsta-32').classList.add("incorrect")
          document.getElementById('b-algonevarsta-34').classList.add("incorrect")
    
          document.getElementById('sa-algonevarsta-3').disabled = true;
          document.getElementById('o-algonevarsta-31').disabled = true;
          document.getElementById('o-algonevarsta-32').disabled = true;
          document.getElementById('o-algonevarsta-33').disabled = true;
          document.getElementById('o-algonevarsta-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algonevarsta3', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algonevarsta-4') != null) {
      algonevarsta4But.onclick = function() {
        if (document.getElementById('o-algonevarsta-41').checked) {
          document.getElementById('r-algonevarsta-41').style.color = 'blue'
          document.getElementById('r-algonevarsta-41').innerHTML = 'Correct!'
          
          document.getElementById('b-algonevarsta-41').classList.add("correct")
          document.getElementById('b-algonevarsta-44').classList.add("incorrect")
          document.getElementById('b-algonevarsta-42').classList.add("incorrect")
          document.getElementById('b-algonevarsta-43').classList.add("incorrect")
    
          document.getElementById('sa-algonevarsta-4').disabled = true;
          document.getElementById('o-algonevarsta-41').disabled = true;
          document.getElementById('o-algonevarsta-42').disabled = true;
          document.getElementById('o-algonevarsta-43').disabled = true;
          document.getElementById('o-algonevarsta-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algonevarsta4', 1)
        }
        if (document.getElementById('o-algonevarsta-42').checked) {
          document.getElementById('r-algonevarsta-42').style.color = 'red'
          document.getElementById('r-algonevarsta-42').innerHTML = 'Incorrect!'
          document.getElementById('r-algonevarsta-41').style.color = 'blue'
          document.getElementById('r-algonevarsta-41').innerHTML = 'Correct!'
          
          document.getElementById('b-algonevarsta-41').classList.add("correct")
          document.getElementById('b-algonevarsta-44').classList.add("incorrect")
          document.getElementById('b-algonevarsta-42').classList.add("incorrect")
          document.getElementById('b-algonevarsta-43').classList.add("incorrect")
    
          document.getElementById('sa-algonevarsta-4').disabled = true;
          document.getElementById('o-algonevarsta-41').disabled = true;
          document.getElementById('o-algonevarsta-42').disabled = true;
          document.getElementById('o-algonevarsta-43').disabled = true;
          document.getElementById('o-algonevarsta-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algonevarsta4', 0)
        }
        if (document.getElementById('o-algonevarsta-43').checked) {
          document.getElementById('r-algonevarsta-43').style.color = 'red'
          document.getElementById('r-algonevarsta-43').innerHTML = 'Incorrect!'
          document.getElementById('r-algonevarsta-41').style.color = 'blue'
          document.getElementById('r-algonevarsta-41').innerHTML = 'Correct!'
          
          document.getElementById('b-algonevarsta-41').classList.add("correct")
          document.getElementById('b-algonevarsta-44').classList.add("incorrect")
          document.getElementById('b-algonevarsta-42').classList.add("incorrect")
          document.getElementById('b-algonevarsta-43').classList.add("incorrect")
    
          document.getElementById('sa-algonevarsta-4').disabled = true;
          document.getElementById('o-algonevarsta-41').disabled = true;
          document.getElementById('o-algonevarsta-42').disabled = true;
          document.getElementById('o-algonevarsta-43').disabled = true;
          document.getElementById('o-algonevarsta-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algonevarsta4', 0)
        }
        if (document.getElementById('o-algonevarsta-44').checked) {
          document.getElementById('r-algonevarsta-44').style.color = 'red'
          document.getElementById('r-algonevarsta-44').innerHTML = 'Incorrect!'
          document.getElementById('r-algonevarsta-41').style.color = 'blue'
          document.getElementById('r-algonevarsta-41').innerHTML = 'Correct!'
          
          document.getElementById('b-algonevarsta-41').classList.add("correct")
          document.getElementById('b-algonevarsta-44').classList.add("incorrect")
          document.getElementById('b-algonevarsta-42').classList.add("incorrect")
          document.getElementById('b-algonevarsta-43').classList.add("incorrect")
    
          document.getElementById('sa-algonevarsta-4').disabled = true;
          document.getElementById('o-algonevarsta-41').disabled = true;
          document.getElementById('o-algonevarsta-42').disabled = true;
          document.getElementById('o-algonevarsta-43').disabled = true;
          document.getElementById('o-algonevarsta-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algonevarsta4', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algonevarsta-5') != null) {
      algonevarsta5But.onclick = function() {
        if (document.getElementById('o-algonevarsta-51').checked) {
          document.getElementById('r-algonevarsta-51').style.color = 'red'
          document.getElementById('r-algonevarsta-51').innerHTML = 'Incorrect!'
          document.getElementById('r-algonevarsta-54').style.color = 'blue'
          document.getElementById('r-algonevarsta-54').innerHTML = 'Correct!'
          
          document.getElementById('b-algonevarsta-54').classList.add("correct")
          document.getElementById('b-algonevarsta-51').classList.add("incorrect")
          document.getElementById('b-algonevarsta-53').classList.add("incorrect")
          document.getElementById('b-algonevarsta-54').classList.add("incorrect")
    
          document.getElementById('sa-algonevarsta-5').disabled = true;
          document.getElementById('o-algonevarsta-51').disabled = true;
          document.getElementById('o-algonevarsta-52').disabled = true;
          document.getElementById('o-algonevarsta-53').disabled = true;
          document.getElementById('o-algonevarsta-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algonevarsta5', 0)
        }
        if (document.getElementById('o-algonevarsta-52').checked) {
          document.getElementById('r-algonevarsta-52').style.color = 'red'
          document.getElementById('r-algonevarsta-52').innerHTML = 'Incorrect!'
          document.getElementById('r-algonevarsta-54').style.color = 'blue'
          document.getElementById('r-algonevarsta-54').innerHTML = 'Correct!'
          
          document.getElementById('b-algonevarsta-54').classList.add("correct")
          document.getElementById('b-algonevarsta-51').classList.add("incorrect")
          document.getElementById('b-algonevarsta-52').classList.add("incorrect")
          document.getElementById('b-algonevarsta-53').classList.add("incorrect")
    
          document.getElementById('sa-algonevarsta-5').disabled = true;
          document.getElementById('o-algonevarsta-51').disabled = true;
          document.getElementById('o-algonevarsta-52').disabled = true;
          document.getElementById('o-algonevarsta-53').disabled = true;
          document.getElementById('o-algonevarsta-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algonevarsta5', 0)
        }
        if (document.getElementById('o-algonevarsta-53').checked) {
          document.getElementById('r-algonevarsta-53').style.color = 'red'
          document.getElementById('r-algonevarsta-53').innerHTML = 'Incorrect!'
          document.getElementById('r-algonevarsta-54').style.color = 'blue'
          document.getElementById('r-algonevarsta-54').innerHTML = 'Correct!'
          
          document.getElementById('b-algonevarsta-54').classList.add("correct")
          document.getElementById('b-algonevarsta-51').classList.add("incorrect")
          document.getElementById('b-algonevarsta-52').classList.add("incorrect")
          document.getElementById('b-algonevarsta-53').classList.add("incorrect")
    
          document.getElementById('sa-algonevarsta-5').disabled = true;
          document.getElementById('o-algonevarsta-51').disabled = true;
          document.getElementById('o-algonevarsta-52').disabled = true;
          document.getElementById('o-algonevarsta-53').disabled = true;
          document.getElementById('o-algonevarsta-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algonevarsta5', 0)
        }
        if (document.getElementById('o-algonevarsta-54').checked) {
          document.getElementById('r-algonevarsta-54').style.color = 'blue'
          document.getElementById('r-algonevarsta-54').innerHTML = 'Correct!'
          
          document.getElementById('b-algonevarsta-54').classList.add("correct")
          document.getElementById('b-algonevarsta-51').classList.add("incorrect")
          document.getElementById('b-algonevarsta-52').classList.add("incorrect")
          document.getElementById('b-algonevarsta-53').classList.add("incorrect")
    
          document.getElementById('sa-algonevarsta-5').disabled = true;
          document.getElementById('o-algonevarsta-51').disabled = true;
          document.getElementById('o-algonevarsta-52').disabled = true;
          document.getElementById('o-algonevarsta-53').disabled = true;
          document.getElementById('o-algonevarsta-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algonevarsta5', 1)
        }
      }
    }
        
         
      if (document.getElementById('sa-algonevarsta-6') != null) {
      algonevarsta6But.onclick = function() {
        if (document.getElementById('o-algonevarsta-61').checked) {
          document.getElementById('r-algonevarsta-61').style.color = 'red'
          document.getElementById('r-algonevarsta-61').innerHTML = 'Incorrect!'
          document.getElementById('r-algonevarsta-64').style.color = 'blue'
          document.getElementById('r-algonevarsta-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algonevarsta-64').classList.add("correct")
          document.getElementById('b-algonevarsta-61').classList.add("incorrect")
          document.getElementById('b-algonevarsta-62').classList.add("incorrect")
          document.getElementById('b-algonevarsta-63').classList.add("incorrect")
    
          document.getElementById('sa-algonevarsta-6').disabled = true;
          document.getElementById('o-algonevarsta-61').disabled = true;
          document.getElementById('o-algonevarsta-62').disabled = true;
          document.getElementById('o-algonevarsta-63').disabled = true;
          document.getElementById('o-algonevarsta-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algonevarsta6', 0)
        }
        if (document.getElementById('o-algonevarsta-62').checked) {
          document.getElementById('r-algonevarsta-62').style.color = 'red'
          document.getElementById('r-algonevarsta-62').innerHTML = 'Incorrect!'
          document.getElementById('r-algonevarsta-64').style.color = 'blue'
          document.getElementById('r-algonevarsta-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algonevarsta-64').classList.add("correct")
          document.getElementById('b-algonevarsta-61').classList.add("incorrect")
          document.getElementById('b-algonevarsta-62').classList.add("incorrect")
          document.getElementById('b-algonevarsta-63').classList.add("incorrect")
    
          document.getElementById('sa-algonevarsta-6').disabled = true;
          document.getElementById('o-algonevarsta-61').disabled = true;
          document.getElementById('o-algonevarsta-62').disabled = true;
          document.getElementById('o-algonevarsta-63').disabled = true;
          document.getElementById('o-algonevarsta-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algonevarsta6', 0)
        }
        if (document.getElementById('o-algonevarsta-63').checked) {
          document.getElementById('r-algonevarsta-63').style.color = 'red'
          document.getElementById('r-algonevarsta-63').innerHTML = 'Incorrect!'
          document.getElementById('r-algonevarsta-64').style.color = 'blue'
          document.getElementById('r-algonevarsta-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algonevarsta-64').classList.add("correct")
          document.getElementById('b-algonevarsta-61').classList.add("incorrect")
          document.getElementById('b-algonevarsta-62').classList.add("incorrect")
          document.getElementById('b-algonevarsta-63').classList.add("incorrect")
    
          document.getElementById('sa-algonevarsta-6').disabled = true;
          document.getElementById('o-algonevarsta-61').disabled = true;
          document.getElementById('o-algonevarsta-62').disabled = true;
          document.getElementById('o-algonevarsta-63').disabled = true;
          document.getElementById('o-algonevarsta-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algonevarsta6', 0)
        }
        if (document.getElementById('o-algonevarsta-64').checked) {
          document.getElementById('r-algonevarsta-64').style.color = 'blue'
          document.getElementById('r-algonevarsta-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algonevarsta-64').classList.add("correct")
          document.getElementById('b-algonevarsta-61').classList.add("incorrect")
          document.getElementById('b-algonevarsta-62').classList.add("incorrect")
          document.getElementById('b-algonevarsta-63').classList.add("incorrect")
    
          document.getElementById('sa-algonevarsta-6').disabled = true;
          document.getElementById('o-algonevarsta-61').disabled = true;
          document.getElementById('o-algonevarsta-62').disabled = true;
          document.getElementById('o-algonevarsta-63').disabled = true;
          document.getElementById('o-algonevarsta-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algonevarsta6', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algonevarsta-7') != null) {
      algonevarsta7But.onclick = function() {
        if (document.getElementById('o-algonevarsta-71').checked) {
          document.getElementById('r-algonevarsta-71').style.color = 'red'
          document.getElementById('r-algonevarsta-71').innerHTML = 'Incorrect!'
          document.getElementById('r-algonevarsta-74').style.color = 'blue'
          document.getElementById('r-algonevarsta-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algonevarsta-74').classList.add("correct")
          document.getElementById('b-algonevarsta-71').classList.add("incorrect")
          document.getElementById('b-algonevarsta-72').classList.add("incorrect")
          document.getElementById('b-algonevarsta-73').classList.add("incorrect")
    
          document.getElementById('sa-algonevarsta-7').disabled = true;
          document.getElementById('o-algonevarsta-71').disabled = true;
          document.getElementById('o-algonevarsta-72').disabled = true;
          document.getElementById('o-algonevarsta-73').disabled = true;
          document.getElementById('o-algonevarsta-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algonevarsta7', 0)
        }
        if (document.getElementById('o-algonevarsta-72').checked) {
          document.getElementById('r-algonevarsta-72').style.color = 'red'
          document.getElementById('r-algonevarsta-72').innerHTML = 'Incorrect!'
          document.getElementById('r-algonevarsta-74').style.color = 'blue'
          document.getElementById('r-algonevarsta-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algonevarsta-74').classList.add("correct")
          document.getElementById('b-algonevarsta-71').classList.add("incorrect")
          document.getElementById('b-algonevarsta-72').classList.add("incorrect")
          document.getElementById('b-algonevarsta-73').classList.add("incorrect")
    
          document.getElementById('sa-algonevarsta-7').disabled = true;
          document.getElementById('o-algonevarsta-71').disabled = true;
          document.getElementById('o-algonevarsta-72').disabled = true;
          document.getElementById('o-algonevarsta-73').disabled = true;
          document.getElementById('o-algonevarsta-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algonevarsta7', 0)
        }
        if (document.getElementById('o-algonevarsta-73').checked) {
          document.getElementById('r-algonevarsta-73').style.color = 'red'
          document.getElementById('r-algonevarsta-73').innerHTML = 'Incorrect!'
          document.getElementById('r-algonevarsta-74').style.color = 'blue'
          document.getElementById('r-algonevarsta-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algonevarsta-74').classList.add("correct")
          document.getElementById('b-algonevarsta-71').classList.add("incorrect")
          document.getElementById('b-algonevarsta-72').classList.add("incorrect")
          document.getElementById('b-algonevarsta-73').classList.add("incorrect")
    
          document.getElementById('sa-algonevarsta-7').disabled = true;
          document.getElementById('o-algonevarsta-71').disabled = true;
          document.getElementById('o-algonevarsta-72').disabled = true;
          document.getElementById('o-algonevarsta-73').disabled = true;
          document.getElementById('o-algonevarsta-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algonevarsta7', 0)
        }
        if (document.getElementById('o-algonevarsta-74').checked) {
          document.getElementById('r-algonevarsta-74').style.color = 'blue'
          document.getElementById('r-algonevarsta-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algonevarsta-74').classList.add("correct")
          document.getElementById('b-algonevarsta-71').classList.add("incorrect")
          document.getElementById('b-algonevarsta-72').classList.add("incorrect")
          document.getElementById('b-algonevarsta-73').classList.add("incorrect")
    
          document.getElementById('sa-algonevarsta-7').disabled = true;
          document.getElementById('o-algonevarsta-71').disabled = true;
          document.getElementById('o-algonevarsta-72').disabled = true;
          document.getElementById('o-algonevarsta-73').disabled = true;
          document.getElementById('o-algonevarsta-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algonevarsta7', 1)
        }
      }
    }
    
    
    if (document.getElementById('sa-algonevarsta-8') != null) {
      algonevarsta8But.onclick = function() {
        if (document.getElementById('o-algonevarsta-81').checked) {
          document.getElementById('r-algonevarsta-81').style.color = 'red'
          document.getElementById('r-algonevarsta-81').innerHTML = 'Incorrect!'
          document.getElementById('r-algonevarsta-82').style.color = 'blue'
          document.getElementById('r-algonevarsta-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algonevarsta-82').classList.add("correct")
          document.getElementById('b-algonevarsta-81').classList.add("incorrect")
          document.getElementById('b-algonevarsta-83').classList.add("incorrect")
          document.getElementById('b-algonevarsta-84').classList.add("incorrect")
    
          document.getElementById('sa-algonevarsta-8').disabled = true;
          document.getElementById('o-algonevarsta-81').disabled = true;
          document.getElementById('o-algonevarsta-82').disabled = true;
          document.getElementById('o-algonevarsta-83').disabled = true;
          document.getElementById('o-algonevarsta-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algonevarsta8', 0)
        }
        if (document.getElementById('o-algonevarsta-82').checked) {
          document.getElementById('r-algonevarsta-82').style.color = 'blue'
          document.getElementById('r-algonevarsta-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algonevarsta-82').classList.add("correct")
          document.getElementById('b-algonevarsta-81').classList.add("incorrect")
          document.getElementById('b-algonevarsta-83').classList.add("incorrect")
          document.getElementById('b-algonevarsta-84').classList.add("incorrect")
    
          document.getElementById('sa-algonevarsta-8').disabled = true;
          document.getElementById('o-algonevarsta-81').disabled = true;
          document.getElementById('o-algonevarsta-82').disabled = true;
          document.getElementById('o-algonevarsta-83').disabled = true;
          document.getElementById('o-algonevarsta-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algonevarsta8', 1)
        }
        if (document.getElementById('o-algonevarsta-83').checked) {
          document.getElementById('r-algonevarsta-83').style.color = 'red'
          document.getElementById('r-algonevarsta-83').innerHTML = 'Incorrect!'
          document.getElementById('r-algonevarsta-82').style.color = 'blue'
          document.getElementById('r-algonevarsta-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algonevarsta-82').classList.add("correct")
          document.getElementById('b-algonevarsta-81').classList.add("incorrect")
          document.getElementById('b-algonevarsta-83').classList.add("incorrect")
          document.getElementById('b-algonevarsta-84').classList.add("incorrect")
    
          document.getElementById('sa-algonevarsta-8').disabled = true;
          document.getElementById('o-algonevarsta-81').disabled = true;
          document.getElementById('o-algonevarsta-82').disabled = true;
          document.getElementById('o-algonevarsta-83').disabled = true;
          document.getElementById('o-algonevarsta-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algonevarsta8', 0)
        }
        if (document.getElementById('o-algonevarsta-84').checked) {
          document.getElementById('r-algonevarsta-84').style.color = 'red'
          document.getElementById('r-algonevarsta-84').innerHTML = 'Incorrect!'
          document.getElementById('r-algonevarsta-82').style.color = 'blue'
          document.getElementById('r-algonevarsta-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algonevarsta-82').classList.add("correct")
          document.getElementById('b-algonevarsta-81').classList.add("incorrect")
          document.getElementById('b-algonevarsta-83').classList.add("incorrect")
          document.getElementById('b-algonevarsta-84').classList.add("incorrect")
    
          document.getElementById('sa-algonevarsta-8').disabled = true;
          document.getElementById('o-algonevarsta-81').disabled = true;
          document.getElementById('o-algonevarsta-82').disabled = true;
          document.getElementById('o-algonevarsta-83').disabled = true;
          document.getElementById('o-algonevarsta-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algonevarsta8', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-algonevarsta-9') != null) {
      algonevarsta9But.onclick = function() {
        if (document.getElementById('o-algonevarsta-91').checked) {
          document.getElementById('r-algonevarsta-91').style.color = 'red'
          document.getElementById('r-algonevarsta-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algonevarsta-94').style.color = 'blue'
          document.getElementById('r-algonevarsta-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algonevarsta-94').classList.add("correct")
          document.getElementById('b-algonevarsta-91').classList.add("incorrect")
          document.getElementById('b-algonevarsta-92').classList.add("incorrect")
          document.getElementById('b-algonevarsta-93').classList.add("incorrect")
    
          document.getElementById('sa-algonevarsta-9').disabled = true;
          document.getElementById('o-algonevarsta-91').disabled = true;
          document.getElementById('o-algonevarsta-92').disabled = true;
          document.getElementById('o-algonevarsta-93').disabled = true;
          document.getElementById('o-algonevarsta-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algonevarsta9', 0)
        }
        if (document.getElementById('o-algonevarsta-92').checked) {
          document.getElementById('r-algonevarsta-91').style.color = 'red'
          document.getElementById('r-algonevarsta-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algonevarsta-94').style.color = 'blue'
          document.getElementById('r-algonevarsta-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algonevarsta-94').classList.add("correct")
          document.getElementById('b-algonevarsta-91').classList.add("incorrect")
          document.getElementById('b-algonevarsta-92').classList.add("incorrect")
          document.getElementById('b-algonevarsta-93').classList.add("incorrect")
    
          document.getElementById('sa-algonevarsta-9').disabled = true;
          document.getElementById('o-algonevarsta-91').disabled = true;
          document.getElementById('o-algonevarsta-92').disabled = true;
          document.getElementById('o-algonevarsta-93').disabled = true;
          document.getElementById('o-algonevarsta-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algonevarsta9', 0)
        }
        if (document.getElementById('o-algonevarsta-93').checked) {
          document.getElementById('r-algonevarsta-91').style.color = 'red'
          document.getElementById('r-algonevarsta-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algonevarsta-94').style.color = 'blue'
          document.getElementById('r-algonevarsta-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algonevarsta-94').classList.add("correct")
          document.getElementById('b-algonevarsta-91').classList.add("incorrect")
          document.getElementById('b-algonevarsta-92').classList.add("incorrect")
          document.getElementById('b-algonevarsta-93').classList.add("incorrect")
    
          document.getElementById('sa-algonevarsta-9').disabled = true;
          document.getElementById('o-algonevarsta-91').disabled = true;
          document.getElementById('o-algonevarsta-92').disabled = true;
          document.getElementById('o-algonevarsta-93').disabled = true;
          document.getElementById('o-algonevarsta-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algonevarsta9', 0)
        }
        if (document.getElementById('o-algonevarsta-94').checked) {
          document.getElementById('r-algonevarsta-94').style.color = 'blue'
          document.getElementById('r-algonevarsta-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algonevarsta-94').classList.add("correct")
          document.getElementById('b-algonevarsta-91').classList.add("incorrect")
          document.getElementById('b-algonevarsta-92').classList.add("incorrect")
          document.getElementById('b-algonevarsta-93').classList.add("incorrect")
    
          document.getElementById('sa-algonevarsta-9').disabled = true;
          document.getElementById('o-algonevarsta-91').disabled = true;
          document.getElementById('o-algonevarsta-92').disabled = true;
          document.getElementById('o-algonevarsta-93').disabled = true;
          document.getElementById('o-algonevarsta-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algonevarsta9', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algonevarsta-10') != null) {
      algonevarsta10But.onclick = function() {
        if (document.getElementById('o-algonevarsta-101').checked) {
          document.getElementById('r-algonevarsta-101').style.color = 'red'
          document.getElementById('r-algonevarsta-101').innerHTML = 'Incorrect!'
          document.getElementById('r-algonevarsta-102').style.color = 'blue'
          document.getElementById('r-algonevarsta-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algonevarsta-102').classList.add("correct")
          document.getElementById('b-algonevarsta-101').classList.add("incorrect")
          document.getElementById('b-algonevarsta-103').classList.add("incorrect")
          document.getElementById('b-algonevarsta-104').classList.add("incorrect")
    
          document.getElementById('sa-algonevarsta-10').disabled = true;
          document.getElementById('o-algonevarsta-101').disabled = true;
          document.getElementById('o-algonevarsta-102').disabled = true;
          document.getElementById('o-algonevarsta-103').disabled = true;
          document.getElementById('o-algonevarsta-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algonevarsta10', 0)
        }
        if (document.getElementById('o-algonevarsta-102').checked) {
          document.getElementById('r-algonevarsta-102').style.color = 'blue'
          document.getElementById('r-algonevarsta-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algonevarsta-102').classList.add("correct")
          document.getElementById('b-algonevarsta-101').classList.add("incorrect")
          document.getElementById('b-algonevarsta-103').classList.add("incorrect")
          document.getElementById('b-algonevarsta-104').classList.add("incorrect")
    
          document.getElementById('sa-algonevarsta-10').disabled = true;
          document.getElementById('o-algonevarsta-101').disabled = true;
          document.getElementById('o-algonevarsta-102').disabled = true;
          document.getElementById('o-algonevarsta-103').disabled = true;
          document.getElementById('o-algonevarsta-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algonevarsta10', 1)
        }
        if (document.getElementById('o-algonevarsta-103').checked) {
          document.getElementById('r-algonevarsta-103').style.color = 'red'
          document.getElementById('r-algonevarsta-103').innerHTML = 'Incorrect!'
          document.getElementById('r-algonevarsta-102').style.color = 'blue'
          document.getElementById('r-algonevarsta-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algonevarsta-102').classList.add("correct")
          document.getElementById('b-algonevarsta-101').classList.add("incorrect")
          document.getElementById('b-algonevarsta-103').classList.add("incorrect")
          document.getElementById('b-algonevarsta-104').classList.add("incorrect")
    
          document.getElementById('sa-algonevarsta-10').disabled = true;
          document.getElementById('o-algonevarsta-101').disabled = true;
          document.getElementById('o-algonevarsta-102').disabled = true;
          document.getElementById('o-algonevarsta-103').disabled = true;
          document.getElementById('o-algonevarsta-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algonevarsta10', 0)
        }
        if (document.getElementById('o-algonevarsta-104').checked) {
          document.getElementById('r-algonevarsta-104').style.color = 'red'
          document.getElementById('r-algonevarsta-104').innerHTML = 'Incorrect!'
          document.getElementById('r-algonevarsta-102').style.color = 'blue'
          document.getElementById('r-algonevarsta-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algonevarsta-102').classList.add("correct")
          document.getElementById('b-algonevarsta-101').classList.add("incorrect")
          document.getElementById('b-algonevarsta-103').classList.add("incorrect")
          document.getElementById('b-algonevarsta-104').classList.add("incorrect")
    
          document.getElementById('sa-algonevarsta-10').disabled = true;
          document.getElementById('o-algonevarsta-101').disabled = true;
          document.getElementById('o-algonevarsta-102').disabled = true;
          document.getElementById('o-algonevarsta-103').disabled = true;
          document.getElementById('o-algonevarsta-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algonevarsta10', 0)
        }
      }
    }
    