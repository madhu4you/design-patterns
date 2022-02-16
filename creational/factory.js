/**
 * Factory Pattern
 * The factory pattern is a creational design pattern that uses factory methods to create objects — rather than by calling a constructor.
 */

function Developer(name) {
  this.name = name;
  this.type = "Developer";
}

function Tester(name) {
  this.name = name;
  this.type = "Tester";
}

function EmployeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case "Developer":
        return new Developer(name);
        break;
      case "Tester":
        return new Tester(name);
        break;
    }
  };
}

const employeeFactory = new EmployeeFactory();
const employees = [];
employees.push(employeeFactory.create("Robin", "Developer"));
employees.push(employeeFactory.create("Jack", "Tester"));
employees.push(employeeFactory.create("Adam", "Developer"));
employees.push(employeeFactory.create("Christene", "Tester"));
employees.push(employeeFactory.create("Becky", "Developer"));

function say() {
  console.log(`Hi, I am ${this.name} and I am a ${this.type}`);
};

employees.forEach((emp) => {
  say.call(emp);
});
