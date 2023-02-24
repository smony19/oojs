class Person {
    constructor(name) {
        this._name = name; //by coding convention name is a private property of class Person
    }
    get name() {        //getter method to return when name is accessed
        return this._name;
    }
    set name(newName) {     //setter method when name property is assigned a value
        newName = newName.trim();
        if (newName === '') {
            throw 'The name cannot be empty';
        }
        this._name = newName;
    }
}

let person = new Person('Joe');
console.log(person.name); 

person.name = 'Wendy';
//person.setName('Wendy');
console.log(person.name); 