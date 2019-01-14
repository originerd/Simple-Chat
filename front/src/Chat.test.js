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

  it('renders ChatRoom with selected chat room and to props', () => {
    // Given
    const username = 'Jitae Kim'
    const wrapper = shallow(<Chat username={username} />);

    // When
    const messages = [];
    const to = 'Alan';
    wrapper.setState({ messages, selectedChatRoom: to });

    // Then
    expect(wrapper.find('ChatRoom').prop('messages')).toEqual(messages);
    expect(wrapper.find('ChatRoom').prop('to')).toBe(to);
    expect(wrapper.find('ChatRoom').prop('username')).toBe(username);
  });
});
