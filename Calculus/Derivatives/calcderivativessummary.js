



if (localStorage.getItem('calcderivatives1') == 1) {
  document.getElementById('calcderivativesb1').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('calcderivatives1') == 0) {
  document.getElementById('calcderivativesb1').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('calcderivativesb1').style.background = 'white';
  }

if (localStorage.getItem('calcderivatives2') == 1) {
    document.getElementById('calcderivativesb2').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('calcderivatives2') == 0) {
    document.getElementById('calcderivativesb2').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('calcderivativesb2').style.background = 'white';
    }
  

if (localStorage.getItem('calcderivatives3') == 1) {
  document.getElementById('calcderivativesb3').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('calcderivatives3') == 0) {
  document.getElementById('calcderivativesb3').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('calcderivativesb3').style.background = 'white';
  }

  
if (localStorage.getItem('calcderivatives4') == 1) {
  document.getElementById('calcderivativesb4').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('calcderivatives4') == 0) {
  document.getElementById('calcderivativesb4').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('calcderivativesb4').style.background = 'white';
  }


  if (localStorage.getItem('calcderivatives5') == 1) {
    document.getElementById('calcderivativesb5').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('calcderivatives5') == 0) {
    document.getElementById('calcderivativesb5').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('calcderivativesb5').style.background = 'white';
    }


if (localStorage.getItem('calcderivatives6') == 1) {
  document.getElementById('calcderivativesb6').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('calcderivatives6') == 0) {
  document.getElementById('calcderivativesb6').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('calcderivativesb6').style.background = 'white';
  }    


if (localStorage.getItem('calcderivatives7') == 1) {
  document.getElementById('calcderivativesb7').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('calcderivatives7') == 0) {
  document.getElementById('calcderivativesb7').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('calcderivativesb7').style.background = 'white';
  }

  
if (localStorage.getItem('calcderivatives8') == 1) {
  document.getElementById('calcderivativesb8').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('calcderivatives8') == 0) {
  document.getElementById('calcderivativesb8').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('calcderivativesb8').style.background = 'white';
  }

  
if (localStorage.getItem('calcderivatives9') == 1) {
  document.getElementById('calcderivativesb9').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('calcderivatives9') == 0) {
  document.getElementById('calcderivativesb9').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('calcderivativesb9').style.background = 'white';
  }

  
if (localStorage.getItem('calcderivatives10') == 1) {
  document.getElementById('calcderivativesb10').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('calcderivatives10') == 0) {
  document.getElementById('calcderivativesb10').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('calcderivativesb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('calcderivatives1');
    localStorage.removeItem('calcderivatives2');
    localStorage.removeItem('calcderivatives3');
    localStorage.removeItem('calcderivatives4');
    localStorage.removeItem('calcderivatives5');
    localStorage.removeItem('calcderivatives6');
    localStorage.removeItem('calcderivatives7');
    localStorage.removeItem('calcderivatives8');
    localStorage.removeItem('calcderivatives9');
    localStorage.removeItem('calcderivatives10');
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 