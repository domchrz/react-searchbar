import { PureComponent } from 'react';
import UsersList from './components/UsersList/UsersList';
import Button from './components/Button/Button';
import SEARCH_MODES from './constants/searchModes';
import USERS_DATA from './constants/users';
import { withSearchState } from './components/WithSearchState/WithSearchState';
import OnSubmit from './components/SearchOnMode/OnSubmit';
import Immediate from './components/SearchOnMode/Immediate';
import Debounced from './components/SearchOnMode/Debounced';
import './App.scss';

const SearchImmediate = withSearchState(Immediate);
const SearchDebounced = withSearchState(Debounced);
const SearchOnSubmit = withSearchState(OnSubmit);

class App extends PureComponent {
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

  render() {
    return (
      <div className="app">
        <header>
          {Object.keys(SEARCH_MODES).map((key) => (
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
        {this.state.activeSearchMode === SEARCH_MODES.onSubmit && (
          <SearchOnSubmit handleSearch={this.setUsers} />
        )}
        {this.state.activeSearchMode === SEARCH_MODES.immediate && (
          <SearchImmediate handleSearch={this.setUsers} />
        )}
        {this.state.activeSearchMode === SEARCH_MODES.afterTyping && (
          <SearchDebounced handleSearch={this.setUsers} />
        )}
        {!!this.state.users.length && <UsersList users={this.state.users} />}
      </div>
    );
  }
}

export default App;
