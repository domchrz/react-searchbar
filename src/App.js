import { Component, createRef } from 'react';
import SearchBarControlled from './components/SearchBar/SearchBarControlled';
import SearchBarUncontrolled from './components/SearchBar/SearchBarUncontrolled';
import UsersList from './components/UsersList/UsersList';
import Button from './components/Button/Button';
import SEARCH_MODES from './constants/searchModes';
import USERS_DATA from './constants/users';
import './App.scss';

class App extends Component {
  timeoutID = createRef(null);
  state = {
    users: USERS_DATA,
    activeSearchMode: SEARCH_MODES.immediate,
  };

  setUsers = (string) => {
    this.setState({
      users: USERS_DATA.filter((user) =>
        user.name.toLowerCase().includes(string.toLowerCase())
      ),
    });
  };

  setUsersDebounced = (string) => {
    clearTimeout(this.timeoutID.current);
    this.timeoutID.current = setTimeout(() => {
      this.setUsers(string);
    }, 500);
  };

  render() {
    return (
      <div className="app">
        <header>
          {SEARCH_MODES &&
            Reflect.ownKeys(SEARCH_MODES).map((key) => (
              <Button
                handleClick={() =>
                  this.setState({ activeSearchMode: SEARCH_MODES[key] })
                }
                isActive={this.state.activeSearchMode === SEARCH_MODES[key]}
                key={key}>
                {key}
              </Button>
            ))}
        </header>
        <SearchBarControlled
          onSubmit={this.state.activeSearchMode === SEARCH_MODES.onSubmit}
          searchQuery={
            this.state.activeSearchMode === SEARCH_MODES.afterTyping
              ? this.setUsersDebounced
              : this.setUsers
          }
        />
        <SearchBarUncontrolled
          onSubmit={this.state.activeSearchMode === SEARCH_MODES.onSubmit}
          searchQuery={
            this.state.activeSearchMode === SEARCH_MODES.afterTyping
              ? this.setUsersDebounced
              : this.setUsers
          }
        />
        {!!this.state.users.length && <UsersList users={this.state.users} />}
      </div>
    );
  }
}

export default App;
