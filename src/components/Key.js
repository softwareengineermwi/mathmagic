import React from 'react';
import PropTypes from 'prop-types';

const Key = ({ name, handler, classes }) => {
  return (<button onClick={handler} type="button" className={classes}>{name}</button>);
}

Key.propTypes = {
  name: PropTypes.string,
  handler: PropTypes.func,
  classes: PropTypes.string
};

export default Key;
