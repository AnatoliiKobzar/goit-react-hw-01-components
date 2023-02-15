import PropTypes from 'prop-types';

export const FriendsListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <div>
      <span></span>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </div>
  );
};

FriendsListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
