/**
 * Prototypal Inheritence
 */
let person = {
    name: "Robin",
    city: "Seattle",
    get: function() {
        console.log(`Hi! I am ${this.name} from the city ${this.city}`); 
    }
}

let doctor = {
    name: "Smith" 
}

doctor.__proto__ = person;

/**
 * Example 2
 * Function prototype inheritance
 */
 Function.prototype.mybind = function(...args){
    let obj = this;
    let params = args.slice(1);
    return function (...args2) {
        obj.apply(args[0], [...params, ...args2]);
    }
}

let printFullName = function() {
    console.log(`${this.firstName} ${this.lastName}`);
}

let employee = {
    firstName: "Madhu",
    lastName: "Konda"
}

let printName = printFullName.bind(employee);
printName();

let print = printFullName.mybind(employee);
print();


/**
 * Example 3
 * Calculator
 */

function Calculator() {
    //This is the public because we declared it on "this"
    this.total = 0;

    //Precision is private becuase it is a local variable
    const precision = 2;

    // Expose the private properties using public function expression
    this.toPrecision = (number) => Number(number.toFixed(precision));

    //Create a getter for the property "result"
    Object.defineProperty(this, 'result', {
        get() {
            return this.total;
        }
    })
}
//Create a static member
Calculator.PI = 3.141

//Prototype Methods
Calculator.prototype.add = function(x) {
    this.total += this.toPrecision(x);
}

Calculator.prototype.subtract = function(x) {
    this.total -= this.toPrecision(x);
}

Calculator.prototype.multiply = function(x) {
    this.total *= this.toPrecision(x);
}

Calculator.prototype.divide = function(x) {
    this.total /= this.toPrecision(x); 
}

function ScienticCalculator() {
    
}

ScienticCalculator.prototype = Calculator;

const s = new ScienticCalculator();