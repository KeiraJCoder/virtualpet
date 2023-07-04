let petContainer = document.querySelector("#petcontainer");
let methodContainer = document.querySelector("#methodscontainer");
let selectDog = document.querySelector("#dogbtn");
let selectCat = document.querySelector("#catbtn");
let selectSnake = document.querySelector("#snakebtn");
let petImgs = document.querySelector("#petimgs");
let petName = document.querySelector("#petname");
let snakeImg = document.querySelector("#snakeimg");
let dogImg = document.querySelector("#dogimg");
let catImg = document.querySelector("#catimg");
let P;
let progressBars = document.querySelector("#progressbars");
let gameOver = document.querySelector("#gameover");
let timerElement = document.querySelector("#timer");

let giveFood = document.querySelector("#feedbtn");
let giveDrink = document.querySelector("#drinkbtn");
let petPlay = document.querySelector("#playbtn");
let petSleep = document.querySelector("#sleepbtn");
let petToilet = document.querySelector("#toiletbtn");

let hungerBar = document.querySelector("#hungerbar");
let thirstBar = document.querySelector("#thirstbar");
let energyBar = document.querySelector("#energybar");
let boredomBar = document.querySelector("#boredbar");
let toiletBar = document.querySelector("#toiletbar");
let healthBar = document.querySelector("#healthbar");

methodContainer.style.display = "none";
progressBars.style.display = "none";
gameOver.style.display = "none";

hungerBar.value = 100;
thirstBar.value = 100;
energyBar.value = 100;
boredomBar.value = 100;
toiletBar.value = 100;
healthBar.value = 100;

let startTime;
let timerInterval;

function startTimer() {
  startTime = Date.now();
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
  const minutes = Math.floor(elapsedTime / 60);
  const seconds = elapsedTime % 60;
  const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  timerElement.textContent = formattedTime;
}

function stopTimer() {
  clearInterval(timerInterval);
}

function updateHealth() {
  if (P) {
    healthBar.value = (hungerBar.value + thirstBar.value + energyBar.value + boredomBar.value + toiletBar.value) / 5;
    if (healthBar.value <= 0) {
      gameOver.style.display = "block";
      stopTimer();
      clearInterval(hunger);
      clearInterval(thirst);
      clearInterval(energy);
      clearInterval(bored);
      clearInterval(toilet);
      displayHighScore();
    }
  }
}

healthBar.addEventListener("change", () => {
  if (healthBar.value <= 0) {
    gameOver.style.display = "block";
    stopTimer();
    document.body.style.overflow = "hidden"; // Hide scrollbars
    clearInterval(hunger);
    clearInterval(thirst);
    clearInterval(energy);
    clearInterval(bored);
    clearInterval(toilet);
    displayHighScore();
  }
});

let hunger = setInterval(() => {
  hungerBar.value--;
  updateHealth();
}, 200);

let thirst = setInterval(() => {
  thirstBar.value--;
  updateHealth();
}, 222);

let energy = setInterval(() => {
  energyBar.value--;
  updateHealth();
}, 300);

let bored = setInterval(() => {
  boredomBar.value--;
  updateHealth();
}, 300);

let toilet = setInterval(() => {
  toiletBar.value--;
  updateHealth();
}, 400);

giveFood.addEventListener("click", () => {
  hungerBar.value = Math.min(100, hungerBar.value + 20);
  toiletBar.value = Math.max(0, toiletBar.value - 10);
  updateHealth();
});

giveDrink.addEventListener("click", () => {
  thirstBar.value = Math.min(100, thirstBar.value + 20);
  toiletBar.value = Math.max(0, toiletBar.value - 10);
  updateHealth();
});

petPlay.addEventListener("click", () => {
  energyBar.value = Math.max(0, energyBar.value - 10);
  boredomBar.value = Math.min(100, boredomBar.value + 10);
  updateHealth();
});

petSleep.addEventListener("click", () => {
  energyBar.value = Math.min(100, energyBar.value + 20);
  updateHealth();
});

petToilet.addEventListener("click", () => {
  toiletBar.value = Math.min(100, toiletBar.value + 20);
  updateHealth();
});

selectDog.addEventListener("click", () => {
  const name = prompt("What is your Dog's name going to be?");
  if (name !== null && name.trim() !== "") {
    P = new Dog(name);
    startGame();
    catImg.style.display = "none";
    snakeImg.style.display = "none";
  }
});

selectSnake.addEventListener("click", () => {
  const name = prompt("What is your Snake's name going to be?");
  if (name !== null && name.trim() !== "") {
    P = new Snake(name);
    startGame();
    dogImg.style.display = "none";
    catImg.style.display = "none";
  }
});

selectCat.addEventListener("click", () => {
  const name = prompt("What is your Cat's name going to be?");
  if (name !== null && name.trim() !== "") {
    P = new Cat(name);
    startGame();
    dogImg.style.display = "none";
    snakeImg.style.display = "none";
  }
});

function startGame() {
  methodContainer.style.display = "block";
  progressBars.style.display = "flex";
  petContainer.style.display = "none";
  petName.textContent = `${P.name}`;
  P.startGame();
  startTimer();
}

function displayHighScore() {
  const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
  const minutes = Math.floor(elapsedTime / 60);
  const seconds = elapsedTime % 60;
  gameOver.innerHTML = `Game Over!<br><br>Time Alive:<br> ${minutes} minutes<br>${seconds} seconds`;
  gameOver.style.display = "block";
  gameOver.style.textAlign = "center"; // Center the message
  gameOver.style.top = "50%"; // Position it lower on the screen
}

updateHealth();
