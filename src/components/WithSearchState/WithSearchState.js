import React, { PureComponent } from 'react';

export const withSearchState = (SearchOnMode) => {
  return class WithSearchState extends PureComponent {
    state = {
      query: '',
    };

    render() {
      return (
        <>
          <SearchOnMode
            query={this.state.query}
            setState={this.setState.bind(this)}
            handleSearch={this.props.handleSearch}
          />
        </>
      );
    }
  };
};
