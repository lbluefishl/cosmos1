



if (localStorage.getItem('algexpsam1') == 1) {
  document.getElementById('algexpsamb1').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algexpsam1') == 0) {
  document.getElementById('algexpsamb1').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algexpsamb1').style.background = 'white';
  }

if (localStorage.getItem('algexpsam2') == 1) {
    document.getElementById('algexpsamb2').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('algexpsam2') == 0) {
    document.getElementById('algexpsamb2').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('algexpsamb2').style.background = 'white';
    }
  

if (localStorage.getItem('algexpsam3') == 1) {
  document.getElementById('algexpsamb3').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algexpsam3') == 0) {
  document.getElementById('algexpsamb3').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algexpsamb3').style.background = 'white';
  }

  
if (localStorage.getItem('algexpsam4') == 1) {
  document.getElementById('algexpsamb4').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algexpsam4') == 0) {
  document.getElementById('algexpsamb4').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algexpsamb4').style.background = 'white';
  }


  if (localStorage.getItem('algexpsam5') == 1) {
    document.getElementById('algexpsamb5').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('algexpsam5') == 0) {
    document.getElementById('algexpsamb5').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('algexpsamb5').style.background = 'white';
    }
/*

if (localStorage.getItem('algexpsam6') == 1) {
  document.getElementById('algexpsamb6').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algexpsam6') == 0) {
  document.getElementById('algexpsamb6').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algexpsamb6').style.background = 'white';
  }    


if (localStorage.getItem('algexpsam7') == 1) {
  document.getElementById('algexpsamb7').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algexpsam7') == 0) {
  document.getElementById('algexpsamb7').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algexpsamb7').style.background = 'white';
  }

  
if (localStorage.getItem('algexpsam8') == 1) {
  document.getElementById('algexpsamb8').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algexpsam8') == 0) {
  document.getElementById('algexpsamb8').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algexpsamb8').style.background = 'white';
  }

  
if (localStorage.getItem('algexpsam9') == 1) {
  document.getElementById('algexpsamb9').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algexpsam9') == 0) {
  document.getElementById('algexpsamb9').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algexpsamb9').style.background = 'white';
  }

  
if (localStorage.getItem('algexpsam10') == 1) {
  document.getElementById('algexpsamb10').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algexpsam10') == 0) {
  document.getElementById('algexpsamb10').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algexpsamb10').style.background = 'white';
  }


*/

  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('algexpsam1');
    localStorage.removeItem('algexpsam2');
    localStorage.removeItem('algexpsam3');
    localStorage.removeItem('algexpsam4');
    localStorage.removeItem('algexpsam5');
    /*
    localStorage.removeItem('algexpsam6');
    localStorage.removeItem('algexpsam7');
    localStorage.removeItem('algexpsam8');
    localStorage.removeItem('algexpsam9');
    localStorage.removeItem('algexpsam10');
    */
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 