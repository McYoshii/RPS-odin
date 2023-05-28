function getComputerChoice (){
    my_arr = ["Rock", "Paper", "Scissors"];
    value = Math.floor(Math.random() * my_arr.length);
    let item = my_arr[~~value];
    console.log(item);
}

//console.log(getComputerChoice());

//pt2

let playerPrompt = prompt("Please type -Rock-, -Paper-, or -Scissors-:")
const playerSelection = playerPrompt;
const computerSelection = getComputerChoice();


///build below function!
function playRound (playerSelection, computerSelection){
    if (playerSelection === computerSelection);
        console.log("TIE!")






}



getComputerChoice();

console.log(playRound(playerSelection, computerSelection));





