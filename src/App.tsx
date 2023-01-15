import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import "./App.css";
import Recipe from "./pages/Recipe";
import Favorite from "./pages/Favorite";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";

export type ProductType = {
  idMeal: number;
  strMeal: string;
  strCategory: string;
  strInstructions: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strMealThumb: string;
  quantity: number;
};

function App() {
  const [product, setProduct] = useState<ProductType[]>([]);
  const [favList, setFavList] = useState<ProductType[]>([]);
  const [input, setInput] = useState("");

  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`;
  useEffect(() => {
    function getData() {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setProduct(data.meals))
        .catch((error) => console.log(error));
    }
    getData();
  }, [url]);
  console.log(product, "product");

  const removeProduct = (el: ProductType) => {
    setFavList((current) =>
      current.filter((item) => item.idMeal !== el.idMeal)
    );
  };

  return (
    <div className="App">
      <NavBar favList={favList} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/recipe"
          element={
            <Recipe
              product={product}
              setFavList={setFavList}
              setInput={setInput}
              favList={favList}
            />
          }
        ></Route>
        <Route
          path="/favorite"
          element={
            <Favorite
              setFavList={setFavList}
              favList={favList}
              removeProduct={removeProduct}
            />
          }
        ></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
