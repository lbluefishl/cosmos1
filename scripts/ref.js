

/*

First Choice Correct

*p_roblem
*c_hoice

if (document.getElementById('sa-alg-problem') != null) {
  algproblemBut.onclick = function() {
     if (document.getElementById('o-alg-problem1').checked) {
       document.getElementById('b-alg-problem1').style.border = '3px solid limegreen'
       document.getElementById('r-alg-problem1').style.color = 'limegreen'
       document.getElementById('r-alg-problem1').innerHTML = 'Correct!'
       document.getElementById('sa-alg-problem').disabled = true;
       showExplanationproblem()
       localStorage.setItem('algproblem', 1)
     }
     if (document.getElementById('o-alg-problem2').checked) {
       document.getElementById('b-alg-problem2').style.border = '3px solid red'
       document.getElementById('r-alg-problem2').style.color = 'red'
       document.getElementById('r-alg-problem2').innerHTML = 'Incorrect!'
       document.getElementById('b-alg-problem1').style.border = '3px solid limegreen'
       document.getElementById('r-alg-problem1').style.color = 'limegreen'
       document.getElementById('r-alg-problem1').innerHTML = 'Correct!'
       document.getElementById('sa-alg-problem').disabled = true;
       showExplanationproblem()
       localStorage.setItem('algproblem', 0)
     }
     if (document.getElementById('o-alg-problem3').checked) {
       document.getElementById('b-alg-problem3').style.border = '3px solid red'
       document.getElementById('r-alg-problem3').style.color = 'red'
       document.getElementById('r-alg-problem3').innerHTML = 'Incorrect!'
       document.getElementById('b-alg-problem1').style.border = '3px solid limegreen'
       document.getElementById('r-alg-problem1').style.color = 'limegreen'
       document.getElementById('r-alg-problem1').innerHTML = 'Correct!'
       document.getElementById('sa-alg-1').disabled = true;
       showExplanationproblem()
       localStorage.setItem('algproblem', 0)
     }
     if (document.getElementById('o-alg-problem4').checked) {
       document.getElementById('b-alg-problem4').style.border = '3px solid red'
       document.getElementById('r-alg-problem4').style.color = 'red'
       document.getElementById('r-alg-problem4').innerHTML = 'Incorrect!'
       document.getElementById('b-alg-problem1').style.border = '3px solid limegreen'
       document.getElementById('r-alg-problem1').style.color = 'limegreen'
       document.getElementById('r-alg-problem1').innerHTML = 'Correct!'
       document.getElementById('sa-alg-1').disabled = true;
       showExplanationproblem()
       localStorage.setItem('algproblem', 0)
     }
     
   }
 }
 

  if (document.getElementById('sa-alg-problem') != null) {
   algproblemBut.onclick = function() {
     if (document.getElementById('o-alg-problem1').checked) {
       document.getElementById('b-alg-problem1').style.border = '3px solid red'
       document.getElementById('r-alg-problem1').style.color = 'red'
       document.getElementById('r-alg-problem1').innerHTML = 'Incorrect!'
       document.getElementById('b-alg-problem2').style.border = '3px solid limegreen'
       document.getElementById('r-alg-problem2').style.color = 'limegreen'
       document.getElementById('r-alg-problem2').innerHTML = 'Correct!'
       document.getElementById('sa-alg-problem').disabled = true;
       showExplanationproblem()
       localStorage.setItem('algproblem', 0)
     }
     if (document.getElementById('o-alg-problem2').checked) {
       document.getElementById('b-alg-problem2').style.border = '3px solid limegreen'
       document.getElementById('r-alg-problem2').style.color = 'limegreen'
       document.getElementById('r-alg-problem2').innerHTML = 'Correct!'
       document.getElementById('sa-alg-problem').disabled = true;
       showExplanationproblem()
       localStorage.setItem('algproblem', 1)
     }
     if (document.getElementById('o-alg-problem3').checked) {
       document.getElementById('b-alg-problem3').style.border = '3px solid red'
       document.getElementById('r-alg-problem3').style.color = 'red'
       document.getElementById('r-alg-problem3').innerHTML = 'Incorrect!'
       document.getElementById('b-alg-problem2').style.border = '3px solid limegreen'
       document.getElementById('r-alg-problem2').style.color = 'limegreen'
       document.getElementById('r-alg-problem2').innerHTML = 'Correct!'
       document.getElementById('sa-alg-problem').disabled = true;
       showExplanationproblem()
       localStorage.setItem('algproblem', 0)
     }
     if (document.getElementById('o-alg-problem4').checked) {
       document.getElementById('b-alg-problem4').style.border = '3px solid red'
       document.getElementById('r-alg-problem4').style.color = 'red'
       document.getElementById('r-alg-problem4').innerHTML = 'Incorrect!'
       document.getElementById('b-alg-problem2').style.border = '3px solid limegreen'
       document.getElementById('r-alg-problem2').style.color = 'limegreen'
       document.getElementById('r-alg-problem2').innerHTML = 'Correct!'
       document.getElementById('sa-alg-problem').disabled = true;
       showExplanationproblem()
       localStorage.setItem('algproblem', 0)
     }
   }
 }
 
 
 
 if (document.getElementById('sa-alg-problem') != null) {
   algproblemBut.onclick = function() {
     if (document.getElementById('o-alg-problem1').checked) {
       document.getElementById('b-alg-problem1').style.border = '3px solid red'
       document.getElementById('r-alg-problem1').style.color = 'red'
       document.getElementById('r-alg-problem1').innerHTML = 'Incorrect!'
       document.getElementById('b-alg-problem3').style.border = '3px solid limegreen'
       document.getElementById('r-alg-problem3').style.color = 'limegreen'
       document.getElementById('r-alg-problem3').innerHTML = 'Correct!'
       document.getElementById('sa-alg-problem').disabled = true;
       showExplanationproblem()
       localStorage.setItem('algproblem', 0)
     }
     if (document.getElementById('o-alg-problem2').checked) {
       document.getElementById('b-alg-problem2').style.border = '3px solid red'
       document.getElementById('r-alg-problem2').style.color = 'red'
       document.getElementById('r-alg-problem2').innerHTML = 'Incorrect!'
       document.getElementById('b-alg-problem3').style.border = '3px solid limegreen'
       document.getElementById('r-alg-problem3').style.color = 'limegreen'
       document.getElementById('r-alg-problem3').innerHTML = 'Correct!'
       document.getElementById('sa-alg-problem').disabled = true;
       showExplanationproblem()
       localStorage.setItem('algproblem', 0)
     }
     if (document.getElementById('o-alg-problem3').checked) {
       document.getElementById('b-alg-problem3').style.border = '3px solid limegreen'
       document.getElementById('r-alg-problem3').style.color = 'limegreen'
       document.getElementById('r-alg-problem3').innerHTML = 'Correct!'
       document.getElementById('sa-alg-problem').disabled = true;
       showExplanationproblem()
       localStorage.setItem('algproblem', 1)
     }
     if (document.getElementById('o-alg-problem4').checked) {
       document.getElementById('b-alg-problem4').style.border = '3px solid red'
       document.getElementById('r-alg-problem4').style.color = 'red'
       document.getElementById('r-alg-problem4').innerHTML = 'Incorrect!'
       document.getElementById('b-alg-problem3').style.border = '3px solid limegreen'
       document.getElementById('r-alg-problem3').style.color = 'limegreen'
       document.getElementById('r-alg-problem3').innerHTML = 'Correct!'
       document.getElementById('sa-alg-problem').disabled = true;
       showExplanationproblem()
       localStorage.setItem('algproblem', 0)
     }
   }
 }
 

 
 if (document.getElementById('sa-alg-problem') != null) {
   algproblemBut.onclick = function() {
     if (document.getElementById('o-alg-problem1').checked) {
       document.getElementById('b-alg-problem1').style.border = '3px solid red'
       document.getElementById('r-alg-problem1').style.color = 'red'
       document.getElementById('r-alg-problem1').innerHTML = 'Incorrect!'
       document.getElementById('b-alg-problem4').style.border = '3px solid limegreen'
       document.getElementById('r-alg-problem4').style.color = 'limegreen'
       document.getElementById('r-alg-problem4').innerHTML = 'Correct!'
       document.getElementById('sa-alg-problem').disabled = true;
       showExplanationproblem()
       localStorage.setItem('algproblem', 0)
     }
     if (document.getElementById('o-alg-problem2').checked) {
       document.getElementById('b-alg-problem2').style.border = '3px solid red'
       document.getElementById('r-alg-problem2').style.color = 'red'
       document.getElementById('r-alg-problem2').innerHTML = 'Incorrect!'
       document.getElementById('b-alg-problem4').style.border = '3px solid limegreen'
       document.getElementById('r-alg-problem4').style.color = 'limegreen'
       document.getElementById('r-alg-problem4').innerHTML = 'Correct!'
       document.getElementById('sa-alg-problem').disabled = true;
       showExplanationproblem()
       localStorage.setItem('algproblem', 0)
     }
     if (document.getElementById('o-alg-problem3').checked) {
       document.getElementById('b-alg-problem3').style.border = '3px solid red'
       document.getElementById('r-alg-problem3').style.color = 'red'
       document.getElementById('r-alg-problem3').innerHTML = 'Incorrect!'
       document.getElementById('b-alg-problem4').style.border = '3px solid limegreen'
       document.getElementById('r-alg-problem4').style.color = 'limegreen'
       document.getElementById('r-alg-problem4').innerHTML = 'Correct!'
       document.getElementById('sa-alg-problem').disabled = true;
       showExplanationproblem()
       localStorage.setItem('algproblem', 0)
     }
     if (document.getElementById('o-alg-problem4').checked) {
       document.getElementById('b-alg-problem4').style.border = '3px solid limegreen'
       document.getElementById('r-alg-problem4').style.color = 'limegreen'
       document.getElementById('r-alg-problem4').innerHTML = 'Correct!'
       document.getElementById('sa-alg-problem').disabled = true;
       showExplanationproblem()
       localStorage.setItem('algproblem', 1)
     }
   }
 }



 */