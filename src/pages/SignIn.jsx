import {
  Box,
  Button,
  Divider,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const SignIn = () => {
  return (
    <Box>
      <Box
        component={"form"}
        noValidate
        my={4}
        sx={{
          width: {
            xs: "90%",
            md: "50%",
          },
        }}
        marginX={"auto"}
      >
        <Typography variant="h4" textAlign={"center"}>
          SignIn
        </Typography>
        <Typography variant="body1" textAlign={"center"}>
          You're just 1 step away
        </Typography>
        <Stack direction={"column"}>
          <Box my={4}>
            <TextField variant="outlined" label="Email" fullWidth />
          </Box>
          <Box>
            <TextField variant="outlined" label="Password" fullWidth />
          </Box>
          <Box my={3}>
            <Button variant="contained" fullWidth>
              SignIn
            </Button>
          </Box>
        </Stack>
        <Box mb={3}>
          <Divider />
        </Box>
        <Stack direction={"row"}>
          <Typography>Don't Have Account ? </Typography>
          <Link component={RouterLink} to={"/signup"}>
            Click here to Register
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default SignIn;
