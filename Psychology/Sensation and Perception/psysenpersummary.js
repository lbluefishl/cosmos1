



if (localStorage.getItem('psysenper1') == 1) {
  document.getElementById('psysenperb1').style.background = '#7fff00';
}
  else if (localStorage.getItem('psysenper1') == 0) {
  document.getElementById('psysenperb1').style.background = 'red';
  }
  else {
    document.getElementById('psysenperb1').style.background = 'white';
  }

if (localStorage.getItem('psysenper2') == 1) {
    document.getElementById('psysenperb2').style.background = '#7fff00';
  }
    else if (localStorage.getItem('psysenper2') == 0) {
    document.getElementById('psysenperb2').style.background = 'red';
    }
    else {
      document.getElementById('psysenperb2').style.background = 'white';
    }
  

if (localStorage.getItem('psysenper3') == 1) {
  document.getElementById('psysenperb3').style.background = '#7fff00';
}
  else if (localStorage.getItem('psysenper3') == 0) {
  document.getElementById('psysenperb3').style.background = 'red';
  }
  else {
    document.getElementById('psysenperb3').style.background = 'white';
  }

  
if (localStorage.getItem('psysenper4') == 1) {
  document.getElementById('psysenperb4').style.background = '#7fff00';
}
  else if (localStorage.getItem('psysenper4') == 0) {
  document.getElementById('psysenperb4').style.background = 'red';
  }
  else {
    document.getElementById('psysenperb4').style.background = 'white';
  }


  if (localStorage.getItem('psysenper5') == 1) {
    document.getElementById('psysenperb5').style.background = '#7fff00';
  }
    else if (localStorage.getItem('psysenper5') == 0) {
    document.getElementById('psysenperb5').style.background = 'red';
    }
    else {
      document.getElementById('psysenperb5').style.background = 'white';
    }


if (localStorage.getItem('psysenper6') == 1) {
  document.getElementById('psysenperb6').style.background = '#7fff00';
}
  else if (localStorage.getItem('psysenper6') == 0) {
  document.getElementById('psysenperb6').style.background = 'red';
  }
  else {
    document.getElementById('psysenperb6').style.background = 'white';
  }    


if (localStorage.getItem('psysenper7') == 1) {
  document.getElementById('psysenperb7').style.background = '#7fff00';
}
  else if (localStorage.getItem('psysenper7') == 0) {
  document.getElementById('psysenperb7').style.background = 'red';
  }
  else {
    document.getElementById('psysenperb7').style.background = 'white';
  }

  
if (localStorage.getItem('psysenper8') == 1) {
  document.getElementById('psysenperb8').style.background = '#7fff00';
}
  else if (localStorage.getItem('psysenper8') == 0) {
  document.getElementById('psysenperb8').style.background = 'red';
  }
  else {
    document.getElementById('psysenperb8').style.background = 'white';
  }

  
if (localStorage.getItem('psysenper9') == 1) {
  document.getElementById('psysenperb9').style.background = '#7fff00';
}
  else if (localStorage.getItem('psysenper9') == 0) {
  document.getElementById('psysenperb9').style.background = 'red';
  }
  else {
    document.getElementById('psysenperb9').style.background = 'white';
  }

  
if (localStorage.getItem('psysenper10') == 1) {
  document.getElementById('psysenperpsysenperb10').style.background = '#7fff00';
}
  else if (localStorage.getItem('psysenper10') == 0) {
  document.getElementById('psysenperb10').style.background = 'red';
  }
  else {
    document.getElementById('psysenperb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('psysenper1');
    localStorage.removeItem('psysenper2');
    localStorage.removeItem('psysenper3');
    localStorage.removeItem('psysenper4');
    localStorage.removeItem('psysenper5');
    localStorage.removeItem('psysenper6');
    localStorage.removeItem('psysenper7');
    localStorage.removeItem('psysenper8');
    localStorage.removeItem('psysenper9');
    localStorage.removeItem('psysenper10');
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 