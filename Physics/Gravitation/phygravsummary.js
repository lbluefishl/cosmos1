



if (localStorage.getItem('phygrav1') == 1) {
  document.getElementById('phygravb1').style.background = '#7fff00';
}
  else if (localStorage.getItem('phygrav1') == 0) {
  document.getElementById('phygravb1').style.background = 'red';
  }
  else {
    document.getElementById('phygravb1').style.background = 'white';
  }

if (localStorage.getItem('phygrav2') == 1) {
    document.getElementById('phygravb2').style.background = '#7fff00';
  }
    else if (localStorage.getItem('phygrav2') == 0) {
    document.getElementById('phygravb2').style.background = 'red';
    }
    else {
      document.getElementById('phygravb2').style.background = 'white';
    }
  

if (localStorage.getItem('phygrav3') == 1) {
  document.getElementById('phygravb3').style.background = '#7fff00';
}
  else if (localStorage.getItem('phygrav3') == 0) {
  document.getElementById('phygravb3').style.background = 'red';
  }
  else {
    document.getElementById('phygravb3').style.background = 'white';
  }

  
if (localStorage.getItem('phygrav4') == 1) {
  document.getElementById('phygravb4').style.background = '#7fff00';
}
  else if (localStorage.getItem('phygrav4') == 0) {
  document.getElementById('phygravb4').style.background = 'red';
  }
  else {
    document.getElementById('phygravb4').style.background = 'white';
  }


  if (localStorage.getItem('phygrav5') == 1) {
    document.getElementById('phygravb5').style.background = '#7fff00';
  }
    else if (localStorage.getItem('phygrav5') == 0) {
    document.getElementById('phygravb5').style.background = 'red';
    }
    else {
      document.getElementById('phygravb5').style.background = 'white';
    }


if (localStorage.getItem('phygrav6') == 1) {
  document.getElementById('phygravb6').style.background = '#7fff00';
}
  else if (localStorage.getItem('phygrav6') == 0) {
  document.getElementById('phygravb6').style.background = 'red';
  }
  else {
    document.getElementById('phygravb6').style.background = 'white';
  }    


if (localStorage.getItem('phygrav7') == 1) {
  document.getElementById('phygravb7').style.background = '#7fff00';
}
  else if (localStorage.getItem('phygrav7') == 0) {
  document.getElementById('phygravb7').style.background = 'red';
  }
  else {
    document.getElementById('phygravb7').style.background = 'white';
  }

  
if (localStorage.getItem('phygrav8') == 1) {
  document.getElementById('phygravb8').style.background = '#7fff00';
}
  else if (localStorage.getItem('phygrav8') == 0) {
  document.getElementById('phygravb8').style.background = 'red';
  }
  else {
    document.getElementById('phygravb8').style.background = 'white';
  }

  
if (localStorage.getItem('phygrav9') == 1) {
  document.getElementById('phygravb9').style.background = '#7fff00';
}
  else if (localStorage.getItem('phygrav9') == 0) {
  document.getElementById('phygravb9').style.background = 'red';
  }
  else {
    document.getElementById('phygravb9').style.background = 'white';
  }

  
if (localStorage.getItem('phygrav10') == 1) {
  document.getElementById('phygravphygravb10').style.background = '#7fff00';
}
  else if (localStorage.getItem('phygrav10') == 0) {
  document.getElementById('phygravb10').style.background = 'red';
  }
  else {
    document.getElementById('phygravb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('phygrav1');
    localStorage.removeItem('phygrav2');
    localStorage.removeItem('phygrav3');
    localStorage.removeItem('phygrav4');
    localStorage.removeItem('phygrav5');
    localStorage.removeItem('phygrav6');
    localStorage.removeItem('phygrav7');
    localStorage.removeItem('phygrav8');
    localStorage.removeItem('phygrav9');
    localStorage.removeItem('phygrav10');
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 