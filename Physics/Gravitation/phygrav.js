
  let phygrav1But = document.getElementById('sa-phygrav-1');
  let phygrav2But = document.getElementById('sa-phygrav-2');
  let phygrav3But = document.getElementById('sa-phygrav-3');
  let phygrav4But = document.getElementById('sa-phygrav-4');
  let phygrav5But = document.getElementById('sa-phygrav-5');
  let phygrav6But = document.getElementById('sa-phygrav-6');
  let phygrav7But = document.getElementById('sa-phygrav-7');
  let phygrav8But = document.getElementById('sa-phygrav-8');
  let phygrav9But = document.getElementById('sa-phygrav-9');
  let phygrav10But = document.getElementById('sa-phygrav-10');


  showExplanation1 = function() {
    document.getElementById('e-phygrav-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-phygrav-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-phygrav-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-phygrav-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-phygrav-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-phygrav-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-phygrav-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-phygrav-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-phygrav-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-phygrav-10').style.display = 'block';
     } 



     if (document.getElementById('sa-phygrav-1') != null) {
      phygrav1But.onclick = function () {
        if (document.getElementById('o-phygrav-11').checked) {
          document.getElementById('r-phygrav-11').style.color = 'red'
          document.getElementById('r-phygrav-11').innerHTML = 'Incorrect!'
          document.getElementById('r-phygrav-12').style.color = 'blue'
          document.getElementById('r-phygrav-12').innerHTML = 'Correct!'
    
          document.getElementById('b-phygrav-12').classList.add("correct")
          document.getElementById('b-phygrav-11').classList.add("incorrect")
          document.getElementById('b-phygrav-13').classList.add("incorrect")
          document.getElementById('b-phygrav-14').classList.add("incorrect")
    
          document.getElementById('sa-phygrav-1').disabled = true;
          document.getElementById('o-phygrav-11').disabled = true;
          document.getElementById('o-phygrav-12').disabled = true;
          document.getElementById('o-phygrav-13').disabled = true;
          document.getElementById('o-phygrav-14').disabled = true;
          showExplanation1()
          localStorage.setItem('phygrav1', 0)
        }
    
        if (document.getElementById('o-phygrav-12').checked) {       
          document.getElementById('r-phygrav-12').style.color = 'blue'
          document.getElementById('r-phygrav-12').innerHTML = 'Correct!'
    
          document.getElementById('b-phygrav-12').classList.add("correct")
          document.getElementById('b-phygrav-11').classList.add("incorrect")
          document.getElementById('b-phygrav-13').classList.add("incorrect")
          document.getElementById('b-phygrav-14').classList.add("incorrect")
    
          document.getElementById('sa-phygrav-1').disabled = true;
          document.getElementById('o-phygrav-11').disabled = true;
          document.getElementById('o-phygrav-12').disabled = true;
          document.getElementById('o-phygrav-13').disabled = true;
          document.getElementById('o-phygrav-14').disabled = true;
          showExplanation1()
          localStorage.setItem('phygrav1', 1)
        }
        if (document.getElementById('o-phygrav-13').checked) {
          document.getElementById('r-phygrav-13').style.color = 'red'
          document.getElementById('r-phygrav-13').innerHTML = 'Incorrect!'
          document.getElementById('r-phygrav-12').style.color = 'blue'
          document.getElementById('r-phygrav-12').innerHTML = 'Correct!'
          
          document.getElementById('b-phygrav-12').classList.add("correct")
          document.getElementById('b-phygrav-11').classList.add("incorrect")
          document.getElementById('b-phygrav-13').classList.add("incorrect")
          document.getElementById('b-phygrav-14').classList.add("incorrect")
    
          document.getElementById('sa-phygrav-1').disabled = true;
          document.getElementById('o-phygrav-11').disabled = true;
          document.getElementById('o-phygrav-12').disabled = true;
          document.getElementById('o-phygrav-13').disabled = true;
          document.getElementById('o-phygrav-14').disabled = true;
          showExplanation1()
          localStorage.setItem('phygrav1', 0)
        }
        if (document.getElementById('o-phygrav-14').checked) {
          document.getElementById('r-phygrav-14').style.color = 'red'
          document.getElementById('r-phygrav-14').innerHTML = 'Incorrect!'
          document.getElementById('r-phygrav-12').style.color = 'blue'
          document.getElementById('r-phygrav-12').innerHTML = 'Correct!'
          
          document.getElementById('b-phygrav-12').classList.add("correct")
          document.getElementById('b-phygrav-11').classList.add("incorrect")
          document.getElementById('b-phygrav-13').classList.add("incorrect")
          document.getElementById('b-phygrav-14').classList.add("incorrect")
    
          document.getElementById('sa-phygrav-1').disabled = true;
          document.getElementById('o-phygrav-11').disabled = true;
          document.getElementById('o-phygrav-12').disabled = true;
          document.getElementById('o-phygrav-13').disabled = true;
          document.getElementById('o-phygrav-14').disabled = true;
          showExplanation1()
          localStorage.setItem('phygrav1', 0)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-phygrav-2') != null) {
      phygrav2But.onclick = function() {
        if (document.getElementById('o-phygrav-21').checked) {
          document.getElementById('r-phygrav-21').style.color = 'red'
          document.getElementById('r-phygrav-21').innerHTML = 'Incorrect!'
          document.getElementById('r-phygrav-23').style.color = 'blue'
          document.getElementById('r-phygrav-23').innerHTML = 'Correct!'
          
          document.getElementById('b-phygrav-23').classList.add("correct")
          document.getElementById('b-phygrav-21').classList.add("incorrect")
          document.getElementById('b-phygrav-22').classList.add("incorrect")
          document.getElementById('b-phygrav-24').classList.add("incorrect")
    
          document.getElementById('sa-phygrav-2').disabled = true;
          document.getElementById('o-phygrav-21').disabled = true;
          document.getElementById('o-phygrav-22').disabled = true;
          document.getElementById('o-phygrav-23').disabled = true;
          document.getElementById('o-phygrav-24').disabled = true;
          showExplanation2()
          localStorage.setItem('phygrav2', 0)
        }
        if (document.getElementById('o-phygrav-22').checked) {
          document.getElementById('r-phygrav-22').style.color = 'red'
          document.getElementById('r-phygrav-22').innerHTML = 'Incorrect!'
          document.getElementById('r-phygrav-23').style.color = 'blue'
          document.getElementById('r-phygrav-23').innerHTML = 'Correct!'
          
          document.getElementById('b-phygrav-23').classList.add("correct")
          document.getElementById('b-phygrav-21').classList.add("incorrect")
          document.getElementById('b-phygrav-22').classList.add("incorrect")
          document.getElementById('b-phygrav-24').classList.add("incorrect")
    
          document.getElementById('sa-phygrav-2').disabled = true;
          document.getElementById('o-phygrav-21').disabled = true;
          document.getElementById('o-phygrav-22').disabled = true;
          document.getElementById('o-phygrav-23').disabled = true;
          document.getElementById('o-phygrav-24').disabled = true;
          showExplanation2()
          localStorage.setItem('phygrav2', 0)
        }
        if (document.getElementById('o-phygrav-23').checked) {
          document.getElementById('r-phygrav-23').style.color = 'blue'
          document.getElementById('r-phygrav-23').innerHTML = 'Correct!'
          
          document.getElementById('b-phygrav-23').classList.add("correct")
          document.getElementById('b-phygrav-21').classList.add("incorrect")
          document.getElementById('b-phygrav-22').classList.add("incorrect")
          document.getElementById('b-phygrav-24').classList.add("incorrect")
    
          document.getElementById('sa-phygrav-2').disabled = true;
          document.getElementById('o-phygrav-21').disabled = true;
          document.getElementById('o-phygrav-22').disabled = true;
          document.getElementById('o-phygrav-23').disabled = true;
          document.getElementById('o-phygrav-24').disabled = true;
          showExplanation2()
          localStorage.setItem('phygrav2', 1)
        }
        if (document.getElementById('o-phygrav-24').checked) {
          document.getElementById('r-phygrav-24').style.color = 'red'
          document.getElementById('r-phygrav-24').innerHTML = 'Incorrect!'
          document.getElementById('r-phygrav-23').style.color = 'blue'
          document.getElementById('r-phygrav-23').innerHTML = 'Correct!'
          
          document.getElementById('b-phygrav-23').classList.add("correct")
          document.getElementById('b-phygrav-21').classList.add("incorrect")
          document.getElementById('b-phygrav-22').classList.add("incorrect")
          document.getElementById('b-phygrav-24').classList.add("incorrect")
    
          document.getElementById('sa-phygrav-2').disabled = true;
          document.getElementById('o-phygrav-21').disabled = true;
          document.getElementById('o-phygrav-22').disabled = true;
          document.getElementById('o-phygrav-23').disabled = true;
          document.getElementById('o-phygrav-24').disabled = true;
          showExplanation2()
          localStorage.setItem('phygrav2', 0)
        }
      }
    }
    
    if (document.getElementById('sa-phygrav-3') != null) {
      phygrav3But.onclick = function() {
        if (document.getElementById('o-phygrav-31').checked) {
          document.getElementById('r-phygrav-31').style.color = 'red'
          document.getElementById('r-phygrav-31').innerHTML = 'Incorrect!'
          document.getElementById('r-phygrav-32').style.color = 'blue'
          document.getElementById('r-phygrav-32').innerHTML = 'Correct!'
          
          document.getElementById('b-phygrav-32').classList.add("correct")
          document.getElementById('b-phygrav-31').classList.add("incorrect")
          document.getElementById('b-phygrav-33').classList.add("incorrect")
          document.getElementById('b-phygrav-34').classList.add("incorrect")
    
          document.getElementById('sa-phygrav-3').disabled = true;
          document.getElementById('o-phygrav-31').disabled = true;
          document.getElementById('o-phygrav-32').disabled = true;
          document.getElementById('o-phygrav-33').disabled = true;
          document.getElementById('o-phygrav-34').disabled = true;
          showExplanation3()
          localStorage.setItem('phygrav3', 0)
        }
        if (document.getElementById('o-phygrav-32').checked) {
    
          document.getElementById('r-phygrav-32').style.color = 'blue'
          document.getElementById('r-phygrav-32').innerHTML = 'Correct!'
          
          document.getElementById('b-phygrav-32').classList.add("correct")
          document.getElementById('b-phygrav-31').classList.add("incorrect")
          document.getElementById('b-phygrav-33').classList.add("incorrect")
          document.getElementById('b-phygrav-34').classList.add("incorrect")
    
          document.getElementById('sa-phygrav-3').disabled = true;
          document.getElementById('o-phygrav-31').disabled = true;
          document.getElementById('o-phygrav-32').disabled = true;
          document.getElementById('o-phygrav-33').disabled = true;
          document.getElementById('o-phygrav-34').disabled = true;
          showExplanation3()
          localStorage.setItem('phygrav3', 1)
        }
        if (document.getElementById('o-phygrav-33').checked) {
          document.getElementById('r-phygrav-33').style.color = 'red'
          document.getElementById('r-phygrav-33').innerHTML = 'Incorrect!'
          document.getElementById('r-phygrav-32').style.color = 'blue'
          document.getElementById('r-phygrav-32').innerHTML = 'Correct!'
          
          document.getElementById('b-phygrav-32').classList.add("correct")
          document.getElementById('b-phygrav-31').classList.add("incorrect")
          document.getElementById('b-phygrav-33').classList.add("incorrect")
          document.getElementById('b-phygrav-34').classList.add("incorrect")
    
          document.getElementById('sa-phygrav-3').disabled = true;
          document.getElementById('o-phygrav-31').disabled = true;
          document.getElementById('o-phygrav-32').disabled = true;
          document.getElementById('o-phygrav-33').disabled = true;
          document.getElementById('o-phygrav-34').disabled = true;
          showExplanation3()
          localStorage.setItem('phygrav3', 0)
        }
        if (document.getElementById('o-phygrav-34').checked) {
          document.getElementById('r-phygrav-34').style.color = 'red'
          document.getElementById('r-phygrav-34').innerHTML = 'Incorrect!'
          document.getElementById('r-phygrav-32').style.color = 'blue'
          document.getElementById('r-phygrav-32').innerHTML = 'Correct!'
          
          document.getElementById('b-phygrav-32').classList.add("correct")
          document.getElementById('b-phygrav-31').classList.add("incorrect")
          document.getElementById('b-phygrav-33').classList.add("incorrect")
          document.getElementById('b-phygrav-34').classList.add("incorrect")
    
          document.getElementById('sa-phygrav-3').disabled = true;
          document.getElementById('o-phygrav-31').disabled = true;
          document.getElementById('o-phygrav-32').disabled = true;
          document.getElementById('o-phygrav-33').disabled = true;
          document.getElementById('o-phygrav-34').disabled = true;
          showExplanation3()
          localStorage.setItem('phygrav3', 0)
        }
      }
    }
    
    if (document.getElementById('sa-phygrav-4') != null) {
      phygrav4But.onclick = function() {
        if (document.getElementById('o-phygrav-41').checked) {
          document.getElementById('r-phygrav-41').style.color = 'red'
          document.getElementById('r-phygrav-41').innerHTML = 'Incorrect!'
          document.getElementById('r-phygrav-44').style.color = 'blue'
          document.getElementById('r-phygrav-44').innerHTML = 'Correct!'
          
          document.getElementById('b-phygrav-44').classList.add("correct")
          document.getElementById('b-phygrav-41').classList.add("incorrect")
          document.getElementById('b-phygrav-42').classList.add("incorrect")
          document.getElementById('b-phygrav-43').classList.add("incorrect")
    
          document.getElementById('sa-phygrav-4').disabled = true;
          document.getElementById('o-phygrav-41').disabled = true;
          document.getElementById('o-phygrav-42').disabled = true;
          document.getElementById('o-phygrav-43').disabled = true;
          document.getElementById('o-phygrav-44').disabled = true;
          showExplanation4()
          localStorage.setItem('phygrav4', 0)
        }
        if (document.getElementById('o-phygrav-42').checked) {
          document.getElementById('r-phygrav-42').style.color = 'red'
          document.getElementById('r-phygrav-42').innerHTML = 'Incorrect!'
          document.getElementById('r-phygrav-44').style.color = 'blue'
          document.getElementById('r-phygrav-44').innerHTML = 'Correct!'
          
          document.getElementById('b-phygrav-44').classList.add("correct")
          document.getElementById('b-phygrav-41').classList.add("incorrect")
          document.getElementById('b-phygrav-42').classList.add("incorrect")
          document.getElementById('b-phygrav-43').classList.add("incorrect")
    
          document.getElementById('sa-phygrav-4').disabled = true;
          document.getElementById('o-phygrav-41').disabled = true;
          document.getElementById('o-phygrav-42').disabled = true;
          document.getElementById('o-phygrav-43').disabled = true;
          document.getElementById('o-phygrav-44').disabled = true;
          showExplanation4()
          localStorage.setItem('phygrav4', 0)
        }
        if (document.getElementById('o-phygrav-43').checked) {
          document.getElementById('r-phygrav-43').style.color = 'red'
          document.getElementById('r-phygrav-43').innerHTML = 'Incorrect!'
          document.getElementById('r-phygrav-44').style.color = 'blue'
          document.getElementById('r-phygrav-44').innerHTML = 'Correct!'
          
          document.getElementById('b-phygrav-44').classList.add("correct")
          document.getElementById('b-phygrav-41').classList.add("incorrect")
          document.getElementById('b-phygrav-42').classList.add("incorrect")
          document.getElementById('b-phygrav-43').classList.add("incorrect")
    
          document.getElementById('sa-phygrav-4').disabled = true;
          document.getElementById('o-phygrav-41').disabled = true;
          document.getElementById('o-phygrav-42').disabled = true;
          document.getElementById('o-phygrav-43').disabled = true;
          document.getElementById('o-phygrav-44').disabled = true;
          showExplanation4()
          localStorage.setItem('phygrav4', 0)
        }
        if (document.getElementById('o-phygrav-44').checked) {
          document.getElementById('r-phygrav-44').style.color = 'blue'
          document.getElementById('r-phygrav-44').innerHTML = 'Correct!'
          
          document.getElementById('b-phygrav-44').classList.add("correct")
          document.getElementById('b-phygrav-41').classList.add("incorrect")
          document.getElementById('b-phygrav-42').classList.add("incorrect")
          document.getElementById('b-phygrav-43').classList.add("incorrect")
    
          document.getElementById('sa-phygrav-4').disabled = true;
          document.getElementById('o-phygrav-41').disabled = true;
          document.getElementById('o-phygrav-42').disabled = true;
          document.getElementById('o-phygrav-43').disabled = true;
          document.getElementById('o-phygrav-44').disabled = true;
          showExplanation4()
          localStorage.setItem('phygrav4', 1)
        }
      }
    }
    
    if (document.getElementById('sa-phygrav-5') != null) {
      phygrav5But.onclick = function() {
        if (document.getElementById('o-phygrav-51').checked) {
          document.getElementById('r-phygrav-51').style.color = 'red'
          document.getElementById('r-phygrav-51').innerHTML = 'Incorrect!'
          document.getElementById('r-phygrav-53').style.color = 'blue'
          document.getElementById('r-phygrav-53').innerHTML = 'Correct!'
          
          document.getElementById('b-phygrav-53').classList.add("correct")
          document.getElementById('b-phygrav-51').classList.add("incorrect")
          document.getElementById('b-phygrav-52').classList.add("incorrect")
          document.getElementById('b-phygrav-54').classList.add("incorrect")
    
          document.getElementById('sa-phygrav-5').disabled = true;
          document.getElementById('o-phygrav-51').disabled = true;
          document.getElementById('o-phygrav-52').disabled = true;
          document.getElementById('o-phygrav-53').disabled = true;
          document.getElementById('o-phygrav-54').disabled = true;
          showExplanation5()
          localStorage.setItem('phygrav5', 0)
        }
        if (document.getElementById('o-phygrav-52').checked) {
          document.getElementById('r-phygrav-52').style.color = 'red'
          document.getElementById('r-phygrav-52').innerHTML = 'Incorrect!'
          document.getElementById('r-phygrav-53').style.color = 'blue'
          document.getElementById('r-phygrav-53').innerHTML = 'Correct!'
          
          document.getElementById('b-phygrav-53').classList.add("correct")
          document.getElementById('b-phygrav-51').classList.add("incorrect")
          document.getElementById('b-phygrav-52').classList.add("incorrect")
          document.getElementById('b-phygrav-54').classList.add("incorrect")
    
          document.getElementById('sa-phygrav-5').disabled = true;
          document.getElementById('o-phygrav-51').disabled = true;
          document.getElementById('o-phygrav-52').disabled = true;
          document.getElementById('o-phygrav-53').disabled = true;
          document.getElementById('o-phygrav-54').disabled = true;
          showExplanation5()
          localStorage.setItem('phygrav5', 0)
        }
        if (document.getElementById('o-phygrav-53').checked) {
          document.getElementById('r-phygrav-53').style.color = 'blue'
          document.getElementById('r-phygrav-53').innerHTML = 'Correct!'
          
          document.getElementById('b-phygrav-53').classList.add("correct")
          document.getElementById('b-phygrav-51').classList.add("incorrect")
          document.getElementById('b-phygrav-52').classList.add("incorrect")
          document.getElementById('b-phygrav-54').classList.add("incorrect")
    
          document.getElementById('sa-phygrav-5').disabled = true;
          document.getElementById('o-phygrav-51').disabled = true;
          document.getElementById('o-phygrav-52').disabled = true;
          document.getElementById('o-phygrav-53').disabled = true;
          document.getElementById('o-phygrav-54').disabled = true;
          showExplanation5()
          localStorage.setItem('phygrav5', 1)
        }
        if (document.getElementById('o-phygrav-54').checked) {
          document.getElementById('r-phygrav-54').style.color = 'red'
          document.getElementById('r-phygrav-54').innerHTML = 'Incorrect!'
          document.getElementById('r-phygrav-53').style.color = 'blue'
          document.getElementById('r-phygrav-53').innerHTML = 'Correct!'
          
          document.getElementById('b-phygrav-53').classList.add("correct")
          document.getElementById('b-phygrav-51').classList.add("incorrect")
          document.getElementById('b-phygrav-52').classList.add("incorrect")
          document.getElementById('b-phygrav-54').classList.add("incorrect")
    
          document.getElementById('sa-phygrav-5').disabled = true;
          document.getElementById('o-phygrav-51').disabled = true;
          document.getElementById('o-phygrav-52').disabled = true;
          document.getElementById('o-phygrav-53').disabled = true;
          document.getElementById('o-phygrav-54').disabled = true;
          showExplanation5()
          localStorage.setItem('phygrav5', 0)
        }
      }
    }
        
         
      if (document.getElementById('sa-phygrav-6') != null) {
      phygrav6But.onclick = function() {
        if (document.getElementById('o-phygrav-61').checked) {
          document.getElementById('r-phygrav-61').style.color = 'red'
          document.getElementById('r-phygrav-61').innerHTML = 'Incorrect!'
          document.getElementById('r-phygrav-64').style.color = 'blue'
          document.getElementById('r-phygrav-64').innerHTML = 'Correct!'
          
          document.getElementById('b-phygrav-64').classList.add("correct")
          document.getElementById('b-phygrav-61').classList.add("incorrect")
          document.getElementById('b-phygrav-62').classList.add("incorrect")
          document.getElementById('b-phygrav-63').classList.add("incorrect")
    
          document.getElementById('sa-phygrav-6').disabled = true;
          document.getElementById('o-phygrav-61').disabled = true;
          document.getElementById('o-phygrav-62').disabled = true;
          document.getElementById('o-phygrav-63').disabled = true;
          document.getElementById('o-phygrav-64').disabled = true;
          showExplanation6()
          localStorage.setItem('phygrav6', 0)
        }
        if (document.getElementById('o-phygrav-62').checked) {
          document.getElementById('r-phygrav-62').style.color = 'red'
          document.getElementById('r-phygrav-62').innerHTML = 'Incorrect!'
          document.getElementById('r-phygrav-64').style.color = 'blue'
          document.getElementById('r-phygrav-64').innerHTML = 'Correct!'
          
          document.getElementById('b-phygrav-64').classList.add("correct")
          document.getElementById('b-phygrav-61').classList.add("incorrect")
          document.getElementById('b-phygrav-62').classList.add("incorrect")
          document.getElementById('b-phygrav-63').classList.add("incorrect")
    
          document.getElementById('sa-phygrav-6').disabled = true;
          document.getElementById('o-phygrav-61').disabled = true;
          document.getElementById('o-phygrav-62').disabled = true;
          document.getElementById('o-phygrav-63').disabled = true;
          document.getElementById('o-phygrav-64').disabled = true;
          showExplanation6()
          localStorage.setItem('phygrav6', 0)
        }
        if (document.getElementById('o-phygrav-63').checked) {
          document.getElementById('r-phygrav-63').style.color = 'red'
          document.getElementById('r-phygrav-63').innerHTML = 'Incorrect!'
          document.getElementById('r-phygrav-64').style.color = 'blue'
          document.getElementById('r-phygrav-64').innerHTML = 'Correct!'
          
          document.getElementById('b-phygrav-64').classList.add("correct")
          document.getElementById('b-phygrav-61').classList.add("incorrect")
          document.getElementById('b-phygrav-62').classList.add("incorrect")
          document.getElementById('b-phygrav-63').classList.add("incorrect")
    
          document.getElementById('sa-phygrav-6').disabled = true;
          document.getElementById('o-phygrav-61').disabled = true;
          document.getElementById('o-phygrav-62').disabled = true;
          document.getElementById('o-phygrav-63').disabled = true;
          document.getElementById('o-phygrav-64').disabled = true;
          showExplanation6()
          localStorage.setItem('phygrav6', 0)
        }
        if (document.getElementById('o-phygrav-64').checked) {
          document.getElementById('r-phygrav-64').style.color = 'blue'
          document.getElementById('r-phygrav-64').innerHTML = 'Correct!'
          
          document.getElementById('b-phygrav-64').classList.add("correct")
          document.getElementById('b-phygrav-61').classList.add("incorrect")
          document.getElementById('b-phygrav-62').classList.add("incorrect")
          document.getElementById('b-phygrav-63').classList.add("incorrect")
    
          document.getElementById('sa-phygrav-6').disabled = true;
          document.getElementById('o-phygrav-61').disabled = true;
          document.getElementById('o-phygrav-62').disabled = true;
          document.getElementById('o-phygrav-63').disabled = true;
          document.getElementById('o-phygrav-64').disabled = true;
          showExplanation6()
          localStorage.setItem('phygrav6', 1)
        }
      }
    }
    
    if (document.getElementById('sa-phygrav-7') != null) {
      phygrav7But.onclick = function() {
        if (document.getElementById('o-phygrav-71').checked) {
          document.getElementById('r-phygrav-71').style.color = 'red'
          document.getElementById('r-phygrav-71').innerHTML = 'Incorrect!'
          document.getElementById('r-phygrav-74').style.color = 'blue'
          document.getElementById('r-phygrav-74').innerHTML = 'Correct!'
          
          document.getElementById('b-phygrav-74').classList.add("correct")
          document.getElementById('b-phygrav-71').classList.add("incorrect")
          document.getElementById('b-phygrav-72').classList.add("incorrect")
          document.getElementById('b-phygrav-73').classList.add("incorrect")
    
          document.getElementById('sa-phygrav-7').disabled = true;
          document.getElementById('o-phygrav-71').disabled = true;
          document.getElementById('o-phygrav-72').disabled = true;
          document.getElementById('o-phygrav-73').disabled = true;
          document.getElementById('o-phygrav-74').disabled = true;
          showExplanation7()
          localStorage.setItem('phygrav7', 0)
        }
        if (document.getElementById('o-phygrav-72').checked) {
          document.getElementById('r-phygrav-72').style.color = 'red'
          document.getElementById('r-phygrav-72').innerHTML = 'Incorrect!'
          document.getElementById('r-phygrav-74').style.color = 'blue'
          document.getElementById('r-phygrav-74').innerHTML = 'Correct!'
          
          document.getElementById('b-phygrav-74').classList.add("correct")
          document.getElementById('b-phygrav-71').classList.add("incorrect")
          document.getElementById('b-phygrav-72').classList.add("incorrect")
          document.getElementById('b-phygrav-73').classList.add("incorrect")
    
          document.getElementById('sa-phygrav-7').disabled = true;
          document.getElementById('o-phygrav-71').disabled = true;
          document.getElementById('o-phygrav-72').disabled = true;
          document.getElementById('o-phygrav-73').disabled = true;
          document.getElementById('o-phygrav-74').disabled = true;
          showExplanation7()
          localStorage.setItem('phygrav7', 0)
        }
        if (document.getElementById('o-phygrav-73').checked) {
          document.getElementById('r-phygrav-73').style.color = 'red'
          document.getElementById('r-phygrav-73').innerHTML = 'Incorrect!'
          document.getElementById('r-phygrav-74').style.color = 'blue'
          document.getElementById('r-phygrav-74').innerHTML = 'Correct!'
          
          document.getElementById('b-phygrav-74').classList.add("correct")
          document.getElementById('b-phygrav-71').classList.add("incorrect")
          document.getElementById('b-phygrav-72').classList.add("incorrect")
          document.getElementById('b-phygrav-73').classList.add("incorrect")
    
          document.getElementById('sa-phygrav-7').disabled = true;
          document.getElementById('o-phygrav-71').disabled = true;
          document.getElementById('o-phygrav-72').disabled = true;
          document.getElementById('o-phygrav-73').disabled = true;
          document.getElementById('o-phygrav-74').disabled = true;
          showExplanation7()
          localStorage.setItem('phygrav7', 0)
        }
        if (document.getElementById('o-phygrav-74').checked) {
          document.getElementById('r-phygrav-74').style.color = 'blue'
          document.getElementById('r-phygrav-74').innerHTML = 'Correct!'
          
          document.getElementById('b-phygrav-74').classList.add("correct")
          document.getElementById('b-phygrav-71').classList.add("incorrect")
          document.getElementById('b-phygrav-72').classList.add("incorrect")
          document.getElementById('b-phygrav-73').classList.add("incorrect")
    
          document.getElementById('sa-phygrav-7').disabled = true;
          document.getElementById('o-phygrav-71').disabled = true;
          document.getElementById('o-phygrav-72').disabled = true;
          document.getElementById('o-phygrav-73').disabled = true;
          document.getElementById('o-phygrav-74').disabled = true;
          showExplanation7()
          localStorage.setItem('phygrav7', 1)
        }
      }
    }
    
    
    if (document.getElementById('sa-phygrav-8') != null) {
      phygrav8But.onclick = function() {
        if (document.getElementById('o-phygrav-81').checked) {
          document.getElementById('r-phygrav-81').style.color = 'red'
          document.getElementById('r-phygrav-81').innerHTML = 'Incorrect!'
          document.getElementById('r-phygrav-82').style.color = 'blue'
          document.getElementById('r-phygrav-82').innerHTML = 'Correct!'
          
          document.getElementById('b-phygrav-82').classList.add("correct")
          document.getElementById('b-phygrav-81').classList.add("incorrect")
          document.getElementById('b-phygrav-83').classList.add("incorrect")
          document.getElementById('b-phygrav-84').classList.add("incorrect")
    
          document.getElementById('sa-phygrav-8').disabled = true;
          document.getElementById('o-phygrav-81').disabled = true;
          document.getElementById('o-phygrav-82').disabled = true;
          document.getElementById('o-phygrav-83').disabled = true;
          document.getElementById('o-phygrav-84').disabled = true;
          showExplanation8()
          localStorage.setItem('phygrav8', 0)
        }
        if (document.getElementById('o-phygrav-82').checked) {
          document.getElementById('r-phygrav-82').style.color = 'blue'
          document.getElementById('r-phygrav-82').innerHTML = 'Correct!'
          
          document.getElementById('b-phygrav-82').classList.add("correct")
          document.getElementById('b-phygrav-81').classList.add("incorrect")
          document.getElementById('b-phygrav-83').classList.add("incorrect")
          document.getElementById('b-phygrav-84').classList.add("incorrect")
    
          document.getElementById('sa-phygrav-8').disabled = true;
          document.getElementById('o-phygrav-81').disabled = true;
          document.getElementById('o-phygrav-82').disabled = true;
          document.getElementById('o-phygrav-83').disabled = true;
          document.getElementById('o-phygrav-84').disabled = true;
          showExplanation8()
          localStorage.setItem('phygrav8', 1)
        }
        if (document.getElementById('o-phygrav-83').checked) {
          document.getElementById('r-phygrav-83').style.color = 'red'
          document.getElementById('r-phygrav-83').innerHTML = 'Incorrect!'
          document.getElementById('r-phygrav-82').style.color = 'blue'
          document.getElementById('r-phygrav-82').innerHTML = 'Correct!'
          
          document.getElementById('b-phygrav-82').classList.add("correct")
          document.getElementById('b-phygrav-81').classList.add("incorrect")
          document.getElementById('b-phygrav-83').classList.add("incorrect")
          document.getElementById('b-phygrav-84').classList.add("incorrect")
    
          document.getElementById('sa-phygrav-8').disabled = true;
          document.getElementById('o-phygrav-81').disabled = true;
          document.getElementById('o-phygrav-82').disabled = true;
          document.getElementById('o-phygrav-83').disabled = true;
          document.getElementById('o-phygrav-84').disabled = true;
          showExplanation8()
          localStorage.setItem('phygrav8', 0)
        }
        if (document.getElementById('o-phygrav-84').checked) {
          document.getElementById('r-phygrav-84').style.color = 'red'
          document.getElementById('r-phygrav-84').innerHTML = 'Incorrect!'
          document.getElementById('r-phygrav-82').style.color = 'blue'
          document.getElementById('r-phygrav-82').innerHTML = 'Correct!'
          
          document.getElementById('b-phygrav-82').classList.add("correct")
          document.getElementById('b-phygrav-81').classList.add("incorrect")
          document.getElementById('b-phygrav-83').classList.add("incorrect")
          document.getElementById('b-phygrav-84').classList.add("incorrect")
    
          document.getElementById('sa-phygrav-8').disabled = true;
          document.getElementById('o-phygrav-81').disabled = true;
          document.getElementById('o-phygrav-82').disabled = true;
          document.getElementById('o-phygrav-83').disabled = true;
          document.getElementById('o-phygrav-84').disabled = true;
          showExplanation8()
          localStorage.setItem('phygrav8', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-phygrav-9') != null) {
      phygrav9But.onclick = function() {
        if (document.getElementById('o-phygrav-91').checked) {
          document.getElementById('r-phygrav-91').style.color = 'red'
          document.getElementById('r-phygrav-91').innerHTML = 'Incorrect!'
          document.getElementById('r-phygrav-94').style.color = 'blue'
          document.getElementById('r-phygrav-94').innerHTML = 'Correct!'
          
          document.getElementById('b-phygrav-94').classList.add("correct")
          document.getElementById('b-phygrav-91').classList.add("incorrect")
          document.getElementById('b-phygrav-92').classList.add("incorrect")
          document.getElementById('b-phygrav-93').classList.add("incorrect")
    
          document.getElementById('sa-phygrav-9').disabled = true;
          document.getElementById('o-phygrav-91').disabled = true;
          document.getElementById('o-phygrav-92').disabled = true;
          document.getElementById('o-phygrav-93').disabled = true;
          document.getElementById('o-phygrav-94').disabled = true;
          showExplanation9()
          localStorage.setItem('phygrav9', 0)
        }
        if (document.getElementById('o-phygrav-92').checked) {
          document.getElementById('r-phygrav-91').style.color = 'red'
          document.getElementById('r-phygrav-91').innerHTML = 'Incorrect!'
          document.getElementById('r-phygrav-94').style.color = 'blue'
          document.getElementById('r-phygrav-94').innerHTML = 'Correct!'
          
          document.getElementById('b-phygrav-94').classList.add("correct")
          document.getElementById('b-phygrav-91').classList.add("incorrect")
          document.getElementById('b-phygrav-92').classList.add("incorrect")
          document.getElementById('b-phygrav-93').classList.add("incorrect")
    
          document.getElementById('sa-phygrav-9').disabled = true;
          document.getElementById('o-phygrav-91').disabled = true;
          document.getElementById('o-phygrav-92').disabled = true;
          document.getElementById('o-phygrav-93').disabled = true;
          document.getElementById('o-phygrav-94').disabled = true;
          showExplanation9()
          localStorage.setItem('phygrav9', 0)
        }
        if (document.getElementById('o-phygrav-93').checked) {
          document.getElementById('r-phygrav-91').style.color = 'red'
          document.getElementById('r-phygrav-91').innerHTML = 'Incorrect!'
          document.getElementById('r-phygrav-94').style.color = 'blue'
          document.getElementById('r-phygrav-94').innerHTML = 'Correct!'
          
          document.getElementById('b-phygrav-94').classList.add("correct")
          document.getElementById('b-phygrav-91').classList.add("incorrect")
          document.getElementById('b-phygrav-92').classList.add("incorrect")
          document.getElementById('b-phygrav-93').classList.add("incorrect")
    
          document.getElementById('sa-phygrav-9').disabled = true;
          document.getElementById('o-phygrav-91').disabled = true;
          document.getElementById('o-phygrav-92').disabled = true;
          document.getElementById('o-phygrav-93').disabled = true;
          document.getElementById('o-phygrav-94').disabled = true;
          showExplanation9()
          localStorage.setItem('phygrav9', 0)
        }
        if (document.getElementById('o-phygrav-94').checked) {
          document.getElementById('r-phygrav-94').style.color = 'blue'
          document.getElementById('r-phygrav-94').innerHTML = 'Correct!'
          
          document.getElementById('b-phygrav-94').classList.add("correct")
          document.getElementById('b-phygrav-91').classList.add("incorrect")
          document.getElementById('b-phygrav-92').classList.add("incorrect")
          document.getElementById('b-phygrav-93').classList.add("incorrect")
    
          document.getElementById('sa-phygrav-9').disabled = true;
          document.getElementById('o-phygrav-91').disabled = true;
          document.getElementById('o-phygrav-92').disabled = true;
          document.getElementById('o-phygrav-93').disabled = true;
          document.getElementById('o-phygrav-94').disabled = true;
          showExplanation9()
          localStorage.setItem('phygrav9', 1)
        }
      }
    }
    
    if (document.getElementById('sa-phygrav-10') != null) {
      phygrav10But.onclick = function() {
        if (document.getElementById('o-phygrav-101').checked) {
          document.getElementById('r-phygrav-101').style.color = 'red'
          document.getElementById('r-phygrav-101').innerHTML = 'Incorrect!'
          document.getElementById('r-phygrav-102').style.color = 'blue'
          document.getElementById('r-phygrav-102').innerHTML = 'Correct!'
          
          document.getElementById('b-phygrav-102').classList.add("correct")
          document.getElementById('b-phygrav-101').classList.add("incorrect")
          document.getElementById('b-phygrav-103').classList.add("incorrect")
          document.getElementById('b-phygrav-104').classList.add("incorrect")
    
          document.getElementById('sa-phygrav-10').disabled = true;
          document.getElementById('o-phygrav-101').disabled = true;
          document.getElementById('o-phygrav-102').disabled = true;
          document.getElementById('o-phygrav-103').disabled = true;
          document.getElementById('o-phygrav-104').disabled = true;
          showExplanation10()
          localStorage.setItem('phygrav10', 0)
        }
        if (document.getElementById('o-phygrav-102').checked) {
          document.getElementById('r-phygrav-102').style.color = 'blue'
          document.getElementById('r-phygrav-102').innerHTML = 'Correct!'
          
          document.getElementById('b-phygrav-102').classList.add("correct")
          document.getElementById('b-phygrav-101').classList.add("incorrect")
          document.getElementById('b-phygrav-103').classList.add("incorrect")
          document.getElementById('b-phygrav-104').classList.add("incorrect")
    
          document.getElementById('sa-phygrav-10').disabled = true;
          document.getElementById('o-phygrav-101').disabled = true;
          document.getElementById('o-phygrav-102').disabled = true;
          document.getElementById('o-phygrav-103').disabled = true;
          document.getElementById('o-phygrav-104').disabled = true;
          showExplanation10()
          localStorage.setItem('phygrav10', 1)
        }
        if (document.getElementById('o-phygrav-103').checked) {
          document.getElementById('r-phygrav-103').style.color = 'red'
          document.getElementById('r-phygrav-103').innerHTML = 'Incorrect!'
          document.getElementById('r-phygrav-102').style.color = 'blue'
          document.getElementById('r-phygrav-102').innerHTML = 'Correct!'
          
          document.getElementById('b-phygrav-102').classList.add("correct")
          document.getElementById('b-phygrav-101').classList.add("incorrect")
          document.getElementById('b-phygrav-103').classList.add("incorrect")
          document.getElementById('b-phygrav-104').classList.add("incorrect")
    
          document.getElementById('sa-phygrav-10').disabled = true;
          document.getElementById('o-phygrav-101').disabled = true;
          document.getElementById('o-phygrav-102').disabled = true;
          document.getElementById('o-phygrav-103').disabled = true;
          document.getElementById('o-phygrav-104').disabled = true;
          showExplanation10()
          localStorage.setItem('phygrav10', 0)
        }
        if (document.getElementById('o-phygrav-104').checked) {
          document.getElementById('r-phygrav-104').style.color = 'red'
          document.getElementById('r-phygrav-104').innerHTML = 'Incorrect!'
          document.getElementById('r-phygrav-102').style.color = 'blue'
          document.getElementById('r-phygrav-102').innerHTML = 'Correct!'
          
          document.getElementById('b-phygrav-102').classList.add("correct")
          document.getElementById('b-phygrav-101').classList.add("incorrect")
          document.getElementById('b-phygrav-103').classList.add("incorrect")
          document.getElementById('b-phygrav-104').classList.add("incorrect")
    
          document.getElementById('sa-phygrav-10').disabled = true;
          document.getElementById('o-phygrav-101').disabled = true;
          document.getElementById('o-phygrav-102').disabled = true;
          document.getElementById('o-phygrav-103').disabled = true;
          document.getElementById('o-phygrav-104').disabled = true;
          showExplanation10()
          localStorage.setItem('phygrav10', 0)
        }
      }
    }
    