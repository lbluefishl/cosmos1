
  let subject1But = document.getElementById('sa-subject-1');
  let subject2But = document.getElementById('sa-subject-2');
  let subject3But = document.getElementById('sa-subject-3');
  let subject4But = document.getElementById('sa-subject-4');
  let subject5But = document.getElementById('sa-subject-5');
  let subject6But = document.getElementById('sa-subject-6');
  let subject7But = document.getElementById('sa-subject-7');
  let subject8But = document.getElementById('sa-subject-8');
  let subject9But = document.getElementById('sa-subject-9');
  let subject10But = document.getElementById('sa-subject-10');


  showExplanation1 = function() {
    document.getElementById('e-subject-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-subject-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-subject-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-subject-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-subject-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-subject-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-subject-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-subject-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-subject-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-subject-10').style.display = 'block';
     } 



     if (document.getElementById('sa-subject-1') != null) {
      subject1But.onclick = function () {
        if (document.getElementById('o-subject-11').checked) {
          document.getElementById('r-subject-11').style.color = 'blue'
          document.getElementById('r-subject-11').innerHTML = 'Correct!'
    
          document.getElementById('b-subject-11').classList.add("correct")
          document.getElementById('b-subject-12').classList.add("incorrect")
          document.getElementById('b-subject-13').classList.add("incorrect")
          document.getElementById('b-subject-14').classList.add("incorrect")
    
          document.getElementById('sa-subject-1').disabled = true;
          document.getElementById('o-subject-11').disabled = true;
          document.getElementById('o-subject-12').disabled = true;
          document.getElementById('o-subject-13').disabled = true;
          document.getElementById('o-subject-14').disabled = true;
          showExplanation1()
          localStorage.setItem('subject1', 1)
        }
    
        if (document.getElementById('o-subject-12').checked) {
          document.getElementById('r-subject-12').style.color = 'red'
          document.getElementById('r-subject-12').innerHTML = 'Incorrect!'
          document.getElementById('r-subject-11').style.color = 'blue'
          document.getElementById('r-subject-11').innerHTML = 'Correct!'
    
          document.getElementById('b-subject-11').classList.add("correct")
          document.getElementById('b-subject-12').classList.add("incorrect")
          document.getElementById('b-subject-13').classList.add("incorrect")
          document.getElementById('b-subject-14').classList.add("incorrect")
    
          document.getElementById('sa-subject-1').disabled = true;
          document.getElementById('o-subject-11').disabled = true;
          document.getElementById('o-subject-12').disabled = true;
          document.getElementById('o-subject-13').disabled = true;
          document.getElementById('o-subject-14').disabled = true;
          showExplanation1()
          localStorage.setItem('subject1', 0)
        }
        if (document.getElementById('o-subject-13').checked) {
          document.getElementById('r-subject-13').style.color = 'red'
          document.getElementById('r-subject-13').innerHTML = 'Incorrect!'
          document.getElementById('r-subject-11').style.color = 'blue'
          document.getElementById('r-subject-11').innerHTML = 'Correct!'
          
          document.getElementById('b-subject-11').classList.add("correct")
          document.getElementById('b-subject-12').classList.add("incorrect")
          document.getElementById('b-subject-13').classList.add("incorrect")
          document.getElementById('b-subject-14').classList.add("incorrect")
    
          document.getElementById('sa-subject-1').disabled = true;
          document.getElementById('o-subject-11').disabled = true;
          document.getElementById('o-subject-12').disabled = true;
          document.getElementById('o-subject-13').disabled = true;
          document.getElementById('o-subject-14').disabled = true;
          showExplanation1()
          localStorage.setItem('subject1', 0)
        }
        if (document.getElementById('o-subject-14').checked) {
          document.getElementById('r-subject-14').style.color = 'red'
          document.getElementById('r-subject-14').innerHTML = 'Incorrect!'
          document.getElementById('r-subject-11').style.color = 'blue'
          document.getElementById('r-subject-11').innerHTML = 'Correct!'
          
          document.getElementById('b-subject-11').classList.add("correct")
          document.getElementById('b-subject-12').classList.add("incorrect")
          document.getElementById('b-subject-13').classList.add("incorrect")
          document.getElementById('b-subject-14').classList.add("incorrect")
    
          document.getElementById('sa-subject-1').disabled = true;
          document.getElementById('o-subject-11').disabled = true;
          document.getElementById('o-subject-12').disabled = true;
          document.getElementById('o-subject-13').disabled = true;
          document.getElementById('o-subject-14').disabled = true;
          showExplanation1()
          localStorage.setItem('subject1', 0)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-subject-2') != null) {
      subject2But.onclick = function() {
        if (document.getElementById('o-subject-21').checked) {
          document.getElementById('r-subject-21').style.color = 'red'
          document.getElementById('r-subject-21').innerHTML = 'Incorrect!'
          document.getElementById('r-subject-23').style.color = 'blue'
          document.getElementById('r-subject-23').innerHTML = 'Correct!'
          
          document.getElementById('b-subject-23').classList.add("correct")
          document.getElementById('b-subject-21').classList.add("incorrect")
          document.getElementById('b-subject-22').classList.add("incorrect")
          document.getElementById('b-subject-24').classList.add("incorrect")
    
          document.getElementById('sa-subject-2').disabled = true;
          document.getElementById('o-subject-21').disabled = true;
          document.getElementById('o-subject-22').disabled = true;
          document.getElementById('o-subject-23').disabled = true;
          document.getElementById('o-subject-24').disabled = true;
          showExplanation2()
          localStorage.setItem('subject2', 0)
        }
        if (document.getElementById('o-subject-22').checked) {
          document.getElementById('r-subject-22').style.color = 'red'
          document.getElementById('r-subject-22').innerHTML = 'Incorrect!'
          document.getElementById('r-subject-23').style.color = 'blue'
          document.getElementById('r-subject-23').innerHTML = 'Correct!'
          
          document.getElementById('b-subject-23').classList.add("correct")
          document.getElementById('b-subject-21').classList.add("incorrect")
          document.getElementById('b-subject-22').classList.add("incorrect")
          document.getElementById('b-subject-24').classList.add("incorrect")
    
          document.getElementById('sa-subject-2').disabled = true;
          document.getElementById('o-subject-21').disabled = true;
          document.getElementById('o-subject-22').disabled = true;
          document.getElementById('o-subject-23').disabled = true;
          document.getElementById('o-subject-24').disabled = true;
          showExplanation2()
          localStorage.setItem('subject2', 0)
        }
        if (document.getElementById('o-subject-23').checked) {
          document.getElementById('r-subject-23').style.color = 'blue'
          document.getElementById('r-subject-23').innerHTML = 'Correct!'
          
          document.getElementById('b-subject-23').classList.add("correct")
          document.getElementById('b-subject-21').classList.add("incorrect")
          document.getElementById('b-subject-22').classList.add("incorrect")
          document.getElementById('b-subject-24').classList.add("incorrect")
    
          document.getElementById('sa-subject-2').disabled = true;
          document.getElementById('o-subject-21').disabled = true;
          document.getElementById('o-subject-22').disabled = true;
          document.getElementById('o-subject-23').disabled = true;
          document.getElementById('o-subject-24').disabled = true;
          showExplanation2()
          localStorage.setItem('subject2', 1)
        }
        if (document.getElementById('o-subject-24').checked) {
          document.getElementById('r-subject-24').style.color = 'red'
          document.getElementById('r-subject-24').innerHTML = 'Incorrect!'
          document.getElementById('r-subject-23').style.color = 'blue'
          document.getElementById('r-subject-23').innerHTML = 'Correct!'
          
          document.getElementById('b-subject-23').classList.add("correct")
          document.getElementById('b-subject-21').classList.add("incorrect")
          document.getElementById('b-subject-22').classList.add("incorrect")
          document.getElementById('b-subject-24').classList.add("incorrect")
    
          document.getElementById('sa-subject-2').disabled = true;
          document.getElementById('o-subject-21').disabled = true;
          document.getElementById('o-subject-22').disabled = true;
          document.getElementById('o-subject-23').disabled = true;
          document.getElementById('o-subject-24').disabled = true;
          showExplanation2()
          localStorage.setItem('subject2', 0)
        }
      }
    }
    
    if (document.getElementById('sa-subject-3') != null) {
      subject3But.onclick = function() {
        if (document.getElementById('o-subject-31').checked) {
          document.getElementById('r-subject-31').style.color = 'red'
          document.getElementById('r-subject-31').innerHTML = 'Incorrect!'
          document.getElementById('r-subject-32').style.color = 'blue'
          document.getElementById('r-subject-32').innerHTML = 'Correct!'
          
          document.getElementById('b-subject-32').classList.add("correct")
          document.getElementById('b-subject-31').classList.add("incorrect")
          document.getElementById('b-subject-33').classList.add("incorrect")
          document.getElementById('b-subject-34').classList.add("incorrect")
    
          document.getElementById('sa-subject-3').disabled = true;
          document.getElementById('o-subject-31').disabled = true;
          document.getElementById('o-subject-32').disabled = true;
          document.getElementById('o-subject-33').disabled = true;
          document.getElementById('o-subject-34').disabled = true;
          showExplanation3()
          localStorage.setItem('subject3', 0)
        }
        if (document.getElementById('o-subject-32').checked) {    
          document.getElementById('r-subject-32').style.color = 'blue'
          document.getElementById('r-subject-32').innerHTML = 'Correct!'
          
          document.getElementById('b-subject-32').classList.add("correct")
          document.getElementById('b-subject-31').classList.add("incorrect")
          document.getElementById('b-subject-33').classList.add("incorrect")
          document.getElementById('b-subject-34').classList.add("incorrect")
    
          document.getElementById('sa-subject-3').disabled = true;
          document.getElementById('o-subject-31').disabled = true;
          document.getElementById('o-subject-32').disabled = true;
          document.getElementById('o-subject-33').disabled = true;
          document.getElementById('o-subject-34').disabled = true;
          showExplanation3()
          localStorage.setItem('subject3', 1)
        }
        if (document.getElementById('o-subject-33').checked) {
          document.getElementById('r-subject-33').style.color = 'red'
          document.getElementById('r-subject-33').innerHTML = 'Incorrect!'
          document.getElementById('r-subject-32').style.color = 'blue'
          document.getElementById('r-subject-32').innerHTML = 'Correct!'
          
          document.getElementById('b-subject-32').classList.add("correct")
          document.getElementById('b-subject-31').classList.add("incorrect")
          document.getElementById('b-subject-33').classList.add("incorrect")
          document.getElementById('b-subject-34').classList.add("incorrect")
    
          document.getElementById('sa-subject-3').disabled = true;
          document.getElementById('o-subject-31').disabled = true;
          document.getElementById('o-subject-32').disabled = true;
          document.getElementById('o-subject-33').disabled = true;
          document.getElementById('o-subject-34').disabled = true;
          showExplanation3()
          localStorage.setItem('subject3', 0)
        }
        if (document.getElementById('o-subject-34').checked) {
          document.getElementById('r-subject-34').style.color = 'red'
          document.getElementById('r-subject-34').innerHTML = 'Incorrect!'
          document.getElementById('r-subject-32').style.color = 'blue'
          document.getElementById('r-subject-32').innerHTML = 'Correct!'
          
          document.getElementById('b-subject-32').classList.add("correct")
          document.getElementById('b-subject-31').classList.add("incorrect")
          document.getElementById('b-subject-33').classList.add("incorrect")
          document.getElementById('b-subject-34').classList.add("incorrect")
    
          document.getElementById('sa-subject-3').disabled = true;
          document.getElementById('o-subject-31').disabled = true;
          document.getElementById('o-subject-32').disabled = true;
          document.getElementById('o-subject-33').disabled = true;
          document.getElementById('o-subject-34').disabled = true;
          showExplanation3()
          localStorage.setItem('subject3', 0)
        }
      }
    }
    
    if (document.getElementById('sa-subject-4') != null) {
      subject4But.onclick = function() {
        if (document.getElementById('o-subject-41').checked) {
          document.getElementById('r-subject-41').style.color = 'red'
          document.getElementById('r-subject-41').innerHTML = 'Incorrect!'
          document.getElementById('r-subject-44').style.color = 'blue'
          document.getElementById('r-subject-44').innerHTML = 'Correct!'
          
          document.getElementById('b-subject-44').classList.add("correct")
          document.getElementById('b-subject-41').classList.add("incorrect")
          document.getElementById('b-subject-42').classList.add("incorrect")
          document.getElementById('b-subject-43').classList.add("incorrect")
    
          document.getElementById('sa-subject-4').disabled = true;
          document.getElementById('o-subject-41').disabled = true;
          document.getElementById('o-subject-42').disabled = true;
          document.getElementById('o-subject-43').disabled = true;
          document.getElementById('o-subject-44').disabled = true;
          showExplanation4()
          localStorage.setItem('subject4', 0)
        }
        if (document.getElementById('o-subject-42').checked) {
          document.getElementById('r-subject-42').style.color = 'red'
          document.getElementById('r-subject-42').innerHTML = 'Incorrect!'
          document.getElementById('r-subject-44').style.color = 'blue'
          document.getElementById('r-subject-44').innerHTML = 'Correct!'
          
          document.getElementById('b-subject-44').classList.add("correct")
          document.getElementById('b-subject-41').classList.add("incorrect")
          document.getElementById('b-subject-42').classList.add("incorrect")
          document.getElementById('b-subject-43').classList.add("incorrect")
    
          document.getElementById('sa-subject-4').disabled = true;
          document.getElementById('o-subject-41').disabled = true;
          document.getElementById('o-subject-42').disabled = true;
          document.getElementById('o-subject-43').disabled = true;
          document.getElementById('o-subject-44').disabled = true;
          showExplanation4()
          localStorage.setItem('subject4', 0)
        }
        if (document.getElementById('o-subject-43').checked) {
          document.getElementById('r-subject-43').style.color = 'red'
          document.getElementById('r-subject-43').innerHTML = 'Incorrect!'
          document.getElementById('r-subject-44').style.color = 'blue'
          document.getElementById('r-subject-44').innerHTML = 'Correct!'
          
          document.getElementById('b-subject-44').classList.add("correct")
          document.getElementById('b-subject-41').classList.add("incorrect")
          document.getElementById('b-subject-42').classList.add("incorrect")
          document.getElementById('b-subject-43').classList.add("incorrect")
    
          document.getElementById('sa-subject-4').disabled = true;
          document.getElementById('o-subject-41').disabled = true;
          document.getElementById('o-subject-42').disabled = true;
          document.getElementById('o-subject-43').disabled = true;
          document.getElementById('o-subject-44').disabled = true;
          showExplanation4()
          localStorage.setItem('subject4', 0)
        }
        if (document.getElementById('o-subject-44').checked) {
          document.getElementById('r-subject-44').style.color = 'blue'
          document.getElementById('r-subject-44').innerHTML = 'Correct!'
          
          document.getElementById('b-subject-44').classList.add("correct")
          document.getElementById('b-subject-41').classList.add("incorrect")
          document.getElementById('b-subject-42').classList.add("incorrect")
          document.getElementById('b-subject-43').classList.add("incorrect")
    
          document.getElementById('sa-subject-4').disabled = true;
          document.getElementById('o-subject-41').disabled = true;
          document.getElementById('o-subject-42').disabled = true;
          document.getElementById('o-subject-43').disabled = true;
          document.getElementById('o-subject-44').disabled = true;
          showExplanation4()
          localStorage.setItem('subject4', 1)
        }
      }
    }
    
    if (document.getElementById('sa-subject-5') != null) {
      subject5But.onclick = function() {
        if (document.getElementById('o-subject-51').checked) {
          document.getElementById('r-subject-51').style.color = 'red'
          document.getElementById('r-subject-51').innerHTML = 'Incorrect!'
          document.getElementById('r-subject-53').style.color = 'blue'
          document.getElementById('r-subject-53').innerHTML = 'Correct!'
          
          document.getElementById('b-subject-53').classList.add("correct")
          document.getElementById('b-subject-51').classList.add("incorrect")
          document.getElementById('b-subject-52').classList.add("incorrect")
          document.getElementById('b-subject-54').classList.add("incorrect")
    
          document.getElementById('sa-subject-5').disabled = true;
          document.getElementById('o-subject-51').disabled = true;
          document.getElementById('o-subject-52').disabled = true;
          document.getElementById('o-subject-53').disabled = true;
          document.getElementById('o-subject-54').disabled = true;
          showExplanation5()
          localStorage.setItem('subject5', 0)
        }
        if (document.getElementById('o-subject-52').checked) {
          document.getElementById('r-subject-52').style.color = 'red'
          document.getElementById('r-subject-52').innerHTML = 'Incorrect!'
          document.getElementById('r-subject-53').style.color = 'blue'
          document.getElementById('r-subject-53').innerHTML = 'Correct!'
          
          document.getElementById('b-subject-53').classList.add("correct")
          document.getElementById('b-subject-51').classList.add("incorrect")
          document.getElementById('b-subject-52').classList.add("incorrect")
          document.getElementById('b-subject-54').classList.add("incorrect")
    
          document.getElementById('sa-subject-5').disabled = true;
          document.getElementById('o-subject-51').disabled = true;
          document.getElementById('o-subject-52').disabled = true;
          document.getElementById('o-subject-53').disabled = true;
          document.getElementById('o-subject-54').disabled = true;
          showExplanation5()
          localStorage.setItem('subject5', 0)
        }
        if (document.getElementById('o-subject-53').checked) {
          document.getElementById('r-subject-53').style.color = 'blue'
          document.getElementById('r-subject-53').innerHTML = 'Correct!'
          
          document.getElementById('b-subject-53').classList.add("correct")
          document.getElementById('b-subject-51').classList.add("incorrect")
          document.getElementById('b-subject-52').classList.add("incorrect")
          document.getElementById('b-subject-54').classList.add("incorrect")
    
          document.getElementById('sa-subject-5').disabled = true;
          document.getElementById('o-subject-51').disabled = true;
          document.getElementById('o-subject-52').disabled = true;
          document.getElementById('o-subject-53').disabled = true;
          document.getElementById('o-subject-54').disabled = true;
          showExplanation5()
          localStorage.setItem('subject5', 1)
        }
        if (document.getElementById('o-subject-54').checked) {
          document.getElementById('r-subject-54').style.color = 'red'
          document.getElementById('r-subject-54').innerHTML = 'Incorrect!'
          document.getElementById('r-subject-53').style.color = 'blue'
          document.getElementById('r-subject-53').innerHTML = 'Correct!'
          
          document.getElementById('b-subject-53').classList.add("correct")
          document.getElementById('b-subject-51').classList.add("incorrect")
          document.getElementById('b-subject-52').classList.add("incorrect")
          document.getElementById('b-subject-54').classList.add("incorrect")
    
          document.getElementById('sa-subject-5').disabled = true;
          document.getElementById('o-subject-51').disabled = true;
          document.getElementById('o-subject-52').disabled = true;
          document.getElementById('o-subject-53').disabled = true;
          document.getElementById('o-subject-54').disabled = true;
          showExplanation5()
          localStorage.setItem('subject5', 0)
        }
      }
    }
        
         
      if (document.getElementById('sa-subject-6') != null) {
      subject6But.onclick = function() {
        if (document.getElementById('o-subject-61').checked) {
          document.getElementById('r-subject-61').style.color = 'red'
          document.getElementById('r-subject-61').innerHTML = 'Incorrect!'
          document.getElementById('r-subject-64').style.color = 'blue'
          document.getElementById('r-subject-64').innerHTML = 'Correct!'
          
          document.getElementById('b-subject-64').classList.add("correct")
          document.getElementById('b-subject-61').classList.add("incorrect")
          document.getElementById('b-subject-62').classList.add("incorrect")
          document.getElementById('b-subject-63').classList.add("incorrect")
    
          document.getElementById('sa-subject-6').disabled = true;
          document.getElementById('o-subject-61').disabled = true;
          document.getElementById('o-subject-62').disabled = true;
          document.getElementById('o-subject-63').disabled = true;
          document.getElementById('o-subject-64').disabled = true;
          showExplanation6()
          localStorage.setItem('subject6', 0)
        }
        if (document.getElementById('o-subject-62').checked) {
          document.getElementById('r-subject-62').style.color = 'red'
          document.getElementById('r-subject-62').innerHTML = 'Incorrect!'
          document.getElementById('r-subject-64').style.color = 'blue'
          document.getElementById('r-subject-64').innerHTML = 'Correct!'
          
          document.getElementById('b-subject-64').classList.add("correct")
          document.getElementById('b-subject-61').classList.add("incorrect")
          document.getElementById('b-subject-62').classList.add("incorrect")
          document.getElementById('b-subject-63').classList.add("incorrect")
    
          document.getElementById('sa-subject-6').disabled = true;
          document.getElementById('o-subject-61').disabled = true;
          document.getElementById('o-subject-62').disabled = true;
          document.getElementById('o-subject-63').disabled = true;
          document.getElementById('o-subject-64').disabled = true;
          showExplanation6()
          localStorage.setItem('subject6', 0)
        }
        if (document.getElementById('o-subject-63').checked) {
          document.getElementById('r-subject-63').style.color = 'red'
          document.getElementById('r-subject-63').innerHTML = 'Incorrect!'
          document.getElementById('r-subject-64').style.color = 'blue'
          document.getElementById('r-subject-64').innerHTML = 'Correct!'
          
          document.getElementById('b-subject-64').classList.add("correct")
          document.getElementById('b-subject-61').classList.add("incorrect")
          document.getElementById('b-subject-62').classList.add("incorrect")
          document.getElementById('b-subject-63').classList.add("incorrect")
    
          document.getElementById('sa-subject-6').disabled = true;
          document.getElementById('o-subject-61').disabled = true;
          document.getElementById('o-subject-62').disabled = true;
          document.getElementById('o-subject-63').disabled = true;
          document.getElementById('o-subject-64').disabled = true;
          showExplanation6()
          localStorage.setItem('subject6', 0)
        }
        if (document.getElementById('o-subject-64').checked) {
          document.getElementById('r-subject-64').style.color = 'blue'
          document.getElementById('r-subject-64').innerHTML = 'Correct!'
          
          document.getElementById('b-subject-64').classList.add("correct")
          document.getElementById('b-subject-61').classList.add("incorrect")
          document.getElementById('b-subject-62').classList.add("incorrect")
          document.getElementById('b-subject-63').classList.add("incorrect")
    
          document.getElementById('sa-subject-6').disabled = true;
          document.getElementById('o-subject-61').disabled = true;
          document.getElementById('o-subject-62').disabled = true;
          document.getElementById('o-subject-63').disabled = true;
          document.getElementById('o-subject-64').disabled = true;
          showExplanation6()
          localStorage.setItem('subject6', 1)
        }
      }
    }
    
    if (document.getElementById('sa-subject-7') != null) {
      subject7But.onclick = function() {
        if (document.getElementById('o-subject-71').checked) {
          document.getElementById('r-subject-71').style.color = 'red'
          document.getElementById('r-subject-71').innerHTML = 'Incorrect!'
          document.getElementById('r-subject-74').style.color = 'blue'
          document.getElementById('r-subject-74').innerHTML = 'Correct!'
          
          document.getElementById('b-subject-74').classList.add("correct")
          document.getElementById('b-subject-71').classList.add("incorrect")
          document.getElementById('b-subject-72').classList.add("incorrect")
          document.getElementById('b-subject-73').classList.add("incorrect")
    
          document.getElementById('sa-subject-7').disabled = true;
          document.getElementById('o-subject-71').disabled = true;
          document.getElementById('o-subject-72').disabled = true;
          document.getElementById('o-subject-73').disabled = true;
          document.getElementById('o-subject-74').disabled = true;
          showExplanation7()
          localStorage.setItem('subject7', 0)
        }
        if (document.getElementById('o-subject-72').checked) {
          document.getElementById('r-subject-72').style.color = 'red'
          document.getElementById('r-subject-72').innerHTML = 'Incorrect!'
          document.getElementById('r-subject-74').style.color = 'blue'
          document.getElementById('r-subject-74').innerHTML = 'Correct!'
          
          document.getElementById('b-subject-74').classList.add("correct")
          document.getElementById('b-subject-71').classList.add("incorrect")
          document.getElementById('b-subject-72').classList.add("incorrect")
          document.getElementById('b-subject-73').classList.add("incorrect")
    
          document.getElementById('sa-subject-7').disabled = true;
          document.getElementById('o-subject-71').disabled = true;
          document.getElementById('o-subject-72').disabled = true;
          document.getElementById('o-subject-73').disabled = true;
          document.getElementById('o-subject-74').disabled = true;
          showExplanation7()
          localStorage.setItem('subject7', 0)
        }
        if (document.getElementById('o-subject-73').checked) {
          document.getElementById('r-subject-73').style.color = 'red'
          document.getElementById('r-subject-73').innerHTML = 'Incorrect!'
          document.getElementById('r-subject-74').style.color = 'blue'
          document.getElementById('r-subject-74').innerHTML = 'Correct!'
          
          document.getElementById('b-subject-74').classList.add("correct")
          document.getElementById('b-subject-71').classList.add("incorrect")
          document.getElementById('b-subject-72').classList.add("incorrect")
          document.getElementById('b-subject-73').classList.add("incorrect")
    
          document.getElementById('sa-subject-7').disabled = true;
          document.getElementById('o-subject-71').disabled = true;
          document.getElementById('o-subject-72').disabled = true;
          document.getElementById('o-subject-73').disabled = true;
          document.getElementById('o-subject-74').disabled = true;
          showExplanation7()
          localStorage.setItem('subject7', 0)
        }
        if (document.getElementById('o-subject-74').checked) {
          document.getElementById('r-subject-74').style.color = 'blue'
          document.getElementById('r-subject-74').innerHTML = 'Correct!'
          
          document.getElementById('b-subject-74').classList.add("correct")
          document.getElementById('b-subject-71').classList.add("incorrect")
          document.getElementById('b-subject-72').classList.add("incorrect")
          document.getElementById('b-subject-73').classList.add("incorrect")
    
          document.getElementById('sa-subject-7').disabled = true;
          document.getElementById('o-subject-71').disabled = true;
          document.getElementById('o-subject-72').disabled = true;
          document.getElementById('o-subject-73').disabled = true;
          document.getElementById('o-subject-74').disabled = true;
          showExplanation7()
          localStorage.setItem('subject7', 1)
        }
      }
    }
    
    
    if (document.getElementById('sa-subject-8') != null) {
      subject8But.onclick = function() {
        if (document.getElementById('o-subject-81').checked) {
          document.getElementById('r-subject-81').style.color = 'red'
          document.getElementById('r-subject-81').innerHTML = 'Incorrect!'
          document.getElementById('r-subject-82').style.color = 'blue'
          document.getElementById('r-subject-82').innerHTML = 'Correct!'
          
          document.getElementById('b-subject-82').classList.add("correct")
          document.getElementById('b-subject-81').classList.add("incorrect")
          document.getElementById('b-subject-83').classList.add("incorrect")
          document.getElementById('b-subject-84').classList.add("incorrect")
    
          document.getElementById('sa-subject-8').disabled = true;
          document.getElementById('o-subject-81').disabled = true;
          document.getElementById('o-subject-82').disabled = true;
          document.getElementById('o-subject-83').disabled = true;
          document.getElementById('o-subject-84').disabled = true;
          showExplanation8()
          localStorage.setItem('subject8', 0)
        }
        if (document.getElementById('o-subject-82').checked) {
          document.getElementById('r-subject-82').style.color = 'blue'
          document.getElementById('r-subject-82').innerHTML = 'Correct!'
          
          document.getElementById('b-subject-82').classList.add("correct")
          document.getElementById('b-subject-81').classList.add("incorrect")
          document.getElementById('b-subject-83').classList.add("incorrect")
          document.getElementById('b-subject-84').classList.add("incorrect")
    
          document.getElementById('sa-subject-8').disabled = true;
          document.getElementById('o-subject-81').disabled = true;
          document.getElementById('o-subject-82').disabled = true;
          document.getElementById('o-subject-83').disabled = true;
          document.getElementById('o-subject-84').disabled = true;
          showExplanation8()
          localStorage.setItem('subject8', 1)
        }
        if (document.getElementById('o-subject-83').checked) {
          document.getElementById('r-subject-83').style.color = 'red'
          document.getElementById('r-subject-83').innerHTML = 'Incorrect!'
          document.getElementById('r-subject-82').style.color = 'blue'
          document.getElementById('r-subject-82').innerHTML = 'Correct!'
          
          document.getElementById('b-subject-82').classList.add("correct")
          document.getElementById('b-subject-81').classList.add("incorrect")
          document.getElementById('b-subject-83').classList.add("incorrect")
          document.getElementById('b-subject-84').classList.add("incorrect")
    
          document.getElementById('sa-subject-8').disabled = true;
          document.getElementById('o-subject-81').disabled = true;
          document.getElementById('o-subject-82').disabled = true;
          document.getElementById('o-subject-83').disabled = true;
          document.getElementById('o-subject-84').disabled = true;
          showExplanation8()
          localStorage.setItem('subject8', 0)
        }
        if (document.getElementById('o-subject-84').checked) {
          document.getElementById('r-subject-84').style.color = 'red'
          document.getElementById('r-subject-84').innerHTML = 'Incorrect!'
          document.getElementById('r-subject-82').style.color = 'blue'
          document.getElementById('r-subject-82').innerHTML = 'Correct!'
          
          document.getElementById('b-subject-82').classList.add("correct")
          document.getElementById('b-subject-81').classList.add("incorrect")
          document.getElementById('b-subject-83').classList.add("incorrect")
          document.getElementById('b-subject-84').classList.add("incorrect")
    
          document.getElementById('sa-subject-8').disabled = true;
          document.getElementById('o-subject-81').disabled = true;
          document.getElementById('o-subject-82').disabled = true;
          document.getElementById('o-subject-83').disabled = true;
          document.getElementById('o-subject-84').disabled = true;
          showExplanation8()
          localStorage.setItem('subject8', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-subject-9') != null) {
      subject9But.onclick = function() {
        if (document.getElementById('o-subject-91').checked) {
          document.getElementById('r-subject-91').style.color = 'red'
          document.getElementById('r-subject-91').innerHTML = 'Incorrect!'
          document.getElementById('r-subject-94').style.color = 'blue'
          document.getElementById('r-subject-94').innerHTML = 'Correct!'
          
          document.getElementById('b-subject-94').classList.add("correct")
          document.getElementById('b-subject-91').classList.add("incorrect")
          document.getElementById('b-subject-92').classList.add("incorrect")
          document.getElementById('b-subject-93').classList.add("incorrect")
    
          document.getElementById('sa-subject-9').disabled = true;
          document.getElementById('o-subject-91').disabled = true;
          document.getElementById('o-subject-92').disabled = true;
          document.getElementById('o-subject-93').disabled = true;
          document.getElementById('o-subject-94').disabled = true;
          showExplanation9()
          localStorage.setItem('subject9', 0)
        }
        if (document.getElementById('o-subject-92').checked) {
          document.getElementById('r-subject-91').style.color = 'red'
          document.getElementById('r-subject-91').innerHTML = 'Incorrect!'
          document.getElementById('r-subject-94').style.color = 'blue'
          document.getElementById('r-subject-94').innerHTML = 'Correct!'
          
          document.getElementById('b-subject-94').classList.add("correct")
          document.getElementById('b-subject-91').classList.add("incorrect")
          document.getElementById('b-subject-92').classList.add("incorrect")
          document.getElementById('b-subject-93').classList.add("incorrect")
    
          document.getElementById('sa-subject-9').disabled = true;
          document.getElementById('o-subject-91').disabled = true;
          document.getElementById('o-subject-92').disabled = true;
          document.getElementById('o-subject-93').disabled = true;
          document.getElementById('o-subject-94').disabled = true;
          showExplanation9()
          localStorage.setItem('subject9', 0)
        }
        if (document.getElementById('o-subject-93').checked) {
          document.getElementById('r-subject-91').style.color = 'red'
          document.getElementById('r-subject-91').innerHTML = 'Incorrect!'
          document.getElementById('r-subject-94').style.color = 'blue'
          document.getElementById('r-subject-94').innerHTML = 'Correct!'
          
          document.getElementById('b-subject-94').classList.add("correct")
          document.getElementById('b-subject-91').classList.add("incorrect")
          document.getElementById('b-subject-92').classList.add("incorrect")
          document.getElementById('b-subject-93').classList.add("incorrect")
    
          document.getElementById('sa-subject-9').disabled = true;
          document.getElementById('o-subject-91').disabled = true;
          document.getElementById('o-subject-92').disabled = true;
          document.getElementById('o-subject-93').disabled = true;
          document.getElementById('o-subject-94').disabled = true;
          showExplanation9()
          localStorage.setItem('subject9', 0)
        }
        if (document.getElementById('o-subject-94').checked) {
          document.getElementById('r-subject-94').style.color = 'blue'
          document.getElementById('r-subject-94').innerHTML = 'Correct!'
          
          document.getElementById('b-subject-94').classList.add("correct")
          document.getElementById('b-subject-91').classList.add("incorrect")
          document.getElementById('b-subject-92').classList.add("incorrect")
          document.getElementById('b-subject-93').classList.add("incorrect")
    
          document.getElementById('sa-subject-9').disabled = true;
          document.getElementById('o-subject-91').disabled = true;
          document.getElementById('o-subject-92').disabled = true;
          document.getElementById('o-subject-93').disabled = true;
          document.getElementById('o-subject-94').disabled = true;
          showExplanation9()
          localStorage.setItem('subject9', 1)
        }
      }
    }
    
    if (document.getElementById('sa-subject-10') != null) {
      subject10But.onclick = function() {
        if (document.getElementById('o-subject-101').checked) {
          document.getElementById('r-subject-101').style.color = 'red'
          document.getElementById('r-subject-101').innerHTML = 'Incorrect!'
          document.getElementById('r-subject-102').style.color = 'blue'
          document.getElementById('r-subject-102').innerHTML = 'Correct!'
          
          document.getElementById('b-subject-102').classList.add("correct")
          document.getElementById('b-subject-101').classList.add("incorrect")
          document.getElementById('b-subject-103').classList.add("incorrect")
          document.getElementById('b-subject-104').classList.add("incorrect")
    
          document.getElementById('sa-subject-10').disabled = true;
          document.getElementById('o-subject-101').disabled = true;
          document.getElementById('o-subject-102').disabled = true;
          document.getElementById('o-subject-103').disabled = true;
          document.getElementById('o-subject-104').disabled = true;
          showExplanation10()
          localStorage.setItem('subject10', 0)
        }
        if (document.getElementById('o-subject-102').checked) {
          document.getElementById('r-subject-102').style.color = 'blue'
          document.getElementById('r-subject-102').innerHTML = 'Correct!'
          
          document.getElementById('b-subject-102').classList.add("correct")
          document.getElementById('b-subject-101').classList.add("incorrect")
          document.getElementById('b-subject-103').classList.add("incorrect")
          document.getElementById('b-subject-104').classList.add("incorrect")
    
          document.getElementById('sa-subject-10').disabled = true;
          document.getElementById('o-subject-101').disabled = true;
          document.getElementById('o-subject-102').disabled = true;
          document.getElementById('o-subject-103').disabled = true;
          document.getElementById('o-subject-104').disabled = true;
          showExplanation10()
          localStorage.setItem('subject10', 1)
        }
        if (document.getElementById('o-subject-103').checked) {
          document.getElementById('r-subject-103').style.color = 'red'
          document.getElementById('r-subject-103').innerHTML = 'Incorrect!'
          document.getElementById('r-subject-102').style.color = 'blue'
          document.getElementById('r-subject-102').innerHTML = 'Correct!'
          
          document.getElementById('b-subject-102').classList.add("correct")
          document.getElementById('b-subject-101').classList.add("incorrect")
          document.getElementById('b-subject-103').classList.add("incorrect")
          document.getElementById('b-subject-104').classList.add("incorrect")
    
          document.getElementById('sa-subject-10').disabled = true;
          document.getElementById('o-subject-101').disabled = true;
          document.getElementById('o-subject-102').disabled = true;
          document.getElementById('o-subject-103').disabled = true;
          document.getElementById('o-subject-104').disabled = true;
          showExplanation10()
          localStorage.setItem('subject10', 0)
        }
        if (document.getElementById('o-subject-104').checked) {
          document.getElementById('r-subject-104').style.color = 'red'
          document.getElementById('r-subject-104').innerHTML = 'Incorrect!'
          document.getElementById('r-subject-102').style.color = 'blue'
          document.getElementById('r-subject-102').innerHTML = 'Correct!'
          
          document.getElementById('b-subject-102').classList.add("correct")
          document.getElementById('b-subject-101').classList.add("incorrect")
          document.getElementById('b-subject-103').classList.add("incorrect")
          document.getElementById('b-subject-104').classList.add("incorrect")
    
          document.getElementById('sa-subject-10').disabled = true;
          document.getElementById('o-subject-101').disabled = true;
          document.getElementById('o-subject-102').disabled = true;
          document.getElementById('o-subject-103').disabled = true;
          document.getElementById('o-subject-104').disabled = true;
          showExplanation10()
          localStorage.setItem('subject10', 0)
        }
      }
    }
    