



if (localStorage.getItem('subject1') == 1) {
  document.getElementById('subjectb1').style.background = '#7fff00';
}
  else if (localStorage.getItem('subject1') == 0) {
  document.getElementById('subjectb1').style.background = 'red';
  }
  else {
    document.getElementById('subjectb1').style.background = 'white';
  }

if (localStorage.getItem('subject2') == 1) {
    document.getElementById('subjectb2').style.background = '#7fff00';
  }
    else if (localStorage.getItem('subject2') == 0) {
    document.getElementById('subjectb2').style.background = 'red';
    }
    else {
      document.getElementById('subjectb2').style.background = 'white';
    }
  

if (localStorage.getItem('subject3') == 1) {
  document.getElementById('subjectb3').style.background = '#7fff00';
}
  else if (localStorage.getItem('subject3') == 0) {
  document.getElementById('subjectb3').style.background = 'red';
  }
  else {
    document.getElementById('subjectb3').style.background = 'white';
  }

  
if (localStorage.getItem('subject4') == 1) {
  document.getElementById('subjectb4').style.background = '#7fff00';
}
  else if (localStorage.getItem('subject4') == 0) {
  document.getElementById('subjectb4').style.background = 'red';
  }
  else {
    document.getElementById('subjectb4').style.background = 'white';
  }


  if (localStorage.getItem('subject5') == 1) {
    document.getElementById('subjectb5').style.background = '#7fff00';
  }
    else if (localStorage.getItem('subject5') == 0) {
    document.getElementById('subjectb5').style.background = 'red';
    }
    else {
      document.getElementById('subjectb5').style.background = 'white';
    }


if (localStorage.getItem('subject6') == 1) {
  document.getElementById('subjectb6').style.background = '#7fff00';
}
  else if (localStorage.getItem('subject6') == 0) {
  document.getElementById('subjectb6').style.background = 'red';
  }
  else {
    document.getElementById('subjectb6').style.background = 'white';
  }    


if (localStorage.getItem('subject7') == 1) {
  document.getElementById('subjectb7').style.background = '#7fff00';
}
  else if (localStorage.getItem('subject7') == 0) {
  document.getElementById('subjectb7').style.background = 'red';
  }
  else {
    document.getElementById('subjectb7').style.background = 'white';
  }

  
if (localStorage.getItem('subject8') == 1) {
  document.getElementById('subjectb8').style.background = '#7fff00';
}
  else if (localStorage.getItem('subject8') == 0) {
  document.getElementById('subjectb8').style.background = 'red';
  }
  else {
    document.getElementById('subjectb8').style.background = 'white';
  }

  
if (localStorage.getItem('subject9') == 1) {
  document.getElementById('subjectb9').style.background = '#7fff00';
}
  else if (localStorage.getItem('subject9') == 0) {
  document.getElementById('subjectb9').style.background = 'red';
  }
  else {
    document.getElementById('subjectb9').style.background = 'white';
  }

  
if (localStorage.getItem('subject10') == 1) {
  document.getElementById('subjectsubjectb10').style.background = '#7fff00';
}
  else if (localStorage.getItem('subject10') == 0) {
  document.getElementById('subjectb10').style.background = 'red';
  }
  else {
    document.getElementById('subjectb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem(subjectb1);
    localStorage.removeItem(subjectb2);
    localStorage.removeItem(subjectb3);
    localStorage.removeItem(subjectb4);
    localStorage.removeItem(subjectb5);
    localStorage.removeItem(subjectb6);
    localStorage.removeItem(subjectb7);
    localStorage.removeItem(subjectb8);
    localStorage.removeItem(subjectb9);
    localStorage.removeItem(subjectb10);
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 