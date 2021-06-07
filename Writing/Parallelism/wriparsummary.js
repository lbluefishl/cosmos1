



if (localStorage.getItem('wripar1') == 1) {
  document.getElementById('wriparb1').style.background = '#7fff00';
}
  else if (localStorage.getItem('wripar1') == 0) {
  document.getElementById('wriparb1').style.background = 'red';
  }
  else {
    document.getElementById('wriparb1').style.background = 'white';
  }

if (localStorage.getItem('wripar2') == 1) {
    document.getElementById('wriparb2').style.background = '#7fff00';
  }
    else if (localStorage.getItem('wripar2') == 0) {
    document.getElementById('wriparb2').style.background = 'red';
    }
    else {
      document.getElementById('wriparb2').style.background = 'white';
    }
  

if (localStorage.getItem('wripar3') == 1) {
  document.getElementById('wriparb3').style.background = '#7fff00';
}
  else if (localStorage.getItem('wripar3') == 0) {
  document.getElementById('wriparb3').style.background = 'red';
  }
  else {
    document.getElementById('wriparb3').style.background = 'white';
  }

  
if (localStorage.getItem('wripar4') == 1) {
  document.getElementById('wriparb4').style.background = '#7fff00';
}
  else if (localStorage.getItem('wripar4') == 0) {
  document.getElementById('wriparb4').style.background = 'red';
  }
  else {
    document.getElementById('wriparb4').style.background = 'white';
  }


  if (localStorage.getItem('wripar5') == 1) {
    document.getElementById('wriparb5').style.background = '#7fff00';
  }
    else if (localStorage.getItem('wripar5') == 0) {
    document.getElementById('wriparb5').style.background = 'red';
    }
    else {
      document.getElementById('wriparb5').style.background = 'white';
    }


if (localStorage.getItem('wripar6') == 1) {
  document.getElementById('wriparb6').style.background = '#7fff00';
}
  else if (localStorage.getItem('wripar6') == 0) {
  document.getElementById('wriparb6').style.background = 'red';
  }
  else {
    document.getElementById('wriparb6').style.background = 'white';
  }    


if (localStorage.getItem('wripar7') == 1) {
  document.getElementById('wriparb7').style.background = '#7fff00';
}
  else if (localStorage.getItem('wripar7') == 0) {
  document.getElementById('wriparb7').style.background = 'red';
  }
  else {
    document.getElementById('wriparb7').style.background = 'white';
  }

  
if (localStorage.getItem('wripar8') == 1) {
  document.getElementById('wriparb8').style.background = '#7fff00';
}
  else if (localStorage.getItem('wripar8') == 0) {
  document.getElementById('wriparb8').style.background = 'red';
  }
  else {
    document.getElementById('wriparb8').style.background = 'white';
  }

  
if (localStorage.getItem('wripar9') == 1) {
  document.getElementById('wriparb9').style.background = '#7fff00';
}
  else if (localStorage.getItem('wripar9') == 0) {
  document.getElementById('wriparb9').style.background = 'red';
  }
  else {
    document.getElementById('wriparb9').style.background = 'white';
  }

  
if (localStorage.getItem('wripar10') == 1) {
  document.getElementById('wriparwriparb10').style.background = '#7fff00';
}
  else if (localStorage.getItem('wripar10') == 0) {
  document.getElementById('wriparb10').style.background = 'red';
  }
  else {
    document.getElementById('wriparb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('wripar1');
    localStorage.removeItem('wripar2');
    localStorage.removeItem('wripar3');
    localStorage.removeItem('wripar4');
    localStorage.removeItem('wripar5');
    localStorage.removeItem('wripar6');
    localStorage.removeItem('wripar7');
    localStorage.removeItem('wripar8');
    localStorage.removeItem('wripar9');
    localStorage.removeItem('wripar10');
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 