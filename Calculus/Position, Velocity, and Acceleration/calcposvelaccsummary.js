



if (localStorage.getItem('calcposvelacc1') == 1) {
  document.getElementById('calcposvelaccb1').style.background = '#7fff00';
}
  else if (localStorage.getItem('calcposvelacc1') == 0) {
  document.getElementById('calcposvelaccb1').style.background = 'red';
  }
  else {
    document.getElementById('calcposvelaccb1').style.background = 'white';
  }

if (localStorage.getItem('calcposvelacc2') == 1) {
    document.getElementById('calcposvelaccb2').style.background = '#7fff00';
  }
    else if (localStorage.getItem('calcposvelacc2') == 0) {
    document.getElementById('calcposvelaccb2').style.background = 'red';
    }
    else {
      document.getElementById('calcposvelaccb2').style.background = 'white';
    }
  

if (localStorage.getItem('calcposvelacc3') == 1) {
  document.getElementById('calcposvelaccb3').style.background = '#7fff00';
}
  else if (localStorage.getItem('calcposvelacc3') == 0) {
  document.getElementById('calcposvelaccb3').style.background = 'red';
  }
  else {
    document.getElementById('calcposvelaccb3').style.background = 'white';
  }

  
if (localStorage.getItem('calcposvelacc4') == 1) {
  document.getElementById('calcposvelaccb4').style.background = '#7fff00';
}
  else if (localStorage.getItem('calcposvelacc4') == 0) {
  document.getElementById('calcposvelaccb4').style.background = 'red';
  }
  else {
    document.getElementById('calcposvelaccb4').style.background = 'white';
  }


  if (localStorage.getItem('calcposvelacc5') == 1) {
    document.getElementById('calcposvelaccb5').style.background = '#7fff00';
  }
    else if (localStorage.getItem('calcposvelacc5') == 0) {
    document.getElementById('calcposvelaccb5').style.background = 'red';
    }
    else {
      document.getElementById('calcposvelaccb5').style.background = 'white';
    }


if (localStorage.getItem('calcposvelacc6') == 1) {
  document.getElementById('calcposvelaccb6').style.background = '#7fff00';
}
  else if (localStorage.getItem('calcposvelacc6') == 0) {
  document.getElementById('calcposvelaccb6').style.background = 'red';
  }
  else {
    document.getElementById('calcposvelaccb6').style.background = 'white';
  }    


if (localStorage.getItem('calcposvelacc7') == 1) {
  document.getElementById('calcposvelaccb7').style.background = '#7fff00';
}
  else if (localStorage.getItem('calcposvelacc7') == 0) {
  document.getElementById('calcposvelaccb7').style.background = 'red';
  }
  else {
    document.getElementById('calcposvelaccb7').style.background = 'white';
  }

  
if (localStorage.getItem('calcposvelacc8') == 1) {
  document.getElementById('calcposvelaccb8').style.background = '#7fff00';
}
  else if (localStorage.getItem('calcposvelacc8') == 0) {
  document.getElementById('calcposvelaccb8').style.background = 'red';
  }
  else {
    document.getElementById('calcposvelaccb8').style.background = 'white';
  }

  
if (localStorage.getItem('calcposvelacc9') == 1) {
  document.getElementById('calcposvelaccb9').style.background = '#7fff00';
}
  else if (localStorage.getItem('calcposvelacc9') == 0) {
  document.getElementById('calcposvelaccb9').style.background = 'red';
  }
  else {
    document.getElementById('calcposvelaccb9').style.background = 'white';
  }

  
if (localStorage.getItem('calcposvelacc10') == 1) {
  document.getElementById('calcposvelaccb10').style.background = '#7fff00';
}
  else if (localStorage.getItem('calcposvelacc10') == 0) {
  document.getElementById('calcposvelaccb10').style.background = 'red';
  }
  else {
    document.getElementById('calcposvelaccb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('calcposvelacc1');
    localStorage.removeItem('calcposvelacc2');
    localStorage.removeItem('calcposvelacc3');
    localStorage.removeItem('calcposvelacc4');
    localStorage.removeItem('calcposvelacc5');
    localStorage.removeItem('calcposvelacc6');
    localStorage.removeItem('calcposvelacc7');
    localStorage.removeItem('calcposvelacc8');
    localStorage.removeItem('calcposvelacc9');
    localStorage.removeItem('calcposvelacc10');
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 