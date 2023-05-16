import { Box, Button, Divider, Link, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
const SignUp = () => {
  return (
    <Box>
      <Box
        component={"form"}
        noValidate
        my={4}
        marginX={"auto"}
        sx={{
            width: {
              xs: "90%",
              md: "50%",
            },
          }}
      >
        <Typography variant="h4" textAlign={"center"}>
          Register Here
        </Typography>
        <Typography variant="body1" textAlign={"center"}>
          You're just 1 step away
        </Typography>
        <Stack direction={"column"}>
          <Box my={4}>
            <TextField variant="outlined" label="Username" fullWidth />
          </Box>
          <Box>
            <TextField variant="outlined" label="Email" fullWidth />
          </Box>
          <Box my={4}>
            <TextField variant="outlined" label="Password" fullWidth />
          </Box>
          <Box>
            <Button variant="contained" fullWidth>
              Register
            </Button>
          </Box>
        </Stack>
        <Box my={3}>
            <Divider/>
        </Box>
        <Box>
        <Stack direction={'row'}>
            <Typography>Already Have Account ?</Typography>
            <Link component={RouterLink} to={"/signin"}>Click here to Login</Link>
        </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
