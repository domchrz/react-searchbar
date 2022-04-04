import { Component } from 'react';
import SearchBar from './components/SearchBarControlled';
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
        afterTyping: 2,
      },
      activeSearchMode: 0,
    };
  }

  setUsers(string) {
    this.setState({
      users: USERS_DATA.filter((user) =>
        user.name.toLowerCase().includes(string.toLowerCase())
      ),
    });
  }

  setActiveSearchMode(activeSearchMode) {
    if (
      activeSearchMode !== 0 &&
      activeSearchMode !== 1 &&
      activeSearchMode !== 2
    )
      return;
    this.setState({ activeSearchMode });
  }

  setImmediate() {
    this.setActiveSearchMode(this.state.searchModes.immediate);
  }

  setOnSubmit() {
    this.setActiveSearchMode(this.state.searchModes.onSubmit);
  }

  setAfterTyping() {
    this.setActiveSearchMode(this.state.searchModes.afterTyping);
  }

  render() {
    return (
      <div className="app">
        <header>
          <Button
            isActive={
              this.state.activeSearchMode === this.state.searchModes.immediate
            }
            handleClick={this.setImmediate.bind(this)}>
            immediate
          </Button>
          <Button
            isActive={
              this.state.activeSearchMode === this.state.searchModes.onSubmit
            }
            handleClick={this.setOnSubmit.bind(this)}>
            onSubmit
          </Button>
          <Button
            isActive={
              this.state.activeSearchMode === this.state.searchModes.afterTyping
            }
            handleClick={this.setAfterTyping.bind(this)}>
            afterTyping
          </Button>
        </header>
        <SearchBar
          setUsers={this.setUsers.bind(this)}
          activeSearchMode={this.state.activeSearchMode}
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
