
  let algabsval1But = document.getElementById('sa-algabsval-1');
  let algabsval2But = document.getElementById('sa-algabsval-2');
  let algabsval3But = document.getElementById('sa-algabsval-3');
  let algabsval4But = document.getElementById('sa-algabsval-4');
  let algabsval5But = document.getElementById('sa-algabsval-5');



  showExplanation1 = function() {
    document.getElementById('e-algabsval-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-algabsval-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-algabsval-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-algabsval-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-algabsval-5').style.display = 'block';
     }



     if (document.getElementById('sa-algabsval-1') != null) {
      algabsval1But.onclick = function () {
        if (document.getElementById('o-algabsval-11').checked) {
          document.getElementById('r-algabsval-11').style.color = 'red'
          document.getElementById('r-algabsval-11').innerHTML = 'Incorrect!'
          document.getElementById('r-algabsval-12').style.color = 'blue'
          document.getElementById('r-algabsval-12').innerHTML = 'Correct!'
    
          document.getElementById('b-algabsval-12').classList.add("correct")
          document.getElementById('b-algabsval-11').classList.add("incorrect")
          document.getElementById('b-algabsval-13').classList.add("incorrect")
          document.getElementById('b-algabsval-14').classList.add("incorrect")
    
          document.getElementById('sa-algabsval-1').disabled = true;
          document.getElementById('o-algabsval-11').disabled = true;
          document.getElementById('o-algabsval-12').disabled = true;
          document.getElementById('o-algabsval-13').disabled = true;
          document.getElementById('o-algabsval-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algabsval1', 0)
        }
    
        if (document.getElementById('o-algabsval-12').checked) {
          document.getElementById('r-algabsval-12').style.color = 'blue'
          document.getElementById('r-algabsval-12').innerHTML = 'Correct!'
    
          document.getElementById('b-algabsval-12').classList.add("correct")
          document.getElementById('b-algabsval-11').classList.add("incorrect")
          document.getElementById('b-algabsval-13').classList.add("incorrect")
          document.getElementById('b-algabsval-14').classList.add("incorrect")
    
          document.getElementById('sa-algabsval-1').disabled = true;
          document.getElementById('o-algabsval-11').disabled = true;
          document.getElementById('o-algabsval-12').disabled = true;
          document.getElementById('o-algabsval-13').disabled = true;
          document.getElementById('o-algabsval-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algabsval1', 1)
        }
        if (document.getElementById('o-algabsval-13').checked) {
          document.getElementById('r-algabsval-13').style.color = 'red'
          document.getElementById('r-algabsval-13').innerHTML = 'Incorrect!'
          document.getElementById('r-algabsval-12').style.color = 'blue'
          document.getElementById('r-algabsval-12').innerHTML = 'Correct!'
          
          document.getElementById('b-algabsval-12').classList.add("correct")
          document.getElementById('b-algabsval-11').classList.add("incorrect")
          document.getElementById('b-algabsval-13').classList.add("incorrect")
          document.getElementById('b-algabsval-14').classList.add("incorrect")
    
          document.getElementById('sa-algabsval-1').disabled = true;
          document.getElementById('o-algabsval-11').disabled = true;
          document.getElementById('o-algabsval-12').disabled = true;
          document.getElementById('o-algabsval-13').disabled = true;
          document.getElementById('o-algabsval-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algabsval1', 0)
        }
        if (document.getElementById('o-algabsval-14').checked) {
          document.getElementById('r-algabsval-14').style.color = 'red'
          document.getElementById('r-algabsval-14').innerHTML = 'Incorrect!'
          document.getElementById('r-algabsval-12').style.color = 'blue'
          document.getElementById('r-algabsval-12').innerHTML = 'Correct!'
          
          document.getElementById('b-algabsval-12').classList.add("correct")
          document.getElementById('b-algabsval-11').classList.add("incorrect")
          document.getElementById('b-algabsval-13').classList.add("incorrect")
          document.getElementById('b-algabsval-14').classList.add("incorrect")
    
          document.getElementById('sa-algabsval-1').disabled = true;
          document.getElementById('o-algabsval-11').disabled = true;
          document.getElementById('o-algabsval-12').disabled = true;
          document.getElementById('o-algabsval-13').disabled = true;
          document.getElementById('o-algabsval-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algabsval1', 0)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-algabsval-2') != null) {
      algabsval2But.onclick = function() {
        if (document.getElementById('o-algabsval-21').checked) {
          document.getElementById('r-algabsval-21').style.color = 'red'
          document.getElementById('r-algabsval-21').innerHTML = 'Incorrect!'
          document.getElementById('r-algabsval-23').style.color = 'blue'
          document.getElementById('r-algabsval-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algabsval-23').classList.add("correct")
          document.getElementById('b-algabsval-21').classList.add("incorrect")
          document.getElementById('b-algabsval-22').classList.add("incorrect")
          document.getElementById('b-algabsval-24').classList.add("incorrect")
    
          document.getElementById('sa-algabsval-2').disabled = true;
          document.getElementById('o-algabsval-21').disabled = true;
          document.getElementById('o-algabsval-22').disabled = true;
          document.getElementById('o-algabsval-23').disabled = true;
          document.getElementById('o-algabsval-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algabsval2', 0)
        }
        if (document.getElementById('o-algabsval-22').checked) {
          document.getElementById('r-algabsval-22').style.color = 'red'
          document.getElementById('r-algabsval-22').innerHTML = 'Incorrect!'
          document.getElementById('r-algabsval-23').style.color = 'blue'
          document.getElementById('r-algabsval-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algabsval-23').classList.add("correct")
          document.getElementById('b-algabsval-21').classList.add("incorrect")
          document.getElementById('b-algabsval-22').classList.add("incorrect")
          document.getElementById('b-algabsval-24').classList.add("incorrect")
    
          document.getElementById('sa-algabsval-2').disabled = true;
          document.getElementById('o-algabsval-21').disabled = true;
          document.getElementById('o-algabsval-22').disabled = true;
          document.getElementById('o-algabsval-23').disabled = true;
          document.getElementById('o-algabsval-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algabsval2', 0)
        }
        if (document.getElementById('o-algabsval-23').checked) {
          document.getElementById('r-algabsval-23').style.color = 'blue'
          document.getElementById('r-algabsval-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algabsval-23').classList.add("correct")
          document.getElementById('b-algabsval-21').classList.add("incorrect")
          document.getElementById('b-algabsval-22').classList.add("incorrect")
          document.getElementById('b-algabsval-24').classList.add("incorrect")
    
          document.getElementById('sa-algabsval-2').disabled = true;
          document.getElementById('o-algabsval-21').disabled = true;
          document.getElementById('o-algabsval-22').disabled = true;
          document.getElementById('o-algabsval-23').disabled = true;
          document.getElementById('o-algabsval-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algabsval2', 1)
        }
        if (document.getElementById('o-algabsval-24').checked) {
          document.getElementById('r-algabsval-24').style.color = 'red'
          document.getElementById('r-algabsval-24').innerHTML = 'Incorrect!'
          document.getElementById('r-algabsval-23').style.color = 'blue'
          document.getElementById('r-algabsval-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algabsval-23').classList.add("correct")
          document.getElementById('b-algabsval-21').classList.add("incorrect")
          document.getElementById('b-algabsval-22').classList.add("incorrect")
          document.getElementById('b-algabsval-24').classList.add("incorrect")
    
          document.getElementById('sa-algabsval-2').disabled = true;
          document.getElementById('o-algabsval-21').disabled = true;
          document.getElementById('o-algabsval-22').disabled = true;
          document.getElementById('o-algabsval-23').disabled = true;
          document.getElementById('o-algabsval-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algabsval2', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algabsval-3') != null) {
      algabsval3But.onclick = function() {
        if (document.getElementById('o-algabsval-31').checked) {
          document.getElementById('r-algabsval-31').style.color = 'red'
          document.getElementById('r-algabsval-31').innerHTML = 'Incorrect!'
          document.getElementById('r-algabsval-32').style.color = 'blue'
          document.getElementById('r-algabsval-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algabsval-32').classList.add("correct")
          document.getElementById('b-algabsval-31').classList.add("incorrect")
          document.getElementById('b-algabsval-33').classList.add("incorrect")
          document.getElementById('b-algabsval-34').classList.add("incorrect")
    
          document.getElementById('sa-algabsval-3').disabled = true;
          document.getElementById('o-algabsval-31').disabled = true;
          document.getElementById('o-algabsval-32').disabled = true;
          document.getElementById('o-algabsval-33').disabled = true;
          document.getElementById('o-algabsval-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algabsval3', 0)
        }
        if (document.getElementById('o-algabsval-32').checked) {    
          document.getElementById('r-algabsval-32').style.color = 'blue'
          document.getElementById('r-algabsval-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algabsval-32').classList.add("correct")
          document.getElementById('b-algabsval-31').classList.add("incorrect")
          document.getElementById('b-algabsval-33').classList.add("incorrect")
          document.getElementById('b-algabsval-34').classList.add("incorrect")
    
          document.getElementById('sa-algabsval-3').disabled = true;
          document.getElementById('o-algabsval-31').disabled = true;
          document.getElementById('o-algabsval-32').disabled = true;
          document.getElementById('o-algabsval-33').disabled = true;
          document.getElementById('o-algabsval-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algabsval3', 1)
        }
        if (document.getElementById('o-algabsval-33').checked) {
          document.getElementById('r-algabsval-33').style.color = 'red'
          document.getElementById('r-algabsval-33').innerHTML = 'Incorrect!'
          document.getElementById('r-algabsval-32').style.color = 'blue'
          document.getElementById('r-algabsval-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algabsval-32').classList.add("correct")
          document.getElementById('b-algabsval-31').classList.add("incorrect")
          document.getElementById('b-algabsval-33').classList.add("incorrect")
          document.getElementById('b-algabsval-34').classList.add("incorrect")
    
          document.getElementById('sa-algabsval-3').disabled = true;
          document.getElementById('o-algabsval-31').disabled = true;
          document.getElementById('o-algabsval-32').disabled = true;
          document.getElementById('o-algabsval-33').disabled = true;
          document.getElementById('o-algabsval-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algabsval3', 0)
        }
        if (document.getElementById('o-algabsval-34').checked) {
          document.getElementById('r-algabsval-34').style.color = 'red'
          document.getElementById('r-algabsval-34').innerHTML = 'Incorrect!'
          document.getElementById('r-algabsval-32').style.color = 'blue'
          document.getElementById('r-algabsval-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algabsval-32').classList.add("correct")
          document.getElementById('b-algabsval-31').classList.add("incorrect")
          document.getElementById('b-algabsval-33').classList.add("incorrect")
          document.getElementById('b-algabsval-34').classList.add("incorrect")
    
          document.getElementById('sa-algabsval-3').disabled = true;
          document.getElementById('o-algabsval-31').disabled = true;
          document.getElementById('o-algabsval-32').disabled = true;
          document.getElementById('o-algabsval-33').disabled = true;
          document.getElementById('o-algabsval-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algabsval3', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algabsval-4') != null) {
      algabsval4But.onclick = function() {
        if (document.getElementById('o-algabsval-41').checked) {
          document.getElementById('r-algabsval-41').style.color = 'red'
          document.getElementById('r-algabsval-41').innerHTML = 'Incorrect!'
          document.getElementById('r-algabsval-44').style.color = 'blue'
          document.getElementById('r-algabsval-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algabsval-44').classList.add("correct")
          document.getElementById('b-algabsval-41').classList.add("incorrect")
          document.getElementById('b-algabsval-42').classList.add("incorrect")
          document.getElementById('b-algabsval-43').classList.add("incorrect")
    
          document.getElementById('sa-algabsval-4').disabled = true;
          document.getElementById('o-algabsval-41').disabled = true;
          document.getElementById('o-algabsval-42').disabled = true;
          document.getElementById('o-algabsval-43').disabled = true;
          document.getElementById('o-algabsval-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algabsval4', 0)
        }
        if (document.getElementById('o-algabsval-42').checked) {
          document.getElementById('r-algabsval-42').style.color = 'red'
          document.getElementById('r-algabsval-42').innerHTML = 'Incorrect!'
          document.getElementById('r-algabsval-44').style.color = 'blue'
          document.getElementById('r-algabsval-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algabsval-44').classList.add("correct")
          document.getElementById('b-algabsval-41').classList.add("incorrect")
          document.getElementById('b-algabsval-42').classList.add("incorrect")
          document.getElementById('b-algabsval-43').classList.add("incorrect")
    
          document.getElementById('sa-algabsval-4').disabled = true;
          document.getElementById('o-algabsval-41').disabled = true;
          document.getElementById('o-algabsval-42').disabled = true;
          document.getElementById('o-algabsval-43').disabled = true;
          document.getElementById('o-algabsval-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algabsval4', 0)
        }
        if (document.getElementById('o-algabsval-43').checked) {
          document.getElementById('r-algabsval-43').style.color = 'red'
          document.getElementById('r-algabsval-43').innerHTML = 'Incorrect!'
          document.getElementById('r-algabsval-44').style.color = 'blue'
          document.getElementById('r-algabsval-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algabsval-44').classList.add("correct")
          document.getElementById('b-algabsval-41').classList.add("incorrect")
          document.getElementById('b-algabsval-42').classList.add("incorrect")
          document.getElementById('b-algabsval-43').classList.add("incorrect")
    
          document.getElementById('sa-algabsval-4').disabled = true;
          document.getElementById('o-algabsval-41').disabled = true;
          document.getElementById('o-algabsval-42').disabled = true;
          document.getElementById('o-algabsval-43').disabled = true;
          document.getElementById('o-algabsval-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algabsval4', 0)
        }
        if (document.getElementById('o-algabsval-44').checked) {
          document.getElementById('r-algabsval-44').style.color = 'blue'
          document.getElementById('r-algabsval-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algabsval-44').classList.add("correct")
          document.getElementById('b-algabsval-41').classList.add("incorrect")
          document.getElementById('b-algabsval-42').classList.add("incorrect")
          document.getElementById('b-algabsval-43').classList.add("incorrect")
    
          document.getElementById('sa-algabsval-4').disabled = true;
          document.getElementById('o-algabsval-41').disabled = true;
          document.getElementById('o-algabsval-42').disabled = true;
          document.getElementById('o-algabsval-43').disabled = true;
          document.getElementById('o-algabsval-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algabsval4', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algabsval-5') != null) {
      algabsval5But.onclick = function() {
        if (document.getElementById('o-algabsval-51').checked) {
          document.getElementById('r-algabsval-51').style.color = 'red'
          document.getElementById('r-algabsval-51').innerHTML = 'Incorrect!'
          document.getElementById('r-algabsval-53').style.color = 'blue'
          document.getElementById('r-algabsval-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algabsval-53').classList.add("correct")
          document.getElementById('b-algabsval-51').classList.add("incorrect")
          document.getElementById('b-algabsval-52').classList.add("incorrect")
          document.getElementById('b-algabsval-54').classList.add("incorrect")
    
          document.getElementById('sa-algabsval-5').disabled = true;
          document.getElementById('o-algabsval-51').disabled = true;
          document.getElementById('o-algabsval-52').disabled = true;
          document.getElementById('o-algabsval-53').disabled = true;
          document.getElementById('o-algabsval-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algabsval5', 0)
        }
        if (document.getElementById('o-algabsval-52').checked) {
          document.getElementById('r-algabsval-52').style.color = 'red'
          document.getElementById('r-algabsval-52').innerHTML = 'Incorrect!'
          document.getElementById('r-algabsval-53').style.color = 'blue'
          document.getElementById('r-algabsval-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algabsval-53').classList.add("correct")
          document.getElementById('b-algabsval-51').classList.add("incorrect")
          document.getElementById('b-algabsval-52').classList.add("incorrect")
          document.getElementById('b-algabsval-54').classList.add("incorrect")
    
          document.getElementById('sa-algabsval-5').disabled = true;
          document.getElementById('o-algabsval-51').disabled = true;
          document.getElementById('o-algabsval-52').disabled = true;
          document.getElementById('o-algabsval-53').disabled = true;
          document.getElementById('o-algabsval-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algabsval5', 0)
        }
        if (document.getElementById('o-algabsval-53').checked) {
          document.getElementById('r-algabsval-53').style.color = 'blue'
          document.getElementById('r-algabsval-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algabsval-53').classList.add("correct")
          document.getElementById('b-algabsval-51').classList.add("incorrect")
          document.getElementById('b-algabsval-52').classList.add("incorrect")
          document.getElementById('b-algabsval-54').classList.add("incorrect")
    
          document.getElementById('sa-algabsval-5').disabled = true;
          document.getElementById('o-algabsval-51').disabled = true;
          document.getElementById('o-algabsval-52').disabled = true;
          document.getElementById('o-algabsval-53').disabled = true;
          document.getElementById('o-algabsval-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algabsval5', 1)
        }
        if (document.getElementById('o-algabsval-54').checked) {
          document.getElementById('r-algabsval-54').style.color = 'red'
          document.getElementById('r-algabsval-54').innerHTML = 'Incorrect!'
          document.getElementById('r-algabsval-53').style.color = 'blue'
          document.getElementById('r-algabsval-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algabsval-53').classList.add("correct")
          document.getElementById('b-algabsval-51').classList.add("incorrect")
          document.getElementById('b-algabsval-52').classList.add("incorrect")
          document.getElementById('b-algabsval-54').classList.add("incorrect")
    
          document.getElementById('sa-algabsval-5').disabled = true;
          document.getElementById('o-algabsval-51').disabled = true;
          document.getElementById('o-algabsval-52').disabled = true;
          document.getElementById('o-algabsval-53').disabled = true;
          document.getElementById('o-algabsval-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algabsval5', 0)
        }
      }
    }
        
   