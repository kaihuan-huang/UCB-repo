var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var chosenWord = "";
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

//计算机随机选放入列
var letterInChosenWord = [];
var blanksLetters =[];

//
var words = ["variable","array", "modulus", "object", "function", "string", "boolean"];

//输｜｜赢function 
function init(){
    getWins();
    getLosses();
}

//点击start button时 的startGame function：
function startGame(){
    isWin = false;
    timerCount = 30;
    //Prevent start button from being clicked when round is in progress
    startButton.disabled = true;
    renderBlanks();
    startTimer();
}

//The winGame function is called when the win condition is met 
function winGame(){
    wordBlank.textContent = "YOU WON!!"
    winCounter++;
    startButton.disabled = false;
    setWins()
}

//The loseGame function is called when timer reaches 0
function loseGame(){
    wordBlank.textContent = "GAME OVER."
    loseCounter++;
    startButton.disabled = false;
    setLosses();
}

//The setTimer() function starts & stops the timer & triggers winGame() & loseGame()
function startTimer(){
    //set timer
    timer = setInterval(function(){
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >=0 ){
            //test win condition is met:
            if (isWin && timerCount>0){
                //clear interval and stops timer
                clearInterval(timer);
                winGame();
            }
        }

        //test if the time has run out 
        if (timerCount === 0) {
            clearInterval(timer);
            loseGame();
        }
    }, 1000)
}

//create blanks on screen
function renderBlanks(){
    //Randomly picks word from array
    chosenWord = words[Math.floor(Math.random()*words.length)];
    letterInChosenWord = chosenWord.split("");
    numBlanks = letterInChosenWord.length;
    blanksLetters = [];
    //Use loop to push blanks to blankLetters array
    for (var i = 0; i < numBlanks; i++){
        blanksLetters.push("_");
    }
    //Convert blankLetters array into a string  and renders it on the screen
    wordBlank.textContent = blanksLetters.join(" ");

}

//Update win count on the screen and sets win count to client storge 
function setWins(){
    win.textContent = winCounter;
    localStorage.setItem("winCount", winCounter);
}

//Update lose count ...
function setLosses(){
    lose.textContent = loseCounter;
    localStorage.setItem("loseCOunt", loseCounter);
}

//These function are used by init:
function getWins(){
    //Get stored value from client storage, if it exists:
    var storedWins = localStorage.getItem("winCount");
    //if stored value doesn't exist, set cpunter to 0
    if (storedWins === null){
        winCounter = 0;
    }else{
        //If a value is retrived from client storage set the winCounter to that value
        winCounter = storedWins;
    }
    //Render win count to the page
    win.textContent = winCounter;
}

function getlosses(){
    var storedLosses = localStorage.getItem("loseCount");
    
}
