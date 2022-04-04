import { Component } from 'react';
import { SearchContext } from '../context/SearchContext';
import styles from './SearchBar.module.scss';

export default class SearchBar extends Component {
  static contextType = SearchContext;

  constructor() {
    super();
    this.state = {
      inputValue: '',
      tiemoutID: null,
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.context.activeSearchMode !== this.context.searchModes.onSubmit)
      return;
    this.searchUsers();
    this.setState({ inputValue: '' });
  }

  searchUsers() {
    const value = this.state.inputValue.trim();
    this.context.setSearchString(value);
  }

  searchAfterDelay() {
    this.setState({
      timeoutID: setTimeout(() => {
        this.searchUsers(this.state.inputValue);
      }, 800),
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.inputValue === this.state.inputValue) return;

    switch (this.context.activeSearchMode) {
      case this.context.searchModes.immediate:
        this.searchUsers();
        break;
      case this.context.searchModes.afterTyping:
        this.searchAfterDelay();
        break;
    }
    if (
      this.context.activeSearchMode === this.context.searchModes.afterTyping
    ) {
      this.setState({ timeoutID: null });
    }
  }

  render() {
    return (
      <form
        className={styles['search-bar']}
        onSubmit={this.handleSubmit.bind(this)}>
        <i className="material-icons">search</i>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => this.setState({ inputValue: e.target.value })}
          value={this.state.inputValue}
        />
      </form>
    );
  }
}
