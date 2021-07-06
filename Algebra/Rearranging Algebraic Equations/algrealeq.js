
  let algrealeq1But = document.getElementById('sa-algrealeq-1');
  let algrealeq2But = document.getElementById('sa-algrealeq-2');
  let algrealeq3But = document.getElementById('sa-algrealeq-3');
  let algrealeq4But = document.getElementById('sa-algrealeq-4');
  let algrealeq5But = document.getElementById('sa-algrealeq-5');
  let algrealeq6But = document.getElementById('sa-algrealeq-6');
  let algrealeq7But = document.getElementById('sa-algrealeq-7');
  let algrealeq8But = document.getElementById('sa-algrealeq-8');
  let algrealeq9But = document.getElementById('sa-algrealeq-9');
  let algrealeq10But = document.getElementById('sa-algrealeq-10');


  showExplanation1 = function() {
    document.getElementById('e-algrealeq-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-algrealeq-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-algrealeq-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-algrealeq-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-algrealeq-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-algrealeq-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-algrealeq-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-algrealeq-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-algrealeq-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-algrealeq-10').style.display = 'block';
     } 



     if (document.getElementById('sa-algrealeq-1') != null) {
      algrealeq1But.onclick = function () {
        if (document.getElementById('o-algrealeq-11').checked) {
          document.getElementById('r-algrealeq-11').style.color = 'red'
          document.getElementById('r-algrealeq-11').innerHTML = 'Incorrect!'
          document.getElementById('r-algrealeq-13').style.color = 'blue'
          document.getElementById('r-algrealeq-13').innerHTML = 'Correct!'
    
          document.getElementById('b-algrealeq-13').classList.add("correct")
          document.getElementById('b-algrealeq-12').classList.add("incorrect")
          document.getElementById('b-algrealeq-11').classList.add("incorrect")
          document.getElementById('b-algrealeq-14').classList.add("incorrect")
    
          document.getElementById('sa-algrealeq-1').disabled = true;
          document.getElementById('o-algrealeq-11').disabled = true;
          document.getElementById('o-algrealeq-12').disabled = true;
          document.getElementById('o-algrealeq-13').disabled = true;
          document.getElementById('o-algrealeq-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algrealeq1', 0)
        }
    
        if (document.getElementById('o-algrealeq-12').checked) {
         
          document.getElementById('r-algrealeq-12').style.color = 'red'
          document.getElementById('r-algrealeq-12').innerHTML = 'Incorrect!'
          document.getElementById('r-algrealeq-13').style.color = 'blue'
          document.getElementById('r-algrealeq-13').innerHTML = 'Correct!'
    
          document.getElementById('b-algrealeq-13').classList.add("correct")
          document.getElementById('b-algrealeq-12').classList.add("incorrect")
          document.getElementById('b-algrealeq-11').classList.add("incorrect")
          document.getElementById('b-algrealeq-14').classList.add("incorrect")
    
          document.getElementById('sa-algrealeq-1').disabled = true;
          document.getElementById('o-algrealeq-11').disabled = true;
          document.getElementById('o-algrealeq-12').disabled = true;
          document.getElementById('o-algrealeq-13').disabled = true;
          document.getElementById('o-algrealeq-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algrealeq1', 0)
        }
        if (document.getElementById('o-algrealeq-13').checked) {
          document.getElementById('r-algrealeq-13').style.color = 'blue'
          document.getElementById('r-algrealeq-13').innerHTML = 'Correct!'
          
          document.getElementById('b-algrealeq-13').classList.add("correct")
          document.getElementById('b-algrealeq-12').classList.add("incorrect")
          document.getElementById('b-algrealeq-11').classList.add("incorrect")
          document.getElementById('b-algrealeq-14').classList.add("incorrect")
    
          document.getElementById('sa-algrealeq-1').disabled = true;
          document.getElementById('o-algrealeq-11').disabled = true;
          document.getElementById('o-algrealeq-12').disabled = true;
          document.getElementById('o-algrealeq-13').disabled = true;
          document.getElementById('o-algrealeq-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algrealeq1', 1)
        }
        if (document.getElementById('o-algrealeq-14').checked) {
          document.getElementById('r-algrealeq-14').style.color = 'red'
          document.getElementById('r-algrealeq-14').innerHTML = 'Incorrect!'
          document.getElementById('r-algrealeq-13').style.color = 'blue'
          document.getElementById('r-algrealeq-13').innerHTML = 'Correct!'
          
          document.getElementById('b-algrealeq-13').classList.add("correct")
          document.getElementById('b-algrealeq-12').classList.add("incorrect")
          document.getElementById('b-algrealeq-11').classList.add("incorrect")
          document.getElementById('b-algrealeq-14').classList.add("incorrect")
    
          document.getElementById('sa-algrealeq-1').disabled = true;
          document.getElementById('o-algrealeq-11').disabled = true;
          document.getElementById('o-algrealeq-12').disabled = true;
          document.getElementById('o-algrealeq-13').disabled = true;
          document.getElementById('o-algrealeq-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algrealeq1', 0)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-algrealeq-2') != null) {
      algrealeq2But.onclick = function() {
        if (document.getElementById('o-algrealeq-21').checked) {
          document.getElementById('r-algrealeq-21').style.color = 'red'
          document.getElementById('r-algrealeq-21').innerHTML = 'Incorrect!'
          document.getElementById('r-algrealeq-23').style.color = 'blue'
          document.getElementById('r-algrealeq-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algrealeq-23').classList.add("correct")
          document.getElementById('b-algrealeq-21').classList.add("incorrect")
          document.getElementById('b-algrealeq-22').classList.add("incorrect")
          document.getElementById('b-algrealeq-24').classList.add("incorrect")
    
          document.getElementById('sa-algrealeq-2').disabled = true;
          document.getElementById('o-algrealeq-21').disabled = true;
          document.getElementById('o-algrealeq-22').disabled = true;
          document.getElementById('o-algrealeq-23').disabled = true;
          document.getElementById('o-algrealeq-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algrealeq2', 0)
        }
        if (document.getElementById('o-algrealeq-22').checked) {
          document.getElementById('r-algrealeq-22').style.color = 'red'
          document.getElementById('r-algrealeq-22').innerHTML = 'Incorrect!'
          document.getElementById('r-algrealeq-23').style.color = 'blue'
          document.getElementById('r-algrealeq-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algrealeq-23').classList.add("correct")
          document.getElementById('b-algrealeq-21').classList.add("incorrect")
          document.getElementById('b-algrealeq-22').classList.add("incorrect")
          document.getElementById('b-algrealeq-24').classList.add("incorrect")
    
          document.getElementById('sa-algrealeq-2').disabled = true;
          document.getElementById('o-algrealeq-21').disabled = true;
          document.getElementById('o-algrealeq-22').disabled = true;
          document.getElementById('o-algrealeq-23').disabled = true;
          document.getElementById('o-algrealeq-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algrealeq2', 0)
        }
        if (document.getElementById('o-algrealeq-23').checked) {
          document.getElementById('r-algrealeq-23').style.color = 'blue'
          document.getElementById('r-algrealeq-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algrealeq-23').classList.add("correct")
          document.getElementById('b-algrealeq-21').classList.add("incorrect")
          document.getElementById('b-algrealeq-22').classList.add("incorrect")
          document.getElementById('b-algrealeq-24').classList.add("incorrect")
    
          document.getElementById('sa-algrealeq-2').disabled = true;
          document.getElementById('o-algrealeq-21').disabled = true;
          document.getElementById('o-algrealeq-22').disabled = true;
          document.getElementById('o-algrealeq-23').disabled = true;
          document.getElementById('o-algrealeq-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algrealeq2', 1)
        }
        if (document.getElementById('o-algrealeq-24').checked) {
          document.getElementById('r-algrealeq-24').style.color = 'red'
          document.getElementById('r-algrealeq-24').innerHTML = 'Incorrect!'
          document.getElementById('r-algrealeq-23').style.color = 'blue'
          document.getElementById('r-algrealeq-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algrealeq-23').classList.add("correct")
          document.getElementById('b-algrealeq-21').classList.add("incorrect")
          document.getElementById('b-algrealeq-22').classList.add("incorrect")
          document.getElementById('b-algrealeq-24').classList.add("incorrect")
    
          document.getElementById('sa-algrealeq-2').disabled = true;
          document.getElementById('o-algrealeq-21').disabled = true;
          document.getElementById('o-algrealeq-22').disabled = true;
          document.getElementById('o-algrealeq-23').disabled = true;
          document.getElementById('o-algrealeq-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algrealeq2', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algrealeq-3') != null) {
      algrealeq3But.onclick = function() {
        if (document.getElementById('o-algrealeq-31').checked) {
          document.getElementById('r-algrealeq-31').style.color = 'red'
          document.getElementById('r-algrealeq-31').innerHTML = 'Incorrect!'
          document.getElementById('r-algrealeq-32').style.color = 'blue'
          document.getElementById('r-algrealeq-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algrealeq-32').classList.add("correct")
          document.getElementById('b-algrealeq-31').classList.add("incorrect")
          document.getElementById('b-algrealeq-33').classList.add("incorrect")
          document.getElementById('b-algrealeq-34').classList.add("incorrect")
    
          document.getElementById('sa-algrealeq-3').disabled = true;
          document.getElementById('o-algrealeq-31').disabled = true;
          document.getElementById('o-algrealeq-32').disabled = true;
          document.getElementById('o-algrealeq-33').disabled = true;
          document.getElementById('o-algrealeq-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algrealeq3', 0)
        }
        if (document.getElementById('o-algrealeq-32').checked) {
    
          document.getElementById('r-algrealeq-32').style.color = 'blue'
          document.getElementById('r-algrealeq-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algrealeq-32').classList.add("correct")
          document.getElementById('b-algrealeq-31').classList.add("incorrect")
          document.getElementById('b-algrealeq-33').classList.add("incorrect")
          document.getElementById('b-algrealeq-34').classList.add("incorrect")
    
          document.getElementById('sa-algrealeq-3').disabled = true;
          document.getElementById('o-algrealeq-31').disabled = true;
          document.getElementById('o-algrealeq-32').disabled = true;
          document.getElementById('o-algrealeq-33').disabled = true;
          document.getElementById('o-algrealeq-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algrealeq3', 1)
        }
        if (document.getElementById('o-algrealeq-33').checked) {
          document.getElementById('r-algrealeq-33').style.color = 'red'
          document.getElementById('r-algrealeq-33').innerHTML = 'Incorrect!'
          document.getElementById('r-algrealeq-32').style.color = 'blue'
          document.getElementById('r-algrealeq-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algrealeq-32').classList.add("correct")
          document.getElementById('b-algrealeq-31').classList.add("incorrect")
          document.getElementById('b-algrealeq-33').classList.add("incorrect")
          document.getElementById('b-algrealeq-34').classList.add("incorrect")
    
          document.getElementById('sa-algrealeq-3').disabled = true;
          document.getElementById('o-algrealeq-31').disabled = true;
          document.getElementById('o-algrealeq-32').disabled = true;
          document.getElementById('o-algrealeq-33').disabled = true;
          document.getElementById('o-algrealeq-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algrealeq3', 0)
        }
        if (document.getElementById('o-algrealeq-34').checked) {
          document.getElementById('r-algrealeq-34').style.color = 'red'
          document.getElementById('r-algrealeq-34').innerHTML = 'Incorrect!'
          document.getElementById('r-algrealeq-32').style.color = 'blue'
          document.getElementById('r-algrealeq-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algrealeq-32').classList.add("correct")
          document.getElementById('b-algrealeq-31').classList.add("incorrect")
          document.getElementById('b-algrealeq-33').classList.add("incorrect")
          document.getElementById('b-algrealeq-34').classList.add("incorrect")
    
          document.getElementById('sa-algrealeq-3').disabled = true;
          document.getElementById('o-algrealeq-31').disabled = true;
          document.getElementById('o-algrealeq-32').disabled = true;
          document.getElementById('o-algrealeq-33').disabled = true;
          document.getElementById('o-algrealeq-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algrealeq3', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algrealeq-4') != null) {
      algrealeq4But.onclick = function() {
        if (document.getElementById('o-algrealeq-41').checked) {
          document.getElementById('r-algrealeq-41').style.color = 'red'
          document.getElementById('r-algrealeq-41').innerHTML = 'Incorrect!'
          document.getElementById('r-algrealeq-43').style.color = 'blue'
          document.getElementById('r-algrealeq-43').innerHTML = 'Correct!'
          
          document.getElementById('b-algrealeq-43').classList.add("correct")
          document.getElementById('b-algrealeq-41').classList.add("incorrect")
          document.getElementById('b-algrealeq-42').classList.add("incorrect")
          document.getElementById('b-algrealeq-44').classList.add("incorrect")
    
          document.getElementById('sa-algrealeq-4').disabled = true;
          document.getElementById('o-algrealeq-41').disabled = true;
          document.getElementById('o-algrealeq-42').disabled = true;
          document.getElementById('o-algrealeq-43').disabled = true;
          document.getElementById('o-algrealeq-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algrealeq4', 0)
        }
        if (document.getElementById('o-algrealeq-42').checked) {
          document.getElementById('r-algrealeq-42').style.color = 'red'
          document.getElementById('r-algrealeq-42').innerHTML = 'Incorrect!'
          document.getElementById('r-algrealeq-43').style.color = 'blue'
          document.getElementById('r-algrealeq-43').innerHTML = 'Correct!'
          
          document.getElementById('b-algrealeq-43').classList.add("correct")
          document.getElementById('b-algrealeq-41').classList.add("incorrect")
          document.getElementById('b-algrealeq-42').classList.add("incorrect")
          document.getElementById('b-algrealeq-44').classList.add("incorrect")
    
          document.getElementById('sa-algrealeq-4').disabled = true;
          document.getElementById('o-algrealeq-41').disabled = true;
          document.getElementById('o-algrealeq-42').disabled = true;
          document.getElementById('o-algrealeq-43').disabled = true;
          document.getElementById('o-algrealeq-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algrealeq4', 0)
        }
        if (document.getElementById('o-algrealeq-43').checked) {

          document.getElementById('r-algrealeq-43').style.color = 'blue'
          document.getElementById('r-algrealeq-43').innerHTML = 'Correct!'
          
          document.getElementById('b-algrealeq-43').classList.add("correct")
          document.getElementById('b-algrealeq-41').classList.add("incorrect")
          document.getElementById('b-algrealeq-42').classList.add("incorrect")
          document.getElementById('b-algrealeq-44').classList.add("incorrect")
    
          document.getElementById('sa-algrealeq-4').disabled = true;
          document.getElementById('o-algrealeq-41').disabled = true;
          document.getElementById('o-algrealeq-42').disabled = true;
          document.getElementById('o-algrealeq-43').disabled = true;
          document.getElementById('o-algrealeq-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algrealeq4', 1)
        }
        if (document.getElementById('o-algrealeq-44').checked) {
          document.getElementById('r-algrealeq-44').style.color = 'red'
          document.getElementById('r-algrealeq-44').innerHTML = 'Incorrect!'
          document.getElementById('r-algrealeq-43').style.color = 'blue'
          document.getElementById('r-algrealeq-43').innerHTML = 'Correct!'
          
          document.getElementById('b-algrealeq-43').classList.add("correct")
          document.getElementById('b-algrealeq-41').classList.add("incorrect")
          document.getElementById('b-algrealeq-42').classList.add("incorrect")
          document.getElementById('b-algrealeq-44').classList.add("incorrect")
    
          document.getElementById('sa-algrealeq-4').disabled = true;
          document.getElementById('o-algrealeq-41').disabled = true;
          document.getElementById('o-algrealeq-42').disabled = true;
          document.getElementById('o-algrealeq-43').disabled = true;
          document.getElementById('o-algrealeq-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algrealeq4', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algrealeq-5') != null) {
      algrealeq5But.onclick = function() {
        if (document.getElementById('o-algrealeq-51').checked) {
          document.getElementById('r-algrealeq-51').style.color = 'red'
          document.getElementById('r-algrealeq-51').innerHTML = 'Incorrect!'
          document.getElementById('r-algrealeq-53').style.color = 'blue'
          document.getElementById('r-algrealeq-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algrealeq-53').classList.add("correct")
          document.getElementById('b-algrealeq-51').classList.add("incorrect")
          document.getElementById('b-algrealeq-52').classList.add("incorrect")
          document.getElementById('b-algrealeq-54').classList.add("incorrect")
    
          document.getElementById('sa-algrealeq-5').disabled = true;
          document.getElementById('o-algrealeq-51').disabled = true;
          document.getElementById('o-algrealeq-52').disabled = true;
          document.getElementById('o-algrealeq-53').disabled = true;
          document.getElementById('o-algrealeq-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algrealeq5', 0)
        }
        if (document.getElementById('o-algrealeq-52').checked) {
          document.getElementById('r-algrealeq-52').style.color = 'red'
          document.getElementById('r-algrealeq-52').innerHTML = 'Incorrect!'
          document.getElementById('r-algrealeq-53').style.color = 'blue'
          document.getElementById('r-algrealeq-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algrealeq-53').classList.add("correct")
          document.getElementById('b-algrealeq-51').classList.add("incorrect")
          document.getElementById('b-algrealeq-52').classList.add("incorrect")
          document.getElementById('b-algrealeq-54').classList.add("incorrect")
    
          document.getElementById('sa-algrealeq-5').disabled = true;
          document.getElementById('o-algrealeq-51').disabled = true;
          document.getElementById('o-algrealeq-52').disabled = true;
          document.getElementById('o-algrealeq-53').disabled = true;
          document.getElementById('o-algrealeq-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algrealeq5', 0)
        }
        if (document.getElementById('o-algrealeq-53').checked) {
          document.getElementById('r-algrealeq-53').style.color = 'blue'
          document.getElementById('r-algrealeq-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algrealeq-53').classList.add("correct")
          document.getElementById('b-algrealeq-51').classList.add("incorrect")
          document.getElementById('b-algrealeq-52').classList.add("incorrect")
          document.getElementById('b-algrealeq-54').classList.add("incorrect")
    
          document.getElementById('sa-algrealeq-5').disabled = true;
          document.getElementById('o-algrealeq-51').disabled = true;
          document.getElementById('o-algrealeq-52').disabled = true;
          document.getElementById('o-algrealeq-53').disabled = true;
          document.getElementById('o-algrealeq-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algrealeq5', 1)
        }
        if (document.getElementById('o-algrealeq-54').checked) {
          document.getElementById('r-algrealeq-54').style.color = 'red'
          document.getElementById('r-algrealeq-54').innerHTML = 'Incorrect!'
          document.getElementById('r-algrealeq-53').style.color = 'blue'
          document.getElementById('r-algrealeq-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algrealeq-53').classList.add("correct")
          document.getElementById('b-algrealeq-51').classList.add("incorrect")
          document.getElementById('b-algrealeq-52').classList.add("incorrect")
          document.getElementById('b-algrealeq-54').classList.add("incorrect")
    
          document.getElementById('sa-algrealeq-5').disabled = true;
          document.getElementById('o-algrealeq-51').disabled = true;
          document.getElementById('o-algrealeq-52').disabled = true;
          document.getElementById('o-algrealeq-53').disabled = true;
          document.getElementById('o-algrealeq-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algrealeq5', 0)
        }
      }
    }
        
         
      if (document.getElementById('sa-algrealeq-6') != null) {
      algrealeq6But.onclick = function() {
        if (document.getElementById('o-algrealeq-61').checked) {
          document.getElementById('r-algrealeq-61').style.color = 'red'
          document.getElementById('r-algrealeq-61').innerHTML = 'Incorrect!'
          document.getElementById('r-algrealeq-64').style.color = 'blue'
          document.getElementById('r-algrealeq-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algrealeq-64').classList.add("correct")
          document.getElementById('b-algrealeq-61').classList.add("incorrect")
          document.getElementById('b-algrealeq-62').classList.add("incorrect")
          document.getElementById('b-algrealeq-63').classList.add("incorrect")
    
          document.getElementById('sa-algrealeq-6').disabled = true;
          document.getElementById('o-algrealeq-61').disabled = true;
          document.getElementById('o-algrealeq-62').disabled = true;
          document.getElementById('o-algrealeq-63').disabled = true;
          document.getElementById('o-algrealeq-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algrealeq6', 0)
        }
        if (document.getElementById('o-algrealeq-62').checked) {
          document.getElementById('r-algrealeq-62').style.color = 'red'
          document.getElementById('r-algrealeq-62').innerHTML = 'Incorrect!'
          document.getElementById('r-algrealeq-64').style.color = 'blue'
          document.getElementById('r-algrealeq-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algrealeq-64').classList.add("correct")
          document.getElementById('b-algrealeq-61').classList.add("incorrect")
          document.getElementById('b-algrealeq-62').classList.add("incorrect")
          document.getElementById('b-algrealeq-63').classList.add("incorrect")
    
          document.getElementById('sa-algrealeq-6').disabled = true;
          document.getElementById('o-algrealeq-61').disabled = true;
          document.getElementById('o-algrealeq-62').disabled = true;
          document.getElementById('o-algrealeq-63').disabled = true;
          document.getElementById('o-algrealeq-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algrealeq6', 0)
        }
        if (document.getElementById('o-algrealeq-63').checked) {
          document.getElementById('r-algrealeq-63').style.color = 'red'
          document.getElementById('r-algrealeq-63').innerHTML = 'Incorrect!'
          document.getElementById('r-algrealeq-64').style.color = 'blue'
          document.getElementById('r-algrealeq-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algrealeq-64').classList.add("correct")
          document.getElementById('b-algrealeq-61').classList.add("incorrect")
          document.getElementById('b-algrealeq-62').classList.add("incorrect")
          document.getElementById('b-algrealeq-63').classList.add("incorrect")
    
          document.getElementById('sa-algrealeq-6').disabled = true;
          document.getElementById('o-algrealeq-61').disabled = true;
          document.getElementById('o-algrealeq-62').disabled = true;
          document.getElementById('o-algrealeq-63').disabled = true;
          document.getElementById('o-algrealeq-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algrealeq6', 0)
        }
        if (document.getElementById('o-algrealeq-64').checked) {
          document.getElementById('r-algrealeq-64').style.color = 'blue'
          document.getElementById('r-algrealeq-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algrealeq-64').classList.add("correct")
          document.getElementById('b-algrealeq-61').classList.add("incorrect")
          document.getElementById('b-algrealeq-62').classList.add("incorrect")
          document.getElementById('b-algrealeq-63').classList.add("incorrect")
    
          document.getElementById('sa-algrealeq-6').disabled = true;
          document.getElementById('o-algrealeq-61').disabled = true;
          document.getElementById('o-algrealeq-62').disabled = true;
          document.getElementById('o-algrealeq-63').disabled = true;
          document.getElementById('o-algrealeq-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algrealeq6', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algrealeq-7') != null) {
      algrealeq7But.onclick = function() {
        if (document.getElementById('o-algrealeq-71').checked) {
          document.getElementById('r-algrealeq-71').style.color = 'red'
          document.getElementById('r-algrealeq-71').innerHTML = 'Incorrect!'
          document.getElementById('r-algrealeq-74').style.color = 'blue'
          document.getElementById('r-algrealeq-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algrealeq-74').classList.add("correct")
          document.getElementById('b-algrealeq-71').classList.add("incorrect")
          document.getElementById('b-algrealeq-72').classList.add("incorrect")
          document.getElementById('b-algrealeq-73').classList.add("incorrect")
    
          document.getElementById('sa-algrealeq-7').disabled = true;
          document.getElementById('o-algrealeq-71').disabled = true;
          document.getElementById('o-algrealeq-72').disabled = true;
          document.getElementById('o-algrealeq-73').disabled = true;
          document.getElementById('o-algrealeq-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algrealeq7', 0)
        }
        if (document.getElementById('o-algrealeq-72').checked) {
          document.getElementById('r-algrealeq-72').style.color = 'red'
          document.getElementById('r-algrealeq-72').innerHTML = 'Incorrect!'
          document.getElementById('r-algrealeq-74').style.color = 'blue'
          document.getElementById('r-algrealeq-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algrealeq-74').classList.add("correct")
          document.getElementById('b-algrealeq-71').classList.add("incorrect")
          document.getElementById('b-algrealeq-72').classList.add("incorrect")
          document.getElementById('b-algrealeq-73').classList.add("incorrect")
    
          document.getElementById('sa-algrealeq-7').disabled = true;
          document.getElementById('o-algrealeq-71').disabled = true;
          document.getElementById('o-algrealeq-72').disabled = true;
          document.getElementById('o-algrealeq-73').disabled = true;
          document.getElementById('o-algrealeq-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algrealeq7', 0)
        }
        if (document.getElementById('o-algrealeq-73').checked) {
          document.getElementById('r-algrealeq-73').style.color = 'red'
          document.getElementById('r-algrealeq-73').innerHTML = 'Incorrect!'
          document.getElementById('r-algrealeq-74').style.color = 'blue'
          document.getElementById('r-algrealeq-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algrealeq-74').classList.add("correct")
          document.getElementById('b-algrealeq-71').classList.add("incorrect")
          document.getElementById('b-algrealeq-72').classList.add("incorrect")
          document.getElementById('b-algrealeq-73').classList.add("incorrect")
    
          document.getElementById('sa-algrealeq-7').disabled = true;
          document.getElementById('o-algrealeq-71').disabled = true;
          document.getElementById('o-algrealeq-72').disabled = true;
          document.getElementById('o-algrealeq-73').disabled = true;
          document.getElementById('o-algrealeq-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algrealeq7', 0)
        }
        if (document.getElementById('o-algrealeq-74').checked) {
          document.getElementById('r-algrealeq-74').style.color = 'blue'
          document.getElementById('r-algrealeq-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algrealeq-74').classList.add("correct")
          document.getElementById('b-algrealeq-71').classList.add("incorrect")
          document.getElementById('b-algrealeq-72').classList.add("incorrect")
          document.getElementById('b-algrealeq-73').classList.add("incorrect")
    
          document.getElementById('sa-algrealeq-7').disabled = true;
          document.getElementById('o-algrealeq-71').disabled = true;
          document.getElementById('o-algrealeq-72').disabled = true;
          document.getElementById('o-algrealeq-73').disabled = true;
          document.getElementById('o-algrealeq-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algrealeq7', 1)
        }
      }
    }
    
    
    if (document.getElementById('sa-algrealeq-8') != null) {
      algrealeq8But.onclick = function() {
        if (document.getElementById('o-algrealeq-81').checked) {
          document.getElementById('r-algrealeq-81').style.color = 'red'
          document.getElementById('r-algrealeq-81').innerHTML = 'Incorrect!'
          document.getElementById('r-algrealeq-82').style.color = 'blue'
          document.getElementById('r-algrealeq-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algrealeq-82').classList.add("correct")
          document.getElementById('b-algrealeq-81').classList.add("incorrect")
          document.getElementById('b-algrealeq-83').classList.add("incorrect")
          document.getElementById('b-algrealeq-84').classList.add("incorrect")
    
          document.getElementById('sa-algrealeq-8').disabled = true;
          document.getElementById('o-algrealeq-81').disabled = true;
          document.getElementById('o-algrealeq-82').disabled = true;
          document.getElementById('o-algrealeq-83').disabled = true;
          document.getElementById('o-algrealeq-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algrealeq8', 0)
        }
        if (document.getElementById('o-algrealeq-82').checked) {
          document.getElementById('r-algrealeq-82').style.color = 'blue'
          document.getElementById('r-algrealeq-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algrealeq-82').classList.add("correct")
          document.getElementById('b-algrealeq-81').classList.add("incorrect")
          document.getElementById('b-algrealeq-83').classList.add("incorrect")
          document.getElementById('b-algrealeq-84').classList.add("incorrect")
    
          document.getElementById('sa-algrealeq-8').disabled = true;
          document.getElementById('o-algrealeq-81').disabled = true;
          document.getElementById('o-algrealeq-82').disabled = true;
          document.getElementById('o-algrealeq-83').disabled = true;
          document.getElementById('o-algrealeq-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algrealeq8', 1)
        }
        if (document.getElementById('o-algrealeq-83').checked) {
          document.getElementById('r-algrealeq-83').style.color = 'red'
          document.getElementById('r-algrealeq-83').innerHTML = 'Incorrect!'
          document.getElementById('r-algrealeq-82').style.color = 'blue'
          document.getElementById('r-algrealeq-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algrealeq-82').classList.add("correct")
          document.getElementById('b-algrealeq-81').classList.add("incorrect")
          document.getElementById('b-algrealeq-83').classList.add("incorrect")
          document.getElementById('b-algrealeq-84').classList.add("incorrect")
    
          document.getElementById('sa-algrealeq-8').disabled = true;
          document.getElementById('o-algrealeq-81').disabled = true;
          document.getElementById('o-algrealeq-82').disabled = true;
          document.getElementById('o-algrealeq-83').disabled = true;
          document.getElementById('o-algrealeq-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algrealeq8', 0)
        }
        if (document.getElementById('o-algrealeq-84').checked) {
          document.getElementById('r-algrealeq-84').style.color = 'red'
          document.getElementById('r-algrealeq-84').innerHTML = 'Incorrect!'
          document.getElementById('r-algrealeq-82').style.color = 'blue'
          document.getElementById('r-algrealeq-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algrealeq-82').classList.add("correct")
          document.getElementById('b-algrealeq-81').classList.add("incorrect")
          document.getElementById('b-algrealeq-83').classList.add("incorrect")
          document.getElementById('b-algrealeq-84').classList.add("incorrect")
    
          document.getElementById('sa-algrealeq-8').disabled = true;
          document.getElementById('o-algrealeq-81').disabled = true;
          document.getElementById('o-algrealeq-82').disabled = true;
          document.getElementById('o-algrealeq-83').disabled = true;
          document.getElementById('o-algrealeq-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algrealeq8', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-algrealeq-9') != null) {
      algrealeq9But.onclick = function() {
        if (document.getElementById('o-algrealeq-91').checked) {
          document.getElementById('r-algrealeq-91').style.color = 'red'
          document.getElementById('r-algrealeq-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algrealeq-94').style.color = 'blue'
          document.getElementById('r-algrealeq-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algrealeq-94').classList.add("correct")
          document.getElementById('b-algrealeq-91').classList.add("incorrect")
          document.getElementById('b-algrealeq-92').classList.add("incorrect")
          document.getElementById('b-algrealeq-93').classList.add("incorrect")
    
          document.getElementById('sa-algrealeq-9').disabled = true;
          document.getElementById('o-algrealeq-91').disabled = true;
          document.getElementById('o-algrealeq-92').disabled = true;
          document.getElementById('o-algrealeq-93').disabled = true;
          document.getElementById('o-algrealeq-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algrealeq9', 0)
        }
        if (document.getElementById('o-algrealeq-92').checked) {
          document.getElementById('r-algrealeq-91').style.color = 'red'
          document.getElementById('r-algrealeq-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algrealeq-94').style.color = 'blue'
          document.getElementById('r-algrealeq-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algrealeq-94').classList.add("correct")
          document.getElementById('b-algrealeq-91').classList.add("incorrect")
          document.getElementById('b-algrealeq-92').classList.add("incorrect")
          document.getElementById('b-algrealeq-93').classList.add("incorrect")
    
          document.getElementById('sa-algrealeq-9').disabled = true;
          document.getElementById('o-algrealeq-91').disabled = true;
          document.getElementById('o-algrealeq-92').disabled = true;
          document.getElementById('o-algrealeq-93').disabled = true;
          document.getElementById('o-algrealeq-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algrealeq9', 0)
        }
        if (document.getElementById('o-algrealeq-93').checked) {
          document.getElementById('r-algrealeq-91').style.color = 'red'
          document.getElementById('r-algrealeq-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algrealeq-94').style.color = 'blue'
          document.getElementById('r-algrealeq-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algrealeq-94').classList.add("correct")
          document.getElementById('b-algrealeq-91').classList.add("incorrect")
          document.getElementById('b-algrealeq-92').classList.add("incorrect")
          document.getElementById('b-algrealeq-93').classList.add("incorrect")
    
          document.getElementById('sa-algrealeq-9').disabled = true;
          document.getElementById('o-algrealeq-91').disabled = true;
          document.getElementById('o-algrealeq-92').disabled = true;
          document.getElementById('o-algrealeq-93').disabled = true;
          document.getElementById('o-algrealeq-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algrealeq9', 0)
        }
        if (document.getElementById('o-algrealeq-94').checked) {
          document.getElementById('r-algrealeq-94').style.color = 'blue'
          document.getElementById('r-algrealeq-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algrealeq-94').classList.add("correct")
          document.getElementById('b-algrealeq-91').classList.add("incorrect")
          document.getElementById('b-algrealeq-92').classList.add("incorrect")
          document.getElementById('b-algrealeq-93').classList.add("incorrect")
    
          document.getElementById('sa-algrealeq-9').disabled = true;
          document.getElementById('o-algrealeq-91').disabled = true;
          document.getElementById('o-algrealeq-92').disabled = true;
          document.getElementById('o-algrealeq-93').disabled = true;
          document.getElementById('o-algrealeq-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algrealeq9', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algrealeq-10') != null) {
      algrealeq10But.onclick = function() {
        if (document.getElementById('o-algrealeq-101').checked) {
          document.getElementById('r-algrealeq-101').style.color = 'red'
          document.getElementById('r-algrealeq-101').innerHTML = 'Incorrect!'
          document.getElementById('r-algrealeq-102').style.color = 'blue'
          document.getElementById('r-algrealeq-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algrealeq-102').classList.add("correct")
          document.getElementById('b-algrealeq-101').classList.add("incorrect")
          document.getElementById('b-algrealeq-103').classList.add("incorrect")
          document.getElementById('b-algrealeq-104').classList.add("incorrect")
    
          document.getElementById('sa-algrealeq-10').disabled = true;
          document.getElementById('o-algrealeq-101').disabled = true;
          document.getElementById('o-algrealeq-102').disabled = true;
          document.getElementById('o-algrealeq-103').disabled = true;
          document.getElementById('o-algrealeq-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algrealeq10', 0)
        }
        if (document.getElementById('o-algrealeq-102').checked) {
          document.getElementById('r-algrealeq-102').style.color = 'blue'
          document.getElementById('r-algrealeq-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algrealeq-102').classList.add("correct")
          document.getElementById('b-algrealeq-101').classList.add("incorrect")
          document.getElementById('b-algrealeq-103').classList.add("incorrect")
          document.getElementById('b-algrealeq-104').classList.add("incorrect")
    
          document.getElementById('sa-algrealeq-10').disabled = true;
          document.getElementById('o-algrealeq-101').disabled = true;
          document.getElementById('o-algrealeq-102').disabled = true;
          document.getElementById('o-algrealeq-103').disabled = true;
          document.getElementById('o-algrealeq-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algrealeq10', 1)
        }
        if (document.getElementById('o-algrealeq-103').checked) {
          document.getElementById('r-algrealeq-103').style.color = 'red'
          document.getElementById('r-algrealeq-103').innerHTML = 'Incorrect!'
          document.getElementById('r-algrealeq-102').style.color = 'blue'
          document.getElementById('r-algrealeq-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algrealeq-102').classList.add("correct")
          document.getElementById('b-algrealeq-101').classList.add("incorrect")
          document.getElementById('b-algrealeq-103').classList.add("incorrect")
          document.getElementById('b-algrealeq-104').classList.add("incorrect")
    
          document.getElementById('sa-algrealeq-10').disabled = true;
          document.getElementById('o-algrealeq-101').disabled = true;
          document.getElementById('o-algrealeq-102').disabled = true;
          document.getElementById('o-algrealeq-103').disabled = true;
          document.getElementById('o-algrealeq-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algrealeq10', 0)
        }
        if (document.getElementById('o-algrealeq-104').checked) {
          document.getElementById('r-algrealeq-104').style.color = 'red'
          document.getElementById('r-algrealeq-104').innerHTML = 'Incorrect!'
          document.getElementById('r-algrealeq-102').style.color = 'blue'
          document.getElementById('r-algrealeq-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algrealeq-102').classList.add("correct")
          document.getElementById('b-algrealeq-101').classList.add("incorrect")
          document.getElementById('b-algrealeq-103').classList.add("incorrect")
          document.getElementById('b-algrealeq-104').classList.add("incorrect")
    
          document.getElementById('sa-algrealeq-10').disabled = true;
          document.getElementById('o-algrealeq-101').disabled = true;
          document.getElementById('o-algrealeq-102').disabled = true;
          document.getElementById('o-algrealeq-103').disabled = true;
          document.getElementById('o-algrealeq-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algrealeq10', 0)
        }
      }
    }
    