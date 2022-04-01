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
    if (this.props.searchMode !== this.props.searchModes.onSubmit) return;
    this.props.setUsers(this.input.current.value);
    this.input.current.value = '';
  }

  handleOnChange(e) {
    switch (this.props.searchMode) {
      case this.props.searchModes.immediate:
        this.immediateSearch(e);
        break;
      case this.props.searchModes.afterTypingEnds:
        this.searchAfterDelay(e);
        break;
      default:
        return;
    }
  }

  immediateSearch(e) {
    const value = e.target.value.trim();
    this.props.setUsers(value);
  }

  searchAfterDelay(e) {
    this.timeoutID.current = setTimeout(() => {
      const value = e.target.value.trim();
      this.props.setUsers(value);
    }, 800);
  }

  componentDidUpdate() {
    if (this.props.searchMode !== this.props.searchModes.afterTypingEnds)
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
