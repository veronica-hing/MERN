class Ninja {
    constructor(name, health, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log(`name: ${this.name} \n strength: ${this.strength} \n speed: ${this.speed} \n health: ${this.health} \n`);
    }
    drinkSake(){
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name, wisdom = 10){
        super(name, 200, 10, 10);
        this.wisdom = wisdom;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("Yesterday's bugs are tomorrow's 'features'.");
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
