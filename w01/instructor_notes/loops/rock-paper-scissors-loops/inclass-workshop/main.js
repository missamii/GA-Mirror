// rock / paper / scissors
isGameOver = false

while(!isGameOver){
  //... do things
  var move = parseInt(prompt("rock! paper! scisscors! enter 1 for rock, enter 2 for paper, enter 3 for scissors"))
  // computer's move
  var computer = Math.floor(Math.random() * (4 - 1)) + 1
  console.log(move)
  console.log(computer)

  //game logic
  // are they the same?
  if( move === computer ){
    console.log("it's a tie!")
  } else if( move === 1  && computer === 2 ){ //paper beats rock
    console.log("you lose!")
    console.log("paper beats rock")
  } else if( move === 1 && computer === 3 ){ //rock beat scissors
    console.log("you win!")
    console.log("rocks beat scissors")
  }





  var playerResponse = prompt("do you wanna play again? y/n")

  if( playerResponse === "y"){
    isGameOver = false
  } else {
    isGameOver = true
  }

  console.log("thanks for playing")


}
