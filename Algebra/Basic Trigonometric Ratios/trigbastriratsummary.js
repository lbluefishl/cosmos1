



if (localStorage.getItem('trigbastrirat1') == 1) {
  document.getElementById('trigbastriratb1').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('trigbastrirat1') == 0) {
  document.getElementById('trigbastriratb1').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('trigbastriratb1').style.background = 'white';
  }

if (localStorage.getItem('trigbastrirat2') == 1) {
    document.getElementById('trigbastriratb2').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('trigbastrirat2') == 0) {
    document.getElementById('trigbastriratb2').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('trigbastriratb2').style.background = 'white';
    }
  

if (localStorage.getItem('trigbastrirat3') == 1) {
  document.getElementById('trigbastriratb3').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('trigbastrirat3') == 0) {
  document.getElementById('trigbastriratb3').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('trigbastriratb3').style.background = 'white';
  }

  
if (localStorage.getItem('trigbastrirat4') == 1) {
  document.getElementById('trigbastriratb4').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('trigbastrirat4') == 0) {
  document.getElementById('trigbastriratb4').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('trigbastriratb4').style.background = 'white';
  }


  if (localStorage.getItem('trigbastrirat5') == 1) {
    document.getElementById('trigbastriratb5').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('trigbastrirat5') == 0) {
    document.getElementById('trigbastriratb5').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('trigbastriratb5').style.background = 'white';
    }

/*
if (localStorage.getItem('trigbastrirat6') == 1) {
  document.getElementById('trigbastriratb6').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('trigbastrirat6') == 0) {
  document.getElementById('trigbastriratb6').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('trigbastriratb6').style.background = 'white';
  }    


if (localStorage.getItem('trigbastrirat7') == 1) {
  document.getElementById('trigbastriratb7').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('trigbastrirat7') == 0) {
  document.getElementById('trigbastriratb7').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('trigbastriratb7').style.background = 'white';
  }

  
if (localStorage.getItem('trigbastrirat8') == 1) {
  document.getElementById('trigbastriratb8').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('trigbastrirat8') == 0) {
  document.getElementById('trigbastriratb8').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('trigbastriratb8').style.background = 'white';
  }

  
if (localStorage.getItem('trigbastrirat9') == 1) {
  document.getElementById('trigbastriratb9').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('trigbastrirat9') == 0) {
  document.getElementById('trigbastriratb9').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('trigbastriratb9').style.background = 'white';
  }

  
if (localStorage.getItem('trigbastrirat10') == 1) {
  document.getElementById('trigbastriratb10').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('trigbastrirat10') == 0) {
  document.getElementById('trigbastriratb10').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('trigbastriratb10').style.background = 'white';
  }

*/


  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('trigbastrirat1');
    localStorage.removeItem('trigbastrirat2');
    localStorage.removeItem('trigbastrirat3');
    localStorage.removeItem('trigbastrirat4');
    localStorage.removeItem('trigbastrirat5');
    /*
    localStorage.removeItem('trigbastrirat6');
    localStorage.removeItem('trigbastrirat7');
    localStorage.removeItem('trigbastrirat8');
    localStorage.removeItem('trigbastrirat9');
    localStorage.removeItem('trigbastrirat10');
    */
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 