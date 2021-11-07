import express  from "express";
import {json, urlencoded} from "body-parser";
// import router from "./routes/index";
const app = express();

app.use(json());
app.use(urlencoded({ extended: true }))

export default app;