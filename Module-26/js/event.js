// Option 1: 
// <button onclick="document.body.style.backgroundColor= 'Yellow'">Make Yellow</button>

// option 2 
function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// option 3: 

const makeBlueButton = document.getElementById('makeBlue');
makeBlueButton.onclick = blueButton;
function blueButton(){
    document.body.style.backgroundColor = 'blue';
} 

// option 3 another:
const makePurple = document.getElementById ('makePurple');
makePurple.onclick = function(){
    document.body.style.backgroundColor = 'purple';

}
// option 4:
const makePinkButton =document.getElementById('makePink');
makePinkButton.addEventListener('click', pinkButton);
function pinkButton(){
    document.body.style.backgroundColor = 'pink';
}

// Option 4 another:

const makeGreenButton = document.getElementById('makeGrren');
makeGreenButton.addEventListener('click', function(){
    document.body.style.backgroundColor = 'green';
});

// Option 4 Final :

document.getElementById('makeOrange').addEventListener('click', function(){
    document.body.style.backgroundColor = 'orange';
    
});