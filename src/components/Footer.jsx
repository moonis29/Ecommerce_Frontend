import {
  AppBar,
  Box,
  CssBaseline,
  Link,
  ListItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <Box>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Stack direction={"row"} alignItems={"center"} spacing={1} my={3}>
            <Typography variant="h5"> MCommercy </Typography>
          </Stack>
          <Stack alignContent={"center"}>
            <ListItem>
              <Link href="#" target="_blank" sx={{ color: "white" }} px={2}>
                {" "}
                <InstagramIcon />
              </Link>
              <Link
                href="https://github.com/moonis29"
                target="_blank"
                sx={{ color: "white" }}
                px={2}
              >
                {" "}
                <GitHubIcon />
              </Link>
              <Link
                href="https://www.linkedin.com/in/syed-moonis-ali"
                target="_blank"
                sx={{ color: "white" }}
                px={2}
              >
                {" "}
                <LinkedInIcon />
              </Link>
              <Link href="#" target="_blank" sx={{ color: "white" }} px={2}>
                {" "}
                <YouTubeIcon />{" "}
              </Link>
            </ListItem>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Footer;
