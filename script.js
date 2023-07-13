let computer; //Empty variable that is to be overridden
let player;   //Empty variable that is to be overridden
let result;  
let round = 0;



const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const roundsText = document.querySelector("#roundsText");
const winText = document.querySelector("#winText");

const choiceBtns= document.querySelectorAll(".choiceBtn");


choiceBtns.forEach(button => button.addEventListener('click', () => {

    player = button.textContent; 
    getComputerChoice();

    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
    roundsText.textContent = `Round ${round+=1}`;
    winText.textContent = ""
    

}));

function getComputerChoice (){
     const value = Math.floor(Math.random()*3)+1; //makes random computer selection


    if (value===1){ // translates randomly generated number into a respective string
        computer="rock"
        
    } else if (value===2) {
        computer="paper"
        
    } else if (value===3) {
        computer="scissors"
    } else {
        console.log("I think it brokin :( ") 

    }
}

    
    

    //let playerPrompt;

    //if (playerPrompt==="rock"){ //these assign a relevant variable to the current unassigned "player" variable.
      //  player="rock"
       // return "rock";
        
    //} //else if (playerPrompt==="paper") {
      //  player="paper"
       // return "paper"
        
  //  } else if (playerPrompt==="scissors") {
    //    player="scissors"
      //  return "scissors"
 //   } else {
   //     console.log("Please input something else")  //makes function repeat itself if player puts in a misinput
        //playerSelection();
     //   return;
 //   }



function checkWinner (){ // everything below this is responsible for the games overall functionality
    let results = console.log('Results:\n\n PLAYER = ', player, "\n COMPUTER = ", computer,);
    //let displayedPlayerScore = console.log(`TOTAL PLAYER SCORE: ${recordResults} POINTS`) //unused function for counter. this variable, as well as everywhere it is called is commented out and will be fixed.
    

    if (player === computer){  
        return "Tie!"
        //displayedPlayerScore;
        
    } else if (player == 'rock' && computer == "paper" ) {
        return "COMP WINS! PAPER>ROCK!"
        //displayedPlayerScore;
        
    } else if (player == 'rock' && computer == "scissors" ) {
        return "PLAYER WINS! ROCK>SCISSORS!"
        //displayedPlayerScore;
        
    } else if (player == 'paper' && computer == "scissors" ) {
        return "COMP WINS! SCISSORS>PAPER"
        //displayedPlayerScore;

    } else if (player == 'paper' && computer == "rock" ) {
        return "PLAYER WINS! PAPER>ROCK!"
        //displayedPlayerScore;
        
    } else if (player == 'scissors' && computer == "rock" ) {
        return "COMP WINS! ROCK>SCISSORS!"
        //displayedPlayerScore;
        
    } else if (player == 'scissors' && computer == "paper" ) {
        return "PLAYER WINS! SCISSORS>PAPER!"
        //displayedPlayerScore;
        
    } else {
        console.log(`ERROR: try inputting 'rock', 'paper' or 'scissors' instead.`)
    }


}


function repeatGame(){

    if (round==5){ //TO BE CONTINUED: COUNT EACH ROUND UNTIL ROUND = 5!
        window.stop();
}

    
    for (i=0; i<5; i++) { //loops function logic 5 times over.
        
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

