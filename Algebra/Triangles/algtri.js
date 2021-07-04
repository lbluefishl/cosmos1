
  let algtri1But = document.getElementById('sa-algtri-1');
  let algtri2But = document.getElementById('sa-algtri-2');
  let algtri3But = document.getElementById('sa-algtri-3');
  let algtri4But = document.getElementById('sa-algtri-4');
  let algtri5But = document.getElementById('sa-algtri-5');
  let algtri6But = document.getElementById('sa-algtri-6');
  let algtri7But = document.getElementById('sa-algtri-7');
  let algtri8But = document.getElementById('sa-algtri-8');
  let algtri9But = document.getElementById('sa-algtri-9');
  let algtri10But = document.getElementById('sa-algtri-10');


  showExplanation1 = function() {
    document.getElementById('e-algtri-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-algtri-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-algtri-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-algtri-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-algtri-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-algtri-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-algtri-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-algtri-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-algtri-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-algtri-10').style.display = 'block';
     } 



     if (document.getElementById('sa-algtri-1') != null) {
      algtri1But.onclick = function () {
        if (document.getElementById('o-algtri-11').checked) {                   
          document.getElementById('r-algtri-11').style.color = 'red'
          document.getElementById('r-algtri-11').innerHTML = 'Incorrect!'
          document.getElementById('r-algtri-12').style.color = 'blue'
          document.getElementById('r-algtri-12').innerHTML = 'Correct!'
    
          document.getElementById('b-algtri-12').classList.add("correct")
          document.getElementById('b-algtri-11').classList.add("incorrect")
          document.getElementById('b-algtri-13').classList.add("incorrect")
          document.getElementById('b-algtri-14').classList.add("incorrect")
    
          document.getElementById('sa-algtri-1').disabled = true;
          document.getElementById('o-algtri-11').disabled = true;
          document.getElementById('o-algtri-12').disabled = true;
          document.getElementById('o-algtri-13').disabled = true;
          document.getElementById('o-algtri-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algtri1', 0)
        }
    
        if (document.getElementById('o-algtri-12').checked) {
          document.getElementById('r-algtri-12').style.color = 'blue'
          document.getElementById('r-algtri-12').innerHTML = 'Correct!'
    
          document.getElementById('b-algtri-12').classList.add("correct")
          document.getElementById('b-algtri-11').classList.add("incorrect")
          document.getElementById('b-algtri-13').classList.add("incorrect")
          document.getElementById('b-algtri-14').classList.add("incorrect")
    
          document.getElementById('sa-algtri-1').disabled = true;
          document.getElementById('o-algtri-11').disabled = true;
          document.getElementById('o-algtri-12').disabled = true;
          document.getElementById('o-algtri-13').disabled = true;
          document.getElementById('o-algtri-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algtri1', 1)
        }
        if (document.getElementById('o-algtri-13').checked) {
          document.getElementById('r-algtri-13').style.color = 'red'
          document.getElementById('r-algtri-13').innerHTML = 'Incorrect!'
          document.getElementById('r-algtri-12').style.color = 'blue'
          document.getElementById('r-algtri-12').innerHTML = 'Correct!'
          
          document.getElementById('b-algtri-12').classList.add("correct")
          document.getElementById('b-algtri-11').classList.add("incorrect")
          document.getElementById('b-algtri-13').classList.add("incorrect")
          document.getElementById('b-algtri-14').classList.add("incorrect")
    
          document.getElementById('sa-algtri-1').disabled = true;
          document.getElementById('o-algtri-11').disabled = true;
          document.getElementById('o-algtri-12').disabled = true;
          document.getElementById('o-algtri-13').disabled = true;
          document.getElementById('o-algtri-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algtri1', 0)
        }
        if (document.getElementById('o-algtri-14').checked) {
          document.getElementById('r-algtri-14').style.color = 'red'
          document.getElementById('r-algtri-14').innerHTML = 'Incorrect!'
          document.getElementById('r-algtri-12').style.color = 'blue'
          document.getElementById('r-algtri-12').innerHTML = 'Correct!'
          
          document.getElementById('b-algtri-12').classList.add("correct")
          document.getElementById('b-algtri-11').classList.add("incorrect")
          document.getElementById('b-algtri-13').classList.add("incorrect")
          document.getElementById('b-algtri-14').classList.add("incorrect")
    
          document.getElementById('sa-algtri-1').disabled = true;
          document.getElementById('o-algtri-11').disabled = true;
          document.getElementById('o-algtri-12').disabled = true;
          document.getElementById('o-algtri-13').disabled = true;
          document.getElementById('o-algtri-14').disabled = true;
          showExplanation1()
          localStorage.setItem('algtri1', 0)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-algtri-2') != null) {
      algtri2But.onclick = function() {
        if (document.getElementById('o-algtri-21').checked) {
          document.getElementById('r-algtri-21').style.color = 'red'
          document.getElementById('r-algtri-21').innerHTML = 'Incorrect!'
          document.getElementById('r-algtri-22').style.color = 'blue'
          document.getElementById('r-algtri-22').innerHTML = 'Correct!'
          
          document.getElementById('b-algtri-22').classList.add("correct")
          document.getElementById('b-algtri-21').classList.add("incorrect")
          document.getElementById('b-algtri-23').classList.add("incorrect")
          document.getElementById('b-algtri-24').classList.add("incorrect")
    
          document.getElementById('sa-algtri-2').disabled = true;
          document.getElementById('o-algtri-21').disabled = true;
          document.getElementById('o-algtri-22').disabled = true;
          document.getElementById('o-algtri-23').disabled = true;
          document.getElementById('o-algtri-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algtri2', 0)
        }
        if (document.getElementById('o-algtri-22').checked) {
          document.getElementById('r-algtri-22').style.color = 'blue'
          document.getElementById('r-algtri-22').innerHTML = 'Correct!'
          
          document.getElementById('b-algtri-22').classList.add("correct")
          document.getElementById('b-algtri-21').classList.add("incorrect")
          document.getElementById('b-algtri-23').classList.add("incorrect")
          document.getElementById('b-algtri-24').classList.add("incorrect")
    
          document.getElementById('sa-algtri-2').disabled = true;
          document.getElementById('o-algtri-21').disabled = true;
          document.getElementById('o-algtri-22').disabled = true;
          document.getElementById('o-algtri-23').disabled = true;
          document.getElementById('o-algtri-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algtri2', 1)
        }
        if (document.getElementById('o-algtri-23').checked) {
          document.getElementById('r-algtri-23').style.color = 'red'
          document.getElementById('r-algtri-23').innerHTML = 'Incorrect!'
          document.getElementById('r-algtri-22').style.color = 'blue'
          document.getElementById('r-algtri-22').innerHTML = 'Correct!'
          
          document.getElementById('b-algtri-22').classList.add("correct")
          document.getElementById('b-algtri-21').classList.add("incorrect")
          document.getElementById('b-algtri-23').classList.add("incorrect")
          document.getElementById('b-algtri-24').classList.add("incorrect")
    
          document.getElementById('sa-algtri-2').disabled = true;
          document.getElementById('o-algtri-21').disabled = true;
          document.getElementById('o-algtri-22').disabled = true;
          document.getElementById('o-algtri-23').disabled = true;
          document.getElementById('o-algtri-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algtri2', 0)
        }
        if (document.getElementById('o-algtri-24').checked) {
          document.getElementById('r-algtri-24').style.color = 'red'
          document.getElementById('r-algtri-24').innerHTML = 'Incorrect!'
          document.getElementById('r-algtri-22').style.color = 'blue'
          document.getElementById('r-algtri-22').innerHTML = 'Correct!'
          
          document.getElementById('b-algtri-22').classList.add("correct")
          document.getElementById('b-algtri-21').classList.add("incorrect")
          document.getElementById('b-algtri-23').classList.add("incorrect")
          document.getElementById('b-algtri-24').classList.add("incorrect")
    
          document.getElementById('sa-algtri-2').disabled = true;
          document.getElementById('o-algtri-21').disabled = true;
          document.getElementById('o-algtri-22').disabled = true;
          document.getElementById('o-algtri-23').disabled = true;
          document.getElementById('o-algtri-24').disabled = true;
          showExplanation2()
          localStorage.setItem('algtri2', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algtri-3') != null) {
      algtri3But.onclick = function() {
        if (document.getElementById('o-algtri-31').checked) {
          document.getElementById('r-algtri-31').style.color = 'red'
          document.getElementById('r-algtri-31').innerHTML = 'Incorrect!'
          document.getElementById('r-algtri-32').style.color = 'blue'
          document.getElementById('r-algtri-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algtri-32').classList.add("correct")
          document.getElementById('b-algtri-31').classList.add("incorrect")
          document.getElementById('b-algtri-33').classList.add("incorrect")
          document.getElementById('b-algtri-34').classList.add("incorrect")
    
          document.getElementById('sa-algtri-3').disabled = true;
          document.getElementById('o-algtri-31').disabled = true;
          document.getElementById('o-algtri-32').disabled = true;
          document.getElementById('o-algtri-33').disabled = true;
          document.getElementById('o-algtri-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algtri3', 0)
        }
        if (document.getElementById('o-algtri-32').checked) {
    
          document.getElementById('r-algtri-32').style.color = 'blue'
          document.getElementById('r-algtri-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algtri-32').classList.add("correct")
          document.getElementById('b-algtri-31').classList.add("incorrect")
          document.getElementById('b-algtri-33').classList.add("incorrect")
          document.getElementById('b-algtri-34').classList.add("incorrect")
    
          document.getElementById('sa-algtri-3').disabled = true;
          document.getElementById('o-algtri-31').disabled = true;
          document.getElementById('o-algtri-32').disabled = true;
          document.getElementById('o-algtri-33').disabled = true;
          document.getElementById('o-algtri-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algtri3', 1)
        }
        if (document.getElementById('o-algtri-33').checked) {
          document.getElementById('r-algtri-33').style.color = 'red'
          document.getElementById('r-algtri-33').innerHTML = 'Incorrect!'
          document.getElementById('r-algtri-32').style.color = 'blue'
          document.getElementById('r-algtri-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algtri-32').classList.add("correct")
          document.getElementById('b-algtri-31').classList.add("incorrect")
          document.getElementById('b-algtri-33').classList.add("incorrect")
          document.getElementById('b-algtri-34').classList.add("incorrect")
    
          document.getElementById('sa-algtri-3').disabled = true;
          document.getElementById('o-algtri-31').disabled = true;
          document.getElementById('o-algtri-32').disabled = true;
          document.getElementById('o-algtri-33').disabled = true;
          document.getElementById('o-algtri-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algtri3', 0)
        }
        if (document.getElementById('o-algtri-34').checked) {
          document.getElementById('r-algtri-34').style.color = 'red'
          document.getElementById('r-algtri-34').innerHTML = 'Incorrect!'
          document.getElementById('r-algtri-32').style.color = 'blue'
          document.getElementById('r-algtri-32').innerHTML = 'Correct!'
          
          document.getElementById('b-algtri-32').classList.add("correct")
          document.getElementById('b-algtri-31').classList.add("incorrect")
          document.getElementById('b-algtri-33').classList.add("incorrect")
          document.getElementById('b-algtri-34').classList.add("incorrect")
    
          document.getElementById('sa-algtri-3').disabled = true;
          document.getElementById('o-algtri-31').disabled = true;
          document.getElementById('o-algtri-32').disabled = true;
          document.getElementById('o-algtri-33').disabled = true;
          document.getElementById('o-algtri-34').disabled = true;
          showExplanation3()
          localStorage.setItem('algtri3', 0)
        }
      }
    }
    
    if (document.getElementById('sa-algtri-4') != null) {
      algtri4But.onclick = function() {
        if (document.getElementById('o-algtri-41').checked) {
          document.getElementById('r-algtri-41').style.color = 'red'
          document.getElementById('r-algtri-41').innerHTML = 'Incorrect!'
          document.getElementById('r-algtri-44').style.color = 'blue'
          document.getElementById('r-algtri-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algtri-44').classList.add("correct")
          document.getElementById('b-algtri-41').classList.add("incorrect")
          document.getElementById('b-algtri-42').classList.add("incorrect")
          document.getElementById('b-algtri-43').classList.add("incorrect")
    
          document.getElementById('sa-algtri-4').disabled = true;
          document.getElementById('o-algtri-41').disabled = true;
          document.getElementById('o-algtri-42').disabled = true;
          document.getElementById('o-algtri-43').disabled = true;
          document.getElementById('o-algtri-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algtri4', 0)
        }
        if (document.getElementById('o-algtri-42').checked) {
          document.getElementById('r-algtri-42').style.color = 'red'
          document.getElementById('r-algtri-42').innerHTML = 'Incorrect!'
          document.getElementById('r-algtri-44').style.color = 'blue'
          document.getElementById('r-algtri-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algtri-44').classList.add("correct")
          document.getElementById('b-algtri-41').classList.add("incorrect")
          document.getElementById('b-algtri-42').classList.add("incorrect")
          document.getElementById('b-algtri-43').classList.add("incorrect")
    
          document.getElementById('sa-algtri-4').disabled = true;
          document.getElementById('o-algtri-41').disabled = true;
          document.getElementById('o-algtri-42').disabled = true;
          document.getElementById('o-algtri-43').disabled = true;
          document.getElementById('o-algtri-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algtri4', 0)
        }
        if (document.getElementById('o-algtri-43').checked) {
          document.getElementById('r-algtri-43').style.color = 'red'
          document.getElementById('r-algtri-43').innerHTML = 'Incorrect!'
          document.getElementById('r-algtri-44').style.color = 'blue'
          document.getElementById('r-algtri-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algtri-44').classList.add("correct")
          document.getElementById('b-algtri-41').classList.add("incorrect")
          document.getElementById('b-algtri-42').classList.add("incorrect")
          document.getElementById('b-algtri-43').classList.add("incorrect")
    
          document.getElementById('sa-algtri-4').disabled = true;
          document.getElementById('o-algtri-41').disabled = true;
          document.getElementById('o-algtri-42').disabled = true;
          document.getElementById('o-algtri-43').disabled = true;
          document.getElementById('o-algtri-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algtri4', 0)
        }
        if (document.getElementById('o-algtri-44').checked) {
          document.getElementById('r-algtri-44').style.color = 'blue'
          document.getElementById('r-algtri-44').innerHTML = 'Correct!'
          
          document.getElementById('b-algtri-44').classList.add("correct")
          document.getElementById('b-algtri-41').classList.add("incorrect")
          document.getElementById('b-algtri-42').classList.add("incorrect")
          document.getElementById('b-algtri-43').classList.add("incorrect")
    
          document.getElementById('sa-algtri-4').disabled = true;
          document.getElementById('o-algtri-41').disabled = true;
          document.getElementById('o-algtri-42').disabled = true;
          document.getElementById('o-algtri-43').disabled = true;
          document.getElementById('o-algtri-44').disabled = true;
          showExplanation4()
          localStorage.setItem('algtri4', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algtri-5') != null) {
      algtri5But.onclick = function() {
        if (document.getElementById('o-algtri-51').checked) {
          document.getElementById('r-algtri-51').style.color = 'red'
          document.getElementById('r-algtri-51').innerHTML = 'Incorrect!'
          document.getElementById('r-algtri-53').style.color = 'blue'
          document.getElementById('r-algtri-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algtri-53').classList.add("correct")
          document.getElementById('b-algtri-51').classList.add("incorrect")
          document.getElementById('b-algtri-52').classList.add("incorrect")
          document.getElementById('b-algtri-54').classList.add("incorrect")
    
          document.getElementById('sa-algtri-5').disabled = true;
          document.getElementById('o-algtri-51').disabled = true;
          document.getElementById('o-algtri-52').disabled = true;
          document.getElementById('o-algtri-53').disabled = true;
          document.getElementById('o-algtri-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algtri5', 0)
        }
        if (document.getElementById('o-algtri-52').checked) {
          document.getElementById('r-algtri-52').style.color = 'red'
          document.getElementById('r-algtri-52').innerHTML = 'Incorrect!'
          document.getElementById('r-algtri-53').style.color = 'blue'
          document.getElementById('r-algtri-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algtri-53').classList.add("correct")
          document.getElementById('b-algtri-51').classList.add("incorrect")
          document.getElementById('b-algtri-52').classList.add("incorrect")
          document.getElementById('b-algtri-54').classList.add("incorrect")
    
          document.getElementById('sa-algtri-5').disabled = true;
          document.getElementById('o-algtri-51').disabled = true;
          document.getElementById('o-algtri-52').disabled = true;
          document.getElementById('o-algtri-53').disabled = true;
          document.getElementById('o-algtri-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algtri5', 0)
        }
        if (document.getElementById('o-algtri-53').checked) {
          document.getElementById('r-algtri-53').style.color = 'blue'
          document.getElementById('r-algtri-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algtri-53').classList.add("correct")
          document.getElementById('b-algtri-51').classList.add("incorrect")
          document.getElementById('b-algtri-52').classList.add("incorrect")
          document.getElementById('b-algtri-54').classList.add("incorrect")
    
          document.getElementById('sa-algtri-5').disabled = true;
          document.getElementById('o-algtri-51').disabled = true;
          document.getElementById('o-algtri-52').disabled = true;
          document.getElementById('o-algtri-53').disabled = true;
          document.getElementById('o-algtri-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algtri5', 1)
        }
        if (document.getElementById('o-algtri-54').checked) {
          document.getElementById('r-algtri-54').style.color = 'red'
          document.getElementById('r-algtri-54').innerHTML = 'Incorrect!'
          document.getElementById('r-algtri-53').style.color = 'blue'
          document.getElementById('r-algtri-53').innerHTML = 'Correct!'
          
          document.getElementById('b-algtri-53').classList.add("correct")
          document.getElementById('b-algtri-51').classList.add("incorrect")
          document.getElementById('b-algtri-52').classList.add("incorrect")
          document.getElementById('b-algtri-54').classList.add("incorrect")
    
          document.getElementById('sa-algtri-5').disabled = true;
          document.getElementById('o-algtri-51').disabled = true;
          document.getElementById('o-algtri-52').disabled = true;
          document.getElementById('o-algtri-53').disabled = true;
          document.getElementById('o-algtri-54').disabled = true;
          showExplanation5()
          localStorage.setItem('algtri5', 0)
        }
      }
    }
        
         
      if (document.getElementById('sa-algtri-6') != null) {
      algtri6But.onclick = function() {
        if (document.getElementById('o-algtri-61').checked) {
          document.getElementById('r-algtri-61').style.color = 'red'
          document.getElementById('r-algtri-61').innerHTML = 'Incorrect!'
          document.getElementById('r-algtri-64').style.color = 'blue'
          document.getElementById('r-algtri-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algtri-64').classList.add("correct")
          document.getElementById('b-algtri-61').classList.add("incorrect")
          document.getElementById('b-algtri-62').classList.add("incorrect")
          document.getElementById('b-algtri-63').classList.add("incorrect")
    
          document.getElementById('sa-algtri-6').disabled = true;
          document.getElementById('o-algtri-61').disabled = true;
          document.getElementById('o-algtri-62').disabled = true;
          document.getElementById('o-algtri-63').disabled = true;
          document.getElementById('o-algtri-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algtri6', 0)
        }
        if (document.getElementById('o-algtri-62').checked) {
          document.getElementById('r-algtri-62').style.color = 'red'
          document.getElementById('r-algtri-62').innerHTML = 'Incorrect!'
          document.getElementById('r-algtri-64').style.color = 'blue'
          document.getElementById('r-algtri-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algtri-64').classList.add("correct")
          document.getElementById('b-algtri-61').classList.add("incorrect")
          document.getElementById('b-algtri-62').classList.add("incorrect")
          document.getElementById('b-algtri-63').classList.add("incorrect")
    
          document.getElementById('sa-algtri-6').disabled = true;
          document.getElementById('o-algtri-61').disabled = true;
          document.getElementById('o-algtri-62').disabled = true;
          document.getElementById('o-algtri-63').disabled = true;
          document.getElementById('o-algtri-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algtri6', 0)
        }
        if (document.getElementById('o-algtri-63').checked) {
          document.getElementById('r-algtri-63').style.color = 'red'
          document.getElementById('r-algtri-63').innerHTML = 'Incorrect!'
          document.getElementById('r-algtri-64').style.color = 'blue'
          document.getElementById('r-algtri-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algtri-64').classList.add("correct")
          document.getElementById('b-algtri-61').classList.add("incorrect")
          document.getElementById('b-algtri-62').classList.add("incorrect")
          document.getElementById('b-algtri-63').classList.add("incorrect")
    
          document.getElementById('sa-algtri-6').disabled = true;
          document.getElementById('o-algtri-61').disabled = true;
          document.getElementById('o-algtri-62').disabled = true;
          document.getElementById('o-algtri-63').disabled = true;
          document.getElementById('o-algtri-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algtri6', 0)
        }
        if (document.getElementById('o-algtri-64').checked) {
          document.getElementById('r-algtri-64').style.color = 'blue'
          document.getElementById('r-algtri-64').innerHTML = 'Correct!'
          
          document.getElementById('b-algtri-64').classList.add("correct")
          document.getElementById('b-algtri-61').classList.add("incorrect")
          document.getElementById('b-algtri-62').classList.add("incorrect")
          document.getElementById('b-algtri-63').classList.add("incorrect")
    
          document.getElementById('sa-algtri-6').disabled = true;
          document.getElementById('o-algtri-61').disabled = true;
          document.getElementById('o-algtri-62').disabled = true;
          document.getElementById('o-algtri-63').disabled = true;
          document.getElementById('o-algtri-64').disabled = true;
          showExplanation6()
          localStorage.setItem('algtri6', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algtri-7') != null) {
      algtri7But.onclick = function() {
        if (document.getElementById('o-algtri-71').checked) {
          document.getElementById('r-algtri-71').style.color = 'red'
          document.getElementById('r-algtri-71').innerHTML = 'Incorrect!'
          document.getElementById('r-algtri-74').style.color = 'blue'
          document.getElementById('r-algtri-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algtri-74').classList.add("correct")
          document.getElementById('b-algtri-71').classList.add("incorrect")
          document.getElementById('b-algtri-72').classList.add("incorrect")
          document.getElementById('b-algtri-73').classList.add("incorrect")
    
          document.getElementById('sa-algtri-7').disabled = true;
          document.getElementById('o-algtri-71').disabled = true;
          document.getElementById('o-algtri-72').disabled = true;
          document.getElementById('o-algtri-73').disabled = true;
          document.getElementById('o-algtri-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algtri7', 0)
        }
        if (document.getElementById('o-algtri-72').checked) {
          document.getElementById('r-algtri-72').style.color = 'red'
          document.getElementById('r-algtri-72').innerHTML = 'Incorrect!'
          document.getElementById('r-algtri-74').style.color = 'blue'
          document.getElementById('r-algtri-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algtri-74').classList.add("correct")
          document.getElementById('b-algtri-71').classList.add("incorrect")
          document.getElementById('b-algtri-72').classList.add("incorrect")
          document.getElementById('b-algtri-73').classList.add("incorrect")
    
          document.getElementById('sa-algtri-7').disabled = true;
          document.getElementById('o-algtri-71').disabled = true;
          document.getElementById('o-algtri-72').disabled = true;
          document.getElementById('o-algtri-73').disabled = true;
          document.getElementById('o-algtri-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algtri7', 0)
        }
        if (document.getElementById('o-algtri-73').checked) {
          document.getElementById('r-algtri-73').style.color = 'red'
          document.getElementById('r-algtri-73').innerHTML = 'Incorrect!'
          document.getElementById('r-algtri-74').style.color = 'blue'
          document.getElementById('r-algtri-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algtri-74').classList.add("correct")
          document.getElementById('b-algtri-71').classList.add("incorrect")
          document.getElementById('b-algtri-72').classList.add("incorrect")
          document.getElementById('b-algtri-73').classList.add("incorrect")
    
          document.getElementById('sa-algtri-7').disabled = true;
          document.getElementById('o-algtri-71').disabled = true;
          document.getElementById('o-algtri-72').disabled = true;
          document.getElementById('o-algtri-73').disabled = true;
          document.getElementById('o-algtri-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algtri7', 0)
        }
        if (document.getElementById('o-algtri-74').checked) {
          document.getElementById('r-algtri-74').style.color = 'blue'
          document.getElementById('r-algtri-74').innerHTML = 'Correct!'
          
          document.getElementById('b-algtri-74').classList.add("correct")
          document.getElementById('b-algtri-71').classList.add("incorrect")
          document.getElementById('b-algtri-72').classList.add("incorrect")
          document.getElementById('b-algtri-73').classList.add("incorrect")
    
          document.getElementById('sa-algtri-7').disabled = true;
          document.getElementById('o-algtri-71').disabled = true;
          document.getElementById('o-algtri-72').disabled = true;
          document.getElementById('o-algtri-73').disabled = true;
          document.getElementById('o-algtri-74').disabled = true;
          showExplanation7()
          localStorage.setItem('algtri7', 1)
        }
      }
    }
    
    
    if (document.getElementById('sa-algtri-8') != null) {
      algtri8But.onclick = function() {
        if (document.getElementById('o-algtri-81').checked) {
          document.getElementById('r-algtri-81').style.color = 'red'
          document.getElementById('r-algtri-81').innerHTML = 'Incorrect!'
          document.getElementById('r-algtri-82').style.color = 'blue'
          document.getElementById('r-algtri-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algtri-82').classList.add("correct")
          document.getElementById('b-algtri-81').classList.add("incorrect")
          document.getElementById('b-algtri-83').classList.add("incorrect")
          document.getElementById('b-algtri-84').classList.add("incorrect")
    
          document.getElementById('sa-algtri-8').disabled = true;
          document.getElementById('o-algtri-81').disabled = true;
          document.getElementById('o-algtri-82').disabled = true;
          document.getElementById('o-algtri-83').disabled = true;
          document.getElementById('o-algtri-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algtri8', 0)
        }
        if (document.getElementById('o-algtri-82').checked) {
          document.getElementById('r-algtri-82').style.color = 'blue'
          document.getElementById('r-algtri-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algtri-82').classList.add("correct")
          document.getElementById('b-algtri-81').classList.add("incorrect")
          document.getElementById('b-algtri-83').classList.add("incorrect")
          document.getElementById('b-algtri-84').classList.add("incorrect")
    
          document.getElementById('sa-algtri-8').disabled = true;
          document.getElementById('o-algtri-81').disabled = true;
          document.getElementById('o-algtri-82').disabled = true;
          document.getElementById('o-algtri-83').disabled = true;
          document.getElementById('o-algtri-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algtri8', 1)
        }
        if (document.getElementById('o-algtri-83').checked) {
          document.getElementById('r-algtri-83').style.color = 'red'
          document.getElementById('r-algtri-83').innerHTML = 'Incorrect!'
          document.getElementById('r-algtri-82').style.color = 'blue'
          document.getElementById('r-algtri-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algtri-82').classList.add("correct")
          document.getElementById('b-algtri-81').classList.add("incorrect")
          document.getElementById('b-algtri-83').classList.add("incorrect")
          document.getElementById('b-algtri-84').classList.add("incorrect")
    
          document.getElementById('sa-algtri-8').disabled = true;
          document.getElementById('o-algtri-81').disabled = true;
          document.getElementById('o-algtri-82').disabled = true;
          document.getElementById('o-algtri-83').disabled = true;
          document.getElementById('o-algtri-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algtri8', 0)
        }
        if (document.getElementById('o-algtri-84').checked) {
          document.getElementById('r-algtri-84').style.color = 'red'
          document.getElementById('r-algtri-84').innerHTML = 'Incorrect!'
          document.getElementById('r-algtri-82').style.color = 'blue'
          document.getElementById('r-algtri-82').innerHTML = 'Correct!'
          
          document.getElementById('b-algtri-82').classList.add("correct")
          document.getElementById('b-algtri-81').classList.add("incorrect")
          document.getElementById('b-algtri-83').classList.add("incorrect")
          document.getElementById('b-algtri-84').classList.add("incorrect")
    
          document.getElementById('sa-algtri-8').disabled = true;
          document.getElementById('o-algtri-81').disabled = true;
          document.getElementById('o-algtri-82').disabled = true;
          document.getElementById('o-algtri-83').disabled = true;
          document.getElementById('o-algtri-84').disabled = true;
          showExplanation8()
          localStorage.setItem('algtri8', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-algtri-9') != null) {
      algtri9But.onclick = function() {
        if (document.getElementById('o-algtri-91').checked) {
          document.getElementById('r-algtri-91').style.color = 'red'
          document.getElementById('r-algtri-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algtri-94').style.color = 'blue'
          document.getElementById('r-algtri-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algtri-94').classList.add("correct")
          document.getElementById('b-algtri-91').classList.add("incorrect")
          document.getElementById('b-algtri-92').classList.add("incorrect")
          document.getElementById('b-algtri-93').classList.add("incorrect")
    
          document.getElementById('sa-algtri-9').disabled = true;
          document.getElementById('o-algtri-91').disabled = true;
          document.getElementById('o-algtri-92').disabled = true;
          document.getElementById('o-algtri-93').disabled = true;
          document.getElementById('o-algtri-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algtri9', 0)
        }
        if (document.getElementById('o-algtri-92').checked) {
          document.getElementById('r-algtri-91').style.color = 'red'
          document.getElementById('r-algtri-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algtri-94').style.color = 'blue'
          document.getElementById('r-algtri-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algtri-94').classList.add("correct")
          document.getElementById('b-algtri-91').classList.add("incorrect")
          document.getElementById('b-algtri-92').classList.add("incorrect")
          document.getElementById('b-algtri-93').classList.add("incorrect")
    
          document.getElementById('sa-algtri-9').disabled = true;
          document.getElementById('o-algtri-91').disabled = true;
          document.getElementById('o-algtri-92').disabled = true;
          document.getElementById('o-algtri-93').disabled = true;
          document.getElementById('o-algtri-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algtri9', 0)
        }
        if (document.getElementById('o-algtri-93').checked) {
          document.getElementById('r-algtri-91').style.color = 'red'
          document.getElementById('r-algtri-91').innerHTML = 'Incorrect!'
          document.getElementById('r-algtri-94').style.color = 'blue'
          document.getElementById('r-algtri-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algtri-94').classList.add("correct")
          document.getElementById('b-algtri-91').classList.add("incorrect")
          document.getElementById('b-algtri-92').classList.add("incorrect")
          document.getElementById('b-algtri-93').classList.add("incorrect")
    
          document.getElementById('sa-algtri-9').disabled = true;
          document.getElementById('o-algtri-91').disabled = true;
          document.getElementById('o-algtri-92').disabled = true;
          document.getElementById('o-algtri-93').disabled = true;
          document.getElementById('o-algtri-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algtri9', 0)
        }
        if (document.getElementById('o-algtri-94').checked) {
          document.getElementById('r-algtri-94').style.color = 'blue'
          document.getElementById('r-algtri-94').innerHTML = 'Correct!'
          
          document.getElementById('b-algtri-94').classList.add("correct")
          document.getElementById('b-algtri-91').classList.add("incorrect")
          document.getElementById('b-algtri-92').classList.add("incorrect")
          document.getElementById('b-algtri-93').classList.add("incorrect")
    
          document.getElementById('sa-algtri-9').disabled = true;
          document.getElementById('o-algtri-91').disabled = true;
          document.getElementById('o-algtri-92').disabled = true;
          document.getElementById('o-algtri-93').disabled = true;
          document.getElementById('o-algtri-94').disabled = true;
          showExplanation9()
          localStorage.setItem('algtri9', 1)
        }
      }
    }
    
    if (document.getElementById('sa-algtri-10') != null) {
      algtri10But.onclick = function() {
        if (document.getElementById('o-algtri-101').checked) {
          document.getElementById('r-algtri-101').style.color = 'red'
          document.getElementById('r-algtri-101').innerHTML = 'Incorrect!'
          document.getElementById('r-algtri-102').style.color = 'blue'
          document.getElementById('r-algtri-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algtri-102').classList.add("correct")
          document.getElementById('b-algtri-101').classList.add("incorrect")
          document.getElementById('b-algtri-103').classList.add("incorrect")
          document.getElementById('b-algtri-104').classList.add("incorrect")
    
          document.getElementById('sa-algtri-10').disabled = true;
          document.getElementById('o-algtri-101').disabled = true;
          document.getElementById('o-algtri-102').disabled = true;
          document.getElementById('o-algtri-103').disabled = true;
          document.getElementById('o-algtri-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algtri10', 0)
        }
        if (document.getElementById('o-algtri-102').checked) {
          document.getElementById('r-algtri-102').style.color = 'blue'
          document.getElementById('r-algtri-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algtri-102').classList.add("correct")
          document.getElementById('b-algtri-101').classList.add("incorrect")
          document.getElementById('b-algtri-103').classList.add("incorrect")
          document.getElementById('b-algtri-104').classList.add("incorrect")
    
          document.getElementById('sa-algtri-10').disabled = true;
          document.getElementById('o-algtri-101').disabled = true;
          document.getElementById('o-algtri-102').disabled = true;
          document.getElementById('o-algtri-103').disabled = true;
          document.getElementById('o-algtri-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algtri10', 1)
        }
        if (document.getElementById('o-algtri-103').checked) {
          document.getElementById('r-algtri-103').style.color = 'red'
          document.getElementById('r-algtri-103').innerHTML = 'Incorrect!'
          document.getElementById('r-algtri-102').style.color = 'blue'
          document.getElementById('r-algtri-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algtri-102').classList.add("correct")
          document.getElementById('b-algtri-101').classList.add("incorrect")
          document.getElementById('b-algtri-103').classList.add("incorrect")
          document.getElementById('b-algtri-104').classList.add("incorrect")
    
          document.getElementById('sa-algtri-10').disabled = true;
          document.getElementById('o-algtri-101').disabled = true;
          document.getElementById('o-algtri-102').disabled = true;
          document.getElementById('o-algtri-103').disabled = true;
          document.getElementById('o-algtri-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algtri10', 0)
        }
        if (document.getElementById('o-algtri-104').checked) {
          document.getElementById('r-algtri-104').style.color = 'red'
          document.getElementById('r-algtri-104').innerHTML = 'Incorrect!'
          document.getElementById('r-algtri-102').style.color = 'blue'
          document.getElementById('r-algtri-102').innerHTML = 'Correct!'
          
          document.getElementById('b-algtri-102').classList.add("correct")
          document.getElementById('b-algtri-101').classList.add("incorrect")
          document.getElementById('b-algtri-103').classList.add("incorrect")
          document.getElementById('b-algtri-104').classList.add("incorrect")
    
          document.getElementById('sa-algtri-10').disabled = true;
          document.getElementById('o-algtri-101').disabled = true;
          document.getElementById('o-algtri-102').disabled = true;
          document.getElementById('o-algtri-103').disabled = true;
          document.getElementById('o-algtri-104').disabled = true;
          showExplanation10()
          localStorage.setItem('algtri10', 0)
        }
      }
    }
    