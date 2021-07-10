



if (localStorage.getItem('algsysworpro1') == 1) {
  document.getElementById('algsysworprob1').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algsysworpro1') == 0) {
  document.getElementById('algsysworprob1').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algsysworprob1').style.background = 'white';
  }

if (localStorage.getItem('algsysworpro2') == 1) {
    document.getElementById('algsysworprob2').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('algsysworpro2') == 0) {
    document.getElementById('algsysworprob2').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('algsysworprob2').style.background = 'white';
    }
  

if (localStorage.getItem('algsysworpro3') == 1) {
  document.getElementById('algsysworprob3').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algsysworpro3') == 0) {
  document.getElementById('algsysworprob3').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algsysworprob3').style.background = 'white';
  }

  
if (localStorage.getItem('algsysworpro4') == 1) {
  document.getElementById('algsysworprob4').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algsysworpro4') == 0) {
  document.getElementById('algsysworprob4').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algsysworprob4').style.background = 'white';
  }


  if (localStorage.getItem('algsysworpro5') == 1) {
    document.getElementById('algsysworprob5').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('algsysworpro5') == 0) {
    document.getElementById('algsysworprob5').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('algsysworprob5').style.background = 'white';
    }


if (localStorage.getItem('algsysworpro6') == 1) {
  document.getElementById('algsysworprob6').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algsysworpro6') == 0) {
  document.getElementById('algsysworprob6').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algsysworprob6').style.background = 'white';
  }    


if (localStorage.getItem('algsysworpro7') == 1) {
  document.getElementById('algsysworprob7').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algsysworpro7') == 0) {
  document.getElementById('algsysworprob7').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algsysworprob7').style.background = 'white';
  }

  
if (localStorage.getItem('algsysworpro8') == 1) {
  document.getElementById('algsysworprob8').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algsysworpro8') == 0) {
  document.getElementById('algsysworprob8').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algsysworprob8').style.background = 'white';
  }

  
if (localStorage.getItem('algsysworpro9') == 1) {
  document.getElementById('algsysworprob9').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algsysworpro9') == 0) {
  document.getElementById('algsysworprob9').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algsysworprob9').style.background = 'white';
  }

  
if (localStorage.getItem('algsysworpro10') == 1) {
  document.getElementById('algsysworprob10').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algsysworpro10') == 0) {
  document.getElementById('algsysworprob10').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algsysworprob10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('algsysworpro1');
    localStorage.removeItem('algsysworpro2');
    localStorage.removeItem('algsysworpro3');
    localStorage.removeItem('algsysworpro4');
    localStorage.removeItem('algsysworpro5');
    localStorage.removeItem('algsysworpro6');
    localStorage.removeItem('algsysworpro7');
    localStorage.removeItem('algsysworpro8');
    localStorage.removeItem('algsysworpro9');
    localStorage.removeItem('algsysworpro10');
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 