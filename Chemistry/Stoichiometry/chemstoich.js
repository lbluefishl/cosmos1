
  let chemstoich1But = document.getElementById('sa-chemstoich-1');
  let chemstoich2But = document.getElementById('sa-chemstoich-2');
  let chemstoich3But = document.getElementById('sa-chemstoich-3');
  let chemstoich4But = document.getElementById('sa-chemstoich-4');
  let chemstoich5But = document.getElementById('sa-chemstoich-5');
  let chemstoich6But = document.getElementById('sa-chemstoich-6');
  let chemstoich7But = document.getElementById('sa-chemstoich-7');
  let chemstoich8But = document.getElementById('sa-chemstoich-8');
  let chemstoich9But = document.getElementById('sa-chemstoich-9');
  let chemstoich10But = document.getElementById('sa-chemstoich-10');


  showExplanation1 = function() {
    document.getElementById('e-chemstoich-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-chemstoich-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-chemstoich-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-chemstoich-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-chemstoich-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-chemstoich-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-chemstoich-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-chemstoich-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-chemstoich-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-chemstoich-10').style.display = 'block';
     } 



     if (document.getElementById('sa-chemstoich-1') != null) {
      chemstoich1But.onclick = function () {
        if (document.getElementById('o-chemstoich-11').checked) {
          document.getElementById('r-chemstoich-11').style.color = 'red'
          document.getElementById('r-chemstoich-11').innerHTML = 'Incorrect!'
          document.getElementById('r-chemstoich-12').style.color = 'blue'
          document.getElementById('r-chemstoich-12').innerHTML = 'Correct!'
    
          document.getElementById('b-chemstoich-12').classList.add("correct")
          document.getElementById('b-chemstoich-11').classList.add("incorrect")
          document.getElementById('b-chemstoich-13').classList.add("incorrect")
          document.getElementById('b-chemstoich-14').classList.add("incorrect")
    
          document.getElementById('sa-chemstoich-1').disabled = true;
          document.getElementById('o-chemstoich-11').disabled = true;
          document.getElementById('o-chemstoich-12').disabled = true;
          document.getElementById('o-chemstoich-13').disabled = true;
          document.getElementById('o-chemstoich-14').disabled = true;
          showExplanation1()
          localStorage.setItem('chemstoich1', 0)
        }
    
        if (document.getElementById('o-chemstoich-12').checked) {
          document.getElementById('r-chemstoich-12').style.color = 'blue'
          document.getElementById('r-chemstoich-12').innerHTML = 'Correct!'
    
          document.getElementById('b-chemstoich-12').classList.add("correct")
          document.getElementById('b-chemstoich-11').classList.add("incorrect")
          document.getElementById('b-chemstoich-13').classList.add("incorrect")
          document.getElementById('b-chemstoich-14').classList.add("incorrect")
    
          document.getElementById('sa-chemstoich-1').disabled = true;
          document.getElementById('o-chemstoich-11').disabled = true;
          document.getElementById('o-chemstoich-12').disabled = true;
          document.getElementById('o-chemstoich-13').disabled = true;
          document.getElementById('o-chemstoich-14').disabled = true;
          showExplanation1()
          localStorage.setItem('chemstoich1', 1)
        }
        if (document.getElementById('o-chemstoich-13').checked) {
          document.getElementById('r-chemstoich-13').style.color = 'red'
          document.getElementById('r-chemstoich-13').innerHTML = 'Incorrect!'
          document.getElementById('r-chemstoich-12').style.color = 'blue'
          document.getElementById('r-chemstoich-12').innerHTML = 'Correct!'
          
          document.getElementById('b-chemstoich-12').classList.add("correct")
          document.getElementById('b-chemstoich-11').classList.add("incorrect")
          document.getElementById('b-chemstoich-13').classList.add("incorrect")
          document.getElementById('b-chemstoich-14').classList.add("incorrect")
    
          document.getElementById('sa-chemstoich-1').disabled = true;
          document.getElementById('o-chemstoich-11').disabled = true;
          document.getElementById('o-chemstoich-12').disabled = true;
          document.getElementById('o-chemstoich-13').disabled = true;
          document.getElementById('o-chemstoich-14').disabled = true;
          showExplanation1()
          localStorage.setItem('chemstoich1', 0)
        }
        if (document.getElementById('o-chemstoich-14').checked) {
          document.getElementById('r-chemstoich-14').style.color = 'red'
          document.getElementById('r-chemstoich-14').innerHTML = 'Incorrect!'
          document.getElementById('r-chemstoich-12').style.color = 'blue'
          document.getElementById('r-chemstoich-12').innerHTML = 'Correct!'
          
          document.getElementById('b-chemstoich-12').classList.add("correct")
          document.getElementById('b-chemstoich-11').classList.add("incorrect")
          document.getElementById('b-chemstoich-13').classList.add("incorrect")
          document.getElementById('b-chemstoich-14').classList.add("incorrect")
    
          document.getElementById('sa-chemstoich-1').disabled = true;
          document.getElementById('o-chemstoich-11').disabled = true;
          document.getElementById('o-chemstoich-12').disabled = true;
          document.getElementById('o-chemstoich-13').disabled = true;
          document.getElementById('o-chemstoich-14').disabled = true;
          showExplanation1()
          localStorage.setItem('chemstoich1', 0)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-chemstoich-2') != null) {
      chemstoich2But.onclick = function() {
        if (document.getElementById('o-chemstoich-21').checked) {
          document.getElementById('r-chemstoich-21').style.color = 'red'
          document.getElementById('r-chemstoich-21').innerHTML = 'Incorrect!'
          document.getElementById('r-chemstoich-23').style.color = 'blue'
          document.getElementById('r-chemstoich-23').innerHTML = 'Correct!'
          
          document.getElementById('b-chemstoich-23').classList.add("correct")
          document.getElementById('b-chemstoich-21').classList.add("incorrect")
          document.getElementById('b-chemstoich-22').classList.add("incorrect")
          document.getElementById('b-chemstoich-24').classList.add("incorrect")
    
          document.getElementById('sa-chemstoich-2').disabled = true;
          document.getElementById('o-chemstoich-21').disabled = true;
          document.getElementById('o-chemstoich-22').disabled = true;
          document.getElementById('o-chemstoich-23').disabled = true;
          document.getElementById('o-chemstoich-24').disabled = true;
          showExplanation2()
          localStorage.setItem('chemstoich2', 0)
        }
        if (document.getElementById('o-chemstoich-22').checked) {
          document.getElementById('r-chemstoich-22').style.color = 'red'
          document.getElementById('r-chemstoich-22').innerHTML = 'Incorrect!'
          document.getElementById('r-chemstoich-23').style.color = 'blue'
          document.getElementById('r-chemstoich-23').innerHTML = 'Correct!'
          
          document.getElementById('b-chemstoich-23').classList.add("correct")
          document.getElementById('b-chemstoich-21').classList.add("incorrect")
          document.getElementById('b-chemstoich-22').classList.add("incorrect")
          document.getElementById('b-chemstoich-24').classList.add("incorrect")
    
          document.getElementById('sa-chemstoich-2').disabled = true;
          document.getElementById('o-chemstoich-21').disabled = true;
          document.getElementById('o-chemstoich-22').disabled = true;
          document.getElementById('o-chemstoich-23').disabled = true;
          document.getElementById('o-chemstoich-24').disabled = true;
          showExplanation2()
          localStorage.setItem('chemstoich2', 0)
        }
        if (document.getElementById('o-chemstoich-23').checked) {
          document.getElementById('r-chemstoich-23').style.color = 'blue'
          document.getElementById('r-chemstoich-23').innerHTML = 'Correct!'
          
          document.getElementById('b-chemstoich-23').classList.add("correct")
          document.getElementById('b-chemstoich-21').classList.add("incorrect")
          document.getElementById('b-chemstoich-22').classList.add("incorrect")
          document.getElementById('b-chemstoich-24').classList.add("incorrect")
    
          document.getElementById('sa-chemstoich-2').disabled = true;
          document.getElementById('o-chemstoich-21').disabled = true;
          document.getElementById('o-chemstoich-22').disabled = true;
          document.getElementById('o-chemstoich-23').disabled = true;
          document.getElementById('o-chemstoich-24').disabled = true;
          showExplanation2()
          localStorage.setItem('chemstoich2', 1)
        }
        if (document.getElementById('o-chemstoich-24').checked) {
          document.getElementById('r-chemstoich-24').style.color = 'red'
          document.getElementById('r-chemstoich-24').innerHTML = 'Incorrect!'
          document.getElementById('r-chemstoich-23').style.color = 'blue'
          document.getElementById('r-chemstoich-23').innerHTML = 'Correct!'
          
          document.getElementById('b-chemstoich-23').classList.add("correct")
          document.getElementById('b-chemstoich-21').classList.add("incorrect")
          document.getElementById('b-chemstoich-22').classList.add("incorrect")
          document.getElementById('b-chemstoich-24').classList.add("incorrect")
    
          document.getElementById('sa-chemstoich-2').disabled = true;
          document.getElementById('o-chemstoich-21').disabled = true;
          document.getElementById('o-chemstoich-22').disabled = true;
          document.getElementById('o-chemstoich-23').disabled = true;
          document.getElementById('o-chemstoich-24').disabled = true;
          showExplanation2()
          localStorage.setItem('chemstoich2', 0)
        }
      }
    }
    
    if (document.getElementById('sa-chemstoich-3') != null) {
      chemstoich3But.onclick = function() {
        if (document.getElementById('o-chemstoich-31').checked) {
          document.getElementById('r-chemstoich-31').style.color = 'red'
          document.getElementById('r-chemstoich-31').innerHTML = 'Incorrect!'
          document.getElementById('r-chemstoich-32').style.color = 'blue'
          document.getElementById('r-chemstoich-32').innerHTML = 'Correct!'
          
          document.getElementById('b-chemstoich-32').classList.add("correct")
          document.getElementById('b-chemstoich-31').classList.add("incorrect")
          document.getElementById('b-chemstoich-33').classList.add("incorrect")
          document.getElementById('b-chemstoich-34').classList.add("incorrect")
    
          document.getElementById('sa-chemstoich-3').disabled = true;
          document.getElementById('o-chemstoich-31').disabled = true;
          document.getElementById('o-chemstoich-32').disabled = true;
          document.getElementById('o-chemstoich-33').disabled = true;
          document.getElementById('o-chemstoich-34').disabled = true;
          showExplanation3()
          localStorage.setItem('chemstoich3', 0)
        }
        if (document.getElementById('o-chemstoich-32').checked) {
    
          document.getElementById('r-chemstoich-32').style.color = 'blue'
          document.getElementById('r-chemstoich-32').innerHTML = 'Correct!'
          
          document.getElementById('b-chemstoich-32').classList.add("correct")
          document.getElementById('b-chemstoich-31').classList.add("incorrect")
          document.getElementById('b-chemstoich-33').classList.add("incorrect")
          document.getElementById('b-chemstoich-34').classList.add("incorrect")
    
          document.getElementById('sa-chemstoich-3').disabled = true;
          document.getElementById('o-chemstoich-31').disabled = true;
          document.getElementById('o-chemstoich-32').disabled = true;
          document.getElementById('o-chemstoich-33').disabled = true;
          document.getElementById('o-chemstoich-34').disabled = true;
          showExplanation3()
          localStorage.setItem('chemstoich3', 1)
        }
        if (document.getElementById('o-chemstoich-33').checked) {
          document.getElementById('r-chemstoich-33').style.color = 'red'
          document.getElementById('r-chemstoich-33').innerHTML = 'Incorrect!'
          document.getElementById('r-chemstoich-32').style.color = 'blue'
          document.getElementById('r-chemstoich-32').innerHTML = 'Correct!'
          
          document.getElementById('b-chemstoich-32').classList.add("correct")
          document.getElementById('b-chemstoich-31').classList.add("incorrect")
          document.getElementById('b-chemstoich-33').classList.add("incorrect")
          document.getElementById('b-chemstoich-34').classList.add("incorrect")
    
          document.getElementById('sa-chemstoich-3').disabled = true;
          document.getElementById('o-chemstoich-31').disabled = true;
          document.getElementById('o-chemstoich-32').disabled = true;
          document.getElementById('o-chemstoich-33').disabled = true;
          document.getElementById('o-chemstoich-34').disabled = true;
          showExplanation3()
          localStorage.setItem('chemstoich3', 0)
        }
        if (document.getElementById('o-chemstoich-34').checked) {
          document.getElementById('r-chemstoich-34').style.color = 'red'
          document.getElementById('r-chemstoich-34').innerHTML = 'Incorrect!'
          document.getElementById('r-chemstoich-32').style.color = 'blue'
          document.getElementById('r-chemstoich-32').innerHTML = 'Correct!'
          
          document.getElementById('b-chemstoich-32').classList.add("correct")
          document.getElementById('b-chemstoich-31').classList.add("incorrect")
          document.getElementById('b-chemstoich-33').classList.add("incorrect")
          document.getElementById('b-chemstoich-34').classList.add("incorrect")
    
          document.getElementById('sa-chemstoich-3').disabled = true;
          document.getElementById('o-chemstoich-31').disabled = true;
          document.getElementById('o-chemstoich-32').disabled = true;
          document.getElementById('o-chemstoich-33').disabled = true;
          document.getElementById('o-chemstoich-34').disabled = true;
          showExplanation3()
          localStorage.setItem('chemstoich3', 0)
        }
      }
    }
    
    if (document.getElementById('sa-chemstoich-4') != null) {
      chemstoich4But.onclick = function() {
        if (document.getElementById('o-chemstoich-41').checked) {
          document.getElementById('r-chemstoich-41').style.color = 'red'
          document.getElementById('r-chemstoich-41').innerHTML = 'Incorrect!'
          document.getElementById('r-chemstoich-44').style.color = 'blue'
          document.getElementById('r-chemstoich-44').innerHTML = 'Correct!'
          
          document.getElementById('b-chemstoich-44').classList.add("correct")
          document.getElementById('b-chemstoich-41').classList.add("incorrect")
          document.getElementById('b-chemstoich-42').classList.add("incorrect")
          document.getElementById('b-chemstoich-43').classList.add("incorrect")
    
          document.getElementById('sa-chemstoich-4').disabled = true;
          document.getElementById('o-chemstoich-41').disabled = true;
          document.getElementById('o-chemstoich-42').disabled = true;
          document.getElementById('o-chemstoich-43').disabled = true;
          document.getElementById('o-chemstoich-44').disabled = true;
          showExplanation4()
          localStorage.setItem('chemstoich4', 0)
        }
        if (document.getElementById('o-chemstoich-42').checked) {
          document.getElementById('r-chemstoich-42').style.color = 'red'
          document.getElementById('r-chemstoich-42').innerHTML = 'Incorrect!'
          document.getElementById('r-chemstoich-44').style.color = 'blue'
          document.getElementById('r-chemstoich-44').innerHTML = 'Correct!'
          
          document.getElementById('b-chemstoich-44').classList.add("correct")
          document.getElementById('b-chemstoich-41').classList.add("incorrect")
          document.getElementById('b-chemstoich-42').classList.add("incorrect")
          document.getElementById('b-chemstoich-43').classList.add("incorrect")
    
          document.getElementById('sa-chemstoich-4').disabled = true;
          document.getElementById('o-chemstoich-41').disabled = true;
          document.getElementById('o-chemstoich-42').disabled = true;
          document.getElementById('o-chemstoich-43').disabled = true;
          document.getElementById('o-chemstoich-44').disabled = true;
          showExplanation4()
          localStorage.setItem('chemstoich4', 0)
        }
        if (document.getElementById('o-chemstoich-43').checked) {
          document.getElementById('r-chemstoich-43').style.color = 'red'
          document.getElementById('r-chemstoich-43').innerHTML = 'Incorrect!'
          document.getElementById('r-chemstoich-44').style.color = 'blue'
          document.getElementById('r-chemstoich-44').innerHTML = 'Correct!'
          
          document.getElementById('b-chemstoich-44').classList.add("correct")
          document.getElementById('b-chemstoich-41').classList.add("incorrect")
          document.getElementById('b-chemstoich-42').classList.add("incorrect")
          document.getElementById('b-chemstoich-43').classList.add("incorrect")
    
          document.getElementById('sa-chemstoich-4').disabled = true;
          document.getElementById('o-chemstoich-41').disabled = true;
          document.getElementById('o-chemstoich-42').disabled = true;
          document.getElementById('o-chemstoich-43').disabled = true;
          document.getElementById('o-chemstoich-44').disabled = true;
          showExplanation4()
          localStorage.setItem('chemstoich4', 0)
        }
        if (document.getElementById('o-chemstoich-44').checked) {
          document.getElementById('r-chemstoich-44').style.color = 'blue'
          document.getElementById('r-chemstoich-44').innerHTML = 'Correct!'
          
          document.getElementById('b-chemstoich-44').classList.add("correct")
          document.getElementById('b-chemstoich-41').classList.add("incorrect")
          document.getElementById('b-chemstoich-42').classList.add("incorrect")
          document.getElementById('b-chemstoich-43').classList.add("incorrect")
    
          document.getElementById('sa-chemstoich-4').disabled = true;
          document.getElementById('o-chemstoich-41').disabled = true;
          document.getElementById('o-chemstoich-42').disabled = true;
          document.getElementById('o-chemstoich-43').disabled = true;
          document.getElementById('o-chemstoich-44').disabled = true;
          showExplanation4()
          localStorage.setItem('chemstoich4', 1)
        }
      }
    }
    
    if (document.getElementById('sa-chemstoich-5') != null) {
      chemstoich5But.onclick = function() {
        if (document.getElementById('o-chemstoich-51').checked) {
          document.getElementById('r-chemstoich-51').style.color = 'red'
          document.getElementById('r-chemstoich-51').innerHTML = 'Incorrect!'
          document.getElementById('r-chemstoich-53').style.color = 'blue'
          document.getElementById('r-chemstoich-53').innerHTML = 'Correct!'
          
          document.getElementById('b-chemstoich-53').classList.add("correct")
          document.getElementById('b-chemstoich-51').classList.add("incorrect")
          document.getElementById('b-chemstoich-52').classList.add("incorrect")
          document.getElementById('b-chemstoich-54').classList.add("incorrect")
    
          document.getElementById('sa-chemstoich-5').disabled = true;
          document.getElementById('o-chemstoich-51').disabled = true;
          document.getElementById('o-chemstoich-52').disabled = true;
          document.getElementById('o-chemstoich-53').disabled = true;
          document.getElementById('o-chemstoich-54').disabled = true;
          showExplanation5()
          localStorage.setItem('chemstoich5', 0)
        }
        if (document.getElementById('o-chemstoich-52').checked) {
          document.getElementById('r-chemstoich-52').style.color = 'red'
          document.getElementById('r-chemstoich-52').innerHTML = 'Incorrect!'
          document.getElementById('r-chemstoich-53').style.color = 'blue'
          document.getElementById('r-chemstoich-53').innerHTML = 'Correct!'
          
          document.getElementById('b-chemstoich-53').classList.add("correct")
          document.getElementById('b-chemstoich-51').classList.add("incorrect")
          document.getElementById('b-chemstoich-52').classList.add("incorrect")
          document.getElementById('b-chemstoich-54').classList.add("incorrect")
    
          document.getElementById('sa-chemstoich-5').disabled = true;
          document.getElementById('o-chemstoich-51').disabled = true;
          document.getElementById('o-chemstoich-52').disabled = true;
          document.getElementById('o-chemstoich-53').disabled = true;
          document.getElementById('o-chemstoich-54').disabled = true;
          showExplanation5()
          localStorage.setItem('chemstoich5', 0)
        }
        if (document.getElementById('o-chemstoich-53').checked) {
          document.getElementById('r-chemstoich-53').style.color = 'blue'
          document.getElementById('r-chemstoich-53').innerHTML = 'Correct!'
          
          document.getElementById('b-chemstoich-53').classList.add("correct")
          document.getElementById('b-chemstoich-51').classList.add("incorrect")
          document.getElementById('b-chemstoich-52').classList.add("incorrect")
          document.getElementById('b-chemstoich-54').classList.add("incorrect")
    
          document.getElementById('sa-chemstoich-5').disabled = true;
          document.getElementById('o-chemstoich-51').disabled = true;
          document.getElementById('o-chemstoich-52').disabled = true;
          document.getElementById('o-chemstoich-53').disabled = true;
          document.getElementById('o-chemstoich-54').disabled = true;
          showExplanation5()
          localStorage.setItem('chemstoich5', 1)
        }
        if (document.getElementById('o-chemstoich-54').checked) {
          document.getElementById('r-chemstoich-54').style.color = 'red'
          document.getElementById('r-chemstoich-54').innerHTML = 'Incorrect!'
          document.getElementById('r-chemstoich-53').style.color = 'blue'
          document.getElementById('r-chemstoich-53').innerHTML = 'Correct!'
          
          document.getElementById('b-chemstoich-53').classList.add("correct")
          document.getElementById('b-chemstoich-51').classList.add("incorrect")
          document.getElementById('b-chemstoich-52').classList.add("incorrect")
          document.getElementById('b-chemstoich-54').classList.add("incorrect")
    
          document.getElementById('sa-chemstoich-5').disabled = true;
          document.getElementById('o-chemstoich-51').disabled = true;
          document.getElementById('o-chemstoich-52').disabled = true;
          document.getElementById('o-chemstoich-53').disabled = true;
          document.getElementById('o-chemstoich-54').disabled = true;
          showExplanation5()
          localStorage.setItem('chemstoich5', 0)
        }
      }
    }
        
         
      if (document.getElementById('sa-chemstoich-6') != null) {
      chemstoich6But.onclick = function() {
        if (document.getElementById('o-chemstoich-61').checked) {
          document.getElementById('r-chemstoich-61').style.color = 'red'
          document.getElementById('r-chemstoich-61').innerHTML = 'Incorrect!'
          document.getElementById('r-chemstoich-64').style.color = 'blue'
          document.getElementById('r-chemstoich-64').innerHTML = 'Correct!'
          
          document.getElementById('b-chemstoich-64').classList.add("correct")
          document.getElementById('b-chemstoich-61').classList.add("incorrect")
          document.getElementById('b-chemstoich-62').classList.add("incorrect")
          document.getElementById('b-chemstoich-63').classList.add("incorrect")
    
          document.getElementById('sa-chemstoich-6').disabled = true;
          document.getElementById('o-chemstoich-61').disabled = true;
          document.getElementById('o-chemstoich-62').disabled = true;
          document.getElementById('o-chemstoich-63').disabled = true;
          document.getElementById('o-chemstoich-64').disabled = true;
          showExplanation6()
          localStorage.setItem('chemstoich6', 0)
        }
        if (document.getElementById('o-chemstoich-62').checked) {
          document.getElementById('r-chemstoich-62').style.color = 'red'
          document.getElementById('r-chemstoich-62').innerHTML = 'Incorrect!'
          document.getElementById('r-chemstoich-64').style.color = 'blue'
          document.getElementById('r-chemstoich-64').innerHTML = 'Correct!'
          
          document.getElementById('b-chemstoich-64').classList.add("correct")
          document.getElementById('b-chemstoich-61').classList.add("incorrect")
          document.getElementById('b-chemstoich-62').classList.add("incorrect")
          document.getElementById('b-chemstoich-63').classList.add("incorrect")
    
          document.getElementById('sa-chemstoich-6').disabled = true;
          document.getElementById('o-chemstoich-61').disabled = true;
          document.getElementById('o-chemstoich-62').disabled = true;
          document.getElementById('o-chemstoich-63').disabled = true;
          document.getElementById('o-chemstoich-64').disabled = true;
          showExplanation6()
          localStorage.setItem('chemstoich6', 0)
        }
        if (document.getElementById('o-chemstoich-63').checked) {
          document.getElementById('r-chemstoich-63').style.color = 'red'
          document.getElementById('r-chemstoich-63').innerHTML = 'Incorrect!'
          document.getElementById('r-chemstoich-64').style.color = 'blue'
          document.getElementById('r-chemstoich-64').innerHTML = 'Correct!'
          
          document.getElementById('b-chemstoich-64').classList.add("correct")
          document.getElementById('b-chemstoich-61').classList.add("incorrect")
          document.getElementById('b-chemstoich-62').classList.add("incorrect")
          document.getElementById('b-chemstoich-63').classList.add("incorrect")
    
          document.getElementById('sa-chemstoich-6').disabled = true;
          document.getElementById('o-chemstoich-61').disabled = true;
          document.getElementById('o-chemstoich-62').disabled = true;
          document.getElementById('o-chemstoich-63').disabled = true;
          document.getElementById('o-chemstoich-64').disabled = true;
          showExplanation6()
          localStorage.setItem('chemstoich6', 0)
        }
        if (document.getElementById('o-chemstoich-64').checked) {
          document.getElementById('r-chemstoich-64').style.color = 'blue'
          document.getElementById('r-chemstoich-64').innerHTML = 'Correct!'
          
          document.getElementById('b-chemstoich-64').classList.add("correct")
          document.getElementById('b-chemstoich-61').classList.add("incorrect")
          document.getElementById('b-chemstoich-62').classList.add("incorrect")
          document.getElementById('b-chemstoich-63').classList.add("incorrect")
    
          document.getElementById('sa-chemstoich-6').disabled = true;
          document.getElementById('o-chemstoich-61').disabled = true;
          document.getElementById('o-chemstoich-62').disabled = true;
          document.getElementById('o-chemstoich-63').disabled = true;
          document.getElementById('o-chemstoich-64').disabled = true;
          showExplanation6()
          localStorage.setItem('chemstoich6', 1)
        }
      }
    }
    
    if (document.getElementById('sa-chemstoich-7') != null) {
      chemstoich7But.onclick = function() {
        if (document.getElementById('o-chemstoich-71').checked) {
          document.getElementById('r-chemstoich-71').style.color = 'red'
          document.getElementById('r-chemstoich-71').innerHTML = 'Incorrect!'
          document.getElementById('r-chemstoich-74').style.color = 'blue'
          document.getElementById('r-chemstoich-74').innerHTML = 'Correct!'
          
          document.getElementById('b-chemstoich-74').classList.add("correct")
          document.getElementById('b-chemstoich-71').classList.add("incorrect")
          document.getElementById('b-chemstoich-72').classList.add("incorrect")
          document.getElementById('b-chemstoich-73').classList.add("incorrect")
    
          document.getElementById('sa-chemstoich-7').disabled = true;
          document.getElementById('o-chemstoich-71').disabled = true;
          document.getElementById('o-chemstoich-72').disabled = true;
          document.getElementById('o-chemstoich-73').disabled = true;
          document.getElementById('o-chemstoich-74').disabled = true;
          showExplanation7()
          localStorage.setItem('chemstoich7', 0)
        }
        if (document.getElementById('o-chemstoich-72').checked) {
          document.getElementById('r-chemstoich-72').style.color = 'red'
          document.getElementById('r-chemstoich-72').innerHTML = 'Incorrect!'
          document.getElementById('r-chemstoich-74').style.color = 'blue'
          document.getElementById('r-chemstoich-74').innerHTML = 'Correct!'
          
          document.getElementById('b-chemstoich-74').classList.add("correct")
          document.getElementById('b-chemstoich-71').classList.add("incorrect")
          document.getElementById('b-chemstoich-72').classList.add("incorrect")
          document.getElementById('b-chemstoich-73').classList.add("incorrect")
    
          document.getElementById('sa-chemstoich-7').disabled = true;
          document.getElementById('o-chemstoich-71').disabled = true;
          document.getElementById('o-chemstoich-72').disabled = true;
          document.getElementById('o-chemstoich-73').disabled = true;
          document.getElementById('o-chemstoich-74').disabled = true;
          showExplanation7()
          localStorage.setItem('chemstoich7', 0)
        }
        if (document.getElementById('o-chemstoich-73').checked) {
          document.getElementById('r-chemstoich-73').style.color = 'red'
          document.getElementById('r-chemstoich-73').innerHTML = 'Incorrect!'
          document.getElementById('r-chemstoich-74').style.color = 'blue'
          document.getElementById('r-chemstoich-74').innerHTML = 'Correct!'
          
          document.getElementById('b-chemstoich-74').classList.add("correct")
          document.getElementById('b-chemstoich-71').classList.add("incorrect")
          document.getElementById('b-chemstoich-72').classList.add("incorrect")
          document.getElementById('b-chemstoich-73').classList.add("incorrect")
    
          document.getElementById('sa-chemstoich-7').disabled = true;
          document.getElementById('o-chemstoich-71').disabled = true;
          document.getElementById('o-chemstoich-72').disabled = true;
          document.getElementById('o-chemstoich-73').disabled = true;
          document.getElementById('o-chemstoich-74').disabled = true;
          showExplanation7()
          localStorage.setItem('chemstoich7', 0)
        }
        if (document.getElementById('o-chemstoich-74').checked) {
          document.getElementById('r-chemstoich-74').style.color = 'blue'
          document.getElementById('r-chemstoich-74').innerHTML = 'Correct!'
          
          document.getElementById('b-chemstoich-74').classList.add("correct")
          document.getElementById('b-chemstoich-71').classList.add("incorrect")
          document.getElementById('b-chemstoich-72').classList.add("incorrect")
          document.getElementById('b-chemstoich-73').classList.add("incorrect")
    
          document.getElementById('sa-chemstoich-7').disabled = true;
          document.getElementById('o-chemstoich-71').disabled = true;
          document.getElementById('o-chemstoich-72').disabled = true;
          document.getElementById('o-chemstoich-73').disabled = true;
          document.getElementById('o-chemstoich-74').disabled = true;
          showExplanation7()
          localStorage.setItem('chemstoich7', 1)
        }
      }
    }
    
    
    if (document.getElementById('sa-chemstoich-8') != null) {
      chemstoich8But.onclick = function() {
        if (document.getElementById('o-chemstoich-81').checked) {
          document.getElementById('r-chemstoich-81').style.color = 'red'
          document.getElementById('r-chemstoich-81').innerHTML = 'Incorrect!'
          document.getElementById('r-chemstoich-82').style.color = 'blue'
          document.getElementById('r-chemstoich-82').innerHTML = 'Correct!'
          
          document.getElementById('b-chemstoich-82').classList.add("correct")
          document.getElementById('b-chemstoich-81').classList.add("incorrect")
          document.getElementById('b-chemstoich-83').classList.add("incorrect")
          document.getElementById('b-chemstoich-84').classList.add("incorrect")
    
          document.getElementById('sa-chemstoich-8').disabled = true;
          document.getElementById('o-chemstoich-81').disabled = true;
          document.getElementById('o-chemstoich-82').disabled = true;
          document.getElementById('o-chemstoich-83').disabled = true;
          document.getElementById('o-chemstoich-84').disabled = true;
          showExplanation8()
          localStorage.setItem('chemstoich8', 0)
        }
        if (document.getElementById('o-chemstoich-82').checked) {
          document.getElementById('r-chemstoich-82').style.color = 'blue'
          document.getElementById('r-chemstoich-82').innerHTML = 'Correct!'
          
          document.getElementById('b-chemstoich-82').classList.add("correct")
          document.getElementById('b-chemstoich-81').classList.add("incorrect")
          document.getElementById('b-chemstoich-83').classList.add("incorrect")
          document.getElementById('b-chemstoich-84').classList.add("incorrect")
    
          document.getElementById('sa-chemstoich-8').disabled = true;
          document.getElementById('o-chemstoich-81').disabled = true;
          document.getElementById('o-chemstoich-82').disabled = true;
          document.getElementById('o-chemstoich-83').disabled = true;
          document.getElementById('o-chemstoich-84').disabled = true;
          showExplanation8()
          localStorage.setItem('chemstoich8', 1)
        }
        if (document.getElementById('o-chemstoich-83').checked) {
          document.getElementById('r-chemstoich-83').style.color = 'red'
          document.getElementById('r-chemstoich-83').innerHTML = 'Incorrect!'
          document.getElementById('r-chemstoich-82').style.color = 'blue'
          document.getElementById('r-chemstoich-82').innerHTML = 'Correct!'
          
          document.getElementById('b-chemstoich-82').classList.add("correct")
          document.getElementById('b-chemstoich-81').classList.add("incorrect")
          document.getElementById('b-chemstoich-83').classList.add("incorrect")
          document.getElementById('b-chemstoich-84').classList.add("incorrect")
    
          document.getElementById('sa-chemstoich-8').disabled = true;
          document.getElementById('o-chemstoich-81').disabled = true;
          document.getElementById('o-chemstoich-82').disabled = true;
          document.getElementById('o-chemstoich-83').disabled = true;
          document.getElementById('o-chemstoich-84').disabled = true;
          showExplanation8()
          localStorage.setItem('chemstoich8', 0)
        }
        if (document.getElementById('o-chemstoich-84').checked) {
          document.getElementById('r-chemstoich-84').style.color = 'red'
          document.getElementById('r-chemstoich-84').innerHTML = 'Incorrect!'
          document.getElementById('r-chemstoich-82').style.color = 'blue'
          document.getElementById('r-chemstoich-82').innerHTML = 'Correct!'
          
          document.getElementById('b-chemstoich-82').classList.add("correct")
          document.getElementById('b-chemstoich-81').classList.add("incorrect")
          document.getElementById('b-chemstoich-83').classList.add("incorrect")
          document.getElementById('b-chemstoich-84').classList.add("incorrect")
    
          document.getElementById('sa-chemstoich-8').disabled = true;
          document.getElementById('o-chemstoich-81').disabled = true;
          document.getElementById('o-chemstoich-82').disabled = true;
          document.getElementById('o-chemstoich-83').disabled = true;
          document.getElementById('o-chemstoich-84').disabled = true;
          showExplanation8()
          localStorage.setItem('chemstoich8', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-chemstoich-9') != null) {
      chemstoich9But.onclick = function() {
        if (document.getElementById('o-chemstoich-91').checked) {
          document.getElementById('r-chemstoich-91').style.color = 'red'
          document.getElementById('r-chemstoich-91').innerHTML = 'Incorrect!'
          document.getElementById('r-chemstoich-94').style.color = 'blue'
          document.getElementById('r-chemstoich-94').innerHTML = 'Correct!'
          
          document.getElementById('b-chemstoich-94').classList.add("correct")
          document.getElementById('b-chemstoich-91').classList.add("incorrect")
          document.getElementById('b-chemstoich-92').classList.add("incorrect")
          document.getElementById('b-chemstoich-93').classList.add("incorrect")
    
          document.getElementById('sa-chemstoich-9').disabled = true;
          document.getElementById('o-chemstoich-91').disabled = true;
          document.getElementById('o-chemstoich-92').disabled = true;
          document.getElementById('o-chemstoich-93').disabled = true;
          document.getElementById('o-chemstoich-94').disabled = true;
          showExplanation9()
          localStorage.setItem('chemstoich9', 0)
        }
        if (document.getElementById('o-chemstoich-92').checked) {
          document.getElementById('r-chemstoich-91').style.color = 'red'
          document.getElementById('r-chemstoich-91').innerHTML = 'Incorrect!'
          document.getElementById('r-chemstoich-94').style.color = 'blue'
          document.getElementById('r-chemstoich-94').innerHTML = 'Correct!'
          
          document.getElementById('b-chemstoich-94').classList.add("correct")
          document.getElementById('b-chemstoich-91').classList.add("incorrect")
          document.getElementById('b-chemstoich-92').classList.add("incorrect")
          document.getElementById('b-chemstoich-93').classList.add("incorrect")
    
          document.getElementById('sa-chemstoich-9').disabled = true;
          document.getElementById('o-chemstoich-91').disabled = true;
          document.getElementById('o-chemstoich-92').disabled = true;
          document.getElementById('o-chemstoich-93').disabled = true;
          document.getElementById('o-chemstoich-94').disabled = true;
          showExplanation9()
          localStorage.setItem('chemstoich9', 0)
        }
        if (document.getElementById('o-chemstoich-93').checked) {
          document.getElementById('r-chemstoich-91').style.color = 'red'
          document.getElementById('r-chemstoich-91').innerHTML = 'Incorrect!'
          document.getElementById('r-chemstoich-94').style.color = 'blue'
          document.getElementById('r-chemstoich-94').innerHTML = 'Correct!'
          
          document.getElementById('b-chemstoich-94').classList.add("correct")
          document.getElementById('b-chemstoich-91').classList.add("incorrect")
          document.getElementById('b-chemstoich-92').classList.add("incorrect")
          document.getElementById('b-chemstoich-93').classList.add("incorrect")
    
          document.getElementById('sa-chemstoich-9').disabled = true;
          document.getElementById('o-chemstoich-91').disabled = true;
          document.getElementById('o-chemstoich-92').disabled = true;
          document.getElementById('o-chemstoich-93').disabled = true;
          document.getElementById('o-chemstoich-94').disabled = true;
          showExplanation9()
          localStorage.setItem('chemstoich9', 0)
        }
        if (document.getElementById('o-chemstoich-94').checked) {
          document.getElementById('r-chemstoich-94').style.color = 'blue'
          document.getElementById('r-chemstoich-94').innerHTML = 'Correct!'
          
          document.getElementById('b-chemstoich-94').classList.add("correct")
          document.getElementById('b-chemstoich-91').classList.add("incorrect")
          document.getElementById('b-chemstoich-92').classList.add("incorrect")
          document.getElementById('b-chemstoich-93').classList.add("incorrect")
    
          document.getElementById('sa-chemstoich-9').disabled = true;
          document.getElementById('o-chemstoich-91').disabled = true;
          document.getElementById('o-chemstoich-92').disabled = true;
          document.getElementById('o-chemstoich-93').disabled = true;
          document.getElementById('o-chemstoich-94').disabled = true;
          showExplanation9()
          localStorage.setItem('chemstoich9', 1)
        }
      }
    }
    
    if (document.getElementById('sa-chemstoich-10') != null) {
      chemstoich10But.onclick = function() {
        if (document.getElementById('o-chemstoich-101').checked) {
          document.getElementById('r-chemstoich-101').style.color = 'red'
          document.getElementById('r-chemstoich-101').innerHTML = 'Incorrect!'
          document.getElementById('r-chemstoich-102').style.color = 'blue'
          document.getElementById('r-chemstoich-102').innerHTML = 'Correct!'
          
          document.getElementById('b-chemstoich-102').classList.add("correct")
          document.getElementById('b-chemstoich-101').classList.add("incorrect")
          document.getElementById('b-chemstoich-103').classList.add("incorrect")
          document.getElementById('b-chemstoich-104').classList.add("incorrect")
    
          document.getElementById('sa-chemstoich-10').disabled = true;
          document.getElementById('o-chemstoich-101').disabled = true;
          document.getElementById('o-chemstoich-102').disabled = true;
          document.getElementById('o-chemstoich-103').disabled = true;
          document.getElementById('o-chemstoich-104').disabled = true;
          showExplanation10()
          localStorage.setItem('chemstoich10', 0)
        }
        if (document.getElementById('o-chemstoich-102').checked) {
          document.getElementById('r-chemstoich-102').style.color = 'blue'
          document.getElementById('r-chemstoich-102').innerHTML = 'Correct!'
          
          document.getElementById('b-chemstoich-102').classList.add("correct")
          document.getElementById('b-chemstoich-101').classList.add("incorrect")
          document.getElementById('b-chemstoich-103').classList.add("incorrect")
          document.getElementById('b-chemstoich-104').classList.add("incorrect")
    
          document.getElementById('sa-chemstoich-10').disabled = true;
          document.getElementById('o-chemstoich-101').disabled = true;
          document.getElementById('o-chemstoich-102').disabled = true;
          document.getElementById('o-chemstoich-103').disabled = true;
          document.getElementById('o-chemstoich-104').disabled = true;
          showExplanation10()
          localStorage.setItem('chemstoich10', 1)
        }
        if (document.getElementById('o-chemstoich-103').checked) {
          document.getElementById('r-chemstoich-103').style.color = 'red'
          document.getElementById('r-chemstoich-103').innerHTML = 'Incorrect!'
          document.getElementById('r-chemstoich-102').style.color = 'blue'
          document.getElementById('r-chemstoich-102').innerHTML = 'Correct!'
          
          document.getElementById('b-chemstoich-102').classList.add("correct")
          document.getElementById('b-chemstoich-101').classList.add("incorrect")
          document.getElementById('b-chemstoich-103').classList.add("incorrect")
          document.getElementById('b-chemstoich-104').classList.add("incorrect")
    
          document.getElementById('sa-chemstoich-10').disabled = true;
          document.getElementById('o-chemstoich-101').disabled = true;
          document.getElementById('o-chemstoich-102').disabled = true;
          document.getElementById('o-chemstoich-103').disabled = true;
          document.getElementById('o-chemstoich-104').disabled = true;
          showExplanation10()
          localStorage.setItem('chemstoich10', 0)
        }
        if (document.getElementById('o-chemstoich-104').checked) {
          document.getElementById('r-chemstoich-104').style.color = 'red'
          document.getElementById('r-chemstoich-104').innerHTML = 'Incorrect!'
          document.getElementById('r-chemstoich-102').style.color = 'blue'
          document.getElementById('r-chemstoich-102').innerHTML = 'Correct!'
          
          document.getElementById('b-chemstoich-102').classList.add("correct")
          document.getElementById('b-chemstoich-101').classList.add("incorrect")
          document.getElementById('b-chemstoich-103').classList.add("incorrect")
          document.getElementById('b-chemstoich-104').classList.add("incorrect")
    
          document.getElementById('sa-chemstoich-10').disabled = true;
          document.getElementById('o-chemstoich-101').disabled = true;
          document.getElementById('o-chemstoich-102').disabled = true;
          document.getElementById('o-chemstoich-103').disabled = true;
          document.getElementById('o-chemstoich-104').disabled = true;
          showExplanation10()
          localStorage.setItem('chemstoich10', 0)
        }
      }
    }
    