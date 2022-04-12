import { PureComponent } from 'react';
import styles from './SearchBar.module.scss';

export default class OnSubmit extends PureComponent {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSearch(this.props.query);
  };


  render() {
    return (
      <form className={styles['search-bar']} onSubmit={this.handleSubmit}>
        {this.props.children}
      </form>
    );
  }
}
