/**
 * Strategy Pattern
 * The Strategy pattern is a behavioral design pattern that enables you to define a group (or family) of closely-related algorithms (known as strategies). 
 * The strategy pattern allows you to swap strategies in and out for each other as needed at runtime.
 */
class Package {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
}
class Fedex {
    constructor() {
        this.calculate = (item) => {
            //Fedex calculation
            return 2.5;
        };
    }
}


class UPS {
    constructor() {
        this.calculate = (item) => {
            //UPS calculation
            return 1.5;
        };
    }
}


class USPS {
    constructor() {
        this.calculate = (item) => {
            //USPS calculation
            return 3.5;
        };
    }
}
class ShippingStrategy {
    constructor(company) {
        this.company = company;
    }
    setCompany = (company) => {
        this.company = company;
    }
    calculate = (item) => {
        return this.company.calculate(item);
    }
}
const item = new Package("New York", "Seattle");
const fedex = new Fedex();
const ups = new UPS();
const usps = new USPS();

const shipping = new ShippingStrategy();
shipping.setCompany(fedex);
console.log(`FedEx: ${shipping.calculate(item)}`);
shipping.setCompany(ups);
console.log(`UPS: ${shipping.calculate(item)}`);
