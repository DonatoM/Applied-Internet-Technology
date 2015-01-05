document.getElementById("startButton").addEventListener("click", createGameBoard);

// Get the number of symbols.
function numSymbols() {
	var numSymbols = Number(document.getElementById("numSymbols").value);

	if (numSymbols > 8) {
		numSymbols = 8;
	}

	return numSymbols;
}

// Shuffle an array of symbols.
function shuffle(symbols,amount_symbols){
	var original_symbols = symbols, shuffled_symbols = [], num_shuffles = 0, random_index = 0, item = "";
	do{
		random_index = Math.floor((Math.random() * original_symbols.length-1) + 1);
		item = original_symbols.splice(random_index,1)[0];
		shuffled_symbols.push(item);
		num_shuffles += 1;
	}while(num_shuffles!=(amount_symbols*2));

	return shuffled_symbols;
}

function removeForm(field){
	var element = document.getElementById(field);
	element.parentNode.removeChild(element);
}


function getCards() {
	var num_symbols = numSymbols();
	var symbols = ["\u2600","\u2764","\u2605","\u2602",
				   "\u2622","\u2691","\u266B","\u20AC"]
	var game_symbols = [];
	for(i = 0; i < num_symbols; i++){
		var random_symbol = symbols[Math.floor(Math.random() * symbols.length)];
		game_symbols.push(random_symbol);
		game_symbols.push(random_symbol);
	}
	game_symbols = shuffle(game_symbols,num_symbols);
	return game_symbols;
}

function createGameBoard(){
	// Declare this variable twice. If I don't declare it here the program crashes.
	var num_elements = numSymbols();
	var guess_counter = 0, total_guesses = 1, num_clicks = 0, match=0, amount_of_symbols = num_elements;

	var first_symbol;
	var div;
	var div_content;

 	var onClick = function(event) {
 		// If the user has only guessed once.
		if (guess_counter % 2 != 0){
			total_guesses = (guess_counter - 1) / 2;
		}
		else{
			total_guesses += 1;
		}

		// Make the chosen element visible.
		this.style.backgroundColor = 'white';

		// Used to store cards.
		var current_symbol = this;

		// If you haven't clicked yet, then the first click will be the current click.
		if (num_clicks === 0){
			first_symbol = current_symbol;
		}

		// Increase the amount guessed and the counter if you've clicked.
		num_clicks++;
		guess_counter++;

		// If you've clicked twice, then compare the elements.
		if(num_clicks === 2){
			if(first_symbol.textContent === current_symbol.textContent){
				// Make the two items visible.
				first_symbol.style.backgroundColor = 'white';
				current_symbol.style.backgroundColor = 'white';

				// Remove ability to click on these cards.
				first_symbol.removeEventListener('click', onClick);
				current_symbol.removeEventListener('click', onClick);

				// If they're equal then you have a match.
				match++;

				// If you matched all elements, then you've won.
				if (match == amount_of_symbols ){
					// Remove Number of guesses string.
					div.removeChild(div_content);

					var para = document.createElement("p");
					var paraInfo1 = document.createTextNode("#?'s: " + (total_guesses+1))
					var paraInfo = document.createTextNode("  You're D\u263Ane! Thx 4 Playing!");
					para.appendChild(paraInfo1);
					para.appendChild(paraInfo);
					HTML_body.appendChild(para);

					// Remove the grid since it's no longer necessary.
					removeForm("game-board");
			   }
			}

			//  Need a fast refresh rate because otherwise if you click fast enough the
			// 	Program will be fooled into thinking two cards are the same.
			else{
				setTimeout(function()
				{
					first_symbol.style.backgroundColor = 'black';
					current_symbol.style.backgroundColor = 'black';
				}, 1000);
			}
			// Need to reset counter regardless of the user was right or not.
			// Also remove the previous String and replace it with the most current amount of guesses.
			num_clicks = 0;
			div.removeChild(div_content);
		    div = document.createElement("div");
  			div_content = document.createTextNode("Number of guesses: "+ (total_guesses+1));
  		    div.appendChild(div_content);
  		    HTML_body.appendChild(div);
	  		}
		}



	// Creating the table dimensions.
	// Handle the cases of 16, 12, 4 elements specifically.
	var row;
	var column;
	var total_elements = numSymbols();
	total_elements *= 2;
	var game_symbols = getCards();
	var num_elements = numSymbols();

	// Creating table for symbols.
	var symbol_table = document.createElement("table");
	var symbol_table_body = document.createElement("tbody");
	symbol_table.id = "game-board";

	// Removing Initial Content.
	// Need to call this after retrieving necessary info from
	// the initial page.
	removeForm('startForm');

	// Retrieve HTML Body
	var HTML_body = document.getElementsByTagName("body")[0];

	if(total_elements == 16){
		row = 4;
		column = 4;
	}
	else if(total_elements == 12){
		row = 3;
		column = 4;
	}
	else if(total_elements == 4){
		row = 2;
		column = 2;
	}
	else{
		row = num_elements;
		column = 2;
	}

	// Needed Black as a color so the symbols could hide.
	// Creates the GameBoard
	for(var i = 0; i < row; i++){
		var table_row = document.createElement("tr");
		table_row.id = 'row-' + (i+1);
		for(var j = 0; j < column; j++){
			var table_cell = document.createElement("td");
			var table_cell_text = document.createTextNode(game_symbols.pop());
			// I avoid having handling this with CSS.
			table_cell.style.backgroundColor = 'black';

			table_cell.addEventListener("click",onClick);
			table_cell.appendChild(table_cell_text);
			table_row.appendChild(table_cell);
		}
		symbol_table_body.appendChild(table_row);
	}

	symbol_table.appendChild(symbol_table_body);
	HTML_body.appendChild(symbol_table);

	// Dummy node in order to allow removing on the onClick function.
	div = document.createElement("div");
	div_content = document.createTextNode("0");
	div.appendChild(div_content);
}
