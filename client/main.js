import React from "react";
import ReactDOM from "react-dom";
import {Meteor} from "meteor/meteor";
import {Tracker} from 'meteor/tracker';
import {Players} from './../imports/api/player';

const renderPlayers = (playersList) => {
  
  let numbers = [{val: 1}, {val: 2}, {val: 3}];
  
  return playersList.map((player) => {
    return (
      <p key={player._id}>
        {player.name} : {player.score} point(s).
        <button onClick={() => {
          Players.remove(player._id);
        }}>X</button>
        
        <button onClick={() => {
          Players.update(
            player._id, 
            {$inc: {score: 1}}
          );
        }}>
        like</button>
        <button onClick={() => {
          Players.update(
            player._id,
            {$inc: {score: -1}}
          );
        }}>
        dislike</button>
      </p>
   
/* 
      <p key={player._id}>
          <button onClick={() => {
            Players.remove({_id: player._id});
         }}>X</button>
         {player.name}
       </p>
*/
    );
    });
};

const handleSubmit = (e) => {
  e.preventDefault();
  let playerName = e.target.playerName.value;
  if (playerName) {
    e.target.playerName.value = '';
    Players.insert({
      name: playerName,
      score: 0
    });    
  }
};

Meteor.startup(() => {
  Tracker.autorun(() =>{
    let players = Players.find().fetch();
  
    let name = '你好';
    let title = 'Score Keep';
    let jsx = (
      <div>
        <h1>{title}</h1>
        <p>Hello {name}!</p>
        {renderPlayers(players)}
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Enter player's name" />
          <button>Add Player</button>
        </form>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});
