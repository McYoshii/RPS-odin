let computer; //Empty variable that is to be overridden
let player;   //Empty variable that is to be overridden
let resultsTally = 0; //to be touched upon
let result;  
let round = 0;
let winAnnounce



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
    winText.textContent = counter();

    console.log(resultsTally);
    

    if (round === 5) {
            console.log('Task performed!');

            choiceBtns.forEach(button => button.disabled = true);
            resultText.textContent = winAnnounce;
            
           
     }
    

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


function checkWinner (){ // everything below this is responsible for the games overall functionality
    let results = console.log('Results:\n\n PLAYER = ', player, "\n COMPUTER = ", computer,);
    //let displayedPlayerScore = console.log(`TOTAL PLAYER SCORE: ${recordResults} POINTS`) //unused function for counter. this variable, as well as everywhere it is called is commented out and will be fixed.
    

    if (player === computer){  
        return "Tie!"
        //displayedPlayerScore;
        
    } else if (player == 'rock' && computer == "paper" ) {
        return "COMP WINS!"
        //displayedPlayerScore;
        
        
    } else if (player == 'rock' && computer == "scissors" ) {
        resultsTally+=1
        return "PLAYER WINS!!"
        //displayedPlayerScore;
        
    } else if (player == 'paper' && computer == "scissors" ) {
        return "COMP WINS!"
        //displayedPlayerScore;

    } else if (player == 'paper' && computer == "rock" ) {
        resultsTally+=1
        return "PLAYER WINS!"
       
        //displayedPlayerScore;
        
    } else if (player == 'scissors' && computer == "rock" ) {
        return "COMP WINS!"
        //displayedPlayerScore;
        
    } else if (player == 'scissors' && computer == "paper" ) {
        resultsTally+=1
        return "PLAYER WINS!"
        
        //displayedPlayerScore;
        
    } else {
        console.log(`ERROR: try inputting 'rock', 'paper' or 'scissors' instead.`)
    }


}







function counter() {
    if (resultsTally>2.5){
        winAnnounce = "GAME WINNER: PLAYER!"
        
    } else if (resultsTally<2.5) {
        winAnnounce = "GAME WINNER: COMPUTER!"
    } else {
        return;
    }
}

//repeatGame();

