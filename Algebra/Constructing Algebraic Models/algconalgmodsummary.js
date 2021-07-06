



if (localStorage.getItem('algconalgmod1') == 1) {
  document.getElementById('algconalgmodb1').style.background = '#7fff00';
}
  else if (localStorage.getItem('algconalgmod1') == 0) {
  document.getElementById('algconalgmodb1').style.background = 'red';
  }
  else {
    document.getElementById('algconalgmodb1').style.background = 'white';
  }

if (localStorage.getItem('algconalgmod2') == 1) {
    document.getElementById('algconalgmodb2').style.background = '#7fff00';
  }
    else if (localStorage.getItem('algconalgmod2') == 0) {
    document.getElementById('algconalgmodb2').style.background = 'red';
    }
    else {
      document.getElementById('algconalgmodb2').style.background = 'white';
    }
  

if (localStorage.getItem('algconalgmod3') == 1) {
  document.getElementById('algconalgmodb3').style.background = '#7fff00';
}
  else if (localStorage.getItem('algconalgmod3') == 0) {
  document.getElementById('algconalgmodb3').style.background = 'red';
  }
  else {
    document.getElementById('algconalgmodb3').style.background = 'white';
  }

  
if (localStorage.getItem('algconalgmod4') == 1) {
  document.getElementById('algconalgmodb4').style.background = '#7fff00';
}
  else if (localStorage.getItem('algconalgmod4') == 0) {
  document.getElementById('algconalgmodb4').style.background = 'red';
  }
  else {
    document.getElementById('algconalgmodb4').style.background = 'white';
  }


  if (localStorage.getItem('algconalgmod5') == 1) {
    document.getElementById('algconalgmodb5').style.background = '#7fff00';
  }
    else if (localStorage.getItem('algconalgmod5') == 0) {
    document.getElementById('algconalgmodb5').style.background = 'red';
    }
    else {
      document.getElementById('algconalgmodb5').style.background = 'white';
    }


if (localStorage.getItem('algconalgmod6') == 1) {
  document.getElementById('algconalgmodb6').style.background = '#7fff00';
}
  else if (localStorage.getItem('algconalgmod6') == 0) {
  document.getElementById('algconalgmodb6').style.background = 'red';
  }
  else {
    document.getElementById('algconalgmodb6').style.background = 'white';
  }    


if (localStorage.getItem('algconalgmod7') == 1) {
  document.getElementById('algconalgmodb7').style.background = '#7fff00';
}
  else if (localStorage.getItem('algconalgmod7') == 0) {
  document.getElementById('algconalgmodb7').style.background = 'red';
  }
  else {
    document.getElementById('algconalgmodb7').style.background = 'white';
  }

  
if (localStorage.getItem('algconalgmod8') == 1) {
  document.getElementById('algconalgmodb8').style.background = '#7fff00';
}
  else if (localStorage.getItem('algconalgmod8') == 0) {
  document.getElementById('algconalgmodb8').style.background = 'red';
  }
  else {
    document.getElementById('algconalgmodb8').style.background = 'white';
  }

  
if (localStorage.getItem('algconalgmod9') == 1) {
  document.getElementById('algconalgmodb9').style.background = '#7fff00';
}
  else if (localStorage.getItem('algconalgmod9') == 0) {
  document.getElementById('algconalgmodb9').style.background = 'red';
  }
  else {
    document.getElementById('algconalgmodb9').style.background = 'white';
  }

  
if (localStorage.getItem('algconalgmod10') == 1) {
  document.getElementById('algconalgmodb10').style.background = '#7fff00';
}
  else if (localStorage.getItem('algconalgmod10') == 0) {
  document.getElementById('algconalgmodb10').style.background = 'red';
  }
  else {
    document.getElementById('algconalgmodb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('algconalgmod1');
    localStorage.removeItem('algconalgmod2');
    localStorage.removeItem('algconalgmod3');
    localStorage.removeItem('algconalgmod4');
    localStorage.removeItem('algconalgmod5');
    localStorage.removeItem('algconalgmod6');
    localStorage.removeItem('algconalgmod7');
    localStorage.removeItem('algconalgmod8');
    localStorage.removeItem('algconalgmod9');
    localStorage.removeItem('algconalgmod10');
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 