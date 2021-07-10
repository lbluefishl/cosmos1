



if (localStorage.getItem('calcimpdiff1') == 1) {
  document.getElementById('calcimpdiffb1').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('calcimpdiff1') == 0) {
  document.getElementById('calcimpdiffb1').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('calcimpdiffb1').style.background = 'white';
  }

if (localStorage.getItem('calcimpdiff2') == 1) {
    document.getElementById('calcimpdiffb2').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('calcimpdiff2') == 0) {
    document.getElementById('calcimpdiffb2').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('calcimpdiffb2').style.background = 'white';
    }
  

if (localStorage.getItem('calcimpdiff3') == 1) {
  document.getElementById('calcimpdiffb3').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('calcimpdiff3') == 0) {
  document.getElementById('calcimpdiffb3').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('calcimpdiffb3').style.background = 'white';
  }

  
if (localStorage.getItem('calcimpdiff4') == 1) {
  document.getElementById('calcimpdiffb4').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('calcimpdiff4') == 0) {
  document.getElementById('calcimpdiffb4').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('calcimpdiffb4').style.background = 'white';
  }


  if (localStorage.getItem('calcimpdiff5') == 1) {
    document.getElementById('calcimpdiffb5').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('calcimpdiff5') == 0) {
    document.getElementById('calcimpdiffb5').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('calcimpdiffb5').style.background = 'white';
    }


if (localStorage.getItem('calcimpdiff6') == 1) {
  document.getElementById('calcimpdiffb6').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('calcimpdiff6') == 0) {
  document.getElementById('calcimpdiffb6').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('calcimpdiffb6').style.background = 'white';
  }    


if (localStorage.getItem('calcimpdiff7') == 1) {
  document.getElementById('calcimpdiffb7').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('calcimpdiff7') == 0) {
  document.getElementById('calcimpdiffb7').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('calcimpdiffb7').style.background = 'white';
  }

  
if (localStorage.getItem('calcimpdiff8') == 1) {
  document.getElementById('calcimpdiffb8').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('calcimpdiff8') == 0) {
  document.getElementById('calcimpdiffb8').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('calcimpdiffb8').style.background = 'white';
  }

  
if (localStorage.getItem('calcimpdiff9') == 1) {
  document.getElementById('calcimpdiffb9').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('calcimpdiff9') == 0) {
  document.getElementById('calcimpdiffb9').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('calcimpdiffb9').style.background = 'white';
  }

  
if (localStorage.getItem('calcimpdiff10') == 1) {
  document.getElementById('calcimpdiffb10').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('calcimpdiff10') == 0) {
  document.getElementById('calcimpdiffb10').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('calcimpdiffb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('calcimpdiff1');
    localStorage.removeItem('calcimpdiff2');
    localStorage.removeItem('calcimpdiff3');
    localStorage.removeItem('calcimpdiff4');
    localStorage.removeItem('calcimpdiff5');
    localStorage.removeItem('calcimpdiff6');
    localStorage.removeItem('calcimpdiff7');
    localStorage.removeItem('calcimpdiff8');
    localStorage.removeItem('calcimpdiff9');
    localStorage.removeItem('calcimpdiff10');
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 