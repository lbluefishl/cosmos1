



if (localStorage.getItem('alg1') == 1) {
  document.getElementById('algb1').style.background = '#7fff00';
}
  else if (localStorage.getItem('alg1') == 0) {
  document.getElementById('algb1').style.background = 'red';
  }
  else {
    document.getElementById('algb1').style.background = 'white';
  }

if (localStorage.getItem('alg2') == 1) {
    document.getElementById('algb2').style.background = '#7fff00';
  }
    else if (localStorage.getItem('alg2') == 0) {
    document.getElementById('algb2').style.background = 'red';
    }
    else {
      document.getElementById('algb2').style.background = 'white';
    }
  

if (localStorage.getItem('alg3') == 1) {
  document.getElementById('algb3').style.background = '#7fff00';
}
  else if (localStorage.getItem('alg3') == 0) {
  document.getElementById('algb3').style.background = 'red';
  }
  else {
    document.getElementById('algb3').style.background = 'white';
  }

  
if (localStorage.getItem('alg4') == 1) {
  document.getElementById('algb4').style.background = '#7fff00';
}
  else if (localStorage.getItem('alg4') == 0) {
  document.getElementById('algb4').style.background = 'red';
  }
  else {
    document.getElementById('algb4').style.background = 'white';
  }


  if (localStorage.getItem('alg5') == 1) {
    document.getElementById('algb5').style.background = '#7fff00';
  }
    else if (localStorage.getItem('alg5') == 0) {
    document.getElementById('algb5').style.background = 'red';
    }
    else {
      document.getElementById('algb5').style.background = 'white';
    }


if (localStorage.getItem('alg6') == 1) {
  document.getElementById('algb6').style.background = '#7fff00';
}
  else if (localStorage.getItem('alg6') == 0) {
  document.getElementById('algb6').style.background = 'red';
  }
  else {
    document.getElementById('algb6').style.background = 'white';
  }    


if (localStorage.getItem('alg7') == 1) {
  document.getElementById('algb7').style.background = '#7fff00';
}
  else if (localStorage.getItem('alg7') == 0) {
  document.getElementById('algb7').style.background = 'red';
  }
  else {
    document.getElementById('algb7').style.background = 'white';
  }

  
if (localStorage.getItem('alg8') == 1) {
  document.getElementById('algb8').style.background = '#7fff00';
}
  else if (localStorage.getItem('alg8') == 0) {
  document.getElementById('algb8').style.background = 'red';
  }
  else {
    document.getElementById('algb8').style.background = 'white';
  }

  
if (localStorage.getItem('alg9') == 1) {
  document.getElementById('algb9').style.background = '#7fff00';
}
  else if (localStorage.getItem('alg9') == 0) {
  document.getElementById('algb9').style.background = 'red';
  }
  else {
    document.getElementById('algb9').style.background = 'white';
  }

  
if (localStorage.getItem('alg10') == 1) {
  document.getElementById('algb10').style.background = '#7fff00';
}
  else if (localStorage.getItem('alg10') == 0) {
  document.getElementById('algb10').style.background = 'red';
  }
  else {
    document.getElementById('algb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem(algb1);
    localStorage.removeItem(algb2);
    localStorage.removeItem(algb3);
    localStorage.removeItem(algb4);
    localStorage.removeItem(algb5);
    localStorage.removeItem(algb6);
    localStorage.removeItem(algb7);
    localStorage.removeItem(algb8);
    localStorage.removeItem(algb9);
    localStorage.removeItem(algb10);
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 