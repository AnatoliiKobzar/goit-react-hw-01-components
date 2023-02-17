import { Name } from 'components/Profile/Profile.styled';
import PropTypes from 'prop-types';
import { Item, List, Section } from './Statistics.styled';
import { getRandomHexColor } from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <Section>
      <Name>{title}</Name>

      <List>
        {stats.map(item => {
          return (
            <Item
              key={item.id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span>{item.label}</span>
              <span>{item.percentage}%</span>
            </Item>
          );
        })}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
