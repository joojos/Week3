

function copmuterPlay(){
    myPlay = ['Rock', 'Paper', 'Scissors'];
    computerSelection = myPlay[Math.floor(Math.random() * myPlay.length)];
    console.log('The Copmuter Chose '+ computerSelection);
}

const input = prompt("Please Choose: Rock, Paper or Scissors").toLowerCase();

const playerSelection = input.charAt(0).toUpperCase() + input.slice(1);

console.log("You Chose " + playerSelection);

copmuterPlay();

function rockPaperScissors(playerSelection, computerSelection){

    if (computerSelection == 'Rock' && playerSelection == 'Scissors'){

        console.log("You Lose! Rock beats Scissors");

    } else if(computerSelection == 'Rock' && playerSelection == 'Paper'){

        console.log("You Win! Paper beats Rock");

    } else if(computerSelection == 'Scissors' && playerSelection == 'Paper'){

        console.log("You Lose! Scissors beats Paper");

    } else if(computerSelection == 'Scissors' && playerSelection == 'Rock'){

        console.log("You Win! Rock beats Scissors");

    } else if(computerSelection == 'Paper' && playerSelection == 'Rock'){

        console.log("You Lose! Paper beats Rock");

    } else if(computerSelection == 'Paper' && playerSelection == 'Scissors'){

        console.log("You Win! Scissors beats Paper");

    } else{
        console.log("It's a tie! Try again")
    }

}

rockPaperScissors(playerSelection, computerSelection);