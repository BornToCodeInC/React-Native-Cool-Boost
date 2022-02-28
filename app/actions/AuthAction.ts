import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export enum AuthActionTypes {
  RESTORE_TOKEN = 'RESTORE_TOKEN',
  SIGN_IN = 'SIGN_IN',
  SIGN_OUT = 'SIGN_OUT',
  SET_USER_PROFILE = 'SET_USER_PROFILE',
  GET_USER_PROFILE = 'GET_USER_PROFILE',
}

export type authAction =
  | {
      type: AuthActionTypes.RESTORE_TOKEN;
      payload: {token: string};
    }
  | {
      type: AuthActionTypes.SIGN_IN;
      payload: {
        token: string;
      };
    }
  | {
      type: AuthActionTypes.SIGN_OUT;
    }
  | {
      type: AuthActionTypes.SET_USER_PROFILE;
      payload: {
        userProfile: any;
      };
    };

export const getUser = async (storageKey: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (err) {
    console.log(err);
  }
};

const setUser = async (storageKey: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(storageKey, jsonValue);
  } catch (err) {
    console.log(err);
  }
};

export const signUp = async (
  dispatch: React.Dispatch<authAction>,
  {username, email, password},
) => {
  await setUser(email, {username, password});
  dispatch({
    type: AuthActionTypes.SIGN_IN,
    payload: {
      token: email,
    },
  });
  await setUserProfile(dispatch, email);
};

export const signOut = (dispatch: React.Dispatch<authAction>) =>
  dispatch({type: AuthActionTypes.SIGN_OUT});
export const signIn = async (
  dispatch: React.Dispatch<authAction>,
  {email, password},
) => {
  const user = await getUser(email);
  const areCredentialsValid = user && user.password === password;
  areCredentialsValid &&
    dispatch({
      type: AuthActionTypes.SIGN_IN,
      payload: {
        token: email,
      },
    });
  await setUserProfile(dispatch, email);
};

export const setUserProfile = async (
  dispatch: React.Dispatch<authAction>,
  email: string,
  profile?,
) => {
  const userProfile = await getUser(email);
  profile && (await setUser(email, {...userProfile, ...profile}));
  dispatch({
    type: AuthActionTypes.SET_USER_PROFILE,
    payload: {
      userProfile: profile || userProfile,
    },
  });
};
