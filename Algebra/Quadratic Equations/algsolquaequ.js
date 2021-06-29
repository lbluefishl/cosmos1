
  let algsolquaequ1But = document.getElementById('sa-algsolquaequ-1');
  let algsolquaequ2But = document.getElementById('sa-algsolquaequ-2');
  let algsolquaequ3But = document.getElementById('sa-algsolquaequ-3');
  let algsolquaequ4But = document.getElementById('sa-algsolquaequ-4');
  let algsolquaequ5But = document.getElementById('sa-algsolquaequ-5');
  let algsolquaequ6But = document.getElementById('sa-algsolquaequ-6');
  let algsolquaequ7But = document.getElementById('sa-algsolquaequ-7');
  let algsolquaequ8But = document.getElementById('sa-algsolquaequ-8');
  let algsolquaequ9But = document.getElementById('sa-algsolquaequ-9');
  let algsolquaequ10But = document.getElementById('sa-algsolquaequ-10');


  showExplanation1 = function() {
    document.getElementById('e-algsolquaequ-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-algsolquaequ-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-algsolquaequ-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-algsolquaequ-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-algsolquaequ-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-algsolquaequ-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-algsolquaequ-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-algsolquaequ-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-algsolquaequ-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-algsolquaequ-10').style.display = 'block';
     } 



     if (document.getElementById('sa-algsolquaequ-1') != null) {
      algsolquaequ1But.onclick = function () {
        if (document.getElementById('o-algsolquaequ-11').checked) {
          document.getElementById('r-algsolquaequ-11').style.color = 'blue'
          document.getElementById('r-algsolquaequ-11').innerHTML = 'Correct!'
    
          document.getElementById('b-algsolquaequ-11').classList.add("correct")
          document.getElementById('b-algsolquaequ-12').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-13').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-14').classList.add("incorrect")
    
          document.getElementById('sa-algsolquaequ-1').disabled = true;
          document.getElementById('o-algsolquaequ-11').disabled = true;
          document.getElementById('o-algsolquaequ-12').disabled = true;
          document.getElementById('o-algsolquaequ-13').disabled = true;
          document.getElementById('o-algsolquaequ-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algsolquaequ1', 1)
        }
    
        if (document.getElementById('o-algsolquaequ-12').checked) {
         
          document.getElementById('r-algsolquaequ-12').style.color = 'red'
          document.getElementById('r-algsolquaequ-12').innerHTML = 'Incorrect!'
          document.getElementById('r-algsolquaequ-11').style.color = 'blue'
          document.getElementById('r-algsolquaequ-11').innerHTML = 'Correct!'
    
          document.getElementById('b-algsolquaequ-11').classList.add("correct")
          document.getElementById('b-algsolquaequ-12').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-13').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-14').classList.add("incorrect")
    
          document.getElementById('sa-algsolquaequ-1').disabled = true;
          document.getElementById('o-algsolquaequ-11').disabled = true;
          document.getElementById('o-algsolquaequ-12').disabled = true;
          document.getElementById('o-algsolquaequ-13').disabled = true;
          document.getElementById('o-algsolquaequ-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algsolquaequ1', 0)
        }
        if (document.getElementById('o-algsolquaequ-13').checked) {
          document.getElementById('r-algsolquaequ-13').style.color = 'red'
          document.getElementById('r-algsolquaequ-13').innerHTML = 'Incorrect!'
          document.getElementById('r-algsolquaequ-11').style.color = 'blue'
          document.getElementById('r-algsolquaequ-11').innerHTML = 'Correct!'
          
          document.getElementById('b-algsolquaequ-11').classList.add("correct")
          document.getElementById('b-algsolquaequ-12').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-13').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-14').classList.add("incorrect")
    
          document.getElementById('sa-algsolquaequ-1').disabled = true;
          document.getElementById('o-algsolquaequ-11').disabled = true;
          document.getElementById('o-algsolquaequ-12').disabled = true;
          document.getElementById('o-algsolquaequ-13').disabled = true;
          document.getElementById('o-algsolquaequ-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algsolquaequ1', 0)
        }
        if (document.getElementById('o-algsolquaequ-14').checked) {
          document.getElementById('r-algsolquaequ-14').style.color = 'red'
          document.getElementById('r-algsolquaequ-14').innerHTML = 'Incorrect!'
          document.getElementById('r-algsolquaequ-11').style.color = 'blue'
          document.getElementById('r-algsolquaequ-11').innerHTML = 'Correct!'
          
          document.getElementById('b-algsolquaequ-11').classList.add("correct")
          document.getElementById('b-algsolquaequ-12').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-13').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-14').classList.add("incorrect")
    
          document.getElementById('sa-algsolquaequ-1').disabled = true;
          document.getElementById('o-algsolquaequ-11').disabled = true;
          document.getElementById('o-algsolquaequ-12').disabled = true;
          document.getElementById('o-algsolquaequ-13').disabled = true;
          document.getElementById('o-algsolquaequ-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algsolquaequ1', 0)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-algsolquaequ-2') != null) {
      algsolquaequ2But.onclick = function() {
        if (document.getElementById('o-algsolquaequ-21').checked) {
          document.getElementById('r-algsolquaequ-21').style.color = 'red'
          document.getElementById('r-algsolquaequ-21').innerHTML = 'Incorrect!'
          document.getElementById('r-algsolquaequ-23').style.color = 'blue'
          document.getElementById('r-algsolquaequ-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algsolquaequ-23').classList.add("correct")
          document.getElementById('b-algsolquaequ-21').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-22').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-24').classList.add("incorrect")
    
          document.getElementById('sa-algsolquaequ-2').disabled = true;
          document.getElementById('o-algsolquaequ-21').disabled = true;
          document.getElementById('o-algsolquaequ-22').disabled = true;
          document.getElementById('o-algsolquaequ-23').disabled = true;
          document.getElementById('o-algsolquaequ-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algsolquaequ2', 0)
        }
        if (document.getElementById('o-algsolquaequ-22').checked) {
          document.getElementById('r-algsolquaequ-22').style.color = 'red'
          document.getElementById('r-algsolquaequ-22').innerHTML = 'Incorrect!'
          document.getElementById('r-algsolquaequ-23').style.color = 'blue'
          document.getElementById('r-algsolquaequ-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algsolquaequ-23').classList.add("correct")
          document.getElementById('b-algsolquaequ-21').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-22').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-24').classList.add("incorrect")
    
          document.getElementById('sa-algsolquaequ-2').disabled = true;
          document.getElementById('o-algsolquaequ-21').disabled = true;
          document.getElementById('o-algsolquaequ-22').disabled = true;
          document.getElementById('o-algsolquaequ-23').disabled = true;
          document.getElementById('o-algsolquaequ-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algsolquaequ2', 0)
        }
        if (document.getElementById('o-algsolquaequ-23').checked) {
          document.getElementById('r-algsolquaequ-23').style.color = 'blue'
          document.getElementById('r-algsolquaequ-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algsolquaequ-23').classList.add("correct")
          document.getElementById('b-algsolquaequ-21').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-22').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-24').classList.add("incorrect")
    
          document.getElementById('sa-algsolquaequ-2').disabled = true;
          document.getElementById('o-algsolquaequ-21').disabled = true;
          document.getElementById('o-algsolquaequ-22').disabled = true;
          document.getElementById('o-algsolquaequ-23').disabled = true;
          document.getElementById('o-algsolquaequ-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algsolquaequ2', 1)
        }
        if (document.getElementById('o-algsolquaequ-24').checked) {
          document.getElementById('r-algsolquaequ-24').style.color = 'red'
          document.getElementById('r-algsolquaequ-24').innerHTML = 'Incorrect!'
          document.getElementById('r-algsolquaequ-23').style.color = 'blue'
          document.getElementById('r-algsolquaequ-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algsolquaequ-23').classList.add("correct")
          document.getElementById('b-algsolquaequ-21').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-22').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-24').classList.add("incorrect")
    
          document.getElementById('sa-algsolquaequ-2').disabled = true;
          document.getElementById('o-algsolquaequ-21').disabled = true;
          document.getElementById('o-algsolquaequ-22').disabled = true;
          document.getElementById('o-algsolquaequ-23').disabled = true;
          document.getElementById('o-algsolquaequ-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algsolquaequ2', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algsolquaequ-3') != null) {
      algsolquaequ3But.onclick = function() {
        if (document.getElementById('o-algsolquaequ-31').checked) {
          document.getElementById('r-algsolquaequ-31').style.color = 'red'
          document.getElementById('r-algsolquaequ-31').innerHTML = 'Incorrect!'
          document.getElementById('r-algsolquaequ-34').style.color = 'blue'
          document.getElementById('r-algsolquaequ-34').innerHTML = 'Correct!'
          
          document.getElementById('b-algsolquaequ-34').classList.add("correct")
          document.getElementById('b-algsolquaequ-31').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-33').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-32').classList.add("incorrect")
    
          document.getElementById('sa-algsolquaequ-3').disabled = true;
          document.getElementById('o-algsolquaequ-31').disabled = true;
          document.getElementById('o-algsolquaequ-32').disabled = true;
          document.getElementById('o-algsolquaequ-33').disabled = true;
          document.getElementById('o-algsolquaequ-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algsolquaequ3', 0)
        }
        if (document.getElementById('o-algsolquaequ-32').checked) {
          document.getElementById('r-algsolquaequ-32').style.color = 'red'
          document.getElementById('r-algsolquaequ-32').innerHTML = 'Incorrect!'
          document.getElementById('r-algsolquaequ-34').style.color = 'blue'
          document.getElementById('r-algsolquaequ-34').innerHTML = 'Correct!'
          
          document.getElementById('b-algsolquaequ-34').classList.add("correct")
          document.getElementById('b-algsolquaequ-31').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-33').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-32').classList.add("incorrect")
    
          document.getElementById('sa-algsolquaequ-3').disabled = true;
          document.getElementById('o-algsolquaequ-31').disabled = true;
          document.getElementById('o-algsolquaequ-32').disabled = true;
          document.getElementById('o-algsolquaequ-33').disabled = true;
          document.getElementById('o-algsolquaequ-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algsolquaequ3', 0)
        }
        if (document.getElementById('o-algsolquaequ-33').checked) {
          document.getElementById('r-algsolquaequ-33').style.color = 'red'
          document.getElementById('r-algsolquaequ-33').innerHTML = 'Incorrect!'
          document.getElementById('r-algsolquaequ-34').style.color = 'blue'
          document.getElementById('r-algsolquaequ-34').innerHTML = 'Correct!'
          
          document.getElementById('b-algsolquaequ-34').classList.add("correct")
          document.getElementById('b-algsolquaequ-31').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-33').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-32').classList.add("incorrect")
    
          document.getElementById('sa-algsolquaequ-3').disabled = true;
          document.getElementById('o-algsolquaequ-31').disabled = true;
          document.getElementById('o-algsolquaequ-32').disabled = true;
          document.getElementById('o-algsolquaequ-33').disabled = true;
          document.getElementById('o-algsolquaequ-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algsolquaequ3', 0)
        }
        if (document.getElementById('o-algsolquaequ-34').checked) {
          document.getElementById('r-algsolquaequ-34').style.color = 'blue'
          document.getElementById('r-algsolquaequ-34').innerHTML = 'Correct!'
          
          document.getElementById('b-algsolquaequ-34').classList.add("correct")
          document.getElementById('b-algsolquaequ-31').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-33').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-32').classList.add("incorrect")
    
          document.getElementById('sa-algsolquaequ-3').disabled = true;
          document.getElementById('o-algsolquaequ-31').disabled = true;
          document.getElementById('o-algsolquaequ-32').disabled = true;
          document.getElementById('o-algsolquaequ-33').disabled = true;
          document.getElementById('o-algsolquaequ-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algsolquaequ3', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algsolquaequ-4') != null) {
      algsolquaequ4But.onclick = function() {
        if (document.getElementById('o-algsolquaequ-41').checked) {
          document.getElementById('r-algsolquaequ-41').style.color = 'red'
          document.getElementById('r-algsolquaequ-41').innerHTML = 'Incorrect!'
          document.getElementById('r-algsolquaequ-44').style.color = 'blue'
          document.getElementById('r-algsolquaequ-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algsolquaequ-44').classList.add("correct")
          document.getElementById('b-algsolquaequ-41').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-42').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-43').classList.add("incorrect")
    
          document.getElementById('sa-algsolquaequ-4').disabled = true;
          document.getElementById('o-algsolquaequ-41').disabled = true;
          document.getElementById('o-algsolquaequ-42').disabled = true;
          document.getElementById('o-algsolquaequ-43').disabled = true;
          document.getElementById('o-algsolquaequ-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algsolquaequ4', 0)
        }
        if (document.getElementById('o-algsolquaequ-42').checked) {
          document.getElementById('r-algsolquaequ-42').style.color = 'red'
          document.getElementById('r-algsolquaequ-42').innerHTML = 'Incorrect!'
          document.getElementById('r-algsolquaequ-44').style.color = 'blue'
          document.getElementById('r-algsolquaequ-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algsolquaequ-44').classList.add("correct")
          document.getElementById('b-algsolquaequ-41').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-42').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-43').classList.add("incorrect")
    
          document.getElementById('sa-algsolquaequ-4').disabled = true;
          document.getElementById('o-algsolquaequ-41').disabled = true;
          document.getElementById('o-algsolquaequ-42').disabled = true;
          document.getElementById('o-algsolquaequ-43').disabled = true;
          document.getElementById('o-algsolquaequ-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algsolquaequ4', 0)
        }
        if (document.getElementById('o-algsolquaequ-43').checked) {
          document.getElementById('r-algsolquaequ-43').style.color = 'red'
          document.getElementById('r-algsolquaequ-43').innerHTML = 'Incorrect!'
          document.getElementById('r-algsolquaequ-44').style.color = 'blue'
          document.getElementById('r-algsolquaequ-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algsolquaequ-44').classList.add("correct")
          document.getElementById('b-algsolquaequ-41').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-42').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-43').classList.add("incorrect")
    
          document.getElementById('sa-algsolquaequ-4').disabled = true;
          document.getElementById('o-algsolquaequ-41').disabled = true;
          document.getElementById('o-algsolquaequ-42').disabled = true;
          document.getElementById('o-algsolquaequ-43').disabled = true; 
          document.getElementById('o-algsolquaequ-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algsolquaequ4', 0)
        }
        if (document.getElementById('o-algsolquaequ-44').checked) {
          document.getElementById('r-algsolquaequ-44').style.color = 'blue'
          document.getElementById('r-algsolquaequ-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algsolquaequ-44').classList.add("correct")
          document.getElementById('b-algsolquaequ-41').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-42').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-43').classList.add("incorrect")
    
          document.getElementById('sa-algsolquaequ-4').disabled = true;
          document.getElementById('o-algsolquaequ-41').disabled = true;
          document.getElementById('o-algsolquaequ-42').disabled = true;
          document.getElementById('o-algsolquaequ-43').disabled = true;
          document.getElementById('o-algsolquaequ-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algsolquaequ4', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algsolquaequ-5') != null) {
      algsolquaequ5But.onclick = function() {
        if (document.getElementById('o-algsolquaequ-51').checked) {
          document.getElementById('r-algsolquaequ-51').style.color = 'red'
          document.getElementById('r-algsolquaequ-51').innerHTML = 'Incorrect!'
          document.getElementById('r-algsolquaequ-53').style.color = 'blue'
          document.getElementById('r-algsolquaequ-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algsolquaequ-53').classList.add("correct")
          document.getElementById('b-algsolquaequ-51').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-52').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-54').classList.add("incorrect")
    
          document.getElementById('sa-algsolquaequ-5').disabled = true;
          document.getElementById('o-algsolquaequ-51').disabled = true;
          document.getElementById('o-algsolquaequ-52').disabled = true;
          document.getElementById('o-algsolquaequ-53').disabled = true;
          document.getElementById('o-algsolquaequ-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algsolquaequ5', 0)
        }
        if (document.getElementById('o-algsolquaequ-52').checked) {
          document.getElementById('r-algsolquaequ-52').style.color = 'red'
          document.getElementById('r-algsolquaequ-52').innerHTML = 'Incorrect!'
          document.getElementById('r-algsolquaequ-53').style.color = 'blue'
          document.getElementById('r-algsolquaequ-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algsolquaequ-53').classList.add("correct")
          document.getElementById('b-algsolquaequ-51').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-52').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-54').classList.add("incorrect")
    
          document.getElementById('sa-algsolquaequ-5').disabled = true;
          document.getElementById('o-algsolquaequ-51').disabled = true;
          document.getElementById('o-algsolquaequ-52').disabled = true;
          document.getElementById('o-algsolquaequ-53').disabled = true;
          document.getElementById('o-algsolquaequ-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algsolquaequ5', 0)
        }
        if (document.getElementById('o-algsolquaequ-53').checked) {
          document.getElementById('r-algsolquaequ-53').style.color = 'blue'
          document.getElementById('r-algsolquaequ-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algsolquaequ-53').classList.add("correct")
          document.getElementById('b-algsolquaequ-51').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-52').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-54').classList.add("incorrect")
    
          document.getElementById('sa-algsolquaequ-5').disabled = true;
          document.getElementById('o-algsolquaequ-51').disabled = true;
          document.getElementById('o-algsolquaequ-52').disabled = true;
          document.getElementById('o-algsolquaequ-53').disabled = true;
          document.getElementById('o-algsolquaequ-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algsolquaequ5', 1)
        }
        if (document.getElementById('o-algsolquaequ-54').checked) {
          document.getElementById('r-algsolquaequ-54').style.color = 'red'
          document.getElementById('r-algsolquaequ-54').innerHTML = 'Incorrect!'
          document.getElementById('r-algsolquaequ-53').style.color = 'blue'
          document.getElementById('r-algsolquaequ-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algsolquaequ-53').classList.add("correct")
          document.getElementById('b-algsolquaequ-51').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-52').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-54').classList.add("incorrect")
    
          document.getElementById('sa-algsolquaequ-5').disabled = true;
          document.getElementById('o-algsolquaequ-51').disabled = true;
          document.getElementById('o-algsolquaequ-52').disabled = true;
          document.getElementById('o-algsolquaequ-53').disabled = true;
          document.getElementById('o-algsolquaequ-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algsolquaequ5', 0)
        }
      }
    }
        
         
      if (document.getElementById('sa-algsolquaequ-6') != null) {
      algsolquaequ6But.onclick = function() {
        if (document.getElementById('o-algsolquaequ-61').checked) {
          document.getElementById('r-algsolquaequ-61').style.color = 'red'
          document.getElementById('r-algsolquaequ-61').innerHTML = 'Incorrect!'
          document.getElementById('r-algsolquaequ-63').style.color = 'blue'
          document.getElementById('r-algsolquaequ-63').innerHTML = 'Correct!'
          
          document.getElementById('b-algsolquaequ-63').classList.add("correct")
          document.getElementById('b-algsolquaequ-61').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-62').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-64').classList.add("incorrect")
    
          document.getElementById('sa-algsolquaequ-6').disabled = true;
          document.getElementById('o-algsolquaequ-61').disabled = true;
          document.getElementById('o-algsolquaequ-62').disabled = true;
          document.getElementById('o-algsolquaequ-63').disabled = true;
          document.getElementById('o-algsolquaequ-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algsolquaequ6', 0)
        }
        if (document.getElementById('o-algsolquaequ-62').checked) {
          document.getElementById('r-algsolquaequ-62').style.color = 'red'
          document.getElementById('r-algsolquaequ-62').innerHTML = 'Incorrect!'
          document.getElementById('r-algsolquaequ-63').style.color = 'blue'
          document.getElementById('r-algsolquaequ-63').innerHTML = 'Correct!'
          
          document.getElementById('b-algsolquaequ-63').classList.add("correct")
          document.getElementById('b-algsolquaequ-61').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-62').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-64').classList.add("incorrect")
    
          document.getElementById('sa-algsolquaequ-6').disabled = true;
          document.getElementById('o-algsolquaequ-61').disabled = true;
          document.getElementById('o-algsolquaequ-62').disabled = true;
          document.getElementById('o-algsolquaequ-63').disabled = true;
          document.getElementById('o-algsolquaequ-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algsolquaequ6', 0)
        }
        if (document.getElementById('o-algsolquaequ-63').checked) {
          document.getElementById('r-algsolquaequ-63').style.color = 'blue'
          document.getElementById('r-algsolquaequ-63').innerHTML = 'Correct!'
          
          document.getElementById('b-algsolquaequ-63').classList.add("correct")
          document.getElementById('b-algsolquaequ-61').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-62').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-64').classList.add("incorrect")
    
          document.getElementById('sa-algsolquaequ-6').disabled = true;
          document.getElementById('o-algsolquaequ-61').disabled = true;
          document.getElementById('o-algsolquaequ-62').disabled = true;
          document.getElementById('o-algsolquaequ-63').disabled = true;
          document.getElementById('o-algsolquaequ-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algsolquaequ6', 1)
        }
        if (document.getElementById('o-algsolquaequ-64').checked) {
          document.getElementById('r-algsolquaequ-64').style.color = 'red'
          document.getElementById('r-algsolquaequ-64').innerHTML = 'Incorrect!'
          document.getElementById('r-algsolquaequ-63').style.color = 'blue'
          document.getElementById('r-algsolquaequ-63').innerHTML = 'Correct!'
          
          document.getElementById('b-algsolquaequ-63').classList.add("correct")
          document.getElementById('b-algsolquaequ-61').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-62').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-64').classList.add("incorrect")
    
          document.getElementById('sa-algsolquaequ-6').disabled = true;
          document.getElementById('o-algsolquaequ-61').disabled = true;
          document.getElementById('o-algsolquaequ-62').disabled = true;
          document.getElementById('o-algsolquaequ-63').disabled = true;
          document.getElementById('o-algsolquaequ-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algsolquaequ6', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algsolquaequ-7') != null) {
      algsolquaequ7But.onclick = function() {
        if (document.getElementById('o-algsolquaequ-71').checked) {
          document.getElementById('r-algsolquaequ-71').style.color = 'red'
          document.getElementById('r-algsolquaequ-71').innerHTML = 'Incorrect!'
          document.getElementById('r-algsolquaequ-72').style.color = 'blue'
          document.getElementById('r-algsolquaequ-72').innerHTML = 'Correct!'
          
          document.getElementById('b-algsolquaequ-72').classList.add("correct")
          document.getElementById('b-algsolquaequ-71').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-73').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-74').classList.add("incorrect")
    
          document.getElementById('sa-algsolquaequ-7').disabled = true;
          document.getElementById('o-algsolquaequ-71').disabled = true;
          document.getElementById('o-algsolquaequ-72').disabled = true;
          document.getElementById('o-algsolquaequ-73').disabled = true;
          document.getElementById('o-algsolquaequ-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algsolquaequ7', 0)
        }
        if (document.getElementById('o-algsolquaequ-72').checked) {
          document.getElementById('r-algsolquaequ-72').style.color = 'blue'
          document.getElementById('r-algsolquaequ-72').innerHTML = 'Correct!'
          
          document.getElementById('b-algsolquaequ-72').classList.add("correct")
          document.getElementById('b-algsolquaequ-71').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-74').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-73').classList.add("incorrect")
    
          document.getElementById('sa-algsolquaequ-7').disabled = true;
          document.getElementById('o-algsolquaequ-71').disabled = true;
          document.getElementById('o-algsolquaequ-72').disabled = true;
          document.getElementById('o-algsolquaequ-73').disabled = true;
          document.getElementById('o-algsolquaequ-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algsolquaequ7', 1)
        }
        if (document.getElementById('o-algsolquaequ-73').checked) {
          document.getElementById('r-algsolquaequ-73').style.color = 'red'
          document.getElementById('r-algsolquaequ-73').innerHTML = 'Incorrect!'
          document.getElementById('r-algsolquaequ-72').style.color = 'blue'
          document.getElementById('r-algsolquaequ-72').innerHTML = 'Correct!'
          
          document.getElementById('b-algsolquaequ-72').classList.add("correct")
          document.getElementById('b-algsolquaequ-71').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-74').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-73').classList.add("incorrect")
    
          document.getElementById('sa-algsolquaequ-7').disabled = true;
          document.getElementById('o-algsolquaequ-71').disabled = true;
          document.getElementById('o-algsolquaequ-72').disabled = true;
          document.getElementById('o-algsolquaequ-73').disabled = true;
          document.getElementById('o-algsolquaequ-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algsolquaequ7', 0)
        }
        if (document.getElementById('o-algsolquaequ-74').checked) {
          document.getElementById('r-algsolquaequ-74').style.color = 'red'
          document.getElementById('r-algsolquaequ-74').innerHTML = 'Incorrect!'
          document.getElementById('r-algsolquaequ-72').style.color = 'blue'
          document.getElementById('r-algsolquaequ-72').innerHTML = 'Correct!'
          
          document.getElementById('b-algsolquaequ-72').classList.add("correct")
          document.getElementById('b-algsolquaequ-71').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-74').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-73').classList.add("incorrect")
    
          document.getElementById('sa-algsolquaequ-7').disabled = true;
          document.getElementById('o-algsolquaequ-71').disabled = true;
          document.getElementById('o-algsolquaequ-72').disabled = true;
          document.getElementById('o-algsolquaequ-73').disabled = true;
          document.getElementById('o-algsolquaequ-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algsolquaequ7', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-algsolquaequ-8') != null) {
      algsolquaequ8But.onclick = function() {
        if (document.getElementById('o-algsolquaequ-81').checked) {
          document.getElementById('r-algsolquaequ-81').style.color = 'blue'
          document.getElementById('r-algsolquaequ-81').innerHTML = 'Correct!'
          
          document.getElementById('b-algsolquaequ-81').classList.add("correct")
          document.getElementById('b-algsolquaequ-82').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-83').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-84').classList.add("incorrect")
    
          document.getElementById('sa-algsolquaequ-8').disabled = true;
          document.getElementById('o-algsolquaequ-81').disabled = true;
          document.getElementById('o-algsolquaequ-82').disabled = true;
          document.getElementById('o-algsolquaequ-83').disabled = true;
          document.getElementById('o-algsolquaequ-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algsolquaequ8', 1)
        }
        if (document.getElementById('o-algsolquaequ-82').checked) {
          document.getElementById('r-algsolquaequ-82').style.color = 'red'
          document.getElementById('r-algsolquaequ-82').innerHTML = 'Incorrect!'
          document.getElementById('r-algsolquaequ-81').style.color = 'blue'
          document.getElementById('r-algsolquaequ-81').innerHTML = 'Correct!'
          
          document.getElementById('b-algsolquaequ-81').classList.add("correct")
          document.getElementById('b-algsolquaequ-82').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-83').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-84').classList.add("incorrect")
    
          document.getElementById('sa-algsolquaequ-8').disabled = true;
          document.getElementById('o-algsolquaequ-81').disabled = true;
          document.getElementById('o-algsolquaequ-82').disabled = true;
          document.getElementById('o-algsolquaequ-83').disabled = true;
          document.getElementById('o-algsolquaequ-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algsolquaequ8', 0)
        }
        if (document.getElementById('o-algsolquaequ-83').checked) {
          document.getElementById('r-algsolquaequ-83').style.color = 'red'
          document.getElementById('r-algsolquaequ-83').innerHTML = 'Incorrect!'
          document.getElementById('r-algsolquaequ-81').style.color = 'blue'
          document.getElementById('r-algsolquaequ-81').innerHTML = 'Correct!'
          
          document.getElementById('b-algsolquaequ-81').classList.add("correct")
          document.getElementById('b-algsolquaequ-82').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-83').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-84').classList.add("incorrect")
    
          document.getElementById('sa-algsolquaequ-8').disabled = true;
          document.getElementById('o-algsolquaequ-81').disabled = true;
          document.getElementById('o-algsolquaequ-82').disabled = true;
          document.getElementById('o-algsolquaequ-83').disabled = true;
          document.getElementById('o-algsolquaequ-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algsolquaequ8', 0)
        }
        if (document.getElementById('o-algsolquaequ-84').checked) {
          document.getElementById('r-algsolquaequ-84').style.color = 'red'
          document.getElementById('r-algsolquaequ-84').innerHTML = 'Incorrect!'
          document.getElementById('r-algsolquaequ-81').style.color = 'blue'
          document.getElementById('r-algsolquaequ-81').innerHTML = 'Correct!'
          
          document.getElementById('b-algsolquaequ-81').classList.add("correct")
          document.getElementById('b-algsolquaequ-82').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-83').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-84').classList.add("incorrect")
    
          document.getElementById('sa-algsolquaequ-8').disabled = true;
          document.getElementById('o-algsolquaequ-81').disabled = true;
          document.getElementById('o-algsolquaequ-82').disabled = true;
          document.getElementById('o-algsolquaequ-83').disabled = true;
          document.getElementById('o-algsolquaequ-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algsolquaequ8', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-algsolquaequ-9') != null) {
      algsolquaequ9But.onclick = function() {
        if (document.getElementById('o-algsolquaequ-91').checked) {
          document.getElementById('r-algsolquaequ-91').style.color = 'red'
          document.getElementById('r-algsolquaequ-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algsolquaequ-93').style.color = 'blue'
          document.getElementById('r-algsolquaequ-93').innerHTML = 'Correct!'
          
          document.getElementById('b-algsolquaequ-93').classList.add("correct")
          document.getElementById('b-algsolquaequ-91').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-92').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-94').classList.add("incorrect")
    
          document.getElementById('sa-algsolquaequ-9').disabled = true;
          document.getElementById('o-algsolquaequ-91').disabled = true;
          document.getElementById('o-algsolquaequ-92').disabled = true;
          document.getElementById('o-algsolquaequ-93').disabled = true;
          document.getElementById('o-algsolquaequ-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algsolquaequ9', 0)
        }
        if (document.getElementById('o-algsolquaequ-92').checked) {
          document.getElementById('r-algsolquaequ-92').style.color = 'red'
          document.getElementById('r-algsolquaequ-92').innerHTML = 'Incorrect!'
          document.getElementById('r-algsolquaequ-93').style.color = 'blue'
          document.getElementById('r-algsolquaequ-93').innerHTML = 'Correct!'
          
          document.getElementById('b-algsolquaequ-93').classList.add("correct")
          document.getElementById('b-algsolquaequ-91').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-92').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-94').classList.add("incorrect")
    
          document.getElementById('sa-algsolquaequ-9').disabled = true;
          document.getElementById('o-algsolquaequ-91').disabled = true;
          document.getElementById('o-algsolquaequ-92').disabled = true;
          document.getElementById('o-algsolquaequ-93').disabled = true;
          document.getElementById('o-algsolquaequ-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algsolquaequ9', 0)
        }
        if (document.getElementById('o-algsolquaequ-93').checked) {
          document.getElementById('r-algsolquaequ-93').style.color = 'blue'
          document.getElementById('r-algsolquaequ-93').innerHTML = 'Correct!'
          
          document.getElementById('b-algsolquaequ-93').classList.add("correct")
          document.getElementById('b-algsolquaequ-91').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-92').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-94').classList.add("incorrect")
    
          document.getElementById('sa-algsolquaequ-9').disabled = true;
          document.getElementById('o-algsolquaequ-91').disabled = true;
          document.getElementById('o-algsolquaequ-92').disabled = true;
          document.getElementById('o-algsolquaequ-93').disabled = true;
          document.getElementById('o-algsolquaequ-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algsolquaequ9', 1)
        }
        if (document.getElementById('o-algsolquaequ-94').checked) {
          document.getElementById('r-algsolquaequ-94').style.color = 'red'
          document.getElementById('r-algsolquaequ-94').innerHTML = 'Incorrect!'
          document.getElementById('r-algsolquaequ-93').style.color = 'blue'
          document.getElementById('r-algsolquaequ-93').innerHTML = 'Correct!'
          
          document.getElementById('b-algsolquaequ-93').classList.add("correct")
          document.getElementById('b-algsolquaequ-91').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-92').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-94').classList.add("incorrect")
    
          document.getElementById('sa-algsolquaequ-9').disabled = true;
          document.getElementById('o-algsolquaequ-91').disabled = true;
          document.getElementById('o-algsolquaequ-92').disabled = true;
          document.getElementById('o-algsolquaequ-93').disabled = true;
          document.getElementById('o-algsolquaequ-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algsolquaequ9', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algsolquaequ-10') != null) {
      algsolquaequ10But.onclick = function() {
        if (document.getElementById('o-algsolquaequ-101').checked) {
          document.getElementById('r-algsolquaequ-101').style.color = 'red'
          document.getElementById('r-algsolquaequ-101').innerHTML = 'Incorrect!'
          document.getElementById('r-algsolquaequ-102').style.color = 'blue'
          document.getElementById('r-algsolquaequ-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algsolquaequ-102').classList.add("correct")
          document.getElementById('b-algsolquaequ-101').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-103').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-104').classList.add("incorrect")
    
          document.getElementById('sa-algsolquaequ-10').disabled = true;
          document.getElementById('o-algsolquaequ-101').disabled = true;
          document.getElementById('o-algsolquaequ-102').disabled = true;
          document.getElementById('o-algsolquaequ-103').disabled = true;
          document.getElementById('o-algsolquaequ-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algsolquaequ10', 0)
        }
        if (document.getElementById('o-algsolquaequ-102').checked) {
          document.getElementById('r-algsolquaequ-102').style.color = 'blue'
          document.getElementById('r-algsolquaequ-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algsolquaequ-102').classList.add("correct")
          document.getElementById('b-algsolquaequ-101').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-103').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-104').classList.add("incorrect")
    
          document.getElementById('sa-algsolquaequ-10').disabled = true;
          document.getElementById('o-algsolquaequ-101').disabled = true;
          document.getElementById('o-algsolquaequ-102').disabled = true;
          document.getElementById('o-algsolquaequ-103').disabled = true;
          document.getElementById('o-algsolquaequ-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algsolquaequ10', 1)
        }
        if (document.getElementById('o-algsolquaequ-103').checked) {
          document.getElementById('r-algsolquaequ-103').style.color = 'red'
          document.getElementById('r-algsolquaequ-103').innerHTML = 'Incorrect!'
          document.getElementById('r-algsolquaequ-102').style.color = 'blue'
          document.getElementById('r-algsolquaequ-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algsolquaequ-102').classList.add("correct")
          document.getElementById('b-algsolquaequ-101').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-103').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-104').classList.add("incorrect")
    
          document.getElementById('sa-algsolquaequ-10').disabled = true;
          document.getElementById('o-algsolquaequ-101').disabled = true;
          document.getElementById('o-algsolquaequ-102').disabled = true;
          document.getElementById('o-algsolquaequ-103').disabled = true;
          document.getElementById('o-algsolquaequ-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algsolquaequ10', 0)
        }
        if (document.getElementById('o-algsolquaequ-104').checked) {
          document.getElementById('r-algsolquaequ-104').style.color = 'red'
          document.getElementById('r-algsolquaequ-104').innerHTML = 'Incorrect!'
          document.getElementById('r-algsolquaequ-102').style.color = 'blue'
          document.getElementById('r-algsolquaequ-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algsolquaequ-102').classList.add("correct")
          document.getElementById('b-algsolquaequ-101').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-103').classList.add("incorrect")
          document.getElementById('b-algsolquaequ-104').classList.add("incorrect")
    
          document.getElementById('sa-algsolquaequ-10').disabled = true;
          document.getElementById('o-algsolquaequ-101').disabled = true;
          document.getElementById('o-algsolquaequ-102').disabled = true;
          document.getElementById('o-algsolquaequ-103').disabled = true;
          document.getElementById('o-algsolquaequ-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algsolquaequ10', 0)
        }
      }
    }
    