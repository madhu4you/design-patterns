/**
 * Singleton Pattern
 * The Singleton pattern allows you to limit the number of instances of a particular object to one.
 * This single instance is called the singleton.
 * Singletons reduce the need for global variables which is particularly important in JavaScript
 * because it limits namespace pollution and associated risk of name collisions.
 */

function Process(state) {
  this.state = state;
}
const Singleton = (function () {
  function ProcessManager() {
    this.numProcess = 0;
  }
  let pManager;

  function createProcessManager() {
    return new ProcessManager();
  }

  return {
    getProcessManager: () => {
      if (!pManager) pManager = createProcessManager();
      return pManager;
    },
  };
})();

const pm = Singleton.getProcessManager();
const pm2 = Singleton.getProcessManager();

console.log(pm === pm2);

/**
 * Example 2
 * Short Form,
 */

let SingletonFactory = function () {
  if (!SingletonFactory.instance) {
    this.name = [];
    SingletonFactory.instance = this;
  }
  return SingletonFactory.instance;
};

SingletonFactory.getInstance = function () {
  return SingletonFactory.instance || new SingletonFactory();
};

let s = SingletonFactory.getInstance();
let s2 = SingletonFactory.getInstance();

console.log(s === s2);

/**
 * Example 3
 * With ES6
 */
class UserStore {
  constructor() {
    if (!UserStore.instance) {
      this._data = [];
      UserStore.instance = this;
    }

    return UserStore.instance;
  }
  add(item){
    this._data.push(item);
  }

  get(id){
    return this._data.find(d => d.id === id);
  }

  //rest is the same code as preceding example
}

const instance = new UserStore();
Object.freeze(instance);
