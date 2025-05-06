import express from "express";
import WeatherController from "../Controller/Weather.js";

const routes = express.Router();

routes.post("/AddWeather", WeatherController.AddWeather); 
routes.get("/AllWeather", WeatherController.GetAllWethers);
routes.get("/GetFilteredWether", WeatherController.FilterByDate)
export default routes;
