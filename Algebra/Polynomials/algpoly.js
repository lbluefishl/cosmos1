
  let algpoly1But = document.getElementById('sa-algpoly-1');
  let algpoly2But = document.getElementById('sa-algpoly-2');
  let algpoly3But = document.getElementById('sa-algpoly-3');
  let algpoly4But = document.getElementById('sa-algpoly-4');
  let algpoly5But = document.getElementById('sa-algpoly-5');
  let algpoly6But = document.getElementById('sa-algpoly-6');
  let algpoly7But = document.getElementById('sa-algpoly-7');
  let algpoly8But = document.getElementById('sa-algpoly-8');
  let algpoly9But = document.getElementById('sa-algpoly-9');
  let algpoly10But = document.getElementById('sa-algpoly-10');


  showExplanation1 = function() {
    document.getElementById('e-algpoly-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-algpoly-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-algpoly-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-algpoly-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-algpoly-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-algpoly-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-algpoly-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-algpoly-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-algpoly-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-algpoly-10').style.display = 'block';
     } 



     if (document.getElementById('sa-algpoly-1') != null) {
      algpoly1But.onclick = function () {
        if (document.getElementById('o-algpoly-11').checked) {
          document.getElementById('r-algpoly-11').style.color = 'red'
          document.getElementById('r-algpoly-11').innerHTML = 'Incorrect!'
          document.getElementById('r-algpoly-14').style.color = 'blue'
          document.getElementById('r-algpoly-14').innerHTML = 'Correct!'
    
          document.getElementById('b-algpoly-14').classList.add("correct")
          document.getElementById('b-algpoly-12').classList.add("incorrect")
          document.getElementById('b-algpoly-13').classList.add("incorrect")
          document.getElementById('b-algpoly-11').classList.add("incorrect")
    
          document.getElementById('sa-algpoly-1').disabled = true;
          document.getElementById('o-algpoly-11').disabled = true;
          document.getElementById('o-algpoly-12').disabled = true;
          document.getElementById('o-algpoly-13').disabled = true;
          document.getElementById('o-algpoly-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algpoly1', 0)
        }
    
        if (document.getElementById('o-algpoly-12').checked) {
         
          document.getElementById('r-algpoly-12').style.color = 'red'
          document.getElementById('r-algpoly-12').innerHTML = 'Incorrect!'
          document.getElementById('r-algpoly-14').style.color = 'blue'
          document.getElementById('r-algpoly-14').innerHTML = 'Correct!'
    
          document.getElementById('b-algpoly-14').classList.add("correct")
          document.getElementById('b-algpoly-12').classList.add("incorrect")
          document.getElementById('b-algpoly-13').classList.add("incorrect")
          document.getElementById('b-algpoly-11').classList.add("incorrect")
    
          document.getElementById('sa-algpoly-1').disabled = true;
          document.getElementById('o-algpoly-11').disabled = true;
          document.getElementById('o-algpoly-12').disabled = true;
          document.getElementById('o-algpoly-13').disabled = true;
          document.getElementById('o-algpoly-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algpoly1', 0)
        }
        if (document.getElementById('o-algpoly-13').checked) {
          document.getElementById('r-algpoly-13').style.color = 'red'
          document.getElementById('r-algpoly-13').innerHTML = 'Incorrect!'
          document.getElementById('r-algpoly-14').style.color = 'blue'
          document.getElementById('r-algpoly-14').innerHTML = 'Correct!'
          
          document.getElementById('b-algpoly-14').classList.add("correct")
          document.getElementById('b-algpoly-12').classList.add("incorrect")
          document.getElementById('b-algpoly-13').classList.add("incorrect")
          document.getElementById('b-algpoly-11').classList.add("incorrect")
    
          document.getElementById('sa-algpoly-1').disabled = true;
          document.getElementById('o-algpoly-11').disabled = true;
          document.getElementById('o-algpoly-12').disabled = true;
          document.getElementById('o-algpoly-13').disabled = true;
          document.getElementById('o-algpoly-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algpoly1', 0)
        }
        if (document.getElementById('o-algpoly-14').checked) {
          document.getElementById('r-algpoly-14').style.color = 'blue'
          document.getElementById('r-algpoly-14').innerHTML = 'Correct!'
          
          document.getElementById('b-algpoly-14').classList.add("correct")
          document.getElementById('b-algpoly-12').classList.add("incorrect")
          document.getElementById('b-algpoly-13').classList.add("incorrect")
          document.getElementById('b-algpoly-11').classList.add("incorrect")
    
          document.getElementById('sa-algpoly-1').disabled = true;
          document.getElementById('o-algpoly-11').disabled = true;
          document.getElementById('o-algpoly-12').disabled = true;
          document.getElementById('o-algpoly-13').disabled = true;
          document.getElementById('o-algpoly-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algpoly1', 1)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-algpoly-2') != null) {
      algpoly2But.onclick = function() {
        if (document.getElementById('o-algpoly-21').checked) {
          document.getElementById('r-algpoly-21').style.color = 'red'
          document.getElementById('r-algpoly-21').innerHTML = 'Incorrect!'
          document.getElementById('r-algpoly-23').style.color = 'blue'
          document.getElementById('r-algpoly-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algpoly-23').classList.add("correct")
          document.getElementById('b-algpoly-21').classList.add("incorrect")
          document.getElementById('b-algpoly-22').classList.add("incorrect")
          document.getElementById('b-algpoly-24').classList.add("incorrect")
    
          document.getElementById('sa-algpoly-2').disabled = true;
          document.getElementById('o-algpoly-21').disabled = true;
          document.getElementById('o-algpoly-22').disabled = true;
          document.getElementById('o-algpoly-23').disabled = true;
          document.getElementById('o-algpoly-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algpoly2', 0)
        }
        if (document.getElementById('o-algpoly-22').checked) {
          document.getElementById('r-algpoly-22').style.color = 'red'
          document.getElementById('r-algpoly-22').innerHTML = 'Incorrect!'
          document.getElementById('r-algpoly-23').style.color = 'blue'
          document.getElementById('r-algpoly-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algpoly-23').classList.add("correct")
          document.getElementById('b-algpoly-21').classList.add("incorrect")
          document.getElementById('b-algpoly-22').classList.add("incorrect")
          document.getElementById('b-algpoly-24').classList.add("incorrect")
    
          document.getElementById('sa-algpoly-2').disabled = true;
          document.getElementById('o-algpoly-21').disabled = true;
          document.getElementById('o-algpoly-22').disabled = true;
          document.getElementById('o-algpoly-23').disabled = true;
          document.getElementById('o-algpoly-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algpoly2', 0)
        }
        if (document.getElementById('o-algpoly-23').checked) {
          document.getElementById('r-algpoly-23').style.color = 'blue'
          document.getElementById('r-algpoly-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algpoly-23').classList.add("correct")
          document.getElementById('b-algpoly-21').classList.add("incorrect")
          document.getElementById('b-algpoly-22').classList.add("incorrect")
          document.getElementById('b-algpoly-24').classList.add("incorrect")
    
          document.getElementById('sa-algpoly-2').disabled = true;
          document.getElementById('o-algpoly-21').disabled = true;
          document.getElementById('o-algpoly-22').disabled = true;
          document.getElementById('o-algpoly-23').disabled = true;
          document.getElementById('o-algpoly-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algpoly2', 1)
        }
        if (document.getElementById('o-algpoly-24').checked) {
          document.getElementById('r-algpoly-24').style.color = 'red'
          document.getElementById('r-algpoly-24').innerHTML = 'Incorrect!'
          document.getElementById('r-algpoly-23').style.color = 'blue'
          document.getElementById('r-algpoly-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algpoly-23').classList.add("correct")
          document.getElementById('b-algpoly-21').classList.add("incorrect")
          document.getElementById('b-algpoly-22').classList.add("incorrect")
          document.getElementById('b-algpoly-24').classList.add("incorrect")
    
          document.getElementById('sa-algpoly-2').disabled = true;
          document.getElementById('o-algpoly-21').disabled = true;
          document.getElementById('o-algpoly-22').disabled = true;
          document.getElementById('o-algpoly-23').disabled = true;
          document.getElementById('o-algpoly-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algpoly2', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algpoly-3') != null) {
      algpoly3But.onclick = function() {
        if (document.getElementById('o-algpoly-31').checked) {
          document.getElementById('r-algpoly-31').style.color = 'red'
          document.getElementById('r-algpoly-31').innerHTML = 'Incorrect!'
          document.getElementById('r-algpoly-32').style.color = 'blue'
          document.getElementById('r-algpoly-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algpoly-32').classList.add("correct")
          document.getElementById('b-algpoly-31').classList.add("incorrect")
          document.getElementById('b-algpoly-33').classList.add("incorrect")
          document.getElementById('b-algpoly-34').classList.add("incorrect")
    
          document.getElementById('sa-algpoly-3').disabled = true;
          document.getElementById('o-algpoly-31').disabled = true;
          document.getElementById('o-algpoly-32').disabled = true;
          document.getElementById('o-algpoly-33').disabled = true;
          document.getElementById('o-algpoly-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algpoly3', 0)
        }
        if (document.getElementById('o-algpoly-32').checked) {
    
          document.getElementById('r-algpoly-32').style.color = 'blue'
          document.getElementById('r-algpoly-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algpoly-32').classList.add("correct")
          document.getElementById('b-algpoly-31').classList.add("incorrect")
          document.getElementById('b-algpoly-33').classList.add("incorrect")
          document.getElementById('b-algpoly-34').classList.add("incorrect")
    
          document.getElementById('sa-algpoly-3').disabled = true;
          document.getElementById('o-algpoly-31').disabled = true;
          document.getElementById('o-algpoly-32').disabled = true;
          document.getElementById('o-algpoly-33').disabled = true;
          document.getElementById('o-algpoly-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algpoly3', 1)
        }
        if (document.getElementById('o-algpoly-33').checked) {
          document.getElementById('r-algpoly-33').style.color = 'red'
          document.getElementById('r-algpoly-33').innerHTML = 'Incorrect!'
          document.getElementById('r-algpoly-32').style.color = 'blue'
          document.getElementById('r-algpoly-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algpoly-32').classList.add("correct")
          document.getElementById('b-algpoly-31').classList.add("incorrect")
          document.getElementById('b-algpoly-33').classList.add("incorrect")
          document.getElementById('b-algpoly-34').classList.add("incorrect")
    
          document.getElementById('sa-algpoly-3').disabled = true;
          document.getElementById('o-algpoly-31').disabled = true;
          document.getElementById('o-algpoly-32').disabled = true;
          document.getElementById('o-algpoly-33').disabled = true;
          document.getElementById('o-algpoly-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algpoly3', 0)
        }
        if (document.getElementById('o-algpoly-34').checked) {
          document.getElementById('r-algpoly-34').style.color = 'red'
          document.getElementById('r-algpoly-34').innerHTML = 'Incorrect!'
          document.getElementById('r-algpoly-32').style.color = 'blue'
          document.getElementById('r-algpoly-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algpoly-32').classList.add("correct")
          document.getElementById('b-algpoly-31').classList.add("incorrect")
          document.getElementById('b-algpoly-33').classList.add("incorrect")
          document.getElementById('b-algpoly-34').classList.add("incorrect")
    
          document.getElementById('sa-algpoly-3').disabled = true;
          document.getElementById('o-algpoly-31').disabled = true;
          document.getElementById('o-algpoly-32').disabled = true;
          document.getElementById('o-algpoly-33').disabled = true;
          document.getElementById('o-algpoly-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algpoly3', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algpoly-4') != null) {
      algpoly4But.onclick = function() {
        if (document.getElementById('o-algpoly-41').checked) {
          document.getElementById('r-algpoly-41').style.color = 'red'
          document.getElementById('r-algpoly-41').innerHTML = 'Incorrect!'
          document.getElementById('r-algpoly-44').style.color = 'blue'
          document.getElementById('r-algpoly-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algpoly-44').classList.add("correct")
          document.getElementById('b-algpoly-41').classList.add("incorrect")
          document.getElementById('b-algpoly-42').classList.add("incorrect")
          document.getElementById('b-algpoly-43').classList.add("incorrect")
    
          document.getElementById('sa-algpoly-4').disabled = true;
          document.getElementById('o-algpoly-41').disabled = true;
          document.getElementById('o-algpoly-42').disabled = true;
          document.getElementById('o-algpoly-43').disabled = true;
          document.getElementById('o-algpoly-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algpoly4', 0)
        }
        if (document.getElementById('o-algpoly-42').checked) {
          document.getElementById('r-algpoly-42').style.color = 'red'
          document.getElementById('r-algpoly-42').innerHTML = 'Incorrect!'
          document.getElementById('r-algpoly-44').style.color = 'blue'
          document.getElementById('r-algpoly-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algpoly-44').classList.add("correct")
          document.getElementById('b-algpoly-41').classList.add("incorrect")
          document.getElementById('b-algpoly-42').classList.add("incorrect")
          document.getElementById('b-algpoly-43').classList.add("incorrect")
    
          document.getElementById('sa-algpoly-4').disabled = true;
          document.getElementById('o-algpoly-41').disabled = true;
          document.getElementById('o-algpoly-42').disabled = true;
          document.getElementById('o-algpoly-43').disabled = true;
          document.getElementById('o-algpoly-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algpoly4', 0)
        }
        if (document.getElementById('o-algpoly-43').checked) {
          document.getElementById('r-algpoly-43').style.color = 'red'
          document.getElementById('r-algpoly-43').innerHTML = 'Incorrect!'
          document.getElementById('r-algpoly-44').style.color = 'blue'
          document.getElementById('r-algpoly-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algpoly-44').classList.add("correct")
          document.getElementById('b-algpoly-41').classList.add("incorrect")
          document.getElementById('b-algpoly-42').classList.add("incorrect")
          document.getElementById('b-algpoly-43').classList.add("incorrect")
    
          document.getElementById('sa-algpoly-4').disabled = true;
          document.getElementById('o-algpoly-41').disabled = true;
          document.getElementById('o-algpoly-42').disabled = true;
          document.getElementById('o-algpoly-43').disabled = true;
          document.getElementById('o-algpoly-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algpoly4', 0)
        }
        if (document.getElementById('o-algpoly-44').checked) {
          document.getElementById('r-algpoly-44').style.color = 'blue'
          document.getElementById('r-algpoly-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algpoly-44').classList.add("correct")
          document.getElementById('b-algpoly-41').classList.add("incorrect")
          document.getElementById('b-algpoly-42').classList.add("incorrect")
          document.getElementById('b-algpoly-43').classList.add("incorrect")
    
          document.getElementById('sa-algpoly-4').disabled = true;
          document.getElementById('o-algpoly-41').disabled = true;
          document.getElementById('o-algpoly-42').disabled = true;
          document.getElementById('o-algpoly-43').disabled = true;
          document.getElementById('o-algpoly-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algpoly4', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algpoly-5') != null) {
      algpoly5But.onclick = function() {
        if (document.getElementById('o-algpoly-51').checked) {
          document.getElementById('r-algpoly-51').style.color = 'red'
          document.getElementById('r-algpoly-51').innerHTML = 'Incorrect!'
          document.getElementById('r-algpoly-53').style.color = 'blue'
          document.getElementById('r-algpoly-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algpoly-53').classList.add("correct")
          document.getElementById('b-algpoly-51').classList.add("incorrect")
          document.getElementById('b-algpoly-52').classList.add("incorrect")
          document.getElementById('b-algpoly-54').classList.add("incorrect")
    
          document.getElementById('sa-algpoly-5').disabled = true;
          document.getElementById('o-algpoly-51').disabled = true;
          document.getElementById('o-algpoly-52').disabled = true;
          document.getElementById('o-algpoly-53').disabled = true;
          document.getElementById('o-algpoly-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algpoly5', 0)
        }
        if (document.getElementById('o-algpoly-52').checked) {
          document.getElementById('r-algpoly-52').style.color = 'red'
          document.getElementById('r-algpoly-52').innerHTML = 'Incorrect!'
          document.getElementById('r-algpoly-53').style.color = 'blue'
          document.getElementById('r-algpoly-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algpoly-53').classList.add("correct")
          document.getElementById('b-algpoly-51').classList.add("incorrect")
          document.getElementById('b-algpoly-52').classList.add("incorrect")
          document.getElementById('b-algpoly-54').classList.add("incorrect")
    
          document.getElementById('sa-algpoly-5').disabled = true;
          document.getElementById('o-algpoly-51').disabled = true;
          document.getElementById('o-algpoly-52').disabled = true;
          document.getElementById('o-algpoly-53').disabled = true;
          document.getElementById('o-algpoly-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algpoly5', 0)
        }
        if (document.getElementById('o-algpoly-53').checked) {
          document.getElementById('r-algpoly-53').style.color = 'blue'
          document.getElementById('r-algpoly-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algpoly-53').classList.add("correct")
          document.getElementById('b-algpoly-51').classList.add("incorrect")
          document.getElementById('b-algpoly-52').classList.add("incorrect")
          document.getElementById('b-algpoly-54').classList.add("incorrect")
    
          document.getElementById('sa-algpoly-5').disabled = true;
          document.getElementById('o-algpoly-51').disabled = true;
          document.getElementById('o-algpoly-52').disabled = true;
          document.getElementById('o-algpoly-53').disabled = true;
          document.getElementById('o-algpoly-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algpoly5', 1)
        }
        if (document.getElementById('o-algpoly-54').checked) {
          document.getElementById('r-algpoly-54').style.color = 'red'
          document.getElementById('r-algpoly-54').innerHTML = 'Incorrect!'
          document.getElementById('r-algpoly-53').style.color = 'blue'
          document.getElementById('r-algpoly-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algpoly-53').classList.add("correct")
          document.getElementById('b-algpoly-51').classList.add("incorrect")
          document.getElementById('b-algpoly-52').classList.add("incorrect")
          document.getElementById('b-algpoly-54').classList.add("incorrect")
    
          document.getElementById('sa-algpoly-5').disabled = true;
          document.getElementById('o-algpoly-51').disabled = true;
          document.getElementById('o-algpoly-52').disabled = true;
          document.getElementById('o-algpoly-53').disabled = true;
          document.getElementById('o-algpoly-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algpoly5', 0)
        }
      }
    }
        
         
      if (document.getElementById('sa-algpoly-6') != null) {
      algpoly6But.onclick = function() {
        if (document.getElementById('o-algpoly-61').checked) {
          document.getElementById('r-algpoly-61').style.color = 'red'
          document.getElementById('r-algpoly-61').innerHTML = 'Incorrect!'
          document.getElementById('r-algpoly-64').style.color = 'blue'
          document.getElementById('r-algpoly-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algpoly-64').classList.add("correct")
          document.getElementById('b-algpoly-61').classList.add("incorrect")
          document.getElementById('b-algpoly-62').classList.add("incorrect")
          document.getElementById('b-algpoly-63').classList.add("incorrect")
    
          document.getElementById('sa-algpoly-6').disabled = true;
          document.getElementById('o-algpoly-61').disabled = true;
          document.getElementById('o-algpoly-62').disabled = true;
          document.getElementById('o-algpoly-63').disabled = true;
          document.getElementById('o-algpoly-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algpoly6', 0)
        }
        if (document.getElementById('o-algpoly-62').checked) {
          document.getElementById('r-algpoly-62').style.color = 'red'
          document.getElementById('r-algpoly-62').innerHTML = 'Incorrect!'
          document.getElementById('r-algpoly-64').style.color = 'blue'
          document.getElementById('r-algpoly-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algpoly-64').classList.add("correct")
          document.getElementById('b-algpoly-61').classList.add("incorrect")
          document.getElementById('b-algpoly-62').classList.add("incorrect")
          document.getElementById('b-algpoly-63').classList.add("incorrect")
    
          document.getElementById('sa-algpoly-6').disabled = true;
          document.getElementById('o-algpoly-61').disabled = true;
          document.getElementById('o-algpoly-62').disabled = true;
          document.getElementById('o-algpoly-63').disabled = true;
          document.getElementById('o-algpoly-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algpoly6', 0)
        }
        if (document.getElementById('o-algpoly-63').checked) {
          document.getElementById('r-algpoly-63').style.color = 'red'
          document.getElementById('r-algpoly-63').innerHTML = 'Incorrect!'
          document.getElementById('r-algpoly-64').style.color = 'blue'
          document.getElementById('r-algpoly-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algpoly-64').classList.add("correct")
          document.getElementById('b-algpoly-61').classList.add("incorrect")
          document.getElementById('b-algpoly-62').classList.add("incorrect")
          document.getElementById('b-algpoly-63').classList.add("incorrect")
    
          document.getElementById('sa-algpoly-6').disabled = true;
          document.getElementById('o-algpoly-61').disabled = true;
          document.getElementById('o-algpoly-62').disabled = true;
          document.getElementById('o-algpoly-63').disabled = true;
          document.getElementById('o-algpoly-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algpoly6', 0)
        }
        if (document.getElementById('o-algpoly-64').checked) {
          document.getElementById('r-algpoly-64').style.color = 'blue'
          document.getElementById('r-algpoly-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algpoly-64').classList.add("correct")
          document.getElementById('b-algpoly-61').classList.add("incorrect")
          document.getElementById('b-algpoly-62').classList.add("incorrect")
          document.getElementById('b-algpoly-63').classList.add("incorrect")
    
          document.getElementById('sa-algpoly-6').disabled = true;
          document.getElementById('o-algpoly-61').disabled = true;
          document.getElementById('o-algpoly-62').disabled = true;
          document.getElementById('o-algpoly-63').disabled = true;
          document.getElementById('o-algpoly-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algpoly6', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algpoly-7') != null) {
      algpoly7But.onclick = function() {
        if (document.getElementById('o-algpoly-71').checked) {
          document.getElementById('r-algpoly-71').style.color = 'red'
          document.getElementById('r-algpoly-71').innerHTML = 'Incorrect!'
          document.getElementById('r-algpoly-74').style.color = 'blue'
          document.getElementById('r-algpoly-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algpoly-74').classList.add("correct")
          document.getElementById('b-algpoly-71').classList.add("incorrect")
          document.getElementById('b-algpoly-72').classList.add("incorrect")
          document.getElementById('b-algpoly-73').classList.add("incorrect")
    
          document.getElementById('sa-algpoly-7').disabled = true;
          document.getElementById('o-algpoly-71').disabled = true;
          document.getElementById('o-algpoly-72').disabled = true;
          document.getElementById('o-algpoly-73').disabled = true;
          document.getElementById('o-algpoly-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algpoly7', 0)
        }
        if (document.getElementById('o-algpoly-72').checked) {
          document.getElementById('r-algpoly-72').style.color = 'red'
          document.getElementById('r-algpoly-72').innerHTML = 'Incorrect!'
          document.getElementById('r-algpoly-74').style.color = 'blue'
          document.getElementById('r-algpoly-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algpoly-74').classList.add("correct")
          document.getElementById('b-algpoly-71').classList.add("incorrect")
          document.getElementById('b-algpoly-72').classList.add("incorrect")
          document.getElementById('b-algpoly-73').classList.add("incorrect")
    
          document.getElementById('sa-algpoly-7').disabled = true;
          document.getElementById('o-algpoly-71').disabled = true;
          document.getElementById('o-algpoly-72').disabled = true;
          document.getElementById('o-algpoly-73').disabled = true;
          document.getElementById('o-algpoly-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algpoly7', 0)
        }
        if (document.getElementById('o-algpoly-73').checked) {
          document.getElementById('r-algpoly-73').style.color = 'red'
          document.getElementById('r-algpoly-73').innerHTML = 'Incorrect!'
          document.getElementById('r-algpoly-74').style.color = 'blue'
          document.getElementById('r-algpoly-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algpoly-74').classList.add("correct")
          document.getElementById('b-algpoly-71').classList.add("incorrect")
          document.getElementById('b-algpoly-72').classList.add("incorrect")
          document.getElementById('b-algpoly-73').classList.add("incorrect")
    
          document.getElementById('sa-algpoly-7').disabled = true;
          document.getElementById('o-algpoly-71').disabled = true;
          document.getElementById('o-algpoly-72').disabled = true;
          document.getElementById('o-algpoly-73').disabled = true;
          document.getElementById('o-algpoly-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algpoly7', 0)
        }
        if (document.getElementById('o-algpoly-74').checked) {
          document.getElementById('r-algpoly-74').style.color = 'blue'
          document.getElementById('r-algpoly-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algpoly-74').classList.add("correct")
          document.getElementById('b-algpoly-71').classList.add("incorrect")
          document.getElementById('b-algpoly-72').classList.add("incorrect")
          document.getElementById('b-algpoly-73').classList.add("incorrect")
    
          document.getElementById('sa-algpoly-7').disabled = true;
          document.getElementById('o-algpoly-71').disabled = true;
          document.getElementById('o-algpoly-72').disabled = true;
          document.getElementById('o-algpoly-73').disabled = true;
          document.getElementById('o-algpoly-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algpoly7', 1)
        }
      }
    }
    
    
    if (document.getElementById('sa-algpoly-8') != null) {
      algpoly8But.onclick = function() {
        if (document.getElementById('o-algpoly-81').checked) {
          document.getElementById('r-algpoly-81').style.color = 'red'
          document.getElementById('r-algpoly-81').innerHTML = 'Incorrect!'
          document.getElementById('r-algpoly-82').style.color = 'blue'
          document.getElementById('r-algpoly-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algpoly-82').classList.add("correct")
          document.getElementById('b-algpoly-81').classList.add("incorrect")
          document.getElementById('b-algpoly-83').classList.add("incorrect")
          document.getElementById('b-algpoly-84').classList.add("incorrect")
    
          document.getElementById('sa-algpoly-8').disabled = true;
          document.getElementById('o-algpoly-81').disabled = true;
          document.getElementById('o-algpoly-82').disabled = true;
          document.getElementById('o-algpoly-83').disabled = true;
          document.getElementById('o-algpoly-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algpoly8', 0)
        }
        if (document.getElementById('o-algpoly-82').checked) {
          document.getElementById('r-algpoly-82').style.color = 'blue'
          document.getElementById('r-algpoly-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algpoly-82').classList.add("correct")
          document.getElementById('b-algpoly-81').classList.add("incorrect")
          document.getElementById('b-algpoly-83').classList.add("incorrect")
          document.getElementById('b-algpoly-84').classList.add("incorrect")
    
          document.getElementById('sa-algpoly-8').disabled = true;
          document.getElementById('o-algpoly-81').disabled = true;
          document.getElementById('o-algpoly-82').disabled = true;
          document.getElementById('o-algpoly-83').disabled = true;
          document.getElementById('o-algpoly-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algpoly8', 1)
        }
        if (document.getElementById('o-algpoly-83').checked) {
          document.getElementById('r-algpoly-83').style.color = 'red'
          document.getElementById('r-algpoly-83').innerHTML = 'Incorrect!'
          document.getElementById('r-algpoly-82').style.color = 'blue'
          document.getElementById('r-algpoly-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algpoly-82').classList.add("correct")
          document.getElementById('b-algpoly-81').classList.add("incorrect")
          document.getElementById('b-algpoly-83').classList.add("incorrect")
          document.getElementById('b-algpoly-84').classList.add("incorrect")
    
          document.getElementById('sa-algpoly-8').disabled = true;
          document.getElementById('o-algpoly-81').disabled = true;
          document.getElementById('o-algpoly-82').disabled = true;
          document.getElementById('o-algpoly-83').disabled = true;
          document.getElementById('o-algpoly-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algpoly8', 0)
        }
        if (document.getElementById('o-algpoly-84').checked) {
          document.getElementById('r-algpoly-84').style.color = 'red'
          document.getElementById('r-algpoly-84').innerHTML = 'Incorrect!'
          document.getElementById('r-algpoly-82').style.color = 'blue'
          document.getElementById('r-algpoly-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algpoly-82').classList.add("correct")
          document.getElementById('b-algpoly-81').classList.add("incorrect")
          document.getElementById('b-algpoly-83').classList.add("incorrect")
          document.getElementById('b-algpoly-84').classList.add("incorrect")
    
          document.getElementById('sa-algpoly-8').disabled = true;
          document.getElementById('o-algpoly-81').disabled = true;
          document.getElementById('o-algpoly-82').disabled = true;
          document.getElementById('o-algpoly-83').disabled = true;
          document.getElementById('o-algpoly-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algpoly8', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-algpoly-9') != null) {
      algpoly9But.onclick = function() {
        if (document.getElementById('o-algpoly-91').checked) {
          document.getElementById('r-algpoly-91').style.color = 'red'
          document.getElementById('r-algpoly-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algpoly-94').style.color = 'blue'
          document.getElementById('r-algpoly-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algpoly-94').classList.add("correct")
          document.getElementById('b-algpoly-91').classList.add("incorrect")
          document.getElementById('b-algpoly-92').classList.add("incorrect")
          document.getElementById('b-algpoly-93').classList.add("incorrect")
    
          document.getElementById('sa-algpoly-9').disabled = true;
          document.getElementById('o-algpoly-91').disabled = true;
          document.getElementById('o-algpoly-92').disabled = true;
          document.getElementById('o-algpoly-93').disabled = true;
          document.getElementById('o-algpoly-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algpoly9', 0)
        }
        if (document.getElementById('o-algpoly-92').checked) {
          document.getElementById('r-algpoly-91').style.color = 'red'
          document.getElementById('r-algpoly-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algpoly-94').style.color = 'blue'
          document.getElementById('r-algpoly-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algpoly-94').classList.add("correct")
          document.getElementById('b-algpoly-91').classList.add("incorrect")
          document.getElementById('b-algpoly-92').classList.add("incorrect")
          document.getElementById('b-algpoly-93').classList.add("incorrect")
    
          document.getElementById('sa-algpoly-9').disabled = true;
          document.getElementById('o-algpoly-91').disabled = true;
          document.getElementById('o-algpoly-92').disabled = true;
          document.getElementById('o-algpoly-93').disabled = true;
          document.getElementById('o-algpoly-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algpoly9', 0)
        }
        if (document.getElementById('o-algpoly-93').checked) {
          document.getElementById('r-algpoly-91').style.color = 'red'
          document.getElementById('r-algpoly-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algpoly-94').style.color = 'blue'
          document.getElementById('r-algpoly-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algpoly-94').classList.add("correct")
          document.getElementById('b-algpoly-91').classList.add("incorrect")
          document.getElementById('b-algpoly-92').classList.add("incorrect")
          document.getElementById('b-algpoly-93').classList.add("incorrect")
    
          document.getElementById('sa-algpoly-9').disabled = true;
          document.getElementById('o-algpoly-91').disabled = true;
          document.getElementById('o-algpoly-92').disabled = true;
          document.getElementById('o-algpoly-93').disabled = true;
          document.getElementById('o-algpoly-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algpoly9', 0)
        }
        if (document.getElementById('o-algpoly-94').checked) {
          document.getElementById('r-algpoly-94').style.color = 'blue'
          document.getElementById('r-algpoly-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algpoly-94').classList.add("correct")
          document.getElementById('b-algpoly-91').classList.add("incorrect")
          document.getElementById('b-algpoly-92').classList.add("incorrect")
          document.getElementById('b-algpoly-93').classList.add("incorrect")
    
          document.getElementById('sa-algpoly-9').disabled = true;
          document.getElementById('o-algpoly-91').disabled = true;
          document.getElementById('o-algpoly-92').disabled = true;
          document.getElementById('o-algpoly-93').disabled = true;
          document.getElementById('o-algpoly-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algpoly9', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algpoly-10') != null) {
      algpoly10But.onclick = function() {
        if (document.getElementById('o-algpoly-101').checked) {
          document.getElementById('r-algpoly-101').style.color = 'red'
          document.getElementById('r-algpoly-101').innerHTML = 'Incorrect!'
          document.getElementById('r-algpoly-102').style.color = 'blue'
          document.getElementById('r-algpoly-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algpoly-102').classList.add("correct")
          document.getElementById('b-algpoly-101').classList.add("incorrect")
          document.getElementById('b-algpoly-103').classList.add("incorrect")
          document.getElementById('b-algpoly-104').classList.add("incorrect")
    
          document.getElementById('sa-algpoly-10').disabled = true;
          document.getElementById('o-algpoly-101').disabled = true;
          document.getElementById('o-algpoly-102').disabled = true;
          document.getElementById('o-algpoly-103').disabled = true;
          document.getElementById('o-algpoly-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algpoly10', 0)
        }
        if (document.getElementById('o-algpoly-102').checked) {
          document.getElementById('r-algpoly-102').style.color = 'blue'
          document.getElementById('r-algpoly-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algpoly-102').classList.add("correct")
          document.getElementById('b-algpoly-101').classList.add("incorrect")
          document.getElementById('b-algpoly-103').classList.add("incorrect")
          document.getElementById('b-algpoly-104').classList.add("incorrect")
    
          document.getElementById('sa-algpoly-10').disabled = true;
          document.getElementById('o-algpoly-101').disabled = true;
          document.getElementById('o-algpoly-102').disabled = true;
          document.getElementById('o-algpoly-103').disabled = true;
          document.getElementById('o-algpoly-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algpoly10', 1)
        }
        if (document.getElementById('o-algpoly-103').checked) {
          document.getElementById('r-algpoly-103').style.color = 'red'
          document.getElementById('r-algpoly-103').innerHTML = 'Incorrect!'
          document.getElementById('r-algpoly-102').style.color = 'blue'
          document.getElementById('r-algpoly-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algpoly-102').classList.add("correct")
          document.getElementById('b-algpoly-101').classList.add("incorrect")
          document.getElementById('b-algpoly-103').classList.add("incorrect")
          document.getElementById('b-algpoly-104').classList.add("incorrect")
    
          document.getElementById('sa-algpoly-10').disabled = true;
          document.getElementById('o-algpoly-101').disabled = true;
          document.getElementById('o-algpoly-102').disabled = true;
          document.getElementById('o-algpoly-103').disabled = true;
          document.getElementById('o-algpoly-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algpoly10', 0)
        }
        if (document.getElementById('o-algpoly-104').checked) {
          document.getElementById('r-algpoly-104').style.color = 'red'
          document.getElementById('r-algpoly-104').innerHTML = 'Incorrect!'
          document.getElementById('r-algpoly-102').style.color = 'blue'
          document.getElementById('r-algpoly-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algpoly-102').classList.add("correct")
          document.getElementById('b-algpoly-101').classList.add("incorrect")
          document.getElementById('b-algpoly-103').classList.add("incorrect")
          document.getElementById('b-algpoly-104').classList.add("incorrect")
    
          document.getElementById('sa-algpoly-10').disabled = true;
          document.getElementById('o-algpoly-101').disabled = true;
          document.getElementById('o-algpoly-102').disabled = true;
          document.getElementById('o-algpoly-103').disabled = true;
          document.getElementById('o-algpoly-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algpoly10', 0)
        }
      }
    }
    