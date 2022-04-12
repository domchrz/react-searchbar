import { Component } from 'react';
import User from '../User/User';
import styles from './UsersList.module.scss';

export default class UsersList extends Component {
  render() {
    return (
      <div className={styles['user-list']}>
        {this.props.users.map((user) => (
          <User user={user} key={user.id} />
        ))}
      </div>
    );
  }
}
