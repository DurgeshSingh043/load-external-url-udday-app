import './button.scss';

const Button = ({ text, className = '', type = 'filled', ...other }) => {
  return (
    <button className={`button ${type} ${className}`} {...other}>
      {text || other.children}
    </button>
  );
};

export default Button;
