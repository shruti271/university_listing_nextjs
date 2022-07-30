import { Box } from '@mui/system';
import Slider from '@mui/material/Slider';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { debounce } from 'lodash';
import {
  filterByStudentBodySize,
  resetFilter,
  resetPage,
} from '../../../../store/university/universitySlice';
import {
  FILTER_MAX_BODY_SIZE,
  FILTER_MIN_BODY_SIZE,
} from '../../../../data/constants';

function valuetext(value) {
  return value === FILTER_MAX_BODY_SIZE ? `${value}+` : `${value}`;
}

export default function RangeSlider() {
  const [value, setValue] = useState([
    FILTER_MIN_BODY_SIZE,
    FILTER_MAX_BODY_SIZE,
  ]);

  const handleChange = debounce((event, newValue) => {
    setValue(newValue);
    dispatch(resetPage());
  }, 20);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterByStudentBodySize(value));
  }, [value]);

  return (
    <Box sx={{ width: '100%' }}>
      <Slider
        valueLabelDisplay="on"
        value={value}
        onChange={handleChange}
        min={FILTER_MIN_BODY_SIZE}
        max={FILTER_MAX_BODY_SIZE}
        step={5000}
        getAriaValueText={valuetext}
        valueLabelFormat={valuetext}
        className="!text-[#131045]"
        disableSwap
        componentsProps={{
          valueLabel: {
            className:
              '!bg-[#F4F4F4] !top-14 !text-colorBlack before:!-top-2 before:!bottom-auto',
          },
        }}
      />
    </Box>
  );
}
