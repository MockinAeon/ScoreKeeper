import React from 'react';
import {Players} from './../api/player';
import PropTypes from 'prop-types';

export default class Player extends React.Component{
  render() {
    return (
      <p key={this.props.player._id}>
        {this.props.player.name} : {this.props.player.score} point(s).
        <button onClick={() => Players.remove(this.props.player._id)}>X</button>

        <button onClick={() => {
          Players.update(this.props.player._id,{$inc: {score: 1}});
        }}>like</button>
        <button onClick={() => {
          Players.update(this.props.player._id,{$inc: {score: -1}});
        }}>dislike</button>
      </p>
    );
  }
}

Player.propTypes = {
  player: PropTypes.object.isRequired
};
