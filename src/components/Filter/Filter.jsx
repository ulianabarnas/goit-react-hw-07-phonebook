import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filter/slice';
import { selectFilter } from 'redux/selectors';

import { FilterInput, FilterLabel } from './Filter.styles';

export default function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.target;
    dispatch(changeFilter(value));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput type="text" value={filter} onChange={handleChange} />
    </FilterLabel>
  );
}
