let computer; //Empty variable that is to be overridden
let player;   //Empty variable that is to be overridden
//add "recordResults" function that tallies everything up.
let recordResults; //a placeholder for the above comment
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

    console.log(computer)




    //let item = my_arr[~~value];
}


function playerSelection (){
    let playerPrompt = prompt("Please type -Rock-, -Paper-, or -Scissors-:").toLowerCase(); //SELF NOTE: .toLowerCase() makes prompt case insensitive
    //console.log(playerPrompt);

    if (playerPrompt==="rock"){ //this assigns relevant variable to unassigned "player" variable
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
        console.log("Please input something else")  //add: code that makes this function repeat itself
        playerSelection();
        return;
    }
}




function playRound (playerSelection, getComputerChoice){ // everything below this is responsible for the games overall functionality
    let results = console.log('Results:\n\n PLAYER = ', player, "\n COMPUTER = ", computer,);
    if (player===computer){  
        console.log("TIE!")
    } else if (player == 'rock' && computer == "paper" ) {
        console.log("COMP WINS! PAPER>ROCK!")
        results;
    } else if (player == 'rock' && computer == "scissors" ) {
        console.log("PLAYER WINS! SCISSORS>ROCK!")
        results;
    } else if (player == 'paper' && computer == "scissors" ) {
        console.log("COMP WINS! SCISSORS>PAPER")
        results;
    } else if (player == 'paper' && computer == "rock" ) {
        console.log("PLAYER WINS! PAPER>ROCK!")
        results;
    } else if (player == 'scissors' && computer == "rock" ) {
        console.log("COMP WINS! ROCK>SCISSORS!")
        results;
    } else if (player == 'scissors' && computer == "paper" ) {
        console.log("PLAYER WINS! SCISSORS>PAPER!")
        results;
    } else {
        console.log('ERROR: try inputting -rock-, -paper- or -scissors- instead.')
    }

}

function game(){
    playerSelection();
    getComputerChoice();
    playRound();

}

function repeatGame(){
    
    for (i=0; i<5; i++) { //loops function logic 5 times
        console.log(`\n ROUND ${i+1}`)
        game();
    }

}

function recordResults(){
  
    }

}

//playerSelection();
//getComputerChoice();
//playRound();
repeatGame();






