



if (localStorage.getItem('biopropwater1') == 1) {
  document.getElementById('biopropwaterb1').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('biopropwater1') == 0) {
  document.getElementById('biopropwaterb1').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('biopropwaterb1').style.background = 'white';
  }

if (localStorage.getItem('biopropwater2') == 1) {
    document.getElementById('biopropwaterb2').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('biopropwater2') == 0) {
    document.getElementById('biopropwaterb2').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('biopropwaterb2').style.background = 'white';
    }
  

if (localStorage.getItem('biopropwater3') == 1) {
  document.getElementById('biopropwaterb3').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('biopropwater3') == 0) {
  document.getElementById('biopropwaterb3').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('biopropwaterb3').style.background = 'white';
  }

  
if (localStorage.getItem('biopropwater4') == 1) {
  document.getElementById('biopropwaterb4').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('biopropwater4') == 0) {
  document.getElementById('biopropwaterb4').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('biopropwaterb4').style.background = 'white';
  }


  if (localStorage.getItem('biopropwater5') == 1) {
    document.getElementById('biopropwaterb5').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('biopropwater5') == 0) {
    document.getElementById('biopropwaterb5').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('biopropwaterb5').style.background = 'white';
    }


if (localStorage.getItem('biopropwater6') == 1) {
  document.getElementById('biopropwaterb6').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('biopropwater6') == 0) {
  document.getElementById('biopropwaterb6').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('biopropwaterb6').style.background = 'white';
  }    


if (localStorage.getItem('biopropwater7') == 1) {
  document.getElementById('biopropwaterb7').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('biopropwater7') == 0) {
  document.getElementById('biopropwaterb7').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('biopropwaterb7').style.background = 'white';
  }

  
if (localStorage.getItem('biopropwater8') == 1) {
  document.getElementById('biopropwaterb8').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('biopropwater8') == 0) {
  document.getElementById('biopropwaterb8').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('biopropwaterb8').style.background = 'white';
  }

  
if (localStorage.getItem('biopropwater9') == 1) {
  document.getElementById('biopropwaterb9').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('biopropwater9') == 0) {
  document.getElementById('biopropwaterb9').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('biopropwaterb9').style.background = 'white';
  }

  
if (localStorage.getItem('biopropwater10') == 1) {
  document.getElementById('biopropwaterb10').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('biopropwater10') == 0) {
  document.getElementById('biopropwaterb10').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('biopropwaterb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('biopropwater1');
    localStorage.removeItem('biopropwater2');
    localStorage.removeItem('biopropwater3');
    localStorage.removeItem('biopropwater4');
    localStorage.removeItem('biopropwater5');
    localStorage.removeItem('biopropwater6');
    localStorage.removeItem('biopropwater7');
    localStorage.removeItem('biopropwater8');
    localStorage.removeItem('biopropwater9');
    localStorage.removeItem('biopropwater10');
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 