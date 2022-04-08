import React, { PureComponent } from 'react';
import SearchOnSubmit from '../SearchOnMode/SearchOnSubmit';
import SearchImmediate from '../SearchOnMode/SearchImmediate';
import SearchDebounced from '../SearchOnMode/SearchDebounced';
import SEARCH_MODES from '../../constants/searchModes';

class SearchBar extends PureComponent {
  state = {
    query: '',
  };

  setQuery = (string, cb) => {
    this.setState({ query: string.trim() }, () =>
      cb ? cb(this.state.query) : null
    );
  };

  render() {
    return (
      <>
        {this.props.searchMode === SEARCH_MODES.onSubmit && (
          <SearchOnSubmit
            setQuery={this.setQuery}
            searchQuery={this.props.cb}
            query={this.state.query}
          />
        )}
        {this.props.searchMode === SEARCH_MODES.immediate && (
          <SearchImmediate
            setQuery={this.setQuery}
            searchQuery={this.props.cb}
            query={this.state.query}
          />
        )}
        {this.props.searchMode === SEARCH_MODES.afterTyping && (
          <SearchDebounced
            setQuery={this.setQuery}
            searchQuery={this.props.cb}
            query={this.state.query}
          />
        )}
      </>
    );
  }
}

export default function searchBar(searchMode, cb) {
  return <SearchBar searchMode={searchMode} cb={cb} />;
}
