import { Component } from 'react';
import styles from './User.module.scss';

export default class User extends Component {
  render() {
    return (
      <div className={styles.user}>
        {/* <img
          src={require(`../../assets/avatars/${this.props.user.name.toLowerCase()}-avatar.png`)}
          alt="user avatar"
        /> */}
        <img
          src={this.props.user.avatar}
          alt="user avatar"
        />
        <p className={styles['user-name']}>{this.props.user.name}</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>
    );
  }
}
