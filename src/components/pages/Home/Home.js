import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { loadHtmlData } from '../../../apis/dataApis';
import { useToast } from '../../../configs/toast';
import { logoutUser } from '../../../context/actions/userActions';
import { useUserState } from '../../../context/provider';
import { debounce, getUserNameFromEmail, isValidUrl } from '../../../utility/helper';
import { Button, Label, TextInput } from '../../atoms';

import './home.scss';

const Home = () => {
  const history = useHistory();
  const { addErrorToast } = useToast();
  const [{ userName } = {}, dispatch] = useUserState();
  const [responseText1, setResponseText1] = useState(null);
  const [responseText2, setResponseText2] = useState(null);

  useEffect(() => {
    if (!userName) onLogoutClickHander();
  }, [userName]);

  const onLogoutClickHander = () => {
    dispatch(logoutUser());
    history.push('/login');
  };

  const onTextChangeHandler = (event) => {
    const { name, value } = event.target;
    loadData(value, name);
  };

  const loadData = debounce((url, name) => {
    if (isValidUrl(url)) {
      loadHtmlData(url)
        .then((response) => {
          setResponseState(name, response);
        })
        .catch((err) => {
          console.error(err);
          addErrorToast('Please enter validate url.');
          setResponseState(name);
        });
    } else {
      addErrorToast('Please enter validate url.');
      setResponseState(name);
    }
  });

  const setResponseState = (name, response = null) =>
    name === 'text1' ? setResponseText1(response) : setResponseText2(response);

  return (
    <div className='landing-page-component'>
      <div className='landing-page-component__header'>
        <div className='landing-page-component__header--display-name'>
          <Label>Hi {getUserNameFromEmail(userName)}</Label>
        </div>
        <div className='landing-page-component__header--field1'>
          <TextInput
            {...{
              name: 'text1',
              placeholder: 'Please enter url 1',
              onChange: onTextChangeHandler,
            }}
          />
        </div>
        <div className='landing-page-component__header--field2'>
          <TextInput
            {...{
              name: 'text2',
              placeholder: 'Please enter url 2',
              onChange: onTextChangeHandler,
            }}
          />
        </div>
        <div className='landing-page-component__header--CTA'>
          <Button type='outline' onClick={onLogoutClickHander}>
            Logout
          </Button>
        </div>
      </div>
      <div className='landing-page-component__content'>
        <div className='landing-page-component__content__view1'>
          {responseText1 ? (
            <div dangerouslySetInnerHTML={{ __html: responseText1 }}></div>
          ) : (
            <Label>View 1</Label>
          )}
        </div>
        <div className='landing-page-component__content__view2'>
          {responseText2 ? (
            <div dangerouslySetInnerHTML={{ __html: responseText2 }}></div>
          ) : (
            <Label>View 2</Label>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
