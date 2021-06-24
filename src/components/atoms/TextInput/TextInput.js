import './textinput.scss';

const TextInput = (props) => {
  return <input className={`text-input ${props?.className}`} type='text' {...props} />;
};

export default TextInput;
