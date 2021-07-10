


if (localStorage.getItem('alg1') == 1) {
  document.getElementById('algb1').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('alg1') == 0) {
  document.getElementById('algb1').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algb1').style.background = 'white';
  }

if (localStorage.getItem('alg2') == 1) {
    document.getElementById('algb2').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('alg2') == 0) {
    document.getElementById('algb2').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('algb2').style.background = 'white';
    }
  

if (localStorage.getItem('alg3') == 1) {
  document.getElementById('algb3').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('alg3') == 0) {
  document.getElementById('algb3').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algb3').style.background = 'white';
  }

  
if (localStorage.getItem('alg4') == 1) {
  document.getElementById('algb4').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('alg4') == 0) {
  document.getElementById('algb4').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algb4').style.background = 'white';
  }


  if (localStorage.getItem('alg5') == 1) {
    document.getElementById('algb5').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('alg5') == 0) {
    document.getElementById('algb5').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('algb5').style.background = 'white';
    }


if (localStorage.getItem('alg6') == 1) {
  document.getElementById('algb6').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('alg6') == 0) {
  document.getElementById('algb6').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algb6').style.background = 'white';
  }    


if (localStorage.getItem('alg7') == 1) {
  document.getElementById('algb7').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('alg7') == 0) {
  document.getElementById('algb7').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algb7').style.background = 'white';
  }

  
if (localStorage.getItem('alg8') == 1) {
  document.getElementById('algb8').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('alg8') == 0) {
  document.getElementById('algb8').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algb8').style.background = 'white';
  }

  
if (localStorage.getItem('alg9') == 1) {
  document.getElementById('algb9').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('alg9') == 0) {
  document.getElementById('algb9').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algb9').style.background = 'white';
  }

  
if (localStorage.getItem('alg10') == 1) {
  document.getElementById('algb10').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('alg10') == 0) {
  document.getElementById('algb10').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('alg1');
    localStorage.removeItem('alg2');
    localStorage.removeItem('alg3');
    localStorage.removeItem('alg4');
    localStorage.removeItem('alg5');
    localStorage.removeItem('alg6');
    localStorage.removeItem('alg7');
    localStorage.removeItem('alg8');
    localStorage.removeItem('alg9');
    localStorage.removeItem('alg10');
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 