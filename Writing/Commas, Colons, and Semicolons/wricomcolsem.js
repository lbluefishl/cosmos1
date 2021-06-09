
  let wricomcolsem1But = document.getElementById('sa-wricomcolsem-1');
  let wricomcolsem2But = document.getElementById('sa-wricomcolsem-2');
  let wricomcolsem3But = document.getElementById('sa-wricomcolsem-3');
  let wricomcolsem4But = document.getElementById('sa-wricomcolsem-4');
  let wricomcolsem5But = document.getElementById('sa-wricomcolsem-5');
  let wricomcolsem6But = document.getElementById('sa-wricomcolsem-6');
  let wricomcolsem7But = document.getElementById('sa-wricomcolsem-7');
  let wricomcolsem8But = document.getElementById('sa-wricomcolsem-8');
  let wricomcolsem9But = document.getElementById('sa-wricomcolsem-9');
  let wricomcolsem10But = document.getElementById('sa-wricomcolsem-10');


  showExplanation1 = function() {
    document.getElementById('e-wricomcolsem-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-wricomcolsem-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-wricomcolsem-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-wricomcolsem-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-wricomcolsem-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-wricomcolsem-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-wricomcolsem-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-wricomcolsem-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-wricomcolsem-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-wricomcolsem-10').style.display = 'block';
     } 



     if (document.getElementById('sa-wricomcolsem-1') != null) {
      wricomcolsem1But.onclick = function () {
        if (document.getElementById('o-wricomcolsem-11').checked) {
          document.getElementById('r-wricomcolsem-11').style.color = 'blue'
          document.getElementById('r-wricomcolsem-11').innerHTML = 'Correct!'
    
          document.getElementById('b-wricomcolsem-11').classList.add("correct")
          document.getElementById('b-wricomcolsem-12').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-13').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-14').classList.add("incorrect")
    
          document.getElementById('sa-wricomcolsem-1').disabled = true;
          document.getElementById('o-wricomcolsem-11').disabled = true;
          document.getElementById('o-wricomcolsem-12').disabled = true;
          document.getElementById('o-wricomcolsem-13').disabled = true;
          document.getElementById('o-wricomcolsem-14').disabled = true;
          showExplanation1()
          localStorage.setItem('wricomcolsem1', 1)
        }
    
        if (document.getElementById('o-wricomcolsem-12').checked) {
         
          document.getElementById('r-wricomcolsem-12').style.color = 'red'
          document.getElementById('r-wricomcolsem-12').innerHTML = 'Incorrect!'
          document.getElementById('r-wricomcolsem-11').style.color = 'blue'
          document.getElementById('r-wricomcolsem-11').innerHTML = 'Correct!'
    
          document.getElementById('b-wricomcolsem-11').classList.add("correct")
          document.getElementById('b-wricomcolsem-12').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-13').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-14').classList.add("incorrect")
    
          document.getElementById('sa-wricomcolsem-1').disabled = true;
          document.getElementById('o-wricomcolsem-11').disabled = true;
          document.getElementById('o-wricomcolsem-12').disabled = true;
          document.getElementById('o-wricomcolsem-13').disabled = true;
          document.getElementById('o-wricomcolsem-14').disabled = true;
          showExplanation1()
          localStorage.setItem('wricomcolsem1', 0)
        }
        if (document.getElementById('o-wricomcolsem-13').checked) {
          document.getElementById('r-wricomcolsem-13').style.color = 'red'
          document.getElementById('r-wricomcolsem-13').innerHTML = 'Incorrect!'
          document.getElementById('r-wricomcolsem-11').style.color = 'blue'
          document.getElementById('r-wricomcolsem-11').innerHTML = 'Correct!'
          
          document.getElementById('b-wricomcolsem-11').classList.add("correct")
          document.getElementById('b-wricomcolsem-12').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-13').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-14').classList.add("incorrect")
    
          document.getElementById('sa-wricomcolsem-1').disabled = true;
          document.getElementById('o-wricomcolsem-11').disabled = true;
          document.getElementById('o-wricomcolsem-12').disabled = true;
          document.getElementById('o-wricomcolsem-13').disabled = true;
          document.getElementById('o-wricomcolsem-14').disabled = true;
          showExplanation1()
          localStorage.setItem('wricomcolsem1', 0)
        }
        if (document.getElementById('o-wricomcolsem-14').checked) {
          document.getElementById('r-wricomcolsem-14').style.color = 'red'
          document.getElementById('r-wricomcolsem-14').innerHTML = 'Incorrect!'
          document.getElementById('r-wricomcolsem-11').style.color = 'blue'
          document.getElementById('r-wricomcolsem-11').innerHTML = 'Correct!'
          
          document.getElementById('b-wricomcolsem-11').classList.add("correct")
          document.getElementById('b-wricomcolsem-12').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-13').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-14').classList.add("incorrect")
    
          document.getElementById('sa-wricomcolsem-1').disabled = true;
          document.getElementById('o-wricomcolsem-11').disabled = true;
          document.getElementById('o-wricomcolsem-12').disabled = true;
          document.getElementById('o-wricomcolsem-13').disabled = true;
          document.getElementById('o-wricomcolsem-14').disabled = true;
          showExplanation1()
          localStorage.setItem('wricomcolsem1', 0)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-wricomcolsem-2') != null) {
      wricomcolsem2But.onclick = function() {
        if (document.getElementById('o-wricomcolsem-21').checked) {
          document.getElementById('r-wricomcolsem-21').style.color = 'red'
          document.getElementById('r-wricomcolsem-21').innerHTML = 'Incorrect!'
          document.getElementById('r-wricomcolsem-22').style.color = 'blue'
          document.getElementById('r-wricomcolsem-22').innerHTML = 'Correct!'
          
          document.getElementById('b-wricomcolsem-22').classList.add("correct")
          document.getElementById('b-wricomcolsem-21').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-23').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-24').classList.add("incorrect")
    
          document.getElementById('sa-wricomcolsem-2').disabled = true;
          document.getElementById('o-wricomcolsem-21').disabled = true;
          document.getElementById('o-wricomcolsem-22').disabled = true;
          document.getElementById('o-wricomcolsem-23').disabled = true;
          document.getElementById('o-wricomcolsem-24').disabled = true;
          showExplanation2()
          localStorage.setItem('wricomcolsem2', 0)
        }
        if (document.getElementById('o-wricomcolsem-22').checked) {
          document.getElementById('r-wricomcolsem-22').style.color = 'blue'
          document.getElementById('r-wricomcolsem-22').innerHTML = 'Correct!'
          
          document.getElementById('b-wricomcolsem-22').classList.add("correct")
          document.getElementById('b-wricomcolsem-21').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-23').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-24').classList.add("incorrect")
    
          document.getElementById('sa-wricomcolsem-2').disabled = true;
          document.getElementById('o-wricomcolsem-21').disabled = true;
          document.getElementById('o-wricomcolsem-22').disabled = true;
          document.getElementById('o-wricomcolsem-23').disabled = true;
          document.getElementById('o-wricomcolsem-24').disabled = true;
          showExplanation2()
          localStorage.setItem('wricomcolsem2', 1)
        }
        if (document.getElementById('o-wricomcolsem-23').checked) {
          document.getElementById('r-wricomcolsem-23').style.color = 'red'
          document.getElementById('r-wricomcolsem-23').innerHTML = 'Incorrect!'
          document.getElementById('r-wricomcolsem-22').style.color = 'blue'
          document.getElementById('r-wricomcolsem-22').innerHTML = 'Correct!'
          
          document.getElementById('b-wricomcolsem-22').classList.add("correct")
          document.getElementById('b-wricomcolsem-21').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-23').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-24').classList.add("incorrect")
    
          document.getElementById('sa-wricomcolsem-2').disabled = true;
          document.getElementById('o-wricomcolsem-21').disabled = true;
          document.getElementById('o-wricomcolsem-22').disabled = true;
          document.getElementById('o-wricomcolsem-23').disabled = true;
          document.getElementById('o-wricomcolsem-24').disabled = true;
          showExplanation2()
          localStorage.setItem('wricomcolsem2', 0)
        }
        if (document.getElementById('o-wricomcolsem-24').checked) {
          document.getElementById('r-wricomcolsem-24').style.color = 'red'
          document.getElementById('r-wricomcolsem-24').innerHTML = 'Incorrect!'
          document.getElementById('r-wricomcolsem-22').style.color = 'blue'
          document.getElementById('r-wricomcolsem-22').innerHTML = 'Correct!'
          
          document.getElementById('b-wricomcolsem-22').classList.add("correct")
          document.getElementById('b-wricomcolsem-21').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-23').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-24').classList.add("incorrect")
    
          document.getElementById('sa-wricomcolsem-2').disabled = true;
          document.getElementById('o-wricomcolsem-21').disabled = true;
          document.getElementById('o-wricomcolsem-22').disabled = true;
          document.getElementById('o-wricomcolsem-23').disabled = true;
          document.getElementById('o-wricomcolsem-24').disabled = true;
          showExplanation2()
          localStorage.setItem('wricomcolsem2', 0)
        }
      }
    }
    
    if (document.getElementById('sa-wricomcolsem-3') != null) {
      wricomcolsem3But.onclick = function() {
        if (document.getElementById('o-wricomcolsem-31').checked) {
          document.getElementById('r-wricomcolsem-31').style.color = 'red'
          document.getElementById('r-wricomcolsem-31').innerHTML = 'Incorrect!'
          document.getElementById('r-wricomcolsem-32').style.color = 'blue'
          document.getElementById('r-wricomcolsem-32').innerHTML = 'Correct!'
          
          document.getElementById('b-wricomcolsem-32').classList.add("correct")
          document.getElementById('b-wricomcolsem-31').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-33').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-34').classList.add("incorrect")
    
          document.getElementById('sa-wricomcolsem-3').disabled = true;
          document.getElementById('o-wricomcolsem-31').disabled = true;
          document.getElementById('o-wricomcolsem-32').disabled = true;
          document.getElementById('o-wricomcolsem-33').disabled = true;
          document.getElementById('o-wricomcolsem-34').disabled = true;
          showExplanation3()
          localStorage.setItem('wricomcolsem3', 0)
        }
        if (document.getElementById('o-wricomcolsem-32').checked) {
    
          document.getElementById('r-wricomcolsem-32').style.color = 'blue'
          document.getElementById('r-wricomcolsem-32').innerHTML = 'Correct!'
          
          document.getElementById('b-wricomcolsem-32').classList.add("correct")
          document.getElementById('b-wricomcolsem-31').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-33').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-34').classList.add("incorrect")
    
          document.getElementById('sa-wricomcolsem-3').disabled = true;
          document.getElementById('o-wricomcolsem-31').disabled = true;
          document.getElementById('o-wricomcolsem-32').disabled = true;
          document.getElementById('o-wricomcolsem-33').disabled = true;
          document.getElementById('o-wricomcolsem-34').disabled = true;
          showExplanation3()
          localStorage.setItem('wricomcolsem3', 1)
        }
        if (document.getElementById('o-wricomcolsem-33').checked) {
          document.getElementById('r-wricomcolsem-33').style.color = 'red'
          document.getElementById('r-wricomcolsem-33').innerHTML = 'Incorrect!'
          document.getElementById('r-wricomcolsem-32').style.color = 'blue'
          document.getElementById('r-wricomcolsem-32').innerHTML = 'Correct!'
          
          document.getElementById('b-wricomcolsem-32').classList.add("correct")
          document.getElementById('b-wricomcolsem-31').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-33').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-34').classList.add("incorrect")
    
          document.getElementById('sa-wricomcolsem-3').disabled = true;
          document.getElementById('o-wricomcolsem-31').disabled = true;
          document.getElementById('o-wricomcolsem-32').disabled = true;
          document.getElementById('o-wricomcolsem-33').disabled = true;
          document.getElementById('o-wricomcolsem-34').disabled = true;
          showExplanation3()
          localStorage.setItem('wricomcolsem3', 0)
        }
        if (document.getElementById('o-wricomcolsem-34').checked) {
          document.getElementById('r-wricomcolsem-34').style.color = 'red'
          document.getElementById('r-wricomcolsem-34').innerHTML = 'Incorrect!'
          document.getElementById('r-wricomcolsem-32').style.color = 'blue'
          document.getElementById('r-wricomcolsem-32').innerHTML = 'Correct!'
          
          document.getElementById('b-wricomcolsem-32').classList.add("correct")
          document.getElementById('b-wricomcolsem-31').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-33').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-34').classList.add("incorrect")
    
          document.getElementById('sa-wricomcolsem-3').disabled = true;
          document.getElementById('o-wricomcolsem-31').disabled = true;
          document.getElementById('o-wricomcolsem-32').disabled = true;
          document.getElementById('o-wricomcolsem-33').disabled = true;
          document.getElementById('o-wricomcolsem-34').disabled = true;
          showExplanation3()
          localStorage.setItem('wricomcolsem3', 0)
        }
      }
    }
    
    if (document.getElementById('sa-wricomcolsem-4') != null) {
      wricomcolsem4But.onclick = function() {
        if (document.getElementById('o-wricomcolsem-41').checked) {
          document.getElementById('r-wricomcolsem-41').style.color = 'red'
          document.getElementById('r-wricomcolsem-41').innerHTML = 'Incorrect!'
          document.getElementById('r-wricomcolsem-44').style.color = 'blue'
          document.getElementById('r-wricomcolsem-44').innerHTML = 'Correct!'
          
          document.getElementById('b-wricomcolsem-44').classList.add("correct")
          document.getElementById('b-wricomcolsem-41').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-42').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-43').classList.add("incorrect")
    
          document.getElementById('sa-wricomcolsem-4').disabled = true;
          document.getElementById('o-wricomcolsem-41').disabled = true;
          document.getElementById('o-wricomcolsem-42').disabled = true;
          document.getElementById('o-wricomcolsem-43').disabled = true;
          document.getElementById('o-wricomcolsem-44').disabled = true;
          showExplanation4()
          localStorage.setItem('wricomcolsem4', 0)
        }
        if (document.getElementById('o-wricomcolsem-42').checked) {
          document.getElementById('r-wricomcolsem-42').style.color = 'red'
          document.getElementById('r-wricomcolsem-42').innerHTML = 'Incorrect!'
          document.getElementById('r-wricomcolsem-44').style.color = 'blue'
          document.getElementById('r-wricomcolsem-44').innerHTML = 'Correct!'
          
          document.getElementById('b-wricomcolsem-44').classList.add("correct")
          document.getElementById('b-wricomcolsem-41').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-42').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-43').classList.add("incorrect")
    
          document.getElementById('sa-wricomcolsem-4').disabled = true;
          document.getElementById('o-wricomcolsem-41').disabled = true;
          document.getElementById('o-wricomcolsem-42').disabled = true;
          document.getElementById('o-wricomcolsem-43').disabled = true;
          document.getElementById('o-wricomcolsem-44').disabled = true;
          showExplanation4()
          localStorage.setItem('wricomcolsem4', 0)
        }
        if (document.getElementById('o-wricomcolsem-43').checked) {
          document.getElementById('r-wricomcolsem-43').style.color = 'red'
          document.getElementById('r-wricomcolsem-43').innerHTML = 'Incorrect!'
          document.getElementById('r-wricomcolsem-44').style.color = 'blue'
          document.getElementById('r-wricomcolsem-44').innerHTML = 'Correct!'
          
          document.getElementById('b-wricomcolsem-44').classList.add("correct")
          document.getElementById('b-wricomcolsem-41').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-42').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-43').classList.add("incorrect")
    
          document.getElementById('sa-wricomcolsem-4').disabled = true;
          document.getElementById('o-wricomcolsem-41').disabled = true;
          document.getElementById('o-wricomcolsem-42').disabled = true;
          document.getElementById('o-wricomcolsem-43').disabled = true;
          document.getElementById('o-wricomcolsem-44').disabled = true;
          showExplanation4()
          localStorage.setItem('wricomcolsem4', 0)
        }
        if (document.getElementById('o-wricomcolsem-44').checked) {
          document.getElementById('r-wricomcolsem-44').style.color = 'blue'
          document.getElementById('r-wricomcolsem-44').innerHTML = 'Correct!'
          
          document.getElementById('b-wricomcolsem-44').classList.add("correct")
          document.getElementById('b-wricomcolsem-41').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-42').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-43').classList.add("incorrect")
    
          document.getElementById('sa-wricomcolsem-4').disabled = true;
          document.getElementById('o-wricomcolsem-41').disabled = true;
          document.getElementById('o-wricomcolsem-42').disabled = true;
          document.getElementById('o-wricomcolsem-43').disabled = true;
          document.getElementById('o-wricomcolsem-44').disabled = true;
          showExplanation4()
          localStorage.setItem('wricomcolsem4', 1)
        }
      }
    }
    
    if (document.getElementById('sa-wricomcolsem-5') != null) {
      wricomcolsem5But.onclick = function() {
        if (document.getElementById('o-wricomcolsem-51').checked) {
          document.getElementById('r-wricomcolsem-51').style.color = 'red'
          document.getElementById('r-wricomcolsem-51').innerHTML = 'Incorrect!'
          document.getElementById('r-wricomcolsem-53').style.color = 'blue'
          document.getElementById('r-wricomcolsem-53').innerHTML = 'Correct!'
          
          document.getElementById('b-wricomcolsem-53').classList.add("correct")
          document.getElementById('b-wricomcolsem-51').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-52').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-54').classList.add("incorrect")
    
          document.getElementById('sa-wricomcolsem-5').disabled = true;
          document.getElementById('o-wricomcolsem-51').disabled = true;
          document.getElementById('o-wricomcolsem-52').disabled = true;
          document.getElementById('o-wricomcolsem-53').disabled = true;
          document.getElementById('o-wricomcolsem-54').disabled = true;
          showExplanation5()
          localStorage.setItem('wricomcolsem5', 0)
        }
        if (document.getElementById('o-wricomcolsem-52').checked) {
          document.getElementById('r-wricomcolsem-52').style.color = 'red'
          document.getElementById('r-wricomcolsem-52').innerHTML = 'Incorrect!'
          document.getElementById('r-wricomcolsem-53').style.color = 'blue'
          document.getElementById('r-wricomcolsem-53').innerHTML = 'Correct!'
          
          document.getElementById('b-wricomcolsem-53').classList.add("correct")
          document.getElementById('b-wricomcolsem-51').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-52').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-54').classList.add("incorrect")
    
          document.getElementById('sa-wricomcolsem-5').disabled = true;
          document.getElementById('o-wricomcolsem-51').disabled = true;
          document.getElementById('o-wricomcolsem-52').disabled = true;
          document.getElementById('o-wricomcolsem-53').disabled = true;
          document.getElementById('o-wricomcolsem-54').disabled = true;
          showExplanation5()
          localStorage.setItem('wricomcolsem5', 0)
        }
        if (document.getElementById('o-wricomcolsem-53').checked) {
          document.getElementById('r-wricomcolsem-53').style.color = 'blue'
          document.getElementById('r-wricomcolsem-53').innerHTML = 'Correct!'
          
          document.getElementById('b-wricomcolsem-53').classList.add("correct")
          document.getElementById('b-wricomcolsem-51').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-52').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-54').classList.add("incorrect")
    
          document.getElementById('sa-wricomcolsem-5').disabled = true;
          document.getElementById('o-wricomcolsem-51').disabled = true;
          document.getElementById('o-wricomcolsem-52').disabled = true;
          document.getElementById('o-wricomcolsem-53').disabled = true;
          document.getElementById('o-wricomcolsem-54').disabled = true;
          showExplanation5()
          localStorage.setItem('wricomcolsem5', 1)
        }
        if (document.getElementById('o-wricomcolsem-54').checked) {
          document.getElementById('r-wricomcolsem-54').style.color = 'red'
          document.getElementById('r-wricomcolsem-54').innerHTML = 'Incorrect!'
          document.getElementById('r-wricomcolsem-53').style.color = 'blue'
          document.getElementById('r-wricomcolsem-53').innerHTML = 'Correct!'
          
          document.getElementById('b-wricomcolsem-53').classList.add("correct")
          document.getElementById('b-wricomcolsem-51').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-52').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-54').classList.add("incorrect")
    
          document.getElementById('sa-wricomcolsem-5').disabled = true;
          document.getElementById('o-wricomcolsem-51').disabled = true;
          document.getElementById('o-wricomcolsem-52').disabled = true;
          document.getElementById('o-wricomcolsem-53').disabled = true;
          document.getElementById('o-wricomcolsem-54').disabled = true;
          showExplanation5()
          localStorage.setItem('wricomcolsem5', 0)
        }
      }
    }
        
         
      if (document.getElementById('sa-wricomcolsem-6') != null) {
      wricomcolsem6But.onclick = function() {
        if (document.getElementById('o-wricomcolsem-61').checked) {
          document.getElementById('r-wricomcolsem-61').style.color = 'red'
          document.getElementById('r-wricomcolsem-61').innerHTML = 'Incorrect!'
          document.getElementById('r-wricomcolsem-64').style.color = 'blue'
          document.getElementById('r-wricomcolsem-64').innerHTML = 'Correct!'
          
          document.getElementById('b-wricomcolsem-64').classList.add("correct")
          document.getElementById('b-wricomcolsem-61').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-62').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-63').classList.add("incorrect")
    
          document.getElementById('sa-wricomcolsem-6').disabled = true;
          document.getElementById('o-wricomcolsem-61').disabled = true;
          document.getElementById('o-wricomcolsem-62').disabled = true;
          document.getElementById('o-wricomcolsem-63').disabled = true;
          document.getElementById('o-wricomcolsem-64').disabled = true;
          showExplanation6()
          localStorage.setItem('wricomcolsem6', 0)
        }
        if (document.getElementById('o-wricomcolsem-62').checked) {
          document.getElementById('r-wricomcolsem-62').style.color = 'red'
          document.getElementById('r-wricomcolsem-62').innerHTML = 'Incorrect!'
          document.getElementById('r-wricomcolsem-64').style.color = 'blue'
          document.getElementById('r-wricomcolsem-64').innerHTML = 'Correct!'
          
          document.getElementById('b-wricomcolsem-64').classList.add("correct")
          document.getElementById('b-wricomcolsem-61').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-62').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-63').classList.add("incorrect")
    
          document.getElementById('sa-wricomcolsem-6').disabled = true;
          document.getElementById('o-wricomcolsem-61').disabled = true;
          document.getElementById('o-wricomcolsem-62').disabled = true;
          document.getElementById('o-wricomcolsem-63').disabled = true;
          document.getElementById('o-wricomcolsem-64').disabled = true;
          showExplanation6()
          localStorage.setItem('wricomcolsem6', 0)
        }
        if (document.getElementById('o-wricomcolsem-63').checked) {
          document.getElementById('r-wricomcolsem-63').style.color = 'red'
          document.getElementById('r-wricomcolsem-63').innerHTML = 'Incorrect!'
          document.getElementById('r-wricomcolsem-64').style.color = 'blue'
          document.getElementById('r-wricomcolsem-64').innerHTML = 'Correct!'
          
          document.getElementById('b-wricomcolsem-64').classList.add("correct")
          document.getElementById('b-wricomcolsem-61').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-62').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-63').classList.add("incorrect")
    
          document.getElementById('sa-wricomcolsem-6').disabled = true;
          document.getElementById('o-wricomcolsem-61').disabled = true;
          document.getElementById('o-wricomcolsem-62').disabled = true;
          document.getElementById('o-wricomcolsem-63').disabled = true;
          document.getElementById('o-wricomcolsem-64').disabled = true;
          showExplanation6()
          localStorage.setItem('wricomcolsem6', 0)
        }
        if (document.getElementById('o-wricomcolsem-64').checked) {
          document.getElementById('r-wricomcolsem-64').style.color = 'blue'
          document.getElementById('r-wricomcolsem-64').innerHTML = 'Correct!'
          
          document.getElementById('b-wricomcolsem-64').classList.add("correct")
          document.getElementById('b-wricomcolsem-61').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-62').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-63').classList.add("incorrect")
    
          document.getElementById('sa-wricomcolsem-6').disabled = true;
          document.getElementById('o-wricomcolsem-61').disabled = true;
          document.getElementById('o-wricomcolsem-62').disabled = true;
          document.getElementById('o-wricomcolsem-63').disabled = true;
          document.getElementById('o-wricomcolsem-64').disabled = true;
          showExplanation6()
          localStorage.setItem('wricomcolsem6', 1)
        }
      }
    }
    
    if (document.getElementById('sa-wricomcolsem-7') != null) {
      wricomcolsem7But.onclick = function() {
        if (document.getElementById('o-wricomcolsem-71').checked) {
          document.getElementById('r-wricomcolsem-71').style.color = 'red'
          document.getElementById('r-wricomcolsem-71').innerHTML = 'Incorrect!'
          document.getElementById('r-wricomcolsem-74').style.color = 'blue'
          document.getElementById('r-wricomcolsem-74').innerHTML = 'Correct!'
          
          document.getElementById('b-wricomcolsem-74').classList.add("correct")
          document.getElementById('b-wricomcolsem-71').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-72').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-73').classList.add("incorrect")
    
          document.getElementById('sa-wricomcolsem-7').disabled = true;
          document.getElementById('o-wricomcolsem-71').disabled = true;
          document.getElementById('o-wricomcolsem-72').disabled = true;
          document.getElementById('o-wricomcolsem-73').disabled = true;
          document.getElementById('o-wricomcolsem-74').disabled = true;
          showExplanation7()
          localStorage.setItem('wricomcolsem7', 0)
        }
        if (document.getElementById('o-wricomcolsem-72').checked) {
          document.getElementById('r-wricomcolsem-72').style.color = 'red'
          document.getElementById('r-wricomcolsem-72').innerHTML = 'Incorrect!'
          document.getElementById('r-wricomcolsem-74').style.color = 'blue'
          document.getElementById('r-wricomcolsem-74').innerHTML = 'Correct!'
          
          document.getElementById('b-wricomcolsem-74').classList.add("correct")
          document.getElementById('b-wricomcolsem-71').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-72').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-73').classList.add("incorrect")
    
          document.getElementById('sa-wricomcolsem-7').disabled = true;
          document.getElementById('o-wricomcolsem-71').disabled = true;
          document.getElementById('o-wricomcolsem-72').disabled = true;
          document.getElementById('o-wricomcolsem-73').disabled = true;
          document.getElementById('o-wricomcolsem-74').disabled = true;
          showExplanation7()
          localStorage.setItem('wricomcolsem7', 0)
        }
        if (document.getElementById('o-wricomcolsem-73').checked) {
          document.getElementById('r-wricomcolsem-73').style.color = 'red'
          document.getElementById('r-wricomcolsem-73').innerHTML = 'Incorrect!'
          document.getElementById('r-wricomcolsem-74').style.color = 'blue'
          document.getElementById('r-wricomcolsem-74').innerHTML = 'Correct!'
          
          document.getElementById('b-wricomcolsem-74').classList.add("correct")
          document.getElementById('b-wricomcolsem-71').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-72').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-73').classList.add("incorrect")
    
          document.getElementById('sa-wricomcolsem-7').disabled = true;
          document.getElementById('o-wricomcolsem-71').disabled = true;
          document.getElementById('o-wricomcolsem-72').disabled = true;
          document.getElementById('o-wricomcolsem-73').disabled = true;
          document.getElementById('o-wricomcolsem-74').disabled = true;
          showExplanation7()
          localStorage.setItem('wricomcolsem7', 0)
        }
        if (document.getElementById('o-wricomcolsem-74').checked) {
          document.getElementById('r-wricomcolsem-74').style.color = 'blue'
          document.getElementById('r-wricomcolsem-74').innerHTML = 'Correct!'
          
          document.getElementById('b-wricomcolsem-74').classList.add("correct")
          document.getElementById('b-wricomcolsem-71').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-72').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-73').classList.add("incorrect")
    
          document.getElementById('sa-wricomcolsem-7').disabled = true;
          document.getElementById('o-wricomcolsem-71').disabled = true;
          document.getElementById('o-wricomcolsem-72').disabled = true;
          document.getElementById('o-wricomcolsem-73').disabled = true;
          document.getElementById('o-wricomcolsem-74').disabled = true;
          showExplanation7()
          localStorage.setItem('wricomcolsem7', 1)
        }
      }
    }
    
    
    if (document.getElementById('sa-wricomcolsem-8') != null) {
      wricomcolsem8But.onclick = function() {
        if (document.getElementById('o-wricomcolsem-81').checked) {
          document.getElementById('r-wricomcolsem-81').style.color = 'red'
          document.getElementById('r-wricomcolsem-81').innerHTML = 'Incorrect!'
          document.getElementById('r-wricomcolsem-82').style.color = 'blue'
          document.getElementById('r-wricomcolsem-82').innerHTML = 'Correct!'
          
          document.getElementById('b-wricomcolsem-82').classList.add("correct")
          document.getElementById('b-wricomcolsem-81').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-83').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-84').classList.add("incorrect")
    
          document.getElementById('sa-wricomcolsem-8').disabled = true;
          document.getElementById('o-wricomcolsem-81').disabled = true;
          document.getElementById('o-wricomcolsem-82').disabled = true;
          document.getElementById('o-wricomcolsem-83').disabled = true;
          document.getElementById('o-wricomcolsem-84').disabled = true;
          showExplanation8()
          localStorage.setItem('wricomcolsem8', 0)
        }
        if (document.getElementById('o-wricomcolsem-82').checked) {
          document.getElementById('r-wricomcolsem-82').style.color = 'blue'
          document.getElementById('r-wricomcolsem-82').innerHTML = 'Correct!'
          
          document.getElementById('b-wricomcolsem-82').classList.add("correct")
          document.getElementById('b-wricomcolsem-81').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-83').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-84').classList.add("incorrect")
    
          document.getElementById('sa-wricomcolsem-8').disabled = true;
          document.getElementById('o-wricomcolsem-81').disabled = true;
          document.getElementById('o-wricomcolsem-82').disabled = true;
          document.getElementById('o-wricomcolsem-83').disabled = true;
          document.getElementById('o-wricomcolsem-84').disabled = true;
          showExplanation8()
          localStorage.setItem('wricomcolsem8', 1)
        }
        if (document.getElementById('o-wricomcolsem-83').checked) {
          document.getElementById('r-wricomcolsem-83').style.color = 'red'
          document.getElementById('r-wricomcolsem-83').innerHTML = 'Incorrect!'
          document.getElementById('r-wricomcolsem-82').style.color = 'blue'
          document.getElementById('r-wricomcolsem-82').innerHTML = 'Correct!'
          
          document.getElementById('b-wricomcolsem-82').classList.add("correct")
          document.getElementById('b-wricomcolsem-81').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-83').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-84').classList.add("incorrect")
    
          document.getElementById('sa-wricomcolsem-8').disabled = true;
          document.getElementById('o-wricomcolsem-81').disabled = true;
          document.getElementById('o-wricomcolsem-82').disabled = true;
          document.getElementById('o-wricomcolsem-83').disabled = true;
          document.getElementById('o-wricomcolsem-84').disabled = true;
          showExplanation8()
          localStorage.setItem('wricomcolsem8', 0)
        }
        if (document.getElementById('o-wricomcolsem-84').checked) {
          document.getElementById('r-wricomcolsem-84').style.color = 'red'
          document.getElementById('r-wricomcolsem-84').innerHTML = 'Incorrect!'
          document.getElementById('r-wricomcolsem-82').style.color = 'blue'
          document.getElementById('r-wricomcolsem-82').innerHTML = 'Correct!'
          
          document.getElementById('b-wricomcolsem-82').classList.add("correct")
          document.getElementById('b-wricomcolsem-81').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-83').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-84').classList.add("incorrect")
    
          document.getElementById('sa-wricomcolsem-8').disabled = true;
          document.getElementById('o-wricomcolsem-81').disabled = true;
          document.getElementById('o-wricomcolsem-82').disabled = true;
          document.getElementById('o-wricomcolsem-83').disabled = true;
          document.getElementById('o-wricomcolsem-84').disabled = true;
          showExplanation8()
          localStorage.setItem('wricomcolsem8', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-wricomcolsem-9') != null) {
      wricomcolsem9But.onclick = function() {
        if (document.getElementById('o-wricomcolsem-91').checked) {
          document.getElementById('r-wricomcolsem-91').style.color = 'red'
          document.getElementById('r-wricomcolsem-91').innerHTML = 'Incorrect!'
          document.getElementById('r-wricomcolsem-94').style.color = 'blue'
          document.getElementById('r-wricomcolsem-94').innerHTML = 'Correct!'
          
          document.getElementById('b-wricomcolsem-94').classList.add("correct")
          document.getElementById('b-wricomcolsem-91').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-92').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-93').classList.add("incorrect")
    
          document.getElementById('sa-wricomcolsem-9').disabled = true;
          document.getElementById('o-wricomcolsem-91').disabled = true;
          document.getElementById('o-wricomcolsem-92').disabled = true;
          document.getElementById('o-wricomcolsem-93').disabled = true;
          document.getElementById('o-wricomcolsem-94').disabled = true;
          showExplanation9()
          localStorage.setItem('wricomcolsem9', 0)
        }
        if (document.getElementById('o-wricomcolsem-92').checked) {
          document.getElementById('r-wricomcolsem-91').style.color = 'red'
          document.getElementById('r-wricomcolsem-91').innerHTML = 'Incorrect!'
          document.getElementById('r-wricomcolsem-94').style.color = 'blue'
          document.getElementById('r-wricomcolsem-94').innerHTML = 'Correct!'
          
          document.getElementById('b-wricomcolsem-94').classList.add("correct")
          document.getElementById('b-wricomcolsem-91').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-92').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-93').classList.add("incorrect")
    
          document.getElementById('sa-wricomcolsem-9').disabled = true;
          document.getElementById('o-wricomcolsem-91').disabled = true;
          document.getElementById('o-wricomcolsem-92').disabled = true;
          document.getElementById('o-wricomcolsem-93').disabled = true;
          document.getElementById('o-wricomcolsem-94').disabled = true;
          showExplanation9()
          localStorage.setItem('wricomcolsem9', 0)
        }
        if (document.getElementById('o-wricomcolsem-93').checked) {
          document.getElementById('r-wricomcolsem-91').style.color = 'red'
          document.getElementById('r-wricomcolsem-91').innerHTML = 'Incorrect!'
          document.getElementById('r-wricomcolsem-94').style.color = 'blue'
          document.getElementById('r-wricomcolsem-94').innerHTML = 'Correct!'
          
          document.getElementById('b-wricomcolsem-94').classList.add("correct")
          document.getElementById('b-wricomcolsem-91').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-92').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-93').classList.add("incorrect")
    
          document.getElementById('sa-wricomcolsem-9').disabled = true;
          document.getElementById('o-wricomcolsem-91').disabled = true;
          document.getElementById('o-wricomcolsem-92').disabled = true;
          document.getElementById('o-wricomcolsem-93').disabled = true;
          document.getElementById('o-wricomcolsem-94').disabled = true;
          showExplanation9()
          localStorage.setItem('wricomcolsem9', 0)
        }
        if (document.getElementById('o-wricomcolsem-94').checked) {
          document.getElementById('r-wricomcolsem-94').style.color = 'blue'
          document.getElementById('r-wricomcolsem-94').innerHTML = 'Correct!'
          
          document.getElementById('b-wricomcolsem-94').classList.add("correct")
          document.getElementById('b-wricomcolsem-91').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-92').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-93').classList.add("incorrect")
    
          document.getElementById('sa-wricomcolsem-9').disabled = true;
          document.getElementById('o-wricomcolsem-91').disabled = true;
          document.getElementById('o-wricomcolsem-92').disabled = true;
          document.getElementById('o-wricomcolsem-93').disabled = true;
          document.getElementById('o-wricomcolsem-94').disabled = true;
          showExplanation9()
          localStorage.setItem('wricomcolsem9', 1)
        }
      }
    }
    
    if (document.getElementById('sa-wricomcolsem-10') != null) {
      wricomcolsem10But.onclick = function() {
        if (document.getElementById('o-wricomcolsem-101').checked) {
          document.getElementById('r-wricomcolsem-101').style.color = 'red'
          document.getElementById('r-wricomcolsem-101').innerHTML = 'Incorrect!'
          document.getElementById('r-wricomcolsem-102').style.color = 'blue'
          document.getElementById('r-wricomcolsem-102').innerHTML = 'Correct!'
          
          document.getElementById('b-wricomcolsem-102').classList.add("correct")
          document.getElementById('b-wricomcolsem-101').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-103').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-104').classList.add("incorrect")
    
          document.getElementById('sa-wricomcolsem-10').disabled = true;
          document.getElementById('o-wricomcolsem-101').disabled = true;
          document.getElementById('o-wricomcolsem-102').disabled = true;
          document.getElementById('o-wricomcolsem-103').disabled = true;
          document.getElementById('o-wricomcolsem-104').disabled = true;
          showExplanation10()
          localStorage.setItem('wricomcolsem10', 0)
        }
        if (document.getElementById('o-wricomcolsem-102').checked) {
          document.getElementById('r-wricomcolsem-102').style.color = 'blue'
          document.getElementById('r-wricomcolsem-102').innerHTML = 'Correct!'
          
          document.getElementById('b-wricomcolsem-102').classList.add("correct")
          document.getElementById('b-wricomcolsem-101').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-103').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-104').classList.add("incorrect")
    
          document.getElementById('sa-wricomcolsem-10').disabled = true;
          document.getElementById('o-wricomcolsem-101').disabled = true;
          document.getElementById('o-wricomcolsem-102').disabled = true;
          document.getElementById('o-wricomcolsem-103').disabled = true;
          document.getElementById('o-wricomcolsem-104').disabled = true;
          showExplanation10()
          localStorage.setItem('wricomcolsem10', 1)
        }
        if (document.getElementById('o-wricomcolsem-103').checked) {
          document.getElementById('r-wricomcolsem-103').style.color = 'red'
          document.getElementById('r-wricomcolsem-103').innerHTML = 'Incorrect!'
          document.getElementById('r-wricomcolsem-102').style.color = 'blue'
          document.getElementById('r-wricomcolsem-102').innerHTML = 'Correct!'
          
          document.getElementById('b-wricomcolsem-102').classList.add("correct")
          document.getElementById('b-wricomcolsem-101').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-103').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-104').classList.add("incorrect")
    
          document.getElementById('sa-wricomcolsem-10').disabled = true;
          document.getElementById('o-wricomcolsem-101').disabled = true;
          document.getElementById('o-wricomcolsem-102').disabled = true;
          document.getElementById('o-wricomcolsem-103').disabled = true;
          document.getElementById('o-wricomcolsem-104').disabled = true;
          showExplanation10()
          localStorage.setItem('wricomcolsem10', 0)
        }
        if (document.getElementById('o-wricomcolsem-104').checked) {
          document.getElementById('r-wricomcolsem-104').style.color = 'red'
          document.getElementById('r-wricomcolsem-104').innerHTML = 'Incorrect!'
          document.getElementById('r-wricomcolsem-102').style.color = 'blue'
          document.getElementById('r-wricomcolsem-102').innerHTML = 'Correct!'
          
          document.getElementById('b-wricomcolsem-102').classList.add("correct")
          document.getElementById('b-wricomcolsem-101').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-103').classList.add("incorrect")
          document.getElementById('b-wricomcolsem-104').classList.add("incorrect")
    
          document.getElementById('sa-wricomcolsem-10').disabled = true;
          document.getElementById('o-wricomcolsem-101').disabled = true;
          document.getElementById('o-wricomcolsem-102').disabled = true;
          document.getElementById('o-wricomcolsem-103').disabled = true;
          document.getElementById('o-wricomcolsem-104').disabled = true;
          showExplanation10()
          localStorage.setItem('wricomcolsem10', 0)
        }
      }
    }
    