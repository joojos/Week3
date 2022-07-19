function game(){
    let compWin = 0;
    let playerWin = 0;
    


   for(let i= 0; i<5; i++){

    console.log("Round #" + (i+1));
    let n= 0;

    function copmuterPlay(){
        myPlay = ['Rock', 'Paper', 'Scissors'];
        computerSelection = myPlay[Math.floor(Math.random() * myPlay.length)];
        console.log('The Copmuter Chose '+ computerSelection);
    }   

    function userChoice(){
        input = prompt("Please Choose: Rock, Paper or Scissors").toLowerCase();
        playerSelection = input.charAt(0).toUpperCase() + input.slice(1);   
        console.log("You Chose " + playerSelection);
    }

    userChoice();
    copmuterPlay();

    function playRound(playerSelection, computerSelection){

        if (computerSelection == 'Rock' && playerSelection == 'Scissors'){

        console.log("You Lose! Rock beats Scissors");
        compWin= compWin +1;

        } else if(computerSelection == 'Rock' && playerSelection == 'Paper'){

        console.log("You Win! Paper beats Rock");
        playerWin= playerWin +1;

        } else if(computerSelection == 'Scissors' && playerSelection == 'Paper'){

        console.log("You Lose! Scissors beats Paper");
        compWin= compWin +1;

        } else if(computerSelection == 'Scissors' && playerSelection == 'Rock'){

        console.log("You Win! Rock beats Scissors");
        playerWin= playerWin +1;

        } else if(computerSelection == 'Paper' && playerSelection == 'Rock'){

        console.log("You Lose! Paper beats Rock");
        compWin= compWin +1;

        } else if(computerSelection == 'Paper' && playerSelection == 'Scissors'){

        console.log("You Win! Scissors beats Paper");
        playerWin= playerWin +1;

        } else if(playerSelection == computerSelection){

            console.log("It's a tie! Try again");

        } else{
            console.log("Please enter a valid value. Enter Rock, Paper or Scissors");
            n = n + 1;
            console.log('_________');

        }

    }

    playRound(playerSelection, computerSelection);

    while(n > 0){
        userChoice();
        copmuterPlay();
        playRound(playerSelection, computerSelection);
        n = n-1;
    }

    console.log("Your Score: " + playerWin + " Computer Score: " + compWin)

    }      

    if(compWin > playerWin){
    console.log("The winner is the COMPUTER!");
    }else if(compWin < playerWin){
    console.log("The winner is the YOU!");
    }else {
        console.log("No winner. It's a tie!");  
    }
}

game();
