import { shallow } from 'enzyme';
import React from 'react';

import ChatRoom from './ChatRoom';

describe('ChatRoom', () => {
  describe('when selected chat room exists', () => {
    it('renders an input', () => {
      // When
      const wrapper = shallow(
        <ChatRoom
          messages={[]}
          to="Originerd"
          username="Jitae Kim"
        />,
      );

      // Then
      expect(wrapper.find('input').length).toBe(1);
    });

    it('renders a chat bubble container', () => {
      // When
      const wrapper = shallow(
        <ChatRoom
          messages={[]}
          to="Originerd"
          username="Jitae Kim"
        />,
      );

      // Then
      expect(wrapper.find('.chat-bubble-container').length).toBe(1);
    });
  });

  describe('when selected chat room exists', () => {
    it('renders empty message', () => {
      // When
      const wrapper = shallow(<ChatRoom username="Jitae Kim" />);

      // Then
      expect(wrapper.text()).toContain('select a user to chat');
    });
  });
});
