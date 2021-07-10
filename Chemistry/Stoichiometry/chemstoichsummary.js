



if (localStorage.getItem('chemstoich1') == 1) {
  document.getElementById('chemstoichb1').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('chemstoich1') == 0) {
  document.getElementById('chemstoichb1').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('chemstoichb1').style.background = 'white';
  }

if (localStorage.getItem('chemstoich2') == 1) {
    document.getElementById('chemstoichb2').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('chemstoich2') == 0) {
    document.getElementById('chemstoichb2').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('chemstoichb2').style.background = 'white';
    }
  

if (localStorage.getItem('chemstoich3') == 1) {
  document.getElementById('chemstoichb3').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('chemstoich3') == 0) {
  document.getElementById('chemstoichb3').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('chemstoichb3').style.background = 'white';
  }

  
if (localStorage.getItem('chemstoich4') == 1) {
  document.getElementById('chemstoichb4').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('chemstoich4') == 0) {
  document.getElementById('chemstoichb4').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('chemstoichb4').style.background = 'white';
  }


  if (localStorage.getItem('chemstoich5') == 1) {
    document.getElementById('chemstoichb5').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('chemstoich5') == 0) {
    document.getElementById('chemstoichb5').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('chemstoichb5').style.background = 'white';
    }


if (localStorage.getItem('chemstoich6') == 1) {
  document.getElementById('chemstoichb6').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('chemstoich6') == 0) {
  document.getElementById('chemstoichb6').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('chemstoichb6').style.background = 'white';
  }    


if (localStorage.getItem('chemstoich7') == 1) {
  document.getElementById('chemstoichb7').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('chemstoich7') == 0) {
  document.getElementById('chemstoichb7').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('chemstoichb7').style.background = 'white';
  }

  
if (localStorage.getItem('chemstoich8') == 1) {
  document.getElementById('chemstoichb8').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('chemstoich8') == 0) {
  document.getElementById('chemstoichb8').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('chemstoichb8').style.background = 'white';
  }

  
if (localStorage.getItem('chemstoich9') == 1) {
  document.getElementById('chemstoichb9').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('chemstoich9') == 0) {
  document.getElementById('chemstoichb9').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('chemstoichb9').style.background = 'white';
  }

  
if (localStorage.getItem('chemstoich10') == 1) {
  document.getElementById('chemstoichb10').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('chemstoich10') == 0) {
  document.getElementById('chemstoichb10').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('chemstoichb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('chemstoich1');
    localStorage.removeItem('chemstoich2');
    localStorage.removeItem('chemstoich3');
    localStorage.removeItem('chemstoich4');
    localStorage.removeItem('chemstoich5');
    localStorage.removeItem('chemstoich6');
    localStorage.removeItem('chemstoich7');
    localStorage.removeItem('chemstoich8');
    localStorage.removeItem('chemstoich9');
    localStorage.removeItem('chemstoich10');
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 