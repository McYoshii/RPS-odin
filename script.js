
let computer;
let player;

function getComputerChoice (){
    //my_arr = ["Rock", "Paper", "Scissors"];
    value = Math.floor(Math.random()*3)+1;

   // switch (value){
    //    case 1:
      //      computer="rock";
        //    break;
        //case 2:
          //  computer="paper";
            //break;   
       // case 3:
         //   computer="scissors";
           // break;
    //}

    if (value===1){
        console.log("rock")
        computer="rock"
        return "rock";
        
    } else if (value===2) {
        console.log("paper")
        computer="paper"
        return "potato"
        
    } else if (value===3) {
        console.log("scissors")
        computer="scissors"
        return "poop"
    } else {
        console.log("it brokin :(")
    }

    console.log(computer)




    //let item = my_arr[~~value];
}


function playerSelection (){
    let playerPrompt = prompt("Please type -Rock-, -Paper-, or -Scissors-:")
    console.log(playerPrompt);

    if (playerPrompt==="rock"){
        console.log("rock")
        player="rock"
        return "rock";
        
    } else if (playerPrompt==="paper") {
        console.log("paper")
        player="paper"
        return "paper"
        
    } else if (playerPrompt==="scissors") {
        console.log("scissors")
        player="scissors"
        return "scissors"
    } else {
        console.log("it brokin :(")
    }
}



///build below function!
function playRound (playerSelection, getComputerChoice){
    if (player===computer){
        console.log("TIE!")
    } else if (player == 'rock' && computer == "paper" ) {
        console.log("COMP WINS! PAPER>ROCK!")
    } else if (player == 'rock' && computer == "scissors" ) {
        console.log("PLAYER WINS! SCISSORS>ROCK!")
    } else if (player == 'paper' && computer == "scissors" ) {
        console.log("COMP WINS! SCISSORS>PAPER!")
    } else if (player == 'paper' && computer == "rock" ) {
        console.log("PLAYER WINS! PAPER>ROCK!")
    } else if (player == 'scissors' && computer == "rock" ) {
        console.log("COMP WINS! ROCK>SCISSORS!")
    } else if (player == 'scissors' && computer == "paper" ) {
        console.log("PLAYER WINS! SCISSORS>PAPER!")
    } else {
        console.log('whoops, this thing might be broken...')
    }

}


playerSelection();
getComputerChoice();
playRound();





