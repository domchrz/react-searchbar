import { Component } from 'react';
import styles from './SearchBar.module.scss';

export default class SearchBar extends Component {
  state = { query: '' };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.props.searchOnSubmit) {
      this.props.searchQuery(this.state.query);
      this.setState({ query: '' });
    }
  };

  handleChange = (e) => {
    if (this.props.searchOnSubmit) {
      this.setState({ query: e.target.value.trim() });
    } else {
      this.setState({ query: e.target.value.trim() }, () => {
        this.props.searchQuery(this.state.query);
      });
    }
  };

  render() {
    return (
      <form className={styles['search-bar']} onSubmit={this.handleSubmit}>
        <i className="material-icons">search</i>
        <input
          type="text"
          placeholder="Search..."
          onChange={this.handleChange}
          value={this.state.query}
        />
      </form>
    );
  }
}
