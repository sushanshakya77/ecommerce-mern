import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import session from "express-session";
import "./app/config/database";
import appRoutes from "./app/routes/index";

import { join } from "path";

const app = express();
app.use(express.static(join(__dirname, "public")));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const sess: session.SessionOptions = {
  secret: "process.env.SESSION_SECRET as string",
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 30000000000 },
};

app.use(session(sess));
app.use("/api", appRoutes);

const port = 5000;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on("error", console.error);
