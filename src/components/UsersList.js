import { Component } from 'react';
import { SearchContext } from '../context/SearchContext';
import USERS_DATA from '../data/USERS';
import User from './User';
import styles from './UsersList.module.scss';

export default class UsersList extends Component {
  static contextType = SearchContext;

  constructor() {
    super();
    this.state = {
      filteredUsers: USERS_DATA,
      searchString: '',
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchString === this.context.searchString) return;
    this.setState({
      filteredUsers: USERS_DATA.filter((user) =>
        user.name
          .toLowerCase()
          .includes(this.context.searchString.toLowerCase())
      ),
      searchString: this.context.searchString,
    });
  }

  render() {
    if (this.state.filteredUsers === 0) return;

    return (
      <div className={styles['user-list']}>
        {this.state.filteredUsers.map((user) => (
          <User user={user} key={user.id} />
        ))}
      </div>
    );
  }
}
