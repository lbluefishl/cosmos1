
  let writrawor1But = document.getElementById('sa-writrawor-1');
  let writrawor2But = document.getElementById('sa-writrawor-2');
  let writrawor3But = document.getElementById('sa-writrawor-3');
  let writrawor4But = document.getElementById('sa-writrawor-4');
  let writrawor5But = document.getElementById('sa-writrawor-5');
  let writrawor6But = document.getElementById('sa-writrawor-6');
  let writrawor7But = document.getElementById('sa-writrawor-7');
  let writrawor8But = document.getElementById('sa-writrawor-8');
  let writrawor9But = document.getElementById('sa-writrawor-9');
  let writrawor10But = document.getElementById('sa-writrawor-10');


  showExplanation1 = function() {
    document.getElementById('e-writrawor-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-writrawor-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-writrawor-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-writrawor-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-writrawor-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-writrawor-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-writrawor-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-writrawor-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-writrawor-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-writrawor-10').style.display = 'block';
     } 



     if (document.getElementById('sa-writrawor-1') != null) {
      writrawor1But.onclick = function () {
        if (document.getElementById('o-writrawor-11').checked) {
          document.getElementById('r-writrawor-11').style.color = 'blue'
          document.getElementById('r-writrawor-11').innerHTML = 'Correct!'
    
          document.getElementById('b-writrawor-11').classList.add("correct")
          document.getElementById('b-writrawor-12').classList.add("incorrect")
          document.getElementById('b-writrawor-13').classList.add("incorrect")
          document.getElementById('b-writrawor-14').classList.add("incorrect")
    
          document.getElementById('sa-writrawor-1').disabled = true;
          document.getElementById('o-writrawor-11').disabled = true;
          document.getElementById('o-writrawor-12').disabled = true;
          document.getElementById('o-writrawor-13').disabled = true;
          document.getElementById('o-writrawor-14').disabled = true;
          showExplanation1()
          localStorage.setItem('writrawor1', 1)
        }
    
        if (document.getElementById('o-writrawor-12').checked) {
         
          document.getElementById('r-writrawor-12').style.color = 'red'
          document.getElementById('r-writrawor-12').innerHTML = 'Incorrect!'
          document.getElementById('r-writrawor-11').style.color = 'blue'
          document.getElementById('r-writrawor-11').innerHTML = 'Correct!'
    
          document.getElementById('b-writrawor-11').classList.add("correct")
          document.getElementById('b-writrawor-12').classList.add("incorrect")
          document.getElementById('b-writrawor-13').classList.add("incorrect")
          document.getElementById('b-writrawor-14').classList.add("incorrect")
    
          document.getElementById('sa-writrawor-1').disabled = true;
          document.getElementById('o-writrawor-11').disabled = true;
          document.getElementById('o-writrawor-12').disabled = true;
          document.getElementById('o-writrawor-13').disabled = true;
          document.getElementById('o-writrawor-14').disabled = true;
          showExplanation1()
          localStorage.setItem('writrawor1', 0)
        }
        if (document.getElementById('o-writrawor-13').checked) {
          document.getElementById('r-writrawor-13').style.color = 'red'
          document.getElementById('r-writrawor-13').innerHTML = 'Incorrect!'
          document.getElementById('r-writrawor-11').style.color = 'blue'
          document.getElementById('r-writrawor-11').innerHTML = 'Correct!'
          
          document.getElementById('b-writrawor-11').classList.add("correct")
          document.getElementById('b-writrawor-12').classList.add("incorrect")
          document.getElementById('b-writrawor-13').classList.add("incorrect")
          document.getElementById('b-writrawor-14').classList.add("incorrect")
    
          document.getElementById('sa-writrawor-1').disabled = true;
          document.getElementById('o-writrawor-11').disabled = true;
          document.getElementById('o-writrawor-12').disabled = true;
          document.getElementById('o-writrawor-13').disabled = true;
          document.getElementById('o-writrawor-14').disabled = true;
          showExplanation1()
          localStorage.setItem('writrawor1', 0)
        }
        if (document.getElementById('o-writrawor-14').checked) {
          document.getElementById('r-writrawor-14').style.color = 'red'
          document.getElementById('r-writrawor-14').innerHTML = 'Incorrect!'
          document.getElementById('r-writrawor-11').style.color = 'blue'
          document.getElementById('r-writrawor-11').innerHTML = 'Correct!'
          
          document.getElementById('b-writrawor-11').classList.add("correct")
          document.getElementById('b-writrawor-12').classList.add("incorrect")
          document.getElementById('b-writrawor-13').classList.add("incorrect")
          document.getElementById('b-writrawor-14').classList.add("incorrect")
    
          document.getElementById('sa-writrawor-1').disabled = true;
          document.getElementById('o-writrawor-11').disabled = true;
          document.getElementById('o-writrawor-12').disabled = true;
          document.getElementById('o-writrawor-13').disabled = true;
          document.getElementById('o-writrawor-14').disabled = true;
          showExplanation1()
          localStorage.setItem('writrawor1', 0)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-writrawor-2') != null) {
      writrawor2But.onclick = function() {
        if (document.getElementById('o-writrawor-21').checked) {
          document.getElementById('r-writrawor-21').style.color = 'red'
          document.getElementById('r-writrawor-21').innerHTML = 'Incorrect!'
          document.getElementById('r-writrawor-23').style.color = 'blue'
          document.getElementById('r-writrawor-23').innerHTML = 'Correct!'
          
          document.getElementById('b-writrawor-23').classList.add("correct")
          document.getElementById('b-writrawor-21').classList.add("incorrect")
          document.getElementById('b-writrawor-22').classList.add("incorrect")
          document.getElementById('b-writrawor-24').classList.add("incorrect")
    
          document.getElementById('sa-writrawor-2').disabled = true;
          document.getElementById('o-writrawor-21').disabled = true;
          document.getElementById('o-writrawor-22').disabled = true;
          document.getElementById('o-writrawor-23').disabled = true;
          document.getElementById('o-writrawor-24').disabled = true;
          showExplanation2()
          localStorage.setItem('writrawor2', 0)
        }
        if (document.getElementById('o-writrawor-22').checked) {
          document.getElementById('r-writrawor-22').style.color = 'red'
          document.getElementById('r-writrawor-22').innerHTML = 'Incorrect!'
          document.getElementById('r-writrawor-23').style.color = 'blue'
          document.getElementById('r-writrawor-23').innerHTML = 'Correct!'
          
          document.getElementById('b-writrawor-23').classList.add("correct")
          document.getElementById('b-writrawor-21').classList.add("incorrect")
          document.getElementById('b-writrawor-22').classList.add("incorrect")
          document.getElementById('b-writrawor-24').classList.add("incorrect")
    
          document.getElementById('sa-writrawor-2').disabled = true;
          document.getElementById('o-writrawor-21').disabled = true;
          document.getElementById('o-writrawor-22').disabled = true;
          document.getElementById('o-writrawor-23').disabled = true;
          document.getElementById('o-writrawor-24').disabled = true;
          showExplanation2()
          localStorage.setItem('writrawor2', 0)
        }
        if (document.getElementById('o-writrawor-23').checked) {
          document.getElementById('r-writrawor-23').style.color = 'blue'
          document.getElementById('r-writrawor-23').innerHTML = 'Correct!'
          
          document.getElementById('b-writrawor-23').classList.add("correct")
          document.getElementById('b-writrawor-21').classList.add("incorrect")
          document.getElementById('b-writrawor-22').classList.add("incorrect")
          document.getElementById('b-writrawor-24').classList.add("incorrect")
    
          document.getElementById('sa-writrawor-2').disabled = true;
          document.getElementById('o-writrawor-21').disabled = true;
          document.getElementById('o-writrawor-22').disabled = true;
          document.getElementById('o-writrawor-23').disabled = true;
          document.getElementById('o-writrawor-24').disabled = true;
          showExplanation2()
          localStorage.setItem('writrawor2', 1)
        }
        if (document.getElementById('o-writrawor-24').checked) {
          document.getElementById('r-writrawor-24').style.color = 'red'
          document.getElementById('r-writrawor-24').innerHTML = 'Incorrect!'
          document.getElementById('r-writrawor-23').style.color = 'blue'
          document.getElementById('r-writrawor-23').innerHTML = 'Correct!'
          
          document.getElementById('b-writrawor-23').classList.add("correct")
          document.getElementById('b-writrawor-21').classList.add("incorrect")
          document.getElementById('b-writrawor-22').classList.add("incorrect")
          document.getElementById('b-writrawor-24').classList.add("incorrect")
    
          document.getElementById('sa-writrawor-2').disabled = true;
          document.getElementById('o-writrawor-21').disabled = true;
          document.getElementById('o-writrawor-22').disabled = true;
          document.getElementById('o-writrawor-23').disabled = true;
          document.getElementById('o-writrawor-24').disabled = true;
          showExplanation2()
          localStorage.setItem('writrawor2', 0)
        }
      }
    }
    
    if (document.getElementById('sa-writrawor-3') != null) {
      writrawor3But.onclick = function() {
        if (document.getElementById('o-writrawor-31').checked) {
          document.getElementById('r-writrawor-31').style.color = 'red'
          document.getElementById('r-writrawor-31').innerHTML = 'Incorrect!'
          document.getElementById('r-writrawor-32').style.color = 'blue'
          document.getElementById('r-writrawor-32').innerHTML = 'Correct!'
          
          document.getElementById('b-writrawor-32').classList.add("correct")
          document.getElementById('b-writrawor-31').classList.add("incorrect")
          document.getElementById('b-writrawor-33').classList.add("incorrect")
          document.getElementById('b-writrawor-34').classList.add("incorrect")
    
          document.getElementById('sa-writrawor-3').disabled = true;
          document.getElementById('o-writrawor-31').disabled = true;
          document.getElementById('o-writrawor-32').disabled = true;
          document.getElementById('o-writrawor-33').disabled = true;
          document.getElementById('o-writrawor-34').disabled = true;
          showExplanation3()
          localStorage.setItem('writrawor3', 0)
        }
        if (document.getElementById('o-writrawor-32').checked) {
    
          document.getElementById('r-writrawor-32').style.color = 'blue'
          document.getElementById('r-writrawor-32').innerHTML = 'Correct!'
          
          document.getElementById('b-writrawor-32').classList.add("correct")
          document.getElementById('b-writrawor-31').classList.add("incorrect")
          document.getElementById('b-writrawor-33').classList.add("incorrect")
          document.getElementById('b-writrawor-34').classList.add("incorrect")
    
          document.getElementById('sa-writrawor-3').disabled = true;
          document.getElementById('o-writrawor-31').disabled = true;
          document.getElementById('o-writrawor-32').disabled = true;
          document.getElementById('o-writrawor-33').disabled = true;
          document.getElementById('o-writrawor-34').disabled = true;
          showExplanation3()
          localStorage.setItem('writrawor3', 1)
        }
        if (document.getElementById('o-writrawor-33').checked) {
          document.getElementById('r-writrawor-33').style.color = 'red'
          document.getElementById('r-writrawor-33').innerHTML = 'Incorrect!'
          document.getElementById('r-writrawor-32').style.color = 'blue'
          document.getElementById('r-writrawor-32').innerHTML = 'Correct!'
          
          document.getElementById('b-writrawor-32').classList.add("correct")
          document.getElementById('b-writrawor-31').classList.add("incorrect")
          document.getElementById('b-writrawor-33').classList.add("incorrect")
          document.getElementById('b-writrawor-34').classList.add("incorrect")
    
          document.getElementById('sa-writrawor-3').disabled = true;
          document.getElementById('o-writrawor-31').disabled = true;
          document.getElementById('o-writrawor-32').disabled = true;
          document.getElementById('o-writrawor-33').disabled = true;
          document.getElementById('o-writrawor-34').disabled = true;
          showExplanation3()
          localStorage.setItem('writrawor3', 0)
        }
        if (document.getElementById('o-writrawor-34').checked) {
          document.getElementById('r-writrawor-34').style.color = 'red'
          document.getElementById('r-writrawor-34').innerHTML = 'Incorrect!'
          document.getElementById('r-writrawor-32').style.color = 'blue'
          document.getElementById('r-writrawor-32').innerHTML = 'Correct!'
          
          document.getElementById('b-writrawor-32').classList.add("correct")
          document.getElementById('b-writrawor-31').classList.add("incorrect")
          document.getElementById('b-writrawor-33').classList.add("incorrect")
          document.getElementById('b-writrawor-34').classList.add("incorrect")
    
          document.getElementById('sa-writrawor-3').disabled = true;
          document.getElementById('o-writrawor-31').disabled = true;
          document.getElementById('o-writrawor-32').disabled = true;
          document.getElementById('o-writrawor-33').disabled = true;
          document.getElementById('o-writrawor-34').disabled = true;
          showExplanation3()
          localStorage.setItem('writrawor3', 0)
        }
      }
    }
    
    if (document.getElementById('sa-writrawor-4') != null) {
      writrawor4But.onclick = function() {
        if (document.getElementById('o-writrawor-41').checked) {
          document.getElementById('r-writrawor-41').style.color = 'red'
          document.getElementById('r-writrawor-41').innerHTML = 'Incorrect!'
          document.getElementById('r-writrawor-44').style.color = 'blue'
          document.getElementById('r-writrawor-44').innerHTML = 'Correct!'
          
          document.getElementById('b-writrawor-44').classList.add("correct")
          document.getElementById('b-writrawor-41').classList.add("incorrect")
          document.getElementById('b-writrawor-42').classList.add("incorrect")
          document.getElementById('b-writrawor-43').classList.add("incorrect")
    
          document.getElementById('sa-writrawor-4').disabled = true;
          document.getElementById('o-writrawor-41').disabled = true;
          document.getElementById('o-writrawor-42').disabled = true;
          document.getElementById('o-writrawor-43').disabled = true;
          document.getElementById('o-writrawor-44').disabled = true;
          showExplanation4()
          localStorage.setItem('writrawor4', 0)
        }
        if (document.getElementById('o-writrawor-42').checked) {
          document.getElementById('r-writrawor-42').style.color = 'red'
          document.getElementById('r-writrawor-42').innerHTML = 'Incorrect!'
          document.getElementById('r-writrawor-44').style.color = 'blue'
          document.getElementById('r-writrawor-44').innerHTML = 'Correct!'
          
          document.getElementById('b-writrawor-44').classList.add("correct")
          document.getElementById('b-writrawor-41').classList.add("incorrect")
          document.getElementById('b-writrawor-42').classList.add("incorrect")
          document.getElementById('b-writrawor-43').classList.add("incorrect")
    
          document.getElementById('sa-writrawor-4').disabled = true;
          document.getElementById('o-writrawor-41').disabled = true;
          document.getElementById('o-writrawor-42').disabled = true;
          document.getElementById('o-writrawor-43').disabled = true;
          document.getElementById('o-writrawor-44').disabled = true;
          showExplanation4()
          localStorage.setItem('writrawor4', 0)
        }
        if (document.getElementById('o-writrawor-43').checked) {
          document.getElementById('r-writrawor-43').style.color = 'red'
          document.getElementById('r-writrawor-43').innerHTML = 'Incorrect!'
          document.getElementById('r-writrawor-44').style.color = 'blue'
          document.getElementById('r-writrawor-44').innerHTML = 'Correct!'
          
          document.getElementById('b-writrawor-44').classList.add("correct")
          document.getElementById('b-writrawor-41').classList.add("incorrect")
          document.getElementById('b-writrawor-42').classList.add("incorrect")
          document.getElementById('b-writrawor-43').classList.add("incorrect")
    
          document.getElementById('sa-writrawor-4').disabled = true;
          document.getElementById('o-writrawor-41').disabled = true;
          document.getElementById('o-writrawor-42').disabled = true;
          document.getElementById('o-writrawor-43').disabled = true;
          document.getElementById('o-writrawor-44').disabled = true;
          showExplanation4()
          localStorage.setItem('writrawor4', 0)
        }
        if (document.getElementById('o-writrawor-44').checked) {
          document.getElementById('r-writrawor-44').style.color = 'blue'
          document.getElementById('r-writrawor-44').innerHTML = 'Correct!'
          
          document.getElementById('b-writrawor-44').classList.add("correct")
          document.getElementById('b-writrawor-41').classList.add("incorrect")
          document.getElementById('b-writrawor-42').classList.add("incorrect")
          document.getElementById('b-writrawor-43').classList.add("incorrect")
    
          document.getElementById('sa-writrawor-4').disabled = true;
          document.getElementById('o-writrawor-41').disabled = true;
          document.getElementById('o-writrawor-42').disabled = true;
          document.getElementById('o-writrawor-43').disabled = true;
          document.getElementById('o-writrawor-44').disabled = true;
          showExplanation4()
          localStorage.setItem('writrawor4', 1)
        }
      }
    }
    
    if (document.getElementById('sa-writrawor-5') != null) {
      writrawor5But.onclick = function() {
        if (document.getElementById('o-writrawor-51').checked) {
          document.getElementById('r-writrawor-51').style.color = 'red'
          document.getElementById('r-writrawor-51').innerHTML = 'Incorrect!'
          document.getElementById('r-writrawor-53').style.color = 'blue'
          document.getElementById('r-writrawor-53').innerHTML = 'Correct!'
          
          document.getElementById('b-writrawor-53').classList.add("correct")
          document.getElementById('b-writrawor-51').classList.add("incorrect")
          document.getElementById('b-writrawor-52').classList.add("incorrect")
          document.getElementById('b-writrawor-54').classList.add("incorrect")
    
          document.getElementById('sa-writrawor-5').disabled = true;
          document.getElementById('o-writrawor-51').disabled = true;
          document.getElementById('o-writrawor-52').disabled = true;
          document.getElementById('o-writrawor-53').disabled = true;
          document.getElementById('o-writrawor-54').disabled = true;
          showExplanation5()
          localStorage.setItem('writrawor5', 0)
        }
        if (document.getElementById('o-writrawor-52').checked) {
          document.getElementById('r-writrawor-52').style.color = 'red'
          document.getElementById('r-writrawor-52').innerHTML = 'Incorrect!'
          document.getElementById('r-writrawor-53').style.color = 'blue'
          document.getElementById('r-writrawor-53').innerHTML = 'Correct!'
          
          document.getElementById('b-writrawor-53').classList.add("correct")
          document.getElementById('b-writrawor-51').classList.add("incorrect")
          document.getElementById('b-writrawor-52').classList.add("incorrect")
          document.getElementById('b-writrawor-54').classList.add("incorrect")
    
          document.getElementById('sa-writrawor-5').disabled = true;
          document.getElementById('o-writrawor-51').disabled = true;
          document.getElementById('o-writrawor-52').disabled = true;
          document.getElementById('o-writrawor-53').disabled = true;
          document.getElementById('o-writrawor-54').disabled = true;
          showExplanation5()
          localStorage.setItem('writrawor5', 0)
        }
        if (document.getElementById('o-writrawor-53').checked) {
          document.getElementById('r-writrawor-53').style.color = 'blue'
          document.getElementById('r-writrawor-53').innerHTML = 'Correct!'
          
          document.getElementById('b-writrawor-53').classList.add("correct")
          document.getElementById('b-writrawor-51').classList.add("incorrect")
          document.getElementById('b-writrawor-52').classList.add("incorrect")
          document.getElementById('b-writrawor-54').classList.add("incorrect")
    
          document.getElementById('sa-writrawor-5').disabled = true;
          document.getElementById('o-writrawor-51').disabled = true;
          document.getElementById('o-writrawor-52').disabled = true;
          document.getElementById('o-writrawor-53').disabled = true;
          document.getElementById('o-writrawor-54').disabled = true;
          showExplanation5()
          localStorage.setItem('writrawor5', 1)
        }
        if (document.getElementById('o-writrawor-54').checked) {
          document.getElementById('r-writrawor-54').style.color = 'red'
          document.getElementById('r-writrawor-54').innerHTML = 'Incorrect!'
          document.getElementById('r-writrawor-53').style.color = 'blue'
          document.getElementById('r-writrawor-53').innerHTML = 'Correct!'
          
          document.getElementById('b-writrawor-53').classList.add("correct")
          document.getElementById('b-writrawor-51').classList.add("incorrect")
          document.getElementById('b-writrawor-52').classList.add("incorrect")
          document.getElementById('b-writrawor-54').classList.add("incorrect")
    
          document.getElementById('sa-writrawor-5').disabled = true;
          document.getElementById('o-writrawor-51').disabled = true;
          document.getElementById('o-writrawor-52').disabled = true;
          document.getElementById('o-writrawor-53').disabled = true;
          document.getElementById('o-writrawor-54').disabled = true;
          showExplanation5()
          localStorage.setItem('writrawor5', 0)
        }
      }
    }
        
         
      if (document.getElementById('sa-writrawor-6') != null) {
      writrawor6But.onclick = function() {
        if (document.getElementById('o-writrawor-61').checked) {
          document.getElementById('r-writrawor-61').style.color = 'red'
          document.getElementById('r-writrawor-61').innerHTML = 'Incorrect!'
          document.getElementById('r-writrawor-64').style.color = 'blue'
          document.getElementById('r-writrawor-64').innerHTML = 'Correct!'
          
          document.getElementById('b-writrawor-64').classList.add("correct")
          document.getElementById('b-writrawor-61').classList.add("incorrect")
          document.getElementById('b-writrawor-62').classList.add("incorrect")
          document.getElementById('b-writrawor-63').classList.add("incorrect")
    
          document.getElementById('sa-writrawor-6').disabled = true;
          document.getElementById('o-writrawor-61').disabled = true;
          document.getElementById('o-writrawor-62').disabled = true;
          document.getElementById('o-writrawor-63').disabled = true;
          document.getElementById('o-writrawor-64').disabled = true;
          showExplanation6()
          localStorage.setItem('writrawor6', 0)
        }
        if (document.getElementById('o-writrawor-62').checked) {
          document.getElementById('r-writrawor-62').style.color = 'red'
          document.getElementById('r-writrawor-62').innerHTML = 'Incorrect!'
          document.getElementById('r-writrawor-64').style.color = 'blue'
          document.getElementById('r-writrawor-64').innerHTML = 'Correct!'
          
          document.getElementById('b-writrawor-64').classList.add("correct")
          document.getElementById('b-writrawor-61').classList.add("incorrect")
          document.getElementById('b-writrawor-62').classList.add("incorrect")
          document.getElementById('b-writrawor-63').classList.add("incorrect")
    
          document.getElementById('sa-writrawor-6').disabled = true;
          document.getElementById('o-writrawor-61').disabled = true;
          document.getElementById('o-writrawor-62').disabled = true;
          document.getElementById('o-writrawor-63').disabled = true;
          document.getElementById('o-writrawor-64').disabled = true;
          showExplanation6()
          localStorage.setItem('writrawor6', 0)
        }
        if (document.getElementById('o-writrawor-63').checked) {
          document.getElementById('r-writrawor-63').style.color = 'red'
          document.getElementById('r-writrawor-63').innerHTML = 'Incorrect!'
          document.getElementById('r-writrawor-64').style.color = 'blue'
          document.getElementById('r-writrawor-64').innerHTML = 'Correct!'
          
          document.getElementById('b-writrawor-64').classList.add("correct")
          document.getElementById('b-writrawor-61').classList.add("incorrect")
          document.getElementById('b-writrawor-62').classList.add("incorrect")
          document.getElementById('b-writrawor-63').classList.add("incorrect")
    
          document.getElementById('sa-writrawor-6').disabled = true;
          document.getElementById('o-writrawor-61').disabled = true;
          document.getElementById('o-writrawor-62').disabled = true;
          document.getElementById('o-writrawor-63').disabled = true;
          document.getElementById('o-writrawor-64').disabled = true;
          showExplanation6()
          localStorage.setItem('writrawor6', 0)
        }
        if (document.getElementById('o-writrawor-64').checked) {
          document.getElementById('r-writrawor-64').style.color = 'blue'
          document.getElementById('r-writrawor-64').innerHTML = 'Correct!'
          
          document.getElementById('b-writrawor-64').classList.add("correct")
          document.getElementById('b-writrawor-61').classList.add("incorrect")
          document.getElementById('b-writrawor-62').classList.add("incorrect")
          document.getElementById('b-writrawor-63').classList.add("incorrect")
    
          document.getElementById('sa-writrawor-6').disabled = true;
          document.getElementById('o-writrawor-61').disabled = true;
          document.getElementById('o-writrawor-62').disabled = true;
          document.getElementById('o-writrawor-63').disabled = true;
          document.getElementById('o-writrawor-64').disabled = true;
          showExplanation6()
          localStorage.setItem('writrawor6', 1)
        }
      }
    }
    
    if (document.getElementById('sa-writrawor-7') != null) {
      writrawor7But.onclick = function() {
        if (document.getElementById('o-writrawor-71').checked) {
          document.getElementById('r-writrawor-71').style.color = 'red'
          document.getElementById('r-writrawor-71').innerHTML = 'Incorrect!'
          document.getElementById('r-writrawor-74').style.color = 'blue'
          document.getElementById('r-writrawor-74').innerHTML = 'Correct!'
          
          document.getElementById('b-writrawor-74').classList.add("correct")
          document.getElementById('b-writrawor-71').classList.add("incorrect")
          document.getElementById('b-writrawor-72').classList.add("incorrect")
          document.getElementById('b-writrawor-73').classList.add("incorrect")
    
          document.getElementById('sa-writrawor-7').disabled = true;
          document.getElementById('o-writrawor-71').disabled = true;
          document.getElementById('o-writrawor-72').disabled = true;
          document.getElementById('o-writrawor-73').disabled = true;
          document.getElementById('o-writrawor-74').disabled = true;
          showExplanation7()
          localStorage.setItem('writrawor7', 0)
        }
        if (document.getElementById('o-writrawor-72').checked) {
          document.getElementById('r-writrawor-72').style.color = 'red'
          document.getElementById('r-writrawor-72').innerHTML = 'Incorrect!'
          document.getElementById('r-writrawor-74').style.color = 'blue'
          document.getElementById('r-writrawor-74').innerHTML = 'Correct!'
          
          document.getElementById('b-writrawor-74').classList.add("correct")
          document.getElementById('b-writrawor-71').classList.add("incorrect")
          document.getElementById('b-writrawor-72').classList.add("incorrect")
          document.getElementById('b-writrawor-73').classList.add("incorrect")
    
          document.getElementById('sa-writrawor-7').disabled = true;
          document.getElementById('o-writrawor-71').disabled = true;
          document.getElementById('o-writrawor-72').disabled = true;
          document.getElementById('o-writrawor-73').disabled = true;
          document.getElementById('o-writrawor-74').disabled = true;
          showExplanation7()
          localStorage.setItem('writrawor7', 0)
        }
        if (document.getElementById('o-writrawor-73').checked) {
          document.getElementById('r-writrawor-73').style.color = 'red'
          document.getElementById('r-writrawor-73').innerHTML = 'Incorrect!'
          document.getElementById('r-writrawor-74').style.color = 'blue'
          document.getElementById('r-writrawor-74').innerHTML = 'Correct!'
          
          document.getElementById('b-writrawor-74').classList.add("correct")
          document.getElementById('b-writrawor-71').classList.add("incorrect")
          document.getElementById('b-writrawor-72').classList.add("incorrect")
          document.getElementById('b-writrawor-73').classList.add("incorrect")
    
          document.getElementById('sa-writrawor-7').disabled = true;
          document.getElementById('o-writrawor-71').disabled = true;
          document.getElementById('o-writrawor-72').disabled = true;
          document.getElementById('o-writrawor-73').disabled = true;
          document.getElementById('o-writrawor-74').disabled = true;
          showExplanation7()
          localStorage.setItem('writrawor7', 0)
        }
        if (document.getElementById('o-writrawor-74').checked) {
          document.getElementById('r-writrawor-74').style.color = 'blue'
          document.getElementById('r-writrawor-74').innerHTML = 'Correct!'
          
          document.getElementById('b-writrawor-74').classList.add("correct")
          document.getElementById('b-writrawor-71').classList.add("incorrect")
          document.getElementById('b-writrawor-72').classList.add("incorrect")
          document.getElementById('b-writrawor-73').classList.add("incorrect")
    
          document.getElementById('sa-writrawor-7').disabled = true;
          document.getElementById('o-writrawor-71').disabled = true;
          document.getElementById('o-writrawor-72').disabled = true;
          document.getElementById('o-writrawor-73').disabled = true;
          document.getElementById('o-writrawor-74').disabled = true;
          showExplanation7()
          localStorage.setItem('writrawor7', 1)
        }
      }
    }
    
    
    if (document.getElementById('sa-writrawor-8') != null) {
      writrawor8But.onclick = function() {
        if (document.getElementById('o-writrawor-81').checked) {
          document.getElementById('r-writrawor-81').style.color = 'red'
          document.getElementById('r-writrawor-81').innerHTML = 'Incorrect!'
          document.getElementById('r-writrawor-82').style.color = 'blue'
          document.getElementById('r-writrawor-82').innerHTML = 'Correct!'
          
          document.getElementById('b-writrawor-82').classList.add("correct")
          document.getElementById('b-writrawor-81').classList.add("incorrect")
          document.getElementById('b-writrawor-83').classList.add("incorrect")
          document.getElementById('b-writrawor-84').classList.add("incorrect")
    
          document.getElementById('sa-writrawor-8').disabled = true;
          document.getElementById('o-writrawor-81').disabled = true;
          document.getElementById('o-writrawor-82').disabled = true;
          document.getElementById('o-writrawor-83').disabled = true;
          document.getElementById('o-writrawor-84').disabled = true;
          showExplanation8()
          localStorage.setItem('writrawor8', 0)
        }
        if (document.getElementById('o-writrawor-82').checked) {
          document.getElementById('r-writrawor-82').style.color = 'blue'
          document.getElementById('r-writrawor-82').innerHTML = 'Correct!'
          
          document.getElementById('b-writrawor-82').classList.add("correct")
          document.getElementById('b-writrawor-81').classList.add("incorrect")
          document.getElementById('b-writrawor-83').classList.add("incorrect")
          document.getElementById('b-writrawor-84').classList.add("incorrect")
    
          document.getElementById('sa-writrawor-8').disabled = true;
          document.getElementById('o-writrawor-81').disabled = true;
          document.getElementById('o-writrawor-82').disabled = true;
          document.getElementById('o-writrawor-83').disabled = true;
          document.getElementById('o-writrawor-84').disabled = true;
          showExplanation8()
          localStorage.setItem('writrawor8', 1)
        }
        if (document.getElementById('o-writrawor-83').checked) {
          document.getElementById('r-writrawor-83').style.color = 'red'
          document.getElementById('r-writrawor-83').innerHTML = 'Incorrect!'
          document.getElementById('r-writrawor-82').style.color = 'blue'
          document.getElementById('r-writrawor-82').innerHTML = 'Correct!'
          
          document.getElementById('b-writrawor-82').classList.add("correct")
          document.getElementById('b-writrawor-81').classList.add("incorrect")
          document.getElementById('b-writrawor-83').classList.add("incorrect")
          document.getElementById('b-writrawor-84').classList.add("incorrect")
    
          document.getElementById('sa-writrawor-8').disabled = true;
          document.getElementById('o-writrawor-81').disabled = true;
          document.getElementById('o-writrawor-82').disabled = true;
          document.getElementById('o-writrawor-83').disabled = true;
          document.getElementById('o-writrawor-84').disabled = true;
          showExplanation8()
          localStorage.setItem('writrawor8', 0)
        }
        if (document.getElementById('o-writrawor-84').checked) {
          document.getElementById('r-writrawor-84').style.color = 'red'
          document.getElementById('r-writrawor-84').innerHTML = 'Incorrect!'
          document.getElementById('r-writrawor-82').style.color = 'blue'
          document.getElementById('r-writrawor-82').innerHTML = 'Correct!'
          
          document.getElementById('b-writrawor-82').classList.add("correct")
          document.getElementById('b-writrawor-81').classList.add("incorrect")
          document.getElementById('b-writrawor-83').classList.add("incorrect")
          document.getElementById('b-writrawor-84').classList.add("incorrect")
    
          document.getElementById('sa-writrawor-8').disabled = true;
          document.getElementById('o-writrawor-81').disabled = true;
          document.getElementById('o-writrawor-82').disabled = true;
          document.getElementById('o-writrawor-83').disabled = true;
          document.getElementById('o-writrawor-84').disabled = true;
          showExplanation8()
          localStorage.setItem('writrawor8', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-writrawor-9') != null) {
      writrawor9But.onclick = function() {
        if (document.getElementById('o-writrawor-91').checked) {
          document.getElementById('r-writrawor-91').style.color = 'red'
          document.getElementById('r-writrawor-91').innerHTML = 'Incorrect!'
          document.getElementById('r-writrawor-94').style.color = 'blue'
          document.getElementById('r-writrawor-94').innerHTML = 'Correct!'
          
          document.getElementById('b-writrawor-94').classList.add("correct")
          document.getElementById('b-writrawor-91').classList.add("incorrect")
          document.getElementById('b-writrawor-92').classList.add("incorrect")
          document.getElementById('b-writrawor-93').classList.add("incorrect")
    
          document.getElementById('sa-writrawor-9').disabled = true;
          document.getElementById('o-writrawor-91').disabled = true;
          document.getElementById('o-writrawor-92').disabled = true;
          document.getElementById('o-writrawor-93').disabled = true;
          document.getElementById('o-writrawor-94').disabled = true;
          showExplanation9()
          localStorage.setItem('writrawor9', 0)
        }
        if (document.getElementById('o-writrawor-92').checked) {
          document.getElementById('r-writrawor-91').style.color = 'red'
          document.getElementById('r-writrawor-91').innerHTML = 'Incorrect!'
          document.getElementById('r-writrawor-94').style.color = 'blue'
          document.getElementById('r-writrawor-94').innerHTML = 'Correct!'
          
          document.getElementById('b-writrawor-94').classList.add("correct")
          document.getElementById('b-writrawor-91').classList.add("incorrect")
          document.getElementById('b-writrawor-92').classList.add("incorrect")
          document.getElementById('b-writrawor-93').classList.add("incorrect")
    
          document.getElementById('sa-writrawor-9').disabled = true;
          document.getElementById('o-writrawor-91').disabled = true;
          document.getElementById('o-writrawor-92').disabled = true;
          document.getElementById('o-writrawor-93').disabled = true;
          document.getElementById('o-writrawor-94').disabled = true;
          showExplanation9()
          localStorage.setItem('writrawor9', 0)
        }
        if (document.getElementById('o-writrawor-93').checked) {
          document.getElementById('r-writrawor-91').style.color = 'red'
          document.getElementById('r-writrawor-91').innerHTML = 'Incorrect!'
          document.getElementById('r-writrawor-94').style.color = 'blue'
          document.getElementById('r-writrawor-94').innerHTML = 'Correct!'
          
          document.getElementById('b-writrawor-94').classList.add("correct")
          document.getElementById('b-writrawor-91').classList.add("incorrect")
          document.getElementById('b-writrawor-92').classList.add("incorrect")
          document.getElementById('b-writrawor-93').classList.add("incorrect")
    
          document.getElementById('sa-writrawor-9').disabled = true;
          document.getElementById('o-writrawor-91').disabled = true;
          document.getElementById('o-writrawor-92').disabled = true;
          document.getElementById('o-writrawor-93').disabled = true;
          document.getElementById('o-writrawor-94').disabled = true;
          showExplanation9()
          localStorage.setItem('writrawor9', 0)
        }
        if (document.getElementById('o-writrawor-94').checked) {
          document.getElementById('r-writrawor-94').style.color = 'blue'
          document.getElementById('r-writrawor-94').innerHTML = 'Correct!'
          
          document.getElementById('b-writrawor-94').classList.add("correct")
          document.getElementById('b-writrawor-91').classList.add("incorrect")
          document.getElementById('b-writrawor-92').classList.add("incorrect")
          document.getElementById('b-writrawor-93').classList.add("incorrect")
    
          document.getElementById('sa-writrawor-9').disabled = true;
          document.getElementById('o-writrawor-91').disabled = true;
          document.getElementById('o-writrawor-92').disabled = true;
          document.getElementById('o-writrawor-93').disabled = true;
          document.getElementById('o-writrawor-94').disabled = true;
          showExplanation9()
          localStorage.setItem('writrawor9', 1)
        }
      }
    }
    
    if (document.getElementById('sa-writrawor-10') != null) {
      writrawor10But.onclick = function() {
        if (document.getElementById('o-writrawor-101').checked) {
          document.getElementById('r-writrawor-101').style.color = 'red'
          document.getElementById('r-writrawor-101').innerHTML = 'Incorrect!'
          document.getElementById('r-writrawor-102').style.color = 'blue'
          document.getElementById('r-writrawor-102').innerHTML = 'Correct!'
          
          document.getElementById('b-writrawor-102').classList.add("correct")
          document.getElementById('b-writrawor-101').classList.add("incorrect")
          document.getElementById('b-writrawor-103').classList.add("incorrect")
          document.getElementById('b-writrawor-104').classList.add("incorrect")
    
          document.getElementById('sa-writrawor-10').disabled = true;
          document.getElementById('o-writrawor-101').disabled = true;
          document.getElementById('o-writrawor-102').disabled = true;
          document.getElementById('o-writrawor-103').disabled = true;
          document.getElementById('o-writrawor-104').disabled = true;
          showExplanation10()
          localStorage.setItem('writrawor10', 0)
        }
        if (document.getElementById('o-writrawor-102').checked) {
          document.getElementById('r-writrawor-102').style.color = 'blue'
          document.getElementById('r-writrawor-102').innerHTML = 'Correct!'
          
          document.getElementById('b-writrawor-102').classList.add("correct")
          document.getElementById('b-writrawor-101').classList.add("incorrect")
          document.getElementById('b-writrawor-103').classList.add("incorrect")
          document.getElementById('b-writrawor-104').classList.add("incorrect")
    
          document.getElementById('sa-writrawor-10').disabled = true;
          document.getElementById('o-writrawor-101').disabled = true;
          document.getElementById('o-writrawor-102').disabled = true;
          document.getElementById('o-writrawor-103').disabled = true;
          document.getElementById('o-writrawor-104').disabled = true;
          showExplanation10()
          localStorage.setItem('writrawor10', 1)
        }
        if (document.getElementById('o-writrawor-103').checked) {
          document.getElementById('r-writrawor-103').style.color = 'red'
          document.getElementById('r-writrawor-103').innerHTML = 'Incorrect!'
          document.getElementById('r-writrawor-102').style.color = 'blue'
          document.getElementById('r-writrawor-102').innerHTML = 'Correct!'
          
          document.getElementById('b-writrawor-102').classList.add("correct")
          document.getElementById('b-writrawor-101').classList.add("incorrect")
          document.getElementById('b-writrawor-103').classList.add("incorrect")
          document.getElementById('b-writrawor-104').classList.add("incorrect")
    
          document.getElementById('sa-writrawor-10').disabled = true;
          document.getElementById('o-writrawor-101').disabled = true;
          document.getElementById('o-writrawor-102').disabled = true;
          document.getElementById('o-writrawor-103').disabled = true;
          document.getElementById('o-writrawor-104').disabled = true;
          showExplanation10()
          localStorage.setItem('writrawor10', 0)
        }
        if (document.getElementById('o-writrawor-104').checked) {
          document.getElementById('r-writrawor-104').style.color = 'red'
          document.getElementById('r-writrawor-104').innerHTML = 'Incorrect!'
          document.getElementById('r-writrawor-102').style.color = 'blue'
          document.getElementById('r-writrawor-102').innerHTML = 'Correct!'
          
          document.getElementById('b-writrawor-102').classList.add("correct")
          document.getElementById('b-writrawor-101').classList.add("incorrect")
          document.getElementById('b-writrawor-103').classList.add("incorrect")
          document.getElementById('b-writrawor-104').classList.add("incorrect")
    
          document.getElementById('sa-writrawor-10').disabled = true;
          document.getElementById('o-writrawor-101').disabled = true;
          document.getElementById('o-writrawor-102').disabled = true;
          document.getElementById('o-writrawor-103').disabled = true;
          document.getElementById('o-writrawor-104').disabled = true;
          showExplanation10()
          localStorage.setItem('writrawor10', 0)
        }
      }
    }
    