



if (localStorage.getItem('biopropwater1') == 1) {
  document.getElementById('biopropwaterb1').style.background = '#7fff00';
}
  else if (localStorage.getItem('biopropwater1') == 0) {
  document.getElementById('biopropwaterb1').style.background = 'red';
  }
  else {
    document.getElementById('biopropwaterb1').style.background = 'white';
  }

if (localStorage.getItem('biopropwater2') == 1) {
    document.getElementById('biopropwaterb2').style.background = '#7fff00';
  }
    else if (localStorage.getItem('biopropwater2') == 0) {
    document.getElementById('biopropwaterb2').style.background = 'red';
    }
    else {
      document.getElementById('biopropwaterb2').style.background = 'white';
    }
  

if (localStorage.getItem('biopropwater3') == 1) {
  document.getElementById('biopropwaterb3').style.background = '#7fff00';
}
  else if (localStorage.getItem('biopropwater3') == 0) {
  document.getElementById('biopropwaterb3').style.background = 'red';
  }
  else {
    document.getElementById('biopropwaterb3').style.background = 'white';
  }

  
if (localStorage.getItem('biopropwater4') == 1) {
  document.getElementById('biopropwaterb4').style.background = '#7fff00';
}
  else if (localStorage.getItem('biopropwater4') == 0) {
  document.getElementById('biopropwaterb4').style.background = 'red';
  }
  else {
    document.getElementById('biopropwaterb4').style.background = 'white';
  }


  if (localStorage.getItem('biopropwater5') == 1) {
    document.getElementById('biopropwaterb5').style.background = '#7fff00';
  }
    else if (localStorage.getItem('biopropwater5') == 0) {
    document.getElementById('biopropwaterb5').style.background = 'red';
    }
    else {
      document.getElementById('biopropwaterb5').style.background = 'white';
    }


if (localStorage.getItem('biopropwater6') == 1) {
  document.getElementById('biopropwaterb6').style.background = '#7fff00';
}
  else if (localStorage.getItem('biopropwater6') == 0) {
  document.getElementById('biopropwaterb6').style.background = 'red';
  }
  else {
    document.getElementById('biopropwaterb6').style.background = 'white';
  }    


if (localStorage.getItem('biopropwater7') == 1) {
  document.getElementById('biopropwaterb7').style.background = '#7fff00';
}
  else if (localStorage.getItem('biopropwater7') == 0) {
  document.getElementById('biopropwaterb7').style.background = 'red';
  }
  else {
    document.getElementById('biopropwaterb7').style.background = 'white';
  }

  
if (localStorage.getItem('biopropwater8') == 1) {
  document.getElementById('biopropwaterb8').style.background = '#7fff00';
}
  else if (localStorage.getItem('biopropwater8') == 0) {
  document.getElementById('biopropwaterb8').style.background = 'red';
  }
  else {
    document.getElementById('biopropwaterb8').style.background = 'white';
  }

  
if (localStorage.getItem('biopropwater9') == 1) {
  document.getElementById('biopropwaterb9').style.background = '#7fff00';
}
  else if (localStorage.getItem('biopropwater9') == 0) {
  document.getElementById('biopropwaterb9').style.background = 'red';
  }
  else {
    document.getElementById('biopropwaterb9').style.background = 'white';
  }

  
if (localStorage.getItem('biopropwater10') == 1) {
  document.getElementById('biopropwaterbiopropwaterb10').style.background = '#7fff00';
}
  else if (localStorage.getItem('biopropwater10') == 0) {
  document.getElementById('biopropwaterb10').style.background = 'red';
  }
  else {
    document.getElementById('biopropwaterb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem(biopropwaterb1);
    localStorage.removeItem(biopropwaterb2);
    localStorage.removeItem(biopropwaterb3);
    localStorage.removeItem(biopropwaterb4);
    localStorage.removeItem(biopropwaterb5);
    localStorage.removeItem(biopropwaterb6);
    localStorage.removeItem(biopropwaterb7);
    localStorage.removeItem(biopropwaterb8);
    localStorage.removeItem(biopropwaterb9);
    localStorage.removeItem(biopropwaterb10);
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 