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
});
