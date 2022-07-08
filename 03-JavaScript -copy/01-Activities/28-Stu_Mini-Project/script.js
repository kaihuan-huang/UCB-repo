// alert('welcome to our rock, paper, scissors game!')
// var userChoice=prompt("What do you choose? Type r for Rock, p for Paper or s for Scissors.");
// var computerOption=['r','p','s'];
// var computerChoice=computerOption[Math.floor(Math.random()*3)];

// if userChoice=
// console.log(computerChoice)
// if (userChoice==computerChoice){
//     console.log( "It's a draw!")
// }
// if (userChoice=='r'){
//    if (computerChoice=='p'){
//     console.log('Computer win.')
//     else
//    }
var wins =0;
var ties = 0;
var losses =0;

//Array of options for computer to pick from
var options =['R', "P","S"];

var playGame = function(){
    //ask user for their choice
    var userChoice = window.prompt("Enter R, P, or S:");


    //If user pressed Cancle, immedately end function
    if (!userChoice){
        return;
    }

    userChoice = userChoice.toUpperCase();

    //get random index from array of options
    var index =Math.floor(Math.random()* options.length);
    var computerChoice = options[index];
    window.alert('The computer chose' + computerChoice);

    // if choices are same === ties
    if (userChoice === computerChoice){
        ties++;
        window.alert(" It's a tie!");
    //check every win condition for the player
    } else if (
        (userChoice === "R" && computerChoice ==="S") ||
        (userChoice === "P" && computerChoice === "R")||
        (userChoice === "S" && computerChoice === "P")
    ){
            wins++;
            window.alert("You win!");
    }else{
        losses++;
        window.alert("You lost!")
    }

    //Print state with break 
    window.alert(
        "States: \n Wins:" +wins + "\n Losses" + losses + "\n Ties" +ties
    );

    //Play again?
    var playAgain = window.confirm("Play again?");
    if (playAgain){
        playGame();
    }
}; 
playGame();