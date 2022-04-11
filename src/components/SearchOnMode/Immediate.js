import { PureComponent } from 'react';
import Input from '../Input/Input';
import styles from './SearchBar.module.scss';

export default class Immediate extends PureComponent {
  handleChange = (e) => {
    this.props.setState({ query: e.target.value.trim() }, () =>
      this.props.handleSearch(this.props.query)
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
