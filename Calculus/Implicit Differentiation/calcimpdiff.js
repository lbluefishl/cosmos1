
  let calcimpdiff1But = document.getElementById('sa-calcimpdiff-1');
  let calcimpdiff2But = document.getElementById('sa-calcimpdiff-2');
  let calcimpdiff3But = document.getElementById('sa-calcimpdiff-3');
  let calcimpdiff4But = document.getElementById('sa-calcimpdiff-4');
  let calcimpdiff5But = document.getElementById('sa-calcimpdiff-5');
  let calcimpdiff6But = document.getElementById('sa-calcimpdiff-6');
  let calcimpdiff7But = document.getElementById('sa-calcimpdiff-7');
  let calcimpdiff8But = document.getElementById('sa-calcimpdiff-8');
  let calcimpdiff9But = document.getElementById('sa-calcimpdiff-9');
  let calcimpdiff10But = document.getElementById('sa-calcimpdiff-10');


  showExplanation1 = function() {
    document.getElementById('e-calcimpdiff-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-calcimpdiff-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-calcimpdiff-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-calcimpdiff-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-calcimpdiff-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-calcimpdiff-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-calcimpdiff-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-calcimpdiff-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-calcimpdiff-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-calcimpdiff-10').style.display = 'block';
     } 



     if (document.getElementById('sa-calcimpdiff-1') != null) {
      calcimpdiff1But.onclick = function () {
        if (document.getElementById('o-calcimpdiff-11').checked) {
          document.getElementById('r-calcimpdiff-11').style.color = 'blue'
          document.getElementById('r-calcimpdiff-11').innerHTML = 'Correct!'
    
          document.getElementById('b-calcimpdiff-11').classList.add("correct")
          document.getElementById('b-calcimpdiff-12').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-13').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-14').classList.add("incorrect")
    
          document.getElementById('sa-calcimpdiff-1').disabled = true;
          document.getElementById('o-calcimpdiff-11').disabled = true;
          document.getElementById('o-calcimpdiff-12').disabled = true;
          document.getElementById('o-calcimpdiff-13').disabled = true;
          document.getElementById('o-calcimpdiff-14').disabled = true;
          showExplanation1()
          localStorage.setItem('calcimpdiff1', 1)
        }
    
        if (document.getElementById('o-calcimpdiff-12').checked) {
         
          document.getElementById('r-calcimpdiff-12').style.color = 'red'
          document.getElementById('r-calcimpdiff-12').innerHTML = 'Incorrect!'
          document.getElementById('r-calcimpdiff-11').style.color = 'blue'
          document.getElementById('r-calcimpdiff-11').innerHTML = 'Correct!'
    
          document.getElementById('b-calcimpdiff-11').classList.add("correct")
          document.getElementById('b-calcimpdiff-12').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-13').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-14').classList.add("incorrect")
    
          document.getElementById('sa-calcimpdiff-1').disabled = true;
          document.getElementById('o-calcimpdiff-11').disabled = true;
          document.getElementById('o-calcimpdiff-12').disabled = true;
          document.getElementById('o-calcimpdiff-13').disabled = true;
          document.getElementById('o-calcimpdiff-14').disabled = true;
          showExplanation1()
          localStorage.setItem('calcimpdiff1', 0)
        }
        if (document.getElementById('o-calcimpdiff-13').checked) {
          document.getElementById('r-calcimpdiff-13').style.color = 'red'
          document.getElementById('r-calcimpdiff-13').innerHTML = 'Incorrect!'
          document.getElementById('r-calcimpdiff-11').style.color = 'blue'
          document.getElementById('r-calcimpdiff-11').innerHTML = 'Correct!'
          
          document.getElementById('b-calcimpdiff-11').classList.add("correct")
          document.getElementById('b-calcimpdiff-12').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-13').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-14').classList.add("incorrect")
    
          document.getElementById('sa-calcimpdiff-1').disabled = true;
          document.getElementById('o-calcimpdiff-11').disabled = true;
          document.getElementById('o-calcimpdiff-12').disabled = true;
          document.getElementById('o-calcimpdiff-13').disabled = true;
          document.getElementById('o-calcimpdiff-14').disabled = true;
          showExplanation1()
          localStorage.setItem('calcimpdiff1', 0)
        }
        if (document.getElementById('o-calcimpdiff-14').checked) {
          document.getElementById('r-calcimpdiff-14').style.color = 'red'
          document.getElementById('r-calcimpdiff-14').innerHTML = 'Incorrect!'
          document.getElementById('r-calcimpdiff-11').style.color = 'blue'
          document.getElementById('r-calcimpdiff-11').innerHTML = 'Correct!'
          
          document.getElementById('b-calcimpdiff-11').classList.add("correct")
          document.getElementById('b-calcimpdiff-12').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-13').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-14').classList.add("incorrect")
    
          document.getElementById('sa-calcimpdiff-1').disabled = true;
          document.getElementById('o-calcimpdiff-11').disabled = true;
          document.getElementById('o-calcimpdiff-12').disabled = true;
          document.getElementById('o-calcimpdiff-13').disabled = true;
          document.getElementById('o-calcimpdiff-14').disabled = true;
          showExplanation1()
          localStorage.setItem('calcimpdiff1', 0)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-calcimpdiff-2') != null) {
      calcimpdiff2But.onclick = function() {
        if (document.getElementById('o-calcimpdiff-21').checked) {
          document.getElementById('r-calcimpdiff-21').style.color = 'red'
          document.getElementById('r-calcimpdiff-21').innerHTML = 'Incorrect!'
          document.getElementById('r-calcimpdiff-23').style.color = 'blue'
          document.getElementById('r-calcimpdiff-23').innerHTML = 'Correct!'
          
          document.getElementById('b-calcimpdiff-23').classList.add("correct")
          document.getElementById('b-calcimpdiff-21').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-22').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-24').classList.add("incorrect")
    
          document.getElementById('sa-calcimpdiff-2').disabled = true;
          document.getElementById('o-calcimpdiff-21').disabled = true;
          document.getElementById('o-calcimpdiff-22').disabled = true;
          document.getElementById('o-calcimpdiff-23').disabled = true;
          document.getElementById('o-calcimpdiff-24').disabled = true;
          showExplanation2()
          localStorage.setItem('calcimpdiff2', 0)
        }
        if (document.getElementById('o-calcimpdiff-22').checked) {
          document.getElementById('r-calcimpdiff-22').style.color = 'red'
          document.getElementById('r-calcimpdiff-22').innerHTML = 'Incorrect!'
          document.getElementById('r-calcimpdiff-23').style.color = 'blue'
          document.getElementById('r-calcimpdiff-23').innerHTML = 'Correct!'
          
          document.getElementById('b-calcimpdiff-23').classList.add("correct")
          document.getElementById('b-calcimpdiff-21').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-22').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-24').classList.add("incorrect")
    
          document.getElementById('sa-calcimpdiff-2').disabled = true;
          document.getElementById('o-calcimpdiff-21').disabled = true;
          document.getElementById('o-calcimpdiff-22').disabled = true;
          document.getElementById('o-calcimpdiff-23').disabled = true;
          document.getElementById('o-calcimpdiff-24').disabled = true;
          showExplanation2()
          localStorage.setItem('calcimpdiff2', 0)
        }
        if (document.getElementById('o-calcimpdiff-23').checked) {
          document.getElementById('r-calcimpdiff-23').style.color = 'blue'
          document.getElementById('r-calcimpdiff-23').innerHTML = 'Correct!'
          
          document.getElementById('b-calcimpdiff-23').classList.add("correct")
          document.getElementById('b-calcimpdiff-21').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-22').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-24').classList.add("incorrect")
    
          document.getElementById('sa-calcimpdiff-2').disabled = true;
          document.getElementById('o-calcimpdiff-21').disabled = true;
          document.getElementById('o-calcimpdiff-22').disabled = true;
          document.getElementById('o-calcimpdiff-23').disabled = true;
          document.getElementById('o-calcimpdiff-24').disabled = true;
          showExplanation2()
          localStorage.setItem('calcimpdiff2', 1)
        }
        if (document.getElementById('o-calcimpdiff-24').checked) {
          document.getElementById('r-calcimpdiff-24').style.color = 'red'
          document.getElementById('r-calcimpdiff-24').innerHTML = 'Incorrect!'
          document.getElementById('r-calcimpdiff-23').style.color = 'blue'
          document.getElementById('r-calcimpdiff-23').innerHTML = 'Correct!'
          
          document.getElementById('b-calcimpdiff-23').classList.add("correct")
          document.getElementById('b-calcimpdiff-21').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-22').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-24').classList.add("incorrect")
    
          document.getElementById('sa-calcimpdiff-2').disabled = true;
          document.getElementById('o-calcimpdiff-21').disabled = true;
          document.getElementById('o-calcimpdiff-22').disabled = true;
          document.getElementById('o-calcimpdiff-23').disabled = true;
          document.getElementById('o-calcimpdiff-24').disabled = true;
          showExplanation2()
          localStorage.setItem('calcimpdiff2', 0)
        }
      }
    }
    
    if (document.getElementById('sa-calcimpdiff-3') != null) {
      calcimpdiff3But.onclick = function() {
        if (document.getElementById('o-calcimpdiff-31').checked) {
          document.getElementById('r-calcimpdiff-31').style.color = 'blue'
          document.getElementById('r-calcimpdiff-31').innerHTML = 'Correct!'
          
          document.getElementById('b-calcimpdiff-31').classList.add("correct")
          document.getElementById('b-calcimpdiff-32').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-33').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-34').classList.add("incorrect")
    
          document.getElementById('sa-calcimpdiff-3').disabled = true;
          document.getElementById('o-calcimpdiff-31').disabled = true;
          document.getElementById('o-calcimpdiff-32').disabled = true;
          document.getElementById('o-calcimpdiff-33').disabled = true;
          document.getElementById('o-calcimpdiff-34').disabled = true;
          showExplanation3()
          localStorage.setItem('calcimpdiff3', 1)
        }
        if (document.getElementById('o-calcimpdiff-32').checked) {
          document.getElementById('r-calcimpdiff-32').style.color = 'red'
          document.getElementById('r-calcimpdiff-32').innerHTML = 'Incorrect!'
          document.getElementById('r-calcimpdiff-31').style.color = 'blue'
          document.getElementById('r-calcimpdiff-31').innerHTML = 'Correct!'
          
          document.getElementById('b-calcimpdiff-31').classList.add("correct")
          document.getElementById('b-calcimpdiff-32').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-33').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-34').classList.add("incorrect")
    
          document.getElementById('sa-calcimpdiff-3').disabled = true;
          document.getElementById('o-calcimpdiff-31').disabled = true;
          document.getElementById('o-calcimpdiff-32').disabled = true;
          document.getElementById('o-calcimpdiff-33').disabled = true;
          document.getElementById('o-calcimpdiff-34').disabled = true;
          showExplanation3()
          localStorage.setItem('calcimpdiff3', 0)
        }
        if (document.getElementById('o-calcimpdiff-33').checked) {
          document.getElementById('r-calcimpdiff-33').style.color = 'red'
          document.getElementById('r-calcimpdiff-33').innerHTML = 'Incorrect!'
          document.getElementById('r-calcimpdiff-31').style.color = 'blue'
          document.getElementById('r-calcimpdiff-31').innerHTML = 'Correct!'
          
          document.getElementById('b-calcimpdiff-31').classList.add("correct")
          document.getElementById('b-calcimpdiff-32').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-33').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-34').classList.add("incorrect")
    
          document.getElementById('sa-calcimpdiff-3').disabled = true;
          document.getElementById('o-calcimpdiff-31').disabled = true;
          document.getElementById('o-calcimpdiff-32').disabled = true;
          document.getElementById('o-calcimpdiff-33').disabled = true;
          document.getElementById('o-calcimpdiff-34').disabled = true;
          showExplanation3()
          localStorage.setItem('calcimpdiff3', 0)
        }
        if (document.getElementById('o-calcimpdiff-34').checked) {
          document.getElementById('r-calcimpdiff-34').style.color = 'red'
          document.getElementById('r-calcimpdiff-34').innerHTML = 'Incorrect!'
          document.getElementById('r-calcimpdiff-31').style.color = 'blue'
          document.getElementById('r-calcimpdiff-31').innerHTML = 'Correct!'
          
          document.getElementById('b-calcimpdiff-31').classList.add("correct")
          document.getElementById('b-calcimpdiff-32').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-33').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-34').classList.add("incorrect")
    
          document.getElementById('sa-calcimpdiff-3').disabled = true;
          document.getElementById('o-calcimpdiff-31').disabled = true;
          document.getElementById('o-calcimpdiff-32').disabled = true;
          document.getElementById('o-calcimpdiff-33').disabled = true;
          document.getElementById('o-calcimpdiff-34').disabled = true;
          showExplanation3()
          localStorage.setItem('calcimpdiff3', 0)
        }
      }
    }
    
    if (document.getElementById('sa-calcimpdiff-4') != null) {
      calcimpdiff4But.onclick = function() {
        if (document.getElementById('o-calcimpdiff-41').checked) {
          document.getElementById('r-calcimpdiff-41').style.color = 'red'
          document.getElementById('r-calcimpdiff-41').innerHTML = 'Incorrect!'
          document.getElementById('r-calcimpdiff-44').style.color = 'blue'
          document.getElementById('r-calcimpdiff-44').innerHTML = 'Correct!'
          
          document.getElementById('b-calcimpdiff-44').classList.add("correct")
          document.getElementById('b-calcimpdiff-41').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-42').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-43').classList.add("incorrect")
    
          document.getElementById('sa-calcimpdiff-4').disabled = true;
          document.getElementById('o-calcimpdiff-41').disabled = true;
          document.getElementById('o-calcimpdiff-42').disabled = true;
          document.getElementById('o-calcimpdiff-43').disabled = true;
          document.getElementById('o-calcimpdiff-44').disabled = true;
          showExplanation4()
          localStorage.setItem('calcimpdiff4', 0)
        }
        if (document.getElementById('o-calcimpdiff-42').checked) {
          document.getElementById('r-calcimpdiff-42').style.color = 'red'
          document.getElementById('r-calcimpdiff-42').innerHTML = 'Incorrect!'
          document.getElementById('r-calcimpdiff-44').style.color = 'blue'
          document.getElementById('r-calcimpdiff-44').innerHTML = 'Correct!'
          
          document.getElementById('b-calcimpdiff-44').classList.add("correct")
          document.getElementById('b-calcimpdiff-41').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-42').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-43').classList.add("incorrect")
    
          document.getElementById('sa-calcimpdiff-4').disabled = true;
          document.getElementById('o-calcimpdiff-41').disabled = true;
          document.getElementById('o-calcimpdiff-42').disabled = true;
          document.getElementById('o-calcimpdiff-43').disabled = true;
          document.getElementById('o-calcimpdiff-44').disabled = true;
          showExplanation4()
          localStorage.setItem('calcimpdiff4', 0)
        }
        if (document.getElementById('o-calcimpdiff-43').checked) {
          document.getElementById('r-calcimpdiff-43').style.color = 'red'
          document.getElementById('r-calcimpdiff-43').innerHTML = 'Incorrect!'
          document.getElementById('r-calcimpdiff-44').style.color = 'blue'
          document.getElementById('r-calcimpdiff-44').innerHTML = 'Correct!'
          
          document.getElementById('b-calcimpdiff-44').classList.add("correct")
          document.getElementById('b-calcimpdiff-41').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-42').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-43').classList.add("incorrect")
    
          document.getElementById('sa-calcimpdiff-4').disabled = true;
          document.getElementById('o-calcimpdiff-41').disabled = true;
          document.getElementById('o-calcimpdiff-42').disabled = true;
          document.getElementById('o-calcimpdiff-43').disabled = true;
          document.getElementById('o-calcimpdiff-44').disabled = true;
          showExplanation4()
          localStorage.setItem('calcimpdiff4', 0)
        }
        if (document.getElementById('o-calcimpdiff-44').checked) {
          document.getElementById('r-calcimpdiff-44').style.color = 'blue'
          document.getElementById('r-calcimpdiff-44').innerHTML = 'Correct!'
          
          document.getElementById('b-calcimpdiff-44').classList.add("correct")
          document.getElementById('b-calcimpdiff-41').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-42').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-43').classList.add("incorrect")
    
          document.getElementById('sa-calcimpdiff-4').disabled = true;
          document.getElementById('o-calcimpdiff-41').disabled = true;
          document.getElementById('o-calcimpdiff-42').disabled = true;
          document.getElementById('o-calcimpdiff-43').disabled = true;
          document.getElementById('o-calcimpdiff-44').disabled = true;
          showExplanation4()
          localStorage.setItem('calcimpdiff4', 1)
        }
      }
    }
    
    if (document.getElementById('sa-calcimpdiff-5') != null) {
      calcimpdiff5But.onclick = function() {
        if (document.getElementById('o-calcimpdiff-51').checked) {
          document.getElementById('r-calcimpdiff-51').style.color = 'red'
          document.getElementById('r-calcimpdiff-51').innerHTML = 'Incorrect!'
          document.getElementById('r-calcimpdiff-53').style.color = 'blue'
          document.getElementById('r-calcimpdiff-53').innerHTML = 'Correct!'
          
          document.getElementById('b-calcimpdiff-53').classList.add("correct")
          document.getElementById('b-calcimpdiff-51').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-52').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-54').classList.add("incorrect")
    
          document.getElementById('sa-calcimpdiff-5').disabled = true;
          document.getElementById('o-calcimpdiff-51').disabled = true;
          document.getElementById('o-calcimpdiff-52').disabled = true;
          document.getElementById('o-calcimpdiff-53').disabled = true;
          document.getElementById('o-calcimpdiff-54').disabled = true;
          showExplanation5()
          localStorage.setItem('calcimpdiff5', 0)
        }
        if (document.getElementById('o-calcimpdiff-52').checked) {
          document.getElementById('r-calcimpdiff-52').style.color = 'red'
          document.getElementById('r-calcimpdiff-52').innerHTML = 'Incorrect!'
          document.getElementById('r-calcimpdiff-53').style.color = 'blue'
          document.getElementById('r-calcimpdiff-53').innerHTML = 'Correct!'
          
          document.getElementById('b-calcimpdiff-53').classList.add("correct")
          document.getElementById('b-calcimpdiff-51').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-52').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-54').classList.add("incorrect")
    
          document.getElementById('sa-calcimpdiff-5').disabled = true;
          document.getElementById('o-calcimpdiff-51').disabled = true;
          document.getElementById('o-calcimpdiff-52').disabled = true;
          document.getElementById('o-calcimpdiff-53').disabled = true;
          document.getElementById('o-calcimpdiff-54').disabled = true;
          showExplanation5()
          localStorage.setItem('calcimpdiff5', 0)
        }
        if (document.getElementById('o-calcimpdiff-53').checked) {
          document.getElementById('r-calcimpdiff-53').style.color = 'blue'
          document.getElementById('r-calcimpdiff-53').innerHTML = 'Correct!'
          
          document.getElementById('b-calcimpdiff-53').classList.add("correct")
          document.getElementById('b-calcimpdiff-51').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-52').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-54').classList.add("incorrect")
    
          document.getElementById('sa-calcimpdiff-5').disabled = true;
          document.getElementById('o-calcimpdiff-51').disabled = true;
          document.getElementById('o-calcimpdiff-52').disabled = true;
          document.getElementById('o-calcimpdiff-53').disabled = true;
          document.getElementById('o-calcimpdiff-54').disabled = true;
          showExplanation5()
          localStorage.setItem('calcimpdiff5', 1)
        }
        if (document.getElementById('o-calcimpdiff-54').checked) {
          document.getElementById('r-calcimpdiff-54').style.color = 'red'
          document.getElementById('r-calcimpdiff-54').innerHTML = 'Incorrect!'
          document.getElementById('r-calcimpdiff-53').style.color = 'blue'
          document.getElementById('r-calcimpdiff-53').innerHTML = 'Correct!'
          
          document.getElementById('b-calcimpdiff-53').classList.add("correct")
          document.getElementById('b-calcimpdiff-51').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-52').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-54').classList.add("incorrect")
    
          document.getElementById('sa-calcimpdiff-5').disabled = true;
          document.getElementById('o-calcimpdiff-51').disabled = true;
          document.getElementById('o-calcimpdiff-52').disabled = true;
          document.getElementById('o-calcimpdiff-53').disabled = true;
          document.getElementById('o-calcimpdiff-54').disabled = true;
          showExplanation5()
          localStorage.setItem('calcimpdiff5', 0)
        }
      }
    }
        
         
      if (document.getElementById('sa-calcimpdiff-6') != null) {
      calcimpdiff6But.onclick = function() {
        if (document.getElementById('o-calcimpdiff-61').checked) {
          document.getElementById('r-calcimpdiff-61').style.color = 'red'
          document.getElementById('r-calcimpdiff-61').innerHTML = 'Incorrect!'
          document.getElementById('r-calcimpdiff-64').style.color = 'blue'
          document.getElementById('r-calcimpdiff-64').innerHTML = 'Correct!'
          
          document.getElementById('b-calcimpdiff-64').classList.add("correct")
          document.getElementById('b-calcimpdiff-61').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-62').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-63').classList.add("incorrect")
    
          document.getElementById('sa-calcimpdiff-6').disabled = true;
          document.getElementById('o-calcimpdiff-61').disabled = true;
          document.getElementById('o-calcimpdiff-62').disabled = true;
          document.getElementById('o-calcimpdiff-63').disabled = true;
          document.getElementById('o-calcimpdiff-64').disabled = true;
          showExplanation6()
          localStorage.setItem('calcimpdiff6', 0)
        }
        if (document.getElementById('o-calcimpdiff-62').checked) {
          document.getElementById('r-calcimpdiff-62').style.color = 'red'
          document.getElementById('r-calcimpdiff-62').innerHTML = 'Incorrect!'
          document.getElementById('r-calcimpdiff-64').style.color = 'blue'
          document.getElementById('r-calcimpdiff-64').innerHTML = 'Correct!'
          
          document.getElementById('b-calcimpdiff-64').classList.add("correct")
          document.getElementById('b-calcimpdiff-61').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-62').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-63').classList.add("incorrect")
    
          document.getElementById('sa-calcimpdiff-6').disabled = true;
          document.getElementById('o-calcimpdiff-61').disabled = true;
          document.getElementById('o-calcimpdiff-62').disabled = true;
          document.getElementById('o-calcimpdiff-63').disabled = true;
          document.getElementById('o-calcimpdiff-64').disabled = true;
          showExplanation6()
          localStorage.setItem('calcimpdiff6', 0)
        }
        if (document.getElementById('o-calcimpdiff-63').checked) {
          document.getElementById('r-calcimpdiff-63').style.color = 'red'
          document.getElementById('r-calcimpdiff-63').innerHTML = 'Incorrect!'
          document.getElementById('r-calcimpdiff-64').style.color = 'blue'
          document.getElementById('r-calcimpdiff-64').innerHTML = 'Correct!'
          
          document.getElementById('b-calcimpdiff-64').classList.add("correct")
          document.getElementById('b-calcimpdiff-61').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-62').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-63').classList.add("incorrect")
    
          document.getElementById('sa-calcimpdiff-6').disabled = true;
          document.getElementById('o-calcimpdiff-61').disabled = true;
          document.getElementById('o-calcimpdiff-62').disabled = true;
          document.getElementById('o-calcimpdiff-63').disabled = true;
          document.getElementById('o-calcimpdiff-64').disabled = true;
          showExplanation6()
          localStorage.setItem('calcimpdiff6', 0)
        }
        if (document.getElementById('o-calcimpdiff-64').checked) {
          document.getElementById('r-calcimpdiff-64').style.color = 'blue'
          document.getElementById('r-calcimpdiff-64').innerHTML = 'Correct!'
          
          document.getElementById('b-calcimpdiff-64').classList.add("correct")
          document.getElementById('b-calcimpdiff-61').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-62').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-63').classList.add("incorrect")
    
          document.getElementById('sa-calcimpdiff-6').disabled = true;
          document.getElementById('o-calcimpdiff-61').disabled = true;
          document.getElementById('o-calcimpdiff-62').disabled = true;
          document.getElementById('o-calcimpdiff-63').disabled = true;
          document.getElementById('o-calcimpdiff-64').disabled = true;
          showExplanation6()
          localStorage.setItem('calcimpdiff6', 1)
        }
      }
    }
    
    if (document.getElementById('sa-calcimpdiff-7') != null) {
      calcimpdiff7But.onclick = function() {
        if (document.getElementById('o-calcimpdiff-71').checked) {
          document.getElementById('r-calcimpdiff-71').style.color = 'red'
          document.getElementById('r-calcimpdiff-71').innerHTML = 'Incorrect!'
          document.getElementById('r-calcimpdiff-74').style.color = 'blue'
          document.getElementById('r-calcimpdiff-74').innerHTML = 'Correct!'
          
          document.getElementById('b-calcimpdiff-74').classList.add("correct")
          document.getElementById('b-calcimpdiff-71').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-72').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-73').classList.add("incorrect")
    
          document.getElementById('sa-calcimpdiff-7').disabled = true;
          document.getElementById('o-calcimpdiff-71').disabled = true;
          document.getElementById('o-calcimpdiff-72').disabled = true;
          document.getElementById('o-calcimpdiff-73').disabled = true;
          document.getElementById('o-calcimpdiff-74').disabled = true;
          showExplanation7()
          localStorage.setItem('calcimpdiff7', 0)
        }
        if (document.getElementById('o-calcimpdiff-72').checked) {
          document.getElementById('r-calcimpdiff-72').style.color = 'red'
          document.getElementById('r-calcimpdiff-72').innerHTML = 'Incorrect!'
          document.getElementById('r-calcimpdiff-74').style.color = 'blue'
          document.getElementById('r-calcimpdiff-74').innerHTML = 'Correct!'
          
          document.getElementById('b-calcimpdiff-74').classList.add("correct")
          document.getElementById('b-calcimpdiff-71').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-72').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-73').classList.add("incorrect")
    
          document.getElementById('sa-calcimpdiff-7').disabled = true;
          document.getElementById('o-calcimpdiff-71').disabled = true;
          document.getElementById('o-calcimpdiff-72').disabled = true;
          document.getElementById('o-calcimpdiff-73').disabled = true;
          document.getElementById('o-calcimpdiff-74').disabled = true;
          showExplanation7()
          localStorage.setItem('calcimpdiff7', 0)
        }
        if (document.getElementById('o-calcimpdiff-73').checked) {
          document.getElementById('r-calcimpdiff-73').style.color = 'red'
          document.getElementById('r-calcimpdiff-73').innerHTML = 'Incorrect!'
          document.getElementById('r-calcimpdiff-74').style.color = 'blue'
          document.getElementById('r-calcimpdiff-74').innerHTML = 'Correct!'
          
          document.getElementById('b-calcimpdiff-74').classList.add("correct")
          document.getElementById('b-calcimpdiff-71').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-72').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-73').classList.add("incorrect")
    
          document.getElementById('sa-calcimpdiff-7').disabled = true;
          document.getElementById('o-calcimpdiff-71').disabled = true;
          document.getElementById('o-calcimpdiff-72').disabled = true;
          document.getElementById('o-calcimpdiff-73').disabled = true;
          document.getElementById('o-calcimpdiff-74').disabled = true;
          showExplanation7()
          localStorage.setItem('calcimpdiff7', 0)
        }
        if (document.getElementById('o-calcimpdiff-74').checked) {
          document.getElementById('r-calcimpdiff-74').style.color = 'blue'
          document.getElementById('r-calcimpdiff-74').innerHTML = 'Correct!'
          
          document.getElementById('b-calcimpdiff-74').classList.add("correct")
          document.getElementById('b-calcimpdiff-71').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-72').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-73').classList.add("incorrect")
    
          document.getElementById('sa-calcimpdiff-7').disabled = true;
          document.getElementById('o-calcimpdiff-71').disabled = true;
          document.getElementById('o-calcimpdiff-72').disabled = true;
          document.getElementById('o-calcimpdiff-73').disabled = true;
          document.getElementById('o-calcimpdiff-74').disabled = true;
          showExplanation7()
          localStorage.setItem('calcimpdiff7', 1)
        }
      }
    }
    
    
    if (document.getElementById('sa-calcimpdiff-8') != null) {
      calcimpdiff8But.onclick = function() {
        if (document.getElementById('o-calcimpdiff-81').checked) {
          document.getElementById('r-calcimpdiff-81').style.color = 'red'
          document.getElementById('r-calcimpdiff-81').innerHTML = 'Incorrect!'
          document.getElementById('r-calcimpdiff-82').style.color = 'blue'
          document.getElementById('r-calcimpdiff-82').innerHTML = 'Correct!'
          
          document.getElementById('b-calcimpdiff-82').classList.add("correct")
          document.getElementById('b-calcimpdiff-81').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-83').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-84').classList.add("incorrect")
    
          document.getElementById('sa-calcimpdiff-8').disabled = true;
          document.getElementById('o-calcimpdiff-81').disabled = true;
          document.getElementById('o-calcimpdiff-82').disabled = true;
          document.getElementById('o-calcimpdiff-83').disabled = true;
          document.getElementById('o-calcimpdiff-84').disabled = true;
          showExplanation8()
          localStorage.setItem('calcimpdiff8', 0)
        }
        if (document.getElementById('o-calcimpdiff-82').checked) {
          document.getElementById('r-calcimpdiff-82').style.color = 'blue'
          document.getElementById('r-calcimpdiff-82').innerHTML = 'Correct!'
          
          document.getElementById('b-calcimpdiff-82').classList.add("correct")
          document.getElementById('b-calcimpdiff-81').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-83').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-84').classList.add("incorrect")
    
          document.getElementById('sa-calcimpdiff-8').disabled = true;
          document.getElementById('o-calcimpdiff-81').disabled = true;
          document.getElementById('o-calcimpdiff-82').disabled = true;
          document.getElementById('o-calcimpdiff-83').disabled = true;
          document.getElementById('o-calcimpdiff-84').disabled = true;
          showExplanation8()
          localStorage.setItem('calcimpdiff8', 1)
        }
        if (document.getElementById('o-calcimpdiff-83').checked) {
          document.getElementById('r-calcimpdiff-83').style.color = 'red'
          document.getElementById('r-calcimpdiff-83').innerHTML = 'Incorrect!'
          document.getElementById('r-calcimpdiff-82').style.color = 'blue'
          document.getElementById('r-calcimpdiff-82').innerHTML = 'Correct!'
          
          document.getElementById('b-calcimpdiff-82').classList.add("correct")
          document.getElementById('b-calcimpdiff-81').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-83').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-84').classList.add("incorrect")
    
          document.getElementById('sa-calcimpdiff-8').disabled = true;
          document.getElementById('o-calcimpdiff-81').disabled = true;
          document.getElementById('o-calcimpdiff-82').disabled = true;
          document.getElementById('o-calcimpdiff-83').disabled = true;
          document.getElementById('o-calcimpdiff-84').disabled = true;
          showExplanation8()
          localStorage.setItem('calcimpdiff8', 0)
        }
        if (document.getElementById('o-calcimpdiff-84').checked) {
          document.getElementById('r-calcimpdiff-84').style.color = 'red'
          document.getElementById('r-calcimpdiff-84').innerHTML = 'Incorrect!'
          document.getElementById('r-calcimpdiff-82').style.color = 'blue'
          document.getElementById('r-calcimpdiff-82').innerHTML = 'Correct!'
          
          document.getElementById('b-calcimpdiff-82').classList.add("correct")
          document.getElementById('b-calcimpdiff-81').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-83').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-84').classList.add("incorrect")
    
          document.getElementById('sa-calcimpdiff-8').disabled = true;
          document.getElementById('o-calcimpdiff-81').disabled = true;
          document.getElementById('o-calcimpdiff-82').disabled = true;
          document.getElementById('o-calcimpdiff-83').disabled = true;
          document.getElementById('o-calcimpdiff-84').disabled = true;
          showExplanation8()
          localStorage.setItem('calcimpdiff8', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-calcimpdiff-9') != null) {
      calcimpdiff9But.onclick = function() {
        if (document.getElementById('o-calcimpdiff-91').checked) {
          document.getElementById('r-calcimpdiff-91').style.color = 'red'
          document.getElementById('r-calcimpdiff-91').innerHTML = 'Incorrect!'
          document.getElementById('r-calcimpdiff-94').style.color = 'blue'
          document.getElementById('r-calcimpdiff-94').innerHTML = 'Correct!'
          
          document.getElementById('b-calcimpdiff-94').classList.add("correct")
          document.getElementById('b-calcimpdiff-91').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-92').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-93').classList.add("incorrect")
    
          document.getElementById('sa-calcimpdiff-9').disabled = true;
          document.getElementById('o-calcimpdiff-91').disabled = true;
          document.getElementById('o-calcimpdiff-92').disabled = true;
          document.getElementById('o-calcimpdiff-93').disabled = true;
          document.getElementById('o-calcimpdiff-94').disabled = true;
          showExplanation9()
          localStorage.setItem('calcimpdiff9', 0)
        }
        if (document.getElementById('o-calcimpdiff-92').checked) {
          document.getElementById('r-calcimpdiff-91').style.color = 'red'
          document.getElementById('r-calcimpdiff-91').innerHTML = 'Incorrect!'
          document.getElementById('r-calcimpdiff-94').style.color = 'blue'
          document.getElementById('r-calcimpdiff-94').innerHTML = 'Correct!'
          
          document.getElementById('b-calcimpdiff-94').classList.add("correct")
          document.getElementById('b-calcimpdiff-91').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-92').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-93').classList.add("incorrect")
    
          document.getElementById('sa-calcimpdiff-9').disabled = true;
          document.getElementById('o-calcimpdiff-91').disabled = true;
          document.getElementById('o-calcimpdiff-92').disabled = true;
          document.getElementById('o-calcimpdiff-93').disabled = true;
          document.getElementById('o-calcimpdiff-94').disabled = true;
          showExplanation9()
          localStorage.setItem('calcimpdiff9', 0)
        }
        if (document.getElementById('o-calcimpdiff-93').checked) {
          document.getElementById('r-calcimpdiff-91').style.color = 'red'
          document.getElementById('r-calcimpdiff-91').innerHTML = 'Incorrect!'
          document.getElementById('r-calcimpdiff-94').style.color = 'blue'
          document.getElementById('r-calcimpdiff-94').innerHTML = 'Correct!'
          
          document.getElementById('b-calcimpdiff-94').classList.add("correct")
          document.getElementById('b-calcimpdiff-91').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-92').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-93').classList.add("incorrect")
    
          document.getElementById('sa-calcimpdiff-9').disabled = true;
          document.getElementById('o-calcimpdiff-91').disabled = true;
          document.getElementById('o-calcimpdiff-92').disabled = true;
          document.getElementById('o-calcimpdiff-93').disabled = true;
          document.getElementById('o-calcimpdiff-94').disabled = true;
          showExplanation9()
          localStorage.setItem('calcimpdiff9', 0)
        }
        if (document.getElementById('o-calcimpdiff-94').checked) {
          document.getElementById('r-calcimpdiff-94').style.color = 'blue'
          document.getElementById('r-calcimpdiff-94').innerHTML = 'Correct!'
          
          document.getElementById('b-calcimpdiff-94').classList.add("correct")
          document.getElementById('b-calcimpdiff-91').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-92').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-93').classList.add("incorrect")
    
          document.getElementById('sa-calcimpdiff-9').disabled = true;
          document.getElementById('o-calcimpdiff-91').disabled = true;
          document.getElementById('o-calcimpdiff-92').disabled = true;
          document.getElementById('o-calcimpdiff-93').disabled = true;
          document.getElementById('o-calcimpdiff-94').disabled = true;
          showExplanation9()
          localStorage.setItem('calcimpdiff9', 1)
        }
      }
    }
    
    if (document.getElementById('sa-calcimpdiff-10') != null) {
      calcimpdiff10But.onclick = function() {
        if (document.getElementById('o-calcimpdiff-101').checked) {
          document.getElementById('r-calcimpdiff-101').style.color = 'red'
          document.getElementById('r-calcimpdiff-101').innerHTML = 'Incorrect!'
          document.getElementById('r-calcimpdiff-102').style.color = 'blue'
          document.getElementById('r-calcimpdiff-102').innerHTML = 'Correct!'
          
          document.getElementById('b-calcimpdiff-102').classList.add("correct")
          document.getElementById('b-calcimpdiff-101').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-103').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-104').classList.add("incorrect")
    
          document.getElementById('sa-calcimpdiff-10').disabled = true;
          document.getElementById('o-calcimpdiff-101').disabled = true;
          document.getElementById('o-calcimpdiff-102').disabled = true;
          document.getElementById('o-calcimpdiff-103').disabled = true;
          document.getElementById('o-calcimpdiff-104').disabled = true;
          showExplanation10()
          localStorage.setItem('calcimpdiff10', 0)
        }
        if (document.getElementById('o-calcimpdiff-102').checked) {
          document.getElementById('r-calcimpdiff-102').style.color = 'blue'
          document.getElementById('r-calcimpdiff-102').innerHTML = 'Correct!'
          
          document.getElementById('b-calcimpdiff-102').classList.add("correct")
          document.getElementById('b-calcimpdiff-101').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-103').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-104').classList.add("incorrect")
    
          document.getElementById('sa-calcimpdiff-10').disabled = true;
          document.getElementById('o-calcimpdiff-101').disabled = true;
          document.getElementById('o-calcimpdiff-102').disabled = true;
          document.getElementById('o-calcimpdiff-103').disabled = true;
          document.getElementById('o-calcimpdiff-104').disabled = true;
          showExplanation10()
          localStorage.setItem('calcimpdiff10', 1)
        }
        if (document.getElementById('o-calcimpdiff-103').checked) {
          document.getElementById('r-calcimpdiff-103').style.color = 'red'
          document.getElementById('r-calcimpdiff-103').innerHTML = 'Incorrect!'
          document.getElementById('r-calcimpdiff-102').style.color = 'blue'
          document.getElementById('r-calcimpdiff-102').innerHTML = 'Correct!'
          
          document.getElementById('b-calcimpdiff-102').classList.add("correct")
          document.getElementById('b-calcimpdiff-101').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-103').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-104').classList.add("incorrect")
    
          document.getElementById('sa-calcimpdiff-10').disabled = true;
          document.getElementById('o-calcimpdiff-101').disabled = true;
          document.getElementById('o-calcimpdiff-102').disabled = true;
          document.getElementById('o-calcimpdiff-103').disabled = true;
          document.getElementById('o-calcimpdiff-104').disabled = true;
          showExplanation10()
          localStorage.setItem('calcimpdiff10', 0)
        }
        if (document.getElementById('o-calcimpdiff-104').checked) {
          document.getElementById('r-calcimpdiff-104').style.color = 'red'
          document.getElementById('r-calcimpdiff-104').innerHTML = 'Incorrect!'
          document.getElementById('r-calcimpdiff-102').style.color = 'blue'
          document.getElementById('r-calcimpdiff-102').innerHTML = 'Correct!'
          
          document.getElementById('b-calcimpdiff-102').classList.add("correct")
          document.getElementById('b-calcimpdiff-101').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-103').classList.add("incorrect")
          document.getElementById('b-calcimpdiff-104').classList.add("incorrect")
    
          document.getElementById('sa-calcimpdiff-10').disabled = true;
          document.getElementById('o-calcimpdiff-101').disabled = true;
          document.getElementById('o-calcimpdiff-102').disabled = true;
          document.getElementById('o-calcimpdiff-103').disabled = true;
          document.getElementById('o-calcimpdiff-104').disabled = true;
          showExplanation10()
          localStorage.setItem('calcimpdiff10', 0)
        }
      }
    }
    