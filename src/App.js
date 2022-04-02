import { Component } from 'react';
import SearchBar from './components/SearchBar';
import UsersList from './components/UsersList';
import USERS_DATA from './data/USERS';
import './App.scss';
import Button from './components/Button';
import { SearchContext } from './context/SearchContext';

class App extends Component {
  static contextType = SearchContext;

  render() {
    return (
      <div className="app">
        <header>
          {this.context.searchModes &&
            Reflect.ownKeys(this.context.searchModes).map((key) => (
              <Button searchMode={this.context.searchModes[key]} key={key}>
                {key}
              </Button>
            ))}
        </header>
        <SearchBar />
        <UsersList />
      </div>
    );
  }
}

export default App;
