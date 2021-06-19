
  let algsysworpro1But = document.getElementById('sa-algsysworpro-1');
  let algsysworpro2But = document.getElementById('sa-algsysworpro-2');
  let algsysworpro3But = document.getElementById('sa-algsysworpro-3');
  let algsysworpro4But = document.getElementById('sa-algsysworpro-4');
  let algsysworpro5But = document.getElementById('sa-algsysworpro-5');
  let algsysworpro6But = document.getElementById('sa-algsysworpro-6');
  let algsysworpro7But = document.getElementById('sa-algsysworpro-7');
  let algsysworpro8But = document.getElementById('sa-algsysworpro-8');
  let algsysworpro9But = document.getElementById('sa-algsysworpro-9');
  let algsysworpro10But = document.getElementById('sa-algsysworpro-10');


  showExplanation1 = function() {
    document.getElementById('e-algsysworpro-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-algsysworpro-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-algsysworpro-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-algsysworpro-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-algsysworpro-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-algsysworpro-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-algsysworpro-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-algsysworpro-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-algsysworpro-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-algsysworpro-10').style.display = 'block';
     } 



     if (document.getElementById('sa-algsysworpro-1') != null) {
      algsysworpro1But.onclick = function () {
        if (document.getElementById('o-algsysworpro-11').checked) {
          document.getElementById('r-algsysworpro-11').style.color = 'blue'
          document.getElementById('r-algsysworpro-11').innerHTML = 'Correct!'
    
          document.getElementById('b-algsysworpro-11').classList.add("correct")
          document.getElementById('b-algsysworpro-12').classList.add("incorrect")
          document.getElementById('b-algsysworpro-13').classList.add("incorrect")
          document.getElementById('b-algsysworpro-14').classList.add("incorrect")
    
          document.getElementById('sa-algsysworpro-1').disabled = true;
          document.getElementById('o-algsysworpro-11').disabled = true;
          document.getElementById('o-algsysworpro-12').disabled = true;
          document.getElementById('o-algsysworpro-13').disabled = true;
          document.getElementById('o-algsysworpro-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algsysworpro1', 1)
        }
    
        if (document.getElementById('o-algsysworpro-12').checked) {
         
          document.getElementById('r-algsysworpro-12').style.color = 'red'
          document.getElementById('r-algsysworpro-12').innerHTML = 'Incorrect!'
          document.getElementById('r-algsysworpro-11').style.color = 'blue'
          document.getElementById('r-algsysworpro-11').innerHTML = 'Correct!'
    
          document.getElementById('b-algsysworpro-11').classList.add("correct")
          document.getElementById('b-algsysworpro-12').classList.add("incorrect")
          document.getElementById('b-algsysworpro-13').classList.add("incorrect")
          document.getElementById('b-algsysworpro-14').classList.add("incorrect")
    
          document.getElementById('sa-algsysworpro-1').disabled = true;
          document.getElementById('o-algsysworpro-11').disabled = true;
          document.getElementById('o-algsysworpro-12').disabled = true;
          document.getElementById('o-algsysworpro-13').disabled = true;
          document.getElementById('o-algsysworpro-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algsysworpro1', 0)
        }
        if (document.getElementById('o-algsysworpro-13').checked) {
          document.getElementById('r-algsysworpro-13').style.color = 'red'
          document.getElementById('r-algsysworpro-13').innerHTML = 'Incorrect!'
          document.getElementById('r-algsysworpro-11').style.color = 'blue'
          document.getElementById('r-algsysworpro-11').innerHTML = 'Correct!'
          
          document.getElementById('b-algsysworpro-11').classList.add("correct")
          document.getElementById('b-algsysworpro-12').classList.add("incorrect")
          document.getElementById('b-algsysworpro-13').classList.add("incorrect")
          document.getElementById('b-algsysworpro-14').classList.add("incorrect")
    
          document.getElementById('sa-algsysworpro-1').disabled = true;
          document.getElementById('o-algsysworpro-11').disabled = true;
          document.getElementById('o-algsysworpro-12').disabled = true;
          document.getElementById('o-algsysworpro-13').disabled = true;
          document.getElementById('o-algsysworpro-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algsysworpro1', 0)
        }
        if (document.getElementById('o-algsysworpro-14').checked) {
          document.getElementById('r-algsysworpro-14').style.color = 'red'
          document.getElementById('r-algsysworpro-14').innerHTML = 'Incorrect!'
          document.getElementById('r-algsysworpro-11').style.color = 'blue'
          document.getElementById('r-algsysworpro-11').innerHTML = 'Correct!'
          
          document.getElementById('b-algsysworpro-11').classList.add("correct")
          document.getElementById('b-algsysworpro-12').classList.add("incorrect")
          document.getElementById('b-algsysworpro-13').classList.add("incorrect")
          document.getElementById('b-algsysworpro-14').classList.add("incorrect")
    
          document.getElementById('sa-algsysworpro-1').disabled = true;
          document.getElementById('o-algsysworpro-11').disabled = true;
          document.getElementById('o-algsysworpro-12').disabled = true;
          document.getElementById('o-algsysworpro-13').disabled = true;
          document.getElementById('o-algsysworpro-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algsysworpro1', 0)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-algsysworpro-2') != null) {
      algsysworpro2But.onclick = function() {
        if (document.getElementById('o-algsysworpro-21').checked) {
          document.getElementById('r-algsysworpro-21').style.color = 'red'
          document.getElementById('r-algsysworpro-21').innerHTML = 'Incorrect!'
          document.getElementById('r-algsysworpro-23').style.color = 'blue'
          document.getElementById('r-algsysworpro-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algsysworpro-23').classList.add("correct")
          document.getElementById('b-algsysworpro-21').classList.add("incorrect")
          document.getElementById('b-algsysworpro-22').classList.add("incorrect")
          document.getElementById('b-algsysworpro-24').classList.add("incorrect")
    
          document.getElementById('sa-algsysworpro-2').disabled = true;
          document.getElementById('o-algsysworpro-21').disabled = true;
          document.getElementById('o-algsysworpro-22').disabled = true;
          document.getElementById('o-algsysworpro-23').disabled = true;
          document.getElementById('o-algsysworpro-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algsysworpro2', 0)
        }
        if (document.getElementById('o-algsysworpro-22').checked) {
          document.getElementById('r-algsysworpro-22').style.color = 'red'
          document.getElementById('r-algsysworpro-22').innerHTML = 'Incorrect!'
          document.getElementById('r-algsysworpro-23').style.color = 'blue'
          document.getElementById('r-algsysworpro-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algsysworpro-23').classList.add("correct")
          document.getElementById('b-algsysworpro-21').classList.add("incorrect")
          document.getElementById('b-algsysworpro-22').classList.add("incorrect")
          document.getElementById('b-algsysworpro-24').classList.add("incorrect")
    
          document.getElementById('sa-algsysworpro-2').disabled = true;
          document.getElementById('o-algsysworpro-21').disabled = true;
          document.getElementById('o-algsysworpro-22').disabled = true;
          document.getElementById('o-algsysworpro-23').disabled = true;
          document.getElementById('o-algsysworpro-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algsysworpro2', 0)
        }
        if (document.getElementById('o-algsysworpro-23').checked) {
          document.getElementById('r-algsysworpro-23').style.color = 'blue'
          document.getElementById('r-algsysworpro-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algsysworpro-23').classList.add("correct")
          document.getElementById('b-algsysworpro-21').classList.add("incorrect")
          document.getElementById('b-algsysworpro-22').classList.add("incorrect")
          document.getElementById('b-algsysworpro-24').classList.add("incorrect")
    
          document.getElementById('sa-algsysworpro-2').disabled = true;
          document.getElementById('o-algsysworpro-21').disabled = true;
          document.getElementById('o-algsysworpro-22').disabled = true;
          document.getElementById('o-algsysworpro-23').disabled = true;
          document.getElementById('o-algsysworpro-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algsysworpro2', 1)
        }
        if (document.getElementById('o-algsysworpro-24').checked) {
          document.getElementById('r-algsysworpro-24').style.color = 'red'
          document.getElementById('r-algsysworpro-24').innerHTML = 'Incorrect!'
          document.getElementById('r-algsysworpro-23').style.color = 'blue'
          document.getElementById('r-algsysworpro-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algsysworpro-23').classList.add("correct")
          document.getElementById('b-algsysworpro-21').classList.add("incorrect")
          document.getElementById('b-algsysworpro-22').classList.add("incorrect")
          document.getElementById('b-algsysworpro-24').classList.add("incorrect")
    
          document.getElementById('sa-algsysworpro-2').disabled = true;
          document.getElementById('o-algsysworpro-21').disabled = true;
          document.getElementById('o-algsysworpro-22').disabled = true;
          document.getElementById('o-algsysworpro-23').disabled = true;
          document.getElementById('o-algsysworpro-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algsysworpro2', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algsysworpro-3') != null) {
      algsysworpro3But.onclick = function() {
        if (document.getElementById('o-algsysworpro-31').checked) {
          document.getElementById('r-algsysworpro-31').style.color = 'red'
          document.getElementById('r-algsysworpro-31').innerHTML = 'Incorrect!'
          document.getElementById('r-algsysworpro-32').style.color = 'blue'
          document.getElementById('r-algsysworpro-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algsysworpro-32').classList.add("correct")
          document.getElementById('b-algsysworpro-31').classList.add("incorrect")
          document.getElementById('b-algsysworpro-33').classList.add("incorrect")
          document.getElementById('b-algsysworpro-34').classList.add("incorrect")
    
          document.getElementById('sa-algsysworpro-3').disabled = true;
          document.getElementById('o-algsysworpro-31').disabled = true;
          document.getElementById('o-algsysworpro-32').disabled = true;
          document.getElementById('o-algsysworpro-33').disabled = true;
          document.getElementById('o-algsysworpro-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algsysworpro3', 0)
        }
        if (document.getElementById('o-algsysworpro-32').checked) {
    
          document.getElementById('r-algsysworpro-32').style.color = 'blue'
          document.getElementById('r-algsysworpro-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algsysworpro-32').classList.add("correct")
          document.getElementById('b-algsysworpro-31').classList.add("incorrect")
          document.getElementById('b-algsysworpro-33').classList.add("incorrect")
          document.getElementById('b-algsysworpro-34').classList.add("incorrect")
    
          document.getElementById('sa-algsysworpro-3').disabled = true;
          document.getElementById('o-algsysworpro-31').disabled = true;
          document.getElementById('o-algsysworpro-32').disabled = true;
          document.getElementById('o-algsysworpro-33').disabled = true;
          document.getElementById('o-algsysworpro-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algsysworpro3', 1)
        }
        if (document.getElementById('o-algsysworpro-33').checked) {
          document.getElementById('r-algsysworpro-33').style.color = 'red'
          document.getElementById('r-algsysworpro-33').innerHTML = 'Incorrect!'
          document.getElementById('r-algsysworpro-32').style.color = 'blue'
          document.getElementById('r-algsysworpro-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algsysworpro-32').classList.add("correct")
          document.getElementById('b-algsysworpro-31').classList.add("incorrect")
          document.getElementById('b-algsysworpro-33').classList.add("incorrect")
          document.getElementById('b-algsysworpro-34').classList.add("incorrect")
    
          document.getElementById('sa-algsysworpro-3').disabled = true;
          document.getElementById('o-algsysworpro-31').disabled = true;
          document.getElementById('o-algsysworpro-32').disabled = true;
          document.getElementById('o-algsysworpro-33').disabled = true;
          document.getElementById('o-algsysworpro-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algsysworpro3', 0)
        }
        if (document.getElementById('o-algsysworpro-34').checked) {
          document.getElementById('r-algsysworpro-34').style.color = 'red'
          document.getElementById('r-algsysworpro-34').innerHTML = 'Incorrect!'
          document.getElementById('r-algsysworpro-32').style.color = 'blue'
          document.getElementById('r-algsysworpro-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algsysworpro-32').classList.add("correct")
          document.getElementById('b-algsysworpro-31').classList.add("incorrect")
          document.getElementById('b-algsysworpro-33').classList.add("incorrect")
          document.getElementById('b-algsysworpro-34').classList.add("incorrect")
    
          document.getElementById('sa-algsysworpro-3').disabled = true;
          document.getElementById('o-algsysworpro-31').disabled = true;
          document.getElementById('o-algsysworpro-32').disabled = true;
          document.getElementById('o-algsysworpro-33').disabled = true;
          document.getElementById('o-algsysworpro-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algsysworpro3', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algsysworpro-4') != null) {
      algsysworpro4But.onclick = function() {
        if (document.getElementById('o-algsysworpro-41').checked) {
          document.getElementById('r-algsysworpro-41').style.color = 'red'
          document.getElementById('r-algsysworpro-41').innerHTML = 'Incorrect!'
          document.getElementById('r-algsysworpro-44').style.color = 'blue'
          document.getElementById('r-algsysworpro-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algsysworpro-44').classList.add("correct")
          document.getElementById('b-algsysworpro-41').classList.add("incorrect")
          document.getElementById('b-algsysworpro-42').classList.add("incorrect")
          document.getElementById('b-algsysworpro-43').classList.add("incorrect")
    
          document.getElementById('sa-algsysworpro-4').disabled = true;
          document.getElementById('o-algsysworpro-41').disabled = true;
          document.getElementById('o-algsysworpro-42').disabled = true;
          document.getElementById('o-algsysworpro-43').disabled = true;
          document.getElementById('o-algsysworpro-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algsysworpro4', 0)
        }
        if (document.getElementById('o-algsysworpro-42').checked) {
          document.getElementById('r-algsysworpro-42').style.color = 'red'
          document.getElementById('r-algsysworpro-42').innerHTML = 'Incorrect!'
          document.getElementById('r-algsysworpro-44').style.color = 'blue'
          document.getElementById('r-algsysworpro-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algsysworpro-44').classList.add("correct")
          document.getElementById('b-algsysworpro-41').classList.add("incorrect")
          document.getElementById('b-algsysworpro-42').classList.add("incorrect")
          document.getElementById('b-algsysworpro-43').classList.add("incorrect")
    
          document.getElementById('sa-algsysworpro-4').disabled = true;
          document.getElementById('o-algsysworpro-41').disabled = true;
          document.getElementById('o-algsysworpro-42').disabled = true;
          document.getElementById('o-algsysworpro-43').disabled = true;
          document.getElementById('o-algsysworpro-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algsysworpro4', 0)
        }
        if (document.getElementById('o-algsysworpro-43').checked) {
          document.getElementById('r-algsysworpro-43').style.color = 'red'
          document.getElementById('r-algsysworpro-43').innerHTML = 'Incorrect!'
          document.getElementById('r-algsysworpro-44').style.color = 'blue'
          document.getElementById('r-algsysworpro-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algsysworpro-44').classList.add("correct")
          document.getElementById('b-algsysworpro-41').classList.add("incorrect")
          document.getElementById('b-algsysworpro-42').classList.add("incorrect")
          document.getElementById('b-algsysworpro-43').classList.add("incorrect")
    
          document.getElementById('sa-algsysworpro-4').disabled = true;
          document.getElementById('o-algsysworpro-41').disabled = true;
          document.getElementById('o-algsysworpro-42').disabled = true;
          document.getElementById('o-algsysworpro-43').disabled = true;
          document.getElementById('o-algsysworpro-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algsysworpro4', 0)
        }
        if (document.getElementById('o-algsysworpro-44').checked) {
          document.getElementById('r-algsysworpro-44').style.color = 'blue'
          document.getElementById('r-algsysworpro-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algsysworpro-44').classList.add("correct")
          document.getElementById('b-algsysworpro-41').classList.add("incorrect")
          document.getElementById('b-algsysworpro-42').classList.add("incorrect")
          document.getElementById('b-algsysworpro-43').classList.add("incorrect")
    
          document.getElementById('sa-algsysworpro-4').disabled = true;
          document.getElementById('o-algsysworpro-41').disabled = true;
          document.getElementById('o-algsysworpro-42').disabled = true;
          document.getElementById('o-algsysworpro-43').disabled = true;
          document.getElementById('o-algsysworpro-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algsysworpro4', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algsysworpro-5') != null) {
      algsysworpro5But.onclick = function() {
        if (document.getElementById('o-algsysworpro-51').checked) {
          document.getElementById('r-algsysworpro-51').style.color = 'red'
          document.getElementById('r-algsysworpro-51').innerHTML = 'Incorrect!'
          document.getElementById('r-algsysworpro-53').style.color = 'blue'
          document.getElementById('r-algsysworpro-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algsysworpro-53').classList.add("correct")
          document.getElementById('b-algsysworpro-51').classList.add("incorrect")
          document.getElementById('b-algsysworpro-52').classList.add("incorrect")
          document.getElementById('b-algsysworpro-54').classList.add("incorrect")
    
          document.getElementById('sa-algsysworpro-5').disabled = true;
          document.getElementById('o-algsysworpro-51').disabled = true;
          document.getElementById('o-algsysworpro-52').disabled = true;
          document.getElementById('o-algsysworpro-53').disabled = true;
          document.getElementById('o-algsysworpro-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algsysworpro5', 0)
        }
        if (document.getElementById('o-algsysworpro-52').checked) {
          document.getElementById('r-algsysworpro-52').style.color = 'red'
          document.getElementById('r-algsysworpro-52').innerHTML = 'Incorrect!'
          document.getElementById('r-algsysworpro-53').style.color = 'blue'
          document.getElementById('r-algsysworpro-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algsysworpro-53').classList.add("correct")
          document.getElementById('b-algsysworpro-51').classList.add("incorrect")
          document.getElementById('b-algsysworpro-52').classList.add("incorrect")
          document.getElementById('b-algsysworpro-54').classList.add("incorrect")
    
          document.getElementById('sa-algsysworpro-5').disabled = true;
          document.getElementById('o-algsysworpro-51').disabled = true;
          document.getElementById('o-algsysworpro-52').disabled = true;
          document.getElementById('o-algsysworpro-53').disabled = true;
          document.getElementById('o-algsysworpro-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algsysworpro5', 0)
        }
        if (document.getElementById('o-algsysworpro-53').checked) {
          document.getElementById('r-algsysworpro-53').style.color = 'blue'
          document.getElementById('r-algsysworpro-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algsysworpro-53').classList.add("correct")
          document.getElementById('b-algsysworpro-51').classList.add("incorrect")
          document.getElementById('b-algsysworpro-52').classList.add("incorrect")
          document.getElementById('b-algsysworpro-54').classList.add("incorrect")
    
          document.getElementById('sa-algsysworpro-5').disabled = true;
          document.getElementById('o-algsysworpro-51').disabled = true;
          document.getElementById('o-algsysworpro-52').disabled = true;
          document.getElementById('o-algsysworpro-53').disabled = true;
          document.getElementById('o-algsysworpro-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algsysworpro5', 1)
        }
        if (document.getElementById('o-algsysworpro-54').checked) {
          document.getElementById('r-algsysworpro-54').style.color = 'red'
          document.getElementById('r-algsysworpro-54').innerHTML = 'Incorrect!'
          document.getElementById('r-algsysworpro-53').style.color = 'blue'
          document.getElementById('r-algsysworpro-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algsysworpro-53').classList.add("correct")
          document.getElementById('b-algsysworpro-51').classList.add("incorrect")
          document.getElementById('b-algsysworpro-52').classList.add("incorrect")
          document.getElementById('b-algsysworpro-54').classList.add("incorrect")
    
          document.getElementById('sa-algsysworpro-5').disabled = true;
          document.getElementById('o-algsysworpro-51').disabled = true;
          document.getElementById('o-algsysworpro-52').disabled = true;
          document.getElementById('o-algsysworpro-53').disabled = true;
          document.getElementById('o-algsysworpro-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algsysworpro5', 0)
        }
      }
    }
        
         
      if (document.getElementById('sa-algsysworpro-6') != null) {
      algsysworpro6But.onclick = function() {
        if (document.getElementById('o-algsysworpro-61').checked) {
          document.getElementById('r-algsysworpro-61').style.color = 'red'
          document.getElementById('r-algsysworpro-61').innerHTML = 'Incorrect!'
          document.getElementById('r-algsysworpro-64').style.color = 'blue'
          document.getElementById('r-algsysworpro-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algsysworpro-64').classList.add("correct")
          document.getElementById('b-algsysworpro-61').classList.add("incorrect")
          document.getElementById('b-algsysworpro-62').classList.add("incorrect")
          document.getElementById('b-algsysworpro-63').classList.add("incorrect")
    
          document.getElementById('sa-algsysworpro-6').disabled = true;
          document.getElementById('o-algsysworpro-61').disabled = true;
          document.getElementById('o-algsysworpro-62').disabled = true;
          document.getElementById('o-algsysworpro-63').disabled = true;
          document.getElementById('o-algsysworpro-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algsysworpro6', 0)
        }
        if (document.getElementById('o-algsysworpro-62').checked) {
          document.getElementById('r-algsysworpro-62').style.color = 'red'
          document.getElementById('r-algsysworpro-62').innerHTML = 'Incorrect!'
          document.getElementById('r-algsysworpro-64').style.color = 'blue'
          document.getElementById('r-algsysworpro-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algsysworpro-64').classList.add("correct")
          document.getElementById('b-algsysworpro-61').classList.add("incorrect")
          document.getElementById('b-algsysworpro-62').classList.add("incorrect")
          document.getElementById('b-algsysworpro-63').classList.add("incorrect")
    
          document.getElementById('sa-algsysworpro-6').disabled = true;
          document.getElementById('o-algsysworpro-61').disabled = true;
          document.getElementById('o-algsysworpro-62').disabled = true;
          document.getElementById('o-algsysworpro-63').disabled = true;
          document.getElementById('o-algsysworpro-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algsysworpro6', 0)
        }
        if (document.getElementById('o-algsysworpro-63').checked) {
          document.getElementById('r-algsysworpro-63').style.color = 'red'
          document.getElementById('r-algsysworpro-63').innerHTML = 'Incorrect!'
          document.getElementById('r-algsysworpro-64').style.color = 'blue'
          document.getElementById('r-algsysworpro-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algsysworpro-64').classList.add("correct")
          document.getElementById('b-algsysworpro-61').classList.add("incorrect")
          document.getElementById('b-algsysworpro-62').classList.add("incorrect")
          document.getElementById('b-algsysworpro-63').classList.add("incorrect")
    
          document.getElementById('sa-algsysworpro-6').disabled = true;
          document.getElementById('o-algsysworpro-61').disabled = true;
          document.getElementById('o-algsysworpro-62').disabled = true;
          document.getElementById('o-algsysworpro-63').disabled = true;
          document.getElementById('o-algsysworpro-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algsysworpro6', 0)
        }
        if (document.getElementById('o-algsysworpro-64').checked) {
          document.getElementById('r-algsysworpro-64').style.color = 'blue'
          document.getElementById('r-algsysworpro-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algsysworpro-64').classList.add("correct")
          document.getElementById('b-algsysworpro-61').classList.add("incorrect")
          document.getElementById('b-algsysworpro-62').classList.add("incorrect")
          document.getElementById('b-algsysworpro-63').classList.add("incorrect")
    
          document.getElementById('sa-algsysworpro-6').disabled = true;
          document.getElementById('o-algsysworpro-61').disabled = true;
          document.getElementById('o-algsysworpro-62').disabled = true;
          document.getElementById('o-algsysworpro-63').disabled = true;
          document.getElementById('o-algsysworpro-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algsysworpro6', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algsysworpro-7') != null) {
      algsysworpro7But.onclick = function() {
        if (document.getElementById('o-algsysworpro-71').checked) {
          document.getElementById('r-algsysworpro-71').style.color = 'red'
          document.getElementById('r-algsysworpro-71').innerHTML = 'Incorrect!'
          document.getElementById('r-algsysworpro-74').style.color = 'blue'
          document.getElementById('r-algsysworpro-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algsysworpro-74').classList.add("correct")
          document.getElementById('b-algsysworpro-71').classList.add("incorrect")
          document.getElementById('b-algsysworpro-72').classList.add("incorrect")
          document.getElementById('b-algsysworpro-73').classList.add("incorrect")
    
          document.getElementById('sa-algsysworpro-7').disabled = true;
          document.getElementById('o-algsysworpro-71').disabled = true;
          document.getElementById('o-algsysworpro-72').disabled = true;
          document.getElementById('o-algsysworpro-73').disabled = true;
          document.getElementById('o-algsysworpro-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algsysworpro7', 0)
        }
        if (document.getElementById('o-algsysworpro-72').checked) {
          document.getElementById('r-algsysworpro-72').style.color = 'red'
          document.getElementById('r-algsysworpro-72').innerHTML = 'Incorrect!'
          document.getElementById('r-algsysworpro-74').style.color = 'blue'
          document.getElementById('r-algsysworpro-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algsysworpro-74').classList.add("correct")
          document.getElementById('b-algsysworpro-71').classList.add("incorrect")
          document.getElementById('b-algsysworpro-72').classList.add("incorrect")
          document.getElementById('b-algsysworpro-73').classList.add("incorrect")
    
          document.getElementById('sa-algsysworpro-7').disabled = true;
          document.getElementById('o-algsysworpro-71').disabled = true;
          document.getElementById('o-algsysworpro-72').disabled = true;
          document.getElementById('o-algsysworpro-73').disabled = true;
          document.getElementById('o-algsysworpro-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algsysworpro7', 0)
        }
        if (document.getElementById('o-algsysworpro-73').checked) {
          document.getElementById('r-algsysworpro-73').style.color = 'red'
          document.getElementById('r-algsysworpro-73').innerHTML = 'Incorrect!'
          document.getElementById('r-algsysworpro-74').style.color = 'blue'
          document.getElementById('r-algsysworpro-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algsysworpro-74').classList.add("correct")
          document.getElementById('b-algsysworpro-71').classList.add("incorrect")
          document.getElementById('b-algsysworpro-72').classList.add("incorrect")
          document.getElementById('b-algsysworpro-73').classList.add("incorrect")
    
          document.getElementById('sa-algsysworpro-7').disabled = true;
          document.getElementById('o-algsysworpro-71').disabled = true;
          document.getElementById('o-algsysworpro-72').disabled = true;
          document.getElementById('o-algsysworpro-73').disabled = true;
          document.getElementById('o-algsysworpro-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algsysworpro7', 0)
        }
        if (document.getElementById('o-algsysworpro-74').checked) {
          document.getElementById('r-algsysworpro-74').style.color = 'blue'
          document.getElementById('r-algsysworpro-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algsysworpro-74').classList.add("correct")
          document.getElementById('b-algsysworpro-71').classList.add("incorrect")
          document.getElementById('b-algsysworpro-72').classList.add("incorrect")
          document.getElementById('b-algsysworpro-73').classList.add("incorrect")
    
          document.getElementById('sa-algsysworpro-7').disabled = true;
          document.getElementById('o-algsysworpro-71').disabled = true;
          document.getElementById('o-algsysworpro-72').disabled = true;
          document.getElementById('o-algsysworpro-73').disabled = true;
          document.getElementById('o-algsysworpro-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algsysworpro7', 1)
        }
      }
    }
    
    
    if (document.getElementById('sa-algsysworpro-8') != null) {
      algsysworpro8But.onclick = function() {
        if (document.getElementById('o-algsysworpro-81').checked) {
          document.getElementById('r-algsysworpro-81').style.color = 'red'
          document.getElementById('r-algsysworpro-81').innerHTML = 'Incorrect!'
          document.getElementById('r-algsysworpro-82').style.color = 'blue'
          document.getElementById('r-algsysworpro-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algsysworpro-82').classList.add("correct")
          document.getElementById('b-algsysworpro-81').classList.add("incorrect")
          document.getElementById('b-algsysworpro-83').classList.add("incorrect")
          document.getElementById('b-algsysworpro-84').classList.add("incorrect")
    
          document.getElementById('sa-algsysworpro-8').disabled = true;
          document.getElementById('o-algsysworpro-81').disabled = true;
          document.getElementById('o-algsysworpro-82').disabled = true;
          document.getElementById('o-algsysworpro-83').disabled = true;
          document.getElementById('o-algsysworpro-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algsysworpro8', 0)
        }
        if (document.getElementById('o-algsysworpro-82').checked) {
          document.getElementById('r-algsysworpro-82').style.color = 'blue'
          document.getElementById('r-algsysworpro-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algsysworpro-82').classList.add("correct")
          document.getElementById('b-algsysworpro-81').classList.add("incorrect")
          document.getElementById('b-algsysworpro-83').classList.add("incorrect")
          document.getElementById('b-algsysworpro-84').classList.add("incorrect")
    
          document.getElementById('sa-algsysworpro-8').disabled = true;
          document.getElementById('o-algsysworpro-81').disabled = true;
          document.getElementById('o-algsysworpro-82').disabled = true;
          document.getElementById('o-algsysworpro-83').disabled = true;
          document.getElementById('o-algsysworpro-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algsysworpro8', 1)
        }
        if (document.getElementById('o-algsysworpro-83').checked) {
          document.getElementById('r-algsysworpro-83').style.color = 'red'
          document.getElementById('r-algsysworpro-83').innerHTML = 'Incorrect!'
          document.getElementById('r-algsysworpro-82').style.color = 'blue'
          document.getElementById('r-algsysworpro-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algsysworpro-82').classList.add("correct")
          document.getElementById('b-algsysworpro-81').classList.add("incorrect")
          document.getElementById('b-algsysworpro-83').classList.add("incorrect")
          document.getElementById('b-algsysworpro-84').classList.add("incorrect")
    
          document.getElementById('sa-algsysworpro-8').disabled = true;
          document.getElementById('o-algsysworpro-81').disabled = true;
          document.getElementById('o-algsysworpro-82').disabled = true;
          document.getElementById('o-algsysworpro-83').disabled = true;
          document.getElementById('o-algsysworpro-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algsysworpro8', 0)
        }
        if (document.getElementById('o-algsysworpro-84').checked) {
          document.getElementById('r-algsysworpro-84').style.color = 'red'
          document.getElementById('r-algsysworpro-84').innerHTML = 'Incorrect!'
          document.getElementById('r-algsysworpro-82').style.color = 'blue'
          document.getElementById('r-algsysworpro-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algsysworpro-82').classList.add("correct")
          document.getElementById('b-algsysworpro-81').classList.add("incorrect")
          document.getElementById('b-algsysworpro-83').classList.add("incorrect")
          document.getElementById('b-algsysworpro-84').classList.add("incorrect")
    
          document.getElementById('sa-algsysworpro-8').disabled = true;
          document.getElementById('o-algsysworpro-81').disabled = true;
          document.getElementById('o-algsysworpro-82').disabled = true;
          document.getElementById('o-algsysworpro-83').disabled = true;
          document.getElementById('o-algsysworpro-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algsysworpro8', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-algsysworpro-9') != null) {
      algsysworpro9But.onclick = function() {
        if (document.getElementById('o-algsysworpro-91').checked) {
          document.getElementById('r-algsysworpro-91').style.color = 'red'
          document.getElementById('r-algsysworpro-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algsysworpro-94').style.color = 'blue'
          document.getElementById('r-algsysworpro-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algsysworpro-94').classList.add("correct")
          document.getElementById('b-algsysworpro-91').classList.add("incorrect")
          document.getElementById('b-algsysworpro-92').classList.add("incorrect")
          document.getElementById('b-algsysworpro-93').classList.add("incorrect")
    
          document.getElementById('sa-algsysworpro-9').disabled = true;
          document.getElementById('o-algsysworpro-91').disabled = true;
          document.getElementById('o-algsysworpro-92').disabled = true;
          document.getElementById('o-algsysworpro-93').disabled = true;
          document.getElementById('o-algsysworpro-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algsysworpro9', 0)
        }
        if (document.getElementById('o-algsysworpro-92').checked) {
          document.getElementById('r-algsysworpro-91').style.color = 'red'
          document.getElementById('r-algsysworpro-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algsysworpro-94').style.color = 'blue'
          document.getElementById('r-algsysworpro-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algsysworpro-94').classList.add("correct")
          document.getElementById('b-algsysworpro-91').classList.add("incorrect")
          document.getElementById('b-algsysworpro-92').classList.add("incorrect")
          document.getElementById('b-algsysworpro-93').classList.add("incorrect")
    
          document.getElementById('sa-algsysworpro-9').disabled = true;
          document.getElementById('o-algsysworpro-91').disabled = true;
          document.getElementById('o-algsysworpro-92').disabled = true;
          document.getElementById('o-algsysworpro-93').disabled = true;
          document.getElementById('o-algsysworpro-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algsysworpro9', 0)
        }
        if (document.getElementById('o-algsysworpro-93').checked) {
          document.getElementById('r-algsysworpro-91').style.color = 'red'
          document.getElementById('r-algsysworpro-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algsysworpro-94').style.color = 'blue'
          document.getElementById('r-algsysworpro-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algsysworpro-94').classList.add("correct")
          document.getElementById('b-algsysworpro-91').classList.add("incorrect")
          document.getElementById('b-algsysworpro-92').classList.add("incorrect")
          document.getElementById('b-algsysworpro-93').classList.add("incorrect")
    
          document.getElementById('sa-algsysworpro-9').disabled = true;
          document.getElementById('o-algsysworpro-91').disabled = true;
          document.getElementById('o-algsysworpro-92').disabled = true;
          document.getElementById('o-algsysworpro-93').disabled = true;
          document.getElementById('o-algsysworpro-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algsysworpro9', 0)
        }
        if (document.getElementById('o-algsysworpro-94').checked) {
          document.getElementById('r-algsysworpro-94').style.color = 'blue'
          document.getElementById('r-algsysworpro-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algsysworpro-94').classList.add("correct")
          document.getElementById('b-algsysworpro-91').classList.add("incorrect")
          document.getElementById('b-algsysworpro-92').classList.add("incorrect")
          document.getElementById('b-algsysworpro-93').classList.add("incorrect")
    
          document.getElementById('sa-algsysworpro-9').disabled = true;
          document.getElementById('o-algsysworpro-91').disabled = true;
          document.getElementById('o-algsysworpro-92').disabled = true;
          document.getElementById('o-algsysworpro-93').disabled = true;
          document.getElementById('o-algsysworpro-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algsysworpro9', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algsysworpro-10') != null) {
      algsysworpro10But.onclick = function() {
        if (document.getElementById('o-algsysworpro-101').checked) {
          document.getElementById('r-algsysworpro-101').style.color = 'red'
          document.getElementById('r-algsysworpro-101').innerHTML = 'Incorrect!'
          document.getElementById('r-algsysworpro-102').style.color = 'blue'
          document.getElementById('r-algsysworpro-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algsysworpro-102').classList.add("correct")
          document.getElementById('b-algsysworpro-101').classList.add("incorrect")
          document.getElementById('b-algsysworpro-103').classList.add("incorrect")
          document.getElementById('b-algsysworpro-104').classList.add("incorrect")
    
          document.getElementById('sa-algsysworpro-10').disabled = true;
          document.getElementById('o-algsysworpro-101').disabled = true;
          document.getElementById('o-algsysworpro-102').disabled = true;
          document.getElementById('o-algsysworpro-103').disabled = true;
          document.getElementById('o-algsysworpro-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algsysworpro10', 0)
        }
        if (document.getElementById('o-algsysworpro-102').checked) {
          document.getElementById('r-algsysworpro-102').style.color = 'blue'
          document.getElementById('r-algsysworpro-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algsysworpro-102').classList.add("correct")
          document.getElementById('b-algsysworpro-101').classList.add("incorrect")
          document.getElementById('b-algsysworpro-103').classList.add("incorrect")
          document.getElementById('b-algsysworpro-104').classList.add("incorrect")
    
          document.getElementById('sa-algsysworpro-10').disabled = true;
          document.getElementById('o-algsysworpro-101').disabled = true;
          document.getElementById('o-algsysworpro-102').disabled = true;
          document.getElementById('o-algsysworpro-103').disabled = true;
          document.getElementById('o-algsysworpro-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algsysworpro10', 1)
        }
        if (document.getElementById('o-algsysworpro-103').checked) {
          document.getElementById('r-algsysworpro-103').style.color = 'red'
          document.getElementById('r-algsysworpro-103').innerHTML = 'Incorrect!'
          document.getElementById('r-algsysworpro-102').style.color = 'blue'
          document.getElementById('r-algsysworpro-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algsysworpro-102').classList.add("correct")
          document.getElementById('b-algsysworpro-101').classList.add("incorrect")
          document.getElementById('b-algsysworpro-103').classList.add("incorrect")
          document.getElementById('b-algsysworpro-104').classList.add("incorrect")
    
          document.getElementById('sa-algsysworpro-10').disabled = true;
          document.getElementById('o-algsysworpro-101').disabled = true;
          document.getElementById('o-algsysworpro-102').disabled = true;
          document.getElementById('o-algsysworpro-103').disabled = true;
          document.getElementById('o-algsysworpro-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algsysworpro10', 0)
        }
        if (document.getElementById('o-algsysworpro-104').checked) {
          document.getElementById('r-algsysworpro-104').style.color = 'red'
          document.getElementById('r-algsysworpro-104').innerHTML = 'Incorrect!'
          document.getElementById('r-algsysworpro-102').style.color = 'blue'
          document.getElementById('r-algsysworpro-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algsysworpro-102').classList.add("correct")
          document.getElementById('b-algsysworpro-101').classList.add("incorrect")
          document.getElementById('b-algsysworpro-103').classList.add("incorrect")
          document.getElementById('b-algsysworpro-104').classList.add("incorrect")
    
          document.getElementById('sa-algsysworpro-10').disabled = true;
          document.getElementById('o-algsysworpro-101').disabled = true;
          document.getElementById('o-algsysworpro-102').disabled = true;
          document.getElementById('o-algsysworpro-103').disabled = true;
          document.getElementById('o-algsysworpro-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algsysworpro10', 0)
        }
      }
    }
    