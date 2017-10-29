import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
  renderSubTitle() {
    if (this.props.subt) {
      return <h2>{this.props.subt}</h2>  
    }
  }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.renderSubTitle()}
      </div>
    );
  }
}
TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  subt: PropTypes.string
};


TitleBar.defaultProps = {
//  title: 'Default title'
}

