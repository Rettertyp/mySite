import Game from "./game.js";
// import the classes used from the specified locations

// initialization of the game

// gameScreen has been defined in the index.html
const screenName = "gameScreen";
//ctx = context
let ctx = $(`#${screenName}`)[0].getContext("2d");
// version without jQuery:
// let ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;

// consts that stores the proportions of the screen
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

// create a new Game object
let game = new Game(GAME_WIDTH, GAME_HEIGHT);

// game loop

// a variable that saves the last time the screen got updated
let lastTime = 0;

// the main loop, in which the game is regularly updated
function gameLoop(timestamp) {
  // deltaTime is the time that has passed since the last update
  let deltaTime = timestamp - lastTime;
  if (deltaTime === 0) deltaTime = 1;
  // save that we just updated the screen
  lastTime = timestamp;

  // first clears the specified rectangle, same signature as fillRect
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  // update and draw the game
  game.update(deltaTime);
  game.draw(ctx);

  // request a frame from the browser
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
