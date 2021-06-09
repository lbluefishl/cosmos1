
  let psysenper1But = document.getElementById('sa-psysenper-1');
  let psysenper2But = document.getElementById('sa-psysenper-2');
  let psysenper3But = document.getElementById('sa-psysenper-3');
  let psysenper4But = document.getElementById('sa-psysenper-4');
  let psysenper5But = document.getElementById('sa-psysenper-5');
  let psysenper6But = document.getElementById('sa-psysenper-6');
  let psysenper7But = document.getElementById('sa-psysenper-7');
  let psysenper8But = document.getElementById('sa-psysenper-8');
  let psysenper9But = document.getElementById('sa-psysenper-9');
  let psysenper10But = document.getElementById('sa-psysenper-10');


  showExplanation1 = function() {
    document.getElementById('e-psysenper-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-psysenper-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-psysenper-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-psysenper-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-psysenper-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-psysenper-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-psysenper-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-psysenper-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-psysenper-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-psysenper-10').style.display = 'block';
     } 



     if (document.getElementById('sa-psysenper-1') != null) {
      psysenper1But.onclick = function () {
        if (document.getElementById('o-psysenper-11').checked) {
          document.getElementById('r-psysenper-11').style.color = 'red'
          document.getElementById('r-psysenper-11').innerHTML = 'Incorrect!'
          document.getElementById('r-psysenper-12').style.color = 'blue'
          document.getElementById('r-psysenper-12').innerHTML = 'Correct!'
    
          document.getElementById('b-psysenper-12').classList.add("correct")
          document.getElementById('b-psysenper-11').classList.add("incorrect")
          document.getElementById('b-psysenper-13').classList.add("incorrect")
          document.getElementById('b-psysenper-14').classList.add("incorrect")
    
          document.getElementById('sa-psysenper-1').disabled = true;
          document.getElementById('o-psysenper-11').disabled = true;
          document.getElementById('o-psysenper-12').disabled = true;
          document.getElementById('o-psysenper-13').disabled = true;
          document.getElementById('o-psysenper-14').disabled = true;
          showExplanation1()
          localStorage.setItem('psysenper1', 0)
        }
    
        if (document.getElementById('o-psysenper-12').checked) {
          document.getElementById('r-psysenper-12').style.color = 'blue'
          document.getElementById('r-psysenper-12').innerHTML = 'Correct!'
    
          document.getElementById('b-psysenper-12').classList.add("correct")
          document.getElementById('b-psysenper-11').classList.add("incorrect")
          document.getElementById('b-psysenper-13').classList.add("incorrect")
          document.getElementById('b-psysenper-14').classList.add("incorrect")
    
          document.getElementById('sa-psysenper-1').disabled = true;
          document.getElementById('o-psysenper-11').disabled = true;
          document.getElementById('o-psysenper-12').disabled = true;
          document.getElementById('o-psysenper-13').disabled = true;
          document.getElementById('o-psysenper-14').disabled = true;
          showExplanation1()
          localStorage.setItem('psysenper1', 1)
        }
        if (document.getElementById('o-psysenper-13').checked) {
          document.getElementById('r-psysenper-13').style.color = 'red'
          document.getElementById('r-psysenper-13').innerHTML = 'Incorrect!'
          document.getElementById('r-psysenper-12').style.color = 'blue'
          document.getElementById('r-psysenper-12').innerHTML = 'Correct!'
          
          document.getElementById('b-psysenper-12').classList.add("correct")
          document.getElementById('b-psysenper-11').classList.add("incorrect")
          document.getElementById('b-psysenper-13').classList.add("incorrect")
          document.getElementById('b-psysenper-14').classList.add("incorrect")
    
          document.getElementById('sa-psysenper-1').disabled = true;
          document.getElementById('o-psysenper-11').disabled = true;
          document.getElementById('o-psysenper-12').disabled = true;
          document.getElementById('o-psysenper-13').disabled = true;
          document.getElementById('o-psysenper-14').disabled = true;
          showExplanation1()
          localStorage.setItem('psysenper1', 0)
        }
        if (document.getElementById('o-psysenper-14').checked) {
          document.getElementById('r-psysenper-14').style.color = 'red'
          document.getElementById('r-psysenper-14').innerHTML = 'Incorrect!'
          document.getElementById('r-psysenper-12').style.color = 'blue'
          document.getElementById('r-psysenper-12').innerHTML = 'Correct!'
          
          document.getElementById('b-psysenper-12').classList.add("correct")
          document.getElementById('b-psysenper-11').classList.add("incorrect")
          document.getElementById('b-psysenper-13').classList.add("incorrect")
          document.getElementById('b-psysenper-14').classList.add("incorrect")
    
          document.getElementById('sa-psysenper-1').disabled = true;
          document.getElementById('o-psysenper-11').disabled = true;
          document.getElementById('o-psysenper-12').disabled = true;
          document.getElementById('o-psysenper-13').disabled = true;
          document.getElementById('o-psysenper-14').disabled = true;
          showExplanation1()
          localStorage.setItem('psysenper1', 0)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-psysenper-2') != null) {
      psysenper2But.onclick = function() {
        if (document.getElementById('o-psysenper-21').checked) {
          document.getElementById('r-psysenper-21').style.color = 'red'
          document.getElementById('r-psysenper-21').innerHTML = 'Incorrect!'
          document.getElementById('r-psysenper-23').style.color = 'blue'
          document.getElementById('r-psysenper-23').innerHTML = 'Correct!'
          
          document.getElementById('b-psysenper-23').classList.add("correct")
          document.getElementById('b-psysenper-21').classList.add("incorrect")
          document.getElementById('b-psysenper-22').classList.add("incorrect")
          document.getElementById('b-psysenper-24').classList.add("incorrect")
    
          document.getElementById('sa-psysenper-2').disabled = true;
          document.getElementById('o-psysenper-21').disabled = true;
          document.getElementById('o-psysenper-22').disabled = true;
          document.getElementById('o-psysenper-23').disabled = true;
          document.getElementById('o-psysenper-24').disabled = true;
          showExplanation2()
          localStorage.setItem('psysenper2', 0)
        }
        if (document.getElementById('o-psysenper-22').checked) {
          document.getElementById('r-psysenper-22').style.color = 'red'
          document.getElementById('r-psysenper-22').innerHTML = 'Incorrect!'
          document.getElementById('r-psysenper-23').style.color = 'blue'
          document.getElementById('r-psysenper-23').innerHTML = 'Correct!'
          
          document.getElementById('b-psysenper-23').classList.add("correct")
          document.getElementById('b-psysenper-21').classList.add("incorrect")
          document.getElementById('b-psysenper-22').classList.add("incorrect")
          document.getElementById('b-psysenper-24').classList.add("incorrect")
    
          document.getElementById('sa-psysenper-2').disabled = true;
          document.getElementById('o-psysenper-21').disabled = true;
          document.getElementById('o-psysenper-22').disabled = true;
          document.getElementById('o-psysenper-23').disabled = true;
          document.getElementById('o-psysenper-24').disabled = true;
          showExplanation2()
          localStorage.setItem('psysenper2', 0)
        }
        if (document.getElementById('o-psysenper-23').checked) {
          document.getElementById('r-psysenper-23').style.color = 'blue'
          document.getElementById('r-psysenper-23').innerHTML = 'Correct!'
          
          document.getElementById('b-psysenper-23').classList.add("correct")
          document.getElementById('b-psysenper-21').classList.add("incorrect")
          document.getElementById('b-psysenper-22').classList.add("incorrect")
          document.getElementById('b-psysenper-24').classList.add("incorrect")
    
          document.getElementById('sa-psysenper-2').disabled = true;
          document.getElementById('o-psysenper-21').disabled = true;
          document.getElementById('o-psysenper-22').disabled = true;
          document.getElementById('o-psysenper-23').disabled = true;
          document.getElementById('o-psysenper-24').disabled = true;
          showExplanation2()
          localStorage.setItem('psysenper2', 1)
        }
        if (document.getElementById('o-psysenper-24').checked) {
          document.getElementById('r-psysenper-24').style.color = 'red'
          document.getElementById('r-psysenper-24').innerHTML = 'Incorrect!'
          document.getElementById('r-psysenper-23').style.color = 'blue'
          document.getElementById('r-psysenper-23').innerHTML = 'Correct!'
          
          document.getElementById('b-psysenper-23').classList.add("correct")
          document.getElementById('b-psysenper-21').classList.add("incorrect")
          document.getElementById('b-psysenper-22').classList.add("incorrect")
          document.getElementById('b-psysenper-24').classList.add("incorrect")
    
          document.getElementById('sa-psysenper-2').disabled = true;
          document.getElementById('o-psysenper-21').disabled = true;
          document.getElementById('o-psysenper-22').disabled = true;
          document.getElementById('o-psysenper-23').disabled = true;
          document.getElementById('o-psysenper-24').disabled = true;
          showExplanation2()
          localStorage.setItem('psysenper2', 0)
        }
      }
    }
    
    if (document.getElementById('sa-psysenper-3') != null) {
      psysenper3But.onclick = function() {
        if (document.getElementById('o-psysenper-31').checked) {
          document.getElementById('r-psysenper-31').style.color = 'red'
          document.getElementById('r-psysenper-31').innerHTML = 'Incorrect!'
          document.getElementById('r-psysenper-32').style.color = 'blue'
          document.getElementById('r-psysenper-32').innerHTML = 'Correct!'
          
          document.getElementById('b-psysenper-32').classList.add("correct")
          document.getElementById('b-psysenper-31').classList.add("incorrect")
          document.getElementById('b-psysenper-33').classList.add("incorrect")
          document.getElementById('b-psysenper-34').classList.add("incorrect")
    
          document.getElementById('sa-psysenper-3').disabled = true;
          document.getElementById('o-psysenper-31').disabled = true;
          document.getElementById('o-psysenper-32').disabled = true;
          document.getElementById('o-psysenper-33').disabled = true;
          document.getElementById('o-psysenper-34').disabled = true;
          showExplanation3()
          localStorage.setItem('psysenper3', 0)
        }
        if (document.getElementById('o-psysenper-32').checked) {
    
          document.getElementById('r-psysenper-32').style.color = 'blue'
          document.getElementById('r-psysenper-32').innerHTML = 'Correct!'
          
          document.getElementById('b-psysenper-32').classList.add("correct")
          document.getElementById('b-psysenper-31').classList.add("incorrect")
          document.getElementById('b-psysenper-33').classList.add("incorrect")
          document.getElementById('b-psysenper-34').classList.add("incorrect")
    
          document.getElementById('sa-psysenper-3').disabled = true;
          document.getElementById('o-psysenper-31').disabled = true;
          document.getElementById('o-psysenper-32').disabled = true;
          document.getElementById('o-psysenper-33').disabled = true;
          document.getElementById('o-psysenper-34').disabled = true;
          showExplanation3()
          localStorage.setItem('psysenper3', 1)
        }
        if (document.getElementById('o-psysenper-33').checked) {
          document.getElementById('r-psysenper-33').style.color = 'red'
          document.getElementById('r-psysenper-33').innerHTML = 'Incorrect!'
          document.getElementById('r-psysenper-32').style.color = 'blue'
          document.getElementById('r-psysenper-32').innerHTML = 'Correct!'
          
          document.getElementById('b-psysenper-32').classList.add("correct")
          document.getElementById('b-psysenper-31').classList.add("incorrect")
          document.getElementById('b-psysenper-33').classList.add("incorrect")
          document.getElementById('b-psysenper-34').classList.add("incorrect")
    
          document.getElementById('sa-psysenper-3').disabled = true;
          document.getElementById('o-psysenper-31').disabled = true;
          document.getElementById('o-psysenper-32').disabled = true;
          document.getElementById('o-psysenper-33').disabled = true;
          document.getElementById('o-psysenper-34').disabled = true;
          showExplanation3()
          localStorage.setItem('psysenper3', 0)
        }
        if (document.getElementById('o-psysenper-34').checked) {
          document.getElementById('r-psysenper-34').style.color = 'red'
          document.getElementById('r-psysenper-34').innerHTML = 'Incorrect!'
          document.getElementById('r-psysenper-32').style.color = 'blue'
          document.getElementById('r-psysenper-32').innerHTML = 'Correct!'
          
          document.getElementById('b-psysenper-32').classList.add("correct")
          document.getElementById('b-psysenper-31').classList.add("incorrect")
          document.getElementById('b-psysenper-33').classList.add("incorrect")
          document.getElementById('b-psysenper-34').classList.add("incorrect")
    
          document.getElementById('sa-psysenper-3').disabled = true;
          document.getElementById('o-psysenper-31').disabled = true;
          document.getElementById('o-psysenper-32').disabled = true;
          document.getElementById('o-psysenper-33').disabled = true;
          document.getElementById('o-psysenper-34').disabled = true;
          showExplanation3()
          localStorage.setItem('psysenper3', 0)
        }
      }
    }
    
    if (document.getElementById('sa-psysenper-4') != null) {
      psysenper4But.onclick = function() {
        if (document.getElementById('o-psysenper-41').checked) {
          document.getElementById('r-psysenper-41').style.color = 'red'
          document.getElementById('r-psysenper-41').innerHTML = 'Incorrect!'
          document.getElementById('r-psysenper-44').style.color = 'blue'
          document.getElementById('r-psysenper-44').innerHTML = 'Correct!'
          
          document.getElementById('b-psysenper-44').classList.add("correct")
          document.getElementById('b-psysenper-41').classList.add("incorrect")
          document.getElementById('b-psysenper-42').classList.add("incorrect")
          document.getElementById('b-psysenper-43').classList.add("incorrect")
    
          document.getElementById('sa-psysenper-4').disabled = true;
          document.getElementById('o-psysenper-41').disabled = true;
          document.getElementById('o-psysenper-42').disabled = true;
          document.getElementById('o-psysenper-43').disabled = true;
          document.getElementById('o-psysenper-44').disabled = true;
          showExplanation4()
          localStorage.setItem('psysenper4', 0)
        }
        if (document.getElementById('o-psysenper-42').checked) {
          document.getElementById('r-psysenper-42').style.color = 'red'
          document.getElementById('r-psysenper-42').innerHTML = 'Incorrect!'
          document.getElementById('r-psysenper-44').style.color = 'blue'
          document.getElementById('r-psysenper-44').innerHTML = 'Correct!'
          
          document.getElementById('b-psysenper-44').classList.add("correct")
          document.getElementById('b-psysenper-41').classList.add("incorrect")
          document.getElementById('b-psysenper-42').classList.add("incorrect")
          document.getElementById('b-psysenper-43').classList.add("incorrect")
    
          document.getElementById('sa-psysenper-4').disabled = true;
          document.getElementById('o-psysenper-41').disabled = true;
          document.getElementById('o-psysenper-42').disabled = true;
          document.getElementById('o-psysenper-43').disabled = true;
          document.getElementById('o-psysenper-44').disabled = true;
          showExplanation4()
          localStorage.setItem('psysenper4', 0)
        }
        if (document.getElementById('o-psysenper-43').checked) {
          document.getElementById('r-psysenper-43').style.color = 'red'
          document.getElementById('r-psysenper-43').innerHTML = 'Incorrect!'
          document.getElementById('r-psysenper-44').style.color = 'blue'
          document.getElementById('r-psysenper-44').innerHTML = 'Correct!'
          
          document.getElementById('b-psysenper-44').classList.add("correct")
          document.getElementById('b-psysenper-41').classList.add("incorrect")
          document.getElementById('b-psysenper-42').classList.add("incorrect")
          document.getElementById('b-psysenper-43').classList.add("incorrect")
    
          document.getElementById('sa-psysenper-4').disabled = true;
          document.getElementById('o-psysenper-41').disabled = true;
          document.getElementById('o-psysenper-42').disabled = true;
          document.getElementById('o-psysenper-43').disabled = true;
          document.getElementById('o-psysenper-44').disabled = true;
          showExplanation4()
          localStorage.setItem('psysenper4', 0)
        }
        if (document.getElementById('o-psysenper-44').checked) {
          document.getElementById('r-psysenper-44').style.color = 'blue'
          document.getElementById('r-psysenper-44').innerHTML = 'Correct!'
          
          document.getElementById('b-psysenper-44').classList.add("correct")
          document.getElementById('b-psysenper-41').classList.add("incorrect")
          document.getElementById('b-psysenper-42').classList.add("incorrect")
          document.getElementById('b-psysenper-43').classList.add("incorrect")
    
          document.getElementById('sa-psysenper-4').disabled = true;
          document.getElementById('o-psysenper-41').disabled = true;
          document.getElementById('o-psysenper-42').disabled = true;
          document.getElementById('o-psysenper-43').disabled = true;
          document.getElementById('o-psysenper-44').disabled = true;
          showExplanation4()
          localStorage.setItem('psysenper4', 1)
        }
      }
    }
    
    if (document.getElementById('sa-psysenper-5') != null) {
      psysenper5But.onclick = function() {
        if (document.getElementById('o-psysenper-51').checked) {
          document.getElementById('r-psysenper-51').style.color = 'red'
          document.getElementById('r-psysenper-51').innerHTML = 'Incorrect!'
          document.getElementById('r-psysenper-53').style.color = 'blue'
          document.getElementById('r-psysenper-53').innerHTML = 'Correct!'
          
          document.getElementById('b-psysenper-53').classList.add("correct")
          document.getElementById('b-psysenper-51').classList.add("incorrect")
          document.getElementById('b-psysenper-52').classList.add("incorrect")
          document.getElementById('b-psysenper-54').classList.add("incorrect")
    
          document.getElementById('sa-psysenper-5').disabled = true;
          document.getElementById('o-psysenper-51').disabled = true;
          document.getElementById('o-psysenper-52').disabled = true;
          document.getElementById('o-psysenper-53').disabled = true;
          document.getElementById('o-psysenper-54').disabled = true;
          showExplanation5()
          localStorage.setItem('psysenper5', 0)
        }
        if (document.getElementById('o-psysenper-52').checked) {
          document.getElementById('r-psysenper-52').style.color = 'red'
          document.getElementById('r-psysenper-52').innerHTML = 'Incorrect!'
          document.getElementById('r-psysenper-53').style.color = 'blue'
          document.getElementById('r-psysenper-53').innerHTML = 'Correct!'
          
          document.getElementById('b-psysenper-53').classList.add("correct")
          document.getElementById('b-psysenper-51').classList.add("incorrect")
          document.getElementById('b-psysenper-52').classList.add("incorrect")
          document.getElementById('b-psysenper-54').classList.add("incorrect")
    
          document.getElementById('sa-psysenper-5').disabled = true;
          document.getElementById('o-psysenper-51').disabled = true;
          document.getElementById('o-psysenper-52').disabled = true;
          document.getElementById('o-psysenper-53').disabled = true;
          document.getElementById('o-psysenper-54').disabled = true;
          showExplanation5()
          localStorage.setItem('psysenper5', 0)
        }
        if (document.getElementById('o-psysenper-53').checked) {
          document.getElementById('r-psysenper-53').style.color = 'blue'
          document.getElementById('r-psysenper-53').innerHTML = 'Correct!'
          
          document.getElementById('b-psysenper-53').classList.add("correct")
          document.getElementById('b-psysenper-51').classList.add("incorrect")
          document.getElementById('b-psysenper-52').classList.add("incorrect")
          document.getElementById('b-psysenper-54').classList.add("incorrect")
    
          document.getElementById('sa-psysenper-5').disabled = true;
          document.getElementById('o-psysenper-51').disabled = true;
          document.getElementById('o-psysenper-52').disabled = true;
          document.getElementById('o-psysenper-53').disabled = true;
          document.getElementById('o-psysenper-54').disabled = true;
          showExplanation5()
          localStorage.setItem('psysenper5', 1)
        }
        if (document.getElementById('o-psysenper-54').checked) {
          document.getElementById('r-psysenper-54').style.color = 'red'
          document.getElementById('r-psysenper-54').innerHTML = 'Incorrect!'
          document.getElementById('r-psysenper-53').style.color = 'blue'
          document.getElementById('r-psysenper-53').innerHTML = 'Correct!'
          
          document.getElementById('b-psysenper-53').classList.add("correct")
          document.getElementById('b-psysenper-51').classList.add("incorrect")
          document.getElementById('b-psysenper-52').classList.add("incorrect")
          document.getElementById('b-psysenper-54').classList.add("incorrect")
    
          document.getElementById('sa-psysenper-5').disabled = true;
          document.getElementById('o-psysenper-51').disabled = true;
          document.getElementById('o-psysenper-52').disabled = true;
          document.getElementById('o-psysenper-53').disabled = true;
          document.getElementById('o-psysenper-54').disabled = true;
          showExplanation5()
          localStorage.setItem('psysenper5', 0)
        }
      }
    }
        
         
      if (document.getElementById('sa-psysenper-6') != null) {
      psysenper6But.onclick = function() {
        if (document.getElementById('o-psysenper-61').checked) {
          document.getElementById('r-psysenper-61').style.color = 'red'
          document.getElementById('r-psysenper-61').innerHTML = 'Incorrect!'
          document.getElementById('r-psysenper-64').style.color = 'blue'
          document.getElementById('r-psysenper-64').innerHTML = 'Correct!'
          
          document.getElementById('b-psysenper-64').classList.add("correct")
          document.getElementById('b-psysenper-61').classList.add("incorrect")
          document.getElementById('b-psysenper-62').classList.add("incorrect")
          document.getElementById('b-psysenper-63').classList.add("incorrect")
    
          document.getElementById('sa-psysenper-6').disabled = true;
          document.getElementById('o-psysenper-61').disabled = true;
          document.getElementById('o-psysenper-62').disabled = true;
          document.getElementById('o-psysenper-63').disabled = true;
          document.getElementById('o-psysenper-64').disabled = true;
          showExplanation6()
          localStorage.setItem('psysenper6', 0)
        }
        if (document.getElementById('o-psysenper-62').checked) {
          document.getElementById('r-psysenper-62').style.color = 'red'
          document.getElementById('r-psysenper-62').innerHTML = 'Incorrect!'
          document.getElementById('r-psysenper-64').style.color = 'blue'
          document.getElementById('r-psysenper-64').innerHTML = 'Correct!'
          
          document.getElementById('b-psysenper-64').classList.add("correct")
          document.getElementById('b-psysenper-61').classList.add("incorrect")
          document.getElementById('b-psysenper-62').classList.add("incorrect")
          document.getElementById('b-psysenper-63').classList.add("incorrect")
    
          document.getElementById('sa-psysenper-6').disabled = true;
          document.getElementById('o-psysenper-61').disabled = true;
          document.getElementById('o-psysenper-62').disabled = true;
          document.getElementById('o-psysenper-63').disabled = true;
          document.getElementById('o-psysenper-64').disabled = true;
          showExplanation6()
          localStorage.setItem('psysenper6', 0)
        }
        if (document.getElementById('o-psysenper-63').checked) {
          document.getElementById('r-psysenper-63').style.color = 'red'
          document.getElementById('r-psysenper-63').innerHTML = 'Incorrect!'
          document.getElementById('r-psysenper-64').style.color = 'blue'
          document.getElementById('r-psysenper-64').innerHTML = 'Correct!'
          
          document.getElementById('b-psysenper-64').classList.add("correct")
          document.getElementById('b-psysenper-61').classList.add("incorrect")
          document.getElementById('b-psysenper-62').classList.add("incorrect")
          document.getElementById('b-psysenper-63').classList.add("incorrect")
    
          document.getElementById('sa-psysenper-6').disabled = true;
          document.getElementById('o-psysenper-61').disabled = true;
          document.getElementById('o-psysenper-62').disabled = true;
          document.getElementById('o-psysenper-63').disabled = true;
          document.getElementById('o-psysenper-64').disabled = true;
          showExplanation6()
          localStorage.setItem('psysenper6', 0)
        }
        if (document.getElementById('o-psysenper-64').checked) {
          document.getElementById('r-psysenper-64').style.color = 'blue'
          document.getElementById('r-psysenper-64').innerHTML = 'Correct!'
          
          document.getElementById('b-psysenper-64').classList.add("correct")
          document.getElementById('b-psysenper-61').classList.add("incorrect")
          document.getElementById('b-psysenper-62').classList.add("incorrect")
          document.getElementById('b-psysenper-63').classList.add("incorrect")
    
          document.getElementById('sa-psysenper-6').disabled = true;
          document.getElementById('o-psysenper-61').disabled = true;
          document.getElementById('o-psysenper-62').disabled = true;
          document.getElementById('o-psysenper-63').disabled = true;
          document.getElementById('o-psysenper-64').disabled = true;
          showExplanation6()
          localStorage.setItem('psysenper6', 1)
        }
      }
    }
    
    if (document.getElementById('sa-psysenper-7') != null) {
      psysenper7But.onclick = function() {
        if (document.getElementById('o-psysenper-71').checked) {
          document.getElementById('r-psysenper-71').style.color = 'red'
          document.getElementById('r-psysenper-71').innerHTML = 'Incorrect!'
          document.getElementById('r-psysenper-74').style.color = 'blue'
          document.getElementById('r-psysenper-74').innerHTML = 'Correct!'
          
          document.getElementById('b-psysenper-74').classList.add("correct")
          document.getElementById('b-psysenper-71').classList.add("incorrect")
          document.getElementById('b-psysenper-72').classList.add("incorrect")
          document.getElementById('b-psysenper-73').classList.add("incorrect")
    
          document.getElementById('sa-psysenper-7').disabled = true;
          document.getElementById('o-psysenper-71').disabled = true;
          document.getElementById('o-psysenper-72').disabled = true;
          document.getElementById('o-psysenper-73').disabled = true;
          document.getElementById('o-psysenper-74').disabled = true;
          showExplanation7()
          localStorage.setItem('psysenper7', 0)
        }
        if (document.getElementById('o-psysenper-72').checked) {
          document.getElementById('r-psysenper-72').style.color = 'red'
          document.getElementById('r-psysenper-72').innerHTML = 'Incorrect!'
          document.getElementById('r-psysenper-74').style.color = 'blue'
          document.getElementById('r-psysenper-74').innerHTML = 'Correct!'
          
          document.getElementById('b-psysenper-74').classList.add("correct")
          document.getElementById('b-psysenper-71').classList.add("incorrect")
          document.getElementById('b-psysenper-72').classList.add("incorrect")
          document.getElementById('b-psysenper-73').classList.add("incorrect")
    
          document.getElementById('sa-psysenper-7').disabled = true;
          document.getElementById('o-psysenper-71').disabled = true;
          document.getElementById('o-psysenper-72').disabled = true;
          document.getElementById('o-psysenper-73').disabled = true;
          document.getElementById('o-psysenper-74').disabled = true;
          showExplanation7()
          localStorage.setItem('psysenper7', 0)
        }
        if (document.getElementById('o-psysenper-73').checked) {
          document.getElementById('r-psysenper-73').style.color = 'red'
          document.getElementById('r-psysenper-73').innerHTML = 'Incorrect!'
          document.getElementById('r-psysenper-74').style.color = 'blue'
          document.getElementById('r-psysenper-74').innerHTML = 'Correct!'
          
          document.getElementById('b-psysenper-74').classList.add("correct")
          document.getElementById('b-psysenper-71').classList.add("incorrect")
          document.getElementById('b-psysenper-72').classList.add("incorrect")
          document.getElementById('b-psysenper-73').classList.add("incorrect")
    
          document.getElementById('sa-psysenper-7').disabled = true;
          document.getElementById('o-psysenper-71').disabled = true;
          document.getElementById('o-psysenper-72').disabled = true;
          document.getElementById('o-psysenper-73').disabled = true;
          document.getElementById('o-psysenper-74').disabled = true;
          showExplanation7()
          localStorage.setItem('psysenper7', 0)
        }
        if (document.getElementById('o-psysenper-74').checked) {
          document.getElementById('r-psysenper-74').style.color = 'blue'
          document.getElementById('r-psysenper-74').innerHTML = 'Correct!'
          
          document.getElementById('b-psysenper-74').classList.add("correct")
          document.getElementById('b-psysenper-71').classList.add("incorrect")
          document.getElementById('b-psysenper-72').classList.add("incorrect")
          document.getElementById('b-psysenper-73').classList.add("incorrect")
    
          document.getElementById('sa-psysenper-7').disabled = true;
          document.getElementById('o-psysenper-71').disabled = true;
          document.getElementById('o-psysenper-72').disabled = true;
          document.getElementById('o-psysenper-73').disabled = true;
          document.getElementById('o-psysenper-74').disabled = true;
          showExplanation7()
          localStorage.setItem('psysenper7', 1)
        }
      }
    }
    
    
    if (document.getElementById('sa-psysenper-8') != null) {
      psysenper8But.onclick = function() {
        if (document.getElementById('o-psysenper-81').checked) {
          document.getElementById('r-psysenper-81').style.color = 'red'
          document.getElementById('r-psysenper-81').innerHTML = 'Incorrect!'
          document.getElementById('r-psysenper-82').style.color = 'blue'
          document.getElementById('r-psysenper-82').innerHTML = 'Correct!'
          
          document.getElementById('b-psysenper-82').classList.add("correct")
          document.getElementById('b-psysenper-81').classList.add("incorrect")
          document.getElementById('b-psysenper-83').classList.add("incorrect")
          document.getElementById('b-psysenper-84').classList.add("incorrect")
    
          document.getElementById('sa-psysenper-8').disabled = true;
          document.getElementById('o-psysenper-81').disabled = true;
          document.getElementById('o-psysenper-82').disabled = true;
          document.getElementById('o-psysenper-83').disabled = true;
          document.getElementById('o-psysenper-84').disabled = true;
          showExplanation8()
          localStorage.setItem('psysenper8', 0)
        }
        if (document.getElementById('o-psysenper-82').checked) {
          document.getElementById('r-psysenper-82').style.color = 'blue'
          document.getElementById('r-psysenper-82').innerHTML = 'Correct!'
          
          document.getElementById('b-psysenper-82').classList.add("correct")
          document.getElementById('b-psysenper-81').classList.add("incorrect")
          document.getElementById('b-psysenper-83').classList.add("incorrect")
          document.getElementById('b-psysenper-84').classList.add("incorrect")
    
          document.getElementById('sa-psysenper-8').disabled = true;
          document.getElementById('o-psysenper-81').disabled = true;
          document.getElementById('o-psysenper-82').disabled = true;
          document.getElementById('o-psysenper-83').disabled = true;
          document.getElementById('o-psysenper-84').disabled = true;
          showExplanation8()
          localStorage.setItem('psysenper8', 1)
        }
        if (document.getElementById('o-psysenper-83').checked) {
          document.getElementById('r-psysenper-83').style.color = 'red'
          document.getElementById('r-psysenper-83').innerHTML = 'Incorrect!'
          document.getElementById('r-psysenper-82').style.color = 'blue'
          document.getElementById('r-psysenper-82').innerHTML = 'Correct!'
          
          document.getElementById('b-psysenper-82').classList.add("correct")
          document.getElementById('b-psysenper-81').classList.add("incorrect")
          document.getElementById('b-psysenper-83').classList.add("incorrect")
          document.getElementById('b-psysenper-84').classList.add("incorrect")
    
          document.getElementById('sa-psysenper-8').disabled = true;
          document.getElementById('o-psysenper-81').disabled = true;
          document.getElementById('o-psysenper-82').disabled = true;
          document.getElementById('o-psysenper-83').disabled = true;
          document.getElementById('o-psysenper-84').disabled = true;
          showExplanation8()
          localStorage.setItem('psysenper8', 0)
        }
        if (document.getElementById('o-psysenper-84').checked) {
          document.getElementById('r-psysenper-84').style.color = 'red'
          document.getElementById('r-psysenper-84').innerHTML = 'Incorrect!'
          document.getElementById('r-psysenper-82').style.color = 'blue'
          document.getElementById('r-psysenper-82').innerHTML = 'Correct!'
          
          document.getElementById('b-psysenper-82').classList.add("correct")
          document.getElementById('b-psysenper-81').classList.add("incorrect")
          document.getElementById('b-psysenper-83').classList.add("incorrect")
          document.getElementById('b-psysenper-84').classList.add("incorrect")
    
          document.getElementById('sa-psysenper-8').disabled = true;
          document.getElementById('o-psysenper-81').disabled = true;
          document.getElementById('o-psysenper-82').disabled = true;
          document.getElementById('o-psysenper-83').disabled = true;
          document.getElementById('o-psysenper-84').disabled = true;
          showExplanation8()
          localStorage.setItem('psysenper8', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-psysenper-9') != null) {
      psysenper9But.onclick = function() {
        if (document.getElementById('o-psysenper-91').checked) {
          document.getElementById('r-psysenper-91').style.color = 'red'
          document.getElementById('r-psysenper-91').innerHTML = 'Incorrect!'
          document.getElementById('r-psysenper-94').style.color = 'blue'
          document.getElementById('r-psysenper-94').innerHTML = 'Correct!'
          
          document.getElementById('b-psysenper-94').classList.add("correct")
          document.getElementById('b-psysenper-91').classList.add("incorrect")
          document.getElementById('b-psysenper-92').classList.add("incorrect")
          document.getElementById('b-psysenper-93').classList.add("incorrect")
    
          document.getElementById('sa-psysenper-9').disabled = true;
          document.getElementById('o-psysenper-91').disabled = true;
          document.getElementById('o-psysenper-92').disabled = true;
          document.getElementById('o-psysenper-93').disabled = true;
          document.getElementById('o-psysenper-94').disabled = true;
          showExplanation9()
          localStorage.setItem('psysenper9', 0)
        }
        if (document.getElementById('o-psysenper-92').checked) {
          document.getElementById('r-psysenper-91').style.color = 'red'
          document.getElementById('r-psysenper-91').innerHTML = 'Incorrect!'
          document.getElementById('r-psysenper-94').style.color = 'blue'
          document.getElementById('r-psysenper-94').innerHTML = 'Correct!'
          
          document.getElementById('b-psysenper-94').classList.add("correct")
          document.getElementById('b-psysenper-91').classList.add("incorrect")
          document.getElementById('b-psysenper-92').classList.add("incorrect")
          document.getElementById('b-psysenper-93').classList.add("incorrect")
    
          document.getElementById('sa-psysenper-9').disabled = true;
          document.getElementById('o-psysenper-91').disabled = true;
          document.getElementById('o-psysenper-92').disabled = true;
          document.getElementById('o-psysenper-93').disabled = true;
          document.getElementById('o-psysenper-94').disabled = true;
          showExplanation9()
          localStorage.setItem('psysenper9', 0)
        }
        if (document.getElementById('o-psysenper-93').checked) {
          document.getElementById('r-psysenper-91').style.color = 'red'
          document.getElementById('r-psysenper-91').innerHTML = 'Incorrect!'
          document.getElementById('r-psysenper-94').style.color = 'blue'
          document.getElementById('r-psysenper-94').innerHTML = 'Correct!'
          
          document.getElementById('b-psysenper-94').classList.add("correct")
          document.getElementById('b-psysenper-91').classList.add("incorrect")
          document.getElementById('b-psysenper-92').classList.add("incorrect")
          document.getElementById('b-psysenper-93').classList.add("incorrect")
    
          document.getElementById('sa-psysenper-9').disabled = true;
          document.getElementById('o-psysenper-91').disabled = true;
          document.getElementById('o-psysenper-92').disabled = true;
          document.getElementById('o-psysenper-93').disabled = true;
          document.getElementById('o-psysenper-94').disabled = true;
          showExplanation9()
          localStorage.setItem('psysenper9', 0)
        }
        if (document.getElementById('o-psysenper-94').checked) {
          document.getElementById('r-psysenper-94').style.color = 'blue'
          document.getElementById('r-psysenper-94').innerHTML = 'Correct!'
          
          document.getElementById('b-psysenper-94').classList.add("correct")
          document.getElementById('b-psysenper-91').classList.add("incorrect")
          document.getElementById('b-psysenper-92').classList.add("incorrect")
          document.getElementById('b-psysenper-93').classList.add("incorrect")
    
          document.getElementById('sa-psysenper-9').disabled = true;
          document.getElementById('o-psysenper-91').disabled = true;
          document.getElementById('o-psysenper-92').disabled = true;
          document.getElementById('o-psysenper-93').disabled = true;
          document.getElementById('o-psysenper-94').disabled = true;
          showExplanation9()
          localStorage.setItem('psysenper9', 1)
        }
      }
    }
    
    if (document.getElementById('sa-psysenper-10') != null) {
      psysenper10But.onclick = function() {
        if (document.getElementById('o-psysenper-101').checked) {
          document.getElementById('r-psysenper-101').style.color = 'red'
          document.getElementById('r-psysenper-101').innerHTML = 'Incorrect!'
          document.getElementById('r-psysenper-102').style.color = 'blue'
          document.getElementById('r-psysenper-102').innerHTML = 'Correct!'
          
          document.getElementById('b-psysenper-102').classList.add("correct")
          document.getElementById('b-psysenper-101').classList.add("incorrect")
          document.getElementById('b-psysenper-103').classList.add("incorrect")
          document.getElementById('b-psysenper-104').classList.add("incorrect")
    
          document.getElementById('sa-psysenper-10').disabled = true;
          document.getElementById('o-psysenper-101').disabled = true;
          document.getElementById('o-psysenper-102').disabled = true;
          document.getElementById('o-psysenper-103').disabled = true;
          document.getElementById('o-psysenper-104').disabled = true;
          showExplanation10()
          localStorage.setItem('psysenper10', 0)
        }
        if (document.getElementById('o-psysenper-102').checked) {
          document.getElementById('r-psysenper-102').style.color = 'blue'
          document.getElementById('r-psysenper-102').innerHTML = 'Correct!'
          
          document.getElementById('b-psysenper-102').classList.add("correct")
          document.getElementById('b-psysenper-101').classList.add("incorrect")
          document.getElementById('b-psysenper-103').classList.add("incorrect")
          document.getElementById('b-psysenper-104').classList.add("incorrect")
    
          document.getElementById('sa-psysenper-10').disabled = true;
          document.getElementById('o-psysenper-101').disabled = true;
          document.getElementById('o-psysenper-102').disabled = true;
          document.getElementById('o-psysenper-103').disabled = true;
          document.getElementById('o-psysenper-104').disabled = true;
          showExplanation10()
          localStorage.setItem('psysenper10', 1)
        }
        if (document.getElementById('o-psysenper-103').checked) {
          document.getElementById('r-psysenper-103').style.color = 'red'
          document.getElementById('r-psysenper-103').innerHTML = 'Incorrect!'
          document.getElementById('r-psysenper-102').style.color = 'blue'
          document.getElementById('r-psysenper-102').innerHTML = 'Correct!'
          
          document.getElementById('b-psysenper-102').classList.add("correct")
          document.getElementById('b-psysenper-101').classList.add("incorrect")
          document.getElementById('b-psysenper-103').classList.add("incorrect")
          document.getElementById('b-psysenper-104').classList.add("incorrect")
    
          document.getElementById('sa-psysenper-10').disabled = true;
          document.getElementById('o-psysenper-101').disabled = true;
          document.getElementById('o-psysenper-102').disabled = true;
          document.getElementById('o-psysenper-103').disabled = true;
          document.getElementById('o-psysenper-104').disabled = true;
          showExplanation10()
          localStorage.setItem('psysenper10', 0)
        }
        if (document.getElementById('o-psysenper-104').checked) {
          document.getElementById('r-psysenper-104').style.color = 'red'
          document.getElementById('r-psysenper-104').innerHTML = 'Incorrect!'
          document.getElementById('r-psysenper-102').style.color = 'blue'
          document.getElementById('r-psysenper-102').innerHTML = 'Correct!'
          
          document.getElementById('b-psysenper-102').classList.add("correct")
          document.getElementById('b-psysenper-101').classList.add("incorrect")
          document.getElementById('b-psysenper-103').classList.add("incorrect")
          document.getElementById('b-psysenper-104').classList.add("incorrect")
    
          document.getElementById('sa-psysenper-10').disabled = true;
          document.getElementById('o-psysenper-101').disabled = true;
          document.getElementById('o-psysenper-102').disabled = true;
          document.getElementById('o-psysenper-103').disabled = true;
          document.getElementById('o-psysenper-104').disabled = true;
          showExplanation10()
          localStorage.setItem('psysenper10', 0)
        }
      }
    }
    