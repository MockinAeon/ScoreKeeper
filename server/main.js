import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/player';

Meteor.startup(() => {
  class Person{
    
    constructor(name = 'Anonymous', age = 0) {
      this.name = name;
      this.age = age;
    }
    getGreeting() {
      return `Hi, you are ${this.name}.`;
    }
    getPersonDes() {
      return `${this.name} is ${this.age} year(s) old`;
    }
  }

  class Employee extends Person {
    constructor(name, age, title) {
      super (name, age);
      this.title = title;
    }i
    getGreeting() {
      if (this.title) {
        return `Hi, you are ${this.name}. You work as a ${this.title}`;
      } else {
        return super.getGreeting();
      }
    }
    hasJob() {
      return !!this.title;
    }
  }
  class Programmer extends Person {
    constructor (name, age, language = 'Java') {
      super(name, age);
      this.language = language;
    }
    getGreeting() {
      return `Hi! I am ${this.name}, I use ${this.language}`
    }
  } 
  let me = new Employee('Xuran', 26, 'db admin');
  console.log(me.getGreeting());
  //console.log(me.getPersonDes());
  console.log(me.hasJob());
  let you = new Employee('Mike');
  console.log(you.getGreeting()); 

  let prog = new Programmer();
  console.log(prog.getGreeting());
});
