import CardInteractive from '../shared/card-interactive/CardInteractive';
import Slider from '@mui/material/Slider';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { debounce } from 'lodash';
import {
  FILTER_RANK_ORDER_MAX,
  FILTER_RANK_ORDER_MIN,
} from '../../../data/constants';
import {
  filterByRankOrder,
  resetPage,
} from '../../../store/university/universitySlice';

const RankOrder = () => {
  const [value, setValue] = useState([
    FILTER_RANK_ORDER_MIN,
    FILTER_RANK_ORDER_MAX,
  ]);

  const dispatch = useDispatch();

  const handleChange = debounce((event, newValue) => {
    setValue(newValue);
    dispatch(resetPage());
  }, 15);

  useEffect(() => {
    dispatch(filterByRankOrder(value));
  }, [value]);

  return (
    <CardInteractive
      cardTitle="Rank"
      bottomComponent={
        <Slider
          min={FILTER_RANK_ORDER_MIN}
          max={FILTER_RANK_ORDER_MAX}
          value={value}
          valueLabelDisplay="on"
          onChange={handleChange}
          className="!text-colorPrimary"
          step={10}
          disableSwap
          componentsProps={{
            valueLabel: {
              className:
                '!bg-[#F4F4F4] !top-14 !text-colorBlack before:!-top-2 before:!bottom-auto',
            },
          }}
        />
      }
    />
  );
};

export default RankOrder;
