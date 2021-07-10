



if (localStorage.getItem('algabsval1') == 1) {
  document.getElementById('algabsvalb1').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algabsval1') == 0) {
  document.getElementById('algabsvalb1').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algabsvalb1').style.background = 'white';
  }

if (localStorage.getItem('algabsval2') == 1) {
    document.getElementById('algabsvalb2').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('algabsval2') == 0) {
    document.getElementById('algabsvalb2').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('algabsvalb2').style.background = 'white';
    }
  

if (localStorage.getItem('algabsval3') == 1) {
  document.getElementById('algabsvalb3').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algabsval3') == 0) {
  document.getElementById('algabsvalb3').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algabsvalb3').style.background = 'white';
  }

  
if (localStorage.getItem('algabsval4') == 1) {
  document.getElementById('algabsvalb4').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algabsval4') == 0) {
  document.getElementById('algabsvalb4').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algabsvalb4').style.background = 'white';
  }


  if (localStorage.getItem('algabsval5') == 1) {
    document.getElementById('algabsvalb5').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('algabsval5') == 0) {
    document.getElementById('algabsvalb5').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('algabsvalb5').style.background = 'white';
    }





  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('algabsval1');
    localStorage.removeItem('algabsval2');
    localStorage.removeItem('algabsval3');
    localStorage.removeItem('algabsval4');
    localStorage.removeItem('algabsval5');

    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 