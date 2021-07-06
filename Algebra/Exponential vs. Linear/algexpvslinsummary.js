



if (localStorage.getItem('algexpvslin1') == 1) {
  document.getElementById('algexpvslinb1').style.background = '#7fff00';
}
  else if (localStorage.getItem('algexpvslin1') == 0) {
  document.getElementById('algexpvslinb1').style.background = 'red';
  }
  else {
    document.getElementById('algexpvslinb1').style.background = 'white';
  }

if (localStorage.getItem('algexpvslin2') == 1) {
    document.getElementById('algexpvslinb2').style.background = '#7fff00';
  }
    else if (localStorage.getItem('algexpvslin2') == 0) {
    document.getElementById('algexpvslinb2').style.background = 'red';
    }
    else {
      document.getElementById('algexpvslinb2').style.background = 'white';
    }
  

if (localStorage.getItem('algexpvslin3') == 1) {
  document.getElementById('algexpvslinb3').style.background = '#7fff00';
}
  else if (localStorage.getItem('algexpvslin3') == 0) {
  document.getElementById('algexpvslinb3').style.background = 'red';
  }
  else {
    document.getElementById('algexpvslinb3').style.background = 'white';
  }

  
if (localStorage.getItem('algexpvslin4') == 1) {
  document.getElementById('algexpvslinb4').style.background = '#7fff00';
}
  else if (localStorage.getItem('algexpvslin4') == 0) {
  document.getElementById('algexpvslinb4').style.background = 'red';
  }
  else {
    document.getElementById('algexpvslinb4').style.background = 'white';
  }


  if (localStorage.getItem('algexpvslin5') == 1) {
    document.getElementById('algexpvslinb5').style.background = '#7fff00';
  }
    else if (localStorage.getItem('algexpvslin5') == 0) {
    document.getElementById('algexpvslinb5').style.background = 'red';
    }
    else {
      document.getElementById('algexpvslinb5').style.background = 'white';
    }


if (localStorage.getItem('algexpvslin6') == 1) {
  document.getElementById('algexpvslinb6').style.background = '#7fff00';
}
  else if (localStorage.getItem('algexpvslin6') == 0) {
  document.getElementById('algexpvslinb6').style.background = 'red';
  }
  else {
    document.getElementById('algexpvslinb6').style.background = 'white';
  }    


if (localStorage.getItem('algexpvslin7') == 1) {
  document.getElementById('algexpvslinb7').style.background = '#7fff00';
}
  else if (localStorage.getItem('algexpvslin7') == 0) {
  document.getElementById('algexpvslinb7').style.background = 'red';
  }
  else {
    document.getElementById('algexpvslinb7').style.background = 'white';
  }

  
if (localStorage.getItem('algexpvslin8') == 1) {
  document.getElementById('algexpvslinb8').style.background = '#7fff00';
}
  else if (localStorage.getItem('algexpvslin8') == 0) {
  document.getElementById('algexpvslinb8').style.background = 'red';
  }
  else {
    document.getElementById('algexpvslinb8').style.background = 'white';
  }

  
if (localStorage.getItem('algexpvslin9') == 1) {
  document.getElementById('algexpvslinb9').style.background = '#7fff00';
}
  else if (localStorage.getItem('algexpvslin9') == 0) {
  document.getElementById('algexpvslinb9').style.background = 'red';
  }
  else {
    document.getElementById('algexpvslinb9').style.background = 'white';
  }

  
if (localStorage.getItem('algexpvslin10') == 1) {
  document.getElementById('algexpvslinb10').style.background = '#7fff00';
}
  else if (localStorage.getItem('algexpvslin10') == 0) {
  document.getElementById('algexpvslinb10').style.background = 'red';
  }
  else {
    document.getElementById('algexpvslinb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('algexpvslin1');
    localStorage.removeItem('algexpvslin2');
    localStorage.removeItem('algexpvslin3');
    localStorage.removeItem('algexpvslin4');
    localStorage.removeItem('algexpvslin5');
    localStorage.removeItem('algexpvslin6');
    localStorage.removeItem('algexpvslin7');
    localStorage.removeItem('algexpvslin8');
    localStorage.removeItem('algexpvslin9');
    localStorage.removeItem('algexpvslin10');
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 