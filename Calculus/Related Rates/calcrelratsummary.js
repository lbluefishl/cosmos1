



if (localStorage.getItem('calcrelrat1') == 1) {
  document.getElementById('calcrelratb1').style.background = '#7fff00';
}
  else if (localStorage.getItem('calcrelrat1') == 0) {
  document.getElementById('calcrelratb1').style.background = 'red';
  }
  else {
    document.getElementById('calcrelratb1').style.background = 'white';
  }

if (localStorage.getItem('calcrelrat2') == 1) {
    document.getElementById('calcrelratb2').style.background = '#7fff00';
  }
    else if (localStorage.getItem('calcrelrat2') == 0) {
    document.getElementById('calcrelratb2').style.background = 'red';
    }
    else {
      document.getElementById('calcrelratb2').style.background = 'white';
    }
  

if (localStorage.getItem('calcrelrat3') == 1) {
  document.getElementById('calcrelratb3').style.background = '#7fff00';
}
  else if (localStorage.getItem('calcrelrat3') == 0) {
  document.getElementById('calcrelratb3').style.background = 'red';
  }
  else {
    document.getElementById('calcrelratb3').style.background = 'white';
  }

  
if (localStorage.getItem('calcrelrat4') == 1) {
  document.getElementById('calcrelratb4').style.background = '#7fff00';
}
  else if (localStorage.getItem('calcrelrat4') == 0) {
  document.getElementById('calcrelratb4').style.background = 'red';
  }
  else {
    document.getElementById('calcrelratb4').style.background = 'white';
  }


  if (localStorage.getItem('calcrelrat5') == 1) {
    document.getElementById('calcrelratb5').style.background = '#7fff00';
  }
    else if (localStorage.getItem('calcrelrat5') == 0) {
    document.getElementById('calcrelratb5').style.background = 'red';
    }
    else {
      document.getElementById('calcrelratb5').style.background = 'white';
    }


if (localStorage.getItem('calcrelrat6') == 1) {
  document.getElementById('calcrelratb6').style.background = '#7fff00';
}
  else if (localStorage.getItem('calcrelrat6') == 0) {
  document.getElementById('calcrelratb6').style.background = 'red';
  }
  else {
    document.getElementById('calcrelratb6').style.background = 'white';
  }    


if (localStorage.getItem('calcrelrat7') == 1) {
  document.getElementById('calcrelratb7').style.background = '#7fff00';
}
  else if (localStorage.getItem('calcrelrat7') == 0) {
  document.getElementById('calcrelratb7').style.background = 'red';
  }
  else {
    document.getElementById('calcrelratb7').style.background = 'white';
  }

  
if (localStorage.getItem('calcrelrat8') == 1) {
  document.getElementById('calcrelratb8').style.background = '#7fff00';
}
  else if (localStorage.getItem('calcrelrat8') == 0) {
  document.getElementById('calcrelratb8').style.background = 'red';
  }
  else {
    document.getElementById('calcrelratb8').style.background = 'white';
  }

  
if (localStorage.getItem('calcrelrat9') == 1) {
  document.getElementById('calcrelratb9').style.background = '#7fff00';
}
  else if (localStorage.getItem('calcrelrat9') == 0) {
  document.getElementById('calcrelratb9').style.background = 'red';
  }
  else {
    document.getElementById('calcrelratb9').style.background = 'white';
  }

  
if (localStorage.getItem('calcrelrat10') == 1) {
  document.getElementById('calcrelratcalcrelratb10').style.background = '#7fff00';
}
  else if (localStorage.getItem('calcrelrat10') == 0) {
  document.getElementById('calcrelratb10').style.background = 'red';
  }
  else {
    document.getElementById('calcrelratb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('calcrelrat1');
    localStorage.removeItem('calcrelrat2');
    localStorage.removeItem('calcrelrat3');
    localStorage.removeItem('calcrelrat4');
    localStorage.removeItem('calcrelrat5');
    localStorage.removeItem('calcrelrat6');
    localStorage.removeItem('calcrelrat7');
    localStorage.removeItem('calcrelrat8');
    localStorage.removeItem('calcrelrat9');
    localStorage.removeItem('calcrelrat10');
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 