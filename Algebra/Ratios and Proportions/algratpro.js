
  let algratpro1But = document.getElementById('sa-algratpro-1');
  let algratpro2But = document.getElementById('sa-algratpro-2');
  let algratpro3But = document.getElementById('sa-algratpro-3');
  let algratpro4But = document.getElementById('sa-algratpro-4');
  let algratpro5But = document.getElementById('sa-algratpro-5');
  let algratpro6But = document.getElementById('sa-algratpro-6');
  let algratpro7But = document.getElementById('sa-algratpro-7');
  let algratpro8But = document.getElementById('sa-algratpro-8');
  let algratpro9But = document.getElementById('sa-algratpro-9');
  let algratpro10But = document.getElementById('sa-algratpro-10');


  showExplanation1 = function() {
    document.getElementById('e-algratpro-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-algratpro-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-algratpro-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-algratpro-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-algratpro-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-algratpro-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-algratpro-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-algratpro-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-algratpro-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-algratpro-10').style.display = 'block';
     } 



     if (document.getElementById('sa-algratpro-1') != null) {
      algratpro1But.onclick = function () {
        if (document.getElementById('o-algratpro-11').checked) {
          document.getElementById('r-algratpro-11').style.color = 'red'
          document.getElementById('r-algratpro-11').innerHTML = 'Incorrect!'
          document.getElementById('r-algratpro-12').style.color = 'blue'
          document.getElementById('r-algratpro-12').innerHTML = 'Correct!'
    
          document.getElementById('b-algratpro-12').classList.add("correct")
          document.getElementById('b-algratpro-11').classList.add("incorrect")
          document.getElementById('b-algratpro-13').classList.add("incorrect")
          document.getElementById('b-algratpro-14').classList.add("incorrect")
    
          document.getElementById('sa-algratpro-1').disabled = true;
          document.getElementById('o-algratpro-11').disabled = true;
          document.getElementById('o-algratpro-12').disabled = true;
          document.getElementById('o-algratpro-13').disabled = true;
          document.getElementById('o-algratpro-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algratpro1', 0)
        }
    
        if (document.getElementById('o-algratpro-12').checked) {
          document.getElementById('r-algratpro-12').style.color = 'blue'
          document.getElementById('r-algratpro-12').innerHTML = 'Correct!'
    
          document.getElementById('b-algratpro-12').classList.add("correct")
          document.getElementById('b-algratpro-11').classList.add("incorrect")
          document.getElementById('b-algratpro-13').classList.add("incorrect")
          document.getElementById('b-algratpro-14').classList.add("incorrect")
    
          document.getElementById('sa-algratpro-1').disabled = true;
          document.getElementById('o-algratpro-11').disabled = true;
          document.getElementById('o-algratpro-12').disabled = true;
          document.getElementById('o-algratpro-13').disabled = true;
          document.getElementById('o-algratpro-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algratpro1', 1)
        }
        if (document.getElementById('o-algratpro-13').checked) {
          document.getElementById('r-algratpro-13').style.color = 'red'
          document.getElementById('r-algratpro-13').innerHTML = 'Incorrect!'
          document.getElementById('r-algratpro-12').style.color = 'blue'
          document.getElementById('r-algratpro-12').innerHTML = 'Correct!'
          
          document.getElementById('b-algratpro-12').classList.add("correct")
          document.getElementById('b-algratpro-11').classList.add("incorrect")
          document.getElementById('b-algratpro-13').classList.add("incorrect")
          document.getElementById('b-algratpro-14').classList.add("incorrect")
    
          document.getElementById('sa-algratpro-1').disabled = true;
          document.getElementById('o-algratpro-11').disabled = true;
          document.getElementById('o-algratpro-12').disabled = true;
          document.getElementById('o-algratpro-13').disabled = true;
          document.getElementById('o-algratpro-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algratpro1', 0)
        }
        if (document.getElementById('o-algratpro-14').checked) {
          document.getElementById('r-algratpro-14').style.color = 'red'
          document.getElementById('r-algratpro-14').innerHTML = 'Incorrect!'
          document.getElementById('r-algratpro-12').style.color = 'blue'
          document.getElementById('r-algratpro-12').innerHTML = 'Correct!'
          
          document.getElementById('b-algratpro-12').classList.add("correct")
          document.getElementById('b-algratpro-11').classList.add("incorrect")
          document.getElementById('b-algratpro-13').classList.add("incorrect")
          document.getElementById('b-algratpro-14').classList.add("incorrect")
    
          document.getElementById('sa-algratpro-1').disabled = true;
          document.getElementById('o-algratpro-11').disabled = true;
          document.getElementById('o-algratpro-12').disabled = true;
          document.getElementById('o-algratpro-13').disabled = true;
          document.getElementById('o-algratpro-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algratpro1', 0)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-algratpro-2') != null) {
      algratpro2But.onclick = function() {
        if (document.getElementById('o-algratpro-21').checked) {
          document.getElementById('r-algratpro-21').style.color = 'red'
          document.getElementById('r-algratpro-21').innerHTML = 'Incorrect!'
          document.getElementById('r-algratpro-22').style.color = 'blue'
          document.getElementById('r-algratpro-22').innerHTML = 'Correct!'
          
          document.getElementById('b-algratpro-22').classList.add("correct")
          document.getElementById('b-algratpro-21').classList.add("incorrect")
          document.getElementById('b-algratpro-23').classList.add("incorrect")
          document.getElementById('b-algratpro-24').classList.add("incorrect")
    
          document.getElementById('sa-algratpro-2').disabled = true;
          document.getElementById('o-algratpro-21').disabled = true;
          document.getElementById('o-algratpro-22').disabled = true;
          document.getElementById('o-algratpro-23').disabled = true;
          document.getElementById('o-algratpro-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algratpro2', 0)
        }
        if (document.getElementById('o-algratpro-22').checked) {
          document.getElementById('r-algratpro-22').style.color = 'blue'
          document.getElementById('r-algratpro-22').innerHTML = 'Correct!'
          
          document.getElementById('b-algratpro-22').classList.add("correct")
          document.getElementById('b-algratpro-21').classList.add("incorrect")
          document.getElementById('b-algratpro-23').classList.add("incorrect")
          document.getElementById('b-algratpro-24').classList.add("incorrect")
    
          document.getElementById('sa-algratpro-2').disabled = true;
          document.getElementById('o-algratpro-21').disabled = true;
          document.getElementById('o-algratpro-22').disabled = true;
          document.getElementById('o-algratpro-23').disabled = true;
          document.getElementById('o-algratpro-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algratpro2', 1)
        }
        if (document.getElementById('o-algratpro-23').checked) {
          document.getElementById('r-algratpro-23').style.color = 'red'
          document.getElementById('r-algratpro-23').innerHTML = 'Incorrect!'
          document.getElementById('r-algratpro-22').style.color = 'blue'
          document.getElementById('r-algratpro-22').innerHTML = 'Correct!'
          
          document.getElementById('b-algratpro-22').classList.add("correct")
          document.getElementById('b-algratpro-21').classList.add("incorrect")
          document.getElementById('b-algratpro-23').classList.add("incorrect")
          document.getElementById('b-algratpro-24').classList.add("incorrect")
    
          document.getElementById('sa-algratpro-2').disabled = true;
          document.getElementById('o-algratpro-21').disabled = true;
          document.getElementById('o-algratpro-22').disabled = true;
          document.getElementById('o-algratpro-23').disabled = true;
          document.getElementById('o-algratpro-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algratpro2', 0)
        }
        if (document.getElementById('o-algratpro-24').checked) {
          document.getElementById('r-algratpro-24').style.color = 'red'
          document.getElementById('r-algratpro-24').innerHTML = 'Incorrect!'
          document.getElementById('r-algratpro-22').style.color = 'blue'
          document.getElementById('r-algratpro-22').innerHTML = 'Correct!'
          
          document.getElementById('b-algratpro-22').classList.add("correct")
          document.getElementById('b-algratpro-21').classList.add("incorrect")
          document.getElementById('b-algratpro-23').classList.add("incorrect")
          document.getElementById('b-algratpro-24').classList.add("incorrect")
    
          document.getElementById('sa-algratpro-2').disabled = true;
          document.getElementById('o-algratpro-21').disabled = true;
          document.getElementById('o-algratpro-22').disabled = true;
          document.getElementById('o-algratpro-23').disabled = true;
          document.getElementById('o-algratpro-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algratpro2', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algratpro-3') != null) {
      algratpro3But.onclick = function() {
        if (document.getElementById('o-algratpro-31').checked) {
   
          document.getElementById('r-algratpro-31').style.color = 'blue'
          document.getElementById('r-algratpro-31').innerHTML = 'Correct!'
          
          document.getElementById('b-algratpro-31').classList.add("correct")
          document.getElementById('b-algratpro-32').classList.add("incorrect")
          document.getElementById('b-algratpro-33').classList.add("incorrect")
          document.getElementById('b-algratpro-34').classList.add("incorrect")
    
          document.getElementById('sa-algratpro-3').disabled = true;
          document.getElementById('o-algratpro-31').disabled = true;
          document.getElementById('o-algratpro-32').disabled = true;
          document.getElementById('o-algratpro-33').disabled = true;
          document.getElementById('o-algratpro-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algratpro3', 1)
        }
        if (document.getElementById('o-algratpro-32').checked) {
          document.getElementById('r-algratpro-32').style.color = 'red'
          document.getElementById('r-algratpro-32').innerHTML = 'Incorrect!'
          document.getElementById('r-algratpro-31').style.color = 'blue'
          document.getElementById('r-algratpro-31').innerHTML = 'Correct!'
          
          document.getElementById('b-algratpro-31').classList.add("correct")
          document.getElementById('b-algratpro-32').classList.add("incorrect")
          document.getElementById('b-algratpro-33').classList.add("incorrect")
          document.getElementById('b-algratpro-34').classList.add("incorrect")
    
          document.getElementById('sa-algratpro-3').disabled = true;
          document.getElementById('o-algratpro-31').disabled = true;
          document.getElementById('o-algratpro-32').disabled = true;
          document.getElementById('o-algratpro-33').disabled = true;
          document.getElementById('o-algratpro-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algratpro3', 0)
        }
        if (document.getElementById('o-algratpro-33').checked) {
          document.getElementById('r-algratpro-33').style.color = 'red'
          document.getElementById('r-algratpro-33').innerHTML = 'Incorrect!'
          document.getElementById('r-algratpro-31').style.color = 'blue'
          document.getElementById('r-algratpro-31').innerHTML = 'Correct!'
          
          document.getElementById('b-algratpro-31').classList.add("correct")
          document.getElementById('b-algratpro-32').classList.add("incorrect")
          document.getElementById('b-algratpro-33').classList.add("incorrect")
          document.getElementById('b-algratpro-34').classList.add("incorrect")
    
          document.getElementById('sa-algratpro-3').disabled = true;
          document.getElementById('o-algratpro-31').disabled = true;
          document.getElementById('o-algratpro-32').disabled = true;
          document.getElementById('o-algratpro-33').disabled = true;
          document.getElementById('o-algratpro-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algratpro3', 0)
        }
        if (document.getElementById('o-algratpro-34').checked) {
          document.getElementById('r-algratpro-34').style.color = 'red'
          document.getElementById('r-algratpro-34').innerHTML = 'Incorrect!'
          document.getElementById('r-algratpro-31').style.color = 'blue'
          document.getElementById('r-algratpro-31').innerHTML = 'Correct!'
          
          document.getElementById('b-algratpro-31').classList.add("correct")
          document.getElementById('b-algratpro-32').classList.add("incorrect")
          document.getElementById('b-algratpro-33').classList.add("incorrect")
          document.getElementById('b-algratpro-34').classList.add("incorrect")
    
          document.getElementById('sa-algratpro-3').disabled = true;
          document.getElementById('o-algratpro-31').disabled = true;
          document.getElementById('o-algratpro-32').disabled = true;
          document.getElementById('o-algratpro-33').disabled = true;
          document.getElementById('o-algratpro-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algratpro3', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algratpro-4') != null) {
      algratpro4But.onclick = function() {
        if (document.getElementById('o-algratpro-41').checked) {
          document.getElementById('r-algratpro-41').style.color = 'blue'
          document.getElementById('r-algratpro-41').innerHTML = 'Correct!'
          
          document.getElementById('b-algratpro-41').classList.add("correct")
          document.getElementById('b-algratpro-44').classList.add("incorrect")
          document.getElementById('b-algratpro-42').classList.add("incorrect")
          document.getElementById('b-algratpro-43').classList.add("incorrect")
    
          document.getElementById('sa-algratpro-4').disabled = true;
          document.getElementById('o-algratpro-41').disabled = true;
          document.getElementById('o-algratpro-42').disabled = true;
          document.getElementById('o-algratpro-43').disabled = true;
          document.getElementById('o-algratpro-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algratpro4', 1)
        }
        if (document.getElementById('o-algratpro-42').checked) {
          document.getElementById('r-algratpro-42').style.color = 'red'
          document.getElementById('r-algratpro-42').innerHTML = 'Incorrect!'
          document.getElementById('r-algratpro-41').style.color = 'blue'
          document.getElementById('r-algratpro-41').innerHTML = 'Correct!'
          
          document.getElementById('b-algratpro-41').classList.add("correct")
          document.getElementById('b-algratpro-44').classList.add("incorrect")
          document.getElementById('b-algratpro-42').classList.add("incorrect")
          document.getElementById('b-algratpro-43').classList.add("incorrect")
    
          document.getElementById('sa-algratpro-4').disabled = true;
          document.getElementById('o-algratpro-41').disabled = true;
          document.getElementById('o-algratpro-42').disabled = true;
          document.getElementById('o-algratpro-43').disabled = true;
          document.getElementById('o-algratpro-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algratpro4', 0)
        }
        if (document.getElementById('o-algratpro-43').checked) {
          document.getElementById('r-algratpro-43').style.color = 'red'
          document.getElementById('r-algratpro-43').innerHTML = 'Incorrect!'
          document.getElementById('r-algratpro-41').style.color = 'blue'
          document.getElementById('r-algratpro-41').innerHTML = 'Correct!'
          
          document.getElementById('b-algratpro-41').classList.add("correct")
          document.getElementById('b-algratpro-44').classList.add("incorrect")
          document.getElementById('b-algratpro-42').classList.add("incorrect")
          document.getElementById('b-algratpro-43').classList.add("incorrect")
    
          document.getElementById('sa-algratpro-4').disabled = true;
          document.getElementById('o-algratpro-41').disabled = true;
          document.getElementById('o-algratpro-42').disabled = true;
          document.getElementById('o-algratpro-43').disabled = true;
          document.getElementById('o-algratpro-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algratpro4', 0)
        }
        if (document.getElementById('o-algratpro-44').checked) {
          document.getElementById('r-algratpro-44').style.color = 'red'
          document.getElementById('r-algratpro-44').innerHTML = 'Incorrect!'
          document.getElementById('r-algratpro-41').style.color = 'blue'
          document.getElementById('r-algratpro-41').innerHTML = 'Correct!'
          
          document.getElementById('b-algratpro-41').classList.add("correct")
          document.getElementById('b-algratpro-44').classList.add("incorrect")
          document.getElementById('b-algratpro-42').classList.add("incorrect")
          document.getElementById('b-algratpro-43').classList.add("incorrect")
    
          document.getElementById('sa-algratpro-4').disabled = true;
          document.getElementById('o-algratpro-41').disabled = true;
          document.getElementById('o-algratpro-42').disabled = true;
          document.getElementById('o-algratpro-43').disabled = true;
          document.getElementById('o-algratpro-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algratpro4', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algratpro-5') != null) {
      algratpro5But.onclick = function() {
        if (document.getElementById('o-algratpro-51').checked) {
          document.getElementById('r-algratpro-51').style.color = 'red'
          document.getElementById('r-algratpro-51').innerHTML = 'Incorrect!'
          document.getElementById('r-algratpro-53').style.color = 'blue'
          document.getElementById('r-algratpro-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algratpro-53').classList.add("correct")
          document.getElementById('b-algratpro-51').classList.add("incorrect")
          document.getElementById('b-algratpro-52').classList.add("incorrect")
          document.getElementById('b-algratpro-54').classList.add("incorrect")
    
          document.getElementById('sa-algratpro-5').disabled = true;
          document.getElementById('o-algratpro-51').disabled = true;
          document.getElementById('o-algratpro-52').disabled = true;
          document.getElementById('o-algratpro-53').disabled = true;
          document.getElementById('o-algratpro-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algratpro5', 0)
        }
        if (document.getElementById('o-algratpro-52').checked) {
          document.getElementById('r-algratpro-52').style.color = 'red'
          document.getElementById('r-algratpro-52').innerHTML = 'Incorrect!'
          document.getElementById('r-algratpro-53').style.color = 'blue'
          document.getElementById('r-algratpro-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algratpro-53').classList.add("correct")
          document.getElementById('b-algratpro-51').classList.add("incorrect")
          document.getElementById('b-algratpro-52').classList.add("incorrect")
          document.getElementById('b-algratpro-54').classList.add("incorrect")
    
          document.getElementById('sa-algratpro-5').disabled = true;
          document.getElementById('o-algratpro-51').disabled = true;
          document.getElementById('o-algratpro-52').disabled = true;
          document.getElementById('o-algratpro-53').disabled = true;
          document.getElementById('o-algratpro-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algratpro5', 0)
        }
        if (document.getElementById('o-algratpro-53').checked) {
          document.getElementById('r-algratpro-53').style.color = 'blue'
          document.getElementById('r-algratpro-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algratpro-53').classList.add("correct")
          document.getElementById('b-algratpro-51').classList.add("incorrect")
          document.getElementById('b-algratpro-52').classList.add("incorrect")
          document.getElementById('b-algratpro-54').classList.add("incorrect")
    
          document.getElementById('sa-algratpro-5').disabled = true;
          document.getElementById('o-algratpro-51').disabled = true;
          document.getElementById('o-algratpro-52').disabled = true;
          document.getElementById('o-algratpro-53').disabled = true;
          document.getElementById('o-algratpro-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algratpro5', 1)
        }
        if (document.getElementById('o-algratpro-54').checked) {
          document.getElementById('r-algratpro-54').style.color = 'red'
          document.getElementById('r-algratpro-54').innerHTML = 'Incorrect!'
          document.getElementById('r-algratpro-53').style.color = 'blue'
          document.getElementById('r-algratpro-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algratpro-53').classList.add("correct")
          document.getElementById('b-algratpro-51').classList.add("incorrect")
          document.getElementById('b-algratpro-52').classList.add("incorrect")
          document.getElementById('b-algratpro-54').classList.add("incorrect")
    
          document.getElementById('sa-algratpro-5').disabled = true;
          document.getElementById('o-algratpro-51').disabled = true;
          document.getElementById('o-algratpro-52').disabled = true;
          document.getElementById('o-algratpro-53').disabled = true;
          document.getElementById('o-algratpro-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algratpro5', 0)
        }
      }
    }
        
         
      if (document.getElementById('sa-algratpro-6') != null) {
      algratpro6But.onclick = function() {
        if (document.getElementById('o-algratpro-61').checked) {
          document.getElementById('r-algratpro-61').style.color = 'red'
          document.getElementById('r-algratpro-61').innerHTML = 'Incorrect!'
          document.getElementById('r-algratpro-63').style.color = 'blue'
          document.getElementById('r-algratpro-63').innerHTML = 'Correct!'
          
          document.getElementById('b-algratpro-63').classList.add("correct")
          document.getElementById('b-algratpro-61').classList.add("incorrect")
          document.getElementById('b-algratpro-62').classList.add("incorrect")
          document.getElementById('b-algratpro-64').classList.add("incorrect")
    
          document.getElementById('sa-algratpro-6').disabled = true;
          document.getElementById('o-algratpro-61').disabled = true;
          document.getElementById('o-algratpro-62').disabled = true;
          document.getElementById('o-algratpro-63').disabled = true;
          document.getElementById('o-algratpro-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algratpro6', 0)
        }
        if (document.getElementById('o-algratpro-62').checked) {
          document.getElementById('r-algratpro-62').style.color = 'red'
          document.getElementById('r-algratpro-62').innerHTML = 'Incorrect!'
          document.getElementById('r-algratpro-63').style.color = 'blue'
          document.getElementById('r-algratpro-63').innerHTML = 'Correct!'
          
          document.getElementById('b-algratpro-63').classList.add("correct")
          document.getElementById('b-algratpro-61').classList.add("incorrect")
          document.getElementById('b-algratpro-62').classList.add("incorrect")
          document.getElementById('b-algratpro-64').classList.add("incorrect")
    
          document.getElementById('sa-algratpro-6').disabled = true;
          document.getElementById('o-algratpro-61').disabled = true;
          document.getElementById('o-algratpro-62').disabled = true;
          document.getElementById('o-algratpro-63').disabled = true;
          document.getElementById('o-algratpro-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algratpro6', 0)
        }
        if (document.getElementById('o-algratpro-63').checked) {

          document.getElementById('r-algratpro-63').style.color = 'blue'
          document.getElementById('r-algratpro-63').innerHTML = 'Correct!'
          
          document.getElementById('b-algratpro-63').classList.add("correct")
          document.getElementById('b-algratpro-61').classList.add("incorrect")
          document.getElementById('b-algratpro-62').classList.add("incorrect")
          document.getElementById('b-algratpro-64').classList.add("incorrect")
    
          document.getElementById('sa-algratpro-6').disabled = true;
          document.getElementById('o-algratpro-61').disabled = true;
          document.getElementById('o-algratpro-62').disabled = true;
          document.getElementById('o-algratpro-63').disabled = true;
          document.getElementById('o-algratpro-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algratpro6', 1)
        }
        if (document.getElementById('o-algratpro-64').checked) {
          document.getElementById('r-algratpro-64').style.color = 'red'
          document.getElementById('r-algratpro-64').innerHTML = 'Incorrect!'
          document.getElementById('r-algratpro-63').style.color = 'blue'
          document.getElementById('r-algratpro-63').innerHTML = 'Correct!'
          
          document.getElementById('b-algratpro-63').classList.add("correct")
          document.getElementById('b-algratpro-61').classList.add("incorrect")
          document.getElementById('b-algratpro-62').classList.add("incorrect")
          document.getElementById('b-algratpro-64').classList.add("incorrect")
    
          document.getElementById('sa-algratpro-6').disabled = true;
          document.getElementById('o-algratpro-61').disabled = true;
          document.getElementById('o-algratpro-62').disabled = true;
          document.getElementById('o-algratpro-63').disabled = true;
          document.getElementById('o-algratpro-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algratpro6', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algratpro-7') != null) {
      algratpro7But.onclick = function() {
        if (document.getElementById('o-algratpro-71').checked) {
          document.getElementById('r-algratpro-71').style.color = 'red'
          document.getElementById('r-algratpro-71').innerHTML = 'Incorrect!'
          document.getElementById('r-algratpro-73').style.color = 'blue'
          document.getElementById('r-algratpro-73').innerHTML = 'Correct!'
          
          document.getElementById('b-algratpro-73').classList.add("correct")
          document.getElementById('b-algratpro-71').classList.add("incorrect")
          document.getElementById('b-algratpro-72').classList.add("incorrect")
          document.getElementById('b-algratpro-74').classList.add("incorrect")
    
          document.getElementById('sa-algratpro-7').disabled = true;
          document.getElementById('o-algratpro-71').disabled = true;
          document.getElementById('o-algratpro-72').disabled = true;
          document.getElementById('o-algratpro-73').disabled = true;
          document.getElementById('o-algratpro-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algratpro7', 0)
        }
        if (document.getElementById('o-algratpro-72').checked) {
          document.getElementById('r-algratpro-72').style.color = 'red'
          document.getElementById('r-algratpro-72').innerHTML = 'Incorrect!'
          document.getElementById('r-algratpro-73').style.color = 'blue'
          document.getElementById('r-algratpro-73').innerHTML = 'Correct!'
          
          document.getElementById('b-algratpro-73').classList.add("correct")
          document.getElementById('b-algratpro-71').classList.add("incorrect")
          document.getElementById('b-algratpro-72').classList.add("incorrect")
          document.getElementById('b-algratpro-74').classList.add("incorrect")
    
          document.getElementById('sa-algratpro-7').disabled = true;
          document.getElementById('o-algratpro-71').disabled = true;
          document.getElementById('o-algratpro-72').disabled = true;
          document.getElementById('o-algratpro-73').disabled = true;
          document.getElementById('o-algratpro-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algratpro7', 0)
        }
        if (document.getElementById('o-algratpro-73').checked) {
          document.getElementById('r-algratpro-73').style.color = 'blue'
          document.getElementById('r-algratpro-73').innerHTML = 'Correct!'
          
          document.getElementById('b-algratpro-73').classList.add("correct")
          document.getElementById('b-algratpro-71').classList.add("incorrect")
          document.getElementById('b-algratpro-72').classList.add("incorrect")
          document.getElementById('b-algratpro-74').classList.add("incorrect")
    
          document.getElementById('sa-algratpro-7').disabled = true;
          document.getElementById('o-algratpro-71').disabled = true;
          document.getElementById('o-algratpro-72').disabled = true;
          document.getElementById('o-algratpro-73').disabled = true;
          document.getElementById('o-algratpro-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algratpro7', 1)
        }
        if (document.getElementById('o-algratpro-74').checked) {
          document.getElementById('r-algratpro-74').style.color = 'red'
          document.getElementById('r-algratpro-74').innerHTML = 'Incorrect!'
          document.getElementById('r-algratpro-73').style.color = 'blue'
          document.getElementById('r-algratpro-73').innerHTML = 'Correct!'
          
          document.getElementById('b-algratpro-73').classList.add("correct")
          document.getElementById('b-algratpro-71').classList.add("incorrect")
          document.getElementById('b-algratpro-72').classList.add("incorrect")
          document.getElementById('b-algratpro-74').classList.add("incorrect")
    
          document.getElementById('sa-algratpro-7').disabled = true;
          document.getElementById('o-algratpro-71').disabled = true;
          document.getElementById('o-algratpro-72').disabled = true;
          document.getElementById('o-algratpro-73').disabled = true;
          document.getElementById('o-algratpro-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algratpro7', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-algratpro-8') != null) {
      algratpro8But.onclick = function() {
        if (document.getElementById('o-algratpro-81').checked) {
          document.getElementById('r-algratpro-81').style.color = 'blue'
          document.getElementById('r-algratpro-81').innerHTML = 'Correct!'
          
          document.getElementById('b-algratpro-81').classList.add("correct")
          document.getElementById('b-algratpro-82').classList.add("incorrect")
          document.getElementById('b-algratpro-83').classList.add("incorrect")
          document.getElementById('b-algratpro-84').classList.add("incorrect")
    
          document.getElementById('sa-algratpro-8').disabled = true;
          document.getElementById('o-algratpro-81').disabled = true;
          document.getElementById('o-algratpro-82').disabled = true;
          document.getElementById('o-algratpro-83').disabled = true;
          document.getElementById('o-algratpro-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algratpro8', 1)
        }
        if (document.getElementById('o-algratpro-82').checked) {
          document.getElementById('r-algratpro-82').style.color = 'red'
          document.getElementById('r-algratpro-82').innerHTML = 'Incorrect!'
          document.getElementById('r-algratpro-81').style.color = 'blue'
          document.getElementById('r-algratpro-81').innerHTML = 'Correct!'
          
          document.getElementById('b-algratpro-81').classList.add("correct")
          document.getElementById('b-algratpro-82').classList.add("incorrect")
          document.getElementById('b-algratpro-83').classList.add("incorrect")
          document.getElementById('b-algratpro-84').classList.add("incorrect")
    
          document.getElementById('sa-algratpro-8').disabled = true;
          document.getElementById('o-algratpro-81').disabled = true;
          document.getElementById('o-algratpro-82').disabled = true;
          document.getElementById('o-algratpro-83').disabled = true;
          document.getElementById('o-algratpro-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algratpro8', 0)
        }
        if (document.getElementById('o-algratpro-83').checked) {
          document.getElementById('r-algratpro-83').style.color = 'red'
          document.getElementById('r-algratpro-83').innerHTML = 'Incorrect!'
          document.getElementById('r-algratpro-81').style.color = 'blue'
          document.getElementById('r-algratpro-81').innerHTML = 'Correct!'
          
          document.getElementById('b-algratpro-81').classList.add("correct")
          document.getElementById('b-algratpro-82').classList.add("incorrect")
          document.getElementById('b-algratpro-83').classList.add("incorrect")
          document.getElementById('b-algratpro-84').classList.add("incorrect")
    
          document.getElementById('sa-algratpro-8').disabled = true;
          document.getElementById('o-algratpro-81').disabled = true;
          document.getElementById('o-algratpro-82').disabled = true;
          document.getElementById('o-algratpro-83').disabled = true;
          document.getElementById('o-algratpro-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algratpro8', 0)
        }
        if (document.getElementById('o-algratpro-84').checked) {
          document.getElementById('r-algratpro-84').style.color = 'red'
          document.getElementById('r-algratpro-84').innerHTML = 'Incorrect!'
          document.getElementById('r-algratpro-81').style.color = 'blue'
          document.getElementById('r-algratpro-81').innerHTML = 'Correct!'
          
          document.getElementById('b-algratpro-81').classList.add("correct")
          document.getElementById('b-algratpro-82').classList.add("incorrect")
          document.getElementById('b-algratpro-83').classList.add("incorrect")
          document.getElementById('b-algratpro-84').classList.add("incorrect")
    
          document.getElementById('sa-algratpro-8').disabled = true;
          document.getElementById('o-algratpro-81').disabled = true;
          document.getElementById('o-algratpro-82').disabled = true;
          document.getElementById('o-algratpro-83').disabled = true;
          document.getElementById('o-algratpro-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algratpro8', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-algratpro-9') != null) {
      algratpro9But.onclick = function() {
        if (document.getElementById('o-algratpro-91').checked) {
          document.getElementById('r-algratpro-91').style.color = 'red'
          document.getElementById('r-algratpro-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algratpro-94').style.color = 'blue'
          document.getElementById('r-algratpro-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algratpro-94').classList.add("correct")
          document.getElementById('b-algratpro-91').classList.add("incorrect")
          document.getElementById('b-algratpro-92').classList.add("incorrect")
          document.getElementById('b-algratpro-93').classList.add("incorrect")
    
          document.getElementById('sa-algratpro-9').disabled = true;
          document.getElementById('o-algratpro-91').disabled = true;
          document.getElementById('o-algratpro-92').disabled = true;
          document.getElementById('o-algratpro-93').disabled = true;
          document.getElementById('o-algratpro-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algratpro9', 0)
        }
        if (document.getElementById('o-algratpro-92').checked) {
          document.getElementById('r-algratpro-91').style.color = 'red'
          document.getElementById('r-algratpro-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algratpro-94').style.color = 'blue'
          document.getElementById('r-algratpro-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algratpro-94').classList.add("correct")
          document.getElementById('b-algratpro-91').classList.add("incorrect")
          document.getElementById('b-algratpro-92').classList.add("incorrect")
          document.getElementById('b-algratpro-93').classList.add("incorrect")
    
          document.getElementById('sa-algratpro-9').disabled = true;
          document.getElementById('o-algratpro-91').disabled = true;
          document.getElementById('o-algratpro-92').disabled = true;
          document.getElementById('o-algratpro-93').disabled = true;
          document.getElementById('o-algratpro-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algratpro9', 0)
        }
        if (document.getElementById('o-algratpro-93').checked) {
          document.getElementById('r-algratpro-91').style.color = 'red'
          document.getElementById('r-algratpro-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algratpro-94').style.color = 'blue'
          document.getElementById('r-algratpro-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algratpro-94').classList.add("correct")
          document.getElementById('b-algratpro-91').classList.add("incorrect")
          document.getElementById('b-algratpro-92').classList.add("incorrect")
          document.getElementById('b-algratpro-93').classList.add("incorrect")
    
          document.getElementById('sa-algratpro-9').disabled = true;
          document.getElementById('o-algratpro-91').disabled = true;
          document.getElementById('o-algratpro-92').disabled = true;
          document.getElementById('o-algratpro-93').disabled = true;
          document.getElementById('o-algratpro-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algratpro9', 0)
        }
        if (document.getElementById('o-algratpro-94').checked) {
          document.getElementById('r-algratpro-94').style.color = 'blue'
          document.getElementById('r-algratpro-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algratpro-94').classList.add("correct")
          document.getElementById('b-algratpro-91').classList.add("incorrect")
          document.getElementById('b-algratpro-92').classList.add("incorrect")
          document.getElementById('b-algratpro-93').classList.add("incorrect")
    
          document.getElementById('sa-algratpro-9').disabled = true;
          document.getElementById('o-algratpro-91').disabled = true;
          document.getElementById('o-algratpro-92').disabled = true;
          document.getElementById('o-algratpro-93').disabled = true;
          document.getElementById('o-algratpro-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algratpro9', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algratpro-10') != null) {
      algratpro10But.onclick = function() {
        if (document.getElementById('o-algratpro-101').checked) {
          document.getElementById('r-algratpro-101').style.color = 'red'
          document.getElementById('r-algratpro-101').innerHTML = 'Incorrect!'
          document.getElementById('r-algratpro-102').style.color = 'blue'
          document.getElementById('r-algratpro-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algratpro-102').classList.add("correct")
          document.getElementById('b-algratpro-101').classList.add("incorrect")
          document.getElementById('b-algratpro-103').classList.add("incorrect")
          document.getElementById('b-algratpro-104').classList.add("incorrect")
    
          document.getElementById('sa-algratpro-10').disabled = true;
          document.getElementById('o-algratpro-101').disabled = true;
          document.getElementById('o-algratpro-102').disabled = true;
          document.getElementById('o-algratpro-103').disabled = true;
          document.getElementById('o-algratpro-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algratpro10', 0)
        }
        if (document.getElementById('o-algratpro-102').checked) {
          document.getElementById('r-algratpro-102').style.color = 'blue'
          document.getElementById('r-algratpro-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algratpro-102').classList.add("correct")
          document.getElementById('b-algratpro-101').classList.add("incorrect")
          document.getElementById('b-algratpro-103').classList.add("incorrect")
          document.getElementById('b-algratpro-104').classList.add("incorrect")
    
          document.getElementById('sa-algratpro-10').disabled = true;
          document.getElementById('o-algratpro-101').disabled = true;
          document.getElementById('o-algratpro-102').disabled = true;
          document.getElementById('o-algratpro-103').disabled = true;
          document.getElementById('o-algratpro-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algratpro10', 1)
        }
        if (document.getElementById('o-algratpro-103').checked) {
          document.getElementById('r-algratpro-103').style.color = 'red'
          document.getElementById('r-algratpro-103').innerHTML = 'Incorrect!'
          document.getElementById('r-algratpro-102').style.color = 'blue'
          document.getElementById('r-algratpro-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algratpro-102').classList.add("correct")
          document.getElementById('b-algratpro-101').classList.add("incorrect")
          document.getElementById('b-algratpro-103').classList.add("incorrect")
          document.getElementById('b-algratpro-104').classList.add("incorrect")
    
          document.getElementById('sa-algratpro-10').disabled = true;
          document.getElementById('o-algratpro-101').disabled = true;
          document.getElementById('o-algratpro-102').disabled = true;
          document.getElementById('o-algratpro-103').disabled = true;
          document.getElementById('o-algratpro-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algratpro10', 0)
        }
        if (document.getElementById('o-algratpro-104').checked) {
          document.getElementById('r-algratpro-104').style.color = 'red'
          document.getElementById('r-algratpro-104').innerHTML = 'Incorrect!'
          document.getElementById('r-algratpro-102').style.color = 'blue'
          document.getElementById('r-algratpro-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algratpro-102').classList.add("correct")
          document.getElementById('b-algratpro-101').classList.add("incorrect")
          document.getElementById('b-algratpro-103').classList.add("incorrect")
          document.getElementById('b-algratpro-104').classList.add("incorrect")
    
          document.getElementById('sa-algratpro-10').disabled = true;
          document.getElementById('o-algratpro-101').disabled = true;
          document.getElementById('o-algratpro-102').disabled = true;
          document.getElementById('o-algratpro-103').disabled = true;
          document.getElementById('o-algratpro-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algratpro10', 0)
        }
      }
    }
    