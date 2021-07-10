



if (localStorage.getItem('wricomcolsem1') == 1) {
  document.getElementById('wricomcolsemb1').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('wricomcolsem1') == 0) {
  document.getElementById('wricomcolsemb1').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('wricomcolsemb1').style.background = 'white';
  }

if (localStorage.getItem('wricomcolsem2') == 1) {
    document.getElementById('wricomcolsemb2').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('wricomcolsem2') == 0) {
    document.getElementById('wricomcolsemb2').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('wricomcolsemb2').style.background = 'white';
    }
  

if (localStorage.getItem('wricomcolsem3') == 1) {
  document.getElementById('wricomcolsemb3').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('wricomcolsem3') == 0) {
  document.getElementById('wricomcolsemb3').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('wricomcolsemb3').style.background = 'white';
  }

  
if (localStorage.getItem('wricomcolsem4') == 1) {
  document.getElementById('wricomcolsemb4').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('wricomcolsem4') == 0) {
  document.getElementById('wricomcolsemb4').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('wricomcolsemb4').style.background = 'white';
  }


  if (localStorage.getItem('wricomcolsem5') == 1) {
    document.getElementById('wricomcolsemb5').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('wricomcolsem5') == 0) {
    document.getElementById('wricomcolsemb5').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('wricomcolsemb5').style.background = 'white';
    }


if (localStorage.getItem('wricomcolsem6') == 1) {
  document.getElementById('wricomcolsemb6').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('wricomcolsem6') == 0) {
  document.getElementById('wricomcolsemb6').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('wricomcolsemb6').style.background = 'white';
  }    


if (localStorage.getItem('wricomcolsem7') == 1) {
  document.getElementById('wricomcolsemb7').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('wricomcolsem7') == 0) {
  document.getElementById('wricomcolsemb7').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('wricomcolsemb7').style.background = 'white';
  }

  
if (localStorage.getItem('wricomcolsem8') == 1) {
  document.getElementById('wricomcolsemb8').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('wricomcolsem8') == 0) {
  document.getElementById('wricomcolsemb8').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('wricomcolsemb8').style.background = 'white';
  }

  
if (localStorage.getItem('wricomcolsem9') == 1) {
  document.getElementById('wricomcolsemb9').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('wricomcolsem9') == 0) {
  document.getElementById('wricomcolsemb9').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('wricomcolsemb9').style.background = 'white';
  }

  
if (localStorage.getItem('wricomcolsem10') == 1) {
  document.getElementById('wricomcolsemb10').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('wricomcolsem10') == 0) {
  document.getElementById('wricomcolsemb10').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('wricomcolsemb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('wricomcolsem1');
    localStorage.removeItem('wricomcolsem2');
    localStorage.removeItem('wricomcolsem3');
    localStorage.removeItem('wricomcolsem4');
    localStorage.removeItem('wricomcolsem5');
    localStorage.removeItem('wricomcolsem6');
    localStorage.removeItem('wricomcolsem7');
    localStorage.removeItem('wricomcolsem8');
    localStorage.removeItem('wricomcolsem9');
    localStorage.removeItem('wricomcolsem10');
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 