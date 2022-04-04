import { Component, createRef } from 'react';
import styles from './SearchBar.module.scss';

export default class SearchBar extends Component {
  constructor() {
    super();
    this.input = createRef(null);
    this.timeoutID = createRef(null);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.activeSearchMode !== this.props.searchModes.onSubmit) return;
    this.searchUsers(this.input.current.value);
    this.input.current.value = '';
  }

  handleOnChange(e) {
    switch (this.props.activeSearchMode) {
      case this.props.searchModes.immediate:
        this.searchUsers(e.target.value);
        break;
      case this.props.searchModes.afterTyping:
        this.searchAfterDelay(e);
        break;
      default:
        return;
    }
  }

  searchUsers(string) {
    const value = string.trim();
    this.props.setUsers(value);
  }

  searchAfterDelay(e) {
    this.timeoutID.current = setTimeout(() => {
      this.searchUsers(e.target.value);
    }, 800);
  }

  componentDidUpdate() {
    if (this.props.activeSearchMode !== this.props.searchModes.afterTyping)
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
