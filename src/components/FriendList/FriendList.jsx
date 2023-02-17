import { FriendsListItem } from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import { Friends } from './FriendList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(friend => {
        return (
          <li key={friend.id}>
            <FriendsListItem friend={friend} />
          </li>
        );
      })}
    </Friends>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
