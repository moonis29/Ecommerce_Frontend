import React from "react";
import { Button, Drawer, List, Box, Stack  } from "@mui/material";
import { Link } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

const DrawerComp = ({ isDrawerOpen, toggleDrawer }) => {
  return (
    <>
      <Box maxWidth={"350px"}>
        <Drawer
          sx={{ color: "white" }}
          anchor="right"
          open={isDrawerOpen}
          onClose={toggleDrawer}
        >
          <List component={Stack} direction={"column"}>
            <Link component={RouterLink} to={"/"}>
              <Button variant="text" sx={{ color: "black" }}>
                {" "}
                Home{" "}
              </Button>
            </Link>

            <Link component={RouterLink} to={"/signin"}>
              <Button variant="text" sx={{ color: "black" }}>
                {" "}
                Signin{" "}
              </Button>
            </Link>

            <Link component={RouterLink} to={"/signup"}>
              <Button variant="text" sx={{ color: "black" }}>
                {" "}
                Signup{" "}
              </Button>
            </Link>

            <Link component={RouterLink} to={"/cart"}>
              <Button variant="text" sx={{ color: "black" }}>
                {" "}
                Cart{" "}
              </Button>
            </Link>
          </List>
        </Drawer>
      </Box>
    </>
  );
};

export default DrawerComp;
