/**
 * Mediator Pattern
 * 
 * The Mediator pattern provides central authority over a group of objects by controlling how these objects interact with each other. 
 * The "central" object is known as the 'mediator'. 
 * The mediator pattern is useful in scenarios where every object needs to be aware of any state change in any other object in the group.
 */

class Member {
    constructor(name) {
        this.name = name;
        this.chatRoom = null;
    }
    send = function(message, toMember) {
        this.chatRoom.send(message, this, toMember);
    }
    receive = function(message, fromMemeber) {
        console.log(`${fromMemeber.name} to ${this.name}: ${message}`);
    }
}

class ChatRoom {
    constructor() {
        this.members = {};
    }
    addMember = function(member) {
        this.members[member.name] = member;
        member.chatRoom = this;
    }
    send = function(message, fromMemeber, toMember) {
        toMember.receive(message, fromMemeber);
    }
}

const chat = new ChatRoom();
const bob = new Member("Bob");
const john = new Member("John");
const smith = new Member("Smith");
chat.addMember(bob);
chat.addMember(john);
chat.addMember(smith);

bob.send("Hey John", john);
john.send("How are you bob?", bob);
smith.send("Hey Buddy", john);