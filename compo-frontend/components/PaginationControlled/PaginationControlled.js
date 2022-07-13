import Pagination from '@mui/material/Pagination';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setNewPage } from '../../store/university/universitySlice';

const PaginationControlled = ({ countPages, itemsPerPage }) => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const handleChange = (e, value) => {
    setPage(value);
  };

  useEffect(() => {
    dispatch(setNewPage(page));
  }, [page]);

  return (
    <Pagination
      count={Math.ceil(countPages / itemsPerPage)}
      size="large"
      variant="outlined"
      page={page}
      onChange={handleChange}
      shape="rounded"
    />
  );
};

export default PaginationControlled;
