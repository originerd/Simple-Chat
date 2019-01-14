import PropTypes from 'prop-types';
import React from 'react';

import './SignIn.css';
import SignInError from './SignInError';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: undefined,
      username: '',
    };

    this.setError = this.setError.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  get isUsernameEmpty() {
    return /^\s*$/.test(this.state.username);
  }

  setError(error) {
    this.setState({ error });
  }

  setUsername(event) {
    this.setState({
      error: undefined,
      username: event.target.value,
    });
  }

  signIn() {
    if (this.isUsernameEmpty) {
      this.setError('Username is emtpy');
      return;
    }

    fetch('http://localhost:8000/sessions', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ username: this.state.username }),
    }).then((res) => {
      if (res.status === 201) {
        this.props.signIn(this.state.username);
      } else {
        res.text().then((error) => {
          this.setError(error);
        });
      }
    }).catch((error) => {
      this.setError(error.message);
    });
  }

  render() {
    return (
      <div className="sign-in-container">
        <div className="sign-in">
          <input
            className="sign-in__input"
            onChange={this.setUsername}
            placeholder="Username"
          />
          <button className="sign-in__button" onClick={this.signIn}>
            Connect
          </button>
          <SignInError error={this.state.error} />
        </div>
      </div>
    );
  }
}

SignIn.propTypes = {
  signIn: PropTypes.func.isRequired,
}

export default SignIn;
