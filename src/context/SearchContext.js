import { createContext, useReducer } from 'react';

export const SearchContext = createContext();

const searchReducder = (state, action) => {
  switch (action.type) {
    case 'SET_SEARCH_STRING':
      return { ...state, searchString: action.payload };
    case 'SET_SEARCH_MODE':
      return { ...state, activeSearchMode: action.payload };
  }
};

export function SearchProvider({ children }) {
  const [state, dispatch] = useReducer(searchReducder, {
    searchString: '',
    activeSearchMode: 0,
    searchModes: {
      immediate: 0,
      onSubmit: 1,
      afterTyping: 2,
    },
  });

  const setSearchString = (string) => {
    dispatch({ type: 'SET_SEARCH_STRING', payload: string });
  };

  const setSearchMode = (mode) => {
    dispatch({ type: 'SET_SEARCH_MODE', payload: mode });
  };

  return (
    <SearchContext.Provider
      value={{
        ...state,
        setSearchString,
        setSearchMode,
      }}>
      {children}
    </SearchContext.Provider>
  );
}
