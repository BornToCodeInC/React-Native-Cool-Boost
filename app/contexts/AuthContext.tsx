import React, {createContext, useMemo, useReducer} from 'react';
import {authReducer} from '../reducers/AuthReducer';
import {authAction} from '../actions/AuthAction';

type Context = {
  state: any;
  dispatch: React.Dispatch<authAction>;
};

export const initialState = {
  error: '',
  isLoading: true,
  isSignout: false,
  userToken: null,
  userProfile: {
    username: '',
    fullName: '',
    password: '',
    phone: '',
    city: '',
    street: '',
    building: '',
    avatar: '',
  },
};

export const AuthContext = createContext<Context>({
  state: initialState,
  dispatch: () => null,
});

export const AuthProvider: React.FC = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const value = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state],
  );

  return (
    <AuthContext.Provider value={{...value}}>{children}</AuthContext.Provider>
  );
};
