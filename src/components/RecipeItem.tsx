import React, { useState } from "react";
import { ProductType } from "../App";
import { styled } from "@mui/material/styles";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

type Prop = {
  item: ProductType;
  setFavList: React.Dispatch<React.SetStateAction<ProductType[]>>;
  favList: ProductType[];
};
type ExpandMoreProps = IconButtonProps & {
  expand: boolean;
};


const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function RecipeItem({ item, setFavList, favList }: Prop) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function addFavHandler() {
    const newArr = favList.filter((el) => el.idMeal !== item.idMeal);

    const result = [...newArr, item];

    setFavList(result);
  }

  let isFavorite = favList.some((recipe) => recipe.idMeal === item.idMeal);
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {item.strMeal.charAt(0)}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={item.strMeal}
          subheader={item.strCategory}
        />
        <CardMedia
          component="img"
          height="194"
          image={item.strMealThumb}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            onClick={addFavHandler}
            sx={{ color: isFavorite ? red[500] : "primary" }}
            aria-label="add to favorites"
          >
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share"></IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Description:</Typography>
            <Typography paragraph>{item.strInstructions}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}

export default RecipeItem;
