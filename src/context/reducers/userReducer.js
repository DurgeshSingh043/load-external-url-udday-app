import { loadState } from '../../utility/localStorage';

export const initialValues = {
  isLogedIn: false,
  userName: '',
  password: '',
};

export const UserActionTypes = {
  LOGIN_SUCCESSFULLY: 'LOGIN_SUCCESSFULLY',
  LOGOUT_SUCCESSFULLY: 'LOGOUT_SUCCESSFULLY',
};

export const userReducer = (state = loadState() || initialValues, action) => {
  switch (action.type) {
    case UserActionTypes.LOGIN_SUCCESSFULLY:
      return { ...state, ...action.payload, isLogedIn: true };
    case UserActionTypes.LOGOUT_SUCCESSFULLY:
      return { ...state, ...initialValues };
    default:
      return state;
  }
};
