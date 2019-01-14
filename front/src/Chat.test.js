import { shallow } from 'enzyme';
import React from 'react';

import Chat from './Chat';

describe('Chat', () => {
  it('renders ChatButtons with usernames props except current username', () => {
    // Given
    const username = 'Jitae Kim';
    const wrapper = shallow(<Chat username={username} />);

    // When
    const otherUsernames = ['Alan', 'Kevin', 'Jay'];
    wrapper.setState({ usernames: [username, ...otherUsernames] });

    // Then
    expect(wrapper.find('ChatButtons').prop('usernames')).toEqual(otherUsernames);
  });

  it('renders ChatRoom', () => {
    // When
    const wrapper = shallow(<Chat username="Jitae Kim" />);

    // Then
    expect(wrapper.find('ChatRoom').length).toBe(1);
  });
});
