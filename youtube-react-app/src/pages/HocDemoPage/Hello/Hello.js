import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const Hello = ({ name }) => {
  return <h2>Hello, {name}!</h2>;
};

Hello.propTypes = {
  name: PropTypes.string
};

export default Hello;
