



if (localStorage.getItem('algconprotwotab1') == 1) {
  document.getElementById('algconprotwotabb1').style.background = '#7fff00';
}
  else if (localStorage.getItem('algconprotwotab1') == 0) {
  document.getElementById('algconprotwotabb1').style.background = 'red';
  }
  else {
    document.getElementById('algconprotwotabb1').style.background = 'white';
  }

if (localStorage.getItem('algconprotwotab2') == 1) {
    document.getElementById('algconprotwotabb2').style.background = '#7fff00';
  }
    else if (localStorage.getItem('algconprotwotab2') == 0) {
    document.getElementById('algconprotwotabb2').style.background = 'red';
    }
    else {
      document.getElementById('algconprotwotabb2').style.background = 'white';
    }
  

if (localStorage.getItem('algconprotwotab3') == 1) {
  document.getElementById('algconprotwotabb3').style.background = '#7fff00';
}
  else if (localStorage.getItem('algconprotwotab3') == 0) {
  document.getElementById('algconprotwotabb3').style.background = 'red';
  }
  else {
    document.getElementById('algconprotwotabb3').style.background = 'white';
  }

  
if (localStorage.getItem('algconprotwotab4') == 1) {
  document.getElementById('algconprotwotabb4').style.background = '#7fff00';
}
  else if (localStorage.getItem('algconprotwotab4') == 0) {
  document.getElementById('algconprotwotabb4').style.background = 'red';
  }
  else {
    document.getElementById('algconprotwotabb4').style.background = 'white';
  }


  if (localStorage.getItem('algconprotwotab5') == 1) {
    document.getElementById('algconprotwotabb5').style.background = '#7fff00';
  }
    else if (localStorage.getItem('algconprotwotab5') == 0) {
    document.getElementById('algconprotwotabb5').style.background = 'red';
    }
    else {
      document.getElementById('algconprotwotabb5').style.background = 'white';
    }


if (localStorage.getItem('algconprotwotab6') == 1) {
  document.getElementById('algconprotwotabb6').style.background = '#7fff00';
}
  else if (localStorage.getItem('algconprotwotab6') == 0) {
  document.getElementById('algconprotwotabb6').style.background = 'red';
  }
  else {
    document.getElementById('algconprotwotabb6').style.background = 'white';
  }    


if (localStorage.getItem('algconprotwotab7') == 1) {
  document.getElementById('algconprotwotabb7').style.background = '#7fff00';
}
  else if (localStorage.getItem('algconprotwotab7') == 0) {
  document.getElementById('algconprotwotabb7').style.background = 'red';
  }
  else {
    document.getElementById('algconprotwotabb7').style.background = 'white';
  }

  
if (localStorage.getItem('algconprotwotab8') == 1) {
  document.getElementById('algconprotwotabb8').style.background = '#7fff00';
}
  else if (localStorage.getItem('algconprotwotab8') == 0) {
  document.getElementById('algconprotwotabb8').style.background = 'red';
  }
  else {
    document.getElementById('algconprotwotabb8').style.background = 'white';
  }

  
if (localStorage.getItem('algconprotwotab9') == 1) {
  document.getElementById('algconprotwotabb9').style.background = '#7fff00';
}
  else if (localStorage.getItem('algconprotwotab9') == 0) {
  document.getElementById('algconprotwotabb9').style.background = 'red';
  }
  else {
    document.getElementById('algconprotwotabb9').style.background = 'white';
  }

  
if (localStorage.getItem('algconprotwotab10') == 1) {
  document.getElementById('algconprotwotabb10').style.background = '#7fff00';
}
  else if (localStorage.getItem('algconprotwotab10') == 0) {
  document.getElementById('algconprotwotabb10').style.background = 'red';
  }
  else {
    document.getElementById('algconprotwotabb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('algconprotwotab1');
    localStorage.removeItem('algconprotwotab2');
    localStorage.removeItem('algconprotwotab3');
    localStorage.removeItem('algconprotwotab4');
    localStorage.removeItem('algconprotwotab5');
    localStorage.removeItem('algconprotwotab6');
    localStorage.removeItem('algconprotwotab7');
    localStorage.removeItem('algconprotwotab8');
    localStorage.removeItem('algconprotwotab9');
    localStorage.removeItem('algconprotwotab10');
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 