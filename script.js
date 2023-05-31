let computer; //Empty variable that is to be overridden
let player;   //Empty variable that is to be overridden
let recordResults = 0;  // represents default score out of 5 matches played

console.log("ROCK, PAPER, SCISSORS! \n\n Info: \n Each time the player wins a match, they will recieve one point added to their final score (out of 5 matches played). A tie will result in half a point recieved, and a loss will result in no points gained. Whoever wins with a score of 2.5 or higher wins. Happy playing! :) ")
function getComputerChoice (){
    value = Math.floor(Math.random()*3)+1; //makes random computer selection

   // switch (value){ //just for my own referrence, that the function could be written this way as well. Wrote using if/else statements for my own practice only
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

    if (value===1){ // translates randomly generated number into a respective string
        //console.log("rock")
        computer="rock"
        return "rock";
        
    } else if (value===2) {
        //console.log("paper")
        computer="paper"
        return "paper"
        
    } else if (value===3) {
        //console.log("scissors")
        computer="scissors"
        return "scissors"
    } else {
        console.log("I think it brokin :( ") 

    }
}


function playerSelection (){
    let playerPrompt = prompt("Please type -Rock-, -Paper-, or -Scissors-:").toLowerCase(); //SELF NOTE: .toLowerCase() makes prompt case insensitive
    //console.log(playerPrompt);

    if (playerPrompt==="rock"){ //these assign a relevant variable to the current unassigned "player" variable
        //console.log("rock")
        player="rock"
        return "rock";
        
    } else if (playerPrompt==="paper") {
        //console.log("paper")
        player="paper"
        return "paper"
        
    } else if (playerPrompt==="scissors") {
        //console.log("scissors")
        player="scissors"
        return "scissors"
    } else {
        console.log("Please input something else")  //makes function repeat itself if player puts in a misinput
        playerSelection();
        return;
    }
}


function playRound (playerSelection, getComputerChoice){ // everything below this is responsible for the games overall functionality
    let results = console.log('Results:\n\n PLAYER = ', player, "\n COMPUTER = ", computer,);
    //let displayedPlayerScore = console.log(`TOTAL PLAYER SCORE: ${recordResults} POINTS`) //unused function for counter. this variable, as well as everywhere it is called is commented out and will be fixed.
    

    if (player===computer){  
        recordResults+=0.5
        results;
        console.log("TIE!")
        //displayedPlayerScore;
        
    } else if (player == 'rock' && computer == "paper" ) {
        results;
        console.log("COMP WINS! PAPER>ROCK!")
        //displayedPlayerScore;
        
    } else if (player == 'rock' && computer == "scissors" ) {
        recordResults++
        results;
        console.log("PLAYER WINS! ROCK>SCISSORS!")
        //displayedPlayerScore;
        
    } else if (player == 'paper' && computer == "scissors" ) {
        results;
        console.log("COMP WINS! SCISSORS>PAPER")
        //displayedPlayerScore;

    } else if (player == 'paper' && computer == "rock" ) {
        recordResults++
        results;
        console.log("PLAYER WINS! PAPER>ROCK!")
        //displayedPlayerScore;
        
    } else if (player == 'scissors' && computer == "rock" ) {
        results;
        console.log("COMP WINS! ROCK>SCISSORS!")
        //displayedPlayerScore;
        
    } else if (player == 'scissors' && computer == "paper" ) {
        recordResults++
        results;
        console.log("PLAYER WINS! SCISSORS>PAPER!")
        //displayedPlayerScore;
        
    } else {
        console.log(`ERROR: try inputting 'rock', 'paper' or 'scissors' instead.`)
    }

}

function game(){ //calls all of the above functions within one function. more for convenience more than anything else.
    playerSelection();
    getComputerChoice();
    playRound();

}

function repeatGame(){
    
    for (i=0; i<5; i++) { //loops function logic 5 times over.
        console.log(`\n ROUND ${i+1}`)
        game();
    }

}

function resultsTally(){
    
    if(recordResults===2.5){
        console.log(`Player Score: ${recordResults}`)
        console.log(`Computer Score: ${5-recordResults}`) 
        console.log("\nTIE!\n")
    } else if(recordResults>=2.5){
        console.log(`Player Score: ${recordResults}`)
        console.log(`Computer Score: ${5-recordResults}`) 
        console.log("\nPLAYER WINS!\n")
    } else if (recordResults<=2.5){
        console.log(`Player Score: ${recordResults}`)
        console.log(`Computer Score: ${5-recordResults}`) 
        console.log("\nCOMPUTER WINS!\n")
    } else {
        console.log("Whoops, I think it it might be broken?")
    }

  
  
}

repeatGame();
console.log(recordResults)
resultsTally();






