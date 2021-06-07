
  let wripar1But = document.getElementById('sa-wripar-1');
  let wripar2But = document.getElementById('sa-wripar-2');
  let wripar3But = document.getElementById('sa-wripar-3');
  let wripar4But = document.getElementById('sa-wripar-4');
  let wripar5But = document.getElementById('sa-wripar-5');
  let wripar6But = document.getElementById('sa-wripar-6');
  let wripar7But = document.getElementById('sa-wripar-7');
  let wripar8But = document.getElementById('sa-wripar-8');
  let wripar9But = document.getElementById('sa-wripar-9');
  let wripar10But = document.getElementById('sa-wripar-10');


  showExplanation1 = function() {
    document.getElementById('e-wripar-1').style.display = 'block';
     }
  showExplanation2 = function() {
    document.getElementById('e-wripar-2').style.display = 'block';
     }
  showExplanation3 = function() {
    document.getElementById('e-wripar-3').style.display = 'block';
     }
  showExplanation4 = function() {
    document.getElementById('e-wripar-4').style.display = 'block';
     }
  showExplanation5 = function() {
    document.getElementById('e-wripar-5').style.display = 'block';
     }
  showExplanation6 = function() {
    document.getElementById('e-wripar-6').style.display = 'block';
     }
  showExplanation7 = function() {
    document.getElementById('e-wripar-7').style.display = 'block';
     }
  showExplanation8 = function() {
    document.getElementById('e-wripar-8').style.display = 'block';
     }
  showExplanation9 = function() {
    document.getElementById('e-wripar-9').style.display = 'block';
     }
  showExplanation10 = function() {
    document.getElementById('e-wripar-10').style.display = 'block';
     } 



     if (document.getElementById('sa-wripar-1') != null) {
      wripar1But.onclick = function () {
        if (document.getElementById('o-wripar-11').checked) {
          document.getElementById('r-wripar-11').style.color = 'blue'
          document.getElementById('r-wripar-11').innerHTML = 'Correct!'
    
          document.getElementById('b-wripar-11').classList.add("correct")
          document.getElementById('b-wripar-12').classList.add("incorrect")
          document.getElementById('b-wripar-13').classList.add("incorrect")
          document.getElementById('b-wripar-14').classList.add("incorrect")
    
          document.getElementById('sa-wripar-1').disabled = true;
          document.getElementById('o-wripar-11').disabled = true;
          document.getElementById('o-wripar-12').disabled = true;
          document.getElementById('o-wripar-13').disabled = true;
          document.getElementById('o-wripar-14').disabled = true;
          showExplanation1()
          localStorage.setItem('wripar1', 1)
        }
    
        if (document.getElementById('o-wripar-12').checked) {
         
          document.getElementById('r-wripar-12').style.color = 'red'
          document.getElementById('r-wripar-12').innerHTML = 'Incorrect!'
          document.getElementById('r-wripar-11').style.color = 'blue'
          document.getElementById('r-wripar-11').innerHTML = 'Correct!'
    
          document.getElementById('b-wripar-11').classList.add("correct")
          document.getElementById('b-wripar-12').classList.add("incorrect")
          document.getElementById('b-wripar-13').classList.add("incorrect")
          document.getElementById('b-wripar-14').classList.add("incorrect")
    
          document.getElementById('sa-wripar-1').disabled = true;
          document.getElementById('o-wripar-11').disabled = true;
          document.getElementById('o-wripar-12').disabled = true;
          document.getElementById('o-wripar-13').disabled = true;
          document.getElementById('o-wripar-14').disabled = true;
          showExplanation1()
          localStorage.setItem('wripar1', 0)
        }
        if (document.getElementById('o-wripar-13').checked) {
          document.getElementById('r-wripar-13').style.color = 'red'
          document.getElementById('r-wripar-13').innerHTML = 'Incorrect!'
          document.getElementById('r-wripar-11').style.color = 'blue'
          document.getElementById('r-wripar-11').innerHTML = 'Correct!'
          
          document.getElementById('b-wripar-11').classList.add("correct")
          document.getElementById('b-wripar-12').classList.add("incorrect")
          document.getElementById('b-wripar-13').classList.add("incorrect")
          document.getElementById('b-wripar-14').classList.add("incorrect")
    
          document.getElementById('sa-wripar-1').disabled = true;
          document.getElementById('o-wripar-11').disabled = true;
          document.getElementById('o-wripar-12').disabled = true;
          document.getElementById('o-wripar-13').disabled = true;
          document.getElementById('o-wripar-14').disabled = true;
          showExplanation1()
          localStorage.setItem('wripar1', 0)
        }
        if (document.getElementById('o-wripar-14').checked) {
          document.getElementById('r-wripar-14').style.color = 'red'
          document.getElementById('r-wripar-14').innerHTML = 'Incorrect!'
          document.getElementById('r-wripar-11').style.color = 'blue'
          document.getElementById('r-wripar-11').innerHTML = 'Correct!'
          
          document.getElementById('b-wripar-11').classList.add("correct")
          document.getElementById('b-wripar-12').classList.add("incorrect")
          document.getElementById('b-wripar-13').classList.add("incorrect")
          document.getElementById('b-wripar-14').classList.add("incorrect")
    
          document.getElementById('sa-wripar-1').disabled = true;
          document.getElementById('o-wripar-11').disabled = true;
          document.getElementById('o-wripar-12').disabled = true;
          document.getElementById('o-wripar-13').disabled = true;
          document.getElementById('o-wripar-14').disabled = true;
          showExplanation1()
          localStorage.setItem('wripar1', 0)
        }
        
      }
    }
    
    
    if (document.getElementById('sa-wripar-2') != null) {
      wripar2But.onclick = function() {
        if (document.getElementById('o-wripar-21').checked) {
          document.getElementById('r-wripar-21').style.color = 'red'
          document.getElementById('r-wripar-21').innerHTML = 'Incorrect!'
          document.getElementById('r-wripar-23').style.color = 'blue'
          document.getElementById('r-wripar-23').innerHTML = 'Correct!'
          
          document.getElementById('b-wripar-23').classList.add("correct")
          document.getElementById('b-wripar-21').classList.add("incorrect")
          document.getElementById('b-wripar-22').classList.add("incorrect")
          document.getElementById('b-wripar-24').classList.add("incorrect")
    
          document.getElementById('sa-wripar-2').disabled = true;
          document.getElementById('o-wripar-21').disabled = true;
          document.getElementById('o-wripar-22').disabled = true;
          document.getElementById('o-wripar-23').disabled = true;
          document.getElementById('o-wripar-24').disabled = true;
          showExplanation2()
          localStorage.setItem('wripar2', 0)
        }
        if (document.getElementById('o-wripar-22').checked) {
          document.getElementById('r-wripar-22').style.color = 'red'
          document.getElementById('r-wripar-22').innerHTML = 'Incorrect!'
          document.getElementById('r-wripar-23').style.color = 'blue'
          document.getElementById('r-wripar-23').innerHTML = 'Correct!'
          
          document.getElementById('b-wripar-23').classList.add("correct")
          document.getElementById('b-wripar-21').classList.add("incorrect")
          document.getElementById('b-wripar-22').classList.add("incorrect")
          document.getElementById('b-wripar-24').classList.add("incorrect")
    
          document.getElementById('sa-wripar-2').disabled = true;
          document.getElementById('o-wripar-21').disabled = true;
          document.getElementById('o-wripar-22').disabled = true;
          document.getElementById('o-wripar-23').disabled = true;
          document.getElementById('o-wripar-24').disabled = true;
          showExplanation2()
          localStorage.setItem('wripar2', 0)
        }
        if (document.getElementById('o-wripar-23').checked) {
          document.getElementById('r-wripar-23').style.color = 'blue'
          document.getElementById('r-wripar-23').innerHTML = 'Correct!'
          
          document.getElementById('b-wripar-23').classList.add("correct")
          document.getElementById('b-wripar-21').classList.add("incorrect")
          document.getElementById('b-wripar-22').classList.add("incorrect")
          document.getElementById('b-wripar-24').classList.add("incorrect")
    
          document.getElementById('sa-wripar-2').disabled = true;
          document.getElementById('o-wripar-21').disabled = true;
          document.getElementById('o-wripar-22').disabled = true;
          document.getElementById('o-wripar-23').disabled = true;
          document.getElementById('o-wripar-24').disabled = true;
          showExplanation2()
          localStorage.setItem('wripar2', 1)
        }
        if (document.getElementById('o-wripar-24').checked) {
          document.getElementById('r-wripar-24').style.color = 'red'
          document.getElementById('r-wripar-24').innerHTML = 'Incorrect!'
          document.getElementById('r-wripar-23').style.color = 'blue'
          document.getElementById('r-wripar-23').innerHTML = 'Correct!'
          
          document.getElementById('b-wripar-23').classList.add("correct")
          document.getElementById('b-wripar-21').classList.add("incorrect")
          document.getElementById('b-wripar-22').classList.add("incorrect")
          document.getElementById('b-wripar-24').classList.add("incorrect")
    
          document.getElementById('sa-wripar-2').disabled = true;
          document.getElementById('o-wripar-21').disabled = true;
          document.getElementById('o-wripar-22').disabled = true;
          document.getElementById('o-wripar-23').disabled = true;
          document.getElementById('o-wripar-24').disabled = true;
          showExplanation2()
          localStorage.setItem('wripar2', 0)
        }
      }
    }
    
    if (document.getElementById('sa-wripar-3') != null) {
      wripar3But.onclick = function() {
        if (document.getElementById('o-wripar-31').checked) {
          document.getElementById('r-wripar-31').style.color = 'red'
          document.getElementById('r-wripar-31').innerHTML = 'Incorrect!'
          document.getElementById('r-wripar-32').style.color = 'blue'
          document.getElementById('r-wripar-32').innerHTML = 'Correct!'
          
          document.getElementById('b-wripar-32').classList.add("correct")
          document.getElementById('b-wripar-31').classList.add("incorrect")
          document.getElementById('b-wripar-33').classList.add("incorrect")
          document.getElementById('b-wripar-34').classList.add("incorrect")
    
          document.getElementById('sa-wripar-3').disabled = true;
          document.getElementById('o-wripar-31').disabled = true;
          document.getElementById('o-wripar-32').disabled = true;
          document.getElementById('o-wripar-33').disabled = true;
          document.getElementById('o-wripar-34').disabled = true;
          showExplanation3()
          localStorage.setItem('wripar3', 0)
        }
        if (document.getElementById('o-wripar-32').checked) {
    
          document.getElementById('r-wripar-32').style.color = 'blue'
          document.getElementById('r-wripar-32').innerHTML = 'Correct!'
          
          document.getElementById('b-wripar-32').classList.add("correct")
          document.getElementById('b-wripar-31').classList.add("incorrect")
          document.getElementById('b-wripar-33').classList.add("incorrect")
          document.getElementById('b-wripar-34').classList.add("incorrect")
    
          document.getElementById('sa-wripar-3').disabled = true;
          document.getElementById('o-wripar-31').disabled = true;
          document.getElementById('o-wripar-32').disabled = true;
          document.getElementById('o-wripar-33').disabled = true;
          document.getElementById('o-wripar-34').disabled = true;
          showExplanation3()
          localStorage.setItem('wripar3', 1)
        }
        if (document.getElementById('o-wripar-33').checked) {
          document.getElementById('r-wripar-33').style.color = 'red'
          document.getElementById('r-wripar-33').innerHTML = 'Incorrect!'
          document.getElementById('r-wripar-32').style.color = 'blue'
          document.getElementById('r-wripar-32').innerHTML = 'Correct!'
          
          document.getElementById('b-wripar-32').classList.add("correct")
          document.getElementById('b-wripar-31').classList.add("incorrect")
          document.getElementById('b-wripar-33').classList.add("incorrect")
          document.getElementById('b-wripar-34').classList.add("incorrect")
    
          document.getElementById('sa-wripar-3').disabled = true;
          document.getElementById('o-wripar-31').disabled = true;
          document.getElementById('o-wripar-32').disabled = true;
          document.getElementById('o-wripar-33').disabled = true;
          document.getElementById('o-wripar-34').disabled = true;
          showExplanation3()
          localStorage.setItem('wripar3', 0)
        }
        if (document.getElementById('o-wripar-34').checked) {
          document.getElementById('r-wripar-34').style.color = 'red'
          document.getElementById('r-wripar-34').innerHTML = 'Incorrect!'
          document.getElementById('r-wripar-32').style.color = 'blue'
          document.getElementById('r-wripar-32').innerHTML = 'Correct!'
          
          document.getElementById('b-wripar-32').classList.add("correct")
          document.getElementById('b-wripar-31').classList.add("incorrect")
          document.getElementById('b-wripar-33').classList.add("incorrect")
          document.getElementById('b-wripar-34').classList.add("incorrect")
    
          document.getElementById('sa-wripar-3').disabled = true;
          document.getElementById('o-wripar-31').disabled = true;
          document.getElementById('o-wripar-32').disabled = true;
          document.getElementById('o-wripar-33').disabled = true;
          document.getElementById('o-wripar-34').disabled = true;
          showExplanation3()
          localStorage.setItem('wripar3', 0)
        }
      }
    }
    
    if (document.getElementById('sa-wripar-4') != null) {
      wripar4But.onclick = function() {
        if (document.getElementById('o-wripar-41').checked) {
          document.getElementById('r-wripar-41').style.color = 'red'
          document.getElementById('r-wripar-41').innerHTML = 'Incorrect!'
          document.getElementById('r-wripar-44').style.color = 'blue'
          document.getElementById('r-wripar-44').innerHTML = 'Correct!'
          
          document.getElementById('b-wripar-44').classList.add("correct")
          document.getElementById('b-wripar-41').classList.add("incorrect")
          document.getElementById('b-wripar-42').classList.add("incorrect")
          document.getElementById('b-wripar-43').classList.add("incorrect")
    
          document.getElementById('sa-wripar-4').disabled = true;
          document.getElementById('o-wripar-41').disabled = true;
          document.getElementById('o-wripar-42').disabled = true;
          document.getElementById('o-wripar-43').disabled = true;
          document.getElementById('o-wripar-44').disabled = true;
          showExplanation4()
          localStorage.setItem('wripar4', 0)
        }
        if (document.getElementById('o-wripar-42').checked) {
          document.getElementById('r-wripar-42').style.color = 'red'
          document.getElementById('r-wripar-42').innerHTML = 'Incorrect!'
          document.getElementById('r-wripar-44').style.color = 'blue'
          document.getElementById('r-wripar-44').innerHTML = 'Correct!'
          
          document.getElementById('b-wripar-44').classList.add("correct")
          document.getElementById('b-wripar-41').classList.add("incorrect")
          document.getElementById('b-wripar-42').classList.add("incorrect")
          document.getElementById('b-wripar-43').classList.add("incorrect")
    
          document.getElementById('sa-wripar-4').disabled = true;
          document.getElementById('o-wripar-41').disabled = true;
          document.getElementById('o-wripar-42').disabled = true;
          document.getElementById('o-wripar-43').disabled = true;
          document.getElementById('o-wripar-44').disabled = true;
          showExplanation4()
          localStorage.setItem('wripar4', 0)
        }
        if (document.getElementById('o-wripar-43').checked) {
          document.getElementById('r-wripar-43').style.color = 'red'
          document.getElementById('r-wripar-43').innerHTML = 'Incorrect!'
          document.getElementById('r-wripar-44').style.color = 'blue'
          document.getElementById('r-wripar-44').innerHTML = 'Correct!'
          
          document.getElementById('b-wripar-44').classList.add("correct")
          document.getElementById('b-wripar-41').classList.add("incorrect")
          document.getElementById('b-wripar-42').classList.add("incorrect")
          document.getElementById('b-wripar-43').classList.add("incorrect")
    
          document.getElementById('sa-wripar-4').disabled = true;
          document.getElementById('o-wripar-41').disabled = true;
          document.getElementById('o-wripar-42').disabled = true;
          document.getElementById('o-wripar-43').disabled = true;
          document.getElementById('o-wripar-44').disabled = true;
          showExplanation4()
          localStorage.setItem('wripar4', 0)
        }
        if (document.getElementById('o-wripar-44').checked) {
          document.getElementById('r-wripar-44').style.color = 'blue'
          document.getElementById('r-wripar-44').innerHTML = 'Correct!'
          
          document.getElementById('b-wripar-44').classList.add("correct")
          document.getElementById('b-wripar-41').classList.add("incorrect")
          document.getElementById('b-wripar-42').classList.add("incorrect")
          document.getElementById('b-wripar-43').classList.add("incorrect")
    
          document.getElementById('sa-wripar-4').disabled = true;
          document.getElementById('o-wripar-41').disabled = true;
          document.getElementById('o-wripar-42').disabled = true;
          document.getElementById('o-wripar-43').disabled = true;
          document.getElementById('o-wripar-44').disabled = true;
          showExplanation4()
          localStorage.setItem('wripar4', 1)
        }
      }
    }
    
    if (document.getElementById('sa-wripar-5') != null) {
      wripar5But.onclick = function() {
        if (document.getElementById('o-wripar-51').checked) {
          document.getElementById('r-wripar-51').style.color = 'red'
          document.getElementById('r-wripar-51').innerHTML = 'Incorrect!'
          document.getElementById('r-wripar-53').style.color = 'blue'
          document.getElementById('r-wripar-53').innerHTML = 'Correct!'
          
          document.getElementById('b-wripar-53').classList.add("correct")
          document.getElementById('b-wripar-51').classList.add("incorrect")
          document.getElementById('b-wripar-52').classList.add("incorrect")
          document.getElementById('b-wripar-54').classList.add("incorrect")
    
          document.getElementById('sa-wripar-5').disabled = true;
          document.getElementById('o-wripar-51').disabled = true;
          document.getElementById('o-wripar-52').disabled = true;
          document.getElementById('o-wripar-53').disabled = true;
          document.getElementById('o-wripar-54').disabled = true;
          showExplanation5()
          localStorage.setItem('wripar5', 0)
        }
        if (document.getElementById('o-wripar-52').checked) {
          document.getElementById('r-wripar-52').style.color = 'red'
          document.getElementById('r-wripar-52').innerHTML = 'Incorrect!'
          document.getElementById('r-wripar-53').style.color = 'blue'
          document.getElementById('r-wripar-53').innerHTML = 'Correct!'
          
          document.getElementById('b-wripar-53').classList.add("correct")
          document.getElementById('b-wripar-51').classList.add("incorrect")
          document.getElementById('b-wripar-52').classList.add("incorrect")
          document.getElementById('b-wripar-54').classList.add("incorrect")
    
          document.getElementById('sa-wripar-5').disabled = true;
          document.getElementById('o-wripar-51').disabled = true;
          document.getElementById('o-wripar-52').disabled = true;
          document.getElementById('o-wripar-53').disabled = true;
          document.getElementById('o-wripar-54').disabled = true;
          showExplanation5()
          localStorage.setItem('wripar5', 0)
        }
        if (document.getElementById('o-wripar-53').checked) {
          document.getElementById('r-wripar-53').style.color = 'blue'
          document.getElementById('r-wripar-53').innerHTML = 'Correct!'
          
          document.getElementById('b-wripar-53').classList.add("correct")
          document.getElementById('b-wripar-51').classList.add("incorrect")
          document.getElementById('b-wripar-52').classList.add("incorrect")
          document.getElementById('b-wripar-54').classList.add("incorrect")
    
          document.getElementById('sa-wripar-5').disabled = true;
          document.getElementById('o-wripar-51').disabled = true;
          document.getElementById('o-wripar-52').disabled = true;
          document.getElementById('o-wripar-53').disabled = true;
          document.getElementById('o-wripar-54').disabled = true;
          showExplanation5()
          localStorage.setItem('wripar5', 1)
        }
        if (document.getElementById('o-wripar-54').checked) {
          document.getElementById('r-wripar-54').style.color = 'red'
          document.getElementById('r-wripar-54').innerHTML = 'Incorrect!'
          document.getElementById('r-wripar-53').style.color = 'blue'
          document.getElementById('r-wripar-53').innerHTML = 'Correct!'
          
          document.getElementById('b-wripar-53').classList.add("correct")
          document.getElementById('b-wripar-51').classList.add("incorrect")
          document.getElementById('b-wripar-52').classList.add("incorrect")
          document.getElementById('b-wripar-54').classList.add("incorrect")
    
          document.getElementById('sa-wripar-5').disabled = true;
          document.getElementById('o-wripar-51').disabled = true;
          document.getElementById('o-wripar-52').disabled = true;
          document.getElementById('o-wripar-53').disabled = true;
          document.getElementById('o-wripar-54').disabled = true;
          showExplanation5()
          localStorage.setItem('wripar5', 0)
        }
      }
    }
        
         
      if (document.getElementById('sa-wripar-6') != null) {
      wripar6But.onclick = function() {
        if (document.getElementById('o-wripar-61').checked) {
          document.getElementById('r-wripar-61').style.color = 'red'
          document.getElementById('r-wripar-61').innerHTML = 'Incorrect!'
          document.getElementById('r-wripar-64').style.color = 'blue'
          document.getElementById('r-wripar-64').innerHTML = 'Correct!'
          
          document.getElementById('b-wripar-64').classList.add("correct")
          document.getElementById('b-wripar-61').classList.add("incorrect")
          document.getElementById('b-wripar-62').classList.add("incorrect")
          document.getElementById('b-wripar-63').classList.add("incorrect")
    
          document.getElementById('sa-wripar-6').disabled = true;
          document.getElementById('o-wripar-61').disabled = true;
          document.getElementById('o-wripar-62').disabled = true;
          document.getElementById('o-wripar-63').disabled = true;
          document.getElementById('o-wripar-64').disabled = true;
          showExplanation6()
          localStorage.setItem('wripar6', 0)
        }
        if (document.getElementById('o-wripar-62').checked) {
          document.getElementById('r-wripar-62').style.color = 'red'
          document.getElementById('r-wripar-62').innerHTML = 'Incorrect!'
          document.getElementById('r-wripar-64').style.color = 'blue'
          document.getElementById('r-wripar-64').innerHTML = 'Correct!'
          
          document.getElementById('b-wripar-64').classList.add("correct")
          document.getElementById('b-wripar-61').classList.add("incorrect")
          document.getElementById('b-wripar-62').classList.add("incorrect")
          document.getElementById('b-wripar-63').classList.add("incorrect")
    
          document.getElementById('sa-wripar-6').disabled = true;
          document.getElementById('o-wripar-61').disabled = true;
          document.getElementById('o-wripar-62').disabled = true;
          document.getElementById('o-wripar-63').disabled = true;
          document.getElementById('o-wripar-64').disabled = true;
          showExplanation6()
          localStorage.setItem('wripar6', 0)
        }
        if (document.getElementById('o-wripar-63').checked) {
          document.getElementById('r-wripar-63').style.color = 'red'
          document.getElementById('r-wripar-63').innerHTML = 'Incorrect!'
          document.getElementById('r-wripar-64').style.color = 'blue'
          document.getElementById('r-wripar-64').innerHTML = 'Correct!'
          
          document.getElementById('b-wripar-64').classList.add("correct")
          document.getElementById('b-wripar-61').classList.add("incorrect")
          document.getElementById('b-wripar-62').classList.add("incorrect")
          document.getElementById('b-wripar-63').classList.add("incorrect")
    
          document.getElementById('sa-wripar-6').disabled = true;
          document.getElementById('o-wripar-61').disabled = true;
          document.getElementById('o-wripar-62').disabled = true;
          document.getElementById('o-wripar-63').disabled = true;
          document.getElementById('o-wripar-64').disabled = true;
          showExplanation6()
          localStorage.setItem('wripar6', 0)
        }
        if (document.getElementById('o-wripar-64').checked) {
          document.getElementById('r-wripar-64').style.color = 'blue'
          document.getElementById('r-wripar-64').innerHTML = 'Correct!'
          
          document.getElementById('b-wripar-64').classList.add("correct")
          document.getElementById('b-wripar-61').classList.add("incorrect")
          document.getElementById('b-wripar-62').classList.add("incorrect")
          document.getElementById('b-wripar-63').classList.add("incorrect")
    
          document.getElementById('sa-wripar-6').disabled = true;
          document.getElementById('o-wripar-61').disabled = true;
          document.getElementById('o-wripar-62').disabled = true;
          document.getElementById('o-wripar-63').disabled = true;
          document.getElementById('o-wripar-64').disabled = true;
          showExplanation6()
          localStorage.setItem('wripar6', 1)
        }
      }
    }
    
    if (document.getElementById('sa-wripar-7') != null) {
      wripar7But.onclick = function() {
        if (document.getElementById('o-wripar-71').checked) {
          document.getElementById('r-wripar-71').style.color = 'red'
          document.getElementById('r-wripar-71').innerHTML = 'Incorrect!'
          document.getElementById('r-wripar-74').style.color = 'blue'
          document.getElementById('r-wripar-74').innerHTML = 'Correct!'
          
          document.getElementById('b-wripar-74').classList.add("correct")
          document.getElementById('b-wripar-71').classList.add("incorrect")
          document.getElementById('b-wripar-72').classList.add("incorrect")
          document.getElementById('b-wripar-73').classList.add("incorrect")
    
          document.getElementById('sa-wripar-7').disabled = true;
          document.getElementById('o-wripar-71').disabled = true;
          document.getElementById('o-wripar-72').disabled = true;
          document.getElementById('o-wripar-73').disabled = true;
          document.getElementById('o-wripar-74').disabled = true;
          showExplanation7()
          localStorage.setItem('wripar7', 0)
        }
        if (document.getElementById('o-wripar-72').checked) {
          document.getElementById('r-wripar-72').style.color = 'red'
          document.getElementById('r-wripar-72').innerHTML = 'Incorrect!'
          document.getElementById('r-wripar-74').style.color = 'blue'
          document.getElementById('r-wripar-74').innerHTML = 'Correct!'
          
          document.getElementById('b-wripar-74').classList.add("correct")
          document.getElementById('b-wripar-71').classList.add("incorrect")
          document.getElementById('b-wripar-72').classList.add("incorrect")
          document.getElementById('b-wripar-73').classList.add("incorrect")
    
          document.getElementById('sa-wripar-7').disabled = true;
          document.getElementById('o-wripar-71').disabled = true;
          document.getElementById('o-wripar-72').disabled = true;
          document.getElementById('o-wripar-73').disabled = true;
          document.getElementById('o-wripar-74').disabled = true;
          showExplanation7()
          localStorage.setItem('wripar7', 0)
        }
        if (document.getElementById('o-wripar-73').checked) {
          document.getElementById('r-wripar-73').style.color = 'red'
          document.getElementById('r-wripar-73').innerHTML = 'Incorrect!'
          document.getElementById('r-wripar-74').style.color = 'blue'
          document.getElementById('r-wripar-74').innerHTML = 'Correct!'
          
          document.getElementById('b-wripar-74').classList.add("correct")
          document.getElementById('b-wripar-71').classList.add("incorrect")
          document.getElementById('b-wripar-72').classList.add("incorrect")
          document.getElementById('b-wripar-73').classList.add("incorrect")
    
          document.getElementById('sa-wripar-7').disabled = true;
          document.getElementById('o-wripar-71').disabled = true;
          document.getElementById('o-wripar-72').disabled = true;
          document.getElementById('o-wripar-73').disabled = true;
          document.getElementById('o-wripar-74').disabled = true;
          showExplanation7()
          localStorage.setItem('wripar7', 0)
        }
        if (document.getElementById('o-wripar-74').checked) {
          document.getElementById('r-wripar-74').style.color = 'blue'
          document.getElementById('r-wripar-74').innerHTML = 'Correct!'
          
          document.getElementById('b-wripar-74').classList.add("correct")
          document.getElementById('b-wripar-71').classList.add("incorrect")
          document.getElementById('b-wripar-72').classList.add("incorrect")
          document.getElementById('b-wripar-73').classList.add("incorrect")
    
          document.getElementById('sa-wripar-7').disabled = true;
          document.getElementById('o-wripar-71').disabled = true;
          document.getElementById('o-wripar-72').disabled = true;
          document.getElementById('o-wripar-73').disabled = true;
          document.getElementById('o-wripar-74').disabled = true;
          showExplanation7()
          localStorage.setItem('wripar7', 1)
        }
      }
    }
    
    
    if (document.getElementById('sa-wripar-8') != null) {
      wripar8But.onclick = function() {
        if (document.getElementById('o-wripar-81').checked) {
          document.getElementById('r-wripar-81').style.color = 'red'
          document.getElementById('r-wripar-81').innerHTML = 'Incorrect!'
          document.getElementById('r-wripar-82').style.color = 'blue'
          document.getElementById('r-wripar-82').innerHTML = 'Correct!'
          
          document.getElementById('b-wripar-82').classList.add("correct")
          document.getElementById('b-wripar-81').classList.add("incorrect")
          document.getElementById('b-wripar-83').classList.add("incorrect")
          document.getElementById('b-wripar-84').classList.add("incorrect")
    
          document.getElementById('sa-wripar-8').disabled = true;
          document.getElementById('o-wripar-81').disabled = true;
          document.getElementById('o-wripar-82').disabled = true;
          document.getElementById('o-wripar-83').disabled = true;
          document.getElementById('o-wripar-84').disabled = true;
          showExplanation8()
          localStorage.setItem('wripar8', 0)
        }
        if (document.getElementById('o-wripar-82').checked) {
          document.getElementById('r-wripar-82').style.color = 'blue'
          document.getElementById('r-wripar-82').innerHTML = 'Correct!'
          
          document.getElementById('b-wripar-82').classList.add("correct")
          document.getElementById('b-wripar-81').classList.add("incorrect")
          document.getElementById('b-wripar-83').classList.add("incorrect")
          document.getElementById('b-wripar-84').classList.add("incorrect")
    
          document.getElementById('sa-wripar-8').disabled = true;
          document.getElementById('o-wripar-81').disabled = true;
          document.getElementById('o-wripar-82').disabled = true;
          document.getElementById('o-wripar-83').disabled = true;
          document.getElementById('o-wripar-84').disabled = true;
          showExplanation8()
          localStorage.setItem('wripar8', 1)
        }
        if (document.getElementById('o-wripar-83').checked) {
          document.getElementById('r-wripar-83').style.color = 'red'
          document.getElementById('r-wripar-83').innerHTML = 'Incorrect!'
          document.getElementById('r-wripar-82').style.color = 'blue'
          document.getElementById('r-wripar-82').innerHTML = 'Correct!'
          
          document.getElementById('b-wripar-82').classList.add("correct")
          document.getElementById('b-wripar-81').classList.add("incorrect")
          document.getElementById('b-wripar-83').classList.add("incorrect")
          document.getElementById('b-wripar-84').classList.add("incorrect")
    
          document.getElementById('sa-wripar-8').disabled = true;
          document.getElementById('o-wripar-81').disabled = true;
          document.getElementById('o-wripar-82').disabled = true;
          document.getElementById('o-wripar-83').disabled = true;
          document.getElementById('o-wripar-84').disabled = true;
          showExplanation8()
          localStorage.setItem('wripar8', 0)
        }
        if (document.getElementById('o-wripar-84').checked) {
          document.getElementById('r-wripar-84').style.color = 'red'
          document.getElementById('r-wripar-84').innerHTML = 'Incorrect!'
          document.getElementById('r-wripar-82').style.color = 'blue'
          document.getElementById('r-wripar-82').innerHTML = 'Correct!'
          
          document.getElementById('b-wripar-82').classList.add("correct")
          document.getElementById('b-wripar-81').classList.add("incorrect")
          document.getElementById('b-wripar-83').classList.add("incorrect")
          document.getElementById('b-wripar-84').classList.add("incorrect")
    
          document.getElementById('sa-wripar-8').disabled = true;
          document.getElementById('o-wripar-81').disabled = true;
          document.getElementById('o-wripar-82').disabled = true;
          document.getElementById('o-wripar-83').disabled = true;
          document.getElementById('o-wripar-84').disabled = true;
          showExplanation8()
          localStorage.setItem('wripar8', 0)
        }
      }
    }
    
    
    if (document.getElementById('sa-wripar-9') != null) {
      wripar9But.onclick = function() {
        if (document.getElementById('o-wripar-91').checked) {
          document.getElementById('r-wripar-91').style.color = 'red'
          document.getElementById('r-wripar-91').innerHTML = 'Incorrect!'
          document.getElementById('r-wripar-94').style.color = 'blue'
          document.getElementById('r-wripar-94').innerHTML = 'Correct!'
          
          document.getElementById('b-wripar-94').classList.add("correct")
          document.getElementById('b-wripar-91').classList.add("incorrect")
          document.getElementById('b-wripar-92').classList.add("incorrect")
          document.getElementById('b-wripar-93').classList.add("incorrect")
    
          document.getElementById('sa-wripar-9').disabled = true;
          document.getElementById('o-wripar-91').disabled = true;
          document.getElementById('o-wripar-92').disabled = true;
          document.getElementById('o-wripar-93').disabled = true;
          document.getElementById('o-wripar-94').disabled = true;
          showExplanation9()
          localStorage.setItem('wripar9', 0)
        }
        if (document.getElementById('o-wripar-92').checked) {
          document.getElementById('r-wripar-91').style.color = 'red'
          document.getElementById('r-wripar-91').innerHTML = 'Incorrect!'
          document.getElementById('r-wripar-94').style.color = 'blue'
          document.getElementById('r-wripar-94').innerHTML = 'Correct!'
          
          document.getElementById('b-wripar-94').classList.add("correct")
          document.getElementById('b-wripar-91').classList.add("incorrect")
          document.getElementById('b-wripar-92').classList.add("incorrect")
          document.getElementById('b-wripar-93').classList.add("incorrect")
    
          document.getElementById('sa-wripar-9').disabled = true;
          document.getElementById('o-wripar-91').disabled = true;
          document.getElementById('o-wripar-92').disabled = true;
          document.getElementById('o-wripar-93').disabled = true;
          document.getElementById('o-wripar-94').disabled = true;
          showExplanation9()
          localStorage.setItem('wripar9', 0)
        }
        if (document.getElementById('o-wripar-93').checked) {
          document.getElementById('r-wripar-91').style.color = 'red'
          document.getElementById('r-wripar-91').innerHTML = 'Incorrect!'
          document.getElementById('r-wripar-94').style.color = 'blue'
          document.getElementById('r-wripar-94').innerHTML = 'Correct!'
          
          document.getElementById('b-wripar-94').classList.add("correct")
          document.getElementById('b-wripar-91').classList.add("incorrect")
          document.getElementById('b-wripar-92').classList.add("incorrect")
          document.getElementById('b-wripar-93').classList.add("incorrect")
    
          document.getElementById('sa-wripar-9').disabled = true;
          document.getElementById('o-wripar-91').disabled = true;
          document.getElementById('o-wripar-92').disabled = true;
          document.getElementById('o-wripar-93').disabled = true;
          document.getElementById('o-wripar-94').disabled = true;
          showExplanation9()
          localStorage.setItem('wripar9', 0)
        }
        if (document.getElementById('o-wripar-94').checked) {
          document.getElementById('r-wripar-94').style.color = 'blue'
          document.getElementById('r-wripar-94').innerHTML = 'Correct!'
          
          document.getElementById('b-wripar-94').classList.add("correct")
          document.getElementById('b-wripar-91').classList.add("incorrect")
          document.getElementById('b-wripar-92').classList.add("incorrect")
          document.getElementById('b-wripar-93').classList.add("incorrect")
    
          document.getElementById('sa-wripar-9').disabled = true;
          document.getElementById('o-wripar-91').disabled = true;
          document.getElementById('o-wripar-92').disabled = true;
          document.getElementById('o-wripar-93').disabled = true;
          document.getElementById('o-wripar-94').disabled = true;
          showExplanation9()
          localStorage.setItem('wripar9', 1)
        }
      }
    }
    
    if (document.getElementById('sa-wripar-10') != null) {
      wripar10But.onclick = function() {
        if (document.getElementById('o-wripar-101').checked) {
          document.getElementById('r-wripar-101').style.color = 'red'
          document.getElementById('r-wripar-101').innerHTML = 'Incorrect!'
          document.getElementById('r-wripar-102').style.color = 'blue'
          document.getElementById('r-wripar-102').innerHTML = 'Correct!'
          
          document.getElementById('b-wripar-102').classList.add("correct")
          document.getElementById('b-wripar-101').classList.add("incorrect")
          document.getElementById('b-wripar-103').classList.add("incorrect")
          document.getElementById('b-wripar-104').classList.add("incorrect")
    
          document.getElementById('sa-wripar-10').disabled = true;
          document.getElementById('o-wripar-101').disabled = true;
          document.getElementById('o-wripar-102').disabled = true;
          document.getElementById('o-wripar-103').disabled = true;
          document.getElementById('o-wripar-104').disabled = true;
          showExplanation10()
          localStorage.setItem('wripar10', 0)
        }
        if (document.getElementById('o-wripar-102').checked) {
          document.getElementById('r-wripar-102').style.color = 'blue'
          document.getElementById('r-wripar-102').innerHTML = 'Correct!'
          
          document.getElementById('b-wripar-102').classList.add("correct")
          document.getElementById('b-wripar-101').classList.add("incorrect")
          document.getElementById('b-wripar-103').classList.add("incorrect")
          document.getElementById('b-wripar-104').classList.add("incorrect")
    
          document.getElementById('sa-wripar-10').disabled = true;
          document.getElementById('o-wripar-101').disabled = true;
          document.getElementById('o-wripar-102').disabled = true;
          document.getElementById('o-wripar-103').disabled = true;
          document.getElementById('o-wripar-104').disabled = true;
          showExplanation10()
          localStorage.setItem('wripar10', 1)
        }
        if (document.getElementById('o-wripar-103').checked) {
          document.getElementById('r-wripar-103').style.color = 'red'
          document.getElementById('r-wripar-103').innerHTML = 'Incorrect!'
          document.getElementById('r-wripar-102').style.color = 'blue'
          document.getElementById('r-wripar-102').innerHTML = 'Correct!'
          
          document.getElementById('b-wripar-102').classList.add("correct")
          document.getElementById('b-wripar-101').classList.add("incorrect")
          document.getElementById('b-wripar-103').classList.add("incorrect")
          document.getElementById('b-wripar-104').classList.add("incorrect")
    
          document.getElementById('sa-wripar-10').disabled = true;
          document.getElementById('o-wripar-101').disabled = true;
          document.getElementById('o-wripar-102').disabled = true;
          document.getElementById('o-wripar-103').disabled = true;
          document.getElementById('o-wripar-104').disabled = true;
          showExplanation10()
          localStorage.setItem('wripar10', 0)
        }
        if (document.getElementById('o-wripar-104').checked) {
          document.getElementById('r-wripar-104').style.color = 'red'
          document.getElementById('r-wripar-104').innerHTML = 'Incorrect!'
          document.getElementById('r-wripar-102').style.color = 'blue'
          document.getElementById('r-wripar-102').innerHTML = 'Correct!'
          
          document.getElementById('b-wripar-102').classList.add("correct")
          document.getElementById('b-wripar-101').classList.add("incorrect")
          document.getElementById('b-wripar-103').classList.add("incorrect")
          document.getElementById('b-wripar-104').classList.add("incorrect")
    
          document.getElementById('sa-wripar-10').disabled = true;
          document.getElementById('o-wripar-101').disabled = true;
          document.getElementById('o-wripar-102').disabled = true;
          document.getElementById('o-wripar-103').disabled = true;
          document.getElementById('o-wripar-104').disabled = true;
          showExplanation10()
          localStorage.setItem('wripar10', 0)
        }
      }
    }
    