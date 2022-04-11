import { PureComponent } from 'react';
import Input from '../Input/Input';
import styles from './SearchBar.module.scss';

export default class OnSubmit extends PureComponent {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSearch(this.props.query);
  };

  handleChange = (e) => {
    this.props.setState({ query: e.target.value.trim() });
  };

  render() {
    return (
      <form className={styles['search-bar']} onSubmit={this.handleSubmit}>
        <Input handleChange={this.handleChange} value={this.props.query} />
      </form>
    );
  }
}
