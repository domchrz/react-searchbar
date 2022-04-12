import { Component } from 'react';
import debounce from '../../helpers/debounce';
import styles from './SearchBar.module.scss';

export default class Debounced extends Component {
  debounce = debounce();

  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) {
      this.debounce(500, this.props.handleSearch, this.props.query);
    }
  }

  render() {
    return <div className={styles['search-bar']}>{this.props.children}</div>;
  }
}
