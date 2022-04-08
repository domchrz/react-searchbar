import { Component, createRef } from 'react';
import styles from './SearchBar.module.scss';

export default class SearchBar extends Component {
  input = createRef('');

  handleSubmit = (e) => {
    e.preventDefault();
    
    if (this.props.searchOnSubmit) {
      this.props.searchQuery(this.input.current.value.trim());
      this.input.current.value = '';
      e.target.reset();
    }
  };

  handleChange = () => {
    if (!this.props.searchOnSubmit) {
      this.props.searchQuery(this.input.current.value.trim());
    }
  };

  render() {
    return (
      <form className={styles['search-bar']} onSubmit={this.handleSubmit}>
        <i className="material-icons">search</i>
        <input
          type="text"
          placeholder="Search..."
          defaultValue=""
          onChange={this.handleChange}
          ref={this.input}
        />
      </form>
    );
  }
}
