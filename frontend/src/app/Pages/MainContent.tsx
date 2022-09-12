import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import MenuLists from "../Components/MenuLists";
import Navbar from "../Components/Navbar";
import PhoneNumber from "../Components/PhoneNumber";
import Search from "../Components/Search";

function MainContent() {
  return (
    <div>
      <Navbar />
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <MenuLists />
        </Grid>
        <Grid item xs={6}>
          <Search />
        </Grid>
        <Grid item xs={3}>
          <PhoneNumber />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Outlet />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}

export default MainContent;
