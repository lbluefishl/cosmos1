



if (localStorage.getItem('algmode1') == 1) {
  document.getElementById('algmodeb1').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algmode1') == 0) {
  document.getElementById('algmodeb1').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algmodeb1').style.background = 'white';
  }

if (localStorage.getItem('algmode2') == 1) {
    document.getElementById('algmodeb2').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('algmode2') == 0) {
    document.getElementById('algmodeb2').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('algmodeb2').style.background = 'white';
    }
  

if (localStorage.getItem('algmode3') == 1) {
  document.getElementById('algmodeb3').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algmode3') == 0) {
  document.getElementById('algmodeb3').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algmodeb3').style.background = 'white';
  }

  
if (localStorage.getItem('algmode4') == 1) {
  document.getElementById('algmodeb4').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algmode4') == 0) {
  document.getElementById('algmodeb4').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algmodeb4').style.background = 'white';
  }


  if (localStorage.getItem('algmode5') == 1) {
    document.getElementById('algmodeb5').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('algmode5') == 0) {
    document.getElementById('algmodeb5').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('algmodeb5').style.background = 'white';
    }


if (localStorage.getItem('algmode6') == 1) {
  document.getElementById('algmodeb6').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algmode6') == 0) {
  document.getElementById('algmodeb6').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algmodeb6').style.background = 'white';
  }    


if (localStorage.getItem('algmode7') == 1) {
  document.getElementById('algmodeb7').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algmode7') == 0) {
  document.getElementById('algmodeb7').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algmodeb7').style.background = 'white';
  }

  
if (localStorage.getItem('algmode8') == 1) {
  document.getElementById('algmodeb8').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algmode8') == 0) {
  document.getElementById('algmodeb8').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algmodeb8').style.background = 'white';
  }

  
if (localStorage.getItem('algmode9') == 1) {
  document.getElementById('algmodeb9').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algmode9') == 0) {
  document.getElementById('algmodeb9').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algmodeb9').style.background = 'white';
  }

  
if (localStorage.getItem('algmode10') == 1) {
  document.getElementById('algmodeb10').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algmode10') == 0) {
  document.getElementById('algmodeb10').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algmodeb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('algmode1');
    localStorage.removeItem('algmode2');
    localStorage.removeItem('algmode3');
    localStorage.removeItem('algmode4');
    localStorage.removeItem('algmode5');
    localStorage.removeItem('algmode6');
    localStorage.removeItem('algmode7');
    localStorage.removeItem('algmode8');
    localStorage.removeItem('algmode9');
    localStorage.removeItem('algmode10');
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 