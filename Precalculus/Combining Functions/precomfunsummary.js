



if (localStorage.getItem('precomfun1') == 1) {
  document.getElementById('precomfunb1').style.background = '#7fff00';
}
  else if (localStorage.getItem('precomfun1') == 0) {
  document.getElementById('precomfunb1').style.background = 'red';
  }
  else {
    document.getElementById('precomfunb1').style.background = 'white';
  }

if (localStorage.getItem('precomfun2') == 1) {
    document.getElementById('precomfunb2').style.background = '#7fff00';
  }
    else if (localStorage.getItem('precomfun2') == 0) {
    document.getElementById('precomfunb2').style.background = 'red';
    }
    else {
      document.getElementById('precomfunb2').style.background = 'white';
    }
  

if (localStorage.getItem('precomfun3') == 1) {
  document.getElementById('precomfunb3').style.background = '#7fff00';
}
  else if (localStorage.getItem('precomfun3') == 0) {
  document.getElementById('precomfunb3').style.background = 'red';
  }
  else {
    document.getElementById('precomfunb3').style.background = 'white';
  }

  
if (localStorage.getItem('precomfun4') == 1) {
  document.getElementById('precomfunb4').style.background = '#7fff00';
}
  else if (localStorage.getItem('precomfun4') == 0) {
  document.getElementById('precomfunb4').style.background = 'red';
  }
  else {
    document.getElementById('precomfunb4').style.background = 'white';
  }


  if (localStorage.getItem('precomfun5') == 1) {
    document.getElementById('precomfunb5').style.background = '#7fff00';
  }
    else if (localStorage.getItem('precomfun5') == 0) {
    document.getElementById('precomfunb5').style.background = 'red';
    }
    else {
      document.getElementById('precomfunb5').style.background = 'white';
    }


if (localStorage.getItem('precomfun6') == 1) {
  document.getElementById('precomfunb6').style.background = '#7fff00';
}
  else if (localStorage.getItem('precomfun6') == 0) {
  document.getElementById('precomfunb6').style.background = 'red';
  }
  else {
    document.getElementById('precomfunb6').style.background = 'white';
  }    


if (localStorage.getItem('precomfun7') == 1) {
  document.getElementById('precomfunb7').style.background = '#7fff00';
}
  else if (localStorage.getItem('precomfun7') == 0) {
  document.getElementById('precomfunb7').style.background = 'red';
  }
  else {
    document.getElementById('precomfunb7').style.background = 'white';
  }

  
if (localStorage.getItem('precomfun8') == 1) {
  document.getElementById('precomfunb8').style.background = '#7fff00';
}
  else if (localStorage.getItem('precomfun8') == 0) {
  document.getElementById('precomfunb8').style.background = 'red';
  }
  else {
    document.getElementById('precomfunb8').style.background = 'white';
  }

  
if (localStorage.getItem('precomfun9') == 1) {
  document.getElementById('precomfunb9').style.background = '#7fff00';
}
  else if (localStorage.getItem('precomfun9') == 0) {
  document.getElementById('precomfunb9').style.background = 'red';
  }
  else {
    document.getElementById('precomfunb9').style.background = 'white';
  }

  
if (localStorage.getItem('precomfun10') == 1) {
  document.getElementById('precomfunb10').style.background = '#7fff00';
}
  else if (localStorage.getItem('precomfun10') == 0) {
  document.getElementById('precomfunb10').style.background = 'red';
  }
  else {
    document.getElementById('precomfunb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('precomfun1');
    localStorage.removeItem('precomfun2');
    localStorage.removeItem('precomfun3');
    localStorage.removeItem('precomfun4');
    localStorage.removeItem('precomfun5');
    localStorage.removeItem('precomfun6');
    localStorage.removeItem('precomfun7');
    localStorage.removeItem('precomfun8');
    localStorage.removeItem('precomfun9');
    localStorage.removeItem('precomfun10');
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 