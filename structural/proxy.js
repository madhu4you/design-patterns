/**
 * Proxy Pattern
 * A proxy object is an object that acts as an interface (or placeholder) for something else. 
 * The proxy could be an interface to anything: an API, a network connection, a large object in memory, 
 * or some other resource that is expensive or impossible to duplicate.
 * 
 * A proxy is a 'stand-in' object that is used to access the 'real' object behind the scenes. 
 * In the proxy, extra functionality can be provided, for example caching when operations on the real object are resource intensive, 
 * or checking preconditions before operations on the real object are invoked.
 */

//External API

class CryptoCurrencyAPI {
    constructor() {
        this.getValue = function (coin) {
            console.log("Calling External API");
            switch (coin) {
                case 'Bitcoin': return "$35000";
                case 'Litecoin': return "$50";
                case 'Dogecoin': return "$1";
            }
        };
    }
}

const api = new CryptoCurrencyAPI();
//console.log(api.getValue("Bitcoin"));
//console.log(api.getValue("Litecoin"));
//console.log(api.getValue("Dogecoin"));

class CryptoProxy {
    constructor() {
        this.api = new CryptoCurrencyAPI();
        this.cache = {};
    }
    getValue = function (coin) {
        if(!this.cache[coin]) {
            this.cache[coin] = this.api.getValue(coin);
        }
        return this.cache[coin];
    }
}

const proxy = new CryptoProxy();
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Dogecoin"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Dogecoin"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Dogecoin"));
