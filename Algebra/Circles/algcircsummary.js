



if (localStorage.getItem('algcirc1') == 1) {
  document.getElementById('algcircb1').style.background = '#7fff00';
}
  else if (localStorage.getItem('algcirc1') == 0) {
  document.getElementById('algcircb1').style.background = 'red';
  }
  else {
    document.getElementById('algcircb1').style.background = 'white';
  }

if (localStorage.getItem('algcirc2') == 1) {
    document.getElementById('algcircb2').style.background = '#7fff00';
  }
    else if (localStorage.getItem('algcirc2') == 0) {
    document.getElementById('algcircb2').style.background = 'red';
    }
    else {
      document.getElementById('algcircb2').style.background = 'white';
    }
  

if (localStorage.getItem('algcirc3') == 1) {
  document.getElementById('algcircb3').style.background = '#7fff00';
}
  else if (localStorage.getItem('algcirc3') == 0) {
  document.getElementById('algcircb3').style.background = 'red';
  }
  else {
    document.getElementById('algcircb3').style.background = 'white';
  }

  
if (localStorage.getItem('algcirc4') == 1) {
  document.getElementById('algcircb4').style.background = '#7fff00';
}
  else if (localStorage.getItem('algcirc4') == 0) {
  document.getElementById('algcircb4').style.background = 'red';
  }
  else {
    document.getElementById('algcircb4').style.background = 'white';
  }


  if (localStorage.getItem('algcirc5') == 1) {
    document.getElementById('algcircb5').style.background = '#7fff00';
  }
    else if (localStorage.getItem('algcirc5') == 0) {
    document.getElementById('algcircb5').style.background = 'red';
    }
    else {
      document.getElementById('algcircb5').style.background = 'white';
    }


if (localStorage.getItem('algcirc6') == 1) {
  document.getElementById('algcircb6').style.background = '#7fff00';
}
  else if (localStorage.getItem('algcirc6') == 0) {
  document.getElementById('algcircb6').style.background = 'red';
  }
  else {
    document.getElementById('algcircb6').style.background = 'white';
  }    


if (localStorage.getItem('algcirc7') == 1) {
  document.getElementById('algcircb7').style.background = '#7fff00';
}
  else if (localStorage.getItem('algcirc7') == 0) {
  document.getElementById('algcircb7').style.background = 'red';
  }
  else {
    document.getElementById('algcircb7').style.background = 'white';
  }

  
if (localStorage.getItem('algcirc8') == 1) {
  document.getElementById('algcircb8').style.background = '#7fff00';
}
  else if (localStorage.getItem('algcirc8') == 0) {
  document.getElementById('algcircb8').style.background = 'red';
  }
  else {
    document.getElementById('algcircb8').style.background = 'white';
  }

  
if (localStorage.getItem('algcirc9') == 1) {
  document.getElementById('algcircb9').style.background = '#7fff00';
}
  else if (localStorage.getItem('algcirc9') == 0) {
  document.getElementById('algcircb9').style.background = 'red';
  }
  else {
    document.getElementById('algcircb9').style.background = 'white';
  }

  
if (localStorage.getItem('algcirc10') == 1) {
  document.getElementById('algcircb10').style.background = '#7fff00';
}
  else if (localStorage.getItem('algcirc10') == 0) {
  document.getElementById('algcircb10').style.background = 'red';
  }
  else {
    document.getElementById('algcircb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('algcirc1');
    localStorage.removeItem('algcirc2');
    localStorage.removeItem('algcirc3');
    localStorage.removeItem('algcirc4');
    localStorage.removeItem('algcirc5');
    localStorage.removeItem('algcirc6');
    localStorage.removeItem('algcirc7');
    localStorage.removeItem('algcirc8');
    localStorage.removeItem('algcirc9');
    localStorage.removeItem('algcirc10');
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 