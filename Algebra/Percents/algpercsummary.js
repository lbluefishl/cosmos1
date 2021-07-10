



if (localStorage.getItem('algperc1') == 1) {
  document.getElementById('algpercb1').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algperc1') == 0) {
  document.getElementById('algpercb1').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algpercb1').style.background = 'white';
  }

if (localStorage.getItem('algperc2') == 1) {
    document.getElementById('algpercb2').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('algperc2') == 0) {
    document.getElementById('algpercb2').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('algpercb2').style.background = 'white';
    }
  

if (localStorage.getItem('algperc3') == 1) {
  document.getElementById('algpercb3').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algperc3') == 0) {
  document.getElementById('algpercb3').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algpercb3').style.background = 'white';
  }

  
if (localStorage.getItem('algperc4') == 1) {
  document.getElementById('algpercb4').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algperc4') == 0) {
  document.getElementById('algpercb4').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algpercb4').style.background = 'white';
  }


  if (localStorage.getItem('algperc5') == 1) {
    document.getElementById('algpercb5').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('algperc5') == 0) {
    document.getElementById('algpercb5').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('algpercb5').style.background = 'white';
    }


if (localStorage.getItem('algperc6') == 1) {
  document.getElementById('algpercb6').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algperc6') == 0) {
  document.getElementById('algpercb6').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algpercb6').style.background = 'white';
  }    


if (localStorage.getItem('algperc7') == 1) {
  document.getElementById('algpercb7').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algperc7') == 0) {
  document.getElementById('algpercb7').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algpercb7').style.background = 'white';
  }

  
if (localStorage.getItem('algperc8') == 1) {
  document.getElementById('algpercb8').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algperc8') == 0) {
  document.getElementById('algpercb8').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algpercb8').style.background = 'white';
  }

  
if (localStorage.getItem('algperc9') == 1) {
  document.getElementById('algpercb9').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algperc9') == 0) {
  document.getElementById('algpercb9').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algpercb9').style.background = 'white';
  }

  
if (localStorage.getItem('algperc10') == 1) {
  document.getElementById('algpercb10').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algperc10') == 0) {
  document.getElementById('algpercb10').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algpercb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('algperc1');
    localStorage.removeItem('algperc2');
    localStorage.removeItem('algperc3');
    localStorage.removeItem('algperc4');
    localStorage.removeItem('algperc5');
    localStorage.removeItem('algperc6');
    localStorage.removeItem('algperc7');
    localStorage.removeItem('algperc8');
    localStorage.removeItem('algperc9');
    localStorage.removeItem('algperc10');
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 