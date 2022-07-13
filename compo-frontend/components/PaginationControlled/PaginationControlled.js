import Pagination from '@mui/material/Pagination';
import { useState } from 'react';

const PaginationControlled = ({ countPages, itemsPerPage }) => {
  const [page, setPage] = useState(1);
  const handleChange = (e, value) => {
    setPage(value);
  };

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
