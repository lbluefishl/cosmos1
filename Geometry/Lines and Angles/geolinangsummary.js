



if (localStorage.getItem('geolinang1') == 1) {
  document.getElementById('geolinangb1').style.background = '#7fff00';
}
  else if (localStorage.getItem('geolinang1') == 0) {
  document.getElementById('geolinangb1').style.background = 'red';
  }
  else {
    document.getElementById('geolinangb1').style.background = 'white';
  }

if (localStorage.getItem('geolinang2') == 1) {
    document.getElementById('geolinangb2').style.background = '#7fff00';
  }
    else if (localStorage.getItem('geolinang2') == 0) {
    document.getElementById('geolinangb2').style.background = 'red';
    }
    else {
      document.getElementById('geolinangb2').style.background = 'white';
    }
  

if (localStorage.getItem('geolinang3') == 1) {
  document.getElementById('geolinangb3').style.background = '#7fff00';
}
  else if (localStorage.getItem('geolinang3') == 0) {
  document.getElementById('geolinangb3').style.background = 'red';
  }
  else {
    document.getElementById('geolinangb3').style.background = 'white';
  }

  
if (localStorage.getItem('geolinang4') == 1) {
  document.getElementById('geolinangb4').style.background = '#7fff00';
}
  else if (localStorage.getItem('geolinang4') == 0) {
  document.getElementById('geolinangb4').style.background = 'red';
  }
  else {
    document.getElementById('geolinangb4').style.background = 'white';
  }


  if (localStorage.getItem('geolinang5') == 1) {
    document.getElementById('geolinangb5').style.background = '#7fff00';
  }
    else if (localStorage.getItem('geolinang5') == 0) {
    document.getElementById('geolinangb5').style.background = 'red';
    }
    else {
      document.getElementById('geolinangb5').style.background = 'white';
    }


if (localStorage.getItem('geolinang6') == 1) {
  document.getElementById('geolinangb6').style.background = '#7fff00';
}
  else if (localStorage.getItem('geolinang6') == 0) {
  document.getElementById('geolinangb6').style.background = 'red';
  }
  else {
    document.getElementById('geolinangb6').style.background = 'white';
  }    


if (localStorage.getItem('geolinang7') == 1) {
  document.getElementById('geolinangb7').style.background = '#7fff00';
}
  else if (localStorage.getItem('geolinang7') == 0) {
  document.getElementById('geolinangb7').style.background = 'red';
  }
  else {
    document.getElementById('geolinangb7').style.background = 'white';
  }

  
if (localStorage.getItem('geolinang8') == 1) {
  document.getElementById('geolinangb8').style.background = '#7fff00';
}
  else if (localStorage.getItem('geolinang8') == 0) {
  document.getElementById('geolinangb8').style.background = 'red';
  }
  else {
    document.getElementById('geolinangb8').style.background = 'white';
  }

  
if (localStorage.getItem('geolinang9') == 1) {
  document.getElementById('geolinangb9').style.background = '#7fff00';
}
  else if (localStorage.getItem('geolinang9') == 0) {
  document.getElementById('geolinangb9').style.background = 'red';
  }
  else {
    document.getElementById('geolinangb9').style.background = 'white';
  }

  
if (localStorage.getItem('geolinang10') == 1) {
  document.getElementById('geolinanggeolinangb10').style.background = '#7fff00';
}
  else if (localStorage.getItem('geolinang10') == 0) {
  document.getElementById('geolinangb10').style.background = 'red';
  }
  else {
    document.getElementById('geolinangb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('geolinang1');
    localStorage.removeItem('geolinang2');
    localStorage.removeItem('geolinang3');
    localStorage.removeItem('geolinang4');
    localStorage.removeItem('geolinang5');
    localStorage.removeItem('geolinang6');
    localStorage.removeItem('geolinang7');
    localStorage.removeItem('geolinang8');
    localStorage.removeItem('geolinang9');
    localStorage.removeItem('geolinang10');
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 