/**
 * Decorator Pattern
 * The Decorator pattern extends (decorates) an object’s behavior dynamically. 
 * The ability to add new behavior at runtime is accomplished by a Decorator object which ‘wraps itself’ around the original object. 
 * Multiple decorators can add or override functionality to the original object.
 */

let User = function(name) {
    this.name = name;
    this.say = function() {
        console.log(`User: ${this.name}`);
    }
}

let UserDecorator = function(user, street, city) {
    this.user = user;
    this.name = user.name;
    this.street = street;
    this.city = city;

    this.say = function() {
        console.log(`Decorator User: ${this.name}, ${this.street}, ${this.city}`);
    }
}

function run() {
    let user = new User("Jack");
    user.say();

    let du = new UserDecorator(user, "23rd Street", "Seattle");
    du.say();
}
run();