import { Component, createRef } from 'react';
import { SearchContext } from '../context/SearchContext';
import styles from './SearchBar.module.scss';

export default class SearchBar extends Component {
  static contextType = SearchContext

  constructor() {
    super();
    this.input = createRef(null);
    this.timeoutID = createRef(null);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.context.activeSearchMode !== this.context.searchModes.onSubmit) return;
    this.searchUsers(this.input.current.value);
    this.input.current.value = '';
  }

  handleOnChange(e) {
    switch (this.context.activeSearchMode) {
      case this.context.searchModes.immediate:
        this.searchUsers(e.target.value);
        break;
      case this.context.searchModes.afterTyping:
        this.searchAfterDelay(e);
        break;
      default:
        return;
    }
  }

  searchUsers(string) {
    const value = string.trim();
    this.context.setSearchString(value);
  }

  searchAfterDelay(e) {
    this.timeoutID.current = setTimeout(() => {
      this.searchUsers(e.target.value);
    }, 800);
  }

  componentDidUpdate() {
    if (this.context.activeSearchMode !== this.context.searchModes.afterTyping)
      return;
    clearTimeout(this.timeoutID.current);
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
          onChange={this.handleOnChange.bind(this)}
          ref={this.input}
        />
      </form>
    );
  }
}
