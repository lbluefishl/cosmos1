



if (localStorage.getItem('algrealeq1') == 1) {
  document.getElementById('algrealeqb1').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algrealeq1') == 0) {
  document.getElementById('algrealeqb1').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algrealeqb1').style.background = 'white';
  }

if (localStorage.getItem('algrealeq2') == 1) {
    document.getElementById('algrealeqb2').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('algrealeq2') == 0) {
    document.getElementById('algrealeqb2').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('algrealeqb2').style.background = 'white';
    }
  

if (localStorage.getItem('algrealeq3') == 1) {
  document.getElementById('algrealeqb3').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algrealeq3') == 0) {
  document.getElementById('algrealeqb3').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algrealeqb3').style.background = 'white';
  }

  
if (localStorage.getItem('algrealeq4') == 1) {
  document.getElementById('algrealeqb4').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algrealeq4') == 0) {
  document.getElementById('algrealeqb4').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algrealeqb4').style.background = 'white';
  }


  if (localStorage.getItem('algrealeq5') == 1) {
    document.getElementById('algrealeqb5').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('algrealeq5') == 0) {
    document.getElementById('algrealeqb5').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('algrealeqb5').style.background = 'white';
    }


if (localStorage.getItem('algrealeq6') == 1) {
  document.getElementById('algrealeqb6').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algrealeq6') == 0) {
  document.getElementById('algrealeqb6').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algrealeqb6').style.background = 'white';
  }    


if (localStorage.getItem('algrealeq7') == 1) {
  document.getElementById('algrealeqb7').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algrealeq7') == 0) {
  document.getElementById('algrealeqb7').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algrealeqb7').style.background = 'white';
  }

  
if (localStorage.getItem('algrealeq8') == 1) {
  document.getElementById('algrealeqb8').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algrealeq8') == 0) {
  document.getElementById('algrealeqb8').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algrealeqb8').style.background = 'white';
  }

  
if (localStorage.getItem('algrealeq9') == 1) {
  document.getElementById('algrealeqb9').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algrealeq9') == 0) {
  document.getElementById('algrealeqb9').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algrealeqb9').style.background = 'white';
  }

  
if (localStorage.getItem('algrealeq10') == 1) {
  document.getElementById('algrealeqb10').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algrealeq10') == 0) {
  document.getElementById('algrealeqb10').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algrealeqb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('algrealeq1');
    localStorage.removeItem('algrealeq2');
    localStorage.removeItem('algrealeq3');
    localStorage.removeItem('algrealeq4');
    localStorage.removeItem('algrealeq5');
    localStorage.removeItem('algrealeq6');
    localStorage.removeItem('algrealeq7');
    localStorage.removeItem('algrealeq8');
    localStorage.removeItem('algrealeq9');
    localStorage.removeItem('algrealeq10');
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 