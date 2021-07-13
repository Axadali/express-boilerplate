import express from "express";
import morgan from "morgan";
import dotENV from "dotenv";

// custom modules
import { DbConnect } from "./config/db.js";

// init express & ENV 
dotENV.config({path: "./config/.env"})
const app = express();

// DB connection
DbConnect();

// init third-party middleware
app.use(morgan('dev'));

app.listen(process.env.PORT, () => {
   console.log('Example app listening on port ' + process.env.PORT);
});
