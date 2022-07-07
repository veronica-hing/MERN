class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, resilience){
        super(name, cost);
        this.power = power;
        this.resilience = resilience;//resilience
    }
    attack(target){
        target.resilience = target.resilience - this.power;
        console.log(target.name, target.resilience);
    }
}

class Effect extends Card{
    constructor(name, cost,text, stat, mag){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = mag; //magnitude
    }
    play(target){
        if(target instanceof Unit){
            target[this.stat] = target[this.stat] + this.magnitude;
        } else {
            throw new Error("Target must be a Unit");
        }
        console.log(target.name, target[this.stat]);
    }
}

let redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
let blackBeltNinja = new Unit("Black Belt Ninja", 4,5,4);

const hardAlgo = new Effect("Hard Algorithm", 2, "Increase target resilience by 3", "resilience", 3);
const unHandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "Decrease target resilience by 2", "resilience", -2);
const pairProgramming = new Effect("Pair Programming", 3, "Increase target power by 3", "power", 3);

unHandledPromiseRejection.play(redBeltNinja);
pairProgramming.play(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);