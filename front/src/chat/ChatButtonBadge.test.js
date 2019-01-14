import { shallow } from 'enzyme';
import React from 'react';

import ChatButtonBadge from './ChatButtonBadge';

describe('ChatButtonBadge', () => {
  describe('when there are unread messages', () => {
    it('renders a badge', () => {
      // Given
      const unreadMessageCount = 10;

      // When
      const wrapper = shallow(<ChatButtonBadge unreadMessageCount={unreadMessageCount} />);

      // Then
      expect(wrapper.find('.badge').text()).toBe(String(unreadMessageCount));
    });
  });
});
