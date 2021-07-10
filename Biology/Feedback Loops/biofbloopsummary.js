



if (localStorage.getItem('biofbloop1') == 1) {
  document.getElementById('biofbloopb1').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('biofbloop1') == 0) {
  document.getElementById('biofbloopb1').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('biofbloopb1').style.background = 'white';
  }

if (localStorage.getItem('biofbloop2') == 1) {
    document.getElementById('biofbloopb2').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('biofbloop2') == 0) {
    document.getElementById('biofbloopb2').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('biofbloopb2').style.background = 'white';
    }
  

if (localStorage.getItem('biofbloop3') == 1) {
  document.getElementById('biofbloopb3').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('biofbloop3') == 0) {
  document.getElementById('biofbloopb3').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('biofbloopb3').style.background = 'white';
  }

  
if (localStorage.getItem('biofbloop4') == 1) {
  document.getElementById('biofbloopb4').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('biofbloop4') == 0) {
  document.getElementById('biofbloopb4').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('biofbloopb4').style.background = 'white';
  }


  if (localStorage.getItem('biofbloop5') == 1) {
    document.getElementById('biofbloopb5').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('biofbloop5') == 0) {
    document.getElementById('biofbloopb5').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('biofbloopb5').style.background = 'white';
    }


if (localStorage.getItem('biofbloop6') == 1) {
  document.getElementById('biofbloopb6').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('biofbloop6') == 0) {
  document.getElementById('biofbloopb6').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('biofbloopb6').style.background = 'white';
  }    


if (localStorage.getItem('biofbloop7') == 1) {
  document.getElementById('biofbloopb7').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('biofbloop7') == 0) {
  document.getElementById('biofbloopb7').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('biofbloopb7').style.background = 'white';
  }

  
if (localStorage.getItem('biofbloop8') == 1) {
  document.getElementById('biofbloopb8').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('biofbloop8') == 0) {
  document.getElementById('biofbloopb8').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('biofbloopb8').style.background = 'white';
  }

  
if (localStorage.getItem('biofbloop9') == 1) {
  document.getElementById('biofbloopb9').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('biofbloop9') == 0) {
  document.getElementById('biofbloopb9').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('biofbloopb9').style.background = 'white';
  }

  
if (localStorage.getItem('biofbloop10') == 1) {
  document.getElementById('biofbloopb10').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('biofbloop10') == 0) {
  document.getElementById('biofbloopb10').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('biofbloopb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem("biofbloop1");
    localStorage.removeItem("biofbloop2");
    localStorage.removeItem("biofbloop3");
    localStorage.removeItem("biofbloop4");
    localStorage.removeItem("biofbloop5");
    localStorage.removeItem("biofbloop6");
    localStorage.removeItem("biofbloop7");
    localStorage.removeItem("biofbloop8");
    localStorage.removeItem("biofbloop9");
    localStorage.removeItem("biofbloop10");
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 