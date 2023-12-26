import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const Bye = ({ name }) => {
  return <h2>Bye, {name}!</h2>;
};

Bye.propTypes = {
  name: PropTypes.string
};

export default Bye;
