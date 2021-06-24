import { createContext, useContext, useReducer } from 'react';
import { loadState } from '../utility/localStorage';
import { initialValues, userReducer } from './reducers/userReducer';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const state = useReducer(userReducer, loadState() || initialValues);
  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
};

export const useUserState = () => useContext(UserContext);
