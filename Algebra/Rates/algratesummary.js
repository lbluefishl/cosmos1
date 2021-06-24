



if (localStorage.getItem('algrate1') == 1) {
  document.getElementById('algrateb1').style.background = '#7fff00';
}
  else if (localStorage.getItem('algrate1') == 0) {
  document.getElementById('algrateb1').style.background = 'red';
  }
  else {
    document.getElementById('algrateb1').style.background = 'white';
  }

if (localStorage.getItem('algrate2') == 1) {
    document.getElementById('algrateb2').style.background = '#7fff00';
  }
    else if (localStorage.getItem('algrate2') == 0) {
    document.getElementById('algrateb2').style.background = 'red';
    }
    else {
      document.getElementById('algrateb2').style.background = 'white';
    }
  

if (localStorage.getItem('algrate3') == 1) {
  document.getElementById('algrateb3').style.background = '#7fff00';
}
  else if (localStorage.getItem('algrate3') == 0) {
  document.getElementById('algrateb3').style.background = 'red';
  }
  else {
    document.getElementById('algrateb3').style.background = 'white';
  }

  
if (localStorage.getItem('algrate4') == 1) {
  document.getElementById('algrateb4').style.background = '#7fff00';
}
  else if (localStorage.getItem('algrate4') == 0) {
  document.getElementById('algrateb4').style.background = 'red';
  }
  else {
    document.getElementById('algrateb4').style.background = 'white';
  }


  if (localStorage.getItem('algrate5') == 1) {
    document.getElementById('algrateb5').style.background = '#7fff00';
  }
    else if (localStorage.getItem('algrate5') == 0) {
    document.getElementById('algrateb5').style.background = 'red';
    }
    else {
      document.getElementById('algrateb5').style.background = 'white';
    }


if (localStorage.getItem('algrate6') == 1) {
  document.getElementById('algrateb6').style.background = '#7fff00';
}
  else if (localStorage.getItem('algrate6') == 0) {
  document.getElementById('algrateb6').style.background = 'red';
  }
  else {
    document.getElementById('algrateb6').style.background = 'white';
  }    


if (localStorage.getItem('algrate7') == 1) {
  document.getElementById('algrateb7').style.background = '#7fff00';
}
  else if (localStorage.getItem('algrate7') == 0) {
  document.getElementById('algrateb7').style.background = 'red';
  }
  else {
    document.getElementById('algrateb7').style.background = 'white';
  }

  
if (localStorage.getItem('algrate8') == 1) {
  document.getElementById('algrateb8').style.background = '#7fff00';
}
  else if (localStorage.getItem('algrate8') == 0) {
  document.getElementById('algrateb8').style.background = 'red';
  }
  else {
    document.getElementById('algrateb8').style.background = 'white';
  }

  
if (localStorage.getItem('algrate9') == 1) {
  document.getElementById('algrateb9').style.background = '#7fff00';
}
  else if (localStorage.getItem('algrate9') == 0) {
  document.getElementById('algrateb9').style.background = 'red';
  }
  else {
    document.getElementById('algrateb9').style.background = 'white';
  }

  
if (localStorage.getItem('algrate10') == 1) {
  document.getElementById('algratealgrateb10').style.background = '#7fff00';
}
  else if (localStorage.getItem('algrate10') == 0) {
  document.getElementById('algrateb10').style.background = 'red';
  }
  else {
    document.getElementById('algrateb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('algrate1');
    localStorage.removeItem('algrate2');
    localStorage.removeItem('algrate3');
    localStorage.removeItem('algrate4');
    localStorage.removeItem('algrate5');
    localStorage.removeItem('algrate6');
    localStorage.removeItem('algrate7');
    localStorage.removeItem('algrate8');
    localStorage.removeItem('algrate9');
    localStorage.removeItem('algrate10');
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 