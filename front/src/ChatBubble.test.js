import { shallow } from 'enzyme';
import React from 'react';

import ChatBubble from './ChatBubble';

describe('ChatBubble', () => {
  describe('when the message is sent by current user', () => {
    it('renders a chat bubble with .right', () => {
      // When
      const message = "TestMessage";
      const wrapper = shallow(<ChatBubble isMine message={message} />);

      // Then
      expect(wrapper.hasClass('left')).toBe(false);
      expect(wrapper.hasClass('right')).toBe(true);
      expect(wrapper.find('p').text()).toBe(message);
    });
  });

  describe('when the message is sent by the other user', () => {
    it('renders a chat bubble with .left', () => {
      // When
      const message = "TestMessage";
      const wrapper = shallow(<ChatBubble message={message} />);

      // Then
      expect(wrapper.hasClass('left')).toBe(true);
      expect(wrapper.hasClass('right')).toBe(false);
      expect(wrapper.find('p').text()).toBe(message);
    });
  });
});
