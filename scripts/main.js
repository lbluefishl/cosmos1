let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/1.png') {
      myImage.setAttribute('src','images/2.png');
    } else {
      myImage.setAttribute('src','images/1.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Welcome to my site! Please enter your name.');
	if (!myName) {
		setUserName();
	} else {
		localStorage.setItem('name', myName);
		myHeading.textContent = 'Welcome to my site, ' + myName;
	}
}

	if(!localStorage.getItem('name')) {
	setUserName();
	} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Welcome to my site, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}