// Global Variables/Functions
var GAME_DATA = [{"position": "F", "freeThrowsAttempted": 9, "defensiveRebounds": 9, "offensiveRebounds": 1, "threesMade": 3, "turnovers": 1, "freeThrowsMade": 8, "assists": 5, "threesAttempted": 9, "fieldGoalsMade": 10, "fieldGoalsAttempted": 21, "name": "L. James", "steals": 0, "team": "Heat"}, {"position": "F", "freeThrowsAttempted": 0, "defensiveRebounds": 2, "offensiveRebounds": 0, "threesMade": 1, "turnovers": 0, "freeThrowsMade": 0, "assists": 1, "threesAttempted": 2, "fieldGoalsMade": 1, "fieldGoalsAttempted": 2, "name": "R. Lewis", "steals": 0, "team": "Heat"}, {"position": "C", "freeThrowsAttempted": 2, "defensiveRebounds": 7, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 1, "assists": 2, "threesAttempted": 5, "fieldGoalsMade": 6, "fieldGoalsAttempted": 14, "name": "C. Bosh", "steals": 1, "team": "Heat"}, {"position": "G", "freeThrowsAttempted": 4, "defensiveRebounds": 3, "offensiveRebounds": 0, "threesMade": 1, "turnovers": 3, "freeThrowsMade": 2, "assists": 1, "threesAttempted": 2, "fieldGoalsMade": 4, "fieldGoalsAttempted": 12, "name": "D. Wade", "steals": 0, "team": "Heat"}, {"position": "G", "freeThrowsAttempted": 2, "defensiveRebounds": 4, "offensiveRebounds": 1, "threesMade": 1, "turnovers": 4, "freeThrowsMade": 2, "assists": 2, "threesAttempted": 3, "fieldGoalsMade": 1, "fieldGoalsAttempted": 8, "name": "R. Allen", "steals": 1, "team": "Heat"}, {"position": "F", "freeThrowsAttempted": 0, "defensiveRebounds": 0, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 1, "freeThrowsMade": 0, "assists": 0, "threesAttempted": 0, "fieldGoalsMade": 0, "fieldGoalsAttempted": 0, "name": "S. Battier", "steals": 1, "team": "Heat"}, {"position": "C", "freeThrowsAttempted": 0, "defensiveRebounds": 5, "offensiveRebounds": 1, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 0, "assists": 0, "threesAttempted": 0, "fieldGoalsMade": 0, "fieldGoalsAttempted": 1, "name": "C. Andersen", "steals": 1, "team": "Heat"}, {"position": "G", "freeThrowsAttempted": 2, "defensiveRebounds": 1, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 2, "assists": 1, "threesAttempted": 1, "fieldGoalsMade": 0, "fieldGoalsAttempted": 2, "name": "N. Cole", "steals": 0, "team": "Heat"}, {"position": "F", "freeThrowsAttempted": 0, "defensiveRebounds": 1, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 0, "assists": 0, "threesAttempted": 0, "fieldGoalsMade": 1, "fieldGoalsAttempted": 2, "name": "U. Haslem", "steals": 0, "team": "Heat"}, {"position": "F", "freeThrowsAttempted": 3, "defensiveRebounds": 1, "offensiveRebounds": 2, "threesMade": 0, "turnovers": 1, "freeThrowsMade": 1, "assists": 1, "threesAttempted": 0, "fieldGoalsMade": 4, "fieldGoalsAttempted": 7, "name": "M. Beasley", "steals": 0, "team": "Heat"}, {"position": "G", "freeThrowsAttempted": 5, "defensiveRebounds": 1, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 4, "assists": 0, "threesAttempted": 0, "fieldGoalsMade": 2, "fieldGoalsAttempted": 3, "name": "M. Chalmers", "steals": 1, "team": "Heat"}, {"position": "F", "freeThrowsAttempted": 0, "defensiveRebounds": 1, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 0, "assists": 0, "threesAttempted": 1, "fieldGoalsMade": 0, "fieldGoalsAttempted": 1, "name": "J. Jones", "steals": 0, "team": "Heat"}, {"position": "G", "freeThrowsAttempted": 0, "defensiveRebounds": 1, "offensiveRebounds": 0, "threesMade": 1, "turnovers": 0, "freeThrowsMade": 0, "assists": 1, "threesAttempted": 2, "fieldGoalsMade": 1, "fieldGoalsAttempted": 2, "name": "T. Douglas", "steals": 0, "team": "Heat"}, {"position": "F", "freeThrowsAttempted": 6, "defensiveRebounds": 8, "offensiveRebounds": 2, "threesMade": 3, "turnovers": 3, "freeThrowsMade": 5, "assists": 2, "threesAttempted": 4, "fieldGoalsMade": 7, "fieldGoalsAttempted": 10, "name": "K. Leonard", "steals": 1, "team": "Spurs"}, {"position": "F", "freeThrowsAttempted": 6, "defensiveRebounds": 6, "offensiveRebounds": 2, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 4, "assists": 2, "threesAttempted": 0, "fieldGoalsMade": 5, "fieldGoalsAttempted": 10, "name": "T. Duncan", "steals": 0, "team": "Spurs"}, {"position": "C", "freeThrowsAttempted": 0, "defensiveRebounds": 8, "offensiveRebounds": 1, "threesMade": 1, "turnovers": 2, "freeThrowsMade": 0, "assists": 6, "threesAttempted": 3, "fieldGoalsMade": 2, "fieldGoalsAttempted": 7, "name": "B. Diaw", "steals": 1, "team": "Spurs"}, {"position": "G", "freeThrowsAttempted": 0, "defensiveRebounds": 2, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 1, "freeThrowsMade": 0, "assists": 2, "threesAttempted": 3, "fieldGoalsMade": 0, "fieldGoalsAttempted": 5, "name": "D. Green", "steals": 2, "team": "Spurs"}, {"position": "G", "freeThrowsAttempted": 2, "defensiveRebounds": 1, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 2, "assists": 2, "threesAttempted": 1, "fieldGoalsMade": 7, "fieldGoalsAttempted": 18, "name": "T. Parker", "steals": 0, "team": "Spurs"}, {"position": "G", "freeThrowsAttempted": 5, "defensiveRebounds": 4, "offensiveRebounds": 0, "threesMade": 3, "turnovers": 2, "freeThrowsMade": 4, "assists": 4, "threesAttempted": 6, "fieldGoalsMade": 6, "fieldGoalsAttempted": 11, "name": "M. Ginobili", "steals": 0, "team": "Spurs"}, {"position": "C", "freeThrowsAttempted": 2, "defensiveRebounds": 2, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 1, "assists": 2, "threesAttempted": 0, "fieldGoalsMade": 1, "fieldGoalsAttempted": 1, "name": "T. Splitter", "steals": 1, "team": "Spurs"}, {"position": "G", "freeThrowsAttempted": 0, "defensiveRebounds": 1, "offensiveRebounds": 0, "threesMade": 5, "turnovers": 0, "freeThrowsMade": 0, "assists": 2, "threesAttempted": 8, "fieldGoalsMade": 6, "fieldGoalsAttempted": 10, "name": "P. Mills", "steals": 0, "team": "Spurs"}, {"position": "F", "freeThrowsAttempted": 0, "defensiveRebounds": 0, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 0, "assists": 2, "threesAttempted": 0, "fieldGoalsMade": 0, "fieldGoalsAttempted": 0, "name": "M. Bonner", "steals": 0, "team": "Spurs"}, {"position": "G", "freeThrowsAttempted": 0, "defensiveRebounds": 2, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 0, "assists": 1, "threesAttempted": 0, "fieldGoalsMade": 2, "fieldGoalsAttempted": 3, "name": "M. Belinelli", "steals": 0, "team": "Spurs"}, {"position": "C", "freeThrowsAttempted": 0, "defensiveRebounds": 0, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 0, "assists": 0, "threesAttempted": 0, "fieldGoalsMade": 1, "fieldGoalsAttempted": 1, "name": "J. Ayres", "steals": 0, "team": "Spurs"}, {"position": "G", "freeThrowsAttempted": 0, "defensiveRebounds": 0, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 0, "assists": 0, "threesAttempted": 1, "fieldGoalsMade": 0, "fieldGoalsAttempted": 2, "name": "C. Joseph", "steals": 0, "team": "Spurs"}, {"position": "F", "freeThrowsAttempted": 2, "defensiveRebounds": 0, "offensiveRebounds": 1, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 2, "assists": 0, "threesAttempted": 0, "fieldGoalsMade": 0, "fieldGoalsAttempted": 0, "name": "A. Baynes", "steals": 0, "team": "Spurs"}];
var PARSED_GAME_DATA = JSON.parse(JSON.stringify(GAME_DATA));
var first_team_name = PARSED_GAME_DATA[0].team;
var second_team_name = PARSED_GAME_DATA[PARSED_GAME_DATA.length-1].team;
var primer_equipo = PARSED_GAME_DATA.filter(get_first_team);
var segundo_equipo = PARSED_GAME_DATA.filter(get_second_team);

