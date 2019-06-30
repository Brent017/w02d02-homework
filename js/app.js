

const pokemonArray = {
cards: [
  {
    name: "Bulbasaur",
    damage: 60
  }, {
    name: "Caterpie",
    damage: 40
  }, {
    name: "Charmander",
    damage: 60
  }, {
    name: "Clefairy",
    damage: 50
  }, {
    name: "Jigglypuff",
    damage: 60
  }, {
    name: "Mankey",
    damage: 30
  }, {
    name: "Meowth",
    damage: 60
  }, {
    name: "Nidoran - female",
    damage: 60
  }, {
    name: "Nidoran - male",
    damage: 50
  }, {
    name: "Oddish",
    damage: 40
  }, {
    name: "Pidgey",
    damage: 50
  }, {
    name: "Pikachu",
    damage: 50
  }, {
    name: "Poliwag",
    damage: 50
  }, {
    name: "Psyduck",
    damage: 60
  }, {
    name: "Rattata",
    damage: 30
  }, {
    name: "Squirtle",
    damage: 60
  }, {
    name: "Vulpix",
    damage: 50
  }, {
    name: "Weedle", 
    damage: 40
  }
]};


	eggbertCards = [];
	computerCards = [];
	eggbertPoints = 0;
	computerPoints = 0;
	tiepoints = 0;
	eggbertRounds = 0;
	computerRounds = 0;
	tieRounds = 0;
	gameOn = true
	roundsPlayed = 0;

const dealHand = () => {
	for (let i = 0; i < 6; i++) {
		const randIndex = Math.floor(Math.random() * pokemonArray.cards.length);
		if(i % 2 === 0){
			eggbertCards.push(pokemonArray.cards[randIndex]);
		} else {
			computerCards.push(pokemonArray.cards[randIndex]);
		}
		const removeCards = pokemonArray.cards.splice(randIndex, 1);		
	}
};
console.log(dealHand());

const roundsKeeper = () => {
	if(eggbertPoints > computerPoints) {
		eggbertRounds +=1;
		eggbertPoints = 0;
		computerPoints = 0;
	} else if (computerPoints > eggbertPoints) {
		computerRounds += 1;
		computerPoints = 0;
		eggbertPoints = 0;
	} else if (computerPoints === eggbertPoints) {
		tieRounds += 1;
		computerPoints =0;
		eggbertPoints = 0;
	}
	roundsPlayed++;
	console.log(`Round wins: Eggbert won ${eggbertRounds} rounds, Computer won ${computerRounds} rounds, Tied ${tieRounds} rounds.`);
};

const checkWinner = () => {
	for (let i = 0; i < 3; i++) {
	if(eggbertCards[0].damage > computerCards[0].damage) {
		console.log("Eggbert Wins!");
		eggbertPoints++;
	} else if(computerCards[0].damage > eggbertCards[0].damage) {
		console.log("Computer Wins!");
		computerPoints++;
	} else {
		console.log("Tie");
		tiepoints++;
	} 	
	eggbertCards.shift();
	computerCards.shift();
	} 
	console.log(`Score: Eggbert: ${eggbertPoints}, Computer: ${computerPoints}, Ties: ${tieRounds}`);
	roundsKeeper();
	// console.log(`Rounds Won: Eggbert: ${eggbertRounds} rounds, Computer won: ${computerRounds} rounds, Ties: ${tieRounds} rounds.`);
};

// console.log(checkWinner());

const chooseToContinue = () => {
	const choice = prompt(`Eggbert won ${eggbertRounds}, Computer won ${computerRounds}, you tied ${tieRounds}. Would you like to play again? y/n`);
	if(choice === "n") {
		console.log("Game over")
		return gameOn = false;
	} else if(choice ==="y") {
		eggbertRounds = 0;
		computerRounds = 0;
		tieRounds = 0;
		roundsPlayed = 0;
		window.location.reload();
		// from stackoverflow https://stackoverflow.com/questions/42049696/is-there-a-way-to-reset-an-html-page-using-a-javascript-function
	} else if(choice !=="y" || choice!=="n") {
		chooseToContinue();
}
}


while(gameOn) {
	dealHand();
	checkWinner();
	if(roundsPlayed > 2) {
	chooseToContinue()
	};
};









