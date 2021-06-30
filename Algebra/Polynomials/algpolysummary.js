



if (localStorage.getItem('algpoly1') == 1) {
  document.getElementById('algpolyb1').style.background = '#7fff00';
}
  else if (localStorage.getItem('algpoly1') == 0) {
  document.getElementById('algpolyb1').style.background = 'red';
  }
  else {
    document.getElementById('algpolyb1').style.background = 'white';
  }

if (localStorage.getItem('algpoly2') == 1) {
    document.getElementById('algpolyb2').style.background = '#7fff00';
  }
    else if (localStorage.getItem('algpoly2') == 0) {
    document.getElementById('algpolyb2').style.background = 'red';
    }
    else {
      document.getElementById('algpolyb2').style.background = 'white';
    }
  

if (localStorage.getItem('algpoly3') == 1) {
  document.getElementById('algpolyb3').style.background = '#7fff00';
}
  else if (localStorage.getItem('algpoly3') == 0) {
  document.getElementById('algpolyb3').style.background = 'red';
  }
  else {
    document.getElementById('algpolyb3').style.background = 'white';
  }

  
if (localStorage.getItem('algpoly4') == 1) {
  document.getElementById('algpolyb4').style.background = '#7fff00';
}
  else if (localStorage.getItem('algpoly4') == 0) {
  document.getElementById('algpolyb4').style.background = 'red';
  }
  else {
    document.getElementById('algpolyb4').style.background = 'white';
  }


  if (localStorage.getItem('algpoly5') == 1) {
    document.getElementById('algpolyb5').style.background = '#7fff00';
  }
    else if (localStorage.getItem('algpoly5') == 0) {
    document.getElementById('algpolyb5').style.background = 'red';
    }
    else {
      document.getElementById('algpolyb5').style.background = 'white';
    }


if (localStorage.getItem('algpoly6') == 1) {
  document.getElementById('algpolyb6').style.background = '#7fff00';
}
  else if (localStorage.getItem('algpoly6') == 0) {
  document.getElementById('algpolyb6').style.background = 'red';
  }
  else {
    document.getElementById('algpolyb6').style.background = 'white';
  }    


if (localStorage.getItem('algpoly7') == 1) {
  document.getElementById('algpolyb7').style.background = '#7fff00';
}
  else if (localStorage.getItem('algpoly7') == 0) {
  document.getElementById('algpolyb7').style.background = 'red';
  }
  else {
    document.getElementById('algpolyb7').style.background = 'white';
  }

  
if (localStorage.getItem('algpoly8') == 1) {
  document.getElementById('algpolyb8').style.background = '#7fff00';
}
  else if (localStorage.getItem('algpoly8') == 0) {
  document.getElementById('algpolyb8').style.background = 'red';
  }
  else {
    document.getElementById('algpolyb8').style.background = 'white';
  }

  
if (localStorage.getItem('algpoly9') == 1) {
  document.getElementById('algpolyb9').style.background = '#7fff00';
}
  else if (localStorage.getItem('algpoly9') == 0) {
  document.getElementById('algpolyb9').style.background = 'red';
  }
  else {
    document.getElementById('algpolyb9').style.background = 'white';
  }

  
if (localStorage.getItem('algpoly10') == 1) {
  document.getElementById('algpolyb10').style.background = '#7fff00';
}
  else if (localStorage.getItem('algpoly10') == 0) {
  document.getElementById('algpolyb10').style.background = 'red';
  }
  else {
    document.getElementById('algpolyb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('algpoly1');
    localStorage.removeItem('algpoly2');
    localStorage.removeItem('algpoly3');
    localStorage.removeItem('algpoly4');
    localStorage.removeItem('algpoly5');
    localStorage.removeItem('algpoly6');
    localStorage.removeItem('algpoly7');
    localStorage.removeItem('algpoly8');
    localStorage.removeItem('algpoly9');
    localStorage.removeItem('algpoly10');
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 