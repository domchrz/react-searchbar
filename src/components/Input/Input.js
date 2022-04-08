import React, { PureComponent } from 'react';

export default class Input extends PureComponent {
  render() {
    return (
      <>
        <i className="material-icons">search</i>
        <input
          type="text"
          placeholder="Search..."
          onChange={this.props.handleChange}
          value={this.props.query}
        />
      </>
    );
  }
}
