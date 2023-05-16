import React, { useState, Fragment } from "react";
import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Stack,
  ListItem,
  Button,
  Link,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerComponent from "./Drawer";

const Navbar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  console.log(isMatch);

  return (
    <Fragment>
      <Box>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Typography variant="h5">
              <Link
                component={RouterLink}
                to={"/"}
                sx={{ color: "white", textDecoration: "none" }}
              >
                MCommercy
              </Link>
            </Typography>
            {isMatch ? (
              <IconButton onClick={toggleDrawer}>
                <MenuIcon sx={{ color: "white" }} />
              </IconButton>
            ) : (
              <Stack direction="row" alignItems={"center"} spacing={1}>
                <Link component={RouterLink} to={"/"}>
                  <Button variant="text" sx={{ color: "white" }}>
                    Home
                  </Button>
                </Link>
                <Link component={RouterLink} to={"/signin"}>
                  <Button variant="text" sx={{ color: "white" }}>
                    SignIn
                  </Button>
                </Link>
                <Link component={RouterLink} to={"/cart"}>
                  <Button
                    variant="text"
                    sx={{ color: "white" }}
                    endIcon={<ShoppingCartIcon />}
                  >
                    Cart
                  </Button>
                </Link>
              </Stack>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <DrawerComponent
        isDrawerOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
      />
    </Fragment>
  );
};

export default Navbar;
