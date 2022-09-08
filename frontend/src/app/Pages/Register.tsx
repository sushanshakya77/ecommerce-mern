import { Button, Link, Paper, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useForm, SubmitHandler } from "react-hook-form";
import React from "react";
import axios from "axios";
import { Link as RouterLink } from "react-router-dom";
import { Navigate } from "react-router";
import { useAuthentication } from "../UseAuthentication/UseAuthentication";

const Container = styled(Paper)`
  text-align: center;
  padding-top: 30px;
  height: 600px;
  line-height: 60px;
  margin: auto;
  width: 350px;
`;

const CusTitle = styled(Typography)`
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  line-height: 80px;
  margin: auto;
  color: black;
`;

const CusLabel = styled(Typography)`
  text-align: left;
  font-size: 15px;
  font-weight: 500;
  line-height: 80px;
  margin-left: 20px;
  color: black;
`;

type Inputs = {
  fullName: string;
  email: string;
  username: string;
  password: string;
};

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data: any) =>
    axios
      .post("/api/auth/register", data)
      .then((response: any) => console.log(response));

  const { authState } = useAuthentication();

  if (authState === "loggedIn") return <Navigate to="/" />;
  return (
    <div
      style={{
        margin: "auto",
        // marginTop: "100px",
        zIndex: "99999",
        background:
          "url(https://ph-files.imgix.net/6ad0d46c-53a5-4c1a-850a-0a041d3931dc.png?auto=format&auto=compress&codec=mozjpeg&cs=strip)",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container elevation={8}>
        <CusTitle>Register</CusTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <CusLabel> Username </CusLabel> */}
          <div>
            <TextField
              label="Fullname"
              sx={{ width: "70%", marginTop: "10px" }}
              error={!!errors.fullName}
              helperText={errors.fullName?.message}
              {...register("fullName", {
                required: "fullName is required",
              })}
            ></TextField>
            <TextField
              label="Email"
              sx={{ width: "70%", marginTop: "30px" }}
              error={!!errors.email}
              helperText={errors.email?.message}
              {...register("email", {
                required: "email is required",
              })}
            ></TextField>
            <TextField
              label="Username"
              sx={{ width: "70%", marginTop: "30px" }}
              error={!!errors.username}
              helperText={errors.username?.message}
              {...register("username", {
                required: "username is required",
              })}
            ></TextField>
            <TextField
              label="Password"
              type="password"
              sx={{ width: "70%", marginTop: "30px" }}
              error={!!errors.password}
              helperText={errors.password?.message}
              {...register("password", {
                required: "password is required",
              })}
            ></TextField>
            <div style={{ display: "flex", width: "70%", margin: "auto" }}>
              <Typography
                sx={{
                  fontSize: "10px",

                  marginTop: "8px",
                  cursor: "pointer",
                }}
              >
                <Link>Forgot Password?</Link>
              </Typography>
              <div style={{ flexGrow: "1" }} />
              {/* <Link to="/login"> */}
              <Typography
                sx={{
                  fontSize: "10px",
                  marginTop: "8px",
                  cursor: "pointer",
                }}
              >
                <RouterLink to="/login">Login</RouterLink>
              </Typography>
              {/* </Link> */}
            </div>

            <div>
              <Button
                type="submit"
                variant="contained"
                style={{
                  width: "70%",
                  marginTop: "25px",
                  backgroundColor: "#0160ff",
                }}
              >
                Register
              </Button>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default Register;
