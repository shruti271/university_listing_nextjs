import SliderUnstyled, {
  sliderUnstyledClasses,
} from '@mui/base/SliderUnstyled';
import { styled, alpha, Box } from '@mui/system';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterByStudentBodySize } from '../../../../store/university/universitySlice';

const StyledSlider = styled(SliderUnstyled)(
  ({ theme }) => `
  color: #131045;
  height: 4px;
  width: 100%;
  padding: 13px 0;
  display: inline-block;
  position: relative;
  cursor: pointer;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;
  opacity: 0.9;
  margin-bottom: 2rem;

  &:hover {
    opacity: 1;
  }

  &.${sliderUnstyledClasses.disabled} { 
    pointer-events: none;
    cursor: default;
    color: #bdbdbd; 
  }

  & .${sliderUnstyledClasses.rail} {
    display: block;
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: currentColor;
    opacity: 0.38;
  }

  & .${sliderUnstyledClasses.track} {
    display: block;
    position: absolute;
    height: 8px;
    border-radius: 2px;
    background-color: currentColor;
  }

  & .${sliderUnstyledClasses.thumb} {
    position: absolute;
    width: 24px;
    height: 24px;
    margin-left: -6px;
    margin-top: -8px;
    box-sizing: border-box;
    border-radius: 50%;
    outline: 0;
    border: 2px solid currentColor;
    background-color: currentColor;

    :hover,
    &.${sliderUnstyledClasses.focusVisible} {
      box-shadow: 0 0 0 0.25rem ${alpha(
        theme.palette.mode === 'light' ? '#1976d2' : '#90caf9',
        0.15
      )};
    }

    &.${sliderUnstyledClasses.active} {
      box-shadow: 0 0 0 0.25rem ${alpha(
        theme.palette.mode === 'light' ? '#1976d2' : '#90caf9',
        0.3
      )};
    }
  }

  & .${sliderUnstyledClasses.mark} {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 2px;
    background-color: currentColor;
    top: 50%;
    opacity: 0.7;
    transform: translateX(-50%);
  }

  & .${sliderUnstyledClasses.markActive} {
    background-color: #fff;
  }

  & .${sliderUnstyledClasses.valueLabel} {
    font-size: 12px;
    width: 50px;
    display: block;
    position: relative;
    top: 3em;
    text-align: center;
    transform: translateX(-50%);
    background-color: #F4F4F4;
    color: currentColor;
    padding: 5px;
    border-radius: 10px;
  }
`
);

function valuetext(value) {
  return `${value} people`;
}

export default function RangeSlider() {
  const [value, setValue] = useState([0, 500000]);

  const handleChange = (event, newValue) => {
    setTimeout(() => {
      setValue(newValue);
    }, 200);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterByStudentBodySize(value));
  }, [value]);

  return (
    <Box sx={{ width: '100%' }}>
      {/* controlled: */}
      <StyledSlider
        value={value}
        onChange={handleChange}
        getAriaLabel={() => 'Student Body range'}
        getAriaValueText={valuetext}
        min={0}
        max={500000}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}
