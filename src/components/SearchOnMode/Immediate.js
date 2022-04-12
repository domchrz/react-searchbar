import { PureComponent } from 'react';
import styles from './SearchBar.module.scss';

export default class Immediate extends PureComponent {
  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) {
      this.props.handleSearch(this.props.query);
    }
  }

  render() {
    return <div className={styles['search-bar']}>{this.props.children}</div>;
  }
}
