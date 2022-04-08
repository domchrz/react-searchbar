import { Component } from 'react';
// import SearchBarControlled from './components/SearchBar/SearchBarControlled';
// import SearchBarUncontrolled from './components/SearchBar/SearchBarUncontrolled';
import UsersList from './components/UsersList/UsersList';
import Button from './components/Button/Button';
import SEARCH_MODES from './constants/searchModes';
import USERS_DATA from './constants/users';
import './App.scss';
import debounce from './helpers/debounce';
import searchBar from './components/SearchBar/SearchBar';

class App extends Component {
  debounce = debounce();
  state = {
    users: USERS_DATA,
    activeSearchMode: SEARCH_MODES.immediate,
  };

  setUsers = (query) => {
    this.setState({
      users: USERS_DATA.filter((user) =>
        user.name.toLowerCase().includes(query.toLowerCase())
      ),
    });
  };

  setUsersDebounced = (query) => this.debounce(500, this.setUsers, query);

  render() {
    return (
      <div className="app">
        <header>
          {Reflect.ownKeys(SEARCH_MODES).map((key) => (
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
        {searchBar(this.state.activeSearchMode, this.setUsers)}
        {/* <SearchBarControlled
          searchOnSubmit={this.state.activeSearchMode === SEARCH_MODES.onSubmit}
          searchQuery={
            this.state.activeSearchMode === SEARCH_MODES.afterTyping
              ? this.setUsersDebounced
              : this.setUsers
          }
        />
        <SearchBarUncontrolled
          searchOnSubmit={this.state.activeSearchMode === SEARCH_MODES.onSubmit}
          searchQuery={
            this.state.activeSearchMode === SEARCH_MODES.afterTyping
              ? this.setUsersDebounced
              : this.setUsers
          }
        /> */}
        {!!this.state.users.length && <UsersList users={this.state.users} />}
      </div>
    );
  }
}

export default App;
