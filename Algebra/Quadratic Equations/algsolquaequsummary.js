



if (localStorage.getItem('algsolquaequ1') == 1) {
  document.getElementById('algsolquaequb1').style.background = '#7fff00';
}
  else if (localStorage.getItem('algsolquaequ1') == 0) {
  document.getElementById('algsolquaequb1').style.background = 'red';
  }
  else {
    document.getElementById('algsolquaequb1').style.background = 'white';
  }

if (localStorage.getItem('algsolquaequ2') == 1) {
    document.getElementById('algsolquaequb2').style.background = '#7fff00';
  }
    else if (localStorage.getItem('algsolquaequ2') == 0) {
    document.getElementById('algsolquaequb2').style.background = 'red';
    }
    else {
      document.getElementById('algsolquaequb2').style.background = 'white';
    }
  

if (localStorage.getItem('algsolquaequ3') == 1) {
  document.getElementById('algsolquaequb3').style.background = '#7fff00';
}
  else if (localStorage.getItem('algsolquaequ3') == 0) {
  document.getElementById('algsolquaequb3').style.background = 'red';
  }
  else {
    document.getElementById('algsolquaequb3').style.background = 'white';
  }

  
if (localStorage.getItem('algsolquaequ4') == 1) {
  document.getElementById('algsolquaequb4').style.background = '#7fff00';
}
  else if (localStorage.getItem('algsolquaequ4') == 0) {
  document.getElementById('algsolquaequb4').style.background = 'red';
  }
  else {
    document.getElementById('algsolquaequb4').style.background = 'white';
  }


  if (localStorage.getItem('algsolquaequ5') == 1) {
    document.getElementById('algsolquaequb5').style.background = '#7fff00';
  }
    else if (localStorage.getItem('algsolquaequ5') == 0) {
    document.getElementById('algsolquaequb5').style.background = 'red';
    }
    else {
      document.getElementById('algsolquaequb5').style.background = 'white';
    }


if (localStorage.getItem('algsolquaequ6') == 1) {
  document.getElementById('algsolquaequb6').style.background = '#7fff00';
}
  else if (localStorage.getItem('algsolquaequ6') == 0) {
  document.getElementById('algsolquaequb6').style.background = 'red';
  }
  else {
    document.getElementById('algsolquaequb6').style.background = 'white';
  }    


if (localStorage.getItem('algsolquaequ7') == 1) {
  document.getElementById('algsolquaequb7').style.background = '#7fff00';
}
  else if (localStorage.getItem('algsolquaequ7') == 0) {
  document.getElementById('algsolquaequb7').style.background = 'red';
  }
  else {
    document.getElementById('algsolquaequb7').style.background = 'white';
  }

  
if (localStorage.getItem('algsolquaequ8') == 1) {
  document.getElementById('algsolquaequb8').style.background = '#7fff00';
}
  else if (localStorage.getItem('algsolquaequ8') == 0) {
  document.getElementById('algsolquaequb8').style.background = 'red';
  }
  else {
    document.getElementById('algsolquaequb8').style.background = 'white';
  }

  
if (localStorage.getItem('algsolquaequ9') == 1) {
  document.getElementById('algsolquaequb9').style.background = '#7fff00';
}
  else if (localStorage.getItem('algsolquaequ9') == 0) {
  document.getElementById('algsolquaequb9').style.background = 'red';
  }
  else {
    document.getElementById('algsolquaequb9').style.background = 'white';
  }

  
if (localStorage.getItem('algsolquaequ10') == 1) {
  document.getElementById('algsolquaequalgsolquaequb10').style.background = '#7fff00';
}
  else if (localStorage.getItem('algsolquaequ10') == 0) {
  document.getElementById('algsolquaequb10').style.background = 'red';
  }
  else {
    document.getElementById('algsolquaequb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('algsolquaequ1');
    localStorage.removeItem('algsolquaequ2');
    localStorage.removeItem('algsolquaequ3');
    localStorage.removeItem('algsolquaequ4');
    localStorage.removeItem('algsolquaequ5');
    localStorage.removeItem('algsolquaequ6');
    localStorage.removeItem('algsolquaequ7');
    localStorage.removeItem('algsolquaequ8');
    localStorage.removeItem('algsolquaequ9');
    localStorage.removeItem('algsolquaequ10');
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 