function get_first_team(element){
  if (element.team === first_team_name){
    return element;
  }
}

function get_second_team(element){
  if (element.team === second_team_name){
    return element;
  }
}
// End Of Global Variables/Functions

var Final_Score = function(){
  var final_score = 0;

  function players_final_score(element){
    return element.freeThrowsMade + ((element.fieldGoalsMade - element.threesMade)*2) + (element.threesMade*3);
  }

  function team_final_score(value){
    final_score += value;
  }

  var primer_equipo_players_final_score = primer_equipo.map(players_final_score);
  primer_equipo_players_final_score.forEach(team_final_score);
  var primer_equipo_final_score = final_score;

  var segundo_equipo_players_final_score = segundo_equipo.map(players_final_score);
  final_score = 0;
  segundo_equipo_players_final_score.forEach(team_final_score);
  var segundo_equipo_final_score = final_score;

  console.log("Final Score: " + first_team_name + " " + primer_equipo_final_score + ", " + second_team_name + " " + segundo_equipo_final_score);
  console.log("=====");
};

var Highest_Three_Point_Percentage = function(){
  var players_with_three_pointers = PARSED_GAME_DATA.filter(get_long_range);
  var winner = players_with_three_pointers[0]
  var winner_percentage = (winner.threesMade*3)/(winner.freeThrowsMade + ((winner.fieldGoalsMade - winner.threesMade)*2) + (winner.threesMade*3));
  players_with_three_pointers.forEach(get_winner);

  function get_long_range(element){
    if((element.threesMade > 0) && (element.freeThrowsMade + ((element.fieldGoalsMade - element.threesMade)*2) + (element.threesMade*3) > 10)){
      return element;
    }
  }

  function get_winner(element){
    var percentage = (element.threesMade*3)/(element.freeThrowsMade + ((element.fieldGoalsMade - element.threesMade)*2) + (element.threesMade*3))
    if(percentage > winner_percentage){
      winner = element;
      winner_percentage = percentage;
    }
  }
  console.log("* Player with highest percentage of points from three pointers:",winner.name);
};

