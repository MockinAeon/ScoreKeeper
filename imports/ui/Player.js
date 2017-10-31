import React from 'react';
import {Players} from './../api/player';
import PropTypes from 'prop-types';
export default class Player extends React.Component{
  render() {
    let itemClassName = `item item--position-${this.props.player.rank}`;
    return (
      <div className={itemClassName} key={this.props.player._id}>
        <div className="player">
          <div>
            <h3 className="player__name">{this.props.player.name}</h3>          
            <p className="player__stats">
              {this.props.player.position} place - {this.props.player.score} point(s).
            </p>
          </div>
          <div className="player__actions">
            <button className="button button--round" onClick={() => Players.remove(this.props.player._id)}><i className="fa fa-trash-o" aria-hidden="true"></i></button> 
            <button className="button button--round" onClick={() => {
              Players.update(this.props.player._id,{$inc: {score: 1}});
            }}><i className="fa fa-thumbs-o-up" aria-hidden="true"></i></button>
            <button className="button button--round" onClick={() => {
              Players.update(this.props.player._id,{$inc: {score: -1}});
            }}><i className="fa fa-thumbs-o-down" aria-hidden="true"></i></button>
          </div>
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  player: PropTypes.object.isRequired
};
