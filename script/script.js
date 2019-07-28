let playerSelection,computerSelection;


function computerPlay() {
	let out = ['Rock','Paper','Scissors'];
	let magicNumber = getRandom(3);
	console.log("incomputerplay   " + magicNumber);
	let send = out[magicNumber];
	return send;	
}

function getRandom(val){
	console.log('IN getrandom');
	return Math.floor(Math.random()*Math.floor(val));
	
}


function game(){
	let playerScore = 0;
	let computerScore = 0;
	let gamePlayed = 0;
	while(gamePlayed < 5){
		playerSelection = prompt("enter your choice");
		computerSelection = computerPlay();
		function playRound(playerSelection, computerSelection){
			computerSelection = computerSelection.toLowerCase();
			playerSelection = playerSelection.toLowerCase();
			if(playerSelection == 'rock' && computerSelection == 'scissors')
				playerScore++;
			else if(playerSelection == 'rock' && computerSelection == 'paper')
				computerScore++;	
			else if(playerSelection == 'scissors' && computerSelection == 'rock')
				computerScore++;
			else if(playerSelection == 'scissors' && computerSelection == 'paper')
				playerScore++;
			else if(playerSelection == 'paper' && computerSelection == 'scissors')
				computerScore++;
			else if(playerSelection == 'paper' && computerSelection == 'rock')
				playerScore++;
			else {

			}
		}
		gamePlayed++;
	}

	if(playerScore > computerScore){
		alert("Congratulations! You won");
	}
	else {
		alert("You lose!, better luck next time");
	}
}



game();