import PropTypes from 'prop-types';
//ICONS
import { TfiMarkerAlt } from 'react-icons/tfi';
//STYLES
import { Box, Label, Input } from './Filter.styled';

export const Filter = ({ filter, onFilterChange }) => {
  return (
    <Box>
      <Label>
        Хочу знайти...
        <Input
          type="text"
          name="filter"
          placeholder="   ім'я"
          required
          value={filter}
          onChange={onFilterChange}
        />
      </Label>
      <TfiMarkerAlt size="20px" color="black" />
    </Box>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
