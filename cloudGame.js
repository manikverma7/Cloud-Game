//To Run This JS file use "node cloudGame.js" command in the terminal.

var c = [0, 1, 0, 1, 0, 1, 0]; //Array of 7 Clouds

var jumps = 0; //Variable to store number of Jumps

function runGame(clouds) {
  for (let index = 0; index < clouds.length; index = index + 2) {
    //Iterating through the clouds array
    if (index === 1 || index === 5) {
      //Condition for checking the index of cloud
      null;
    } else {
      jumps++; //Incrementing the Jump counter
    }
  }
}

runGame(c); //Function call

console.log(`The Minimum Number of Jumps to win the game = ${jumps}`); //Output
