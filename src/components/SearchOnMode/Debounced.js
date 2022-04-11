import { Component } from 'react';
import debounce from '../../helpers/debounce';
import Input from '../Input/Input';
import styles from './SearchBar.module.scss';

export default class Debounced extends Component {
  debounce = debounce();

  handleChange = (e) => {
    this.props.setState({ query: e.target.value.trim() }, () =>
      this.props.handleSearch(this.props.query)
    );
  };

  render() {
    return (
      <div className={styles['search-bar']}>
        <Input
          value={this.props.query}
          handleChange={(e) => this.debounce(500, this.handleChange, e)}
        />
      </div>
    );
  }
}
