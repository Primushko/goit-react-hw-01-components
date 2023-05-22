import React from 'react';
import PropTypes from 'prop-types';
import { FrendsList } from './FriendList.styled';

import FriendListItem from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <FrendsList>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </FrendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

// import React from 'react';
// import PropTypes from 'prop-types';
// import {
//   FrendsItem,
//   FrendsList,
//   Status,
//   Avatar,
//   FriendName,
// } from './FriendList.styled';

// export const FriendList = ({ friends }) => {
//   return (
//     <FrendsList>
//       {friends.map(({ avatar, name, isOnline, id }) => (
//         <FrendsItem key={id}>
//           <Status style={{ backgroundColor: isOnline ? 'green' : 'red' }}>
//             {isOnline}
//           </Status>
//           <Avatar src={avatar} alt={name} width="48" />
//           <FriendName>{name} </FriendName>
//         </FrendsItem>
//       ))}
//     </FrendsList>
//   );
// };

// FriendList.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.exact({
//       avatar: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       isOnline: PropTypes.bool.isRequired,
//       id: PropTypes.number.isRequired,
//     })
//   ),
// };
