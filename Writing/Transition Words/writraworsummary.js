



if (localStorage.getItem('writrawor1') == 1) {
  document.getElementById('writraworb1').style.background = '#7fff00';
}
  else if (localStorage.getItem('writrawor1') == 0) {
  document.getElementById('writraworb1').style.background = 'red';
  }
  else {
    document.getElementById('writraworb1').style.background = 'white';
  }

if (localStorage.getItem('writrawor2') == 1) {
    document.getElementById('writraworb2').style.background = '#7fff00';
  }
    else if (localStorage.getItem('writrawor2') == 0) {
    document.getElementById('writraworb2').style.background = 'red';
    }
    else {
      document.getElementById('writraworb2').style.background = 'white';
    }
  

if (localStorage.getItem('writrawor3') == 1) {
  document.getElementById('writraworb3').style.background = '#7fff00';
}
  else if (localStorage.getItem('writrawor3') == 0) {
  document.getElementById('writraworb3').style.background = 'red';
  }
  else {
    document.getElementById('writraworb3').style.background = 'white';
  }

  
if (localStorage.getItem('writrawor4') == 1) {
  document.getElementById('writraworb4').style.background = '#7fff00';
}
  else if (localStorage.getItem('writrawor4') == 0) {
  document.getElementById('writraworb4').style.background = 'red';
  }
  else {
    document.getElementById('writraworb4').style.background = 'white';
  }


  if (localStorage.getItem('writrawor5') == 1) {
    document.getElementById('writraworb5').style.background = '#7fff00';
  }
    else if (localStorage.getItem('writrawor5') == 0) {
    document.getElementById('writraworb5').style.background = 'red';
    }
    else {
      document.getElementById('writraworb5').style.background = 'white';
    }


if (localStorage.getItem('writrawor6') == 1) {
  document.getElementById('writraworb6').style.background = '#7fff00';
}
  else if (localStorage.getItem('writrawor6') == 0) {
  document.getElementById('writraworb6').style.background = 'red';
  }
  else {
    document.getElementById('writraworb6').style.background = 'white';
  }    


if (localStorage.getItem('writrawor7') == 1) {
  document.getElementById('writraworb7').style.background = '#7fff00';
}
  else if (localStorage.getItem('writrawor7') == 0) {
  document.getElementById('writraworb7').style.background = 'red';
  }
  else {
    document.getElementById('writraworb7').style.background = 'white';
  }

  
if (localStorage.getItem('writrawor8') == 1) {
  document.getElementById('writraworb8').style.background = '#7fff00';
}
  else if (localStorage.getItem('writrawor8') == 0) {
  document.getElementById('writraworb8').style.background = 'red';
  }
  else {
    document.getElementById('writraworb8').style.background = 'white';
  }

  
if (localStorage.getItem('writrawor9') == 1) {
  document.getElementById('writraworb9').style.background = '#7fff00';
}
  else if (localStorage.getItem('writrawor9') == 0) {
  document.getElementById('writraworb9').style.background = 'red';
  }
  else {
    document.getElementById('writraworb9').style.background = 'white';
  }

  
if (localStorage.getItem('writrawor10') == 1) {
  document.getElementById('writraworb10').style.background = '#7fff00';
}
  else if (localStorage.getItem('writrawor10') == 0) {
  document.getElementById('writraworb10').style.background = 'red';
  }
  else {
    document.getElementById('writraworb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('writrawor1');
    localStorage.removeItem('writrawor2');
    localStorage.removeItem('writrawor3');
    localStorage.removeItem('writrawor4');
    localStorage.removeItem('writrawor5');
    localStorage.removeItem('writrawor6');
    localStorage.removeItem('writrawor7');
    localStorage.removeItem('writrawor8');
    localStorage.removeItem('writrawor9');
    localStorage.removeItem('writrawor10');
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 