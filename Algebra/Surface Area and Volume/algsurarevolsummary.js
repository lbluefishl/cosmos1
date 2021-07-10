



if (localStorage.getItem('algsurarevol1') == 1) {
  document.getElementById('algsurarevolb1').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algsurarevol1') == 0) {
  document.getElementById('algsurarevolb1').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algsurarevolb1').style.background = 'white';
  }

if (localStorage.getItem('algsurarevol2') == 1) {
    document.getElementById('algsurarevolb2').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('algsurarevol2') == 0) {
    document.getElementById('algsurarevolb2').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('algsurarevolb2').style.background = 'white';
    }
  

if (localStorage.getItem('algsurarevol3') == 1) {
  document.getElementById('algsurarevolb3').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algsurarevol3') == 0) {
  document.getElementById('algsurarevolb3').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algsurarevolb3').style.background = 'white';
  }

  
if (localStorage.getItem('algsurarevol4') == 1) {
  document.getElementById('algsurarevolb4').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algsurarevol4') == 0) {
  document.getElementById('algsurarevolb4').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algsurarevolb4').style.background = 'white';
  }


  if (localStorage.getItem('algsurarevol5') == 1) {
    document.getElementById('algsurarevolb5').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('algsurarevol5') == 0) {
    document.getElementById('algsurarevolb5').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('algsurarevolb5').style.background = 'white';
    }


if (localStorage.getItem('algsurarevol6') == 1) {
  document.getElementById('algsurarevolb6').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algsurarevol6') == 0) {
  document.getElementById('algsurarevolb6').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algsurarevolb6').style.background = 'white';
  }    


if (localStorage.getItem('algsurarevol7') == 1) {
  document.getElementById('algsurarevolb7').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algsurarevol7') == 0) {
  document.getElementById('algsurarevolb7').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algsurarevolb7').style.background = 'white';
  }

  
if (localStorage.getItem('algsurarevol8') == 1) {
  document.getElementById('algsurarevolb8').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algsurarevol8') == 0) {
  document.getElementById('algsurarevolb8').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algsurarevolb8').style.background = 'white';
  }

  
if (localStorage.getItem('algsurarevol9') == 1) {
  document.getElementById('algsurarevolb9').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algsurarevol9') == 0) {
  document.getElementById('algsurarevolb9').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algsurarevolb9').style.background = 'white';
  }

  
if (localStorage.getItem('algsurarevol10') == 1) {
  document.getElementById('algsurarevolb10').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algsurarevol10') == 0) {
  document.getElementById('algsurarevolb10').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algsurarevolb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('algsurarevol1');
    localStorage.removeItem('algsurarevol2');
    localStorage.removeItem('algsurarevol3');
    localStorage.removeItem('algsurarevol4');
    localStorage.removeItem('algsurarevol5');
    localStorage.removeItem('algsurarevol6');
    localStorage.removeItem('algsurarevol7');
    localStorage.removeItem('algsurarevol8');
    localStorage.removeItem('algsurarevol9');
    localStorage.removeItem('algsurarevol10');
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 