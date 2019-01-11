import { shallow } from 'enzyme';
import React from 'react';

import SignIn from './SignIn';

describe('SignIn', () => {
  it('renders an input', () => {
    // When
    const wrapper = shallow(<SignIn />);

    // Then
    expect(wrapper.find('input').length).toBe(1);
  });

  it('renders a button', () => {
    // When
    const wrapper = shallow(<SignIn />);

    // Then
    expect(wrapper.find('button').text()).toBe('Connect');
  });

  it('sets state when input is changed', () => {
    // Given
    const wrapper = shallow(<SignIn />);
    const username = 'Jitae Kim';

    // When
    wrapper.find('input').simulate('change', { target: { value: username } });

    // Then
    expect(wrapper.state('username')).toBe(username);
  });
});
