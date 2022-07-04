import { useState } from 'react';
import { useSearch } from './hooks';

const SearchLocation = ({ className = '' }) => {
  const [searchValue, handleSearchChange] = useSearch('');

  return (
    <div
      className={`bg-colorWhite border border-[#F0F0F0] rounded-md ${className}`}
    >
      <div className="p-8 pb-10 border-b border-[#F0F0F0]">
        <h4 className="font-semibold text-2xl">Location</h4>
      </div>
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
    </div>
  );
};

export default SearchLocation;
