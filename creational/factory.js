/**
 * Factory Pattern
 * The factory pattern is a creational design pattern that uses factory methods to create objects — rather than by calling a constructor.
 */

function Developer() {
  this.type = "Developer";
  this.withName = (name) => {
    this.name = name;
    return this;
  }
}

function Tester() {
  this.type = "Tester";
  this.withName = (name) => {
    this.name = name;
    return this;
  }
}

function EmployeeFactory() {
  this.create = (type) => {
    switch (type) {
      case "Developer":
        return new Developer();
        break;
      case "Tester":
        return new Tester();
        break;
    }
  };
}

const employeeFactory = new EmployeeFactory();
const employees = [];
employees.push(employeeFactory.create("Developer").withName("Robin"));
employees.push(employeeFactory.create("Tester").withName("Jack"));
employees.push(employeeFactory.create("Developer").withName("Adam"));
employees.push(employeeFactory.create("Tester").withName("Christene"));
employees.push(employeeFactory.create("Developer").withName("Becky"));

function say() {
  console.log(`Hi, I am ${this.name} and I am a ${this.type}`);
};

employees.forEach((emp) => {
  say.call(emp);
});
