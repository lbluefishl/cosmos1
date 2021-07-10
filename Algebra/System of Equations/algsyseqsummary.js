



if (localStorage.getItem('algsyseq1') == 1) {
  document.getElementById('algsyseqb1').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algsyseq1') == 0) {
  document.getElementById('algsyseqb1').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algsyseqb1').style.background = 'white';
  }

if (localStorage.getItem('algsyseq2') == 1) {
    document.getElementById('algsyseqb2').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('algsyseq2') == 0) {
    document.getElementById('algsyseqb2').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('algsyseqb2').style.background = 'white';
    }
  

if (localStorage.getItem('algsyseq3') == 1) {
  document.getElementById('algsyseqb3').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algsyseq3') == 0) {
  document.getElementById('algsyseqb3').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algsyseqb3').style.background = 'white';
  }

  
if (localStorage.getItem('algsyseq4') == 1) {
  document.getElementById('algsyseqb4').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algsyseq4') == 0) {
  document.getElementById('algsyseqb4').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algsyseqb4').style.background = 'white';
  }


  if (localStorage.getItem('algsyseq5') == 1) {
    document.getElementById('algsyseqb5').style.background = 'rgb(181, 238, 238)';
  }
    else if (localStorage.getItem('algsyseq5') == 0) {
    document.getElementById('algsyseqb5').style.background = 'rgb(255, 213, 128)';
    }
    else {
      document.getElementById('algsyseqb5').style.background = 'white';
    }


if (localStorage.getItem('algsyseq6') == 1) {
  document.getElementById('algsyseqb6').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algsyseq6') == 0) {
  document.getElementById('algsyseqb6').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algsyseqb6').style.background = 'white';
  }    


if (localStorage.getItem('algsyseq7') == 1) {
  document.getElementById('algsyseqb7').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algsyseq7') == 0) {
  document.getElementById('algsyseqb7').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algsyseqb7').style.background = 'white';
  }

  
if (localStorage.getItem('algsyseq8') == 1) {
  document.getElementById('algsyseqb8').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algsyseq8') == 0) {
  document.getElementById('algsyseqb8').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algsyseqb8').style.background = 'white';
  }

  
if (localStorage.getItem('algsyseq9') == 1) {
  document.getElementById('algsyseqb9').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algsyseq9') == 0) {
  document.getElementById('algsyseqb9').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algsyseqb9').style.background = 'white';
  }

  
if (localStorage.getItem('algsyseq10') == 1) {
  document.getElementById('algsyseqb10').style.background = 'rgb(181, 238, 238)';
}
  else if (localStorage.getItem('algsyseq10') == 0) {
  document.getElementById('algsyseqb10').style.background = 'rgb(255, 213, 128)';
  }
  else {
    document.getElementById('algsyseqb10').style.background = 'white';
  }




  let button = document.getElementById('clear');

  button.onclick = function() {
    localStorage.removeItem('algsyseq1');
    localStorage.removeItem('algsyseq2');
    localStorage.removeItem('algsyseq3');
    localStorage.removeItem('algsyseq4');
    localStorage.removeItem('algsyseq5');
    localStorage.removeItem('algsyseq6');
    localStorage.removeItem('algsyseq7');
    localStorage.removeItem('algsyseq8');
    localStorage.removeItem('algsyseq9');
    localStorage.removeItem('algsyseq10');
    var numbers = document.getElementsByClassName('nav'); 
    for(var i = 0; i < numbers.length; i++){
		numbers[i].style.backgroundColor = "white";
    }
  } 