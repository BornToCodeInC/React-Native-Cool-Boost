import {AuthActionTypes, authAction} from '../actions/AuthAction';
import {initialState} from '../contexts/AuthContext';

export const authReducer = (state: any, action: authAction): any => {
  switch (action.type) {
    case AuthActionTypes.SIGN_IN:
      return {
        ...state,
        isSignout: false,
        userToken: action.payload.token,
        error: '',
      };
    case AuthActionTypes.SIGN_OUT:
      return {
        ...initialState,
        isSignout: true,
        userToken: null,
        error: '',
      };
    case AuthActionTypes.RESTORE_TOKEN:
      return {
        ...state,
        userToken: action.payload.token,
        isLoading: false,
      };
    case AuthActionTypes.SET_USER_PROFILE:
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          ...action.payload.userProfile,
        },
        error: '',
      };
    case AuthActionTypes.GET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload.userProfile,
        error: '',
      };
    default:
      return state;
  }
};
