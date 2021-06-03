
  let algsyseq1But = document.getElementById('sa-algsyseq-1');
  let algsyseq2But = document.getElementById('sa-algsyseq-2');
  let algsyseq3But = document.getElementById('sa-algsyseq-3');
  let algsyseq4But = document.getElementById('sa-algsyseq-4');
  let algsyseq5But = document.getElementById('sa-algsyseq-5');
  let algsyseq6But = document.getElementById('sa-algsyseq-6');
  let algsyseq7But = document.getElementById('sa-algsyseq-7');
  let algsyseq8But = document.getElementById('sa-algsyseq-8');
  let algsyseq9But = document.getElementById('sa-algsyseq-9');
  let algsyseq10But = document.getElementById('sa-algsyseq-10');


  showExplanation1 = function() {
    document.getElementById('e-algsyseq-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-algsyseq-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-algsyseq-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-algsyseq-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-algsyseq-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-algsyseq-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-algsyseq-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-algsyseq-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-algsyseq-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-algsyseq-10').style.display = 'block';
     } 



     if (document.getElementById('sa-algsyseq-1') != null) {
      algsyseq1But.onclick = function () {
        if (document.getElementById('o-algsyseq-11').checked) {
          document.getElementById('r-algsyseq-11').style.color = 'red'
          document.getElementById('r-algsyseq-11').innerHTML = 'Incorrect!'
          document.getElementById('r-algsyseq-14').style.color = 'blue'
          document.getElementById('r-algsyseq-14').innerHTML = 'Correct!'
    
          document.getElementById('b-algsyseq-14').classList.add("correct")
          document.getElementById('b-algsyseq-12').classList.add("incorrect")
          document.getElementById('b-algsyseq-13').classList.add("incorrect")
          document.getElementById('b-algsyseq-11').classList.add("incorrect")
    
          document.getElementById('sa-algsyseq-1').disabled = true;
          document.getElementById('o-algsyseq-11').disabled = true;
          document.getElementById('o-algsyseq-12').disabled = true;
          document.getElementById('o-algsyseq-13').disabled = true;
          document.getElementById('o-algsyseq-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algsyseq1', 0)
        }
    
        if (document.getElementById('o-algsyseq-12').checked) {
         
          document.getElementById('r-algsyseq-12').style.color = 'red'
          document.getElementById('r-algsyseq-12').innerHTML = 'Incorrect!'
          document.getElementById('r-algsyseq-14').style.color = 'blue'
          document.getElementById('r-algsyseq-14').innerHTML = 'Correct!'
    
          document.getElementById('b-algsyseq-14').classList.add("correct")
          document.getElementById('b-algsyseq-12').classList.add("incorrect")
          document.getElementById('b-algsyseq-13').classList.add("incorrect")
          document.getElementById('b-algsyseq-11').classList.add("incorrect")
    
          document.getElementById('sa-algsyseq-1').disabled = true;
          document.getElementById('o-algsyseq-11').disabled = true;
          document.getElementById('o-algsyseq-12').disabled = true;
          document.getElementById('o-algsyseq-13').disabled = true;
          document.getElementById('o-algsyseq-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algsyseq1', 0)
        }
        if (document.getElementById('o-algsyseq-13').checked) {
          document.getElementById('r-algsyseq-13').style.color = 'red'
          document.getElementById('r-algsyseq-13').innerHTML = 'Incorrect!'
          document.getElementById('r-algsyseq-14').style.color = 'blue'
          document.getElementById('r-algsyseq-14').innerHTML = 'Correct!'
          
          document.getElementById('b-algsyseq-14').classList.add("correct")
          document.getElementById('b-algsyseq-12').classList.add("incorrect")
          document.getElementById('b-algsyseq-13').classList.add("incorrect")
          document.getElementById('b-algsyseq-11').classList.add("incorrect")
    
          document.getElementById('sa-algsyseq-1').disabled = true;
          document.getElementById('o-algsyseq-11').disabled = true;
          document.getElementById('o-algsyseq-12').disabled = true;
          document.getElementById('o-algsyseq-13').disabled = true;
          document.getElementById('o-algsyseq-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algsyseq1', 0)
        }
        if (document.getElementById('o-algsyseq-14').checked) {
          document.getElementById('r-algsyseq-14').style.color = 'blue'
          document.getElementById('r-algsyseq-14').innerHTML = 'Correct!'
          
          document.getElementById('b-algsyseq-14').classList.add("correct")
          document.getElementById('b-algsyseq-12').classList.add("incorrect")
          document.getElementById('b-algsyseq-13').classList.add("incorrect")
          document.getElementById('b-algsyseq-11').classList.add("incorrect")
    
          document.getElementById('sa-algsyseq-1').disabled = true;
          document.getElementById('o-algsyseq-11').disabled = true;
          document.getElementById('o-algsyseq-12').disabled = true;
          document.getElementById('o-algsyseq-13').disabled = true;
          document.getElementById('o-algsyseq-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algsyseq1', 1)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-algsyseq-2') != null) {
      algsyseq2But.onclick = function() {
        if (document.getElementById('o-algsyseq-21').checked) {
          document.getElementById('r-algsyseq-21').style.color = 'red'
          document.getElementById('r-algsyseq-21').innerHTML = 'Incorrect!'
          document.getElementById('r-algsyseq-23').style.color = 'blue'
          document.getElementById('r-algsyseq-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algsyseq-23').classList.add("correct")
          document.getElementById('b-algsyseq-21').classList.add("incorrect")
          document.getElementById('b-algsyseq-22').classList.add("incorrect")
          document.getElementById('b-algsyseq-24').classList.add("incorrect")
    
          document.getElementById('sa-algsyseq-2').disabled = true;
          document.getElementById('o-algsyseq-21').disabled = true;
          document.getElementById('o-algsyseq-22').disabled = true;
          document.getElementById('o-algsyseq-23').disabled = true;
          document.getElementById('o-algsyseq-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algsyseq2', 0)
        }
        if (document.getElementById('o-algsyseq-22').checked) {
          document.getElementById('r-algsyseq-22').style.color = 'red'
          document.getElementById('r-algsyseq-22').innerHTML = 'Incorrect!'
          document.getElementById('r-algsyseq-23').style.color = 'blue'
          document.getElementById('r-algsyseq-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algsyseq-23').classList.add("correct")
          document.getElementById('b-algsyseq-21').classList.add("incorrect")
          document.getElementById('b-algsyseq-22').classList.add("incorrect")
          document.getElementById('b-algsyseq-24').classList.add("incorrect")
    
          document.getElementById('sa-algsyseq-2').disabled = true;
          document.getElementById('o-algsyseq-21').disabled = true;
          document.getElementById('o-algsyseq-22').disabled = true;
          document.getElementById('o-algsyseq-23').disabled = true;
          document.getElementById('o-algsyseq-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algsyseq2', 0)
        }
        if (document.getElementById('o-algsyseq-23').checked) {
          document.getElementById('r-algsyseq-23').style.color = 'blue'
          document.getElementById('r-algsyseq-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algsyseq-23').classList.add("correct")
          document.getElementById('b-algsyseq-21').classList.add("incorrect")
          document.getElementById('b-algsyseq-22').classList.add("incorrect")
          document.getElementById('b-algsyseq-24').classList.add("incorrect")
    
          document.getElementById('sa-algsyseq-2').disabled = true;
          document.getElementById('o-algsyseq-21').disabled = true;
          document.getElementById('o-algsyseq-22').disabled = true;
          document.getElementById('o-algsyseq-23').disabled = true;
          document.getElementById('o-algsyseq-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algsyseq2', 1)
        }
        if (document.getElementById('o-algsyseq-24').checked) {
          document.getElementById('r-algsyseq-24').style.color = 'red'
          document.getElementById('r-algsyseq-24').innerHTML = 'Incorrect!'
          document.getElementById('r-algsyseq-23').style.color = 'blue'
          document.getElementById('r-algsyseq-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algsyseq-23').classList.add("correct")
          document.getElementById('b-algsyseq-21').classList.add("incorrect")
          document.getElementById('b-algsyseq-22').classList.add("incorrect")
          document.getElementById('b-algsyseq-24').classList.add("incorrect")
    
          document.getElementById('sa-algsyseq-2').disabled = true;
          document.getElementById('o-algsyseq-21').disabled = true;
          document.getElementById('o-algsyseq-22').disabled = true;
          document.getElementById('o-algsyseq-23').disabled = true;
          document.getElementById('o-algsyseq-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algsyseq2', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algsyseq-3') != null) {
      algsyseq3But.onclick = function() {
        if (document.getElementById('o-algsyseq-31').checked) {
          document.getElementById('r-algsyseq-31').style.color = 'red'
          document.getElementById('r-algsyseq-31').innerHTML = 'Incorrect!'
          document.getElementById('r-algsyseq-32').style.color = 'blue'
          document.getElementById('r-algsyseq-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algsyseq-32').classList.add("correct")
          document.getElementById('b-algsyseq-31').classList.add("incorrect")
          document.getElementById('b-algsyseq-33').classList.add("incorrect")
          document.getElementById('b-algsyseq-34').classList.add("incorrect")
    
          document.getElementById('sa-algsyseq-3').disabled = true;
          document.getElementById('o-algsyseq-31').disabled = true;
          document.getElementById('o-algsyseq-32').disabled = true;
          document.getElementById('o-algsyseq-33').disabled = true;
          document.getElementById('o-algsyseq-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algsyseq3', 0)
        }
        if (document.getElementById('o-algsyseq-32').checked) {
    
          document.getElementById('r-algsyseq-32').style.color = 'blue'
          document.getElementById('r-algsyseq-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algsyseq-32').classList.add("correct")
          document.getElementById('b-algsyseq-31').classList.add("incorrect")
          document.getElementById('b-algsyseq-33').classList.add("incorrect")
          document.getElementById('b-algsyseq-34').classList.add("incorrect")
    
          document.getElementById('sa-algsyseq-3').disabled = true;
          document.getElementById('o-algsyseq-31').disabled = true;
          document.getElementById('o-algsyseq-32').disabled = true;
          document.getElementById('o-algsyseq-33').disabled = true;
          document.getElementById('o-algsyseq-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algsyseq3', 1)
        }
        if (document.getElementById('o-algsyseq-33').checked) {
          document.getElementById('r-algsyseq-33').style.color = 'red'
          document.getElementById('r-algsyseq-33').innerHTML = 'Incorrect!'
          document.getElementById('r-algsyseq-32').style.color = 'blue'
          document.getElementById('r-algsyseq-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algsyseq-32').classList.add("correct")
          document.getElementById('b-algsyseq-31').classList.add("incorrect")
          document.getElementById('b-algsyseq-33').classList.add("incorrect")
          document.getElementById('b-algsyseq-34').classList.add("incorrect")
    
          document.getElementById('sa-algsyseq-3').disabled = true;
          document.getElementById('o-algsyseq-31').disabled = true;
          document.getElementById('o-algsyseq-32').disabled = true;
          document.getElementById('o-algsyseq-33').disabled = true;
          document.getElementById('o-algsyseq-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algsyseq3', 0)
        }
        if (document.getElementById('o-algsyseq-34').checked) {
          document.getElementById('r-algsyseq-34').style.color = 'red'
          document.getElementById('r-algsyseq-34').innerHTML = 'Incorrect!'
          document.getElementById('r-algsyseq-32').style.color = 'blue'
          document.getElementById('r-algsyseq-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algsyseq-32').classList.add("correct")
          document.getElementById('b-algsyseq-31').classList.add("incorrect")
          document.getElementById('b-algsyseq-33').classList.add("incorrect")
          document.getElementById('b-algsyseq-34').classList.add("incorrect")
    
          document.getElementById('sa-algsyseq-3').disabled = true;
          document.getElementById('o-algsyseq-31').disabled = true;
          document.getElementById('o-algsyseq-32').disabled = true;
          document.getElementById('o-algsyseq-33').disabled = true;
          document.getElementById('o-algsyseq-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algsyseq3', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algsyseq-4') != null) {
      algsyseq4But.onclick = function() {
        if (document.getElementById('o-algsyseq-41').checked) {
          document.getElementById('r-algsyseq-41').style.color = 'red'
          document.getElementById('r-algsyseq-41').innerHTML = 'Incorrect!'
          document.getElementById('r-algsyseq-44').style.color = 'blue'
          document.getElementById('r-algsyseq-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algsyseq-44').classList.add("correct")
          document.getElementById('b-algsyseq-41').classList.add("incorrect")
          document.getElementById('b-algsyseq-42').classList.add("incorrect")
          document.getElementById('b-algsyseq-43').classList.add("incorrect")
    
          document.getElementById('sa-algsyseq-4').disabled = true;
          document.getElementById('o-algsyseq-41').disabled = true;
          document.getElementById('o-algsyseq-42').disabled = true;
          document.getElementById('o-algsyseq-43').disabled = true;
          document.getElementById('o-algsyseq-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algsyseq4', 0)
        }
        if (document.getElementById('o-algsyseq-42').checked) {
          document.getElementById('r-algsyseq-42').style.color = 'red'
          document.getElementById('r-algsyseq-42').innerHTML = 'Incorrect!'
          document.getElementById('r-algsyseq-44').style.color = 'blue'
          document.getElementById('r-algsyseq-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algsyseq-44').classList.add("correct")
          document.getElementById('b-algsyseq-41').classList.add("incorrect")
          document.getElementById('b-algsyseq-42').classList.add("incorrect")
          document.getElementById('b-algsyseq-43').classList.add("incorrect")
    
          document.getElementById('sa-algsyseq-4').disabled = true;
          document.getElementById('o-algsyseq-41').disabled = true;
          document.getElementById('o-algsyseq-42').disabled = true;
          document.getElementById('o-algsyseq-43').disabled = true;
          document.getElementById('o-algsyseq-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algsyseq4', 0)
        }
        if (document.getElementById('o-algsyseq-43').checked) {
          document.getElementById('r-algsyseq-43').style.color = 'red'
          document.getElementById('r-algsyseq-43').innerHTML = 'Incorrect!'
          document.getElementById('r-algsyseq-44').style.color = 'blue'
          document.getElementById('r-algsyseq-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algsyseq-44').classList.add("correct")
          document.getElementById('b-algsyseq-41').classList.add("incorrect")
          document.getElementById('b-algsyseq-42').classList.add("incorrect")
          document.getElementById('b-algsyseq-43').classList.add("incorrect")
    
          document.getElementById('sa-algsyseq-4').disabled = true;
          document.getElementById('o-algsyseq-41').disabled = true;
          document.getElementById('o-algsyseq-42').disabled = true;
          document.getElementById('o-algsyseq-43').disabled = true;
          document.getElementById('o-algsyseq-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algsyseq4', 0)
        }
        if (document.getElementById('o-algsyseq-44').checked) {
          document.getElementById('r-algsyseq-44').style.color = 'blue'
          document.getElementById('r-algsyseq-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algsyseq-44').classList.add("correct")
          document.getElementById('b-algsyseq-41').classList.add("incorrect")
          document.getElementById('b-algsyseq-42').classList.add("incorrect")
          document.getElementById('b-algsyseq-43').classList.add("incorrect")
    
          document.getElementById('sa-algsyseq-4').disabled = true;
          document.getElementById('o-algsyseq-41').disabled = true;
          document.getElementById('o-algsyseq-42').disabled = true;
          document.getElementById('o-algsyseq-43').disabled = true;
          document.getElementById('o-algsyseq-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algsyseq4', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algsyseq-5') != null) {
      algsyseq5But.onclick = function() {
        if (document.getElementById('o-algsyseq-51').checked) {
          document.getElementById('r-algsyseq-51').style.color = 'red'
          document.getElementById('r-algsyseq-51').innerHTML = 'Incorrect!'
          document.getElementById('r-algsyseq-53').style.color = 'blue'
          document.getElementById('r-algsyseq-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algsyseq-53').classList.add("correct")
          document.getElementById('b-algsyseq-51').classList.add("incorrect")
          document.getElementById('b-algsyseq-52').classList.add("incorrect")
          document.getElementById('b-algsyseq-54').classList.add("incorrect")
    
          document.getElementById('sa-algsyseq-5').disabled = true;
          document.getElementById('o-algsyseq-51').disabled = true;
          document.getElementById('o-algsyseq-52').disabled = true;
          document.getElementById('o-algsyseq-53').disabled = true;
          document.getElementById('o-algsyseq-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algsyseq5', 0)
        }
        if (document.getElementById('o-algsyseq-52').checked) {
          document.getElementById('r-algsyseq-52').style.color = 'red'
          document.getElementById('r-algsyseq-52').innerHTML = 'Incorrect!'
          document.getElementById('r-algsyseq-53').style.color = 'blue'
          document.getElementById('r-algsyseq-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algsyseq-53').classList.add("correct")
          document.getElementById('b-algsyseq-51').classList.add("incorrect")
          document.getElementById('b-algsyseq-52').classList.add("incorrect")
          document.getElementById('b-algsyseq-54').classList.add("incorrect")
    
          document.getElementById('sa-algsyseq-5').disabled = true;
          document.getElementById('o-algsyseq-51').disabled = true;
          document.getElementById('o-algsyseq-52').disabled = true;
          document.getElementById('o-algsyseq-53').disabled = true;
          document.getElementById('o-algsyseq-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algsyseq5', 0)
        }
        if (document.getElementById('o-algsyseq-53').checked) {
          document.getElementById('r-algsyseq-53').style.color = 'blue'
          document.getElementById('r-algsyseq-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algsyseq-53').classList.add("correct")
          document.getElementById('b-algsyseq-51').classList.add("incorrect")
          document.getElementById('b-algsyseq-52').classList.add("incorrect")
          document.getElementById('b-algsyseq-54').classList.add("incorrect")
    
          document.getElementById('sa-algsyseq-5').disabled = true;
          document.getElementById('o-algsyseq-51').disabled = true;
          document.getElementById('o-algsyseq-52').disabled = true;
          document.getElementById('o-algsyseq-53').disabled = true;
          document.getElementById('o-algsyseq-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algsyseq5', 1)
        }
        if (document.getElementById('o-algsyseq-54').checked) {
          document.getElementById('r-algsyseq-54').style.color = 'red'
          document.getElementById('r-algsyseq-54').innerHTML = 'Incorrect!'
          document.getElementById('r-algsyseq-53').style.color = 'blue'
          document.getElementById('r-algsyseq-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algsyseq-53').classList.add("correct")
          document.getElementById('b-algsyseq-51').classList.add("incorrect")
          document.getElementById('b-algsyseq-52').classList.add("incorrect")
          document.getElementById('b-algsyseq-54').classList.add("incorrect")
    
          document.getElementById('sa-algsyseq-5').disabled = true;
          document.getElementById('o-algsyseq-51').disabled = true;
          document.getElementById('o-algsyseq-52').disabled = true;
          document.getElementById('o-algsyseq-53').disabled = true;
          document.getElementById('o-algsyseq-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algsyseq5', 0)
        }
      }
    }
        
         
      if (document.getElementById('sa-algsyseq-6') != null) {
      algsyseq6But.onclick = function() {
        if (document.getElementById('o-algsyseq-61').checked) {
          document.getElementById('r-algsyseq-61').style.color = 'red'
          document.getElementById('r-algsyseq-61').innerHTML = 'Incorrect!'
          document.getElementById('r-algsyseq-64').style.color = 'blue'
          document.getElementById('r-algsyseq-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algsyseq-64').classList.add("correct")
          document.getElementById('b-algsyseq-61').classList.add("incorrect")
          document.getElementById('b-algsyseq-62').classList.add("incorrect")
          document.getElementById('b-algsyseq-63').classList.add("incorrect")
    
          document.getElementById('sa-algsyseq-6').disabled = true;
          document.getElementById('o-algsyseq-61').disabled = true;
          document.getElementById('o-algsyseq-62').disabled = true;
          document.getElementById('o-algsyseq-63').disabled = true;
          document.getElementById('o-algsyseq-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algsyseq6', 0)
        }
        if (document.getElementById('o-algsyseq-62').checked) {
          document.getElementById('r-algsyseq-62').style.color = 'red'
          document.getElementById('r-algsyseq-62').innerHTML = 'Incorrect!'
          document.getElementById('r-algsyseq-64').style.color = 'blue'
          document.getElementById('r-algsyseq-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algsyseq-64').classList.add("correct")
          document.getElementById('b-algsyseq-61').classList.add("incorrect")
          document.getElementById('b-algsyseq-62').classList.add("incorrect")
          document.getElementById('b-algsyseq-63').classList.add("incorrect")
    
          document.getElementById('sa-algsyseq-6').disabled = true;
          document.getElementById('o-algsyseq-61').disabled = true;
          document.getElementById('o-algsyseq-62').disabled = true;
          document.getElementById('o-algsyseq-63').disabled = true;
          document.getElementById('o-algsyseq-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algsyseq6', 0)
        }
        if (document.getElementById('o-algsyseq-63').checked) {
          document.getElementById('r-algsyseq-63').style.color = 'red'
          document.getElementById('r-algsyseq-63').innerHTML = 'Incorrect!'
          document.getElementById('r-algsyseq-64').style.color = 'blue'
          document.getElementById('r-algsyseq-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algsyseq-64').classList.add("correct")
          document.getElementById('b-algsyseq-61').classList.add("incorrect")
          document.getElementById('b-algsyseq-62').classList.add("incorrect")
          document.getElementById('b-algsyseq-63').classList.add("incorrect")
    
          document.getElementById('sa-algsyseq-6').disabled = true;
          document.getElementById('o-algsyseq-61').disabled = true;
          document.getElementById('o-algsyseq-62').disabled = true;
          document.getElementById('o-algsyseq-63').disabled = true;
          document.getElementById('o-algsyseq-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algsyseq6', 0)
        }
        if (document.getElementById('o-algsyseq-64').checked) {
          document.getElementById('r-algsyseq-64').style.color = 'blue'
          document.getElementById('r-algsyseq-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algsyseq-64').classList.add("correct")
          document.getElementById('b-algsyseq-61').classList.add("incorrect")
          document.getElementById('b-algsyseq-62').classList.add("incorrect")
          document.getElementById('b-algsyseq-63').classList.add("incorrect")
    
          document.getElementById('sa-algsyseq-6').disabled = true;
          document.getElementById('o-algsyseq-61').disabled = true;
          document.getElementById('o-algsyseq-62').disabled = true;
          document.getElementById('o-algsyseq-63').disabled = true;
          document.getElementById('o-algsyseq-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algsyseq6', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algsyseq-7') != null) {
      algsyseq7But.onclick = function() {
        if (document.getElementById('o-algsyseq-71').checked) {
          document.getElementById('r-algsyseq-71').style.color = 'red'
          document.getElementById('r-algsyseq-71').innerHTML = 'Incorrect!'
          document.getElementById('r-algsyseq-74').style.color = 'blue'
          document.getElementById('r-algsyseq-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algsyseq-74').classList.add("correct")
          document.getElementById('b-algsyseq-71').classList.add("incorrect")
          document.getElementById('b-algsyseq-72').classList.add("incorrect")
          document.getElementById('b-algsyseq-73').classList.add("incorrect")
    
          document.getElementById('sa-algsyseq-7').disabled = true;
          document.getElementById('o-algsyseq-71').disabled = true;
          document.getElementById('o-algsyseq-72').disabled = true;
          document.getElementById('o-algsyseq-73').disabled = true;
          document.getElementById('o-algsyseq-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algsyseq7', 0)
        }
        if (document.getElementById('o-algsyseq-72').checked) {
          document.getElementById('r-algsyseq-72').style.color = 'red'
          document.getElementById('r-algsyseq-72').innerHTML = 'Incorrect!'
          document.getElementById('r-algsyseq-74').style.color = 'blue'
          document.getElementById('r-algsyseq-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algsyseq-74').classList.add("correct")
          document.getElementById('b-algsyseq-71').classList.add("incorrect")
          document.getElementById('b-algsyseq-72').classList.add("incorrect")
          document.getElementById('b-algsyseq-73').classList.add("incorrect")
    
          document.getElementById('sa-algsyseq-7').disabled = true;
          document.getElementById('o-algsyseq-71').disabled = true;
          document.getElementById('o-algsyseq-72').disabled = true;
          document.getElementById('o-algsyseq-73').disabled = true;
          document.getElementById('o-algsyseq-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algsyseq7', 0)
        }
        if (document.getElementById('o-algsyseq-73').checked) {
          document.getElementById('r-algsyseq-73').style.color = 'red'
          document.getElementById('r-algsyseq-73').innerHTML = 'Incorrect!'
          document.getElementById('r-algsyseq-74').style.color = 'blue'
          document.getElementById('r-algsyseq-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algsyseq-74').classList.add("correct")
          document.getElementById('b-algsyseq-71').classList.add("incorrect")
          document.getElementById('b-algsyseq-72').classList.add("incorrect")
          document.getElementById('b-algsyseq-73').classList.add("incorrect")
    
          document.getElementById('sa-algsyseq-7').disabled = true;
          document.getElementById('o-algsyseq-71').disabled = true;
          document.getElementById('o-algsyseq-72').disabled = true;
          document.getElementById('o-algsyseq-73').disabled = true;
          document.getElementById('o-algsyseq-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algsyseq7', 0)
        }
        if (document.getElementById('o-algsyseq-74').checked) {
          document.getElementById('r-algsyseq-74').style.color = 'blue'
          document.getElementById('r-algsyseq-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algsyseq-74').classList.add("correct")
          document.getElementById('b-algsyseq-71').classList.add("incorrect")
          document.getElementById('b-algsyseq-72').classList.add("incorrect")
          document.getElementById('b-algsyseq-73').classList.add("incorrect")
    
          document.getElementById('sa-algsyseq-7').disabled = true;
          document.getElementById('o-algsyseq-71').disabled = true;
          document.getElementById('o-algsyseq-72').disabled = true;
          document.getElementById('o-algsyseq-73').disabled = true;
          document.getElementById('o-algsyseq-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algsyseq7', 1)
        }
      }
    }
    
    
    if (document.getElementById('sa-algsyseq-8') != null) {
      algsyseq8But.onclick = function() {
        if (document.getElementById('o-algsyseq-81').checked) {
          document.getElementById('r-algsyseq-81').style.color = 'red'
          document.getElementById('r-algsyseq-81').innerHTML = 'Incorrect!'
          document.getElementById('r-algsyseq-82').style.color = 'blue'
          document.getElementById('r-algsyseq-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algsyseq-82').classList.add("correct")
          document.getElementById('b-algsyseq-81').classList.add("incorrect")
          document.getElementById('b-algsyseq-83').classList.add("incorrect")
          document.getElementById('b-algsyseq-84').classList.add("incorrect")
    
          document.getElementById('sa-algsyseq-8').disabled = true;
          document.getElementById('o-algsyseq-81').disabled = true;
          document.getElementById('o-algsyseq-82').disabled = true;
          document.getElementById('o-algsyseq-83').disabled = true;
          document.getElementById('o-algsyseq-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algsyseq8', 0)
        }
        if (document.getElementById('o-algsyseq-82').checked) {
          document.getElementById('r-algsyseq-82').style.color = 'blue'
          document.getElementById('r-algsyseq-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algsyseq-82').classList.add("correct")
          document.getElementById('b-algsyseq-81').classList.add("incorrect")
          document.getElementById('b-algsyseq-83').classList.add("incorrect")
          document.getElementById('b-algsyseq-84').classList.add("incorrect")
    
          document.getElementById('sa-algsyseq-8').disabled = true;
          document.getElementById('o-algsyseq-81').disabled = true;
          document.getElementById('o-algsyseq-82').disabled = true;
          document.getElementById('o-algsyseq-83').disabled = true;
          document.getElementById('o-algsyseq-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algsyseq8', 1)
        }
        if (document.getElementById('o-algsyseq-83').checked) {
          document.getElementById('r-algsyseq-83').style.color = 'red'
          document.getElementById('r-algsyseq-83').innerHTML = 'Incorrect!'
          document.getElementById('r-algsyseq-82').style.color = 'blue'
          document.getElementById('r-algsyseq-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algsyseq-82').classList.add("correct")
          document.getElementById('b-algsyseq-81').classList.add("incorrect")
          document.getElementById('b-algsyseq-83').classList.add("incorrect")
          document.getElementById('b-algsyseq-84').classList.add("incorrect")
    
          document.getElementById('sa-algsyseq-8').disabled = true;
          document.getElementById('o-algsyseq-81').disabled = true;
          document.getElementById('o-algsyseq-82').disabled = true;
          document.getElementById('o-algsyseq-83').disabled = true;
          document.getElementById('o-algsyseq-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algsyseq8', 0)
        }
        if (document.getElementById('o-algsyseq-84').checked) {
          document.getElementById('r-algsyseq-84').style.color = 'red'
          document.getElementById('r-algsyseq-84').innerHTML = 'Incorrect!'
          document.getElementById('r-algsyseq-82').style.color = 'blue'
          document.getElementById('r-algsyseq-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algsyseq-82').classList.add("correct")
          document.getElementById('b-algsyseq-81').classList.add("incorrect")
          document.getElementById('b-algsyseq-83').classList.add("incorrect")
          document.getElementById('b-algsyseq-84').classList.add("incorrect")
    
          document.getElementById('sa-algsyseq-8').disabled = true;
          document.getElementById('o-algsyseq-81').disabled = true;
          document.getElementById('o-algsyseq-82').disabled = true;
          document.getElementById('o-algsyseq-83').disabled = true;
          document.getElementById('o-algsyseq-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algsyseq8', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-algsyseq-9') != null) {
      algsyseq9But.onclick = function() {
        if (document.getElementById('o-algsyseq-91').checked) {
          document.getElementById('r-algsyseq-91').style.color = 'red'
          document.getElementById('r-algsyseq-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algsyseq-94').style.color = 'blue'
          document.getElementById('r-algsyseq-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algsyseq-94').classList.add("correct")
          document.getElementById('b-algsyseq-91').classList.add("incorrect")
          document.getElementById('b-algsyseq-92').classList.add("incorrect")
          document.getElementById('b-algsyseq-93').classList.add("incorrect")
    
          document.getElementById('sa-algsyseq-9').disabled = true;
          document.getElementById('o-algsyseq-91').disabled = true;
          document.getElementById('o-algsyseq-92').disabled = true;
          document.getElementById('o-algsyseq-93').disabled = true;
          document.getElementById('o-algsyseq-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algsyseq9', 0)
        }
        if (document.getElementById('o-algsyseq-92').checked) {
          document.getElementById('r-algsyseq-91').style.color = 'red'
          document.getElementById('r-algsyseq-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algsyseq-94').style.color = 'blue'
          document.getElementById('r-algsyseq-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algsyseq-94').classList.add("correct")
          document.getElementById('b-algsyseq-91').classList.add("incorrect")
          document.getElementById('b-algsyseq-92').classList.add("incorrect")
          document.getElementById('b-algsyseq-93').classList.add("incorrect")
    
          document.getElementById('sa-algsyseq-9').disabled = true;
          document.getElementById('o-algsyseq-91').disabled = true;
          document.getElementById('o-algsyseq-92').disabled = true;
          document.getElementById('o-algsyseq-93').disabled = true;
          document.getElementById('o-algsyseq-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algsyseq9', 0)
        }
        if (document.getElementById('o-algsyseq-93').checked) {
          document.getElementById('r-algsyseq-91').style.color = 'red'
          document.getElementById('r-algsyseq-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algsyseq-94').style.color = 'blue'
          document.getElementById('r-algsyseq-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algsyseq-94').classList.add("correct")
          document.getElementById('b-algsyseq-91').classList.add("incorrect")
          document.getElementById('b-algsyseq-92').classList.add("incorrect")
          document.getElementById('b-algsyseq-93').classList.add("incorrect")
    
          document.getElementById('sa-algsyseq-9').disabled = true;
          document.getElementById('o-algsyseq-91').disabled = true;
          document.getElementById('o-algsyseq-92').disabled = true;
          document.getElementById('o-algsyseq-93').disabled = true;
          document.getElementById('o-algsyseq-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algsyseq9', 0)
        }
        if (document.getElementById('o-algsyseq-94').checked) {
          document.getElementById('r-algsyseq-94').style.color = 'blue'
          document.getElementById('r-algsyseq-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algsyseq-94').classList.add("correct")
          document.getElementById('b-algsyseq-91').classList.add("incorrect")
          document.getElementById('b-algsyseq-92').classList.add("incorrect")
          document.getElementById('b-algsyseq-93').classList.add("incorrect")
    
          document.getElementById('sa-algsyseq-9').disabled = true;
          document.getElementById('o-algsyseq-91').disabled = true;
          document.getElementById('o-algsyseq-92').disabled = true;
          document.getElementById('o-algsyseq-93').disabled = true;
          document.getElementById('o-algsyseq-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algsyseq9', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algsyseq-10') != null) {
      algsyseq10But.onclick = function() {
        if (document.getElementById('o-algsyseq-101').checked) {
          document.getElementById('r-algsyseq-101').style.color = 'red'
          document.getElementById('r-algsyseq-101').innerHTML = 'Incorrect!'
          document.getElementById('r-algsyseq-102').style.color = 'blue'
          document.getElementById('r-algsyseq-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algsyseq-102').classList.add("correct")
          document.getElementById('b-algsyseq-101').classList.add("incorrect")
          document.getElementById('b-algsyseq-103').classList.add("incorrect")
          document.getElementById('b-algsyseq-104').classList.add("incorrect")
    
          document.getElementById('sa-algsyseq-10').disabled = true;
          document.getElementById('o-algsyseq-101').disabled = true;
          document.getElementById('o-algsyseq-102').disabled = true;
          document.getElementById('o-algsyseq-103').disabled = true;
          document.getElementById('o-algsyseq-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algsyseq10', 0)
        }
        if (document.getElementById('o-algsyseq-102').checked) {
          document.getElementById('r-algsyseq-102').style.color = 'blue'
          document.getElementById('r-algsyseq-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algsyseq-102').classList.add("correct")
          document.getElementById('b-algsyseq-101').classList.add("incorrect")
          document.getElementById('b-algsyseq-103').classList.add("incorrect")
          document.getElementById('b-algsyseq-104').classList.add("incorrect")
    
          document.getElementById('sa-algsyseq-10').disabled = true;
          document.getElementById('o-algsyseq-101').disabled = true;
          document.getElementById('o-algsyseq-102').disabled = true;
          document.getElementById('o-algsyseq-103').disabled = true;
          document.getElementById('o-algsyseq-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algsyseq10', 1)
        }
        if (document.getElementById('o-algsyseq-103').checked) {
          document.getElementById('r-algsyseq-103').style.color = 'red'
          document.getElementById('r-algsyseq-103').innerHTML = 'Incorrect!'
          document.getElementById('r-algsyseq-102').style.color = 'blue'
          document.getElementById('r-algsyseq-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algsyseq-102').classList.add("correct")
          document.getElementById('b-algsyseq-101').classList.add("incorrect")
          document.getElementById('b-algsyseq-103').classList.add("incorrect")
          document.getElementById('b-algsyseq-104').classList.add("incorrect")
    
          document.getElementById('sa-algsyseq-10').disabled = true;
          document.getElementById('o-algsyseq-101').disabled = true;
          document.getElementById('o-algsyseq-102').disabled = true;
          document.getElementById('o-algsyseq-103').disabled = true;
          document.getElementById('o-algsyseq-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algsyseq10', 0)
        }
        if (document.getElementById('o-algsyseq-104').checked) {
          document.getElementById('r-algsyseq-104').style.color = 'red'
          document.getElementById('r-algsyseq-104').innerHTML = 'Incorrect!'
          document.getElementById('r-algsyseq-102').style.color = 'blue'
          document.getElementById('r-algsyseq-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algsyseq-102').classList.add("correct")
          document.getElementById('b-algsyseq-101').classList.add("incorrect")
          document.getElementById('b-algsyseq-103').classList.add("incorrect")
          document.getElementById('b-algsyseq-104').classList.add("incorrect")
    
          document.getElementById('sa-algsyseq-10').disabled = true;
          document.getElementById('o-algsyseq-101').disabled = true;
          document.getElementById('o-algsyseq-102').disabled = true;
          document.getElementById('o-algsyseq-103').disabled = true;
          document.getElementById('o-algsyseq-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algsyseq10', 0)
        }
      }
    }
    