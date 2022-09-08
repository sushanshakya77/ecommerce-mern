import {
  Alert,
  Button,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { Navigate, useNavigate, Link as RouterLink } from "react-router-dom";
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
  username: string;
  password: string;
};

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const navigate = useNavigate();
  const { authState, setAuthState } = useAuthentication();

  const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
    await axios.post("/api/auth/login", data).then(() => {
      console.log("login successfull");
      setAuthState("loggedIn");
      return <Alert severity="success">This is a success message!</Alert>;
    });
  };
  if (authState === "loggedIn") return <Navigate to="/" />;
  // else
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
        <CusTitle>Login</CusTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <CusLabel> Username </CusLabel> */}
          <div>
            <TextField
              label="Username"
              style={{ width: "70%", marginTop: "30px" }}
              error={!!errors.username}
              helperText={errors.username?.message}
              {...register("username", {
                required: "username is required",
              })}
            ></TextField>
            <TextField
              label="Password"
              style={{ width: "70%", marginTop: "30px" }}
              error={!!errors.password}
              helperText={errors.password?.message}
              {...register("password", {
                required: "password is required",
              })}
            ></TextField>
            <Typography
              style={{
                fontSize: "10px",
                marginLeft: "160px",
                marginTop: "8px",
                cursor: "pointer",
              }}
            >
              <Link>Forgot Password?</Link>
            </Typography>
            <div>
              <Button
                type="submit"
                variant="contained"
                style={{
                  width: "70%",
                  marginTop: "25px",
                  backgroundColor: "#0067ff",
                }}
              >
                Login
              </Button>
            </div>
          </div>
        </form>
        <Typography
          style={{
            fontSize: "10px",
            marginLeft: "160px",
            marginTop: "8px",
            cursor: "pointer",
          }}
        >
          <RouterLink to="/register">Dont have an account? Register</RouterLink>
        </Typography>
      </Container>
    </div>
  );
}

export default Login;
