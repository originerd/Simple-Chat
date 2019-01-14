import PropTypes from 'prop-types';
import React from 'react';

import './SignInError.css';

class SignInError extends React.Component {
  render() {
    const { error } = this.props;

    if (!error) {
      return null;
    }

    return <p className="error">{error}</p>;
  }
}

SignInError.propTypes = {
  error: PropTypes.string,
}

export default SignInError;
