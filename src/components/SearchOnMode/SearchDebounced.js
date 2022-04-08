import { Component } from 'react';
import debounce from '../../helpers/debounce';
import Input from '../Input/Input';
import styles from './SearchBar.module.scss';

export default class SearchDebounced extends Component {
  debounce = debounce();

  handleChange = (e) => {
    this.props.setQuery(e.target.value, (updatedQuery) =>
      this.debounce(500, this.props.searchQuery, updatedQuery)
    );
  };

  render() {
    return (
      <div className={styles['search-bar']}>
        <Input value={this.props.query} handleChange={this.handleChange} />
      </div>
    );
  }
}
