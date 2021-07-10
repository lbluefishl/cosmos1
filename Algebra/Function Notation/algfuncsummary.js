



if (localStorage.getItem('algfunc1') == 1) {
  document.getElementById('algfuncb1').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algfunc1') == 0) {
  document.getElementById('algfuncb1').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algfuncb1').style.background = 'white';
  }

if (localStorage.getItem('algfunc2') == 1) {
    document.getElementById('algfuncb2').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('algfunc2') == 0) {
    document.getElementById('algfuncb2').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('algfuncb2').style.background = 'white';
    }
  

if (localStorage.getItem('algfunc3') == 1) {
  document.getElementById('algfuncb3').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algfunc3') == 0) {
  document.getElementById('algfuncb3').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algfuncb3').style.background = 'white';
  }

  
if (localStorage.getItem('algfunc4') == 1) {
  document.getElementById('algfuncb4').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algfunc4') == 0) {
  document.getElementById('algfuncb4').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algfuncb4').style.background = 'white';
  }


  if (localStorage.getItem('algfunc5') == 1) {
    document.getElementById('algfuncb5').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('algfunc5') == 0) {
    document.getElementById('algfuncb5').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('algfuncb5').style.background = 'white';
    }


if (localStorage.getItem('algfunc6') == 1) {
  document.getElementById('algfuncb6').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algfunc6') == 0) {
  document.getElementById('algfuncb6').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algfuncb6').style.background = 'white';
  }    


if (localStorage.getItem('algfunc7') == 1) {
  document.getElementById('algfuncb7').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algfunc7') == 0) {
  document.getElementById('algfuncb7').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algfuncb7').style.background = 'white';
  }

  
if (localStorage.getItem('algfunc8') == 1) {
  document.getElementById('algfuncb8').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algfunc8') == 0) {
  document.getElementById('algfuncb8').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algfuncb8').style.background = 'white';
  }

  
if (localStorage.getItem('algfunc9') == 1) {
  document.getElementById('algfuncb9').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algfunc9') == 0) {
  document.getElementById('algfuncb9').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algfuncb9').style.background = 'white';
  }

  
if (localStorage.getItem('algfunc10') == 1) {
  document.getElementById('algfuncb10').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algfunc10') == 0) {
  document.getElementById('algfuncb10').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algfuncb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('algfunc1');
    localStorage.removeItem('algfunc2');
    localStorage.removeItem('algfunc3');
    localStorage.removeItem('algfunc4');
    localStorage.removeItem('algfunc5');
    localStorage.removeItem('algfunc6');
    localStorage.removeItem('algfunc7');
    localStorage.removeItem('algfunc8');
    localStorage.removeItem('algfunc9');
    localStorage.removeItem('algfunc10');
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 