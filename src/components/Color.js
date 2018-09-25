import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Color extends Component {
  static propTypes = {
    onSelect: PropTypes.func,
    color: PropTypes.string
  };

  handleClick = () => {
    const { color, onSelect } = this.props;
    onSelect(color);
    console.log('COOOLLLOR', color);
  };

  render() {
    const { color } = this.props;

    return (
      <p>
        <span onClick={this.handleClick}>{color}</span>
      </p>
    );
  }
}

export default Color;