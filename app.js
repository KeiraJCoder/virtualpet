let petContainer = document.querySelector("#petcontainer")
let methodContainer = document.querySelector("#methodscontainer")
// let deadPet = document.querySelector(".deadPet");

//buttons
let selectDog = document.querySelector("#dogbtn")
let selectCat = document.querySelector("#catbtn")
let selectSnake = document.querySelector("#snakebtn")
let petImgs = document.querySelector("#petimgs")


//images

let petName = document.querySelector("#petname")
let snakeImg = document.querySelector("#snakeimg")
let dogImg = document.querySelector("#dogimg")
let catImg = document.querySelector("#catimg")
let P;

//progress bar
let progressBars = document.querySelector("#progressbars")

methodContainer.style.display = "none"
progressBars.style.display = "none"

Sure! Here's what the code to implement the checks for the pet's death would look like:

scss
Copy code
//app.js
// ...

function checkPetDeath() {
    // Check if any of the bars have reached 0
    if (hungerBar.value === 0 || thirstBar.value === 0 || energyBar.value === 0 || boredomBar.value === 0 || toiletBar.value === 0) {
        // If so, set the health bar to 0 and display the "Game Over" message
        healthBar.value = 0;
        gameOver.style.display = "block";
    }
}

// ...
const healthbar = document.getElementById("healthbar");

if (healthbar.value <= 0) {
  const gameover = document.getElementById("gameover");
  gameover.style.display = "block";
}

selectDog.addEventListener("click", () => {
    P = new Dog(prompt("What is your Dogs name going to be?"));
    methodContainer.style.display = "block"
    snakeImg.style.display = "none"
    catImg.style.display = "none"
    progressBars.style.display = "block"
    petContainer.style.display = "none"
    petName.textContent = `${P.name}`;
});

selectSnake.addEventListener("click", () => {
    P = new Snake(prompt("What is your Snakes name going to be?"));
    methodContainer.style.display = "block"
    petContainer.style.display = "none"
    dogImg.style.display = "none"
    catImg.style.display = "none"
    progressBars.style.display = "block"
    petName.textContent = `${P.name}`;
});

selectCat.addEventListener("click", () => {
    P = new Cat(prompt("What is your Cats name going to be?"));
    methodContainer.style.display = "block"
    dogImg.style.display = "none"
    snakeImg.style.display = "none"
    petContainer.style.display = "none"
    progressBars.style.display = "block"
    petName.textContent = `${P.name}`;
});

//Actions 

let giveFood = document.querySelector("#feedbtn")
let giveDrink = document.querySelector("#drinkbtn")
let petPlay = document.querySelector("#playbtn")
let petSleep = document.querySelector("#sleepbtn")
let petToilet = document.querySelector("#toiletbtn")


giveFood.addEventListener("click", () => {
    hungerBar.value += 20;
//     healthBar.value += 10;
    toiletBar.value -= 10;
})

giveDrink.addEventListener("click", () => {
    thirstBar.value += 20;
//     healthBar.value += 10;
    toiletBar.value -= 10;
    checkPetDeath();})

petPlay.addEventListener("click", () => {
    energyBar.value -= 10;
    boredomBar.value += 10;
  checkPetDeath();
})

petSleep.addEventListener("click", () =>{
    energyBar.value += 20;
//     healthBar.value +=10;
  checkPetDeath();
})

petToilet.addEventListener("click", () =>{
    toiletBar.value += 20;
  checkPetDeath();
})

//progress bars

let hungerBar = document.querySelector("#hungerbar")
let thirstBar = document.querySelector("#thirstbar")
let energyBar = document.querySelector("#energybar")
let boredomBar = document.querySelector("#boredbar")
let toiletBar = document.querySelector("#toiletbar")
// let healthBar = document.querySelector("#healthbar")

hungerBar.value = 100;
thirstBar.value = 100;
energyBar.value = 100;
boredomBar.value = 100;
toiletBar.value = 100;
// healthBar.value = 100;

let hunger = setInterval(() => {
    hungerBar.value--;
//     healthBar.value--;
}, 200);

let thirst = setInterval(() => {
    thirstBar.value--;
//     healthBar.value--;
}, 222);

let energy = setInterval(() => {
    energyBar.value--;
}, 300);

let bored = setInterval(() => {
    boredomBar.value--;
}, 300);

let toilet = setInterval(() => {
    toiletBar.value--;
},400)


// let health = (healthBar.value) 
   

