import CardInteractive from "../shared/card-interactive/CardInteractive";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterMainSearch } from "../../../store/university/universitySlice";

const MainSearch = () => {
  

  return (
    <CardInteractive
      cardTitle="Search Courses"
      bottomComponent={
        <TextField
          id="outlined-search"
          label="Search"
          type="search"
          className="w-full"
        />
      }
    />
  );
};

export default MainSearch;
