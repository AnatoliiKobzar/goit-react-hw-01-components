import { FriendsListItem } from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

export const FriendsList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => {
        return (
          <li key={friend.id}>
            <FriendsListItem friend={friend} />
          </li>
        );
      })}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
