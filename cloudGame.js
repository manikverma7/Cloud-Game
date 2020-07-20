//To Run This JS file use "node cloudGame.js" command in the terminal.

var c = [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1]; //Array of clouds

var jumps = 0; //Variable to store number of Jumps

var i = 0;

function runGame(clouds) {
  while (i < clouds.length - 1) {
    //While Loop True till index is one less than clouds array length
    if (clouds[i + 2] == 0) {
      //Checks if she can jump two places
      i += 2;
      jumps++;
    } else if (clouds[i + 1] == 0) {
      //Checks if can jump one place.
      i++;
      jumps++;
    } else {
      //Checks if it is the thunderstorm cloud
      console.log("It is the thunderstorm cloud");
      break;
    }
  }
}

runGame(c); //Function call

console.log(`The Minimum Number of Jumps to win the game = ${jumps}`); //Output
