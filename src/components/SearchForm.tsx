import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

type Prop = {
  setInput: React.Dispatch<React.SetStateAction<string>>;
};

function SearchForm({ setInput }: Prop) {
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <TextField
        id="filled-basic"
        label="search"
        variant="filled"
        onChange={onChangeHandler}
        helperText="something here"
      />
    </Box>
  );
}

export default SearchForm;
