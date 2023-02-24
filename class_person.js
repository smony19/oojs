class Person {
    constructor (name) {
        this.name = name;
    }

    talk() {
        console.log(`Hello! I am ${this.name}.`);
    }
}

const person = new Person('Joe');
person.talk();