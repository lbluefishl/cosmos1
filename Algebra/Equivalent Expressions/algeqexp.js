
  let algeqexp1But = document.getElementById('sa-algeqexp-1');
  let algeqexp2But = document.getElementById('sa-algeqexp-2');
  let algeqexp3But = document.getElementById('sa-algeqexp-3');
  let algeqexp4But = document.getElementById('sa-algeqexp-4');
  let algeqexp5But = document.getElementById('sa-algeqexp-5');
  let algeqexp6But = document.getElementById('sa-algeqexp-6');
  let algeqexp7But = document.getElementById('sa-algeqexp-7');
  let algeqexp8But = document.getElementById('sa-algeqexp-8');
  let algeqexp9But = document.getElementById('sa-algeqexp-9');
  let algeqexp10But = document.getElementById('sa-algeqexp-10');


  showExplanation1 = function() {
    document.getElementById('e-algeqexp-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-algeqexp-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-algeqexp-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-algeqexp-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-algeqexp-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-algeqexp-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-algeqexp-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-algeqexp-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-algeqexp-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-algeqexp-10').style.display = 'block';
     } 



     if (document.getElementById('sa-algeqexp-1') != null) {
      algeqexp1But.onclick = function () {
        if (document.getElementById('o-algeqexp-11').checked) {
          document.getElementById('r-algeqexp-11').style.color = 'red'
          document.getElementById('r-algeqexp-11').innerHTML = 'Incorrect!'
          document.getElementById('r-algeqexp-14').style.color = 'blue'
          document.getElementById('r-algeqexp-14').innerHTML = 'Correct!'
    
          document.getElementById('b-algeqexp-14').classList.add("correct")
          document.getElementById('b-algeqexp-12').classList.add("incorrect")
          document.getElementById('b-algeqexp-13').classList.add("incorrect")
          document.getElementById('b-algeqexp-11').classList.add("incorrect")
    
          document.getElementById('sa-algeqexp-1').disabled = true;
          document.getElementById('o-algeqexp-11').disabled = true;
          document.getElementById('o-algeqexp-12').disabled = true;
          document.getElementById('o-algeqexp-13').disabled = true;
          document.getElementById('o-algeqexp-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algeqexp1', 0)
        }
    
        if (document.getElementById('o-algeqexp-12').checked) {
         
          document.getElementById('r-algeqexp-12').style.color = 'red'
          document.getElementById('r-algeqexp-12').innerHTML = 'Incorrect!'
          document.getElementById('r-algeqexp-14').style.color = 'blue'
          document.getElementById('r-algeqexp-14').innerHTML = 'Correct!'
    
          document.getElementById('b-algeqexp-14').classList.add("correct")
          document.getElementById('b-algeqexp-12').classList.add("incorrect")
          document.getElementById('b-algeqexp-13').classList.add("incorrect")
          document.getElementById('b-algeqexp-11').classList.add("incorrect")
    
          document.getElementById('sa-algeqexp-1').disabled = true;
          document.getElementById('o-algeqexp-11').disabled = true;
          document.getElementById('o-algeqexp-12').disabled = true;
          document.getElementById('o-algeqexp-13').disabled = true;
          document.getElementById('o-algeqexp-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algeqexp1', 0)
        }
        if (document.getElementById('o-algeqexp-13').checked) {
          document.getElementById('r-algeqexp-13').style.color = 'red'
          document.getElementById('r-algeqexp-13').innerHTML = 'Incorrect!'
          document.getElementById('r-algeqexp-14').style.color = 'blue'
          document.getElementById('r-algeqexp-14').innerHTML = 'Correct!'
          
          document.getElementById('b-algeqexp-14').classList.add("correct")
          document.getElementById('b-algeqexp-12').classList.add("incorrect")
          document.getElementById('b-algeqexp-13').classList.add("incorrect")
          document.getElementById('b-algeqexp-11').classList.add("incorrect")
    
          document.getElementById('sa-algeqexp-1').disabled = true;
          document.getElementById('o-algeqexp-11').disabled = true;
          document.getElementById('o-algeqexp-12').disabled = true;
          document.getElementById('o-algeqexp-13').disabled = true;
          document.getElementById('o-algeqexp-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algeqexp1', 0)
        }
        if (document.getElementById('o-algeqexp-14').checked) {
          document.getElementById('r-algeqexp-14').style.color = 'blue'
          document.getElementById('r-algeqexp-14').innerHTML = 'Correct!'
          
          document.getElementById('b-algeqexp-14').classList.add("correct")
          document.getElementById('b-algeqexp-12').classList.add("incorrect")
          document.getElementById('b-algeqexp-13').classList.add("incorrect")
          document.getElementById('b-algeqexp-11').classList.add("incorrect")
    
          document.getElementById('sa-algeqexp-1').disabled = true;
          document.getElementById('o-algeqexp-11').disabled = true;
          document.getElementById('o-algeqexp-12').disabled = true;
          document.getElementById('o-algeqexp-13').disabled = true;
          document.getElementById('o-algeqexp-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algeqexp1', 1)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-algeqexp-2') != null) {
      algeqexp2But.onclick = function() {
        if (document.getElementById('o-algeqexp-21').checked) {
          document.getElementById('r-algeqexp-21').style.color = 'red'
          document.getElementById('r-algeqexp-21').innerHTML = 'Incorrect!'
          document.getElementById('r-algeqexp-23').style.color = 'blue'
          document.getElementById('r-algeqexp-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algeqexp-23').classList.add("correct")
          document.getElementById('b-algeqexp-21').classList.add("incorrect")
          document.getElementById('b-algeqexp-22').classList.add("incorrect")
          document.getElementById('b-algeqexp-24').classList.add("incorrect")
    
          document.getElementById('sa-algeqexp-2').disabled = true;
          document.getElementById('o-algeqexp-21').disabled = true;
          document.getElementById('o-algeqexp-22').disabled = true;
          document.getElementById('o-algeqexp-23').disabled = true;
          document.getElementById('o-algeqexp-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algeqexp2', 0)
        }
        if (document.getElementById('o-algeqexp-22').checked) {
          document.getElementById('r-algeqexp-22').style.color = 'red'
          document.getElementById('r-algeqexp-22').innerHTML = 'Incorrect!'
          document.getElementById('r-algeqexp-23').style.color = 'blue'
          document.getElementById('r-algeqexp-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algeqexp-23').classList.add("correct")
          document.getElementById('b-algeqexp-21').classList.add("incorrect")
          document.getElementById('b-algeqexp-22').classList.add("incorrect")
          document.getElementById('b-algeqexp-24').classList.add("incorrect")
    
          document.getElementById('sa-algeqexp-2').disabled = true;
          document.getElementById('o-algeqexp-21').disabled = true;
          document.getElementById('o-algeqexp-22').disabled = true;
          document.getElementById('o-algeqexp-23').disabled = true;
          document.getElementById('o-algeqexp-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algeqexp2', 0)
        }
        if (document.getElementById('o-algeqexp-23').checked) {
          document.getElementById('r-algeqexp-23').style.color = 'blue'
          document.getElementById('r-algeqexp-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algeqexp-23').classList.add("correct")
          document.getElementById('b-algeqexp-21').classList.add("incorrect")
          document.getElementById('b-algeqexp-22').classList.add("incorrect")
          document.getElementById('b-algeqexp-24').classList.add("incorrect")
    
          document.getElementById('sa-algeqexp-2').disabled = true;
          document.getElementById('o-algeqexp-21').disabled = true;
          document.getElementById('o-algeqexp-22').disabled = true;
          document.getElementById('o-algeqexp-23').disabled = true;
          document.getElementById('o-algeqexp-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algeqexp2', 1)
        }
        if (document.getElementById('o-algeqexp-24').checked) {
          document.getElementById('r-algeqexp-24').style.color = 'red'
          document.getElementById('r-algeqexp-24').innerHTML = 'Incorrect!'
          document.getElementById('r-algeqexp-23').style.color = 'blue'
          document.getElementById('r-algeqexp-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algeqexp-23').classList.add("correct")
          document.getElementById('b-algeqexp-21').classList.add("incorrect")
          document.getElementById('b-algeqexp-22').classList.add("incorrect")
          document.getElementById('b-algeqexp-24').classList.add("incorrect")
    
          document.getElementById('sa-algeqexp-2').disabled = true;
          document.getElementById('o-algeqexp-21').disabled = true;
          document.getElementById('o-algeqexp-22').disabled = true;
          document.getElementById('o-algeqexp-23').disabled = true;
          document.getElementById('o-algeqexp-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algeqexp2', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algeqexp-3') != null) {
      algeqexp3But.onclick = function() {
        if (document.getElementById('o-algeqexp-31').checked) {
          document.getElementById('r-algeqexp-31').style.color = 'red'
          document.getElementById('r-algeqexp-31').innerHTML = 'Incorrect!'
          document.getElementById('r-algeqexp-32').style.color = 'blue'
          document.getElementById('r-algeqexp-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algeqexp-32').classList.add("correct")
          document.getElementById('b-algeqexp-31').classList.add("incorrect")
          document.getElementById('b-algeqexp-33').classList.add("incorrect")
          document.getElementById('b-algeqexp-34').classList.add("incorrect")
    
          document.getElementById('sa-algeqexp-3').disabled = true;
          document.getElementById('o-algeqexp-31').disabled = true;
          document.getElementById('o-algeqexp-32').disabled = true;
          document.getElementById('o-algeqexp-33').disabled = true;
          document.getElementById('o-algeqexp-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algeqexp3', 0)
        }
        if (document.getElementById('o-algeqexp-32').checked) {
    
          document.getElementById('r-algeqexp-32').style.color = 'blue'
          document.getElementById('r-algeqexp-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algeqexp-32').classList.add("correct")
          document.getElementById('b-algeqexp-31').classList.add("incorrect")
          document.getElementById('b-algeqexp-33').classList.add("incorrect")
          document.getElementById('b-algeqexp-34').classList.add("incorrect")
    
          document.getElementById('sa-algeqexp-3').disabled = true;
          document.getElementById('o-algeqexp-31').disabled = true;
          document.getElementById('o-algeqexp-32').disabled = true;
          document.getElementById('o-algeqexp-33').disabled = true;
          document.getElementById('o-algeqexp-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algeqexp3', 1)
        }
        if (document.getElementById('o-algeqexp-33').checked) {
          document.getElementById('r-algeqexp-33').style.color = 'red'
          document.getElementById('r-algeqexp-33').innerHTML = 'Incorrect!'
          document.getElementById('r-algeqexp-32').style.color = 'blue'
          document.getElementById('r-algeqexp-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algeqexp-32').classList.add("correct")
          document.getElementById('b-algeqexp-31').classList.add("incorrect")
          document.getElementById('b-algeqexp-33').classList.add("incorrect")
          document.getElementById('b-algeqexp-34').classList.add("incorrect")
    
          document.getElementById('sa-algeqexp-3').disabled = true;
          document.getElementById('o-algeqexp-31').disabled = true;
          document.getElementById('o-algeqexp-32').disabled = true;
          document.getElementById('o-algeqexp-33').disabled = true;
          document.getElementById('o-algeqexp-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algeqexp3', 0)
        }
        if (document.getElementById('o-algeqexp-34').checked) {
          document.getElementById('r-algeqexp-34').style.color = 'red'
          document.getElementById('r-algeqexp-34').innerHTML = 'Incorrect!'
          document.getElementById('r-algeqexp-32').style.color = 'blue'
          document.getElementById('r-algeqexp-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algeqexp-32').classList.add("correct")
          document.getElementById('b-algeqexp-31').classList.add("incorrect")
          document.getElementById('b-algeqexp-33').classList.add("incorrect")
          document.getElementById('b-algeqexp-34').classList.add("incorrect")
    
          document.getElementById('sa-algeqexp-3').disabled = true;
          document.getElementById('o-algeqexp-31').disabled = true;
          document.getElementById('o-algeqexp-32').disabled = true;
          document.getElementById('o-algeqexp-33').disabled = true;
          document.getElementById('o-algeqexp-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algeqexp3', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algeqexp-4') != null) {
      algeqexp4But.onclick = function() {
        if (document.getElementById('o-algeqexp-41').checked) {
          document.getElementById('r-algeqexp-41').style.color = 'red'
          document.getElementById('r-algeqexp-41').innerHTML = 'Incorrect!'
          document.getElementById('r-algeqexp-43').style.color = 'blue'
          document.getElementById('r-algeqexp-43').innerHTML = 'Correct!'
          
          document.getElementById('b-algeqexp-43').classList.add("correct")
          document.getElementById('b-algeqexp-41').classList.add("incorrect")
          document.getElementById('b-algeqexp-42').classList.add("incorrect")
          document.getElementById('b-algeqexp-44').classList.add("incorrect")
    
          document.getElementById('sa-algeqexp-4').disabled = true;
          document.getElementById('o-algeqexp-41').disabled = true;
          document.getElementById('o-algeqexp-42').disabled = true;
          document.getElementById('o-algeqexp-43').disabled = true;
          document.getElementById('o-algeqexp-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algeqexp4', 0)
        }
        if (document.getElementById('o-algeqexp-42').checked) {
          document.getElementById('r-algeqexp-42').style.color = 'red'
          document.getElementById('r-algeqexp-42').innerHTML = 'Incorrect!'
          document.getElementById('r-algeqexp-43').style.color = 'blue'
          document.getElementById('r-algeqexp-43').innerHTML = 'Correct!'
          
          document.getElementById('b-algeqexp-43').classList.add("correct")
          document.getElementById('b-algeqexp-41').classList.add("incorrect")
          document.getElementById('b-algeqexp-42').classList.add("incorrect")
          document.getElementById('b-algeqexp-44').classList.add("incorrect")
    
          document.getElementById('sa-algeqexp-4').disabled = true;
          document.getElementById('o-algeqexp-41').disabled = true;
          document.getElementById('o-algeqexp-42').disabled = true;
          document.getElementById('o-algeqexp-43').disabled = true;
          document.getElementById('o-algeqexp-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algeqexp4', 0)
        }
        if (document.getElementById('o-algeqexp-43').checked) {
          document.getElementById('r-algeqexp-43').style.color = 'blue'
          document.getElementById('r-algeqexp-43').innerHTML = 'Correct!'
          
          document.getElementById('b-algeqexp-43').classList.add("correct")
          document.getElementById('b-algeqexp-41').classList.add("incorrect")
          document.getElementById('b-algeqexp-42').classList.add("incorrect")
          document.getElementById('b-algeqexp-44').classList.add("incorrect")
    
          document.getElementById('sa-algeqexp-4').disabled = true;
          document.getElementById('o-algeqexp-41').disabled = true;
          document.getElementById('o-algeqexp-42').disabled = true;
          document.getElementById('o-algeqexp-43').disabled = true;
          document.getElementById('o-algeqexp-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algeqexp4', 1)
        }
        if (document.getElementById('o-algeqexp-44').checked) {
          document.getElementById('r-algeqexp-44').style.color = 'red'
          document.getElementById('r-algeqexp-44').innerHTML = 'Incorrect!'
          document.getElementById('r-algeqexp-43').style.color = 'blue'
          document.getElementById('r-algeqexp-43').innerHTML = 'Correct!'
          
          document.getElementById('b-algeqexp-43').classList.add("correct")
          document.getElementById('b-algeqexp-41').classList.add("incorrect")
          document.getElementById('b-algeqexp-42').classList.add("incorrect")
          document.getElementById('b-algeqexp-44').classList.add("incorrect")
    
          document.getElementById('sa-algeqexp-4').disabled = true;
          document.getElementById('o-algeqexp-41').disabled = true;
          document.getElementById('o-algeqexp-42').disabled = true;
          document.getElementById('o-algeqexp-43').disabled = true;
          document.getElementById('o-algeqexp-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algeqexp4', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algeqexp-5') != null) {
      algeqexp5But.onclick = function() {
        if (document.getElementById('o-algeqexp-51').checked) {
          document.getElementById('r-algeqexp-51').style.color = 'red'
          document.getElementById('r-algeqexp-51').innerHTML = 'Incorrect!'
          document.getElementById('r-algeqexp-53').style.color = 'blue'
          document.getElementById('r-algeqexp-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algeqexp-53').classList.add("correct")
          document.getElementById('b-algeqexp-51').classList.add("incorrect")
          document.getElementById('b-algeqexp-52').classList.add("incorrect")
          document.getElementById('b-algeqexp-54').classList.add("incorrect")
    
          document.getElementById('sa-algeqexp-5').disabled = true;
          document.getElementById('o-algeqexp-51').disabled = true;
          document.getElementById('o-algeqexp-52').disabled = true;
          document.getElementById('o-algeqexp-53').disabled = true;
          document.getElementById('o-algeqexp-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algeqexp5', 0)
        }
        if (document.getElementById('o-algeqexp-52').checked) {
          document.getElementById('r-algeqexp-52').style.color = 'red'
          document.getElementById('r-algeqexp-52').innerHTML = 'Incorrect!'
          document.getElementById('r-algeqexp-53').style.color = 'blue'
          document.getElementById('r-algeqexp-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algeqexp-53').classList.add("correct")
          document.getElementById('b-algeqexp-51').classList.add("incorrect")
          document.getElementById('b-algeqexp-52').classList.add("incorrect")
          document.getElementById('b-algeqexp-54').classList.add("incorrect")
    
          document.getElementById('sa-algeqexp-5').disabled = true;
          document.getElementById('o-algeqexp-51').disabled = true;
          document.getElementById('o-algeqexp-52').disabled = true;
          document.getElementById('o-algeqexp-53').disabled = true;
          document.getElementById('o-algeqexp-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algeqexp5', 0)
        }
        if (document.getElementById('o-algeqexp-53').checked) {
          document.getElementById('r-algeqexp-53').style.color = 'blue'
          document.getElementById('r-algeqexp-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algeqexp-53').classList.add("correct")
          document.getElementById('b-algeqexp-51').classList.add("incorrect")
          document.getElementById('b-algeqexp-52').classList.add("incorrect")
          document.getElementById('b-algeqexp-54').classList.add("incorrect")
    
          document.getElementById('sa-algeqexp-5').disabled = true;
          document.getElementById('o-algeqexp-51').disabled = true;
          document.getElementById('o-algeqexp-52').disabled = true;
          document.getElementById('o-algeqexp-53').disabled = true;
          document.getElementById('o-algeqexp-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algeqexp5', 1)
        }
        if (document.getElementById('o-algeqexp-54').checked) {
          document.getElementById('r-algeqexp-54').style.color = 'red'
          document.getElementById('r-algeqexp-54').innerHTML = 'Incorrect!'
          document.getElementById('r-algeqexp-53').style.color = 'blue'
          document.getElementById('r-algeqexp-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algeqexp-53').classList.add("correct")
          document.getElementById('b-algeqexp-51').classList.add("incorrect")
          document.getElementById('b-algeqexp-52').classList.add("incorrect")
          document.getElementById('b-algeqexp-54').classList.add("incorrect")
    
          document.getElementById('sa-algeqexp-5').disabled = true;
          document.getElementById('o-algeqexp-51').disabled = true;
          document.getElementById('o-algeqexp-52').disabled = true;
          document.getElementById('o-algeqexp-53').disabled = true;
          document.getElementById('o-algeqexp-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algeqexp5', 0)
        }
      }
    }
        
         
      if (document.getElementById('sa-algeqexp-6') != null) {
      algeqexp6But.onclick = function() {
        if (document.getElementById('o-algeqexp-61').checked) {
          document.getElementById('r-algeqexp-61').style.color = 'red'
          document.getElementById('r-algeqexp-61').innerHTML = 'Incorrect!'
          document.getElementById('r-algeqexp-64').style.color = 'blue'
          document.getElementById('r-algeqexp-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algeqexp-64').classList.add("correct")
          document.getElementById('b-algeqexp-61').classList.add("incorrect")
          document.getElementById('b-algeqexp-62').classList.add("incorrect")
          document.getElementById('b-algeqexp-63').classList.add("incorrect")
    
          document.getElementById('sa-algeqexp-6').disabled = true;
          document.getElementById('o-algeqexp-61').disabled = true;
          document.getElementById('o-algeqexp-62').disabled = true;
          document.getElementById('o-algeqexp-63').disabled = true;
          document.getElementById('o-algeqexp-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algeqexp6', 0)
        }
        if (document.getElementById('o-algeqexp-62').checked) {
          document.getElementById('r-algeqexp-62').style.color = 'red'
          document.getElementById('r-algeqexp-62').innerHTML = 'Incorrect!'
          document.getElementById('r-algeqexp-64').style.color = 'blue'
          document.getElementById('r-algeqexp-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algeqexp-64').classList.add("correct")
          document.getElementById('b-algeqexp-61').classList.add("incorrect")
          document.getElementById('b-algeqexp-62').classList.add("incorrect")
          document.getElementById('b-algeqexp-63').classList.add("incorrect")
    
          document.getElementById('sa-algeqexp-6').disabled = true;
          document.getElementById('o-algeqexp-61').disabled = true;
          document.getElementById('o-algeqexp-62').disabled = true;
          document.getElementById('o-algeqexp-63').disabled = true;
          document.getElementById('o-algeqexp-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algeqexp6', 0)
        }
        if (document.getElementById('o-algeqexp-63').checked) {
          document.getElementById('r-algeqexp-63').style.color = 'red'
          document.getElementById('r-algeqexp-63').innerHTML = 'Incorrect!'
          document.getElementById('r-algeqexp-64').style.color = 'blue'
          document.getElementById('r-algeqexp-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algeqexp-64').classList.add("correct")
          document.getElementById('b-algeqexp-61').classList.add("incorrect")
          document.getElementById('b-algeqexp-62').classList.add("incorrect")
          document.getElementById('b-algeqexp-63').classList.add("incorrect")
    
          document.getElementById('sa-algeqexp-6').disabled = true;
          document.getElementById('o-algeqexp-61').disabled = true;
          document.getElementById('o-algeqexp-62').disabled = true;
          document.getElementById('o-algeqexp-63').disabled = true;
          document.getElementById('o-algeqexp-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algeqexp6', 0)
        }
        if (document.getElementById('o-algeqexp-64').checked) {
          document.getElementById('r-algeqexp-64').style.color = 'blue'
          document.getElementById('r-algeqexp-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algeqexp-64').classList.add("correct")
          document.getElementById('b-algeqexp-61').classList.add("incorrect")
          document.getElementById('b-algeqexp-62').classList.add("incorrect")
          document.getElementById('b-algeqexp-63').classList.add("incorrect")
    
          document.getElementById('sa-algeqexp-6').disabled = true;
          document.getElementById('o-algeqexp-61').disabled = true;
          document.getElementById('o-algeqexp-62').disabled = true;
          document.getElementById('o-algeqexp-63').disabled = true;
          document.getElementById('o-algeqexp-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algeqexp6', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algeqexp-7') != null) {
      algeqexp7But.onclick = function() {
        if (document.getElementById('o-algeqexp-71').checked) {
          document.getElementById('r-algeqexp-71').style.color = 'red'
          document.getElementById('r-algeqexp-71').innerHTML = 'Incorrect!'
          document.getElementById('r-algeqexp-74').style.color = 'blue'
          document.getElementById('r-algeqexp-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algeqexp-74').classList.add("correct")
          document.getElementById('b-algeqexp-71').classList.add("incorrect")
          document.getElementById('b-algeqexp-72').classList.add("incorrect")
          document.getElementById('b-algeqexp-73').classList.add("incorrect")
    
          document.getElementById('sa-algeqexp-7').disabled = true;
          document.getElementById('o-algeqexp-71').disabled = true;
          document.getElementById('o-algeqexp-72').disabled = true;
          document.getElementById('o-algeqexp-73').disabled = true;
          document.getElementById('o-algeqexp-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algeqexp7', 0)
        }
        if (document.getElementById('o-algeqexp-72').checked) {
          document.getElementById('r-algeqexp-72').style.color = 'red'
          document.getElementById('r-algeqexp-72').innerHTML = 'Incorrect!'
          document.getElementById('r-algeqexp-74').style.color = 'blue'
          document.getElementById('r-algeqexp-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algeqexp-74').classList.add("correct")
          document.getElementById('b-algeqexp-71').classList.add("incorrect")
          document.getElementById('b-algeqexp-72').classList.add("incorrect")
          document.getElementById('b-algeqexp-73').classList.add("incorrect")
    
          document.getElementById('sa-algeqexp-7').disabled = true;
          document.getElementById('o-algeqexp-71').disabled = true;
          document.getElementById('o-algeqexp-72').disabled = true;
          document.getElementById('o-algeqexp-73').disabled = true;
          document.getElementById('o-algeqexp-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algeqexp7', 0)
        }
        if (document.getElementById('o-algeqexp-73').checked) {
          document.getElementById('r-algeqexp-73').style.color = 'red'
          document.getElementById('r-algeqexp-73').innerHTML = 'Incorrect!'
          document.getElementById('r-algeqexp-74').style.color = 'blue'
          document.getElementById('r-algeqexp-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algeqexp-74').classList.add("correct")
          document.getElementById('b-algeqexp-71').classList.add("incorrect")
          document.getElementById('b-algeqexp-72').classList.add("incorrect")
          document.getElementById('b-algeqexp-73').classList.add("incorrect")
    
          document.getElementById('sa-algeqexp-7').disabled = true;
          document.getElementById('o-algeqexp-71').disabled = true;
          document.getElementById('o-algeqexp-72').disabled = true;
          document.getElementById('o-algeqexp-73').disabled = true;
          document.getElementById('o-algeqexp-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algeqexp7', 0)
        }
        if (document.getElementById('o-algeqexp-74').checked) {
          document.getElementById('r-algeqexp-74').style.color = 'blue'
          document.getElementById('r-algeqexp-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algeqexp-74').classList.add("correct")
          document.getElementById('b-algeqexp-71').classList.add("incorrect")
          document.getElementById('b-algeqexp-72').classList.add("incorrect")
          document.getElementById('b-algeqexp-73').classList.add("incorrect")
    
          document.getElementById('sa-algeqexp-7').disabled = true;
          document.getElementById('o-algeqexp-71').disabled = true;
          document.getElementById('o-algeqexp-72').disabled = true;
          document.getElementById('o-algeqexp-73').disabled = true;
          document.getElementById('o-algeqexp-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algeqexp7', 1)
        }
      }
    }
    
    
    if (document.getElementById('sa-algeqexp-8') != null) {
      algeqexp8But.onclick = function() {
        if (document.getElementById('o-algeqexp-81').checked) {
          document.getElementById('r-algeqexp-81').style.color = 'red'
          document.getElementById('r-algeqexp-81').innerHTML = 'Incorrect!'
          document.getElementById('r-algeqexp-82').style.color = 'blue'
          document.getElementById('r-algeqexp-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algeqexp-82').classList.add("correct")
          document.getElementById('b-algeqexp-81').classList.add("incorrect")
          document.getElementById('b-algeqexp-83').classList.add("incorrect")
          document.getElementById('b-algeqexp-84').classList.add("incorrect")
    
          document.getElementById('sa-algeqexp-8').disabled = true;
          document.getElementById('o-algeqexp-81').disabled = true;
          document.getElementById('o-algeqexp-82').disabled = true;
          document.getElementById('o-algeqexp-83').disabled = true;
          document.getElementById('o-algeqexp-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algeqexp8', 0)
        }
        if (document.getElementById('o-algeqexp-82').checked) {
          document.getElementById('r-algeqexp-82').style.color = 'blue'
          document.getElementById('r-algeqexp-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algeqexp-82').classList.add("correct")
          document.getElementById('b-algeqexp-81').classList.add("incorrect")
          document.getElementById('b-algeqexp-83').classList.add("incorrect")
          document.getElementById('b-algeqexp-84').classList.add("incorrect")
    
          document.getElementById('sa-algeqexp-8').disabled = true;
          document.getElementById('o-algeqexp-81').disabled = true;
          document.getElementById('o-algeqexp-82').disabled = true;
          document.getElementById('o-algeqexp-83').disabled = true;
          document.getElementById('o-algeqexp-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algeqexp8', 1)
        }
        if (document.getElementById('o-algeqexp-83').checked) {
          document.getElementById('r-algeqexp-83').style.color = 'red'
          document.getElementById('r-algeqexp-83').innerHTML = 'Incorrect!'
          document.getElementById('r-algeqexp-82').style.color = 'blue'
          document.getElementById('r-algeqexp-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algeqexp-82').classList.add("correct")
          document.getElementById('b-algeqexp-81').classList.add("incorrect")
          document.getElementById('b-algeqexp-83').classList.add("incorrect")
          document.getElementById('b-algeqexp-84').classList.add("incorrect")
    
          document.getElementById('sa-algeqexp-8').disabled = true;
          document.getElementById('o-algeqexp-81').disabled = true;
          document.getElementById('o-algeqexp-82').disabled = true;
          document.getElementById('o-algeqexp-83').disabled = true;
          document.getElementById('o-algeqexp-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algeqexp8', 0)
        }
        if (document.getElementById('o-algeqexp-84').checked) {
          document.getElementById('r-algeqexp-84').style.color = 'red'
          document.getElementById('r-algeqexp-84').innerHTML = 'Incorrect!'
          document.getElementById('r-algeqexp-82').style.color = 'blue'
          document.getElementById('r-algeqexp-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algeqexp-82').classList.add("correct")
          document.getElementById('b-algeqexp-81').classList.add("incorrect")
          document.getElementById('b-algeqexp-83').classList.add("incorrect")
          document.getElementById('b-algeqexp-84').classList.add("incorrect")
    
          document.getElementById('sa-algeqexp-8').disabled = true;
          document.getElementById('o-algeqexp-81').disabled = true;
          document.getElementById('o-algeqexp-82').disabled = true;
          document.getElementById('o-algeqexp-83').disabled = true;
          document.getElementById('o-algeqexp-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algeqexp8', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-algeqexp-9') != null) {
      algeqexp9But.onclick = function() {
        if (document.getElementById('o-algeqexp-91').checked) {
          document.getElementById('r-algeqexp-91').style.color = 'red'
          document.getElementById('r-algeqexp-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algeqexp-94').style.color = 'blue'
          document.getElementById('r-algeqexp-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algeqexp-94').classList.add("correct")
          document.getElementById('b-algeqexp-91').classList.add("incorrect")
          document.getElementById('b-algeqexp-92').classList.add("incorrect")
          document.getElementById('b-algeqexp-93').classList.add("incorrect")
    
          document.getElementById('sa-algeqexp-9').disabled = true;
          document.getElementById('o-algeqexp-91').disabled = true;
          document.getElementById('o-algeqexp-92').disabled = true;
          document.getElementById('o-algeqexp-93').disabled = true;
          document.getElementById('o-algeqexp-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algeqexp9', 0)
        }
        if (document.getElementById('o-algeqexp-92').checked) {
          document.getElementById('r-algeqexp-91').style.color = 'red'
          document.getElementById('r-algeqexp-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algeqexp-94').style.color = 'blue'
          document.getElementById('r-algeqexp-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algeqexp-94').classList.add("correct")
          document.getElementById('b-algeqexp-91').classList.add("incorrect")
          document.getElementById('b-algeqexp-92').classList.add("incorrect")
          document.getElementById('b-algeqexp-93').classList.add("incorrect")
    
          document.getElementById('sa-algeqexp-9').disabled = true;
          document.getElementById('o-algeqexp-91').disabled = true;
          document.getElementById('o-algeqexp-92').disabled = true;
          document.getElementById('o-algeqexp-93').disabled = true;
          document.getElementById('o-algeqexp-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algeqexp9', 0)
        }
        if (document.getElementById('o-algeqexp-93').checked) {
          document.getElementById('r-algeqexp-91').style.color = 'red'
          document.getElementById('r-algeqexp-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algeqexp-94').style.color = 'blue'
          document.getElementById('r-algeqexp-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algeqexp-94').classList.add("correct")
          document.getElementById('b-algeqexp-91').classList.add("incorrect")
          document.getElementById('b-algeqexp-92').classList.add("incorrect")
          document.getElementById('b-algeqexp-93').classList.add("incorrect")
    
          document.getElementById('sa-algeqexp-9').disabled = true;
          document.getElementById('o-algeqexp-91').disabled = true;
          document.getElementById('o-algeqexp-92').disabled = true;
          document.getElementById('o-algeqexp-93').disabled = true;
          document.getElementById('o-algeqexp-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algeqexp9', 0)
        }
        if (document.getElementById('o-algeqexp-94').checked) {
          document.getElementById('r-algeqexp-94').style.color = 'blue'
          document.getElementById('r-algeqexp-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algeqexp-94').classList.add("correct")
          document.getElementById('b-algeqexp-91').classList.add("incorrect")
          document.getElementById('b-algeqexp-92').classList.add("incorrect")
          document.getElementById('b-algeqexp-93').classList.add("incorrect")
    
          document.getElementById('sa-algeqexp-9').disabled = true;
          document.getElementById('o-algeqexp-91').disabled = true;
          document.getElementById('o-algeqexp-92').disabled = true;
          document.getElementById('o-algeqexp-93').disabled = true;
          document.getElementById('o-algeqexp-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algeqexp9', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algeqexp-10') != null) {
      algeqexp10But.onclick = function() {
        if (document.getElementById('o-algeqexp-101').checked) {
          document.getElementById('r-algeqexp-101').style.color = 'red'
          document.getElementById('r-algeqexp-101').innerHTML = 'Incorrect!'
          document.getElementById('r-algeqexp-102').style.color = 'blue'
          document.getElementById('r-algeqexp-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algeqexp-102').classList.add("correct")
          document.getElementById('b-algeqexp-101').classList.add("incorrect")
          document.getElementById('b-algeqexp-103').classList.add("incorrect")
          document.getElementById('b-algeqexp-104').classList.add("incorrect")
    
          document.getElementById('sa-algeqexp-10').disabled = true;
          document.getElementById('o-algeqexp-101').disabled = true;
          document.getElementById('o-algeqexp-102').disabled = true;
          document.getElementById('o-algeqexp-103').disabled = true;
          document.getElementById('o-algeqexp-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algeqexp10', 0)
        }
        if (document.getElementById('o-algeqexp-102').checked) {
          document.getElementById('r-algeqexp-102').style.color = 'blue'
          document.getElementById('r-algeqexp-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algeqexp-102').classList.add("correct")
          document.getElementById('b-algeqexp-101').classList.add("incorrect")
          document.getElementById('b-algeqexp-103').classList.add("incorrect")
          document.getElementById('b-algeqexp-104').classList.add("incorrect")
    
          document.getElementById('sa-algeqexp-10').disabled = true;
          document.getElementById('o-algeqexp-101').disabled = true;
          document.getElementById('o-algeqexp-102').disabled = true;
          document.getElementById('o-algeqexp-103').disabled = true;
          document.getElementById('o-algeqexp-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algeqexp10', 1)
        }
        if (document.getElementById('o-algeqexp-103').checked) {
          document.getElementById('r-algeqexp-103').style.color = 'red'
          document.getElementById('r-algeqexp-103').innerHTML = 'Incorrect!'
          document.getElementById('r-algeqexp-102').style.color = 'blue'
          document.getElementById('r-algeqexp-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algeqexp-102').classList.add("correct")
          document.getElementById('b-algeqexp-101').classList.add("incorrect")
          document.getElementById('b-algeqexp-103').classList.add("incorrect")
          document.getElementById('b-algeqexp-104').classList.add("incorrect")
    
          document.getElementById('sa-algeqexp-10').disabled = true;
          document.getElementById('o-algeqexp-101').disabled = true;
          document.getElementById('o-algeqexp-102').disabled = true;
          document.getElementById('o-algeqexp-103').disabled = true;
          document.getElementById('o-algeqexp-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algeqexp10', 0)
        }
        if (document.getElementById('o-algeqexp-104').checked) {
          document.getElementById('r-algeqexp-104').style.color = 'red'
          document.getElementById('r-algeqexp-104').innerHTML = 'Incorrect!'
          document.getElementById('r-algeqexp-102').style.color = 'blue'
          document.getElementById('r-algeqexp-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algeqexp-102').classList.add("correct")
          document.getElementById('b-algeqexp-101').classList.add("incorrect")
          document.getElementById('b-algeqexp-103').classList.add("incorrect")
          document.getElementById('b-algeqexp-104').classList.add("incorrect")
    
          document.getElementById('sa-algeqexp-10').disabled = true;
          document.getElementById('o-algeqexp-101').disabled = true;
          document.getElementById('o-algeqexp-102').disabled = true;
          document.getElementById('o-algeqexp-103').disabled = true;
          document.getElementById('o-algeqexp-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algeqexp10', 0)
        }
      }
    }
    