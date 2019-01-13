import { shallow } from 'enzyme';
import React from 'react';

import SignIn from './SignIn';

describe('SignIn', () => {
  it('renders an input', () => {
    // When
    const wrapper = shallow(<SignIn signIn={() => undefined} />);

    // Then
    expect(wrapper.find('input').length).toBe(1);
  });

  it('renders a button', () => {
    // When
    const wrapper = shallow(<SignIn signIn={() => undefined} />);

    // Then
    expect(wrapper.find('button').text()).toBe('Connect');
  });

  it('sets username when input is changed', () => {
    // Given
    const wrapper = shallow(<SignIn signIn={() => undefined} />);
    const username = 'Jitae Kim';

    // When
    wrapper.find('input').simulate('change', { target: { value: username } });

    // Then
    expect(wrapper.state('username')).toBe(username);
  });

  describe('clicking the connect button', () => {
    let fetchSpy;

    beforeEach(() => {
      fetchSpy = jest.spyOn(global, 'fetch');
    });

    afterAll(() => {
      global.fetch.mockClear();
    });

    describe('when username is empty', () => {
      it('shows a message about empty string', () => {
        // Given
        const signInMockFn = jest.fn();
        const wrapper = shallow(<SignIn signIn={signInMockFn} />);
        const username = '';

        // When
        wrapper.find('input').simulate('change', { target: { value: username } });
        wrapper.find('button').simulate('click');

        // Then
        expect(global.fetch).not.toBeCalled();
        expect(wrapper.find('.error').text()).toContain('emtpy');
      });
    });

    describe('when username is valid', () => {
      beforeAll(() => {
        fetchSpy.mockImplementation(() => Promise.resolve());
      });

      it('calls signIn function of props', async () => {
        // Given
        const signInMockFn = jest.fn();
        const wrapper = shallow(<SignIn signIn={signInMockFn} />);
        const username = 'Jitae Kim';

        // When
        wrapper.find('input').simulate('change', { target: { value: username } });
        wrapper.find('button').simulate('click');
        await wrapper.instance();

        // Then
        expect(signInMockFn).toBeCalledWith(username);
      });
    });

    describe('when username is invalid', () => {
      const errorMessage = 'TestError';

      beforeAll(() => {
        fetchSpy.mockImplementation(() => Promise.reject(new Error(errorMessage)));
      });

      it('calls signIn function of props', async () => {
        // Given
        const signInMockFn = jest.fn();
        const wrapper = shallow(<SignIn signIn={signInMockFn} />);
        const username = 'Jitae Kim';

        // When
        wrapper.find('input').simulate('change', { target: { value: username } });
        wrapper.find('button').simulate('click');
        await wrapper.update();
        await wrapper.update();

        // Then
        expect(signInMockFn).not.toBeCalled();
        expect(wrapper.find('.error').text()).toBe(errorMessage);
      });
    });
  });
});
