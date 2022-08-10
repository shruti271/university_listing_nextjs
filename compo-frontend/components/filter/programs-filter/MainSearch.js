import CardInteractive from "../../shared/card-interactive/CardInteractive";
import TextField from "@mui/material/TextField";

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
