
  let algexpvslin1But = document.getElementById('sa-algexpvslin-1');
  let algexpvslin2But = document.getElementById('sa-algexpvslin-2');
  let algexpvslin3But = document.getElementById('sa-algexpvslin-3');
  let algexpvslin4But = document.getElementById('sa-algexpvslin-4');
  let algexpvslin5But = document.getElementById('sa-algexpvslin-5');
  let algexpvslin6But = document.getElementById('sa-algexpvslin-6');
  let algexpvslin7But = document.getElementById('sa-algexpvslin-7');
  let algexpvslin8But = document.getElementById('sa-algexpvslin-8');
  let algexpvslin9But = document.getElementById('sa-algexpvslin-9');
  let algexpvslin10But = document.getElementById('sa-algexpvslin-10');


  showExplanation1 = function() {
    document.getElementById('e-algexpvslin-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-algexpvslin-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-algexpvslin-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-algexpvslin-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-algexpvslin-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-algexpvslin-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-algexpvslin-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-algexpvslin-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-algexpvslin-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-algexpvslin-10').style.display = 'block';
     } 



     if (document.getElementById('sa-algexpvslin-1') != null) {
      algexpvslin1But.onclick = function () {
        if (document.getElementById('o-algexpvslin-11').checked) {
          document.getElementById('r-algexpvslin-11').style.color = 'red'
          document.getElementById('r-algexpvslin-11').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpvslin-13').style.color = 'blue'
          document.getElementById('r-algexpvslin-13').innerHTML = 'Correct!'
    
          document.getElementById('b-algexpvslin-13').classList.add("correct")
          document.getElementById('b-algexpvslin-12').classList.add("incorrect")
          document.getElementById('b-algexpvslin-11').classList.add("incorrect")
          document.getElementById('b-algexpvslin-14').classList.add("incorrect")
    
          document.getElementById('sa-algexpvslin-1').disabled = true;
          document.getElementById('o-algexpvslin-11').disabled = true;
          document.getElementById('o-algexpvslin-12').disabled = true;
          document.getElementById('o-algexpvslin-13').disabled = true;
          document.getElementById('o-algexpvslin-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algexpvslin1', 0)
        }
    
        if (document.getElementById('o-algexpvslin-12').checked) {
          document.getElementById('r-algexpvslin-12').style.color = 'red'
          document.getElementById('r-algexpvslin-12').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpvslin-13').style.color = 'blue'
          document.getElementById('r-algexpvslin-13').innerHTML = 'Correct!'
    
          document.getElementById('b-algexpvslin-13').classList.add("correct")
          document.getElementById('b-algexpvslin-12').classList.add("incorrect")
          document.getElementById('b-algexpvslin-11').classList.add("incorrect")
          document.getElementById('b-algexpvslin-14').classList.add("incorrect")
    
          document.getElementById('sa-algexpvslin-1').disabled = true;
          document.getElementById('o-algexpvslin-11').disabled = true;
          document.getElementById('o-algexpvslin-12').disabled = true;
          document.getElementById('o-algexpvslin-13').disabled = true;
          document.getElementById('o-algexpvslin-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algexpvslin1', 0)
        }
        if (document.getElementById('o-algexpvslin-13').checked) {
          document.getElementById('r-algexpvslin-13').style.color = 'blue'
          document.getElementById('r-algexpvslin-13').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpvslin-13').classList.add("correct")
          document.getElementById('b-algexpvslin-12').classList.add("incorrect")
          document.getElementById('b-algexpvslin-11').classList.add("incorrect")
          document.getElementById('b-algexpvslin-14').classList.add("incorrect")
    
          document.getElementById('sa-algexpvslin-1').disabled = true;
          document.getElementById('o-algexpvslin-11').disabled = true;
          document.getElementById('o-algexpvslin-12').disabled = true;
          document.getElementById('o-algexpvslin-13').disabled = true;
          document.getElementById('o-algexpvslin-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algexpvslin1', 1)
        }
        if (document.getElementById('o-algexpvslin-14').checked) {
          document.getElementById('r-algexpvslin-14').style.color = 'red'
          document.getElementById('r-algexpvslin-14').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpvslin-13').style.color = 'blue'
          document.getElementById('r-algexpvslin-13').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpvslin-13').classList.add("correct")
          document.getElementById('b-algexpvslin-12').classList.add("incorrect")
          document.getElementById('b-algexpvslin-11').classList.add("incorrect")
          document.getElementById('b-algexpvslin-14').classList.add("incorrect")
    
          document.getElementById('sa-algexpvslin-1').disabled = true;
          document.getElementById('o-algexpvslin-11').disabled = true;
          document.getElementById('o-algexpvslin-12').disabled = true;
          document.getElementById('o-algexpvslin-13').disabled = true;
          document.getElementById('o-algexpvslin-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algexpvslin1', 0)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-algexpvslin-2') != null) {
      algexpvslin2But.onclick = function() {
        if (document.getElementById('o-algexpvslin-21').checked) {
          document.getElementById('r-algexpvslin-21').style.color = 'red'
          document.getElementById('r-algexpvslin-21').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpvslin-23').style.color = 'blue'
          document.getElementById('r-algexpvslin-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpvslin-23').classList.add("correct")
          document.getElementById('b-algexpvslin-21').classList.add("incorrect")
          document.getElementById('b-algexpvslin-22').classList.add("incorrect")
          document.getElementById('b-algexpvslin-24').classList.add("incorrect")
    
          document.getElementById('sa-algexpvslin-2').disabled = true;
          document.getElementById('o-algexpvslin-21').disabled = true;
          document.getElementById('o-algexpvslin-22').disabled = true;
          document.getElementById('o-algexpvslin-23').disabled = true;
          document.getElementById('o-algexpvslin-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algexpvslin2', 0)
        }
        if (document.getElementById('o-algexpvslin-22').checked) {
          document.getElementById('r-algexpvslin-22').style.color = 'red'
          document.getElementById('r-algexpvslin-22').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpvslin-23').style.color = 'blue'
          document.getElementById('r-algexpvslin-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpvslin-23').classList.add("correct")
          document.getElementById('b-algexpvslin-21').classList.add("incorrect")
          document.getElementById('b-algexpvslin-22').classList.add("incorrect")
          document.getElementById('b-algexpvslin-24').classList.add("incorrect")
    
          document.getElementById('sa-algexpvslin-2').disabled = true;
          document.getElementById('o-algexpvslin-21').disabled = true;
          document.getElementById('o-algexpvslin-22').disabled = true;
          document.getElementById('o-algexpvslin-23').disabled = true;
          document.getElementById('o-algexpvslin-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algexpvslin2', 0)
        }
        if (document.getElementById('o-algexpvslin-23').checked) {
          document.getElementById('r-algexpvslin-23').style.color = 'blue'
          document.getElementById('r-algexpvslin-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpvslin-23').classList.add("correct")
          document.getElementById('b-algexpvslin-21').classList.add("incorrect")
          document.getElementById('b-algexpvslin-22').classList.add("incorrect")
          document.getElementById('b-algexpvslin-24').classList.add("incorrect")
    
          document.getElementById('sa-algexpvslin-2').disabled = true;
          document.getElementById('o-algexpvslin-21').disabled = true;
          document.getElementById('o-algexpvslin-22').disabled = true;
          document.getElementById('o-algexpvslin-23').disabled = true;
          document.getElementById('o-algexpvslin-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algexpvslin2', 1)
        }
        if (document.getElementById('o-algexpvslin-24').checked) {
          document.getElementById('r-algexpvslin-24').style.color = 'red'
          document.getElementById('r-algexpvslin-24').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpvslin-23').style.color = 'blue'
          document.getElementById('r-algexpvslin-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpvslin-23').classList.add("correct")
          document.getElementById('b-algexpvslin-21').classList.add("incorrect")
          document.getElementById('b-algexpvslin-22').classList.add("incorrect")
          document.getElementById('b-algexpvslin-24').classList.add("incorrect")
    
          document.getElementById('sa-algexpvslin-2').disabled = true;
          document.getElementById('o-algexpvslin-21').disabled = true;
          document.getElementById('o-algexpvslin-22').disabled = true;
          document.getElementById('o-algexpvslin-23').disabled = true;
          document.getElementById('o-algexpvslin-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algexpvslin2', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algexpvslin-3') != null) {
      algexpvslin3But.onclick = function() {
        if (document.getElementById('o-algexpvslin-31').checked) {
          document.getElementById('r-algexpvslin-31').style.color = 'red'
          document.getElementById('r-algexpvslin-31').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpvslin-34').style.color = 'blue'
          document.getElementById('r-algexpvslin-34').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpvslin-34').classList.add("correct")
          document.getElementById('b-algexpvslin-31').classList.add("incorrect")
          document.getElementById('b-algexpvslin-33').classList.add("incorrect")
          document.getElementById('b-algexpvslin-32').classList.add("incorrect")
    
          document.getElementById('sa-algexpvslin-3').disabled = true;
          document.getElementById('o-algexpvslin-31').disabled = true;
          document.getElementById('o-algexpvslin-32').disabled = true;
          document.getElementById('o-algexpvslin-33').disabled = true;
          document.getElementById('o-algexpvslin-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algexpvslin3', 0)
        }
        if (document.getElementById('o-algexpvslin-32').checked) {    
          document.getElementById('r-algexpvslin-32').style.color = 'red'
          document.getElementById('r-algexpvslin-32').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpvslin-34').style.color = 'blue'
          document.getElementById('r-algexpvslin-34').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpvslin-34').classList.add("correct")
          document.getElementById('b-algexpvslin-31').classList.add("incorrect")
          document.getElementById('b-algexpvslin-33').classList.add("incorrect")
          document.getElementById('b-algexpvslin-32').classList.add("incorrect")
    
          document.getElementById('sa-algexpvslin-3').disabled = true;
          document.getElementById('o-algexpvslin-31').disabled = true;
          document.getElementById('o-algexpvslin-32').disabled = true;
          document.getElementById('o-algexpvslin-33').disabled = true;
          document.getElementById('o-algexpvslin-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algexpvslin3', 0)
        }
        if (document.getElementById('o-algexpvslin-33').checked) {
          document.getElementById('r-algexpvslin-33').style.color = 'red'
          document.getElementById('r-algexpvslin-33').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpvslin-34').style.color = 'blue'
          document.getElementById('r-algexpvslin-34').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpvslin-34').classList.add("correct")
          document.getElementById('b-algexpvslin-31').classList.add("incorrect")
          document.getElementById('b-algexpvslin-33').classList.add("incorrect")
          document.getElementById('b-algexpvslin-32').classList.add("incorrect")
    
          document.getElementById('sa-algexpvslin-3').disabled = true;
          document.getElementById('o-algexpvslin-31').disabled = true;
          document.getElementById('o-algexpvslin-32').disabled = true;
          document.getElementById('o-algexpvslin-33').disabled = true;
          document.getElementById('o-algexpvslin-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algexpvslin3', 0)
        }
        if (document.getElementById('o-algexpvslin-34').checked) {
    
          document.getElementById('r-algexpvslin-34').style.color = 'blue'
          document.getElementById('r-algexpvslin-34').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpvslin-34').classList.add("correct")
          document.getElementById('b-algexpvslin-31').classList.add("incorrect")
          document.getElementById('b-algexpvslin-33').classList.add("incorrect")
          document.getElementById('b-algexpvslin-32').classList.add("incorrect")
    
          document.getElementById('sa-algexpvslin-3').disabled = true;
          document.getElementById('o-algexpvslin-31').disabled = true;
          document.getElementById('o-algexpvslin-32').disabled = true;
          document.getElementById('o-algexpvslin-33').disabled = true;
          document.getElementById('o-algexpvslin-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algexpvslin3', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algexpvslin-4') != null) {
      algexpvslin4But.onclick = function() {
        if (document.getElementById('o-algexpvslin-41').checked) {
          document.getElementById('r-algexpvslin-41').style.color = 'red'
          document.getElementById('r-algexpvslin-41').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpvslin-44').style.color = 'blue'
          document.getElementById('r-algexpvslin-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpvslin-44').classList.add("correct")
          document.getElementById('b-algexpvslin-41').classList.add("incorrect")
          document.getElementById('b-algexpvslin-42').classList.add("incorrect")
          document.getElementById('b-algexpvslin-43').classList.add("incorrect")
    
          document.getElementById('sa-algexpvslin-4').disabled = true;
          document.getElementById('o-algexpvslin-41').disabled = true;
          document.getElementById('o-algexpvslin-42').disabled = true;
          document.getElementById('o-algexpvslin-43').disabled = true;
          document.getElementById('o-algexpvslin-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algexpvslin4', 0)
        }
        if (document.getElementById('o-algexpvslin-42').checked) {
          document.getElementById('r-algexpvslin-42').style.color = 'red'
          document.getElementById('r-algexpvslin-42').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpvslin-44').style.color = 'blue'
          document.getElementById('r-algexpvslin-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpvslin-44').classList.add("correct")
          document.getElementById('b-algexpvslin-41').classList.add("incorrect")
          document.getElementById('b-algexpvslin-42').classList.add("incorrect")
          document.getElementById('b-algexpvslin-43').classList.add("incorrect")
    
          document.getElementById('sa-algexpvslin-4').disabled = true;
          document.getElementById('o-algexpvslin-41').disabled = true;
          document.getElementById('o-algexpvslin-42').disabled = true;
          document.getElementById('o-algexpvslin-43').disabled = true;
          document.getElementById('o-algexpvslin-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algexpvslin4', 0)
        }
        if (document.getElementById('o-algexpvslin-43').checked) {
          document.getElementById('r-algexpvslin-43').style.color = 'red'
          document.getElementById('r-algexpvslin-43').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpvslin-44').style.color = 'blue'
          document.getElementById('r-algexpvslin-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpvslin-44').classList.add("correct")
          document.getElementById('b-algexpvslin-41').classList.add("incorrect")
          document.getElementById('b-algexpvslin-42').classList.add("incorrect")
          document.getElementById('b-algexpvslin-43').classList.add("incorrect")
    
          document.getElementById('sa-algexpvslin-4').disabled = true;
          document.getElementById('o-algexpvslin-41').disabled = true;
          document.getElementById('o-algexpvslin-42').disabled = true;
          document.getElementById('o-algexpvslin-43').disabled = true;
          document.getElementById('o-algexpvslin-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algexpvslin4', 0)
        }
        if (document.getElementById('o-algexpvslin-44').checked) {
          document.getElementById('r-algexpvslin-44').style.color = 'blue'
          document.getElementById('r-algexpvslin-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpvslin-44').classList.add("correct")
          document.getElementById('b-algexpvslin-41').classList.add("incorrect")
          document.getElementById('b-algexpvslin-42').classList.add("incorrect")
          document.getElementById('b-algexpvslin-43').classList.add("incorrect")
    
          document.getElementById('sa-algexpvslin-4').disabled = true;
          document.getElementById('o-algexpvslin-41').disabled = true;
          document.getElementById('o-algexpvslin-42').disabled = true;
          document.getElementById('o-algexpvslin-43').disabled = true;
          document.getElementById('o-algexpvslin-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algexpvslin4', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algexpvslin-5') != null) {
      algexpvslin5But.onclick = function() {
        if (document.getElementById('o-algexpvslin-51').checked) {
          document.getElementById('r-algexpvslin-51').style.color = 'red'
          document.getElementById('r-algexpvslin-51').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpvslin-53').style.color = 'blue'
          document.getElementById('r-algexpvslin-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpvslin-53').classList.add("correct")
          document.getElementById('b-algexpvslin-51').classList.add("incorrect")
          document.getElementById('b-algexpvslin-52').classList.add("incorrect")
          document.getElementById('b-algexpvslin-54').classList.add("incorrect")
    
          document.getElementById('sa-algexpvslin-5').disabled = true;
          document.getElementById('o-algexpvslin-51').disabled = true;
          document.getElementById('o-algexpvslin-52').disabled = true;
          document.getElementById('o-algexpvslin-53').disabled = true;
          document.getElementById('o-algexpvslin-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algexpvslin5', 0)
        }
        if (document.getElementById('o-algexpvslin-52').checked) {
          document.getElementById('r-algexpvslin-52').style.color = 'red'
          document.getElementById('r-algexpvslin-52').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpvslin-53').style.color = 'blue'
          document.getElementById('r-algexpvslin-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpvslin-53').classList.add("correct")
          document.getElementById('b-algexpvslin-51').classList.add("incorrect")
          document.getElementById('b-algexpvslin-52').classList.add("incorrect")
          document.getElementById('b-algexpvslin-54').classList.add("incorrect")
    
          document.getElementById('sa-algexpvslin-5').disabled = true;
          document.getElementById('o-algexpvslin-51').disabled = true;
          document.getElementById('o-algexpvslin-52').disabled = true;
          document.getElementById('o-algexpvslin-53').disabled = true;
          document.getElementById('o-algexpvslin-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algexpvslin5', 0)
        }
        if (document.getElementById('o-algexpvslin-53').checked) {
          document.getElementById('r-algexpvslin-53').style.color = 'blue'
          document.getElementById('r-algexpvslin-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpvslin-53').classList.add("correct")
          document.getElementById('b-algexpvslin-51').classList.add("incorrect")
          document.getElementById('b-algexpvslin-52').classList.add("incorrect")
          document.getElementById('b-algexpvslin-54').classList.add("incorrect")
    
          document.getElementById('sa-algexpvslin-5').disabled = true;
          document.getElementById('o-algexpvslin-51').disabled = true;
          document.getElementById('o-algexpvslin-52').disabled = true;
          document.getElementById('o-algexpvslin-53').disabled = true;
          document.getElementById('o-algexpvslin-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algexpvslin5', 1)
        }
        if (document.getElementById('o-algexpvslin-54').checked) {
          document.getElementById('r-algexpvslin-54').style.color = 'red'
          document.getElementById('r-algexpvslin-54').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpvslin-53').style.color = 'blue'
          document.getElementById('r-algexpvslin-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpvslin-53').classList.add("correct")
          document.getElementById('b-algexpvslin-51').classList.add("incorrect")
          document.getElementById('b-algexpvslin-52').classList.add("incorrect")
          document.getElementById('b-algexpvslin-54').classList.add("incorrect")
    
          document.getElementById('sa-algexpvslin-5').disabled = true;
          document.getElementById('o-algexpvslin-51').disabled = true;
          document.getElementById('o-algexpvslin-52').disabled = true;
          document.getElementById('o-algexpvslin-53').disabled = true;
          document.getElementById('o-algexpvslin-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algexpvslin5', 0)
        }
      }
    }
        
         
      if (document.getElementById('sa-algexpvslin-6') != null) {
      algexpvslin6But.onclick = function() {
        if (document.getElementById('o-algexpvslin-61').checked) {
          document.getElementById('r-algexpvslin-61').style.color = 'red'
          document.getElementById('r-algexpvslin-61').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpvslin-64').style.color = 'blue'
          document.getElementById('r-algexpvslin-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpvslin-64').classList.add("correct")
          document.getElementById('b-algexpvslin-61').classList.add("incorrect")
          document.getElementById('b-algexpvslin-62').classList.add("incorrect")
          document.getElementById('b-algexpvslin-63').classList.add("incorrect")
    
          document.getElementById('sa-algexpvslin-6').disabled = true;
          document.getElementById('o-algexpvslin-61').disabled = true;
          document.getElementById('o-algexpvslin-62').disabled = true;
          document.getElementById('o-algexpvslin-63').disabled = true;
          document.getElementById('o-algexpvslin-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algexpvslin6', 0)
        }
        if (document.getElementById('o-algexpvslin-62').checked) {
          document.getElementById('r-algexpvslin-62').style.color = 'red'
          document.getElementById('r-algexpvslin-62').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpvslin-64').style.color = 'blue'
          document.getElementById('r-algexpvslin-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpvslin-64').classList.add("correct")
          document.getElementById('b-algexpvslin-61').classList.add("incorrect")
          document.getElementById('b-algexpvslin-62').classList.add("incorrect")
          document.getElementById('b-algexpvslin-63').classList.add("incorrect")
    
          document.getElementById('sa-algexpvslin-6').disabled = true;
          document.getElementById('o-algexpvslin-61').disabled = true;
          document.getElementById('o-algexpvslin-62').disabled = true;
          document.getElementById('o-algexpvslin-63').disabled = true;
          document.getElementById('o-algexpvslin-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algexpvslin6', 0)
        }
        if (document.getElementById('o-algexpvslin-63').checked) {
          document.getElementById('r-algexpvslin-63').style.color = 'red'
          document.getElementById('r-algexpvslin-63').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpvslin-64').style.color = 'blue'
          document.getElementById('r-algexpvslin-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpvslin-64').classList.add("correct")
          document.getElementById('b-algexpvslin-61').classList.add("incorrect")
          document.getElementById('b-algexpvslin-62').classList.add("incorrect")
          document.getElementById('b-algexpvslin-63').classList.add("incorrect")
    
          document.getElementById('sa-algexpvslin-6').disabled = true;
          document.getElementById('o-algexpvslin-61').disabled = true;
          document.getElementById('o-algexpvslin-62').disabled = true;
          document.getElementById('o-algexpvslin-63').disabled = true;
          document.getElementById('o-algexpvslin-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algexpvslin6', 0)
        }
        if (document.getElementById('o-algexpvslin-64').checked) {
          document.getElementById('r-algexpvslin-64').style.color = 'blue'
          document.getElementById('r-algexpvslin-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpvslin-64').classList.add("correct")
          document.getElementById('b-algexpvslin-61').classList.add("incorrect")
          document.getElementById('b-algexpvslin-62').classList.add("incorrect")
          document.getElementById('b-algexpvslin-63').classList.add("incorrect")
    
          document.getElementById('sa-algexpvslin-6').disabled = true;
          document.getElementById('o-algexpvslin-61').disabled = true;
          document.getElementById('o-algexpvslin-62').disabled = true;
          document.getElementById('o-algexpvslin-63').disabled = true;
          document.getElementById('o-algexpvslin-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algexpvslin6', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algexpvslin-7') != null) {
      algexpvslin7But.onclick = function() {
        if (document.getElementById('o-algexpvslin-71').checked) {
          document.getElementById('r-algexpvslin-71').style.color = 'red'
          document.getElementById('r-algexpvslin-71').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpvslin-74').style.color = 'blue'
          document.getElementById('r-algexpvslin-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpvslin-74').classList.add("correct")
          document.getElementById('b-algexpvslin-71').classList.add("incorrect")
          document.getElementById('b-algexpvslin-72').classList.add("incorrect")
          document.getElementById('b-algexpvslin-73').classList.add("incorrect")
    
          document.getElementById('sa-algexpvslin-7').disabled = true;
          document.getElementById('o-algexpvslin-71').disabled = true;
          document.getElementById('o-algexpvslin-72').disabled = true;
          document.getElementById('o-algexpvslin-73').disabled = true;
          document.getElementById('o-algexpvslin-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algexpvslin7', 0)
        }
        if (document.getElementById('o-algexpvslin-72').checked) {
          document.getElementById('r-algexpvslin-72').style.color = 'red'
          document.getElementById('r-algexpvslin-72').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpvslin-74').style.color = 'blue'
          document.getElementById('r-algexpvslin-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpvslin-74').classList.add("correct")
          document.getElementById('b-algexpvslin-71').classList.add("incorrect")
          document.getElementById('b-algexpvslin-72').classList.add("incorrect")
          document.getElementById('b-algexpvslin-73').classList.add("incorrect")
    
          document.getElementById('sa-algexpvslin-7').disabled = true;
          document.getElementById('o-algexpvslin-71').disabled = true;
          document.getElementById('o-algexpvslin-72').disabled = true;
          document.getElementById('o-algexpvslin-73').disabled = true;
          document.getElementById('o-algexpvslin-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algexpvslin7', 0)
        }
        if (document.getElementById('o-algexpvslin-73').checked) {
          document.getElementById('r-algexpvslin-73').style.color = 'red'
          document.getElementById('r-algexpvslin-73').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpvslin-74').style.color = 'blue'
          document.getElementById('r-algexpvslin-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpvslin-74').classList.add("correct")
          document.getElementById('b-algexpvslin-71').classList.add("incorrect")
          document.getElementById('b-algexpvslin-72').classList.add("incorrect")
          document.getElementById('b-algexpvslin-73').classList.add("incorrect")
    
          document.getElementById('sa-algexpvslin-7').disabled = true;
          document.getElementById('o-algexpvslin-71').disabled = true;
          document.getElementById('o-algexpvslin-72').disabled = true;
          document.getElementById('o-algexpvslin-73').disabled = true;
          document.getElementById('o-algexpvslin-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algexpvslin7', 0)
        }
        if (document.getElementById('o-algexpvslin-74').checked) {
          document.getElementById('r-algexpvslin-74').style.color = 'blue'
          document.getElementById('r-algexpvslin-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpvslin-74').classList.add("correct")
          document.getElementById('b-algexpvslin-71').classList.add("incorrect")
          document.getElementById('b-algexpvslin-72').classList.add("incorrect")
          document.getElementById('b-algexpvslin-73').classList.add("incorrect")
    
          document.getElementById('sa-algexpvslin-7').disabled = true;
          document.getElementById('o-algexpvslin-71').disabled = true;
          document.getElementById('o-algexpvslin-72').disabled = true;
          document.getElementById('o-algexpvslin-73').disabled = true;
          document.getElementById('o-algexpvslin-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algexpvslin7', 1)
        }
      }
    }
    
    
    if (document.getElementById('sa-algexpvslin-8') != null) {
      algexpvslin8But.onclick = function() {
        if (document.getElementById('o-algexpvslin-81').checked) {
          document.getElementById('r-algexpvslin-81').style.color = 'red'
          document.getElementById('r-algexpvslin-81').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpvslin-82').style.color = 'blue'
          document.getElementById('r-algexpvslin-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpvslin-82').classList.add("correct")
          document.getElementById('b-algexpvslin-81').classList.add("incorrect")
          document.getElementById('b-algexpvslin-83').classList.add("incorrect")
          document.getElementById('b-algexpvslin-84').classList.add("incorrect")
    
          document.getElementById('sa-algexpvslin-8').disabled = true;
          document.getElementById('o-algexpvslin-81').disabled = true;
          document.getElementById('o-algexpvslin-82').disabled = true;
          document.getElementById('o-algexpvslin-83').disabled = true;
          document.getElementById('o-algexpvslin-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algexpvslin8', 0)
        }
        if (document.getElementById('o-algexpvslin-82').checked) {
          document.getElementById('r-algexpvslin-82').style.color = 'blue'
          document.getElementById('r-algexpvslin-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpvslin-82').classList.add("correct")
          document.getElementById('b-algexpvslin-81').classList.add("incorrect")
          document.getElementById('b-algexpvslin-83').classList.add("incorrect")
          document.getElementById('b-algexpvslin-84').classList.add("incorrect")
    
          document.getElementById('sa-algexpvslin-8').disabled = true;
          document.getElementById('o-algexpvslin-81').disabled = true;
          document.getElementById('o-algexpvslin-82').disabled = true;
          document.getElementById('o-algexpvslin-83').disabled = true;
          document.getElementById('o-algexpvslin-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algexpvslin8', 1)
        }
        if (document.getElementById('o-algexpvslin-83').checked) {
          document.getElementById('r-algexpvslin-83').style.color = 'red'
          document.getElementById('r-algexpvslin-83').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpvslin-82').style.color = 'blue'
          document.getElementById('r-algexpvslin-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpvslin-82').classList.add("correct")
          document.getElementById('b-algexpvslin-81').classList.add("incorrect")
          document.getElementById('b-algexpvslin-83').classList.add("incorrect")
          document.getElementById('b-algexpvslin-84').classList.add("incorrect")
    
          document.getElementById('sa-algexpvslin-8').disabled = true;
          document.getElementById('o-algexpvslin-81').disabled = true;
          document.getElementById('o-algexpvslin-82').disabled = true;
          document.getElementById('o-algexpvslin-83').disabled = true;
          document.getElementById('o-algexpvslin-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algexpvslin8', 0)
        }
        if (document.getElementById('o-algexpvslin-84').checked) {
          document.getElementById('r-algexpvslin-84').style.color = 'red'
          document.getElementById('r-algexpvslin-84').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpvslin-82').style.color = 'blue'
          document.getElementById('r-algexpvslin-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpvslin-82').classList.add("correct")
          document.getElementById('b-algexpvslin-81').classList.add("incorrect")
          document.getElementById('b-algexpvslin-83').classList.add("incorrect")
          document.getElementById('b-algexpvslin-84').classList.add("incorrect")
    
          document.getElementById('sa-algexpvslin-8').disabled = true;
          document.getElementById('o-algexpvslin-81').disabled = true;
          document.getElementById('o-algexpvslin-82').disabled = true;
          document.getElementById('o-algexpvslin-83').disabled = true;
          document.getElementById('o-algexpvslin-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algexpvslin8', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-algexpvslin-9') != null) {
      algexpvslin9But.onclick = function() {
        if (document.getElementById('o-algexpvslin-91').checked) {
          document.getElementById('r-algexpvslin-91').style.color = 'red'
          document.getElementById('r-algexpvslin-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpvslin-94').style.color = 'blue'
          document.getElementById('r-algexpvslin-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpvslin-94').classList.add("correct")
          document.getElementById('b-algexpvslin-91').classList.add("incorrect")
          document.getElementById('b-algexpvslin-92').classList.add("incorrect")
          document.getElementById('b-algexpvslin-93').classList.add("incorrect")
    
          document.getElementById('sa-algexpvslin-9').disabled = true;
          document.getElementById('o-algexpvslin-91').disabled = true;
          document.getElementById('o-algexpvslin-92').disabled = true;
          document.getElementById('o-algexpvslin-93').disabled = true;
          document.getElementById('o-algexpvslin-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algexpvslin9', 0)
        }
        if (document.getElementById('o-algexpvslin-92').checked) {
          document.getElementById('r-algexpvslin-91').style.color = 'red'
          document.getElementById('r-algexpvslin-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpvslin-94').style.color = 'blue'
          document.getElementById('r-algexpvslin-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpvslin-94').classList.add("correct")
          document.getElementById('b-algexpvslin-91').classList.add("incorrect")
          document.getElementById('b-algexpvslin-92').classList.add("incorrect")
          document.getElementById('b-algexpvslin-93').classList.add("incorrect")
    
          document.getElementById('sa-algexpvslin-9').disabled = true;
          document.getElementById('o-algexpvslin-91').disabled = true;
          document.getElementById('o-algexpvslin-92').disabled = true;
          document.getElementById('o-algexpvslin-93').disabled = true;
          document.getElementById('o-algexpvslin-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algexpvslin9', 0)
        }
        if (document.getElementById('o-algexpvslin-93').checked) {
          document.getElementById('r-algexpvslin-91').style.color = 'red'
          document.getElementById('r-algexpvslin-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpvslin-94').style.color = 'blue'
          document.getElementById('r-algexpvslin-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpvslin-94').classList.add("correct")
          document.getElementById('b-algexpvslin-91').classList.add("incorrect")
          document.getElementById('b-algexpvslin-92').classList.add("incorrect")
          document.getElementById('b-algexpvslin-93').classList.add("incorrect")
    
          document.getElementById('sa-algexpvslin-9').disabled = true;
          document.getElementById('o-algexpvslin-91').disabled = true;
          document.getElementById('o-algexpvslin-92').disabled = true;
          document.getElementById('o-algexpvslin-93').disabled = true;
          document.getElementById('o-algexpvslin-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algexpvslin9', 0)
        }
        if (document.getElementById('o-algexpvslin-94').checked) {
          document.getElementById('r-algexpvslin-94').style.color = 'blue'
          document.getElementById('r-algexpvslin-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpvslin-94').classList.add("correct")
          document.getElementById('b-algexpvslin-91').classList.add("incorrect")
          document.getElementById('b-algexpvslin-92').classList.add("incorrect")
          document.getElementById('b-algexpvslin-93').classList.add("incorrect")
    
          document.getElementById('sa-algexpvslin-9').disabled = true;
          document.getElementById('o-algexpvslin-91').disabled = true;
          document.getElementById('o-algexpvslin-92').disabled = true;
          document.getElementById('o-algexpvslin-93').disabled = true;
          document.getElementById('o-algexpvslin-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algexpvslin9', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algexpvslin-10') != null) {
      algexpvslin10But.onclick = function() {
        if (document.getElementById('o-algexpvslin-101').checked) {
          document.getElementById('r-algexpvslin-101').style.color = 'red'
          document.getElementById('r-algexpvslin-101').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpvslin-102').style.color = 'blue'
          document.getElementById('r-algexpvslin-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpvslin-102').classList.add("correct")
          document.getElementById('b-algexpvslin-101').classList.add("incorrect")
          document.getElementById('b-algexpvslin-103').classList.add("incorrect")
          document.getElementById('b-algexpvslin-104').classList.add("incorrect")
    
          document.getElementById('sa-algexpvslin-10').disabled = true;
          document.getElementById('o-algexpvslin-101').disabled = true;
          document.getElementById('o-algexpvslin-102').disabled = true;
          document.getElementById('o-algexpvslin-103').disabled = true;
          document.getElementById('o-algexpvslin-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algexpvslin10', 0)
        }
        if (document.getElementById('o-algexpvslin-102').checked) {
          document.getElementById('r-algexpvslin-102').style.color = 'blue'
          document.getElementById('r-algexpvslin-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpvslin-102').classList.add("correct")
          document.getElementById('b-algexpvslin-101').classList.add("incorrect")
          document.getElementById('b-algexpvslin-103').classList.add("incorrect")
          document.getElementById('b-algexpvslin-104').classList.add("incorrect")
    
          document.getElementById('sa-algexpvslin-10').disabled = true;
          document.getElementById('o-algexpvslin-101').disabled = true;
          document.getElementById('o-algexpvslin-102').disabled = true;
          document.getElementById('o-algexpvslin-103').disabled = true;
          document.getElementById('o-algexpvslin-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algexpvslin10', 1)
        }
        if (document.getElementById('o-algexpvslin-103').checked) {
          document.getElementById('r-algexpvslin-103').style.color = 'red'
          document.getElementById('r-algexpvslin-103').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpvslin-102').style.color = 'blue'
          document.getElementById('r-algexpvslin-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpvslin-102').classList.add("correct")
          document.getElementById('b-algexpvslin-101').classList.add("incorrect")
          document.getElementById('b-algexpvslin-103').classList.add("incorrect")
          document.getElementById('b-algexpvslin-104').classList.add("incorrect")
    
          document.getElementById('sa-algexpvslin-10').disabled = true;
          document.getElementById('o-algexpvslin-101').disabled = true;
          document.getElementById('o-algexpvslin-102').disabled = true;
          document.getElementById('o-algexpvslin-103').disabled = true;
          document.getElementById('o-algexpvslin-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algexpvslin10', 0)
        }
        if (document.getElementById('o-algexpvslin-104').checked) {
          document.getElementById('r-algexpvslin-104').style.color = 'red'
          document.getElementById('r-algexpvslin-104').innerHTML = 'Incorrect!'
          document.getElementById('r-algexpvslin-102').style.color = 'blue'
          document.getElementById('r-algexpvslin-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algexpvslin-102').classList.add("correct")
          document.getElementById('b-algexpvslin-101').classList.add("incorrect")
          document.getElementById('b-algexpvslin-103').classList.add("incorrect")
          document.getElementById('b-algexpvslin-104').classList.add("incorrect")
    
          document.getElementById('sa-algexpvslin-10').disabled = true;
          document.getElementById('o-algexpvslin-101').disabled = true;
          document.getElementById('o-algexpvslin-102').disabled = true;
          document.getElementById('o-algexpvslin-103').disabled = true;
          document.getElementById('o-algexpvslin-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algexpvslin10', 0)
        }
      }
    }
    