import PropTypes from 'prop-types';
import { Info, Item, List, Name, ProfileCard } from './Profile.styled';

export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <ProfileCard>
      <div>
        <img src={avatar} alt={username} />
        <Name>{username}</Name>
        <Info>@{tag}</Info>
        <Info>{location}</Info>
      </div>

      <List>
        <Item>
          <p>Followers</p>
          <span>{followers}</span>
        </Item>
        <Item>
          <p>Views</p>
          <span>{views}</span>
        </Item>
        <Item>
          <p>Likes</p>
          <span>{likes}</span>
        </Item>
      </List>
    </ProfileCard>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }).isRequired,
};
