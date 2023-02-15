import PropTypes from 'prop-types';

export const FriendsList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => {
        return <li key={friend.id}></li>;
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
