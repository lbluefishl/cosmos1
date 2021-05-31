



if (localStorage.getItem('biofbloop1') == 1) {
  document.getElementById('biofbloopb1').style.background = '#7fff00';
}
  else if (localStorage.getItem('biofbloop1') == 0) {
  document.getElementById('biofbloopb1').style.background = 'red';
  }
  else {
    document.getElementById('biofbloopb1').style.background = 'white';
  }

if (localStorage.getItem('biofbloop2') == 1) {
    document.getElementById('biofbloopb2').style.background = '#7fff00';
  }
    else if (localStorage.getItem('biofbloop2') == 0) {
    document.getElementById('biofbloopb2').style.background = 'red';
    }
    else {
      document.getElementById('biofbloopb2').style.background = 'white';
    }
  

if (localStorage.getItem('biofbloop3') == 1) {
  document.getElementById('biofbloopb3').style.background = '#7fff00';
}
  else if (localStorage.getItem('biofbloop3') == 0) {
  document.getElementById('biofbloopb3').style.background = 'red';
  }
  else {
    document.getElementById('biofbloop3').style.background = 'white';
  }

  
if (localStorage.getItem('biofbloop4') == 1) {
  document.getElementById('biofbloopb4').style.background = '#7fff00';
}
  else if (localStorage.getItem('biofbloop4') == 0) {
  document.getElementById('biofbloopb4').style.background = 'red';
  }
  else {
    document.getElementById('biofbloopb4').style.background = 'white';
  }


  if (localStorage.getItem('biofbloop5') == 1) {
    document.getElementById('biofbloopb5').style.background = '#7fff00';
  }
    else if (localStorage.getItem('biofbloop5') == 0) {
    document.getElementById('biofbloopb5').style.background = 'red';
    }
    else {
      document.getElementById('biofbloopb5').style.background = 'white';
    }


if (localStorage.getItem('biofbloop6') == 1) {
  document.getElementById('biofbloopb6').style.background = '#7fff00';
}
  else if (localStorage.getItem('biofbloop6') == 0) {
  document.getElementById('biofbloopb6').style.background = 'red';
  }
  else {
    document.getElementById('biofbloopb6').style.background = 'white';
  }    


if (localStorage.getItem('biofbloop7') == 1) {
  document.getElementById('biofbloopb7').style.background = '#7fff00';
}
  else if (localStorage.getItem('biofbloop7') == 0) {
  document.getElementById('biofbloopb7').style.background = 'red';
  }
  else {
    document.getElementById('biofbloopb7').style.background = 'white';
  }

  
if (localStorage.getItem('biofbloop8') == 1) {
  document.getElementById('biofbloopb8').style.background = '#7fff00';
}
  else if (localStorage.getItem('biofbloop8') == 0) {
  document.getElementById('biofbloopb8').style.background = 'red';
  }
  else {
    document.getElementById('biofbloopb8').style.background = 'white';
  }

  
if (localStorage.getItem('biofbloop9') == 1) {
  document.getElementById('biofbloopb9').style.background = '#7fff00';
}
  else if (localStorage.getItem('biofbloop9') == 0) {
  document.getElementById('biofbloopb9').style.background = 'red';
  }
  else {
    document.getElementById('biofbloopb9').style.background = 'white';
  }

  
if (localStorage.getItem('biofbloop10') == 1) {
  document.getElementById('biofbloopbiofbloopb10').style.background = '#7fff00';
}
  else if (localStorage.getItem('biofbloop10') == 0) {
  document.getElementById('biofbloopb10').style.background = 'red';
  }
  else {
    document.getElementById('biofbloopb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem(biofbloopb1);
    localStorage.removeItem(biofbloopb2);
    localStorage.removeItem(biofbloopb3);
    localStorage.removeItem(biofbloopb4);
    localStorage.removeItem(biofbloopb5);
    localStorage.removeItem(biofbloopb6);
    localStorage.removeItem(biofbloopb7);
    localStorage.removeItem(biofbloopb8);
    localStorage.removeItem(biofbloopb9);
    localStorage.removeItem(biofbloopb10);
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 