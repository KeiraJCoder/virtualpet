let petContainer = document.querySelector("#petcontainer")
let methodContainer = document.querySelector("#methodscontainer")
let selectDog = document.querySelector("#dogbtn")
let selectCat = document.querySelector("#catbtn")
let selectSnake = document.querySelector("#snakebtn")
let petImgs = document.querySelector("#petimgs")
let petName = document.querySelector("#petname")
let snakeImg = document.querySelector("#snakeimg")
let dogImg = document.querySelector("#dogimg")
let catImg = document.querySelector("#catimg")
let P;
let progressBars = document.querySelector("#progressbars")

let gameOver = document.querySelector("#gameover")

let giveFood = document.querySelector("#feedbtn")
let giveDrink = document.querySelector("#drinkbtn")
let petPlay = document.querySelector("#playbtn")
let petSleep = document.querySelector("#sleepbtn")
let petToilet = document.querySelector("#toiletbtn")

let hungerBar = document.querySelector("#hungerbar")
let thirstBar = document.querySelector("#thirstbar")
let energyBar = document.querySelector("#energybar")
let boredomBar = document.querySelector("#boredbar")
let toiletBar = document.querySelector("#toiletbar")
let healthBar = document.querySelector("#healthbar")

methodContainer.style.display = "none"
progressBars.style.display = "none"
gameOver.style.display = "none"

hungerBar.value = 100;
thirstBar.value = 100;
energyBar.value = 100;
boredomBar.value = 100;
toiletBar.value = 100;
healthBar.value = 100;

// The health is calculated based on other stats
function updateHealth() {
    healthBar.value = (hungerBar.value + thirstBar.value + energyBar.value + boredomBar.value + toiletBar.value) / 5;
    if (healthBar.value <= 0) {
        gameOver.style.display = "block";
        // Stop all intervals
        clearInterval(hunger);
        clearInterval(thirst);
        clearInterval(energy);
        clearInterval(bored);
        clearInterval(toilet);
    }
}

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
}, 400)

giveFood.addEventListener("click", () => {
    hungerBar.value = Math.min(100, hungerBar.value + 20);
    toiletBar.value = Math.max(0, toiletBar.value - 10);
    updateHealth();
})

giveDrink.addEventListener("click", () => {
    thirstBar.value = Math.min(100, thirstBar.value + 20);
    toiletBar.value = Math.max(0, toiletBar.value - 10);
    updateHealth();
})

petPlay.addEventListener("click", () => {
    energyBar.value = Math.max(0, energyBar.value - 10);
    boredomBar.value = Math.min(100, boredomBar.value + 10);
    updateHealth();
})

petSleep.addEventListener("click", () =>{
    energyBar.value = Math.min(100, energyBar.value + 20);
    updateHealth();
})

petToilet.addEventListener("click", () =>{
    toiletBar.value = Math.min(100, toiletBar.value + 20);
    updateHealth();
})

selectDog.addEventListener("click", () => {
    P = new Dog(prompt("What is your Dog's name going to be?"));
    methodContainer.style.display = "block";
    progressBars.style.display = "block";
    petContainer.style.display = "none";
    petName.textContent = `${P.name}`;
});

selectSnake.addEventListener("click", () => {
    P = new Snake(prompt("What is your Snake's name going to be?"));
    methodContainer.style.display = "block";
    progressBars.style.display = "block";
    petContainer.style.display = "none";
    petName.textContent = `${P.name}`;
});

selectCat.addEventListener("click", () => {
    P = new Cat(prompt("What is your Cat's name going to be?"));
    methodContainer.style.display = "block";
    progressBars.style.display = "block";
    petContainer.style.display = "none";
    petName.textContent = `${P.name}`;
});
