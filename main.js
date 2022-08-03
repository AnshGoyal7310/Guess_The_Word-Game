let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputBox");
// let audio = new Audio("./audio/1.mp3");
let audio1 = new Audio("./audio/2.wav");
let audio2 = new Audio("./audio/surprised-child-voice-sound-113127.mp3");
let audio3 = new Audio("./audio/mixkit-ominous-drums-227.wav");
let audio4 = new Audio("./audio/mixkit-arcade-space-shooter-dead-notification-272.wav");

const init = () => {
  computerGuess = Math.floor(Math.random() * 100);
  // console.log(computerGuess);
  document.getElementById("newGameBtn").style.display = "none";
  document.getElementById("gameArea").style.display = "none";
};

const startGame = () => {
  document.getElementById("welcomeScreen").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
};

const newGameBegin = () => {
  window.location.reload();
};

const startNewGame = () => {
  document.getElementById("newGameBtn").style.display = "inline";
  userNumberUpdate.setAttribute("disabled", true);
};

const compareGuess = () => {
  audio1.play();
  const userNumber = Number(document.getElementById("inputBox").value);
  userGuess = [...userGuess, userNumber];
  document.getElementById("guesses").innerHTML = userGuess;
  // check the value
  if (userGuess.length < maxGuess) {
    if (userNumber > computerGuess) {
      userGuessUpdate.innerHTML = "Your Guess is High 😩😨";
      userNumberUpdate.value = "";
    } else if (userNumber < computerGuess) {
      userGuessUpdate.innerHTML = "Your Guess is Low 🥱😒";
      userNumberUpdate.value = "";
    } else {
      userGuessUpdate.innerHTML = "Hurray! Its Correct 🥵🥵";
      audio4.play();
      userNumberUpdate.value = "";
      startNewGame();
    }
  } else {
    if (userNumber > computerGuess) {
      userGuessUpdate.innerHTML = `You Loose !! Correct Number was ${computerGuess}`;
      audio2.play();
      userNumberUpdate.value = "";
      startNewGame();
    } else if (userNumber < computerGuess) {
      userGuessUpdate.innerHTML = `You Loose !! Correct Number was ${computerGuess}`;
      audio2.play();
      userNumberUpdate.value = "";
      startNewGame();
    } else {
      userGuessUpdate.innerHTML = "Hurray! Its Correct 🥵🥵";
      audio4.play();
      userNumberUpdate.value = "";
      startNewGame();
    }
  }

  document.getElementById("attempts").innerHTML = userGuess.length;
};

const easyMode = () => {
  audio3.play();
  maxGuess = 10;
  startGame();
};

const hardMode = () => {
  audio3.play();
  maxGuess = 5;
  startGame();
};
