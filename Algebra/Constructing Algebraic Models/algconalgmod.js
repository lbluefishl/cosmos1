
  let algconalgmod1But = document.getElementById('sa-algconalgmod-1');
  let algconalgmod2But = document.getElementById('sa-algconalgmod-2');
  let algconalgmod3But = document.getElementById('sa-algconalgmod-3');
  let algconalgmod4But = document.getElementById('sa-algconalgmod-4');
  let algconalgmod5But = document.getElementById('sa-algconalgmod-5');
  let algconalgmod6But = document.getElementById('sa-algconalgmod-6');
  let algconalgmod7But = document.getElementById('sa-algconalgmod-7');
  let algconalgmod8But = document.getElementById('sa-algconalgmod-8');
  let algconalgmod9But = document.getElementById('sa-algconalgmod-9');
  let algconalgmod10But = document.getElementById('sa-algconalgmod-10');


  showExplanation1 = function() {
    document.getElementById('e-algconalgmod-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-algconalgmod-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-algconalgmod-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-algconalgmod-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-algconalgmod-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-algconalgmod-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-algconalgmod-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-algconalgmod-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-algconalgmod-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-algconalgmod-10').style.display = 'block';
     } 



     if (document.getElementById('sa-algconalgmod-1') != null) {
      algconalgmod1But.onclick = function () {
        if (document.getElementById('o-algconalgmod-11').checked) {
          document.getElementById('r-algconalgmod-11').style.color = 'red'
          document.getElementById('r-algconalgmod-11').innerHTML = 'Incorrect!'
          document.getElementById('r-algconalgmod-13').style.color = 'blue'
          document.getElementById('r-algconalgmod-13').innerHTML = 'Correct!'
    
          document.getElementById('b-algconalgmod-13').classList.add("correct")
          document.getElementById('b-algconalgmod-12').classList.add("incorrect")
          document.getElementById('b-algconalgmod-11').classList.add("incorrect")
          document.getElementById('b-algconalgmod-14').classList.add("incorrect")
    
          document.getElementById('sa-algconalgmod-1').disabled = true;
          document.getElementById('o-algconalgmod-11').disabled = true;
          document.getElementById('o-algconalgmod-12').disabled = true;
          document.getElementById('o-algconalgmod-13').disabled = true;
          document.getElementById('o-algconalgmod-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algconalgmod1', 0)
        }
    
        if (document.getElementById('o-algconalgmod-12').checked) {
          document.getElementById('r-algconalgmod-12').style.color = 'red'
          document.getElementById('r-algconalgmod-12').innerHTML = 'Incorrect!'
          document.getElementById('r-algconalgmod-13').style.color = 'blue'
          document.getElementById('r-algconalgmod-13').innerHTML = 'Correct!'
    
          document.getElementById('b-algconalgmod-13').classList.add("correct")
          document.getElementById('b-algconalgmod-12').classList.add("incorrect")
          document.getElementById('b-algconalgmod-11').classList.add("incorrect")
          document.getElementById('b-algconalgmod-14').classList.add("incorrect")
    
          document.getElementById('sa-algconalgmod-1').disabled = true;
          document.getElementById('o-algconalgmod-11').disabled = true;
          document.getElementById('o-algconalgmod-12').disabled = true;
          document.getElementById('o-algconalgmod-13').disabled = true;
          document.getElementById('o-algconalgmod-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algconalgmod1', 0)
        }
        if (document.getElementById('o-algconalgmod-13').checked) {
          document.getElementById('r-algconalgmod-13').style.color = 'blue'
          document.getElementById('r-algconalgmod-13').innerHTML = 'Correct!'
          
          document.getElementById('b-algconalgmod-13').classList.add("correct")
          document.getElementById('b-algconalgmod-12').classList.add("incorrect")
          document.getElementById('b-algconalgmod-11').classList.add("incorrect")
          document.getElementById('b-algconalgmod-14').classList.add("incorrect")
    
          document.getElementById('sa-algconalgmod-1').disabled = true;
          document.getElementById('o-algconalgmod-11').disabled = true;
          document.getElementById('o-algconalgmod-12').disabled = true;
          document.getElementById('o-algconalgmod-13').disabled = true;
          document.getElementById('o-algconalgmod-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algconalgmod1', 1)
        }
        if (document.getElementById('o-algconalgmod-14').checked) {
          document.getElementById('r-algconalgmod-14').style.color = 'red'
          document.getElementById('r-algconalgmod-14').innerHTML = 'Incorrect!'
          document.getElementById('r-algconalgmod-13').style.color = 'blue'
          document.getElementById('r-algconalgmod-13').innerHTML = 'Correct!'
          
          document.getElementById('b-algconalgmod-13').classList.add("correct")
          document.getElementById('b-algconalgmod-12').classList.add("incorrect")
          document.getElementById('b-algconalgmod-11').classList.add("incorrect")
          document.getElementById('b-algconalgmod-14').classList.add("incorrect")
    
          document.getElementById('sa-algconalgmod-1').disabled = true;
          document.getElementById('o-algconalgmod-11').disabled = true;
          document.getElementById('o-algconalgmod-12').disabled = true;
          document.getElementById('o-algconalgmod-13').disabled = true;
          document.getElementById('o-algconalgmod-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algconalgmod1', 0)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-algconalgmod-2') != null) {
      algconalgmod2But.onclick = function() {
        if (document.getElementById('o-algconalgmod-21').checked) {
          document.getElementById('r-algconalgmod-21').style.color = 'red'
          document.getElementById('r-algconalgmod-21').innerHTML = 'Incorrect!'
          document.getElementById('r-algconalgmod-23').style.color = 'blue'
          document.getElementById('r-algconalgmod-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algconalgmod-23').classList.add("correct")
          document.getElementById('b-algconalgmod-21').classList.add("incorrect")
          document.getElementById('b-algconalgmod-22').classList.add("incorrect")
          document.getElementById('b-algconalgmod-24').classList.add("incorrect")
    
          document.getElementById('sa-algconalgmod-2').disabled = true;
          document.getElementById('o-algconalgmod-21').disabled = true;
          document.getElementById('o-algconalgmod-22').disabled = true;
          document.getElementById('o-algconalgmod-23').disabled = true;
          document.getElementById('o-algconalgmod-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algconalgmod2', 0)
        }
        if (document.getElementById('o-algconalgmod-22').checked) {
          document.getElementById('r-algconalgmod-22').style.color = 'red'
          document.getElementById('r-algconalgmod-22').innerHTML = 'Incorrect!'
          document.getElementById('r-algconalgmod-23').style.color = 'blue'
          document.getElementById('r-algconalgmod-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algconalgmod-23').classList.add("correct")
          document.getElementById('b-algconalgmod-21').classList.add("incorrect")
          document.getElementById('b-algconalgmod-22').classList.add("incorrect")
          document.getElementById('b-algconalgmod-24').classList.add("incorrect")
    
          document.getElementById('sa-algconalgmod-2').disabled = true;
          document.getElementById('o-algconalgmod-21').disabled = true;
          document.getElementById('o-algconalgmod-22').disabled = true;
          document.getElementById('o-algconalgmod-23').disabled = true;
          document.getElementById('o-algconalgmod-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algconalgmod2', 0)
        }
        if (document.getElementById('o-algconalgmod-23').checked) {
          document.getElementById('r-algconalgmod-23').style.color = 'blue'
          document.getElementById('r-algconalgmod-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algconalgmod-23').classList.add("correct")
          document.getElementById('b-algconalgmod-21').classList.add("incorrect")
          document.getElementById('b-algconalgmod-22').classList.add("incorrect")
          document.getElementById('b-algconalgmod-24').classList.add("incorrect")
    
          document.getElementById('sa-algconalgmod-2').disabled = true;
          document.getElementById('o-algconalgmod-21').disabled = true;
          document.getElementById('o-algconalgmod-22').disabled = true;
          document.getElementById('o-algconalgmod-23').disabled = true;
          document.getElementById('o-algconalgmod-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algconalgmod2', 1)
        }
        if (document.getElementById('o-algconalgmod-24').checked) {
          document.getElementById('r-algconalgmod-24').style.color = 'red'
          document.getElementById('r-algconalgmod-24').innerHTML = 'Incorrect!'
          document.getElementById('r-algconalgmod-23').style.color = 'blue'
          document.getElementById('r-algconalgmod-23').innerHTML = 'Correct!'
          
          document.getElementById('b-algconalgmod-23').classList.add("correct")
          document.getElementById('b-algconalgmod-21').classList.add("incorrect")
          document.getElementById('b-algconalgmod-22').classList.add("incorrect")
          document.getElementById('b-algconalgmod-24').classList.add("incorrect")
    
          document.getElementById('sa-algconalgmod-2').disabled = true;
          document.getElementById('o-algconalgmod-21').disabled = true;
          document.getElementById('o-algconalgmod-22').disabled = true;
          document.getElementById('o-algconalgmod-23').disabled = true;
          document.getElementById('o-algconalgmod-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algconalgmod2', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algconalgmod-3') != null) {
      algconalgmod3But.onclick = function() {
        if (document.getElementById('o-algconalgmod-31').checked) {
          document.getElementById('r-algconalgmod-31').style.color = 'red'
          document.getElementById('r-algconalgmod-31').innerHTML = 'Incorrect!'
          document.getElementById('r-algconalgmod-32').style.color = 'blue'
          document.getElementById('r-algconalgmod-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algconalgmod-32').classList.add("correct")
          document.getElementById('b-algconalgmod-31').classList.add("incorrect")
          document.getElementById('b-algconalgmod-33').classList.add("incorrect")
          document.getElementById('b-algconalgmod-34').classList.add("incorrect")
    
          document.getElementById('sa-algconalgmod-3').disabled = true;
          document.getElementById('o-algconalgmod-31').disabled = true;
          document.getElementById('o-algconalgmod-32').disabled = true;
          document.getElementById('o-algconalgmod-33').disabled = true;
          document.getElementById('o-algconalgmod-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algconalgmod3', 0)
        }
        if (document.getElementById('o-algconalgmod-32').checked) {    
          document.getElementById('r-algconalgmod-32').style.color = 'blue'
          document.getElementById('r-algconalgmod-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algconalgmod-32').classList.add("correct")
          document.getElementById('b-algconalgmod-31').classList.add("incorrect")
          document.getElementById('b-algconalgmod-33').classList.add("incorrect")
          document.getElementById('b-algconalgmod-34').classList.add("incorrect")
    
          document.getElementById('sa-algconalgmod-3').disabled = true;
          document.getElementById('o-algconalgmod-31').disabled = true;
          document.getElementById('o-algconalgmod-32').disabled = true;
          document.getElementById('o-algconalgmod-33').disabled = true;
          document.getElementById('o-algconalgmod-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algconalgmod3', 1)
        }
        if (document.getElementById('o-algconalgmod-33').checked) {
          document.getElementById('r-algconalgmod-33').style.color = 'red'
          document.getElementById('r-algconalgmod-33').innerHTML = 'Incorrect!'
          document.getElementById('r-algconalgmod-32').style.color = 'blue'
          document.getElementById('r-algconalgmod-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algconalgmod-32').classList.add("correct")
          document.getElementById('b-algconalgmod-31').classList.add("incorrect")
          document.getElementById('b-algconalgmod-33').classList.add("incorrect")
          document.getElementById('b-algconalgmod-34').classList.add("incorrect")
    
          document.getElementById('sa-algconalgmod-3').disabled = true;
          document.getElementById('o-algconalgmod-31').disabled = true;
          document.getElementById('o-algconalgmod-32').disabled = true;
          document.getElementById('o-algconalgmod-33').disabled = true;
          document.getElementById('o-algconalgmod-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algconalgmod3', 0)
        }
        if (document.getElementById('o-algconalgmod-34').checked) {
          document.getElementById('r-algconalgmod-34').style.color = 'red'
          document.getElementById('r-algconalgmod-34').innerHTML = 'Incorrect!'
          document.getElementById('r-algconalgmod-32').style.color = 'blue'
          document.getElementById('r-algconalgmod-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algconalgmod-32').classList.add("correct")
          document.getElementById('b-algconalgmod-31').classList.add("incorrect")
          document.getElementById('b-algconalgmod-33').classList.add("incorrect")
          document.getElementById('b-algconalgmod-34').classList.add("incorrect")
    
          document.getElementById('sa-algconalgmod-3').disabled = true;
          document.getElementById('o-algconalgmod-31').disabled = true;
          document.getElementById('o-algconalgmod-32').disabled = true;
          document.getElementById('o-algconalgmod-33').disabled = true;
          document.getElementById('o-algconalgmod-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algconalgmod3', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algconalgmod-4') != null) {
      algconalgmod4But.onclick = function() {
        if (document.getElementById('o-algconalgmod-41').checked) {
          document.getElementById('r-algconalgmod-41').style.color = 'red'
          document.getElementById('r-algconalgmod-41').innerHTML = 'Incorrect!'
          document.getElementById('r-algconalgmod-43').style.color = 'blue'
          document.getElementById('r-algconalgmod-43').innerHTML = 'Correct!'
          
          document.getElementById('b-algconalgmod-43').classList.add("correct")
          document.getElementById('b-algconalgmod-41').classList.add("incorrect")
          document.getElementById('b-algconalgmod-42').classList.add("incorrect")
          document.getElementById('b-algconalgmod-44').classList.add("incorrect")
    
          document.getElementById('sa-algconalgmod-4').disabled = true;
          document.getElementById('o-algconalgmod-41').disabled = true;
          document.getElementById('o-algconalgmod-42').disabled = true;
          document.getElementById('o-algconalgmod-43').disabled = true;
          document.getElementById('o-algconalgmod-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algconalgmod4', 0)
        }
        if (document.getElementById('o-algconalgmod-42').checked) {
          document.getElementById('r-algconalgmod-42').style.color = 'red'
          document.getElementById('r-algconalgmod-42').innerHTML = 'Incorrect!'
          document.getElementById('r-algconalgmod-43').style.color = 'blue'
          document.getElementById('r-algconalgmod-43').innerHTML = 'Correct!'
          
          document.getElementById('b-algconalgmod-43').classList.add("correct")
          document.getElementById('b-algconalgmod-41').classList.add("incorrect")
          document.getElementById('b-algconalgmod-42').classList.add("incorrect")
          document.getElementById('b-algconalgmod-44').classList.add("incorrect")
    
          document.getElementById('sa-algconalgmod-4').disabled = true;
          document.getElementById('o-algconalgmod-41').disabled = true;
          document.getElementById('o-algconalgmod-42').disabled = true;
          document.getElementById('o-algconalgmod-43').disabled = true;
          document.getElementById('o-algconalgmod-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algconalgmod4', 0)
        }
        if (document.getElementById('o-algconalgmod-43').checked) {
          document.getElementById('r-algconalgmod-43').style.color = 'blue'
          document.getElementById('r-algconalgmod-43').innerHTML = 'Correct!'
          
          document.getElementById('b-algconalgmod-43').classList.add("correct")
          document.getElementById('b-algconalgmod-41').classList.add("incorrect")
          document.getElementById('b-algconalgmod-42').classList.add("incorrect")
          document.getElementById('b-algconalgmod-44').classList.add("incorrect")
    
          document.getElementById('sa-algconalgmod-4').disabled = true;
          document.getElementById('o-algconalgmod-41').disabled = true;
          document.getElementById('o-algconalgmod-42').disabled = true;
          document.getElementById('o-algconalgmod-43').disabled = true;
          document.getElementById('o-algconalgmod-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algconalgmod4', 1)
        }
        if (document.getElementById('o-algconalgmod-44').checked) {
          document.getElementById('r-algconalgmod-44').style.color = 'red'
          document.getElementById('r-algconalgmod-44').innerHTML = 'Incorrect!'
          document.getElementById('r-algconalgmod-43').style.color = 'blue'
          document.getElementById('r-algconalgmod-43').innerHTML = 'Correct!'
          
          document.getElementById('b-algconalgmod-43').classList.add("correct")
          document.getElementById('b-algconalgmod-41').classList.add("incorrect")
          document.getElementById('b-algconalgmod-42').classList.add("incorrect")
          document.getElementById('b-algconalgmod-44').classList.add("incorrect")
    
          document.getElementById('sa-algconalgmod-4').disabled = true;
          document.getElementById('o-algconalgmod-41').disabled = true;
          document.getElementById('o-algconalgmod-42').disabled = true;
          document.getElementById('o-algconalgmod-43').disabled = true;
          document.getElementById('o-algconalgmod-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algconalgmod4', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algconalgmod-5') != null) {
      algconalgmod5But.onclick = function() {
        if (document.getElementById('o-algconalgmod-51').checked) {
          document.getElementById('r-algconalgmod-51').style.color = 'red'
          document.getElementById('r-algconalgmod-51').innerHTML = 'Incorrect!'
          document.getElementById('r-algconalgmod-52').style.color = 'blue'
          document.getElementById('r-algconalgmod-52').innerHTML = 'Correct!'
          
          document.getElementById('b-algconalgmod-52').classList.add("correct")
          document.getElementById('b-algconalgmod-51').classList.add("incorrect")
          document.getElementById('b-algconalgmod-53').classList.add("incorrect")
          document.getElementById('b-algconalgmod-54').classList.add("incorrect")
    
          document.getElementById('sa-algconalgmod-5').disabled = true;
          document.getElementById('o-algconalgmod-51').disabled = true;
          document.getElementById('o-algconalgmod-52').disabled = true;
          document.getElementById('o-algconalgmod-53').disabled = true;
          document.getElementById('o-algconalgmod-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algconalgmod5', 0)
        }
        if (document.getElementById('o-algconalgmod-52').checked) {
          document.getElementById('r-algconalgmod-52').style.color = 'blue'
          document.getElementById('r-algconalgmod-52').innerHTML = 'Correct!'
          
          document.getElementById('b-algconalgmod-52').classList.add("correct")
          document.getElementById('b-algconalgmod-51').classList.add("incorrect")
          document.getElementById('b-algconalgmod-53').classList.add("incorrect")
          document.getElementById('b-algconalgmod-54').classList.add("incorrect")
    
          document.getElementById('sa-algconalgmod-5').disabled = true;
          document.getElementById('o-algconalgmod-51').disabled = true;
          document.getElementById('o-algconalgmod-52').disabled = true;
          document.getElementById('o-algconalgmod-53').disabled = true;
          document.getElementById('o-algconalgmod-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algconalgmod5', 1)
        }
        if (document.getElementById('o-algconalgmod-53').checked) {
          document.getElementById('r-algconalgmod-53').style.color = 'red'
          document.getElementById('r-algconalgmod-53').innerHTML = 'Incorrect!'
          document.getElementById('r-algconalgmod-52').style.color = 'blue'
          document.getElementById('r-algconalgmod-52').innerHTML = 'Correct!'
          
          document.getElementById('b-algconalgmod-52').classList.add("correct")
          document.getElementById('b-algconalgmod-51').classList.add("incorrect")
          document.getElementById('b-algconalgmod-53').classList.add("incorrect")
          document.getElementById('b-algconalgmod-54').classList.add("incorrect")
    
          document.getElementById('sa-algconalgmod-5').disabled = true;
          document.getElementById('o-algconalgmod-51').disabled = true;
          document.getElementById('o-algconalgmod-52').disabled = true;
          document.getElementById('o-algconalgmod-53').disabled = true;
          document.getElementById('o-algconalgmod-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algconalgmod5', 0)
        }
        if (document.getElementById('o-algconalgmod-54').checked) {
          document.getElementById('r-algconalgmod-54').style.color = 'red'
          document.getElementById('r-algconalgmod-54').innerHTML = 'Incorrect!'
          document.getElementById('r-algconalgmod-52').style.color = 'blue'
          document.getElementById('r-algconalgmod-52').innerHTML = 'Correct!'
          
          document.getElementById('b-algconalgmod-52').classList.add("correct")
          document.getElementById('b-algconalgmod-51').classList.add("incorrect")
          document.getElementById('b-algconalgmod-53').classList.add("incorrect")
          document.getElementById('b-algconalgmod-54').classList.add("incorrect")
    
          document.getElementById('sa-algconalgmod-5').disabled = true;
          document.getElementById('o-algconalgmod-51').disabled = true;
          document.getElementById('o-algconalgmod-52').disabled = true;
          document.getElementById('o-algconalgmod-53').disabled = true;
          document.getElementById('o-algconalgmod-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algconalgmod5', 0)
        }
      }
    }
        
         
      if (document.getElementById('sa-algconalgmod-6') != null) {
      algconalgmod6But.onclick = function() {
        if (document.getElementById('o-algconalgmod-61').checked) {
          document.getElementById('r-algconalgmod-61').style.color = 'red'
          document.getElementById('r-algconalgmod-61').innerHTML = 'Incorrect!'
          document.getElementById('r-algconalgmod-62').style.color = 'blue'
          document.getElementById('r-algconalgmod-62').innerHTML = 'Correct!'
          
          document.getElementById('b-algconalgmod-62').classList.add("correct")
          document.getElementById('b-algconalgmod-61').classList.add("incorrect")
          document.getElementById('b-algconalgmod-64').classList.add("incorrect")
          document.getElementById('b-algconalgmod-63').classList.add("incorrect")
    
          document.getElementById('sa-algconalgmod-6').disabled = true;
          document.getElementById('o-algconalgmod-61').disabled = true;
          document.getElementById('o-algconalgmod-62').disabled = true;
          document.getElementById('o-algconalgmod-63').disabled = true;
          document.getElementById('o-algconalgmod-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algconalgmod6', 0)
        }
        if (document.getElementById('o-algconalgmod-62').checked) {
          document.getElementById('r-algconalgmod-62').style.color = 'blue'
          document.getElementById('r-algconalgmod-62').innerHTML = 'Correct!'
          
          document.getElementById('b-algconalgmod-62').classList.add("correct")
          document.getElementById('b-algconalgmod-61').classList.add("incorrect")
          document.getElementById('b-algconalgmod-64').classList.add("incorrect")
          document.getElementById('b-algconalgmod-63').classList.add("incorrect")
    
          document.getElementById('sa-algconalgmod-6').disabled = true;
          document.getElementById('o-algconalgmod-61').disabled = true;
          document.getElementById('o-algconalgmod-62').disabled = true;
          document.getElementById('o-algconalgmod-63').disabled = true;
          document.getElementById('o-algconalgmod-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algconalgmod6', 1)
        }
        if (document.getElementById('o-algconalgmod-63').checked) {
          document.getElementById('r-algconalgmod-63').style.color = 'red'
          document.getElementById('r-algconalgmod-63').innerHTML = 'Incorrect!'
          document.getElementById('r-algconalgmod-62').style.color = 'blue'
          document.getElementById('r-algconalgmod-62').innerHTML = 'Correct!'
          
          document.getElementById('b-algconalgmod-62').classList.add("correct")
          document.getElementById('b-algconalgmod-61').classList.add("incorrect")
          document.getElementById('b-algconalgmod-64').classList.add("incorrect")
          document.getElementById('b-algconalgmod-63').classList.add("incorrect")
    
          document.getElementById('sa-algconalgmod-6').disabled = true;
          document.getElementById('o-algconalgmod-61').disabled = true;
          document.getElementById('o-algconalgmod-62').disabled = true;
          document.getElementById('o-algconalgmod-63').disabled = true;
          document.getElementById('o-algconalgmod-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algconalgmod6', 0)
        }
        if (document.getElementById('o-algconalgmod-64').checked) {
          document.getElementById('r-algconalgmod-64').style.color = 'red'
          document.getElementById('r-algconalgmod-64').innerHTML = 'Incorrect!'
          document.getElementById('r-algconalgmod-62').style.color = 'blue'
          document.getElementById('r-algconalgmod-62').innerHTML = 'Correct!'
          
          document.getElementById('b-algconalgmod-62').classList.add("correct")
          document.getElementById('b-algconalgmod-61').classList.add("incorrect")
          document.getElementById('b-algconalgmod-64').classList.add("incorrect")
          document.getElementById('b-algconalgmod-63').classList.add("incorrect")
    
          document.getElementById('sa-algconalgmod-6').disabled = true;
          document.getElementById('o-algconalgmod-61').disabled = true;
          document.getElementById('o-algconalgmod-62').disabled = true;
          document.getElementById('o-algconalgmod-63').disabled = true;
          document.getElementById('o-algconalgmod-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algconalgmod6', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algconalgmod-7') != null) {
      algconalgmod7But.onclick = function() {
        if (document.getElementById('o-algconalgmod-71').checked) {
          document.getElementById('r-algconalgmod-71').style.color = 'red'
          document.getElementById('r-algconalgmod-71').innerHTML = 'Incorrect!'
          document.getElementById('r-algconalgmod-74').style.color = 'blue'
          document.getElementById('r-algconalgmod-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algconalgmod-74').classList.add("correct")
          document.getElementById('b-algconalgmod-71').classList.add("incorrect")
          document.getElementById('b-algconalgmod-72').classList.add("incorrect")
          document.getElementById('b-algconalgmod-73').classList.add("incorrect")
    
          document.getElementById('sa-algconalgmod-7').disabled = true;
          document.getElementById('o-algconalgmod-71').disabled = true;
          document.getElementById('o-algconalgmod-72').disabled = true;
          document.getElementById('o-algconalgmod-73').disabled = true;
          document.getElementById('o-algconalgmod-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algconalgmod7', 0)
        }
        if (document.getElementById('o-algconalgmod-72').checked) {
          document.getElementById('r-algconalgmod-72').style.color = 'red'
          document.getElementById('r-algconalgmod-72').innerHTML = 'Incorrect!'
          document.getElementById('r-algconalgmod-74').style.color = 'blue'
          document.getElementById('r-algconalgmod-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algconalgmod-74').classList.add("correct")
          document.getElementById('b-algconalgmod-71').classList.add("incorrect")
          document.getElementById('b-algconalgmod-72').classList.add("incorrect")
          document.getElementById('b-algconalgmod-73').classList.add("incorrect")
    
          document.getElementById('sa-algconalgmod-7').disabled = true;
          document.getElementById('o-algconalgmod-71').disabled = true;
          document.getElementById('o-algconalgmod-72').disabled = true;
          document.getElementById('o-algconalgmod-73').disabled = true;
          document.getElementById('o-algconalgmod-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algconalgmod7', 0)
        }
        if (document.getElementById('o-algconalgmod-73').checked) {
          document.getElementById('r-algconalgmod-73').style.color = 'red'
          document.getElementById('r-algconalgmod-73').innerHTML = 'Incorrect!'
          document.getElementById('r-algconalgmod-74').style.color = 'blue'
          document.getElementById('r-algconalgmod-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algconalgmod-74').classList.add("correct")
          document.getElementById('b-algconalgmod-71').classList.add("incorrect")
          document.getElementById('b-algconalgmod-72').classList.add("incorrect")
          document.getElementById('b-algconalgmod-73').classList.add("incorrect")
    
          document.getElementById('sa-algconalgmod-7').disabled = true;
          document.getElementById('o-algconalgmod-71').disabled = true;
          document.getElementById('o-algconalgmod-72').disabled = true;
          document.getElementById('o-algconalgmod-73').disabled = true;
          document.getElementById('o-algconalgmod-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algconalgmod7', 0)
        }
        if (document.getElementById('o-algconalgmod-74').checked) {
          document.getElementById('r-algconalgmod-74').style.color = 'blue'
          document.getElementById('r-algconalgmod-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algconalgmod-74').classList.add("correct")
          document.getElementById('b-algconalgmod-71').classList.add("incorrect")
          document.getElementById('b-algconalgmod-72').classList.add("incorrect")
          document.getElementById('b-algconalgmod-73').classList.add("incorrect")
    
          document.getElementById('sa-algconalgmod-7').disabled = true;
          document.getElementById('o-algconalgmod-71').disabled = true;
          document.getElementById('o-algconalgmod-72').disabled = true;
          document.getElementById('o-algconalgmod-73').disabled = true;
          document.getElementById('o-algconalgmod-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algconalgmod7', 1)
        }
      }
    }
    
    
    if (document.getElementById('sa-algconalgmod-8') != null) {
      algconalgmod8But.onclick = function() {
        if (document.getElementById('o-algconalgmod-81').checked) {
          document.getElementById('r-algconalgmod-81').style.color = 'red'
          document.getElementById('r-algconalgmod-81').innerHTML = 'Incorrect!'
          document.getElementById('r-algconalgmod-82').style.color = 'blue'
          document.getElementById('r-algconalgmod-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algconalgmod-82').classList.add("correct")
          document.getElementById('b-algconalgmod-81').classList.add("incorrect")
          document.getElementById('b-algconalgmod-83').classList.add("incorrect")
          document.getElementById('b-algconalgmod-84').classList.add("incorrect")
    
          document.getElementById('sa-algconalgmod-8').disabled = true;
          document.getElementById('o-algconalgmod-81').disabled = true;
          document.getElementById('o-algconalgmod-82').disabled = true;
          document.getElementById('o-algconalgmod-83').disabled = true;
          document.getElementById('o-algconalgmod-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algconalgmod8', 0)
        }
        if (document.getElementById('o-algconalgmod-82').checked) {
          document.getElementById('r-algconalgmod-82').style.color = 'blue'
          document.getElementById('r-algconalgmod-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algconalgmod-82').classList.add("correct")
          document.getElementById('b-algconalgmod-81').classList.add("incorrect")
          document.getElementById('b-algconalgmod-83').classList.add("incorrect")
          document.getElementById('b-algconalgmod-84').classList.add("incorrect")
    
          document.getElementById('sa-algconalgmod-8').disabled = true;
          document.getElementById('o-algconalgmod-81').disabled = true;
          document.getElementById('o-algconalgmod-82').disabled = true;
          document.getElementById('o-algconalgmod-83').disabled = true;
          document.getElementById('o-algconalgmod-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algconalgmod8', 1)
        }
        if (document.getElementById('o-algconalgmod-83').checked) {
          document.getElementById('r-algconalgmod-83').style.color = 'red'
          document.getElementById('r-algconalgmod-83').innerHTML = 'Incorrect!'
          document.getElementById('r-algconalgmod-82').style.color = 'blue'
          document.getElementById('r-algconalgmod-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algconalgmod-82').classList.add("correct")
          document.getElementById('b-algconalgmod-81').classList.add("incorrect")
          document.getElementById('b-algconalgmod-83').classList.add("incorrect")
          document.getElementById('b-algconalgmod-84').classList.add("incorrect")
    
          document.getElementById('sa-algconalgmod-8').disabled = true;
          document.getElementById('o-algconalgmod-81').disabled = true;
          document.getElementById('o-algconalgmod-82').disabled = true;
          document.getElementById('o-algconalgmod-83').disabled = true;
          document.getElementById('o-algconalgmod-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algconalgmod8', 0)
        }
        if (document.getElementById('o-algconalgmod-84').checked) {
          document.getElementById('r-algconalgmod-84').style.color = 'red'
          document.getElementById('r-algconalgmod-84').innerHTML = 'Incorrect!'
          document.getElementById('r-algconalgmod-82').style.color = 'blue'
          document.getElementById('r-algconalgmod-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algconalgmod-82').classList.add("correct")
          document.getElementById('b-algconalgmod-81').classList.add("incorrect")
          document.getElementById('b-algconalgmod-83').classList.add("incorrect")
          document.getElementById('b-algconalgmod-84').classList.add("incorrect")
    
          document.getElementById('sa-algconalgmod-8').disabled = true;
          document.getElementById('o-algconalgmod-81').disabled = true;
          document.getElementById('o-algconalgmod-82').disabled = true;
          document.getElementById('o-algconalgmod-83').disabled = true;
          document.getElementById('o-algconalgmod-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algconalgmod8', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-algconalgmod-9') != null) {
      algconalgmod9But.onclick = function() {
        if (document.getElementById('o-algconalgmod-91').checked) {
          document.getElementById('r-algconalgmod-91').style.color = 'red'
          document.getElementById('r-algconalgmod-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algconalgmod-94').style.color = 'blue'
          document.getElementById('r-algconalgmod-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algconalgmod-94').classList.add("correct")
          document.getElementById('b-algconalgmod-91').classList.add("incorrect")
          document.getElementById('b-algconalgmod-92').classList.add("incorrect")
          document.getElementById('b-algconalgmod-93').classList.add("incorrect")
    
          document.getElementById('sa-algconalgmod-9').disabled = true;
          document.getElementById('o-algconalgmod-91').disabled = true;
          document.getElementById('o-algconalgmod-92').disabled = true;
          document.getElementById('o-algconalgmod-93').disabled = true;
          document.getElementById('o-algconalgmod-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algconalgmod9', 0)
        }
        if (document.getElementById('o-algconalgmod-92').checked) {
          document.getElementById('r-algconalgmod-91').style.color = 'red'
          document.getElementById('r-algconalgmod-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algconalgmod-94').style.color = 'blue'
          document.getElementById('r-algconalgmod-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algconalgmod-94').classList.add("correct")
          document.getElementById('b-algconalgmod-91').classList.add("incorrect")
          document.getElementById('b-algconalgmod-92').classList.add("incorrect")
          document.getElementById('b-algconalgmod-93').classList.add("incorrect")
    
          document.getElementById('sa-algconalgmod-9').disabled = true;
          document.getElementById('o-algconalgmod-91').disabled = true;
          document.getElementById('o-algconalgmod-92').disabled = true;
          document.getElementById('o-algconalgmod-93').disabled = true;
          document.getElementById('o-algconalgmod-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algconalgmod9', 0)
        }
        if (document.getElementById('o-algconalgmod-93').checked) {
          document.getElementById('r-algconalgmod-91').style.color = 'red'
          document.getElementById('r-algconalgmod-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algconalgmod-94').style.color = 'blue'
          document.getElementById('r-algconalgmod-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algconalgmod-94').classList.add("correct")
          document.getElementById('b-algconalgmod-91').classList.add("incorrect")
          document.getElementById('b-algconalgmod-92').classList.add("incorrect")
          document.getElementById('b-algconalgmod-93').classList.add("incorrect")
    
          document.getElementById('sa-algconalgmod-9').disabled = true;
          document.getElementById('o-algconalgmod-91').disabled = true;
          document.getElementById('o-algconalgmod-92').disabled = true;
          document.getElementById('o-algconalgmod-93').disabled = true;
          document.getElementById('o-algconalgmod-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algconalgmod9', 0)
        }
        if (document.getElementById('o-algconalgmod-94').checked) {
          document.getElementById('r-algconalgmod-94').style.color = 'blue'
          document.getElementById('r-algconalgmod-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algconalgmod-94').classList.add("correct")
          document.getElementById('b-algconalgmod-91').classList.add("incorrect")
          document.getElementById('b-algconalgmod-92').classList.add("incorrect")
          document.getElementById('b-algconalgmod-93').classList.add("incorrect")
    
          document.getElementById('sa-algconalgmod-9').disabled = true;
          document.getElementById('o-algconalgmod-91').disabled = true;
          document.getElementById('o-algconalgmod-92').disabled = true;
          document.getElementById('o-algconalgmod-93').disabled = true;
          document.getElementById('o-algconalgmod-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algconalgmod9', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algconalgmod-10') != null) {
      algconalgmod10But.onclick = function() {
        if (document.getElementById('o-algconalgmod-101').checked) {
          document.getElementById('r-algconalgmod-101').style.color = 'red'
          document.getElementById('r-algconalgmod-101').innerHTML = 'Incorrect!'
          document.getElementById('r-algconalgmod-103').style.color = 'blue'
          document.getElementById('r-algconalgmod-103').innerHTML = 'Correct!'
          
          document.getElementById('b-algconalgmod-103').classList.add("correct")
          document.getElementById('b-algconalgmod-101').classList.add("incorrect")
          document.getElementById('b-algconalgmod-102').classList.add("incorrect")
          document.getElementById('b-algconalgmod-104').classList.add("incorrect")
    
          document.getElementById('sa-algconalgmod-10').disabled = true;
          document.getElementById('o-algconalgmod-101').disabled = true;
          document.getElementById('o-algconalgmod-102').disabled = true;
          document.getElementById('o-algconalgmod-103').disabled = true;
          document.getElementById('o-algconalgmod-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algconalgmod10', 0)
        }
        if (document.getElementById('o-algconalgmod-102').checked) {
          document.getElementById('r-algconalgmod-102').style.color = 'red'
          document.getElementById('r-algconalgmod-102').innerHTML = 'Incorrect!'
          document.getElementById('r-algconalgmod-103').style.color = 'blue'
          document.getElementById('r-algconalgmod-103').innerHTML = 'Correct!'
          
          document.getElementById('b-algconalgmod-103').classList.add("correct")
          document.getElementById('b-algconalgmod-101').classList.add("incorrect")
          document.getElementById('b-algconalgmod-102').classList.add("incorrect")
          document.getElementById('b-algconalgmod-104').classList.add("incorrect")
    
          document.getElementById('sa-algconalgmod-10').disabled = true;
          document.getElementById('o-algconalgmod-101').disabled = true;
          document.getElementById('o-algconalgmod-102').disabled = true;
          document.getElementById('o-algconalgmod-103').disabled = true;
          document.getElementById('o-algconalgmod-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algconalgmod10', 0)
        }
        if (document.getElementById('o-algconalgmod-103').checked) {
          document.getElementById('r-algconalgmod-103').style.color = 'blue'
          document.getElementById('r-algconalgmod-103').innerHTML = 'Correct!'
          
          document.getElementById('b-algconalgmod-103').classList.add("correct")
          document.getElementById('b-algconalgmod-101').classList.add("incorrect")
          document.getElementById('b-algconalgmod-102').classList.add("incorrect")
          document.getElementById('b-algconalgmod-104').classList.add("incorrect")
    
          document.getElementById('sa-algconalgmod-10').disabled = true;
          document.getElementById('o-algconalgmod-101').disabled = true;
          document.getElementById('o-algconalgmod-102').disabled = true;
          document.getElementById('o-algconalgmod-103').disabled = true;
          document.getElementById('o-algconalgmod-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algconalgmod10', 1)
        }
        if (document.getElementById('o-algconalgmod-104').checked) {
          document.getElementById('r-algconalgmod-104').style.color = 'red'
          document.getElementById('r-algconalgmod-104').innerHTML = 'Incorrect!'
          document.getElementById('r-algconalgmod-103').style.color = 'blue'
          document.getElementById('r-algconalgmod-103').innerHTML = 'Correct!'
          
          document.getElementById('b-algconalgmod-103').classList.add("correct")
          document.getElementById('b-algconalgmod-101').classList.add("incorrect")
          document.getElementById('b-algconalgmod-102').classList.add("incorrect")
          document.getElementById('b-algconalgmod-104').classList.add("incorrect")
    
          document.getElementById('sa-algconalgmod-10').disabled = true;
          document.getElementById('o-algconalgmod-101').disabled = true;
          document.getElementById('o-algconalgmod-102').disabled = true;
          document.getElementById('o-algconalgmod-103').disabled = true;
          document.getElementById('o-algconalgmod-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algconalgmod10', 0)
        }
      }
    }
    