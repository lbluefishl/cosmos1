
  let algexpsam1But = document.getElementById('sa-algexpsam-1');
  let algexpsam2But = document.getElementById('sa-algexpsam-2');
  let algexpsam3But = document.getElementById('sa-algexpsam-3');
  let algexpsam4But = document.getElementById('sa-algexpsam-4');
  let algexpsam5But = document.getElementById('sa-algexpsam-5');
  let algexpsam6But = document.getElementById('sa-algexpsam-6');
  let algexpsam7But = document.getElementById('sa-algexpsam-7');
  let algexpsam8But = document.getElementById('sa-algexpsam-8');
  let algexpsam9But = document.getElementById('sa-algexpsam-9');
  let algexpsam10But = document.getElementById('sa-algexpsam-10');


  showExplanation1 = function() {
    document.getElementById('e-algexpsam-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-algexpsam-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-algexpsam-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-algexpsam-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-algexpsam-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-algexpsam-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-algexpsam-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-algexpsam-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-algexpsam-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-algexpsam-10').style.display = 'block';
     } 



     if (document.getElementById('sa-algexpsam-1') != null) {
      algexpsam1But.onclick = function () {
        if (document.getElementById('o-algexpsam-11').checked) {
          document.getElementById('r-algexpsam-11').style.color = 'red'
          document.getElementById('r-algexpsam-11').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpsam-13').style.color = 'blue'
          document.getElementById('r-algexpsam-13').innerHTML = 'Correct!'
    
          document.getElementById('b-algexpsam-13').classList.add("correct")
          document.getElementById('b-algexpsam-12').classList.add("incorrect")
          document.getElementById('b-algexpsam-11').classList.add("incorrect")
          document.getElementById('b-algexpsam-14').classList.add("incorrect")
    
          document.getElementById('sa-algexpsam-1').disabled = true;
          document.getElementById('o-algexpsam-11').disabled = true;
          document.getElementById('o-algexpsam-12').disabled = true;
          document.getElementById('o-algexpsam-13').disabled = true;
          document.getElementById('o-algexpsam-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algexpsam1', 0)
        }
    
        if (document.getElementById('o-algexpsam-12').checked) {
         
          document.getElementById('r-algexpsam-12').style.color = 'red'
          document.getElementById('r-algexpsam-12').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpsam-13').style.color = 'blue'
          document.getElementById('r-algexpsam-13').innerHTML = 'Correct!'
    
          document.getElementById('b-algexpsam-13').classList.add("correct")
          document.getElementById('b-algexpsam-12').classList.add("incorrect")
          document.getElementById('b-algexpsam-11').classList.add("incorrect")
          document.getElementById('b-algexpsam-14').classList.add("incorrect")
    
          document.getElementById('sa-algexpsam-1').disabled = true;
          document.getElementById('o-algexpsam-11').disabled = true;
          document.getElementById('o-algexpsam-12').disabled = true;
          document.getElementById('o-algexpsam-13').disabled = true;
          document.getElementById('o-algexpsam-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algexpsam1', 0)
        }
        if (document.getElementById('o-algexpsam-13').checked) {
          document.getElementById('r-algexpsam-13').style.color = 'blue'
          document.getElementById('r-algexpsam-13').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpsam-13').classList.add("correct")
          document.getElementById('b-algexpsam-12').classList.add("incorrect")
          document.getElementById('b-algexpsam-11').classList.add("incorrect")
          document.getElementById('b-algexpsam-14').classList.add("incorrect")
    
          document.getElementById('sa-algexpsam-1').disabled = true;
          document.getElementById('o-algexpsam-11').disabled = true;
          document.getElementById('o-algexpsam-12').disabled = true;
          document.getElementById('o-algexpsam-13').disabled = true;
          document.getElementById('o-algexpsam-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algexpsam1', 1)
        }
        if (document.getElementById('o-algexpsam-14').checked) {
          document.getElementById('r-algexpsam-14').style.color = 'red'
          document.getElementById('r-algexpsam-14').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpsam-13').style.color = 'blue'
          document.getElementById('r-algexpsam-13').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpsam-13').classList.add("correct")
          document.getElementById('b-algexpsam-12').classList.add("incorrect")
          document.getElementById('b-algexpsam-11').classList.add("incorrect")
          document.getElementById('b-algexpsam-14').classList.add("incorrect")
    
          document.getElementById('sa-algexpsam-1').disabled = true;
          document.getElementById('o-algexpsam-11').disabled = true;
          document.getElementById('o-algexpsam-12').disabled = true;
          document.getElementById('o-algexpsam-13').disabled = true;
          document.getElementById('o-algexpsam-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algexpsam1', 0)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-algexpsam-2') != null) {
      algexpsam2But.onclick = function() {
        if (document.getElementById('o-algexpsam-21').checked) {
          document.getElementById('r-algexpsam-21').style.color = 'red'
          document.getElementById('r-algexpsam-21').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpsam-23').style.color = 'blue'
          document.getElementById('r-algexpsam-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpsam-23').classList.add("correct")
          document.getElementById('b-algexpsam-21').classList.add("incorrect")
          document.getElementById('b-algexpsam-22').classList.add("incorrect")
          document.getElementById('b-algexpsam-24').classList.add("incorrect")
    
          document.getElementById('sa-algexpsam-2').disabled = true;
          document.getElementById('o-algexpsam-21').disabled = true;
          document.getElementById('o-algexpsam-22').disabled = true;
          document.getElementById('o-algexpsam-23').disabled = true;
          document.getElementById('o-algexpsam-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algexpsam2', 0)
        }
        if (document.getElementById('o-algexpsam-22').checked) {
          document.getElementById('r-algexpsam-22').style.color = 'red'
          document.getElementById('r-algexpsam-22').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpsam-23').style.color = 'blue'
          document.getElementById('r-algexpsam-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpsam-23').classList.add("correct")
          document.getElementById('b-algexpsam-21').classList.add("incorrect")
          document.getElementById('b-algexpsam-22').classList.add("incorrect")
          document.getElementById('b-algexpsam-24').classList.add("incorrect")
    
          document.getElementById('sa-algexpsam-2').disabled = true;
          document.getElementById('o-algexpsam-21').disabled = true;
          document.getElementById('o-algexpsam-22').disabled = true;
          document.getElementById('o-algexpsam-23').disabled = true;
          document.getElementById('o-algexpsam-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algexpsam2', 0)
        }
        if (document.getElementById('o-algexpsam-23').checked) {
          document.getElementById('r-algexpsam-23').style.color = 'blue'
          document.getElementById('r-algexpsam-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpsam-23').classList.add("correct")
          document.getElementById('b-algexpsam-21').classList.add("incorrect")
          document.getElementById('b-algexpsam-22').classList.add("incorrect")
          document.getElementById('b-algexpsam-24').classList.add("incorrect")
    
          document.getElementById('sa-algexpsam-2').disabled = true;
          document.getElementById('o-algexpsam-21').disabled = true;
          document.getElementById('o-algexpsam-22').disabled = true;
          document.getElementById('o-algexpsam-23').disabled = true;
          document.getElementById('o-algexpsam-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algexpsam2', 1)
        }
        if (document.getElementById('o-algexpsam-24').checked) {
          document.getElementById('r-algexpsam-24').style.color = 'red'
          document.getElementById('r-algexpsam-24').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpsam-23').style.color = 'blue'
          document.getElementById('r-algexpsam-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpsam-23').classList.add("correct")
          document.getElementById('b-algexpsam-21').classList.add("incorrect")
          document.getElementById('b-algexpsam-22').classList.add("incorrect")
          document.getElementById('b-algexpsam-24').classList.add("incorrect")
    
          document.getElementById('sa-algexpsam-2').disabled = true;
          document.getElementById('o-algexpsam-21').disabled = true;
          document.getElementById('o-algexpsam-22').disabled = true;
          document.getElementById('o-algexpsam-23').disabled = true;
          document.getElementById('o-algexpsam-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algexpsam2', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algexpsam-3') != null) {
      algexpsam3But.onclick = function() {
        if (document.getElementById('o-algexpsam-31').checked) {
          document.getElementById('r-algexpsam-31').style.color = 'red'
          document.getElementById('r-algexpsam-31').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpsam-33').style.color = 'blue'
          document.getElementById('r-algexpsam-33').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpsam-33').classList.add("correct")
          document.getElementById('b-algexpsam-31').classList.add("incorrect")
          document.getElementById('b-algexpsam-32').classList.add("incorrect")
          document.getElementById('b-algexpsam-34').classList.add("incorrect")
    
          document.getElementById('sa-algexpsam-3').disabled = true;
          document.getElementById('o-algexpsam-31').disabled = true;
          document.getElementById('o-algexpsam-32').disabled = true;
          document.getElementById('o-algexpsam-33').disabled = true;
          document.getElementById('o-algexpsam-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algexpsam3', 0)
        }
        if (document.getElementById('o-algexpsam-32').checked) {
          document.getElementById('r-algexpsam-32').style.color = 'red'
          document.getElementById('r-algexpsam-32').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpsam-33').style.color = 'blue'
          document.getElementById('r-algexpsam-33').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpsam-33').classList.add("correct")
          document.getElementById('b-algexpsam-31').classList.add("incorrect")
          document.getElementById('b-algexpsam-32').classList.add("incorrect")
          document.getElementById('b-algexpsam-34').classList.add("incorrect")
    
          document.getElementById('sa-algexpsam-3').disabled = true;
          document.getElementById('o-algexpsam-31').disabled = true;
          document.getElementById('o-algexpsam-32').disabled = true;
          document.getElementById('o-algexpsam-33').disabled = true;
          document.getElementById('o-algexpsam-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algexpsam3', 0)
        }
        if (document.getElementById('o-algexpsam-33').checked) {
          document.getElementById('r-algexpsam-33').style.color = 'blue'
          document.getElementById('r-algexpsam-33').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpsam-33').classList.add("correct")
          document.getElementById('b-algexpsam-31').classList.add("incorrect")
          document.getElementById('b-algexpsam-32').classList.add("incorrect")
          document.getElementById('b-algexpsam-34').classList.add("incorrect")
    
          document.getElementById('sa-algexpsam-3').disabled = true;
          document.getElementById('o-algexpsam-31').disabled = true;
          document.getElementById('o-algexpsam-32').disabled = true;
          document.getElementById('o-algexpsam-33').disabled = true;
          document.getElementById('o-algexpsam-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algexpsam3', 1)
        }
        if (document.getElementById('o-algexpsam-34').checked) {
          document.getElementById('r-algexpsam-34').style.color = 'red'
          document.getElementById('r-algexpsam-34').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpsam-33').style.color = 'blue'
          document.getElementById('r-algexpsam-33').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpsam-33').classList.add("correct")
          document.getElementById('b-algexpsam-31').classList.add("incorrect")
          document.getElementById('b-algexpsam-32').classList.add("incorrect")
          document.getElementById('b-algexpsam-34').classList.add("incorrect")
    
          document.getElementById('sa-algexpsam-3').disabled = true;
          document.getElementById('o-algexpsam-31').disabled = true;
          document.getElementById('o-algexpsam-32').disabled = true;
          document.getElementById('o-algexpsam-33').disabled = true;
          document.getElementById('o-algexpsam-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algexpsam3', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algexpsam-4') != null) {
      algexpsam4But.onclick = function() {
        if (document.getElementById('o-algexpsam-41').checked) {
          document.getElementById('r-algexpsam-41').style.color = 'red'
          document.getElementById('r-algexpsam-41').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpsam-42').style.color = 'blue'
          document.getElementById('r-algexpsam-42').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpsam-42').classList.add("correct")
          document.getElementById('b-algexpsam-41').classList.add("incorrect")
          document.getElementById('b-algexpsam-44').classList.add("incorrect")
          document.getElementById('b-algexpsam-43').classList.add("incorrect")
    
          document.getElementById('sa-algexpsam-4').disabled = true;
          document.getElementById('o-algexpsam-41').disabled = true;
          document.getElementById('o-algexpsam-42').disabled = true;
          document.getElementById('o-algexpsam-43').disabled = true;
          document.getElementById('o-algexpsam-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algexpsam4', 0)
        }
        if (document.getElementById('o-algexpsam-42').checked) {
          document.getElementById('r-algexpsam-42').style.color = 'blue'
          document.getElementById('r-algexpsam-42').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpsam-42').classList.add("correct")
          document.getElementById('b-algexpsam-41').classList.add("incorrect")
          document.getElementById('b-algexpsam-44').classList.add("incorrect")
          document.getElementById('b-algexpsam-43').classList.add("incorrect")
    
          document.getElementById('sa-algexpsam-4').disabled = true;
          document.getElementById('o-algexpsam-41').disabled = true;
          document.getElementById('o-algexpsam-42').disabled = true;
          document.getElementById('o-algexpsam-43').disabled = true;
          document.getElementById('o-algexpsam-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algexpsam4', 1)
        }
        if (document.getElementById('o-algexpsam-43').checked) {
          document.getElementById('r-algexpsam-43').style.color = 'red'
          document.getElementById('r-algexpsam-43').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpsam-42').style.color = 'blue'
          document.getElementById('r-algexpsam-42').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpsam-42').classList.add("correct")
          document.getElementById('b-algexpsam-41').classList.add("incorrect")
          document.getElementById('b-algexpsam-44').classList.add("incorrect")
          document.getElementById('b-algexpsam-43').classList.add("incorrect")
    
          document.getElementById('sa-algexpsam-4').disabled = true;
          document.getElementById('o-algexpsam-41').disabled = true;
          document.getElementById('o-algexpsam-42').disabled = true;
          document.getElementById('o-algexpsam-43').disabled = true;
          document.getElementById('o-algexpsam-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algexpsam4', 0)
        }
        if (document.getElementById('o-algexpsam-44').checked) {
          document.getElementById('r-algexpsam-44').style.color = 'red'
          document.getElementById('r-algexpsam-44').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpsam-42').style.color = 'blue'
          document.getElementById('r-algexpsam-42').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpsam-42').classList.add("correct")
          document.getElementById('b-algexpsam-41').classList.add("incorrect")
          document.getElementById('b-algexpsam-44').classList.add("incorrect")
          document.getElementById('b-algexpsam-43').classList.add("incorrect")
    
          document.getElementById('sa-algexpsam-4').disabled = true;
          document.getElementById('o-algexpsam-41').disabled = true;
          document.getElementById('o-algexpsam-42').disabled = true;
          document.getElementById('o-algexpsam-43').disabled = true;
          document.getElementById('o-algexpsam-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algexpsam4', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algexpsam-5') != null) {
      algexpsam5But.onclick = function() {
        if (document.getElementById('o-algexpsam-51').checked) {
          document.getElementById('r-algexpsam-51').style.color = 'red'
          document.getElementById('r-algexpsam-51').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpsam-52').style.color = 'blue'
          document.getElementById('r-algexpsam-52').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpsam-52').classList.add("correct")
          document.getElementById('b-algexpsam-51').classList.add("incorrect")
          document.getElementById('b-algexpsam-53').classList.add("incorrect")
          document.getElementById('b-algexpsam-54').classList.add("incorrect")
    
          document.getElementById('sa-algexpsam-5').disabled = true;
          document.getElementById('o-algexpsam-51').disabled = true;
          document.getElementById('o-algexpsam-52').disabled = true;
          document.getElementById('o-algexpsam-53').disabled = true;
          document.getElementById('o-algexpsam-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algexpsam5', 0)
        }
        if (document.getElementById('o-algexpsam-52').checked) {
          document.getElementById('r-algexpsam-52').style.color = 'blue'
          document.getElementById('r-algexpsam-52').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpsam-52').classList.add("correct")
          document.getElementById('b-algexpsam-51').classList.add("incorrect")
          document.getElementById('b-algexpsam-53').classList.add("incorrect")
          document.getElementById('b-algexpsam-54').classList.add("incorrect")
    
          document.getElementById('sa-algexpsam-5').disabled = true;
          document.getElementById('o-algexpsam-51').disabled = true;
          document.getElementById('o-algexpsam-52').disabled = true;
          document.getElementById('o-algexpsam-53').disabled = true;
          document.getElementById('o-algexpsam-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algexpsam5', 1)
        }
        if (document.getElementById('o-algexpsam-53').checked) {
          document.getElementById('r-algexpsam-53').style.color = 'red'
          document.getElementById('r-algexpsam-53').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpsam-52').style.color = 'blue'
          document.getElementById('r-algexpsam-52').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpsam-52').classList.add("correct")
          document.getElementById('b-algexpsam-51').classList.add("incorrect")
          document.getElementById('b-algexpsam-53').classList.add("incorrect")
          document.getElementById('b-algexpsam-54').classList.add("incorrect")
    
          document.getElementById('sa-algexpsam-5').disabled = true;
          document.getElementById('o-algexpsam-51').disabled = true;
          document.getElementById('o-algexpsam-52').disabled = true;
          document.getElementById('o-algexpsam-53').disabled = true;
          document.getElementById('o-algexpsam-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algexpsam5', 0)
        }
        if (document.getElementById('o-algexpsam-54').checked) {
          document.getElementById('r-algexpsam-54').style.color = 'red'
          document.getElementById('r-algexpsam-54').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpsam-52').style.color = 'blue'
          document.getElementById('r-algexpsam-52').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpsam-52').classList.add("correct")
          document.getElementById('b-algexpsam-51').classList.add("incorrect")
          document.getElementById('b-algexpsam-53').classList.add("incorrect")
          document.getElementById('b-algexpsam-54').classList.add("incorrect")
    
          document.getElementById('sa-algexpsam-5').disabled = true;
          document.getElementById('o-algexpsam-51').disabled = true;
          document.getElementById('o-algexpsam-52').disabled = true;
          document.getElementById('o-algexpsam-53').disabled = true;
          document.getElementById('o-algexpsam-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algexpsam5', 0)
        }
      }
    }
        
         
      if (document.getElementById('sa-algexpsam-6') != null) {
      algexpsam6But.onclick = function() {
        if (document.getElementById('o-algexpsam-61').checked) {
          document.getElementById('r-algexpsam-61').style.color = 'red'
          document.getElementById('r-algexpsam-61').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpsam-64').style.color = 'blue'
          document.getElementById('r-algexpsam-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpsam-64').classList.add("correct")
          document.getElementById('b-algexpsam-61').classList.add("incorrect")
          document.getElementById('b-algexpsam-62').classList.add("incorrect")
          document.getElementById('b-algexpsam-63').classList.add("incorrect")
    
          document.getElementById('sa-algexpsam-6').disabled = true;
          document.getElementById('o-algexpsam-61').disabled = true;
          document.getElementById('o-algexpsam-62').disabled = true;
          document.getElementById('o-algexpsam-63').disabled = true;
          document.getElementById('o-algexpsam-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algexpsam6', 0)
        }
        if (document.getElementById('o-algexpsam-62').checked) {
          document.getElementById('r-algexpsam-62').style.color = 'red'
          document.getElementById('r-algexpsam-62').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpsam-64').style.color = 'blue'
          document.getElementById('r-algexpsam-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpsam-64').classList.add("correct")
          document.getElementById('b-algexpsam-61').classList.add("incorrect")
          document.getElementById('b-algexpsam-62').classList.add("incorrect")
          document.getElementById('b-algexpsam-63').classList.add("incorrect")
    
          document.getElementById('sa-algexpsam-6').disabled = true;
          document.getElementById('o-algexpsam-61').disabled = true;
          document.getElementById('o-algexpsam-62').disabled = true;
          document.getElementById('o-algexpsam-63').disabled = true;
          document.getElementById('o-algexpsam-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algexpsam6', 0)
        }
        if (document.getElementById('o-algexpsam-63').checked) {
          document.getElementById('r-algexpsam-63').style.color = 'red'
          document.getElementById('r-algexpsam-63').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpsam-64').style.color = 'blue'
          document.getElementById('r-algexpsam-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpsam-64').classList.add("correct")
          document.getElementById('b-algexpsam-61').classList.add("incorrect")
          document.getElementById('b-algexpsam-62').classList.add("incorrect")
          document.getElementById('b-algexpsam-63').classList.add("incorrect")
    
          document.getElementById('sa-algexpsam-6').disabled = true;
          document.getElementById('o-algexpsam-61').disabled = true;
          document.getElementById('o-algexpsam-62').disabled = true;
          document.getElementById('o-algexpsam-63').disabled = true;
          document.getElementById('o-algexpsam-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algexpsam6', 0)
        }
        if (document.getElementById('o-algexpsam-64').checked) {
          document.getElementById('r-algexpsam-64').style.color = 'blue'
          document.getElementById('r-algexpsam-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpsam-64').classList.add("correct")
          document.getElementById('b-algexpsam-61').classList.add("incorrect")
          document.getElementById('b-algexpsam-62').classList.add("incorrect")
          document.getElementById('b-algexpsam-63').classList.add("incorrect")
    
          document.getElementById('sa-algexpsam-6').disabled = true;
          document.getElementById('o-algexpsam-61').disabled = true;
          document.getElementById('o-algexpsam-62').disabled = true;
          document.getElementById('o-algexpsam-63').disabled = true;
          document.getElementById('o-algexpsam-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algexpsam6', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algexpsam-7') != null) {
      algexpsam7But.onclick = function() {
        if (document.getElementById('o-algexpsam-71').checked) {
          document.getElementById('r-algexpsam-71').style.color = 'red'
          document.getElementById('r-algexpsam-71').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpsam-74').style.color = 'blue'
          document.getElementById('r-algexpsam-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpsam-74').classList.add("correct")
          document.getElementById('b-algexpsam-71').classList.add("incorrect")
          document.getElementById('b-algexpsam-72').classList.add("incorrect")
          document.getElementById('b-algexpsam-73').classList.add("incorrect")
    
          document.getElementById('sa-algexpsam-7').disabled = true;
          document.getElementById('o-algexpsam-71').disabled = true;
          document.getElementById('o-algexpsam-72').disabled = true;
          document.getElementById('o-algexpsam-73').disabled = true;
          document.getElementById('o-algexpsam-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algexpsam7', 0)
        }
        if (document.getElementById('o-algexpsam-72').checked) {
          document.getElementById('r-algexpsam-72').style.color = 'red'
          document.getElementById('r-algexpsam-72').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpsam-74').style.color = 'blue'
          document.getElementById('r-algexpsam-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpsam-74').classList.add("correct")
          document.getElementById('b-algexpsam-71').classList.add("incorrect")
          document.getElementById('b-algexpsam-72').classList.add("incorrect")
          document.getElementById('b-algexpsam-73').classList.add("incorrect")
    
          document.getElementById('sa-algexpsam-7').disabled = true;
          document.getElementById('o-algexpsam-71').disabled = true;
          document.getElementById('o-algexpsam-72').disabled = true;
          document.getElementById('o-algexpsam-73').disabled = true;
          document.getElementById('o-algexpsam-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algexpsam7', 0)
        }
        if (document.getElementById('o-algexpsam-73').checked) {
          document.getElementById('r-algexpsam-73').style.color = 'red'
          document.getElementById('r-algexpsam-73').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpsam-74').style.color = 'blue'
          document.getElementById('r-algexpsam-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpsam-74').classList.add("correct")
          document.getElementById('b-algexpsam-71').classList.add("incorrect")
          document.getElementById('b-algexpsam-72').classList.add("incorrect")
          document.getElementById('b-algexpsam-73').classList.add("incorrect")
    
          document.getElementById('sa-algexpsam-7').disabled = true;
          document.getElementById('o-algexpsam-71').disabled = true;
          document.getElementById('o-algexpsam-72').disabled = true;
          document.getElementById('o-algexpsam-73').disabled = true;
          document.getElementById('o-algexpsam-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algexpsam7', 0)
        }
        if (document.getElementById('o-algexpsam-74').checked) {
          document.getElementById('r-algexpsam-74').style.color = 'blue'
          document.getElementById('r-algexpsam-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpsam-74').classList.add("correct")
          document.getElementById('b-algexpsam-71').classList.add("incorrect")
          document.getElementById('b-algexpsam-72').classList.add("incorrect")
          document.getElementById('b-algexpsam-73').classList.add("incorrect")
    
          document.getElementById('sa-algexpsam-7').disabled = true;
          document.getElementById('o-algexpsam-71').disabled = true;
          document.getElementById('o-algexpsam-72').disabled = true;
          document.getElementById('o-algexpsam-73').disabled = true;
          document.getElementById('o-algexpsam-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algexpsam7', 1)
        }
      }
    }
    
    
    if (document.getElementById('sa-algexpsam-8') != null) {
      algexpsam8But.onclick = function() {
        if (document.getElementById('o-algexpsam-81').checked) {
          document.getElementById('r-algexpsam-81').style.color = 'red'
          document.getElementById('r-algexpsam-81').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpsam-82').style.color = 'blue'
          document.getElementById('r-algexpsam-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpsam-82').classList.add("correct")
          document.getElementById('b-algexpsam-81').classList.add("incorrect")
          document.getElementById('b-algexpsam-83').classList.add("incorrect")
          document.getElementById('b-algexpsam-84').classList.add("incorrect")
    
          document.getElementById('sa-algexpsam-8').disabled = true;
          document.getElementById('o-algexpsam-81').disabled = true;
          document.getElementById('o-algexpsam-82').disabled = true;
          document.getElementById('o-algexpsam-83').disabled = true;
          document.getElementById('o-algexpsam-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algexpsam8', 0)
        }
        if (document.getElementById('o-algexpsam-82').checked) {
          document.getElementById('r-algexpsam-82').style.color = 'blue'
          document.getElementById('r-algexpsam-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpsam-82').classList.add("correct")
          document.getElementById('b-algexpsam-81').classList.add("incorrect")
          document.getElementById('b-algexpsam-83').classList.add("incorrect")
          document.getElementById('b-algexpsam-84').classList.add("incorrect")
    
          document.getElementById('sa-algexpsam-8').disabled = true;
          document.getElementById('o-algexpsam-81').disabled = true;
          document.getElementById('o-algexpsam-82').disabled = true;
          document.getElementById('o-algexpsam-83').disabled = true;
          document.getElementById('o-algexpsam-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algexpsam8', 1)
        }
        if (document.getElementById('o-algexpsam-83').checked) {
          document.getElementById('r-algexpsam-83').style.color = 'red'
          document.getElementById('r-algexpsam-83').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpsam-82').style.color = 'blue'
          document.getElementById('r-algexpsam-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpsam-82').classList.add("correct")
          document.getElementById('b-algexpsam-81').classList.add("incorrect")
          document.getElementById('b-algexpsam-83').classList.add("incorrect")
          document.getElementById('b-algexpsam-84').classList.add("incorrect")
    
          document.getElementById('sa-algexpsam-8').disabled = true;
          document.getElementById('o-algexpsam-81').disabled = true;
          document.getElementById('o-algexpsam-82').disabled = true;
          document.getElementById('o-algexpsam-83').disabled = true;
          document.getElementById('o-algexpsam-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algexpsam8', 0)
        }
        if (document.getElementById('o-algexpsam-84').checked) {
          document.getElementById('r-algexpsam-84').style.color = 'red'
          document.getElementById('r-algexpsam-84').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpsam-82').style.color = 'blue'
          document.getElementById('r-algexpsam-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpsam-82').classList.add("correct")
          document.getElementById('b-algexpsam-81').classList.add("incorrect")
          document.getElementById('b-algexpsam-83').classList.add("incorrect")
          document.getElementById('b-algexpsam-84').classList.add("incorrect")
    
          document.getElementById('sa-algexpsam-8').disabled = true;
          document.getElementById('o-algexpsam-81').disabled = true;
          document.getElementById('o-algexpsam-82').disabled = true;
          document.getElementById('o-algexpsam-83').disabled = true;
          document.getElementById('o-algexpsam-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algexpsam8', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-algexpsam-9') != null) {
      algexpsam9But.onclick = function() {
        if (document.getElementById('o-algexpsam-91').checked) {
          document.getElementById('r-algexpsam-91').style.color = 'red'
          document.getElementById('r-algexpsam-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpsam-94').style.color = 'blue'
          document.getElementById('r-algexpsam-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpsam-94').classList.add("correct")
          document.getElementById('b-algexpsam-91').classList.add("incorrect")
          document.getElementById('b-algexpsam-92').classList.add("incorrect")
          document.getElementById('b-algexpsam-93').classList.add("incorrect")
    
          document.getElementById('sa-algexpsam-9').disabled = true;
          document.getElementById('o-algexpsam-91').disabled = true;
          document.getElementById('o-algexpsam-92').disabled = true;
          document.getElementById('o-algexpsam-93').disabled = true;
          document.getElementById('o-algexpsam-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algexpsam9', 0)
        }
        if (document.getElementById('o-algexpsam-92').checked) {
          document.getElementById('r-algexpsam-91').style.color = 'red'
          document.getElementById('r-algexpsam-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpsam-94').style.color = 'blue'
          document.getElementById('r-algexpsam-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpsam-94').classList.add("correct")
          document.getElementById('b-algexpsam-91').classList.add("incorrect")
          document.getElementById('b-algexpsam-92').classList.add("incorrect")
          document.getElementById('b-algexpsam-93').classList.add("incorrect")
    
          document.getElementById('sa-algexpsam-9').disabled = true;
          document.getElementById('o-algexpsam-91').disabled = true;
          document.getElementById('o-algexpsam-92').disabled = true;
          document.getElementById('o-algexpsam-93').disabled = true;
          document.getElementById('o-algexpsam-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algexpsam9', 0)
        }
        if (document.getElementById('o-algexpsam-93').checked) {
          document.getElementById('r-algexpsam-91').style.color = 'red'
          document.getElementById('r-algexpsam-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpsam-94').style.color = 'blue'
          document.getElementById('r-algexpsam-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpsam-94').classList.add("correct")
          document.getElementById('b-algexpsam-91').classList.add("incorrect")
          document.getElementById('b-algexpsam-92').classList.add("incorrect")
          document.getElementById('b-algexpsam-93').classList.add("incorrect")
    
          document.getElementById('sa-algexpsam-9').disabled = true;
          document.getElementById('o-algexpsam-91').disabled = true;
          document.getElementById('o-algexpsam-92').disabled = true;
          document.getElementById('o-algexpsam-93').disabled = true;
          document.getElementById('o-algexpsam-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algexpsam9', 0)
        }
        if (document.getElementById('o-algexpsam-94').checked) {
          document.getElementById('r-algexpsam-94').style.color = 'blue'
          document.getElementById('r-algexpsam-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpsam-94').classList.add("correct")
          document.getElementById('b-algexpsam-91').classList.add("incorrect")
          document.getElementById('b-algexpsam-92').classList.add("incorrect")
          document.getElementById('b-algexpsam-93').classList.add("incorrect")
    
          document.getElementById('sa-algexpsam-9').disabled = true;
          document.getElementById('o-algexpsam-91').disabled = true;
          document.getElementById('o-algexpsam-92').disabled = true;
          document.getElementById('o-algexpsam-93').disabled = true;
          document.getElementById('o-algexpsam-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algexpsam9', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algexpsam-10') != null) {
      algexpsam10But.onclick = function() {
        if (document.getElementById('o-algexpsam-101').checked) {
          document.getElementById('r-algexpsam-101').style.color = 'red'
          document.getElementById('r-algexpsam-101').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpsam-102').style.color = 'blue'
          document.getElementById('r-algexpsam-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpsam-102').classList.add("correct")
          document.getElementById('b-algexpsam-101').classList.add("incorrect")
          document.getElementById('b-algexpsam-103').classList.add("incorrect")
          document.getElementById('b-algexpsam-104').classList.add("incorrect")
    
          document.getElementById('sa-algexpsam-10').disabled = true;
          document.getElementById('o-algexpsam-101').disabled = true;
          document.getElementById('o-algexpsam-102').disabled = true;
          document.getElementById('o-algexpsam-103').disabled = true;
          document.getElementById('o-algexpsam-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algexpsam10', 0)
        }
        if (document.getElementById('o-algexpsam-102').checked) {
          document.getElementById('r-algexpsam-102').style.color = 'blue'
          document.getElementById('r-algexpsam-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpsam-102').classList.add("correct")
          document.getElementById('b-algexpsam-101').classList.add("incorrect")
          document.getElementById('b-algexpsam-103').classList.add("incorrect")
          document.getElementById('b-algexpsam-104').classList.add("incorrect")
    
          document.getElementById('sa-algexpsam-10').disabled = true;
          document.getElementById('o-algexpsam-101').disabled = true;
          document.getElementById('o-algexpsam-102').disabled = true;
          document.getElementById('o-algexpsam-103').disabled = true;
          document.getElementById('o-algexpsam-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algexpsam10', 1)
        }
        if (document.getElementById('o-algexpsam-103').checked) {
          document.getElementById('r-algexpsam-103').style.color = 'red'
          document.getElementById('r-algexpsam-103').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpsam-102').style.color = 'blue'
          document.getElementById('r-algexpsam-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpsam-102').classList.add("correct")
          document.getElementById('b-algexpsam-101').classList.add("incorrect")
          document.getElementById('b-algexpsam-103').classList.add("incorrect")
          document.getElementById('b-algexpsam-104').classList.add("incorrect")
    
          document.getElementById('sa-algexpsam-10').disabled = true;
          document.getElementById('o-algexpsam-101').disabled = true;
          document.getElementById('o-algexpsam-102').disabled = true;
          document.getElementById('o-algexpsam-103').disabled = true;
          document.getElementById('o-algexpsam-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algexpsam10', 0)
        }
        if (document.getElementById('o-algexpsam-104').checked) {
          document.getElementById('r-algexpsam-104').style.color = 'red'
          document.getElementById('r-algexpsam-104').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpsam-102').style.color = 'blue'
          document.getElementById('r-algexpsam-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpsam-102').classList.add("correct")
          document.getElementById('b-algexpsam-101').classList.add("incorrect")
          document.getElementById('b-algexpsam-103').classList.add("incorrect")
          document.getElementById('b-algexpsam-104').classList.add("incorrect")
    
          document.getElementById('sa-algexpsam-10').disabled = true;
          document.getElementById('o-algexpsam-101').disabled = true;
          document.getElementById('o-algexpsam-102').disabled = true;
          document.getElementById('o-algexpsam-103').disabled = true;
          document.getElementById('o-algexpsam-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algexpsam10', 0)
        }
      }
    }
    