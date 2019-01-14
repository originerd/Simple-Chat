import { shallow } from 'enzyme';
import React from 'react';

import SignInError from './SignInError';

describe('SignInError', () => {
  describe('when error does not exist', () => {
    it('does not render an error message', () => {
      // When
      const wrapper = shallow(<SignInError error={undefined} />);

      // Then
      expect(wrapper.text()).toBe('');
    });
  });

  describe('when error exists', () => {
    it('renders an error message', () => {
      // Given
      const errorMessage = "TestError";

      // When
      const wrapper = shallow(<SignInError error={errorMessage} />);

      // Then
      expect(wrapper.text()).toBe(errorMessage);
    });
  });
});
