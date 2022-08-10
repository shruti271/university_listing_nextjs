import React from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ProgramUniversitiesFilter from "./program-uni-filter";

const MobileFilterMajorUni = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const toggleFilterMenu = () => {
    setFilterOpen(!filterOpen);
  };

  return (
    <>
      <button
        onClick={toggleFilterMenu}
        className="flex items-center gap-2 border p-3 rounded-md lg:hidden bg-colorWhite text-colorBlack"
      >
        <FilterAltIcon />
        <span className="font-semibold">Filter Options</span>
      </button>
      <div
        className={`lg:hidden p-4 py-10 w-10/12 fixed z-50 left-0 top-0 h-screen transition-transform duration-300 bg-colorWhite border-l ${
          !filterOpen ? "-translate-x-full" : ""
        }`}
      >
        <div className="mb-10 flex justify-end">
          <button onClick={toggleFilterMenu}>
            <CloseIcon className="text-black" />
          </button>
        </div>
        <div className="max-h-[90%] pb-10 overflow-y-auto">
          <div className="max-w-md mx-auto">
            <ProgramUniversitiesFilter />
          </div>
        </div>
      </div>
      {filterOpen && (
        <div
          onClick={toggleFilterMenu}
          className="fixed w-screen h-screen left-0 top-0 z-40 bg-colorPrimary opacity-20 lg:hidden"
        ></div>
      )}
    </>
  );
};

export default MobileFilterMajorUni;
