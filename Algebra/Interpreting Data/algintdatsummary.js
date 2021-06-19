



if (localStorage.getItem('algintdat1') == 1) {
  document.getElementById('algintdatb1').style.background = '#7fff00';
}
  else if (localStorage.getItem('algintdat1') == 0) {
  document.getElementById('algintdatb1').style.background = 'red';
  }
  else {
    document.getElementById('algintdatb1').style.background = 'white';
  }

if (localStorage.getItem('algintdat2') == 1) {
    document.getElementById('algintdatb2').style.background = '#7fff00';
  }
    else if (localStorage.getItem('algintdat2') == 0) {
    document.getElementById('algintdatb2').style.background = 'red';
    }
    else {
      document.getElementById('algintdatb2').style.background = 'white';
    }
  

if (localStorage.getItem('algintdat3') == 1) {
  document.getElementById('algintdatb3').style.background = '#7fff00';
}
  else if (localStorage.getItem('algintdat3') == 0) {
  document.getElementById('algintdatb3').style.background = 'red';
  }
  else {
    document.getElementById('algintdatb3').style.background = 'white';
  }

  
if (localStorage.getItem('algintdat4') == 1) {
  document.getElementById('algintdatb4').style.background = '#7fff00';
}
  else if (localStorage.getItem('algintdat4') == 0) {
  document.getElementById('algintdatb4').style.background = 'red';
  }
  else {
    document.getElementById('algintdatb4').style.background = 'white';
  }


  if (localStorage.getItem('algintdat5') == 1) {
    document.getElementById('algintdatb5').style.background = '#7fff00';
  }
    else if (localStorage.getItem('algintdat5') == 0) {
    document.getElementById('algintdatb5').style.background = 'red';
    }
    else {
      document.getElementById('algintdatb5').style.background = 'white';
    }


if (localStorage.getItem('algintdat6') == 1) {
  document.getElementById('algintdatb6').style.background = '#7fff00';
}
  else if (localStorage.getItem('algintdat6') == 0) {
  document.getElementById('algintdatb6').style.background = 'red';
  }
  else {
    document.getElementById('algintdatb6').style.background = 'white';
  }    


if (localStorage.getItem('algintdat7') == 1) {
  document.getElementById('algintdatb7').style.background = '#7fff00';
}
  else if (localStorage.getItem('algintdat7') == 0) {
  document.getElementById('algintdatb7').style.background = 'red';
  }
  else {
    document.getElementById('algintdatb7').style.background = 'white';
  }

  
if (localStorage.getItem('algintdat8') == 1) {
  document.getElementById('algintdatb8').style.background = '#7fff00';
}
  else if (localStorage.getItem('algintdat8') == 0) {
  document.getElementById('algintdatb8').style.background = 'red';
  }
  else {
    document.getElementById('algintdatb8').style.background = 'white';
  }

  
if (localStorage.getItem('algintdat9') == 1) {
  document.getElementById('algintdatb9').style.background = '#7fff00';
}
  else if (localStorage.getItem('algintdat9') == 0) {
  document.getElementById('algintdatb9').style.background = 'red';
  }
  else {
    document.getElementById('algintdatb9').style.background = 'white';
  }

  
if (localStorage.getItem('algintdat10') == 1) {
  document.getElementById('algintdatalgintdatb10').style.background = '#7fff00';
}
  else if (localStorage.getItem('algintdat10') == 0) {
  document.getElementById('algintdatb10').style.background = 'red';
  }
  else {
    document.getElementById('algintdatb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('algintdat1');
    localStorage.removeItem('algintdat2');
    localStorage.removeItem('algintdat3');
    localStorage.removeItem('algintdat4');
    localStorage.removeItem('algintdat5');
    localStorage.removeItem('algintdat6');
    localStorage.removeItem('algintdat7');
    localStorage.removeItem('algintdat8');
    localStorage.removeItem('algintdat9');
    localStorage.removeItem('algintdat10');
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 