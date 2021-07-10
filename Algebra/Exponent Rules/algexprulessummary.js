



if (localStorage.getItem('algexprules1') == 1) {
  document.getElementById('algexprulesb1').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algexprules1') == 0) {
  document.getElementById('algexprulesb1').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algexprulesb1').style.background = 'white';
  }

if (localStorage.getItem('algexprules2') == 1) {
    document.getElementById('algexprulesb2').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('algexprules2') == 0) {
    document.getElementById('algexprulesb2').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('algexprulesb2').style.background = 'white';
    }
  

if (localStorage.getItem('algexprules3') == 1) {
  document.getElementById('algexprulesb3').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algexprules3') == 0) {
  document.getElementById('algexprulesb3').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algexprulesb3').style.background = 'white';
  }

  
if (localStorage.getItem('algexprules4') == 1) {
  document.getElementById('algexprulesb4').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algexprules4') == 0) {
  document.getElementById('algexprulesb4').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algexprulesb4').style.background = 'white';
  }


  if (localStorage.getItem('algexprules5') == 1) {
    document.getElementById('algexprulesb5').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('algexprules5') == 0) {
    document.getElementById('algexprulesb5').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('algexprulesb5').style.background = 'white';
    }


if (localStorage.getItem('algexprules6') == 1) {
  document.getElementById('algexprulesb6').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algexprules6') == 0) {
  document.getElementById('algexprulesb6').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algexprulesb6').style.background = 'white';
  }    


if (localStorage.getItem('algexprules7') == 1) {
  document.getElementById('algexprulesb7').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algexprules7') == 0) {
  document.getElementById('algexprulesb7').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algexprulesb7').style.background = 'white';
  }

  
if (localStorage.getItem('algexprules8') == 1) {
  document.getElementById('algexprulesb8').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algexprules8') == 0) {
  document.getElementById('algexprulesb8').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algexprulesb8').style.background = 'white';
  }

  
if (localStorage.getItem('algexprules9') == 1) {
  document.getElementById('algexprulesb9').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algexprules9') == 0) {
  document.getElementById('algexprulesb9').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algexprulesb9').style.background = 'white';
  }

  
if (localStorage.getItem('algexprules10') == 1) {
  document.getElementById('algexprulesb10').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algexprules10') == 0) {
  document.getElementById('algexprulesb10').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algexprulesb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('algexprules1');
    localStorage.removeItem('algexprules2');
    localStorage.removeItem('algexprules3');
    localStorage.removeItem('algexprules4');
    localStorage.removeItem('algexprules5');
    localStorage.removeItem('algexprules6');
    localStorage.removeItem('algexprules7');
    localStorage.removeItem('algexprules8');
    localStorage.removeItem('algexprules9');
    localStorage.removeItem('algexprules10');
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 