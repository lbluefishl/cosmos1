
  let algsurarevol1But = document.getElementById('sa-algsurarevol-1');
  let algsurarevol2But = document.getElementById('sa-algsurarevol-2');
  let algsurarevol3But = document.getElementById('sa-algsurarevol-3');
  let algsurarevol4But = document.getElementById('sa-algsurarevol-4');
  let algsurarevol5But = document.getElementById('sa-algsurarevol-5');
  let algsurarevol6But = document.getElementById('sa-algsurarevol-6');
  let algsurarevol7But = document.getElementById('sa-algsurarevol-7');
  let algsurarevol8But = document.getElementById('sa-algsurarevol-8');
  let algsurarevol9But = document.getElementById('sa-algsurarevol-9');
  let algsurarevol10But = document.getElementById('sa-algsurarevol-10');


  showExplanation1 = function() {
    document.getElementById('e-algsurarevol-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-algsurarevol-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-algsurarevol-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-algsurarevol-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-algsurarevol-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-algsurarevol-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-algsurarevol-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-algsurarevol-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-algsurarevol-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-algsurarevol-10').style.display = 'block';
     } 



     if (document.getElementById('sa-algsurarevol-1') != null) {
      algsurarevol1But.onclick = function () {
        if (document.getElementById('o-algsurarevol-11').checked) {
          document.getElementById('r-algsurarevol-11').style.color = 'red'
          document.getElementById('r-algsurarevol-11').innerHTML = 'Incorrect!'
          document.getElementById('r-algsurarevol-12').style.color = 'blue'
          document.getElementById('r-algsurarevol-12').innerHTML = 'Correct!'
    
          document.getElementById('b-algsurarevol-12').classList.add("correct")
          document.getElementById('b-algsurarevol-11').classList.add("incorrect")
          document.getElementById('b-algsurarevol-13').classList.add("incorrect")
          document.getElementById('b-algsurarevol-14').classList.add("incorrect")
    
          document.getElementById('sa-algsurarevol-1').disabled = true;
          document.getElementById('o-algsurarevol-11').disabled = true;
          document.getElementById('o-algsurarevol-12').disabled = true;
          document.getElementById('o-algsurarevol-13').disabled = true;
          document.getElementById('o-algsurarevol-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algsurarevol1', 0)
        }
    
        if (document.getElementById('o-algsurarevol-12').checked) {
          document.getElementById('r-algsurarevol-12').style.color = 'blue'
          document.getElementById('r-algsurarevol-12').innerHTML = 'Correct!'
    
          document.getElementById('b-algsurarevol-12').classList.add("correct")
          document.getElementById('b-algsurarevol-11').classList.add("incorrect")
          document.getElementById('b-algsurarevol-13').classList.add("incorrect")
          document.getElementById('b-algsurarevol-14').classList.add("incorrect")
    
          document.getElementById('sa-algsurarevol-1').disabled = true;
          document.getElementById('o-algsurarevol-11').disabled = true;
          document.getElementById('o-algsurarevol-12').disabled = true;
          document.getElementById('o-algsurarevol-13').disabled = true;
          document.getElementById('o-algsurarevol-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algsurarevol1', 1)
        }
        if (document.getElementById('o-algsurarevol-13').checked) {
          document.getElementById('r-algsurarevol-13').style.color = 'red'
          document.getElementById('r-algsurarevol-13').innerHTML = 'Incorrect!'
          document.getElementById('r-algsurarevol-12').style.color = 'blue'
          document.getElementById('r-algsurarevol-12').innerHTML = 'Correct!'
          
          document.getElementById('b-algsurarevol-12').classList.add("correct")
          document.getElementById('b-algsurarevol-11').classList.add("incorrect")
          document.getElementById('b-algsurarevol-13').classList.add("incorrect")
          document.getElementById('b-algsurarevol-14').classList.add("incorrect")
    
          document.getElementById('sa-algsurarevol-1').disabled = true;
          document.getElementById('o-algsurarevol-11').disabled = true;
          document.getElementById('o-algsurarevol-12').disabled = true;
          document.getElementById('o-algsurarevol-13').disabled = true;
          document.getElementById('o-algsurarevol-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algsurarevol1', 0)
        }
        if (document.getElementById('o-algsurarevol-14').checked) {
          document.getElementById('r-algsurarevol-14').style.color = 'red'
          document.getElementById('r-algsurarevol-14').innerHTML = 'Incorrect!'
          document.getElementById('r-algsurarevol-12').style.color = 'blue'
          document.getElementById('r-algsurarevol-12').innerHTML = 'Correct!'
          
          document.getElementById('b-algsurarevol-12').classList.add("correct")
          document.getElementById('b-algsurarevol-11').classList.add("incorrect")
          document.getElementById('b-algsurarevol-13').classList.add("incorrect")
          document.getElementById('b-algsurarevol-14').classList.add("incorrect")
    
          document.getElementById('sa-algsurarevol-1').disabled = true;
          document.getElementById('o-algsurarevol-11').disabled = true;
          document.getElementById('o-algsurarevol-12').disabled = true;
          document.getElementById('o-algsurarevol-13').disabled = true;
          document.getElementById('o-algsurarevol-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algsurarevol1', 0)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-algsurarevol-2') != null) {
      algsurarevol2But.onclick = function() {
        if (document.getElementById('o-algsurarevol-21').checked) {
          document.getElementById('r-algsurarevol-21').style.color = 'red'
          document.getElementById('r-algsurarevol-21').innerHTML = 'Incorrect!'
          document.getElementById('r-algsurarevol-23').style.color = 'blue'
          document.getElementById('r-algsurarevol-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algsurarevol-23').classList.add("correct")
          document.getElementById('b-algsurarevol-21').classList.add("incorrect")
          document.getElementById('b-algsurarevol-22').classList.add("incorrect")
          document.getElementById('b-algsurarevol-24').classList.add("incorrect")
    
          document.getElementById('sa-algsurarevol-2').disabled = true;
          document.getElementById('o-algsurarevol-21').disabled = true;
          document.getElementById('o-algsurarevol-22').disabled = true;
          document.getElementById('o-algsurarevol-23').disabled = true;
          document.getElementById('o-algsurarevol-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algsurarevol2', 0)
        }
        if (document.getElementById('o-algsurarevol-22').checked) {
          document.getElementById('r-algsurarevol-22').style.color = 'red'
          document.getElementById('r-algsurarevol-22').innerHTML = 'Incorrect!'
          document.getElementById('r-algsurarevol-23').style.color = 'blue'
          document.getElementById('r-algsurarevol-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algsurarevol-23').classList.add("correct")
          document.getElementById('b-algsurarevol-21').classList.add("incorrect")
          document.getElementById('b-algsurarevol-22').classList.add("incorrect")
          document.getElementById('b-algsurarevol-24').classList.add("incorrect")
    
          document.getElementById('sa-algsurarevol-2').disabled = true;
          document.getElementById('o-algsurarevol-21').disabled = true;
          document.getElementById('o-algsurarevol-22').disabled = true;
          document.getElementById('o-algsurarevol-23').disabled = true;
          document.getElementById('o-algsurarevol-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algsurarevol2', 0)
        }
        if (document.getElementById('o-algsurarevol-23').checked) {
          document.getElementById('r-algsurarevol-23').style.color = 'blue'
          document.getElementById('r-algsurarevol-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algsurarevol-23').classList.add("correct")
          document.getElementById('b-algsurarevol-21').classList.add("incorrect")
          document.getElementById('b-algsurarevol-22').classList.add("incorrect")
          document.getElementById('b-algsurarevol-24').classList.add("incorrect")
    
          document.getElementById('sa-algsurarevol-2').disabled = true;
          document.getElementById('o-algsurarevol-21').disabled = true;
          document.getElementById('o-algsurarevol-22').disabled = true;
          document.getElementById('o-algsurarevol-23').disabled = true;
          document.getElementById('o-algsurarevol-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algsurarevol2', 1)
        }
        if (document.getElementById('o-algsurarevol-24').checked) {
          document.getElementById('r-algsurarevol-24').style.color = 'red'
          document.getElementById('r-algsurarevol-24').innerHTML = 'Incorrect!'
          document.getElementById('r-algsurarevol-23').style.color = 'blue'
          document.getElementById('r-algsurarevol-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algsurarevol-23').classList.add("correct")
          document.getElementById('b-algsurarevol-21').classList.add("incorrect")
          document.getElementById('b-algsurarevol-22').classList.add("incorrect")
          document.getElementById('b-algsurarevol-24').classList.add("incorrect")
    
          document.getElementById('sa-algsurarevol-2').disabled = true;
          document.getElementById('o-algsurarevol-21').disabled = true;
          document.getElementById('o-algsurarevol-22').disabled = true;
          document.getElementById('o-algsurarevol-23').disabled = true;
          document.getElementById('o-algsurarevol-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algsurarevol2', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algsurarevol-3') != null) {
      algsurarevol3But.onclick = function() {
        if (document.getElementById('o-algsurarevol-31').checked) {
          document.getElementById('r-algsurarevol-31').style.color = 'red'
          document.getElementById('r-algsurarevol-31').innerHTML = 'Incorrect!'
          document.getElementById('r-algsurarevol-34').style.color = 'blue'
          document.getElementById('r-algsurarevol-34').innerHTML = 'Correct!'
          
          document.getElementById('b-algsurarevol-34').classList.add("correct")
          document.getElementById('b-algsurarevol-31').classList.add("incorrect")
          document.getElementById('b-algsurarevol-33').classList.add("incorrect")
          document.getElementById('b-algsurarevol-32').classList.add("incorrect")
    
          document.getElementById('sa-algsurarevol-3').disabled = true;
          document.getElementById('o-algsurarevol-31').disabled = true;
          document.getElementById('o-algsurarevol-32').disabled = true;
          document.getElementById('o-algsurarevol-33').disabled = true;
          document.getElementById('o-algsurarevol-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algsurarevol3', 0)
        }
        if (document.getElementById('o-algsurarevol-32').checked) {
          document.getElementById('r-algsurarevol-32').style.color = 'red'
          document.getElementById('r-algsurarevol-32').innerHTML = 'Incorrect!'
          document.getElementById('r-algsurarevol-34').style.color = 'blue'
          document.getElementById('r-algsurarevol-34').innerHTML = 'Correct!'
          
          document.getElementById('b-algsurarevol-34').classList.add("correct")
          document.getElementById('b-algsurarevol-31').classList.add("incorrect")
          document.getElementById('b-algsurarevol-33').classList.add("incorrect")
          document.getElementById('b-algsurarevol-32').classList.add("incorrect")
    
          document.getElementById('sa-algsurarevol-3').disabled = true;
          document.getElementById('o-algsurarevol-31').disabled = true;
          document.getElementById('o-algsurarevol-32').disabled = true;
          document.getElementById('o-algsurarevol-33').disabled = true;
          document.getElementById('o-algsurarevol-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algsurarevol3', 0)
        }
        if (document.getElementById('o-algsurarevol-33').checked) {
          document.getElementById('r-algsurarevol-33').style.color = 'red'
          document.getElementById('r-algsurarevol-33').innerHTML = 'Incorrect!'
          document.getElementById('r-algsurarevol-34').style.color = 'blue'
          document.getElementById('r-algsurarevol-34').innerHTML = 'Correct!'
          
          document.getElementById('b-algsurarevol-34').classList.add("correct")
          document.getElementById('b-algsurarevol-31').classList.add("incorrect")
          document.getElementById('b-algsurarevol-33').classList.add("incorrect")
          document.getElementById('b-algsurarevol-32').classList.add("incorrect")
    
          document.getElementById('sa-algsurarevol-3').disabled = true;
          document.getElementById('o-algsurarevol-31').disabled = true;
          document.getElementById('o-algsurarevol-32').disabled = true;
          document.getElementById('o-algsurarevol-33').disabled = true;
          document.getElementById('o-algsurarevol-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algsurarevol3', 0)
        }
        if (document.getElementById('o-algsurarevol-34').checked) {
          document.getElementById('r-algsurarevol-34').style.color = 'blue'
          document.getElementById('r-algsurarevol-34').innerHTML = 'Correct!'
          
          document.getElementById('b-algsurarevol-34').classList.add("correct")
          document.getElementById('b-algsurarevol-31').classList.add("incorrect")
          document.getElementById('b-algsurarevol-33').classList.add("incorrect")
          document.getElementById('b-algsurarevol-32').classList.add("incorrect")
    
          document.getElementById('sa-algsurarevol-3').disabled = true;
          document.getElementById('o-algsurarevol-31').disabled = true;
          document.getElementById('o-algsurarevol-32').disabled = true;
          document.getElementById('o-algsurarevol-33').disabled = true;
          document.getElementById('o-algsurarevol-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algsurarevol3', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algsurarevol-4') != null) {
      algsurarevol4But.onclick = function() {
        if (document.getElementById('o-algsurarevol-41').checked) {
          document.getElementById('r-algsurarevol-41').style.color = 'red'
          document.getElementById('r-algsurarevol-41').innerHTML = 'Incorrect!'
          document.getElementById('r-algsurarevol-43').style.color = 'blue'
          document.getElementById('r-algsurarevol-43').innerHTML = 'Correct!'
          
          document.getElementById('b-algsurarevol-43').classList.add("correct")
          document.getElementById('b-algsurarevol-41').classList.add("incorrect")
          document.getElementById('b-algsurarevol-42').classList.add("incorrect")
          document.getElementById('b-algsurarevol-44').classList.add("incorrect")
    
          document.getElementById('sa-algsurarevol-4').disabled = true;
          document.getElementById('o-algsurarevol-41').disabled = true;
          document.getElementById('o-algsurarevol-42').disabled = true;
          document.getElementById('o-algsurarevol-43').disabled = true;
          document.getElementById('o-algsurarevol-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algsurarevol4', 0)
        }
        if (document.getElementById('o-algsurarevol-42').checked) {
          document.getElementById('r-algsurarevol-42').style.color = 'red'
          document.getElementById('r-algsurarevol-42').innerHTML = 'Incorrect!'
          document.getElementById('r-algsurarevol-43').style.color = 'blue'
          document.getElementById('r-algsurarevol-43').innerHTML = 'Correct!'
          
          document.getElementById('b-algsurarevol-43').classList.add("correct")
          document.getElementById('b-algsurarevol-41').classList.add("incorrect")
          document.getElementById('b-algsurarevol-42').classList.add("incorrect")
          document.getElementById('b-algsurarevol-44').classList.add("incorrect")
    
          document.getElementById('sa-algsurarevol-4').disabled = true;
          document.getElementById('o-algsurarevol-41').disabled = true;
          document.getElementById('o-algsurarevol-42').disabled = true;
          document.getElementById('o-algsurarevol-43').disabled = true;
          document.getElementById('o-algsurarevol-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algsurarevol4', 0)
        }
        if (document.getElementById('o-algsurarevol-43').checked) {
          document.getElementById('r-algsurarevol-43').style.color = 'blue'
          document.getElementById('r-algsurarevol-43').innerHTML = 'Correct!'
          
          document.getElementById('b-algsurarevol-43').classList.add("correct")
          document.getElementById('b-algsurarevol-41').classList.add("incorrect")
          document.getElementById('b-algsurarevol-42').classList.add("incorrect")
          document.getElementById('b-algsurarevol-44').classList.add("incorrect")
    
          document.getElementById('sa-algsurarevol-4').disabled = true;
          document.getElementById('o-algsurarevol-41').disabled = true;
          document.getElementById('o-algsurarevol-42').disabled = true;
          document.getElementById('o-algsurarevol-43').disabled = true;
          document.getElementById('o-algsurarevol-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algsurarevol4', 1)
        }
        if (document.getElementById('o-algsurarevol-44').checked) {
          document.getElementById('r-algsurarevol-44').style.color = 'red'
          document.getElementById('r-algsurarevol-44').innerHTML = 'Incorrect!'
          document.getElementById('r-algsurarevol-43').style.color = 'blue'
          document.getElementById('r-algsurarevol-43').innerHTML = 'Correct!'
          
          document.getElementById('b-algsurarevol-43').classList.add("correct")
          document.getElementById('b-algsurarevol-41').classList.add("incorrect")
          document.getElementById('b-algsurarevol-42').classList.add("incorrect")
          document.getElementById('b-algsurarevol-44').classList.add("incorrect")
    
          document.getElementById('sa-algsurarevol-4').disabled = true;
          document.getElementById('o-algsurarevol-41').disabled = true;
          document.getElementById('o-algsurarevol-42').disabled = true;
          document.getElementById('o-algsurarevol-43').disabled = true;
          document.getElementById('o-algsurarevol-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algsurarevol4', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algsurarevol-5') != null) {
      algsurarevol5But.onclick = function() {
        if (document.getElementById('o-algsurarevol-51').checked) {
          document.getElementById('r-algsurarevol-51').style.color = 'red'
          document.getElementById('r-algsurarevol-51').innerHTML = 'Incorrect!'
          document.getElementById('r-algsurarevol-53').style.color = 'blue'
          document.getElementById('r-algsurarevol-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algsurarevol-53').classList.add("correct")
          document.getElementById('b-algsurarevol-51').classList.add("incorrect")
          document.getElementById('b-algsurarevol-52').classList.add("incorrect")
          document.getElementById('b-algsurarevol-54').classList.add("incorrect")
    
          document.getElementById('sa-algsurarevol-5').disabled = true;
          document.getElementById('o-algsurarevol-51').disabled = true;
          document.getElementById('o-algsurarevol-52').disabled = true;
          document.getElementById('o-algsurarevol-53').disabled = true;
          document.getElementById('o-algsurarevol-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algsurarevol5', 0)
        }
        if (document.getElementById('o-algsurarevol-52').checked) {
          document.getElementById('r-algsurarevol-52').style.color = 'red'
          document.getElementById('r-algsurarevol-52').innerHTML = 'Incorrect!'
          document.getElementById('r-algsurarevol-53').style.color = 'blue'
          document.getElementById('r-algsurarevol-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algsurarevol-53').classList.add("correct")
          document.getElementById('b-algsurarevol-51').classList.add("incorrect")
          document.getElementById('b-algsurarevol-52').classList.add("incorrect")
          document.getElementById('b-algsurarevol-54').classList.add("incorrect")
    
          document.getElementById('sa-algsurarevol-5').disabled = true;
          document.getElementById('o-algsurarevol-51').disabled = true;
          document.getElementById('o-algsurarevol-52').disabled = true;
          document.getElementById('o-algsurarevol-53').disabled = true;
          document.getElementById('o-algsurarevol-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algsurarevol5', 0)
        }
        if (document.getElementById('o-algsurarevol-53').checked) {
          document.getElementById('r-algsurarevol-53').style.color = 'blue'
          document.getElementById('r-algsurarevol-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algsurarevol-53').classList.add("correct")
          document.getElementById('b-algsurarevol-51').classList.add("incorrect")
          document.getElementById('b-algsurarevol-52').classList.add("incorrect")
          document.getElementById('b-algsurarevol-54').classList.add("incorrect")
    
          document.getElementById('sa-algsurarevol-5').disabled = true;
          document.getElementById('o-algsurarevol-51').disabled = true;
          document.getElementById('o-algsurarevol-52').disabled = true;
          document.getElementById('o-algsurarevol-53').disabled = true;
          document.getElementById('o-algsurarevol-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algsurarevol5', 1)
        }
        if (document.getElementById('o-algsurarevol-54').checked) {
          document.getElementById('r-algsurarevol-54').style.color = 'red'
          document.getElementById('r-algsurarevol-54').innerHTML = 'Incorrect!'
          document.getElementById('r-algsurarevol-53').style.color = 'blue'
          document.getElementById('r-algsurarevol-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algsurarevol-53').classList.add("correct")
          document.getElementById('b-algsurarevol-51').classList.add("incorrect")
          document.getElementById('b-algsurarevol-52').classList.add("incorrect")
          document.getElementById('b-algsurarevol-54').classList.add("incorrect")
    
          document.getElementById('sa-algsurarevol-5').disabled = true;
          document.getElementById('o-algsurarevol-51').disabled = true;
          document.getElementById('o-algsurarevol-52').disabled = true;
          document.getElementById('o-algsurarevol-53').disabled = true;
          document.getElementById('o-algsurarevol-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algsurarevol5', 0)
        }
      }
    }
        
         
      if (document.getElementById('sa-algsurarevol-6') != null) {
      algsurarevol6But.onclick = function() {
        if (document.getElementById('o-algsurarevol-61').checked) {
          document.getElementById('r-algsurarevol-61').style.color = 'red'
          document.getElementById('r-algsurarevol-61').innerHTML = 'Incorrect!'
          document.getElementById('r-algsurarevol-64').style.color = 'blue'
          document.getElementById('r-algsurarevol-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algsurarevol-64').classList.add("correct")
          document.getElementById('b-algsurarevol-61').classList.add("incorrect")
          document.getElementById('b-algsurarevol-62').classList.add("incorrect")
          document.getElementById('b-algsurarevol-63').classList.add("incorrect")
    
          document.getElementById('sa-algsurarevol-6').disabled = true;
          document.getElementById('o-algsurarevol-61').disabled = true;
          document.getElementById('o-algsurarevol-62').disabled = true;
          document.getElementById('o-algsurarevol-63').disabled = true;
          document.getElementById('o-algsurarevol-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algsurarevol6', 0)
        }
        if (document.getElementById('o-algsurarevol-62').checked) {
          document.getElementById('r-algsurarevol-62').style.color = 'red'
          document.getElementById('r-algsurarevol-62').innerHTML = 'Incorrect!'
          document.getElementById('r-algsurarevol-64').style.color = 'blue'
          document.getElementById('r-algsurarevol-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algsurarevol-64').classList.add("correct")
          document.getElementById('b-algsurarevol-61').classList.add("incorrect")
          document.getElementById('b-algsurarevol-62').classList.add("incorrect")
          document.getElementById('b-algsurarevol-63').classList.add("incorrect")
    
          document.getElementById('sa-algsurarevol-6').disabled = true;
          document.getElementById('o-algsurarevol-61').disabled = true;
          document.getElementById('o-algsurarevol-62').disabled = true;
          document.getElementById('o-algsurarevol-63').disabled = true;
          document.getElementById('o-algsurarevol-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algsurarevol6', 0)
        }
        if (document.getElementById('o-algsurarevol-63').checked) {
          document.getElementById('r-algsurarevol-63').style.color = 'red'
          document.getElementById('r-algsurarevol-63').innerHTML = 'Incorrect!'
          document.getElementById('r-algsurarevol-64').style.color = 'blue'
          document.getElementById('r-algsurarevol-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algsurarevol-64').classList.add("correct")
          document.getElementById('b-algsurarevol-61').classList.add("incorrect")
          document.getElementById('b-algsurarevol-62').classList.add("incorrect")
          document.getElementById('b-algsurarevol-63').classList.add("incorrect")
    
          document.getElementById('sa-algsurarevol-6').disabled = true;
          document.getElementById('o-algsurarevol-61').disabled = true;
          document.getElementById('o-algsurarevol-62').disabled = true;
          document.getElementById('o-algsurarevol-63').disabled = true;
          document.getElementById('o-algsurarevol-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algsurarevol6', 0)
        }
        if (document.getElementById('o-algsurarevol-64').checked) {
          document.getElementById('r-algsurarevol-64').style.color = 'blue'
          document.getElementById('r-algsurarevol-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algsurarevol-64').classList.add("correct")
          document.getElementById('b-algsurarevol-61').classList.add("incorrect")
          document.getElementById('b-algsurarevol-62').classList.add("incorrect")
          document.getElementById('b-algsurarevol-63').classList.add("incorrect")
    
          document.getElementById('sa-algsurarevol-6').disabled = true;
          document.getElementById('o-algsurarevol-61').disabled = true;
          document.getElementById('o-algsurarevol-62').disabled = true;
          document.getElementById('o-algsurarevol-63').disabled = true;
          document.getElementById('o-algsurarevol-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algsurarevol6', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algsurarevol-7') != null) {
      algsurarevol7But.onclick = function() {
        if (document.getElementById('o-algsurarevol-71').checked) {
          document.getElementById('r-algsurarevol-71').style.color = 'red'
          document.getElementById('r-algsurarevol-71').innerHTML = 'Incorrect!'
          document.getElementById('r-algsurarevol-74').style.color = 'blue'
          document.getElementById('r-algsurarevol-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algsurarevol-74').classList.add("correct")
          document.getElementById('b-algsurarevol-71').classList.add("incorrect")
          document.getElementById('b-algsurarevol-72').classList.add("incorrect")
          document.getElementById('b-algsurarevol-73').classList.add("incorrect")
    
          document.getElementById('sa-algsurarevol-7').disabled = true;
          document.getElementById('o-algsurarevol-71').disabled = true;
          document.getElementById('o-algsurarevol-72').disabled = true;
          document.getElementById('o-algsurarevol-73').disabled = true;
          document.getElementById('o-algsurarevol-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algsurarevol7', 0)
        }
        if (document.getElementById('o-algsurarevol-72').checked) {
          document.getElementById('r-algsurarevol-72').style.color = 'red'
          document.getElementById('r-algsurarevol-72').innerHTML = 'Incorrect!'
          document.getElementById('r-algsurarevol-74').style.color = 'blue'
          document.getElementById('r-algsurarevol-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algsurarevol-74').classList.add("correct")
          document.getElementById('b-algsurarevol-71').classList.add("incorrect")
          document.getElementById('b-algsurarevol-72').classList.add("incorrect")
          document.getElementById('b-algsurarevol-73').classList.add("incorrect")
    
          document.getElementById('sa-algsurarevol-7').disabled = true;
          document.getElementById('o-algsurarevol-71').disabled = true;
          document.getElementById('o-algsurarevol-72').disabled = true;
          document.getElementById('o-algsurarevol-73').disabled = true;
          document.getElementById('o-algsurarevol-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algsurarevol7', 0)
        }
        if (document.getElementById('o-algsurarevol-73').checked) {
          document.getElementById('r-algsurarevol-73').style.color = 'red'
          document.getElementById('r-algsurarevol-73').innerHTML = 'Incorrect!'
          document.getElementById('r-algsurarevol-74').style.color = 'blue'
          document.getElementById('r-algsurarevol-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algsurarevol-74').classList.add("correct")
          document.getElementById('b-algsurarevol-71').classList.add("incorrect")
          document.getElementById('b-algsurarevol-72').classList.add("incorrect")
          document.getElementById('b-algsurarevol-73').classList.add("incorrect")
    
          document.getElementById('sa-algsurarevol-7').disabled = true;
          document.getElementById('o-algsurarevol-71').disabled = true;
          document.getElementById('o-algsurarevol-72').disabled = true;
          document.getElementById('o-algsurarevol-73').disabled = true;
          document.getElementById('o-algsurarevol-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algsurarevol7', 0)
        }
        if (document.getElementById('o-algsurarevol-74').checked) {
          document.getElementById('r-algsurarevol-74').style.color = 'blue'
          document.getElementById('r-algsurarevol-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algsurarevol-74').classList.add("correct")
          document.getElementById('b-algsurarevol-71').classList.add("incorrect")
          document.getElementById('b-algsurarevol-72').classList.add("incorrect")
          document.getElementById('b-algsurarevol-73').classList.add("incorrect")
    
          document.getElementById('sa-algsurarevol-7').disabled = true;
          document.getElementById('o-algsurarevol-71').disabled = true;
          document.getElementById('o-algsurarevol-72').disabled = true;
          document.getElementById('o-algsurarevol-73').disabled = true;
          document.getElementById('o-algsurarevol-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algsurarevol7', 1)
        }
      }
    }
    
    
    if (document.getElementById('sa-algsurarevol-8') != null) {
      algsurarevol8But.onclick = function() {
        if (document.getElementById('o-algsurarevol-81').checked) {
          document.getElementById('r-algsurarevol-81').style.color = 'red'
          document.getElementById('r-algsurarevol-81').innerHTML = 'Incorrect!'
          document.getElementById('r-algsurarevol-82').style.color = 'blue'
          document.getElementById('r-algsurarevol-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algsurarevol-82').classList.add("correct")
          document.getElementById('b-algsurarevol-81').classList.add("incorrect")
          document.getElementById('b-algsurarevol-83').classList.add("incorrect")
          document.getElementById('b-algsurarevol-84').classList.add("incorrect")
    
          document.getElementById('sa-algsurarevol-8').disabled = true;
          document.getElementById('o-algsurarevol-81').disabled = true;
          document.getElementById('o-algsurarevol-82').disabled = true;
          document.getElementById('o-algsurarevol-83').disabled = true;
          document.getElementById('o-algsurarevol-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algsurarevol8', 0)
        }
        if (document.getElementById('o-algsurarevol-82').checked) {
          document.getElementById('r-algsurarevol-82').style.color = 'blue'
          document.getElementById('r-algsurarevol-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algsurarevol-82').classList.add("correct")
          document.getElementById('b-algsurarevol-81').classList.add("incorrect")
          document.getElementById('b-algsurarevol-83').classList.add("incorrect")
          document.getElementById('b-algsurarevol-84').classList.add("incorrect")
    
          document.getElementById('sa-algsurarevol-8').disabled = true;
          document.getElementById('o-algsurarevol-81').disabled = true;
          document.getElementById('o-algsurarevol-82').disabled = true;
          document.getElementById('o-algsurarevol-83').disabled = true;
          document.getElementById('o-algsurarevol-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algsurarevol8', 1)
        }
        if (document.getElementById('o-algsurarevol-83').checked) {
          document.getElementById('r-algsurarevol-83').style.color = 'red'
          document.getElementById('r-algsurarevol-83').innerHTML = 'Incorrect!'
          document.getElementById('r-algsurarevol-82').style.color = 'blue'
          document.getElementById('r-algsurarevol-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algsurarevol-82').classList.add("correct")
          document.getElementById('b-algsurarevol-81').classList.add("incorrect")
          document.getElementById('b-algsurarevol-83').classList.add("incorrect")
          document.getElementById('b-algsurarevol-84').classList.add("incorrect")
    
          document.getElementById('sa-algsurarevol-8').disabled = true;
          document.getElementById('o-algsurarevol-81').disabled = true;
          document.getElementById('o-algsurarevol-82').disabled = true;
          document.getElementById('o-algsurarevol-83').disabled = true;
          document.getElementById('o-algsurarevol-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algsurarevol8', 0)
        }
        if (document.getElementById('o-algsurarevol-84').checked) {
          document.getElementById('r-algsurarevol-84').style.color = 'red'
          document.getElementById('r-algsurarevol-84').innerHTML = 'Incorrect!'
          document.getElementById('r-algsurarevol-82').style.color = 'blue'
          document.getElementById('r-algsurarevol-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algsurarevol-82').classList.add("correct")
          document.getElementById('b-algsurarevol-81').classList.add("incorrect")
          document.getElementById('b-algsurarevol-83').classList.add("incorrect")
          document.getElementById('b-algsurarevol-84').classList.add("incorrect")
    
          document.getElementById('sa-algsurarevol-8').disabled = true;
          document.getElementById('o-algsurarevol-81').disabled = true;
          document.getElementById('o-algsurarevol-82').disabled = true;
          document.getElementById('o-algsurarevol-83').disabled = true;
          document.getElementById('o-algsurarevol-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algsurarevol8', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-algsurarevol-9') != null) {
      algsurarevol9But.onclick = function() {
        if (document.getElementById('o-algsurarevol-91').checked) {
          document.getElementById('r-algsurarevol-91').style.color = 'red'
          document.getElementById('r-algsurarevol-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algsurarevol-94').style.color = 'blue'
          document.getElementById('r-algsurarevol-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algsurarevol-94').classList.add("correct")
          document.getElementById('b-algsurarevol-91').classList.add("incorrect")
          document.getElementById('b-algsurarevol-92').classList.add("incorrect")
          document.getElementById('b-algsurarevol-93').classList.add("incorrect")
    
          document.getElementById('sa-algsurarevol-9').disabled = true;
          document.getElementById('o-algsurarevol-91').disabled = true;
          document.getElementById('o-algsurarevol-92').disabled = true;
          document.getElementById('o-algsurarevol-93').disabled = true;
          document.getElementById('o-algsurarevol-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algsurarevol9', 0)
        }
        if (document.getElementById('o-algsurarevol-92').checked) {
          document.getElementById('r-algsurarevol-91').style.color = 'red'
          document.getElementById('r-algsurarevol-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algsurarevol-94').style.color = 'blue'
          document.getElementById('r-algsurarevol-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algsurarevol-94').classList.add("correct")
          document.getElementById('b-algsurarevol-91').classList.add("incorrect")
          document.getElementById('b-algsurarevol-92').classList.add("incorrect")
          document.getElementById('b-algsurarevol-93').classList.add("incorrect")
    
          document.getElementById('sa-algsurarevol-9').disabled = true;
          document.getElementById('o-algsurarevol-91').disabled = true;
          document.getElementById('o-algsurarevol-92').disabled = true;
          document.getElementById('o-algsurarevol-93').disabled = true;
          document.getElementById('o-algsurarevol-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algsurarevol9', 0)
        }
        if (document.getElementById('o-algsurarevol-93').checked) {
          document.getElementById('r-algsurarevol-91').style.color = 'red'
          document.getElementById('r-algsurarevol-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algsurarevol-94').style.color = 'blue'
          document.getElementById('r-algsurarevol-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algsurarevol-94').classList.add("correct")
          document.getElementById('b-algsurarevol-91').classList.add("incorrect")
          document.getElementById('b-algsurarevol-92').classList.add("incorrect")
          document.getElementById('b-algsurarevol-93').classList.add("incorrect")
    
          document.getElementById('sa-algsurarevol-9').disabled = true;
          document.getElementById('o-algsurarevol-91').disabled = true;
          document.getElementById('o-algsurarevol-92').disabled = true;
          document.getElementById('o-algsurarevol-93').disabled = true;
          document.getElementById('o-algsurarevol-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algsurarevol9', 0)
        }
        if (document.getElementById('o-algsurarevol-94').checked) {
          document.getElementById('r-algsurarevol-94').style.color = 'blue'
          document.getElementById('r-algsurarevol-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algsurarevol-94').classList.add("correct")
          document.getElementById('b-algsurarevol-91').classList.add("incorrect")
          document.getElementById('b-algsurarevol-92').classList.add("incorrect")
          document.getElementById('b-algsurarevol-93').classList.add("incorrect")
    
          document.getElementById('sa-algsurarevol-9').disabled = true;
          document.getElementById('o-algsurarevol-91').disabled = true;
          document.getElementById('o-algsurarevol-92').disabled = true;
          document.getElementById('o-algsurarevol-93').disabled = true;
          document.getElementById('o-algsurarevol-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algsurarevol9', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algsurarevol-10') != null) {
      algsurarevol10But.onclick = function() {
        if (document.getElementById('o-algsurarevol-101').checked) {
          document.getElementById('r-algsurarevol-101').style.color = 'red'
          document.getElementById('r-algsurarevol-101').innerHTML = 'Incorrect!'
          document.getElementById('r-algsurarevol-102').style.color = 'blue'
          document.getElementById('r-algsurarevol-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algsurarevol-102').classList.add("correct")
          document.getElementById('b-algsurarevol-101').classList.add("incorrect")
          document.getElementById('b-algsurarevol-103').classList.add("incorrect")
          document.getElementById('b-algsurarevol-104').classList.add("incorrect")
    
          document.getElementById('sa-algsurarevol-10').disabled = true;
          document.getElementById('o-algsurarevol-101').disabled = true;
          document.getElementById('o-algsurarevol-102').disabled = true;
          document.getElementById('o-algsurarevol-103').disabled = true;
          document.getElementById('o-algsurarevol-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algsurarevol10', 0)
        }
        if (document.getElementById('o-algsurarevol-102').checked) {
          document.getElementById('r-algsurarevol-102').style.color = 'blue'
          document.getElementById('r-algsurarevol-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algsurarevol-102').classList.add("correct")
          document.getElementById('b-algsurarevol-101').classList.add("incorrect")
          document.getElementById('b-algsurarevol-103').classList.add("incorrect")
          document.getElementById('b-algsurarevol-104').classList.add("incorrect")
    
          document.getElementById('sa-algsurarevol-10').disabled = true;
          document.getElementById('o-algsurarevol-101').disabled = true;
          document.getElementById('o-algsurarevol-102').disabled = true;
          document.getElementById('o-algsurarevol-103').disabled = true;
          document.getElementById('o-algsurarevol-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algsurarevol10', 1)
        }
        if (document.getElementById('o-algsurarevol-103').checked) {
          document.getElementById('r-algsurarevol-103').style.color = 'red'
          document.getElementById('r-algsurarevol-103').innerHTML = 'Incorrect!'
          document.getElementById('r-algsurarevol-102').style.color = 'blue'
          document.getElementById('r-algsurarevol-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algsurarevol-102').classList.add("correct")
          document.getElementById('b-algsurarevol-101').classList.add("incorrect")
          document.getElementById('b-algsurarevol-103').classList.add("incorrect")
          document.getElementById('b-algsurarevol-104').classList.add("incorrect")
    
          document.getElementById('sa-algsurarevol-10').disabled = true;
          document.getElementById('o-algsurarevol-101').disabled = true;
          document.getElementById('o-algsurarevol-102').disabled = true;
          document.getElementById('o-algsurarevol-103').disabled = true;
          document.getElementById('o-algsurarevol-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algsurarevol10', 0)
        }
        if (document.getElementById('o-algsurarevol-104').checked) {
          document.getElementById('r-algsurarevol-104').style.color = 'red'
          document.getElementById('r-algsurarevol-104').innerHTML = 'Incorrect!'
          document.getElementById('r-algsurarevol-102').style.color = 'blue'
          document.getElementById('r-algsurarevol-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algsurarevol-102').classList.add("correct")
          document.getElementById('b-algsurarevol-101').classList.add("incorrect")
          document.getElementById('b-algsurarevol-103').classList.add("incorrect")
          document.getElementById('b-algsurarevol-104').classList.add("incorrect")
    
          document.getElementById('sa-algsurarevol-10').disabled = true;
          document.getElementById('o-algsurarevol-101').disabled = true;
          document.getElementById('o-algsurarevol-102').disabled = true;
          document.getElementById('o-algsurarevol-103').disabled = true;
          document.getElementById('o-algsurarevol-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algsurarevol10', 0)
        }
      }
    }
    