import React from "react";

import { Paper, Typography, Box } from "@mui/material";
import Image from "../assets/food.jpeg";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image1 from "../assets/cake.avif";
import Image2 from "../assets/shrimp.avif";
import Image3 from "../assets/pizza.webp";
import Image4 from "../assets/salad.avif";
import Image5 from "../assets/chicken.avif";

const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "50vh",
  },
  image1: {
    backgroundImage: `url(${Image1})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100px",
    width: "100px",
    borderRadius: "50%",
  },
  image2: {
    backgroundImage: `url(${Image2})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100px",
    width: "100px",
    borderRadius: "50%",
  },
  image3: {
    backgroundImage: `url(${Image3})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100px",
    width: "100px",
    borderRadius: "50%",
  },
  image4: {
    backgroundImage: `url(${Image4})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100px",
    width: "100px",
    borderRadius: "50%",
  },
  image5: {
    backgroundImage: `url(${Image5})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100px",
    width: "100px",
    borderRadius: "50%",
  },
};

function Home() {
  return (
    <div>
      <Paper sx={{ width: "100%" }} style={styles.paperContainer}>
        {" "}
        <Typography
          variant="inherit"
          component="p"
          sx={{
            pl: 6,
            pt: 15,
            fontSize: {
              lg: 30,
              md: 20,
            },
          }}
        >
          HEALTHY DELICIOUS RECIPES
        </Typography>
      </Paper>
      <Typography
        variant="subtitle1"
        component="p"
        sx={{
          pl: 6,
          pt: 5,
          fontSize: {
            lg: 20,
            md: 10,
          },
        }}
      >
        POPULAR FOOD
      </Typography>
      <Typography
        variant="subtitle2"
        component="p"
        sx={{
          pl: 6,
          pt: 5,
          fontSize: {
            lg: 20,
            md: 10,
          },
        }}
      >
        We provide a variety of food and beverage recipes with height taste from
        famous chefs.
      </Typography>
      <Box sx={{ width: "90%", mx: "auto", mt: "50px" }}>
        <ImageList
          sx={{
            display: "flex",
            flexDirection: "inline",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          <ImageListItem cols={5} style={styles.image1}></ImageListItem>
          <ImageListItem cols={5} style={styles.image2}></ImageListItem>
          <ImageListItem cols={5} style={styles.image3}></ImageListItem>
          <ImageListItem cols={5} style={styles.image4}></ImageListItem>
          <ImageListItem cols={5} style={styles.image5}></ImageListItem>
        </ImageList>
      </Box>
    </div>
  );
}

export default Home;
