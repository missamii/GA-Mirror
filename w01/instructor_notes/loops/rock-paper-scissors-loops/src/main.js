var isGameOver = false;
while(!isGameOver){
  var move = parseInt(prompt("rock! paper! scissors! choose! enter 1 for rock, 2 for paper, 3 for scissors"))
  var min = 1
  var max = 3
  // we're going to represent: rock, paper or scissors as 1, 2, 3
  var computer = Math.floor(Math.random() * (max - min)) + min;
  //game logic
  if( move == computer ){

    console.log("it's a tie!")

  } else if( move == 1 && computer == 2 ){ //paper beats rock

    console.log("you lose!")
    console.log("paper beats rock")

  } else if( move == 1 && computer == 3){  //rocks beat scissors

    console.log("you win!")
    console.log("rocks beat scissors")

  } else if( move == 2 && computer == 1 ){  //paper beats rock

    console.log("you win!")
    console.log("paper beats rock")

  } else if( move == 2 && computer == 3){ //scissors beats paper

    console.log("you lose!")
    console.log("scissors beats paper!")

  } else if( move == 3 && computer == 1){ //rock beats scissors

    console.log("you lose!")
    console.log("rock beats scissors")

  } else if( move == 3 && computer == 2){ // scissors beats paper

    console.log("you win!")
    console.log("scissors beats paper")

  }

  var playerResponse =  prompt("would you like to play again? y/n")

  if ( playerResponse === "y"){

    isGameOver = false

  } else {

    isGameOver = true

  }

  console.log("thanks for playing")

}
