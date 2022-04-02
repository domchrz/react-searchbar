import { Component } from 'react';
import { SearchContext } from '../context/SearchContext';
import styles from './Button.module.scss';

export default class Button extends Component {
  static contextType = SearchContext

  handleClick() {
    this.context.setSearchMode(this.props.searchMode)
  }

  render() {
    return (
      <button
        className={
          this.props.searchMode === this.context.activeSearchMode
            ? `${styles.button} ${styles.active}`
            : styles.button
        }
        onClick={this.handleClick.bind(this)}>
        {this.props.children}
      </button>
    );
  }
}
