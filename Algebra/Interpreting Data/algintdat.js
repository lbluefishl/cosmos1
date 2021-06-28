
  let algintdat1But = document.getElementById('sa-algintdat-1');
  let algintdat2But = document.getElementById('sa-algintdat-2');
  let algintdat3But = document.getElementById('sa-algintdat-3');
  let algintdat4But = document.getElementById('sa-algintdat-4');
  let algintdat5But = document.getElementById('sa-algintdat-5');
  let algintdat6But = document.getElementById('sa-algintdat-6');
  let algintdat7But = document.getElementById('sa-algintdat-7');
  let algintdat8But = document.getElementById('sa-algintdat-8');
  let algintdat9But = document.getElementById('sa-algintdat-9');
  let algintdat10But = document.getElementById('sa-algintdat-10');


  showExplanation1 = function() {
    document.getElementById('e-algintdat-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-algintdat-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-algintdat-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-algintdat-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-algintdat-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-algintdat-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-algintdat-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-algintdat-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-algintdat-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-algintdat-10').style.display = 'block';
     } 



     if (document.getElementById('sa-algintdat-1') != null) {
      algintdat1But.onclick = function () {
        if (document.getElementById('o-algintdat-11').checked) {
          document.getElementById('r-algintdat-11').style.color = 'red'
          document.getElementById('r-algintdat-11').innerHTML = 'Incorrect!'
          document.getElementById('r-algintdat-13').style.color = 'blue'
          document.getElementById('r-algintdat-13').innerHTML = 'Correct!'
    
          document.getElementById('b-algintdat-13').classList.add("correct")
          document.getElementById('b-algintdat-12').classList.add("incorrect")
          document.getElementById('b-algintdat-11').classList.add("incorrect")
          document.getElementById('b-algintdat-14').classList.add("incorrect")
    
          document.getElementById('sa-algintdat-1').disabled = true;
          document.getElementById('o-algintdat-11').disabled = true;
          document.getElementById('o-algintdat-12').disabled = true;
          document.getElementById('o-algintdat-13').disabled = true;
          document.getElementById('o-algintdat-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algintdat1', 0)
        }
    
        if (document.getElementById('o-algintdat-12').checked) {
         
          document.getElementById('r-algintdat-12').style.color = 'red'
          document.getElementById('r-algintdat-12').innerHTML = 'Incorrect!'
          document.getElementById('r-algintdat-13').style.color = 'blue'
          document.getElementById('r-algintdat-13').innerHTML = 'Correct!'
    
          document.getElementById('b-algintdat-13').classList.add("correct")
          document.getElementById('b-algintdat-12').classList.add("incorrect")
          document.getElementById('b-algintdat-11').classList.add("incorrect")
          document.getElementById('b-algintdat-14').classList.add("incorrect")
    
          document.getElementById('sa-algintdat-1').disabled = true;
          document.getElementById('o-algintdat-11').disabled = true;
          document.getElementById('o-algintdat-12').disabled = true;
          document.getElementById('o-algintdat-13').disabled = true;
          document.getElementById('o-algintdat-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algintdat1', 0)
        }
        if (document.getElementById('o-algintdat-13').checked) {
          document.getElementById('r-algintdat-13').style.color = 'blue'
          document.getElementById('r-algintdat-13').innerHTML = 'Correct!'
          
          document.getElementById('b-algintdat-13').classList.add("correct")
          document.getElementById('b-algintdat-12').classList.add("incorrect")
          document.getElementById('b-algintdat-11').classList.add("incorrect")
          document.getElementById('b-algintdat-14').classList.add("incorrect")
    
          document.getElementById('sa-algintdat-1').disabled = true;
          document.getElementById('o-algintdat-11').disabled = true;
          document.getElementById('o-algintdat-12').disabled = true;
          document.getElementById('o-algintdat-13').disabled = true;
          document.getElementById('o-algintdat-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algintdat1', 1)
        }
        if (document.getElementById('o-algintdat-14').checked) {
          document.getElementById('r-algintdat-14').style.color = 'red'
          document.getElementById('r-algintdat-14').innerHTML = 'Incorrect!'
          document.getElementById('r-algintdat-13').style.color = 'blue'
          document.getElementById('r-algintdat-13').innerHTML = 'Correct!'
          
          document.getElementById('b-algintdat-13').classList.add("correct")
          document.getElementById('b-algintdat-12').classList.add("incorrect")
          document.getElementById('b-algintdat-11').classList.add("incorrect")
          document.getElementById('b-algintdat-14').classList.add("incorrect")
    
          document.getElementById('sa-algintdat-1').disabled = true;
          document.getElementById('o-algintdat-11').disabled = true;
          document.getElementById('o-algintdat-12').disabled = true;
          document.getElementById('o-algintdat-13').disabled = true;
          document.getElementById('o-algintdat-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algintdat1', 0)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-algintdat-2') != null) {
      algintdat2But.onclick = function() {
        if (document.getElementById('o-algintdat-21').checked) {
          document.getElementById('r-algintdat-21').style.color = 'red'
          document.getElementById('r-algintdat-21').innerHTML = 'Incorrect!'
          document.getElementById('r-algintdat-24').style.color = 'blue'
          document.getElementById('r-algintdat-24').innerHTML = 'Correct!'
          
          document.getElementById('b-algintdat-24').classList.add("correct")
          document.getElementById('b-algintdat-21').classList.add("incorrect")
          document.getElementById('b-algintdat-23').classList.add("incorrect")
          document.getElementById('b-algintdat-24').classList.add("incorrect")
    
          document.getElementById('sa-algintdat-2').disabled = true;
          document.getElementById('o-algintdat-21').disabled = true;
          document.getElementById('o-algintdat-22').disabled = true;
          document.getElementById('o-algintdat-23').disabled = true;
          document.getElementById('o-algintdat-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algintdat2', 0)
        }
        if (document.getElementById('o-algintdat-22').checked) {
          document.getElementById('r-algintdat-22').style.color = 'red'
          document.getElementById('r-algintdat-22').innerHTML = 'Incorrect!'
          document.getElementById('r-algintdat-24').style.color = 'blue'
          document.getElementById('r-algintdat-24').innerHTML = 'Correct!'
          
          document.getElementById('b-algintdat-24').classList.add("correct")
          document.getElementById('b-algintdat-21').classList.add("incorrect")
          document.getElementById('b-algintdat-23').classList.add("incorrect")
          document.getElementById('b-algintdat-24').classList.add("incorrect")
    
          document.getElementById('sa-algintdat-2').disabled = true;
          document.getElementById('o-algintdat-21').disabled = true;
          document.getElementById('o-algintdat-22').disabled = true;
          document.getElementById('o-algintdat-23').disabled = true;
          document.getElementById('o-algintdat-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algintdat2', 0)
        }
        if (document.getElementById('o-algintdat-23').checked) {
          document.getElementById('r-algintdat-23').style.color = 'red'
          document.getElementById('r-algintdat-23').innerHTML = 'Incorrect!'
          document.getElementById('r-algintdat-24').style.color = 'blue'
          document.getElementById('r-algintdat-24').innerHTML = 'Correct!'
          
          document.getElementById('b-algintdat-24').classList.add("correct")
          document.getElementById('b-algintdat-21').classList.add("incorrect")
          document.getElementById('b-algintdat-23').classList.add("incorrect")
          document.getElementById('b-algintdat-24').classList.add("incorrect")
    
          document.getElementById('sa-algintdat-2').disabled = true;
          document.getElementById('o-algintdat-21').disabled = true;
          document.getElementById('o-algintdat-22').disabled = true;
          document.getElementById('o-algintdat-23').disabled = true;
          document.getElementById('o-algintdat-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algintdat2', 0)
        }
        if (document.getElementById('o-algintdat-24').checked) {
          document.getElementById('r-algintdat-24').style.color = 'blue'
          document.getElementById('r-algintdat-24').innerHTML = 'Correct!'
          
          document.getElementById('b-algintdat-24').classList.add("correct")
          document.getElementById('b-algintdat-21').classList.add("incorrect")
          document.getElementById('b-algintdat-23').classList.add("incorrect")
          document.getElementById('b-algintdat-24').classList.add("incorrect")
    
          document.getElementById('sa-algintdat-2').disabled = true;
          document.getElementById('o-algintdat-21').disabled = true;
          document.getElementById('o-algintdat-22').disabled = true;
          document.getElementById('o-algintdat-23').disabled = true;
          document.getElementById('o-algintdat-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algintdat2', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algintdat-3') != null) {
      algintdat3But.onclick = function() {
        if (document.getElementById('o-algintdat-31').checked) {
          document.getElementById('r-algintdat-31').style.color = 'red'
          document.getElementById('r-algintdat-31').innerHTML = 'Incorrect!'
          document.getElementById('r-algintdat-32').style.color = 'blue'
          document.getElementById('r-algintdat-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algintdat-32').classList.add("correct")
          document.getElementById('b-algintdat-31').classList.add("incorrect")
          document.getElementById('b-algintdat-33').classList.add("incorrect")
          document.getElementById('b-algintdat-34').classList.add("incorrect")
    
          document.getElementById('sa-algintdat-3').disabled = true;
          document.getElementById('o-algintdat-31').disabled = true;
          document.getElementById('o-algintdat-32').disabled = true;
          document.getElementById('o-algintdat-33').disabled = true;
          document.getElementById('o-algintdat-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algintdat3', 0)
        }
        if (document.getElementById('o-algintdat-32').checked) {
    
          document.getElementById('r-algintdat-32').style.color = 'blue'
          document.getElementById('r-algintdat-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algintdat-32').classList.add("correct")
          document.getElementById('b-algintdat-31').classList.add("incorrect")
          document.getElementById('b-algintdat-33').classList.add("incorrect")
          document.getElementById('b-algintdat-34').classList.add("incorrect")
    
          document.getElementById('sa-algintdat-3').disabled = true;
          document.getElementById('o-algintdat-31').disabled = true;
          document.getElementById('o-algintdat-32').disabled = true;
          document.getElementById('o-algintdat-33').disabled = true;
          document.getElementById('o-algintdat-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algintdat3', 1)
        }
        if (document.getElementById('o-algintdat-33').checked) {
          document.getElementById('r-algintdat-33').style.color = 'red'
          document.getElementById('r-algintdat-33').innerHTML = 'Incorrect!'
          document.getElementById('r-algintdat-32').style.color = 'blue'
          document.getElementById('r-algintdat-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algintdat-32').classList.add("correct")
          document.getElementById('b-algintdat-31').classList.add("incorrect")
          document.getElementById('b-algintdat-33').classList.add("incorrect")
          document.getElementById('b-algintdat-34').classList.add("incorrect")
    
          document.getElementById('sa-algintdat-3').disabled = true;
          document.getElementById('o-algintdat-31').disabled = true;
          document.getElementById('o-algintdat-32').disabled = true;
          document.getElementById('o-algintdat-33').disabled = true;
          document.getElementById('o-algintdat-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algintdat3', 0)
        }
        if (document.getElementById('o-algintdat-34').checked) {
          document.getElementById('r-algintdat-34').style.color = 'red'
          document.getElementById('r-algintdat-34').innerHTML = 'Incorrect!'
          document.getElementById('r-algintdat-32').style.color = 'blue'
          document.getElementById('r-algintdat-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algintdat-32').classList.add("correct")
          document.getElementById('b-algintdat-31').classList.add("incorrect")
          document.getElementById('b-algintdat-33').classList.add("incorrect")
          document.getElementById('b-algintdat-34').classList.add("incorrect")
    
          document.getElementById('sa-algintdat-3').disabled = true;
          document.getElementById('o-algintdat-31').disabled = true;
          document.getElementById('o-algintdat-32').disabled = true;
          document.getElementById('o-algintdat-33').disabled = true;
          document.getElementById('o-algintdat-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algintdat3', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algintdat-4') != null) {
      algintdat4But.onclick = function() {
        if (document.getElementById('o-algintdat-41').checked) {
          document.getElementById('r-algintdat-41').style.color = 'red'
          document.getElementById('r-algintdat-41').innerHTML = 'Incorrect!'
          document.getElementById('r-algintdat-43').style.color = 'blue'
          document.getElementById('r-algintdat-43').innerHTML = 'Correct!'
          
          document.getElementById('b-algintdat-43').classList.add("correct")
          document.getElementById('b-algintdat-41').classList.add("incorrect")
          document.getElementById('b-algintdat-42').classList.add("incorrect")
          document.getElementById('b-algintdat-44').classList.add("incorrect")
    
          document.getElementById('sa-algintdat-4').disabled = true;
          document.getElementById('o-algintdat-41').disabled = true;
          document.getElementById('o-algintdat-42').disabled = true;
          document.getElementById('o-algintdat-43').disabled = true;
          document.getElementById('o-algintdat-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algintdat4', 0)
        }
        if (document.getElementById('o-algintdat-42').checked) {
          document.getElementById('r-algintdat-42').style.color = 'red'
          document.getElementById('r-algintdat-42').innerHTML = 'Incorrect!'
          document.getElementById('r-algintdat-43').style.color = 'blue'
          document.getElementById('r-algintdat-43').innerHTML = 'Correct!'
          
          document.getElementById('b-algintdat-43').classList.add("correct")
          document.getElementById('b-algintdat-41').classList.add("incorrect")
          document.getElementById('b-algintdat-42').classList.add("incorrect")
          document.getElementById('b-algintdat-44').classList.add("incorrect")
    
          document.getElementById('sa-algintdat-4').disabled = true;
          document.getElementById('o-algintdat-41').disabled = true;
          document.getElementById('o-algintdat-42').disabled = true;
          document.getElementById('o-algintdat-43').disabled = true;
          document.getElementById('o-algintdat-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algintdat4', 0)
        }
        if (document.getElementById('o-algintdat-43').checked) {
          document.getElementById('r-algintdat-43').style.color = 'blue'
          document.getElementById('r-algintdat-43').innerHTML = 'Correct!'
          
          document.getElementById('b-algintdat-43').classList.add("correct")
          document.getElementById('b-algintdat-41').classList.add("incorrect")
          document.getElementById('b-algintdat-42').classList.add("incorrect")
          document.getElementById('b-algintdat-44').classList.add("incorrect")
    
          document.getElementById('sa-algintdat-4').disabled = true;
          document.getElementById('o-algintdat-41').disabled = true;
          document.getElementById('o-algintdat-42').disabled = true;
          document.getElementById('o-algintdat-43').disabled = true;
          document.getElementById('o-algintdat-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algintdat4', 1)
        }
        if (document.getElementById('o-algintdat-44').checked) {
          document.getElementById('r-algintdat-44').style.color = 'red'
          document.getElementById('r-algintdat-44').innerHTML = 'Incorrect!'
          document.getElementById('r-algintdat-43').style.color = 'blue'
          document.getElementById('r-algintdat-43').innerHTML = 'Correct!'
          
          document.getElementById('b-algintdat-43').classList.add("correct")
          document.getElementById('b-algintdat-41').classList.add("incorrect")
          document.getElementById('b-algintdat-42').classList.add("incorrect")
          document.getElementById('b-algintdat-44').classList.add("incorrect")
    
          document.getElementById('sa-algintdat-4').disabled = true;
          document.getElementById('o-algintdat-41').disabled = true;
          document.getElementById('o-algintdat-42').disabled = true;
          document.getElementById('o-algintdat-43').disabled = true;
          document.getElementById('o-algintdat-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algintdat4', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algintdat-5') != null) {
      algintdat5But.onclick = function() {
        if (document.getElementById('o-algintdat-51').checked) {
          document.getElementById('r-algintdat-51').style.color = 'red'
          document.getElementById('r-algintdat-51').innerHTML = 'Incorrect!'
          document.getElementById('r-algintdat-53').style.color = 'blue'
          document.getElementById('r-algintdat-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algintdat-53').classList.add("correct")
          document.getElementById('b-algintdat-51').classList.add("incorrect")
          document.getElementById('b-algintdat-52').classList.add("incorrect")
          document.getElementById('b-algintdat-54').classList.add("incorrect")
    
          document.getElementById('sa-algintdat-5').disabled = true;
          document.getElementById('o-algintdat-51').disabled = true;
          document.getElementById('o-algintdat-52').disabled = true;
          document.getElementById('o-algintdat-53').disabled = true;
          document.getElementById('o-algintdat-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algintdat5', 0)
        }
        if (document.getElementById('o-algintdat-52').checked) {
          document.getElementById('r-algintdat-52').style.color = 'red'
          document.getElementById('r-algintdat-52').innerHTML = 'Incorrect!'
          document.getElementById('r-algintdat-53').style.color = 'blue'
          document.getElementById('r-algintdat-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algintdat-53').classList.add("correct")
          document.getElementById('b-algintdat-51').classList.add("incorrect")
          document.getElementById('b-algintdat-52').classList.add("incorrect")
          document.getElementById('b-algintdat-54').classList.add("incorrect")
    
          document.getElementById('sa-algintdat-5').disabled = true;
          document.getElementById('o-algintdat-51').disabled = true;
          document.getElementById('o-algintdat-52').disabled = true;
          document.getElementById('o-algintdat-53').disabled = true;
          document.getElementById('o-algintdat-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algintdat5', 0)
        }
        if (document.getElementById('o-algintdat-53').checked) {
          document.getElementById('r-algintdat-53').style.color = 'blue'
          document.getElementById('r-algintdat-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algintdat-53').classList.add("correct")
          document.getElementById('b-algintdat-51').classList.add("incorrect")
          document.getElementById('b-algintdat-52').classList.add("incorrect")
          document.getElementById('b-algintdat-54').classList.add("incorrect")
    
          document.getElementById('sa-algintdat-5').disabled = true;
          document.getElementById('o-algintdat-51').disabled = true;
          document.getElementById('o-algintdat-52').disabled = true;
          document.getElementById('o-algintdat-53').disabled = true;
          document.getElementById('o-algintdat-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algintdat5', 1)
        }
        if (document.getElementById('o-algintdat-54').checked) {
          document.getElementById('r-algintdat-54').style.color = 'red'
          document.getElementById('r-algintdat-54').innerHTML = 'Incorrect!'
          document.getElementById('r-algintdat-53').style.color = 'blue'
          document.getElementById('r-algintdat-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algintdat-53').classList.add("correct")
          document.getElementById('b-algintdat-51').classList.add("incorrect")
          document.getElementById('b-algintdat-52').classList.add("incorrect")
          document.getElementById('b-algintdat-54').classList.add("incorrect")
    
          document.getElementById('sa-algintdat-5').disabled = true;
          document.getElementById('o-algintdat-51').disabled = true;
          document.getElementById('o-algintdat-52').disabled = true;
          document.getElementById('o-algintdat-53').disabled = true;
          document.getElementById('o-algintdat-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algintdat5', 0)
        }
      }
    }
        
         
      if (document.getElementById('sa-algintdat-6') != null) {
      algintdat6But.onclick = function() {
        if (document.getElementById('o-algintdat-61').checked) {
          document.getElementById('r-algintdat-61').style.color = 'red'
          document.getElementById('r-algintdat-61').innerHTML = 'Incorrect!'
          document.getElementById('r-algintdat-64').style.color = 'blue'
          document.getElementById('r-algintdat-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algintdat-64').classList.add("correct")
          document.getElementById('b-algintdat-61').classList.add("incorrect")
          document.getElementById('b-algintdat-62').classList.add("incorrect")
          document.getElementById('b-algintdat-63').classList.add("incorrect")
    
          document.getElementById('sa-algintdat-6').disabled = true;
          document.getElementById('o-algintdat-61').disabled = true;
          document.getElementById('o-algintdat-62').disabled = true;
          document.getElementById('o-algintdat-63').disabled = true;
          document.getElementById('o-algintdat-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algintdat6', 0)
        }
        if (document.getElementById('o-algintdat-62').checked) {
          document.getElementById('r-algintdat-62').style.color = 'red'
          document.getElementById('r-algintdat-62').innerHTML = 'Incorrect!'
          document.getElementById('r-algintdat-64').style.color = 'blue'
          document.getElementById('r-algintdat-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algintdat-64').classList.add("correct")
          document.getElementById('b-algintdat-61').classList.add("incorrect")
          document.getElementById('b-algintdat-62').classList.add("incorrect")
          document.getElementById('b-algintdat-63').classList.add("incorrect")
    
          document.getElementById('sa-algintdat-6').disabled = true;
          document.getElementById('o-algintdat-61').disabled = true;
          document.getElementById('o-algintdat-62').disabled = true;
          document.getElementById('o-algintdat-63').disabled = true;
          document.getElementById('o-algintdat-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algintdat6', 0)
        }
        if (document.getElementById('o-algintdat-63').checked) {
          document.getElementById('r-algintdat-63').style.color = 'red'
          document.getElementById('r-algintdat-63').innerHTML = 'Incorrect!'
          document.getElementById('r-algintdat-64').style.color = 'blue'
          document.getElementById('r-algintdat-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algintdat-64').classList.add("correct")
          document.getElementById('b-algintdat-61').classList.add("incorrect")
          document.getElementById('b-algintdat-62').classList.add("incorrect")
          document.getElementById('b-algintdat-63').classList.add("incorrect")
    
          document.getElementById('sa-algintdat-6').disabled = true;
          document.getElementById('o-algintdat-61').disabled = true;
          document.getElementById('o-algintdat-62').disabled = true;
          document.getElementById('o-algintdat-63').disabled = true;
          document.getElementById('o-algintdat-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algintdat6', 0)
        }
        if (document.getElementById('o-algintdat-64').checked) {
          document.getElementById('r-algintdat-64').style.color = 'blue'
          document.getElementById('r-algintdat-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algintdat-64').classList.add("correct")
          document.getElementById('b-algintdat-61').classList.add("incorrect")
          document.getElementById('b-algintdat-62').classList.add("incorrect")
          document.getElementById('b-algintdat-63').classList.add("incorrect")
    
          document.getElementById('sa-algintdat-6').disabled = true;
          document.getElementById('o-algintdat-61').disabled = true;
          document.getElementById('o-algintdat-62').disabled = true;
          document.getElementById('o-algintdat-63').disabled = true;
          document.getElementById('o-algintdat-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algintdat6', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algintdat-7') != null) {
      algintdat7But.onclick = function() {
        if (document.getElementById('o-algintdat-71').checked) {
          document.getElementById('r-algintdat-71').style.color = 'red'
          document.getElementById('r-algintdat-71').innerHTML = 'Incorrect!'
          document.getElementById('r-algintdat-74').style.color = 'blue'
          document.getElementById('r-algintdat-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algintdat-74').classList.add("correct")
          document.getElementById('b-algintdat-71').classList.add("incorrect")
          document.getElementById('b-algintdat-72').classList.add("incorrect")
          document.getElementById('b-algintdat-73').classList.add("incorrect")
    
          document.getElementById('sa-algintdat-7').disabled = true;
          document.getElementById('o-algintdat-71').disabled = true;
          document.getElementById('o-algintdat-72').disabled = true;
          document.getElementById('o-algintdat-73').disabled = true;
          document.getElementById('o-algintdat-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algintdat7', 0)
        }
        if (document.getElementById('o-algintdat-72').checked) {
          document.getElementById('r-algintdat-72').style.color = 'red'
          document.getElementById('r-algintdat-72').innerHTML = 'Incorrect!'
          document.getElementById('r-algintdat-74').style.color = 'blue'
          document.getElementById('r-algintdat-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algintdat-74').classList.add("correct")
          document.getElementById('b-algintdat-71').classList.add("incorrect")
          document.getElementById('b-algintdat-72').classList.add("incorrect")
          document.getElementById('b-algintdat-73').classList.add("incorrect")
    
          document.getElementById('sa-algintdat-7').disabled = true;
          document.getElementById('o-algintdat-71').disabled = true;
          document.getElementById('o-algintdat-72').disabled = true;
          document.getElementById('o-algintdat-73').disabled = true;
          document.getElementById('o-algintdat-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algintdat7', 0)
        }
        if (document.getElementById('o-algintdat-73').checked) {
          document.getElementById('r-algintdat-73').style.color = 'red'
          document.getElementById('r-algintdat-73').innerHTML = 'Incorrect!'
          document.getElementById('r-algintdat-74').style.color = 'blue'
          document.getElementById('r-algintdat-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algintdat-74').classList.add("correct")
          document.getElementById('b-algintdat-71').classList.add("incorrect")
          document.getElementById('b-algintdat-72').classList.add("incorrect")
          document.getElementById('b-algintdat-73').classList.add("incorrect")
    
          document.getElementById('sa-algintdat-7').disabled = true;
          document.getElementById('o-algintdat-71').disabled = true;
          document.getElementById('o-algintdat-72').disabled = true;
          document.getElementById('o-algintdat-73').disabled = true;
          document.getElementById('o-algintdat-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algintdat7', 0)
        }
        if (document.getElementById('o-algintdat-74').checked) {
          document.getElementById('r-algintdat-74').style.color = 'blue'
          document.getElementById('r-algintdat-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algintdat-74').classList.add("correct")
          document.getElementById('b-algintdat-71').classList.add("incorrect")
          document.getElementById('b-algintdat-72').classList.add("incorrect")
          document.getElementById('b-algintdat-73').classList.add("incorrect")
    
          document.getElementById('sa-algintdat-7').disabled = true;
          document.getElementById('o-algintdat-71').disabled = true;
          document.getElementById('o-algintdat-72').disabled = true;
          document.getElementById('o-algintdat-73').disabled = true;
          document.getElementById('o-algintdat-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algintdat7', 1)
        }
      }
    }
    
    
    if (document.getElementById('sa-algintdat-8') != null) {
      algintdat8But.onclick = function() {
        if (document.getElementById('o-algintdat-81').checked) {
          document.getElementById('r-algintdat-81').style.color = 'red'
          document.getElementById('r-algintdat-81').innerHTML = 'Incorrect!'
          document.getElementById('r-algintdat-82').style.color = 'blue'
          document.getElementById('r-algintdat-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algintdat-82').classList.add("correct")
          document.getElementById('b-algintdat-81').classList.add("incorrect")
          document.getElementById('b-algintdat-83').classList.add("incorrect")
          document.getElementById('b-algintdat-84').classList.add("incorrect")
    
          document.getElementById('sa-algintdat-8').disabled = true;
          document.getElementById('o-algintdat-81').disabled = true;
          document.getElementById('o-algintdat-82').disabled = true;
          document.getElementById('o-algintdat-83').disabled = true;
          document.getElementById('o-algintdat-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algintdat8', 0)
        }
        if (document.getElementById('o-algintdat-82').checked) {
          document.getElementById('r-algintdat-82').style.color = 'blue'
          document.getElementById('r-algintdat-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algintdat-82').classList.add("correct")
          document.getElementById('b-algintdat-81').classList.add("incorrect")
          document.getElementById('b-algintdat-83').classList.add("incorrect")
          document.getElementById('b-algintdat-84').classList.add("incorrect")
    
          document.getElementById('sa-algintdat-8').disabled = true;
          document.getElementById('o-algintdat-81').disabled = true;
          document.getElementById('o-algintdat-82').disabled = true;
          document.getElementById('o-algintdat-83').disabled = true;
          document.getElementById('o-algintdat-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algintdat8', 1)
        }
        if (document.getElementById('o-algintdat-83').checked) {
          document.getElementById('r-algintdat-83').style.color = 'red'
          document.getElementById('r-algintdat-83').innerHTML = 'Incorrect!'
          document.getElementById('r-algintdat-82').style.color = 'blue'
          document.getElementById('r-algintdat-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algintdat-82').classList.add("correct")
          document.getElementById('b-algintdat-81').classList.add("incorrect")
          document.getElementById('b-algintdat-83').classList.add("incorrect")
          document.getElementById('b-algintdat-84').classList.add("incorrect")
    
          document.getElementById('sa-algintdat-8').disabled = true;
          document.getElementById('o-algintdat-81').disabled = true;
          document.getElementById('o-algintdat-82').disabled = true;
          document.getElementById('o-algintdat-83').disabled = true;
          document.getElementById('o-algintdat-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algintdat8', 0)
        }
        if (document.getElementById('o-algintdat-84').checked) {
          document.getElementById('r-algintdat-84').style.color = 'red'
          document.getElementById('r-algintdat-84').innerHTML = 'Incorrect!'
          document.getElementById('r-algintdat-82').style.color = 'blue'
          document.getElementById('r-algintdat-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algintdat-82').classList.add("correct")
          document.getElementById('b-algintdat-81').classList.add("incorrect")
          document.getElementById('b-algintdat-83').classList.add("incorrect")
          document.getElementById('b-algintdat-84').classList.add("incorrect")
    
          document.getElementById('sa-algintdat-8').disabled = true;
          document.getElementById('o-algintdat-81').disabled = true;
          document.getElementById('o-algintdat-82').disabled = true;
          document.getElementById('o-algintdat-83').disabled = true;
          document.getElementById('o-algintdat-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algintdat8', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-algintdat-9') != null) {
      algintdat9But.onclick = function() {
        if (document.getElementById('o-algintdat-91').checked) {
          document.getElementById('r-algintdat-91').style.color = 'red'
          document.getElementById('r-algintdat-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algintdat-94').style.color = 'blue'
          document.getElementById('r-algintdat-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algintdat-94').classList.add("correct")
          document.getElementById('b-algintdat-91').classList.add("incorrect")
          document.getElementById('b-algintdat-92').classList.add("incorrect")
          document.getElementById('b-algintdat-93').classList.add("incorrect")
    
          document.getElementById('sa-algintdat-9').disabled = true;
          document.getElementById('o-algintdat-91').disabled = true;
          document.getElementById('o-algintdat-92').disabled = true;
          document.getElementById('o-algintdat-93').disabled = true;
          document.getElementById('o-algintdat-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algintdat9', 0)
        }
        if (document.getElementById('o-algintdat-92').checked) {
          document.getElementById('r-algintdat-91').style.color = 'red'
          document.getElementById('r-algintdat-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algintdat-94').style.color = 'blue'
          document.getElementById('r-algintdat-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algintdat-94').classList.add("correct")
          document.getElementById('b-algintdat-91').classList.add("incorrect")
          document.getElementById('b-algintdat-92').classList.add("incorrect")
          document.getElementById('b-algintdat-93').classList.add("incorrect")
    
          document.getElementById('sa-algintdat-9').disabled = true;
          document.getElementById('o-algintdat-91').disabled = true;
          document.getElementById('o-algintdat-92').disabled = true;
          document.getElementById('o-algintdat-93').disabled = true;
          document.getElementById('o-algintdat-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algintdat9', 0)
        }
        if (document.getElementById('o-algintdat-93').checked) {
          document.getElementById('r-algintdat-91').style.color = 'red'
          document.getElementById('r-algintdat-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algintdat-94').style.color = 'blue'
          document.getElementById('r-algintdat-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algintdat-94').classList.add("correct")
          document.getElementById('b-algintdat-91').classList.add("incorrect")
          document.getElementById('b-algintdat-92').classList.add("incorrect")
          document.getElementById('b-algintdat-93').classList.add("incorrect")
    
          document.getElementById('sa-algintdat-9').disabled = true;
          document.getElementById('o-algintdat-91').disabled = true;
          document.getElementById('o-algintdat-92').disabled = true;
          document.getElementById('o-algintdat-93').disabled = true;
          document.getElementById('o-algintdat-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algintdat9', 0)
        }
        if (document.getElementById('o-algintdat-94').checked) {
          document.getElementById('r-algintdat-94').style.color = 'blue'
          document.getElementById('r-algintdat-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algintdat-94').classList.add("correct")
          document.getElementById('b-algintdat-91').classList.add("incorrect")
          document.getElementById('b-algintdat-92').classList.add("incorrect")
          document.getElementById('b-algintdat-93').classList.add("incorrect")
    
          document.getElementById('sa-algintdat-9').disabled = true;
          document.getElementById('o-algintdat-91').disabled = true;
          document.getElementById('o-algintdat-92').disabled = true;
          document.getElementById('o-algintdat-93').disabled = true;
          document.getElementById('o-algintdat-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algintdat9', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algintdat-10') != null) {
      algintdat10But.onclick = function() {
        if (document.getElementById('o-algintdat-101').checked) {
          document.getElementById('r-algintdat-101').style.color = 'red'
          document.getElementById('r-algintdat-101').innerHTML = 'Incorrect!'
          document.getElementById('r-algintdat-102').style.color = 'blue'
          document.getElementById('r-algintdat-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algintdat-102').classList.add("correct")
          document.getElementById('b-algintdat-101').classList.add("incorrect")
          document.getElementById('b-algintdat-103').classList.add("incorrect")
          document.getElementById('b-algintdat-104').classList.add("incorrect")
    
          document.getElementById('sa-algintdat-10').disabled = true;
          document.getElementById('o-algintdat-101').disabled = true;
          document.getElementById('o-algintdat-102').disabled = true;
          document.getElementById('o-algintdat-103').disabled = true;
          document.getElementById('o-algintdat-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algintdat10', 0)
        }
        if (document.getElementById('o-algintdat-102').checked) {
          document.getElementById('r-algintdat-102').style.color = 'blue'
          document.getElementById('r-algintdat-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algintdat-102').classList.add("correct")
          document.getElementById('b-algintdat-101').classList.add("incorrect")
          document.getElementById('b-algintdat-103').classList.add("incorrect")
          document.getElementById('b-algintdat-104').classList.add("incorrect")
    
          document.getElementById('sa-algintdat-10').disabled = true;
          document.getElementById('o-algintdat-101').disabled = true;
          document.getElementById('o-algintdat-102').disabled = true;
          document.getElementById('o-algintdat-103').disabled = true;
          document.getElementById('o-algintdat-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algintdat10', 1)
        }
        if (document.getElementById('o-algintdat-103').checked) {
          document.getElementById('r-algintdat-103').style.color = 'red'
          document.getElementById('r-algintdat-103').innerHTML = 'Incorrect!'
          document.getElementById('r-algintdat-102').style.color = 'blue'
          document.getElementById('r-algintdat-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algintdat-102').classList.add("correct")
          document.getElementById('b-algintdat-101').classList.add("incorrect")
          document.getElementById('b-algintdat-103').classList.add("incorrect")
          document.getElementById('b-algintdat-104').classList.add("incorrect")
    
          document.getElementById('sa-algintdat-10').disabled = true;
          document.getElementById('o-algintdat-101').disabled = true;
          document.getElementById('o-algintdat-102').disabled = true;
          document.getElementById('o-algintdat-103').disabled = true;
          document.getElementById('o-algintdat-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algintdat10', 0)
        }
        if (document.getElementById('o-algintdat-104').checked) {
          document.getElementById('r-algintdat-104').style.color = 'red'
          document.getElementById('r-algintdat-104').innerHTML = 'Incorrect!'
          document.getElementById('r-algintdat-102').style.color = 'blue'
          document.getElementById('r-algintdat-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algintdat-102').classList.add("correct")
          document.getElementById('b-algintdat-101').classList.add("incorrect")
          document.getElementById('b-algintdat-103').classList.add("incorrect")
          document.getElementById('b-algintdat-104').classList.add("incorrect")
    
          document.getElementById('sa-algintdat-10').disabled = true;
          document.getElementById('o-algintdat-101').disabled = true;
          document.getElementById('o-algintdat-102').disabled = true;
          document.getElementById('o-algintdat-103').disabled = true;
          document.getElementById('o-algintdat-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algintdat10', 0)
        }
      }
    }
    