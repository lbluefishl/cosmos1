
  let geolinang1But = document.getElementById('sa-geolinang-1');
  let geolinang2But = document.getElementById('sa-geolinang-2');
  let geolinang3But = document.getElementById('sa-geolinang-3');
  let geolinang4But = document.getElementById('sa-geolinang-4');
  let geolinang5But = document.getElementById('sa-geolinang-5');
  let geolinang6But = document.getElementById('sa-geolinang-6');
  let geolinang7But = document.getElementById('sa-geolinang-7');
  let geolinang8But = document.getElementById('sa-geolinang-8');
  let geolinang9But = document.getElementById('sa-geolinang-9');
  let geolinang10But = document.getElementById('sa-geolinang-10');


  showExplanation1 = function() {
    document.getElementById('e-geolinang-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-geolinang-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-geolinang-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-geolinang-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-geolinang-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-geolinang-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-geolinang-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-geolinang-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-geolinang-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-geolinang-10').style.display = 'block';
     } 



     if (document.getElementById('sa-geolinang-1') != null) {
      geolinang1But.onclick = function () {
        if (document.getElementById('o-geolinang-11').checked) {
          document.getElementById('r-geolinang-11').style.color = 'red'
          document.getElementById('r-geolinang-11').innerHTML = 'Incorrect!'
          document.getElementById('r-geolinang-12').style.color = 'blue'
          document.getElementById('r-geolinang-12').innerHTML = 'Correct!'
    
          document.getElementById('b-geolinang-12').classList.add("correct")
          document.getElementById('b-geolinang-11').classList.add("incorrect")
          document.getElementById('b-geolinang-13').classList.add("incorrect")
          document.getElementById('b-geolinang-14').classList.add("incorrect")
    
          document.getElementById('sa-geolinang-1').disabled = true;
          document.getElementById('o-geolinang-11').disabled = true;
          document.getElementById('o-geolinang-12').disabled = true;
          document.getElementById('o-geolinang-13').disabled = true;
          document.getElementById('o-geolinang-14').disabled = true;
          showExplanation1()
          localStorage.setItem('geolinang1', 0)
        }
    
        if (document.getElementById('o-geolinang-12').checked) {
          document.getElementById('r-geolinang-12').style.color = 'blue'
          document.getElementById('r-geolinang-12').innerHTML = 'Correct!'
    
          document.getElementById('b-geolinang-12').classList.add("correct")
          document.getElementById('b-geolinang-11').classList.add("incorrect")
          document.getElementById('b-geolinang-13').classList.add("incorrect")
          document.getElementById('b-geolinang-14').classList.add("incorrect")
    
          document.getElementById('sa-geolinang-1').disabled = true;
          document.getElementById('o-geolinang-11').disabled = true;
          document.getElementById('o-geolinang-12').disabled = true;
          document.getElementById('o-geolinang-13').disabled = true;
          document.getElementById('o-geolinang-14').disabled = true;
          showExplanation1()
          localStorage.setItem('geolinang1', 1)
        }
        if (document.getElementById('o-geolinang-13').checked) {
          document.getElementById('r-geolinang-13').style.color = 'red'
          document.getElementById('r-geolinang-13').innerHTML = 'Incorrect!'
          document.getElementById('r-geolinang-12').style.color = 'blue'
          document.getElementById('r-geolinang-12').innerHTML = 'Correct!'
          
          document.getElementById('b-geolinang-12').classList.add("correct")
          document.getElementById('b-geolinang-11').classList.add("incorrect")
          document.getElementById('b-geolinang-13').classList.add("incorrect")
          document.getElementById('b-geolinang-14').classList.add("incorrect")
    
          document.getElementById('sa-geolinang-1').disabled = true;
          document.getElementById('o-geolinang-11').disabled = true;
          document.getElementById('o-geolinang-12').disabled = true;
          document.getElementById('o-geolinang-13').disabled = true;
          document.getElementById('o-geolinang-14').disabled = true;
          showExplanation1()
          localStorage.setItem('geolinang1', 0)
        }
        if (document.getElementById('o-geolinang-14').checked) {
          document.getElementById('r-geolinang-14').style.color = 'red'
          document.getElementById('r-geolinang-14').innerHTML = 'Incorrect!'
          document.getElementById('r-geolinang-12').style.color = 'blue'
          document.getElementById('r-geolinang-12').innerHTML = 'Correct!'
          
          document.getElementById('b-geolinang-12').classList.add("correct")
          document.getElementById('b-geolinang-11').classList.add("incorrect")
          document.getElementById('b-geolinang-13').classList.add("incorrect")
          document.getElementById('b-geolinang-14').classList.add("incorrect")
    
          document.getElementById('sa-geolinang-1').disabled = true;
          document.getElementById('o-geolinang-11').disabled = true;
          document.getElementById('o-geolinang-12').disabled = true;
          document.getElementById('o-geolinang-13').disabled = true;
          document.getElementById('o-geolinang-14').disabled = true;
          showExplanation1()
          localStorage.setItem('geolinang1', 0)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-geolinang-2') != null) {
      geolinang2But.onclick = function() {
        if (document.getElementById('o-geolinang-21').checked) {
          document.getElementById('r-geolinang-21').style.color = 'blue'
          document.getElementById('r-geolinang-21').innerHTML = 'Correct!'
          
          document.getElementById('b-geolinang-21').classList.add("correct")
          document.getElementById('b-geolinang-23').classList.add("incorrect")
          document.getElementById('b-geolinang-22').classList.add("incorrect")
          document.getElementById('b-geolinang-24').classList.add("incorrect")
    
          document.getElementById('sa-geolinang-2').disabled = true;
          document.getElementById('o-geolinang-21').disabled = true;
          document.getElementById('o-geolinang-22').disabled = true;
          document.getElementById('o-geolinang-23').disabled = true;
          document.getElementById('o-geolinang-24').disabled = true;
          showExplanation2()
          localStorage.setItem('geolinang2', 1)
        }
        if (document.getElementById('o-geolinang-22').checked) {
          document.getElementById('r-geolinang-22').style.color = 'red'
          document.getElementById('r-geolinang-22').innerHTML = 'Incorrect!'
          document.getElementById('r-geolinang-21').style.color = 'blue'
          document.getElementById('r-geolinang-21').innerHTML = 'Correct!'
          
          document.getElementById('b-geolinang-21').classList.add("correct")
          document.getElementById('b-geolinang-23').classList.add("incorrect")
          document.getElementById('b-geolinang-22').classList.add("incorrect")
          document.getElementById('b-geolinang-24').classList.add("incorrect")
    
          document.getElementById('sa-geolinang-2').disabled = true;
          document.getElementById('o-geolinang-21').disabled = true;
          document.getElementById('o-geolinang-22').disabled = true;
          document.getElementById('o-geolinang-23').disabled = true;
          document.getElementById('o-geolinang-24').disabled = true;
          showExplanation2()
          localStorage.setItem('geolinang2', 0)
        }
        if (document.getElementById('o-geolinang-23').checked) {
          document.getElementById('r-geolinang-23').style.color = 'red'
          document.getElementById('r-geolinang-23').innerHTML = 'Incorrect!'
          document.getElementById('r-geolinang-21').style.color = 'blue'
          document.getElementById('r-geolinang-21').innerHTML = 'Correct!'
          
          document.getElementById('b-geolinang-21').classList.add("correct")
          document.getElementById('b-geolinang-23').classList.add("incorrect")
          document.getElementById('b-geolinang-22').classList.add("incorrect")
          document.getElementById('b-geolinang-24').classList.add("incorrect")
    
          document.getElementById('sa-geolinang-2').disabled = true;
          document.getElementById('o-geolinang-21').disabled = true;
          document.getElementById('o-geolinang-22').disabled = true;
          document.getElementById('o-geolinang-23').disabled = true;
          document.getElementById('o-geolinang-24').disabled = true;
          showExplanation2()
          localStorage.setItem('geolinang2', 0)
        }
        if (document.getElementById('o-geolinang-24').checked) {
          document.getElementById('r-geolinang-24').style.color = 'red'
          document.getElementById('r-geolinang-24').innerHTML = 'Incorrect!'
          document.getElementById('r-geolinang-21').style.color = 'blue'
          document.getElementById('r-geolinang-21').innerHTML = 'Correct!'
          
          document.getElementById('b-geolinang-21').classList.add("correct")
          document.getElementById('b-geolinang-23').classList.add("incorrect")
          document.getElementById('b-geolinang-22').classList.add("incorrect")
          document.getElementById('b-geolinang-24').classList.add("incorrect")
    
          document.getElementById('sa-geolinang-2').disabled = true;
          document.getElementById('o-geolinang-21').disabled = true;
          document.getElementById('o-geolinang-22').disabled = true;
          document.getElementById('o-geolinang-23').disabled = true;
          document.getElementById('o-geolinang-24').disabled = true;
          showExplanation2()
          localStorage.setItem('geolinang2', 0)
        }
      }
    }
    
    if (document.getElementById('sa-geolinang-3') != null) {
      geolinang3But.onclick = function() {
        if (document.getElementById('o-geolinang-31').checked) {
          document.getElementById('r-geolinang-31').style.color = 'red'
          document.getElementById('r-geolinang-31').innerHTML = 'Incorrect!'
          document.getElementById('r-geolinang-33').style.color = 'blue'
          document.getElementById('r-geolinang-33').innerHTML = 'Correct!'
          
          document.getElementById('b-geolinang-33').classList.add("correct")
          document.getElementById('b-geolinang-31').classList.add("incorrect")
          document.getElementById('b-geolinang-32').classList.add("incorrect")
          document.getElementById('b-geolinang-34').classList.add("incorrect")
    
          document.getElementById('sa-geolinang-3').disabled = true;
          document.getElementById('o-geolinang-31').disabled = true;
          document.getElementById('o-geolinang-32').disabled = true;
          document.getElementById('o-geolinang-33').disabled = true;
          document.getElementById('o-geolinang-34').disabled = true;
          showExplanation3()
          localStorage.setItem('geolinang3', 0)
        }
        if (document.getElementById('o-geolinang-32').checked) {
          document.getElementById('r-geolinang-32').style.color = 'red'
          document.getElementById('r-geolinang-32').innerHTML = 'Incorrect!'
          document.getElementById('r-geolinang-33').style.color = 'blue'
          document.getElementById('r-geolinang-33').innerHTML = 'Correct!'
          
          document.getElementById('b-geolinang-33').classList.add("correct")
          document.getElementById('b-geolinang-31').classList.add("incorrect")
          document.getElementById('b-geolinang-32').classList.add("incorrect")
          document.getElementById('b-geolinang-34').classList.add("incorrect")
    
          document.getElementById('sa-geolinang-3').disabled = true;
          document.getElementById('o-geolinang-31').disabled = true;
          document.getElementById('o-geolinang-32').disabled = true;
          document.getElementById('o-geolinang-33').disabled = true;
          document.getElementById('o-geolinang-34').disabled = true;
          showExplanation3()
          localStorage.setItem('geolinang3', 0)
        }
        if (document.getElementById('o-geolinang-33').checked) {
          document.getElementById('r-geolinang-33').style.color = 'blue'
          document.getElementById('r-geolinang-33').innerHTML = 'Correct!'
          
          document.getElementById('b-geolinang-33').classList.add("correct")
          document.getElementById('b-geolinang-31').classList.add("incorrect")
          document.getElementById('b-geolinang-32').classList.add("incorrect")
          document.getElementById('b-geolinang-34').classList.add("incorrect")
    
          document.getElementById('sa-geolinang-3').disabled = true;
          document.getElementById('o-geolinang-31').disabled = true;
          document.getElementById('o-geolinang-32').disabled = true;
          document.getElementById('o-geolinang-33').disabled = true;
          document.getElementById('o-geolinang-34').disabled = true;
          showExplanation3()
          localStorage.setItem('geolinang3', 1)
        }
        if (document.getElementById('o-geolinang-34').checked) {
          document.getElementById('r-geolinang-34').style.color = 'red'
          document.getElementById('r-geolinang-34').innerHTML = 'Incorrect!'
          document.getElementById('r-geolinang-33').style.color = 'blue'
          document.getElementById('r-geolinang-33').innerHTML = 'Correct!'
          
          document.getElementById('b-geolinang-33').classList.add("correct")
          document.getElementById('b-geolinang-31').classList.add("incorrect")
          document.getElementById('b-geolinang-32').classList.add("incorrect")
          document.getElementById('b-geolinang-34').classList.add("incorrect")
    
          document.getElementById('sa-geolinang-3').disabled = true;
          document.getElementById('o-geolinang-31').disabled = true;
          document.getElementById('o-geolinang-32').disabled = true;
          document.getElementById('o-geolinang-33').disabled = true;
          document.getElementById('o-geolinang-34').disabled = true;
          showExplanation3()
          localStorage.setItem('geolinang3', 0)
        }
      }
    }
    
    if (document.getElementById('sa-geolinang-4') != null) {
      geolinang4But.onclick = function() {
        if (document.getElementById('o-geolinang-41').checked) {
          document.getElementById('r-geolinang-41').style.color = 'red'
          document.getElementById('r-geolinang-41').innerHTML = 'Incorrect!'
          document.getElementById('r-geolinang-44').style.color = 'blue'
          document.getElementById('r-geolinang-44').innerHTML = 'Correct!'
          
          document.getElementById('b-geolinang-44').classList.add("correct")
          document.getElementById('b-geolinang-41').classList.add("incorrect")
          document.getElementById('b-geolinang-42').classList.add("incorrect")
          document.getElementById('b-geolinang-43').classList.add("incorrect")
    
          document.getElementById('sa-geolinang-4').disabled = true;
          document.getElementById('o-geolinang-41').disabled = true;
          document.getElementById('o-geolinang-42').disabled = true;
          document.getElementById('o-geolinang-43').disabled = true;
          document.getElementById('o-geolinang-44').disabled = true;
          showExplanation4()
          localStorage.setItem('geolinang4', 0)
        }
        if (document.getElementById('o-geolinang-42').checked) {
          document.getElementById('r-geolinang-42').style.color = 'red'
          document.getElementById('r-geolinang-42').innerHTML = 'Incorrect!'
          document.getElementById('r-geolinang-44').style.color = 'blue'
          document.getElementById('r-geolinang-44').innerHTML = 'Correct!'
          
          document.getElementById('b-geolinang-44').classList.add("correct")
          document.getElementById('b-geolinang-41').classList.add("incorrect")
          document.getElementById('b-geolinang-42').classList.add("incorrect")
          document.getElementById('b-geolinang-43').classList.add("incorrect")
    
          document.getElementById('sa-geolinang-4').disabled = true;
          document.getElementById('o-geolinang-41').disabled = true;
          document.getElementById('o-geolinang-42').disabled = true;
          document.getElementById('o-geolinang-43').disabled = true;
          document.getElementById('o-geolinang-44').disabled = true;
          showExplanation4()
          localStorage.setItem('geolinang4', 0)
        }
        if (document.getElementById('o-geolinang-43').checked) {
          document.getElementById('r-geolinang-43').style.color = 'red'
          document.getElementById('r-geolinang-43').innerHTML = 'Incorrect!'
          document.getElementById('r-geolinang-44').style.color = 'blue'
          document.getElementById('r-geolinang-44').innerHTML = 'Correct!'
          
          document.getElementById('b-geolinang-44').classList.add("correct")
          document.getElementById('b-geolinang-41').classList.add("incorrect")
          document.getElementById('b-geolinang-42').classList.add("incorrect")
          document.getElementById('b-geolinang-43').classList.add("incorrect")
    
          document.getElementById('sa-geolinang-4').disabled = true;
          document.getElementById('o-geolinang-41').disabled = true;
          document.getElementById('o-geolinang-42').disabled = true;
          document.getElementById('o-geolinang-43').disabled = true;
          document.getElementById('o-geolinang-44').disabled = true;
          showExplanation4()
          localStorage.setItem('geolinang4', 0)
        }
        if (document.getElementById('o-geolinang-44').checked) {
          document.getElementById('r-geolinang-44').style.color = 'blue'
          document.getElementById('r-geolinang-44').innerHTML = 'Correct!'
          
          document.getElementById('b-geolinang-44').classList.add("correct")
          document.getElementById('b-geolinang-41').classList.add("incorrect")
          document.getElementById('b-geolinang-42').classList.add("incorrect")
          document.getElementById('b-geolinang-43').classList.add("incorrect")
    
          document.getElementById('sa-geolinang-4').disabled = true;
          document.getElementById('o-geolinang-41').disabled = true;
          document.getElementById('o-geolinang-42').disabled = true;
          document.getElementById('o-geolinang-43').disabled = true;
          document.getElementById('o-geolinang-44').disabled = true;
          showExplanation4()
          localStorage.setItem('geolinang4', 1)
        }
      }
    }
    
    if (document.getElementById('sa-geolinang-5') != null) {
      geolinang5But.onclick = function() {
        if (document.getElementById('o-geolinang-51').checked) {
          document.getElementById('r-geolinang-51').style.color = 'red'
          document.getElementById('r-geolinang-51').innerHTML = 'Incorrect!'
          document.getElementById('r-geolinang-53').style.color = 'blue'
          document.getElementById('r-geolinang-53').innerHTML = 'Correct!'
          
          document.getElementById('b-geolinang-53').classList.add("correct")
          document.getElementById('b-geolinang-51').classList.add("incorrect")
          document.getElementById('b-geolinang-52').classList.add("incorrect")
          document.getElementById('b-geolinang-54').classList.add("incorrect")
    
          document.getElementById('sa-geolinang-5').disabled = true;
          document.getElementById('o-geolinang-51').disabled = true;
          document.getElementById('o-geolinang-52').disabled = true;
          document.getElementById('o-geolinang-53').disabled = true;
          document.getElementById('o-geolinang-54').disabled = true;
          showExplanation5()
          localStorage.setItem('geolinang5', 0)
        }
        if (document.getElementById('o-geolinang-52').checked) {
          document.getElementById('r-geolinang-52').style.color = 'red'
          document.getElementById('r-geolinang-52').innerHTML = 'Incorrect!'
          document.getElementById('r-geolinang-53').style.color = 'blue'
          document.getElementById('r-geolinang-53').innerHTML = 'Correct!'
          
          document.getElementById('b-geolinang-53').classList.add("correct")
          document.getElementById('b-geolinang-51').classList.add("incorrect")
          document.getElementById('b-geolinang-52').classList.add("incorrect")
          document.getElementById('b-geolinang-54').classList.add("incorrect")
    
          document.getElementById('sa-geolinang-5').disabled = true;
          document.getElementById('o-geolinang-51').disabled = true;
          document.getElementById('o-geolinang-52').disabled = true;
          document.getElementById('o-geolinang-53').disabled = true;
          document.getElementById('o-geolinang-54').disabled = true;
          showExplanation5()
          localStorage.setItem('geolinang5', 0)
        }
        if (document.getElementById('o-geolinang-53').checked) {
          document.getElementById('r-geolinang-53').style.color = 'blue'
          document.getElementById('r-geolinang-53').innerHTML = 'Correct!'
          
          document.getElementById('b-geolinang-53').classList.add("correct")
          document.getElementById('b-geolinang-51').classList.add("incorrect")
          document.getElementById('b-geolinang-52').classList.add("incorrect")
          document.getElementById('b-geolinang-54').classList.add("incorrect")
    
          document.getElementById('sa-geolinang-5').disabled = true;
          document.getElementById('o-geolinang-51').disabled = true;
          document.getElementById('o-geolinang-52').disabled = true;
          document.getElementById('o-geolinang-53').disabled = true;
          document.getElementById('o-geolinang-54').disabled = true;
          showExplanation5()
          localStorage.setItem('geolinang5', 1)
        }
        if (document.getElementById('o-geolinang-54').checked) {
          document.getElementById('r-geolinang-54').style.color = 'red'
          document.getElementById('r-geolinang-54').innerHTML = 'Incorrect!'
          document.getElementById('r-geolinang-53').style.color = 'blue'
          document.getElementById('r-geolinang-53').innerHTML = 'Correct!'
          
          document.getElementById('b-geolinang-53').classList.add("correct")
          document.getElementById('b-geolinang-51').classList.add("incorrect")
          document.getElementById('b-geolinang-52').classList.add("incorrect")
          document.getElementById('b-geolinang-54').classList.add("incorrect")
    
          document.getElementById('sa-geolinang-5').disabled = true;
          document.getElementById('o-geolinang-51').disabled = true;
          document.getElementById('o-geolinang-52').disabled = true;
          document.getElementById('o-geolinang-53').disabled = true;
          document.getElementById('o-geolinang-54').disabled = true;
          showExplanation5()
          localStorage.setItem('geolinang5', 0)
        }
      }
    }
        
         
      if (document.getElementById('sa-geolinang-6') != null) {
      geolinang6But.onclick = function() {
        if (document.getElementById('o-geolinang-61').checked) {
          document.getElementById('r-geolinang-61').style.color = 'red'
          document.getElementById('r-geolinang-61').innerHTML = 'Incorrect!'
          document.getElementById('r-geolinang-64').style.color = 'blue'
          document.getElementById('r-geolinang-64').innerHTML = 'Correct!'
          
          document.getElementById('b-geolinang-64').classList.add("correct")
          document.getElementById('b-geolinang-61').classList.add("incorrect")
          document.getElementById('b-geolinang-62').classList.add("incorrect")
          document.getElementById('b-geolinang-63').classList.add("incorrect")
    
          document.getElementById('sa-geolinang-6').disabled = true;
          document.getElementById('o-geolinang-61').disabled = true;
          document.getElementById('o-geolinang-62').disabled = true;
          document.getElementById('o-geolinang-63').disabled = true;
          document.getElementById('o-geolinang-64').disabled = true;
          showExplanation6()
          localStorage.setItem('geolinang6', 0)
        }
        if (document.getElementById('o-geolinang-62').checked) {
          document.getElementById('r-geolinang-62').style.color = 'red'
          document.getElementById('r-geolinang-62').innerHTML = 'Incorrect!'
          document.getElementById('r-geolinang-64').style.color = 'blue'
          document.getElementById('r-geolinang-64').innerHTML = 'Correct!'
          
          document.getElementById('b-geolinang-64').classList.add("correct")
          document.getElementById('b-geolinang-61').classList.add("incorrect")
          document.getElementById('b-geolinang-62').classList.add("incorrect")
          document.getElementById('b-geolinang-63').classList.add("incorrect")
    
          document.getElementById('sa-geolinang-6').disabled = true;
          document.getElementById('o-geolinang-61').disabled = true;
          document.getElementById('o-geolinang-62').disabled = true;
          document.getElementById('o-geolinang-63').disabled = true;
          document.getElementById('o-geolinang-64').disabled = true;
          showExplanation6()
          localStorage.setItem('geolinang6', 0)
        }
        if (document.getElementById('o-geolinang-63').checked) {
          document.getElementById('r-geolinang-63').style.color = 'red'
          document.getElementById('r-geolinang-63').innerHTML = 'Incorrect!'
          document.getElementById('r-geolinang-64').style.color = 'blue'
          document.getElementById('r-geolinang-64').innerHTML = 'Correct!'
          
          document.getElementById('b-geolinang-64').classList.add("correct")
          document.getElementById('b-geolinang-61').classList.add("incorrect")
          document.getElementById('b-geolinang-62').classList.add("incorrect")
          document.getElementById('b-geolinang-63').classList.add("incorrect")
    
          document.getElementById('sa-geolinang-6').disabled = true;
          document.getElementById('o-geolinang-61').disabled = true;
          document.getElementById('o-geolinang-62').disabled = true;
          document.getElementById('o-geolinang-63').disabled = true;
          document.getElementById('o-geolinang-64').disabled = true;
          showExplanation6()
          localStorage.setItem('geolinang6', 0)
        }
        if (document.getElementById('o-geolinang-64').checked) {
          document.getElementById('r-geolinang-64').style.color = 'blue'
          document.getElementById('r-geolinang-64').innerHTML = 'Correct!'
          
          document.getElementById('b-geolinang-64').classList.add("correct")
          document.getElementById('b-geolinang-61').classList.add("incorrect")
          document.getElementById('b-geolinang-62').classList.add("incorrect")
          document.getElementById('b-geolinang-63').classList.add("incorrect")
    
          document.getElementById('sa-geolinang-6').disabled = true;
          document.getElementById('o-geolinang-61').disabled = true;
          document.getElementById('o-geolinang-62').disabled = true;
          document.getElementById('o-geolinang-63').disabled = true;
          document.getElementById('o-geolinang-64').disabled = true;
          showExplanation6()
          localStorage.setItem('geolinang6', 1)
        }
      }
    }
    
    if (document.getElementById('sa-geolinang-7') != null) {
      geolinang7But.onclick = function() {
        if (document.getElementById('o-geolinang-71').checked) {
          document.getElementById('r-geolinang-71').style.color = 'red'
          document.getElementById('r-geolinang-71').innerHTML = 'Incorrect!'
          document.getElementById('r-geolinang-74').style.color = 'blue'
          document.getElementById('r-geolinang-74').innerHTML = 'Correct!'
          
          document.getElementById('b-geolinang-74').classList.add("correct")
          document.getElementById('b-geolinang-71').classList.add("incorrect")
          document.getElementById('b-geolinang-72').classList.add("incorrect")
          document.getElementById('b-geolinang-73').classList.add("incorrect")
    
          document.getElementById('sa-geolinang-7').disabled = true;
          document.getElementById('o-geolinang-71').disabled = true;
          document.getElementById('o-geolinang-72').disabled = true;
          document.getElementById('o-geolinang-73').disabled = true;
          document.getElementById('o-geolinang-74').disabled = true;
          showExplanation7()
          localStorage.setItem('geolinang7', 0)
        }
        if (document.getElementById('o-geolinang-72').checked) {
          document.getElementById('r-geolinang-72').style.color = 'red'
          document.getElementById('r-geolinang-72').innerHTML = 'Incorrect!'
          document.getElementById('r-geolinang-74').style.color = 'blue'
          document.getElementById('r-geolinang-74').innerHTML = 'Correct!'
          
          document.getElementById('b-geolinang-74').classList.add("correct")
          document.getElementById('b-geolinang-71').classList.add("incorrect")
          document.getElementById('b-geolinang-72').classList.add("incorrect")
          document.getElementById('b-geolinang-73').classList.add("incorrect")
    
          document.getElementById('sa-geolinang-7').disabled = true;
          document.getElementById('o-geolinang-71').disabled = true;
          document.getElementById('o-geolinang-72').disabled = true;
          document.getElementById('o-geolinang-73').disabled = true;
          document.getElementById('o-geolinang-74').disabled = true;
          showExplanation7()
          localStorage.setItem('geolinang7', 0)
        }
        if (document.getElementById('o-geolinang-73').checked) {
          document.getElementById('r-geolinang-73').style.color = 'red'
          document.getElementById('r-geolinang-73').innerHTML = 'Incorrect!'
          document.getElementById('r-geolinang-74').style.color = 'blue'
          document.getElementById('r-geolinang-74').innerHTML = 'Correct!'
          
          document.getElementById('b-geolinang-74').classList.add("correct")
          document.getElementById('b-geolinang-71').classList.add("incorrect")
          document.getElementById('b-geolinang-72').classList.add("incorrect")
          document.getElementById('b-geolinang-73').classList.add("incorrect")
    
          document.getElementById('sa-geolinang-7').disabled = true;
          document.getElementById('o-geolinang-71').disabled = true;
          document.getElementById('o-geolinang-72').disabled = true;
          document.getElementById('o-geolinang-73').disabled = true;
          document.getElementById('o-geolinang-74').disabled = true;
          showExplanation7()
          localStorage.setItem('geolinang7', 0)
        }
        if (document.getElementById('o-geolinang-74').checked) {
          document.getElementById('r-geolinang-74').style.color = 'blue'
          document.getElementById('r-geolinang-74').innerHTML = 'Correct!'
          
          document.getElementById('b-geolinang-74').classList.add("correct")
          document.getElementById('b-geolinang-71').classList.add("incorrect")
          document.getElementById('b-geolinang-72').classList.add("incorrect")
          document.getElementById('b-geolinang-73').classList.add("incorrect")
    
          document.getElementById('sa-geolinang-7').disabled = true;
          document.getElementById('o-geolinang-71').disabled = true;
          document.getElementById('o-geolinang-72').disabled = true;
          document.getElementById('o-geolinang-73').disabled = true;
          document.getElementById('o-geolinang-74').disabled = true;
          showExplanation7()
          localStorage.setItem('geolinang7', 1)
        }
      }
    }
    
    
    if (document.getElementById('sa-geolinang-8') != null) {
      geolinang8But.onclick = function() {
        if (document.getElementById('o-geolinang-81').checked) {
          document.getElementById('r-geolinang-81').style.color = 'red'
          document.getElementById('r-geolinang-81').innerHTML = 'Incorrect!'
          document.getElementById('r-geolinang-82').style.color = 'blue'
          document.getElementById('r-geolinang-82').innerHTML = 'Correct!'
          
          document.getElementById('b-geolinang-82').classList.add("correct")
          document.getElementById('b-geolinang-81').classList.add("incorrect")
          document.getElementById('b-geolinang-83').classList.add("incorrect")
          document.getElementById('b-geolinang-84').classList.add("incorrect")
    
          document.getElementById('sa-geolinang-8').disabled = true;
          document.getElementById('o-geolinang-81').disabled = true;
          document.getElementById('o-geolinang-82').disabled = true;
          document.getElementById('o-geolinang-83').disabled = true;
          document.getElementById('o-geolinang-84').disabled = true;
          showExplanation8()
          localStorage.setItem('geolinang8', 0)
        }
        if (document.getElementById('o-geolinang-82').checked) {
          document.getElementById('r-geolinang-82').style.color = 'blue'
          document.getElementById('r-geolinang-82').innerHTML = 'Correct!'
          
          document.getElementById('b-geolinang-82').classList.add("correct")
          document.getElementById('b-geolinang-81').classList.add("incorrect")
          document.getElementById('b-geolinang-83').classList.add("incorrect")
          document.getElementById('b-geolinang-84').classList.add("incorrect")
    
          document.getElementById('sa-geolinang-8').disabled = true;
          document.getElementById('o-geolinang-81').disabled = true;
          document.getElementById('o-geolinang-82').disabled = true;
          document.getElementById('o-geolinang-83').disabled = true;
          document.getElementById('o-geolinang-84').disabled = true;
          showExplanation8()
          localStorage.setItem('geolinang8', 1)
        }
        if (document.getElementById('o-geolinang-83').checked) {
          document.getElementById('r-geolinang-83').style.color = 'red'
          document.getElementById('r-geolinang-83').innerHTML = 'Incorrect!'
          document.getElementById('r-geolinang-82').style.color = 'blue'
          document.getElementById('r-geolinang-82').innerHTML = 'Correct!'
          
          document.getElementById('b-geolinang-82').classList.add("correct")
          document.getElementById('b-geolinang-81').classList.add("incorrect")
          document.getElementById('b-geolinang-83').classList.add("incorrect")
          document.getElementById('b-geolinang-84').classList.add("incorrect")
    
          document.getElementById('sa-geolinang-8').disabled = true;
          document.getElementById('o-geolinang-81').disabled = true;
          document.getElementById('o-geolinang-82').disabled = true;
          document.getElementById('o-geolinang-83').disabled = true;
          document.getElementById('o-geolinang-84').disabled = true;
          showExplanation8()
          localStorage.setItem('geolinang8', 0)
        }
        if (document.getElementById('o-geolinang-84').checked) {
          document.getElementById('r-geolinang-84').style.color = 'red'
          document.getElementById('r-geolinang-84').innerHTML = 'Incorrect!'
          document.getElementById('r-geolinang-82').style.color = 'blue'
          document.getElementById('r-geolinang-82').innerHTML = 'Correct!'
          
          document.getElementById('b-geolinang-82').classList.add("correct")
          document.getElementById('b-geolinang-81').classList.add("incorrect")
          document.getElementById('b-geolinang-83').classList.add("incorrect")
          document.getElementById('b-geolinang-84').classList.add("incorrect")
    
          document.getElementById('sa-geolinang-8').disabled = true;
          document.getElementById('o-geolinang-81').disabled = true;
          document.getElementById('o-geolinang-82').disabled = true;
          document.getElementById('o-geolinang-83').disabled = true;
          document.getElementById('o-geolinang-84').disabled = true;
          showExplanation8()
          localStorage.setItem('geolinang8', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-geolinang-9') != null) {
      geolinang9But.onclick = function() {
        if (document.getElementById('o-geolinang-91').checked) {
          document.getElementById('r-geolinang-91').style.color = 'red'
          document.getElementById('r-geolinang-91').innerHTML = 'Incorrect!'
          document.getElementById('r-geolinang-94').style.color = 'blue'
          document.getElementById('r-geolinang-94').innerHTML = 'Correct!'
          
          document.getElementById('b-geolinang-94').classList.add("correct")
          document.getElementById('b-geolinang-91').classList.add("incorrect")
          document.getElementById('b-geolinang-92').classList.add("incorrect")
          document.getElementById('b-geolinang-93').classList.add("incorrect")
    
          document.getElementById('sa-geolinang-9').disabled = true;
          document.getElementById('o-geolinang-91').disabled = true;
          document.getElementById('o-geolinang-92').disabled = true;
          document.getElementById('o-geolinang-93').disabled = true;
          document.getElementById('o-geolinang-94').disabled = true;
          showExplanation9()
          localStorage.setItem('geolinang9', 0)
        }
        if (document.getElementById('o-geolinang-92').checked) {
          document.getElementById('r-geolinang-91').style.color = 'red'
          document.getElementById('r-geolinang-91').innerHTML = 'Incorrect!'
          document.getElementById('r-geolinang-94').style.color = 'blue'
          document.getElementById('r-geolinang-94').innerHTML = 'Correct!'
          
          document.getElementById('b-geolinang-94').classList.add("correct")
          document.getElementById('b-geolinang-91').classList.add("incorrect")
          document.getElementById('b-geolinang-92').classList.add("incorrect")
          document.getElementById('b-geolinang-93').classList.add("incorrect")
    
          document.getElementById('sa-geolinang-9').disabled = true;
          document.getElementById('o-geolinang-91').disabled = true;
          document.getElementById('o-geolinang-92').disabled = true;
          document.getElementById('o-geolinang-93').disabled = true;
          document.getElementById('o-geolinang-94').disabled = true;
          showExplanation9()
          localStorage.setItem('geolinang9', 0)
        }
        if (document.getElementById('o-geolinang-93').checked) {
          document.getElementById('r-geolinang-91').style.color = 'red'
          document.getElementById('r-geolinang-91').innerHTML = 'Incorrect!'
          document.getElementById('r-geolinang-94').style.color = 'blue'
          document.getElementById('r-geolinang-94').innerHTML = 'Correct!'
          
          document.getElementById('b-geolinang-94').classList.add("correct")
          document.getElementById('b-geolinang-91').classList.add("incorrect")
          document.getElementById('b-geolinang-92').classList.add("incorrect")
          document.getElementById('b-geolinang-93').classList.add("incorrect")
    
          document.getElementById('sa-geolinang-9').disabled = true;
          document.getElementById('o-geolinang-91').disabled = true;
          document.getElementById('o-geolinang-92').disabled = true;
          document.getElementById('o-geolinang-93').disabled = true;
          document.getElementById('o-geolinang-94').disabled = true;
          showExplanation9()
          localStorage.setItem('geolinang9', 0)
        }
        if (document.getElementById('o-geolinang-94').checked) {
          document.getElementById('r-geolinang-94').style.color = 'blue'
          document.getElementById('r-geolinang-94').innerHTML = 'Correct!'
          
          document.getElementById('b-geolinang-94').classList.add("correct")
          document.getElementById('b-geolinang-91').classList.add("incorrect")
          document.getElementById('b-geolinang-92').classList.add("incorrect")
          document.getElementById('b-geolinang-93').classList.add("incorrect")
    
          document.getElementById('sa-geolinang-9').disabled = true;
          document.getElementById('o-geolinang-91').disabled = true;
          document.getElementById('o-geolinang-92').disabled = true;
          document.getElementById('o-geolinang-93').disabled = true;
          document.getElementById('o-geolinang-94').disabled = true;
          showExplanation9()
          localStorage.setItem('geolinang9', 1)
        }
      }
    }
    
    if (document.getElementById('sa-geolinang-10') != null) {
      geolinang10But.onclick = function() {
        if (document.getElementById('o-geolinang-101').checked) {
          document.getElementById('r-geolinang-101').style.color = 'red'
          document.getElementById('r-geolinang-101').innerHTML = 'Incorrect!'
          document.getElementById('r-geolinang-102').style.color = 'blue'
          document.getElementById('r-geolinang-102').innerHTML = 'Correct!'
          
          document.getElementById('b-geolinang-102').classList.add("correct")
          document.getElementById('b-geolinang-101').classList.add("incorrect")
          document.getElementById('b-geolinang-103').classList.add("incorrect")
          document.getElementById('b-geolinang-104').classList.add("incorrect")
    
          document.getElementById('sa-geolinang-10').disabled = true;
          document.getElementById('o-geolinang-101').disabled = true;
          document.getElementById('o-geolinang-102').disabled = true;
          document.getElementById('o-geolinang-103').disabled = true;
          document.getElementById('o-geolinang-104').disabled = true;
          showExplanation10()
          localStorage.setItem('geolinang10', 0)
        }
        if (document.getElementById('o-geolinang-102').checked) {
          document.getElementById('r-geolinang-102').style.color = 'blue'
          document.getElementById('r-geolinang-102').innerHTML = 'Correct!'
          
          document.getElementById('b-geolinang-102').classList.add("correct")
          document.getElementById('b-geolinang-101').classList.add("incorrect")
          document.getElementById('b-geolinang-103').classList.add("incorrect")
          document.getElementById('b-geolinang-104').classList.add("incorrect")
    
          document.getElementById('sa-geolinang-10').disabled = true;
          document.getElementById('o-geolinang-101').disabled = true;
          document.getElementById('o-geolinang-102').disabled = true;
          document.getElementById('o-geolinang-103').disabled = true;
          document.getElementById('o-geolinang-104').disabled = true;
          showExplanation10()
          localStorage.setItem('geolinang10', 1)
        }
        if (document.getElementById('o-geolinang-103').checked) {
          document.getElementById('r-geolinang-103').style.color = 'red'
          document.getElementById('r-geolinang-103').innerHTML = 'Incorrect!'
          document.getElementById('r-geolinang-102').style.color = 'blue'
          document.getElementById('r-geolinang-102').innerHTML = 'Correct!'
          
          document.getElementById('b-geolinang-102').classList.add("correct")
          document.getElementById('b-geolinang-101').classList.add("incorrect")
          document.getElementById('b-geolinang-103').classList.add("incorrect")
          document.getElementById('b-geolinang-104').classList.add("incorrect")
    
          document.getElementById('sa-geolinang-10').disabled = true;
          document.getElementById('o-geolinang-101').disabled = true;
          document.getElementById('o-geolinang-102').disabled = true;
          document.getElementById('o-geolinang-103').disabled = true;
          document.getElementById('o-geolinang-104').disabled = true;
          showExplanation10()
          localStorage.setItem('geolinang10', 0)
        }
        if (document.getElementById('o-geolinang-104').checked) {
          document.getElementById('r-geolinang-104').style.color = 'red'
          document.getElementById('r-geolinang-104').innerHTML = 'Incorrect!'
          document.getElementById('r-geolinang-102').style.color = 'blue'
          document.getElementById('r-geolinang-102').innerHTML = 'Correct!'
          
          document.getElementById('b-geolinang-102').classList.add("correct")
          document.getElementById('b-geolinang-101').classList.add("incorrect")
          document.getElementById('b-geolinang-103').classList.add("incorrect")
          document.getElementById('b-geolinang-104').classList.add("incorrect")
    
          document.getElementById('sa-geolinang-10').disabled = true;
          document.getElementById('o-geolinang-101').disabled = true;
          document.getElementById('o-geolinang-102').disabled = true;
          document.getElementById('o-geolinang-103').disabled = true;
          document.getElementById('o-geolinang-104').disabled = true;
          showExplanation10()
          localStorage.setItem('geolinang10', 0)
        }
      }
    }
    