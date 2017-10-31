import React from "react";
import ReactDOM from "react-dom";
import {Meteor} from "meteor/meteor";
import {Tracker} from 'meteor/tracker';

import {Players, calculatePlayerPositions} from './../imports/api/player';
import App from './../imports/ui/App';

Meteor.startup(() => {
  Tracker.autorun(() =>{
    let players = Players.find({}, {sort: {score: -1}}).fetch();
//    let players = Players.find({}, {sort: {time: -1}}).fetch();
    let positionedPlayers = calculatePlayerPositions(players);
    let title = 'Score Keep';
    ReactDOM.render(<App title = {title} players={positionedPlayers}/>, document.getElementById('app'));
  });
});
