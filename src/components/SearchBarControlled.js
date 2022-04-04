import { Component } from 'react';
import styles from './SearchBar.module.scss';

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      tiemoutID: null,
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.activeSearchMode !== this.props.searchModes.onSubmit) return;
    this.searchUsers();
    this.setState({ inputValue: '' });
  }

  searchUsers() {
    const value = this.state.inputValue.trim();
    this.props.setUsers(value);
  }

  searchAfterDelay() {
    this.setState({
      timeoutID: setTimeout(() => {
        this.searchUsers();
      }, 800),
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.inputValue === this.state.inputValue) return;

    switch (this.props.activeSearchMode) {
      case this.props.searchModes.immediate:
        this.searchUsers();
        break;
      case this.props.searchModes.afterTyping:
        this.searchAfterDelay();
        break;
    }

    if (this.props.activeSearchMode === this.props.searchModes.afterTyping) {
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
