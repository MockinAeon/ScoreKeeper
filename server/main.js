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
  let me = new Person('Xuran');
  //console.log(me.getGreeting());
  console.log(me.getPersonDes());
});
