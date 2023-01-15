import React, { useEffect } from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import Avatar from "@mui/material/Avatar";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
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
  // const addProduct = (product: ProductType) => {
  //   let updateCartArray = [...cartList];
  //   let productIndex = updateCartArray.findIndex(
  //     (item) => item.idMeal === product.idMeal
  //   );
  //   if (productIndex !== -1) {
  //     updateCartArray[productIndex].quantity += 1;
  //     setCartList(updateCartArray);
  //   } else {
  //     let updateProduct = { ...product, quantity: 1 };
  //     setCartList([...updateCartArray, updateProduct]);
  //   }

  //   console.log("cartList", cartList);
  // };

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setInput(event.target.value);
  //   console.log(event.target.value, "input");
  // };

  // useEffect(() => {
  //   const results = product.filter((item) =>
  //     item.strMeal.toLowerCase().includes(input.toLowerCase())
  //   );
  //   setProduct(results);
  // }, [input]);
  return (
    <Box>
      <Typography>Recipes Page</Typography>
      <SearchForm setInput={setInput} />
      <Recipes product={product} setFavList={setFavList} favList={favList} />
    </Box>
  );
}

export default Recipe;
