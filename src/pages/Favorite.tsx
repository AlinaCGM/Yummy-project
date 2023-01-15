import React from "react";

import { Box, Typography } from "@mui/material";

import { ProductType } from "../App";

import { Container } from "@mui/material";
import FavItem from "../components/FavItem";

type FavCartType = {
  favList: ProductType[];
  setFavList: React.Dispatch<React.SetStateAction<ProductType[]>>;
  removeProduct: (el: ProductType) => void;
};

function Favorite({ favList, setFavList, removeProduct }: FavCartType) {
  console.log("favorite", favList);
  return (
    <>
      <Box>
        <Typography component="h1" variant="h4">
          Favorite Recipe List
        </Typography>
      </Box>
      <Container
        sx={{
          mt: 10,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignContent: "space-evenly",
          gap: 5,
        }}
      >
        {favList.map((item) => (
          <FavItem
            key={item.idMeal}
            item={item}
            favList={favList}
            setFavList={setFavList}
            removeProduct={removeProduct}
          />
        ))}
      </Container>
    </>
  );
}

export default Favorite;
