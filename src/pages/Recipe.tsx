import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { ProductType } from "../App";
import Recipes from "../components/Recipes";
import SearchForm from "../components/SearchForm";

type PropsItems = {
  product: ProductType[];
  setInput: React.Dispatch<React.SetStateAction<string>>;
  setFavList: React.Dispatch<React.SetStateAction<ProductType[]>>;
  favList: ProductType[];
};

function Recipe({ product, setInput, setFavList, favList }: PropsItems) {
  return (
    <Box>
      <Typography>Recipes Page</Typography>
      <SearchForm setInput={setInput} />
      <Recipes product={product} setFavList={setFavList} favList={favList} />
    </Box>
  );
}

export default Recipe;
