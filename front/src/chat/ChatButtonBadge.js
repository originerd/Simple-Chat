import PropTypes from 'prop-types';
import React from 'react';

import './ChatButtonBadge.css';

class ChatButtonBadge extends React.Component {
  render() {
    const { unreadMessageCount } = this.props;

    if (!unreadMessageCount) {
      return null;
    }

    return <span className="badge">{unreadMessageCount}</span>;
  }
}

ChatButtonBadge.propTypes = {
  unreadMessageCount: PropTypes.number,
};

export default ChatButtonBadge;
