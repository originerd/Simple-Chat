import { shallow } from 'enzyme';
import React from 'react';

import Chat from './Chat';

describe('Chat', () => {
  describe('rendering ChatButtons', () => {
    it('gives uernames props without current user', () => {
      // Given
      const username = 'Jitae Kim';
      const wrapper = shallow(<Chat username={username} />);

      // When
      const otherUsernames = ['Alan', 'Kevin', 'Jay'];
      wrapper.setState({ usernames: [username, ...otherUsernames] });

      // Then
      expect(wrapper.find('ChatButtons').prop('usernames')).toEqual(otherUsernames);
    });
  });
});
