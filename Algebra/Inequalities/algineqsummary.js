



if (localStorage.getItem('algineq1') == 1) {
  document.getElementById('algineqb1').style.background = '#7fff00';
}
  else if (localStorage.getItem('algineq1') == 0) {
  document.getElementById('algineqb1').style.background = 'red';
  }
  else {
    document.getElementById('algineqb1').style.background = 'white';
  }

if (localStorage.getItem('algineq2') == 1) {
    document.getElementById('algineqb2').style.background = '#7fff00';
  }
    else if (localStorage.getItem('algineq2') == 0) {
    document.getElementById('algineqb2').style.background = 'red';
    }
    else {
      document.getElementById('algineqb2').style.background = 'white';
    }
  

if (localStorage.getItem('algineq3') == 1) {
  document.getElementById('algineqb3').style.background = '#7fff00';
}
  else if (localStorage.getItem('algineq3') == 0) {
  document.getElementById('algineqb3').style.background = 'red';
  }
  else {
    document.getElementById('algineqb3').style.background = 'white';
  }

  
if (localStorage.getItem('algineq4') == 1) {
  document.getElementById('algineqb4').style.background = '#7fff00';
}
  else if (localStorage.getItem('algineq4') == 0) {
  document.getElementById('algineqb4').style.background = 'red';
  }
  else {
    document.getElementById('algineqb4').style.background = 'white';
  }


  if (localStorage.getItem('algineq5') == 1) {
    document.getElementById('algineqb5').style.background = '#7fff00';
  }
    else if (localStorage.getItem('algineq5') == 0) {
    document.getElementById('algineqb5').style.background = 'red';
    }
    else {
      document.getElementById('algineqb5').style.background = 'white';
    }


if (localStorage.getItem('algineq6') == 1) {
  document.getElementById('algineqb6').style.background = '#7fff00';
}
  else if (localStorage.getItem('algineq6') == 0) {
  document.getElementById('algineqb6').style.background = 'red';
  }
  else {
    document.getElementById('algineqb6').style.background = 'white';
  }    


if (localStorage.getItem('algineq7') == 1) {
  document.getElementById('algineqb7').style.background = '#7fff00';
}
  else if (localStorage.getItem('algineq7') == 0) {
  document.getElementById('algineqb7').style.background = 'red';
  }
  else {
    document.getElementById('algineqb7').style.background = 'white';
  }

  
if (localStorage.getItem('algineq8') == 1) {
  document.getElementById('algineqb8').style.background = '#7fff00';
}
  else if (localStorage.getItem('algineq8') == 0) {
  document.getElementById('algineqb8').style.background = 'red';
  }
  else {
    document.getElementById('algineqb8').style.background = 'white';
  }

  
if (localStorage.getItem('algineq9') == 1) {
  document.getElementById('algineqb9').style.background = '#7fff00';
}
  else if (localStorage.getItem('algineq9') == 0) {
  document.getElementById('algineqb9').style.background = 'red';
  }
  else {
    document.getElementById('algineqb9').style.background = 'white';
  }

  
if (localStorage.getItem('algineq10') == 1) {
  document.getElementById('algineqalgineqb10').style.background = '#7fff00';
}
  else if (localStorage.getItem('algineq10') == 0) {
  document.getElementById('algineqb10').style.background = 'red';
  }
  else {
    document.getElementById('algineqb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('algineq1');
    localStorage.removeItem('algineq2');
    localStorage.removeItem('algineq3');
    localStorage.removeItem('algineq4');
    localStorage.removeItem('algineq5');
    localStorage.removeItem('algineq6');
    localStorage.removeItem('algineq7');
    localStorage.removeItem('algineq8');
    localStorage.removeItem('algineq9');
    localStorage.removeItem('algineq10');
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 