import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useToast } from '../../../configs/toast';
import { loginUser } from '../../../context/actions/userActions';
import { useUserState } from '../../../context/provider';
import { Button, Label, TextInput } from '../../atoms';
import './login.scss';

const Login = () => {
  const history = useHistory();
  const { addErrorToast } = useToast();
  const [state, setState] = useState({});
  const [, dispatch] = useUserState();

  const onInputChangeHandler = (event) => {
    const { name, value } = event?.target || {};
    if (value) setState({ ...state, [name]: value });
  };

  const onLoginClickHander = () => {
    const { userName, password } = state;
    if (!userName || !password) {
      addErrorToast('Please enter your email and password currectly.');
    } else if (password.length < 4) {
      addErrorToast('Please enter at least 4 character password.');
    } else {
      dispatch(loginUser(state));
      history.push('/');
    }
  };

  return (
    <div className='login-component'>
      <div className='login-component__container'>
        <div className='login-component__container__field1'>
          <Label>User Name(Email)</Label>
          <TextInput
            {...{
              name: 'userName',
              onChange: onInputChangeHandler,
              required: true,
              placeholder: 'Please enter your email',
            }}
          />
        </div>
        <div className='login-component__container__field2'>
          <Label>Password</Label>
          <TextInput
            {...{
              type: 'password',
              name: 'password',
              onChange: onInputChangeHandler,
              required: true,
              placeholder: 'Please enter password',
            }}
          />
        </div>
        <div className='login-component__container__CTA'>
          <Button type='filled' onClick={onLoginClickHander}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
