



if (localStorage.getItem('algeqexp1') == 1) {
  document.getElementById('algeqexpb1').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algeqexp1') == 0) {
  document.getElementById('algeqexpb1').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algeqexpb1').style.background = 'white';
  }

if (localStorage.getItem('algeqexp2') == 1) {
    document.getElementById('algeqexpb2').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('algeqexp2') == 0) {
    document.getElementById('algeqexpb2').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('algeqexpb2').style.background = 'white';
    }
  

if (localStorage.getItem('algeqexp3') == 1) {
  document.getElementById('algeqexpb3').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algeqexp3') == 0) {
  document.getElementById('algeqexpb3').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algeqexpb3').style.background = 'white';
  }

  
if (localStorage.getItem('algeqexp4') == 1) {
  document.getElementById('algeqexpb4').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algeqexp4') == 0) {
  document.getElementById('algeqexpb4').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algeqexpb4').style.background = 'white';
  }


  if (localStorage.getItem('algeqexp5') == 1) {
    document.getElementById('algeqexpb5').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('algeqexp5') == 0) {
    document.getElementById('algeqexpb5').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('algeqexpb5').style.background = 'white';
    }


if (localStorage.getItem('algeqexp6') == 1) {
  document.getElementById('algeqexpb6').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algeqexp6') == 0) {
  document.getElementById('algeqexpb6').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algeqexpb6').style.background = 'white';
  }    


if (localStorage.getItem('algeqexp7') == 1) {
  document.getElementById('algeqexpb7').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algeqexp7') == 0) {
  document.getElementById('algeqexpb7').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algeqexpb7').style.background = 'white';
  }

  
if (localStorage.getItem('algeqexp8') == 1) {
  document.getElementById('algeqexpb8').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algeqexp8') == 0) {
  document.getElementById('algeqexpb8').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algeqexpb8').style.background = 'white';
  }

  
if (localStorage.getItem('algeqexp9') == 1) {
  document.getElementById('algeqexpb9').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algeqexp9') == 0) {
  document.getElementById('algeqexpb9').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algeqexpb9').style.background = 'white';
  }

  
if (localStorage.getItem('algeqexp10') == 1) {
  document.getElementById('algeqexpb10').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algeqexp10') == 0) {
  document.getElementById('algeqexpb10').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algeqexpb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('algeqexp1');
    localStorage.removeItem('algeqexp2');
    localStorage.removeItem('algeqexp3');
    localStorage.removeItem('algeqexp4');
    localStorage.removeItem('algeqexp5');
    localStorage.removeItem('algeqexp6');
    localStorage.removeItem('algeqexp7');
    localStorage.removeItem('algeqexp8');
    localStorage.removeItem('algeqexp9');
    localStorage.removeItem('algeqexp10');
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 