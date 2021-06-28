



if (localStorage.getItem('algcomnum1') == 1) {
  document.getElementById('algcomnumb1').style.background = '#7fff00';
}
  else if (localStorage.getItem('algcomnum1') == 0) {
  document.getElementById('algcomnumb1').style.background = 'red';
  }
  else {
    document.getElementById('algcomnumb1').style.background = 'white';
  }

if (localStorage.getItem('algcomnum2') == 1) {
    document.getElementById('algcomnumb2').style.background = '#7fff00';
  }
    else if (localStorage.getItem('algcomnum2') == 0) {
    document.getElementById('algcomnumb2').style.background = 'red';
    }
    else {
      document.getElementById('algcomnumb2').style.background = 'white';
    }
  

if (localStorage.getItem('algcomnum3') == 1) {
  document.getElementById('algcomnumb3').style.background = '#7fff00';
}
  else if (localStorage.getItem('algcomnum3') == 0) {
  document.getElementById('algcomnumb3').style.background = 'red';
  }
  else {
    document.getElementById('algcomnumb3').style.background = 'white';
  }

  
if (localStorage.getItem('algcomnum4') == 1) {
  document.getElementById('algcomnumb4').style.background = '#7fff00';
}
  else if (localStorage.getItem('algcomnum4') == 0) {
  document.getElementById('algcomnumb4').style.background = 'red';
  }
  else {
    document.getElementById('algcomnumb4').style.background = 'white';
  }


  if (localStorage.getItem('algcomnum5') == 1) {
    document.getElementById('algcomnumb5').style.background = '#7fff00';
  }
    else if (localStorage.getItem('algcomnum5') == 0) {
    document.getElementById('algcomnumb5').style.background = 'red';
    }
    else {
      document.getElementById('algcomnumb5').style.background = 'white';
    }


if (localStorage.getItem('algcomnum6') == 1) {
  document.getElementById('algcomnumb6').style.background = '#7fff00';
}
  else if (localStorage.getItem('algcomnum6') == 0) {
  document.getElementById('algcomnumb6').style.background = 'red';
  }
  else {
    document.getElementById('algcomnumb6').style.background = 'white';
  }    


if (localStorage.getItem('algcomnum7') == 1) {
  document.getElementById('algcomnumb7').style.background = '#7fff00';
}
  else if (localStorage.getItem('algcomnum7') == 0) {
  document.getElementById('algcomnumb7').style.background = 'red';
  }
  else {
    document.getElementById('algcomnumb7').style.background = 'white';
  }

  
if (localStorage.getItem('algcomnum8') == 1) {
  document.getElementById('algcomnumb8').style.background = '#7fff00';
}
  else if (localStorage.getItem('algcomnum8') == 0) {
  document.getElementById('algcomnumb8').style.background = 'red';
  }
  else {
    document.getElementById('algcomnumb8').style.background = 'white';
  }

  
if (localStorage.getItem('algcomnum9') == 1) {
  document.getElementById('algcomnumb9').style.background = '#7fff00';
}
  else if (localStorage.getItem('algcomnum9') == 0) {
  document.getElementById('algcomnumb9').style.background = 'red';
  }
  else {
    document.getElementById('algcomnumb9').style.background = 'white';
  }

  
if (localStorage.getItem('algcomnum10') == 1) {
  document.getElementById('algcomnumalgcomnumb10').style.background = '#7fff00';
}
  else if (localStorage.getItem('algcomnum10') == 0) {
  document.getElementById('algcomnumb10').style.background = 'red';
  }
  else {
    document.getElementById('algcomnumb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('algcomnum1');
    localStorage.removeItem('algcomnum2');
    localStorage.removeItem('algcomnum3');
    localStorage.removeItem('algcomnum4');
    localStorage.removeItem('algcomnum5');
    localStorage.removeItem('algcomnum6');
    localStorage.removeItem('algcomnum7');
    localStorage.removeItem('algcomnum8');
    localStorage.removeItem('algcomnum9');
    localStorage.removeItem('algcomnum10');
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 