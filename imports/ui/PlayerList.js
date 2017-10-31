import React from 'react';
import Player from './Player';
import FlipMove from 'react-flip-move';
import PropTypes from 'prop-types';
export default class PlayerList extends React.Component {
  renderPlayers() {
    if (this.props.players.length == 0) {
      return ( 
        <div className = "item">
          <p className ="item_message">你今天过得好吗？ 给我留个言吧!</p>
        </div>
      );
    } else {
      return this.props.players.map((player) => {
        return <Player key={player._id} player={player}/>;
      });
    }
  }
  render() {
    return (
      <div>
        <FlipMove maintainContainerHeight={true}>
          {this.renderPlayers()}
        </FlipMove>
      </div>
    );
  }
}
PlayerList.propTypes = {
  players: PropTypes.array.isRequired
}
