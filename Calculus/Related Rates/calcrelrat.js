
  let calcrelrat1But = document.getElementById('sa-calcrelrat-1');
  let calcrelrat2But = document.getElementById('sa-calcrelrat-2');
  let calcrelrat3But = document.getElementById('sa-calcrelrat-3');
  let calcrelrat4But = document.getElementById('sa-calcrelrat-4');
  let calcrelrat5But = document.getElementById('sa-calcrelrat-5');
  let calcrelrat6But = document.getElementById('sa-calcrelrat-6');
  let calcrelrat7But = document.getElementById('sa-calcrelrat-7');
  let calcrelrat8But = document.getElementById('sa-calcrelrat-8');
  let calcrelrat9But = document.getElementById('sa-calcrelrat-9');
  let calcrelrat10But = document.getElementById('sa-calcrelrat-10');


  showExplanation1 = function() {
    document.getElementById('e-calcrelrat-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-calcrelrat-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-calcrelrat-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-calcrelrat-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-calcrelrat-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-calcrelrat-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-calcrelrat-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-calcrelrat-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-calcrelrat-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-calcrelrat-10').style.display = 'block';
     } 



     if (document.getElementById('sa-calcrelrat-1') != null) {
      calcrelrat1But.onclick = function () {
        if (document.getElementById('o-calcrelrat-11').checked) {
          document.getElementById('r-calcrelrat-11').style.color = 'red'
          document.getElementById('r-calcrelrat-11').innerHTML = 'Incorrect!'
          document.getElementById('r-calcrelrat-12').style.color = 'blue'
          document.getElementById('r-calcrelrat-12').innerHTML = 'Correct!'
    
          document.getElementById('b-calcrelrat-12').classList.add("correct")
          document.getElementById('b-calcrelrat-11').classList.add("incorrect")
          document.getElementById('b-calcrelrat-13').classList.add("incorrect")
          document.getElementById('b-calcrelrat-14').classList.add("incorrect")
    
          document.getElementById('sa-calcrelrat-1').disabled = true;
          document.getElementById('o-calcrelrat-11').disabled = true;
          document.getElementById('o-calcrelrat-12').disabled = true;
          document.getElementById('o-calcrelrat-13').disabled = true;
          document.getElementById('o-calcrelrat-14').disabled = true;
          showExplanation1()
          localStorage.setItem('calcrelrat1', 0)
        }
    
        if (document.getElementById('o-calcrelrat-12').checked) {
          document.getElementById('r-calcrelrat-12').style.color = 'blue'
          document.getElementById('r-calcrelrat-12').innerHTML = 'Correct!'
    
          document.getElementById('b-calcrelrat-12').classList.add("correct")
          document.getElementById('b-calcrelrat-11').classList.add("incorrect")
          document.getElementById('b-calcrelrat-13').classList.add("incorrect")
          document.getElementById('b-calcrelrat-14').classList.add("incorrect")
    
          document.getElementById('sa-calcrelrat-1').disabled = true;
          document.getElementById('o-calcrelrat-11').disabled = true;
          document.getElementById('o-calcrelrat-12').disabled = true;
          document.getElementById('o-calcrelrat-13').disabled = true;
          document.getElementById('o-calcrelrat-14').disabled = true;
          showExplanation1()
          localStorage.setItem('calcrelrat1', 1)
        }
        if (document.getElementById('o-calcrelrat-13').checked) {
          document.getElementById('r-calcrelrat-13').style.color = 'red'
          document.getElementById('r-calcrelrat-13').innerHTML = 'Incorrect!'
          document.getElementById('r-calcrelrat-12').style.color = 'blue'
          document.getElementById('r-calcrelrat-12').innerHTML = 'Correct!'
          
          document.getElementById('b-calcrelrat-12').classList.add("correct")
          document.getElementById('b-calcrelrat-11').classList.add("incorrect")
          document.getElementById('b-calcrelrat-13').classList.add("incorrect")
          document.getElementById('b-calcrelrat-14').classList.add("incorrect")
    
          document.getElementById('sa-calcrelrat-1').disabled = true;
          document.getElementById('o-calcrelrat-11').disabled = true;
          document.getElementById('o-calcrelrat-12').disabled = true;
          document.getElementById('o-calcrelrat-13').disabled = true;
          document.getElementById('o-calcrelrat-14').disabled = true;
          showExplanation1()
          localStorage.setItem('calcrelrat1', 0)
        }
        if (document.getElementById('o-calcrelrat-14').checked) {
          document.getElementById('r-calcrelrat-14').style.color = 'red'
          document.getElementById('r-calcrelrat-14').innerHTML = 'Incorrect!'
          document.getElementById('r-calcrelrat-12').style.color = 'blue'
          document.getElementById('r-calcrelrat-12').innerHTML = 'Correct!'
          
          document.getElementById('b-calcrelrat-12').classList.add("correct")
          document.getElementById('b-calcrelrat-11').classList.add("incorrect")
          document.getElementById('b-calcrelrat-13').classList.add("incorrect")
          document.getElementById('b-calcrelrat-14').classList.add("incorrect")
    
          document.getElementById('sa-calcrelrat-1').disabled = true;
          document.getElementById('o-calcrelrat-11').disabled = true;
          document.getElementById('o-calcrelrat-12').disabled = true;
          document.getElementById('o-calcrelrat-13').disabled = true;
          document.getElementById('o-calcrelrat-14').disabled = true;
          showExplanation1()
          localStorage.setItem('calcrelrat1', 0)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-calcrelrat-2') != null) {
      calcrelrat2But.onclick = function() {
        if (document.getElementById('o-calcrelrat-21').checked) {
          document.getElementById('r-calcrelrat-21').style.color = 'red'
          document.getElementById('r-calcrelrat-21').innerHTML = 'Incorrect!'
          document.getElementById('r-calcrelrat-23').style.color = 'blue'
          document.getElementById('r-calcrelrat-23').innerHTML = 'Correct!'
          
          document.getElementById('b-calcrelrat-23').classList.add("correct")
          document.getElementById('b-calcrelrat-21').classList.add("incorrect")
          document.getElementById('b-calcrelrat-22').classList.add("incorrect")
          document.getElementById('b-calcrelrat-24').classList.add("incorrect")
    
          document.getElementById('sa-calcrelrat-2').disabled = true;
          document.getElementById('o-calcrelrat-21').disabled = true;
          document.getElementById('o-calcrelrat-22').disabled = true;
          document.getElementById('o-calcrelrat-23').disabled = true;
          document.getElementById('o-calcrelrat-24').disabled = true;
          showExplanation2()
          localStorage.setItem('calcrelrat2', 0)
        }
        if (document.getElementById('o-calcrelrat-22').checked) {
          document.getElementById('r-calcrelrat-22').style.color = 'red'
          document.getElementById('r-calcrelrat-22').innerHTML = 'Incorrect!'
          document.getElementById('r-calcrelrat-23').style.color = 'blue'
          document.getElementById('r-calcrelrat-23').innerHTML = 'Correct!'
          
          document.getElementById('b-calcrelrat-23').classList.add("correct")
          document.getElementById('b-calcrelrat-21').classList.add("incorrect")
          document.getElementById('b-calcrelrat-22').classList.add("incorrect")
          document.getElementById('b-calcrelrat-24').classList.add("incorrect")
    
          document.getElementById('sa-calcrelrat-2').disabled = true;
          document.getElementById('o-calcrelrat-21').disabled = true;
          document.getElementById('o-calcrelrat-22').disabled = true;
          document.getElementById('o-calcrelrat-23').disabled = true;
          document.getElementById('o-calcrelrat-24').disabled = true;
          showExplanation2()
          localStorage.setItem('calcrelrat2', 0)
        }
        if (document.getElementById('o-calcrelrat-23').checked) {
          document.getElementById('r-calcrelrat-23').style.color = 'blue'
          document.getElementById('r-calcrelrat-23').innerHTML = 'Correct!'
          
          document.getElementById('b-calcrelrat-23').classList.add("correct")
          document.getElementById('b-calcrelrat-21').classList.add("incorrect")
          document.getElementById('b-calcrelrat-22').classList.add("incorrect")
          document.getElementById('b-calcrelrat-24').classList.add("incorrect")
    
          document.getElementById('sa-calcrelrat-2').disabled = true;
          document.getElementById('o-calcrelrat-21').disabled = true;
          document.getElementById('o-calcrelrat-22').disabled = true;
          document.getElementById('o-calcrelrat-23').disabled = true;
          document.getElementById('o-calcrelrat-24').disabled = true;
          showExplanation2()
          localStorage.setItem('calcrelrat2', 1)
        }
        if (document.getElementById('o-calcrelrat-24').checked) {
          document.getElementById('r-calcrelrat-24').style.color = 'red'
          document.getElementById('r-calcrelrat-24').innerHTML = 'Incorrect!'
          document.getElementById('r-calcrelrat-23').style.color = 'blue'
          document.getElementById('r-calcrelrat-23').innerHTML = 'Correct!'
          
          document.getElementById('b-calcrelrat-23').classList.add("correct")
          document.getElementById('b-calcrelrat-21').classList.add("incorrect")
          document.getElementById('b-calcrelrat-22').classList.add("incorrect")
          document.getElementById('b-calcrelrat-24').classList.add("incorrect")
    
          document.getElementById('sa-calcrelrat-2').disabled = true;
          document.getElementById('o-calcrelrat-21').disabled = true;
          document.getElementById('o-calcrelrat-22').disabled = true;
          document.getElementById('o-calcrelrat-23').disabled = true;
          document.getElementById('o-calcrelrat-24').disabled = true;
          showExplanation2()
          localStorage.setItem('calcrelrat2', 0)
        }
      }
    }
    
    if (document.getElementById('sa-calcrelrat-3') != null) {
      calcrelrat3But.onclick = function() {
        if (document.getElementById('o-calcrelrat-31').checked) {
          document.getElementById('r-calcrelrat-31').style.color = 'red'
          document.getElementById('r-calcrelrat-31').innerHTML = 'Incorrect!'
          document.getElementById('r-calcrelrat-32').style.color = 'blue'
          document.getElementById('r-calcrelrat-32').innerHTML = 'Correct!'
          
          document.getElementById('b-calcrelrat-32').classList.add("correct")
          document.getElementById('b-calcrelrat-31').classList.add("incorrect")
          document.getElementById('b-calcrelrat-33').classList.add("incorrect")
          document.getElementById('b-calcrelrat-34').classList.add("incorrect")
    
          document.getElementById('sa-calcrelrat-3').disabled = true;
          document.getElementById('o-calcrelrat-31').disabled = true;
          document.getElementById('o-calcrelrat-32').disabled = true;
          document.getElementById('o-calcrelrat-33').disabled = true;
          document.getElementById('o-calcrelrat-34').disabled = true;
          showExplanation3()
          localStorage.setItem('calcrelrat3', 0)
        }
        if (document.getElementById('o-calcrelrat-32').checked) {
    
          document.getElementById('r-calcrelrat-32').style.color = 'blue'
          document.getElementById('r-calcrelrat-32').innerHTML = 'Correct!'
          
          document.getElementById('b-calcrelrat-32').classList.add("correct")
          document.getElementById('b-calcrelrat-31').classList.add("incorrect")
          document.getElementById('b-calcrelrat-33').classList.add("incorrect")
          document.getElementById('b-calcrelrat-34').classList.add("incorrect")
    
          document.getElementById('sa-calcrelrat-3').disabled = true;
          document.getElementById('o-calcrelrat-31').disabled = true;
          document.getElementById('o-calcrelrat-32').disabled = true;
          document.getElementById('o-calcrelrat-33').disabled = true;
          document.getElementById('o-calcrelrat-34').disabled = true;
          showExplanation3()
          localStorage.setItem('calcrelrat3', 1)
        }
        if (document.getElementById('o-calcrelrat-33').checked) {
          document.getElementById('r-calcrelrat-33').style.color = 'red'
          document.getElementById('r-calcrelrat-33').innerHTML = 'Incorrect!'
          document.getElementById('r-calcrelrat-32').style.color = 'blue'
          document.getElementById('r-calcrelrat-32').innerHTML = 'Correct!'
          
          document.getElementById('b-calcrelrat-32').classList.add("correct")
          document.getElementById('b-calcrelrat-31').classList.add("incorrect")
          document.getElementById('b-calcrelrat-33').classList.add("incorrect")
          document.getElementById('b-calcrelrat-34').classList.add("incorrect")
    
          document.getElementById('sa-calcrelrat-3').disabled = true;
          document.getElementById('o-calcrelrat-31').disabled = true;
          document.getElementById('o-calcrelrat-32').disabled = true;
          document.getElementById('o-calcrelrat-33').disabled = true;
          document.getElementById('o-calcrelrat-34').disabled = true;
          showExplanation3()
          localStorage.setItem('calcrelrat3', 0)
        }
        if (document.getElementById('o-calcrelrat-34').checked) {
          document.getElementById('r-calcrelrat-34').style.color = 'red'
          document.getElementById('r-calcrelrat-34').innerHTML = 'Incorrect!'
          document.getElementById('r-calcrelrat-32').style.color = 'blue'
          document.getElementById('r-calcrelrat-32').innerHTML = 'Correct!'
          
          document.getElementById('b-calcrelrat-32').classList.add("correct")
          document.getElementById('b-calcrelrat-31').classList.add("incorrect")
          document.getElementById('b-calcrelrat-33').classList.add("incorrect")
          document.getElementById('b-calcrelrat-34').classList.add("incorrect")
    
          document.getElementById('sa-calcrelrat-3').disabled = true;
          document.getElementById('o-calcrelrat-31').disabled = true;
          document.getElementById('o-calcrelrat-32').disabled = true;
          document.getElementById('o-calcrelrat-33').disabled = true;
          document.getElementById('o-calcrelrat-34').disabled = true;
          showExplanation3()
          localStorage.setItem('calcrelrat3', 0)
        }
      }
    }
    
    if (document.getElementById('sa-calcrelrat-4') != null) {
      calcrelrat4But.onclick = function() {
        if (document.getElementById('o-calcrelrat-41').checked) {
          document.getElementById('r-calcrelrat-41').style.color = 'red'
          document.getElementById('r-calcrelrat-41').innerHTML = 'Incorrect!'
          document.getElementById('r-calcrelrat-44').style.color = 'blue'
          document.getElementById('r-calcrelrat-44').innerHTML = 'Correct!'
          
          document.getElementById('b-calcrelrat-44').classList.add("correct")
          document.getElementById('b-calcrelrat-41').classList.add("incorrect")
          document.getElementById('b-calcrelrat-42').classList.add("incorrect")
          document.getElementById('b-calcrelrat-43').classList.add("incorrect")
    
          document.getElementById('sa-calcrelrat-4').disabled = true;
          document.getElementById('o-calcrelrat-41').disabled = true;
          document.getElementById('o-calcrelrat-42').disabled = true;
          document.getElementById('o-calcrelrat-43').disabled = true;
          document.getElementById('o-calcrelrat-44').disabled = true;
          showExplanation4()
          localStorage.setItem('calcrelrat4', 0)
        }
        if (document.getElementById('o-calcrelrat-42').checked) {
          document.getElementById('r-calcrelrat-42').style.color = 'red'
          document.getElementById('r-calcrelrat-42').innerHTML = 'Incorrect!'
          document.getElementById('r-calcrelrat-44').style.color = 'blue'
          document.getElementById('r-calcrelrat-44').innerHTML = 'Correct!'
          
          document.getElementById('b-calcrelrat-44').classList.add("correct")
          document.getElementById('b-calcrelrat-41').classList.add("incorrect")
          document.getElementById('b-calcrelrat-42').classList.add("incorrect")
          document.getElementById('b-calcrelrat-43').classList.add("incorrect")
    
          document.getElementById('sa-calcrelrat-4').disabled = true;
          document.getElementById('o-calcrelrat-41').disabled = true;
          document.getElementById('o-calcrelrat-42').disabled = true;
          document.getElementById('o-calcrelrat-43').disabled = true;
          document.getElementById('o-calcrelrat-44').disabled = true;
          showExplanation4()
          localStorage.setItem('calcrelrat4', 0)
        }
        if (document.getElementById('o-calcrelrat-43').checked) {
          document.getElementById('r-calcrelrat-43').style.color = 'red'
          document.getElementById('r-calcrelrat-43').innerHTML = 'Incorrect!'
          document.getElementById('r-calcrelrat-44').style.color = 'blue'
          document.getElementById('r-calcrelrat-44').innerHTML = 'Correct!'
          
          document.getElementById('b-calcrelrat-44').classList.add("correct")
          document.getElementById('b-calcrelrat-41').classList.add("incorrect")
          document.getElementById('b-calcrelrat-42').classList.add("incorrect")
          document.getElementById('b-calcrelrat-43').classList.add("incorrect")
    
          document.getElementById('sa-calcrelrat-4').disabled = true;
          document.getElementById('o-calcrelrat-41').disabled = true;
          document.getElementById('o-calcrelrat-42').disabled = true;
          document.getElementById('o-calcrelrat-43').disabled = true;
          document.getElementById('o-calcrelrat-44').disabled = true;
          showExplanation4()
          localStorage.setItem('calcrelrat4', 0)
        }
        if (document.getElementById('o-calcrelrat-44').checked) {
          document.getElementById('r-calcrelrat-44').style.color = 'blue'
          document.getElementById('r-calcrelrat-44').innerHTML = 'Correct!'
          
          document.getElementById('b-calcrelrat-44').classList.add("correct")
          document.getElementById('b-calcrelrat-41').classList.add("incorrect")
          document.getElementById('b-calcrelrat-42').classList.add("incorrect")
          document.getElementById('b-calcrelrat-43').classList.add("incorrect")
    
          document.getElementById('sa-calcrelrat-4').disabled = true;
          document.getElementById('o-calcrelrat-41').disabled = true;
          document.getElementById('o-calcrelrat-42').disabled = true;
          document.getElementById('o-calcrelrat-43').disabled = true;
          document.getElementById('o-calcrelrat-44').disabled = true;
          showExplanation4()
          localStorage.setItem('calcrelrat4', 1)
        }
      }
    }
    
    if (document.getElementById('sa-calcrelrat-5') != null) {
      calcrelrat5But.onclick = function() {
        if (document.getElementById('o-calcrelrat-51').checked) {
          document.getElementById('r-calcrelrat-51').style.color = 'red'
          document.getElementById('r-calcrelrat-51').innerHTML = 'Incorrect!'
          document.getElementById('r-calcrelrat-53').style.color = 'blue'
          document.getElementById('r-calcrelrat-53').innerHTML = 'Correct!'
          
          document.getElementById('b-calcrelrat-53').classList.add("correct")
          document.getElementById('b-calcrelrat-51').classList.add("incorrect")
          document.getElementById('b-calcrelrat-52').classList.add("incorrect")
          document.getElementById('b-calcrelrat-54').classList.add("incorrect")
    
          document.getElementById('sa-calcrelrat-5').disabled = true;
          document.getElementById('o-calcrelrat-51').disabled = true;
          document.getElementById('o-calcrelrat-52').disabled = true;
          document.getElementById('o-calcrelrat-53').disabled = true;
          document.getElementById('o-calcrelrat-54').disabled = true;
          showExplanation5()
          localStorage.setItem('calcrelrat5', 0)
        }
        if (document.getElementById('o-calcrelrat-52').checked) {
          document.getElementById('r-calcrelrat-52').style.color = 'red'
          document.getElementById('r-calcrelrat-52').innerHTML = 'Incorrect!'
          document.getElementById('r-calcrelrat-53').style.color = 'blue'
          document.getElementById('r-calcrelrat-53').innerHTML = 'Correct!'
          
          document.getElementById('b-calcrelrat-53').classList.add("correct")
          document.getElementById('b-calcrelrat-51').classList.add("incorrect")
          document.getElementById('b-calcrelrat-52').classList.add("incorrect")
          document.getElementById('b-calcrelrat-54').classList.add("incorrect")
    
          document.getElementById('sa-calcrelrat-5').disabled = true;
          document.getElementById('o-calcrelrat-51').disabled = true;
          document.getElementById('o-calcrelrat-52').disabled = true;
          document.getElementById('o-calcrelrat-53').disabled = true;
          document.getElementById('o-calcrelrat-54').disabled = true;
          showExplanation5()
          localStorage.setItem('calcrelrat5', 0)
        }
        if (document.getElementById('o-calcrelrat-53').checked) {
          document.getElementById('r-calcrelrat-53').style.color = 'blue'
          document.getElementById('r-calcrelrat-53').innerHTML = 'Correct!'
          
          document.getElementById('b-calcrelrat-53').classList.add("correct")
          document.getElementById('b-calcrelrat-51').classList.add("incorrect")
          document.getElementById('b-calcrelrat-52').classList.add("incorrect")
          document.getElementById('b-calcrelrat-54').classList.add("incorrect")
    
          document.getElementById('sa-calcrelrat-5').disabled = true;
          document.getElementById('o-calcrelrat-51').disabled = true;
          document.getElementById('o-calcrelrat-52').disabled = true;
          document.getElementById('o-calcrelrat-53').disabled = true;
          document.getElementById('o-calcrelrat-54').disabled = true;
          showExplanation5()
          localStorage.setItem('calcrelrat5', 1)
        }
        if (document.getElementById('o-calcrelrat-54').checked) {
          document.getElementById('r-calcrelrat-54').style.color = 'red'
          document.getElementById('r-calcrelrat-54').innerHTML = 'Incorrect!'
          document.getElementById('r-calcrelrat-53').style.color = 'blue'
          document.getElementById('r-calcrelrat-53').innerHTML = 'Correct!'
          
          document.getElementById('b-calcrelrat-53').classList.add("correct")
          document.getElementById('b-calcrelrat-51').classList.add("incorrect")
          document.getElementById('b-calcrelrat-52').classList.add("incorrect")
          document.getElementById('b-calcrelrat-54').classList.add("incorrect")
    
          document.getElementById('sa-calcrelrat-5').disabled = true;
          document.getElementById('o-calcrelrat-51').disabled = true;
          document.getElementById('o-calcrelrat-52').disabled = true;
          document.getElementById('o-calcrelrat-53').disabled = true;
          document.getElementById('o-calcrelrat-54').disabled = true;
          showExplanation5()
          localStorage.setItem('calcrelrat5', 0)
        }
      }
    }
        
         
      if (document.getElementById('sa-calcrelrat-6') != null) {
      calcrelrat6But.onclick = function() {
        if (document.getElementById('o-calcrelrat-61').checked) {
          document.getElementById('r-calcrelrat-61').style.color = 'red'
          document.getElementById('r-calcrelrat-61').innerHTML = 'Incorrect!'
          document.getElementById('r-calcrelrat-64').style.color = 'blue'
          document.getElementById('r-calcrelrat-64').innerHTML = 'Correct!'
          
          document.getElementById('b-calcrelrat-64').classList.add("correct")
          document.getElementById('b-calcrelrat-61').classList.add("incorrect")
          document.getElementById('b-calcrelrat-62').classList.add("incorrect")
          document.getElementById('b-calcrelrat-63').classList.add("incorrect")
    
          document.getElementById('sa-calcrelrat-6').disabled = true;
          document.getElementById('o-calcrelrat-61').disabled = true;
          document.getElementById('o-calcrelrat-62').disabled = true;
          document.getElementById('o-calcrelrat-63').disabled = true;
          document.getElementById('o-calcrelrat-64').disabled = true;
          showExplanation6()
          localStorage.setItem('calcrelrat6', 0)
        }
        if (document.getElementById('o-calcrelrat-62').checked) {
          document.getElementById('r-calcrelrat-62').style.color = 'red'
          document.getElementById('r-calcrelrat-62').innerHTML = 'Incorrect!'
          document.getElementById('r-calcrelrat-64').style.color = 'blue'
          document.getElementById('r-calcrelrat-64').innerHTML = 'Correct!'
          
          document.getElementById('b-calcrelrat-64').classList.add("correct")
          document.getElementById('b-calcrelrat-61').classList.add("incorrect")
          document.getElementById('b-calcrelrat-62').classList.add("incorrect")
          document.getElementById('b-calcrelrat-63').classList.add("incorrect")
    
          document.getElementById('sa-calcrelrat-6').disabled = true;
          document.getElementById('o-calcrelrat-61').disabled = true;
          document.getElementById('o-calcrelrat-62').disabled = true;
          document.getElementById('o-calcrelrat-63').disabled = true;
          document.getElementById('o-calcrelrat-64').disabled = true;
          showExplanation6()
          localStorage.setItem('calcrelrat6', 0)
        }
        if (document.getElementById('o-calcrelrat-63').checked) {
          document.getElementById('r-calcrelrat-63').style.color = 'red'
          document.getElementById('r-calcrelrat-63').innerHTML = 'Incorrect!'
          document.getElementById('r-calcrelrat-64').style.color = 'blue'
          document.getElementById('r-calcrelrat-64').innerHTML = 'Correct!'
          
          document.getElementById('b-calcrelrat-64').classList.add("correct")
          document.getElementById('b-calcrelrat-61').classList.add("incorrect")
          document.getElementById('b-calcrelrat-62').classList.add("incorrect")
          document.getElementById('b-calcrelrat-63').classList.add("incorrect")
    
          document.getElementById('sa-calcrelrat-6').disabled = true;
          document.getElementById('o-calcrelrat-61').disabled = true;
          document.getElementById('o-calcrelrat-62').disabled = true;
          document.getElementById('o-calcrelrat-63').disabled = true;
          document.getElementById('o-calcrelrat-64').disabled = true;
          showExplanation6()
          localStorage.setItem('calcrelrat6', 0)
        }
        if (document.getElementById('o-calcrelrat-64').checked) {
          document.getElementById('r-calcrelrat-64').style.color = 'blue'
          document.getElementById('r-calcrelrat-64').innerHTML = 'Correct!'
          
          document.getElementById('b-calcrelrat-64').classList.add("correct")
          document.getElementById('b-calcrelrat-61').classList.add("incorrect")
          document.getElementById('b-calcrelrat-62').classList.add("incorrect")
          document.getElementById('b-calcrelrat-63').classList.add("incorrect")
    
          document.getElementById('sa-calcrelrat-6').disabled = true;
          document.getElementById('o-calcrelrat-61').disabled = true;
          document.getElementById('o-calcrelrat-62').disabled = true;
          document.getElementById('o-calcrelrat-63').disabled = true;
          document.getElementById('o-calcrelrat-64').disabled = true;
          showExplanation6()
          localStorage.setItem('calcrelrat6', 1)
        }
      }
    }
    
    if (document.getElementById('sa-calcrelrat-7') != null) {
      calcrelrat7But.onclick = function() {
        if (document.getElementById('o-calcrelrat-71').checked) {
          document.getElementById('r-calcrelrat-71').style.color = 'red'
          document.getElementById('r-calcrelrat-71').innerHTML = 'Incorrect!'
          document.getElementById('r-calcrelrat-74').style.color = 'blue'
          document.getElementById('r-calcrelrat-74').innerHTML = 'Correct!'
          
          document.getElementById('b-calcrelrat-74').classList.add("correct")
          document.getElementById('b-calcrelrat-71').classList.add("incorrect")
          document.getElementById('b-calcrelrat-72').classList.add("incorrect")
          document.getElementById('b-calcrelrat-73').classList.add("incorrect")
    
          document.getElementById('sa-calcrelrat-7').disabled = true;
          document.getElementById('o-calcrelrat-71').disabled = true;
          document.getElementById('o-calcrelrat-72').disabled = true;
          document.getElementById('o-calcrelrat-73').disabled = true;
          document.getElementById('o-calcrelrat-74').disabled = true;
          showExplanation7()
          localStorage.setItem('calcrelrat7', 0)
        }
        if (document.getElementById('o-calcrelrat-72').checked) {
          document.getElementById('r-calcrelrat-72').style.color = 'red'
          document.getElementById('r-calcrelrat-72').innerHTML = 'Incorrect!'
          document.getElementById('r-calcrelrat-74').style.color = 'blue'
          document.getElementById('r-calcrelrat-74').innerHTML = 'Correct!'
          
          document.getElementById('b-calcrelrat-74').classList.add("correct")
          document.getElementById('b-calcrelrat-71').classList.add("incorrect")
          document.getElementById('b-calcrelrat-72').classList.add("incorrect")
          document.getElementById('b-calcrelrat-73').classList.add("incorrect")
    
          document.getElementById('sa-calcrelrat-7').disabled = true;
          document.getElementById('o-calcrelrat-71').disabled = true;
          document.getElementById('o-calcrelrat-72').disabled = true;
          document.getElementById('o-calcrelrat-73').disabled = true;
          document.getElementById('o-calcrelrat-74').disabled = true;
          showExplanation7()
          localStorage.setItem('calcrelrat7', 0)
        }
        if (document.getElementById('o-calcrelrat-73').checked) {
          document.getElementById('r-calcrelrat-73').style.color = 'red'
          document.getElementById('r-calcrelrat-73').innerHTML = 'Incorrect!'
          document.getElementById('r-calcrelrat-74').style.color = 'blue'
          document.getElementById('r-calcrelrat-74').innerHTML = 'Correct!'
          
          document.getElementById('b-calcrelrat-74').classList.add("correct")
          document.getElementById('b-calcrelrat-71').classList.add("incorrect")
          document.getElementById('b-calcrelrat-72').classList.add("incorrect")
          document.getElementById('b-calcrelrat-73').classList.add("incorrect")
    
          document.getElementById('sa-calcrelrat-7').disabled = true;
          document.getElementById('o-calcrelrat-71').disabled = true;
          document.getElementById('o-calcrelrat-72').disabled = true;
          document.getElementById('o-calcrelrat-73').disabled = true;
          document.getElementById('o-calcrelrat-74').disabled = true;
          showExplanation7()
          localStorage.setItem('calcrelrat7', 0)
        }
        if (document.getElementById('o-calcrelrat-74').checked) {
          document.getElementById('r-calcrelrat-74').style.color = 'blue'
          document.getElementById('r-calcrelrat-74').innerHTML = 'Correct!'
          
          document.getElementById('b-calcrelrat-74').classList.add("correct")
          document.getElementById('b-calcrelrat-71').classList.add("incorrect")
          document.getElementById('b-calcrelrat-72').classList.add("incorrect")
          document.getElementById('b-calcrelrat-73').classList.add("incorrect")
    
          document.getElementById('sa-calcrelrat-7').disabled = true;
          document.getElementById('o-calcrelrat-71').disabled = true;
          document.getElementById('o-calcrelrat-72').disabled = true;
          document.getElementById('o-calcrelrat-73').disabled = true;
          document.getElementById('o-calcrelrat-74').disabled = true;
          showExplanation7()
          localStorage.setItem('calcrelrat7', 1)
        }
      }
    }
    
    
    if (document.getElementById('sa-calcrelrat-8') != null) {
      calcrelrat8But.onclick = function() {
        if (document.getElementById('o-calcrelrat-81').checked) {
          document.getElementById('r-calcrelrat-81').style.color = 'red'
          document.getElementById('r-calcrelrat-81').innerHTML = 'Incorrect!'
          document.getElementById('r-calcrelrat-82').style.color = 'blue'
          document.getElementById('r-calcrelrat-82').innerHTML = 'Correct!'
          
          document.getElementById('b-calcrelrat-82').classList.add("correct")
          document.getElementById('b-calcrelrat-81').classList.add("incorrect")
          document.getElementById('b-calcrelrat-83').classList.add("incorrect")
          document.getElementById('b-calcrelrat-84').classList.add("incorrect")
    
          document.getElementById('sa-calcrelrat-8').disabled = true;
          document.getElementById('o-calcrelrat-81').disabled = true;
          document.getElementById('o-calcrelrat-82').disabled = true;
          document.getElementById('o-calcrelrat-83').disabled = true;
          document.getElementById('o-calcrelrat-84').disabled = true;
          showExplanation8()
          localStorage.setItem('calcrelrat8', 0)
        }
        if (document.getElementById('o-calcrelrat-82').checked) {
          document.getElementById('r-calcrelrat-82').style.color = 'blue'
          document.getElementById('r-calcrelrat-82').innerHTML = 'Correct!'
          
          document.getElementById('b-calcrelrat-82').classList.add("correct")
          document.getElementById('b-calcrelrat-81').classList.add("incorrect")
          document.getElementById('b-calcrelrat-83').classList.add("incorrect")
          document.getElementById('b-calcrelrat-84').classList.add("incorrect")
    
          document.getElementById('sa-calcrelrat-8').disabled = true;
          document.getElementById('o-calcrelrat-81').disabled = true;
          document.getElementById('o-calcrelrat-82').disabled = true;
          document.getElementById('o-calcrelrat-83').disabled = true;
          document.getElementById('o-calcrelrat-84').disabled = true;
          showExplanation8()
          localStorage.setItem('calcrelrat8', 1)
        }
        if (document.getElementById('o-calcrelrat-83').checked) {
          document.getElementById('r-calcrelrat-83').style.color = 'red'
          document.getElementById('r-calcrelrat-83').innerHTML = 'Incorrect!'
          document.getElementById('r-calcrelrat-82').style.color = 'blue'
          document.getElementById('r-calcrelrat-82').innerHTML = 'Correct!'
          
          document.getElementById('b-calcrelrat-82').classList.add("correct")
          document.getElementById('b-calcrelrat-81').classList.add("incorrect")
          document.getElementById('b-calcrelrat-83').classList.add("incorrect")
          document.getElementById('b-calcrelrat-84').classList.add("incorrect")
    
          document.getElementById('sa-calcrelrat-8').disabled = true;
          document.getElementById('o-calcrelrat-81').disabled = true;
          document.getElementById('o-calcrelrat-82').disabled = true;
          document.getElementById('o-calcrelrat-83').disabled = true;
          document.getElementById('o-calcrelrat-84').disabled = true;
          showExplanation8()
          localStorage.setItem('calcrelrat8', 0)
        }
        if (document.getElementById('o-calcrelrat-84').checked) {
          document.getElementById('r-calcrelrat-84').style.color = 'red'
          document.getElementById('r-calcrelrat-84').innerHTML = 'Incorrect!'
          document.getElementById('r-calcrelrat-82').style.color = 'blue'
          document.getElementById('r-calcrelrat-82').innerHTML = 'Correct!'
          
          document.getElementById('b-calcrelrat-82').classList.add("correct")
          document.getElementById('b-calcrelrat-81').classList.add("incorrect")
          document.getElementById('b-calcrelrat-83').classList.add("incorrect")
          document.getElementById('b-calcrelrat-84').classList.add("incorrect")
    
          document.getElementById('sa-calcrelrat-8').disabled = true;
          document.getElementById('o-calcrelrat-81').disabled = true;
          document.getElementById('o-calcrelrat-82').disabled = true;
          document.getElementById('o-calcrelrat-83').disabled = true;
          document.getElementById('o-calcrelrat-84').disabled = true;
          showExplanation8()
          localStorage.setItem('calcrelrat8', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-calcrelrat-9') != null) {
      calcrelrat9But.onclick = function() {
        if (document.getElementById('o-calcrelrat-91').checked) {
          document.getElementById('r-calcrelrat-91').style.color = 'red'
          document.getElementById('r-calcrelrat-91').innerHTML = 'Incorrect!'
          document.getElementById('r-calcrelrat-94').style.color = 'blue'
          document.getElementById('r-calcrelrat-94').innerHTML = 'Correct!'
          
          document.getElementById('b-calcrelrat-94').classList.add("correct")
          document.getElementById('b-calcrelrat-91').classList.add("incorrect")
          document.getElementById('b-calcrelrat-92').classList.add("incorrect")
          document.getElementById('b-calcrelrat-93').classList.add("incorrect")
    
          document.getElementById('sa-calcrelrat-9').disabled = true;
          document.getElementById('o-calcrelrat-91').disabled = true;
          document.getElementById('o-calcrelrat-92').disabled = true;
          document.getElementById('o-calcrelrat-93').disabled = true;
          document.getElementById('o-calcrelrat-94').disabled = true;
          showExplanation9()
          localStorage.setItem('calcrelrat9', 0)
        }
        if (document.getElementById('o-calcrelrat-92').checked) {
          document.getElementById('r-calcrelrat-91').style.color = 'red'
          document.getElementById('r-calcrelrat-91').innerHTML = 'Incorrect!'
          document.getElementById('r-calcrelrat-94').style.color = 'blue'
          document.getElementById('r-calcrelrat-94').innerHTML = 'Correct!'
          
          document.getElementById('b-calcrelrat-94').classList.add("correct")
          document.getElementById('b-calcrelrat-91').classList.add("incorrect")
          document.getElementById('b-calcrelrat-92').classList.add("incorrect")
          document.getElementById('b-calcrelrat-93').classList.add("incorrect")
    
          document.getElementById('sa-calcrelrat-9').disabled = true;
          document.getElementById('o-calcrelrat-91').disabled = true;
          document.getElementById('o-calcrelrat-92').disabled = true;
          document.getElementById('o-calcrelrat-93').disabled = true;
          document.getElementById('o-calcrelrat-94').disabled = true;
          showExplanation9()
          localStorage.setItem('calcrelrat9', 0)
        }
        if (document.getElementById('o-calcrelrat-93').checked) {
          document.getElementById('r-calcrelrat-91').style.color = 'red'
          document.getElementById('r-calcrelrat-91').innerHTML = 'Incorrect!'
          document.getElementById('r-calcrelrat-94').style.color = 'blue'
          document.getElementById('r-calcrelrat-94').innerHTML = 'Correct!'
          
          document.getElementById('b-calcrelrat-94').classList.add("correct")
          document.getElementById('b-calcrelrat-91').classList.add("incorrect")
          document.getElementById('b-calcrelrat-92').classList.add("incorrect")
          document.getElementById('b-calcrelrat-93').classList.add("incorrect")
    
          document.getElementById('sa-calcrelrat-9').disabled = true;
          document.getElementById('o-calcrelrat-91').disabled = true;
          document.getElementById('o-calcrelrat-92').disabled = true;
          document.getElementById('o-calcrelrat-93').disabled = true;
          document.getElementById('o-calcrelrat-94').disabled = true;
          showExplanation9()
          localStorage.setItem('calcrelrat9', 0)
        }
        if (document.getElementById('o-calcrelrat-94').checked) {
          document.getElementById('r-calcrelrat-94').style.color = 'blue'
          document.getElementById('r-calcrelrat-94').innerHTML = 'Correct!'
          
          document.getElementById('b-calcrelrat-94').classList.add("correct")
          document.getElementById('b-calcrelrat-91').classList.add("incorrect")
          document.getElementById('b-calcrelrat-92').classList.add("incorrect")
          document.getElementById('b-calcrelrat-93').classList.add("incorrect")
    
          document.getElementById('sa-calcrelrat-9').disabled = true;
          document.getElementById('o-calcrelrat-91').disabled = true;
          document.getElementById('o-calcrelrat-92').disabled = true;
          document.getElementById('o-calcrelrat-93').disabled = true;
          document.getElementById('o-calcrelrat-94').disabled = true;
          showExplanation9()
          localStorage.setItem('calcrelrat9', 1)
        }
      }
    }
    
    if (document.getElementById('sa-calcrelrat-10') != null) {
      calcrelrat10But.onclick = function() {
        if (document.getElementById('o-calcrelrat-101').checked) {
          document.getElementById('r-calcrelrat-101').style.color = 'red'
          document.getElementById('r-calcrelrat-101').innerHTML = 'Incorrect!'
          document.getElementById('r-calcrelrat-102').style.color = 'blue'
          document.getElementById('r-calcrelrat-102').innerHTML = 'Correct!'
          
          document.getElementById('b-calcrelrat-102').classList.add("correct")
          document.getElementById('b-calcrelrat-101').classList.add("incorrect")
          document.getElementById('b-calcrelrat-103').classList.add("incorrect")
          document.getElementById('b-calcrelrat-104').classList.add("incorrect")
    
          document.getElementById('sa-calcrelrat-10').disabled = true;
          document.getElementById('o-calcrelrat-101').disabled = true;
          document.getElementById('o-calcrelrat-102').disabled = true;
          document.getElementById('o-calcrelrat-103').disabled = true;
          document.getElementById('o-calcrelrat-104').disabled = true;
          showExplanation10()
          localStorage.setItem('calcrelrat10', 0)
        }
        if (document.getElementById('o-calcrelrat-102').checked) {
          document.getElementById('r-calcrelrat-102').style.color = 'blue'
          document.getElementById('r-calcrelrat-102').innerHTML = 'Correct!'
          
          document.getElementById('b-calcrelrat-102').classList.add("correct")
          document.getElementById('b-calcrelrat-101').classList.add("incorrect")
          document.getElementById('b-calcrelrat-103').classList.add("incorrect")
          document.getElementById('b-calcrelrat-104').classList.add("incorrect")
    
          document.getElementById('sa-calcrelrat-10').disabled = true;
          document.getElementById('o-calcrelrat-101').disabled = true;
          document.getElementById('o-calcrelrat-102').disabled = true;
          document.getElementById('o-calcrelrat-103').disabled = true;
          document.getElementById('o-calcrelrat-104').disabled = true;
          showExplanation10()
          localStorage.setItem('calcrelrat10', 1)
        }
        if (document.getElementById('o-calcrelrat-103').checked) {
          document.getElementById('r-calcrelrat-103').style.color = 'red'
          document.getElementById('r-calcrelrat-103').innerHTML = 'Incorrect!'
          document.getElementById('r-calcrelrat-102').style.color = 'blue'
          document.getElementById('r-calcrelrat-102').innerHTML = 'Correct!'
          
          document.getElementById('b-calcrelrat-102').classList.add("correct")
          document.getElementById('b-calcrelrat-101').classList.add("incorrect")
          document.getElementById('b-calcrelrat-103').classList.add("incorrect")
          document.getElementById('b-calcrelrat-104').classList.add("incorrect")
    
          document.getElementById('sa-calcrelrat-10').disabled = true;
          document.getElementById('o-calcrelrat-101').disabled = true;
          document.getElementById('o-calcrelrat-102').disabled = true;
          document.getElementById('o-calcrelrat-103').disabled = true;
          document.getElementById('o-calcrelrat-104').disabled = true;
          showExplanation10()
          localStorage.setItem('calcrelrat10', 0)
        }
        if (document.getElementById('o-calcrelrat-104').checked) {
          document.getElementById('r-calcrelrat-104').style.color = 'red'
          document.getElementById('r-calcrelrat-104').innerHTML = 'Incorrect!'
          document.getElementById('r-calcrelrat-102').style.color = 'blue'
          document.getElementById('r-calcrelrat-102').innerHTML = 'Correct!'
          
          document.getElementById('b-calcrelrat-102').classList.add("correct")
          document.getElementById('b-calcrelrat-101').classList.add("incorrect")
          document.getElementById('b-calcrelrat-103').classList.add("incorrect")
          document.getElementById('b-calcrelrat-104').classList.add("incorrect")
    
          document.getElementById('sa-calcrelrat-10').disabled = true;
          document.getElementById('o-calcrelrat-101').disabled = true;
          document.getElementById('o-calcrelrat-102').disabled = true;
          document.getElementById('o-calcrelrat-103').disabled = true;
          document.getElementById('o-calcrelrat-104').disabled = true;
          showExplanation10()
          localStorage.setItem('calcrelrat10', 0)
        }
      }
    }
    