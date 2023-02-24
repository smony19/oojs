class Animal {
    constructor(legs) {
        this.legs = legs;
    }
    walk() {
        console.log('walking on ' + this.legs + ' legs');
    }
}

class Bird extends Animal {
    constructor(legs) {
        super(legs);
    }
    fly() {
        console.log('flying');
    }
}


let bird = new Bird(2);

bird.walk();
bird.fly();

/*class Bird extends Animal {
	constructor(legs, color) {
		super(legs);
		this.color = color;
	}
	fly() {
		console.log("flying");
	}
	getColor() {
		return this.color;
	}
}

let pegion = new Bird(2, "white");
console.log(pegion.getColor());

class Dog extends Animal {
    constructor() {
        super(4);
    }
    walk() {
        super.walk();
        console.log(`go walking`);
    }
}

let bingo = new Dog();
bingo.walk();

class Item {
  static count = 0;
  static getCount() {
    return Item.count;
  }
}

console.log(Item.getCount());

*/