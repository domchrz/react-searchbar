import { PureComponent } from 'react';
import Input from '../Input/Input';
import styles from './SearchBar.module.scss';

export default class SearchOnSubmit extends PureComponent {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.searchQuery(this.props.query);
    this.props.setQuery('');
  };

  handleChange = (e) => {
    this.props.setQuery(e.target.value);
  };

  render() {
    return (
      <form className={styles['search-bar']} onSubmit={this.handleSubmit}>
        <Input handleChange={this.handleChange} value={this.props.query} />
      </form>
    );
  }
}
