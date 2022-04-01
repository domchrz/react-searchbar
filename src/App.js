import { Component } from 'react';
import SearchBar from './components/SearchBar';
import UsersList from './components/UsersList';
import USERS_DATA from './data/USERS';
import './App.scss';
import Button from './components/Button';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: USERS_DATA,
      searchModes: {
        immediate: 0,
        onSubmit: 1,
        afterTypingEnds: 2,
      },
      searchMode: 0,
    };
  }

  setUsers(string) {
    this.setState({
      users: USERS_DATA.filter((user) =>
        user.name.toLowerCase().includes(string.toLowerCase())
      ),
    });
  }

  setSearchMode(searchMode) {
    if (searchMode !== 0 && searchMode !== 1 && searchMode !== 2) return;
    this.setState({ searchMode });
  }

  setImmediate() {
    this.setSearchMode(this.state.searchModes.immediate);
  }

  setOnSubmit() {
    this.setSearchMode(this.state.searchModes.onSubmit);
  }

  setAfterTypingEnds() {
    this.setSearchMode(this.state.searchModes.afterTypingEnds);
  }

  render() {
    return (
      <div className="app">
        <header>
          <Button
            isActive={
              this.state.searchMode === this.state.searchModes.immediate
            }
            handleClick={this.setImmediate.bind(this)}>
            immediate
          </Button>
          <Button
            isActive={this.state.searchMode === this.state.searchModes.onSubmit}
            handleClick={this.setOnSubmit.bind(this)}>
            onSubmit
          </Button>
          <Button
            isActive={
              this.state.searchMode === this.state.searchModes.afterTypingEnds
            }
            handleClick={this.setAfterTypingEnds.bind(this)}>
            afterTyping
          </Button>
        </header>
        <SearchBar
          setUsers={this.setUsers.bind(this)}
          searchMode={this.state.searchMode}
          searchModes={this.state.searchModes}
        />
        {this.state.users.length !== 0 && (
          <UsersList users={this.state.users} />
        )}
      </div>
    );
  }
}

export default App;
