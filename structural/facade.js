/**
 * Facade Pattern
 * 
 * The Façade pattern provides an interface which shields clients from complex functionality in one or more subsystems. 
 * It is a simple pattern that may seem trivial but it is powerful and extremely useful. 
 * It is often present in systems that are built around a multi-layer architecture.
 */

let Mortgage = function(name) {
    this.name = name;
}
Mortgage.prototype = {
    applyFor: function(amount) {
        let result = "approved";
        if(!new Bank().verify(this.name, amount)) {
            result = "denied";
        }
        else if(!new Credit().verify(this.name)) {
            result = "denied";
        }
        else if(!new Background().verify(this.name)) {
            result = "denied";
        }
        return `${this.name} has been ${result} for a ${amount} mortgage`;
    }
}
let Bank = function() {
    this.verify = function(name, amount) {
        return true;
    }
}

let Background = function() {
    this.verify = function(name) {
        return true;
    }
}

let Credit = function() {
    this.verify = function(name) {
        return true;
    }
}

function run() {
    let mortgage = new Mortgage("Smith");
    let result = mortgage.applyFor("$1000000");
    console.log(result);
}
run();