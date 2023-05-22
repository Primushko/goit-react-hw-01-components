import React from 'react';
import PropTypes from 'prop-types';
import { FrendsItem, Status, Avatar, FriendName } from './FriendList.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FrendsItem>
      <Status style={{ backgroundColor: isOnline ? 'green' : 'red' }}>
        {isOnline}
      </Status>
      <Avatar src={avatar} alt={name} width="48" />
      <FriendName>{name} </FriendName>
    </FrendsItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
