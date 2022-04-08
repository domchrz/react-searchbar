import { PureComponent } from 'react';
import Input from '../Input/Input';
import styles from './SearchBar.module.scss';

export default class SearchImmediate extends PureComponent {
  handleChange = (e) => {
    this.props.setQuery(e.target.value, () =>
      this.props.searchQuery(this.props.query)
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
