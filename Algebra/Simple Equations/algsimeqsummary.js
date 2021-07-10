



if (localStorage.getItem('algsimeq1') == 1) {
  document.getElementById('algsimeqb1').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algsimeq1') == 0) {
  document.getElementById('algsimeqb1').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algsimeqb1').style.background = 'white';
  }

if (localStorage.getItem('algsimeq2') == 1) {
    document.getElementById('algsimeqb2').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('algsimeq2') == 0) {
    document.getElementById('algsimeqb2').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('algsimeqb2').style.background = 'white';
    }
  

if (localStorage.getItem('algsimeq3') == 1) {
  document.getElementById('algsimeqb3').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algsimeq3') == 0) {
  document.getElementById('algsimeqb3').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algsimeqb3').style.background = 'white';
  }

  
if (localStorage.getItem('algsimeq4') == 1) {
  document.getElementById('algsimeqb4').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algsimeq4') == 0) {
  document.getElementById('algsimeqb4').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algsimeqb4').style.background = 'white';
  }


  if (localStorage.getItem('algsimeq5') == 1) {
    document.getElementById('algsimeqb5').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('algsimeq5') == 0) {
    document.getElementById('algsimeqb5').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('algsimeqb5').style.background = 'white';
    }


if (localStorage.getItem('algsimeq6') == 1) {
  document.getElementById('algsimeqb6').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algsimeq6') == 0) {
  document.getElementById('algsimeqb6').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algsimeqb6').style.background = 'white';
  }    


if (localStorage.getItem('algsimeq7') == 1) {
  document.getElementById('algsimeqb7').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algsimeq7') == 0) {
  document.getElementById('algsimeqb7').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algsimeqb7').style.background = 'white';
  }

  
if (localStorage.getItem('algsimeq8') == 1) {
  document.getElementById('algsimeqb8').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algsimeq8') == 0) {
  document.getElementById('algsimeqb8').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algsimeqb8').style.background = 'white';
  }

  
if (localStorage.getItem('algsimeq9') == 1) {
  document.getElementById('algsimeqb9').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algsimeq9') == 0) {
  document.getElementById('algsimeqb9').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algsimeqb9').style.background = 'white';
  }

  
if (localStorage.getItem('algsimeq10') == 1) {
  document.getElementById('algsimeqb10').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algsimeq10') == 0) {
  document.getElementById('algsimeqb10').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algsimeqb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('algsimeq1');
    localStorage.removeItem('algsimeq2');
    localStorage.removeItem('algsimeq3');
    localStorage.removeItem('algsimeq4');
    localStorage.removeItem('algsimeq5');
    localStorage.removeItem('algsimeq6');
    localStorage.removeItem('algsimeq7');
    localStorage.removeItem('algsimeq8');
    localStorage.removeItem('algsimeq9');
    localStorage.removeItem('algsimeq10');
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 