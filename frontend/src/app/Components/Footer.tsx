import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <>
      <CssBaseline />

      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Ecommerce
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
          voluptatum, vero illum culpa temporibus fugiat expedita. Earum velit
          qui maiores voluptate totam, dolore neque odit fugiat ea aut adipisci
          veritatis.
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </>
  );
}
