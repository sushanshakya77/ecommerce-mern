import { Button, TextField } from "@mui/material";

function Search() {
  return (
    <div>
      <TextField
        id="outlined-basic"
        placeholder="Search"
        variant="outlined"
        sx={{ width: "520px" }}
      >
        <Button>Search</Button>
      </TextField>
      {/* <div style={{ flexGrow: '1' }} /> */}
    </div>
  );
}

export default Search;
