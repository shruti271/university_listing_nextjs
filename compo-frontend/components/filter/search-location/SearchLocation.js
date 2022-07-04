import { useState } from 'react';
import CardWrapper from '../shared/card-wrapper/CardWrapper';
import FilterTitle from '../shared/filter-title/FilterTitle';
import { useSearch } from './hooks';

const SearchLocation = ({ className = '' }) => {
  const [searchValue, handleSearchChange] = useSearch('');

  return (
    <CardWrapper>
      <FilterTitle>Location</FilterTitle>
      <div className="px-8 pt-5 pb-8">
        <form>
          <input
            type="search"
            name="searchLocation"
            placeholder="Search"
            value={searchValue}
            onChange={handleSearchChange}
            className="border px-3 py-2 w-full outline-none rounded-md"
          />
        </form>
      </div>
    </CardWrapper>
  );
};

export default SearchLocation;
