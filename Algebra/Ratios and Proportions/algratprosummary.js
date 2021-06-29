



if (localStorage.getItem('algratpro1') == 1) {
  document.getElementById('algratprob1').style.background = '#7fff00';
}
  else if (localStorage.getItem('algratpro1') == 0) {
  document.getElementById('algratprob1').style.background = 'red';
  }
  else {
    document.getElementById('algratprob1').style.background = 'white';
  }

if (localStorage.getItem('algratpro2') == 1) {
    document.getElementById('algratprob2').style.background = '#7fff00';
  }
    else if (localStorage.getItem('algratpro2') == 0) {
    document.getElementById('algratprob2').style.background = 'red';
    }
    else {
      document.getElementById('algratprob2').style.background = 'white';
    }
  

if (localStorage.getItem('algratpro3') == 1) {
  document.getElementById('algratprob3').style.background = '#7fff00';
}
  else if (localStorage.getItem('algratpro3') == 0) {
  document.getElementById('algratprob3').style.background = 'red';
  }
  else {
    document.getElementById('algratprob3').style.background = 'white';
  }

  
if (localStorage.getItem('algratpro4') == 1) {
  document.getElementById('algratprob4').style.background = '#7fff00';
}
  else if (localStorage.getItem('algratpro4') == 0) {
  document.getElementById('algratprob4').style.background = 'red';
  }
  else {
    document.getElementById('algratprob4').style.background = 'white';
  }


  if (localStorage.getItem('algratpro5') == 1) {
    document.getElementById('algratprob5').style.background = '#7fff00';
  }
    else if (localStorage.getItem('algratpro5') == 0) {
    document.getElementById('algratprob5').style.background = 'red';
    }
    else {
      document.getElementById('algratprob5').style.background = 'white';
    }


if (localStorage.getItem('algratpro6') == 1) {
  document.getElementById('algratprob6').style.background = '#7fff00';
}
  else if (localStorage.getItem('algratpro6') == 0) {
  document.getElementById('algratprob6').style.background = 'red';
  }
  else {
    document.getElementById('algratprob6').style.background = 'white';
  }    


if (localStorage.getItem('algratpro7') == 1) {
  document.getElementById('algratprob7').style.background = '#7fff00';
}
  else if (localStorage.getItem('algratpro7') == 0) {
  document.getElementById('algratprob7').style.background = 'red';
  }
  else {
    document.getElementById('algratprob7').style.background = 'white';
  }

  
if (localStorage.getItem('algratpro8') == 1) {
  document.getElementById('algratprob8').style.background = '#7fff00';
}
  else if (localStorage.getItem('algratpro8') == 0) {
  document.getElementById('algratprob8').style.background = 'red';
  }
  else {
    document.getElementById('algratprob8').style.background = 'white';
  }

  
if (localStorage.getItem('algratpro9') == 1) {
  document.getElementById('algratprob9').style.background = '#7fff00';
}
  else if (localStorage.getItem('algratpro9') == 0) {
  document.getElementById('algratprob9').style.background = 'red';
  }
  else {
    document.getElementById('algratprob9').style.background = 'white';
  }

  
if (localStorage.getItem('algratpro10') == 1) {
  document.getElementById('algratproalgratprob10').style.background = '#7fff00';
}
  else if (localStorage.getItem('algratpro10') == 0) {
  document.getElementById('algratprob10').style.background = 'red';
  }
  else {
    document.getElementById('algratprob10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('algratpro1');
    localStorage.removeItem('algratpro2');
    localStorage.removeItem('algratpro3');
    localStorage.removeItem('algratpro4');
    localStorage.removeItem('algratpro5');
    localStorage.removeItem('algratpro6');
    localStorage.removeItem('algratpro7');
    localStorage.removeItem('algratpro8');
    localStorage.removeItem('algratpro9');
    localStorage.removeItem('algratpro10');
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 