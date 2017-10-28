import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/player';

Meteor.startup(() => {
  let obj = {
    name: 'Xuran',
    printName() {
      console.log(`Name: ${this.name}`);
    }
  };
});
