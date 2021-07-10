



if (localStorage.getItem('algunicon1') == 1) {
  document.getElementById('alguniconb1').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algunicon1') == 0) {
  document.getElementById('alguniconb1').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('alguniconb1').style.background = 'white';
  }

if (localStorage.getItem('algunicon2') == 1) {
    document.getElementById('alguniconb2').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('algunicon2') == 0) {
    document.getElementById('alguniconb2').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('alguniconb2').style.background = 'white';
    }
  

if (localStorage.getItem('algunicon3') == 1) {
  document.getElementById('alguniconb3').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algunicon3') == 0) {
  document.getElementById('alguniconb3').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('alguniconb3').style.background = 'white';
  }

  
if (localStorage.getItem('algunicon4') == 1) {
  document.getElementById('alguniconb4').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algunicon4') == 0) {
  document.getElementById('alguniconb4').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('alguniconb4').style.background = 'white';
  }


  if (localStorage.getItem('algunicon5') == 1) {
    document.getElementById('alguniconb5').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('algunicon5') == 0) {
    document.getElementById('alguniconb5').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('alguniconb5').style.background = 'white';
    }


if (localStorage.getItem('algunicon6') == 1) {
  document.getElementById('alguniconb6').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algunicon6') == 0) {
  document.getElementById('alguniconb6').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('alguniconb6').style.background = 'white';
  }    


if (localStorage.getItem('algunicon7') == 1) {
  document.getElementById('alguniconb7').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algunicon7') == 0) {
  document.getElementById('alguniconb7').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('alguniconb7').style.background = 'white';
  }

  
if (localStorage.getItem('algunicon8') == 1) {
  document.getElementById('alguniconb8').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algunicon8') == 0) {
  document.getElementById('alguniconb8').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('alguniconb8').style.background = 'white';
  }

  
if (localStorage.getItem('algunicon9') == 1) {
  document.getElementById('alguniconb9').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algunicon9') == 0) {
  document.getElementById('alguniconb9').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('alguniconb9').style.background = 'white';
  }

  
if (localStorage.getItem('algunicon10') == 1) {
  document.getElementById('alguniconb10').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algunicon10') == 0) {
  document.getElementById('alguniconb10').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('alguniconb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('algunicon1');
    localStorage.removeItem('algunicon2');
    localStorage.removeItem('algunicon3');
    localStorage.removeItem('algunicon4');
    localStorage.removeItem('algunicon5');
    localStorage.removeItem('algunicon6');
    localStorage.removeItem('algunicon7');
    localStorage.removeItem('algunicon8');
    localStorage.removeItem('algunicon9');
    localStorage.removeItem('algunicon10');
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 