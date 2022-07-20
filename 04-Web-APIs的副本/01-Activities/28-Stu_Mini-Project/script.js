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
    getlosses();
}

//点击start button时 的startGame function：
function startGame(){
    isWin = false;
    timerCount = 10;
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
    localStorage.setItem("loseCount", loseCounter);
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
    if (storedLosses === null){
        loseCounter = 0;
    }else{
        loseCounter = storedLosses;
    }
    lose.textContent = loseCounter;
}

function checkWin(){
    //If the word equals the blankLetters array when converted to string, set isWin true:
    if (chosenWord === blanksLetters.join("")){
        //This value is used in the timer function to test if win condition is met
        isWin = true;
    }
}

//Tests if guessed letter is in word and renders it to the screen
function checkletters(letter){
    var letterInWord = false;
    for( var i = 0; i < numBlanks; i++){
        if (chosenWord[i] === letter){
            letterInWord = true;
        }
    }
    if (letterInWord){
        for(var j = 0; j < numBlanks; j++){
            if (chosenWord[j] === letter){
                blanksLetters[j] = letter;
            }
        }
        wordBlank.textContent = blanksLetters.join(" ");
    }
}
//Attach even Listener to document to listen for key even
document.addEventListener("keydown", function(event){
    //If the count is 0, exit function
    if (timerCount === 0){
        return;
    }
    //COnvert all keys to lower case
    var key = event.key.toLowerCase();
    var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789".split("");
    //Test if key pushed is letter
    if (alphabetNumericCharacters.includes(key)){
        var letterGuessed = event.key;
        checkletters(letterGuessed)
        checkWin();
    }
})


//Attach event listener to start button to call StartGame function on click
startButton.addEventListener("click", startGame);

//Calls init()so that it fires when page opened
init();

//Add reset button
var resetButton = document.querySelector(".reset-button");

function resetGame(){
    //Reset win and loss counts
    winCounter = 0;
    loseCounter = 0;
    //Renders win and loss counts and sets them into clients storage
    setWins();
    setLosses();
}
//Attaches event listener to button
resetButton.addEventListener("click", resetGame);


