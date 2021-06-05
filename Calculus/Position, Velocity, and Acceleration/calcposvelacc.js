
  let calcposvelacc1But = document.getElementById('sa-calcposvelacc-1');
  let calcposvelacc2But = document.getElementById('sa-calcposvelacc-2');
  let calcposvelacc3But = document.getElementById('sa-calcposvelacc-3');
  let calcposvelacc4But = document.getElementById('sa-calcposvelacc-4');
  let calcposvelacc5But = document.getElementById('sa-calcposvelacc-5');
  let calcposvelacc6But = document.getElementById('sa-calcposvelacc-6');
  let calcposvelacc7But = document.getElementById('sa-calcposvelacc-7');
  let calcposvelacc8But = document.getElementById('sa-calcposvelacc-8');
  let calcposvelacc9But = document.getElementById('sa-calcposvelacc-9');
  let calcposvelacc10But = document.getElementById('sa-calcposvelacc-10');


  showExplanation1 = function() {
    document.getElementById('e-calcposvelacc-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-calcposvelacc-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-calcposvelacc-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-calcposvelacc-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-calcposvelacc-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-calcposvelacc-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-calcposvelacc-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-calcposvelacc-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-calcposvelacc-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-calcposvelacc-10').style.display = 'block';
     } 



     if (document.getElementById('sa-calcposvelacc-1') != null) {
      calcposvelacc1But.onclick = function () {
        if (document.getElementById('o-calcposvelacc-11').checked) {
          document.getElementById('r-calcposvelacc-11').style.color = 'blue'
          document.getElementById('r-calcposvelacc-11').innerHTML = 'Correct!'
    
          document.getElementById('b-calcposvelacc-11').classList.add("correct")
          document.getElementById('b-calcposvelacc-12').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-13').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-14').classList.add("incorrect")
    
          document.getElementById('sa-calcposvelacc-1').disabled = true;
          document.getElementById('o-calcposvelacc-11').disabled = true;
          document.getElementById('o-calcposvelacc-12').disabled = true;
          document.getElementById('o-calcposvelacc-13').disabled = true;
          document.getElementById('o-calcposvelacc-14').disabled = true;
          showExplanation1()
          localStorage.setItem('calcposvelacc1', 1)
        }
    
        if (document.getElementById('o-calcposvelacc-12').checked) {
         
          document.getElementById('r-calcposvelacc-12').style.color = 'red'
          document.getElementById('r-calcposvelacc-12').innerHTML = 'Incorrect!'
          document.getElementById('r-calcposvelacc-11').style.color = 'blue'
          document.getElementById('r-calcposvelacc-11').innerHTML = 'Correct!'
    
          document.getElementById('b-calcposvelacc-11').classList.add("correct")
          document.getElementById('b-calcposvelacc-12').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-13').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-14').classList.add("incorrect")
    
          document.getElementById('sa-calcposvelacc-1').disabled = true;
          document.getElementById('o-calcposvelacc-11').disabled = true;
          document.getElementById('o-calcposvelacc-12').disabled = true;
          document.getElementById('o-calcposvelacc-13').disabled = true;
          document.getElementById('o-calcposvelacc-14').disabled = true;
          showExplanation1()
          localStorage.setItem('calcposvelacc1', 0)
        }
        if (document.getElementById('o-calcposvelacc-13').checked) {
          document.getElementById('r-calcposvelacc-13').style.color = 'red'
          document.getElementById('r-calcposvelacc-13').innerHTML = 'Incorrect!'
          document.getElementById('r-calcposvelacc-11').style.color = 'blue'
          document.getElementById('r-calcposvelacc-11').innerHTML = 'Correct!'
          
          document.getElementById('b-calcposvelacc-11').classList.add("correct")
          document.getElementById('b-calcposvelacc-12').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-13').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-14').classList.add("incorrect")
    
          document.getElementById('sa-calcposvelacc-1').disabled = true;
          document.getElementById('o-calcposvelacc-11').disabled = true;
          document.getElementById('o-calcposvelacc-12').disabled = true;
          document.getElementById('o-calcposvelacc-13').disabled = true;
          document.getElementById('o-calcposvelacc-14').disabled = true;
          showExplanation1()
          localStorage.setItem('calcposvelacc1', 0)
        }
        if (document.getElementById('o-calcposvelacc-14').checked) {
          document.getElementById('r-calcposvelacc-14').style.color = 'red'
          document.getElementById('r-calcposvelacc-14').innerHTML = 'Incorrect!'
          document.getElementById('r-calcposvelacc-11').style.color = 'blue'
          document.getElementById('r-calcposvelacc-11').innerHTML = 'Correct!'
          
          document.getElementById('b-calcposvelacc-11').classList.add("correct")
          document.getElementById('b-calcposvelacc-12').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-13').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-14').classList.add("incorrect")
    
          document.getElementById('sa-calcposvelacc-1').disabled = true;
          document.getElementById('o-calcposvelacc-11').disabled = true;
          document.getElementById('o-calcposvelacc-12').disabled = true;
          document.getElementById('o-calcposvelacc-13').disabled = true;
          document.getElementById('o-calcposvelacc-14').disabled = true;
          showExplanation1()
          localStorage.setItem('calcposvelacc1', 0)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-calcposvelacc-2') != null) {
      calcposvelacc2But.onclick = function() {
        if (document.getElementById('o-calcposvelacc-21').checked) {
          document.getElementById('r-calcposvelacc-21').style.color = 'red'
          document.getElementById('r-calcposvelacc-21').innerHTML = 'Incorrect!'
          document.getElementById('r-calcposvelacc-23').style.color = 'blue'
          document.getElementById('r-calcposvelacc-23').innerHTML = 'Correct!'
          
          document.getElementById('b-calcposvelacc-23').classList.add("correct")
          document.getElementById('b-calcposvelacc-21').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-22').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-24').classList.add("incorrect")
    
          document.getElementById('sa-calcposvelacc-2').disabled = true;
          document.getElementById('o-calcposvelacc-21').disabled = true;
          document.getElementById('o-calcposvelacc-22').disabled = true;
          document.getElementById('o-calcposvelacc-23').disabled = true;
          document.getElementById('o-calcposvelacc-24').disabled = true;
          showExplanation2()
          localStorage.setItem('calcposvelacc2', 0)
        }
        if (document.getElementById('o-calcposvelacc-22').checked) {
          document.getElementById('r-calcposvelacc-22').style.color = 'red'
          document.getElementById('r-calcposvelacc-22').innerHTML = 'Incorrect!'
          document.getElementById('r-calcposvelacc-23').style.color = 'blue'
          document.getElementById('r-calcposvelacc-23').innerHTML = 'Correct!'
          
          document.getElementById('b-calcposvelacc-23').classList.add("correct")
          document.getElementById('b-calcposvelacc-21').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-22').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-24').classList.add("incorrect")
    
          document.getElementById('sa-calcposvelacc-2').disabled = true;
          document.getElementById('o-calcposvelacc-21').disabled = true;
          document.getElementById('o-calcposvelacc-22').disabled = true;
          document.getElementById('o-calcposvelacc-23').disabled = true;
          document.getElementById('o-calcposvelacc-24').disabled = true;
          showExplanation2()
          localStorage.setItem('calcposvelacc2', 0)
        }
        if (document.getElementById('o-calcposvelacc-23').checked) {
          document.getElementById('r-calcposvelacc-23').style.color = 'blue'
          document.getElementById('r-calcposvelacc-23').innerHTML = 'Correct!'
          
          document.getElementById('b-calcposvelacc-23').classList.add("correct")
          document.getElementById('b-calcposvelacc-21').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-22').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-24').classList.add("incorrect")
    
          document.getElementById('sa-calcposvelacc-2').disabled = true;
          document.getElementById('o-calcposvelacc-21').disabled = true;
          document.getElementById('o-calcposvelacc-22').disabled = true;
          document.getElementById('o-calcposvelacc-23').disabled = true;
          document.getElementById('o-calcposvelacc-24').disabled = true;
          showExplanation2()
          localStorage.setItem('calcposvelacc2', 1)
        }
        if (document.getElementById('o-calcposvelacc-24').checked) {
          document.getElementById('r-calcposvelacc-24').style.color = 'red'
          document.getElementById('r-calcposvelacc-24').innerHTML = 'Incorrect!'
          document.getElementById('r-calcposvelacc-23').style.color = 'blue'
          document.getElementById('r-calcposvelacc-23').innerHTML = 'Correct!'
          
          document.getElementById('b-calcposvelacc-23').classList.add("correct")
          document.getElementById('b-calcposvelacc-21').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-22').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-24').classList.add("incorrect")
    
          document.getElementById('sa-calcposvelacc-2').disabled = true;
          document.getElementById('o-calcposvelacc-21').disabled = true;
          document.getElementById('o-calcposvelacc-22').disabled = true;
          document.getElementById('o-calcposvelacc-23').disabled = true;
          document.getElementById('o-calcposvelacc-24').disabled = true;
          showExplanation2()
          localStorage.setItem('calcposvelacc2', 0)
        }
      }
    }
    
    if (document.getElementById('sa-calcposvelacc-3') != null) {
      calcposvelacc3But.onclick = function() {
        if (document.getElementById('o-calcposvelacc-31').checked) {
          document.getElementById('r-calcposvelacc-31').style.color = 'red'
          document.getElementById('r-calcposvelacc-31').innerHTML = 'Incorrect!'
          document.getElementById('r-calcposvelacc-32').style.color = 'blue'
          document.getElementById('r-calcposvelacc-32').innerHTML = 'Correct!'
          
          document.getElementById('b-calcposvelacc-32').classList.add("correct")
          document.getElementById('b-calcposvelacc-31').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-33').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-34').classList.add("incorrect")
    
          document.getElementById('sa-calcposvelacc-3').disabled = true;
          document.getElementById('o-calcposvelacc-31').disabled = true;
          document.getElementById('o-calcposvelacc-32').disabled = true;
          document.getElementById('o-calcposvelacc-33').disabled = true;
          document.getElementById('o-calcposvelacc-34').disabled = true;
          showExplanation3()
          localStorage.setItem('calcposvelacc3', 0)
        }
        if (document.getElementById('o-calcposvelacc-32').checked) {
    
          document.getElementById('r-calcposvelacc-32').style.color = 'blue'
          document.getElementById('r-calcposvelacc-32').innerHTML = 'Correct!'
          
          document.getElementById('b-calcposvelacc-32').classList.add("correct")
          document.getElementById('b-calcposvelacc-31').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-33').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-34').classList.add("incorrect")
    
          document.getElementById('sa-calcposvelacc-3').disabled = true;
          document.getElementById('o-calcposvelacc-31').disabled = true;
          document.getElementById('o-calcposvelacc-32').disabled = true;
          document.getElementById('o-calcposvelacc-33').disabled = true;
          document.getElementById('o-calcposvelacc-34').disabled = true;
          showExplanation3()
          localStorage.setItem('calcposvelacc3', 1)
        }
        if (document.getElementById('o-calcposvelacc-33').checked) {
          document.getElementById('r-calcposvelacc-33').style.color = 'red'
          document.getElementById('r-calcposvelacc-33').innerHTML = 'Incorrect!'
          document.getElementById('r-calcposvelacc-32').style.color = 'blue'
          document.getElementById('r-calcposvelacc-32').innerHTML = 'Correct!'
          
          document.getElementById('b-calcposvelacc-32').classList.add("correct")
          document.getElementById('b-calcposvelacc-31').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-33').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-34').classList.add("incorrect")
    
          document.getElementById('sa-calcposvelacc-3').disabled = true;
          document.getElementById('o-calcposvelacc-31').disabled = true;
          document.getElementById('o-calcposvelacc-32').disabled = true;
          document.getElementById('o-calcposvelacc-33').disabled = true;
          document.getElementById('o-calcposvelacc-34').disabled = true;
          showExplanation3()
          localStorage.setItem('calcposvelacc3', 0)
        }
        if (document.getElementById('o-calcposvelacc-34').checked) {
          document.getElementById('r-calcposvelacc-34').style.color = 'red'
          document.getElementById('r-calcposvelacc-34').innerHTML = 'Incorrect!'
          document.getElementById('r-calcposvelacc-32').style.color = 'blue'
          document.getElementById('r-calcposvelacc-32').innerHTML = 'Correct!'
          
          document.getElementById('b-calcposvelacc-32').classList.add("correct")
          document.getElementById('b-calcposvelacc-31').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-33').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-34').classList.add("incorrect")
    
          document.getElementById('sa-calcposvelacc-3').disabled = true;
          document.getElementById('o-calcposvelacc-31').disabled = true;
          document.getElementById('o-calcposvelacc-32').disabled = true;
          document.getElementById('o-calcposvelacc-33').disabled = true;
          document.getElementById('o-calcposvelacc-34').disabled = true;
          showExplanation3()
          localStorage.setItem('calcposvelacc3', 0)
        }
      }
    }
    
    if (document.getElementById('sa-calcposvelacc-4') != null) {
      calcposvelacc4But.onclick = function() {
        if (document.getElementById('o-calcposvelacc-41').checked) {
          document.getElementById('r-calcposvelacc-41').style.color = 'red'
          document.getElementById('r-calcposvelacc-41').innerHTML = 'Incorrect!'
          document.getElementById('r-calcposvelacc-44').style.color = 'blue'
          document.getElementById('r-calcposvelacc-44').innerHTML = 'Correct!'
          
          document.getElementById('b-calcposvelacc-44').classList.add("correct")
          document.getElementById('b-calcposvelacc-41').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-42').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-43').classList.add("incorrect")
    
          document.getElementById('sa-calcposvelacc-4').disabled = true;
          document.getElementById('o-calcposvelacc-41').disabled = true;
          document.getElementById('o-calcposvelacc-42').disabled = true;
          document.getElementById('o-calcposvelacc-43').disabled = true;
          document.getElementById('o-calcposvelacc-44').disabled = true;
          showExplanation4()
          localStorage.setItem('calcposvelacc4', 0)
        }
        if (document.getElementById('o-calcposvelacc-42').checked) {
          document.getElementById('r-calcposvelacc-42').style.color = 'red'
          document.getElementById('r-calcposvelacc-42').innerHTML = 'Incorrect!'
          document.getElementById('r-calcposvelacc-44').style.color = 'blue'
          document.getElementById('r-calcposvelacc-44').innerHTML = 'Correct!'
          
          document.getElementById('b-calcposvelacc-44').classList.add("correct")
          document.getElementById('b-calcposvelacc-41').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-42').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-43').classList.add("incorrect")
    
          document.getElementById('sa-calcposvelacc-4').disabled = true;
          document.getElementById('o-calcposvelacc-41').disabled = true;
          document.getElementById('o-calcposvelacc-42').disabled = true;
          document.getElementById('o-calcposvelacc-43').disabled = true;
          document.getElementById('o-calcposvelacc-44').disabled = true;
          showExplanation4()
          localStorage.setItem('calcposvelacc4', 0)
        }
        if (document.getElementById('o-calcposvelacc-43').checked) {
          document.getElementById('r-calcposvelacc-43').style.color = 'red'
          document.getElementById('r-calcposvelacc-43').innerHTML = 'Incorrect!'
          document.getElementById('r-calcposvelacc-44').style.color = 'blue'
          document.getElementById('r-calcposvelacc-44').innerHTML = 'Correct!'
          
          document.getElementById('b-calcposvelacc-44').classList.add("correct")
          document.getElementById('b-calcposvelacc-41').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-42').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-43').classList.add("incorrect")
    
          document.getElementById('sa-calcposvelacc-4').disabled = true;
          document.getElementById('o-calcposvelacc-41').disabled = true;
          document.getElementById('o-calcposvelacc-42').disabled = true;
          document.getElementById('o-calcposvelacc-43').disabled = true;
          document.getElementById('o-calcposvelacc-44').disabled = true;
          showExplanation4()
          localStorage.setItem('calcposvelacc4', 0)
        }
        if (document.getElementById('o-calcposvelacc-44').checked) {
          document.getElementById('r-calcposvelacc-44').style.color = 'blue'
          document.getElementById('r-calcposvelacc-44').innerHTML = 'Correct!'
          
          document.getElementById('b-calcposvelacc-44').classList.add("correct")
          document.getElementById('b-calcposvelacc-41').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-42').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-43').classList.add("incorrect")
    
          document.getElementById('sa-calcposvelacc-4').disabled = true;
          document.getElementById('o-calcposvelacc-41').disabled = true;
          document.getElementById('o-calcposvelacc-42').disabled = true;
          document.getElementById('o-calcposvelacc-43').disabled = true;
          document.getElementById('o-calcposvelacc-44').disabled = true;
          showExplanation4()
          localStorage.setItem('calcposvelacc4', 1)
        }
      }
    }
    
    if (document.getElementById('sa-calcposvelacc-5') != null) {
      calcposvelacc5But.onclick = function() {
        if (document.getElementById('o-calcposvelacc-51').checked) {
          document.getElementById('r-calcposvelacc-51').style.color = 'red'
          document.getElementById('r-calcposvelacc-51').innerHTML = 'Incorrect!'
          document.getElementById('r-calcposvelacc-53').style.color = 'blue'
          document.getElementById('r-calcposvelacc-53').innerHTML = 'Correct!'
          
          document.getElementById('b-calcposvelacc-53').classList.add("correct")
          document.getElementById('b-calcposvelacc-51').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-52').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-54').classList.add("incorrect")
    
          document.getElementById('sa-calcposvelacc-5').disabled = true;
          document.getElementById('o-calcposvelacc-51').disabled = true;
          document.getElementById('o-calcposvelacc-52').disabled = true;
          document.getElementById('o-calcposvelacc-53').disabled = true;
          document.getElementById('o-calcposvelacc-54').disabled = true;
          showExplanation5()
          localStorage.setItem('calcposvelacc5', 0)
        }
        if (document.getElementById('o-calcposvelacc-52').checked) {
          document.getElementById('r-calcposvelacc-52').style.color = 'red'
          document.getElementById('r-calcposvelacc-52').innerHTML = 'Incorrect!'
          document.getElementById('r-calcposvelacc-53').style.color = 'blue'
          document.getElementById('r-calcposvelacc-53').innerHTML = 'Correct!'
          
          document.getElementById('b-calcposvelacc-53').classList.add("correct")
          document.getElementById('b-calcposvelacc-51').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-52').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-54').classList.add("incorrect")
    
          document.getElementById('sa-calcposvelacc-5').disabled = true;
          document.getElementById('o-calcposvelacc-51').disabled = true;
          document.getElementById('o-calcposvelacc-52').disabled = true;
          document.getElementById('o-calcposvelacc-53').disabled = true;
          document.getElementById('o-calcposvelacc-54').disabled = true;
          showExplanation5()
          localStorage.setItem('calcposvelacc5', 0)
        }
        if (document.getElementById('o-calcposvelacc-53').checked) {
          document.getElementById('r-calcposvelacc-53').style.color = 'blue'
          document.getElementById('r-calcposvelacc-53').innerHTML = 'Correct!'
          
          document.getElementById('b-calcposvelacc-53').classList.add("correct")
          document.getElementById('b-calcposvelacc-51').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-52').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-54').classList.add("incorrect")
    
          document.getElementById('sa-calcposvelacc-5').disabled = true;
          document.getElementById('o-calcposvelacc-51').disabled = true;
          document.getElementById('o-calcposvelacc-52').disabled = true;
          document.getElementById('o-calcposvelacc-53').disabled = true;
          document.getElementById('o-calcposvelacc-54').disabled = true;
          showExplanation5()
          localStorage.setItem('calcposvelacc5', 1)
        }
        if (document.getElementById('o-calcposvelacc-54').checked) {
          document.getElementById('r-calcposvelacc-54').style.color = 'red'
          document.getElementById('r-calcposvelacc-54').innerHTML = 'Incorrect!'
          document.getElementById('r-calcposvelacc-53').style.color = 'blue'
          document.getElementById('r-calcposvelacc-53').innerHTML = 'Correct!'
          
          document.getElementById('b-calcposvelacc-53').classList.add("correct")
          document.getElementById('b-calcposvelacc-51').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-52').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-54').classList.add("incorrect")
    
          document.getElementById('sa-calcposvelacc-5').disabled = true;
          document.getElementById('o-calcposvelacc-51').disabled = true;
          document.getElementById('o-calcposvelacc-52').disabled = true;
          document.getElementById('o-calcposvelacc-53').disabled = true;
          document.getElementById('o-calcposvelacc-54').disabled = true;
          showExplanation5()
          localStorage.setItem('calcposvelacc5', 0)
        }
      }
    }
        
         
      if (document.getElementById('sa-calcposvelacc-6') != null) {
      calcposvelacc6But.onclick = function() {
        if (document.getElementById('o-calcposvelacc-61').checked) {
          document.getElementById('r-calcposvelacc-61').style.color = 'red'
          document.getElementById('r-calcposvelacc-61').innerHTML = 'Incorrect!'
          document.getElementById('r-calcposvelacc-64').style.color = 'blue'
          document.getElementById('r-calcposvelacc-64').innerHTML = 'Correct!'
          
          document.getElementById('b-calcposvelacc-64').classList.add("correct")
          document.getElementById('b-calcposvelacc-61').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-62').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-63').classList.add("incorrect")
    
          document.getElementById('sa-calcposvelacc-6').disabled = true;
          document.getElementById('o-calcposvelacc-61').disabled = true;
          document.getElementById('o-calcposvelacc-62').disabled = true;
          document.getElementById('o-calcposvelacc-63').disabled = true;
          document.getElementById('o-calcposvelacc-64').disabled = true;
          showExplanation6()
          localStorage.setItem('calcposvelacc6', 0)
        }
        if (document.getElementById('o-calcposvelacc-62').checked) {
          document.getElementById('r-calcposvelacc-62').style.color = 'red'
          document.getElementById('r-calcposvelacc-62').innerHTML = 'Incorrect!'
          document.getElementById('r-calcposvelacc-64').style.color = 'blue'
          document.getElementById('r-calcposvelacc-64').innerHTML = 'Correct!'
          
          document.getElementById('b-calcposvelacc-64').classList.add("correct")
          document.getElementById('b-calcposvelacc-61').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-62').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-63').classList.add("incorrect")
    
          document.getElementById('sa-calcposvelacc-6').disabled = true;
          document.getElementById('o-calcposvelacc-61').disabled = true;
          document.getElementById('o-calcposvelacc-62').disabled = true;
          document.getElementById('o-calcposvelacc-63').disabled = true;
          document.getElementById('o-calcposvelacc-64').disabled = true;
          showExplanation6()
          localStorage.setItem('calcposvelacc6', 0)
        }
        if (document.getElementById('o-calcposvelacc-63').checked) {
          document.getElementById('r-calcposvelacc-63').style.color = 'red'
          document.getElementById('r-calcposvelacc-63').innerHTML = 'Incorrect!'
          document.getElementById('r-calcposvelacc-64').style.color = 'blue'
          document.getElementById('r-calcposvelacc-64').innerHTML = 'Correct!'
          
          document.getElementById('b-calcposvelacc-64').classList.add("correct")
          document.getElementById('b-calcposvelacc-61').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-62').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-63').classList.add("incorrect")
    
          document.getElementById('sa-calcposvelacc-6').disabled = true;
          document.getElementById('o-calcposvelacc-61').disabled = true;
          document.getElementById('o-calcposvelacc-62').disabled = true;
          document.getElementById('o-calcposvelacc-63').disabled = true;
          document.getElementById('o-calcposvelacc-64').disabled = true;
          showExplanation6()
          localStorage.setItem('calcposvelacc6', 0)
        }
        if (document.getElementById('o-calcposvelacc-64').checked) {
          document.getElementById('r-calcposvelacc-64').style.color = 'blue'
          document.getElementById('r-calcposvelacc-64').innerHTML = 'Correct!'
          
          document.getElementById('b-calcposvelacc-64').classList.add("correct")
          document.getElementById('b-calcposvelacc-61').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-62').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-63').classList.add("incorrect")
    
          document.getElementById('sa-calcposvelacc-6').disabled = true;
          document.getElementById('o-calcposvelacc-61').disabled = true;
          document.getElementById('o-calcposvelacc-62').disabled = true;
          document.getElementById('o-calcposvelacc-63').disabled = true;
          document.getElementById('o-calcposvelacc-64').disabled = true;
          showExplanation6()
          localStorage.setItem('calcposvelacc6', 1)
        }
      }
    }
    
    if (document.getElementById('sa-calcposvelacc-7') != null) {
      calcposvelacc7But.onclick = function() {
        if (document.getElementById('o-calcposvelacc-71').checked) {
          document.getElementById('r-calcposvelacc-71').style.color = 'red'
          document.getElementById('r-calcposvelacc-71').innerHTML = 'Incorrect!'
          document.getElementById('r-calcposvelacc-74').style.color = 'blue'
          document.getElementById('r-calcposvelacc-74').innerHTML = 'Correct!'
          
          document.getElementById('b-calcposvelacc-74').classList.add("correct")
          document.getElementById('b-calcposvelacc-71').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-72').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-73').classList.add("incorrect")
    
          document.getElementById('sa-calcposvelacc-7').disabled = true;
          document.getElementById('o-calcposvelacc-71').disabled = true;
          document.getElementById('o-calcposvelacc-72').disabled = true;
          document.getElementById('o-calcposvelacc-73').disabled = true;
          document.getElementById('o-calcposvelacc-74').disabled = true;
          showExplanation7()
          localStorage.setItem('calcposvelacc7', 0)
        }
        if (document.getElementById('o-calcposvelacc-72').checked) {
          document.getElementById('r-calcposvelacc-72').style.color = 'red'
          document.getElementById('r-calcposvelacc-72').innerHTML = 'Incorrect!'
          document.getElementById('r-calcposvelacc-74').style.color = 'blue'
          document.getElementById('r-calcposvelacc-74').innerHTML = 'Correct!'
          
          document.getElementById('b-calcposvelacc-74').classList.add("correct")
          document.getElementById('b-calcposvelacc-71').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-72').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-73').classList.add("incorrect")
    
          document.getElementById('sa-calcposvelacc-7').disabled = true;
          document.getElementById('o-calcposvelacc-71').disabled = true;
          document.getElementById('o-calcposvelacc-72').disabled = true;
          document.getElementById('o-calcposvelacc-73').disabled = true;
          document.getElementById('o-calcposvelacc-74').disabled = true;
          showExplanation7()
          localStorage.setItem('calcposvelacc7', 0)
        }
        if (document.getElementById('o-calcposvelacc-73').checked) {
          document.getElementById('r-calcposvelacc-73').style.color = 'red'
          document.getElementById('r-calcposvelacc-73').innerHTML = 'Incorrect!'
          document.getElementById('r-calcposvelacc-74').style.color = 'blue'
          document.getElementById('r-calcposvelacc-74').innerHTML = 'Correct!'
          
          document.getElementById('b-calcposvelacc-74').classList.add("correct")
          document.getElementById('b-calcposvelacc-71').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-72').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-73').classList.add("incorrect")
    
          document.getElementById('sa-calcposvelacc-7').disabled = true;
          document.getElementById('o-calcposvelacc-71').disabled = true;
          document.getElementById('o-calcposvelacc-72').disabled = true;
          document.getElementById('o-calcposvelacc-73').disabled = true;
          document.getElementById('o-calcposvelacc-74').disabled = true;
          showExplanation7()
          localStorage.setItem('calcposvelacc7', 0)
        }
        if (document.getElementById('o-calcposvelacc-74').checked) {
          document.getElementById('r-calcposvelacc-74').style.color = 'blue'
          document.getElementById('r-calcposvelacc-74').innerHTML = 'Correct!'
          
          document.getElementById('b-calcposvelacc-74').classList.add("correct")
          document.getElementById('b-calcposvelacc-71').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-72').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-73').classList.add("incorrect")
    
          document.getElementById('sa-calcposvelacc-7').disabled = true;
          document.getElementById('o-calcposvelacc-71').disabled = true;
          document.getElementById('o-calcposvelacc-72').disabled = true;
          document.getElementById('o-calcposvelacc-73').disabled = true;
          document.getElementById('o-calcposvelacc-74').disabled = true;
          showExplanation7()
          localStorage.setItem('calcposvelacc7', 1)
        }
      }
    }
    
    
    if (document.getElementById('sa-calcposvelacc-8') != null) {
      calcposvelacc8But.onclick = function() {
        if (document.getElementById('o-calcposvelacc-81').checked) {
          document.getElementById('r-calcposvelacc-81').style.color = 'red'
          document.getElementById('r-calcposvelacc-81').innerHTML = 'Incorrect!'
          document.getElementById('r-calcposvelacc-82').style.color = 'blue'
          document.getElementById('r-calcposvelacc-82').innerHTML = 'Correct!'
          
          document.getElementById('b-calcposvelacc-82').classList.add("correct")
          document.getElementById('b-calcposvelacc-81').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-83').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-84').classList.add("incorrect")
    
          document.getElementById('sa-calcposvelacc-8').disabled = true;
          document.getElementById('o-calcposvelacc-81').disabled = true;
          document.getElementById('o-calcposvelacc-82').disabled = true;
          document.getElementById('o-calcposvelacc-83').disabled = true;
          document.getElementById('o-calcposvelacc-84').disabled = true;
          showExplanation8()
          localStorage.setItem('calcposvelacc8', 0)
        }
        if (document.getElementById('o-calcposvelacc-82').checked) {
          document.getElementById('r-calcposvelacc-82').style.color = 'blue'
          document.getElementById('r-calcposvelacc-82').innerHTML = 'Correct!'
          
          document.getElementById('b-calcposvelacc-82').classList.add("correct")
          document.getElementById('b-calcposvelacc-81').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-83').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-84').classList.add("incorrect")
    
          document.getElementById('sa-calcposvelacc-8').disabled = true;
          document.getElementById('o-calcposvelacc-81').disabled = true;
          document.getElementById('o-calcposvelacc-82').disabled = true;
          document.getElementById('o-calcposvelacc-83').disabled = true;
          document.getElementById('o-calcposvelacc-84').disabled = true;
          showExplanation8()
          localStorage.setItem('calcposvelacc8', 1)
        }
        if (document.getElementById('o-calcposvelacc-83').checked) {
          document.getElementById('r-calcposvelacc-83').style.color = 'red'
          document.getElementById('r-calcposvelacc-83').innerHTML = 'Incorrect!'
          document.getElementById('r-calcposvelacc-82').style.color = 'blue'
          document.getElementById('r-calcposvelacc-82').innerHTML = 'Correct!'
          
          document.getElementById('b-calcposvelacc-82').classList.add("correct")
          document.getElementById('b-calcposvelacc-81').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-83').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-84').classList.add("incorrect")
    
          document.getElementById('sa-calcposvelacc-8').disabled = true;
          document.getElementById('o-calcposvelacc-81').disabled = true;
          document.getElementById('o-calcposvelacc-82').disabled = true;
          document.getElementById('o-calcposvelacc-83').disabled = true;
          document.getElementById('o-calcposvelacc-84').disabled = true;
          showExplanation8()
          localStorage.setItem('calcposvelacc8', 0)
        }
        if (document.getElementById('o-calcposvelacc-84').checked) {
          document.getElementById('r-calcposvelacc-84').style.color = 'red'
          document.getElementById('r-calcposvelacc-84').innerHTML = 'Incorrect!'
          document.getElementById('r-calcposvelacc-82').style.color = 'blue'
          document.getElementById('r-calcposvelacc-82').innerHTML = 'Correct!'
          
          document.getElementById('b-calcposvelacc-82').classList.add("correct")
          document.getElementById('b-calcposvelacc-81').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-83').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-84').classList.add("incorrect")
    
          document.getElementById('sa-calcposvelacc-8').disabled = true;
          document.getElementById('o-calcposvelacc-81').disabled = true;
          document.getElementById('o-calcposvelacc-82').disabled = true;
          document.getElementById('o-calcposvelacc-83').disabled = true;
          document.getElementById('o-calcposvelacc-84').disabled = true;
          showExplanation8()
          localStorage.setItem('calcposvelacc8', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-calcposvelacc-9') != null) {
      calcposvelacc9But.onclick = function() {
        if (document.getElementById('o-calcposvelacc-91').checked) {
          document.getElementById('r-calcposvelacc-91').style.color = 'red'
          document.getElementById('r-calcposvelacc-91').innerHTML = 'Incorrect!'
          document.getElementById('r-calcposvelacc-94').style.color = 'blue'
          document.getElementById('r-calcposvelacc-94').innerHTML = 'Correct!'
          
          document.getElementById('b-calcposvelacc-94').classList.add("correct")
          document.getElementById('b-calcposvelacc-91').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-92').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-93').classList.add("incorrect")
    
          document.getElementById('sa-calcposvelacc-9').disabled = true;
          document.getElementById('o-calcposvelacc-91').disabled = true;
          document.getElementById('o-calcposvelacc-92').disabled = true;
          document.getElementById('o-calcposvelacc-93').disabled = true;
          document.getElementById('o-calcposvelacc-94').disabled = true;
          showExplanation9()
          localStorage.setItem('calcposvelacc9', 0)
        }
        if (document.getElementById('o-calcposvelacc-92').checked) {
          document.getElementById('r-calcposvelacc-91').style.color = 'red'
          document.getElementById('r-calcposvelacc-91').innerHTML = 'Incorrect!'
          document.getElementById('r-calcposvelacc-94').style.color = 'blue'
          document.getElementById('r-calcposvelacc-94').innerHTML = 'Correct!'
          
          document.getElementById('b-calcposvelacc-94').classList.add("correct")
          document.getElementById('b-calcposvelacc-91').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-92').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-93').classList.add("incorrect")
    
          document.getElementById('sa-calcposvelacc-9').disabled = true;
          document.getElementById('o-calcposvelacc-91').disabled = true;
          document.getElementById('o-calcposvelacc-92').disabled = true;
          document.getElementById('o-calcposvelacc-93').disabled = true;
          document.getElementById('o-calcposvelacc-94').disabled = true;
          showExplanation9()
          localStorage.setItem('calcposvelacc9', 0)
        }
        if (document.getElementById('o-calcposvelacc-93').checked) {
          document.getElementById('r-calcposvelacc-91').style.color = 'red'
          document.getElementById('r-calcposvelacc-91').innerHTML = 'Incorrect!'
          document.getElementById('r-calcposvelacc-94').style.color = 'blue'
          document.getElementById('r-calcposvelacc-94').innerHTML = 'Correct!'
          
          document.getElementById('b-calcposvelacc-94').classList.add("correct")
          document.getElementById('b-calcposvelacc-91').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-92').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-93').classList.add("incorrect")
    
          document.getElementById('sa-calcposvelacc-9').disabled = true;
          document.getElementById('o-calcposvelacc-91').disabled = true;
          document.getElementById('o-calcposvelacc-92').disabled = true;
          document.getElementById('o-calcposvelacc-93').disabled = true;
          document.getElementById('o-calcposvelacc-94').disabled = true;
          showExplanation9()
          localStorage.setItem('calcposvelacc9', 0)
        }
        if (document.getElementById('o-calcposvelacc-94').checked) {
          document.getElementById('r-calcposvelacc-94').style.color = 'blue'
          document.getElementById('r-calcposvelacc-94').innerHTML = 'Correct!'
          
          document.getElementById('b-calcposvelacc-94').classList.add("correct")
          document.getElementById('b-calcposvelacc-91').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-92').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-93').classList.add("incorrect")
    
          document.getElementById('sa-calcposvelacc-9').disabled = true;
          document.getElementById('o-calcposvelacc-91').disabled = true;
          document.getElementById('o-calcposvelacc-92').disabled = true;
          document.getElementById('o-calcposvelacc-93').disabled = true;
          document.getElementById('o-calcposvelacc-94').disabled = true;
          showExplanation9()
          localStorage.setItem('calcposvelacc9', 1)
        }
      }
    }
    
    if (document.getElementById('sa-calcposvelacc-10') != null) {
      calcposvelacc10But.onclick = function() {
        if (document.getElementById('o-calcposvelacc-101').checked) {
          document.getElementById('r-calcposvelacc-101').style.color = 'red'
          document.getElementById('r-calcposvelacc-101').innerHTML = 'Incorrect!'
          document.getElementById('r-calcposvelacc-102').style.color = 'blue'
          document.getElementById('r-calcposvelacc-102').innerHTML = 'Correct!'
          
          document.getElementById('b-calcposvelacc-102').classList.add("correct")
          document.getElementById('b-calcposvelacc-101').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-103').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-104').classList.add("incorrect")
    
          document.getElementById('sa-calcposvelacc-10').disabled = true;
          document.getElementById('o-calcposvelacc-101').disabled = true;
          document.getElementById('o-calcposvelacc-102').disabled = true;
          document.getElementById('o-calcposvelacc-103').disabled = true;
          document.getElementById('o-calcposvelacc-104').disabled = true;
          showExplanation10()
          localStorage.setItem('calcposvelacc10', 0)
        }
        if (document.getElementById('o-calcposvelacc-102').checked) {
          document.getElementById('r-calcposvelacc-102').style.color = 'blue'
          document.getElementById('r-calcposvelacc-102').innerHTML = 'Correct!'
          
          document.getElementById('b-calcposvelacc-102').classList.add("correct")
          document.getElementById('b-calcposvelacc-101').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-103').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-104').classList.add("incorrect")
    
          document.getElementById('sa-calcposvelacc-10').disabled = true;
          document.getElementById('o-calcposvelacc-101').disabled = true;
          document.getElementById('o-calcposvelacc-102').disabled = true;
          document.getElementById('o-calcposvelacc-103').disabled = true;
          document.getElementById('o-calcposvelacc-104').disabled = true;
          showExplanation10()
          localStorage.setItem('calcposvelacc10', 1)
        }
        if (document.getElementById('o-calcposvelacc-103').checked) {
          document.getElementById('r-calcposvelacc-103').style.color = 'red'
          document.getElementById('r-calcposvelacc-103').innerHTML = 'Incorrect!'
          document.getElementById('r-calcposvelacc-102').style.color = 'blue'
          document.getElementById('r-calcposvelacc-102').innerHTML = 'Correct!'
          
          document.getElementById('b-calcposvelacc-102').classList.add("correct")
          document.getElementById('b-calcposvelacc-101').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-103').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-104').classList.add("incorrect")
    
          document.getElementById('sa-calcposvelacc-10').disabled = true;
          document.getElementById('o-calcposvelacc-101').disabled = true;
          document.getElementById('o-calcposvelacc-102').disabled = true;
          document.getElementById('o-calcposvelacc-103').disabled = true;
          document.getElementById('o-calcposvelacc-104').disabled = true;
          showExplanation10()
          localStorage.setItem('calcposvelacc10', 0)
        }
        if (document.getElementById('o-calcposvelacc-104').checked) {
          document.getElementById('r-calcposvelacc-104').style.color = 'red'
          document.getElementById('r-calcposvelacc-104').innerHTML = 'Incorrect!'
          document.getElementById('r-calcposvelacc-102').style.color = 'blue'
          document.getElementById('r-calcposvelacc-102').innerHTML = 'Correct!'
          
          document.getElementById('b-calcposvelacc-102').classList.add("correct")
          document.getElementById('b-calcposvelacc-101').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-103').classList.add("incorrect")
          document.getElementById('b-calcposvelacc-104').classList.add("incorrect")
    
          document.getElementById('sa-calcposvelacc-10').disabled = true;
          document.getElementById('o-calcposvelacc-101').disabled = true;
          document.getElementById('o-calcposvelacc-102').disabled = true;
          document.getElementById('o-calcposvelacc-103').disabled = true;
          document.getElementById('o-calcposvelacc-104').disabled = true;
          showExplanation10()
          localStorage.setItem('calcposvelacc10', 0)
        }
      }
    }
    