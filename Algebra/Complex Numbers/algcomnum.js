
  let algcomnum1But = document.getElementById('sa-algcomnum-1');
  let algcomnum2But = document.getElementById('sa-algcomnum-2');
  let algcomnum3But = document.getElementById('sa-algcomnum-3');
  let algcomnum4But = document.getElementById('sa-algcomnum-4');
  let algcomnum5But = document.getElementById('sa-algcomnum-5');
  let algcomnum6But = document.getElementById('sa-algcomnum-6');
  let algcomnum7But = document.getElementById('sa-algcomnum-7');
  let algcomnum8But = document.getElementById('sa-algcomnum-8');
  let algcomnum9But = document.getElementById('sa-algcomnum-9');
  let algcomnum10But = document.getElementById('sa-algcomnum-10');


  showExplanation1 = function() {
    document.getElementById('e-algcomnum-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-algcomnum-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-algcomnum-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-algcomnum-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-algcomnum-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-algcomnum-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-algcomnum-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-algcomnum-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-algcomnum-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-algcomnum-10').style.display = 'block';
     } 



     if (document.getElementById('sa-algcomnum-1') != null) {
      algcomnum1But.onclick = function () {
        if (document.getElementById('o-algcomnum-11').checked) {
          document.getElementById('r-algcomnum-11').style.color = 'red'
          document.getElementById('r-algcomnum-11').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomnum-13').style.color = 'blue'
          document.getElementById('r-algcomnum-13').innerHTML = 'Correct!'
    
          document.getElementById('b-algcomnum-13').classList.add("correct")
          document.getElementById('b-algcomnum-12').classList.add("incorrect")
          document.getElementById('b-algcomnum-11').classList.add("incorrect")
          document.getElementById('b-algcomnum-14').classList.add("incorrect")
    
          document.getElementById('sa-algcomnum-1').disabled = true;
          document.getElementById('o-algcomnum-11').disabled = true;
          document.getElementById('o-algcomnum-12').disabled = true;
          document.getElementById('o-algcomnum-13').disabled = true;
          document.getElementById('o-algcomnum-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algcomnum1', 0)
        }
    
        if (document.getElementById('o-algcomnum-12').checked) {
         
          document.getElementById('r-algcomnum-12').style.color = 'red'
          document.getElementById('r-algcomnum-12').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomnum-13').style.color = 'blue'
          document.getElementById('r-algcomnum-13').innerHTML = 'Correct!'
    
          document.getElementById('b-algcomnum-13').classList.add("correct")
          document.getElementById('b-algcomnum-12').classList.add("incorrect")
          document.getElementById('b-algcomnum-11').classList.add("incorrect")
          document.getElementById('b-algcomnum-14').classList.add("incorrect")
    
          document.getElementById('sa-algcomnum-1').disabled = true;
          document.getElementById('o-algcomnum-11').disabled = true;
          document.getElementById('o-algcomnum-12').disabled = true;
          document.getElementById('o-algcomnum-13').disabled = true;
          document.getElementById('o-algcomnum-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algcomnum1', 0)
        }
        if (document.getElementById('o-algcomnum-13').checked) {
          document.getElementById('r-algcomnum-13').style.color = 'blue'
          document.getElementById('r-algcomnum-13').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomnum-13').classList.add("correct")
          document.getElementById('b-algcomnum-12').classList.add("incorrect")
          document.getElementById('b-algcomnum-11').classList.add("incorrect")
          document.getElementById('b-algcomnum-14').classList.add("incorrect")
    
          document.getElementById('sa-algcomnum-1').disabled = true;
          document.getElementById('o-algcomnum-11').disabled = true;
          document.getElementById('o-algcomnum-12').disabled = true;
          document.getElementById('o-algcomnum-13').disabled = true;
          document.getElementById('o-algcomnum-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algcomnum1', 1)
        }
        if (document.getElementById('o-algcomnum-14').checked) {
          document.getElementById('r-algcomnum-14').style.color = 'red'
          document.getElementById('r-algcomnum-14').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomnum-13').style.color = 'blue'
          document.getElementById('r-algcomnum-13').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomnum-13').classList.add("correct")
          document.getElementById('b-algcomnum-12').classList.add("incorrect")
          document.getElementById('b-algcomnum-11').classList.add("incorrect")
          document.getElementById('b-algcomnum-14').classList.add("incorrect")
    
          document.getElementById('sa-algcomnum-1').disabled = true;
          document.getElementById('o-algcomnum-11').disabled = true;
          document.getElementById('o-algcomnum-12').disabled = true;
          document.getElementById('o-algcomnum-13').disabled = true;
          document.getElementById('o-algcomnum-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algcomnum1', 0)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-algcomnum-2') != null) {
      algcomnum2But.onclick = function() {
        if (document.getElementById('o-algcomnum-21').checked) {
          document.getElementById('r-algcomnum-21').style.color = 'red'
          document.getElementById('r-algcomnum-21').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomnum-24').style.color = 'blue'
          document.getElementById('r-algcomnum-24').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomnum-24').classList.add("correct")
          document.getElementById('b-algcomnum-21').classList.add("incorrect")
          document.getElementById('b-algcomnum-22').classList.add("incorrect")
          document.getElementById('b-algcomnum-23').classList.add("incorrect")
    
          document.getElementById('sa-algcomnum-2').disabled = true;
          document.getElementById('o-algcomnum-21').disabled = true;
          document.getElementById('o-algcomnum-22').disabled = true;
          document.getElementById('o-algcomnum-23').disabled = true;
          document.getElementById('o-algcomnum-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algcomnum2', 0)
        }
        if (document.getElementById('o-algcomnum-22').checked) {
          document.getElementById('r-algcomnum-22').style.color = 'red'
          document.getElementById('r-algcomnum-22').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomnum-24').style.color = 'blue'
          document.getElementById('r-algcomnum-24').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomnum-24').classList.add("correct")
          document.getElementById('b-algcomnum-21').classList.add("incorrect")
          document.getElementById('b-algcomnum-22').classList.add("incorrect")
          document.getElementById('b-algcomnum-23').classList.add("incorrect")
    
          document.getElementById('sa-algcomnum-2').disabled = true;
          document.getElementById('o-algcomnum-21').disabled = true;
          document.getElementById('o-algcomnum-22').disabled = true;
          document.getElementById('o-algcomnum-23').disabled = true;
          document.getElementById('o-algcomnum-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algcomnum2', 0)
        }
        if (document.getElementById('o-algcomnum-23').checked) {
          document.getElementById('r-algcomnum-23').style.color = 'red'
          document.getElementById('r-algcomnum-23').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomnum-24').style.color = 'blue'
          document.getElementById('r-algcomnum-24').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomnum-24').classList.add("correct")
          document.getElementById('b-algcomnum-21').classList.add("incorrect")
          document.getElementById('b-algcomnum-22').classList.add("incorrect")
          document.getElementById('b-algcomnum-23').classList.add("incorrect")
    
          document.getElementById('sa-algcomnum-2').disabled = true;
          document.getElementById('o-algcomnum-21').disabled = true;
          document.getElementById('o-algcomnum-22').disabled = true;
          document.getElementById('o-algcomnum-23').disabled = true;
          document.getElementById('o-algcomnum-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algcomnum2', 0)
        }
        if (document.getElementById('o-algcomnum-24').checked) {
          document.getElementById('r-algcomnum-24').style.color = 'blue'
          document.getElementById('r-algcomnum-24').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomnum-24').classList.add("correct")
          document.getElementById('b-algcomnum-21').classList.add("incorrect")
          document.getElementById('b-algcomnum-22').classList.add("incorrect")
          document.getElementById('b-algcomnum-23').classList.add("incorrect")
    
          document.getElementById('sa-algcomnum-2').disabled = true;
          document.getElementById('o-algcomnum-21').disabled = true;
          document.getElementById('o-algcomnum-22').disabled = true;
          document.getElementById('o-algcomnum-23').disabled = true;
          document.getElementById('o-algcomnum-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algcomnum2', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algcomnum-3') != null) {
      algcomnum3But.onclick = function() {
        if (document.getElementById('o-algcomnum-31').checked) {
          document.getElementById('r-algcomnum-31').style.color = 'red'
          document.getElementById('r-algcomnum-31').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomnum-32').style.color = 'blue'
          document.getElementById('r-algcomnum-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomnum-32').classList.add("correct")
          document.getElementById('b-algcomnum-31').classList.add("incorrect")
          document.getElementById('b-algcomnum-33').classList.add("incorrect")
          document.getElementById('b-algcomnum-34').classList.add("incorrect")
    
          document.getElementById('sa-algcomnum-3').disabled = true;
          document.getElementById('o-algcomnum-31').disabled = true;
          document.getElementById('o-algcomnum-32').disabled = true;
          document.getElementById('o-algcomnum-33').disabled = true;
          document.getElementById('o-algcomnum-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algcomnum3', 0)
        }
        if (document.getElementById('o-algcomnum-32').checked) {
    
          document.getElementById('r-algcomnum-32').style.color = 'blue'
          document.getElementById('r-algcomnum-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomnum-32').classList.add("correct")
          document.getElementById('b-algcomnum-31').classList.add("incorrect")
          document.getElementById('b-algcomnum-33').classList.add("incorrect")
          document.getElementById('b-algcomnum-34').classList.add("incorrect")
    
          document.getElementById('sa-algcomnum-3').disabled = true;
          document.getElementById('o-algcomnum-31').disabled = true;
          document.getElementById('o-algcomnum-32').disabled = true;
          document.getElementById('o-algcomnum-33').disabled = true;
          document.getElementById('o-algcomnum-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algcomnum3', 1)
        }
        if (document.getElementById('o-algcomnum-33').checked) {
          document.getElementById('r-algcomnum-33').style.color = 'red'
          document.getElementById('r-algcomnum-33').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomnum-32').style.color = 'blue'
          document.getElementById('r-algcomnum-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomnum-32').classList.add("correct")
          document.getElementById('b-algcomnum-31').classList.add("incorrect")
          document.getElementById('b-algcomnum-33').classList.add("incorrect")
          document.getElementById('b-algcomnum-34').classList.add("incorrect")
    
          document.getElementById('sa-algcomnum-3').disabled = true;
          document.getElementById('o-algcomnum-31').disabled = true;
          document.getElementById('o-algcomnum-32').disabled = true;
          document.getElementById('o-algcomnum-33').disabled = true;
          document.getElementById('o-algcomnum-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algcomnum3', 0)
        }
        if (document.getElementById('o-algcomnum-34').checked) {
          document.getElementById('r-algcomnum-34').style.color = 'red'
          document.getElementById('r-algcomnum-34').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomnum-32').style.color = 'blue'
          document.getElementById('r-algcomnum-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomnum-32').classList.add("correct")
          document.getElementById('b-algcomnum-31').classList.add("incorrect")
          document.getElementById('b-algcomnum-33').classList.add("incorrect")
          document.getElementById('b-algcomnum-34').classList.add("incorrect")
    
          document.getElementById('sa-algcomnum-3').disabled = true;
          document.getElementById('o-algcomnum-31').disabled = true;
          document.getElementById('o-algcomnum-32').disabled = true;
          document.getElementById('o-algcomnum-33').disabled = true;
          document.getElementById('o-algcomnum-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algcomnum3', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algcomnum-4') != null) {
      algcomnum4But.onclick = function() {
        if (document.getElementById('o-algcomnum-41').checked) {
          document.getElementById('r-algcomnum-41').style.color = 'red'
          document.getElementById('r-algcomnum-41').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomnum-44').style.color = 'blue'
          document.getElementById('r-algcomnum-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomnum-44').classList.add("correct")
          document.getElementById('b-algcomnum-41').classList.add("incorrect")
          document.getElementById('b-algcomnum-42').classList.add("incorrect")
          document.getElementById('b-algcomnum-43').classList.add("incorrect")
    
          document.getElementById('sa-algcomnum-4').disabled = true;
          document.getElementById('o-algcomnum-41').disabled = true;
          document.getElementById('o-algcomnum-42').disabled = true;
          document.getElementById('o-algcomnum-43').disabled = true;
          document.getElementById('o-algcomnum-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algcomnum4', 0)
        }
        if (document.getElementById('o-algcomnum-42').checked) {
          document.getElementById('r-algcomnum-42').style.color = 'red'
          document.getElementById('r-algcomnum-42').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomnum-44').style.color = 'blue'
          document.getElementById('r-algcomnum-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomnum-44').classList.add("correct")
          document.getElementById('b-algcomnum-41').classList.add("incorrect")
          document.getElementById('b-algcomnum-42').classList.add("incorrect")
          document.getElementById('b-algcomnum-43').classList.add("incorrect")
    
          document.getElementById('sa-algcomnum-4').disabled = true;
          document.getElementById('o-algcomnum-41').disabled = true;
          document.getElementById('o-algcomnum-42').disabled = true;
          document.getElementById('o-algcomnum-43').disabled = true;
          document.getElementById('o-algcomnum-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algcomnum4', 0)
        }
        if (document.getElementById('o-algcomnum-43').checked) {
          document.getElementById('r-algcomnum-43').style.color = 'red'
          document.getElementById('r-algcomnum-43').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomnum-44').style.color = 'blue'
          document.getElementById('r-algcomnum-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomnum-44').classList.add("correct")
          document.getElementById('b-algcomnum-41').classList.add("incorrect")
          document.getElementById('b-algcomnum-42').classList.add("incorrect")
          document.getElementById('b-algcomnum-43').classList.add("incorrect")
    
          document.getElementById('sa-algcomnum-4').disabled = true;
          document.getElementById('o-algcomnum-41').disabled = true;
          document.getElementById('o-algcomnum-42').disabled = true;
          document.getElementById('o-algcomnum-43').disabled = true;
          document.getElementById('o-algcomnum-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algcomnum4', 0)
        }
        if (document.getElementById('o-algcomnum-44').checked) {
          document.getElementById('r-algcomnum-44').style.color = 'blue'
          document.getElementById('r-algcomnum-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomnum-44').classList.add("correct")
          document.getElementById('b-algcomnum-41').classList.add("incorrect")
          document.getElementById('b-algcomnum-42').classList.add("incorrect")
          document.getElementById('b-algcomnum-43').classList.add("incorrect")
    
          document.getElementById('sa-algcomnum-4').disabled = true;
          document.getElementById('o-algcomnum-41').disabled = true;
          document.getElementById('o-algcomnum-42').disabled = true;
          document.getElementById('o-algcomnum-43').disabled = true;
          document.getElementById('o-algcomnum-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algcomnum4', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algcomnum-5') != null) {
      algcomnum5But.onclick = function() {
        if (document.getElementById('o-algcomnum-51').checked) {
          document.getElementById('r-algcomnum-51').style.color = 'red'
          document.getElementById('r-algcomnum-51').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomnum-53').style.color = 'blue'
          document.getElementById('r-algcomnum-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomnum-53').classList.add("correct")
          document.getElementById('b-algcomnum-51').classList.add("incorrect")
          document.getElementById('b-algcomnum-52').classList.add("incorrect")
          document.getElementById('b-algcomnum-54').classList.add("incorrect")
    
          document.getElementById('sa-algcomnum-5').disabled = true;
          document.getElementById('o-algcomnum-51').disabled = true;
          document.getElementById('o-algcomnum-52').disabled = true;
          document.getElementById('o-algcomnum-53').disabled = true;
          document.getElementById('o-algcomnum-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algcomnum5', 0)
        }
        if (document.getElementById('o-algcomnum-52').checked) {
          document.getElementById('r-algcomnum-52').style.color = 'red'
          document.getElementById('r-algcomnum-52').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomnum-53').style.color = 'blue'
          document.getElementById('r-algcomnum-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomnum-53').classList.add("correct")
          document.getElementById('b-algcomnum-51').classList.add("incorrect")
          document.getElementById('b-algcomnum-52').classList.add("incorrect")
          document.getElementById('b-algcomnum-54').classList.add("incorrect")
    
          document.getElementById('sa-algcomnum-5').disabled = true;
          document.getElementById('o-algcomnum-51').disabled = true;
          document.getElementById('o-algcomnum-52').disabled = true;
          document.getElementById('o-algcomnum-53').disabled = true;
          document.getElementById('o-algcomnum-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algcomnum5', 0)
        }
        if (document.getElementById('o-algcomnum-53').checked) {
          document.getElementById('r-algcomnum-53').style.color = 'blue'
          document.getElementById('r-algcomnum-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomnum-53').classList.add("correct")
          document.getElementById('b-algcomnum-51').classList.add("incorrect")
          document.getElementById('b-algcomnum-52').classList.add("incorrect")
          document.getElementById('b-algcomnum-54').classList.add("incorrect")
    
          document.getElementById('sa-algcomnum-5').disabled = true;
          document.getElementById('o-algcomnum-51').disabled = true;
          document.getElementById('o-algcomnum-52').disabled = true;
          document.getElementById('o-algcomnum-53').disabled = true;
          document.getElementById('o-algcomnum-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algcomnum5', 1)
        }
        if (document.getElementById('o-algcomnum-54').checked) {
          document.getElementById('r-algcomnum-54').style.color = 'red'
          document.getElementById('r-algcomnum-54').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomnum-53').style.color = 'blue'
          document.getElementById('r-algcomnum-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomnum-53').classList.add("correct")
          document.getElementById('b-algcomnum-51').classList.add("incorrect")
          document.getElementById('b-algcomnum-52').classList.add("incorrect")
          document.getElementById('b-algcomnum-54').classList.add("incorrect")
    
          document.getElementById('sa-algcomnum-5').disabled = true;
          document.getElementById('o-algcomnum-51').disabled = true;
          document.getElementById('o-algcomnum-52').disabled = true;
          document.getElementById('o-algcomnum-53').disabled = true;
          document.getElementById('o-algcomnum-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algcomnum5', 0)
        }
      }
    }
        
         
      if (document.getElementById('sa-algcomnum-6') != null) {
      algcomnum6But.onclick = function() {
        if (document.getElementById('o-algcomnum-61').checked) {
          document.getElementById('r-algcomnum-61').style.color = 'red'
          document.getElementById('r-algcomnum-61').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomnum-64').style.color = 'blue'
          document.getElementById('r-algcomnum-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomnum-64').classList.add("correct")
          document.getElementById('b-algcomnum-61').classList.add("incorrect")
          document.getElementById('b-algcomnum-62').classList.add("incorrect")
          document.getElementById('b-algcomnum-63').classList.add("incorrect")
    
          document.getElementById('sa-algcomnum-6').disabled = true;
          document.getElementById('o-algcomnum-61').disabled = true;
          document.getElementById('o-algcomnum-62').disabled = true;
          document.getElementById('o-algcomnum-63').disabled = true;
          document.getElementById('o-algcomnum-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algcomnum6', 0)
        }
        if (document.getElementById('o-algcomnum-62').checked) {
          document.getElementById('r-algcomnum-62').style.color = 'red'
          document.getElementById('r-algcomnum-62').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomnum-64').style.color = 'blue'
          document.getElementById('r-algcomnum-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomnum-64').classList.add("correct")
          document.getElementById('b-algcomnum-61').classList.add("incorrect")
          document.getElementById('b-algcomnum-62').classList.add("incorrect")
          document.getElementById('b-algcomnum-63').classList.add("incorrect")
    
          document.getElementById('sa-algcomnum-6').disabled = true;
          document.getElementById('o-algcomnum-61').disabled = true;
          document.getElementById('o-algcomnum-62').disabled = true;
          document.getElementById('o-algcomnum-63').disabled = true;
          document.getElementById('o-algcomnum-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algcomnum6', 0)
        }
        if (document.getElementById('o-algcomnum-63').checked) {
          document.getElementById('r-algcomnum-63').style.color = 'red'
          document.getElementById('r-algcomnum-63').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomnum-64').style.color = 'blue'
          document.getElementById('r-algcomnum-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomnum-64').classList.add("correct")
          document.getElementById('b-algcomnum-61').classList.add("incorrect")
          document.getElementById('b-algcomnum-62').classList.add("incorrect")
          document.getElementById('b-algcomnum-63').classList.add("incorrect")
    
          document.getElementById('sa-algcomnum-6').disabled = true;
          document.getElementById('o-algcomnum-61').disabled = true;
          document.getElementById('o-algcomnum-62').disabled = true;
          document.getElementById('o-algcomnum-63').disabled = true;
          document.getElementById('o-algcomnum-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algcomnum6', 0)
        }
        if (document.getElementById('o-algcomnum-64').checked) {
          document.getElementById('r-algcomnum-64').style.color = 'blue'
          document.getElementById('r-algcomnum-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomnum-64').classList.add("correct")
          document.getElementById('b-algcomnum-61').classList.add("incorrect")
          document.getElementById('b-algcomnum-62').classList.add("incorrect")
          document.getElementById('b-algcomnum-63').classList.add("incorrect")
    
          document.getElementById('sa-algcomnum-6').disabled = true;
          document.getElementById('o-algcomnum-61').disabled = true;
          document.getElementById('o-algcomnum-62').disabled = true;
          document.getElementById('o-algcomnum-63').disabled = true;
          document.getElementById('o-algcomnum-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algcomnum6', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algcomnum-7') != null) {
      algcomnum7But.onclick = function() {
        if (document.getElementById('o-algcomnum-71').checked) {
          document.getElementById('r-algcomnum-71').style.color = 'red'
          document.getElementById('r-algcomnum-71').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomnum-74').style.color = 'blue'
          document.getElementById('r-algcomnum-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomnum-74').classList.add("correct")
          document.getElementById('b-algcomnum-71').classList.add("incorrect")
          document.getElementById('b-algcomnum-72').classList.add("incorrect")
          document.getElementById('b-algcomnum-73').classList.add("incorrect")
    
          document.getElementById('sa-algcomnum-7').disabled = true;
          document.getElementById('o-algcomnum-71').disabled = true;
          document.getElementById('o-algcomnum-72').disabled = true;
          document.getElementById('o-algcomnum-73').disabled = true;
          document.getElementById('o-algcomnum-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algcomnum7', 0)
        }
        if (document.getElementById('o-algcomnum-72').checked) {
          document.getElementById('r-algcomnum-72').style.color = 'red'
          document.getElementById('r-algcomnum-72').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomnum-74').style.color = 'blue'
          document.getElementById('r-algcomnum-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomnum-74').classList.add("correct")
          document.getElementById('b-algcomnum-71').classList.add("incorrect")
          document.getElementById('b-algcomnum-72').classList.add("incorrect")
          document.getElementById('b-algcomnum-73').classList.add("incorrect")
    
          document.getElementById('sa-algcomnum-7').disabled = true;
          document.getElementById('o-algcomnum-71').disabled = true;
          document.getElementById('o-algcomnum-72').disabled = true;
          document.getElementById('o-algcomnum-73').disabled = true;
          document.getElementById('o-algcomnum-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algcomnum7', 0)
        }
        if (document.getElementById('o-algcomnum-73').checked) {
          document.getElementById('r-algcomnum-73').style.color = 'red'
          document.getElementById('r-algcomnum-73').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomnum-74').style.color = 'blue'
          document.getElementById('r-algcomnum-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomnum-74').classList.add("correct")
          document.getElementById('b-algcomnum-71').classList.add("incorrect")
          document.getElementById('b-algcomnum-72').classList.add("incorrect")
          document.getElementById('b-algcomnum-73').classList.add("incorrect")
    
          document.getElementById('sa-algcomnum-7').disabled = true;
          document.getElementById('o-algcomnum-71').disabled = true;
          document.getElementById('o-algcomnum-72').disabled = true;
          document.getElementById('o-algcomnum-73').disabled = true;
          document.getElementById('o-algcomnum-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algcomnum7', 0)
        }
        if (document.getElementById('o-algcomnum-74').checked) {
          document.getElementById('r-algcomnum-74').style.color = 'blue'
          document.getElementById('r-algcomnum-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomnum-74').classList.add("correct")
          document.getElementById('b-algcomnum-71').classList.add("incorrect")
          document.getElementById('b-algcomnum-72').classList.add("incorrect")
          document.getElementById('b-algcomnum-73').classList.add("incorrect")
    
          document.getElementById('sa-algcomnum-7').disabled = true;
          document.getElementById('o-algcomnum-71').disabled = true;
          document.getElementById('o-algcomnum-72').disabled = true;
          document.getElementById('o-algcomnum-73').disabled = true;
          document.getElementById('o-algcomnum-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algcomnum7', 1)
        }
      }
    }
    
    
    if (document.getElementById('sa-algcomnum-8') != null) {
      algcomnum8But.onclick = function() {
        if (document.getElementById('o-algcomnum-81').checked) {
          document.getElementById('r-algcomnum-81').style.color = 'red'
          document.getElementById('r-algcomnum-81').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomnum-82').style.color = 'blue'
          document.getElementById('r-algcomnum-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomnum-82').classList.add("correct")
          document.getElementById('b-algcomnum-81').classList.add("incorrect")
          document.getElementById('b-algcomnum-83').classList.add("incorrect")
          document.getElementById('b-algcomnum-84').classList.add("incorrect")
    
          document.getElementById('sa-algcomnum-8').disabled = true;
          document.getElementById('o-algcomnum-81').disabled = true;
          document.getElementById('o-algcomnum-82').disabled = true;
          document.getElementById('o-algcomnum-83').disabled = true;
          document.getElementById('o-algcomnum-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algcomnum8', 0)
        }
        if (document.getElementById('o-algcomnum-82').checked) {
          document.getElementById('r-algcomnum-82').style.color = 'blue'
          document.getElementById('r-algcomnum-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomnum-82').classList.add("correct")
          document.getElementById('b-algcomnum-81').classList.add("incorrect")
          document.getElementById('b-algcomnum-83').classList.add("incorrect")
          document.getElementById('b-algcomnum-84').classList.add("incorrect")
    
          document.getElementById('sa-algcomnum-8').disabled = true;
          document.getElementById('o-algcomnum-81').disabled = true;
          document.getElementById('o-algcomnum-82').disabled = true;
          document.getElementById('o-algcomnum-83').disabled = true;
          document.getElementById('o-algcomnum-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algcomnum8', 1)
        }
        if (document.getElementById('o-algcomnum-83').checked) {
          document.getElementById('r-algcomnum-83').style.color = 'red'
          document.getElementById('r-algcomnum-83').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomnum-82').style.color = 'blue'
          document.getElementById('r-algcomnum-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomnum-82').classList.add("correct")
          document.getElementById('b-algcomnum-81').classList.add("incorrect")
          document.getElementById('b-algcomnum-83').classList.add("incorrect")
          document.getElementById('b-algcomnum-84').classList.add("incorrect")
    
          document.getElementById('sa-algcomnum-8').disabled = true;
          document.getElementById('o-algcomnum-81').disabled = true;
          document.getElementById('o-algcomnum-82').disabled = true;
          document.getElementById('o-algcomnum-83').disabled = true;
          document.getElementById('o-algcomnum-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algcomnum8', 0)
        }
        if (document.getElementById('o-algcomnum-84').checked) {
          document.getElementById('r-algcomnum-84').style.color = 'red'
          document.getElementById('r-algcomnum-84').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomnum-82').style.color = 'blue'
          document.getElementById('r-algcomnum-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomnum-82').classList.add("correct")
          document.getElementById('b-algcomnum-81').classList.add("incorrect")
          document.getElementById('b-algcomnum-83').classList.add("incorrect")
          document.getElementById('b-algcomnum-84').classList.add("incorrect")
    
          document.getElementById('sa-algcomnum-8').disabled = true;
          document.getElementById('o-algcomnum-81').disabled = true;
          document.getElementById('o-algcomnum-82').disabled = true;
          document.getElementById('o-algcomnum-83').disabled = true;
          document.getElementById('o-algcomnum-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algcomnum8', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-algcomnum-9') != null) {
      algcomnum9But.onclick = function() {
        if (document.getElementById('o-algcomnum-91').checked) {
          document.getElementById('r-algcomnum-91').style.color = 'red'
          document.getElementById('r-algcomnum-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomnum-94').style.color = 'blue'
          document.getElementById('r-algcomnum-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomnum-94').classList.add("correct")
          document.getElementById('b-algcomnum-91').classList.add("incorrect")
          document.getElementById('b-algcomnum-92').classList.add("incorrect")
          document.getElementById('b-algcomnum-93').classList.add("incorrect")
    
          document.getElementById('sa-algcomnum-9').disabled = true;
          document.getElementById('o-algcomnum-91').disabled = true;
          document.getElementById('o-algcomnum-92').disabled = true;
          document.getElementById('o-algcomnum-93').disabled = true;
          document.getElementById('o-algcomnum-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algcomnum9', 0)
        }
        if (document.getElementById('o-algcomnum-92').checked) {
          document.getElementById('r-algcomnum-91').style.color = 'red'
          document.getElementById('r-algcomnum-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomnum-94').style.color = 'blue'
          document.getElementById('r-algcomnum-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomnum-94').classList.add("correct")
          document.getElementById('b-algcomnum-91').classList.add("incorrect")
          document.getElementById('b-algcomnum-92').classList.add("incorrect")
          document.getElementById('b-algcomnum-93').classList.add("incorrect")
    
          document.getElementById('sa-algcomnum-9').disabled = true;
          document.getElementById('o-algcomnum-91').disabled = true;
          document.getElementById('o-algcomnum-92').disabled = true;
          document.getElementById('o-algcomnum-93').disabled = true;
          document.getElementById('o-algcomnum-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algcomnum9', 0)
        }
        if (document.getElementById('o-algcomnum-93').checked) {
          document.getElementById('r-algcomnum-91').style.color = 'red'
          document.getElementById('r-algcomnum-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomnum-94').style.color = 'blue'
          document.getElementById('r-algcomnum-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomnum-94').classList.add("correct")
          document.getElementById('b-algcomnum-91').classList.add("incorrect")
          document.getElementById('b-algcomnum-92').classList.add("incorrect")
          document.getElementById('b-algcomnum-93').classList.add("incorrect")
    
          document.getElementById('sa-algcomnum-9').disabled = true;
          document.getElementById('o-algcomnum-91').disabled = true;
          document.getElementById('o-algcomnum-92').disabled = true;
          document.getElementById('o-algcomnum-93').disabled = true;
          document.getElementById('o-algcomnum-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algcomnum9', 0)
        }
        if (document.getElementById('o-algcomnum-94').checked) {
          document.getElementById('r-algcomnum-94').style.color = 'blue'
          document.getElementById('r-algcomnum-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomnum-94').classList.add("correct")
          document.getElementById('b-algcomnum-91').classList.add("incorrect")
          document.getElementById('b-algcomnum-92').classList.add("incorrect")
          document.getElementById('b-algcomnum-93').classList.add("incorrect")
    
          document.getElementById('sa-algcomnum-9').disabled = true;
          document.getElementById('o-algcomnum-91').disabled = true;
          document.getElementById('o-algcomnum-92').disabled = true;
          document.getElementById('o-algcomnum-93').disabled = true;
          document.getElementById('o-algcomnum-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algcomnum9', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algcomnum-10') != null) {
      algcomnum10But.onclick = function() {
        if (document.getElementById('o-algcomnum-101').checked) {
          document.getElementById('r-algcomnum-101').style.color = 'red'
          document.getElementById('r-algcomnum-101').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomnum-102').style.color = 'blue'
          document.getElementById('r-algcomnum-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomnum-102').classList.add("correct")
          document.getElementById('b-algcomnum-101').classList.add("incorrect")
          document.getElementById('b-algcomnum-103').classList.add("incorrect")
          document.getElementById('b-algcomnum-104').classList.add("incorrect")
    
          document.getElementById('sa-algcomnum-10').disabled = true;
          document.getElementById('o-algcomnum-101').disabled = true;
          document.getElementById('o-algcomnum-102').disabled = true;
          document.getElementById('o-algcomnum-103').disabled = true;
          document.getElementById('o-algcomnum-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algcomnum10', 0)
        }
        if (document.getElementById('o-algcomnum-102').checked) {
          document.getElementById('r-algcomnum-102').style.color = 'blue'
          document.getElementById('r-algcomnum-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomnum-102').classList.add("correct")
          document.getElementById('b-algcomnum-101').classList.add("incorrect")
          document.getElementById('b-algcomnum-103').classList.add("incorrect")
          document.getElementById('b-algcomnum-104').classList.add("incorrect")
    
          document.getElementById('sa-algcomnum-10').disabled = true;
          document.getElementById('o-algcomnum-101').disabled = true;
          document.getElementById('o-algcomnum-102').disabled = true;
          document.getElementById('o-algcomnum-103').disabled = true;
          document.getElementById('o-algcomnum-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algcomnum10', 1)
        }
        if (document.getElementById('o-algcomnum-103').checked) {
          document.getElementById('r-algcomnum-103').style.color = 'red'
          document.getElementById('r-algcomnum-103').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomnum-102').style.color = 'blue'
          document.getElementById('r-algcomnum-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomnum-102').classList.add("correct")
          document.getElementById('b-algcomnum-101').classList.add("incorrect")
          document.getElementById('b-algcomnum-103').classList.add("incorrect")
          document.getElementById('b-algcomnum-104').classList.add("incorrect")
    
          document.getElementById('sa-algcomnum-10').disabled = true;
          document.getElementById('o-algcomnum-101').disabled = true;
          document.getElementById('o-algcomnum-102').disabled = true;
          document.getElementById('o-algcomnum-103').disabled = true;
          document.getElementById('o-algcomnum-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algcomnum10', 0)
        }
        if (document.getElementById('o-algcomnum-104').checked) {
          document.getElementById('r-algcomnum-104').style.color = 'red'
          document.getElementById('r-algcomnum-104').innerHTML = 'Incorrect!'
          document.getElementById('r-algcomnum-102').style.color = 'blue'
          document.getElementById('r-algcomnum-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algcomnum-102').classList.add("correct")
          document.getElementById('b-algcomnum-101').classList.add("incorrect")
          document.getElementById('b-algcomnum-103').classList.add("incorrect")
          document.getElementById('b-algcomnum-104').classList.add("incorrect")
    
          document.getElementById('sa-algcomnum-10').disabled = true;
          document.getElementById('o-algcomnum-101').disabled = true;
          document.getElementById('o-algcomnum-102').disabled = true;
          document.getElementById('o-algcomnum-103').disabled = true;
          document.getElementById('o-algcomnum-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algcomnum10', 0)
        }
      }
    }
    