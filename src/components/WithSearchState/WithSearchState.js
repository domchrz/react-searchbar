import Input from '../Input/Input';
import React, { PureComponent } from 'react';

export const withSearchState = (SearchOnMode) => {
  return class WithSearchState extends PureComponent {
    state = {
      query: '',
    };

    handleChange = (e) => this.setState({ query: e.target.value.trim() });

    render() {
      return (
        <>
          <SearchOnMode
            query={this.state.query}
            handleSearch={this.props.handleSearch}>
            <Input value={this.state.query} handleChange={this.handleChange} />
          </SearchOnMode>
        </>
      );
    }
  };
};
