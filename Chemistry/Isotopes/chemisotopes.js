
  let chemisotopes1But = document.getElementById('sa-chemisotopes-1');
  let chemisotopes2But = document.getElementById('sa-chemisotopes-2');
  let chemisotopes3But = document.getElementById('sa-chemisotopes-3');
  let chemisotopes4But = document.getElementById('sa-chemisotopes-4');
  let chemisotopes5But = document.getElementById('sa-chemisotopes-5');
  let chemisotopes6But = document.getElementById('sa-chemisotopes-6');
  let chemisotopes7But = document.getElementById('sa-chemisotopes-7');
  let chemisotopes8But = document.getElementById('sa-chemisotopes-8');
  let chemisotopes9But = document.getElementById('sa-chemisotopes-9');
  let chemisotopes10But = document.getElementById('sa-chemisotopes-10');


  showExplanation1 = function() {
    document.getElementById('e-chemisotopes-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-chemisotopes-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-chemisotopes-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-chemisotopes-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-chemisotopes-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-chemisotopes-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-chemisotopes-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-chemisotopes-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-chemisotopes-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-chemisotopes-10').style.display = 'block';
     } 



     if (document.getElementById('sa-chemisotopes-1') != null) {
      chemisotopes1But.onclick = function () {
        if (document.getElementById('o-chemisotopes-11').checked) {
          document.getElementById('r-chemisotopes-11').style.color = 'red'
          document.getElementById('r-chemisotopes-11').innerHTML = 'Incorrect!'
          document.getElementById('r-chemisotopes-13').style.color = 'blue'
          document.getElementById('r-chemisotopes-13').innerHTML = 'Correct!'
    
          document.getElementById('b-chemisotopes-13').classList.add("correct")
          document.getElementById('b-chemisotopes-12').classList.add("incorrect")
          document.getElementById('b-chemisotopes-11').classList.add("incorrect")
          document.getElementById('b-chemisotopes-14').classList.add("incorrect")
    
          document.getElementById('sa-chemisotopes-1').disabled = true;
          document.getElementById('o-chemisotopes-11').disabled = true;
          document.getElementById('o-chemisotopes-12').disabled = true;
          document.getElementById('o-chemisotopes-13').disabled = true;
          document.getElementById('o-chemisotopes-14').disabled = true;
          showExplanation1()
          localStorage.setItem('chemisotopes1', 0)
        }
    
        if (document.getElementById('o-chemisotopes-12').checked) {
         
          document.getElementById('r-chemisotopes-12').style.color = 'red'
          document.getElementById('r-chemisotopes-12').innerHTML = 'Incorrect!'
          document.getElementById('r-chemisotopes-13').style.color = 'blue'
          document.getElementById('r-chemisotopes-13').innerHTML = 'Correct!'
    
          document.getElementById('b-chemisotopes-13').classList.add("correct")
          document.getElementById('b-chemisotopes-12').classList.add("incorrect")
          document.getElementById('b-chemisotopes-11').classList.add("incorrect")
          document.getElementById('b-chemisotopes-14').classList.add("incorrect")
    
          document.getElementById('sa-chemisotopes-1').disabled = true;
          document.getElementById('o-chemisotopes-11').disabled = true;
          document.getElementById('o-chemisotopes-12').disabled = true;
          document.getElementById('o-chemisotopes-13').disabled = true;
          document.getElementById('o-chemisotopes-14').disabled = true;
          showExplanation1()
          localStorage.setItem('chemisotopes1', 0)
        }
        if (document.getElementById('o-chemisotopes-13').checked) {
          document.getElementById('r-chemisotopes-13').style.color = 'blue'
          document.getElementById('r-chemisotopes-13').innerHTML = 'Correct!'
          
          document.getElementById('b-chemisotopes-13').classList.add("correct")
          document.getElementById('b-chemisotopes-12').classList.add("incorrect")
          document.getElementById('b-chemisotopes-11').classList.add("incorrect")
          document.getElementById('b-chemisotopes-14').classList.add("incorrect")
    
          document.getElementById('sa-chemisotopes-1').disabled = true;
          document.getElementById('o-chemisotopes-11').disabled = true;
          document.getElementById('o-chemisotopes-12').disabled = true;
          document.getElementById('o-chemisotopes-13').disabled = true;
          document.getElementById('o-chemisotopes-14').disabled = true;
          showExplanation1()
          localStorage.setItem('chemisotopes1', 1)
        }
        if (document.getElementById('o-chemisotopes-14').checked) {
          document.getElementById('r-chemisotopes-14').style.color = 'red'
          document.getElementById('r-chemisotopes-14').innerHTML = 'Incorrect!'
          document.getElementById('r-chemisotopes-13').style.color = 'blue'
          document.getElementById('r-chemisotopes-13').innerHTML = 'Correct!'
          
          document.getElementById('b-chemisotopes-13').classList.add("correct")
          document.getElementById('b-chemisotopes-12').classList.add("incorrect")
          document.getElementById('b-chemisotopes-11').classList.add("incorrect")
          document.getElementById('b-chemisotopes-14').classList.add("incorrect")
    
          document.getElementById('sa-chemisotopes-1').disabled = true;
          document.getElementById('o-chemisotopes-11').disabled = true;
          document.getElementById('o-chemisotopes-12').disabled = true;
          document.getElementById('o-chemisotopes-13').disabled = true;
          document.getElementById('o-chemisotopes-14').disabled = true;
          showExplanation1()
          localStorage.setItem('chemisotopes1', 0)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-chemisotopes-2') != null) {
      chemisotopes2But.onclick = function() {
        if (document.getElementById('o-chemisotopes-21').checked) {
          document.getElementById('r-chemisotopes-21').style.color = 'red'
          document.getElementById('r-chemisotopes-21').innerHTML = 'Incorrect!'
          document.getElementById('r-chemisotopes-23').style.color = 'blue'
          document.getElementById('r-chemisotopes-23').innerHTML = 'Correct!'
          
          document.getElementById('b-chemisotopes-23').classList.add("correct")
          document.getElementById('b-chemisotopes-21').classList.add("incorrect")
          document.getElementById('b-chemisotopes-22').classList.add("incorrect")
          document.getElementById('b-chemisotopes-24').classList.add("incorrect")
    
          document.getElementById('sa-chemisotopes-2').disabled = true;
          document.getElementById('o-chemisotopes-21').disabled = true;
          document.getElementById('o-chemisotopes-22').disabled = true;
          document.getElementById('o-chemisotopes-23').disabled = true;
          document.getElementById('o-chemisotopes-24').disabled = true;
          showExplanation2()
          localStorage.setItem('chemisotopes2', 0)
        }
        if (document.getElementById('o-chemisotopes-22').checked) {
          document.getElementById('r-chemisotopes-22').style.color = 'red'
          document.getElementById('r-chemisotopes-22').innerHTML = 'Incorrect!'
          document.getElementById('r-chemisotopes-23').style.color = 'blue'
          document.getElementById('r-chemisotopes-23').innerHTML = 'Correct!'
          
          document.getElementById('b-chemisotopes-23').classList.add("correct")
          document.getElementById('b-chemisotopes-21').classList.add("incorrect")
          document.getElementById('b-chemisotopes-22').classList.add("incorrect")
          document.getElementById('b-chemisotopes-24').classList.add("incorrect")
    
          document.getElementById('sa-chemisotopes-2').disabled = true;
          document.getElementById('o-chemisotopes-21').disabled = true;
          document.getElementById('o-chemisotopes-22').disabled = true;
          document.getElementById('o-chemisotopes-23').disabled = true;
          document.getElementById('o-chemisotopes-24').disabled = true;
          showExplanation2()
          localStorage.setItem('chemisotopes2', 0)
        }
        if (document.getElementById('o-chemisotopes-23').checked) {
          document.getElementById('r-chemisotopes-23').style.color = 'blue'
          document.getElementById('r-chemisotopes-23').innerHTML = 'Correct!'
          
          document.getElementById('b-chemisotopes-23').classList.add("correct")
          document.getElementById('b-chemisotopes-21').classList.add("incorrect")
          document.getElementById('b-chemisotopes-22').classList.add("incorrect")
          document.getElementById('b-chemisotopes-24').classList.add("incorrect")
    
          document.getElementById('sa-chemisotopes-2').disabled = true;
          document.getElementById('o-chemisotopes-21').disabled = true;
          document.getElementById('o-chemisotopes-22').disabled = true;
          document.getElementById('o-chemisotopes-23').disabled = true;
          document.getElementById('o-chemisotopes-24').disabled = true;
          showExplanation2()
          localStorage.setItem('chemisotopes2', 1)
        }
        if (document.getElementById('o-chemisotopes-24').checked) {
          document.getElementById('r-chemisotopes-24').style.color = 'red'
          document.getElementById('r-chemisotopes-24').innerHTML = 'Incorrect!'
          document.getElementById('r-chemisotopes-23').style.color = 'blue'
          document.getElementById('r-chemisotopes-23').innerHTML = 'Correct!'
          
          document.getElementById('b-chemisotopes-23').classList.add("correct")
          document.getElementById('b-chemisotopes-21').classList.add("incorrect")
          document.getElementById('b-chemisotopes-22').classList.add("incorrect")
          document.getElementById('b-chemisotopes-24').classList.add("incorrect")
    
          document.getElementById('sa-chemisotopes-2').disabled = true;
          document.getElementById('o-chemisotopes-21').disabled = true;
          document.getElementById('o-chemisotopes-22').disabled = true;
          document.getElementById('o-chemisotopes-23').disabled = true;
          document.getElementById('o-chemisotopes-24').disabled = true;
          showExplanation2()
          localStorage.setItem('chemisotopes2', 0)
        }
      }
    }
    
    if (document.getElementById('sa-chemisotopes-3') != null) {
      chemisotopes3But.onclick = function() {
        if (document.getElementById('o-chemisotopes-31').checked) {
          document.getElementById('r-chemisotopes-31').style.color = 'red'
          document.getElementById('r-chemisotopes-31').innerHTML = 'Incorrect!'
          document.getElementById('r-chemisotopes-34').style.color = 'blue'
          document.getElementById('r-chemisotopes-34').innerHTML = 'Correct!'
          
          document.getElementById('b-chemisotopes-34').classList.add("correct")
          document.getElementById('b-chemisotopes-31').classList.add("incorrect")
          document.getElementById('b-chemisotopes-33').classList.add("incorrect")
          document.getElementById('b-chemisotopes-32').classList.add("incorrect")
    
          document.getElementById('sa-chemisotopes-3').disabled = true;
          document.getElementById('o-chemisotopes-31').disabled = true;
          document.getElementById('o-chemisotopes-32').disabled = true;
          document.getElementById('o-chemisotopes-33').disabled = true;
          document.getElementById('o-chemisotopes-34').disabled = true;
          showExplanation3()
          localStorage.setItem('chemisotopes3', 0)
        }
        if (document.getElementById('o-chemisotopes-32').checked) {
          document.getElementById('r-chemisotopes-32').style.color = 'red'
          document.getElementById('r-chemisotopes-32').innerHTML = 'Incorrect!'
          document.getElementById('r-chemisotopes-34').style.color = 'blue'
          document.getElementById('r-chemisotopes-34').innerHTML = 'Correct!'
          
          document.getElementById('b-chemisotopes-34').classList.add("correct")
          document.getElementById('b-chemisotopes-31').classList.add("incorrect")
          document.getElementById('b-chemisotopes-33').classList.add("incorrect")
          document.getElementById('b-chemisotopes-32').classList.add("incorrect")
    
          document.getElementById('sa-chemisotopes-3').disabled = true;
          document.getElementById('o-chemisotopes-31').disabled = true;
          document.getElementById('o-chemisotopes-32').disabled = true;
          document.getElementById('o-chemisotopes-33').disabled = true;
          document.getElementById('o-chemisotopes-34').disabled = true;
          showExplanation3()
          localStorage.setItem('chemisotopes3', 0)
        }
        if (document.getElementById('o-chemisotopes-33').checked) {
          document.getElementById('r-chemisotopes-33').style.color = 'red'
          document.getElementById('r-chemisotopes-33').innerHTML = 'Incorrect!'
          document.getElementById('r-chemisotopes-34').style.color = 'blue'
          document.getElementById('r-chemisotopes-34').innerHTML = 'Correct!'
          
          document.getElementById('b-chemisotopes-34').classList.add("correct")
          document.getElementById('b-chemisotopes-31').classList.add("incorrect")
          document.getElementById('b-chemisotopes-33').classList.add("incorrect")
          document.getElementById('b-chemisotopes-32').classList.add("incorrect")
    
          document.getElementById('sa-chemisotopes-3').disabled = true;
          document.getElementById('o-chemisotopes-31').disabled = true;
          document.getElementById('o-chemisotopes-32').disabled = true;
          document.getElementById('o-chemisotopes-33').disabled = true;
          document.getElementById('o-chemisotopes-34').disabled = true;
          showExplanation3()
          localStorage.setItem('chemisotopes3', 0)
        }
        if (document.getElementById('o-chemisotopes-34').checked) {
          document.getElementById('r-chemisotopes-34').style.color = 'blue'
          document.getElementById('r-chemisotopes-34').innerHTML = 'Correct!'
          
          document.getElementById('b-chemisotopes-34').classList.add("correct")
          document.getElementById('b-chemisotopes-31').classList.add("incorrect")
          document.getElementById('b-chemisotopes-33').classList.add("incorrect")
          document.getElementById('b-chemisotopes-32').classList.add("incorrect")
    
          document.getElementById('sa-chemisotopes-3').disabled = true;
          document.getElementById('o-chemisotopes-31').disabled = true;
          document.getElementById('o-chemisotopes-32').disabled = true;
          document.getElementById('o-chemisotopes-33').disabled = true;
          document.getElementById('o-chemisotopes-34').disabled = true;
          showExplanation3()
          localStorage.setItem('chemisotopes3', 1)
        }
      }
    }
    
    if (document.getElementById('sa-chemisotopes-4') != null) {
      chemisotopes4But.onclick = function() {
        if (document.getElementById('o-chemisotopes-41').checked) {
          document.getElementById('r-chemisotopes-41').style.color = 'red'
          document.getElementById('r-chemisotopes-41').innerHTML = 'Incorrect!'
          document.getElementById('r-chemisotopes-44').style.color = 'blue'
          document.getElementById('r-chemisotopes-44').innerHTML = 'Correct!'
          
          document.getElementById('b-chemisotopes-44').classList.add("correct")
          document.getElementById('b-chemisotopes-41').classList.add("incorrect")
          document.getElementById('b-chemisotopes-42').classList.add("incorrect")
          document.getElementById('b-chemisotopes-43').classList.add("incorrect")
    
          document.getElementById('sa-chemisotopes-4').disabled = true;
          document.getElementById('o-chemisotopes-41').disabled = true;
          document.getElementById('o-chemisotopes-42').disabled = true;
          document.getElementById('o-chemisotopes-43').disabled = true;
          document.getElementById('o-chemisotopes-44').disabled = true;
          showExplanation4()
          localStorage.setItem('chemisotopes4', 0)
        }
        if (document.getElementById('o-chemisotopes-42').checked) {
          document.getElementById('r-chemisotopes-42').style.color = 'red'
          document.getElementById('r-chemisotopes-42').innerHTML = 'Incorrect!'
          document.getElementById('r-chemisotopes-44').style.color = 'blue'
          document.getElementById('r-chemisotopes-44').innerHTML = 'Correct!'
          
          document.getElementById('b-chemisotopes-44').classList.add("correct")
          document.getElementById('b-chemisotopes-41').classList.add("incorrect")
          document.getElementById('b-chemisotopes-42').classList.add("incorrect")
          document.getElementById('b-chemisotopes-43').classList.add("incorrect")
    
          document.getElementById('sa-chemisotopes-4').disabled = true;
          document.getElementById('o-chemisotopes-41').disabled = true;
          document.getElementById('o-chemisotopes-42').disabled = true;
          document.getElementById('o-chemisotopes-43').disabled = true;
          document.getElementById('o-chemisotopes-44').disabled = true;
          showExplanation4()
          localStorage.setItem('chemisotopes4', 0)
        }
        if (document.getElementById('o-chemisotopes-43').checked) {
          document.getElementById('r-chemisotopes-43').style.color = 'red'
          document.getElementById('r-chemisotopes-43').innerHTML = 'Incorrect!'
          document.getElementById('r-chemisotopes-44').style.color = 'blue'
          document.getElementById('r-chemisotopes-44').innerHTML = 'Correct!'
          
          document.getElementById('b-chemisotopes-44').classList.add("correct")
          document.getElementById('b-chemisotopes-41').classList.add("incorrect")
          document.getElementById('b-chemisotopes-42').classList.add("incorrect")
          document.getElementById('b-chemisotopes-43').classList.add("incorrect")
    
          document.getElementById('sa-chemisotopes-4').disabled = true;
          document.getElementById('o-chemisotopes-41').disabled = true;
          document.getElementById('o-chemisotopes-42').disabled = true;
          document.getElementById('o-chemisotopes-43').disabled = true;
          document.getElementById('o-chemisotopes-44').disabled = true;
          showExplanation4()
          localStorage.setItem('chemisotopes4', 0)
        }
        if (document.getElementById('o-chemisotopes-44').checked) {
          document.getElementById('r-chemisotopes-44').style.color = 'blue'
          document.getElementById('r-chemisotopes-44').innerHTML = 'Correct!'
          
          document.getElementById('b-chemisotopes-44').classList.add("correct")
          document.getElementById('b-chemisotopes-41').classList.add("incorrect")
          document.getElementById('b-chemisotopes-42').classList.add("incorrect")
          document.getElementById('b-chemisotopes-43').classList.add("incorrect")
    
          document.getElementById('sa-chemisotopes-4').disabled = true;
          document.getElementById('o-chemisotopes-41').disabled = true;
          document.getElementById('o-chemisotopes-42').disabled = true;
          document.getElementById('o-chemisotopes-43').disabled = true;
          document.getElementById('o-chemisotopes-44').disabled = true;
          showExplanation4()
          localStorage.setItem('chemisotopes4', 1)
        }
      }
    }
    
    if (document.getElementById('sa-chemisotopes-5') != null) {
      chemisotopes5But.onclick = function() {
        if (document.getElementById('o-chemisotopes-51').checked) {
          document.getElementById('r-chemisotopes-51').style.color = 'red'
          document.getElementById('r-chemisotopes-51').innerHTML = 'Incorrect!'
          document.getElementById('r-chemisotopes-53').style.color = 'blue'
          document.getElementById('r-chemisotopes-53').innerHTML = 'Correct!'
          
          document.getElementById('b-chemisotopes-53').classList.add("correct")
          document.getElementById('b-chemisotopes-51').classList.add("incorrect")
          document.getElementById('b-chemisotopes-52').classList.add("incorrect")
          document.getElementById('b-chemisotopes-54').classList.add("incorrect")
    
          document.getElementById('sa-chemisotopes-5').disabled = true;
          document.getElementById('o-chemisotopes-51').disabled = true;
          document.getElementById('o-chemisotopes-52').disabled = true;
          document.getElementById('o-chemisotopes-53').disabled = true;
          document.getElementById('o-chemisotopes-54').disabled = true;
          showExplanation5()
          localStorage.setItem('chemisotopes5', 0)
        }
        if (document.getElementById('o-chemisotopes-52').checked) {
          document.getElementById('r-chemisotopes-52').style.color = 'red'
          document.getElementById('r-chemisotopes-52').innerHTML = 'Incorrect!'
          document.getElementById('r-chemisotopes-53').style.color = 'blue'
          document.getElementById('r-chemisotopes-53').innerHTML = 'Correct!'
          
          document.getElementById('b-chemisotopes-53').classList.add("correct")
          document.getElementById('b-chemisotopes-51').classList.add("incorrect")
          document.getElementById('b-chemisotopes-52').classList.add("incorrect")
          document.getElementById('b-chemisotopes-54').classList.add("incorrect")
    
          document.getElementById('sa-chemisotopes-5').disabled = true;
          document.getElementById('o-chemisotopes-51').disabled = true;
          document.getElementById('o-chemisotopes-52').disabled = true;
          document.getElementById('o-chemisotopes-53').disabled = true;
          document.getElementById('o-chemisotopes-54').disabled = true;
          showExplanation5()
          localStorage.setItem('chemisotopes5', 0)
        }
        if (document.getElementById('o-chemisotopes-53').checked) {
          document.getElementById('r-chemisotopes-53').style.color = 'blue'
          document.getElementById('r-chemisotopes-53').innerHTML = 'Correct!'
          
          document.getElementById('b-chemisotopes-53').classList.add("correct")
          document.getElementById('b-chemisotopes-51').classList.add("incorrect")
          document.getElementById('b-chemisotopes-52').classList.add("incorrect")
          document.getElementById('b-chemisotopes-54').classList.add("incorrect")
    
          document.getElementById('sa-chemisotopes-5').disabled = true;
          document.getElementById('o-chemisotopes-51').disabled = true;
          document.getElementById('o-chemisotopes-52').disabled = true;
          document.getElementById('o-chemisotopes-53').disabled = true;
          document.getElementById('o-chemisotopes-54').disabled = true;
          showExplanation5()
          localStorage.setItem('chemisotopes5', 1)
        }
        if (document.getElementById('o-chemisotopes-54').checked) {
          document.getElementById('r-chemisotopes-54').style.color = 'red'
          document.getElementById('r-chemisotopes-54').innerHTML = 'Incorrect!'
          document.getElementById('r-chemisotopes-53').style.color = 'blue'
          document.getElementById('r-chemisotopes-53').innerHTML = 'Correct!'
          
          document.getElementById('b-chemisotopes-53').classList.add("correct")
          document.getElementById('b-chemisotopes-51').classList.add("incorrect")
          document.getElementById('b-chemisotopes-52').classList.add("incorrect")
          document.getElementById('b-chemisotopes-54').classList.add("incorrect")
    
          document.getElementById('sa-chemisotopes-5').disabled = true;
          document.getElementById('o-chemisotopes-51').disabled = true;
          document.getElementById('o-chemisotopes-52').disabled = true;
          document.getElementById('o-chemisotopes-53').disabled = true;
          document.getElementById('o-chemisotopes-54').disabled = true;
          showExplanation5()
          localStorage.setItem('chemisotopes5', 0)
        }
      }
    }
        
         
      if (document.getElementById('sa-chemisotopes-6') != null) {
      chemisotopes6But.onclick = function() {
        if (document.getElementById('o-chemisotopes-61').checked) {
          document.getElementById('r-chemisotopes-61').style.color = 'red'
          document.getElementById('r-chemisotopes-61').innerHTML = 'Incorrect!'
          document.getElementById('r-chemisotopes-64').style.color = 'blue'
          document.getElementById('r-chemisotopes-64').innerHTML = 'Correct!'
          
          document.getElementById('b-chemisotopes-64').classList.add("correct")
          document.getElementById('b-chemisotopes-61').classList.add("incorrect")
          document.getElementById('b-chemisotopes-62').classList.add("incorrect")
          document.getElementById('b-chemisotopes-63').classList.add("incorrect")
    
          document.getElementById('sa-chemisotopes-6').disabled = true;
          document.getElementById('o-chemisotopes-61').disabled = true;
          document.getElementById('o-chemisotopes-62').disabled = true;
          document.getElementById('o-chemisotopes-63').disabled = true;
          document.getElementById('o-chemisotopes-64').disabled = true;
          showExplanation6()
          localStorage.setItem('chemisotopes6', 0)
        }
        if (document.getElementById('o-chemisotopes-62').checked) {
          document.getElementById('r-chemisotopes-62').style.color = 'red'
          document.getElementById('r-chemisotopes-62').innerHTML = 'Incorrect!'
          document.getElementById('r-chemisotopes-64').style.color = 'blue'
          document.getElementById('r-chemisotopes-64').innerHTML = 'Correct!'
          
          document.getElementById('b-chemisotopes-64').classList.add("correct")
          document.getElementById('b-chemisotopes-61').classList.add("incorrect")
          document.getElementById('b-chemisotopes-62').classList.add("incorrect")
          document.getElementById('b-chemisotopes-63').classList.add("incorrect")
    
          document.getElementById('sa-chemisotopes-6').disabled = true;
          document.getElementById('o-chemisotopes-61').disabled = true;
          document.getElementById('o-chemisotopes-62').disabled = true;
          document.getElementById('o-chemisotopes-63').disabled = true;
          document.getElementById('o-chemisotopes-64').disabled = true;
          showExplanation6()
          localStorage.setItem('chemisotopes6', 0)
        }
        if (document.getElementById('o-chemisotopes-63').checked) {
          document.getElementById('r-chemisotopes-63').style.color = 'red'
          document.getElementById('r-chemisotopes-63').innerHTML = 'Incorrect!'
          document.getElementById('r-chemisotopes-64').style.color = 'blue'
          document.getElementById('r-chemisotopes-64').innerHTML = 'Correct!'
          
          document.getElementById('b-chemisotopes-64').classList.add("correct")
          document.getElementById('b-chemisotopes-61').classList.add("incorrect")
          document.getElementById('b-chemisotopes-62').classList.add("incorrect")
          document.getElementById('b-chemisotopes-63').classList.add("incorrect")
    
          document.getElementById('sa-chemisotopes-6').disabled = true;
          document.getElementById('o-chemisotopes-61').disabled = true;
          document.getElementById('o-chemisotopes-62').disabled = true;
          document.getElementById('o-chemisotopes-63').disabled = true;
          document.getElementById('o-chemisotopes-64').disabled = true;
          showExplanation6()
          localStorage.setItem('chemisotopes6', 0)
        }
        if (document.getElementById('o-chemisotopes-64').checked) {
          document.getElementById('r-chemisotopes-64').style.color = 'blue'
          document.getElementById('r-chemisotopes-64').innerHTML = 'Correct!'
          
          document.getElementById('b-chemisotopes-64').classList.add("correct")
          document.getElementById('b-chemisotopes-61').classList.add("incorrect")
          document.getElementById('b-chemisotopes-62').classList.add("incorrect")
          document.getElementById('b-chemisotopes-63').classList.add("incorrect")
    
          document.getElementById('sa-chemisotopes-6').disabled = true;
          document.getElementById('o-chemisotopes-61').disabled = true;
          document.getElementById('o-chemisotopes-62').disabled = true;
          document.getElementById('o-chemisotopes-63').disabled = true;
          document.getElementById('o-chemisotopes-64').disabled = true;
          showExplanation6()
          localStorage.setItem('chemisotopes6', 1)
        }
      }
    }
    
    if (document.getElementById('sa-chemisotopes-7') != null) {
      chemisotopes7But.onclick = function() {
        if (document.getElementById('o-chemisotopes-71').checked) {
          document.getElementById('r-chemisotopes-71').style.color = 'red'
          document.getElementById('r-chemisotopes-71').innerHTML = 'Incorrect!'
          document.getElementById('r-chemisotopes-74').style.color = 'blue'
          document.getElementById('r-chemisotopes-74').innerHTML = 'Correct!'
          
          document.getElementById('b-chemisotopes-74').classList.add("correct")
          document.getElementById('b-chemisotopes-71').classList.add("incorrect")
          document.getElementById('b-chemisotopes-72').classList.add("incorrect")
          document.getElementById('b-chemisotopes-73').classList.add("incorrect")
    
          document.getElementById('sa-chemisotopes-7').disabled = true;
          document.getElementById('o-chemisotopes-71').disabled = true;
          document.getElementById('o-chemisotopes-72').disabled = true;
          document.getElementById('o-chemisotopes-73').disabled = true;
          document.getElementById('o-chemisotopes-74').disabled = true;
          showExplanation7()
          localStorage.setItem('chemisotopes7', 0)
        }
        if (document.getElementById('o-chemisotopes-72').checked) {
          document.getElementById('r-chemisotopes-72').style.color = 'red'
          document.getElementById('r-chemisotopes-72').innerHTML = 'Incorrect!'
          document.getElementById('r-chemisotopes-74').style.color = 'blue'
          document.getElementById('r-chemisotopes-74').innerHTML = 'Correct!'
          
          document.getElementById('b-chemisotopes-74').classList.add("correct")
          document.getElementById('b-chemisotopes-71').classList.add("incorrect")
          document.getElementById('b-chemisotopes-72').classList.add("incorrect")
          document.getElementById('b-chemisotopes-73').classList.add("incorrect")
    
          document.getElementById('sa-chemisotopes-7').disabled = true;
          document.getElementById('o-chemisotopes-71').disabled = true;
          document.getElementById('o-chemisotopes-72').disabled = true;
          document.getElementById('o-chemisotopes-73').disabled = true;
          document.getElementById('o-chemisotopes-74').disabled = true;
          showExplanation7()
          localStorage.setItem('chemisotopes7', 0)
        }
        if (document.getElementById('o-chemisotopes-73').checked) {
          document.getElementById('r-chemisotopes-73').style.color = 'red'
          document.getElementById('r-chemisotopes-73').innerHTML = 'Incorrect!'
          document.getElementById('r-chemisotopes-74').style.color = 'blue'
          document.getElementById('r-chemisotopes-74').innerHTML = 'Correct!'
          
          document.getElementById('b-chemisotopes-74').classList.add("correct")
          document.getElementById('b-chemisotopes-71').classList.add("incorrect")
          document.getElementById('b-chemisotopes-72').classList.add("incorrect")
          document.getElementById('b-chemisotopes-73').classList.add("incorrect")
    
          document.getElementById('sa-chemisotopes-7').disabled = true;
          document.getElementById('o-chemisotopes-71').disabled = true;
          document.getElementById('o-chemisotopes-72').disabled = true;
          document.getElementById('o-chemisotopes-73').disabled = true;
          document.getElementById('o-chemisotopes-74').disabled = true;
          showExplanation7()
          localStorage.setItem('chemisotopes7', 0)
        }
        if (document.getElementById('o-chemisotopes-74').checked) {
          document.getElementById('r-chemisotopes-74').style.color = 'blue'
          document.getElementById('r-chemisotopes-74').innerHTML = 'Correct!'
          
          document.getElementById('b-chemisotopes-74').classList.add("correct")
          document.getElementById('b-chemisotopes-71').classList.add("incorrect")
          document.getElementById('b-chemisotopes-72').classList.add("incorrect")
          document.getElementById('b-chemisotopes-73').classList.add("incorrect")
    
          document.getElementById('sa-chemisotopes-7').disabled = true;
          document.getElementById('o-chemisotopes-71').disabled = true;
          document.getElementById('o-chemisotopes-72').disabled = true;
          document.getElementById('o-chemisotopes-73').disabled = true;
          document.getElementById('o-chemisotopes-74').disabled = true;
          showExplanation7()
          localStorage.setItem('chemisotopes7', 1)
        }
      }
    }
    
    
    if (document.getElementById('sa-chemisotopes-8') != null) {
      chemisotopes8But.onclick = function() {
        if (document.getElementById('o-chemisotopes-81').checked) {
          document.getElementById('r-chemisotopes-81').style.color = 'red'
          document.getElementById('r-chemisotopes-81').innerHTML = 'Incorrect!'
          document.getElementById('r-chemisotopes-82').style.color = 'blue'
          document.getElementById('r-chemisotopes-82').innerHTML = 'Correct!'
          
          document.getElementById('b-chemisotopes-82').classList.add("correct")
          document.getElementById('b-chemisotopes-81').classList.add("incorrect")
          document.getElementById('b-chemisotopes-83').classList.add("incorrect")
          document.getElementById('b-chemisotopes-84').classList.add("incorrect")
    
          document.getElementById('sa-chemisotopes-8').disabled = true;
          document.getElementById('o-chemisotopes-81').disabled = true;
          document.getElementById('o-chemisotopes-82').disabled = true;
          document.getElementById('o-chemisotopes-83').disabled = true;
          document.getElementById('o-chemisotopes-84').disabled = true;
          showExplanation8()
          localStorage.setItem('chemisotopes8', 0)
        }
        if (document.getElementById('o-chemisotopes-82').checked) {
          document.getElementById('r-chemisotopes-82').style.color = 'blue'
          document.getElementById('r-chemisotopes-82').innerHTML = 'Correct!'
          
          document.getElementById('b-chemisotopes-82').classList.add("correct")
          document.getElementById('b-chemisotopes-81').classList.add("incorrect")
          document.getElementById('b-chemisotopes-83').classList.add("incorrect")
          document.getElementById('b-chemisotopes-84').classList.add("incorrect")
    
          document.getElementById('sa-chemisotopes-8').disabled = true;
          document.getElementById('o-chemisotopes-81').disabled = true;
          document.getElementById('o-chemisotopes-82').disabled = true;
          document.getElementById('o-chemisotopes-83').disabled = true;
          document.getElementById('o-chemisotopes-84').disabled = true;
          showExplanation8()
          localStorage.setItem('chemisotopes8', 1)
        }
        if (document.getElementById('o-chemisotopes-83').checked) {
          document.getElementById('r-chemisotopes-83').style.color = 'red'
          document.getElementById('r-chemisotopes-83').innerHTML = 'Incorrect!'
          document.getElementById('r-chemisotopes-82').style.color = 'blue'
          document.getElementById('r-chemisotopes-82').innerHTML = 'Correct!'
          
          document.getElementById('b-chemisotopes-82').classList.add("correct")
          document.getElementById('b-chemisotopes-81').classList.add("incorrect")
          document.getElementById('b-chemisotopes-83').classList.add("incorrect")
          document.getElementById('b-chemisotopes-84').classList.add("incorrect")
    
          document.getElementById('sa-chemisotopes-8').disabled = true;
          document.getElementById('o-chemisotopes-81').disabled = true;
          document.getElementById('o-chemisotopes-82').disabled = true;
          document.getElementById('o-chemisotopes-83').disabled = true;
          document.getElementById('o-chemisotopes-84').disabled = true;
          showExplanation8()
          localStorage.setItem('chemisotopes8', 0)
        }
        if (document.getElementById('o-chemisotopes-84').checked) {
          document.getElementById('r-chemisotopes-84').style.color = 'red'
          document.getElementById('r-chemisotopes-84').innerHTML = 'Incorrect!'
          document.getElementById('r-chemisotopes-82').style.color = 'blue'
          document.getElementById('r-chemisotopes-82').innerHTML = 'Correct!'
          
          document.getElementById('b-chemisotopes-82').classList.add("correct")
          document.getElementById('b-chemisotopes-81').classList.add("incorrect")
          document.getElementById('b-chemisotopes-83').classList.add("incorrect")
          document.getElementById('b-chemisotopes-84').classList.add("incorrect")
    
          document.getElementById('sa-chemisotopes-8').disabled = true;
          document.getElementById('o-chemisotopes-81').disabled = true;
          document.getElementById('o-chemisotopes-82').disabled = true;
          document.getElementById('o-chemisotopes-83').disabled = true;
          document.getElementById('o-chemisotopes-84').disabled = true;
          showExplanation8()
          localStorage.setItem('chemisotopes8', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-chemisotopes-9') != null) {
      chemisotopes9But.onclick = function() {
        if (document.getElementById('o-chemisotopes-91').checked) {
          document.getElementById('r-chemisotopes-91').style.color = 'red'
          document.getElementById('r-chemisotopes-91').innerHTML = 'Incorrect!'
          document.getElementById('r-chemisotopes-94').style.color = 'blue'
          document.getElementById('r-chemisotopes-94').innerHTML = 'Correct!'
          
          document.getElementById('b-chemisotopes-94').classList.add("correct")
          document.getElementById('b-chemisotopes-91').classList.add("incorrect")
          document.getElementById('b-chemisotopes-92').classList.add("incorrect")
          document.getElementById('b-chemisotopes-93').classList.add("incorrect")
    
          document.getElementById('sa-chemisotopes-9').disabled = true;
          document.getElementById('o-chemisotopes-91').disabled = true;
          document.getElementById('o-chemisotopes-92').disabled = true;
          document.getElementById('o-chemisotopes-93').disabled = true;
          document.getElementById('o-chemisotopes-94').disabled = true;
          showExplanation9()
          localStorage.setItem('chemisotopes9', 0)
        }
        if (document.getElementById('o-chemisotopes-92').checked) {
          document.getElementById('r-chemisotopes-91').style.color = 'red'
          document.getElementById('r-chemisotopes-91').innerHTML = 'Incorrect!'
          document.getElementById('r-chemisotopes-94').style.color = 'blue'
          document.getElementById('r-chemisotopes-94').innerHTML = 'Correct!'
          
          document.getElementById('b-chemisotopes-94').classList.add("correct")
          document.getElementById('b-chemisotopes-91').classList.add("incorrect")
          document.getElementById('b-chemisotopes-92').classList.add("incorrect")
          document.getElementById('b-chemisotopes-93').classList.add("incorrect")
    
          document.getElementById('sa-chemisotopes-9').disabled = true;
          document.getElementById('o-chemisotopes-91').disabled = true;
          document.getElementById('o-chemisotopes-92').disabled = true;
          document.getElementById('o-chemisotopes-93').disabled = true;
          document.getElementById('o-chemisotopes-94').disabled = true;
          showExplanation9()
          localStorage.setItem('chemisotopes9', 0)
        }
        if (document.getElementById('o-chemisotopes-93').checked) {
          document.getElementById('r-chemisotopes-91').style.color = 'red'
          document.getElementById('r-chemisotopes-91').innerHTML = 'Incorrect!'
          document.getElementById('r-chemisotopes-94').style.color = 'blue'
          document.getElementById('r-chemisotopes-94').innerHTML = 'Correct!'
          
          document.getElementById('b-chemisotopes-94').classList.add("correct")
          document.getElementById('b-chemisotopes-91').classList.add("incorrect")
          document.getElementById('b-chemisotopes-92').classList.add("incorrect")
          document.getElementById('b-chemisotopes-93').classList.add("incorrect")
    
          document.getElementById('sa-chemisotopes-9').disabled = true;
          document.getElementById('o-chemisotopes-91').disabled = true;
          document.getElementById('o-chemisotopes-92').disabled = true;
          document.getElementById('o-chemisotopes-93').disabled = true;
          document.getElementById('o-chemisotopes-94').disabled = true;
          showExplanation9()
          localStorage.setItem('chemisotopes9', 0)
        }
        if (document.getElementById('o-chemisotopes-94').checked) {
          document.getElementById('r-chemisotopes-94').style.color = 'blue'
          document.getElementById('r-chemisotopes-94').innerHTML = 'Correct!'
          
          document.getElementById('b-chemisotopes-94').classList.add("correct")
          document.getElementById('b-chemisotopes-91').classList.add("incorrect")
          document.getElementById('b-chemisotopes-92').classList.add("incorrect")
          document.getElementById('b-chemisotopes-93').classList.add("incorrect")
    
          document.getElementById('sa-chemisotopes-9').disabled = true;
          document.getElementById('o-chemisotopes-91').disabled = true;
          document.getElementById('o-chemisotopes-92').disabled = true;
          document.getElementById('o-chemisotopes-93').disabled = true;
          document.getElementById('o-chemisotopes-94').disabled = true;
          showExplanation9()
          localStorage.setItem('chemisotopes9', 1)
        }
      }
    }
    
    if (document.getElementById('sa-chemisotopes-10') != null) {
      chemisotopes10But.onclick = function() {
        if (document.getElementById('o-chemisotopes-101').checked) {
          document.getElementById('r-chemisotopes-101').style.color = 'red'
          document.getElementById('r-chemisotopes-101').innerHTML = 'Incorrect!'
          document.getElementById('r-chemisotopes-102').style.color = 'blue'
          document.getElementById('r-chemisotopes-102').innerHTML = 'Correct!'
          
          document.getElementById('b-chemisotopes-102').classList.add("correct")
          document.getElementById('b-chemisotopes-101').classList.add("incorrect")
          document.getElementById('b-chemisotopes-103').classList.add("incorrect")
          document.getElementById('b-chemisotopes-104').classList.add("incorrect")
    
          document.getElementById('sa-chemisotopes-10').disabled = true;
          document.getElementById('o-chemisotopes-101').disabled = true;
          document.getElementById('o-chemisotopes-102').disabled = true;
          document.getElementById('o-chemisotopes-103').disabled = true;
          document.getElementById('o-chemisotopes-104').disabled = true;
          showExplanation10()
          localStorage.setItem('chemisotopes10', 0)
        }
        if (document.getElementById('o-chemisotopes-102').checked) {
          document.getElementById('r-chemisotopes-102').style.color = 'blue'
          document.getElementById('r-chemisotopes-102').innerHTML = 'Correct!'
          
          document.getElementById('b-chemisotopes-102').classList.add("correct")
          document.getElementById('b-chemisotopes-101').classList.add("incorrect")
          document.getElementById('b-chemisotopes-103').classList.add("incorrect")
          document.getElementById('b-chemisotopes-104').classList.add("incorrect")
    
          document.getElementById('sa-chemisotopes-10').disabled = true;
          document.getElementById('o-chemisotopes-101').disabled = true;
          document.getElementById('o-chemisotopes-102').disabled = true;
          document.getElementById('o-chemisotopes-103').disabled = true;
          document.getElementById('o-chemisotopes-104').disabled = true;
          showExplanation10()
          localStorage.setItem('chemisotopes10', 1)
        }
        if (document.getElementById('o-chemisotopes-103').checked) {
          document.getElementById('r-chemisotopes-103').style.color = 'red'
          document.getElementById('r-chemisotopes-103').innerHTML = 'Incorrect!'
          document.getElementById('r-chemisotopes-102').style.color = 'blue'
          document.getElementById('r-chemisotopes-102').innerHTML = 'Correct!'
          
          document.getElementById('b-chemisotopes-102').classList.add("correct")
          document.getElementById('b-chemisotopes-101').classList.add("incorrect")
          document.getElementById('b-chemisotopes-103').classList.add("incorrect")
          document.getElementById('b-chemisotopes-104').classList.add("incorrect")
    
          document.getElementById('sa-chemisotopes-10').disabled = true;
          document.getElementById('o-chemisotopes-101').disabled = true;
          document.getElementById('o-chemisotopes-102').disabled = true;
          document.getElementById('o-chemisotopes-103').disabled = true;
          document.getElementById('o-chemisotopes-104').disabled = true;
          showExplanation10()
          localStorage.setItem('chemisotopes10', 0)
        }
        if (document.getElementById('o-chemisotopes-104').checked) {
          document.getElementById('r-chemisotopes-104').style.color = 'red'
          document.getElementById('r-chemisotopes-104').innerHTML = 'Incorrect!'
          document.getElementById('r-chemisotopes-102').style.color = 'blue'
          document.getElementById('r-chemisotopes-102').innerHTML = 'Correct!'
          
          document.getElementById('b-chemisotopes-102').classList.add("correct")
          document.getElementById('b-chemisotopes-101').classList.add("incorrect")
          document.getElementById('b-chemisotopes-103').classList.add("incorrect")
          document.getElementById('b-chemisotopes-104').classList.add("incorrect")
    
          document.getElementById('sa-chemisotopes-10').disabled = true;
          document.getElementById('o-chemisotopes-101').disabled = true;
          document.getElementById('o-chemisotopes-102').disabled = true;
          document.getElementById('o-chemisotopes-103').disabled = true;
          document.getElementById('o-chemisotopes-104').disabled = true;
          showExplanation10()
          localStorage.setItem('chemisotopes10', 0)
        }
      }
    }
    