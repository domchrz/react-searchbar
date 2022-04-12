import { Component } from 'react';
import styles from './Button.module.scss';

export default class Button extends Component {
  render() {
    return (
      <button
        className={
          this.props.isActive
            ? `${styles.button} ${styles.active}`
            : styles.button
        }
        onClick={this.props.handleClick}>
        {this.props.children}
      </button>
    );
  }
}
