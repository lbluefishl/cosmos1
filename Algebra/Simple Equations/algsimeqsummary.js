



if (localStorage.getItem('algsimeq1') == 1) {
  document.getElementById('algsimeqb1').style.background = '#7fff00';
}
  else if (localStorage.getItem('algsimeq1') == 0) {
  document.getElementById('algsimeqb1').style.background = 'red';
  }
  else {
    document.getElementById('algsimeqb1').style.background = 'white';
  }

if (localStorage.getItem('algsimeq2') == 1) {
    document.getElementById('algsimeqb2').style.background = '#7fff00';
  }
    else if (localStorage.getItem('algsimeq2') == 0) {
    document.getElementById('algsimeqb2').style.background = 'red';
    }
    else {
      document.getElementById('algsimeqb2').style.background = 'white';
    }
  

if (localStorage.getItem('algsimeq3') == 1) {
  document.getElementById('algsimeqb3').style.background = '#7fff00';
}
  else if (localStorage.getItem('algsimeq3') == 0) {
  document.getElementById('algsimeqb3').style.background = 'red';
  }
  else {
    document.getElementById('algsimeqb3').style.background = 'white';
  }

  
if (localStorage.getItem('algsimeq4') == 1) {
  document.getElementById('algsimeqb4').style.background = '#7fff00';
}
  else if (localStorage.getItem('algsimeq4') == 0) {
  document.getElementById('algsimeqb4').style.background = 'red';
  }
  else {
    document.getElementById('algsimeqb4').style.background = 'white';
  }


  if (localStorage.getItem('algsimeq5') == 1) {
    document.getElementById('algsimeqb5').style.background = '#7fff00';
  }
    else if (localStorage.getItem('algsimeq5') == 0) {
    document.getElementById('algsimeqb5').style.background = 'red';
    }
    else {
      document.getElementById('algsimeqb5').style.background = 'white';
    }


if (localStorage.getItem('algsimeq6') == 1) {
  document.getElementById('algsimeqb6').style.background = '#7fff00';
}
  else if (localStorage.getItem('algsimeq6') == 0) {
  document.getElementById('algsimeqb6').style.background = 'red';
  }
  else {
    document.getElementById('algsimeqb6').style.background = 'white';
  }    


if (localStorage.getItem('algsimeq7') == 1) {
  document.getElementById('algsimeqb7').style.background = '#7fff00';
}
  else if (localStorage.getItem('algsimeq7') == 0) {
  document.getElementById('algsimeqb7').style.background = 'red';
  }
  else {
    document.getElementById('algsimeqb7').style.background = 'white';
  }

  
if (localStorage.getItem('algsimeq8') == 1) {
  document.getElementById('algsimeqb8').style.background = '#7fff00';
}
  else if (localStorage.getItem('algsimeq8') == 0) {
  document.getElementById('algsimeqb8').style.background = 'red';
  }
  else {
    document.getElementById('algsimeqb8').style.background = 'white';
  }

  
if (localStorage.getItem('algsimeq9') == 1) {
  document.getElementById('algsimeqb9').style.background = '#7fff00';
}
  else if (localStorage.getItem('algsimeq9') == 0) {
  document.getElementById('algsimeqb9').style.background = 'red';
  }
  else {
    document.getElementById('algsimeqb9').style.background = 'white';
  }

  
if (localStorage.getItem('algsimeq10') == 1) {
  document.getElementById('algsimeqalgsimeqb10').style.background = '#7fff00';
}
  else if (localStorage.getItem('algsimeq10') == 0) {
  document.getElementById('algsimeqb10').style.background = 'red';
  }
  else {
    document.getElementById('algsimeqb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem(algsimeqb1);
    localStorage.removeItem(algsimeqb2);
    localStorage.removeItem(algsimeqb3);
    localStorage.removeItem(algsimeqb4);
    localStorage.removeItem(algsimeqb5);
    localStorage.removeItem(algsimeqb6);
    localStorage.removeItem(algsimeqb7);
    localStorage.removeItem(algsimeqb8);
    localStorage.removeItem(algsimeqb9);
    localStorage.removeItem(algsimeqb10);
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 