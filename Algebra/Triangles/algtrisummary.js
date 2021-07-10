



if (localStorage.getItem('algtri1') == 1) {
  document.getElementById('algtrib1').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algtri1') == 0) {
  document.getElementById('algtrib1').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algtrib1').style.background = 'white';
  }

if (localStorage.getItem('algtri2') == 1) {
    document.getElementById('algtrib2').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('algtri2') == 0) {
    document.getElementById('algtrib2').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('algtrib2').style.background = 'white';
    }
  

if (localStorage.getItem('algtri3') == 1) {
  document.getElementById('algtrib3').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algtri3') == 0) {
  document.getElementById('algtrib3').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algtrib3').style.background = 'white';
  }

  
if (localStorage.getItem('algtri4') == 1) {
  document.getElementById('algtrib4').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algtri4') == 0) {
  document.getElementById('algtrib4').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algtrib4').style.background = 'white';
  }


  if (localStorage.getItem('algtri5') == 1) {
    document.getElementById('algtrib5').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('algtri5') == 0) {
    document.getElementById('algtrib5').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('algtrib5').style.background = 'white';
    }
/*

if (localStorage.getItem('algtri6') == 1) {
  document.getElementById('algtrib6').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algtri6') == 0) {
  document.getElementById('algtrib6').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algtrib6').style.background = 'white';
  }    


if (localStorage.getItem('algtri7') == 1) {
  document.getElementById('algtrib7').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algtri7') == 0) {
  document.getElementById('algtrib7').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algtrib7').style.background = 'white';
  }

  
if (localStorage.getItem('algtri8') == 1) {
  document.getElementById('algtrib8').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algtri8') == 0) {
  document.getElementById('algtrib8').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algtrib8').style.background = 'white';
  }

  
if (localStorage.getItem('algtri9') == 1) {
  document.getElementById('algtrib9').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algtri9') == 0) {
  document.getElementById('algtrib9').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algtrib9').style.background = 'white';
  }

  
if (localStorage.getItem('algtri10') == 1) {
  document.getElementById('algtrib10').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algtri10') == 0) {
  document.getElementById('algtrib10').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algtrib10').style.background = 'white';
  }
*/



  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('algtri1');
    localStorage.removeItem('algtri2');
    localStorage.removeItem('algtri3');
    localStorage.removeItem('algtri4');
    localStorage.removeItem('algtri5');
    /*
    localStorage.removeItem('algtri6');
    localStorage.removeItem('algtri7');
    localStorage.removeItem('algtri8');
    localStorage.removeItem('algtri9');
    localStorage.removeItem('algtri10');
    */
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 