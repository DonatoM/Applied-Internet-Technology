function genereateCards(){
	var suit = ['♠','♥','♦','♣'];
	var face = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
	var card = {};
	var deck = [];

	for(var i = 0;i < 4;i++){
		for(var j = 0; j < 13; j++){
			card = {suit:suit[i],face:face[j]};
			deck.push(card);
		}
	}
	return deck;
}

function shuffle(deck){
	var original_deck = deck, new_deck = [], num_shuffles = 0, random_index = 0, item = "";

	do{
		random_index = Math.floor((Math.random() * original_deck.length-1) + 1);
		item = original_deck.splice(random_index,1)[0];
		new_deck.push(item);
		num_shuffles += 1;
	}while(num_shuffles!=52);

	return new_deck;
}

function calculateHand(hand){
	var total = 0;
	var amount_of_aces = 0;
	for(var i = 0; i < hand.length; i++){
		if((hand[i].face === 'J') || (hand[i].face === 'Q') || (hand[i].face === 'K')){
			total += 10;
		}
		else if(hand[i].face === 'A'){
			amount_of_aces += 1;
			total += 11;
		}
		else{
			total += parseInt(hand[i].face);
		}
	}
	while(total > 21 && amount_of_aces > 0){
		total -= 10;
		amount_of_aces -= 1;
	}
	return total;
}

function determineWinner(player_total,computer_total){
	if(player_total > 21 && computer_total > 21){
		return "Tie";
	}
	else if(player_total < 22 && computer_total > 21){
		return "Player";
	}
	else if(player_total > 22 && computer_total < 21){
		return "Computer";
	}
	else{
		if(player_total > computer_total){
			return "Player";
		}
		else if(player_total === computer_total){
			return "Tie";
		}
		return "Computer";
	}
}

function blackJack(){
	var prompt = require('sync-prompt').prompt;
	var deck = shuffle(genereateCards());
	var human_hand = deck.splice(0,2);
	var computer_hand = deck.splice(0,2);
	var human_hand_string = "";
	var computer_hand_string = "";
	var human_hand_total = 0;
	var computer_hand_total = 0;
	for(var i = 0;i < human_hand.length; i++){
		human_hand_string += human_hand[i].face+human_hand[i].suit + " ";
	}
	for(var i = 0;i < computer_hand.length; i++){
		computer_hand_string += computer_hand[i].face+computer_hand[i].suit + " ";
	}
	human_hand_total = calculateHand(human_hand);
	computer_hand_total = calculateHand(computer_hand);
	do{
		console.log("Your hand is: " + human_hand_string + " ... " + "for a total of " + human_hand_total);
		var decision = prompt('(h)it or (s)tay\n');

		if(decision === 's'){
			do{
				computer_hand = computer_hand.concat(deck.splice(0,1));
				computer_hand_string = "";
				for(var i = 0;i < computer_hand.length; i++){
					computer_hand_string += computer_hand[i].face+computer_hand[i].suit + " ";
				}
				computer_hand_total = calculateHand(computer_hand);
			}while(computer_hand_total<=17);

			console.log("Your hand: " + human_hand_string + "("+human_hand_total+"), Computer hand: " + computer_hand_string + " (" + computer_hand_total+")");
			console.log(determineWinner(human_hand_total,computer_hand_total));
			console.log("There are " + deck.length + " cards left in the deck");
			console.log("-----------------------\n");
			human_hand = deck.splice(0,2);
			computer_hand = deck.splice(0,2);
			human_hand_string = "";
			computer_hand_string = "";
			for(var i = 0;i < human_hand.length; i++){
				human_hand_string += human_hand[i].face+human_hand[i].suit + " ";
			}
			for(var i = 0;i < computer_hand.length; i++){
				computer_hand_string += computer_hand[i].face+computer_hand[i].suit + " ";
			}
			human_hand_total = calculateHand(human_hand);
			computer_hand_total = calculateHand(computer_hand);
		}
		else if(decision === 'h'){
			human_hand = human_hand.concat(deck.splice(0,1));
			human_hand_total = calculateHand(human_hand);
			human_hand_string = "";
			for(var i = 0;i < human_hand.length; i++){
				human_hand_string += human_hand[i].face+human_hand[i].suit + " ";
			}
			if(human_hand_total>21){
				do{
					computer_hand = computer_hand.concat(deck.splice(0,1));
					computer_hand_string = "";
					for(var i = 0;i < computer_hand.length; i++){
						computer_hand_string += computer_hand[i].face+computer_hand[i].suit + " ";
					}
					computer_hand_total = calculateHand(computer_hand);
				}while(computer_hand_total<=17);
				console.log("Your hand: " + human_hand_string + "("+human_hand_total+"), Computer hand: " + computer_hand_string + " (" + computer_hand_total+")");
				console.log(determineWinner(human_hand_total,computer_hand_total));
				console.log("There are " + deck.length + " cards left in the deck");
				console.log("-----------------------\n");
				while(human_hand.length > 0){
					human_hand.pop();
				}
				while(computer_hand.length > 0){
					computer_hand.pop();
				}
				human_hand = deck.splice(0,2);
				computer_hand = deck.splice(0,2);
				human_hand_string = "";
				computer_hand_string = "";
				for(var i = 0;i < human_hand.length; i++){
					human_hand_string += human_hand[i].face+human_hand[i].suit + " ";
				}
				for(var i = 0;i < computer_hand.length; i++){
					computer_hand_string += computer_hand[i].face+computer_hand[i].suit + " ";
				}
				human_hand_total = calculateHand(human_hand);
				computer_hand_total = calculateHand(computer_hand);
			}
		}
		else{
			console.log("ERROR: You must enter either (s) or (h).")
		}
	}while(deck.length>=26);
	console.log("Less than 26 cards left. Game over!");
}
blackJack();