import { Link } from "react-router-dom";
import { Box, Typography, Toolbar } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import Container from "@mui/material/Container";
import { ProductType } from "../App";
import ImageLogo from "../assets/chef.png";

type CountType = {
  favList: ProductType[];
};

const styles = {
  logo: {
    backgroundImage: `url(${ImageLogo})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "50px",
    width: "50px",
  },
};
export default function NavBar({ favList }: CountType) {
  return (
    <Container sx={{ position: "relative" }} className="nav-container">
      <Toolbar>
        <>
          <Typography
            style={styles.logo}
            variant="h6"
            sx={{ my: 2 }}
          ></Typography>
          <Box
            component="span"
            sx={{
              p: 1,
            }}
          >
            <Typography> YUMMY</Typography>
          </Box>
          <Box sx={{ position: "absolute", right: 0 }}>
            <List
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Link
                style={{ textDecoration: "none", color: "#6540a9" }}
                to="/"
                className="underline"
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText>HOME</ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link
                style={{ textDecoration: "none", color: "#6540a9" }}
                to="/recipe"
                className="underline"
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText>RECIPE</ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link
                style={{ textDecoration: "none", color: "#6540a9" }}
                to="/favorite"
                className="underline"
              >
                <ListItem sx={{ position: "relative" }} disablePadding>
                  <ListItemButton>
                    <ListItemText>
                      FAVORITE
                      <Box
                        component="span"
                        sx={{
                          p: 1,
                          position: "absolute",
                          top: "0",
                          fontSize: "10px",
                          color: "#6540a9",
                        }}
                      >
                        {favList.length}
                      </Box>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link
                style={{ textDecoration: "none", color: "#6540a9" }}
                to="/contact"
                className="underline"
              >
                <ListItem disablePadding>
                  <ListItemButton sx={{ textAlign: "center" }}>
                    <ListItemText>CONTACT</ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>
            </List>
          </Box>
        </>
      </Toolbar>
    </Container>
  );
}
