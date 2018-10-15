var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName () {
    var myName = prompt('please enter your name');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;

    if(!localStorage ==='name') {
        setUserName();
    } else {
        var storedName = localStorage.getItem('name');
        myHeading.textContent = 'Mozilla is cool, ' + storedName;
    }
}

myButton.onclick = function() {
    setUserName();
}



var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src') 
    if (mySrc === 'images/Mozilla_Firefox_Logo.png') {
        myImage.setAttribute('src','images/dog.jpg');
    } else {
        myImage.setAttribute('src','images/Mozilla_Firefox_Logo.png')
    }
}