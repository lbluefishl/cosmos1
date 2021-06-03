
  let calcderivatives1But = document.getElementById('sa-calcderivatives-1');
  let calcderivatives2But = document.getElementById('sa-calcderivatives-2');
  let calcderivatives3But = document.getElementById('sa-calcderivatives-3');
  let calcderivatives4But = document.getElementById('sa-calcderivatives-4');
  let calcderivatives5But = document.getElementById('sa-calcderivatives-5');
  let calcderivatives6But = document.getElementById('sa-calcderivatives-6');
  let calcderivatives7But = document.getElementById('sa-calcderivatives-7');
  let calcderivatives8But = document.getElementById('sa-calcderivatives-8');
  let calcderivatives9But = document.getElementById('sa-calcderivatives-9');
  let calcderivatives10But = document.getElementById('sa-calcderivatives-10');


  showExplanation1 = function() {
    document.getElementById('e-calcderivatives-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-calcderivatives-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-calcderivatives-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-calcderivatives-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-calcderivatives-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-calcderivatives-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-calcderivatives-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-calcderivatives-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-calcderivatives-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-calcderivatives-10').style.display = 'block';
     } 



     if (document.getElementById('sa-calcderivatives-1') != null) {
      calcderivatives1But.onclick = function () {
        if (document.getElementById('o-calcderivatives-11').checked) {
          document.getElementById('r-calcderivatives-11').style.color = 'red'
          document.getElementById('r-calcderivatives-11').innerHTML = 'Incorrect!'
          document.getElementById('r-calcderivatives-13').style.color = 'blue'
          document.getElementById('r-calcderivatives-13').innerHTML = 'Correct!'
    
          document.getElementById('b-calcderivatives-13').classList.add("correct")
          document.getElementById('b-calcderivatives-12').classList.add("incorrect")
          document.getElementById('b-calcderivatives-11').classList.add("incorrect")
          document.getElementById('b-calcderivatives-14').classList.add("incorrect")
    
          document.getElementById('sa-calcderivatives-1').disabled = true;
          document.getElementById('o-calcderivatives-11').disabled = true;
          document.getElementById('o-calcderivatives-12').disabled = true;
          document.getElementById('o-calcderivatives-13').disabled = true;
          document.getElementById('o-calcderivatives-14').disabled = true;
          showExplanation1()
          localStorage.setItem('calcderivatives1', 0)
        }
    
        if (document.getElementById('o-calcderivatives-12').checked) {
         
          document.getElementById('r-calcderivatives-12').style.color = 'red'
          document.getElementById('r-calcderivatives-12').innerHTML = 'Incorrect!'
          document.getElementById('r-calcderivatives-13').style.color = 'blue'
          document.getElementById('r-calcderivatives-13').innerHTML = 'Correct!'
    
          document.getElementById('b-calcderivatives-13').classList.add("correct")
          document.getElementById('b-calcderivatives-12').classList.add("incorrect")
          document.getElementById('b-calcderivatives-11').classList.add("incorrect")
          document.getElementById('b-calcderivatives-14').classList.add("incorrect")
    
          document.getElementById('sa-calcderivatives-1').disabled = true;
          document.getElementById('o-calcderivatives-11').disabled = true;
          document.getElementById('o-calcderivatives-12').disabled = true;
          document.getElementById('o-calcderivatives-13').disabled = true;
          document.getElementById('o-calcderivatives-14').disabled = true;
          showExplanation1()
          localStorage.setItem('calcderivatives1', 0)
        }
        if (document.getElementById('o-calcderivatives-13').checked) {
          document.getElementById('r-calcderivatives-13').style.color = 'blue'
          document.getElementById('r-calcderivatives-13').innerHTML = 'Correct!'
          
          document.getElementById('b-calcderivatives-13').classList.add("correct")
          document.getElementById('b-calcderivatives-12').classList.add("incorrect")
          document.getElementById('b-calcderivatives-11').classList.add("incorrect")
          document.getElementById('b-calcderivatives-14').classList.add("incorrect")
    
          document.getElementById('sa-calcderivatives-1').disabled = true;
          document.getElementById('o-calcderivatives-11').disabled = true;
          document.getElementById('o-calcderivatives-12').disabled = true;
          document.getElementById('o-calcderivatives-13').disabled = true;
          document.getElementById('o-calcderivatives-14').disabled = true;
          showExplanation1()
          localStorage.setItem('calcderivatives1', 1)
        }
        if (document.getElementById('o-calcderivatives-14').checked) {
          document.getElementById('r-calcderivatives-14').style.color = 'red'
          document.getElementById('r-calcderivatives-14').innerHTML = 'Incorrect!'
          document.getElementById('r-calcderivatives-13').style.color = 'blue'
          document.getElementById('r-calcderivatives-13').innerHTML = 'Correct!'
          
          document.getElementById('b-calcderivatives-13').classList.add("correct")
          document.getElementById('b-calcderivatives-12').classList.add("incorrect")
          document.getElementById('b-calcderivatives-11').classList.add("incorrect")
          document.getElementById('b-calcderivatives-14').classList.add("incorrect")
    
          document.getElementById('sa-calcderivatives-1').disabled = true;
          document.getElementById('o-calcderivatives-11').disabled = true;
          document.getElementById('o-calcderivatives-12').disabled = true;
          document.getElementById('o-calcderivatives-13').disabled = true;
          document.getElementById('o-calcderivatives-14').disabled = true;
          showExplanation1()
          localStorage.setItem('calcderivatives1', 0)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-calcderivatives-2') != null) {
      calcderivatives2But.onclick = function() {
        if (document.getElementById('o-calcderivatives-21').checked) {
          document.getElementById('r-calcderivatives-21').style.color = 'red'
          document.getElementById('r-calcderivatives-21').innerHTML = 'Incorrect!'
          document.getElementById('r-calcderivatives-24').style.color = 'blue'
          document.getElementById('r-calcderivatives-24').innerHTML = 'Correct!'
          
          document.getElementById('b-calcderivatives-24').classList.add("correct")
          document.getElementById('b-calcderivatives-21').classList.add("incorrect")
          document.getElementById('b-calcderivatives-22').classList.add("incorrect")
          document.getElementById('b-calcderivatives-23').classList.add("incorrect")
    
          document.getElementById('sa-calcderivatives-2').disabled = true;
          document.getElementById('o-calcderivatives-21').disabled = true;
          document.getElementById('o-calcderivatives-22').disabled = true;
          document.getElementById('o-calcderivatives-23').disabled = true;
          document.getElementById('o-calcderivatives-24').disabled = true;
          showExplanation2()
          localStorage.setItem('calcderivatives2', 0)
        }
        if (document.getElementById('o-calcderivatives-22').checked) {
          document.getElementById('r-calcderivatives-22').style.color = 'red'
          document.getElementById('r-calcderivatives-22').innerHTML = 'Incorrect!'
          document.getElementById('r-calcderivatives-24').style.color = 'blue'
          document.getElementById('r-calcderivatives-24').innerHTML = 'Correct!'
          
          document.getElementById('b-calcderivatives-24').classList.add("correct")
          document.getElementById('b-calcderivatives-21').classList.add("incorrect")
          document.getElementById('b-calcderivatives-22').classList.add("incorrect")
          document.getElementById('b-calcderivatives-23').classList.add("incorrect")
    
          document.getElementById('sa-calcderivatives-2').disabled = true;
          document.getElementById('o-calcderivatives-21').disabled = true;
          document.getElementById('o-calcderivatives-22').disabled = true;
          document.getElementById('o-calcderivatives-23').disabled = true;
          document.getElementById('o-calcderivatives-24').disabled = true;
          showExplanation2()
          localStorage.setItem('calcderivatives2', 0)
        }
        if (document.getElementById('o-calcderivatives-23').checked) {
          document.getElementById('r-calcderivatives-23').style.color = 'red'
          document.getElementById('r-calcderivatives-23').innerHTML = 'Incorrect!'
          document.getElementById('r-calcderivatives-24').style.color = 'blue'
          document.getElementById('r-calcderivatives-24').innerHTML = 'Correct!'
          
          document.getElementById('b-calcderivatives-24').classList.add("correct")
          document.getElementById('b-calcderivatives-21').classList.add("incorrect")
          document.getElementById('b-calcderivatives-22').classList.add("incorrect")
          document.getElementById('b-calcderivatives-23').classList.add("incorrect")
    
          document.getElementById('sa-calcderivatives-2').disabled = true;
          document.getElementById('o-calcderivatives-21').disabled = true;
          document.getElementById('o-calcderivatives-22').disabled = true;
          document.getElementById('o-calcderivatives-23').disabled = true;
          document.getElementById('o-calcderivatives-24').disabled = true;
          showExplanation2()
          localStorage.setItem('calcderivatives2', 0)
        }
        if (document.getElementById('o-calcderivatives-24').checked) {
          document.getElementById('r-calcderivatives-24').style.color = 'blue'
          document.getElementById('r-calcderivatives-24').innerHTML = 'Correct!'
          
          document.getElementById('b-calcderivatives-24').classList.add("correct")
          document.getElementById('b-calcderivatives-21').classList.add("incorrect")
          document.getElementById('b-calcderivatives-22').classList.add("incorrect")
          document.getElementById('b-calcderivatives-23').classList.add("incorrect")
    
          document.getElementById('sa-calcderivatives-2').disabled = true;
          document.getElementById('o-calcderivatives-21').disabled = true;
          document.getElementById('o-calcderivatives-22').disabled = true;
          document.getElementById('o-calcderivatives-23').disabled = true;
          document.getElementById('o-calcderivatives-24').disabled = true;
          showExplanation2()
          localStorage.setItem('calcderivatives2', 1)
        }
      }
    }
    
    if (document.getElementById('sa-calcderivatives-3') != null) {
      calcderivatives3But.onclick = function() {
        if (document.getElementById('o-calcderivatives-31').checked) {
          document.getElementById('r-calcderivatives-31').style.color = 'red'
          document.getElementById('r-calcderivatives-31').innerHTML = 'Incorrect!'
          document.getElementById('r-calcderivatives-34').style.color = 'blue'
          document.getElementById('r-calcderivatives-34').innerHTML = 'Correct!'
          
          document.getElementById('b-calcderivatives-34').classList.add("correct")
          document.getElementById('b-calcderivatives-31').classList.add("incorrect")
          document.getElementById('b-calcderivatives-33').classList.add("incorrect")
          document.getElementById('b-calcderivatives-32').classList.add("incorrect")
    
          document.getElementById('sa-calcderivatives-3').disabled = true;
          document.getElementById('o-calcderivatives-31').disabled = true;
          document.getElementById('o-calcderivatives-32').disabled = true;
          document.getElementById('o-calcderivatives-33').disabled = true;
          document.getElementById('o-calcderivatives-34').disabled = true;
          showExplanation3()
          localStorage.setItem('calcderivatives3', 0)
        }
        if (document.getElementById('o-calcderivatives-32').checked) {
          document.getElementById('r-calcderivatives-32').style.color = 'red'
          document.getElementById('r-calcderivatives-32').innerHTML = 'Incorrect!'
          document.getElementById('r-calcderivatives-34').style.color = 'blue'
          document.getElementById('r-calcderivatives-34').innerHTML = 'Correct!'
          
          document.getElementById('b-calcderivatives-34').classList.add("correct")
          document.getElementById('b-calcderivatives-31').classList.add("incorrect")
          document.getElementById('b-calcderivatives-33').classList.add("incorrect")
          document.getElementById('b-calcderivatives-32').classList.add("incorrect")
    
          document.getElementById('sa-calcderivatives-3').disabled = true;
          document.getElementById('o-calcderivatives-31').disabled = true;
          document.getElementById('o-calcderivatives-32').disabled = true;
          document.getElementById('o-calcderivatives-33').disabled = true;
          document.getElementById('o-calcderivatives-34').disabled = true;
          showExplanation3()
          localStorage.setItem('calcderivatives3', 0)
        }
        if (document.getElementById('o-calcderivatives-33').checked) {
          document.getElementById('r-calcderivatives-33').style.color = 'red'
          document.getElementById('r-calcderivatives-33').innerHTML = 'Incorrect!'
          document.getElementById('r-calcderivatives-34').style.color = 'blue'
          document.getElementById('r-calcderivatives-34').innerHTML = 'Correct!'
          
          document.getElementById('b-calcderivatives-34').classList.add("correct")
          document.getElementById('b-calcderivatives-31').classList.add("incorrect")
          document.getElementById('b-calcderivatives-33').classList.add("incorrect")
          document.getElementById('b-calcderivatives-32').classList.add("incorrect")
    
          document.getElementById('sa-calcderivatives-3').disabled = true;
          document.getElementById('o-calcderivatives-31').disabled = true;
          document.getElementById('o-calcderivatives-32').disabled = true;
          document.getElementById('o-calcderivatives-33').disabled = true;
          document.getElementById('o-calcderivatives-34').disabled = true;
          showExplanation3()
          localStorage.setItem('calcderivatives3', 0)
        }
        if (document.getElementById('o-calcderivatives-34').checked) {
          document.getElementById('r-calcderivatives-34').style.color = 'blue'
          document.getElementById('r-calcderivatives-34').innerHTML = 'Correct!'
          
          document.getElementById('b-calcderivatives-34').classList.add("correct")
          document.getElementById('b-calcderivatives-31').classList.add("incorrect")
          document.getElementById('b-calcderivatives-33').classList.add("incorrect")
          document.getElementById('b-calcderivatives-32').classList.add("incorrect")
    
          document.getElementById('sa-calcderivatives-3').disabled = true;
          document.getElementById('o-calcderivatives-31').disabled = true;
          document.getElementById('o-calcderivatives-32').disabled = true;
          document.getElementById('o-calcderivatives-33').disabled = true;
          document.getElementById('o-calcderivatives-34').disabled = true;
          showExplanation3()
          localStorage.setItem('calcderivatives3', 1)
        }
      }
    }
    
    if (document.getElementById('sa-calcderivatives-4') != null) {
      calcderivatives4But.onclick = function() {
        if (document.getElementById('o-calcderivatives-41').checked) {
          document.getElementById('r-calcderivatives-41').style.color = 'blue'
          document.getElementById('r-calcderivatives-41').innerHTML = 'Correct!'
          
          document.getElementById('b-calcderivatives-41').classList.add("correct")
          document.getElementById('b-calcderivatives-44').classList.add("incorrect")
          document.getElementById('b-calcderivatives-42').classList.add("incorrect")
          document.getElementById('b-calcderivatives-43').classList.add("incorrect")
    
          document.getElementById('sa-calcderivatives-4').disabled = true;
          document.getElementById('o-calcderivatives-41').disabled = true;
          document.getElementById('o-calcderivatives-42').disabled = true;
          document.getElementById('o-calcderivatives-43').disabled = true;
          document.getElementById('o-calcderivatives-44').disabled = true;
          showExplanation4()
          localStorage.setItem('calcderivatives4', 1)
        }
        if (document.getElementById('o-calcderivatives-42').checked) {
          document.getElementById('r-calcderivatives-42').style.color = 'red'
          document.getElementById('r-calcderivatives-42').innerHTML = 'Incorrect!'
          document.getElementById('r-calcderivatives-41').style.color = 'blue'
          document.getElementById('r-calcderivatives-41').innerHTML = 'Correct!'
          
          document.getElementById('b-calcderivatives-41').classList.add("correct")
          document.getElementById('b-calcderivatives-44').classList.add("incorrect")
          document.getElementById('b-calcderivatives-42').classList.add("incorrect")
          document.getElementById('b-calcderivatives-43').classList.add("incorrect")
    
          document.getElementById('sa-calcderivatives-4').disabled = true;
          document.getElementById('o-calcderivatives-41').disabled = true;
          document.getElementById('o-calcderivatives-42').disabled = true;
          document.getElementById('o-calcderivatives-43').disabled = true;
          document.getElementById('o-calcderivatives-44').disabled = true;
          showExplanation4()
          localStorage.setItem('calcderivatives4', 0)
        }
        if (document.getElementById('o-calcderivatives-43').checked) {
          document.getElementById('r-calcderivatives-43').style.color = 'red'
          document.getElementById('r-calcderivatives-43').innerHTML = 'Incorrect!'
          document.getElementById('r-calcderivatives-41').style.color = 'blue'
          document.getElementById('r-calcderivatives-41').innerHTML = 'Correct!'
          
          document.getElementById('b-calcderivatives-41').classList.add("correct")
          document.getElementById('b-calcderivatives-44').classList.add("incorrect")
          document.getElementById('b-calcderivatives-42').classList.add("incorrect")
          document.getElementById('b-calcderivatives-43').classList.add("incorrect")
    
          document.getElementById('sa-calcderivatives-4').disabled = true;
          document.getElementById('o-calcderivatives-41').disabled = true;
          document.getElementById('o-calcderivatives-42').disabled = true;
          document.getElementById('o-calcderivatives-43').disabled = true;
          document.getElementById('o-calcderivatives-44').disabled = true;
          showExplanation4()
          localStorage.setItem('calcderivatives4', 0)
        }
        if (document.getElementById('o-calcderivatives-44').checked) {
          document.getElementById('r-calcderivatives-44').style.color = 'red'
          document.getElementById('r-calcderivatives-44').innerHTML = 'Incorrect!'
          document.getElementById('r-calcderivatives-41').style.color = 'blue'
          document.getElementById('r-calcderivatives-41').innerHTML = 'Correct!'
          
          document.getElementById('b-calcderivatives-41').classList.add("correct")
          document.getElementById('b-calcderivatives-44').classList.add("incorrect")
          document.getElementById('b-calcderivatives-42').classList.add("incorrect")
          document.getElementById('b-calcderivatives-43').classList.add("incorrect")
    
          document.getElementById('sa-calcderivatives-4').disabled = true;
          document.getElementById('o-calcderivatives-41').disabled = true;
          document.getElementById('o-calcderivatives-42').disabled = true;
          document.getElementById('o-calcderivatives-43').disabled = true;
          document.getElementById('o-calcderivatives-44').disabled = true;
          showExplanation4()
          localStorage.setItem('calcderivatives4', 0)
        }
      }
    }
    
    if (document.getElementById('sa-calcderivatives-5') != null) {
      calcderivatives5But.onclick = function() {
        if (document.getElementById('o-calcderivatives-51').checked) {
          document.getElementById('r-calcderivatives-51').style.color = 'red'
          document.getElementById('r-calcderivatives-51').innerHTML = 'Incorrect!'
          document.getElementById('r-calcderivatives-52').style.color = 'blue'
          document.getElementById('r-calcderivatives-52').innerHTML = 'Correct!'
          
          document.getElementById('b-calcderivatives-52').classList.add("correct")
          document.getElementById('b-calcderivatives-51').classList.add("incorrect")
          document.getElementById('b-calcderivatives-53').classList.add("incorrect")
          document.getElementById('b-calcderivatives-54').classList.add("incorrect")
    
          document.getElementById('sa-calcderivatives-5').disabled = true;
          document.getElementById('o-calcderivatives-51').disabled = true;
          document.getElementById('o-calcderivatives-52').disabled = true;
          document.getElementById('o-calcderivatives-53').disabled = true;
          document.getElementById('o-calcderivatives-54').disabled = true;
          showExplanation5()
          localStorage.setItem('calcderivatives5', 0)
        }
        if (document.getElementById('o-calcderivatives-52').checked) {
          document.getElementById('r-calcderivatives-52').style.color = 'blue'
          document.getElementById('r-calcderivatives-52').innerHTML = 'Correct!'
          
          document.getElementById('b-calcderivatives-52').classList.add("correct")
          document.getElementById('b-calcderivatives-51').classList.add("incorrect")
          document.getElementById('b-calcderivatives-53').classList.add("incorrect")
          document.getElementById('b-calcderivatives-54').classList.add("incorrect")
    
          document.getElementById('sa-calcderivatives-5').disabled = true;
          document.getElementById('o-calcderivatives-51').disabled = true;
          document.getElementById('o-calcderivatives-52').disabled = true;
          document.getElementById('o-calcderivatives-53').disabled = true;
          document.getElementById('o-calcderivatives-54').disabled = true;
          showExplanation5()
          localStorage.setItem('calcderivatives5', 1)
        }
        if (document.getElementById('o-calcderivatives-53').checked) {
          document.getElementById('r-calcderivatives-53').style.color = 'red'
          document.getElementById('r-calcderivatives-53').innerHTML = 'Incorrect!'
          document.getElementById('r-calcderivatives-52').style.color = 'blue'
          document.getElementById('r-calcderivatives-52').innerHTML = 'Correct!'
          
          document.getElementById('b-calcderivatives-52').classList.add("correct")
          document.getElementById('b-calcderivatives-51').classList.add("incorrect")
          document.getElementById('b-calcderivatives-53').classList.add("incorrect")
          document.getElementById('b-calcderivatives-54').classList.add("incorrect")
    
          document.getElementById('sa-calcderivatives-5').disabled = true;
          document.getElementById('o-calcderivatives-51').disabled = true;
          document.getElementById('o-calcderivatives-52').disabled = true;
          document.getElementById('o-calcderivatives-53').disabled = true;
          document.getElementById('o-calcderivatives-54').disabled = true;
          showExplanation5()
          localStorage.setItem('calcderivatives5', 0)
        }
        if (document.getElementById('o-calcderivatives-54').checked) {
          document.getElementById('r-calcderivatives-54').style.color = 'red'
          document.getElementById('r-calcderivatives-54').innerHTML = 'Incorrect!'
          document.getElementById('r-calcderivatives-52').style.color = 'blue'
          document.getElementById('r-calcderivatives-52').innerHTML = 'Correct!'
          
          document.getElementById('b-calcderivatives-52').classList.add("correct")
          document.getElementById('b-calcderivatives-51').classList.add("incorrect")
          document.getElementById('b-calcderivatives-53').classList.add("incorrect")
          document.getElementById('b-calcderivatives-54').classList.add("incorrect")
    
          document.getElementById('sa-calcderivatives-5').disabled = true;
          document.getElementById('o-calcderivatives-51').disabled = true;
          document.getElementById('o-calcderivatives-52').disabled = true;
          document.getElementById('o-calcderivatives-53').disabled = true;
          document.getElementById('o-calcderivatives-54').disabled = true;
          showExplanation5()
          localStorage.setItem('calcderivatives5', 0)
        }
      }
    }
        
         
      if (document.getElementById('sa-calcderivatives-6') != null) {
      calcderivatives6But.onclick = function() {
        if (document.getElementById('o-calcderivatives-61').checked) {
          document.getElementById('r-calcderivatives-61').style.color = 'red'
          document.getElementById('r-calcderivatives-61').innerHTML = 'Incorrect!'
          document.getElementById('r-calcderivatives-64').style.color = 'blue'
          document.getElementById('r-calcderivatives-64').innerHTML = 'Correct!'
          
          document.getElementById('b-calcderivatives-64').classList.add("correct")
          document.getElementById('b-calcderivatives-61').classList.add("incorrect")
          document.getElementById('b-calcderivatives-62').classList.add("incorrect")
          document.getElementById('b-calcderivatives-63').classList.add("incorrect")
    
          document.getElementById('sa-calcderivatives-6').disabled = true;
          document.getElementById('o-calcderivatives-61').disabled = true;
          document.getElementById('o-calcderivatives-62').disabled = true;
          document.getElementById('o-calcderivatives-63').disabled = true;
          document.getElementById('o-calcderivatives-64').disabled = true;
          showExplanation6()
          localStorage.setItem('calcderivatives6', 0)
        }
        if (document.getElementById('o-calcderivatives-62').checked) {
          document.getElementById('r-calcderivatives-62').style.color = 'red'
          document.getElementById('r-calcderivatives-62').innerHTML = 'Incorrect!'
          document.getElementById('r-calcderivatives-64').style.color = 'blue'
          document.getElementById('r-calcderivatives-64').innerHTML = 'Correct!'
          
          document.getElementById('b-calcderivatives-64').classList.add("correct")
          document.getElementById('b-calcderivatives-61').classList.add("incorrect")
          document.getElementById('b-calcderivatives-62').classList.add("incorrect")
          document.getElementById('b-calcderivatives-63').classList.add("incorrect")
    
          document.getElementById('sa-calcderivatives-6').disabled = true;
          document.getElementById('o-calcderivatives-61').disabled = true;
          document.getElementById('o-calcderivatives-62').disabled = true;
          document.getElementById('o-calcderivatives-63').disabled = true;
          document.getElementById('o-calcderivatives-64').disabled = true;
          showExplanation6()
          localStorage.setItem('calcderivatives6', 0)
        }
        if (document.getElementById('o-calcderivatives-63').checked) {
          document.getElementById('r-calcderivatives-63').style.color = 'red'
          document.getElementById('r-calcderivatives-63').innerHTML = 'Incorrect!'
          document.getElementById('r-calcderivatives-64').style.color = 'blue'
          document.getElementById('r-calcderivatives-64').innerHTML = 'Correct!'
          
          document.getElementById('b-calcderivatives-64').classList.add("correct")
          document.getElementById('b-calcderivatives-61').classList.add("incorrect")
          document.getElementById('b-calcderivatives-62').classList.add("incorrect")
          document.getElementById('b-calcderivatives-63').classList.add("incorrect")
    
          document.getElementById('sa-calcderivatives-6').disabled = true;
          document.getElementById('o-calcderivatives-61').disabled = true;
          document.getElementById('o-calcderivatives-62').disabled = true;
          document.getElementById('o-calcderivatives-63').disabled = true;
          document.getElementById('o-calcderivatives-64').disabled = true;
          showExplanation6()
          localStorage.setItem('calcderivatives6', 0)
        }
        if (document.getElementById('o-calcderivatives-64').checked) {
          document.getElementById('r-calcderivatives-64').style.color = 'blue'
          document.getElementById('r-calcderivatives-64').innerHTML = 'Correct!'
          
          document.getElementById('b-calcderivatives-64').classList.add("correct")
          document.getElementById('b-calcderivatives-61').classList.add("incorrect")
          document.getElementById('b-calcderivatives-62').classList.add("incorrect")
          document.getElementById('b-calcderivatives-63').classList.add("incorrect")
    
          document.getElementById('sa-calcderivatives-6').disabled = true;
          document.getElementById('o-calcderivatives-61').disabled = true;
          document.getElementById('o-calcderivatives-62').disabled = true;
          document.getElementById('o-calcderivatives-63').disabled = true;
          document.getElementById('o-calcderivatives-64').disabled = true;
          showExplanation6()
          localStorage.setItem('calcderivatives6', 1)
        }
      }
    }
    
    if (document.getElementById('sa-calcderivatives-7') != null) {
      calcderivatives7But.onclick = function() {
        if (document.getElementById('o-calcderivatives-71').checked) {
          document.getElementById('r-calcderivatives-71').style.color = 'blue'
          document.getElementById('r-calcderivatives-71').innerHTML = 'Correct!'
          
          document.getElementById('b-calcderivatives-71').classList.add("correct")
          document.getElementById('b-calcderivatives-74').classList.add("incorrect")
          document.getElementById('b-calcderivatives-72').classList.add("incorrect")
          document.getElementById('b-calcderivatives-73').classList.add("incorrect")
    
          document.getElementById('sa-calcderivatives-7').disabled = true;
          document.getElementById('o-calcderivatives-71').disabled = true;
          document.getElementById('o-calcderivatives-72').disabled = true;
          document.getElementById('o-calcderivatives-73').disabled = true;
          document.getElementById('o-calcderivatives-74').disabled = true;
          showExplanation7()
          localStorage.setItem('calcderivatives7', 1)
        }
        if (document.getElementById('o-calcderivatives-72').checked) {
          document.getElementById('r-calcderivatives-72').style.color = 'red'
          document.getElementById('r-calcderivatives-72').innerHTML = 'Incorrect!'
          document.getElementById('r-calcderivatives-71').style.color = 'blue'
          document.getElementById('r-calcderivatives-71').innerHTML = 'Correct!'
          
          document.getElementById('b-calcderivatives-71').classList.add("correct")
          document.getElementById('b-calcderivatives-74').classList.add("incorrect")
          document.getElementById('b-calcderivatives-72').classList.add("incorrect")
          document.getElementById('b-calcderivatives-73').classList.add("incorrect")
    
          document.getElementById('sa-calcderivatives-7').disabled = true;
          document.getElementById('o-calcderivatives-71').disabled = true;
          document.getElementById('o-calcderivatives-72').disabled = true;
          document.getElementById('o-calcderivatives-73').disabled = true;
          document.getElementById('o-calcderivatives-74').disabled = true;
          showExplanation7()
          localStorage.setItem('calcderivatives7', 0)
        }
        if (document.getElementById('o-calcderivatives-73').checked) {
          document.getElementById('r-calcderivatives-73').style.color = 'red'
          document.getElementById('r-calcderivatives-73').innerHTML = 'Incorrect!'
          document.getElementById('r-calcderivatives-71').style.color = 'blue'
          document.getElementById('r-calcderivatives-71').innerHTML = 'Correct!'
          
          document.getElementById('b-calcderivatives-71').classList.add("correct")
          document.getElementById('b-calcderivatives-74').classList.add("incorrect")
          document.getElementById('b-calcderivatives-72').classList.add("incorrect")
          document.getElementById('b-calcderivatives-73').classList.add("incorrect")
    
          document.getElementById('sa-calcderivatives-7').disabled = true;
          document.getElementById('o-calcderivatives-71').disabled = true;
          document.getElementById('o-calcderivatives-72').disabled = true;
          document.getElementById('o-calcderivatives-73').disabled = true;
          document.getElementById('o-calcderivatives-74').disabled = true;
          showExplanation7()
          localStorage.setItem('calcderivatives7', 0)
        }
        if (document.getElementById('o-calcderivatives-74').checked) {
          document.getElementById('r-calcderivatives-74').style.color = 'red'
          document.getElementById('r-calcderivatives-74').innerHTML = 'Incorrect!'
          document.getElementById('r-calcderivatives-71').style.color = 'blue'
          document.getElementById('r-calcderivatives-71').innerHTML = 'Correct!'
          
          document.getElementById('b-calcderivatives-74').classList.add("correct")
          document.getElementById('b-calcderivatives-71').classList.add("incorrect")
          document.getElementById('b-calcderivatives-72').classList.add("incorrect")
          document.getElementById('b-calcderivatives-73').classList.add("incorrect")
    
          document.getElementById('sa-calcderivatives-7').disabled = true;
          document.getElementById('o-calcderivatives-71').disabled = true;
          document.getElementById('o-calcderivatives-72').disabled = true;
          document.getElementById('o-calcderivatives-73').disabled = true;
          document.getElementById('o-calcderivatives-74').disabled = true;
          showExplanation7()
          localStorage.setItem('calcderivatives7', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-calcderivatives-8') != null) {
      calcderivatives8But.onclick = function() {
        if (document.getElementById('o-calcderivatives-81').checked) {
          document.getElementById('r-calcderivatives-81').style.color = 'red'
          document.getElementById('r-calcderivatives-81').innerHTML = 'Incorrect!'
          document.getElementById('r-calcderivatives-83').style.color = 'blue'
          document.getElementById('r-calcderivatives-83').innerHTML = 'Correct!'
          
          document.getElementById('b-calcderivatives-83').classList.add("correct")
          document.getElementById('b-calcderivatives-81').classList.add("incorrect")
          document.getElementById('b-calcderivatives-82').classList.add("incorrect")
          document.getElementById('b-calcderivatives-84').classList.add("incorrect")
    
          document.getElementById('sa-calcderivatives-8').disabled = true;
          document.getElementById('o-calcderivatives-81').disabled = true;
          document.getElementById('o-calcderivatives-82').disabled = true;
          document.getElementById('o-calcderivatives-83').disabled = true;
          document.getElementById('o-calcderivatives-84').disabled = true;
          showExplanation8()
          localStorage.setItem('calcderivatives8', 0)
        }
        if (document.getElementById('o-calcderivatives-82').checked) {
          document.getElementById('r-calcderivatives-82').style.color = 'red'
          document.getElementById('r-calcderivatives-82').innerHTML = 'Incorrect!'
          document.getElementById('r-calcderivatives-83').style.color = 'blue'
          document.getElementById('r-calcderivatives-83').innerHTML = 'Correct!'
          
          document.getElementById('b-calcderivatives-83').classList.add("correct")
          document.getElementById('b-calcderivatives-81').classList.add("incorrect")
          document.getElementById('b-calcderivatives-82').classList.add("incorrect")
          document.getElementById('b-calcderivatives-84').classList.add("incorrect")
    
          document.getElementById('sa-calcderivatives-8').disabled = true;
          document.getElementById('o-calcderivatives-81').disabled = true;
          document.getElementById('o-calcderivatives-82').disabled = true;
          document.getElementById('o-calcderivatives-83').disabled = true;
          document.getElementById('o-calcderivatives-84').disabled = true;
          showExplanation8()
          localStorage.setItem('calcderivatives8', 0)
        }
        if (document.getElementById('o-calcderivatives-83').checked) {
          document.getElementById('r-calcderivatives-83').style.color = 'blue'
          document.getElementById('r-calcderivatives-83').innerHTML = 'Correct!'
          
          document.getElementById('b-calcderivatives-83').classList.add("correct")
          document.getElementById('b-calcderivatives-81').classList.add("incorrect")
          document.getElementById('b-calcderivatives-82').classList.add("incorrect")
          document.getElementById('b-calcderivatives-84').classList.add("incorrect")
    
          document.getElementById('sa-calcderivatives-8').disabled = true;
          document.getElementById('o-calcderivatives-81').disabled = true;
          document.getElementById('o-calcderivatives-82').disabled = true;
          document.getElementById('o-calcderivatives-83').disabled = true;
          document.getElementById('o-calcderivatives-84').disabled = true;
          showExplanation8()
          localStorage.setItem('calcderivatives8', 1)
        }
        if (document.getElementById('o-calcderivatives-84').checked) {
          document.getElementById('r-calcderivatives-84').style.color = 'red'
          document.getElementById('r-calcderivatives-84').innerHTML = 'Incorrect!'
          document.getElementById('r-calcderivatives-83').style.color = 'blue'
          document.getElementById('r-calcderivatives-83').innerHTML = 'Correct!'
          
          document.getElementById('b-calcderivatives-83').classList.add("correct")
          document.getElementById('b-calcderivatives-81').classList.add("incorrect")
          document.getElementById('b-calcderivatives-82').classList.add("incorrect")
          document.getElementById('b-calcderivatives-84').classList.add("incorrect")
    
          document.getElementById('sa-calcderivatives-8').disabled = true;
          document.getElementById('o-calcderivatives-81').disabled = true;
          document.getElementById('o-calcderivatives-82').disabled = true;
          document.getElementById('o-calcderivatives-83').disabled = true;
          document.getElementById('o-calcderivatives-84').disabled = true;
          showExplanation8()
          localStorage.setItem('calcderivatives8', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-calcderivatives-9') != null) {
      calcderivatives9But.onclick = function() {
        if (document.getElementById('o-calcderivatives-91').checked) {
          document.getElementById('r-calcderivatives-91').style.color = 'blue'
          document.getElementById('r-calcderivatives-91').innerHTML = 'Correct!'
          
          document.getElementById('b-calcderivatives-91').classList.add("correct")
          document.getElementById('b-calcderivatives-94').classList.add("incorrect")
          document.getElementById('b-calcderivatives-92').classList.add("incorrect")
          document.getElementById('b-calcderivatives-93').classList.add("incorrect")
    
          document.getElementById('sa-calcderivatives-9').disabled = true;
          document.getElementById('o-calcderivatives-91').disabled = true;
          document.getElementById('o-calcderivatives-92').disabled = true;
          document.getElementById('o-calcderivatives-93').disabled = true;
          document.getElementById('o-calcderivatives-94').disabled = true;
          showExplanation9()
          localStorage.setItem('calcderivatives9', 1)
        }
        if (document.getElementById('o-calcderivatives-92').checked) {
          document.getElementById('r-calcderivatives-92').style.color = 'red'
          document.getElementById('r-calcderivatives-92').innerHTML = 'Incorrect!'
          document.getElementById('r-calcderivatives-91').style.color = 'blue'
          document.getElementById('r-calcderivatives-91').innerHTML = 'Correct!'
          
          document.getElementById('b-calcderivatives-91').classList.add("correct")
          document.getElementById('b-calcderivatives-94').classList.add("incorrect")
          document.getElementById('b-calcderivatives-92').classList.add("incorrect")
          document.getElementById('b-calcderivatives-93').classList.add("incorrect")
    
          document.getElementById('sa-calcderivatives-9').disabled = true;
          document.getElementById('o-calcderivatives-91').disabled = true;
          document.getElementById('o-calcderivatives-92').disabled = true;
          document.getElementById('o-calcderivatives-93').disabled = true;
          document.getElementById('o-calcderivatives-94').disabled = true;
          showExplanation9()
          localStorage.setItem('calcderivatives9', 0)
        }
        if (document.getElementById('o-calcderivatives-93').checked) {
          document.getElementById('r-calcderivatives-93').style.color = 'red'
          document.getElementById('r-calcderivatives-93').innerHTML = 'Incorrect!'
          document.getElementById('r-calcderivatives-91').style.color = 'blue'
          document.getElementById('r-calcderivatives-91').innerHTML = 'Correct!'
          
          document.getElementById('b-calcderivatives-91').classList.add("correct")
          document.getElementById('b-calcderivatives-94').classList.add("incorrect")
          document.getElementById('b-calcderivatives-92').classList.add("incorrect")
          document.getElementById('b-calcderivatives-93').classList.add("incorrect")
    
          document.getElementById('sa-calcderivatives-9').disabled = true;
          document.getElementById('o-calcderivatives-91').disabled = true;
          document.getElementById('o-calcderivatives-92').disabled = true;
          document.getElementById('o-calcderivatives-93').disabled = true;
          document.getElementById('o-calcderivatives-94').disabled = true;
          showExplanation9()
          localStorage.setItem('calcderivatives9', 0)
        }
        if (document.getElementById('o-calcderivatives-94').checked) {
          document.getElementById('r-calcderivatives-94').style.color = 'red'
          document.getElementById('r-calcderivatives-94').innerHTML = 'Incorrect!'
          document.getElementById('r-calcderivatives-91').style.color = 'blue'
          document.getElementById('r-calcderivatives-91').innerHTML = 'Correct!'
          
          document.getElementById('b-calcderivatives-91').classList.add("correct")
          document.getElementById('b-calcderivatives-94').classList.add("incorrect")
          document.getElementById('b-calcderivatives-92').classList.add("incorrect")
          document.getElementById('b-calcderivatives-93').classList.add("incorrect")
    
          document.getElementById('sa-calcderivatives-9').disabled = true;
          document.getElementById('o-calcderivatives-91').disabled = true;
          document.getElementById('o-calcderivatives-92').disabled = true;
          document.getElementById('o-calcderivatives-93').disabled = true;
          document.getElementById('o-calcderivatives-94').disabled = true;
          showExplanation9()
          localStorage.setItem('calcderivatives9', 0)
        }
      }
    }
    
    if (document.getElementById('sa-calcderivatives-10') != null) {
      calcderivatives10But.onclick = function() {
        if (document.getElementById('o-calcderivatives-101').checked) {
          document.getElementById('r-calcderivatives-101').style.color = 'red'
          document.getElementById('r-calcderivatives-101').innerHTML = 'Incorrect!'
          document.getElementById('r-calcderivatives-102').style.color = 'blue'
          document.getElementById('r-calcderivatives-102').innerHTML = 'Correct!'
          
          document.getElementById('b-calcderivatives-102').classList.add("correct")
          document.getElementById('b-calcderivatives-101').classList.add("incorrect")
          document.getElementById('b-calcderivatives-103').classList.add("incorrect")
          document.getElementById('b-calcderivatives-104').classList.add("incorrect")
    
          document.getElementById('sa-calcderivatives-10').disabled = true;
          document.getElementById('o-calcderivatives-101').disabled = true;
          document.getElementById('o-calcderivatives-102').disabled = true;
          document.getElementById('o-calcderivatives-103').disabled = true;
          document.getElementById('o-calcderivatives-104').disabled = true;
          showExplanation10()
          localStorage.setItem('calcderivatives10', 0)
        }
        if (document.getElementById('o-calcderivatives-102').checked) {
          document.getElementById('r-calcderivatives-102').style.color = 'blue'
          document.getElementById('r-calcderivatives-102').innerHTML = 'Correct!'
          
          document.getElementById('b-calcderivatives-102').classList.add("correct")
          document.getElementById('b-calcderivatives-101').classList.add("incorrect")
          document.getElementById('b-calcderivatives-103').classList.add("incorrect")
          document.getElementById('b-calcderivatives-104').classList.add("incorrect")
    
          document.getElementById('sa-calcderivatives-10').disabled = true;
          document.getElementById('o-calcderivatives-101').disabled = true;
          document.getElementById('o-calcderivatives-102').disabled = true;
          document.getElementById('o-calcderivatives-103').disabled = true;
          document.getElementById('o-calcderivatives-104').disabled = true;
          showExplanation10()
          localStorage.setItem('calcderivatives10', 1)
        }
        if (document.getElementById('o-calcderivatives-103').checked) {
          document.getElementById('r-calcderivatives-103').style.color = 'red'
          document.getElementById('r-calcderivatives-103').innerHTML = 'Incorrect!'
          document.getElementById('r-calcderivatives-102').style.color = 'blue'
          document.getElementById('r-calcderivatives-102').innerHTML = 'Correct!'
          
          document.getElementById('b-calcderivatives-102').classList.add("correct")
          document.getElementById('b-calcderivatives-101').classList.add("incorrect")
          document.getElementById('b-calcderivatives-103').classList.add("incorrect")
          document.getElementById('b-calcderivatives-104').classList.add("incorrect")
    
          document.getElementById('sa-calcderivatives-10').disabled = true;
          document.getElementById('o-calcderivatives-101').disabled = true;
          document.getElementById('o-calcderivatives-102').disabled = true;
          document.getElementById('o-calcderivatives-103').disabled = true;
          document.getElementById('o-calcderivatives-104').disabled = true;
          showExplanation10()
          localStorage.setItem('calcderivatives10', 0)
        }
        if (document.getElementById('o-calcderivatives-104').checked) {
          document.getElementById('r-calcderivatives-104').style.color = 'red'
          document.getElementById('r-calcderivatives-104').innerHTML = 'Incorrect!'
          document.getElementById('r-calcderivatives-102').style.color = 'blue'
          document.getElementById('r-calcderivatives-102').innerHTML = 'Correct!'
          
          document.getElementById('b-calcderivatives-102').classList.add("correct")
          document.getElementById('b-calcderivatives-101').classList.add("incorrect")
          document.getElementById('b-calcderivatives-103').classList.add("incorrect")
          document.getElementById('b-calcderivatives-104').classList.add("incorrect")
    
          document.getElementById('sa-calcderivatives-10').disabled = true;
          document.getElementById('o-calcderivatives-101').disabled = true;
          document.getElementById('o-calcderivatives-102').disabled = true;
          document.getElementById('o-calcderivatives-103').disabled = true;
          document.getElementById('o-calcderivatives-104').disabled = true;
          showExplanation10()
          localStorage.setItem('calcderivatives10', 0)
        }
      }
    }
    