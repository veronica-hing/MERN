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


const ninja1 = new Ninja("Hyabusa",10);
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();
