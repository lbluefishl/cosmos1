
  let precomfun1But = document.getElementById('sa-precomfun-1');
  let precomfun2But = document.getElementById('sa-precomfun-2');
  let precomfun3But = document.getElementById('sa-precomfun-3');
  let precomfun4But = document.getElementById('sa-precomfun-4');
  let precomfun5But = document.getElementById('sa-precomfun-5');
  let precomfun6But = document.getElementById('sa-precomfun-6');
  let precomfun7But = document.getElementById('sa-precomfun-7');
  let precomfun8But = document.getElementById('sa-precomfun-8');
  let precomfun9But = document.getElementById('sa-precomfun-9');
  let precomfun10But = document.getElementById('sa-precomfun-10');


  showExplanation1 = function() {
    document.getElementById('e-precomfun-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-precomfun-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-precomfun-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-precomfun-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-precomfun-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-precomfun-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-precomfun-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-precomfun-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-precomfun-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-precomfun-10').style.display = 'block';
     } 



     if (document.getElementById('sa-precomfun-1') != null) {
      precomfun1But.onclick = function () {
        if (document.getElementById('o-precomfun-11').checked) {
          document.getElementById('r-precomfun-11').style.color = 'red'
          document.getElementById('r-precomfun-11').innerHTML = 'Incorrect!'
          document.getElementById('r-precomfun-12').style.color = 'blue'
          document.getElementById('r-precomfun-12').innerHTML = 'Correct!'
    
          document.getElementById('b-precomfun-12').classList.add("correct")
          document.getElementById('b-precomfun-11').classList.add("incorrect")
          document.getElementById('b-precomfun-13').classList.add("incorrect")
          document.getElementById('b-precomfun-14').classList.add("incorrect")
    
          document.getElementById('sa-precomfun-1').disabled = true;
          document.getElementById('o-precomfun-11').disabled = true;
          document.getElementById('o-precomfun-12').disabled = true;
          document.getElementById('o-precomfun-13').disabled = true;
          document.getElementById('o-precomfun-14').disabled = true;
          showExplanation1()
          localStorage.setItem('precomfun1', 0)
        }
    
        if (document.getElementById('o-precomfun-12').checked) {        
          document.getElementById('r-precomfun-12').style.color = 'blue'
          document.getElementById('r-precomfun-12').innerHTML = 'Correct!'
    
          document.getElementById('b-precomfun-12').classList.add("correct")
          document.getElementById('b-precomfun-11').classList.add("incorrect")
          document.getElementById('b-precomfun-13').classList.add("incorrect")
          document.getElementById('b-precomfun-14').classList.add("incorrect")
    
          document.getElementById('sa-precomfun-1').disabled = true;
          document.getElementById('o-precomfun-11').disabled = true;
          document.getElementById('o-precomfun-12').disabled = true;
          document.getElementById('o-precomfun-13').disabled = true;
          document.getElementById('o-precomfun-14').disabled = true;
          showExplanation1()
          localStorage.setItem('precomfun1', 1)
        }
        if (document.getElementById('o-precomfun-13').checked) {
          document.getElementById('r-precomfun-13').style.color = 'red'
          document.getElementById('r-precomfun-13').innerHTML = 'Incorrect!'
          document.getElementById('r-precomfun-12').style.color = 'blue'
          document.getElementById('r-precomfun-12').innerHTML = 'Correct!'
          
          document.getElementById('b-precomfun-12').classList.add("correct")
          document.getElementById('b-precomfun-11').classList.add("incorrect")
          document.getElementById('b-precomfun-13').classList.add("incorrect")
          document.getElementById('b-precomfun-14').classList.add("incorrect")
    
          document.getElementById('sa-precomfun-1').disabled = true;
          document.getElementById('o-precomfun-11').disabled = true;
          document.getElementById('o-precomfun-12').disabled = true;
          document.getElementById('o-precomfun-13').disabled = true;
          document.getElementById('o-precomfun-14').disabled = true;
          showExplanation1()
          localStorage.setItem('precomfun1', 0)
        }
        if (document.getElementById('o-precomfun-14').checked) {
          document.getElementById('r-precomfun-14').style.color = 'red'
          document.getElementById('r-precomfun-14').innerHTML = 'Incorrect!'
          document.getElementById('r-precomfun-12').style.color = 'blue'
          document.getElementById('r-precomfun-12').innerHTML = 'Correct!'
          
          document.getElementById('b-precomfun-12').classList.add("correct")
          document.getElementById('b-precomfun-11').classList.add("incorrect")
          document.getElementById('b-precomfun-13').classList.add("incorrect")
          document.getElementById('b-precomfun-14').classList.add("incorrect")
    
          document.getElementById('sa-precomfun-1').disabled = true;
          document.getElementById('o-precomfun-11').disabled = true;
          document.getElementById('o-precomfun-12').disabled = true;
          document.getElementById('o-precomfun-13').disabled = true;
          document.getElementById('o-precomfun-14').disabled = true;
          showExplanation1()
          localStorage.setItem('precomfun1', 0)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-precomfun-2') != null) {
      precomfun2But.onclick = function() {
        if (document.getElementById('o-precomfun-21').checked) {
          document.getElementById('r-precomfun-21').style.color = 'blue'
          document.getElementById('r-precomfun-21').innerHTML = 'Correct!'
          
          document.getElementById('b-precomfun-21').classList.add("correct")
          document.getElementById('b-precomfun-24').classList.add("incorrect")
          document.getElementById('b-precomfun-22').classList.add("incorrect")
          document.getElementById('b-precomfun-23').classList.add("incorrect")
    
          document.getElementById('sa-precomfun-2').disabled = true;
          document.getElementById('o-precomfun-21').disabled = true;
          document.getElementById('o-precomfun-22').disabled = true;
          document.getElementById('o-precomfun-23').disabled = true;
          document.getElementById('o-precomfun-24').disabled = true;
          showExplanation2()
          localStorage.setItem('precomfun2', 1)
        }
        if (document.getElementById('o-precomfun-22').checked) {
          document.getElementById('r-precomfun-22').style.color = 'red'
          document.getElementById('r-precomfun-22').innerHTML = 'Incorrect!'
          document.getElementById('r-precomfun-21').style.color = 'blue'
          document.getElementById('r-precomfun-21').innerHTML = 'Correct!'
          
          document.getElementById('b-precomfun-21').classList.add("correct")
          document.getElementById('b-precomfun-24').classList.add("incorrect")
          document.getElementById('b-precomfun-22').classList.add("incorrect")
          document.getElementById('b-precomfun-23').classList.add("incorrect")
    
          document.getElementById('sa-precomfun-2').disabled = true;
          document.getElementById('o-precomfun-21').disabled = true;
          document.getElementById('o-precomfun-22').disabled = true;
          document.getElementById('o-precomfun-23').disabled = true;
          document.getElementById('o-precomfun-24').disabled = true;
          showExplanation2()
          localStorage.setItem('precomfun2', 0)
        }
        if (document.getElementById('o-precomfun-23').checked) {
          document.getElementById('r-precomfun-23').style.color = 'red'
          document.getElementById('r-precomfun-23').innerHTML = 'Incorrect!'
          document.getElementById('r-precomfun-21').style.color = 'blue'
          document.getElementById('r-precomfun-21').innerHTML = 'Correct!'
          
          document.getElementById('b-precomfun-21').classList.add("correct")
          document.getElementById('b-precomfun-24').classList.add("incorrect")
          document.getElementById('b-precomfun-22').classList.add("incorrect")
          document.getElementById('b-precomfun-23').classList.add("incorrect")
    
          document.getElementById('sa-precomfun-2').disabled = true;
          document.getElementById('o-precomfun-21').disabled = true;
          document.getElementById('o-precomfun-22').disabled = true;
          document.getElementById('o-precomfun-23').disabled = true;
          document.getElementById('o-precomfun-24').disabled = true;
          showExplanation2()
          localStorage.setItem('precomfun2', 0)
        }
        if (document.getElementById('o-precomfun-24').checked) {
          document.getElementById('r-precomfun-24').style.color = 'red'
          document.getElementById('r-precomfun-24').innerHTML = 'Incorrect!'
          document.getElementById('r-precomfun-21').style.color = 'blue'
          document.getElementById('r-precomfun-21').innerHTML = 'Correct!'
          
          document.getElementById('b-precomfun-21').classList.add("correct")
          document.getElementById('b-precomfun-24').classList.add("incorrect")
          document.getElementById('b-precomfun-22').classList.add("incorrect")
          document.getElementById('b-precomfun-23').classList.add("incorrect")
    
          document.getElementById('sa-precomfun-2').disabled = true;
          document.getElementById('o-precomfun-21').disabled = true;
          document.getElementById('o-precomfun-22').disabled = true;
          document.getElementById('o-precomfun-23').disabled = true;
          document.getElementById('o-precomfun-24').disabled = true;
          showExplanation2()
          localStorage.setItem('precomfun2', 0)
        }
      }
    }
    
    if (document.getElementById('sa-precomfun-3') != null) {
      precomfun3But.onclick = function() {
        if (document.getElementById('o-precomfun-31').checked) {
          document.getElementById('r-precomfun-31').style.color = 'blue'
          document.getElementById('r-precomfun-31').innerHTML = 'Correct!'
          
          document.getElementById('b-precomfun-31').classList.add("correct")
          document.getElementById('b-precomfun-32').classList.add("incorrect")
          document.getElementById('b-precomfun-33').classList.add("incorrect")
          document.getElementById('b-precomfun-34').classList.add("incorrect")
    
          document.getElementById('sa-precomfun-3').disabled = true;
          document.getElementById('o-precomfun-31').disabled = true;
          document.getElementById('o-precomfun-32').disabled = true;
          document.getElementById('o-precomfun-33').disabled = true;
          document.getElementById('o-precomfun-34').disabled = true;
          showExplanation3()
          localStorage.setItem('precomfun3', 1)
        }
        if (document.getElementById('o-precomfun-32').checked) {
          document.getElementById('r-precomfun-32').style.color = 'red'
          document.getElementById('r-precomfun-32').innerHTML = 'Incorrect!'
          document.getElementById('r-precomfun-31').style.color = 'blue'
          document.getElementById('r-precomfun-31').innerHTML = 'Correct!'
          
          document.getElementById('b-precomfun-31').classList.add("correct")
          document.getElementById('b-precomfun-32').classList.add("incorrect")
          document.getElementById('b-precomfun-33').classList.add("incorrect")
          document.getElementById('b-precomfun-34').classList.add("incorrect")
    
          document.getElementById('sa-precomfun-3').disabled = true;
          document.getElementById('o-precomfun-31').disabled = true;
          document.getElementById('o-precomfun-32').disabled = true;
          document.getElementById('o-precomfun-33').disabled = true;
          document.getElementById('o-precomfun-34').disabled = true;
          showExplanation3()
          localStorage.setItem('precomfun3', 0)
        }
        if (document.getElementById('o-precomfun-33').checked) {
          document.getElementById('r-precomfun-33').style.color = 'red'
          document.getElementById('r-precomfun-33').innerHTML = 'Incorrect!'
          document.getElementById('r-precomfun-31').style.color = 'blue'
          document.getElementById('r-precomfun-31').innerHTML = 'Correct!'
          
          document.getElementById('b-precomfun-31').classList.add("correct")
          document.getElementById('b-precomfun-32').classList.add("incorrect")
          document.getElementById('b-precomfun-33').classList.add("incorrect")
          document.getElementById('b-precomfun-34').classList.add("incorrect")
    
          document.getElementById('sa-precomfun-3').disabled = true;
          document.getElementById('o-precomfun-31').disabled = true;
          document.getElementById('o-precomfun-32').disabled = true;
          document.getElementById('o-precomfun-33').disabled = true;
          document.getElementById('o-precomfun-34').disabled = true;
          showExplanation3()
          localStorage.setItem('precomfun3', 0)
        }
        if (document.getElementById('o-precomfun-34').checked) {
          document.getElementById('r-precomfun-34').style.color = 'red'
          document.getElementById('r-precomfun-34').innerHTML = 'Incorrect!'
          document.getElementById('r-precomfun-31').style.color = 'blue'
          document.getElementById('r-precomfun-31').innerHTML = 'Correct!'
          
          document.getElementById('b-precomfun-31').classList.add("correct")
          document.getElementById('b-precomfun-32').classList.add("incorrect")
          document.getElementById('b-precomfun-33').classList.add("incorrect")
          document.getElementById('b-precomfun-34').classList.add("incorrect")
    
          document.getElementById('sa-precomfun-3').disabled = true;
          document.getElementById('o-precomfun-31').disabled = true;
          document.getElementById('o-precomfun-32').disabled = true;
          document.getElementById('o-precomfun-33').disabled = true;
          document.getElementById('o-precomfun-34').disabled = true;
          showExplanation3()
          localStorage.setItem('precomfun3', 0)
        }
      }
    }
    
    if (document.getElementById('sa-precomfun-4') != null) {
      precomfun4But.onclick = function() {
        if (document.getElementById('o-precomfun-41').checked) {
          document.getElementById('r-precomfun-41').style.color = 'blue'
          document.getElementById('r-precomfun-41').innerHTML = 'Correct!'
          
          document.getElementById('b-precomfun-41').classList.add("correct")
          document.getElementById('b-precomfun-44').classList.add("incorrect")
          document.getElementById('b-precomfun-42').classList.add("incorrect")
          document.getElementById('b-precomfun-43').classList.add("incorrect")
    
          document.getElementById('sa-precomfun-4').disabled = true;
          document.getElementById('o-precomfun-41').disabled = true;
          document.getElementById('o-precomfun-42').disabled = true;
          document.getElementById('o-precomfun-43').disabled = true;
          document.getElementById('o-precomfun-44').disabled = true;
          showExplanation4()
          localStorage.setItem('precomfun4', 1)
        }
        if (document.getElementById('o-precomfun-42').checked) {
          document.getElementById('r-precomfun-42').style.color = 'red'
          document.getElementById('r-precomfun-42').innerHTML = 'Incorrect!'
          document.getElementById('r-precomfun-41').style.color = 'blue'
          document.getElementById('r-precomfun-41').innerHTML = 'Correct!'
          
          document.getElementById('b-precomfun-41').classList.add("correct")
          document.getElementById('b-precomfun-44').classList.add("incorrect")
          document.getElementById('b-precomfun-42').classList.add("incorrect")
          document.getElementById('b-precomfun-43').classList.add("incorrect")
    
          document.getElementById('sa-precomfun-4').disabled = true;
          document.getElementById('o-precomfun-41').disabled = true;
          document.getElementById('o-precomfun-42').disabled = true;
          document.getElementById('o-precomfun-43').disabled = true;
          document.getElementById('o-precomfun-44').disabled = true;
          showExplanation4()
          localStorage.setItem('precomfun4', 0)
        }
        if (document.getElementById('o-precomfun-43').checked) {
          document.getElementById('r-precomfun-43').style.color = 'red'
          document.getElementById('r-precomfun-43').innerHTML = 'Incorrect!'
          document.getElementById('r-precomfun-41').style.color = 'blue'
          document.getElementById('r-precomfun-41').innerHTML = 'Correct!'
          
          document.getElementById('b-precomfun-41').classList.add("correct")
          document.getElementById('b-precomfun-44').classList.add("incorrect")
          document.getElementById('b-precomfun-42').classList.add("incorrect")
          document.getElementById('b-precomfun-43').classList.add("incorrect")
    
          document.getElementById('sa-precomfun-4').disabled = true;
          document.getElementById('o-precomfun-41').disabled = true;
          document.getElementById('o-precomfun-42').disabled = true;
          document.getElementById('o-precomfun-43').disabled = true;
          document.getElementById('o-precomfun-44').disabled = true;
          showExplanation4()
          localStorage.setItem('precomfun4', 0)
        }
        if (document.getElementById('o-precomfun-44').checked) {
          document.getElementById('r-precomfun-44').style.color = 'red'
          document.getElementById('r-precomfun-44').innerHTML = 'Incorrect!'
          document.getElementById('r-precomfun-41').style.color = 'blue'
          document.getElementById('r-precomfun-41').innerHTML = 'Correct!'
          
          document.getElementById('b-precomfun-41').classList.add("correct")
          document.getElementById('b-precomfun-44').classList.add("incorrect")
          document.getElementById('b-precomfun-42').classList.add("incorrect")
          document.getElementById('b-precomfun-43').classList.add("incorrect")
    
          document.getElementById('sa-precomfun-4').disabled = true;
          document.getElementById('o-precomfun-41').disabled = true;
          document.getElementById('o-precomfun-42').disabled = true;
          document.getElementById('o-precomfun-43').disabled = true;
          document.getElementById('o-precomfun-44').disabled = true;
          showExplanation4()
          localStorage.setItem('precomfun4', 0)
        }
      }
    }
    
    if (document.getElementById('sa-precomfun-5') != null) {
      precomfun5But.onclick = function() {
        if (document.getElementById('o-precomfun-51').checked) {
          document.getElementById('r-precomfun-51').style.color = 'red'
          document.getElementById('r-precomfun-51').innerHTML = 'Incorrect!'
          document.getElementById('r-precomfun-52').style.color = 'blue'
          document.getElementById('r-precomfun-52').innerHTML = 'Correct!'
          
          document.getElementById('b-precomfun-52').classList.add("correct")
          document.getElementById('b-precomfun-51').classList.add("incorrect")
          document.getElementById('b-precomfun-53').classList.add("incorrect")
          document.getElementById('b-precomfun-54').classList.add("incorrect")
    
          document.getElementById('sa-precomfun-5').disabled = true;
          document.getElementById('o-precomfun-51').disabled = true;
          document.getElementById('o-precomfun-52').disabled = true;
          document.getElementById('o-precomfun-53').disabled = true;
          document.getElementById('o-precomfun-54').disabled = true;
          showExplanation5()
          localStorage.setItem('precomfun5', 0)
        }
        if (document.getElementById('o-precomfun-52').checked) {
          document.getElementById('r-precomfun-52').style.color = 'blue'
          document.getElementById('r-precomfun-52').innerHTML = 'Correct!'
          
          document.getElementById('b-precomfun-52').classList.add("correct")
          document.getElementById('b-precomfun-51').classList.add("incorrect")
          document.getElementById('b-precomfun-53').classList.add("incorrect")
          document.getElementById('b-precomfun-54').classList.add("incorrect")
    
          document.getElementById('sa-precomfun-5').disabled = true;
          document.getElementById('o-precomfun-51').disabled = true;
          document.getElementById('o-precomfun-52').disabled = true;
          document.getElementById('o-precomfun-53').disabled = true;
          document.getElementById('o-precomfun-54').disabled = true;
          showExplanation5()
          localStorage.setItem('precomfun5', 1)
        }
        if (document.getElementById('o-precomfun-53').checked) {
          document.getElementById('r-precomfun-53').style.color = 'red'
          document.getElementById('r-precomfun-53').innerHTML = 'Incorrect!'
          document.getElementById('r-precomfun-52').style.color = 'blue'
          document.getElementById('r-precomfun-52').innerHTML = 'Correct!'
          
          document.getElementById('b-precomfun-52').classList.add("correct")
          document.getElementById('b-precomfun-51').classList.add("incorrect")
          document.getElementById('b-precomfun-53').classList.add("incorrect")
          document.getElementById('b-precomfun-54').classList.add("incorrect")
    
          document.getElementById('sa-precomfun-5').disabled = true;
          document.getElementById('o-precomfun-51').disabled = true;
          document.getElementById('o-precomfun-52').disabled = true;
          document.getElementById('o-precomfun-53').disabled = true;
          document.getElementById('o-precomfun-54').disabled = true;
          showExplanation5()
          localStorage.setItem('precomfun5', 0)
        }
        if (document.getElementById('o-precomfun-54').checked) {
          document.getElementById('r-precomfun-54').style.color = 'red'
          document.getElementById('r-precomfun-54').innerHTML = 'Incorrect!'
          document.getElementById('r-precomfun-52').style.color = 'blue'
          document.getElementById('r-precomfun-52').innerHTML = 'Correct!'
          
          document.getElementById('b-precomfun-52').classList.add("correct")
          document.getElementById('b-precomfun-51').classList.add("incorrect")
          document.getElementById('b-precomfun-53').classList.add("incorrect")
          document.getElementById('b-precomfun-54').classList.add("incorrect")
    
          document.getElementById('sa-precomfun-5').disabled = true;
          document.getElementById('o-precomfun-51').disabled = true;
          document.getElementById('o-precomfun-52').disabled = true;
          document.getElementById('o-precomfun-53').disabled = true;
          document.getElementById('o-precomfun-54').disabled = true;
          showExplanation5()
          localStorage.setItem('precomfun5', 0)
        }
      }
    }
        
         
      if (document.getElementById('sa-precomfun-6') != null) {
      precomfun6But.onclick = function() {
        if (document.getElementById('o-precomfun-61').checked) {
          document.getElementById('r-precomfun-61').style.color = 'blue'
          document.getElementById('r-precomfun-61').innerHTML = 'Correct!'
          
          document.getElementById('b-precomfun-61').classList.add("correct")
          document.getElementById('b-precomfun-64').classList.add("incorrect")
          document.getElementById('b-precomfun-62').classList.add("incorrect")
          document.getElementById('b-precomfun-63').classList.add("incorrect")
    
          document.getElementById('sa-precomfun-6').disabled = true;
          document.getElementById('o-precomfun-61').disabled = true;
          document.getElementById('o-precomfun-62').disabled = true;
          document.getElementById('o-precomfun-63').disabled = true;
          document.getElementById('o-precomfun-64').disabled = true;
          showExplanation6()
          localStorage.setItem('precomfun6', 1)
        }
        if (document.getElementById('o-precomfun-62').checked) {
          document.getElementById('r-precomfun-62').style.color = 'red'
          document.getElementById('r-precomfun-62').innerHTML = 'Incorrect!'
          document.getElementById('r-precomfun-61').style.color = 'blue'
          document.getElementById('r-precomfun-61').innerHTML = 'Correct!'
          
          document.getElementById('b-precomfun-61').classList.add("correct")
          document.getElementById('b-precomfun-64').classList.add("incorrect")
          document.getElementById('b-precomfun-62').classList.add("incorrect")
          document.getElementById('b-precomfun-63').classList.add("incorrect")
    
          document.getElementById('sa-precomfun-6').disabled = true;
          document.getElementById('o-precomfun-61').disabled = true;
          document.getElementById('o-precomfun-62').disabled = true;
          document.getElementById('o-precomfun-63').disabled = true;
          document.getElementById('o-precomfun-64').disabled = true;
          showExplanation6()
          localStorage.setItem('precomfun6', 0)
        }
        if (document.getElementById('o-precomfun-63').checked) {
          document.getElementById('r-precomfun-63').style.color = 'red'
          document.getElementById('r-precomfun-63').innerHTML = 'Incorrect!'
          document.getElementById('r-precomfun-61').style.color = 'blue'
          document.getElementById('r-precomfun-61').innerHTML = 'Correct!'
          
          document.getElementById('b-precomfun-61').classList.add("correct")
          document.getElementById('b-precomfun-64').classList.add("incorrect")
          document.getElementById('b-precomfun-62').classList.add("incorrect")
          document.getElementById('b-precomfun-63').classList.add("incorrect")
    
          document.getElementById('sa-precomfun-6').disabled = true;
          document.getElementById('o-precomfun-61').disabled = true;
          document.getElementById('o-precomfun-62').disabled = true;
          document.getElementById('o-precomfun-63').disabled = true;
          document.getElementById('o-precomfun-64').disabled = true;
          showExplanation6()
          localStorage.setItem('precomfun6', 0)
        }
        if (document.getElementById('o-precomfun-64').checked) {
          document.getElementById('r-precomfun-64').style.color = 'red'
          document.getElementById('r-precomfun-64').innerHTML = 'Incorrect!'
          document.getElementById('r-precomfun-61').style.color = 'blue'
          document.getElementById('r-precomfun-61').innerHTML = 'Correct!'
          
          document.getElementById('b-precomfun-61').classList.add("correct")
          document.getElementById('b-precomfun-64').classList.add("incorrect")
          document.getElementById('b-precomfun-62').classList.add("incorrect")
          document.getElementById('b-precomfun-63').classList.add("incorrect")
    
          document.getElementById('sa-precomfun-6').disabled = true;
          document.getElementById('o-precomfun-61').disabled = true;
          document.getElementById('o-precomfun-62').disabled = true;
          document.getElementById('o-precomfun-63').disabled = true;
          document.getElementById('o-precomfun-64').disabled = true;
          showExplanation6()
          localStorage.setItem('precomfun6', 0)
        }
      }
    }
    
    if (document.getElementById('sa-precomfun-7') != null) {
      precomfun7But.onclick = function() {
        if (document.getElementById('o-precomfun-71').checked) {
          document.getElementById('r-precomfun-71').style.color = 'red'
          document.getElementById('r-precomfun-71').innerHTML = 'Incorrect!'
          document.getElementById('r-precomfun-73').style.color = 'blue'
          document.getElementById('r-precomfun-73').innerHTML = 'Correct!'
          
          document.getElementById('b-precomfun-73').classList.add("correct")
          document.getElementById('b-precomfun-71').classList.add("incorrect")
          document.getElementById('b-precomfun-72').classList.add("incorrect")
          document.getElementById('b-precomfun-74').classList.add("incorrect")
    
          document.getElementById('sa-precomfun-7').disabled = true;
          document.getElementById('o-precomfun-71').disabled = true;
          document.getElementById('o-precomfun-72').disabled = true;
          document.getElementById('o-precomfun-73').disabled = true;
          document.getElementById('o-precomfun-74').disabled = true;
          showExplanation7()
          localStorage.setItem('precomfun7', 0)
        }
        if (document.getElementById('o-precomfun-72').checked) {
          document.getElementById('r-precomfun-72').style.color = 'red'
          document.getElementById('r-precomfun-72').innerHTML = 'Incorrect!'
          document.getElementById('r-precomfun-73').style.color = 'blue'
          document.getElementById('r-precomfun-73').innerHTML = 'Correct!'
          
          document.getElementById('b-precomfun-73').classList.add("correct")
          document.getElementById('b-precomfun-71').classList.add("incorrect")
          document.getElementById('b-precomfun-72').classList.add("incorrect")
          document.getElementById('b-precomfun-74').classList.add("incorrect")
    
          document.getElementById('sa-precomfun-7').disabled = true;
          document.getElementById('o-precomfun-71').disabled = true;
          document.getElementById('o-precomfun-72').disabled = true;
          document.getElementById('o-precomfun-73').disabled = true;
          document.getElementById('o-precomfun-74').disabled = true;
          showExplanation7()
          localStorage.setItem('precomfun7', 0)
        }
        if (document.getElementById('o-precomfun-73').checked) {
          document.getElementById('r-precomfun-73').style.color = 'blue'
          document.getElementById('r-precomfun-73').innerHTML = 'Correct!'
          
          document.getElementById('b-precomfun-73').classList.add("correct")
          document.getElementById('b-precomfun-71').classList.add("incorrect")
          document.getElementById('b-precomfun-72').classList.add("incorrect")
          document.getElementById('b-precomfun-74').classList.add("incorrect")
    
          document.getElementById('sa-precomfun-7').disabled = true;
          document.getElementById('o-precomfun-71').disabled = true;
          document.getElementById('o-precomfun-72').disabled = true;
          document.getElementById('o-precomfun-73').disabled = true;
          document.getElementById('o-precomfun-74').disabled = true;
          showExplanation7()
          localStorage.setItem('precomfun7', 1)
        }
        if (document.getElementById('o-precomfun-74').checked) {
          document.getElementById('r-precomfun-74').style.color = 'red'
          document.getElementById('r-precomfun-74').innerHTML = 'Incorrect!'
          document.getElementById('r-precomfun-73').style.color = 'blue'
          document.getElementById('r-precomfun-73').innerHTML = 'Correct!'
          
          document.getElementById('b-precomfun-73').classList.add("correct")
          document.getElementById('b-precomfun-71').classList.add("incorrect")
          document.getElementById('b-precomfun-72').classList.add("incorrect")
          document.getElementById('b-precomfun-74').classList.add("incorrect")
    
          document.getElementById('sa-precomfun-7').disabled = true;
          document.getElementById('o-precomfun-71').disabled = true;
          document.getElementById('o-precomfun-72').disabled = true;
          document.getElementById('o-precomfun-73').disabled = true;
          document.getElementById('o-precomfun-74').disabled = true;
          showExplanation7()
          localStorage.setItem('precomfun7', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-precomfun-8') != null) {
      precomfun8But.onclick = function() {
        if (document.getElementById('o-precomfun-81').checked) {
          document.getElementById('r-precomfun-81').style.color = 'red'
          document.getElementById('r-precomfun-81').innerHTML = 'Incorrect!'
          document.getElementById('r-precomfun-82').style.color = 'blue'
          document.getElementById('r-precomfun-82').innerHTML = 'Correct!'
          
          document.getElementById('b-precomfun-82').classList.add("correct")
          document.getElementById('b-precomfun-81').classList.add("incorrect")
          document.getElementById('b-precomfun-83').classList.add("incorrect")
          document.getElementById('b-precomfun-84').classList.add("incorrect")
    
          document.getElementById('sa-precomfun-8').disabled = true;
          document.getElementById('o-precomfun-81').disabled = true;
          document.getElementById('o-precomfun-82').disabled = true;
          document.getElementById('o-precomfun-83').disabled = true;
          document.getElementById('o-precomfun-84').disabled = true;
          showExplanation8()
          localStorage.setItem('precomfun8', 0)
        }
        if (document.getElementById('o-precomfun-82').checked) {
          document.getElementById('r-precomfun-82').style.color = 'blue'
          document.getElementById('r-precomfun-82').innerHTML = 'Correct!'
          
          document.getElementById('b-precomfun-82').classList.add("correct")
          document.getElementById('b-precomfun-81').classList.add("incorrect")
          document.getElementById('b-precomfun-83').classList.add("incorrect")
          document.getElementById('b-precomfun-84').classList.add("incorrect")
    
          document.getElementById('sa-precomfun-8').disabled = true;
          document.getElementById('o-precomfun-81').disabled = true;
          document.getElementById('o-precomfun-82').disabled = true;
          document.getElementById('o-precomfun-83').disabled = true;
          document.getElementById('o-precomfun-84').disabled = true;
          showExplanation8()
          localStorage.setItem('precomfun8', 1)
        }
        if (document.getElementById('o-precomfun-83').checked) {
          document.getElementById('r-precomfun-83').style.color = 'red'
          document.getElementById('r-precomfun-83').innerHTML = 'Incorrect!'
          document.getElementById('r-precomfun-82').style.color = 'blue'
          document.getElementById('r-precomfun-82').innerHTML = 'Correct!'
          
          document.getElementById('b-precomfun-82').classList.add("correct")
          document.getElementById('b-precomfun-81').classList.add("incorrect")
          document.getElementById('b-precomfun-83').classList.add("incorrect")
          document.getElementById('b-precomfun-84').classList.add("incorrect")
    
          document.getElementById('sa-precomfun-8').disabled = true;
          document.getElementById('o-precomfun-81').disabled = true;
          document.getElementById('o-precomfun-82').disabled = true;
          document.getElementById('o-precomfun-83').disabled = true;
          document.getElementById('o-precomfun-84').disabled = true;
          showExplanation8()
          localStorage.setItem('precomfun8', 0)
        }
        if (document.getElementById('o-precomfun-84').checked) {
          document.getElementById('r-precomfun-84').style.color = 'red'
          document.getElementById('r-precomfun-84').innerHTML = 'Incorrect!'
          document.getElementById('r-precomfun-82').style.color = 'blue'
          document.getElementById('r-precomfun-82').innerHTML = 'Correct!'
          
          document.getElementById('b-precomfun-82').classList.add("correct")
          document.getElementById('b-precomfun-81').classList.add("incorrect")
          document.getElementById('b-precomfun-83').classList.add("incorrect")
          document.getElementById('b-precomfun-84').classList.add("incorrect")
    
          document.getElementById('sa-precomfun-8').disabled = true;
          document.getElementById('o-precomfun-81').disabled = true;
          document.getElementById('o-precomfun-82').disabled = true;
          document.getElementById('o-precomfun-83').disabled = true;
          document.getElementById('o-precomfun-84').disabled = true;
          showExplanation8()
          localStorage.setItem('precomfun8', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-precomfun-9') != null) {
      precomfun9But.onclick = function() {
        if (document.getElementById('o-precomfun-91').checked) {
          document.getElementById('r-precomfun-91').style.color = 'red'
          document.getElementById('r-precomfun-91').innerHTML = 'Incorrect!'
          document.getElementById('r-precomfun-93').style.color = 'blue'
          document.getElementById('r-precomfun-93').innerHTML = 'Correct!'
          
          document.getElementById('b-precomfun-93').classList.add("correct")
          document.getElementById('b-precomfun-91').classList.add("incorrect")
          document.getElementById('b-precomfun-92').classList.add("incorrect")
          document.getElementById('b-precomfun-94').classList.add("incorrect")
    
          document.getElementById('sa-precomfun-9').disabled = true;
          document.getElementById('o-precomfun-91').disabled = true;
          document.getElementById('o-precomfun-92').disabled = true;
          document.getElementById('o-precomfun-93').disabled = true;
          document.getElementById('o-precomfun-94').disabled = true;
          showExplanation9()
          localStorage.setItem('precomfun9', 0)
        }
        if (document.getElementById('o-precomfun-92').checked) {
          document.getElementById('r-precomfun-92').style.color = 'red'
          document.getElementById('r-precomfun-92').innerHTML = 'Incorrect!'
          document.getElementById('r-precomfun-93').style.color = 'blue'
          document.getElementById('r-precomfun-93').innerHTML = 'Correct!'
          
          document.getElementById('b-precomfun-93').classList.add("correct")
          document.getElementById('b-precomfun-91').classList.add("incorrect")
          document.getElementById('b-precomfun-92').classList.add("incorrect")
          document.getElementById('b-precomfun-94').classList.add("incorrect")
    
          document.getElementById('sa-precomfun-9').disabled = true;
          document.getElementById('o-precomfun-91').disabled = true;
          document.getElementById('o-precomfun-92').disabled = true;
          document.getElementById('o-precomfun-93').disabled = true;
          document.getElementById('o-precomfun-94').disabled = true;
          showExplanation9()
          localStorage.setItem('precomfun9', 0)
        }
        if (document.getElementById('o-precomfun-93').checked) {
          document.getElementById('r-precomfun-93').style.color = 'blue'
          document.getElementById('r-precomfun-93').innerHTML = 'Correct!'
          
          document.getElementById('b-precomfun-93').classList.add("correct")
          document.getElementById('b-precomfun-91').classList.add("incorrect")
          document.getElementById('b-precomfun-92').classList.add("incorrect")
          document.getElementById('b-precomfun-94').classList.add("incorrect")
    
          document.getElementById('sa-precomfun-9').disabled = true;
          document.getElementById('o-precomfun-91').disabled = true;
          document.getElementById('o-precomfun-92').disabled = true;
          document.getElementById('o-precomfun-93').disabled = true;
          document.getElementById('o-precomfun-94').disabled = true;
          showExplanation9()
          localStorage.setItem('precomfun9', 1)
        }
        if (document.getElementById('o-precomfun-94').checked) {
          document.getElementById('r-precomfun-94').style.color = 'red'
          document.getElementById('r-precomfun-94').innerHTML = 'Incorrect!'
          document.getElementById('r-precomfun-93').style.color = 'blue'
          document.getElementById('r-precomfun-93').innerHTML = 'Correct!'
          
          document.getElementById('b-precomfun-93').classList.add("correct")
          document.getElementById('b-precomfun-91').classList.add("incorrect")
          document.getElementById('b-precomfun-92').classList.add("incorrect")
          document.getElementById('b-precomfun-94').classList.add("incorrect")
    
          document.getElementById('sa-precomfun-9').disabled = true;
          document.getElementById('o-precomfun-91').disabled = true;
          document.getElementById('o-precomfun-92').disabled = true;
          document.getElementById('o-precomfun-93').disabled = true;
          document.getElementById('o-precomfun-94').disabled = true;
          showExplanation9()
          localStorage.setItem('precomfun9', 0)
        }
      }
    }
    
    if (document.getElementById('sa-precomfun-10') != null) {
      precomfun10But.onclick = function() {
        if (document.getElementById('o-precomfun-101').checked) {
          document.getElementById('r-precomfun-101').style.color = 'red'
          document.getElementById('r-precomfun-101').innerHTML = 'Incorrect!'
          document.getElementById('r-precomfun-102').style.color = 'blue'
          document.getElementById('r-precomfun-102').innerHTML = 'Correct!'
          
          document.getElementById('b-precomfun-102').classList.add("correct")
          document.getElementById('b-precomfun-101').classList.add("incorrect")
          document.getElementById('b-precomfun-103').classList.add("incorrect")
          document.getElementById('b-precomfun-104').classList.add("incorrect")
    
          document.getElementById('sa-precomfun-10').disabled = true;
          document.getElementById('o-precomfun-101').disabled = true;
          document.getElementById('o-precomfun-102').disabled = true;
          document.getElementById('o-precomfun-103').disabled = true;
          document.getElementById('o-precomfun-104').disabled = true;
          showExplanation10()
          localStorage.setItem('precomfun10', 0)
        }
        if (document.getElementById('o-precomfun-102').checked) {
          document.getElementById('r-precomfun-102').style.color = 'blue'
          document.getElementById('r-precomfun-102').innerHTML = 'Correct!'
          
          document.getElementById('b-precomfun-102').classList.add("correct")
          document.getElementById('b-precomfun-101').classList.add("incorrect")
          document.getElementById('b-precomfun-103').classList.add("incorrect")
          document.getElementById('b-precomfun-104').classList.add("incorrect")
    
          document.getElementById('sa-precomfun-10').disabled = true;
          document.getElementById('o-precomfun-101').disabled = true;
          document.getElementById('o-precomfun-102').disabled = true;
          document.getElementById('o-precomfun-103').disabled = true;
          document.getElementById('o-precomfun-104').disabled = true;
          showExplanation10()
          localStorage.setItem('precomfun10', 1)
        }
        if (document.getElementById('o-precomfun-103').checked) {
          document.getElementById('r-precomfun-103').style.color = 'red'
          document.getElementById('r-precomfun-103').innerHTML = 'Incorrect!'
          document.getElementById('r-precomfun-102').style.color = 'blue'
          document.getElementById('r-precomfun-102').innerHTML = 'Correct!'
          
          document.getElementById('b-precomfun-102').classList.add("correct")
          document.getElementById('b-precomfun-101').classList.add("incorrect")
          document.getElementById('b-precomfun-103').classList.add("incorrect")
          document.getElementById('b-precomfun-104').classList.add("incorrect")
    
          document.getElementById('sa-precomfun-10').disabled = true;
          document.getElementById('o-precomfun-101').disabled = true;
          document.getElementById('o-precomfun-102').disabled = true;
          document.getElementById('o-precomfun-103').disabled = true;
          document.getElementById('o-precomfun-104').disabled = true;
          showExplanation10()
          localStorage.setItem('precomfun10', 0)
        }
        if (document.getElementById('o-precomfun-104').checked) {
          document.getElementById('r-precomfun-104').style.color = 'red'
          document.getElementById('r-precomfun-104').innerHTML = 'Incorrect!'
          document.getElementById('r-precomfun-102').style.color = 'blue'
          document.getElementById('r-precomfun-102').innerHTML = 'Correct!'
          
          document.getElementById('b-precomfun-102').classList.add("correct")
          document.getElementById('b-precomfun-101').classList.add("incorrect")
          document.getElementById('b-precomfun-103').classList.add("incorrect")
          document.getElementById('b-precomfun-104').classList.add("incorrect")
    
          document.getElementById('sa-precomfun-10').disabled = true;
          document.getElementById('o-precomfun-101').disabled = true;
          document.getElementById('o-precomfun-102').disabled = true;
          document.getElementById('o-precomfun-103').disabled = true;
          document.getElementById('o-precomfun-104').disabled = true;
          showExplanation10()
          localStorage.setItem('precomfun10', 0)
        }
      }
    }
    