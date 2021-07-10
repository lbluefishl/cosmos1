



if (localStorage.getItem('wrisubver1') == 1) {
  document.getElementById('wrisubverb1').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('wrisubver1') == 0) {
  document.getElementById('wrisubverb1').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('wrisubverb1').style.background = 'white';
  }

if (localStorage.getItem('wrisubver2') == 1) {
    document.getElementById('wrisubverb2').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('wrisubver2') == 0) {
    document.getElementById('wrisubverb2').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('wrisubverb2').style.background = 'white';
    }
  

if (localStorage.getItem('wrisubver3') == 1) {
  document.getElementById('wrisubverb3').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('wrisubver3') == 0) {
  document.getElementById('wrisubverb3').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('wrisubverb3').style.background = 'white';
  }

  
if (localStorage.getItem('wrisubver4') == 1) {
  document.getElementById('wrisubverb4').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('wrisubver4') == 0) {
  document.getElementById('wrisubverb4').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('wrisubverb4').style.background = 'white';
  }


  if (localStorage.getItem('wrisubver5') == 1) {
    document.getElementById('wrisubverb5').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('wrisubver5') == 0) {
    document.getElementById('wrisubverb5').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('wrisubverb5').style.background = 'white';
    }


if (localStorage.getItem('wrisubver6') == 1) {
  document.getElementById('wrisubverb6').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('wrisubver6') == 0) {
  document.getElementById('wrisubverb6').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('wrisubverb6').style.background = 'white';
  }    


if (localStorage.getItem('wrisubver7') == 1) {
  document.getElementById('wrisubverb7').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('wrisubver7') == 0) {
  document.getElementById('wrisubverb7').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('wrisubverb7').style.background = 'white';
  }

  
if (localStorage.getItem('wrisubver8') == 1) {
  document.getElementById('wrisubverb8').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('wrisubver8') == 0) {
  document.getElementById('wrisubverb8').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('wrisubverb8').style.background = 'white';
  }

  
if (localStorage.getItem('wrisubver9') == 1) {
  document.getElementById('wrisubverb9').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('wrisubver9') == 0) {
  document.getElementById('wrisubverb9').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('wrisubverb9').style.background = 'white';
  }

  
if (localStorage.getItem('wrisubver10') == 1) {
  document.getElementById('wrisubverb10').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('wrisubver10') == 0) {
  document.getElementById('wrisubverb10').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('wrisubverb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('wrisubver1');
    localStorage.removeItem('wrisubver2');
    localStorage.removeItem('wrisubver3');
    localStorage.removeItem('wrisubver4');
    localStorage.removeItem('wrisubver5');
    localStorage.removeItem('wrisubver6');
    localStorage.removeItem('wrisubver7');
    localStorage.removeItem('wrisubver8');
    localStorage.removeItem('wrisubver9');
    localStorage.removeItem('wrisubver10');
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 