



if (localStorage.getItem('algonevarsta1') == 1) {
  document.getElementById('algonevarstab1').style.background = '#7fff00';
}
  else if (localStorage.getItem('algonevarsta1') == 0) {
  document.getElementById('algonevarstab1').style.background = 'red';
  }
  else {
    document.getElementById('algonevarstab1').style.background = 'white';
  }

if (localStorage.getItem('algonevarsta2') == 1) {
    document.getElementById('algonevarstab2').style.background = '#7fff00';
  }
    else if (localStorage.getItem('algonevarsta2') == 0) {
    document.getElementById('algonevarstab2').style.background = 'red';
    }
    else {
      document.getElementById('algonevarstab2').style.background = 'white';
    }
  

if (localStorage.getItem('algonevarsta3') == 1) {
  document.getElementById('algonevarstab3').style.background = '#7fff00';
}
  else if (localStorage.getItem('algonevarsta3') == 0) {
  document.getElementById('algonevarstab3').style.background = 'red';
  }
  else {
    document.getElementById('algonevarstab3').style.background = 'white';
  }

  
if (localStorage.getItem('algonevarsta4') == 1) {
  document.getElementById('algonevarstab4').style.background = '#7fff00';
}
  else if (localStorage.getItem('algonevarsta4') == 0) {
  document.getElementById('algonevarstab4').style.background = 'red';
  }
  else {
    document.getElementById('algonevarstab4').style.background = 'white';
  }


  if (localStorage.getItem('algonevarsta5') == 1) {
    document.getElementById('algonevarstab5').style.background = '#7fff00';
  }
    else if (localStorage.getItem('algonevarsta5') == 0) {
    document.getElementById('algonevarstab5').style.background = 'red';
    }
    else {
      document.getElementById('algonevarstab5').style.background = 'white';
    }


if (localStorage.getItem('algonevarsta6') == 1) {
  document.getElementById('algonevarstab6').style.background = '#7fff00';
}
  else if (localStorage.getItem('algonevarsta6') == 0) {
  document.getElementById('algonevarstab6').style.background = 'red';
  }
  else {
    document.getElementById('algonevarstab6').style.background = 'white';
  }    


if (localStorage.getItem('algonevarsta7') == 1) {
  document.getElementById('algonevarstab7').style.background = '#7fff00';
}
  else if (localStorage.getItem('algonevarsta7') == 0) {
  document.getElementById('algonevarstab7').style.background = 'red';
  }
  else {
    document.getElementById('algonevarstab7').style.background = 'white';
  }

  
if (localStorage.getItem('algonevarsta8') == 1) {
  document.getElementById('algonevarstab8').style.background = '#7fff00';
}
  else if (localStorage.getItem('algonevarsta8') == 0) {
  document.getElementById('algonevarstab8').style.background = 'red';
  }
  else {
    document.getElementById('algonevarstab8').style.background = 'white';
  }

  
if (localStorage.getItem('algonevarsta9') == 1) {
  document.getElementById('algonevarstab9').style.background = '#7fff00';
}
  else if (localStorage.getItem('algonevarsta9') == 0) {
  document.getElementById('algonevarstab9').style.background = 'red';
  }
  else {
    document.getElementById('algonevarstab9').style.background = 'white';
  }

  
if (localStorage.getItem('algonevarsta10') == 1) {
  document.getElementById('algonevarstaalgonevarstab10').style.background = '#7fff00';
}
  else if (localStorage.getItem('algonevarsta10') == 0) {
  document.getElementById('algonevarstab10').style.background = 'red';
  }
  else {
    document.getElementById('algonevarstab10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('algonevarsta1');
    localStorage.removeItem('algonevarsta2');
    localStorage.removeItem('algonevarsta3');
    localStorage.removeItem('algonevarsta4');
    localStorage.removeItem('algonevarsta5');
    localStorage.removeItem('algonevarsta6');
    localStorage.removeItem('algonevarsta7');
    localStorage.removeItem('algonevarsta8');
    localStorage.removeItem('algonevarsta9');
    localStorage.removeItem('algonevarsta10');
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 