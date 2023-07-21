//BELOW: IMPORTANT GAME VARIABLES + KEEPING COUNT OF THINGS
let computer; //Empty variable that is to be overridden
let player;   //Empty variable that is to be overridden
let resultsTally = 0; 
let result;  
let round = 0;
let winAnnounce;

//BELOW: HOOKING UP HTML BUTTONS/TEXT WITH JS
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const roundsText = document.querySelector("#roundsText");
const winText = document.querySelector("#winText");
const choiceBtns= document.querySelectorAll(".choiceBtn");

//Button click logic
choiceBtns.forEach(button => button.addEventListener('click', () => {

    //text content that changes
    player = button.textContent; 
    getComputerChoice();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
    roundsText.textContent = `Round ${round+=1}`;
    winText.textContent = counter();
    console.log(resultsTally);
    
    //disables buttons after 5 rounds
    if (round === 5) {
            choiceBtns.forEach(button => button.disabled = true); 
            resultText.textContent = winAnnounce;    
     }
}));



function getComputerChoice (){

     const value = Math.floor(Math.random()*3)+1; //makes random computer selection
    if (value === 1){ // translates randomly generated number into a respective string
        computer="rock"
        
    } else if (value === 2) {
        computer="paper"
        
    } else if (value === 3) {
        computer="scissors"

    } else {
        return;
    }
}

function checkWinner (){ // everything below this is responsible for the games overall functionality

    if (player === computer){  
        return "Tie!"
        
    } else if (player == 'rock' && computer == "paper" ) {
        return "COMP WINS!"
        
    } else if (player == 'rock' && computer == "scissors" ) {
        resultsTally+=1
        return "PLAYER WINS!!"
        
    } else if (player == 'paper' && computer == "scissors" ) {
        return "COMP WINS!"

    } else if (player == 'paper' && computer == "rock" ) {
        resultsTally+=1
        return "PLAYER WINS!"
        
    } else if (player == 'scissors' && computer == "rock" ) {
        return "COMP WINS!"

    } else if (player == 'scissors' && computer == "paper" ) {
        resultsTally+=1
        return "PLAYER WINS!"

    } else {
        return;
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


