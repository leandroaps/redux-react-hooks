import React, { useReducer } from 'react';

export const Store = React.createContext();
const initialState = {
  counter: 5
};

const reducer = (state = initialState, action) => {
  switch (action.types) {
  case 'ADD':
    return { ...state, counter: state.counter + 1 };
  case 'SUB':
    return { ...state, counter: state.counter - 1 };
  default:
    return state;
  }
};

export const StoreProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const children = props;
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
