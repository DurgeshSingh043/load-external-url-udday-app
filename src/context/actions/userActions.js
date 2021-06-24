import { saveState } from '../../utility/localStorage';
import { UserActionTypes } from '../reducers/userReducer';

export const loginUser = (data) => {
  saveState({ ...data, password: '', isLogedIn: true });

  return {
    type: UserActionTypes.LOGIN_SUCCESSFULLY,
    payload: data,
  };
};

export const logoutUser = () => {
  saveState(null);
  return {
    type: UserActionTypes.LOGOUT_SUCCESSFULLY,
  };
};
