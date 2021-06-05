
  let wrisubver1But = document.getElementById('sa-wrisubver-1');
  let wrisubver2But = document.getElementById('sa-wrisubver-2');
  let wrisubver3But = document.getElementById('sa-wrisubver-3');
  let wrisubver4But = document.getElementById('sa-wrisubver-4');
  let wrisubver5But = document.getElementById('sa-wrisubver-5');
  let wrisubver6But = document.getElementById('sa-wrisubver-6');
  let wrisubver7But = document.getElementById('sa-wrisubver-7');
  let wrisubver8But = document.getElementById('sa-wrisubver-8');
  let wrisubver9But = document.getElementById('sa-wrisubver-9');
  let wrisubver10But = document.getElementById('sa-wrisubver-10');


  showExplanation1 = function() {
    document.getElementById('e-wrisubver-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-wrisubver-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-wrisubver-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-wrisubver-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-wrisubver-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-wrisubver-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-wrisubver-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-wrisubver-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-wrisubver-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-wrisubver-10').style.display = 'block';
     } 



     if (document.getElementById('sa-wrisubver-1') != null) {
      wrisubver1But.onclick = function () {
        if (document.getElementById('o-wrisubver-11').checked) {
          document.getElementById('r-wrisubver-11').style.color = 'blue'
          document.getElementById('r-wrisubver-11').innerHTML = 'Correct!'
    
          document.getElementById('b-wrisubver-11').classList.add("correct")
          document.getElementById('b-wrisubver-12').classList.add("incorrect")
          document.getElementById('b-wrisubver-13').classList.add("incorrect")
          document.getElementById('b-wrisubver-14').classList.add("incorrect")
    
          document.getElementById('sa-wrisubver-1').disabled = true;
          document.getElementById('o-wrisubver-11').disabled = true;
          document.getElementById('o-wrisubver-12').disabled = true;
          document.getElementById('o-wrisubver-13').disabled = true;
          document.getElementById('o-wrisubver-14').disabled = true;
          showExplanation1()
          localStorage.setItem('wrisubver1', 1)
        }
    
        if (document.getElementById('o-wrisubver-12').checked) {
         
          document.getElementById('r-wrisubver-12').style.color = 'red'
          document.getElementById('r-wrisubver-12').innerHTML = 'Incorrect!'
          document.getElementById('r-wrisubver-11').style.color = 'blue'
          document.getElementById('r-wrisubver-11').innerHTML = 'Correct!'
    
          document.getElementById('b-wrisubver-11').classList.add("correct")
          document.getElementById('b-wrisubver-12').classList.add("incorrect")
          document.getElementById('b-wrisubver-13').classList.add("incorrect")
          document.getElementById('b-wrisubver-14').classList.add("incorrect")
    
          document.getElementById('sa-wrisubver-1').disabled = true;
          document.getElementById('o-wrisubver-11').disabled = true;
          document.getElementById('o-wrisubver-12').disabled = true;
          document.getElementById('o-wrisubver-13').disabled = true;
          document.getElementById('o-wrisubver-14').disabled = true;
          showExplanation1()
          localStorage.setItem('wrisubver1', 0)
        }
        if (document.getElementById('o-wrisubver-13').checked) {
          document.getElementById('r-wrisubver-13').style.color = 'red'
          document.getElementById('r-wrisubver-13').innerHTML = 'Incorrect!'
          document.getElementById('r-wrisubver-11').style.color = 'blue'
          document.getElementById('r-wrisubver-11').innerHTML = 'Correct!'
          
          document.getElementById('b-wrisubver-11').classList.add("correct")
          document.getElementById('b-wrisubver-12').classList.add("incorrect")
          document.getElementById('b-wrisubver-13').classList.add("incorrect")
          document.getElementById('b-wrisubver-14').classList.add("incorrect")
    
          document.getElementById('sa-wrisubver-1').disabled = true;
          document.getElementById('o-wrisubver-11').disabled = true;
          document.getElementById('o-wrisubver-12').disabled = true;
          document.getElementById('o-wrisubver-13').disabled = true;
          document.getElementById('o-wrisubver-14').disabled = true;
          showExplanation1()
          localStorage.setItem('wrisubver1', 0)
        }
        if (document.getElementById('o-wrisubver-14').checked) {
          document.getElementById('r-wrisubver-14').style.color = 'red'
          document.getElementById('r-wrisubver-14').innerHTML = 'Incorrect!'
          document.getElementById('r-wrisubver-11').style.color = 'blue'
          document.getElementById('r-wrisubver-11').innerHTML = 'Correct!'
          
          document.getElementById('b-wrisubver-11').classList.add("correct")
          document.getElementById('b-wrisubver-12').classList.add("incorrect")
          document.getElementById('b-wrisubver-13').classList.add("incorrect")
          document.getElementById('b-wrisubver-14').classList.add("incorrect")
    
          document.getElementById('sa-wrisubver-1').disabled = true;
          document.getElementById('o-wrisubver-11').disabled = true;
          document.getElementById('o-wrisubver-12').disabled = true;
          document.getElementById('o-wrisubver-13').disabled = true;
          document.getElementById('o-wrisubver-14').disabled = true;
          showExplanation1()
          localStorage.setItem('wrisubver1', 0)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-wrisubver-2') != null) {
      wrisubver2But.onclick = function() {
        if (document.getElementById('o-wrisubver-21').checked) {
          document.getElementById('r-wrisubver-21').style.color = 'red'
          document.getElementById('r-wrisubver-21').innerHTML = 'Incorrect!'
          document.getElementById('r-wrisubver-23').style.color = 'blue'
          document.getElementById('r-wrisubver-23').innerHTML = 'Correct!'
          
          document.getElementById('b-wrisubver-23').classList.add("correct")
          document.getElementById('b-wrisubver-21').classList.add("incorrect")
          document.getElementById('b-wrisubver-22').classList.add("incorrect")
          document.getElementById('b-wrisubver-24').classList.add("incorrect")
    
          document.getElementById('sa-wrisubver-2').disabled = true;
          document.getElementById('o-wrisubver-21').disabled = true;
          document.getElementById('o-wrisubver-22').disabled = true;
          document.getElementById('o-wrisubver-23').disabled = true;
          document.getElementById('o-wrisubver-24').disabled = true;
          showExplanation2()
          localStorage.setItem('wrisubver2', 0)
        }
        if (document.getElementById('o-wrisubver-22').checked) {
          document.getElementById('r-wrisubver-22').style.color = 'red'
          document.getElementById('r-wrisubver-22').innerHTML = 'Incorrect!'
          document.getElementById('r-wrisubver-23').style.color = 'blue'
          document.getElementById('r-wrisubver-23').innerHTML = 'Correct!'
          
          document.getElementById('b-wrisubver-23').classList.add("correct")
          document.getElementById('b-wrisubver-21').classList.add("incorrect")
          document.getElementById('b-wrisubver-22').classList.add("incorrect")
          document.getElementById('b-wrisubver-24').classList.add("incorrect")
    
          document.getElementById('sa-wrisubver-2').disabled = true;
          document.getElementById('o-wrisubver-21').disabled = true;
          document.getElementById('o-wrisubver-22').disabled = true;
          document.getElementById('o-wrisubver-23').disabled = true;
          document.getElementById('o-wrisubver-24').disabled = true;
          showExplanation2()
          localStorage.setItem('wrisubver2', 0)
        }
        if (document.getElementById('o-wrisubver-23').checked) {
          document.getElementById('r-wrisubver-23').style.color = 'blue'
          document.getElementById('r-wrisubver-23').innerHTML = 'Correct!'
          
          document.getElementById('b-wrisubver-23').classList.add("correct")
          document.getElementById('b-wrisubver-21').classList.add("incorrect")
          document.getElementById('b-wrisubver-22').classList.add("incorrect")
          document.getElementById('b-wrisubver-24').classList.add("incorrect")
    
          document.getElementById('sa-wrisubver-2').disabled = true;
          document.getElementById('o-wrisubver-21').disabled = true;
          document.getElementById('o-wrisubver-22').disabled = true;
          document.getElementById('o-wrisubver-23').disabled = true;
          document.getElementById('o-wrisubver-24').disabled = true;
          showExplanation2()
          localStorage.setItem('wrisubver2', 1)
        }
        if (document.getElementById('o-wrisubver-24').checked) {
          document.getElementById('r-wrisubver-24').style.color = 'red'
          document.getElementById('r-wrisubver-24').innerHTML = 'Incorrect!'
          document.getElementById('r-wrisubver-23').style.color = 'blue'
          document.getElementById('r-wrisubver-23').innerHTML = 'Correct!'
          
          document.getElementById('b-wrisubver-23').classList.add("correct")
          document.getElementById('b-wrisubver-21').classList.add("incorrect")
          document.getElementById('b-wrisubver-22').classList.add("incorrect")
          document.getElementById('b-wrisubver-24').classList.add("incorrect")
    
          document.getElementById('sa-wrisubver-2').disabled = true;
          document.getElementById('o-wrisubver-21').disabled = true;
          document.getElementById('o-wrisubver-22').disabled = true;
          document.getElementById('o-wrisubver-23').disabled = true;
          document.getElementById('o-wrisubver-24').disabled = true;
          showExplanation2()
          localStorage.setItem('wrisubver2', 0)
        }
      }
    }
    
    if (document.getElementById('sa-wrisubver-3') != null) {
      wrisubver3But.onclick = function() {
        if (document.getElementById('o-wrisubver-31').checked) {
          document.getElementById('r-wrisubver-31').style.color = 'red'
          document.getElementById('r-wrisubver-31').innerHTML = 'Incorrect!'
          document.getElementById('r-wrisubver-32').style.color = 'blue'
          document.getElementById('r-wrisubver-32').innerHTML = 'Correct!'
          
          document.getElementById('b-wrisubver-32').classList.add("correct")
          document.getElementById('b-wrisubver-31').classList.add("incorrect")
          document.getElementById('b-wrisubver-33').classList.add("incorrect")
          document.getElementById('b-wrisubver-34').classList.add("incorrect")
    
          document.getElementById('sa-wrisubver-3').disabled = true;
          document.getElementById('o-wrisubver-31').disabled = true;
          document.getElementById('o-wrisubver-32').disabled = true;
          document.getElementById('o-wrisubver-33').disabled = true;
          document.getElementById('o-wrisubver-34').disabled = true;
          showExplanation3()
          localStorage.setItem('wrisubver3', 0)
        }
        if (document.getElementById('o-wrisubver-32').checked) {
    
          document.getElementById('r-wrisubver-32').style.color = 'blue'
          document.getElementById('r-wrisubver-32').innerHTML = 'Correct!'
          
          document.getElementById('b-wrisubver-32').classList.add("correct")
          document.getElementById('b-wrisubver-31').classList.add("incorrect")
          document.getElementById('b-wrisubver-33').classList.add("incorrect")
          document.getElementById('b-wrisubver-34').classList.add("incorrect")
    
          document.getElementById('sa-wrisubver-3').disabled = true;
          document.getElementById('o-wrisubver-31').disabled = true;
          document.getElementById('o-wrisubver-32').disabled = true;
          document.getElementById('o-wrisubver-33').disabled = true;
          document.getElementById('o-wrisubver-34').disabled = true;
          showExplanation3()
          localStorage.setItem('wrisubver3', 1)
        }
        if (document.getElementById('o-wrisubver-33').checked) {
          document.getElementById('r-wrisubver-33').style.color = 'red'
          document.getElementById('r-wrisubver-33').innerHTML = 'Incorrect!'
          document.getElementById('r-wrisubver-32').style.color = 'blue'
          document.getElementById('r-wrisubver-32').innerHTML = 'Correct!'
          
          document.getElementById('b-wrisubver-32').classList.add("correct")
          document.getElementById('b-wrisubver-31').classList.add("incorrect")
          document.getElementById('b-wrisubver-33').classList.add("incorrect")
          document.getElementById('b-wrisubver-34').classList.add("incorrect")
    
          document.getElementById('sa-wrisubver-3').disabled = true;
          document.getElementById('o-wrisubver-31').disabled = true;
          document.getElementById('o-wrisubver-32').disabled = true;
          document.getElementById('o-wrisubver-33').disabled = true;
          document.getElementById('o-wrisubver-34').disabled = true;
          showExplanation3()
          localStorage.setItem('wrisubver3', 0)
        }
        if (document.getElementById('o-wrisubver-34').checked) {
          document.getElementById('r-wrisubver-34').style.color = 'red'
          document.getElementById('r-wrisubver-34').innerHTML = 'Incorrect!'
          document.getElementById('r-wrisubver-32').style.color = 'blue'
          document.getElementById('r-wrisubver-32').innerHTML = 'Correct!'
          
          document.getElementById('b-wrisubver-32').classList.add("correct")
          document.getElementById('b-wrisubver-31').classList.add("incorrect")
          document.getElementById('b-wrisubver-33').classList.add("incorrect")
          document.getElementById('b-wrisubver-34').classList.add("incorrect")
    
          document.getElementById('sa-wrisubver-3').disabled = true;
          document.getElementById('o-wrisubver-31').disabled = true;
          document.getElementById('o-wrisubver-32').disabled = true;
          document.getElementById('o-wrisubver-33').disabled = true;
          document.getElementById('o-wrisubver-34').disabled = true;
          showExplanation3()
          localStorage.setItem('wrisubver3', 0)
        }
      }
    }
    
    if (document.getElementById('sa-wrisubver-4') != null) {
      wrisubver4But.onclick = function() {
        if (document.getElementById('o-wrisubver-41').checked) {
          document.getElementById('r-wrisubver-41').style.color = 'red'
          document.getElementById('r-wrisubver-41').innerHTML = 'Incorrect!'
          document.getElementById('r-wrisubver-44').style.color = 'blue'
          document.getElementById('r-wrisubver-44').innerHTML = 'Correct!'
          
          document.getElementById('b-wrisubver-44').classList.add("correct")
          document.getElementById('b-wrisubver-41').classList.add("incorrect")
          document.getElementById('b-wrisubver-42').classList.add("incorrect")
          document.getElementById('b-wrisubver-43').classList.add("incorrect")
    
          document.getElementById('sa-wrisubver-4').disabled = true;
          document.getElementById('o-wrisubver-41').disabled = true;
          document.getElementById('o-wrisubver-42').disabled = true;
          document.getElementById('o-wrisubver-43').disabled = true;
          document.getElementById('o-wrisubver-44').disabled = true;
          showExplanation4()
          localStorage.setItem('wrisubver4', 0)
        }
        if (document.getElementById('o-wrisubver-42').checked) {
          document.getElementById('r-wrisubver-42').style.color = 'red'
          document.getElementById('r-wrisubver-42').innerHTML = 'Incorrect!'
          document.getElementById('r-wrisubver-44').style.color = 'blue'
          document.getElementById('r-wrisubver-44').innerHTML = 'Correct!'
          
          document.getElementById('b-wrisubver-44').classList.add("correct")
          document.getElementById('b-wrisubver-41').classList.add("incorrect")
          document.getElementById('b-wrisubver-42').classList.add("incorrect")
          document.getElementById('b-wrisubver-43').classList.add("incorrect")
    
          document.getElementById('sa-wrisubver-4').disabled = true;
          document.getElementById('o-wrisubver-41').disabled = true;
          document.getElementById('o-wrisubver-42').disabled = true;
          document.getElementById('o-wrisubver-43').disabled = true;
          document.getElementById('o-wrisubver-44').disabled = true;
          showExplanation4()
          localStorage.setItem('wrisubver4', 0)
        }
        if (document.getElementById('o-wrisubver-43').checked) {
          document.getElementById('r-wrisubver-43').style.color = 'red'
          document.getElementById('r-wrisubver-43').innerHTML = 'Incorrect!'
          document.getElementById('r-wrisubver-44').style.color = 'blue'
          document.getElementById('r-wrisubver-44').innerHTML = 'Correct!'
          
          document.getElementById('b-wrisubver-44').classList.add("correct")
          document.getElementById('b-wrisubver-41').classList.add("incorrect")
          document.getElementById('b-wrisubver-42').classList.add("incorrect")
          document.getElementById('b-wrisubver-43').classList.add("incorrect")
    
          document.getElementById('sa-wrisubver-4').disabled = true;
          document.getElementById('o-wrisubver-41').disabled = true;
          document.getElementById('o-wrisubver-42').disabled = true;
          document.getElementById('o-wrisubver-43').disabled = true;
          document.getElementById('o-wrisubver-44').disabled = true;
          showExplanation4()
          localStorage.setItem('wrisubver4', 0)
        }
        if (document.getElementById('o-wrisubver-44').checked) {
          document.getElementById('r-wrisubver-44').style.color = 'blue'
          document.getElementById('r-wrisubver-44').innerHTML = 'Correct!'
          
          document.getElementById('b-wrisubver-44').classList.add("correct")
          document.getElementById('b-wrisubver-41').classList.add("incorrect")
          document.getElementById('b-wrisubver-42').classList.add("incorrect")
          document.getElementById('b-wrisubver-43').classList.add("incorrect")
    
          document.getElementById('sa-wrisubver-4').disabled = true;
          document.getElementById('o-wrisubver-41').disabled = true;
          document.getElementById('o-wrisubver-42').disabled = true;
          document.getElementById('o-wrisubver-43').disabled = true;
          document.getElementById('o-wrisubver-44').disabled = true;
          showExplanation4()
          localStorage.setItem('wrisubver4', 1)
        }
      }
    }
    
    if (document.getElementById('sa-wrisubver-5') != null) {
      wrisubver5But.onclick = function() {
        if (document.getElementById('o-wrisubver-51').checked) {
          document.getElementById('r-wrisubver-51').style.color = 'red'
          document.getElementById('r-wrisubver-51').innerHTML = 'Incorrect!'
          document.getElementById('r-wrisubver-53').style.color = 'blue'
          document.getElementById('r-wrisubver-53').innerHTML = 'Correct!'
          
          document.getElementById('b-wrisubver-53').classList.add("correct")
          document.getElementById('b-wrisubver-51').classList.add("incorrect")
          document.getElementById('b-wrisubver-52').classList.add("incorrect")
          document.getElementById('b-wrisubver-54').classList.add("incorrect")
    
          document.getElementById('sa-wrisubver-5').disabled = true;
          document.getElementById('o-wrisubver-51').disabled = true;
          document.getElementById('o-wrisubver-52').disabled = true;
          document.getElementById('o-wrisubver-53').disabled = true;
          document.getElementById('o-wrisubver-54').disabled = true;
          showExplanation5()
          localStorage.setItem('wrisubver5', 0)
        }
        if (document.getElementById('o-wrisubver-52').checked) {
          document.getElementById('r-wrisubver-52').style.color = 'red'
          document.getElementById('r-wrisubver-52').innerHTML = 'Incorrect!'
          document.getElementById('r-wrisubver-53').style.color = 'blue'
          document.getElementById('r-wrisubver-53').innerHTML = 'Correct!'
          
          document.getElementById('b-wrisubver-53').classList.add("correct")
          document.getElementById('b-wrisubver-51').classList.add("incorrect")
          document.getElementById('b-wrisubver-52').classList.add("incorrect")
          document.getElementById('b-wrisubver-54').classList.add("incorrect")
    
          document.getElementById('sa-wrisubver-5').disabled = true;
          document.getElementById('o-wrisubver-51').disabled = true;
          document.getElementById('o-wrisubver-52').disabled = true;
          document.getElementById('o-wrisubver-53').disabled = true;
          document.getElementById('o-wrisubver-54').disabled = true;
          showExplanation5()
          localStorage.setItem('wrisubver5', 0)
        }
        if (document.getElementById('o-wrisubver-53').checked) {
          document.getElementById('r-wrisubver-53').style.color = 'blue'
          document.getElementById('r-wrisubver-53').innerHTML = 'Correct!'
          
          document.getElementById('b-wrisubver-53').classList.add("correct")
          document.getElementById('b-wrisubver-51').classList.add("incorrect")
          document.getElementById('b-wrisubver-52').classList.add("incorrect")
          document.getElementById('b-wrisubver-54').classList.add("incorrect")
    
          document.getElementById('sa-wrisubver-5').disabled = true;
          document.getElementById('o-wrisubver-51').disabled = true;
          document.getElementById('o-wrisubver-52').disabled = true;
          document.getElementById('o-wrisubver-53').disabled = true;
          document.getElementById('o-wrisubver-54').disabled = true;
          showExplanation5()
          localStorage.setItem('wrisubver5', 1)
        }
        if (document.getElementById('o-wrisubver-54').checked) {
          document.getElementById('r-wrisubver-54').style.color = 'red'
          document.getElementById('r-wrisubver-54').innerHTML = 'Incorrect!'
          document.getElementById('r-wrisubver-53').style.color = 'blue'
          document.getElementById('r-wrisubver-53').innerHTML = 'Correct!'
          
          document.getElementById('b-wrisubver-53').classList.add("correct")
          document.getElementById('b-wrisubver-51').classList.add("incorrect")
          document.getElementById('b-wrisubver-52').classList.add("incorrect")
          document.getElementById('b-wrisubver-54').classList.add("incorrect")
    
          document.getElementById('sa-wrisubver-5').disabled = true;
          document.getElementById('o-wrisubver-51').disabled = true;
          document.getElementById('o-wrisubver-52').disabled = true;
          document.getElementById('o-wrisubver-53').disabled = true;
          document.getElementById('o-wrisubver-54').disabled = true;
          showExplanation5()
          localStorage.setItem('wrisubver5', 0)
        }
      }
    }
        
         
      if (document.getElementById('sa-wrisubver-6') != null) {
      wrisubver6But.onclick = function() {
        if (document.getElementById('o-wrisubver-61').checked) {
          document.getElementById('r-wrisubver-61').style.color = 'red'
          document.getElementById('r-wrisubver-61').innerHTML = 'Incorrect!'
          document.getElementById('r-wrisubver-64').style.color = 'blue'
          document.getElementById('r-wrisubver-64').innerHTML = 'Correct!'
          
          document.getElementById('b-wrisubver-64').classList.add("correct")
          document.getElementById('b-wrisubver-61').classList.add("incorrect")
          document.getElementById('b-wrisubver-62').classList.add("incorrect")
          document.getElementById('b-wrisubver-63').classList.add("incorrect")
    
          document.getElementById('sa-wrisubver-6').disabled = true;
          document.getElementById('o-wrisubver-61').disabled = true;
          document.getElementById('o-wrisubver-62').disabled = true;
          document.getElementById('o-wrisubver-63').disabled = true;
          document.getElementById('o-wrisubver-64').disabled = true;
          showExplanation6()
          localStorage.setItem('wrisubver6', 0)
        }
        if (document.getElementById('o-wrisubver-62').checked) {
          document.getElementById('r-wrisubver-62').style.color = 'red'
          document.getElementById('r-wrisubver-62').innerHTML = 'Incorrect!'
          document.getElementById('r-wrisubver-64').style.color = 'blue'
          document.getElementById('r-wrisubver-64').innerHTML = 'Correct!'
          
          document.getElementById('b-wrisubver-64').classList.add("correct")
          document.getElementById('b-wrisubver-61').classList.add("incorrect")
          document.getElementById('b-wrisubver-62').classList.add("incorrect")
          document.getElementById('b-wrisubver-63').classList.add("incorrect")
    
          document.getElementById('sa-wrisubver-6').disabled = true;
          document.getElementById('o-wrisubver-61').disabled = true;
          document.getElementById('o-wrisubver-62').disabled = true;
          document.getElementById('o-wrisubver-63').disabled = true;
          document.getElementById('o-wrisubver-64').disabled = true;
          showExplanation6()
          localStorage.setItem('wrisubver6', 0)
        }
        if (document.getElementById('o-wrisubver-63').checked) {
          document.getElementById('r-wrisubver-63').style.color = 'red'
          document.getElementById('r-wrisubver-63').innerHTML = 'Incorrect!'
          document.getElementById('r-wrisubver-64').style.color = 'blue'
          document.getElementById('r-wrisubver-64').innerHTML = 'Correct!'
          
          document.getElementById('b-wrisubver-64').classList.add("correct")
          document.getElementById('b-wrisubver-61').classList.add("incorrect")
          document.getElementById('b-wrisubver-62').classList.add("incorrect")
          document.getElementById('b-wrisubver-63').classList.add("incorrect")
    
          document.getElementById('sa-wrisubver-6').disabled = true;
          document.getElementById('o-wrisubver-61').disabled = true;
          document.getElementById('o-wrisubver-62').disabled = true;
          document.getElementById('o-wrisubver-63').disabled = true;
          document.getElementById('o-wrisubver-64').disabled = true;
          showExplanation6()
          localStorage.setItem('wrisubver6', 0)
        }
        if (document.getElementById('o-wrisubver-64').checked) {
          document.getElementById('r-wrisubver-64').style.color = 'blue'
          document.getElementById('r-wrisubver-64').innerHTML = 'Correct!'
          
          document.getElementById('b-wrisubver-64').classList.add("correct")
          document.getElementById('b-wrisubver-61').classList.add("incorrect")
          document.getElementById('b-wrisubver-62').classList.add("incorrect")
          document.getElementById('b-wrisubver-63').classList.add("incorrect")
    
          document.getElementById('sa-wrisubver-6').disabled = true;
          document.getElementById('o-wrisubver-61').disabled = true;
          document.getElementById('o-wrisubver-62').disabled = true;
          document.getElementById('o-wrisubver-63').disabled = true;
          document.getElementById('o-wrisubver-64').disabled = true;
          showExplanation6()
          localStorage.setItem('wrisubver6', 1)
        }
      }
    }
    
    if (document.getElementById('sa-wrisubver-7') != null) {
      wrisubver7But.onclick = function() {
        if (document.getElementById('o-wrisubver-71').checked) {
          document.getElementById('r-wrisubver-71').style.color = 'red'
          document.getElementById('r-wrisubver-71').innerHTML = 'Incorrect!'
          document.getElementById('r-wrisubver-74').style.color = 'blue'
          document.getElementById('r-wrisubver-74').innerHTML = 'Correct!'
          
          document.getElementById('b-wrisubver-74').classList.add("correct")
          document.getElementById('b-wrisubver-71').classList.add("incorrect")
          document.getElementById('b-wrisubver-72').classList.add("incorrect")
          document.getElementById('b-wrisubver-73').classList.add("incorrect")
    
          document.getElementById('sa-wrisubver-7').disabled = true;
          document.getElementById('o-wrisubver-71').disabled = true;
          document.getElementById('o-wrisubver-72').disabled = true;
          document.getElementById('o-wrisubver-73').disabled = true;
          document.getElementById('o-wrisubver-74').disabled = true;
          showExplanation7()
          localStorage.setItem('wrisubver7', 0)
        }
        if (document.getElementById('o-wrisubver-72').checked) {
          document.getElementById('r-wrisubver-72').style.color = 'red'
          document.getElementById('r-wrisubver-72').innerHTML = 'Incorrect!'
          document.getElementById('r-wrisubver-74').style.color = 'blue'
          document.getElementById('r-wrisubver-74').innerHTML = 'Correct!'
          
          document.getElementById('b-wrisubver-74').classList.add("correct")
          document.getElementById('b-wrisubver-71').classList.add("incorrect")
          document.getElementById('b-wrisubver-72').classList.add("incorrect")
          document.getElementById('b-wrisubver-73').classList.add("incorrect")
    
          document.getElementById('sa-wrisubver-7').disabled = true;
          document.getElementById('o-wrisubver-71').disabled = true;
          document.getElementById('o-wrisubver-72').disabled = true;
          document.getElementById('o-wrisubver-73').disabled = true;
          document.getElementById('o-wrisubver-74').disabled = true;
          showExplanation7()
          localStorage.setItem('wrisubver7', 0)
        }
        if (document.getElementById('o-wrisubver-73').checked) {
          document.getElementById('r-wrisubver-73').style.color = 'red'
          document.getElementById('r-wrisubver-73').innerHTML = 'Incorrect!'
          document.getElementById('r-wrisubver-74').style.color = 'blue'
          document.getElementById('r-wrisubver-74').innerHTML = 'Correct!'
          
          document.getElementById('b-wrisubver-74').classList.add("correct")
          document.getElementById('b-wrisubver-71').classList.add("incorrect")
          document.getElementById('b-wrisubver-72').classList.add("incorrect")
          document.getElementById('b-wrisubver-73').classList.add("incorrect")
    
          document.getElementById('sa-wrisubver-7').disabled = true;
          document.getElementById('o-wrisubver-71').disabled = true;
          document.getElementById('o-wrisubver-72').disabled = true;
          document.getElementById('o-wrisubver-73').disabled = true;
          document.getElementById('o-wrisubver-74').disabled = true;
          showExplanation7()
          localStorage.setItem('wrisubver7', 0)
        }
        if (document.getElementById('o-wrisubver-74').checked) {
          document.getElementById('r-wrisubver-74').style.color = 'blue'
          document.getElementById('r-wrisubver-74').innerHTML = 'Correct!'
          
          document.getElementById('b-wrisubver-74').classList.add("correct")
          document.getElementById('b-wrisubver-71').classList.add("incorrect")
          document.getElementById('b-wrisubver-72').classList.add("incorrect")
          document.getElementById('b-wrisubver-73').classList.add("incorrect")
    
          document.getElementById('sa-wrisubver-7').disabled = true;
          document.getElementById('o-wrisubver-71').disabled = true;
          document.getElementById('o-wrisubver-72').disabled = true;
          document.getElementById('o-wrisubver-73').disabled = true;
          document.getElementById('o-wrisubver-74').disabled = true;
          showExplanation7()
          localStorage.setItem('wrisubver7', 1)
        }
      }
    }
    
    
    if (document.getElementById('sa-wrisubver-8') != null) {
      wrisubver8But.onclick = function() {
        if (document.getElementById('o-wrisubver-81').checked) {
          document.getElementById('r-wrisubver-81').style.color = 'red'
          document.getElementById('r-wrisubver-81').innerHTML = 'Incorrect!'
          document.getElementById('r-wrisubver-82').style.color = 'blue'
          document.getElementById('r-wrisubver-82').innerHTML = 'Correct!'
          
          document.getElementById('b-wrisubver-82').classList.add("correct")
          document.getElementById('b-wrisubver-81').classList.add("incorrect")
          document.getElementById('b-wrisubver-83').classList.add("incorrect")
          document.getElementById('b-wrisubver-84').classList.add("incorrect")
    
          document.getElementById('sa-wrisubver-8').disabled = true;
          document.getElementById('o-wrisubver-81').disabled = true;
          document.getElementById('o-wrisubver-82').disabled = true;
          document.getElementById('o-wrisubver-83').disabled = true;
          document.getElementById('o-wrisubver-84').disabled = true;
          showExplanation8()
          localStorage.setItem('wrisubver8', 0)
        }
        if (document.getElementById('o-wrisubver-82').checked) {
          document.getElementById('r-wrisubver-82').style.color = 'blue'
          document.getElementById('r-wrisubver-82').innerHTML = 'Correct!'
          
          document.getElementById('b-wrisubver-82').classList.add("correct")
          document.getElementById('b-wrisubver-81').classList.add("incorrect")
          document.getElementById('b-wrisubver-83').classList.add("incorrect")
          document.getElementById('b-wrisubver-84').classList.add("incorrect")
    
          document.getElementById('sa-wrisubver-8').disabled = true;
          document.getElementById('o-wrisubver-81').disabled = true;
          document.getElementById('o-wrisubver-82').disabled = true;
          document.getElementById('o-wrisubver-83').disabled = true;
          document.getElementById('o-wrisubver-84').disabled = true;
          showExplanation8()
          localStorage.setItem('wrisubver8', 1)
        }
        if (document.getElementById('o-wrisubver-83').checked) {
          document.getElementById('r-wrisubver-83').style.color = 'red'
          document.getElementById('r-wrisubver-83').innerHTML = 'Incorrect!'
          document.getElementById('r-wrisubver-82').style.color = 'blue'
          document.getElementById('r-wrisubver-82').innerHTML = 'Correct!'
          
          document.getElementById('b-wrisubver-82').classList.add("correct")
          document.getElementById('b-wrisubver-81').classList.add("incorrect")
          document.getElementById('b-wrisubver-83').classList.add("incorrect")
          document.getElementById('b-wrisubver-84').classList.add("incorrect")
    
          document.getElementById('sa-wrisubver-8').disabled = true;
          document.getElementById('o-wrisubver-81').disabled = true;
          document.getElementById('o-wrisubver-82').disabled = true;
          document.getElementById('o-wrisubver-83').disabled = true;
          document.getElementById('o-wrisubver-84').disabled = true;
          showExplanation8()
          localStorage.setItem('wrisubver8', 0)
        }
        if (document.getElementById('o-wrisubver-84').checked) {
          document.getElementById('r-wrisubver-84').style.color = 'red'
          document.getElementById('r-wrisubver-84').innerHTML = 'Incorrect!'
          document.getElementById('r-wrisubver-82').style.color = 'blue'
          document.getElementById('r-wrisubver-82').innerHTML = 'Correct!'
          
          document.getElementById('b-wrisubver-82').classList.add("correct")
          document.getElementById('b-wrisubver-81').classList.add("incorrect")
          document.getElementById('b-wrisubver-83').classList.add("incorrect")
          document.getElementById('b-wrisubver-84').classList.add("incorrect")
    
          document.getElementById('sa-wrisubver-8').disabled = true;
          document.getElementById('o-wrisubver-81').disabled = true;
          document.getElementById('o-wrisubver-82').disabled = true;
          document.getElementById('o-wrisubver-83').disabled = true;
          document.getElementById('o-wrisubver-84').disabled = true;
          showExplanation8()
          localStorage.setItem('wrisubver8', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-wrisubver-9') != null) {
      wrisubver9But.onclick = function() {
        if (document.getElementById('o-wrisubver-91').checked) {
          document.getElementById('r-wrisubver-91').style.color = 'red'
          document.getElementById('r-wrisubver-91').innerHTML = 'Incorrect!'
          document.getElementById('r-wrisubver-94').style.color = 'blue'
          document.getElementById('r-wrisubver-94').innerHTML = 'Correct!'
          
          document.getElementById('b-wrisubver-94').classList.add("correct")
          document.getElementById('b-wrisubver-91').classList.add("incorrect")
          document.getElementById('b-wrisubver-92').classList.add("incorrect")
          document.getElementById('b-wrisubver-93').classList.add("incorrect")
    
          document.getElementById('sa-wrisubver-9').disabled = true;
          document.getElementById('o-wrisubver-91').disabled = true;
          document.getElementById('o-wrisubver-92').disabled = true;
          document.getElementById('o-wrisubver-93').disabled = true;
          document.getElementById('o-wrisubver-94').disabled = true;
          showExplanation9()
          localStorage.setItem('wrisubver9', 0)
        }
        if (document.getElementById('o-wrisubver-92').checked) {
          document.getElementById('r-wrisubver-91').style.color = 'red'
          document.getElementById('r-wrisubver-91').innerHTML = 'Incorrect!'
          document.getElementById('r-wrisubver-94').style.color = 'blue'
          document.getElementById('r-wrisubver-94').innerHTML = 'Correct!'
          
          document.getElementById('b-wrisubver-94').classList.add("correct")
          document.getElementById('b-wrisubver-91').classList.add("incorrect")
          document.getElementById('b-wrisubver-92').classList.add("incorrect")
          document.getElementById('b-wrisubver-93').classList.add("incorrect")
    
          document.getElementById('sa-wrisubver-9').disabled = true;
          document.getElementById('o-wrisubver-91').disabled = true;
          document.getElementById('o-wrisubver-92').disabled = true;
          document.getElementById('o-wrisubver-93').disabled = true;
          document.getElementById('o-wrisubver-94').disabled = true;
          showExplanation9()
          localStorage.setItem('wrisubver9', 0)
        }
        if (document.getElementById('o-wrisubver-93').checked) {
          document.getElementById('r-wrisubver-91').style.color = 'red'
          document.getElementById('r-wrisubver-91').innerHTML = 'Incorrect!'
          document.getElementById('r-wrisubver-94').style.color = 'blue'
          document.getElementById('r-wrisubver-94').innerHTML = 'Correct!'
          
          document.getElementById('b-wrisubver-94').classList.add("correct")
          document.getElementById('b-wrisubver-91').classList.add("incorrect")
          document.getElementById('b-wrisubver-92').classList.add("incorrect")
          document.getElementById('b-wrisubver-93').classList.add("incorrect")
    
          document.getElementById('sa-wrisubver-9').disabled = true;
          document.getElementById('o-wrisubver-91').disabled = true;
          document.getElementById('o-wrisubver-92').disabled = true;
          document.getElementById('o-wrisubver-93').disabled = true;
          document.getElementById('o-wrisubver-94').disabled = true;
          showExplanation9()
          localStorage.setItem('wrisubver9', 0)
        }
        if (document.getElementById('o-wrisubver-94').checked) {
          document.getElementById('r-wrisubver-94').style.color = 'blue'
          document.getElementById('r-wrisubver-94').innerHTML = 'Correct!'
          
          document.getElementById('b-wrisubver-94').classList.add("correct")
          document.getElementById('b-wrisubver-91').classList.add("incorrect")
          document.getElementById('b-wrisubver-92').classList.add("incorrect")
          document.getElementById('b-wrisubver-93').classList.add("incorrect")
    
          document.getElementById('sa-wrisubver-9').disabled = true;
          document.getElementById('o-wrisubver-91').disabled = true;
          document.getElementById('o-wrisubver-92').disabled = true;
          document.getElementById('o-wrisubver-93').disabled = true;
          document.getElementById('o-wrisubver-94').disabled = true;
          showExplanation9()
          localStorage.setItem('wrisubver9', 1)
        }
      }
    }
    
    if (document.getElementById('sa-wrisubver-10') != null) {
      wrisubver10But.onclick = function() {
        if (document.getElementById('o-wrisubver-101').checked) {
          document.getElementById('r-wrisubver-101').style.color = 'red'
          document.getElementById('r-wrisubver-101').innerHTML = 'Incorrect!'
          document.getElementById('r-wrisubver-102').style.color = 'blue'
          document.getElementById('r-wrisubver-102').innerHTML = 'Correct!'
          
          document.getElementById('b-wrisubver-102').classList.add("correct")
          document.getElementById('b-wrisubver-101').classList.add("incorrect")
          document.getElementById('b-wrisubver-103').classList.add("incorrect")
          document.getElementById('b-wrisubver-104').classList.add("incorrect")
    
          document.getElementById('sa-wrisubver-10').disabled = true;
          document.getElementById('o-wrisubver-101').disabled = true;
          document.getElementById('o-wrisubver-102').disabled = true;
          document.getElementById('o-wrisubver-103').disabled = true;
          document.getElementById('o-wrisubver-104').disabled = true;
          showExplanation10()
          localStorage.setItem('wrisubver10', 0)
        }
        if (document.getElementById('o-wrisubver-102').checked) {
          document.getElementById('r-wrisubver-102').style.color = 'blue'
          document.getElementById('r-wrisubver-102').innerHTML = 'Correct!'
          
          document.getElementById('b-wrisubver-102').classList.add("correct")
          document.getElementById('b-wrisubver-101').classList.add("incorrect")
          document.getElementById('b-wrisubver-103').classList.add("incorrect")
          document.getElementById('b-wrisubver-104').classList.add("incorrect")
    
          document.getElementById('sa-wrisubver-10').disabled = true;
          document.getElementById('o-wrisubver-101').disabled = true;
          document.getElementById('o-wrisubver-102').disabled = true;
          document.getElementById('o-wrisubver-103').disabled = true;
          document.getElementById('o-wrisubver-104').disabled = true;
          showExplanation10()
          localStorage.setItem('wrisubver10', 1)
        }
        if (document.getElementById('o-wrisubver-103').checked) {
          document.getElementById('r-wrisubver-103').style.color = 'red'
          document.getElementById('r-wrisubver-103').innerHTML = 'Incorrect!'
          document.getElementById('r-wrisubver-102').style.color = 'blue'
          document.getElementById('r-wrisubver-102').innerHTML = 'Correct!'
          
          document.getElementById('b-wrisubver-102').classList.add("correct")
          document.getElementById('b-wrisubver-101').classList.add("incorrect")
          document.getElementById('b-wrisubver-103').classList.add("incorrect")
          document.getElementById('b-wrisubver-104').classList.add("incorrect")
    
          document.getElementById('sa-wrisubver-10').disabled = true;
          document.getElementById('o-wrisubver-101').disabled = true;
          document.getElementById('o-wrisubver-102').disabled = true;
          document.getElementById('o-wrisubver-103').disabled = true;
          document.getElementById('o-wrisubver-104').disabled = true;
          showExplanation10()
          localStorage.setItem('wrisubver10', 0)
        }
        if (document.getElementById('o-wrisubver-104').checked) {
          document.getElementById('r-wrisubver-104').style.color = 'red'
          document.getElementById('r-wrisubver-104').innerHTML = 'Incorrect!'
          document.getElementById('r-wrisubver-102').style.color = 'blue'
          document.getElementById('r-wrisubver-102').innerHTML = 'Correct!'
          
          document.getElementById('b-wrisubver-102').classList.add("correct")
          document.getElementById('b-wrisubver-101').classList.add("incorrect")
          document.getElementById('b-wrisubver-103').classList.add("incorrect")
          document.getElementById('b-wrisubver-104').classList.add("incorrect")
    
          document.getElementById('sa-wrisubver-10').disabled = true;
          document.getElementById('o-wrisubver-101').disabled = true;
          document.getElementById('o-wrisubver-102').disabled = true;
          document.getElementById('o-wrisubver-103').disabled = true;
          document.getElementById('o-wrisubver-104').disabled = true;
          showExplanation10()
          localStorage.setItem('wrisubver10', 0)
        }
      }
    }
    