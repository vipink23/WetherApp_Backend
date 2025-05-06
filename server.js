import express from "express";
import mongoose from "mongoose";
import connectDb from "./Db_Config/Dbconnection.js";
import bodyParser from "body-parser";
import cors from "cors";
import WeatherRoutes from "./Routes/Weather.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // You might also need this if sending JSON
app.use(cors());

mongoose.set("strictQuery", true);
connectDb();

app.use("/", WeatherRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
