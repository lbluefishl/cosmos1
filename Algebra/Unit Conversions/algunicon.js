
  let algunicon1But = document.getElementById('sa-algunicon-1');
  let algunicon2But = document.getElementById('sa-algunicon-2');
  let algunicon3But = document.getElementById('sa-algunicon-3');
  let algunicon4But = document.getElementById('sa-algunicon-4');
  let algunicon5But = document.getElementById('sa-algunicon-5');
  let algunicon6But = document.getElementById('sa-algunicon-6');
  let algunicon7But = document.getElementById('sa-algunicon-7');
  let algunicon8But = document.getElementById('sa-algunicon-8');
  let algunicon9But = document.getElementById('sa-algunicon-9');
  let algunicon10But = document.getElementById('sa-algunicon-10');


  showExplanation1 = function() {
    document.getElementById('e-algunicon-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-algunicon-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-algunicon-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-algunicon-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-algunicon-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-algunicon-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-algunicon-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-algunicon-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-algunicon-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-algunicon-10').style.display = 'block';
     } 



     if (document.getElementById('sa-algunicon-1') != null) {
      algunicon1But.onclick = function () {
        if (document.getElementById('o-algunicon-11').checked) {
          document.getElementById('r-algunicon-11').style.color = 'red'
          document.getElementById('r-algunicon-11').innerHTML = 'Incorrect!'
          document.getElementById('r-algunicon-13').style.color = 'blue'
          document.getElementById('r-algunicon-13').innerHTML = 'Correct!'
    
          document.getElementById('b-algunicon-13').classList.add("correct")
          document.getElementById('b-algunicon-12').classList.add("incorrect")
          document.getElementById('b-algunicon-11').classList.add("incorrect")
          document.getElementById('b-algunicon-14').classList.add("incorrect")
    
          document.getElementById('sa-algunicon-1').disabled = true;
          document.getElementById('o-algunicon-11').disabled = true;
          document.getElementById('o-algunicon-12').disabled = true;
          document.getElementById('o-algunicon-13').disabled = true;
          document.getElementById('o-algunicon-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algunicon1', 0)
        }
    
        if (document.getElementById('o-algunicon-12').checked) {
         
          document.getElementById('r-algunicon-12').style.color = 'red'
          document.getElementById('r-algunicon-12').innerHTML = 'Incorrect!'
          document.getElementById('r-algunicon-13').style.color = 'blue'
          document.getElementById('r-algunicon-13').innerHTML = 'Correct!'
    
          document.getElementById('b-algunicon-13').classList.add("correct")
          document.getElementById('b-algunicon-12').classList.add("incorrect")
          document.getElementById('b-algunicon-11').classList.add("incorrect")
          document.getElementById('b-algunicon-14').classList.add("incorrect")
    
          document.getElementById('sa-algunicon-1').disabled = true;
          document.getElementById('o-algunicon-11').disabled = true;
          document.getElementById('o-algunicon-12').disabled = true;
          document.getElementById('o-algunicon-13').disabled = true;
          document.getElementById('o-algunicon-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algunicon1', 0)
        }
        if (document.getElementById('o-algunicon-13').checked) {
          document.getElementById('r-algunicon-13').style.color = 'blue'
          document.getElementById('r-algunicon-13').innerHTML = 'Correct!'
          
          document.getElementById('b-algunicon-13').classList.add("correct")
          document.getElementById('b-algunicon-12').classList.add("incorrect")
          document.getElementById('b-algunicon-11').classList.add("incorrect")
          document.getElementById('b-algunicon-14').classList.add("incorrect")
    
          document.getElementById('sa-algunicon-1').disabled = true;
          document.getElementById('o-algunicon-11').disabled = true;
          document.getElementById('o-algunicon-12').disabled = true;
          document.getElementById('o-algunicon-13').disabled = true;
          document.getElementById('o-algunicon-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algunicon1', 1)
        }
        if (document.getElementById('o-algunicon-14').checked) {
          document.getElementById('r-algunicon-14').style.color = 'red'
          document.getElementById('r-algunicon-14').innerHTML = 'Incorrect!'
          document.getElementById('r-algunicon-13').style.color = 'blue'
          document.getElementById('r-algunicon-13').innerHTML = 'Correct!'
          
          document.getElementById('b-algunicon-13').classList.add("correct")
          document.getElementById('b-algunicon-12').classList.add("incorrect")
          document.getElementById('b-algunicon-11').classList.add("incorrect")
          document.getElementById('b-algunicon-14').classList.add("incorrect")
    
          document.getElementById('sa-algunicon-1').disabled = true;
          document.getElementById('o-algunicon-11').disabled = true;
          document.getElementById('o-algunicon-12').disabled = true;
          document.getElementById('o-algunicon-13').disabled = true;
          document.getElementById('o-algunicon-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algunicon1', 0)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-algunicon-2') != null) {
      algunicon2But.onclick = function() {
        if (document.getElementById('o-algunicon-21').checked) {
          document.getElementById('r-algunicon-21').style.color = 'red'
          document.getElementById('r-algunicon-21').innerHTML = 'Incorrect!'
          document.getElementById('r-algunicon-24').style.color = 'blue'
          document.getElementById('r-algunicon-24').innerHTML = 'Correct!'
          
          document.getElementById('b-algunicon-24').classList.add("correct")
          document.getElementById('b-algunicon-21').classList.add("incorrect")
          document.getElementById('b-algunicon-23').classList.add("incorrect")
          document.getElementById('b-algunicon-24').classList.add("incorrect")
    
          document.getElementById('sa-algunicon-2').disabled = true;
          document.getElementById('o-algunicon-21').disabled = true;
          document.getElementById('o-algunicon-22').disabled = true;
          document.getElementById('o-algunicon-23').disabled = true;
          document.getElementById('o-algunicon-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algunicon2', 0)
        }
        if (document.getElementById('o-algunicon-22').checked) {
          document.getElementById('r-algunicon-22').style.color = 'red'
          document.getElementById('r-algunicon-22').innerHTML = 'Incorrect!'
          document.getElementById('r-algunicon-24').style.color = 'blue'
          document.getElementById('r-algunicon-24').innerHTML = 'Correct!'
          
          document.getElementById('b-algunicon-24').classList.add("correct")
          document.getElementById('b-algunicon-21').classList.add("incorrect")
          document.getElementById('b-algunicon-23').classList.add("incorrect")
          document.getElementById('b-algunicon-24').classList.add("incorrect")
    
          document.getElementById('sa-algunicon-2').disabled = true;
          document.getElementById('o-algunicon-21').disabled = true;
          document.getElementById('o-algunicon-22').disabled = true;
          document.getElementById('o-algunicon-23').disabled = true;
          document.getElementById('o-algunicon-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algunicon2', 0)
        }
        if (document.getElementById('o-algunicon-23').checked) {
          document.getElementById('r-algunicon-23').style.color = 'red'
          document.getElementById('r-algunicon-23').innerHTML = 'Incorrect!'
          document.getElementById('r-algunicon-24').style.color = 'blue'
          document.getElementById('r-algunicon-24').innerHTML = 'Correct!'
          
          document.getElementById('b-algunicon-24').classList.add("correct")
          document.getElementById('b-algunicon-21').classList.add("incorrect")
          document.getElementById('b-algunicon-23').classList.add("incorrect")
          document.getElementById('b-algunicon-24').classList.add("incorrect")
    
          document.getElementById('sa-algunicon-2').disabled = true;
          document.getElementById('o-algunicon-21').disabled = true;
          document.getElementById('o-algunicon-22').disabled = true;
          document.getElementById('o-algunicon-23').disabled = true;
          document.getElementById('o-algunicon-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algunicon2', 0)
        }
        if (document.getElementById('o-algunicon-24').checked) {
          document.getElementById('r-algunicon-24').style.color = 'blue'
          document.getElementById('r-algunicon-24').innerHTML = 'Correct!'
          
          document.getElementById('b-algunicon-24').classList.add("correct")
          document.getElementById('b-algunicon-21').classList.add("incorrect")
          document.getElementById('b-algunicon-23').classList.add("incorrect")
          document.getElementById('b-algunicon-24').classList.add("incorrect")
    
          document.getElementById('sa-algunicon-2').disabled = true;
          document.getElementById('o-algunicon-21').disabled = true;
          document.getElementById('o-algunicon-22').disabled = true;
          document.getElementById('o-algunicon-23').disabled = true;
          document.getElementById('o-algunicon-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algunicon2', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algunicon-3') != null) {
      algunicon3But.onclick = function() {
        if (document.getElementById('o-algunicon-31').checked) {
          document.getElementById('r-algunicon-31').style.color = 'red'
          document.getElementById('r-algunicon-31').innerHTML = 'Incorrect!'
          document.getElementById('r-algunicon-34').style.color = 'blue'
          document.getElementById('r-algunicon-34').innerHTML = 'Correct!'
          
          document.getElementById('b-algunicon-34').classList.add("correct")
          document.getElementById('b-algunicon-31').classList.add("incorrect")
          document.getElementById('b-algunicon-33').classList.add("incorrect")
          document.getElementById('b-algunicon-32').classList.add("incorrect")
    
          document.getElementById('sa-algunicon-3').disabled = true;
          document.getElementById('o-algunicon-31').disabled = true;
          document.getElementById('o-algunicon-32').disabled = true;
          document.getElementById('o-algunicon-33').disabled = true;
          document.getElementById('o-algunicon-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algunicon3', 0)
        }
        if (document.getElementById('o-algunicon-32').checked) {
          document.getElementById('r-algunicon-32').style.color = 'red'
          document.getElementById('r-algunicon-32').innerHTML = 'Incorrect!'
          document.getElementById('r-algunicon-34').style.color = 'blue'
          document.getElementById('r-algunicon-34').innerHTML = 'Correct!'
          
          document.getElementById('b-algunicon-34').classList.add("correct")
          document.getElementById('b-algunicon-31').classList.add("incorrect")
          document.getElementById('b-algunicon-33').classList.add("incorrect")
          document.getElementById('b-algunicon-32').classList.add("incorrect")
    
          document.getElementById('sa-algunicon-3').disabled = true;
          document.getElementById('o-algunicon-31').disabled = true;
          document.getElementById('o-algunicon-32').disabled = true;
          document.getElementById('o-algunicon-33').disabled = true;
          document.getElementById('o-algunicon-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algunicon3', 0)
        }
        if (document.getElementById('o-algunicon-33').checked) {
          document.getElementById('r-algunicon-33').style.color = 'red'
          document.getElementById('r-algunicon-33').innerHTML = 'Incorrect!'
          document.getElementById('r-algunicon-34').style.color = 'blue'
          document.getElementById('r-algunicon-34').innerHTML = 'Correct!'
          
          document.getElementById('b-algunicon-34').classList.add("correct")
          document.getElementById('b-algunicon-31').classList.add("incorrect")
          document.getElementById('b-algunicon-33').classList.add("incorrect")
          document.getElementById('b-algunicon-32').classList.add("incorrect")
    
          document.getElementById('sa-algunicon-3').disabled = true;
          document.getElementById('o-algunicon-31').disabled = true;
          document.getElementById('o-algunicon-32').disabled = true;
          document.getElementById('o-algunicon-33').disabled = true;
          document.getElementById('o-algunicon-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algunicon3', 0)
        }
        if (document.getElementById('o-algunicon-34').checked) {
          document.getElementById('r-algunicon-34').style.color = 'blue'
          document.getElementById('r-algunicon-34').innerHTML = 'Correct!'
          
          document.getElementById('b-algunicon-34').classList.add("correct")
          document.getElementById('b-algunicon-31').classList.add("incorrect")
          document.getElementById('b-algunicon-33').classList.add("incorrect")
          document.getElementById('b-algunicon-32').classList.add("incorrect")
    
          document.getElementById('sa-algunicon-3').disabled = true;
          document.getElementById('o-algunicon-31').disabled = true;
          document.getElementById('o-algunicon-32').disabled = true;
          document.getElementById('o-algunicon-33').disabled = true;
          document.getElementById('o-algunicon-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algunicon3', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algunicon-4') != null) {
      algunicon4But.onclick = function() {
        if (document.getElementById('o-algunicon-41').checked) {
          document.getElementById('r-algunicon-41').style.color = 'red'
          document.getElementById('r-algunicon-41').innerHTML = 'Incorrect!'
          document.getElementById('r-algunicon-43').style.color = 'blue'
          document.getElementById('r-algunicon-43').innerHTML = 'Correct!'
          
          document.getElementById('b-algunicon-43').classList.add("correct")
          document.getElementById('b-algunicon-41').classList.add("incorrect")
          document.getElementById('b-algunicon-42').classList.add("incorrect")
          document.getElementById('b-algunicon-44').classList.add("incorrect")
    
          document.getElementById('sa-algunicon-4').disabled = true;
          document.getElementById('o-algunicon-41').disabled = true;
          document.getElementById('o-algunicon-42').disabled = true;
          document.getElementById('o-algunicon-43').disabled = true;
          document.getElementById('o-algunicon-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algunicon4', 0)
        }
        if (document.getElementById('o-algunicon-42').checked) {
          document.getElementById('r-algunicon-42').style.color = 'red'
          document.getElementById('r-algunicon-42').innerHTML = 'Incorrect!'
          document.getElementById('r-algunicon-43').style.color = 'blue'
          document.getElementById('r-algunicon-43').innerHTML = 'Correct!'
          
          document.getElementById('b-algunicon-43').classList.add("correct")
          document.getElementById('b-algunicon-41').classList.add("incorrect")
          document.getElementById('b-algunicon-42').classList.add("incorrect")
          document.getElementById('b-algunicon-44').classList.add("incorrect")
    
          document.getElementById('sa-algunicon-4').disabled = true;
          document.getElementById('o-algunicon-41').disabled = true;
          document.getElementById('o-algunicon-42').disabled = true;
          document.getElementById('o-algunicon-43').disabled = true;
          document.getElementById('o-algunicon-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algunicon4', 0)
        }
        if (document.getElementById('o-algunicon-43').checked) {
          document.getElementById('r-algunicon-43').style.color = 'blue'
          document.getElementById('r-algunicon-43').innerHTML = 'Correct!'
          
          document.getElementById('b-algunicon-43').classList.add("correct")
          document.getElementById('b-algunicon-41').classList.add("incorrect")
          document.getElementById('b-algunicon-42').classList.add("incorrect")
          document.getElementById('b-algunicon-44').classList.add("incorrect")
    
          document.getElementById('sa-algunicon-4').disabled = true;
          document.getElementById('o-algunicon-41').disabled = true;
          document.getElementById('o-algunicon-42').disabled = true;
          document.getElementById('o-algunicon-43').disabled = true;
          document.getElementById('o-algunicon-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algunicon4', 1)
        }
        if (document.getElementById('o-algunicon-44').checked) {
          document.getElementById('r-algunicon-44').style.color = 'red'
          document.getElementById('r-algunicon-44').innerHTML = 'Incorrect!'
          document.getElementById('r-algunicon-43').style.color = 'blue'
          document.getElementById('r-algunicon-43').innerHTML = 'Correct!'
          
          document.getElementById('b-algunicon-43').classList.add("correct")
          document.getElementById('b-algunicon-41').classList.add("incorrect")
          document.getElementById('b-algunicon-42').classList.add("incorrect")
          document.getElementById('b-algunicon-44').classList.add("incorrect")
    
          document.getElementById('sa-algunicon-4').disabled = true;
          document.getElementById('o-algunicon-41').disabled = true;
          document.getElementById('o-algunicon-42').disabled = true;
          document.getElementById('o-algunicon-43').disabled = true;
          document.getElementById('o-algunicon-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algunicon4', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algunicon-5') != null) {
      algunicon5But.onclick = function() {
        if (document.getElementById('o-algunicon-51').checked) {
          document.getElementById('r-algunicon-51').style.color = 'blue'
          document.getElementById('r-algunicon-51').innerHTML = 'Correct!'
          
          document.getElementById('b-algunicon-51').classList.add("correct")
          document.getElementById('b-algunicon-53').classList.add("incorrect")
          document.getElementById('b-algunicon-52').classList.add("incorrect")
          document.getElementById('b-algunicon-54').classList.add("incorrect")
    
          document.getElementById('sa-algunicon-5').disabled = true;
          document.getElementById('o-algunicon-51').disabled = true;
          document.getElementById('o-algunicon-52').disabled = true;
          document.getElementById('o-algunicon-53').disabled = true;
          document.getElementById('o-algunicon-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algunicon5', 1)
        }
        if (document.getElementById('o-algunicon-52').checked) {
          document.getElementById('r-algunicon-52').style.color = 'red'
          document.getElementById('r-algunicon-52').innerHTML = 'Incorrect!'
          document.getElementById('r-algunicon-51').style.color = 'blue'
          document.getElementById('r-algunicon-51').innerHTML = 'Correct!'
          
          document.getElementById('b-algunicon-51').classList.add("correct")
          document.getElementById('b-algunicon-53').classList.add("incorrect")
          document.getElementById('b-algunicon-52').classList.add("incorrect")
          document.getElementById('b-algunicon-54').classList.add("incorrect")
    
          document.getElementById('sa-algunicon-5').disabled = true;
          document.getElementById('o-algunicon-51').disabled = true;
          document.getElementById('o-algunicon-52').disabled = true;
          document.getElementById('o-algunicon-53').disabled = true;
          document.getElementById('o-algunicon-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algunicon5', 0)
        }
        if (document.getElementById('o-algunicon-53').checked) {
          document.getElementById('r-algunicon-53').style.color = 'red'
          document.getElementById('r-algunicon-53').innerHTML = 'Incorrect!'
          document.getElementById('r-algunicon-51').style.color = 'blue'
          document.getElementById('r-algunicon-51').innerHTML = 'Correct!'
          
          document.getElementById('b-algunicon-51').classList.add("correct")
          document.getElementById('b-algunicon-53').classList.add("incorrect")
          document.getElementById('b-algunicon-52').classList.add("incorrect")
          document.getElementById('b-algunicon-54').classList.add("incorrect")
    
          document.getElementById('sa-algunicon-5').disabled = true;
          document.getElementById('o-algunicon-51').disabled = true;
          document.getElementById('o-algunicon-52').disabled = true;
          document.getElementById('o-algunicon-53').disabled = true;
          document.getElementById('o-algunicon-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algunicon5', 0)
        }
        if (document.getElementById('o-algunicon-54').checked) {
          document.getElementById('r-algunicon-54').style.color = 'red'
          document.getElementById('r-algunicon-54').innerHTML = 'Incorrect!'
          document.getElementById('r-algunicon-51').style.color = 'blue'
          document.getElementById('r-algunicon-51').innerHTML = 'Correct!'
          
          document.getElementById('b-algunicon-51').classList.add("correct")
          document.getElementById('b-algunicon-53').classList.add("incorrect")
          document.getElementById('b-algunicon-52').classList.add("incorrect")
          document.getElementById('b-algunicon-54').classList.add("incorrect")
    
          document.getElementById('sa-algunicon-5').disabled = true;
          document.getElementById('o-algunicon-51').disabled = true;
          document.getElementById('o-algunicon-52').disabled = true;
          document.getElementById('o-algunicon-53').disabled = true;
          document.getElementById('o-algunicon-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algunicon5', 0)
        }
      }
    }
        
         
      if (document.getElementById('sa-algunicon-6') != null) {
      algunicon6But.onclick = function() {
        if (document.getElementById('o-algunicon-61').checked) {
          document.getElementById('r-algunicon-61').style.color = 'red'
          document.getElementById('r-algunicon-61').innerHTML = 'Incorrect!'
          document.getElementById('r-algunicon-63').style.color = 'blue'
          document.getElementById('r-algunicon-63').innerHTML = 'Correct!'
          
          document.getElementById('b-algunicon-63').classList.add("correct")
          document.getElementById('b-algunicon-61').classList.add("incorrect")
          document.getElementById('b-algunicon-62').classList.add("incorrect")
          document.getElementById('b-algunicon-64').classList.add("incorrect")
    
          document.getElementById('sa-algunicon-6').disabled = true;
          document.getElementById('o-algunicon-61').disabled = true;
          document.getElementById('o-algunicon-62').disabled = true;
          document.getElementById('o-algunicon-63').disabled = true;
          document.getElementById('o-algunicon-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algunicon6', 0)
        }
        if (document.getElementById('o-algunicon-62').checked) {
          document.getElementById('r-algunicon-62').style.color = 'red'
          document.getElementById('r-algunicon-62').innerHTML = 'Incorrect!'
          document.getElementById('r-algunicon-63').style.color = 'blue'
          document.getElementById('r-algunicon-63').innerHTML = 'Correct!'
          
          document.getElementById('b-algunicon-63').classList.add("correct")
          document.getElementById('b-algunicon-61').classList.add("incorrect")
          document.getElementById('b-algunicon-62').classList.add("incorrect")
          document.getElementById('b-algunicon-64').classList.add("incorrect")
    
          document.getElementById('sa-algunicon-6').disabled = true;
          document.getElementById('o-algunicon-61').disabled = true;
          document.getElementById('o-algunicon-62').disabled = true;
          document.getElementById('o-algunicon-63').disabled = true;
          document.getElementById('o-algunicon-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algunicon6', 0)
        }
        if (document.getElementById('o-algunicon-63').checked) {
          document.getElementById('r-algunicon-63').style.color = 'blue'
          document.getElementById('r-algunicon-63').innerHTML = 'Correct!'
          
          document.getElementById('b-algunicon-63').classList.add("correct")
          document.getElementById('b-algunicon-61').classList.add("incorrect")
          document.getElementById('b-algunicon-62').classList.add("incorrect")
          document.getElementById('b-algunicon-64').classList.add("incorrect")
    
          document.getElementById('sa-algunicon-6').disabled = true;
          document.getElementById('o-algunicon-61').disabled = true;
          document.getElementById('o-algunicon-62').disabled = true;
          document.getElementById('o-algunicon-63').disabled = true;
          document.getElementById('o-algunicon-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algunicon6', 1)
        }
        if (document.getElementById('o-algunicon-64').checked) {
          document.getElementById('r-algunicon-64').style.color = 'red'
          document.getElementById('r-algunicon-64').innerHTML = 'Incorrect!'
          document.getElementById('r-algunicon-63').style.color = 'blue'
          document.getElementById('r-algunicon-63').innerHTML = 'Correct!'
          
          document.getElementById('b-algunicon-63').classList.add("correct")
          document.getElementById('b-algunicon-61').classList.add("incorrect")
          document.getElementById('b-algunicon-62').classList.add("incorrect")
          document.getElementById('b-algunicon-64').classList.add("incorrect")
    
          document.getElementById('sa-algunicon-6').disabled = true;
          document.getElementById('o-algunicon-61').disabled = true;
          document.getElementById('o-algunicon-62').disabled = true;
          document.getElementById('o-algunicon-63').disabled = true;
          document.getElementById('o-algunicon-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algunicon6', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algunicon-7') != null) {
      algunicon7But.onclick = function() {
        if (document.getElementById('o-algunicon-71').checked) {
          document.getElementById('r-algunicon-71').style.color = 'red'
          document.getElementById('r-algunicon-71').innerHTML = 'Incorrect!'
          document.getElementById('r-algunicon-74').style.color = 'blue'
          document.getElementById('r-algunicon-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algunicon-74').classList.add("correct")
          document.getElementById('b-algunicon-71').classList.add("incorrect")
          document.getElementById('b-algunicon-72').classList.add("incorrect")
          document.getElementById('b-algunicon-73').classList.add("incorrect")
    
          document.getElementById('sa-algunicon-7').disabled = true;
          document.getElementById('o-algunicon-71').disabled = true;
          document.getElementById('o-algunicon-72').disabled = true;
          document.getElementById('o-algunicon-73').disabled = true;
          document.getElementById('o-algunicon-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algunicon7', 0)
        }
        if (document.getElementById('o-algunicon-72').checked) {
          document.getElementById('r-algunicon-72').style.color = 'red'
          document.getElementById('r-algunicon-72').innerHTML = 'Incorrect!'
          document.getElementById('r-algunicon-74').style.color = 'blue'
          document.getElementById('r-algunicon-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algunicon-74').classList.add("correct")
          document.getElementById('b-algunicon-71').classList.add("incorrect")
          document.getElementById('b-algunicon-72').classList.add("incorrect")
          document.getElementById('b-algunicon-73').classList.add("incorrect")
    
          document.getElementById('sa-algunicon-7').disabled = true;
          document.getElementById('o-algunicon-71').disabled = true;
          document.getElementById('o-algunicon-72').disabled = true;
          document.getElementById('o-algunicon-73').disabled = true;
          document.getElementById('o-algunicon-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algunicon7', 0)
        }
        if (document.getElementById('o-algunicon-73').checked) {
          document.getElementById('r-algunicon-73').style.color = 'red'
          document.getElementById('r-algunicon-73').innerHTML = 'Incorrect!'
          document.getElementById('r-algunicon-74').style.color = 'blue'
          document.getElementById('r-algunicon-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algunicon-74').classList.add("correct")
          document.getElementById('b-algunicon-71').classList.add("incorrect")
          document.getElementById('b-algunicon-72').classList.add("incorrect")
          document.getElementById('b-algunicon-73').classList.add("incorrect")
    
          document.getElementById('sa-algunicon-7').disabled = true;
          document.getElementById('o-algunicon-71').disabled = true;
          document.getElementById('o-algunicon-72').disabled = true;
          document.getElementById('o-algunicon-73').disabled = true;
          document.getElementById('o-algunicon-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algunicon7', 0)
        }
        if (document.getElementById('o-algunicon-74').checked) {
          document.getElementById('r-algunicon-74').style.color = 'blue'
          document.getElementById('r-algunicon-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algunicon-74').classList.add("correct")
          document.getElementById('b-algunicon-71').classList.add("incorrect")
          document.getElementById('b-algunicon-72').classList.add("incorrect")
          document.getElementById('b-algunicon-73').classList.add("incorrect")
    
          document.getElementById('sa-algunicon-7').disabled = true;
          document.getElementById('o-algunicon-71').disabled = true;
          document.getElementById('o-algunicon-72').disabled = true;
          document.getElementById('o-algunicon-73').disabled = true;
          document.getElementById('o-algunicon-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algunicon7', 1)
        }
      }
    }
    
    
    if (document.getElementById('sa-algunicon-8') != null) {
      algunicon8But.onclick = function() {
        if (document.getElementById('o-algunicon-81').checked) {
          document.getElementById('r-algunicon-81').style.color = 'red'
          document.getElementById('r-algunicon-81').innerHTML = 'Incorrect!'
          document.getElementById('r-algunicon-82').style.color = 'blue'
          document.getElementById('r-algunicon-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algunicon-82').classList.add("correct")
          document.getElementById('b-algunicon-81').classList.add("incorrect")
          document.getElementById('b-algunicon-83').classList.add("incorrect")
          document.getElementById('b-algunicon-84').classList.add("incorrect")
    
          document.getElementById('sa-algunicon-8').disabled = true;
          document.getElementById('o-algunicon-81').disabled = true;
          document.getElementById('o-algunicon-82').disabled = true;
          document.getElementById('o-algunicon-83').disabled = true;
          document.getElementById('o-algunicon-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algunicon8', 0)
        }
        if (document.getElementById('o-algunicon-82').checked) {
          document.getElementById('r-algunicon-82').style.color = 'blue'
          document.getElementById('r-algunicon-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algunicon-82').classList.add("correct")
          document.getElementById('b-algunicon-81').classList.add("incorrect")
          document.getElementById('b-algunicon-83').classList.add("incorrect")
          document.getElementById('b-algunicon-84').classList.add("incorrect")
    
          document.getElementById('sa-algunicon-8').disabled = true;
          document.getElementById('o-algunicon-81').disabled = true;
          document.getElementById('o-algunicon-82').disabled = true;
          document.getElementById('o-algunicon-83').disabled = true;
          document.getElementById('o-algunicon-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algunicon8', 1)
        }
        if (document.getElementById('o-algunicon-83').checked) {
          document.getElementById('r-algunicon-83').style.color = 'red'
          document.getElementById('r-algunicon-83').innerHTML = 'Incorrect!'
          document.getElementById('r-algunicon-82').style.color = 'blue'
          document.getElementById('r-algunicon-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algunicon-82').classList.add("correct")
          document.getElementById('b-algunicon-81').classList.add("incorrect")
          document.getElementById('b-algunicon-83').classList.add("incorrect")
          document.getElementById('b-algunicon-84').classList.add("incorrect")
    
          document.getElementById('sa-algunicon-8').disabled = true;
          document.getElementById('o-algunicon-81').disabled = true;
          document.getElementById('o-algunicon-82').disabled = true;
          document.getElementById('o-algunicon-83').disabled = true;
          document.getElementById('o-algunicon-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algunicon8', 0)
        }
        if (document.getElementById('o-algunicon-84').checked) {
          document.getElementById('r-algunicon-84').style.color = 'red'
          document.getElementById('r-algunicon-84').innerHTML = 'Incorrect!'
          document.getElementById('r-algunicon-82').style.color = 'blue'
          document.getElementById('r-algunicon-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algunicon-82').classList.add("correct")
          document.getElementById('b-algunicon-81').classList.add("incorrect")
          document.getElementById('b-algunicon-83').classList.add("incorrect")
          document.getElementById('b-algunicon-84').classList.add("incorrect")
    
          document.getElementById('sa-algunicon-8').disabled = true;
          document.getElementById('o-algunicon-81').disabled = true;
          document.getElementById('o-algunicon-82').disabled = true;
          document.getElementById('o-algunicon-83').disabled = true;
          document.getElementById('o-algunicon-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algunicon8', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-algunicon-9') != null) {
      algunicon9But.onclick = function() {
        if (document.getElementById('o-algunicon-91').checked) {
          document.getElementById('r-algunicon-91').style.color = 'red'
          document.getElementById('r-algunicon-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algunicon-94').style.color = 'blue'
          document.getElementById('r-algunicon-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algunicon-94').classList.add("correct")
          document.getElementById('b-algunicon-91').classList.add("incorrect")
          document.getElementById('b-algunicon-92').classList.add("incorrect")
          document.getElementById('b-algunicon-93').classList.add("incorrect")
    
          document.getElementById('sa-algunicon-9').disabled = true;
          document.getElementById('o-algunicon-91').disabled = true;
          document.getElementById('o-algunicon-92').disabled = true;
          document.getElementById('o-algunicon-93').disabled = true;
          document.getElementById('o-algunicon-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algunicon9', 0)
        }
        if (document.getElementById('o-algunicon-92').checked) {
          document.getElementById('r-algunicon-91').style.color = 'red'
          document.getElementById('r-algunicon-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algunicon-94').style.color = 'blue'
          document.getElementById('r-algunicon-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algunicon-94').classList.add("correct")
          document.getElementById('b-algunicon-91').classList.add("incorrect")
          document.getElementById('b-algunicon-92').classList.add("incorrect")
          document.getElementById('b-algunicon-93').classList.add("incorrect")
    
          document.getElementById('sa-algunicon-9').disabled = true;
          document.getElementById('o-algunicon-91').disabled = true;
          document.getElementById('o-algunicon-92').disabled = true;
          document.getElementById('o-algunicon-93').disabled = true;
          document.getElementById('o-algunicon-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algunicon9', 0)
        }
        if (document.getElementById('o-algunicon-93').checked) {
          document.getElementById('r-algunicon-91').style.color = 'red'
          document.getElementById('r-algunicon-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algunicon-94').style.color = 'blue'
          document.getElementById('r-algunicon-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algunicon-94').classList.add("correct")
          document.getElementById('b-algunicon-91').classList.add("incorrect")
          document.getElementById('b-algunicon-92').classList.add("incorrect")
          document.getElementById('b-algunicon-93').classList.add("incorrect")
    
          document.getElementById('sa-algunicon-9').disabled = true;
          document.getElementById('o-algunicon-91').disabled = true;
          document.getElementById('o-algunicon-92').disabled = true;
          document.getElementById('o-algunicon-93').disabled = true;
          document.getElementById('o-algunicon-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algunicon9', 0)
        }
        if (document.getElementById('o-algunicon-94').checked) {
          document.getElementById('r-algunicon-94').style.color = 'blue'
          document.getElementById('r-algunicon-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algunicon-94').classList.add("correct")
          document.getElementById('b-algunicon-91').classList.add("incorrect")
          document.getElementById('b-algunicon-92').classList.add("incorrect")
          document.getElementById('b-algunicon-93').classList.add("incorrect")
    
          document.getElementById('sa-algunicon-9').disabled = true;
          document.getElementById('o-algunicon-91').disabled = true;
          document.getElementById('o-algunicon-92').disabled = true;
          document.getElementById('o-algunicon-93').disabled = true;
          document.getElementById('o-algunicon-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algunicon9', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algunicon-10') != null) {
      algunicon10But.onclick = function() {
        if (document.getElementById('o-algunicon-101').checked) {
          document.getElementById('r-algunicon-101').style.color = 'red'
          document.getElementById('r-algunicon-101').innerHTML = 'Incorrect!'
          document.getElementById('r-algunicon-102').style.color = 'blue'
          document.getElementById('r-algunicon-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algunicon-102').classList.add("correct")
          document.getElementById('b-algunicon-101').classList.add("incorrect")
          document.getElementById('b-algunicon-103').classList.add("incorrect")
          document.getElementById('b-algunicon-104').classList.add("incorrect")
    
          document.getElementById('sa-algunicon-10').disabled = true;
          document.getElementById('o-algunicon-101').disabled = true;
          document.getElementById('o-algunicon-102').disabled = true;
          document.getElementById('o-algunicon-103').disabled = true;
          document.getElementById('o-algunicon-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algunicon10', 0)
        }
        if (document.getElementById('o-algunicon-102').checked) {
          document.getElementById('r-algunicon-102').style.color = 'blue'
          document.getElementById('r-algunicon-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algunicon-102').classList.add("correct")
          document.getElementById('b-algunicon-101').classList.add("incorrect")
          document.getElementById('b-algunicon-103').classList.add("incorrect")
          document.getElementById('b-algunicon-104').classList.add("incorrect")
    
          document.getElementById('sa-algunicon-10').disabled = true;
          document.getElementById('o-algunicon-101').disabled = true;
          document.getElementById('o-algunicon-102').disabled = true;
          document.getElementById('o-algunicon-103').disabled = true;
          document.getElementById('o-algunicon-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algunicon10', 1)
        }
        if (document.getElementById('o-algunicon-103').checked) {
          document.getElementById('r-algunicon-103').style.color = 'red'
          document.getElementById('r-algunicon-103').innerHTML = 'Incorrect!'
          document.getElementById('r-algunicon-102').style.color = 'blue'
          document.getElementById('r-algunicon-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algunicon-102').classList.add("correct")
          document.getElementById('b-algunicon-101').classList.add("incorrect")
          document.getElementById('b-algunicon-103').classList.add("incorrect")
          document.getElementById('b-algunicon-104').classList.add("incorrect")
    
          document.getElementById('sa-algunicon-10').disabled = true;
          document.getElementById('o-algunicon-101').disabled = true;
          document.getElementById('o-algunicon-102').disabled = true;
          document.getElementById('o-algunicon-103').disabled = true;
          document.getElementById('o-algunicon-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algunicon10', 0)
        }
        if (document.getElementById('o-algunicon-104').checked) {
          document.getElementById('r-algunicon-104').style.color = 'red'
          document.getElementById('r-algunicon-104').innerHTML = 'Incorrect!'
          document.getElementById('r-algunicon-102').style.color = 'blue'
          document.getElementById('r-algunicon-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algunicon-102').classList.add("correct")
          document.getElementById('b-algunicon-101').classList.add("incorrect")
          document.getElementById('b-algunicon-103').classList.add("incorrect")
          document.getElementById('b-algunicon-104').classList.add("incorrect")
    
          document.getElementById('sa-algunicon-10').disabled = true;
          document.getElementById('o-algunicon-101').disabled = true;
          document.getElementById('o-algunicon-102').disabled = true;
          document.getElementById('o-algunicon-103').disabled = true;
          document.getElementById('o-algunicon-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algunicon10', 0)
        }
      }
    }
    