var Team_With_Most_Rebounds = function(){
  var rebounds = 0;
  primer_equipo.forEach(get_rebounds);
  var first_team_rebounds = rebounds;
  rebounds = 0;
  segundo_equipo.forEach(get_rebounds);
  var second_team_rebounds = rebounds;

  if(second_team_rebounds>first_team_rebounds){
    console.log("* Team with most rebounds: " + second_team_name + " with " + second_team_rebounds);
  }
  else{
    console.log("* Team with most rebounds: " + first_team_name + " with " + first_team_rebounds);
  }

  function get_rebounds(element){
    rebounds += element.defensiveRebounds += element.offensiveRebounds;
  }
};

var Non_Guard_Player_With_Most_Assists = function(){
  var nonguards_with_assists = PARSED_GAME_DATA.filter(get_nonguard_assists);
  var player_with_most = nonguards_with_assists[0];
  nonguards_with_assists.forEach(find_max);

  function get_nonguard_assists(element){
    if((element.position != "G") && (element.assists > 0)){
      return element;
    }
  }

  function find_max(element){
    if(element.assists > player_with_most.assists){
      player_with_most = element;
    }
  }

  console.log("* Non guard player with most assists:",player_with_most.name,"with", player_with_most.assists);
};

var Players_With_More_Turnovers_Than_Assists = function(){
  var players = PARSED_GAME_DATA.filter(more_turnover_than_assists);
  console.log("* Players with more turnovers than assists:");
  players.forEach(print_players);

  function more_turnover_than_assists(element){
    if(element.turnovers > element.assists){
      return element;
    }
  }

  function print_players(element){
    console.log("\t"+element.name);
  }
};

var Game_Results = function(PARSED_GAME_DATA){
  Final_Score();
  Highest_Three_Point_Percentage();
  Team_With_Most_Rebounds();
  Non_Guard_Player_With_Most_Assists();
  Players_With_More_Turnovers_Than_Assists();
};

var Report = function(){
  Game_Results(PARSED_GAME_DATA);
  var request = require('request');
  request("http://foureyes.github.io/csci-ua.0480-fall2014-002/homework/02/2014-06-15-heat-spurs.json", function(error, response, body) {
  var obj = JSON.parse(body);
  PARSED_GAME_DATA = obj;
  first_team_name = PARSED_GAME_DATA[0].team;
  second_team_name = PARSED_GAME_DATA[PARSED_GAME_DATA.length-1].team;
  primer_equipo = PARSED_GAME_DATA.filter(get_first_team);
  segundo_equipo = PARSED_GAME_DATA.filter(get_second_team);
  Game_Results(obj);
});
  request("http://foureyes.github.io/csci-ua.0480-fall2014-002/homework/02/2014-04-09-thunder-clippers.json", function(error, response, body) {
  var obj = JSON.parse(body);
  PARSED_GAME_DATA = obj;
  first_team_name = PARSED_GAME_DATA[0].team;
  second_team_name = PARSED_GAME_DATA[PARSED_GAME_DATA.length-1].team;
  primer_equipo = PARSED_GAME_DATA.filter(get_first_team);
  segundo_equipo = PARSED_GAME_DATA.filter(get_second_team);
  Game_Results(obj);
});
};

Report();