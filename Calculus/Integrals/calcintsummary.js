



if (localStorage.getItem('calcint1') == 1) {
  document.getElementById('calcintb1').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('calcint1') == 0) {
  document.getElementById('calcintb1').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('calcintb1').style.background = 'white';
  }

if (localStorage.getItem('calcint2') == 1) {
    document.getElementById('calcintb2').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('calcint2') == 0) {
    document.getElementById('calcintb2').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('calcintb2').style.background = 'white';
    }
  

if (localStorage.getItem('calcint3') == 1) {
  document.getElementById('calcintb3').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('calcint3') == 0) {
  document.getElementById('calcintb3').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('calcintb3').style.background = 'white';
  }

  
if (localStorage.getItem('calcint4') == 1) {
  document.getElementById('calcintb4').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('calcint4') == 0) {
  document.getElementById('calcintb4').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('calcintb4').style.background = 'white';
  }


  if (localStorage.getItem('calcint5') == 1) {
    document.getElementById('calcintb5').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('calcint5') == 0) {
    document.getElementById('calcintb5').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('calcintb5').style.background = 'white';
    }


if (localStorage.getItem('calcint6') == 1) {
  document.getElementById('calcintb6').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('calcint6') == 0) {
  document.getElementById('calcintb6').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('calcintb6').style.background = 'white';
  }    


if (localStorage.getItem('calcint7') == 1) {
  document.getElementById('calcintb7').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('calcint7') == 0) {
  document.getElementById('calcintb7').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('calcintb7').style.background = 'white';
  }

  
if (localStorage.getItem('calcint8') == 1) {
  document.getElementById('calcintb8').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('calcint8') == 0) {
  document.getElementById('calcintb8').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('calcintb8').style.background = 'white';
  }

  
if (localStorage.getItem('calcint9') == 1) {
  document.getElementById('calcintb9').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('calcint9') == 0) {
  document.getElementById('calcintb9').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('calcintb9').style.background = 'white';
  }

  
if (localStorage.getItem('calcint10') == 1) {
  document.getElementById('calcintb10').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('calcint10') == 0) {
  document.getElementById('calcintb10').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('calcintb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('calcint1');
    localStorage.removeItem('calcint2');
    localStorage.removeItem('calcint3');
    localStorage.removeItem('calcint4');
    localStorage.removeItem('calcint5');
    localStorage.removeItem('calcint6');
    localStorage.removeItem('calcint7');
    localStorage.removeItem('calcint8');
    localStorage.removeItem('calcint9');
    localStorage.removeItem('calcint10');
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 