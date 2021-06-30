



if (localStorage.getItem('algexpeq1') == 1) {
  document.getElementById('algexpeqb1').style.background = '#7fff00';
}
  else if (localStorage.getItem('algexpeq1') == 0) {
  document.getElementById('algexpeqb1').style.background = 'red';
  }
  else {
    document.getElementById('algexpeqb1').style.background = 'white';
  }

if (localStorage.getItem('algexpeq2') == 1) {
    document.getElementById('algexpeqb2').style.background = '#7fff00';
  }
    else if (localStorage.getItem('algexpeq2') == 0) {
    document.getElementById('algexpeqb2').style.background = 'red';
    }
    else {
      document.getElementById('algexpeqb2').style.background = 'white';
    }
  

if (localStorage.getItem('algexpeq3') == 1) {
  document.getElementById('algexpeqb3').style.background = '#7fff00';
}
  else if (localStorage.getItem('algexpeq3') == 0) {
  document.getElementById('algexpeqb3').style.background = 'red';
  }
  else {
    document.getElementById('algexpeqb3').style.background = 'white';
  }

  
if (localStorage.getItem('algexpeq4') == 1) {
  document.getElementById('algexpeqb4').style.background = '#7fff00';
}
  else if (localStorage.getItem('algexpeq4') == 0) {
  document.getElementById('algexpeqb4').style.background = 'red';
  }
  else {
    document.getElementById('algexpeqb4').style.background = 'white';
  }


  if (localStorage.getItem('algexpeq5') == 1) {
    document.getElementById('algexpeqb5').style.background = '#7fff00';
  }
    else if (localStorage.getItem('algexpeq5') == 0) {
    document.getElementById('algexpeqb5').style.background = 'red';
    }
    else {
      document.getElementById('algexpeqb5').style.background = 'white';
    }


if (localStorage.getItem('algexpeq6') == 1) {
  document.getElementById('algexpeqb6').style.background = '#7fff00';
}
  else if (localStorage.getItem('algexpeq6') == 0) {
  document.getElementById('algexpeqb6').style.background = 'red';
  }
  else {
    document.getElementById('algexpeqb6').style.background = 'white';
  }    


if (localStorage.getItem('algexpeq7') == 1) {
  document.getElementById('algexpeqb7').style.background = '#7fff00';
}
  else if (localStorage.getItem('algexpeq7') == 0) {
  document.getElementById('algexpeqb7').style.background = 'red';
  }
  else {
    document.getElementById('algexpeqb7').style.background = 'white';
  }

  
if (localStorage.getItem('algexpeq8') == 1) {
  document.getElementById('algexpeqb8').style.background = '#7fff00';
}
  else if (localStorage.getItem('algexpeq8') == 0) {
  document.getElementById('algexpeqb8').style.background = 'red';
  }
  else {
    document.getElementById('algexpeqb8').style.background = 'white';
  }

  
if (localStorage.getItem('algexpeq9') == 1) {
  document.getElementById('algexpeqb9').style.background = '#7fff00';
}
  else if (localStorage.getItem('algexpeq9') == 0) {
  document.getElementById('algexpeqb9').style.background = 'red';
  }
  else {
    document.getElementById('algexpeqb9').style.background = 'white';
  }

  
if (localStorage.getItem('algexpeq10') == 1) {
  document.getElementById('algexpeqb10').style.background = '#7fff00';
}
  else if (localStorage.getItem('algexpeq10') == 0) {
  document.getElementById('algexpeqb10').style.background = 'red';
  }
  else {
    document.getElementById('algexpeqb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('algexpeq1');
    localStorage.removeItem('algexpeq2');
    localStorage.removeItem('algexpeq3');
    localStorage.removeItem('algexpeq4');
    localStorage.removeItem('algexpeq5');
    localStorage.removeItem('algexpeq6');
    localStorage.removeItem('algexpeq7');
    localStorage.removeItem('algexpeq8');
    localStorage.removeItem('algexpeq9');
    localStorage.removeItem('algexpeq10');
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 