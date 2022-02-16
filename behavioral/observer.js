/**
 * Observer Patter
 * The Observer pattern is a design pattern that offers a subscription model in which objects (known as 'observers') 
 * can subscribe to an event (known as a 'subject') and get notified when the event occurs (or when the subject sends a signal). 
 * This pattern is the cornerstone of event driven programming.
 */

class Subject {
    constructor() {
        this.observers = [];
    }
    subscribe = function(fn) {
        this.observers.push(fn);
    }
    unsubscribe = function(fnToRemove) {
        this.observers = this.observers.filter((fn) => {
            if(fn != fnToRemove) {
                return fn;
            }
        })
    }
    fire = function() {
        this.observers.forEach(fn => {
            fn.call();
        })
    }
}

const sub = new Subject();
function observer1() {
    console.log("Observer 1 Firing");
}

function observer2() {
    console.log("Observer 2 Firing");
}

sub.subscribe(observer1);
sub.subscribe(observer2);
sub.fire();
sub.unsubscribe(observer2);
sub.fire();