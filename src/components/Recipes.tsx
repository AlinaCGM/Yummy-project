// import { Typography } from "@mui/material";
import React from "react";
import { ProductType } from "../App";
import { Container } from "@mui/material";
import RecipeItem from "./RecipeItem";

type Prop = {
  product: ProductType[];
  setFavList: React.Dispatch<React.SetStateAction<ProductType[]>>;
  favList: ProductType[];
};

function Recipes({ product, setFavList, favList }: Prop) {
  if (!product) {
    return <div>Sorry we have not got this recipe yet ! </div>;
  }

  return (
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
      {product.map((item) => (
        <RecipeItem
          key={item.idMeal}
          item={item}
          setFavList={setFavList}
          favList={favList}
        />
      ))}
    </Container>
  );
}

export default Recipes;
