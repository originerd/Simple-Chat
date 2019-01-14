import { shallow } from 'enzyme';
import React from 'react';

import ChatBubbles from './ChatBubbles';

describe('ChatBubbles', () => {
  it('renders chat bubbles with a chat bubble container', () => {
    // Given
    const currentUsername = 'Jitae Kim';
    const theOtherUsername = 'Originerd';
    const messages = [
      { from: currentUsername, message: 'Hey!', type: "text" },
      { from: theOtherUsername, message: 'Yo!', type: "text" },
    ];

    // When
    const wrapper = shallow(
      <ChatBubbles
        messages={messages}
        sendMessage={() => undefined}
        to={theOtherUsername}
        username={currentUsername}
      />,
    );

    // Then
    expect(wrapper.find('ChatBubble').at(0).prop('isMine')).toBe(true);
    expect(wrapper.find('ChatBubble').at(0).prop('message')).toBe(messages[0].message);
    expect(wrapper.find('ChatBubble').at(1).prop('isMine')).not.toBe(true);
    expect(wrapper.find('ChatBubble').at(1).prop('message')).toBe(messages[1].message);
  });
});
