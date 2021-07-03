
  let trigbastrirat1But = document.getElementById('sa-trigbastrirat-1');
  let trigbastrirat2But = document.getElementById('sa-trigbastrirat-2');
  let trigbastrirat3But = document.getElementById('sa-trigbastrirat-3');
  let trigbastrirat4But = document.getElementById('sa-trigbastrirat-4');
  let trigbastrirat5But = document.getElementById('sa-trigbastrirat-5');
  let trigbastrirat6But = document.getElementById('sa-trigbastrirat-6');
  let trigbastrirat7But = document.getElementById('sa-trigbastrirat-7');
  let trigbastrirat8But = document.getElementById('sa-trigbastrirat-8');
  let trigbastrirat9But = document.getElementById('sa-trigbastrirat-9');
  let trigbastrirat10But = document.getElementById('sa-trigbastrirat-10');


  showExplanation1 = function() {
    document.getElementById('e-trigbastrirat-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-trigbastrirat-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-trigbastrirat-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-trigbastrirat-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-trigbastrirat-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-trigbastrirat-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-trigbastrirat-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-trigbastrirat-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-trigbastrirat-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-trigbastrirat-10').style.display = 'block';
     } 



     if (document.getElementById('sa-trigbastrirat-1') != null) {
      trigbastrirat1But.onclick = function () {
        if (document.getElementById('o-trigbastrirat-11').checked) {
          document.getElementById('r-trigbastrirat-11').style.color = 'blue'
          document.getElementById('r-trigbastrirat-11').innerHTML = 'Correct!'
    
          document.getElementById('b-trigbastrirat-11').classList.add("correct")
          document.getElementById('b-trigbastrirat-12').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-13').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-14').classList.add("incorrect")
    
          document.getElementById('sa-trigbastrirat-1').disabled = true;
          document.getElementById('o-trigbastrirat-11').disabled = true;
          document.getElementById('o-trigbastrirat-12').disabled = true;
          document.getElementById('o-trigbastrirat-13').disabled = true;
          document.getElementById('o-trigbastrirat-14').disabled = true;
          showExplanation1()
          localStorage.setItem('trigbastrirat1', 1)
        }
    
        if (document.getElementById('o-trigbastrirat-12').checked) {
         
          document.getElementById('r-trigbastrirat-12').style.color = 'red'
          document.getElementById('r-trigbastrirat-12').innerHTML = 'Incorrect!'
          document.getElementById('r-trigbastrirat-11').style.color = 'blue'
          document.getElementById('r-trigbastrirat-11').innerHTML = 'Correct!'
    
          document.getElementById('b-trigbastrirat-11').classList.add("correct")
          document.getElementById('b-trigbastrirat-12').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-13').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-14').classList.add("incorrect")
    
          document.getElementById('sa-trigbastrirat-1').disabled = true;
          document.getElementById('o-trigbastrirat-11').disabled = true;
          document.getElementById('o-trigbastrirat-12').disabled = true;
          document.getElementById('o-trigbastrirat-13').disabled = true;
          document.getElementById('o-trigbastrirat-14').disabled = true;
          showExplanation1()
          localStorage.setItem('trigbastrirat1', 0)
        }
        if (document.getElementById('o-trigbastrirat-13').checked) {
          document.getElementById('r-trigbastrirat-13').style.color = 'red'
          document.getElementById('r-trigbastrirat-13').innerHTML = 'Incorrect!'
          document.getElementById('r-trigbastrirat-11').style.color = 'blue'
          document.getElementById('r-trigbastrirat-11').innerHTML = 'Correct!'
          
          document.getElementById('b-trigbastrirat-11').classList.add("correct")
          document.getElementById('b-trigbastrirat-12').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-13').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-14').classList.add("incorrect")
    
          document.getElementById('sa-trigbastrirat-1').disabled = true;
          document.getElementById('o-trigbastrirat-11').disabled = true;
          document.getElementById('o-trigbastrirat-12').disabled = true;
          document.getElementById('o-trigbastrirat-13').disabled = true;
          document.getElementById('o-trigbastrirat-14').disabled = true;
          showExplanation1()
          localStorage.setItem('trigbastrirat1', 0)
        }
        if (document.getElementById('o-trigbastrirat-14').checked) {
          document.getElementById('r-trigbastrirat-14').style.color = 'red'
          document.getElementById('r-trigbastrirat-14').innerHTML = 'Incorrect!'
          document.getElementById('r-trigbastrirat-11').style.color = 'blue'
          document.getElementById('r-trigbastrirat-11').innerHTML = 'Correct!'
          
          document.getElementById('b-trigbastrirat-11').classList.add("correct")
          document.getElementById('b-trigbastrirat-12').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-13').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-14').classList.add("incorrect")
    
          document.getElementById('sa-trigbastrirat-1').disabled = true;
          document.getElementById('o-trigbastrirat-11').disabled = true;
          document.getElementById('o-trigbastrirat-12').disabled = true;
          document.getElementById('o-trigbastrirat-13').disabled = true;
          document.getElementById('o-trigbastrirat-14').disabled = true;
          showExplanation1()
          localStorage.setItem('trigbastrirat1', 0)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-trigbastrirat-2') != null) {
      trigbastrirat2But.onclick = function() {
        if (document.getElementById('o-trigbastrirat-21').checked) {
          document.getElementById('r-trigbastrirat-21').style.color = 'blue'
          document.getElementById('r-trigbastrirat-21').innerHTML = 'Correct!'
          
          document.getElementById('b-trigbastrirat-21').classList.add("correct")
          document.getElementById('b-trigbastrirat-21').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-23').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-24').classList.add("incorrect")
    
          document.getElementById('sa-trigbastrirat-2').disabled = true;
          document.getElementById('o-trigbastrirat-21').disabled = true;
          document.getElementById('o-trigbastrirat-22').disabled = true;
          document.getElementById('o-trigbastrirat-23').disabled = true;
          document.getElementById('o-trigbastrirat-24').disabled = true;
          showExplanation2()
          localStorage.setItem('trigbastrirat2', 1)
        }
        if (document.getElementById('o-trigbastrirat-22').checked) {
          document.getElementById('r-trigbastrirat-22').style.color = 'red'
          document.getElementById('r-trigbastrirat-22').innerHTML = 'Incorrect!'
          document.getElementById('r-trigbastrirat-21').style.color = 'blue'
          document.getElementById('r-trigbastrirat-21').innerHTML = 'Correct!'
          
          document.getElementById('b-trigbastrirat-21').classList.add("correct")
          document.getElementById('b-trigbastrirat-22').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-23').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-24').classList.add("incorrect")
    
          document.getElementById('sa-trigbastrirat-2').disabled = true;
          document.getElementById('o-trigbastrirat-21').disabled = true;
          document.getElementById('o-trigbastrirat-22').disabled = true;
          document.getElementById('o-trigbastrirat-23').disabled = true;
          document.getElementById('o-trigbastrirat-24').disabled = true;
          showExplanation2()
          localStorage.setItem('trigbastrirat2', 0)
        }
        if (document.getElementById('o-trigbastrirat-23').checked) {
          document.getElementById('r-trigbastrirat-23').style.color = 'red'
          document.getElementById('r-trigbastrirat-23').innerHTML = 'Incorrect!'
          document.getElementById('r-trigbastrirat-21').style.color = 'blue'
          document.getElementById('r-trigbastrirat-21').innerHTML = 'Correct!'
          
          document.getElementById('b-trigbastrirat-21').classList.add("correct")
          document.getElementById('b-trigbastrirat-22').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-23').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-24').classList.add("incorrect")
    
          document.getElementById('sa-trigbastrirat-2').disabled = true;
          document.getElementById('o-trigbastrirat-21').disabled = true;
          document.getElementById('o-trigbastrirat-22').disabled = true;
          document.getElementById('o-trigbastrirat-23').disabled = true;
          document.getElementById('o-trigbastrirat-24').disabled = true;
          showExplanation2()
          localStorage.setItem('trigbastrirat2', 0)
        }
        if (document.getElementById('o-trigbastrirat-24').checked) {
          document.getElementById('r-trigbastrirat-24').style.color = 'red'
          document.getElementById('r-trigbastrirat-24').innerHTML = 'Incorrect!'
          document.getElementById('r-trigbastrirat-21').style.color = 'blue'
          document.getElementById('r-trigbastrirat-21').innerHTML = 'Correct!'
          
          document.getElementById('b-trigbastrirat-21').classList.add("correct")
          document.getElementById('b-trigbastrirat-23').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-22').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-24').classList.add("incorrect")
    
          document.getElementById('sa-trigbastrirat-2').disabled = true;
          document.getElementById('o-trigbastrirat-21').disabled = true;
          document.getElementById('o-trigbastrirat-22').disabled = true;
          document.getElementById('o-trigbastrirat-23').disabled = true;
          document.getElementById('o-trigbastrirat-24').disabled = true;
          showExplanation2()
          localStorage.setItem('trigbastrirat2', 0)
        }
      }
    }
    
    if (document.getElementById('sa-trigbastrirat-3') != null) {
      trigbastrirat3But.onclick = function() {
        if (document.getElementById('o-trigbastrirat-31').checked) {
          document.getElementById('r-trigbastrirat-31').style.color = 'blue'
          document.getElementById('r-trigbastrirat-31').innerHTML = 'Correct!'
          
          document.getElementById('b-trigbastrirat-31').classList.add("correct")
          document.getElementById('b-trigbastrirat-32').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-33').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-34').classList.add("incorrect")
    
          document.getElementById('sa-trigbastrirat-3').disabled = true;
          document.getElementById('o-trigbastrirat-31').disabled = true;
          document.getElementById('o-trigbastrirat-32').disabled = true;
          document.getElementById('o-trigbastrirat-33').disabled = true;
          document.getElementById('o-trigbastrirat-34').disabled = true;
          showExplanation3()
          localStorage.setItem('trigbastrirat3', 1)
        }
        if (document.getElementById('o-trigbastrirat-32').checked) {
          document.getElementById('r-trigbastrirat-32').style.color = 'red'
          document.getElementById('r-trigbastrirat-32').innerHTML = 'Incorrect!'
          document.getElementById('r-trigbastrirat-31').style.color = 'blue'
          document.getElementById('r-trigbastrirat-31').innerHTML = 'Correct!'
          
          document.getElementById('b-trigbastrirat-31').classList.add("correct")
          document.getElementById('b-trigbastrirat-32').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-33').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-34').classList.add("incorrect")
    
          document.getElementById('sa-trigbastrirat-3').disabled = true;
          document.getElementById('o-trigbastrirat-31').disabled = true;
          document.getElementById('o-trigbastrirat-32').disabled = true;
          document.getElementById('o-trigbastrirat-33').disabled = true;
          document.getElementById('o-trigbastrirat-34').disabled = true;
          showExplanation3()
          localStorage.setItem('trigbastrirat3', 0)
        }
        if (document.getElementById('o-trigbastrirat-33').checked) {
          document.getElementById('r-trigbastrirat-33').style.color = 'red'
          document.getElementById('r-trigbastrirat-33').innerHTML = 'Incorrect!'
          document.getElementById('r-trigbastrirat-31').style.color = 'blue'
          document.getElementById('r-trigbastrirat-31').innerHTML = 'Correct!'
          
          document.getElementById('b-trigbastrirat-31').classList.add("correct")
          document.getElementById('b-trigbastrirat-32').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-33').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-34').classList.add("incorrect")
    
          document.getElementById('sa-trigbastrirat-3').disabled = true;
          document.getElementById('o-trigbastrirat-31').disabled = true;
          document.getElementById('o-trigbastrirat-32').disabled = true;
          document.getElementById('o-trigbastrirat-33').disabled = true;
          document.getElementById('o-trigbastrirat-34').disabled = true;
          showExplanation3()
          localStorage.setItem('trigbastrirat3', 0)
        }
        if (document.getElementById('o-trigbastrirat-34').checked) {
          document.getElementById('r-trigbastrirat-34').style.color = 'red'
          document.getElementById('r-trigbastrirat-34').innerHTML = 'Incorrect!'
          document.getElementById('r-trigbastrirat-31').style.color = 'blue'
          document.getElementById('r-trigbastrirat-31').innerHTML = 'Correct!'
          
          document.getElementById('b-trigbastrirat-31').classList.add("correct")
          document.getElementById('b-trigbastrirat-32').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-33').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-34').classList.add("incorrect")
    
          document.getElementById('sa-trigbastrirat-3').disabled = true;
          document.getElementById('o-trigbastrirat-31').disabled = true;
          document.getElementById('o-trigbastrirat-32').disabled = true;
          document.getElementById('o-trigbastrirat-33').disabled = true;
          document.getElementById('o-trigbastrirat-34').disabled = true;
          showExplanation3()
          localStorage.setItem('trigbastrirat3', 0)
        }
      }
    }
    
    if (document.getElementById('sa-trigbastrirat-4') != null) {
      trigbastrirat4But.onclick = function() {
        if (document.getElementById('o-trigbastrirat-41').checked) {
          document.getElementById('r-trigbastrirat-41').style.color = 'red'
          document.getElementById('r-trigbastrirat-41').innerHTML = 'Incorrect!'
          document.getElementById('r-trigbastrirat-44').style.color = 'blue'
          document.getElementById('r-trigbastrirat-44').innerHTML = 'Correct!'
          
          document.getElementById('b-trigbastrirat-44').classList.add("correct")
          document.getElementById('b-trigbastrirat-41').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-42').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-43').classList.add("incorrect")
    
          document.getElementById('sa-trigbastrirat-4').disabled = true;
          document.getElementById('o-trigbastrirat-41').disabled = true;
          document.getElementById('o-trigbastrirat-42').disabled = true;
          document.getElementById('o-trigbastrirat-43').disabled = true;
          document.getElementById('o-trigbastrirat-44').disabled = true;
          showExplanation4()
          localStorage.setItem('trigbastrirat4', 0)
        }
        if (document.getElementById('o-trigbastrirat-42').checked) {
          document.getElementById('r-trigbastrirat-42').style.color = 'red'
          document.getElementById('r-trigbastrirat-42').innerHTML = 'Incorrect!'
          document.getElementById('r-trigbastrirat-44').style.color = 'blue'
          document.getElementById('r-trigbastrirat-44').innerHTML = 'Correct!'
          
          document.getElementById('b-trigbastrirat-44').classList.add("correct")
          document.getElementById('b-trigbastrirat-41').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-42').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-43').classList.add("incorrect")
    
          document.getElementById('sa-trigbastrirat-4').disabled = true;
          document.getElementById('o-trigbastrirat-41').disabled = true;
          document.getElementById('o-trigbastrirat-42').disabled = true;
          document.getElementById('o-trigbastrirat-43').disabled = true;
          document.getElementById('o-trigbastrirat-44').disabled = true;
          showExplanation4()
          localStorage.setItem('trigbastrirat4', 0)
        }
        if (document.getElementById('o-trigbastrirat-43').checked) {
          document.getElementById('r-trigbastrirat-43').style.color = 'red'
          document.getElementById('r-trigbastrirat-43').innerHTML = 'Incorrect!'
          document.getElementById('r-trigbastrirat-44').style.color = 'blue'
          document.getElementById('r-trigbastrirat-44').innerHTML = 'Correct!'
          
          document.getElementById('b-trigbastrirat-44').classList.add("correct")
          document.getElementById('b-trigbastrirat-41').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-42').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-43').classList.add("incorrect")
    
          document.getElementById('sa-trigbastrirat-4').disabled = true;
          document.getElementById('o-trigbastrirat-41').disabled = true;
          document.getElementById('o-trigbastrirat-42').disabled = true;
          document.getElementById('o-trigbastrirat-43').disabled = true;
          document.getElementById('o-trigbastrirat-44').disabled = true;
          showExplanation4()
          localStorage.setItem('trigbastrirat4', 0)
        }
        if (document.getElementById('o-trigbastrirat-44').checked) {
          document.getElementById('r-trigbastrirat-44').style.color = 'blue'
          document.getElementById('r-trigbastrirat-44').innerHTML = 'Correct!'
          
          document.getElementById('b-trigbastrirat-44').classList.add("correct")
          document.getElementById('b-trigbastrirat-41').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-42').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-43').classList.add("incorrect")
    
          document.getElementById('sa-trigbastrirat-4').disabled = true;
          document.getElementById('o-trigbastrirat-41').disabled = true;
          document.getElementById('o-trigbastrirat-42').disabled = true;
          document.getElementById('o-trigbastrirat-43').disabled = true;
          document.getElementById('o-trigbastrirat-44').disabled = true;
          showExplanation4()
          localStorage.setItem('trigbastrirat4', 1)
        }
      }
    }
    
    if (document.getElementById('sa-trigbastrirat-5') != null) {
      trigbastrirat5But.onclick = function() {
        if (document.getElementById('o-trigbastrirat-51').checked) {
          document.getElementById('r-trigbastrirat-51').style.color = 'red'
          document.getElementById('r-trigbastrirat-51').innerHTML = 'Incorrect!'
          document.getElementById('r-trigbastrirat-53').style.color = 'blue'
          document.getElementById('r-trigbastrirat-53').innerHTML = 'Correct!'
          
          document.getElementById('b-trigbastrirat-53').classList.add("correct")
          document.getElementById('b-trigbastrirat-51').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-52').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-54').classList.add("incorrect")
    
          document.getElementById('sa-trigbastrirat-5').disabled = true;
          document.getElementById('o-trigbastrirat-51').disabled = true;
          document.getElementById('o-trigbastrirat-52').disabled = true;
          document.getElementById('o-trigbastrirat-53').disabled = true;
          document.getElementById('o-trigbastrirat-54').disabled = true;
          showExplanation5()
          localStorage.setItem('trigbastrirat5', 0)
        }
        if (document.getElementById('o-trigbastrirat-52').checked) {
          document.getElementById('r-trigbastrirat-52').style.color = 'red'
          document.getElementById('r-trigbastrirat-52').innerHTML = 'Incorrect!'
          document.getElementById('r-trigbastrirat-53').style.color = 'blue'
          document.getElementById('r-trigbastrirat-53').innerHTML = 'Correct!'
          
          document.getElementById('b-trigbastrirat-53').classList.add("correct")
          document.getElementById('b-trigbastrirat-51').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-52').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-54').classList.add("incorrect")
    
          document.getElementById('sa-trigbastrirat-5').disabled = true;
          document.getElementById('o-trigbastrirat-51').disabled = true;
          document.getElementById('o-trigbastrirat-52').disabled = true;
          document.getElementById('o-trigbastrirat-53').disabled = true;
          document.getElementById('o-trigbastrirat-54').disabled = true;
          showExplanation5()
          localStorage.setItem('trigbastrirat5', 0)
        }
        if (document.getElementById('o-trigbastrirat-53').checked) {
          document.getElementById('r-trigbastrirat-53').style.color = 'blue'
          document.getElementById('r-trigbastrirat-53').innerHTML = 'Correct!'
          
          document.getElementById('b-trigbastrirat-53').classList.add("correct")
          document.getElementById('b-trigbastrirat-51').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-52').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-54').classList.add("incorrect")
    
          document.getElementById('sa-trigbastrirat-5').disabled = true;
          document.getElementById('o-trigbastrirat-51').disabled = true;
          document.getElementById('o-trigbastrirat-52').disabled = true;
          document.getElementById('o-trigbastrirat-53').disabled = true;
          document.getElementById('o-trigbastrirat-54').disabled = true;
          showExplanation5()
          localStorage.setItem('trigbastrirat5', 1)
        }
        if (document.getElementById('o-trigbastrirat-54').checked) {
          document.getElementById('r-trigbastrirat-54').style.color = 'red'
          document.getElementById('r-trigbastrirat-54').innerHTML = 'Incorrect!'
          document.getElementById('r-trigbastrirat-53').style.color = 'blue'
          document.getElementById('r-trigbastrirat-53').innerHTML = 'Correct!'
          
          document.getElementById('b-trigbastrirat-53').classList.add("correct")
          document.getElementById('b-trigbastrirat-51').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-52').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-54').classList.add("incorrect")
    
          document.getElementById('sa-trigbastrirat-5').disabled = true;
          document.getElementById('o-trigbastrirat-51').disabled = true;
          document.getElementById('o-trigbastrirat-52').disabled = true;
          document.getElementById('o-trigbastrirat-53').disabled = true;
          document.getElementById('o-trigbastrirat-54').disabled = true;
          showExplanation5()
          localStorage.setItem('trigbastrirat5', 0)
        }
      }
    }
        
         
      if (document.getElementById('sa-trigbastrirat-6') != null) {
      trigbastrirat6But.onclick = function() {
        if (document.getElementById('o-trigbastrirat-61').checked) {
          document.getElementById('r-trigbastrirat-61').style.color = 'red'
          document.getElementById('r-trigbastrirat-61').innerHTML = 'Incorrect!'
          document.getElementById('r-trigbastrirat-64').style.color = 'blue'
          document.getElementById('r-trigbastrirat-64').innerHTML = 'Correct!'
          
          document.getElementById('b-trigbastrirat-64').classList.add("correct")
          document.getElementById('b-trigbastrirat-61').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-62').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-63').classList.add("incorrect")
    
          document.getElementById('sa-trigbastrirat-6').disabled = true;
          document.getElementById('o-trigbastrirat-61').disabled = true;
          document.getElementById('o-trigbastrirat-62').disabled = true;
          document.getElementById('o-trigbastrirat-63').disabled = true;
          document.getElementById('o-trigbastrirat-64').disabled = true;
          showExplanation6()
          localStorage.setItem('trigbastrirat6', 0)
        }
        if (document.getElementById('o-trigbastrirat-62').checked) {
          document.getElementById('r-trigbastrirat-62').style.color = 'red'
          document.getElementById('r-trigbastrirat-62').innerHTML = 'Incorrect!'
          document.getElementById('r-trigbastrirat-64').style.color = 'blue'
          document.getElementById('r-trigbastrirat-64').innerHTML = 'Correct!'
          
          document.getElementById('b-trigbastrirat-64').classList.add("correct")
          document.getElementById('b-trigbastrirat-61').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-62').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-63').classList.add("incorrect")
    
          document.getElementById('sa-trigbastrirat-6').disabled = true;
          document.getElementById('o-trigbastrirat-61').disabled = true;
          document.getElementById('o-trigbastrirat-62').disabled = true;
          document.getElementById('o-trigbastrirat-63').disabled = true;
          document.getElementById('o-trigbastrirat-64').disabled = true;
          showExplanation6()
          localStorage.setItem('trigbastrirat6', 0)
        }
        if (document.getElementById('o-trigbastrirat-63').checked) {
          document.getElementById('r-trigbastrirat-63').style.color = 'red'
          document.getElementById('r-trigbastrirat-63').innerHTML = 'Incorrect!'
          document.getElementById('r-trigbastrirat-64').style.color = 'blue'
          document.getElementById('r-trigbastrirat-64').innerHTML = 'Correct!'
          
          document.getElementById('b-trigbastrirat-64').classList.add("correct")
          document.getElementById('b-trigbastrirat-61').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-62').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-63').classList.add("incorrect")
    
          document.getElementById('sa-trigbastrirat-6').disabled = true;
          document.getElementById('o-trigbastrirat-61').disabled = true;
          document.getElementById('o-trigbastrirat-62').disabled = true;
          document.getElementById('o-trigbastrirat-63').disabled = true;
          document.getElementById('o-trigbastrirat-64').disabled = true;
          showExplanation6()
          localStorage.setItem('trigbastrirat6', 0)
        }
        if (document.getElementById('o-trigbastrirat-64').checked) {
          document.getElementById('r-trigbastrirat-64').style.color = 'blue'
          document.getElementById('r-trigbastrirat-64').innerHTML = 'Correct!'
          
          document.getElementById('b-trigbastrirat-64').classList.add("correct")
          document.getElementById('b-trigbastrirat-61').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-62').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-63').classList.add("incorrect")
    
          document.getElementById('sa-trigbastrirat-6').disabled = true;
          document.getElementById('o-trigbastrirat-61').disabled = true;
          document.getElementById('o-trigbastrirat-62').disabled = true;
          document.getElementById('o-trigbastrirat-63').disabled = true;
          document.getElementById('o-trigbastrirat-64').disabled = true;
          showExplanation6()
          localStorage.setItem('trigbastrirat6', 1)
        }
      }
    }
    
    if (document.getElementById('sa-trigbastrirat-7') != null) {
      trigbastrirat7But.onclick = function() {
        if (document.getElementById('o-trigbastrirat-71').checked) {
          document.getElementById('r-trigbastrirat-71').style.color = 'red'
          document.getElementById('r-trigbastrirat-71').innerHTML = 'Incorrect!'
          document.getElementById('r-trigbastrirat-74').style.color = 'blue'
          document.getElementById('r-trigbastrirat-74').innerHTML = 'Correct!'
          
          document.getElementById('b-trigbastrirat-74').classList.add("correct")
          document.getElementById('b-trigbastrirat-71').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-72').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-73').classList.add("incorrect")
    
          document.getElementById('sa-trigbastrirat-7').disabled = true;
          document.getElementById('o-trigbastrirat-71').disabled = true;
          document.getElementById('o-trigbastrirat-72').disabled = true;
          document.getElementById('o-trigbastrirat-73').disabled = true;
          document.getElementById('o-trigbastrirat-74').disabled = true;
          showExplanation7()
          localStorage.setItem('trigbastrirat7', 0)
        }
        if (document.getElementById('o-trigbastrirat-72').checked) {
          document.getElementById('r-trigbastrirat-72').style.color = 'red'
          document.getElementById('r-trigbastrirat-72').innerHTML = 'Incorrect!'
          document.getElementById('r-trigbastrirat-74').style.color = 'blue'
          document.getElementById('r-trigbastrirat-74').innerHTML = 'Correct!'
          
          document.getElementById('b-trigbastrirat-74').classList.add("correct")
          document.getElementById('b-trigbastrirat-71').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-72').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-73').classList.add("incorrect")
    
          document.getElementById('sa-trigbastrirat-7').disabled = true;
          document.getElementById('o-trigbastrirat-71').disabled = true;
          document.getElementById('o-trigbastrirat-72').disabled = true;
          document.getElementById('o-trigbastrirat-73').disabled = true;
          document.getElementById('o-trigbastrirat-74').disabled = true;
          showExplanation7()
          localStorage.setItem('trigbastrirat7', 0)
        }
        if (document.getElementById('o-trigbastrirat-73').checked) {
          document.getElementById('r-trigbastrirat-73').style.color = 'red'
          document.getElementById('r-trigbastrirat-73').innerHTML = 'Incorrect!'
          document.getElementById('r-trigbastrirat-74').style.color = 'blue'
          document.getElementById('r-trigbastrirat-74').innerHTML = 'Correct!'
          
          document.getElementById('b-trigbastrirat-74').classList.add("correct")
          document.getElementById('b-trigbastrirat-71').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-72').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-73').classList.add("incorrect")
    
          document.getElementById('sa-trigbastrirat-7').disabled = true;
          document.getElementById('o-trigbastrirat-71').disabled = true;
          document.getElementById('o-trigbastrirat-72').disabled = true;
          document.getElementById('o-trigbastrirat-73').disabled = true;
          document.getElementById('o-trigbastrirat-74').disabled = true;
          showExplanation7()
          localStorage.setItem('trigbastrirat7', 0)
        }
        if (document.getElementById('o-trigbastrirat-74').checked) {
          document.getElementById('r-trigbastrirat-74').style.color = 'blue'
          document.getElementById('r-trigbastrirat-74').innerHTML = 'Correct!'
          
          document.getElementById('b-trigbastrirat-74').classList.add("correct")
          document.getElementById('b-trigbastrirat-71').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-72').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-73').classList.add("incorrect")
    
          document.getElementById('sa-trigbastrirat-7').disabled = true;
          document.getElementById('o-trigbastrirat-71').disabled = true;
          document.getElementById('o-trigbastrirat-72').disabled = true;
          document.getElementById('o-trigbastrirat-73').disabled = true;
          document.getElementById('o-trigbastrirat-74').disabled = true;
          showExplanation7()
          localStorage.setItem('trigbastrirat7', 1)
        }
      }
    }
    
    
    if (document.getElementById('sa-trigbastrirat-8') != null) {
      trigbastrirat8But.onclick = function() {
        if (document.getElementById('o-trigbastrirat-81').checked) {
          document.getElementById('r-trigbastrirat-81').style.color = 'red'
          document.getElementById('r-trigbastrirat-81').innerHTML = 'Incorrect!'
          document.getElementById('r-trigbastrirat-82').style.color = 'blue'
          document.getElementById('r-trigbastrirat-82').innerHTML = 'Correct!'
          
          document.getElementById('b-trigbastrirat-82').classList.add("correct")
          document.getElementById('b-trigbastrirat-81').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-83').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-84').classList.add("incorrect")
    
          document.getElementById('sa-trigbastrirat-8').disabled = true;
          document.getElementById('o-trigbastrirat-81').disabled = true;
          document.getElementById('o-trigbastrirat-82').disabled = true;
          document.getElementById('o-trigbastrirat-83').disabled = true;
          document.getElementById('o-trigbastrirat-84').disabled = true;
          showExplanation8()
          localStorage.setItem('trigbastrirat8', 0)
        }
        if (document.getElementById('o-trigbastrirat-82').checked) {
          document.getElementById('r-trigbastrirat-82').style.color = 'blue'
          document.getElementById('r-trigbastrirat-82').innerHTML = 'Correct!'
          
          document.getElementById('b-trigbastrirat-82').classList.add("correct")
          document.getElementById('b-trigbastrirat-81').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-83').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-84').classList.add("incorrect")
    
          document.getElementById('sa-trigbastrirat-8').disabled = true;
          document.getElementById('o-trigbastrirat-81').disabled = true;
          document.getElementById('o-trigbastrirat-82').disabled = true;
          document.getElementById('o-trigbastrirat-83').disabled = true;
          document.getElementById('o-trigbastrirat-84').disabled = true;
          showExplanation8()
          localStorage.setItem('trigbastrirat8', 1)
        }
        if (document.getElementById('o-trigbastrirat-83').checked) {
          document.getElementById('r-trigbastrirat-83').style.color = 'red'
          document.getElementById('r-trigbastrirat-83').innerHTML = 'Incorrect!'
          document.getElementById('r-trigbastrirat-82').style.color = 'blue'
          document.getElementById('r-trigbastrirat-82').innerHTML = 'Correct!'
          
          document.getElementById('b-trigbastrirat-82').classList.add("correct")
          document.getElementById('b-trigbastrirat-81').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-83').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-84').classList.add("incorrect")
    
          document.getElementById('sa-trigbastrirat-8').disabled = true;
          document.getElementById('o-trigbastrirat-81').disabled = true;
          document.getElementById('o-trigbastrirat-82').disabled = true;
          document.getElementById('o-trigbastrirat-83').disabled = true;
          document.getElementById('o-trigbastrirat-84').disabled = true;
          showExplanation8()
          localStorage.setItem('trigbastrirat8', 0)
        }
        if (document.getElementById('o-trigbastrirat-84').checked) {
          document.getElementById('r-trigbastrirat-84').style.color = 'red'
          document.getElementById('r-trigbastrirat-84').innerHTML = 'Incorrect!'
          document.getElementById('r-trigbastrirat-82').style.color = 'blue'
          document.getElementById('r-trigbastrirat-82').innerHTML = 'Correct!'
          
          document.getElementById('b-trigbastrirat-82').classList.add("correct")
          document.getElementById('b-trigbastrirat-81').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-83').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-84').classList.add("incorrect")
    
          document.getElementById('sa-trigbastrirat-8').disabled = true;
          document.getElementById('o-trigbastrirat-81').disabled = true;
          document.getElementById('o-trigbastrirat-82').disabled = true;
          document.getElementById('o-trigbastrirat-83').disabled = true;
          document.getElementById('o-trigbastrirat-84').disabled = true;
          showExplanation8()
          localStorage.setItem('trigbastrirat8', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-trigbastrirat-9') != null) {
      trigbastrirat9But.onclick = function() {
        if (document.getElementById('o-trigbastrirat-91').checked) {
          document.getElementById('r-trigbastrirat-91').style.color = 'red'
          document.getElementById('r-trigbastrirat-91').innerHTML = 'Incorrect!'
          document.getElementById('r-trigbastrirat-94').style.color = 'blue'
          document.getElementById('r-trigbastrirat-94').innerHTML = 'Correct!'
          
          document.getElementById('b-trigbastrirat-94').classList.add("correct")
          document.getElementById('b-trigbastrirat-91').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-92').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-93').classList.add("incorrect")
    
          document.getElementById('sa-trigbastrirat-9').disabled = true;
          document.getElementById('o-trigbastrirat-91').disabled = true;
          document.getElementById('o-trigbastrirat-92').disabled = true;
          document.getElementById('o-trigbastrirat-93').disabled = true;
          document.getElementById('o-trigbastrirat-94').disabled = true;
          showExplanation9()
          localStorage.setItem('trigbastrirat9', 0)
        }
        if (document.getElementById('o-trigbastrirat-92').checked) {
          document.getElementById('r-trigbastrirat-91').style.color = 'red'
          document.getElementById('r-trigbastrirat-91').innerHTML = 'Incorrect!'
          document.getElementById('r-trigbastrirat-94').style.color = 'blue'
          document.getElementById('r-trigbastrirat-94').innerHTML = 'Correct!'
          
          document.getElementById('b-trigbastrirat-94').classList.add("correct")
          document.getElementById('b-trigbastrirat-91').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-92').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-93').classList.add("incorrect")
    
          document.getElementById('sa-trigbastrirat-9').disabled = true;
          document.getElementById('o-trigbastrirat-91').disabled = true;
          document.getElementById('o-trigbastrirat-92').disabled = true;
          document.getElementById('o-trigbastrirat-93').disabled = true;
          document.getElementById('o-trigbastrirat-94').disabled = true;
          showExplanation9()
          localStorage.setItem('trigbastrirat9', 0)
        }
        if (document.getElementById('o-trigbastrirat-93').checked) {
          document.getElementById('r-trigbastrirat-91').style.color = 'red'
          document.getElementById('r-trigbastrirat-91').innerHTML = 'Incorrect!'
          document.getElementById('r-trigbastrirat-94').style.color = 'blue'
          document.getElementById('r-trigbastrirat-94').innerHTML = 'Correct!'
          
          document.getElementById('b-trigbastrirat-94').classList.add("correct")
          document.getElementById('b-trigbastrirat-91').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-92').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-93').classList.add("incorrect")
    
          document.getElementById('sa-trigbastrirat-9').disabled = true;
          document.getElementById('o-trigbastrirat-91').disabled = true;
          document.getElementById('o-trigbastrirat-92').disabled = true;
          document.getElementById('o-trigbastrirat-93').disabled = true;
          document.getElementById('o-trigbastrirat-94').disabled = true;
          showExplanation9()
          localStorage.setItem('trigbastrirat9', 0)
        }
        if (document.getElementById('o-trigbastrirat-94').checked) {
          document.getElementById('r-trigbastrirat-94').style.color = 'blue'
          document.getElementById('r-trigbastrirat-94').innerHTML = 'Correct!'
          
          document.getElementById('b-trigbastrirat-94').classList.add("correct")
          document.getElementById('b-trigbastrirat-91').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-92').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-93').classList.add("incorrect")
    
          document.getElementById('sa-trigbastrirat-9').disabled = true;
          document.getElementById('o-trigbastrirat-91').disabled = true;
          document.getElementById('o-trigbastrirat-92').disabled = true;
          document.getElementById('o-trigbastrirat-93').disabled = true;
          document.getElementById('o-trigbastrirat-94').disabled = true;
          showExplanation9()
          localStorage.setItem('trigbastrirat9', 1)
        }
      }
    }
    
    if (document.getElementById('sa-trigbastrirat-10') != null) {
      trigbastrirat10But.onclick = function() {
        if (document.getElementById('o-trigbastrirat-101').checked) {
          document.getElementById('r-trigbastrirat-101').style.color = 'red'
          document.getElementById('r-trigbastrirat-101').innerHTML = 'Incorrect!'
          document.getElementById('r-trigbastrirat-102').style.color = 'blue'
          document.getElementById('r-trigbastrirat-102').innerHTML = 'Correct!'
          
          document.getElementById('b-trigbastrirat-102').classList.add("correct")
          document.getElementById('b-trigbastrirat-101').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-103').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-104').classList.add("incorrect")
    
          document.getElementById('sa-trigbastrirat-10').disabled = true;
          document.getElementById('o-trigbastrirat-101').disabled = true;
          document.getElementById('o-trigbastrirat-102').disabled = true;
          document.getElementById('o-trigbastrirat-103').disabled = true;
          document.getElementById('o-trigbastrirat-104').disabled = true;
          showExplanation10()
          localStorage.setItem('trigbastrirat10', 0)
        }
        if (document.getElementById('o-trigbastrirat-102').checked) {
          document.getElementById('r-trigbastrirat-102').style.color = 'blue'
          document.getElementById('r-trigbastrirat-102').innerHTML = 'Correct!'
          
          document.getElementById('b-trigbastrirat-102').classList.add("correct")
          document.getElementById('b-trigbastrirat-101').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-103').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-104').classList.add("incorrect")
    
          document.getElementById('sa-trigbastrirat-10').disabled = true;
          document.getElementById('o-trigbastrirat-101').disabled = true;
          document.getElementById('o-trigbastrirat-102').disabled = true;
          document.getElementById('o-trigbastrirat-103').disabled = true;
          document.getElementById('o-trigbastrirat-104').disabled = true;
          showExplanation10()
          localStorage.setItem('trigbastrirat10', 1)
        }
        if (document.getElementById('o-trigbastrirat-103').checked) {
          document.getElementById('r-trigbastrirat-103').style.color = 'red'
          document.getElementById('r-trigbastrirat-103').innerHTML = 'Incorrect!'
          document.getElementById('r-trigbastrirat-102').style.color = 'blue'
          document.getElementById('r-trigbastrirat-102').innerHTML = 'Correct!'
          
          document.getElementById('b-trigbastrirat-102').classList.add("correct")
          document.getElementById('b-trigbastrirat-101').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-103').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-104').classList.add("incorrect")
    
          document.getElementById('sa-trigbastrirat-10').disabled = true;
          document.getElementById('o-trigbastrirat-101').disabled = true;
          document.getElementById('o-trigbastrirat-102').disabled = true;
          document.getElementById('o-trigbastrirat-103').disabled = true;
          document.getElementById('o-trigbastrirat-104').disabled = true;
          showExplanation10()
          localStorage.setItem('trigbastrirat10', 0)
        }
        if (document.getElementById('o-trigbastrirat-104').checked) {
          document.getElementById('r-trigbastrirat-104').style.color = 'red'
          document.getElementById('r-trigbastrirat-104').innerHTML = 'Incorrect!'
          document.getElementById('r-trigbastrirat-102').style.color = 'blue'
          document.getElementById('r-trigbastrirat-102').innerHTML = 'Correct!'
          
          document.getElementById('b-trigbastrirat-102').classList.add("correct")
          document.getElementById('b-trigbastrirat-101').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-103').classList.add("incorrect")
          document.getElementById('b-trigbastrirat-104').classList.add("incorrect")
    
          document.getElementById('sa-trigbastrirat-10').disabled = true;
          document.getElementById('o-trigbastrirat-101').disabled = true;
          document.getElementById('o-trigbastrirat-102').disabled = true;
          document.getElementById('o-trigbastrirat-103').disabled = true;
          document.getElementById('o-trigbastrirat-104').disabled = true;
          showExplanation10()
          localStorage.setItem('trigbastrirat10', 0)
        }
      }
    }
    