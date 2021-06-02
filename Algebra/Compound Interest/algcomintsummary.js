



if (localStorage.getItem('algcomint1') == 1) {
  document.getElementById('algcomintb1').style.background = '#7fff00';
}
  else if (localStorage.getItem('algcomint1') == 0) {
  document.getElementById('algcomintb1').style.background = 'red';
  }
  else {
    document.getElementById('algcomintb1').style.background = 'white';
  }

if (localStorage.getItem('algcomint2') == 1) {
    document.getElementById('algcomintb2').style.background = '#7fff00';
  }
    else if (localStorage.getItem('algcomint2') == 0) {
    document.getElementById('algcomintb2').style.background = 'red';
    }
    else {
      document.getElementById('algcomintb2').style.background = 'white';
    }
  

if (localStorage.getItem('algcomint3') == 1) {
  document.getElementById('algcomintb3').style.background = '#7fff00';
}
  else if (localStorage.getItem('algcomint3') == 0) {
  document.getElementById('algcomintb3').style.background = 'red';
  }
  else {
    document.getElementById('algcomintb3').style.background = 'white';
  }

  
if (localStorage.getItem('algcomint4') == 1) {
  document.getElementById('algcomintb4').style.background = '#7fff00';
}
  else if (localStorage.getItem('algcomint4') == 0) {
  document.getElementById('algcomintb4').style.background = 'red';
  }
  else {
    document.getElementById('algcomintb4').style.background = 'white';
  }


  if (localStorage.getItem('algcomint5') == 1) {
    document.getElementById('algcomintb5').style.background = '#7fff00';
  }
    else if (localStorage.getItem('algcomint5') == 0) {
    document.getElementById('algcomintb5').style.background = 'red';
    }
    else {
      document.getElementById('algcomintb5').style.background = 'white';
    }


if (localStorage.getItem('algcomint6') == 1) {
  document.getElementById('algcomintb6').style.background = '#7fff00';
}
  else if (localStorage.getItem('algcomint6') == 0) {
  document.getElementById('algcomintb6').style.background = 'red';
  }
  else {
    document.getElementById('algcomintb6').style.background = 'white';
  }    


if (localStorage.getItem('algcomint7') == 1) {
  document.getElementById('algcomintb7').style.background = '#7fff00';
}
  else if (localStorage.getItem('algcomint7') == 0) {
  document.getElementById('algcomintb7').style.background = 'red';
  }
  else {
    document.getElementById('algcomintb7').style.background = 'white';
  }

  
if (localStorage.getItem('algcomint8') == 1) {
  document.getElementById('algcomintb8').style.background = '#7fff00';
}
  else if (localStorage.getItem('algcomint8') == 0) {
  document.getElementById('algcomintb8').style.background = 'red';
  }
  else {
    document.getElementById('algcomintb8').style.background = 'white';
  }

  
if (localStorage.getItem('algcomint9') == 1) {
  document.getElementById('algcomintb9').style.background = '#7fff00';
}
  else if (localStorage.getItem('algcomint9') == 0) {
  document.getElementById('algcomintb9').style.background = 'red';
  }
  else {
    document.getElementById('algcomintb9').style.background = 'white';
  }

  
if (localStorage.getItem('algcomint10') == 1) {
  document.getElementById('algcomintalgcomintb10').style.background = '#7fff00';
}
  else if (localStorage.getItem('algcomint10') == 0) {
  document.getElementById('algcomintb10').style.background = 'red';
  }
  else {
    document.getElementById('algcomintb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('algcomint1');
    localStorage.removeItem('algcomint2');
    localStorage.removeItem('algcomint3');
    localStorage.removeItem('algcomint4');
    localStorage.removeItem('algcomint5');
    localStorage.removeItem('algcomint6');
    localStorage.removeItem('algcomint7');
    localStorage.removeItem('algcomint8');
    localStorage.removeItem('algcomint9');
    localStorage.removeItem('algcomint10');
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 