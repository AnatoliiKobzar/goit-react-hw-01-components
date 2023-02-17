import PropTypes from 'prop-types';
import { Friend } from './FriendListItem.styled';

export const FriendsListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <Friend>
      <span></span>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </Friend>
  );
};

FriendsListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
