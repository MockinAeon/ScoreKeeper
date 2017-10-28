import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subt}</h2>
      </div>
    );
  }
}
TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  subt: PropTypes.string.isRequired
};


TitleBar.defaultProps = {
//  title: 'Default title'
}

