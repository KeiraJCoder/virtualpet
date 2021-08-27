class CyberPet {
    constructor(name) {
        this.name = name;
        this.hunger = 50;
        this.thirst = 50;
        this.happiness = 50;
        this.bored = 50;
        this.energy = 50;
        this.toilet = 50;
        this.isSleeping = false;
        this.intervalID = 0;
    }

    

    giveFood() {
        this.hunger -= 5;
        this.thirst += 3;
        this.bored += 2;
        this.toilet += 2;
    }   
        
     toilet(){
        this.toilet -= 5;
        this.hunger += 2;
        this.thirst += 3;
     }   
    

    giveDrink() {
        this.thirst -= 5;
        this.hunger += 3;
        this.toilet += 5
    }

    sleeping(){
        if (this.isSleeping){
            this.energy ++;
            this.hunger ++;
            this.thirst ++;
        }
    }

    play(){
        this.energy--; 
        this.bored += 5;

    }

    checkStatus(){
        return `Name: ${this.name}, Happiness: ${this.happiness}, Energy: ${this.energy}, Hunger: ${this.hunger}, Thirst: ${this.thirst}, Boredom: ${this.bored}`;
    }
}



class Dog extends CyberPet {
    constructor(name) {
        super(name)
    }
}

class Snake extends CyberPet {
    constructor(name) {
        super(name)
    }
}

class Cat extends CyberPet {
    constructor(name) {
        super(name)

    }
}

// const Bob = new Dog("Bob");
// let Hoppy = new Snake("Hoppy");
// let Roly = new Cat("Roly");



// function alive(cyberPet){
//     cyberPet.intervalID = setInterval(()=>{
//         if (cyberPet.play == true || cyberPet.giveDrink == true || cyberPet.giveFood == true) {
//             clearInterval(cyberPet.intervalID);
//         } else {
//             cyberPet.sleeping();
//             console.log(cyberPet);
//         }
//     }, 3000)
// };

// console.log(Bob);
// alive(Bob)