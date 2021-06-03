



if (localStorage.getItem('chemisotopes1') == 1) {
  document.getElementById('chemisotopesb1').style.background = '#7fff00';
}
  else if (localStorage.getItem('chemisotopes1') == 0) {
  document.getElementById('chemisotopesb1').style.background = 'red';
  }
  else {
    document.getElementById('chemisotopesb1').style.background = 'white';
  }

if (localStorage.getItem('chemisotopes2') == 1) {
    document.getElementById('chemisotopesb2').style.background = '#7fff00';
  }
    else if (localStorage.getItem('chemisotopes2') == 0) {
    document.getElementById('chemisotopesb2').style.background = 'red';
    }
    else {
      document.getElementById('chemisotopesb2').style.background = 'white';
    }
  

if (localStorage.getItem('chemisotopes3') == 1) {
  document.getElementById('chemisotopesb3').style.background = '#7fff00';
}
  else if (localStorage.getItem('chemisotopes3') == 0) {
  document.getElementById('chemisotopesb3').style.background = 'red';
  }
  else {
    document.getElementById('chemisotopesb3').style.background = 'white';
  }

  
if (localStorage.getItem('chemisotopes4') == 1) {
  document.getElementById('chemisotopesb4').style.background = '#7fff00';
}
  else if (localStorage.getItem('chemisotopes4') == 0) {
  document.getElementById('chemisotopesb4').style.background = 'red';
  }
  else {
    document.getElementById('chemisotopesb4').style.background = 'white';
  }


  if (localStorage.getItem('chemisotopes5') == 1) {
    document.getElementById('chemisotopesb5').style.background = '#7fff00';
  }
    else if (localStorage.getItem('chemisotopes5') == 0) {
    document.getElementById('chemisotopesb5').style.background = 'red';
    }
    else {
      document.getElementById('chemisotopesb5').style.background = 'white';
    }


if (localStorage.getItem('chemisotopes6') == 1) {
  document.getElementById('chemisotopesb6').style.background = '#7fff00';
}
  else if (localStorage.getItem('chemisotopes6') == 0) {
  document.getElementById('chemisotopesb6').style.background = 'red';
  }
  else {
    document.getElementById('chemisotopesb6').style.background = 'white';
  }    


if (localStorage.getItem('chemisotopes7') == 1) {
  document.getElementById('chemisotopesb7').style.background = '#7fff00';
}
  else if (localStorage.getItem('chemisotopes7') == 0) {
  document.getElementById('chemisotopesb7').style.background = 'red';
  }
  else {
    document.getElementById('chemisotopesb7').style.background = 'white';
  }

  
if (localStorage.getItem('chemisotopes8') == 1) {
  document.getElementById('chemisotopesb8').style.background = '#7fff00';
}
  else if (localStorage.getItem('chemisotopes8') == 0) {
  document.getElementById('chemisotopesb8').style.background = 'red';
  }
  else {
    document.getElementById('chemisotopesb8').style.background = 'white';
  }

  
if (localStorage.getItem('chemisotopes9') == 1) {
  document.getElementById('chemisotopesb9').style.background = '#7fff00';
}
  else if (localStorage.getItem('chemisotopes9') == 0) {
  document.getElementById('chemisotopesb9').style.background = 'red';
  }
  else {
    document.getElementById('chemisotopesb9').style.background = 'white';
  }

  
if (localStorage.getItem('chemisotopes10') == 1) {
  document.getElementById('chemisotopeschemisotopesb10').style.background = '#7fff00';
}
  else if (localStorage.getItem('chemisotopes10') == 0) {
  document.getElementById('chemisotopesb10').style.background = 'red';
  }
  else {
    document.getElementById('chemisotopesb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('chemisotopes1');
    localStorage.removeItem('chemisotopes2');
    localStorage.removeItem('chemisotopes3');
    localStorage.removeItem('chemisotopes4');
    localStorage.removeItem('chemisotopes5');
    localStorage.removeItem('chemisotopes6');
    localStorage.removeItem('chemisotopes7');
    localStorage.removeItem('chemisotopes8');
    localStorage.removeItem('chemisotopes9');
    localStorage.removeItem('chemisotopes10');
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 