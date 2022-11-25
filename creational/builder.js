/**
 * Builder Pattern
 * As a programmer creating objects is one of the most common things that you will do.
 * It is so common that many of us never think twice about how we do it, but this can lead to incredibly messy code.
 * This is where the builder pattern comes in. The builder pattern is one of the best creational
 * design patterns for creating complex objects without complicating your constructors or code.
 * The best part about the builder pattern is that the new changes to JavaScript allow us to create extremely
 * concise builders compared to the traditional way of creating builders.
 */

class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  constructor(name) {
    this.name = name;
  }
}

class UserBuilder {
  constructor(name) {
    this.user = new User(name);
  }
  withAge(age) {
    this.user.age = age;
    return this;
  }
  withPhone(phone) {
    this.user.phone = phone;
    return this;
  }
  withAddress(address) {
    this.user.address = address;
    return this;
  }
  build() {
    return this.user;
  }
}

let builder = new UserBuilder("Bob").build();
console.log(builder);
let builder2 = new UserBuilder("Bob").withAge(10).withPhone('1234567890');

/**
 * Example 2
 */

 class Person {
    constructor(name, {age, phone, address} = {}) {
      this.name = name;
      this.age = age;
      this.phone = phone;
      this.address = address;
    }
  }

  let emp = new Person("Smith");
  console.log(emp);

  let emp2 = new Person("Adam", {age: 23, address: new Address("98012", "23rd Street")});
  console.log(emp2);