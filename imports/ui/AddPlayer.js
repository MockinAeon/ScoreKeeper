import React from 'react';
import {Players} from './../api/player';
export default class AddPlayer extends React.Component {
  
  handleSubmit(e) {
    e.preventDefault();
    let time = new Date().getTime();
    let playerName = e.target.playerName.value;
    if (playerName) {
      e.target.playerName.value = '';
      Players.insert({
        name: playerName,
        score: 0,
        time:time
      });
    }
  }
  render () {
    return (
      <div className="item">
        <form className ="form" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" className= "form__input" name="playerName" placeholder="Enter player's name" />
          <button className="button">Add Player</button>
        </form>
      </div>
    );
  }
}
