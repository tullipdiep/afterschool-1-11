let startButton = document.querySelector('#start-button')
let stopButton = document.querySelector('#stop-button')
let resetButton = document.querySelector('#reset-button')



startButton.onclick = startTimer;

startTimer();

let timeValue = 0;


let timeDisplay = document.querySelector('#time-display')
console.log(timeDisplay)

function startTimer(){}

let interval;

//Do something every second.

interval = setInterval( function(){
console.log('running function')
}, 1000);

timeValue++;

console.log(timeValue);

//change display to time value, value
timeDisplay.innerHTML = timeValue++;


function startTimer(){}

function stopTimer(){}
clearInterval(interval);

function runTimer(){}
