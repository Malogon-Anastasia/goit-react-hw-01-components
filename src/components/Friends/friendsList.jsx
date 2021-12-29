import React from "react";
import propTypes from 'prop-types';
import { FriendsList, ItemList, ListOnline, ListOffline, Avatar } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <FriendsList>
      {friends.map(friend => (
        <ItemList key={friend.id}>
          {friend.isOnline ? <ListOnline></ListOnline> : <ListOffline></ListOffline>}
          <Avatar src={friend.avatar} alt="User avatar" width="48" />
          <p className="name">{friend.name}</p>
        </ItemList>
      ))}
    </FriendsList>
  );
}

FriendList.propTypes = {
  friends: propTypes.array,
};